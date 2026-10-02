import test from 'node:test';
import assert from 'node:assert/strict';
import {statSync,readFileSync} from 'node:fs';
import {schoolCharacters,schoolById,caseFiles,bondEpisodes,type ExtraId} from '../src/data/classroomMystery';
import {newClassroomState,caseAvailable,openCase,activeCase,continueCase,collectEvidence,beginTrial,rebut,addSequence,submitSequence,vote,explainMotive,retryTrial,solvedCases,beginBond,bondAvailable,mainBondAvailable,bondLines,continueBond,selectBondChoice,isClassroomState,type ClassroomState} from '../src/engine/classroomMystery';
import {isGameState,newGame,restoreGame} from '../src/engine/game';

function investigate(s:ClassroomState,id:string){
 s=openCase(s,id,13);
 while(activeCase(s)&&s.cases[id].phase==='opening')s=continueCase(s);
 s=openCase(s,id,13);
 for(const e of caseFiles.find(c=>c.id===id)!.evidence)s=collectEvidence(s,e.id);
 return beginTrial(s);
}
function solve(s:ClassroomState,id:string){
 const file=caseFiles.find(c=>c.id===id)!;s=investigate(s,id);
 for(const d of file.debates){s=rebut(s,d.target,d.evidence);assert.equal(s.cases[id].feedback?.ok,true);s=continueCase(s);}
 for(const event of file.sequence)s=addSequence(s,event);
 s=submitSequence(s);s=vote(s,file.culprit);s=explainMotive(s,file.motive);
 while(s.cases[id].phase==='closing')s=continueCase(s);
 return {...s,active:null};
}
function visitBond(s:ClassroomState,id:ExtraId,day:number,choice:number){
 s=beginBond(s,id,day);assert.equal(s.active?.kind,'bond');
 while(s.active?.kind==='bond'&&s.active.line<bondLines(s).length)s=continueBond(s);
 s=selectBondChoice(s,choice);
 while(s.active?.kind==='bond')s=continueBond(s);
 return s;
}
test('eight redesigned portraits and corrected female profiles exist',()=>{
 assert.equal(schoolCharacters.length,8);
 assert.match(schoolById.juhan.bio,/여학생/);
 assert.doesNotMatch(schoolById.juhan.bio,/남학생/);
 assert.match(schoolById.minhyuk.role,/풍기위원/);
 assert.match(schoolById.minhyuk.bio,/흰 제복/);
 for(const c of schoolCharacters)assert.ok(statSync(new URL('../public/assets/mystery/cast-'+c.id+'.png',import.meta.url)).size>10000);
 assert.doesNotMatch(readFileSync(new URL('../src/data/classroomMystery.ts',import.meta.url),'utf8'),/남학생/);
});
test('case and romance evidence identifiers are internally consistent',()=>{
 for(const c of caseFiles){
  assert.equal(new Set(c.evidence.map(e=>e.id)).size,c.evidence.length);
  assert.equal(c.sequence.length,4);
  for(const d of c.debates){assert.ok(d.claims[d.target]);assert.ok(c.evidence.some(e=>e.id===d.evidence));}
  assert.ok(schoolById[c.culprit]);
 }
 assert.equal(bondEpisodes.juhan.length,4);assert.equal(bondEpisodes.minhyuk.length,4);
});
test('cases unlock chronologically and require every evidence before trial',()=>{
 let s=newClassroomState();assert.equal(caseAvailable(s,'credit',-1),false);assert.equal(caseAvailable(s,'credit',2),true);assert.equal(caseAvailable(s,'absence',13),false);
 s=openCase(s,'credit',2);while(s.cases.credit.phase==='opening')s=continueCase(s);
 s=openCase(s,'credit',2);
 s=beginTrial(s);assert.equal(s.cases.credit.phase,'investigation');
 s=collectEvidence(s,'credit-source');s=collectEvidence(s,'credit-source');assert.equal(s.cases.credit.clues.length,1);
 s=collectEvidence(s,'unknown');assert.equal(s.cases.credit.clues.length,1);
});
test('all five cases solve through evidence, testimony, timeline and responsibility',()=>{
 let s=newClassroomState();
 for(const c of caseFiles){s=solve(s,c.id);assert.equal(s.cases[c.id].phase,'solved');assert.equal(s.cases[c.id].health,5);assert.equal(isClassroomState(s),true);}
 assert.equal(solvedCases(s),5);assert.equal(s.bonds.juhan.trust,48);
 const before=s;assert.deepEqual(continueCase(openCase(s,'echo',13)).bonds,before.bonds);
});
test('incorrect rebuttals cannot advance and five mistakes cause failed verdict',()=>{
 let s=investigate(newClassroomState(),'credit');const d=caseFiles[0].debates[0];
 s=rebut(s,(d.target+1)%3,d.evidence);assert.equal(s.cases.credit.health,4);assert.equal(s.cases.credit.round,0);
 const same=rebut(s,d.target,d.evidence);assert.deepEqual(same,s);
 s=continueCase(s);assert.equal(s.cases.credit.round,0);
 for(let i=0;i<4;i++){s=rebut(s,(d.target+1)%3,d.evidence);s=continueCase(s);}
 assert.equal(s.cases.credit.phase,'failed');assert.equal(s.cases.credit.health,0);
 s=retryTrial(s);assert.equal(s.cases.credit.phase,'debate');assert.equal(s.cases.credit.health,5);assert.equal(s.cases.credit.clues.length,caseFiles[0].evidence.length);
});
test('wrong chronology, accusation and motive lose argument health',()=>{
 let s=investigate(newClassroomState(),'credit');const c=caseFiles[0];
 for(const d of c.debates){s=rebut(s,d.target,d.evidence);s=continueCase(s);}
 for(const e of [...c.sequence].reverse())s=addSequence(s,e);
 s=submitSequence(s);assert.equal(s.cases.credit.health,4);assert.equal(s.cases.credit.phase,'reconstruction');assert.equal(s.cases.credit.order.length,0);
 for(const e of c.sequence)s=addSequence(s,e);
 s=submitSequence(s);s=vote(s,'juhan');assert.equal(s.cases.credit.health,3);assert.equal(s.cases.credit.phase,'verdict');
 s=vote(s,c.culprit);s=explainMotive(s,1);assert.equal(s.cases.credit.health,2);assert.equal(s.cases.credit.phase,'motive');
 s=explainMotive(s,0);assert.equal(s.cases.credit.phase,'closing');
});
test('personal stories cannot repeat the same day or skip story-linked cases',()=>{
 let s=visitBond(newClassroomState(),'minhyuk',0,0);assert.equal(bondAvailable(s,'minhyuk',0),false);
 s=visitBond(s,'minhyuk',1,0);assert.equal(mainBondAvailable(s,'minhyuk',2),false);
 s=solve(s,'credit');s=solve(s,'score');s=solve(s,'absence');assert.equal(bondAvailable(s,'minhyuk',2),true);
 s=beginBond(s,'minhyuk',2);assert.equal(isClassroomState(s),true);
});
test('both new characters have true romance, friendship and distance endings',()=>{
 for(const id of ['juhan','minhyuk'] as const)for(const finalChoice of [0,1,2]){
  let s=newClassroomState();for(const c of caseFiles)s=solve(s,c.id);
  for(const [episode,day] of [0,1,2,4].entries())s=visitBond(s,id,day,episode===3?finalChoice:0);
  assert.equal(s.bonds[id].visits,4);assert.equal(s.bonds[id].ending,finalChoice===0?'true':finalChoice===1?'friend':'distance');assert.equal(isClassroomState(s),true);
 }
});
test('choices reward only once and corrupted notebook saves are rejected',()=>{
 let s=beginBond(newClassroomState(),'juhan',0);while(s.active?.kind==='bond'&&s.active.line<bondLines(s).length)s=continueBond(s);
 s=selectBondChoice(s,0);assert.deepEqual(selectBondChoice(s,0),s);assert.deepEqual(selectBondChoice(s,-1),s);
 assert.equal(isClassroomState(s),true);
 const corrupt=structuredClone(s);corrupt.cases.credit.line=999;assert.equal(isClassroomState(corrupt),false);
 const missing=structuredClone(s);delete (missing.bonds as Partial<ClassroomState['bonds']>).juhan;assert.equal(isClassroomState(missing),false);
});
test('legacy saves and active notebook progress roundtrip through main save validation',()=>{
 const old=newGame('테스트',22);assert.equal(isGameState(old),true);
 const state={...old,classroom:beginBond(newClassroomState(),'juhan',0)};const recovered=restoreGame(JSON.parse(JSON.stringify(state)));assert.ok(recovered);assert.deepEqual(recovered.classroom,state.classroom);
});
