import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {romancePeople,type RState} from '../src/romanceTypes';
import {getHangoutScene,hasHangoutAvailable} from '../src/data/romanceHangouts';
import {getMainScene} from '../src/data/romanceStory';
import {romanceArt,artPath,awareness} from '../src/data/romanceArt';
import {hasRomanceActivity,getRomanceActivity} from '../src/data/romanceActivities';
import {newRomance,startHangout,personLocation,advanceRomance,chooseRomance,currentRomanceScene,respondToActivity,completeRomanceActivity,conveneTrial,restoreRomance} from '../src/engine/romance';
import {memoryEvidence} from '../src/data/romanceMystery';

function finishDialogue(initial:RState){let s=initial,guard=0;while(s.phase==='story'){
 assert.ok(guard++<1000);const scene=currentRomanceScene(s);
 s=!s.response&&s.line>=scene.lines.length&&scene.choices.length?chooseRomance(s,scene.choices[0].id):advanceRomance(s);
}return s;}

test('eighty finite encounters have new follow-ups instead of a repeating v2 template',()=>{
 const titles=new Set<string>(),secondBodies=new Set<string>(),secondOptions=new Set<string>();
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const base={...newRomance('하루',5),chapter,phase:'map' as const,verdict:chapter===4?'forgive' as const:'pending' as const};
  const first=getHangoutScene(person,base,'classroom');
  const again={...base,flags:[`read:${first.id}`,`memory:hangout-${person}-${chapter+1}:0`]};
  const second=getHangoutScene(person,again,'classroom');
  assert.notEqual(first.id,second.id);assert.notEqual(first.title,second.title);
  assert.ok(second.lines.length>=8);assert.equal(second.choices.length,3);
  assert.ok(second.choices.every(choice=>choice.response.length>=3));
  for(const choice of second.choices)assert.ok(!first.choices.some(old=>old.text===choice.text),`${person}/${chapter}: repeated option`);
  secondBodies.add(second.lines.map(l=>l.text).join('\n'));secondOptions.add(second.choices.map(c=>c.text).join('\n'));
  titles.add(first.title);titles.add(second.title);
  const exhausted={...again,flags:[...again.flags,`read:${second.id}`]};
  assert.equal(hasHangoutAvailable(person,exhausted),false);
  assert.strictEqual(startHangout(exhausted,person,personLocation(exhausted,person)),exhausted,'no action point is spent on a recycled scene');
 }
 assert.equal(secondBodies.size,40);assert.equal(secondOptions.size,40);assert.equal(titles.size,80);
});

test('every heroine gets an actual line-triggered CG and all referenced originals exist',()=>{
 const found=new Set<string>();
 for(const person of romancePeople){const s=newRomance('봄',7);for(const l of getHangoutScene(person,s,'classroom').lines)if(l.art)found.add(l.art);}
 for(const art of romanceArt){
  assert.ok(found.has(art.id),`${art.id} must be encountered, not merely stored unused`);
  const path=new URL(`../public/${artPath(art.id)}`,import.meta.url);assert.ok(existsSync(path));
  const bytes=readFileSync(path);assert.equal(bytes.subarray(1,4).toString(),'PNG');
  assert.ok(bytes.readUInt32BE(16)>bytes.readUInt32BE(20),'event art is landscape');
 }
 assert.equal(romanceArt.length,7);
});

test('the first meeting earns an optional activity; follow-up is uninterrupted and skips cannot farm rewards',()=>{
 let s=finishDialogue(newRomance('선택',19));
 s=startHangout(s,'world',personLocation(s,'world'));assert.equal(s.phase,'story');
 const invited=finishDialogue(s);assert.equal(invited.phase,'activity-invite');
 const before=structuredClone(invited.bonds),skip=respondToActivity(invited,false);
 assert.equal(skip.phase,'map');assert.deepEqual(skip.bonds,before);
 const playing=respondToActivity(invited,true);assert.equal(playing.phase,'activity');
 const noReward=completeRomanceActivity(playing,0);assert.deepEqual(noReward.bonds,before);
 assert.strictEqual(completeRomanceActivity(noReward,3),noReward);
 assert.equal(hasRomanceActivity('world',0,2),false);
 const nextMap={...skip,visited:[],actions:2};
 const followup=finishDialogue(startHangout(nextMap,'world',personLocation(nextMap,'world')));assert.equal(followup.phase,'map');
 assert.ok(followup.flags.includes('read:hangout-world-1-v2'));
});

