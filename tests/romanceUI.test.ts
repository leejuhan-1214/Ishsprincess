import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const ui=readFileSync(new URL('../src/RomanceGame.tsx',import.meta.url),'utf8');
const section=(start:string,end:string)=>ui.slice(ui.indexOf(start),ui.indexOf(end,ui.indexOf(start)));

test('title and menus do not advertise future trials or a special Junyeon route',()=>{
 const title=section('{!game?<section','{game.phase===');
 const menu=section("{panel==='menu'&&",'</Modal>');
 const forbidden=/학급재판|FINAL TRIAL|5장|1~4장|흑막|준연의|EDITION|로맨스 스토리/;
 assert.doesNotMatch(title,forbidden);
 assert.doesNotMatch(menu,forbidden);
 assert.doesNotMatch(ui,/game\.phase==='trial-briefing'/);
});

test('notebook and gallery show only encountered content without future totals',()=>{
 const notebook=section("{panel==='notebook'&&(notebook.length", "{panel==='bonds'");
 assert.match(ui,/const notebook=memoryEvidence\.filter\(c=>game\?\.clues\.includes\(c\.id\)\)/);
 assert.doesNotMatch(notebook,/5장|재판|1~4장|c\.code|c\.chapter/);
 assert.doesNotMatch(ui,/clues\.length\}\/8|seenArt\.length\} \/ \{romanceArt\.length/);
 assert.match(ui,/romanceArt\.filter\(art=>seenArt\.includes\(art\.id\)\)/);
});

test('relationships and focus choices use the same neutral presentation for every classmate',()=>{
 const bonds=section("{panel==='bonds'&&game", "{(panel==='save'");
 const focus=section("{game.phase==='focus'", "{game.phase==='activity-invite'");
 assert.doesNotMatch(bonds,/junyeon|junyeonCap|상한|70|forgive|exclude/);
 assert.doesNotMatch(focus,/junyeon|3~5|친구로/);
});

test('map gates continuing on current obligations and offers a location shortcut',()=>{
 assert.match(ui,/const pendingEvents=game\?pendingMainEvents\(game\):\[\]/);
 assert.match(ui,/disabled=\{pendingEvents\.length>0\}/);
 assert.match(ui,/onClick=\{\(\)=>setPlace\(pendingEvents\[0\]\.location\)\}/);
 assert.match(ui,/locationImage\(place\)/);
});
