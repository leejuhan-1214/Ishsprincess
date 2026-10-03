import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {locations} from '../src/data/characters';

const component=readFileSync(new URL('../src/CampusMap.tsx',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/campus.css',import.meta.url),'utf8');

test('mobile location picker includes every campus location once across its groups',()=>{
 const zoneDefinition=component.slice(component.indexOf('const zones=['),component.indexOf('type Props='));
 const groupedPlaces=[...zoneDefinition.matchAll(/places:\[([^\]]+)\]/g)].flatMap(match=>[...match[1].matchAll(/'([^']+)'/g)].map(place=>place[1]));
 assert.equal(new Set(groupedPlaces).size,groupedPlaces.length);
 assert.deepEqual([...groupedPlaces].sort(),locations.map(place=>place.id).sort());
 const picker=component.slice(component.indexOf('className="campus-mobile-location"'),component.indexOf('className="campus-heading"'));
 assert.match(picker,/<select aria-label="갈 장소" value=\{selected\}/);
 assert.match(picker,/onChange=\{event=>\{setFilter\('all'\);onSelect\(event\.target\.value as LocationId\);\}\}/);
 assert.match(picker,/<optgroup key=\{zone.id\} label=\{zone.name\}/);
 assert.match(picker,/person\.place===place\.id&&person\.available/);
 assert.match(picker,/discoveries\[place.id\]\?'확인할 기록'/);
});

test('mobile campus controls have touch-sized targets and visible keyboard focus',()=>{
 assert.match(css,/\.campus-mobile-location\{display:none\}/);
 assert.match(css,/@media\(max-width:600px\)/);
 assert.match(css,/\.campus-directory \.campus-mobile-location select\{[^}]*min-height:44px[^}]*font-size:16px/);
 assert.match(css,/\.campus-filters button\{min-height:44px;min-width:44px\}/);
 assert.match(css,/\.campus-mobile-location select:focus-visible\{outline:3px solid/);
 assert.match(css,/touch-action:manipulation/);
 assert.match(css,/@media\(hover:hover\)\{\.campus-place:hover/);
 assert.match(css,/\.romance-app \.romance-map \.campus-place\{min-height:89px/);
});

test('zero-valued discovery counts do not hide the empty state',()=>{
 assert.match(component,/!Object\.values\(discoveries\)\.some\(value=>!!value\)/);
 assert.doesNotMatch(component,/!Object\.keys\(discoveries\)\.length/);
});
