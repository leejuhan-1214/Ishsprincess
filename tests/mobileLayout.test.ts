import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=(path:string)=>readFileSync(new URL(path,import.meta.url),'utf8');
const css=read('../src/mobile.css'),ui=read('../src/RomanceGame.tsx');

test('mobile layout uses visible height and safe areas without blocking user zoom',()=>{
 const html=read('../index.html');
 assert.match(html,/viewport-fit=cover/);
 assert.match(html,/interactive-widget=resizes-content/);
 assert.doesNotMatch(html,/user-scalable=no|maximum-scale/);
 assert.match(css,/var\(--game-viewport-height,100dvh\)/);
 for(const side of ['top','right','bottom','left'])assert.ok(css.includes(`safe-area-inset-${side}`));
 assert.match(ui,/bindGameViewport\(window,document\.documentElement\)/);
 assert.match(read('../src/main.tsx'),/import '\.\/mobile\.css'/);
});

test('phone controls retain readable inputs, touch targets and a separate landscape layout',()=>{
 assert.match(css,/min-height:44px/);
 assert.match(css,/romance-name-box input,.romance-settings select\)\{font-size:16px\}/);
 assert.match(css,/@media\(max-height:500px\) and \(min-width:601px\)/);
 assert.match(css,/grid-template-columns:minmax\(0,\.8fr\) minmax\(0,1\.2fr\)/);
 assert.match(css,/grid-template-columns:repeat\(6,minmax\(0,1fr\)\)/);
 assert.match(ui,/대사창을 터치하면 이어집니다/);
 assert.match(ui,/document\.activeElement\.blur\(\)/);
});

test('phone portraits constrain width and height by their original proportions',()=>{
 assert.match(read('../src/SchoolPortrait.tsx'),/'--portrait-aspect':width\/height/);
 assert.match(css,/height:min\(100cqh,calc\(44cqw \/ var\(--portrait-aspect,\.75\)\)\)/);
 assert.match(css,/height:min\(100cqh,calc\(80cqw \/ var\(--portrait-aspect,\.75\)\)\)/);
});
