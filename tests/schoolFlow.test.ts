import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {commonActs,commonScenes} from '../src/data/common';
import {caseFiles,schoolCharacters,bondEpisodes,type ExtraId} from '../src/data/classroomMystery';
import {locations,locationById} from '../src/data/characters';
import {investigationScenes} from '../src/data/investigation';
import {activeScene,activeLines,newGame,choose,blankMeta,isGameState,restoreGame,locationOf,type GameState} from '../src/engine/game';
import {advanceWithCases,nextDayWithCases,visitWithCases,selectRouteWithCases,requiredCase,ensureRequiredCase,applyClassroom,schoolLocation,startSchoolBond,completeSchoolActivity,investigationFor,availableDiscoveries,discoverEvidence,goToTrial,caseModalRequired} from '../src/engine/schoolFlow';
import {caseLines,continueCase,rebut,addSequence,submitSequence,vote,explainMotive,openCase,closeNotebook,bondLines,continueBond,selectBondChoice,newClassroomState,bondAvailable,currentBondEpisode,type ClassroomState} from '../src/engine/classroomMystery';
import {schoolActivity} from '../src/data/extraDaily';
import {hangoutScene,type TalkContext} from '../src/engine/characterAI';
import {episodeScene} from '../src/engine/episodes';
import {cutsceneEpisodes} from '../src/data/cutsceneEpisodes';
import {caseAfterthought,schoolAfterthought,investigationThread} from '../src/data/storyContinuity';

