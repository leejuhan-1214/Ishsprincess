import test from 'node:test';
import assert from 'node:assert/strict';
import {romancePeople,type RPerson,type RState,type RChoice} from '../src/romanceTypes';
import {memoryEvidence,romanceTrialRounds,romanceSequence} from '../src/data/romanceMystery';
import {getHangoutScene} from '../src/data/romanceStory';
import {hasHangoutAvailable} from '../src/data/romanceHangouts';
import {respondToActivity,conveneTrial,pendingMainEvents} from '../src/engine/romance';
import {newRomance,currentRomanceScene,romanceLines,advanceRomance,chooseRomance,nextRomance,selectFocus,startHangout,completeRomanceActivity,availableMemories,inspectMemory,submitArgument,continueArgument,submitReconstruction,setVerdict,restoreRomance,personLocation,choiceOrder,junyeonCap,junyeonRomanceEligible} from '../src/engine/romance';
import {ROMANCE_STORAGE_PREFIX,saveRomance,loadRomance,listRomanceSaves} from '../src/engine/romanceStorage';

function read(s:RState,prefer?:(choices:RChoice[],s:RState)=>RChoice,activity:'skip'|'play'|'pause'='skip'):RState{
 let guard=0;
 while(s.phase==='story'){
  assert.ok(guard++<1500,'dialogue must have a reachable continuation');
  const scene=currentRomanceScene(s);
  if(s.mode==='finale')assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(s))),s,'finale dialogue and chosen replies keep a valid save cursor');
  if(s.response===null&&s.line>=scene.lines.length&&scene.choices.length){
   const choice=prefer?.(scene.choices,s)??scene.choices[0],next=chooseRomance(s,choice.id);
   assert.notStrictEqual(next,s,`${scene.id}: the presented choice must be selectable`);s=next;
  }else s=advanceRomance(s);
 }
 if(s.phase==='activity-invite'&&activity!=='pause')s=activity==='play'?completeRomanceActivity(respondToActivity(s,true),3):respondToActivity(s,false);
 return s;
}
function collectOpen(s:RState):RState{
 let clue=availableMemories(s)[0];
 while(clue){s=read(inspectMemory({...s,location:clue.location},clue.id));clue=availableMemories(s)[0];}
 return s;
}
function hangout(s:RState,id:RPerson,activity=true):RState{
 const start=startHangout(s,id,personLocation(s,id),activity);assert.notStrictEqual(start,s);
 return read(start,undefined,activity?'play':'skip');
}
function reachTrial(focus:RPerson|null='world'):RState{
 let s=newRomance('다음약속',31),guard=0;
 while(s.phase!=='trial'){
  assert.ok(guard++<60,'the only trial should be reachable');
  if(s.phase==='story'){s=read(s);continue;}
  if(s.phase==='trial-briefing'){s=conveneTrial(s);continue;}
  if(s.phase==='focus'){s=selectFocus(s,focus);continue;}
  assert.equal(s.phase,'map');s=collectOpen(s);
  const target=focus??'world';
  if(s.actions&&!s.visited.includes(target)&&hasHangoutAvailable(target,s))s=hangout(s,target);
  if(s.actions&&target!=='junyeon'&&!s.visited.includes('junyeon')&&hasHangoutAvailable('junyeon',s))s=hangout(s,'junyeon');
  const next=nextRomance(s);assert.notStrictEqual(next,s,'collecting both chapter memories releases the next chapter');s=next;
 }
 return s;
}
function resolve(s:RState,verdict:'exclude'|'forgive'):RState{
 for(const round of romanceTrialRounds){s=submitArgument(s,round.target,round.evidence);assert.equal(s.trialFeedback?.ok,true);s=continueArgument(s);}
 s=submitReconstruction(s,romanceSequence.map(item=>item.id));assert.equal(s.mode,'revelation');
 s=read(s);assert.equal(s.phase,'verdict');return setVerdict(s,verdict);
}
function finish(s:RState):RState{
 let guard=0;
 while(s.phase!=='ending'){
  assert.ok(guard++<15,'the festival, repair and finale must finish');
  if(s.phase==='story'){s=read(s,choices=>choices.find(c=>c.flags?.some(f=>f.startsWith('romance:')))??choices[0]);continue;}
  assert.equal(s.phase,'map');s=nextRomance(s);
 }
 return s;
}

