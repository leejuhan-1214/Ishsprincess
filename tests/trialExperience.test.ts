import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {romancePeople,type RState} from '../src/romanceTypes';
import {artById} from '../src/data/romanceArt';
import {memoryEvidence,romanceSequence,romanceTrialRounds} from '../src/data/romanceMystery';
import {trialComicPanels,trialPreludeDefinitions,trialSupportDefinitions} from '../src/data/romanceTrialExperience';
import {continueArgument,newRomance,restoreRomance,submitArgument,submitReconstruction} from '../src/engine/romance';
import {isPreludeComplete,isSupportComplete,normalizeTrialExperience,solveTrialPrelude,solveTrialSupport,trialPrelude,trialSupport,TRIAL_EXPERIENCE_EDITION} from '../src/engine/trialExperience';

function trial():RState{
 const state=newRomance('기록확인',317);
 return {...state,chapter:4,act:0,phase:'trial',mode:'main',sceneKey:'main-5-1',clues:memoryEvidence.map(clue=>clue.id),flags:[...state.flags,'read:main-5-1','trial:convened',TRIAL_EXPERIENCE_EDITION]};
}
function prelude(s:RState):RState{
 const result=solveTrialPrelude(s,trialPreludeDefinitions[s.trialRound].answer);
 assert.equal(result.ok,true);return result.state;
}
function evidence(s:RState):RState{
 const round=romanceTrialRounds[s.trialRound];
 const next=submitArgument(s,round.target,round.evidence);
 assert.equal(next.trialFeedback?.ok,true);return next;
}
function support(s:RState):RState{
 const result=solveTrialSupport(s,trialSupportDefinitions[s.trialRound].answer);
 assert.equal(result.ok,true);return result.state;
}
function nextRound(s:RState):RState{return continueArgument(support(evidence(prelude(s))));}

test('trial sidecar preserves the three canonical arguments and four illustrated record pairs',()=>{
 assert.deepEqual(trialPreludeDefinitions.map(item=>item.kind),['comparison','panic','alternative']);
 assert.equal(trialSupportDefinitions.length,romanceTrialRounds.length);
 assert.deepEqual(trialComicPanels.map(panel=>panel.id),romanceSequence.map(item=>item.id));
 assert.deepEqual(trialComicPanels.map(panel=>panel.art),['memory-time','memory-reservation','memory-meeting','memory-cues']);
 assert.deepEqual(trialComicPanels.flatMap(panel=>panel.records),memoryEvidence.map(clue=>clue.id));
 for(const panel of trialComicPanels){
  assert.ok(artById(panel.art));
  assert.ok(existsSync(new URL(`../public/assets/romance-cg/preview/${panel.art}.webp`,import.meta.url)));
  for(const id of panel.records)assert.ok(memoryEvidence.find(clue=>clue.id===id));
 }
 for(const stage of [...trialPreludeDefinitions,...trialSupportDefinitions]){
  assert.equal(new Set(stage.choices.map(choice=>choice.id)).size,stage.choices.length);
  assert.ok(stage.answer.every(id=>stage.choices.some(choice=>choice.id===id)));
 }
});

test('an enabled trial must compare, assert evidence and confirm cooperative support in that order',()=>{
 let s=trial();
 for(let round=0;round<romanceTrialRounds.length;round++){
  const argument=romanceTrialRounds[round];
  assert.equal(s.trialRound,round);
  assert.equal(trialPrelude(s)?.kind,trialPreludeDefinitions[round].kind);
  assert.equal(isPreludeComplete(s),false);
  assert.strictEqual(submitArgument(s,argument.target,argument.evidence),s,'evidence cannot skip the current comparison/question/explanation');
  assert.equal(trialSupport(s),null);
  s=prelude(s);
  assert.equal(isPreludeComplete(s),true);
  assert.equal(trialPrelude(s),null);
  assert.strictEqual(solveTrialPrelude(s,trialPreludeDefinitions[round].answer).state,s,'a repeated checkpoint cannot append flags');
  s=evidence(s);
  assert.equal(isSupportComplete(s),false);
  assert.ok(trialSupport(s));
  assert.strictEqual(continueArgument(s),s,'evidence feedback must remain until cooperative support is complete');
  s=support(s);
  assert.equal(isSupportComplete(s),true);
  assert.equal(trialSupport(s),null);
  assert.equal(s.trialRound,round);
  s=continueArgument(s);
  assert.equal(s.trialRound,round+1);
 }
 assert.equal(isPreludeComplete(s),true);
 assert.equal(isSupportComplete(s),true);
 assert.equal(trialPrelude(s),null);
 assert.equal(trialSupport(s),null);
 const reconstructed=submitReconstruction(s,romanceSequence.map(item=>item.id));
 assert.equal(reconstructed.mode,'revelation');
 assert.equal(reconstructed.verdict,'pending');
 assert.equal(reconstructed.version,2);
});

