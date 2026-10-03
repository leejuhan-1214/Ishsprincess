import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {romancePeople} from '../src/romanceTypes';
import {compositionIsValid,debugIsValid,getRomanceActivity,hasRomanceActivity,packingIsValid,rhythmIsValid,starPathIsValid,type ActivityTask} from '../src/data/romanceActivities';

test('forty invitations are authored to their person and chapter instead of repeating a generic three-round pool',()=>{
 const tasks=romancePeople.flatMap(person=>Array.from({length:5},(_,chapter)=>getRomanceActivity(person,chapter)));
 assert.equal(tasks.length,40);
 for(const field of ['id','title','invitation','goal','success','after'] as const)assert.equal(new Set(tasks.map(task=>task[field])).size,40,`${field} must never repeat across the forty activities`);
 assert.equal(new Set(tasks.map(activity=>activity.task.kind)).size,6);
 for(const person of romancePeople){
  const characterTasks=tasks.filter(activity=>activity.person===person);
  assert.ok(new Set(characterTasks.map(activity=>activity.task.kind)).size>=4,`${person} needs substantially different activities in different chapters`);
  assert.equal(new Set(characterTasks.map(activity=>JSON.stringify(activity.task))).size,5);
  for(let chapter=0;chapter<5;chapter++){
   assert.equal(hasRomanceActivity(person,chapter,1),true);
   assert.equal(hasRomanceActivity(person,chapter,2),false,'a second intimate meeting must not turn into another mandatory game');
  }
  assert.equal(hasRomanceActivity(person,-1,1),false);
  assert.equal(hasRomanceActivity(person,5,1),false);
 }
 for(const activity of tasks){assert.ok(activity.invitation.length>=35);assert.ok(activity.after.length>=20);assert.equal('rounds' in activity,false);}
});

test('every paper composition allows more than one valid personal layout',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const task=getRomanceActivity(person,chapter).task;if(task.kind!=='compose')continue;
  const valid:number[][]=[];
  task.pieces.forEach((_,a)=>task.pieces.forEach((_,b)=>task.pieces.forEach((_,c)=>{const slots=[a,b,c];if(compositionIsValid(task,slots))valid.push(slots);})));
  assert.ok(valid.length>=4,'aesthetic layout must not have only one right answer');
  assert.equal(compositionIsValid(task,[]),false);
  assert.equal(compositionIsValid(task,[task.required,task.required,task.footer]),false);
  assert.equal(compositionIsValid(task,[-1,task.required,task.footer]),false);
 }
});

test('every bag can fit the promised items with room for a personal choice',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const task=getRomanceActivity(person,chapter).task;if(task.kind!=='pack')continue;
  assert.equal(packingIsValid(task,task.required),true);
  const additions=task.items.map((_,i)=>i).filter(i=>!task.required.includes(i)&&packingIsValid(task,[...task.required,i]));
  assert.ok(additions.length>=2,'do not make a bag puzzle into one compulsory item list');
  assert.equal(packingIsValid(task,[]),false);
  assert.equal(packingIsValid(task,[...task.required,task.required[0]]),false);
  assert.equal(packingIsValid(task,[...task.required,999]),false);
  assert.equal(packingIsValid(task,task.items.map((_,i)=>i)),false,'all items must not fit');
 }
});

test('every star or walking sketch has a valid connected route through its shared stop',()=>{
 const walk=(task:Extract<ActivityTask,{kind:'stars'}>,path:number[]):number[]|null=>{
  if(starPathIsValid(task,path))return path;
  if(path.length>=task.nodes.length)return null;
  for(const [a,b] of task.edges){const last=path.at(-1),next=a===last?b:b===last?a:-1;if(next<0||next===task.blocked||path.includes(next))continue;const answer=walk(task,[...path,next]);if(answer)return answer;}
  return null;
 };
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const task=getRomanceActivity(person,chapter).task;if(task.kind!=='stars')continue;
  const route=walk(task,[task.start]);assert.ok(route,`${person} chapter ${chapter+1} has no solution`);
  assert.equal(starPathIsValid(task,route),true);
  assert.equal(starPathIsValid(task,[task.start,task.end]),false,'unconnected straight jumps must not count');
  assert.equal(starPathIsValid(task,[task.start,task.blocked,task.end]),false);
  assert.equal(starPathIsValid(task,[...route,route[0]]),false);
 }
});

test('rhythm has a fully equivalent non-timed mode and tolerant optional tempo play',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const task=getRomanceActivity(person,chapter).task;if(task.kind!=='rhythm')continue;
  assert.equal(rhythmIsValid(task,task.pattern,[],false),true,'accessibility mode must not need clock values');
  const times=task.pattern.map((_,i)=>1000+i*60000/task.bpm);
  assert.equal(rhythmIsValid(task,task.pattern,times,true),true);
  assert.equal(rhythmIsValid(task,task.pattern,times.map((value,i)=>value+(i%2)*100),true),true);
  assert.equal(rhythmIsValid(task,task.pattern,times.map((_,i)=>i*10),true),false);
  assert.equal(rhythmIsValid(task,task.pattern.slice(1),[],false),false);
  assert.equal(rhythmIsValid(task,task.pattern.map(value=>(value+1)%3),[],false),false);
 }
});

test('debugging requires actual input exploration, not clicking the first repair blindly',()=>{
 const answerIndexes=new Set<number>();
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const task=getRomanceActivity(person,chapter).task;if(task.kind!=='debug')continue;
  answerIndexes.add(task.answer);
  assert.ok(task.tests.some(input=>input.expected!==input.actual));
  assert.equal(debugIsValid(task,[0,1],task.answer),true);
  assert.equal(debugIsValid(task,[0,0],task.answer),false);
  assert.equal(debugIsValid(task,[0,999],task.answer),false);
  task.patches.forEach((_,i)=>assert.equal(debugIsValid(task,[0,1,2],i),i===task.answer));
 }
 assert.equal(answerIndexes.size,3,'the correct repair must not always occupy the top position');
});

test('activity UI offers one scene-specific task, retries, no-loss exit, and sound-free preview',()=>{
 const source=readFileSync(new URL('../src/RomanceActivity.tsx',import.meta.url),'utf8');
 assert.match(source,/이야기로 돌아가기/);
 assert.match(source,/실패·건너뛰기 모두 관계 손실 없음/);
 assert.match(source,/소리 없이 살펴보기/);
 assert.match(source,/finished\.current/);
 assert.match(source,/document\.addEventListener\('visibilitychange'/);
 assert.doesNotMatch(source,/activityRoundsFor|currentActivity|eval\(/);
 const css=readFileSync(new URL('../src/romanceActivities.css',import.meta.url),'utf8');
 assert.match(css,/grid-template-rows:auto minmax\(0,1fr\) auto/);
 assert.match(css,/overscroll-behavior:contain/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
});