test('new romance rejects blank names, uses a new save version and never opens early trials',()=>{
 for(const name of ['','  ','1234567890123','<이름>'])assert.throws(()=>newRomance(name,7));
 const s=newRomance('이름',7);assert.equal(s.version,2);assert.equal(s.name,'이름');assert.equal(s.phase,'story');
 assert.strictEqual(setVerdict(s,'forgive'),s);assert.strictEqual(selectFocus(s,'juhan'),s);assert.strictEqual(submitArgument(s,'x','memory-01'),s);
 assert.equal(restoreRomance({...s,version:1}),null);
});

test('all seven heroine routes and both Junyeon focuses preserve five chapters and exactly one final trial',()=>{
 for(const person of romancePeople)for(const verdict of ['exclude','forgive'] as const){
  const before=reachTrial(person);assert.equal(before.chapter,4);assert.equal(before.act,0);assert.equal(before.clues.length,8);
  for(let chapter=1;chapter<=4;chapter++)for(let act=1;act<=3;act++)assert.ok(before.flags.includes(`read:main-${chapter}-${act}`));
  assert.equal(before.verdict,'pending');assert.ok(before.bonds.junyeon.affection<=70);
  const afterVerdict=resolve(before,verdict);assert.equal(afterVerdict.act,1);assert.equal(afterVerdict.phase,'story');
  assert.equal(afterVerdict.bonds.junyeon.affection,before.bonds.junyeon.affection,'forgiveness changes the cap, not the stored value');
  const final=finish(afterVerdict);assert.equal(final.phase,'ending');assert.equal(final.focus,person);
  assert.ok(final.flags.includes('read:main-5-2'));assert.ok(final.flags.includes('read:main-5-3'));
  assert.equal(final.repairDone,verdict==='forgive');
  if(verdict==='forgive')for(let step=1;step<=4;step++)assert.ok(final.flags.includes(`read:repair-${step}`));
  if(person==='junyeon'&&verdict==='forgive'){
   assert.ok(final.bonds.junyeon.affection>=85&&final.bonds.junyeon.trust>=70,'four repair weeks allow earned romantic eligibility');
   assert.ok(junyeonRomanceEligible(final));assert.ok(final.flags.includes('romance:junyeon'));
  }
  if(person!=='junyeon')assert.ok(!final.flags.includes('romance:junyeon'),'forgiveness cannot replace the chosen heroine');
  assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(final))),final);
 }
});

test('memories require their actual scene, place and prerequisite but never action points or affection',()=>{
 let s=read(newRomance('기억',18));
 assert.deepEqual(availableMemories(s),[]);
 assert.strictEqual(inspectMemory(s,'memory-01'),s);
 s=read(nextRomance(s));
 const first=availableMemories(s)[0];assert.ok(first);
 const witness=first.lines.find(line=>romancePeople.includes(line.speaker as RPerson))!.speaker as RPerson;
 assert.equal(personLocation(s,witness),first.location,'the friend in the field scene is also at that place on the map');
 assert.strictEqual(inspectMemory({...s,location:'gate'},first.id).phase,'map');
 const where={...s,actions:0,location:first.location},opened=inspectMemory(where,first.id);
 assert.equal(opened.phase,'story');assert.equal(opened.clues.includes(first.id),false);
 assert.equal(restoreRomance({...opened,response:[]}),null,'a fabricated completed reply cannot bypass reading a memory');
 assert.strictEqual(chooseRomance(opened,'not-a-choice'),opened);
 const partial=advanceRomance(opened),restored=restoreRomance(JSON.parse(JSON.stringify(partial)));assert.ok(restored);assert.deepEqual(restored,partial);
 const found=read(partial);assert.ok(found.clues.includes(first.id));assert.equal(found.actions,0);assert.deepEqual(found.bonds,where.bonds);
 assert.strictEqual(inspectMemory(found,first.id),found);assert.strictEqual(inspectMemory(found,'unregistered'),found);
 const second=memoryEvidence.find(c=>c.chapter===0&&c.id!==first.id)!;
 assert.ok(!availableMemories(found).some(c=>c.id===second.id),'later act is still required');
 const end=read(nextRomance(found));assert.equal(end.act,2);assert.strictEqual(nextRomance(end),end,'the second memory cannot be skipped');
 const ready=collectOpen(end);assert.notStrictEqual(nextRomance(ready),ready);
});

