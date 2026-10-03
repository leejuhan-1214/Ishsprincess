import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {artRevision} from '../src/data/artRevision';
import {romanceArt,artPath,artOriginalPath} from '../src/data/romanceArt';
import {momentForScene} from '../src/data/romanceIllustrationMoments';
import {schoolById} from '../src/data/classroomMystery';

test('replaced CG previews and PNG downloads share the portrait cache revision',()=>{
 for(const art of romanceArt){
  for(const path of [artPath(art.id),artOriginalPath(art.id)]){
   assert.equal(new URL(path,'https://example.test/').searchParams.get('v'),artRevision);
  }
 }
 const portrait=readFileSync(new URL('../src/SchoolPortrait.tsx',import.meta.url),'utf8');
 assert.match(portrait,/import \{artRevision\}/);
 assert.ok(portrait.includes('?v=${artRevision}'));
});

test('Juhan fifth illustration and transition describe the same Sinanju activity',()=>{
 const moment=momentForScene('hangout-juhan-3-v1');
 assert.ok(moment);
 assert.equal(moment.id,'juhan-moment-05');
 assert.equal(moment.lines.length,4,'keep existing illustrated saves at the same line');
 assert.match(moment.lines.map(line=>line.text).join(' '),/시난주/);
 assert.match(moment.bridge,/시난주/);
 assert.doesNotMatch(moment.bridge,/종이 상자/);
});

test('profiles describe the visible gamer redesign and Worlds anxious attachment',()=>{
 assert.match(schoolById.juhan.bio,/여학생/);
 assert.match(schoolById.juhan.bio,/헤드셋/);
 assert.match(schoolById.juhan.bio,/게임/);
 assert.match(schoolById.juhan.bio,/얼터에고/);
 assert.doesNotMatch(schoolById.juhan.bio,/흰 꽃|청록색 카디건/);
 assert.match(schoolById.world.bio,/질투와 불안/);
});
