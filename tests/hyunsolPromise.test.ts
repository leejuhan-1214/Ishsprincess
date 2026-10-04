import test from 'node:test';
import assert from 'node:assert/strict';
import type {RState} from '../src/romanceTypes';
import {getHangoutScene} from '../src/data/romanceHangouts';
import {getMainScene} from '../src/data/romanceStory';
import {routeChoiceFlags} from '../src/data/romanceRouteTraits';
import {routeProgress} from '../src/data/romanceEndings';
import {newRomance,currentRomanceScene,chooseRomance,advanceRomance,restoreRomance} from '../src/engine/romance';

function finaleWithoutPromise():RState{
 const base=newRomance('다음만남',19);
 // Four completed chapters with attentive choices, but neither of the earlier
 // invitations. High scores and many memories do not stand in for a promise.
 const remembered=[[1,0],[2,0],[3,1],[4,2]] as const;
 return{...base,focus:'hyunsol',chapter:4,act:2,mode:'finale',sceneKey:'finale-hyunsol-exclude',verdict:'exclude',location:'garden',
  bonds:{...base.bonds,hyunsol:{affection:100,trust:100}},
  flags:[...base.flags,...remembered.flatMap(([chapter,option])=>[`read:hangout-hyunsol-${chapter}-v1`,`memory:hangout-hyunsol-${chapter}:${option}`])]};
}

test('high scores and attentive memories without an explicit invitation do not unlock Hyunsol romance',()=>{
 const s=finaleWithoutPromise(),progress=routeProgress(s,'hyunsol');
 assert.deepEqual(progress.chapters,[1,2,3,4]);
 assert.equal(progress.committed,false);
 assert.equal(progress.eligible,false);
 assert.ok(!currentRomanceScene(s).choices.some(choice=>choice.id==='romance'));
});

test('returning the calculator and arranging another meeting earns Hyunsol a promise and a no-pretext memory',()=>{
 const s=finaleWithoutPromise(),scene=getHangoutScene('hyunsol',s,'garden');
 const invitation=scene.choices.find(choice=>choice.text==='계산기는 돌려주고 다음 만남을 정한다.');
 assert.ok(invitation);
 const choosing:RState={...s,phase:'story',mode:'hangout',visitor:'hyunsol',sceneKey:`${scene.id}:visit-1`,line:scene.lines.length};
 const chosen=chooseRomance(choosing,invitation.id);
 assert.ok(chosen.flags.includes('route:hyunsol:5:no-pretext'));
 assert.ok(chosen.flags.includes('route:hyunsol:commitment'));
 assert.equal(routeProgress(chosen,'hyunsol').eligible,true);
 assert.deepEqual(invitation.effects,[{person:'hyunsol',affection:8,trust:7}]);
});

test('a completed saved calculator invitation unlocks the new-edition finale without rewriting its save',()=>{
 const base=finaleWithoutPromise();
 const s={...base,flags:[...base.flags,'read:hangout-hyunsol-5-v1','memory:hangout-hyunsol-5:0']};
 const saved=JSON.parse(JSON.stringify(s)),restored=restoreRomance(saved);
 assert.ok(restored);
 assert.deepEqual(restored,s);
 assert.ok(!restored.flags.includes('route:hyunsol:commitment'));
 assert.equal(routeProgress(restored,'hyunsol').committed,true);
 assert.ok(routeProgress(restored,'hyunsol').memories.includes('no-pretext'));
 assert.ok(currentRomanceScene(restored).choices.some(choice=>choice.id==='romance'));
 const scene=currentRomanceScene(restored),chosen=chooseRomance({...restored,line:scene.lines.length},'romance');
 assert.ok(chosen.flags.includes('mutual:hyunsol'));
});

test('an unread calculator memory cannot supply the missing promise or chapter',()=>{
 const base=finaleWithoutPromise(),s={...base,flags:[...base.flags,'memory:hangout-hyunsol-5:0']};
 const progress=routeProgress(s,'hyunsol');
 assert.equal(progress.committed,false);
 assert.ok(!progress.chapters.includes(5));
 assert.ok(!currentRomanceScene(s).choices.some(choice=>choice.id==='romance'));
});

test('the fifth-chapter promise does not replace early memories, focus, or score requirements',()=>{
 const base=finaleWithoutPromise(),flags=['edition:earned-routes','read:hangout-hyunsol-5-v1','memory:hangout-hyunsol-5:0'];
 assert.equal(routeProgress({...base,flags},'hyunsol').eligible,false);
 const complete={...base,flags:[...base.flags,...flags]};
 assert.equal(routeProgress({...complete,focus:null},'hyunsol').eligible,false);
 assert.equal(routeProgress({...complete,bonds:{...complete.bonds,hyunsol:{affection:63,trust:100}}},'hyunsol').eligible,false);
 assert.equal(routeProgress({...complete,bonds:{...complete.bonds,hyunsol:{affection:100,trust:59}}},'hyunsol').eligible,false);
});

test('existing third- and fourth-chapter Hyunsol invitations still grant a promise',()=>{
 const s=finaleWithoutPromise();
 const third=getMainScene(2,0,s).choices.find(choice=>choice.text==='다음 대출일에 같은 책을 빌려, 점심 장면부터 이야기하자고 한다.');
 assert.ok(third?.flags?.includes('route:hyunsol:commitment'));
 assert.ok(routeChoiceFlags('hyunsol',3,1,1).includes('route:hyunsol:commitment'));
 assert.ok(!routeChoiceFlags('hyunsol',4,2,0).includes('route:hyunsol:commitment'));
});

test('a previously chosen unresolved Hyunsol response still restores after the invitation correction',()=>{
 const before=finaleWithoutPromise(),oldScene=currentRomanceScene(before);
 const selected=chooseRomance({...before,line:oldScene.lines.length},'not-yet');
 // This records the pre-fix save: the completed fifth invitation was present,
 // but its promise was not yet understood by the ending requirements.
 const saved={...selected,flags:[...selected.flags,'read:hangout-hyunsol-5-v1','memory:hangout-hyunsol-5:0']};
 let restored=restoreRomance(JSON.parse(JSON.stringify(saved)));
 assert.ok(restored);
 assert.deepEqual(restored.response,selected.response);
 assert.equal(restored.line,selected.line);
 assert.strictEqual(chooseRomance(restored,'romance'),restored,'an answered finale must not reopen its choice');
 let guard=0;
 while(restored.phase==='story'){
  assert.ok(guard++<100);
  restored=advanceRomance(restored);
 }
 assert.equal(restored.ending,'unresolved:hyunsol:exclude');
});

test('other heroines keep their existing fifth-chapter meanings and fourth-chapter promises',()=>{
 const promises={world:1,taewoo:2,taehun:1,seoyul:2,juhan:1,minhyuk:2} as const;
 const lastMemory={world:'next-song',taewoo:'offstage',taehun:'shared-page',seoyul:'coauthor',juhan:'offline',minhyuk:'shared-plan'} as const;
 for(const person of Object.keys(promises) as (keyof typeof promises)[]){
  assert.deepEqual(routeChoiceFlags(person,4,1,0),[]);
  assert.deepEqual(routeChoiceFlags(person,4,1,1),[`route:${person}:5:${lastMemory[person]}`]);
  assert.ok(routeChoiceFlags(person,3,1,promises[person]).includes(`route:${person}:commitment`));
 }
 assert.deepEqual(routeChoiceFlags('junyeon',4,1,0),[]);
});