test('every act waits for its main conversation and each due event, while optional dates and games stay optional',()=>{
 let s=newRomance('차근차근',35),guard=0,checked=0;
 while(s.phase!=='trial'){
  assert.ok(guard++<30);
  assert.equal(s.phase,'story');
  const before=nextRomance(s);assert.strictEqual(before,s,'unread main dialogue cannot be skipped');
  s=read(s);
  if(s.phase==='trial')break;
  assert.equal(s.phase,'map');
  const due=pendingMainEvents(s);
  assert.deepEqual(due.map(event=>event.id),memoryEvidence.filter(clue=>!s.clues.includes(clue.id)&&(clue.chapter<s.chapter||(clue.chapter===s.chapter&&clue.unlockAct<=s.act))).map(clue=>clue.id));
  if(due.length){
   checked++;assert.strictEqual(nextRomance(s),s,'a due encounter cannot be postponed into the next act');
   assert.ok(due.every(event=>!/(재판|5장|흑막|방준연)/.test(event.label)));
  }
  s=collectOpen({...s,actions:0});
  assert.equal(s.actions,0,'required encounters do not spend or require free-time actions');
  assert.deepEqual(pendingMainEvents(s),[]);
  s=nextRomance(s);
  if(s.phase==='focus')s=selectFocus(s,null);
 }
 assert.equal(checked,8,'each of the eight gradual discoveries has its own progression gate');
 assert.ok(s.flags.includes('read:main-5-1'));assert.ok(s.flags.includes('trial:convened'));
 assert.ok(!s.flags.some(flag=>flag.startsWith('activity:')||flag.startsWith('read:hangout-')),'the main path never requires optional romance or activities');
});

test('older maps recover missing current conversations and overdue records instead of skipping or softlocking',()=>{
 const base=newRomance('이어하기',12);
 const unread=restoreRomance({...base,phase:'map',line:0});assert.ok(unread);
 assert.equal(unread.phase,'story');assert.equal(unread.sceneKey,'main-1-1');
 const late:RState={...base,phase:'map',chapter:2,act:0,sceneKey:'main-3-1',actions:0,flags:['read:main-3-1']};
 let s=restoreRomance(late);assert.ok(s);assert.equal(s.phase,'map');
 assert.equal(pendingMainEvents(s).length,4);assert.strictEqual(nextRomance(s),s);
 s=collectOpen(s);assert.equal(s.clues.length,4);assert.equal(s.actions,0);
 assert.equal(nextRomance(s).act,1);
 const focus:RState={...late,phase:'focus',chapter:1,act:2,sceneKey:'main-2-3',flags:['read:main-2-3']};
 assert.strictEqual(selectFocus(focus,'world'),focus);
 const recoveredFocus=restoreRomance(focus);assert.ok(recoveredFocus);assert.equal(recoveredFocus.phase,'map');
 const ready=collectOpen(recoveredFocus),chooser=nextRomance(ready);assert.equal(chooser.phase,'focus');
 assert.equal(selectFocus(chooser,'world').chapter,2);
 const unreadFocus=restoreRomance({...ready,phase:'focus',flags:[]});assert.ok(unreadFocus);
 assert.equal(unreadFocus.phase,'story');assert.equal(unreadFocus.sceneKey,'main-2-3');
});

