import test from 'node:test';
import assert from 'node:assert/strict';
import {romancePeople,type RHero,type RState,type RChoice} from '../src/romanceTypes';
import {getEarnedFinaleScene,getEndingSummary,routeProgress,heroineRomanceEligible} from '../src/data/romanceEndings';
import {routeChoiceFlags} from '../src/data/romanceRouteTraits';
import {getFinaleScene} from '../src/data/romanceStory';
import {hasHangoutAvailable} from '../src/data/romanceHangouts';
import {memoryEvidence,romanceTrialRounds,romanceSequence} from '../src/data/romanceMystery';
import {newRomance,currentRomanceScene,advanceRomance,chooseRomance,nextRomance,selectFocus,startHangout,personLocation,respondToActivity,completeRomanceActivity,availableMemories,inspectMemory,submitArgument,continueArgument,submitReconstruction,setVerdict,restoreRomance} from '../src/engine/romance';

const heroes=romancePeople.filter((id):id is RHero=>id!=='junyeon');
function prepared(person:RHero):RState{
 const base=newRomance('다음약속',71),flags=[...base.flags];
 for(const chapter of [0,1,2,3]){
  const option=[0,1,2].find(index=>routeChoiceFlags(person,chapter,1,index).length)!;
  flags.push(`read:hangout-${person}-${chapter+1}-v1`,`memory:hangout-${person}-${chapter+1}:${option}`,...routeChoiceFlags(person,chapter,1,option));
 }
 flags.push(`route:${person}:commitment`);
 return{...base,focus:person,chapter:4,act:2,mode:'finale',sceneKey:`finale-${person}-exclude`,verdict:'exclude',flags,bonds:{...base.bonds,[person]:{affection:82,trust:78}},clues:memoryEvidence.map(clue=>clue.id)};
}
function read(initial:RState,policy:'earned'|'first'='earned',play=false):RState{
 let s=initial,guard=0;
 while(s.phase==='story'){
  assert.ok(guard++<500);
  const scene=currentRomanceScene(s);
  if(s.response===null&&s.line>=scene.lines.length&&scene.choices.length){
   const choose=(choices:RChoice[])=>policy==='first'?choices[0]:choices.find(choice=>choice.flags?.some(flag=>flag.endsWith(':commitment')))??choices.find(choice=>choice.flags?.some(flag=>/^route:/.test(flag)))??choices[0];
   s=chooseRomance(s,choose(scene.choices).id);
  }else s=advanceRomance(s);
 }
 if(s.phase==='activity-invite')s=play?completeRomanceActivity(respondToActivity(s,true),3):respondToActivity(s,false);
 return s;
}
function playToFinale(person:RHero,policy:'earned'|'first',play=false):RState{
 let s=newRomance('차근차근',19),guard=0;
 while(s.mode!=='finale'){
  assert.ok(guard++<120);
  if(s.phase==='story'){s=read(s,policy,play);continue;}
  if(s.phase==='focus'){s=selectFocus(s,person);continue;}
  if(s.phase==='trial'){
   for(const round of romanceTrialRounds){s=continueArgument(submitArgument(s,round.target,round.evidence));}
   s=read(submitReconstruction(s,romanceSequence.map(item=>item.id)),policy);
   assert.equal(s.phase,'verdict');s=setVerdict(s,'exclude');continue;
  }
  assert.equal(s.phase,'map');
  let clue=availableMemories(s)[0];
  while(clue){s=read(inspectMemory({...s,location:clue.location},clue.id),policy);clue=availableMemories(s)[0];}
  if(s.actions&&!s.visited.includes(person)&&hasHangoutAvailable(person,s))s=read(startHangout(s,person,personLocation(s,person)),policy,play);
  const next=nextRomance(s);assert.notStrictEqual(next,s);s=next;
 }
 return s;
}