test('awareness grows from played scenes; a final trial needs records and an explicit convening step',()=>{
 const s=newRomance('기록',3),stages=['read:main-1-1','read:main-1-2','read:main-2-2','read:main-3-2','read:main-4-2','read:main-5-1'];
 assert.equal(new Set(stages.map(after=>awareness({...s,flags:[after]}).title)).size,6);
 assert.strictEqual(conveneTrial(s),s);
 const briefing:RState={...s,chapter:4,phase:'trial-briefing',sceneKey:'main-5-1',flags:['read:main-5-1'],clues:memoryEvidence.map(c=>c.id)};
 assert.strictEqual(conveneTrial({...briefing,clues:[]}).phase,'trial-briefing');
 assert.strictEqual(conveneTrial({...briefing,flags:[]}).phase,'trial-briefing');
 const trial=conveneTrial(briefing);assert.equal(trial.phase,'trial');assert.ok(trial.flags.includes('trial:convened'));
 assert.ok(restoreRomance(briefing));
 const opening=getMainScene(4,0,s).lines.map(l=>l.text).join('\n');
 assert.match(opening,/취소/);assert.match(opening,/선생님|담임/);assert.match(opening,/확인/);
});

test('chapters do not reskin the same activity prompt and main replies are not one universal template',()=>{
 for(const person of romancePeople){
  const activities=Array.from({length:5},(_,chapter)=>getRomanceActivity(person,chapter,1,3));
  assert.equal(new Set(activities.map(a=>a.invitation)).size,5);
  assert.equal(new Set(activities.map(a=>a.title)).size,5);
 }
 const replies=new Set<string>();
 for(let chapter=0;chapter<5;chapter++)for(let act=0;act<3;act++){
  const s={...newRomance('우리',1),chapter,act,focus:'world' as const};
  for(const c of getMainScene(chapter,act,s).choices)replies.add(c.response.map(l=>l.text).join('\n'));
 }
 assert.equal(replies.size,45,'each main-story choice has its own authored consequence');
});

test('old before-dialogue activity saves resume their unread conversation, not a silently completed date',()=>{
 const map=finishDialogue(newRomance('다시만나',11));
 const started=startHangout(map,'taewoo',personLocation(map,'taewoo'));
 const legacy={...started,phase:'activity' as const};
 const restored=restoreRomance(legacy);assert.ok(restored);
 assert.equal(restored.phase,'story');assert.equal(restored.line,0);assert.equal(restored.response,null);
 assert.ok(!restored.flags.includes(`read:${currentRomanceScene(started).id}`));
});

test('malformed saved line presentation is rejected instead of crashing the dialogue screen',()=>{
 const s=newRomance('저장',10);
 for(const extra of [{location:'missing-room'},{expression:'not-an-emotion'},{art:'../../private.png'}]){
  assert.equal(restoreRomance({...s,backlog:[{speaker:'world',text:'안녕.',...extra}]}),null);
 }
});

test('festival-eve choices keep every focused farewell partner through replies, effects and saved responses',()=>{
 const replies=new Set<string>();
 for(const person of romancePeople){
  const state:RState={...newRomance('약속',29),chapter:3,act:2,focus:person,sceneKey:'main-4-3',location:'walk'};
  const scene=getMainScene(3,2,state);
  const lastPerson=[...scene.lines].reverse().find(line=>romancePeople.includes(line.speaker as typeof person))?.speaker;
  assert.equal(lastPerson,person,'the farewell itself addresses the selected partner');
  assert.equal(scene.choices.length,3);
  for(const choice of scene.choices){
   assert.ok(choice.response.length>=3);
   const speakers=choice.response.filter(line=>romancePeople.includes(line.speaker as typeof person)).map(line=>line.speaker);
   assert.ok(speakers.length>0);
   assert.ok(speakers.every(speaker=>speaker===person),person+': response must not switch classmates');
   assert.ok(choice.effects?.length);
   assert.ok(choice.effects?.every(effect=>effect.person===person),person+': reward belongs to the addressed person');
   assert.ok(choice.response.every(line=>line.location==='walk'));
   replies.add(choice.response.map(line=>line.text).join('\n'));
   const applied=chooseRomance({...state,line:scene.lines.length},choice.id);
   assert.deepEqual(applied.response,choice.response);
   for(const other of romancePeople.filter(id=>id!==person))assert.deepEqual(applied.bonds[other],state.bonds[other]);
   assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(applied))),applied);
  }
 }
 assert.equal(replies.size,24,'eight partners each receive three authored results');
 const unfocused=getMainScene(3,2,newRomance('일상',29));
 assert.ok(unfocused.choices.some(choice=>choice.text.includes('내일 긴장하면')),'the unfocused group version remains available');
});
