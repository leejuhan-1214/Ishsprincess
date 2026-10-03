import test from 'node:test';
import assert from 'node:assert/strict';
import {newRomance} from '../src/engine/romance';
import {getMainScene} from '../src/data/romanceStory';
import {getHangoutScene} from '../src/data/romanceHangouts';
import {characterAsides,characterMoments} from '../src/data/romanceCharacterMoments';
import {routeChoiceFlags} from '../src/data/romanceRouteTraits';
import {romancePeople,type RHero} from '../src/romanceTypes';

const heroes=romancePeople.filter((person):person is RHero=>person!=='junyeon');

test('all seven pivotal dates are new scenes rather than a first-date illustration replay',()=>{
 const base=newRomance('봄',43);
 const openings=new Set<string>();
 for(const hero of heroes){
  const scene=getMainScene(2,0,{...base,chapter:2,focus:hero,flags:[`read:hangout-${hero}-1-v1`]});
  const own=characterMoments[hero];
  assert.ok(own.text.split('\n').length>=15);
  openings.add(own.text.split('\n')[0]);
  assert.equal(scene.lines.at(-1)?.location,own.location);
  assert.ok(scene.lines.every(line=>!line.art),'first-date CG cannot be used for a different scene');
  assert.equal(scene.choices.length,3);
  for(const choice of scene.choices){
   assert.ok(choice.response.length>=3);
   assert.ok(choice.response.every(line=>line.location===own.location));
   assert.ok(choice.flags?.some(flag=>flag.startsWith(`moment:${hero}:`)));
  }
 }
 assert.equal(openings.size,7);
});

test('pivotal choices are competing plausible intentions, with an explicit non-first future commitment',()=>{
 const base=newRomance('봄',43);
 for(const focus of heroes){
  const scene=getMainScene(2,0,{...base,chapter:2,focus});
  assert.ok(!scene.choices[0].flags?.includes(`route:${focus}:commitment`));
  assert.ok(scene.choices[1].flags?.includes(`route:${focus}:commitment`));
  assert.ok(scene.choices.every(choice=>choice.effects?.every(effect=>(effect.trust??0)>0)));
  assert.equal(new Set(scene.choices.map(choice=>choice.response.map(line=>line.text).join('|'))).size,3);
 }
});

test('a later main scene recalls the actual new pivotal choice and no invented old date',()=>{
 const base=newRomance('봄',43);
 for(const focus of heroes)for(const index of [0,1,2]){
  const state={...base,chapter:2,act:2,focus,flags:[`moment:${focus}:${index}`]};
  const scene=getMainScene(2,2,state);
  assert.ok(scene.lines.some(line=>line.text===characterMoments[focus].callback[index]));
  const other=characterMoments[focus].callback.filter((_,i)=>i!==index);
  assert.ok(!scene.lines.some(line=>other.includes(line.text)));
 }
});

test('the after-date answer stays with the chosen companion instead of switching to another heroine',()=>{
 const base=newRomance('봄',43);
 const nearMissIndices=new Set<number>();
 for(const focus of heroes){
  const scene=getMainScene(2,2,{...base,chapter:2,act:2,focus,flags:[`moment:${focus}:1`]});
  scene.choices.forEach((choice,index)=>{
   assert.ok(choice.response.every(line=>line.speaker===focus||line.speaker==='player'||line.speaker==='narrator'));
   assert.ok(choice.flags?.some(flag=>flag.startsWith(`aftertalk:${focus}:`)));
   if(choice.effects?.some(effect=>(effect.trust??0)<0))nearMissIndices.add(index);
  });
 }
 assert.ok(nearMissIndices.size>1,'misunderstandings cannot always be the third answer');
});

test('main character check-ins have distinct lines across chapters and preserve seven voices',()=>{
 const all=new Set<string>();
 for(const hero of heroes){
  const entries=Object.values(characterAsides[hero]);
  assert.equal(entries.length,9);
  for(const [character,player] of entries){
   assert.ok(!all.has(character),`repeated character line: ${character}`);all.add(character);
   assert.ok(!all.has(player),`repeated player reply: ${player}`);all.add(player);
  }
 }
 assert.equal(all.size,126);
 assert.match(characterMoments.taewoo.text,/승부욕|평가위원/);
 assert.match(characterMoments.taehun.text,/돌 표본|지질|시집/);
 assert.match(characterMoments.seoyul.text,/화음|건반|색/);
 assert.match(characterMoments.juhan.text,/배열|쿠키|자의식/);
 assert.match(characterMoments.minhyuk.text,/완장|반장|계산/);
});

test('private promises are not awarded by always selecting the first hangout answer',()=>{
 for(const hero of heroes){
  const allFirst=Array.from({length:5},(_,chapter)=>[...routeChoiceFlags(hero,chapter,1,0),...routeChoiceFlags(hero,chapter,2,0)]).flat();
  assert.ok(!allFirst.includes(`route:${hero}:commitment`));
  const state={...newRomance('봄',43),chapter:3,focus:hero};
  const scene=getHangoutScene(hero,state,'classroom');
  const promises=scene.choices.filter(choice=>choice.flags?.includes(`route:${hero}:commitment`));
  assert.equal(promises.length,1);
  assert.notEqual(promises[0].id,'option-1');
 }
});

test('new followup situations are not another identical performance or game attempt',()=>{
 const base={...newRomance('봄',43),chapter:2};
 for(const [hero,place,pattern] of [['hyunsol','chemistry',/설명 카드/],['taewoo','dance',/후배/],['juhan','art',/산 접기/]] as const){
  const scene=getHangoutScene(hero,{...base,flags:[`read:hangout-${hero}-3-v1`]},place);
  assert.equal(scene.location,place);
  assert.match(scene.lines.map(line=>line.text).join(' '),pattern);
  assert.equal(scene.choices.length,3);
  assert.ok(scene.choices.every(choice=>choice.response.length===3));
 }
});

test('fourth-chapter main recalls a first date only if that optional encounter was played',()=>{
 const base=newRomance('봄',43);
 for(const focus of heroes){
  const unseen=getMainScene(3,0,{...base,chapter:3,focus});
  const seen=getMainScene(3,0,{...base,chapter:3,focus,flags:[`read:hangout-${focus}-1-v1`]});
  assert.equal(seen.lines.length,unseen.lines.length+1);
  assert.ok(seen.lines.every(line=>!line.art));
 }
});