test('each heroine has an earned playable romance without minigames; choosing every first answer with perfect games is insufficient',()=>{
 for(const person of heroes){
  const earned=playToFinale(person,'earned');
  assert.ok(heroineRomanceEligible(earned,person),`${person}: considered choices must have a reachable route without minigames: ${JSON.stringify(routeProgress(earned,person))}, ${JSON.stringify(earned.bonds[person])}`);
  const scene=currentRomanceScene(earned),choice=scene.choices.find(choice=>choice.id==='romance');assert.ok(choice);
  let selected=chooseRomance({...earned,line:scene.lines.length},choice.id);
  assert.ok(selected.flags.includes(`mutual:${person}`));
  selected=read(selected);assert.equal(selected.phase,'ending');assert.equal(selected.ending,`romance:${person}:exclude`);
  assert.equal(getEndingSummary(selected).image,`${person}-ending`);
  const first=playToFinale(person,'first',true);
  assert.equal(heroineRomanceEligible(first,person),false,`${person}: highest-score farming and the first button cannot imply commitment`);
  assert.ok(!currentRomanceScene(first).choices.some(choice=>choice.id==='romance'));
 }
});

test('every new romantic CG response and every subsequent ending cursor survive a version-two save',()=>{
 for(const person of heroes){
  const initial=prepared(person),scene=currentRomanceScene(initial);
  let s=chooseRomance({...initial,line:scene.lines.length},'romance'),guard=0;
  while(s.phase==='story'){
   assert.ok(guard++<100);
   const saved=restoreRomance(JSON.parse(JSON.stringify(s)));assert.deepEqual(saved,s,`${person}: CG response line ${s.line} must be saveable`);
   s=advanceRomance(s);
  }
  assert.equal(s.phase,'ending');assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(s))),s);
 }
});

test('route requirements are independent; high scores, repeated flags and a last-minute commitment cannot replace early memories',()=>{
 for(const person of heroes){
  const good=prepared(person);assert.equal(heroineRomanceEligible(good,person),true);
  const onlyNumbers={...good,flags:[`route:${person}:commitment`],bonds:{...good.bonds,[person]:{affection:100,trust:100}}};
  assert.equal(heroineRomanceEligible(onlyNumbers,person),false);
  assert.equal(heroineRomanceEligible({...good,focus:null},person),false);
  assert.equal(heroineRomanceEligible({...good,bonds:{...good.bonds,[person]:{affection:63,trust:100}}},person),false);
  assert.equal(heroineRomanceEligible({...good,bonds:{...good.bonds,[person]:{affection:100,trust:59}}},person),false);
  const noEarly=good.flags.filter(flag=>!new RegExp(`^(route:${person}:[12]:|memory:hangout-${person}-[12]:)`).test(flag));
  assert.equal(heroineRomanceEligible({...good,flags:noEarly},person),false);
  const one=good.flags.find(flag=>new RegExp(`^route:${person}:1:`).test(flag))!;
  assert.equal(heroineRomanceEligible({...good,flags:[...Array(50).fill(one),`route:${person}:commitment`]},person),false);
 }
});

test('a missed scene intention is recoverable in its authored follow-up and legacy memories retain their meaning',()=>{
 for(const person of heroes){
  const base=newRomance('회복',4);
  const flags=[...base.flags];
  for(const chapter of [0,1,2]){
   const missed=[0,1,2].find(index=>routeChoiceFlags(person,chapter,1,index).length===0)!;
   const recovery=[0,1,2].find(index=>routeChoiceFlags(person,chapter,2,index).length>0)!;
   flags.push(`read:hangout-${person}-${chapter+1}-v1`,`memory:hangout-${person}-${chapter+1}:${missed}`,`read:hangout-${person}-${chapter+1}-v2`,`memory:hangout-${person}-${chapter+1}:followup:${recovery}`);
  }
  const promise=[0,1,2].find(index=>routeChoiceFlags(person,3,1,index).includes(`route:${person}:commitment`))!;
  flags.push(`read:hangout-${person}-4-v1`,`memory:hangout-${person}-4:${promise}`);
  const old={...prepared(person),flags};
  assert.equal(heroineRomanceEligible(old,person),true,`${person}: actual pre-update choices should still count`);
  const forged={...old,flags:flags.filter(flag=>!flag.startsWith('read:hangout-'))};
  assert.equal(heroineRomanceEligible(forged,person),false,'unread legacy memory flags do not become milestones');
 }
});