test('legacy briefings replay the class conversation without duplicate rewards, then flow directly into trial',()=>{
 const base=newRomance('모여앉기',9);
 const old:RState={...base,chapter:4,act:0,phase:'trial-briefing',sceneKey:'main-5-1',clues:memoryEvidence.map(clue=>clue.id),flags:['read:main-5-1','choice:main-5-1:main-option-1']};
 const recovered=restoreRomance(old);assert.ok(recovered);
 assert.equal(recovered.phase,'story');assert.equal(recovered.line,0);assert.equal(recovered.sceneKey,'main-5-1');
 assert.strictEqual(nextRomance(recovered),recovered);
 const trial=read(recovered);assert.equal(trial.phase,'trial');assert.ok(trial.flags.includes('trial:convened'));
 assert.deepEqual(trial.bonds,old.bonds,'replaying a previously read discussion cannot farm relationship effects');
 const clueOnly=restoreRomance({...old,phase:'trial',flags:[]});assert.ok(clueOnly);
 assert.equal(clueOnly.phase,'story');assert.ok(!clueOnly.flags.includes('trial:convened'));
 assert.equal(read(clueOnly).phase,'trial');
 const legacyMap=restoreRomance({...old,phase:'map'});assert.ok(legacyMap);
 const continued=nextRomance(legacyMap);assert.equal(continued.phase,'story');assert.equal(continued.sceneKey,'main-5-1');
 assert.equal(read(continued).phase,'trial');
});

test('same-map visits and activities award once, retain the selected location and survive saves',()=>{
 const map=read(newRomance('동행',44)),place=personLocation(map,'juhan');
 assert.strictEqual(startHangout(map,'juhan',place==='gate'?'classroom':'gate'),map);
 const authored=getHangoutScene('juhan',map,place),started=startHangout(map,'juhan',place,true);assert.equal(started.actions,1);assert.equal(started.location,authored.location);
 assert.deepEqual(currentRomanceScene(started).lines.slice(-authored.lines.length),authored.lines,'new illustrated prelude preserves the original meeting introduction');
 assert.equal(started.phase,'story','the authored conversation precedes every optional activity');assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(started))),started);
 const invitation=read(started,undefined,'pause');assert.equal(invitation.phase,'activity-invite');
 assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(invitation))),invitation);
 const playing=respondToActivity(invitation,true),done=completeRomanceActivity(playing,3);assert.equal(done.bonds.juhan.trust,playing.bonds.juhan.trust+9);
 assert.strictEqual(completeRomanceActivity(done,3),done);
 const back=read(done);assert.equal(back.actions,1);assert.ok(back.visited.includes('juhan'));
 assert.strictEqual(startHangout(back,'juhan',personLocation(back,'juhan')),back);
 assert.ok(new Set(Array.from({length:5},(_,chapter)=>personLocation({...map,chapter},'juhan'))).size>1);
});

test('Junyeon caps discard overflow on activities and restore; verdict changes no existing value',()=>{
 for(const affection of [69,70]){
  const map=read(newRomance('상한',41));map.bonds.junyeon={affection,trust:55};
  const started=startHangout(map,'junyeon',personLocation(map,'junyeon'),true),invited=read(started,undefined,'pause'),playing=respondToActivity(invited,true),finished=completeRomanceActivity(playing,3);
  assert.equal(finished.bonds.junyeon.affection,70);assert.equal(finished.bonds.junyeon.trust,playing.bonds.junyeon.trust+9);assert.equal(junyeonCap(finished),70);
 }
 const pending=newRomance('복원',6);pending.bonds.junyeon.affection=100;
 assert.equal(restoreRomance(pending)?.bonds.junyeon.affection,70);assert.equal(pending.bonds.junyeon.affection,100,'restore must not mutate its input');
 const trial=reachTrial('junyeon'),forgiven=resolve(trial,'forgive');
 assert.equal(junyeonCap(forgiven),100);assert.equal(forgiven.bonds.junyeon.affection,trial.bonds.junyeon.affection);
 const excluded=read(resolve(trial,'exclude'));assert.equal(excluded.phase,'map');
 assert.strictEqual(startHangout(excluded,'junyeon',personLocation(excluded,'junyeon')),excluded);
 const overflow={...excluded,bonds:{...excluded.bonds,junyeon:{affection:100,trust:100}}};assert.equal(restoreRomance(overflow)?.bonds.junyeon.affection,70);
});

