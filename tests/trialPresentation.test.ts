import test from 'node:test';
import assert from 'node:assert/strict';
import {caseFiles,schoolCharacters} from '../src/data/classroomMystery';
import {shuffleChoices} from '../src/engine/choiceOrder';
import {addSequence,beginTrial,collectEvidence,continueCase,explainMotive,newClassroomState,openCase,rebut,submitSequence,vote} from '../src/engine/classroomMystery';

test('all five trials stay solvable when every presented choice is shuffled and restored',()=>{
 for(const seed of [0,1,4,71,925,1088,47201,99031]){
  let state=newClassroomState();
  for(const file of caseFiles){
   state=openCase(state,file.id,file.chapter);
   while(state.cases[file.id].phase==='opening')state=continueCase(state);
   state=openCase(state,file.id,file.chapter);
   for(const evidence of file.evidence)state=collectEvidence(state,evidence.id);
   state=beginTrial(state);
   for(let round=0;round<file.debates.length;round++){
    const debate=file.debates[round],key=`${seed}:${file.id}:debate:${round}:claims`;
    const visible=shuffleChoices(debate.claims,key),answer=visible.find(choice=>choice.index===debate.target)!;
    assert.equal(answer.value.text,debate.claims[debate.target].text);
    assert.deepEqual(shuffleChoices(debate.claims,JSON.parse(JSON.stringify(key))),visible);
    state=rebut(state,answer.index,debate.evidence);
    assert.equal(state.cases[file.id].feedback?.ok,true);
    const feedback=state.cases[file.id].feedback;
    state=rebut(state,answer.index,debate.evidence);
    assert.equal(state.cases[file.id].round,round,'a repeated submit must not skip the readable result');
    assert.equal(state.cases[file.id].feedback,feedback);
    state=continueCase(state);
   }
   const sequence=shuffleChoices(file.sequence,`${seed}:${file.id}:reconstruction:0:sequence`);
   assert.equal(new Set(sequence.map(choice=>choice.value)).size,file.sequence.length);
   for(const event of file.sequence)state=addSequence(state,sequence.find(choice=>choice.value===event)!.value);
   state=submitSequence(state);
   const person=shuffleChoices(schoolCharacters,`${seed}:${file.id}:verdict:0:verdict`).find(choice=>choice.value.id===file.culprit)!;
   state=vote(state,person.value.id);
   const motive=shuffleChoices(file.motives,`${seed}:${file.id}:motive:0:motive`).find(choice=>choice.index===file.motive)!;
   state=explainMotive(state,motive.index);
   while(state.cases[file.id].phase==='closing')state=continueCase(state);
   assert.equal(state.cases[file.id].phase,'solved');
   assert.equal(state.cases[file.id].health,5);
   state={...state,active:null};
  }
 }
});