function playAct(g:GameState):GameState{
 const id=activeScene(g).id;let steps=0;
 while(g.phase==='story'&&activeScene(g).id===id){
  assert.ok(steps++<200,'act must complete');
  g=!g.response&&g.line===activeLines(g).length?choose(g,0):advanceWithCases(g,blankMeta());
 }
 return g;
}
function solve(g:GameState):GameState{
 const file=requiredCase(g)!;assert.ok(file);
 let s=g.classroom!;
 while(s.cases[file.id].phase==='opening')s=continueCase(s);
 g=applyClassroom(g,s);
 assert.equal(g.classroom?.active,null,'opening returns to campus');
 while(g.classroom!.cases[file.id].clues.length<file.evidence.length){
  const discoveries=availableDiscoveries(g);assert.ok(discoveries.length,'there must be a reachable next lead');
  for(const discovery of discoveries){
   const clue=file.evidence.find(e=>e.id===discovery.evidenceId)!;
   g=discoverEvidence(g,clue.id,clue.location);
  }
 }
 g=goToTrial(g);s=g.classroom!;
 assert.equal(s.cases[file.id].phase,'debate');
 assert.strictEqual(nextDayWithCases(g),g,'the mandatory trial cannot be skipped');
 assert.strictEqual(visitWithCases(g,'world'),g,'a trial is not a free-action phase');
 for(const debate of file.debates){s=rebut(s,debate.target,debate.evidence);s=continueCase(s);}
 for(const event of file.sequence)s=addSequence(s,event);
 s=submitSequence(s);s=vote(s,file.culprit);s=explainMotive(s,file.motive);
 while(s.cases[file.id].phase==='closing')s=continueCase(s);
 return applyClassroom(g,closeNotebook(s));
}
function finishBond(s:ClassroomState):ClassroomState{
 let guard=0;while(s.active?.kind==='bond'){
  assert.ok(guard++<100);
  s=s.active.choice===null&&s.active.line>=bondLines(s).length?selectBondChoice(s,0):continueBond(s);
 }return s;
}
function safeMap(chapter=0):GameState{
 const g={...newGame('지도검증',37),chapter,phase:'map' as const,classroom:newClassroomState()};
 for(const file of caseFiles)g.classroom.cases[file.id].phase='solved';
 return g;
}
test('five chapters have three substantial acts, distinct decisions and exactly one case each',()=>{
 assert.equal(commonScenes.length,5);assert.equal(caseFiles.length,5);
 assert.deepEqual(caseFiles.map(file=>file.chapter),[0,1,2,3,4]);
 assert.equal(new Set(caseFiles.map(file=>file.culprit)).size,5);
 const decisions=new Set<string>();
 for(const [chapter,acts] of commonActs.entries()){
  assert.equal(acts.length,3);assert.ok(acts.reduce((n,s)=>n+s.lines.length,0)>=95);
  for(const step of [0,1,2]){
   const g={...newGame('문장검증',5),chapter,mainStep:step};
   assert.equal(activeScene(g).choices.length,4);
   for(const choice of activeScene(g).choices){assert.ok(!decisions.has(choice.text));decisions.add(choice.text);}
  }
 }
 assert.equal(decisions.size,60);
});
test('actual five-chapter play forces every case, prevents skipping it, then unlocks final free time and routes',()=>{
 let g=newGame('전체검증',27);
 for(let chapter=0;chapter<5;chapter++){
  assert.equal(g.chapter,chapter);
  for(let step=0;step<3;step++){
   assert.equal(g.mainStep,step);assert.equal(requiredCase(g),null);
   g=playAct(g);
  }
  assert.equal(g.phase,'map');assert.equal(requiredCase(g)?.id,caseFiles[chapter].id);
  assert.equal(g.classroom?.active?.kind,'case');assert.equal(g.actions,3);
  for(const blocked of [nextDayWithCases(g),visitWithCases(g,'world'),selectRouteWithCases(g,'none')]){
   assert.equal(blocked.chapter,chapter);assert.equal(blocked.phase,'map');assert.equal(blocked.actions,3);
  }
  const trust=g.stats.world.trust;g=solve(g);
  assert.equal(requiredCase(g),null);assert.equal(g.classroom?.active,null);
  assert.equal(g.stats.world.trust,Math.min(100,trust+2));
  assert.deepEqual(applyClassroom(g,g.classroom!).stats,g.stats,'reward once');
  assert.ok(isGameState(g));g=nextDayWithCases(g);
 }
 assert.equal(g.phase,'routeSelect');assert.equal(g.chapter,4);
});
test('mandatory case and every internal act survive saving without changing rewards or position',()=>{
 let g=newGame('저장검증',5);
 for(let step=0;step<3;step++){
  g=advanceWithCases(g,blankMeta());
  const restored=restoreGame(JSON.parse(JSON.stringify(g)))!;assert.ok(restored);assert.deepEqual(restored,g);
  g=playAct(restored);
 }
 assert.equal(requiredCase(g)?.id,'credit');
 const restored=restoreGame(JSON.parse(JSON.stringify(g)))!;assert.ok(restored);
 assert.deepEqual(ensureRequiredCase(restored),restored);assert.ok(caseLines(restored.classroom!).length);
});
test('all eight classmates share moving locations and the additional two consume exactly one common action',()=>{
 const g=safeMap();assert.equal(schoolCharacters.length,8);
 for(const id of ['juhan','minhyuk'] as ExtraId[]){
  const location=schoolLocation(g,id),started=startSchoolBond(g,id,location);
  assert.equal(started.actions,2);assert.equal(started.classroom?.active?.kind,'bond');
  assert.notEqual(schoolLocation(g,id),schoolLocation({...g,actions:2},id));
  assert.strictEqual(startSchoolBond(started,id,location),started);
  assert.strictEqual(startSchoolBond(g,id,location==='gate'?'computer':'gate'),g);
  const returned=applyClassroom(started,finishBond(started.classroom!));
  assert.equal(returned.actions,2);assert.equal(returned.classroom?.active,null);
  assert.strictEqual(startSchoolBond(returned,id,schoolLocation(returned,id)),returned);
 }
});
test('school activity has meaningful shuffled challenges and awards only once after save/reload',()=>{
 for(const id of ['juhan','minhyuk'] as ExtraId[]){
  const g=safeMap(),where=schoolLocation(g,id);
  const started=startSchoolBond(g,id,where,true),saved=restoreGame(JSON.parse(JSON.stringify(started)))!;
  assert.ok(saved);const game=schoolActivity(id,0,where,37);
  assert.equal(game.rounds.length,3);
  for(const round of game.rounds){assert.equal(round.mode,'order');if(round.mode==='order'){assert.notDeepEqual(round.items,round.answer);assert.deepEqual([...round.items].sort(),[...round.answer].sort());}}
  const result=completeSchoolActivity(saved,3);assert.equal(result.actions,2);assert.equal(result.classroom?.activity,undefined);
  assert.equal(result.classroom!.bonds[id].trust,saved.classroom!.bonds[id].trust+10);
  assert.strictEqual(completeSchoolActivity(result,3),result);
 }
});
test('daily gap dialogue does not skip the final personal episode and keeps an existing ending',()=>{
 let g=safeMap();
 for(const chapter of [0,1,2]){
  g={...g,chapter,actions:3};g=startSchoolBond(g,'juhan',schoolLocation(g,'juhan'));
  g=applyClassroom(g,finishBond(g.classroom!));
 }
 assert.equal(g.classroom!.bonds.juhan.visits,3);
 g={...g,chapter:3,actions:3};g=startSchoolBond(g,'juhan',schoolLocation(g,'juhan'));
 assert.equal(g.classroom?.active?.kind==='bond'?g.classroom.active.episode:-1,4);
 g=applyClassroom(g,finishBond(g.classroom!));assert.equal(g.classroom!.bonds.juhan.visits,3);
 g={...g,chapter:4,actions:3};g=startSchoolBond(g,'juhan',schoolLocation(g,'juhan'));
 assert.equal(g.classroom?.active?.kind==='bond'?g.classroom.active.episode:-1,3);
 g=applyClassroom(g,finishBond(g.classroom!));assert.equal(g.classroom!.bonds.juhan.ending,'true');
});
test('old fourteen-chapter common saves migrate once while preserving relationships and adding new cases',()=>{
 const legacy={...newGame('이전플레이',43),chapter:11,line:40,classroom:newClassroomState()};delete legacy.storyRevision;delete legacy.mainStep;
 delete legacy.classroom.cases.score;delete legacy.classroom.cases.poem;
 const migrated=restoreGame(JSON.parse(JSON.stringify(legacy)))!;assert.ok(migrated);
 assert.equal(migrated.chapter,4);assert.equal(migrated.mainStep,0);assert.equal(migrated.line,0);
 assert.deepEqual(migrated.stats,legacy.stats);assert.ok(migrated.classroom?.cases.score);assert.ok(migrated.classroom?.cases.poem);
 assert.deepEqual(restoreGame(migrated),migrated);
 assert.equal(legacy.chapter,11,'source untouched');
});
test('new map uses common residents instead of detached extra-character contact cards',()=>{
 const app=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
 assert.match(app,/CampusMap/);assert.doesNotMatch(app,/new-classmates/);
 assert.match(app,/residents\(selectedPlace\)\.map/);assert.match(app,/이야기하기/);assert.match(app,/함께 작업하기/);
 const css=readFileSync(new URL('../src/campus.css',import.meta.url),'utf8');assert.match(css,/map-screen/);assert.match(css,/campus-place-title/);
});

