import test from 'node:test';
import assert from 'node:assert/strict';
import {romancePeople,type RPerson,type RState} from '../src/romanceTypes';
import {memoryEvidence} from '../src/data/romanceMystery';
import {hasHangoutAvailable} from '../src/data/romanceHangouts';
import {newRomance,currentRomanceScene,advanceRomance,chooseRomance,startHangout,personLocation,respondToActivity,completeRomanceActivity,restoreRomance,conveneTrial} from '../src/engine/romance';

function mapFor(chapter:number):RState{
 const state:RState={...newRomance('같이걷기',409),chapter,act:chapter===4?1:0,phase:'map',mode:'main',verdict:chapter===4?'forgive':'pending',clues:memoryEvidence.filter(clue=>clue.chapter<chapter).map(clue=>clue.id)};
 const scene=currentRomanceScene(state);
 return {...state,sceneKey:scene.id,location:scene.location,flags:[`read:${scene.id}`]};
}
function verifySave(state:RState){assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(state))),state,`${state.sceneKey} ${state.phase} ${state.line}: save round trip`);}
function readEncounter(state:RState,choiceIndex:number):RState{
 let current=state,guard=0;
 while(current.phase==='story'){
  assert.ok(guard++<150);
  verifySave(current);
  const scene=currentRomanceScene(current);
  current=current.response===null&&current.line>=scene.lines.length?chooseRomance(current,scene.choices[choiceIndex].id):advanceRomance(current);
 }
 verifySave(current);
 return current;
}
function meet(state:RState,person:RPerson,choiceIndex=0){return readEncounter(startHangout(state,person,personLocation(state,person)),choiceIndex);}

test('all forty first encounters finish their chosen dialogue before offering optional play, with valid saved cursors',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++)for(let choice=0;choice<3;choice++){
  const map=mapFor(chapter),started=startHangout(map,person,personLocation(map,person),true);
  assert.equal(started.phase,'story');
  const id=currentRomanceScene(started).id;
  const invited=readEncounter(started,choice);
  assert.equal(invited.phase,'activity-invite');
  assert.ok(invited.flags.some(flag=>flag.startsWith(`choice:${invited.sceneKey}:`)),'activity is never offered before an actual story choice');
  assert.ok(!invited.flags.includes(`read:${id}`),'encounter closes once, after accepting or declining its extra time');
  const skipped=respondToActivity(invited,false);
  assert.equal(skipped.phase,'map');assert.ok(skipped.flags.includes(`read:${id}`));
  assert.deepEqual(skipped.bonds,invited.bonds,'declining an optional activity does not undo a dialogue choice or change relationships');
  assert.equal(skipped.visits[person],1);assert.equal(skipped.actions,1);verifySave(skipped);
  assert.strictEqual(respondToActivity(skipped,false),skipped);
 }
});

test('accepting and leaving an activity awards nothing, while success awards once and preserves the selected dialogue',()=>{
 for(const person of romancePeople){
  const invited=meet(mapFor(0),person,1),playing=respondToActivity(invited,true);
  assert.equal(playing.phase,'activity');verifySave(playing);
  const left=completeRomanceActivity(playing,0),won=completeRomanceActivity(playing,3);
  assert.equal(left.phase,'map');assert.deepEqual(left.bonds,playing.bonds);
  assert.equal(won.phase,'map');assert.equal(won.bonds[person].affection,playing.bonds[person].affection+6);assert.equal(won.bonds[person].trust,playing.bonds[person].trust+9);
  assert.deepEqual(left.backlog,playing.backlog);assert.deepEqual(won.backlog,playing.backlog);
  assert.equal(won.visits[person],1);verifySave(won);verifySave(left);
  assert.strictEqual(completeRomanceActivity(won,3),won);
 }
});

test('second meetings have their own conversation and no extra-game loop, and a third meeting cannot farm repeated lines',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const invited=meet(mapFor(chapter),person),first=respondToActivity(invited,false);
  const nextPeriod:RState={...first,visited:[],actions:2};
  assert.equal(hasHangoutAvailable(person,nextPeriod),true);
  const secondStart=startHangout(nextPeriod,person,personLocation(nextPeriod,person));
  assert.match(secondStart.sceneKey,/-v2:visit-2$/);
  const second=readEncounter(secondStart,2);
  assert.equal(second.phase,'map','the second conversation must not end in another generic activity');
  assert.equal(second.visits[person],2);assert.equal(hasHangoutAvailable(person,second),false);
  const thirdPeriod:RState={...second,visited:[],actions:2};
  const third=startHangout(thirdPeriod,person,personLocation(thirdPeriod,person));
  assert.strictEqual(third,thirdPeriod,'an exhausted chapter has no third encounter');
  assert.equal(third.actions,2);assert.deepEqual(third.bonds,second.bonds);
 }
});

test('the final trial requires the class conversation and cannot start just because a save has eight clues',()=>{
 const base=mapFor(4),briefing:RState={...base,act:0,verdict:'pending',phase:'trial-briefing',sceneKey:'main-5-1',flags:[]};
 const unread=conveneTrial(briefing);assert.equal(unread.phase,'story');assert.ok(!unread.flags.includes('trial:convened'));
 const agreed={...briefing,flags:['read:main-5-1']};
 const discussion=conveneTrial(agreed);assert.equal(discussion.phase,'story');
 const trial=readEncounter(discussion,0);assert.equal(trial.phase,'trial');assert.ok(trial.flags.includes('trial:convened'));
 assert.strictEqual(conveneTrial({...agreed,clues:agreed.clues.slice(1)}).phase,'trial-briefing');
});
