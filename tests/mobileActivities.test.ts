import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source=(name:string)=>readFileSync(new URL(`../src/${name}`,import.meta.url),'utf8');

test('small screens can choose any evidence using a native, labelled touch selector',()=>{
 const ui=source('TrialRevolver.tsx'),css=source('trialRevolver.css');
 assert.match(ui,/<select className="revolver-touch-select" aria-label="장전할 증거 선택" value=\{selected\?\?''\} disabled=\{disabled\}/);
 assert.match(ui,/onChange=\{event=>onSelect\(event\.target\.value\)\}/);
 assert.match(ui,/evidence\.map\(entry=><option key=\{entry\.id\} value=\{entry\.id\}>\{entry\.name\}<\/option>\)/);
 assert.match(css,/@media\(max-width:720px\),\(pointer:coarse\)/);
 assert.match(css,/\.trial-revolver \.revolver-touch-select\{[^}]*min-height:44px[^}]*font-size:16px/);
 assert.match(css,/\.romance-trial \.trial-revolver \.revolver-cylinder\{width:min\(100%,125px,max\(0px,calc\(100cqh - 54px\)\)\);height:auto\}/,'the drum must size from remaining card height with higher specificity than the legacy fixed size');
 assert.match(css,/\.romance-app \.romance-trial \.trial-revolver>header\{margin:0;padding:5px 6px\}/);
});

test('mobile activity controls retain finger-sized targets and bounded result scrolling',()=>{
 const ui=source('RomanceActivity.tsx'),css=source('romanceActivities.css');
 assert.match(css,/\.romance-together button\{min-height:44px/);
 assert.match(css,/\.rt-channels input\{height:44px;touch-action:pan-y/);
 assert.match(css,/@media\(max-width:380px\)/);
 assert.match(css,/@media\(max-height:500px\) and \(orientation:landscape\)/);
 assert.match(ui,/if\(result&&scroll\.current\)scroll\.current\.scrollTop=scroll\.current\.scrollHeight/);
 assert.match(ui,/if\(scroll\.current\)scroll\.current\.scrollTop=0/);
 assert.doesNotMatch(ui,/onTouchStart|onTouchEnd|onMouseDown|onMouseUp/,'use click activation so touch cannot fire duplicate attempts');
});

test('zoomed evidence pans locally and resets when a different record is opened',()=>{
 const ui=source('EvidenceViewer.tsx'),css=source('evidenceViewer.css');
 assert.match(css,/touch-action:pan-x pan-y pinch-zoom/);
 assert.match(css,/\.evidence-viewer-scroll\.is-zoomed img\{width:200%;min-width:0\}/);
 assert.match(ui,/viewport\.current\.scrollLeft=0;viewport\.current\.scrollTop=0/);
 assert.match(ui,/\},\[evidenceId,zoomed\]\)/);
 assert.match(ui,/<div ref=\{viewport\} className=/);
});
