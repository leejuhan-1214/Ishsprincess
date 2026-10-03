import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {locations} from '../src/data/characters';

const component=readFileSync(new URL('../src/CampusMap.tsx',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/campus.css',import.meta.url),'utf8');

test('mobile card map includes every campus location once without a long native menu',()=>{
 const zoneDefinition=component.slice(component.indexOf('const zones=['),component.indexOf('type Props='));
 const groupedPlaces=[...zoneDefinition.matchAll(/places:\[([^\]]+)\]/g)].flatMap(match=>[...match[1].matchAll(/'([^']+)'/g)].map(place=>place[1]));
 assert.equal(new Set(groupedPlaces).size,groupedPlaces.length);
 assert.deepEqual([...groupedPlaces].sort(),locations.map(place=>place.id).sort());
 assert.doesNotMatch(component,/<select|<option|<optgroup/);
 assert.match(component,/className="campus-current" aria-live="polite"/);
 assert.match(component,/className="campus-place-thumb" src=\{locationImage\(place.id\)\}/);
 assert.match(component,/aria-pressed=\{selected===place.id\}/);
 assert.match(component,/onClick=\{\(\)=>choose\(place.id\)\}/);
 assert.match(component,/filter==='people'&&<div className="campus-friend-finder"/);
 assert.match(component,/students.filter\(person=>person.available\)/);
 assert.match(component,/onClick=\{\(\)=>choose\(person.place\)\}/);
});

test('mobile campus controls have touch-sized targets and visible keyboard focus',()=>{
 assert.match(css,/@media\(max-width:600px\)/);
 assert.match(css,/\.campus-filters button\{min-height:44px;min-width:44px\}/);
 assert.match(css,/\.campus-friend-finder button:focus-visible\{outline:3px solid/);
 assert.match(css,/\.campus-controls\{position:sticky;top:-6px/);
 assert.match(css,/touch-action:manipulation/);
 assert.match(css,/@media\(hover:hover\)\{\.campus-place:hover/);
 assert.match(css,/\.romance-app \.romance-map \.campus-place\{position:relative;min-height:82px/);
 assert.match(css,/\.romance-app \.romance-map \.campus-place-grid\{display:contents\}/);
 assert.match(css,/\.romance-app \.romance-map \.campus-zones\{[^}]*grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
});

test('zero-valued discovery counts do not hide the empty state',()=>{
 assert.match(component,/!Object\.values\(discoveries\)\.some\(value=>!!value\)/);
 assert.doesNotMatch(component,/!Object\.keys\(discoveries\)\.length/);
});
