import test from 'node:test';
import assert from 'node:assert/strict';
import {activeSceneArt,revealedCount} from '../src/engine/dialoguePresentation';
import {memoryEvidence} from '../src/data/romanceMystery';
import {romanceArt} from '../src/data/romanceArt';
import {readFileSync} from 'node:fs';
test('new sentence never borrows previous reveal length',()=>{
 assert.equal(revealedCount({key:'a',count:99},'b',50,false),0);
 assert.equal(revealedCount({key:'b',count:99},'b',50,false),50);
 assert.equal(revealedCount({key:'a',count:0},'b',50,true),50);
});
test('CG stays through local conversation and stops at a location transition',()=>{
 const lines=[{speaker:'narrator' as const,text:'a',art:'world-ending'},{speaker:'world' as const,text:'b'},{speaker:'narrator' as const,text:'next day',location:'gate' as const},{speaker:'world' as const,text:'c'}];
 assert.equal(activeSceneArt(lines,1),'world-ending');
 assert.equal(activeSceneArt(lines,3),undefined);
 assert.equal(activeSceneArt([{speaker:'narrator',text:'different scene'}],0),undefined);
});
test('four discoveries each have distinct scene illustrations and seven distinct ending CGs',()=>{
 const discoveries=memoryEvidence.flatMap(c=>c.lines.flatMap(line=>line.art?[line.art]:[]));
 assert.equal(new Set(discoveries).size,4);
 assert.equal(romanceArt.length,18);
 assert.equal(romanceArt.filter(art=>art.id.endsWith('-ending')).length,7);
 for(const id of discoveries)assert.ok(romanceArt.some(art=>art.id===id));
});
test('dialogue reserves final text geometry and resets inner scroll for each sentence',()=>{
 const ui=readFileSync(new URL('../src/RomanceGame.tsx',import.meta.url),'utf8');
 assert.match(ui,/className="romance-line-measure" aria-hidden="true"/);
 assert.match(ui,/key=\{lineKey\} className="romance-line"/);
 assert.ok(ui.includes('key={`${game.sceneKey}:${game.line}:${!!game.response}`}'));
});