test('legacy extra-character visit dates migrate with the calendar without changing the source',()=>{
 const legacy={...newGame('이전방문',43),chapter:3,classroom:newClassroomState()};delete legacy.storyRevision;delete legacy.mainStep;
 legacy.classroom.bonds.juhan.days=[0,1,3];
 legacy.classroom.bonds.minhyuk.days=[2];
 const restored=restoreGame(legacy)!;assert.ok(restored);
 assert.equal(restored.chapter,1);
 assert.deepEqual(restored.classroom!.bonds.juhan.days,[0,1]);
 assert.deepEqual(restored.classroom!.bonds.minhyuk.days,[0]);
 assert.equal(bondAvailable(restored.classroom!,'juhan',1),false,'same new chapter stays visited');
 assert.equal(bondAvailable(restored.classroom!,'juhan',3),true,'old day 3 cannot lock the new fourth chapter');
 assert.deepEqual(legacy.classroom.bonds.juhan.days,[0,1,3]);
 assert.deepEqual(restoreGame(restored),restored,'migration applies only once');
 const broken=structuredClone(legacy);broken.classroom.bonds.juhan.days=[14];
 assert.equal(restoreGame(broken),null,'invalid dates must not become a valid visit');
});

function investigationMap(chapter=0):GameState{
 let g:GameState={...newGame('자유조사',37),chapter,phase:'map',classroom:newClassroomState()};
 for(const file of caseFiles.filter(file=>file.chapter<chapter))g.classroom!.cases[file.id].phase='solved';
 g=ensureRequiredCase(g);
 let state=g.classroom!;
 while(requiredCase(g)&&state.cases[requiredCase(g)!.id].phase==='opening')state=continueCase(state);
 return applyClassroom(g,state);
}
test('every case has a reachable multi-location discovery graph rather than one bulk evidence screen',()=>{
 for(const file of caseFiles){
  const data=investigationScenes[file.id];assert.ok(data);assert.ok(data.briefing.length>0);
  assert.deepEqual([...data.discoveries.map(d=>d.evidenceId)].sort(),[...file.evidence.map(e=>e.id)].sort());
  assert.ok(new Set(file.evidence.map(e=>e.location)).size>=2,'each incident explores multiple places');
  assert.ok(data.discoveries.some(d=>d.requires.length>0),'later leads must depend on earlier findings');
  for(const discovery of data.discoveries){
   assert.ok(discovery.spot&&discovery.lead&&discovery.lines.length>0);
   assert.equal(new Set(discovery.requires).size,discovery.requires.length);
   for(const id of discovery.requires){assert.notEqual(id,discovery.evidenceId);assert.ok(file.evidence.some(e=>e.id===id));}
  }
  let g=investigationMap(file.chapter),guard=0;
  while(g.classroom!.cases[file.id].clues.length<file.evidence.length){
   assert.ok(guard++<file.evidence.length);
   const available=availableDiscoveries(g);assert.ok(available.length,'no circular or unreachable prerequisite');
   for(const d of available)g=discoverEvidence(g,d.evidenceId,file.evidence.find(e=>e.id===d.evidenceId)!.location);
  }
  assert.equal(goToTrial(g).classroom!.cases[file.id].phase,'debate');
 }
});
test('discovery is location-gated, prerequisite-gated, unique and save-safe even with zero relationship actions',()=>{
 for(const file of caseFiles){
  let g={...investigationMap(file.chapter),actions:0};
  assert.equal(caseModalRequired(g),false);assert.equal(investigationFor(g)?.id,file.id);
  assert.strictEqual(ensureRequiredCase(g),g);assert.strictEqual(goToTrial(g),g,'trial cannot begin before collecting clues');
  assert.strictEqual(nextDayWithCases(g),g,'free roaming is not permission to skip the unresolved incident');
  assert.strictEqual(selectRouteWithCases(g,'none'),g);
  const locked=investigationScenes[file.id].discoveries.find(d=>d.requires.length>0)!;
  assert.strictEqual(discoverEvidence(g,locked.evidenceId,file.evidence.find(e=>e.id===locked.evidenceId)!.location),g);
  const first=availableDiscoveries(g)[0],evidence=file.evidence.find(e=>e.id===first.evidenceId)!;
  const wrongLocation=evidence.location==='gate'?'computer':'gate';
  assert.strictEqual(discoverEvidence(g,evidence.id,wrongLocation),g);
  assert.strictEqual(discoverEvidence(g,'nonexistent-evidence',evidence.location),g);
  assert.equal(availableDiscoveries(g,wrongLocation).some(d=>d.evidenceId===evidence.id),false);
  const before=structuredClone(g);g=discoverEvidence(g,evidence.id,evidence.location);
  assert.equal(g.actions,0);assert.equal(g.classroom!.cases[file.id].clues.length,1);assert.equal(before.classroom!.cases[file.id].clues.length,0,'input not mutated');
  assert.strictEqual(discoverEvidence(g,evidence.id,evidence.location),g,'same object gives no second reward');
  const saved=restoreGame(JSON.parse(JSON.stringify(g)))!;assert.ok(saved);assert.deepEqual(saved,g);
  g=saved;
  while(g.classroom!.cases[file.id].clues.length<file.evidence.length){
   const d=availableDiscoveries(g)[0];assert.ok(d);
   g=discoverEvidence(g,d.evidenceId,file.evidence.find(e=>e.id===d.evidenceId)!.location);
  }
  assert.equal(g.actions,0);assert.deepEqual(g.stats,before.stats,'finding evidence does not farm relationship rewards');
  const trial=goToTrial(g);assert.equal(caseModalRequired(trial),true);assert.equal(trial.classroom?.active?.kind,'case');
  assert.equal(trial.classroom!.cases[file.id].phase,'debate');assert.ok(isGameState(trial));
  assert.equal(investigationFor(trial),null);assert.deepEqual(availableDiscoveries(trial),[]);
  assert.strictEqual(discoverEvidence(trial,evidence.id,evidence.location),trial,'no hidden map collection during trial');
 }
});
test('normal romance visits and both additional classmates remain available during investigation',()=>{
 let g=investigationMap();
 const available=availableDiscoveries(g);assert.ok(available.length);
 g=visitWithCases(g,'world');assert.equal(g.segment,'hangout');assert.equal(g.phase,'story');
 assert.equal(investigationFor(g),null,'objects cannot be inspected during a dialogue');
 assert.deepEqual(availableDiscoveries(g),[]);
 let guard=0;
 while(g.segment==='hangout'){
  assert.ok(guard++<200);g=!g.response&&g.line===activeLines(g).length?choose(g,0):advanceWithCases(g,blankMeta());
 }
 assert.equal(g.phase,'map');assert.equal(g.actions,2);assert.equal(g.classroom?.active,null);
 assert.equal(investigationFor(g)?.id,'credit');assert.deepEqual(g.classroom!.cases.credit.clues,[]);
 for(const id of ['juhan','minhyuk'] as ExtraId[]){
  g=startSchoolBond(g,id,schoolLocation(g,id));assert.equal(g.classroom?.active?.kind,'bond');
  assert.equal(caseModalRequired(g),false);assert.equal(investigationFor(g),null);
  assert.strictEqual(nextDayWithCases(g),g,'a bond conversation must finish before returning to the map');
  assert.strictEqual(visitWithCases(g,'taehun'),g,'no overlapping core-character conversation');
  g=applyClassroom(g,finishBond(g.classroom!));assert.equal(g.classroom?.active,null);
 }
 assert.equal(g.actions,0);assert.equal(investigationFor(g)?.id,'credit');
 assert.ok(availableDiscoveries(g).length,'romance action exhaustion must not lock the investigation');
});
test('previously collected evidence and a saved open investigation notebook remain valid without duplicate collection',()=>{
 for(const file of caseFiles){
  let g=investigationMap(file.chapter);
  const first=availableDiscoveries(g)[0],evidence=file.evidence.find(e=>e.id===first.evidenceId)!;
  g=discoverEvidence(g,evidence.id,evidence.location);
  g={...g,classroom:openCase(g.classroom!,file.id,g.chapter)};
  const saved=restoreGame(JSON.parse(JSON.stringify(g)))!;assert.ok(saved);assert.deepEqual(saved,g);
  assert.equal(caseModalRequired(saved),false,'a previously open evidence viewer is closeable');
  assert.equal(investigationFor(saved),null,'the map is not interactable behind the open notebook');
  assert.strictEqual(visitWithCases(saved,'world'),saved);
  g=applyClassroom(saved,closeNotebook(saved.classroom!));
  assert.deepEqual(g.classroom!.cases[file.id].clues,[evidence.id]);
  assert.equal(availableDiscoveries(g).some(d=>d.evidenceId===evidence.id),false);
  assert.strictEqual(discoverEvidence(g,evidence.id,evidence.location),g);
  assert.equal(investigationFor(g)?.id,file.id);
 }
});
test('investigation conversations and special moments do not recite the solved-case aftermath',()=>{
 for(const chapter of [0,1,2,3,4])for(const id of ['world','junyeon','hyunsol','taewoo','taehun','seoyul'] as const){
  const g=investigationMap(chapter),ctx:TalkContext={id,chapter,location:schoolLocation(g,id),visit:0,stats:{affection:80,trust:75,jealousy:0,special:30},flags:[],seed:37,investigating:true};
  const scene=hangoutScene(ctx),resolved=hangoutScene({...ctx,investigating:false});
  assert.equal(scene.lines[1].text,investigationThread(chapter).detail);
  assert.equal(scene.lines[2].text,caseAfterthought(id,chapter,[],true));
  assert.notEqual(scene.lines[2].text,resolved.lines[2].text);
  assert.equal(scene.choices[0].response[1].text,schoolAfterthought(id,chapter,80,75,[],true));
  assert.doesNotMatch(scene.lines.concat(scene.choices[0].response).map(l=>l.text).join(' '),/첫 재판 뒤에도|점수 표를 고쳤다|내 복구 요청에 책임이 있는 것까지 적었어|협박 발송기를 분리했다|확인할 자료는 끝났어/);
  const episode=cutsceneEpisodes.find(e=>e.character===id)!;
  const moment=episodeScene(episode,ctx);
  assert.match(moment.lines[0].text,/조사 사이에/);assert.doesNotMatch(moment.lines[0].text,/그날의 일이 끝난 뒤/);
  assert.notEqual(moment.lines[1].text,episodeScene(episode,{...ctx,investigating:false}).lines[1].text);
 }
});
test('actual visits pass the pending incident context into dialogue and restore the aftermath only after solving',()=>{
 const g=investigationMap(),pending=visitWithCases(g,'world');
 assert.equal(pending.segment,'hangout');
 assert.ok(activeLines(pending)[0].text.includes(investigationThread(0).detail)||activeLines(pending)[1].text===investigationThread(0).detail,'both regular and special conversations must use pending-case context');
 const resolved=visitWithCases(solve(g),'world');
 assert.ok(!activeLines(resolved).some(l=>l.text===caseAfterthought('world',0,[],true)));
});
test('post-case authored bond episodes are reserved instead of lost to a pre-trial filler visit',()=>{
 let g=investigationMap(4);g.classroom!.bonds.juhan={affection:80,trust:80,visits:3,days:[0,1,2,3],ending:null};
 assert.equal(bondAvailable(g.classroom!,'juhan',4),false,'final confession is gated by the echo case');
 assert.strictEqual(startSchoolBond(g,'juhan',schoolLocation(g,'juhan')),g);
 assert.equal(g.actions,3);assert.deepEqual(g.classroom!.bonds.juhan.days,[0,1,2,3]);
 g=solve(g);assert.equal(bondAvailable(g.classroom!,'juhan',4),true);
 g=startSchoolBond(g,'juhan',schoolLocation(g,'juhan'));
 assert.equal(g.classroom?.active?.kind==='bond'?g.classroom.active.episode:-1,3);
 g=applyClassroom(g,finishBond(g.classroom!));assert.equal(g.classroom!.bonds.juhan.ending,'true');
});
test('an investigation-time daily bond preserves every save cursor without claiming the incident is over',()=>{
 let g=investigationMap(3);g.classroom!.bonds.juhan={affection:65,trust:60,visits:3,days:[0,1,2],ending:null};
 g=startSchoolBond(g,'juhan',schoolLocation(g,'juhan'));
 assert.equal(g.classroom?.active?.kind==='bond'?g.classroom.active.episode:-1,4);
 assert.match(bondLines(g.classroom!)[0].text,/현장 조사/);
 assert.ok(bondLines(g.classroom!).some(l=>l.text.includes('조사를 마친 뒤')));
 let guard=0;
 while(g.classroom?.active?.kind==='bond'){
  assert.ok(guard++<30);
  const restored=restoreGame(JSON.parse(JSON.stringify(g)))!;assert.ok(restored);assert.deepEqual(restored,g);
  const state=restored.classroom!,a=state.active!;
  g=applyClassroom(restored,a.kind==='bond'&&a.choice===null&&a.line>=bondLines(state).length?selectBondChoice(state,0):continueBond(state));
 }
 assert.equal(g.actions,2);assert.equal(g.classroom!.bonds.juhan.visits,3);assert.equal(investigationFor(g)?.id,'poem');
});
test('investigation witnesses occupy their discoverable scene, move with clues and return to the normal timetable afterward',()=>{
 const original=investigationMap();
 assert.equal(schoolLocation(original,'seoyul'),'band');assert.equal(schoolLocation(original,'minhyuk'),'classroom');
 for(const file of caseFiles)for(const seed of [0,37,991]){
  let g={...investigationMap(file.chapter),seed},guard=0;
  while(g.classroom!.cases[file.id].clues.length<file.evidence.length){
   assert.ok(guard++<file.evidence.length);
   const available=availableDiscoveries(g);assert.ok(available.length,'witness scheduling cannot deadlock a clue graph');
   for(const discovery of available){
    const evidence=file.evidence.find(e=>e.id===discovery.evidenceId)!;
    if(discovery.witness){
     assert.equal(schoolLocation(g,discovery.witness),evidence.location);
     for(const actions of [3,2,1,0])assert.equal(schoolLocation({...g,actions},discovery.witness),evidence.location,'a clue witness stays for inspection even when romance time changes');
     for(const peer of available.filter(d=>d.witness===discovery.witness))assert.equal(file.evidence.find(e=>e.id===peer.evidenceId)!.location,evidence.location,'no witness is scheduled in two places at once');
    }
   }
   const next=available[0],evidence=file.evidence.find(e=>e.id===next.evidenceId)!;
   g=discoverEvidence(g,evidence.id,evidence.location);
   const saved=restoreGame(JSON.parse(JSON.stringify(g)))!;assert.ok(saved);
   for(const person of schoolCharacters)assert.equal(schoolLocation(saved,person.id),schoolLocation(g,person.id),'reload does not reroll the witness meeting');
  }
  const resolved=solve(g);
  for(const id of ['world','junyeon','hyunsol','taewoo','taehun','seoyul'] as const)assert.equal(schoolLocation(resolved,id),locationOf(resolved,id));
  const neutral=safeMap(file.chapter);
  for(const id of ['juhan','minhyuk'] as const)assert.equal(schoolLocation(resolved,id),schoolLocation({...neutral,seed:g.seed,actions:g.actions},id));
 }
});
test('parallel witness leads in different rooms form a deterministic scene queue instead of a teleporting NPC',()=>{
 let g=investigationMap(),file=caseFiles[0];
 const witness=file.evidence.find(e=>e.id==='credit-witness')!,source=file.evidence.find(e=>e.id==='credit-source')!;
 g=discoverEvidence(g,witness.id,witness.location);g=discoverEvidence(g,source.id,source.location);
 assert.equal(schoolLocation(g,'juhan'),'media');
 assert.ok(availableDiscoveries(g,'media').some(d=>d.evidenceId==='credit-change'));
 assert.equal(availableDiscoveries(g,'computer').some(d=>d.evidenceId==='credit-queue'),false);
 assert.strictEqual(discoverEvidence(g,'credit-queue','computer'),g,'a witness does not answer from a different room');
 g=discoverEvidence(g,'credit-change','media');
 assert.equal(schoolLocation(g,'juhan'),'computer');
 assert.ok(availableDiscoveries(g,'computer').some(d=>d.evidenceId==='credit-queue'));
});
test('map witness conversations and activities use the displayed location for core and additional classmates',()=>{
 const g=investigationMap();assert.equal(schoolLocation(g,'seoyul'),'band');
 const chat=visitWithCases(g,'seoyul');assert.equal(chat.phase,'story');assert.equal(chat.visitLocation,'band');assert.equal(activeScene(chat).location,'band');assert.ok(isGameState(chat));
 const work=visitWithCases(g,'seoyul','band');assert.equal(work.phase,'activity');assert.equal(work.visitLocation,'band');assert.equal(activeScene(work).location,'band');
 assert.strictEqual(visitWithCases(g,'seoyul','classroom'),g,'the old timetable room cannot start a witness visit');
 const leader=startSchoolBond(g,'minhyuk','classroom');assert.equal(leader.classroom?.active?.kind,'bond');
 assert.equal(leader.classroom?.active?.kind==='bond'?leader.classroom.active.location:null,'classroom');assert.equal(leader.actions,2);
 const leaderWork=startSchoolBond(g,'minhyuk','classroom',true);assert.equal(leaderWork.classroom?.activity?.location,'classroom');assert.ok(isGameState(leaderWork));
 assert.strictEqual(startSchoolBond(g,'minhyuk','auditorium'),g,'an extra witness also uses the shown meeting place');
});
test('all authored extra-character conversations fit the actual meeting place without changing any save cursor or recalled location',()=>{
 const snapshot=JSON.stringify(bondEpisodes);
 for(const id of ['juhan','minhyuk'] as ExtraId[])for(const episode of [0,1,2,3])for(const place of locations){
  const base=bondEpisodes[id][episode],chapter=base.chapter,state=newClassroomState();
  for(const file of caseFiles)state.cases[file.id].phase='solved';
  state.bonds[id]={affection:80,trust:75,visits:episode,days:[chapter],ending:null};
  state.active={kind:'bond',id,episode,line:0,choice:null,location:place.id};
  const local=currentBondEpisode(state);
  assert.equal(local.lines.length,base.lines.length);assert.deepEqual(local.lines.map(l=>l.speaker),base.lines.map(l=>l.speaker));
  const narration=local.lines.find(l=>l.speaker==='narrator')!;assert.ok(narration.text.includes(place.name));
  assert.deepEqual(local.choices.map(c=>c.reply.length),base.choices.map(c=>c.reply.length));
  assert.deepEqual(local.choices.map(c=>[c.affection,c.trust]),base.choices.map(c=>[c.affection,c.trust]));
  if(id==='juhan'&&episode===0){assert.match(narration.text,/챙겨 온 노트북/);assert.doesNotMatch(narration.text,/컴퓨터실의 끝자리/);}
  if(id==='juhan'&&episode===1){assert.doesNotMatch(local.lines[6].text,/화면이 꺼지자 컴퓨터실/);assert.match(local.lines[6].text,/노트북 화면/);}
  if(id==='juhan'&&episode===3)assert.doesNotMatch(local.lines[4].text,/책상 위로/);
  if(id==='minhyuk'&&episode===0){assert.doesNotMatch(local.lines[0].text,/교실 문 옆/);assert.doesNotMatch(local.lines[4].text,/태우가 웃었다/);assert.equal(local.choices[0].reply[0].text,base.choices[0].reply[0].text,'future classroom tour is not the current meeting place');}
  if(id==='minhyuk'&&episode===2){assert.equal(local.lines[0].text,base.lines[0].text,'the missing-classroom incident stays a memory of the classroom');assert.doesNotMatch(local.lines[3].text,/책상에|의자를/);}
  const g:GameState={...newGame('장소저장',37),chapter,phase:'map',actions:2,classroom:state};
  for(let line=0;line<=base.lines.length;line++){
   const cursor={...g,classroom:{...state,active:{...state.active,line}}};
   const restored=restoreGame(JSON.parse(JSON.stringify(cursor)))!;assert.ok(restored);assert.deepEqual(restored,cursor);
  }
  for(const [choice,branch] of local.choices.entries())for(let line=0;line<=branch.reply.length;line++){
   const cursor={...g,classroom:{...state,active:{...state.active,choice,line}}};
   const restored=restoreGame(JSON.parse(JSON.stringify(cursor)))!;assert.ok(restored);assert.deepEqual(restored,cursor);
  }
  const legacy={...state,active:{kind:'bond' as const,id,episode,line:0,choice:null}};
  assert.deepEqual(currentBondEpisode(legacy),base,'no-location legacy episodes retain their authored text');
 }
 assert.equal(JSON.stringify(bondEpisodes),snapshot,'runtime staging cannot rewrite shared story data');
});
test('portable daily checklist scenes outside the classroom distinguish past inspection photos from the current setting',()=>{
 for(const place of locations){
  const state=newClassroomState();state.cases.poem.phase='investigation';
  state.bonds.minhyuk={affection:65,trust:60,visits:4,days:[3],ending:'true'};
  state.active={kind:'bond',id:'minhyuk',episode:4,line:0,choice:null,location:place.id};
  const scene=currentBondEpisode(state);assert.equal(scene.lines.length,6);
  assert.ok(scene.lines[0].text.includes(locationById[place.id].name));assert.match(scene.lines[0].text,/현장 조사/);
  if(place.id==='classroom')assert.match(scene.lines[3].text,/실제 교실에는 의자가/);
  else{assert.match(scene.lines[3].text,/조금 전 돌아본 교실의 확인 사진/);assert.match(scene.choices[0].text,/확인 사진과 점검표/);assert.doesNotMatch(scene.choices[0].text,/현장을 함께 돌아보고/);}
  const g:GameState={...newGame('사진점검',37),chapter:3,phase:'map',actions:2,classroom:state};
  for(let line=0;line<=scene.lines.length;line++){
   const cursor={...g,classroom:{...state,active:{...state.active,line}}};
   assert.ok(restoreGame(JSON.parse(JSON.stringify(cursor))));
  }
 }
});
