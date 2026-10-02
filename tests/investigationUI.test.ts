import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const source=(file:string)=>readFileSync(new URL('../src/'+file,import.meta.url),'utf8');

test('notebook can only review registered evidence and both image inspectors use native modals',()=>{
 const notebook=source('ClassroomMystery.tsx'),field=source('FieldInvestigation.tsx');
 assert.doesNotMatch(notebook,/collectEvidence/);
 assert.match(notebook,/c\.evidence\.filter\(e=>p\.clues\.includes\(e\.id\)\)/);
 assert.match(notebook,/e\.id===inspection&&p\?\.clues\.includes\(e\.id\)/);
 assert.match(notebook,/<dialog ref=\{dialog\} className="evidence-inspection"/);
 assert.match(notebook,/querySelector<HTMLButtonElement>\('button:not\(:disabled\)'\)/);
 for(const code of [notebook,field])assert.match(code,/dialog\.current\?\.showModal\(\)/);
 assert.match(field,/final\?<button[^>]*onClick=\{onRegister\}/);
});
test('viewport rules retain dialogue/navigation rows and bound map content to its available row',()=>{
 const css=source('viewport.css'),entry=source('main.tsx'),app=source('App.tsx');
 assert.match(css,/height:100dvh/);
 assert.match(css,/grid-template-rows:auto minmax\(0,1fr\) auto auto/);
 assert.match(css,/\.map-layout\{[^}]*height:100%/);
 assert.ok(entry.indexOf("import './viewport.css'")>entry.indexOf("import './portraitFrames.css'"));
 assert.match(app,/<section className="map-screen" inert=\{mysteryOpen\|\|!!fieldInspection\|\|!!cutscene\}/);
 assert.match(app,/required=\{caseModalRequired\(game\)\}/);
});