test('wrong choices are retryable without changes to bonds, evidence, feedback or the saved cursor',()=>{
 let s=trial();
 for(let round=0;round<romanceTrialRounds.length;round++){
  const presentation=trialPrelude(s)!;
  const definition=trialPreludeDefinitions[round];
  const wrong=presentation.choices.find(choice=>!definition.answer.includes(choice.id))!.id;
  for(const ids of [[],[wrong],['unknown'],[definition.answer[0],definition.answer[0]],null as unknown as string[]]){
   const result=solveTrialPrelude(s,ids);
   assert.equal(result.ok,false);assert.strictEqual(result.state,s);assert.ok(result.text.length>10);
  }
  s=evidence(prelude(s));
  const supportDefinition=trialSupportDefinitions[round];
  const wrongSupport=supportDefinition.choices.find(choice=>!supportDefinition.answer.includes(choice.id))!.id;
  const before=JSON.stringify(s),result=solveTrialSupport(s,[wrongSupport]);
  assert.equal(result.ok,false);assert.strictEqual(result.state,s);assert.equal(JSON.stringify(s),before);
  const next=support(s);
  assert.strictEqual(next.trialFeedback,s.trialFeedback,'cooperative feedback must never replace the evidence result');
  assert.deepEqual(next.bonds,s.bonds);assert.deepEqual(next.clues,s.clues);assert.equal(next.line,s.line);
  s=continueArgument(next);
 }
});

test('comparison accepts either pair order and presentation contains no answer keys or mutable authored arrays',()=>{
 const s=trial(),presentation=trialPrelude(s)!;
 assert.equal(presentation.requiredSelections,2);
 assert.equal('answer' in presentation,false);
 assert.deepEqual(presentation.choices.map(choice=>choice.id),presentation.sources.map(source=>source.id));
 const solved=solveTrialPrelude(s,[...trialPreludeDefinitions[0].answer].reverse());
 assert.equal(solved.ok,true);
 presentation.sources[0].text='changed';presentation.choices[0].label='changed';presentation.comic.records.pop();
 assert.notEqual(trialPrelude(s)!.sources[0].text,'changed');
 assert.notEqual(trialPrelude(s)!.choices[0].label,'changed');
 assert.equal(trialPrelude(s)!.comic.records.length,2);
 const cooperative=trialSupport(evidence(solved.state))!;
 assert.equal('answer' in cooperative,false);
 cooperative.choices[0].label='changed';
 assert.notEqual(trialSupport(evidence(solved.state))!.choices[0].label,'changed');
});

test('every focus and even zero bonds can complete every support checkpoint; closeness only changes the witness voice',()=>{
 for(const focus of [null,...romancePeople])for(const level of [0,40,80]){
  let s=trial();s={...s,focus,bonds:Object.fromEntries(romancePeople.map(id=>[id,{affection:level,trust:level}])) as RState['bonds']};
  for(let round=0;round<romanceTrialRounds.length;round++){
   s=evidence(prelude(s));
   const shown=trialSupport(s)!;
   assert.ok(shown);
   assert.equal(shown.witness.id,focus&&focus!=='junyeon'&&level>=40?focus:trialSupportDefinitions[round].defaultWitness);
   const before=s.bonds;s=support(s);assert.deepEqual(s.bonds,before);
   s=continueArgument(s);
  }
  assert.equal(s.trialRound,3);
 }
 const base=evidence(prelude({...trial(),focus:'hyunsol'}));
 const warm={...base,bonds:{...base.bonds,hyunsol:{affection:80,trust:80}}};
 assert.notEqual(trialSupport(base)!.witness.line,trialSupport(warm)!.witness.line);
 assert.deepEqual(trialSupport(base)!.choices,trialSupport(warm)!.choices);
});