test('romance, friendship, unresolved and distance are separate outcomes with unique substantial scenes',()=>{
 const scripts=new Set<string>(),titles=new Set<string>();
 for(const person of heroes){
  const good=prepared(person),scene=getEarnedFinaleScene(good);assert.ok(scene.lines.length>=16);
  const romance=scene.choices.find(choice=>choice.id==='romance')!,friend=scene.choices.find(choice=>choice.id==='friendship')!,distance=scene.choices.find(choice=>choice.id==='own-path')!;
  const pendingState={...good,flags:[...good.flags.filter(flag=>!flag.startsWith('route:')&&!flag.startsWith('memory:'))]},pending=getEarnedFinaleScene(pendingState);
  const wait=pending.choices.find(choice=>choice.id==='not-yet')!;assert.ok(wait);
  for(const [kind,choice] of [['romance',romance],['friendship',friend],['distance',distance],['unresolved',wait]] as const){
   assert.ok(choice.response.length>=7,`${person}/${kind}`);
   const text=choice.response.map(line=>line.text).join('\n');assert.ok(!scripts.has(text));scripts.add(text);
   assert.equal(choice.response.some(line=>line.art===`${person}-ending`),kind==='romance','romantic illustration belongs only to reciprocal romance');
   const selectedState=kind==='unresolved'?pendingState:good,selectedScene=kind==='unresolved'?pending:scene;
   const finish=read(chooseRomance({...selectedState,line:selectedScene.lines.length},choice.id));
   assert.equal(getEndingSummary(finish).kind,kind);
   const summary=getEndingSummary({...good,ending:`${kind}:${person}:exclude`});titles.add(summary.title);assert.equal(summary.kind,kind);assert.ok(summary.afterword.length>=2);
  }
 }
 assert.equal(scripts.size,28);assert.equal(titles.size,28);
});

test('an existing v2 finale preserves its original choice and reply cursor without reopening earned-route checks',()=>{
 const base=prepared('world');
 const legacy={...base,flags:[],line:0,response:null};
 const oldScene=getFinaleScene(legacy);legacy.sceneKey=oldScene.id;legacy.location=oldScene.location;
 const restored=restoreRomance(JSON.parse(JSON.stringify(legacy)));assert.ok(restored);assert.ok(restored.flags.includes('legacy:finale'));
 assert.deepEqual(currentRomanceScene(restored),oldScene);
 const choice=oldScene.choices.find(choice=>choice.id==='romance')!;
 const chosen=chooseRomance({...restored,line:oldScene.lines.length},choice.id);assert.notStrictEqual(chosen,restored);
 assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(chosen))),chosen);
 assert.equal(read(chosen).ending,'romance:world:exclude');
 const fresh=prepared('world'),freshRestored=restoreRomance(JSON.parse(JSON.stringify(fresh)));assert.ok(freshRestored);assert.ok(!freshRestored.flags.includes('legacy:finale'));
});

test('a pre-finale legacy save enters the new ending once and autosave does not swap it to the legacy script',()=>{
 const base=prepared('world');
 const old:RState={...base,phase:'map',mode:'main',sceneKey:'main-5-3',flags:[...base.flags.filter(flag=>flag!=='edition:earned-routes'),'read:main-5-3']};
 const entered=nextRomance(old);assert.equal(entered.mode,'finale');assert.ok(entered.flags.includes('edition:earned-routes'));
 const saved=restoreRomance(JSON.parse(JSON.stringify(entered)));assert.deepEqual(saved,entered);
 assert.ok(!saved!.flags.includes('legacy:finale'));assert.equal(currentRomanceScene(saved!).title,'아무에게도 공개하지 않은 앙코르');
});
