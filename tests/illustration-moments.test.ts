import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {romancePeople,type RPerson,type RState} from '../src/romanceTypes';
import {illustrationMoments,momentForScene,withIllustratedMoment} from '../src/data/romanceIllustrationMoments';
import {getHangoutScene,hasHangoutAvailable} from '../src/data/romanceHangouts';
import {activeSceneArt} from '../src/engine/dialoguePresentation';
import {newRomance,currentRomanceScene,startHangout,personLocation,restoreRomance,advanceRomance,chooseRomance,respondToActivity} from '../src/engine/romance';

const root=fileURLToPath(new URL('../',import.meta.url));
type ManifestEntry={id:string;person:RPerson;chapter:number;visit:1|2;location:string;generatedPath?:string};
const planned:ManifestEntry[]=readdirSync(resolve(root,'art-prompts/expansion-v6')).filter(name=>name.endsWith('.json')).flatMap(name=>JSON.parse(readFileSync(resolve(root,'art-prompts/expansion-v6',name),'utf8')).entries);
const ready=planned.filter(entry=>entry.generatedPath&&['png','webp'].some(ext=>existsSync(resolve(root,'public/assets/romance-cg',entry.id+'.'+ext))));
function mapFor(person:RPerson,chapter:number,visit:1|2):RState{
 const state:RState={...newRomance('그림속약속',340),chapter,act:chapter===4?1:0,phase:'map',mode:'main',verdict:chapter===4?'forgive':'pending'};
 const main=currentRomanceScene(state);
 return {...state,sceneKey:main.id,location:main.location,flags:[...state.flags,'read:'+main.id,...(visit===2?['read:hangout-'+person+'-'+(chapter+1)+'-v1']:[])],visits:{...state.visits,[person]:visit-1}};
}
function finishEncounter(initial:RState):RState{
 let state=initial,guard=0;
 while(state.phase==='story'){
  assert.ok(guard++<120);
  const scene=currentRomanceScene(state);
  state=state.response===null&&state.line>=scene.lines.length?chooseRomance(state,scene.choices[0].id):advanceRomance(state);
 }
 return state.phase==='activity-invite'?respondToActivity(state,false):state;
}

test('eighty planned encounter slots map one-to-one to completed distinct illustrations',()=>{
 assert.equal(planned.length,80);
 assert.equal(new Set(planned.map(item=>item.id)).size,80);
 for(const person of romancePeople){
  const entries=planned.filter(item=>item.person===person);
  assert.equal(entries.length,10);
  assert.equal(new Set(entries.map(item=>item.location)).size,10,person+' has ten different settings');
  for(let chapter=0;chapter<5;chapter++)for(const visit of [1,2]){
   assert.equal(entries.filter(item=>item.chapter===chapter&&item.visit===visit).length,1);
  }
 }
 assert.equal(illustrationMoments.length,ready.length,'unfinished image jobs never become playable placeholders');
 for(const entry of ready){
  const sceneId='hangout-'+entry.person+'-'+(entry.chapter+1)+'-v'+entry.visit;
  assert.equal(momentForScene(sceneId)?.id,entry.id);
 }
 assert.equal(momentForScene('hangout-junyeon-5-closed'),undefined);
});

test('newly started encounters opt in to their own image without altering choices, places, rewards or authored dialogue',()=>{
 for(const moment of illustrationMoments){
  const map=mapFor(moment.person,moment.chapter,moment.visit),place=personLocation(map,moment.person);
  const original=getHangoutScene(moment.person,map,place);
  assert.ok(!map.flags.includes('art:moment:'+original.id));
  const started=startHangout(map,moment.person,place),scene=currentRomanceScene(started);
  assert.ok(started.flags.includes('art:moment:'+original.id));
  assert.equal(started.actions,map.actions-1);
  assert.equal(started.location,original.location);
  assert.deepEqual(started.bonds,map.bonds);
  assert.equal(scene.id,original.id);assert.equal(scene.title,original.title);assert.equal(scene.memory,original.memory);
  assert.deepEqual(scene.choices,original.choices,'no new affection or choice effects');
  assert.deepEqual(scene.lines.slice(moment.lines.length+1),original.lines);
  assert.ok(scene.lines.slice(0,moment.lines.length).every(line=>line.art===moment.id&&line.location===moment.location));
  assert.strictEqual(startHangout(started,moment.person,place),started,'starting an already active encounter spends nothing');
 }
});

