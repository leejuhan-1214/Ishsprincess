import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {portraitDimensions} from '../src/SchoolPortrait';
import {schoolCharacters} from '../src/data/classroomMystery';

test('all eight full portrait frames use their actual PNG aspect ratios',()=>{
 assert.equal(Object.keys(portraitDimensions).length,schoolCharacters.length);
 for(const person of schoolCharacters){
  const png=readFileSync(new URL(`../public/assets/mystery/cast-${person.id}.png`,import.meta.url));
  assert.deepEqual(portraitDimensions[person.id],[png.readUInt32BE(16),png.readUInt32BE(20)]);
 }
});
test('full portrait layouts cannot inherit fixed image heights or absolute story placement',()=>{
 const css=readFileSync(new URL('../src/portraitFrames.css',import.meta.url),'utf8');
 assert.match(css,/actor-panel\{\s*position:relative;\s*inset:auto;/);
 assert.match(css,/actor-portrait\{[^}]*height:auto;[^}]*aspect-ratio:var\(--portrait-ratio\)/);
 assert.match(css,/classroom-standing/);assert.match(css,/profile-layout/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 const entry=readFileSync(new URL('../src/main.tsx',import.meta.url),'utf8');
 assert.ok(entry.indexOf("import './portraitFrames.css'")>entry.indexOf("import './trialTheme.css'"));
});
