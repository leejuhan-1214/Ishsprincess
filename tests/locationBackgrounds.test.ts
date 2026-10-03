import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {locations,locationImage} from '../src/data/characters';

test('every campus location has its own real background, including an indoor hallway',()=>{
 assert.equal(locations.length,16);
 assert.ok(locations.some(place=>place.id==='hallway'));
 const paths=locations.map(place=>locationImage(place.id));
 assert.equal(new Set(paths).size,locations.length,'no room borrows another room background');
 const hashes=paths.map(path=>{
  const file=new URL(`../public/${path}`,import.meta.url);
  assert.ok(existsSync(file),path);
  const data=readFileSync(file);assert.ok(data.length>30000,path);
  return createHash('sha256').update(data).digest('hex');
 });
 assert.equal(new Set(hashes).size,locations.length,'renamed copies are not unique scenery');
 assert.notEqual(locationImage('hallway'),locationImage('walk'));
});