test('illustrated preludes stop exactly at the location transition and preserve every old CG reveal',()=>{
 for(const moment of illustrationMoments){
  const map=mapFor(moment.person,moment.chapter,moment.visit);
  const original=getHangoutScene(moment.person,map,personLocation(map,moment.person));
  const scene=withIllustratedMoment(original,{...map,flags:[...map.flags,'art:moment:'+original.id]});
  for(let i=0;i<moment.lines.length;i++)assert.equal(activeSceneArt(scene.lines,i),moment.id);
  const bridge=scene.lines[moment.lines.length];
  assert.equal(bridge.location,original.location);
  assert.equal(bridge.art,undefined);
  assert.equal(activeSceneArt(scene.lines,moment.lines.length),undefined,'even a same-room bridge clears the moment');
  for(let i=0;i<original.lines.length;i++)assert.equal(activeSceneArt(scene.lines,moment.lines.length+1+i),activeSceneArt(original.lines,i));
 }
});

test('all eighty legacy in-progress encounter cursors remain on their original line when restored',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++)for(const visit of [1,2] as const){
  const map=mapFor(person,chapter,visit),place=personLocation(map,person);
  const original=getHangoutScene(person,map,place),key=original.id+':visit-'+visit;
  const legacy:RState={...map,phase:'story',mode:'hangout',visitor:person,location:original.location,sceneKey:key,line:3,flags:[...map.flags,'meeting-place:'+key+':'+place]};
  const restored=restoreRomance(JSON.parse(JSON.stringify(legacy)));
  assert.ok(restored,original.id);
  assert.equal(restored.line,3);
  assert.deepEqual(currentRomanceScene(restored).lines,original.lines);
  assert.strictEqual(withIllustratedMoment(original,restored),original);
  assert.ok(!restored.flags.some(flag=>flag.startsWith('art:moment:')));
 }
});

test('new illustrated encounter saves retain their selected CG and progress through optional activities only once',()=>{
 for(const moment of illustrationMoments){
  const map=mapFor(moment.person,moment.chapter,moment.visit);
  let state=startHangout(map,moment.person,personLocation(map,moment.person));
  state=advanceRomance(state);
  const restored=restoreRomance(JSON.parse(JSON.stringify(state)));
  assert.ok(restored,moment.id+' save with CG in backlog');
  assert.deepEqual(restored,state);
  assert.equal(activeSceneArt(currentRomanceScene(restored).lines,restored.line),moment.id);
  const done=finishEncounter(restored);
  assert.equal(done.phase,'map');
  assert.ok(done.flags.includes('read:hangout-'+moment.person+'-'+(moment.chapter+1)+'-v'+moment.visit));
  assert.equal(done.visits[moment.person],moment.visit);
  if(moment.visit===2){
   const again={...done,visited:[],actions:2};
   assert.equal(hasHangoutAvailable(moment.person,again),false);
   assert.strictEqual(startHangout(again,moment.person,personLocation(again,moment.person)),again);
  }
 }
});

test('runtime scene module contains no generation prompts, source references or absolute production paths',()=>{
 const source=readFileSync(resolve(root,'src/data/romanceIllustrationMoments.ts'),'utf8');
 for(const field of ['"prompt":','"composition":','"gesture":','"expression":','"referencePath":','"generatedPath":','"savedPath":','C:/Users/','C:\\\\Users\\\\'])assert.ok(!source.includes(field),field);
});

