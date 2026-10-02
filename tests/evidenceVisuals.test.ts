import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {caseFiles} from '../src/data/classroomMystery';
import {evidenceVisuals,evidenceArtwork} from '../src/data/evidenceVisuals';

const clues=caseFiles.flatMap(file=>file.evidence);
test('all 29 evidence records have distinct, self-contained accessible SVG illustrations',()=>{
 assert.equal(clues.length,29);
 assert.deepEqual(Object.keys(evidenceVisuals).sort(),clues.map(clue=>clue.id).sort());
 assert.deepEqual(Object.keys(evidenceArtwork).sort(),clues.map(clue=>clue.id).sort());
 const images=new Set<string>();
 const contents=new Set<string>();
 for(const clue of clues){
  const visual=evidenceVisuals[clue.id];
  assert.equal(visual.image,`assets/evidence/${clue.id}.svg`);
  assert.equal(visual.id,clue.id);
  assert.ok(visual.alt.includes(clue.name)&&visual.alt.includes(clue.description));
  assert.ok(visual.caption.includes('게임 내 가상 자료'));
  const source=readFileSync(new URL(`../public/${visual.image}`,import.meta.url),'utf8');
  assert.match(source,/viewBox="0 0 1200 820"/);
  assert.match(source,/role="img" aria-labelledby="title description"/);
  assert.ok(source.includes(`<title id="title">${clue.name}</title>`));
  assert.doesNotMatch(source,/<script|<foreignObject|<image\b|\b(?:href|onload|onclick)=/i);
  assert.ok(source.includes('게임 내 가상 자료'));
  images.add(visual.image);contents.add(source);
 }
 assert.equal(images.size,29);assert.equal(contents.size,29);
});

test('the illustrated records preserve key times, scores, permission boundaries and exact submitted dialogue',()=>{
 const read=(id:string)=>readFileSync(new URL(`../public/assets/evidence/${id}.svg`,import.meta.url),'utf8');
 assert.match(read('credit-source'),/15:58/);assert.match(read('credit-source'),/이서율/);assert.match(read('credit-source'),/전세계/);
 assert.match(read('credit-change'),/BAND-SHARED/);
 assert.match(read('credit-permission'),/16:50/);assert.match(read('credit-permission'),/권한 없음/);
 assert.match(read('credit-clock'),/17:42/);assert.match(read('credit-clock'),/16:42/);
 assert.match(read('score-session'),/S-28/);assert.match(read('score-session'),/84점/);assert.match(read('score-session'),/S-27/);assert.match(read('score-session'),/97점/);
 assert.match(read('score-baseline'),/TAEWOO-S27/);assert.match(read('score-baseline'),/REF-01/);
 assert.match(read('absence-door'),/17:20 ~ 17:50/);assert.match(read('absence-door'),/통행 금지 표시 없음/);
 assert.match(read('absence-nurse'),/17:29/);assert.match(read('absence-nurse'),/17:46/);
 assert.match(read('poem-allowed'),/weather-note.txt/);
 assert.match(read('poem-message'),/지금 초안은 아니야. 새로 완성해서 줄게./);
 assert.match(read('echo-clock'),/17:36/);assert.match(read('echo-clock'),/17:40/);
 assert.match(read('echo-acl'),/DEMO-PRESSURE/);
 assert.match(read('echo-resume'),/예약 작업도 함께 복원/);assert.match(read('echo-resume'),/17:30/);
 assert.match(read('echo-stop'),/계속 실행 중/);
});

test('evidence viewer resolves deployment base paths and supports scrolling zoom plus local download',()=>{
 const source=readFileSync(new URL('../src/EvidenceViewer.tsx',import.meta.url),'utf8');
 assert.match(source,/import\.meta\.env\.BASE_URL/);
 assert.match(source,/download=\{/);assert.match(source,/aria-pressed=\{zoomed\}/);
 assert.match(source,/useEffect\(\(\)=>setZoomed\(false\),\[evidenceId\]\)/);
 const css=readFileSync(new URL('../src/evidenceViewer.css',import.meta.url),'utf8');
 assert.match(css,/overflow:auto/);assert.match(css,/\.is-zoomed img\{width:200%/);
 assert.match(css,/min-height:44px/);
});

test('every evidence label fits inside the scalable document canvas',()=>{
 for(const clue of clues){
  const svg=readFileSync(new URL(`../public/assets/evidence/${clue.id}.svg`,import.meta.url),'utf8');
  for(const match of svg.matchAll(/<text x="([\d.]+)" y="([\d.]+)" font-size="([\d.]+)"[^>]*text-anchor="([^"]+)">([^<]*)<\/text>/g)){
   const [,xx,yy,size,anchor,raw]=match;
   const label=raw.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
   const width=Array.from(label).reduce((n,char)=>n+(/[\u0000-\u007f]/.test(char)?0.55:1),0)*Number(size);
   const x=Number(xx),y=Number(yy);
   const left=anchor==='middle'?x-width/2:anchor==='end'?x-width:x;
   const right=anchor==='middle'?x+width/2:anchor==='end'?x:x+width;
   assert.ok(left>=0&&right<=1200&&y>=0&&y<=820,`${clue.id}: ${label}`);
  }
 }
});
