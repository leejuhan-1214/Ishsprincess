import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {romancePeople} from '../src/romanceTypes';
import {comparisonIsValid,compositionIsValid,debugIsValid,getRomanceActivity,hasRomanceActivity,packingIsValid,ratioIsValid,rhythmIsValid,starPathIsValid,type ActivityTask} from '../src/data/romanceActivities';

test('forty invitations are authored to their person and chapter instead of repeating a generic three-round pool',()=>{
 const tasks=romancePeople.flatMap(person=>Array.from({length:5},(_,chapter)=>getRomanceActivity(person,chapter)));
 assert.equal(tasks.length,40);
 for(const field of ['id','title','invitation','goal','success','after'] as const)assert.equal(new Set(tasks.map(task=>task[field])).size,40,`${field} must never repeat across the forty activities`);
 assert.equal(new Set(tasks.map(activity=>activity.task.kind)).size,8);
 for(const person of romancePeople){
  const characterTasks=tasks.filter(activity=>activity.person===person);
  assert.ok(new Set(characterTasks.map(activity=>activity.task.kind)).size>=3,`${person} needs multiple activities without borrowing unrelated professions`);
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

test('specialties use character-appropriate mechanics instead of assigning code and sound to everybody',()=>{
 const tasks=romancePeople.flatMap(person=>Array.from({length:5},(_,chapter)=>getRomanceActivity(person,chapter)));
 assert.deepEqual([...new Set(tasks.filter(activity=>activity.task.kind==='debug').map(activity=>activity.person))],['juhan']);
 assert.deepEqual([...new Set(tasks.filter(activity=>activity.task.kind==='ratio').map(activity=>activity.person))],['hyunsol','seoyul']);
 const signatures=romancePeople.map(person=>tasks.filter(activity=>activity.person===person).map(activity=>activity.task.kind).join(','));
 assert.equal(new Set(signatures).size,8,'each character should have a different progression of activity genres');
 assert.equal(getRomanceActivity('taewoo',2).task.kind,'rhythm');
 assert.match(getRomanceActivity('taewoo',2).invitation,/의자|손동작/,'rest scene must not turn into strenuous dancing');
 assert.match(getRomanceActivity('hyunsol',1).invitation,/점심/,'cafeteria scene must not turn into a chemistry experiment');
 assert.match(getRomanceActivity('seoyul',3).invitation,/산책/,'walk scene must not turn into an indoor exhibition maze');
});

test('activity options shuffle per playthrough while solutions and saved-scene order remain stable',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const baseline=getRomanceActivity(person,chapter,1,137);
  assert.deepEqual(getRomanceActivity(person,chapter,1,137),baseline);
  const kind=baseline.task.kind;
  if(!['compose','pack','compare','debug'].includes(kind))continue;
  const variants=Array.from({length:12},(_,seed)=>getRomanceActivity(person,chapter,1,seed).task);
  assert.ok(new Set(variants.map(task=>JSON.stringify(task))).size>1);
  for(const task of variants){
   if(task.kind==='compose')assert.equal(compositionIsValid(task,[task.required,task.pieces.findIndex((_,i)=>i!==task.required&&i!==task.footer),task.footer]),true);
   if(task.kind==='pack')assert.equal(packingIsValid(task,task.required),true);
   if(task.kind==='compare')assert.equal(comparisonIsValid(task,task.differences),true);
   if(task.kind==='debug')assert.equal(debugIsValid(task,[0,1],task.answer),true);
  }
  assert.deepEqual(getRomanceActivity(person,chapter,1,137),baseline,'presenting another run must not mutate authored tasks');
 }
 const first=getRomanceActivity('taehun',0).task,last=getRomanceActivity('taehun',3).task;
 assert.ok(first.kind==='stars'&&last.kind==='stars');
 assert.notDeepEqual(first.edges,last.edges,'later path activity must not repeat the same maze');
});

test('ratio puzzles reject partial quantities, wrong proportions, fractions, and negative values',()=>{
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const task=getRomanceActivity(person,chapter).task;if(task.kind!=='ratio')continue;
  const sum=task.components.reduce((total,component)=>total+component.parts,0);
  const answer=task.components.map(component=>task.total*component.parts/sum);
  assert.equal(ratioIsValid(task,answer),true);
  assert.equal(ratioIsValid(task,answer.map(value=>value-1)),false);
  assert.equal(ratioIsValid(task,answer.map((value,i)=>value+(i===0?1:i===1?-1:0))),false);
  assert.equal(ratioIsValid(task,answer.slice(1)),false);
  assert.equal(ratioIsValid(task,answer.map((value,i)=>i===0?-1:value)),false);
  assert.equal(ratioIsValid(task,answer.map((value,i)=>value+(i===0?.5:i===1?-.5:0))),false);
 }
});

test('comparison puzzles contain authored changes and require an exact rather than all-selected answer',()=>{
 const answerSets=new Set<string>();
 for(const person of romancePeople)for(let chapter=0;chapter<5;chapter++){
  const task=getRomanceActivity(person,chapter).task;if(task.kind!=='compare')continue;
  assert.deepEqual(task.differences,task.rows.flatMap((row,index)=>row.left===row.right?[]:[index]));
  assert.ok(task.differences.length>=2&&task.differences.length<task.rows.length);
  assert.equal(comparisonIsValid(task,task.differences),true);
  assert.equal(comparisonIsValid(task,[...task.differences].reverse()),true);
  assert.equal(comparisonIsValid(task,task.differences.slice(1)),false);
  assert.equal(comparisonIsValid(task,[...task.differences,task.differences[0]]),false);
  assert.equal(comparisonIsValid(task,task.rows.map((_,index)=>index)),false);
  assert.equal(comparisonIsValid(task,[-1]),false);
  answerSets.add(task.differences.join(','));
 }
 assert.ok(answerSets.size>=6,'differences must not always be in the same positions');
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
 for(let seed=0;seed<12;seed++){const task=getRomanceActivity('juhan',0,1,seed).task;if(task.kind==='debug')answerIndexes.add(task.answer);}
 assert.equal(answerIndexes.size,3,'the correct repair must not always occupy the top position');
});

test('activity UI offers one scene-specific task, retries, no-loss exit, and sound-free preview',()=>{
 const source=readFileSync(new URL('../src/RomanceActivity.tsx',import.meta.url),'utf8');
 assert.match(source,/이야기로 돌아가기/);
 assert.match(source,/실패·건너뛰기 모두 관계 손실 없음/);
 assert.match(source,/소리 없이 살펴보기/);
 assert.match(source,/finished\.current/);
 assert.match(source,/if\(suspended\|\|settled.current\|\|finished.current\)return/);
 assert.match(source,/if\(suspended\|\|finished.current\)return;finished.current=true;onFinish\(score\)/);
 assert.match(source,/순서를 보면서 하기/);
 assert.match(source,/기억했어 · 시작/);
 assert.match(source,/case 'ratio':return <RatioBoard/);
 assert.match(source,/case 'compare':return <CompareBoard/);
 assert.match(source,/document\.addEventListener\('visibilitychange'/);
 assert.doesNotMatch(source,/activityRoundsFor|currentActivity|eval\(/);
 const css=readFileSync(new URL('../src/romanceActivities.css',import.meta.url),'utf8');
 assert.match(css,/grid-template-rows:auto minmax\(0,1fr\) auto/);
 assert.match(css,/overscroll-behavior:contain/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
});
