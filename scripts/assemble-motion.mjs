// Mechanically crop generated animation atlases; this script does not draw artwork.
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import os from 'node:os';
try{os.userInfo();}catch{if(typeof process.geteuid!=='function')process.geteuid=()=>0;}
const {register}=await import('tsx/esm/api');register();
const {cutsceneEpisodes}=await import('../src/data/cutsceneEpisodes.ts');
const {cutsceneDuration}=await import('../src/engine/motion.ts');
const {characterById}=await import('../src/data/characters.ts');
const require=createRequire(import.meta.url);
const sharp=require(process.argv[3]??'sharp');
const delivery=path.resolve(process.argv[2]??'../../deliverables/reaction-motion-cutscenes-42');
const gameAssets=path.resolve('public/assets/motion');
const width=512,height=288;
for(const dir of [gameAssets,...['GIF','WebP','atlas'].map(d=>path.join(delivery,d))])await fs.mkdir(dir,{recursive:true});
const receiptPath=path.join(delivery,'manifest.json');
let old=[];try{old=JSON.parse(await fs.readFile(receiptPath,'utf8'));}catch{}
const finished=[];
const exists=async file=>fs.access(file).then(()=>true,()=>false);
for(const episode of cutsceneEpisodes){
 const source=path.join(delivery,'sheets',episode.id+'.png');
 if(!await exists(source))continue;
 const sourceHash=createHash('sha256').update(await fs.readFile(source)).digest('hex');
 const prior=old.find(item=>item.id===episode.id&&item.sourceHash===sourceHash);
 const outputs=[path.join(gameAssets,episode.id+'.webp'),path.join(gameAssets,episode.id+'-poster.webp'),path.join(delivery,'atlas',episode.id+'.webp'),path.join(delivery,'WebP',episode.id+'.webp'),path.join(delivery,'GIF',episode.id+'.gif')];
 if(prior&&(await Promise.all(outputs.map(exists))).every(Boolean)){finished.push(prior);continue;}
 const meta=await sharp(source).metadata();
 if(Math.abs(meta.width/meta.height-4/3)>.025)throw Error(`Invalid 3-by-4 sheet aspect: ${episode.id}`);
 const frames=[];
 for(let i=0;i<12;i++){
  const column=i%3,row=Math.floor(i/3),inset=4;
  const left=Math.round(column*meta.width/3)+inset,top=Math.round(row*meta.height/4)+inset;
  const right=Math.round((column+1)*meta.width/3)-inset,bottom=Math.round((row+1)*meta.height/4)-inset;
  frames.push(await sharp(source).extract({left,top,width:right-left,height:bottom-top}).resize(width,height,{fit:'fill'}).png().toBuffer());
 }
 if(new Set(frames.map(frame=>createHash('sha256').update(frame).digest('hex'))).size!==12)throw Error(`Duplicate keyframe: ${episode.id}`);
 const duration=episode.beats.map(text=>cutsceneDuration(text,true));
 const delays=duration.flatMap(ms=>{const a=Math.round(ms*.18/10)*10,b=Math.round(ms*.22/10)*10,c=Math.round(ms*.28/10)*10;return[a,b,c,Math.round(ms/10)*10-a-b-c];});
 const atlas=await sharp({create:{width:width*3,height:height*4,channels:3,background:'#111'}}).composite(frames.map((input,i)=>({input,left:(i%3)*width,top:Math.floor(i/3)*height}))).webp({quality:88,effort:5}).toBuffer();
 await fs.writeFile(path.join(gameAssets,episode.id+'.webp'),atlas);
 await fs.writeFile(path.join(delivery,'atlas',episode.id+'.webp'),atlas);
 await sharp(frames[0]).webp({quality:85}).toFile(path.join(gameAssets,episode.id+'-poster.webp'));
 const canvas=()=>sharp({create:{width,height:height*12,pageHeight:height,channels:4,background:{r:0,g:0,b:0,alpha:1}}}).composite(frames.map((input,i)=>({input,left:0,top:i*height})));
 const webp=path.join(delivery,'WebP',episode.id+'.webp'),gif=path.join(delivery,'GIF',episode.id+'.gif');
 await canvas().webp({quality:86,effort:4,loop:0,delay:delays}).toFile(webp);
 await canvas().gif({colours:256,effort:6,dither:.6,loop:0,delay:delays}).toFile(gif);
 for(const file of [webp,gif]){const m=await sharp(file,{animated:true}).metadata();if(m.pages!==12||m.width!==width||m.pageHeight!==height)throw Error(`Invalid export ${file}`);}
 finished.push({id:episode.id,character:episode.character,name:characterById[episode.character].name,title:episode.title,beats:episode.beats,width,height,frames:12,columns:3,rows:4,delays,duration:delays.reduce((a,b)=>a+b,0),sourceHash,atlasBytes:atlas.length});
 console.log(`Packaged ${episode.id}`);
}
await fs.writeFile(receiptPath,JSON.stringify(finished,null,2));
await fs.writeFile(path.join(gameAssets,'manifest.json'),JSON.stringify(finished,null,2));
const readme=`RE:ACTION — 인물 동작 컷씬 42개\n\n6명 × 7장면, 장면마다 서로 다른 인물 자세를 그린 12프레임 키프레임 애니메이션입니다.\n정지 초상화를 이동하는 방식이 아닙니다. 연속 일러스트 방식이므로 고프레임 영상처럼 부드럽지는 않습니다. 음성 없음.\n\n압축을 모두 푼 뒤 00-컷씬-모아보기.html을 브라우저로 열면 캐릭터별로 재생·일시정지·저장할 수 있습니다.\nGIF/: 호환성이 좋은 움직이는 GIF\nWebP/: 용량이 작은 움직이는 WebP\natlas/: 게임에서 사용하는 12포즈 원화 모음\nbonus/: 앞서 승인한 태우의 매트 착지 시안\nPROMPTS.json: 내장 이미지 생성 도구에 사용한 전체 프롬프트\nCORRECTION-PROMPTS.txt: 배경 깨짐 보정에 사용한 추가 프롬프트\nmanifest.json: 장면 목록, 프레임 수와 재생 시간\n\n이번 교체 범위는 새로 추가했던 캐릭터별 7개, 총 42개입니다. 기존 엔딩 전체를 새로 만든 묶음은 아닙니다. 태우의 기존 돌발 이벤트에는 bonus의 승인 시안을 연결했습니다.\n`;
await fs.writeFile(path.join(delivery,'읽어주세요.txt'),readme,'utf8');
const html=`<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RE:ACTION · 움직이는 순간 42</title><style>
*{box-sizing:border-box}body{margin:0;background:#111a1d;color:#f4ebdf;font-family:system-ui,sans-serif}main{max-width:1050px;margin:auto;padding:30px 18px}header{display:flex;justify-content:space-between;gap:16px;align-items:center;flex-wrap:wrap}h1{font-family:serif;font-weight:400;font-size:28px}small{color:#c6b5a0}button,select,a{font:inherit}button,select{background:#273639;color:#f4ebdf;border:1px solid #738480;border-radius:5px;padding:10px;cursor:pointer}button.active{background:#b59c7c;color:#111}#screen{position:relative;aspect-ratio:16/9;width:100%;background:#202b2e;border-radius:7px;margin:18px 0;overflow:hidden}#frame{position:absolute;inset:0;background-size:300% 400%;background-repeat:no-repeat}#caption{min-height:60px;line-height:1.8;font-size:16px}nav{display:flex;gap:8px;flex-wrap:wrap;align-items:center}a{color:#e6cba3;padding:10px}#list{display:grid;grid-template-columns:repeat(auto-fit,minmax(225px,1fr));gap:9px;margin-top:25px}#list button{text-align:left;line-height:1.6}#status{margin-left:auto;font-size:12px;color:#b3c2be}footer{color:#b3b6ac;font-size:12px;line-height:1.8;margin-top:30px}</style><main><header><div><small>RE:ACTION / MOTION EDITION</small><h1>움직이는 순간 42</h1></div><select id="character" aria-label="캐릭터 선택"></select></header><h2 id="title"></h2><div id="screen"><div id="frame" role="img" aria-label="인물 동작 애니메이션"></div></div><p id="caption"></p><nav><button id="play">일시정지</button><button id="replay">처음부터</button><button id="next">다음 컷씬</button><a id="gif" download>GIF 저장</a><a id="webp" download>WebP 저장</a><span id="status"></span></nav><div id="list"></div><footer>캐릭터별 7개 · 각 12프레임 · 내장 이미지 생성으로 새로 그린 연속 일러스트 애니메이션<br>GIF나 WebP 파일을 따로 복사해 보관할 수 있습니다. 인터넷 없이도 재생됩니다.</footer></main><script>
const DATA=${JSON.stringify(finished).replaceAll('<','\\u003c')};
const el=id=>document.getElementById(id);let selected=DATA[0],frame=0,elapsed=0,playing=true,ready=false,last=performance.now();
for(const [id,name] of [...new Map(DATA.map(x=>[x.character,x.name]))]){const o=document.createElement('option');o.value=id;o.textContent=name;el('character').append(o)}
function renderList(){el('list').replaceChildren();DATA.filter(x=>x.character===el('character').value).forEach((x,i)=>{const b=document.createElement('button');b.textContent=String(i+1).padStart(2,'0')+' · '+x.title;b.className=x.id===selected.id?'active':'';b.onclick=()=>choose(x);el('list').append(b)})}
function paint(){el('frame').style.backgroundPosition=(frame%3)*50+'% '+Math.floor(frame/3)*100/3+'%';el('caption').textContent=selected.beats[Math.floor(frame/4)];el('status').textContent=(frame+1)+' / 12'}
function choose(x){selected=x;frame=0;elapsed=0;ready=false;playing=true;el('play').textContent='일시정지';el('title').textContent=x.name+' · '+x.title;el('gif').href='GIF/'+x.id+'.gif';el('webp').href='WebP/'+x.id+'.webp';const img=new Image();img.onload=()=>{if(selected.id!==x.id)return;el('frame').style.backgroundImage='url("atlas/'+x.id+'.webp")';ready=true;paint()};img.src='atlas/'+x.id+'.webp';renderList();paint()}
el('character').onchange=()=>choose(DATA.find(x=>x.character===el('character').value));el('play').onclick=()=>{playing=!playing;el('play').textContent=playing?'일시정지':'재생'};el('replay').onclick=()=>choose(selected);el('next').onclick=()=>{const a=DATA.filter(x=>x.character===selected.character);choose(a[(a.indexOf(selected)+1)%a.length])};
function tick(now){const delta=Math.min(now-last,100);last=now;if(playing&&ready&&!document.hidden){elapsed+=delta;if(elapsed>=selected.delays[frame]){elapsed-=selected.delays[frame];frame=(frame+1)%12;paint()}}requestAnimationFrame(tick)}choose(selected);requestAnimationFrame(tick);
</script></html>`;
await fs.writeFile(path.join(delivery,'00-컷씬-모아보기.html'),html,'utf8');
console.log(JSON.stringify({packaged:finished.length,expected:42,totalAtlasBytes:finished.reduce((a,x)=>a+x.atlasBytes,0)}));
