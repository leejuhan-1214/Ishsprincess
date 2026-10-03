import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {romancePeople,type RState} from '../src/romanceTypes';
import {getHangoutScene,hasHangoutAvailable} from '../src/data/romanceHangouts';
import {getMainScene} from '../src/data/romanceStory';
import {getEarnedFinaleScene,heroineRomanceEligible} from '../src/data/romanceEndings';
import {romanceArt,artPath,awareness} from '../src/data/romanceArt';
import {hasRomanceActivity,getRomanceActivity} from '../src/data/romanceActivities';
import {newRomance,startHangout,personLocation,advanceRomance,chooseRomance,currentRomanceScene,respondToActivity,completeRomanceActivity,conveneTrial,restoreRomance} from '../src/engine/romance';
import {getDiscoveryScene,memoryEvidence} from '../src/data/romanceMystery';

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
 const firstDateArt=new Set<string>(),endingArt=new Set<string>(),discoveryArt=new Set<string>();
 for(const person of romancePeople){
  const first=getHangoutScene(person,newRomance('봄',7),'classroom');
  for(const line of first.lines)if(line.art){found.add(line.art);firstDateArt.add(line.art);}
  if(person==='junyeon')continue;
  // Build earned route flags from actual authored choices and completed scenes,
  // not invented milestones or affection alone. Three chapters span early/late.
  let state:RState={...newRomance('봄',7),chapter:4,focus:person,verdict:'forgive'};
  for(const chapter of [0,1,3]){
   const encounter=getHangoutScene(person,{...state,chapter},'classroom');
   const choice=encounter.choices.find(candidate=>chapter===3
    ?candidate.flags?.includes(`route:${person}:commitment`)
    :candidate.flags?.some(flag=>flag.startsWith(`route:${person}:${chapter+1}:`)));
   assert.ok(choice,`${person}/${chapter+1} needs an authored milestone choice`);
   state={...state,flags:[...state.flags,`read:${encounter.id}`,...choice.flags??[]]};
  }
  state={...state,bonds:{...state.bonds,[person]:{affection:100,trust:100}}};
  assert.ok(heroineRomanceEligible(state,person),`${person} fixture must earn the actual romance route`);
  const finale=getEarnedFinaleScene(state),romance=finale.choices.find(choice=>choice.id==='romance');
  assert.ok(romance,`${person} must receive an explicit mutual romance choice`);
  const ownEndingArt=romance.response.filter(line=>line.art).map(line=>line.art!);
  assert.ok(ownEndingArt.length>0,`${person} ending CG must be triggered by its playable answer`);
  assert.ok(ownEndingArt.every(id=>id===`${person}-ending`));
  for(const id of ownEndingArt){found.add(id);endingArt.add(id);}
  assert.ok(finale.choices.filter(choice=>choice.id!=='romance').every(choice=>choice.response.every(line=>!line.art)),'friendship/distance do not show mutual-romance CGs');
 }
 for(const clue of memoryEvidence){
  const state:RState={...newRomance('봄',7),chapter:clue.chapter,act:clue.unlockAct,location:clue.location,clues:[...clue.requires]};
  const discovery=getDiscoveryScene(clue.id,state);
  for(const line of discovery.lines)if(line.art){found.add(line.art);discoveryArt.add(line.art);}
 }
 assert.equal(firstDateArt.size,7,'all seven initial date illustrations have a scene trigger');
 assert.equal(endingArt.size,7,'all seven earned romance endings have distinct illustrations');
 assert.equal(discoveryArt.size,4,'each chapter observation has its own discovery illustration');
 for(const art of romanceArt){
  assert.ok(found.has(art.id),`${art.id} must be encountered, not merely stored unused`);
  const path=new URL(`../public/${artPath(art.id)}`,import.meta.url);assert.ok(existsSync(path));
  const bytes=readFileSync(path);assert.equal(bytes.subarray(1,4).toString(),'PNG');
  assert.ok(bytes.readUInt32BE(16)>bytes.readUInt32BE(20),'event art is landscape');
 }
 assert.equal(romanceArt.length,18);
 assert.equal(found.size,18,'every registered illustration is encountered, with no unregistered trigger');
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

test('awareness grows from played scenes; a final trial follows the class conversation rather than a briefing screen',()=>{
 const s=newRomance('기록',3),stages=['read:main-1-1','read:main-1-2','read:main-2-2','read:main-3-2','read:main-4-2','read:main-5-1'];
 assert.equal(new Set(stages.map(after=>awareness({...s,flags:[after]}).title)).size,6);
 assert.strictEqual(conveneTrial(s),s);
 const briefing:RState={...s,chapter:4,phase:'trial-briefing',sceneKey:'main-5-1',flags:['read:main-5-1'],clues:memoryEvidence.map(c=>c.id)};
 assert.strictEqual(conveneTrial({...briefing,clues:[]}).phase,'trial-briefing');
 assert.strictEqual(conveneTrial({...briefing,flags:[]}).phase,'story');
 const discussion=conveneTrial(briefing);assert.equal(discussion.phase,'story');
 const trial=finishDialogue(discussion);assert.equal(trial.phase,'trial');assert.ok(trial.flags.includes('trial:convened'));
 assert.equal(restoreRomance(briefing)?.phase,'story');
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
   assert.equal(scene.lines.at(-1)?.location,'hallway');
   assert.ok(choice.response.every(line=>line.location===scene.lines.at(-1)?.location));
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
