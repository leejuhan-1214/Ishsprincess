import assert from 'node:assert/strict';
import type {RState} from '../../src/romanceTypes';
import {romanceTrialRounds} from '../../src/data/romanceMystery';
import {trialPreludeDefinitions,trialSupportDefinitions} from '../../src/data/romanceTrialExperience';
import {submitArgument,continueArgument} from '../../src/engine/romance';
import {trialPrelude,solveTrialPrelude,trialSupport,solveTrialSupport} from '../../src/engine/trialExperience';

/** Full-game fixtures take the same checkpoints as the displayed trial. */
export function completeTrialRound(initial:RState):RState{
 let s=initial;
 const round=romanceTrialRounds[s.trialRound];
 assert.ok(round,'a discussion round must be active');
 if(trialPrelude(s)){
  const result=solveTrialPrelude(s,trialPreludeDefinitions[s.trialRound].answer);
  assert.ok(result.ok,result.text);s=result.state;
 }
 s=submitArgument(s,round.target,round.evidence);
 assert.equal(s.trialFeedback?.ok,true,'the authored claim and record must pass after its prelude');
 if(trialSupport(s)){
  const result=solveTrialSupport(s,trialSupportDefinitions[s.trialRound].answer);
  assert.ok(result.ok,result.text);s=result.state;
 }
 const next=continueArgument(s);
 assert.equal(next.trialRound,initial.trialRound+1,'a solved round must advance after its support response');
 return next;
}
