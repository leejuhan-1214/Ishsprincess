import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {getDiscoveryScene,getRevelationScene,memoryEvidence,romanceSequence,romanceTrialRounds} from '../src/data/romanceMystery';
import {romancePeople,type RState} from '../src/romanceTypes';

const state=(focus:RState['focus']=null,affection=8)=>({focus,location:'library',bonds:Object.fromEntries(romancePeople.map(id=>[id,{affection:id==='junyeon'?affection:30,trust:20}]))} as RState);

test('eight memories form reachable same-chapter pairs and every discovery has its own readable source',()=>{
 assert.deepEqual(memoryEvidence.map(clue=>clue.code),['E01','E02','E03','E04','E05','E06','E07','E08']);
 const ids=new Set(memoryEvidence.map(clue=>clue.id));
 assert.equal(ids.size,8);
 for(let chapter=0;chapter<4;chapter++){
  const entries=memoryEvidence.filter(clue=>clue.chapter===chapter),owned=new Set<string>();
  assert.equal(entries.length,2);
  for(let act=0;act<=2;act++)for(const clue of entries){
   if(act<clue.unlockAct||!clue.requires.every(id=>owned.has(id)))continue;
   owned.add(clue.id);
  }
  assert.equal(owned.size,2,`chapter ${chapter+1} must not require a later chapter's evidence`);
 }
 for(const clue of memoryEvidence){
  const scene=getDiscoveryScene(clue.id,state('junyeon'));
  assert.equal(scene.memory,clue.id);
  assert.equal(scene.location,clue.location);
  assert.equal(scene.image,clue.image);
  assert.equal(scene.choices.length,0);
  assert.ok(scene.lines.length>=8);
  assert.ok(clue.limit.length>20,'records must state the limit of their interpretation');
  const svg=readFileSync(new URL('../public/'+clue.image,import.meta.url),'utf8');
  assert.match(svg,/<svg[^>]*width="1200"[^>]*height="820"/);
  assert.ok(svg.includes(clue.code));
  assert.match(svg,/<title id="title">/);
  assert.match(svg,/<desc id="desc">/);
 }
});

test('later focus choices never rewrite the owner of the original 15:40 slip',()=>{
 for(const focus of [null,...romancePeople]){
  const discovery=getDiscoveryScene('memory-01',state(focus));
  assert.ok(discovery.lines.some(line=>line.speaker==='world'&&line.text.includes('세 시 사십 분')));
  const revelation=getRevelationScene(state(focus,70));
  assert.ok(revelation.lines.length>=35);
  assert.ok(revelation.lines.some(line=>line.speaker==='junyeon'&&line.text.includes('세계한테 갈 건 그대로')));
  assert.ok(revelation.lines.some(line=>line.speaker==='teacher'));
  assert.equal(revelation.choices.length,0,'the final A/B verdict is supplied by the game, not a third dialogue choice');
  assert.doesNotMatch(revelation.lines.map(line=>line.text).join(' '),/송승호/);
 }
});

test('the single final trial uses three documented rebuttals followed by the common responsibility scene',()=>{
 assert.equal(romanceTrialRounds.length,3);
 assert.deepEqual(romanceTrialRounds.map(round=>round.evidence),['memory-01','memory-06','memory-08']);
 for(const round of romanceTrialRounds){
  assert.ok(memoryEvidence.some(clue=>clue.id===round.evidence));
  assert.equal(round.claims.length,3);
  assert.equal(round.claims.filter(claim=>claim.id===round.target).length,1);
  assert.equal(new Set(round.claims.map(claim=>claim.id)).size,3);
 }
 assert.deepEqual(romanceSequence.map(item=>item.id),['slip-1610','booking-1700','split-notifications','cue-v3']);
 assert.equal(new Set(romanceSequence.map(item=>item.text)).size,4);
 assert.match(memoryEvidence[5].description,/자동 장소 변경은 꺼져/);
 assert.match(memoryEvidence[7].description,/수령 확인.*뒤.*v3/);
});
