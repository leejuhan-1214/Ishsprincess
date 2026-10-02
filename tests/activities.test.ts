import test from 'node:test';
import assert from 'node:assert/strict';
import {activityRoundsFor,isActivityAnswerCorrect,type ActivityPerson,type ActivityRound,type PathRound} from '../src/engine/activities';
import {schoolActivity} from '../src/data/extraDaily';

const people:ActivityPerson[]=['world','junyeon','hyunsol','taewoo','taehun','seoyul','juhan','minhyuk'];
function solvePath(round:PathRound):number[]{
 const paths=[[round.start]],seen=new Set([round.start]);
 while(paths.length){const path=paths.shift()!,cell=path[path.length-1];if(cell===round.goal)return path;
  for(let next=0;next<round.size**2;next++){
   const adjacent=Math.abs(Math.floor(cell/round.size)-Math.floor(next/round.size))+Math.abs(cell%round.size-next%round.size)===1;
   if(adjacent&&!round.blocked.includes(next)&&!seen.has(next)){seen.add(next);paths.push([...path,next]);}
  }
 }
 throw new Error('The generated route cannot reach its goal.');
}
function solve(round:ActivityRound):number|number[]|string[]{
 if(round.mode==='timing'||round.mode==='balance')return round.target;
 if(round.mode==='memory')return round.pattern;
 if(round.mode==='order')return round.answer;
 if(round.mode==='matching')return round.pairs.map(pair=>pair.right);
 if(round.mode==='path')return solvePath(round);
 return round.items.flatMap((item,index)=>item===round.target?[index]:[]);
}

test('all eight character activity pools vary their genres and remain solvable throughout five chapters',()=>{
 const allModes=new Set<string>();
 for(const person of people){const modes=new Set<string>(),arrangements=new Set<string>();
  for(let chapter=0;chapter<5;chapter++)for(let visit=0;visit<16;visit++){
   const rounds=activityRoundsFor(person,`${chapter}:visit:${visit}`,chapter);
   assert.equal(rounds.length,3);assert.equal(new Set(rounds.map(round=>round.mode)).size,3,`${person}: repeated genre within a visit`);
   arrangements.add(rounds.map(round=>round.mode).join(','));
   for(const round of rounds){modes.add(round.mode);allModes.add(round.mode);assert.ok(isActivityAnswerCorrect(round,solve(round)),`${person}: ${round.mode} must be solvable`);}
  }
  assert.ok(modes.size>=4,`${person}: needs more than one repeated three-game package`);assert.ok(arrangements.size>=3);
 }
 assert.equal(allModes.size,7);
});

test('activity seeds are stable, task sizes stay small and late chapters do not tighten timing windows',()=>{
 for(const person of people)for(let chapter=0;chapter<5;chapter++){
  const key=`stable:${chapter}`;
  assert.deepEqual(activityRoundsFor(person,key,chapter),activityRoundsFor(person,key,chapter));
  for(const round of activityRoundsFor(person,key,chapter)){
   if(round.mode==='timing'){assert.ok(round.cycleMs>=4000);assert.ok(round.tolerance>=14);assert.ok(isActivityAnswerCorrect(round,round.target+round.tolerance));assert.ok(!isActivityAnswerCorrect(round,round.target+round.tolerance+1));}
   if(round.mode==='memory'){assert.ok(round.pattern.length>=3&&round.pattern.length<=4);assert.ok(round.pattern.every(value=>value>=0&&value<round.symbols.length));}
   if(round.mode==='order'){assert.ok(round.items.length<=4);assert.deepEqual([...round.items].sort(),[...round.answer].sort());}
   if(round.mode==='matching'){assert.equal(round.pairs.length,3);assert.equal(new Set(round.options).size,round.pairs.length);assert.deepEqual([...round.options].sort(),round.pairs.map(pair=>pair.right).sort());}
   if(round.mode==='search'){assert.ok(round.items.length<=16);assert.equal(round.items.filter(item=>item===round.target).length,3);}
   if(round.mode==='path'){assert.equal(round.size,4);assert.ok(!round.blocked.includes(round.start));assert.ok(!round.blocked.includes(round.goal));assert.ok(isActivityAnswerCorrect(round,round.solution));}
  }
 }
});

test('answer validation rejects duplicates, partial solutions, illegal path jumps and malformed numbers',()=>{
 const examples=new Map<ActivityRound['mode'],ActivityRound>();
 for(const person of people)for(let seed=0;seed<8;seed++)for(const round of activityRoundsFor(person,String(seed),0))examples.set(round.mode,round);
 for(const round of examples.values()){
  assert.equal(isActivityAnswerCorrect(round,NaN),false);assert.equal(isActivityAnswerCorrect(round,Infinity),false);assert.equal(isActivityAnswerCorrect(round,[]),false);
  const answer=solve(round);
  if(Array.isArray(answer))assert.equal(isActivityAnswerCorrect(round,answer.slice(0,-1) as number[]|string[]),false);
  if(round.mode==='search'){const found=solve(round) as number[];assert.equal(isActivityAnswerCorrect(round,[found[0],found[0],found[0]]),false);}
  if(round.mode==='path'){assert.equal(isActivityAnswerCorrect(round,[round.start,round.goal]),false);assert.equal(isActivityAnswerCorrect(round,[...round.solution,round.goal]),false);}
  if(round.mode==='order')assert.equal(isActivityAnswerCorrect(round,[...round.answer].reverse()),false);
 }
});

test('the two extra characters use the same mixed-genre activity system without changing their locations',()=>{
 for(const id of ['juhan','minhyuk'] as const)for(const location of ['classroom','computer','library','dance'] as const){
  const activity=schoolActivity(id,2,location,113);
  assert.equal(new Set(activity.rounds.map(round=>round.mode)).size,3);assert.ok(activity.id.endsWith(location));
  for(const round of activity.rounds)assert.ok(isActivityAnswerCorrect(round,solve(round)));
 }
});
