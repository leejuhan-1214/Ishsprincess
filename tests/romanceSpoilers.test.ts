import test from 'node:test';
import assert from 'node:assert/strict';
import {newRomance} from '../src/engine/romance';
import {getMainScene} from '../src/data/romanceStory';
import {getHangoutScene} from '../src/data/romanceHangouts';
import {getRevelationScene} from '../src/data/romanceMystery';
import {awareness} from '../src/data/romanceArt';
import {romancePeople} from '../src/romanceTypes';

test('early scenes and observations do not announce the final hearing or Junyeon confession',()=>{
 const base=newRomance('봄',27);
 for(let chapter=0;chapter<4;chapter++){
  for(let act=0;act<3;act++)for(const focus of [...romancePeople,null]){
   const state={...base,chapter,act,focus};
   const scene=getMainScene(chapter,act,state);
   const lines=[...scene.lines,...scene.choices.flatMap(choice=>choice.response)];
   assert.doesNotMatch(lines.map(line=>line.text).join(' '),/학급재판|흑막|5장에서|5장에만/);
  }
  for(const visit of [1,2]){
   const flags=visit===2?[`read:hangout-junyeon-${chapter+1}-v1`]:[];
   const scene=getHangoutScene('junyeon',{...base,chapter,flags},'classroom');
   const lines=[...scene.lines,...scene.choices.flatMap(choice=>choice.response)];
   assert.doesNotMatch(lines.map(line=>line.text).join(' '),/네가 한 일|허락받았다는 뜻|문서 먼저 고치는 대신|내가 보냈어|학급재판|흑막/);
  }
  const stage=awareness({...base,flags:[`read:main-${chapter+1}-2`]});
  assert.doesNotMatch(stage.title+stage.text,/재판|흑막|준연|5장/);
 }
});

test('a group conversation proposes the hearing; the request writer is revealed only after evidence comparison',()=>{
 const state={...newRomance('봄',27),chapter:4};
 const scene=getMainScene(4,0,state);
 const text=scene.lines.map(line=>line.text);
 const request=text.findIndex(line=>line.includes('공연을 중지'));
 const classroom=text.findIndex(line=>line.includes('1학년 1반으로 돌아왔다'));
 const originals=text.findIndex(line=>line.includes('다른 아이들도 예약 확인서'));
 const proposal=text.findIndex(line=>line.includes('학급재판이라도'));
 assert.ok(request>=0&&classroom>request&&originals>classroom&&proposal>originals);
 assert.doesNotMatch(scene.lines.filter(line=>line.speaker==='junyeon').map(line=>line.text).join(' '),/내가 보냈|내가 바꿨|내가 고쳤|나는 정리만/);
 const revelation=getRevelationScene(state);
 assert.ok(revelation.lines.some(line=>line.speaker==='junyeon'&&line.text.includes('그것도 내가 보냈어요')));
});

test('explicit indoor walks and stairs use hallway instead of the outdoor path',()=>{
 const base=newRomance('봄',27);
 for(const [chapter,act,fragment] of [[0,1,'우리는 복도를'],[2,1,'나는 문을 닫고 복도를'],[4,1,'가방을 들어 복도로']] as const){
  const scene=getMainScene(chapter,act,{...base,chapter,act});
  assert.equal(scene.lines.find(line=>line.text.includes(fragment))?.location,'hallway');
 }
 const eve=getMainScene(3,2,{...base,chapter:3,act:2});
 assert.equal(eve.location,'hallway');
 assert.equal(eve.lines.find(line=>line.text.includes('계단을 내려와 교문'))?.location,'gate');
});