test('Junyeon romance requires every condition independently and a friendship-only focus is valid',()=>{
 const eligible=finish(resolve(reachTrial('junyeon'),'forgive'));assert.ok(junyeonRomanceEligible(eligible));
 assert.equal(junyeonRomanceEligible({...eligible,verdict:'pending'}),false);
 assert.equal(junyeonRomanceEligible({...eligible,repairDone:false}),false);
 assert.equal(junyeonRomanceEligible({...eligible,focus:'world'}),false);
 assert.equal(junyeonRomanceEligible({...eligible,bonds:{...eligible.bonds,junyeon:{affection:84,trust:100}}}),false);
 assert.equal(junyeonRomanceEligible({...eligible,bonds:{...eligible.bonds,junyeon:{affection:100,trust:69}}}),false);
 const one=eligible.flags.find(flag=>flag.startsWith('junyeon-focus:'))!;
 assert.equal(junyeonRomanceEligible({...eligible,flags:[...eligible.flags.filter(flag=>!flag.startsWith('junyeon-focus:')),one,one]}),false,'repeated completion of one scene does not count twice');
 const sameChapter={...eligible,flags:[...eligible.flags.filter(flag=>!flag.startsWith('junyeon-focus:')),'junyeon-focus:hangout-junyeon-1-v1','junyeon-focus:hangout-junyeon-1-v2']};
 assert.equal(junyeonRomanceEligible(sameChapter),false,'two versions in one chapter are still one chapter of friendship');
 assert.equal(junyeonRomanceEligible({...sameChapter,flags:[...sameChapter.flags,'junyeon-focus:hangout-junyeon-2-v1']}),true);
 const friendship=finish(resolve(reachTrial(null),'exclude'));
 assert.equal(friendship.focus,null);assert.ok(!friendship.flags.some(flag=>flag.startsWith('romance:')));
 const laterRomance=finish(resolve(reachTrial(null),'forgive'));
 assert.equal(laterRomance.focus,null,'choosing no original heroine is preserved');
 assert.ok(laterRomance.flags.includes('romance:junyeon'),'an eligible previously unpartnered player can explicitly choose Junyeon after repair');
 assert.equal(laterRomance.ending,'romance:junyeon:forgive');
});

test('trial mistakes preserve relationships and feedback until acknowledged; malformed submissions do nothing',()=>{
 let s=reachTrial('seoyul');const first=romanceTrialRounds[0],wrong=first.claims.find(c=>c.id!==first.target)!;
 assert.ok(wrong);const before=structuredClone(s.bonds);
 assert.strictEqual(submitArgument(s,'invalid',first.evidence),s);
 s=submitArgument(s,wrong.id,first.evidence);assert.equal(s.trialFeedback?.ok,false);assert.deepEqual(s.bonds,before);
 assert.strictEqual(submitArgument(s,first.target,first.evidence),s,'feedback must be acknowledged before retrying');
 assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(s))),s);
 s=continueArgument(s);assert.equal(s.trialRound,0);
 for(const round of romanceTrialRounds){s=submitArgument(s,round.target,round.evidence);assert.strictEqual(submitArgument(s,round.target,round.evidence),s);s=continueArgument(s);}
 const correct=romanceSequence.map(item=>item.id),wrongOrder=[...correct].reverse();
 for(let count=0;count<=correct.length;count++){const partial={...s,trialOrder:correct.slice(0,count)};assert.deepEqual(restoreRomance(JSON.parse(JSON.stringify(partial))),partial,'partial reconstruction order survives a save');}
 assert.equal(restoreRomance({...s,trialOrder:[correct[0],correct[0]]}),null);
 assert.strictEqual(submitReconstruction(s,[correct[0],correct[0],correct[2],correct[3]]),s);
 s=submitReconstruction(s,wrongOrder);assert.equal(s.trialFeedback?.ok,false);assert.deepEqual(s.bonds,before);
 s=continueArgument(s);assert.equal(s.trialRound,3);s=submitReconstruction(s,correct);assert.equal(s.mode,'revelation');
 assert.strictEqual(setVerdict(s,'forgive'),s,'reading the revelation precedes the verdict');
});