test('sidecar checkpoints survive every v2 save boundary with cursor and evidence feedback intact',()=>{
 let s=trial();
 const roundtrip=(state:RState)=>{
  const restored=restoreRomance(JSON.parse(JSON.stringify(state)));
  assert.deepEqual(restored,state);return restored!;
 };
 for(let round=0;round<romanceTrialRounds.length;round++){
  s=roundtrip(s);s=roundtrip(prelude(s));s=roundtrip(evidence(s));s=roundtrip(support(s));s=roundtrip(continueArgument(s));
 }
 assert.equal(s.trialRound,3);
});

test('old in-trial v2 saves retain basic evidence flow without sidecar checkpoints or cursor reset',()=>{
 let s=trial();s={...s,trialRound:1,flags:s.flags.filter(flag=>flag!==TRIAL_EXPERIENCE_EDITION)};
 const restored=restoreRomance(JSON.parse(JSON.stringify(s)))!;
 assert.deepEqual(restored,s);assert.equal(trialPrelude(restored),null);assert.equal(trialSupport(restored),null);
 assert.equal(isPreludeComplete(restored),true);assert.equal(isSupportComplete(restored),true);
 assert.strictEqual(solveTrialPrelude(restored,trialPreludeDefinitions[1].answer).state,restored);
 s=continueArgument(evidence(restored));assert.equal(s.trialRound,2);
});

test('future, unknown and unsupported checkpoint flags cannot be carried into later rounds',()=>{
 let s=trial();s={...s,flags:[...s.flags,'trial-experience:prelude:1','trial-experience:support:1','trial-experience:prelude:2','trial-experience:support:2','trial-experience:support:0','trial-experience:unrecognized']};
 const normalized=normalizeTrialExperience(s);
 assert.deepEqual(normalized.flags,trial().flags);
 s=prelude(s);
 assert.deepEqual(s.flags.filter(flag=>flag.startsWith('trial-experience:')),['trial-experience:prelude:0']);
 s=support(evidence(s));
 s={...s,flags:[...s.flags,'trial-experience:prelude:1','trial-experience:support:1']};
 const restored=restoreRomance(JSON.parse(JSON.stringify(s)))!;
 assert.ok(!restored.flags.includes('trial-experience:prelude:1'));
 s=continueArgument(s);
 assert.equal(s.trialRound,1);assert.equal(isPreludeComplete(s),false);assert.ok(trialPrelude(s));
});

test('out-of-phase or noncanonical states cannot solve a checkpoint or use a future flag to unlock reconstruction',()=>{
 const base=trial();
 const invalid:RState[]=[
  {...base,version:1 as 2},{...base,chapter:3},{...base,act:1},{...base,phase:'map'},
  {...base,verdict:'forgive'},{...base,clues:base.clues.slice(1)},
  {...base,clues:[...base.clues.slice(1),'memory-02']},{...base,trialRound:-1},{...base,trialRound:0.5},{...base,trialRound:4},
  {...base,flags:base.flags.filter(flag=>flag!=='read:main-5-1')},
  {...base,flags:base.flags.filter(flag=>flag!=='trial:convened')},
  {...base,trialRound:1,flags:[...base.flags,'trial-experience:prelude:1']},
 ];
 for(const s of invalid){
  assert.equal(trialPrelude(s),null);assert.equal(trialSupport(s),null);
  assert.equal(isPreludeComplete(s),false);assert.equal(isSupportComplete(s),false);
  assert.strictEqual(solveTrialPrelude(s,trialPreludeDefinitions[0].answer).state,s);
  assert.strictEqual(solveTrialSupport(s,trialSupportDefinitions[0].answer).state,s);
 }
 const skipped={...base,trialRound:3};
 assert.strictEqual(submitReconstruction(skipped,romanceSequence.map(item=>item.id)),skipped);
 assert.equal(isPreludeComplete(nextRound(base)),false);
});
