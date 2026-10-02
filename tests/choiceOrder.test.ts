import test from 'node:test';
import assert from 'node:assert/strict';
import {shuffleChoices} from '../src/engine/choiceOrder';

test('choice order survives rerender and a saved scene reload without mutating authored answers',()=>{
 const values=Object.freeze([Object.freeze({text:'A',score:5}),Object.freeze({text:'B',score:0}),Object.freeze({text:'C',score:-3})]);
 const scene={seed:92051,character:'juhan',episode:1,day:2,location:'library'};
 const key=(s:typeof scene)=>`${s.seed}:bond:${s.character}:${s.episode}:${s.day}:${s.location}`;
 const first=shuffleChoices(values,key(scene));
 assert.deepEqual(first,shuffleChoices(values,key(scene)));
 assert.deepEqual(first,shuffleChoices(values,key(JSON.parse(JSON.stringify(scene)))));
 assert.deepEqual(first.map(entry=>entry.index).sort((a,b)=>a-b),[0,1,2]);
 for(const entry of first)assert.equal(entry.value,values[entry.index]);
 assert.deepEqual(values.map(value=>value.text),['A','B','C']);
 assert.deepEqual(shuffleChoices([],'empty'),[]);
 assert.deepEqual(shuffleChoices(['single'],'single'),[{value:'single',index:0}]);
});

test('different playthroughs and scenes use all permutations rather than cycling answer positions',()=>{
 const values=['best','neutral','poor'];
 const permutations=new Set<string>(),firstCounts=[0,0,0],positionCounts=Array.from({length:3},()=>[0,0,0]);
 for(let seed=0;seed<6000;seed++){
  const choices=shuffleChoices(values,`${seed}:story:chapter-1`);
  permutations.add(choices.map(entry=>entry.index).join(''));
  firstCounts[choices[0].index]++;
  choices.forEach((entry,position)=>positionCounts[entry.index][position]++);
 }
 assert.equal(permutations.size,6,'Fisher–Yates includes swaps as well as rotations');
 for(const counts of positionCounts)for(const count of counts)assert.ok(count>1750&&count<2250,`answer position distribution: ${counts}`);
 assert.ok(firstCounts[0]<2250,'the authored best answer is not locked to the first position');
 assert.ok(new Set(Array.from({length:30},(_,chapter)=>shuffleChoices(values,`7:story:${chapter}`).map(entry=>entry.index).join(''))).size>3);
});

test('duplicate labels and longer lists retain distinct original IDs for selection',()=>{
 const values=['same','same',null,undefined,4,5,6,7,8,9];
 for(let seed=0;seed<50;seed++){
  const choices=shuffleChoices(values,`${seed}:trial:motives`);
  assert.equal(choices.length,values.length);
  assert.deepEqual(choices.map(entry=>entry.index).sort((a,b)=>a-b),values.map((_,index)=>index));
  for(const choice of choices)assert.equal(choice.value,values[choice.index]);
 }
});