test('presented choice IDs keep their effects after shuffling and cannot be applied twice',()=>{
 let s=newRomance('선택',52),guard=0;
 while(s.phase==='story'&&s.line<currentRomanceScene(s).lines.length){assert.ok(guard++<200);s=advanceRomance(s);}
 const choices=currentRomanceScene(s).choices,shown=choiceOrder(s,choices);
 assert.deepEqual(choiceOrder(restoreRomance(JSON.parse(JSON.stringify(s)))!,choices),shown);
 assert.deepEqual(shown.map(c=>c.value.id).sort(),choices.map(c=>c.id).sort());
 assert.strictEqual(chooseRomance(s,'missing'),s);
 const selected=shown[0].value,chosen=chooseRomance(s,selected.id);assert.notStrictEqual(chosen,s);
 assert.ok(chosen.flags.includes(`choice:${s.sceneKey}:${selected.id}`));assert.strictEqual(chooseRomance(chosen,selected.id),chosen);
});

test('every main choice keeps the same scene ID and saved reply after relationship effects',()=>{
 for(const focus of romancePeople)for(let chapter=0;chapter<5;chapter++)for(let act=0;act<3;act++){
  let base:RState={...newRomance('응답복원',62),focus,chapter,act,verdict:chapter===4&&act>0?'forgive':'pending',clues:memoryEvidence.filter(clue=>clue.chapter<chapter).map(clue=>clue.id)};
  base.bonds=Object.fromEntries(romancePeople.map(id=>[id,{affection:69,trust:69}])) as RState['bonds'];
  const scene=currentRomanceScene(base);base={...base,sceneKey:scene.id,location:scene.location,line:scene.lines.length};
  for(const choice of scene.choices){
   let selected=chooseRomance(base,choice.id);assert.notStrictEqual(selected,base);
   assert.equal(currentRomanceScene(selected).id,scene.id,'stat changes must not change the active scene identity');
   while(selected.phase==='story'&&selected.response!==null){
    const saved=restoreRomance(JSON.parse(JSON.stringify(selected)));assert.deepEqual(saved,selected,`${scene.id}/${choice.id}/${selected.line}`);
    assert.deepEqual(romanceLines(saved!),selected.response,'the already selected reply is not regenerated from changed affection');
    selected=advanceRomance(selected);
   }
  }
 }
});

test('v2 save slots preserve unrelated legacy saves and handle malformed data and unavailable storage',()=>{
 const values=new Map<string,string>([['reaction-save-1','original legacy save']]);
 const store={getItem:(key:string)=>values.get(key)??null,setItem:(key:string,value:string)=>{values.set(key,value);}};
 const s=newRomance('슬롯',81);
 for(const slot of ['auto',1,10] as const)assert.ok(saveRomance(slot,s,store));
 assert.equal(values.get('reaction-save-1'),'original legacy save');assert.equal(listRomanceSaves(store).length,3);
 assert.deepEqual(loadRomance(10,store)?.state,s);assert.ok([...values.keys()].filter(key=>key!=='reaction-save-1').every(key=>key.startsWith(ROMANCE_STORAGE_PREFIX)));
 values.set(`${ROMANCE_STORAGE_PREFIX}2`,'bad json');assert.equal(loadRomance(2,store),null);
 assert.equal(saveRomance('auto',s,null),false);assert.equal(loadRomance('auto',null),null);assert.deepEqual(listRomanceSaves(null),[]);
 assert.equal(restoreRomance({...s,phase:'trial'}),null);assert.equal(restoreRomance({...s,verdict:'forgive'}),null);
 assert.equal(restoreRomance({...s,clues:['memory-08']}),null);assert.equal(restoreRomance({...s,line:999}),null);
});
