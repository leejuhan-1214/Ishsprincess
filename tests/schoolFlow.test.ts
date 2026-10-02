import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {commonActs,commonScenes} from '../src/data/common';
import {caseFiles,schoolCharacters,type ExtraId} from '../src/data/classroomMystery';
import {activeScene,activeLines,newGame,choose,blankMeta,isGameState,restoreGame,type GameState} from '../src/engine/game';
import {advanceWithCases,nextDayWithCases,visitWithCases,selectRouteWithCases,requiredCase,ensureRequiredCase,applyClassroom,schoolLocation,startSchoolBond,completeSchoolActivity} from '../src/engine/schoolFlow';
import {caseLines,continueCase,collectEvidence,beginTrial,rebut,addSequence,submitSequence,vote,explainMotive,closeNotebook,bondLines,continueBond,selectBondChoice,newClassroomState,bondAvailable,type ClassroomState} from '../src/engine/classroomMystery';
import {schoolActivity} from '../src/data/extraDaily';

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
 for(const clue of file.evidence)s=collectEvidence(s,clue.id);
 s=beginTrial(s);
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
