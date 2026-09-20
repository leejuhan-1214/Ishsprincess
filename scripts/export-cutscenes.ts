import {createRequire} from 'node:module';
import {copyFile, mkdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {endings} from '../src/data/endings';
import {characterById} from '../src/data/characters';
import {endingCutscene,eventCutscene,type CutsceneSpec} from '../src/engine/cutscenes';
import type {CharacterId,LocationId} from '../src/types';

const require=createRequire(import.meta.url);
const sharp=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp') as typeof import('sharp');
const scriptDir=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(scriptDir,'..');
const assets=path.join(root,'public','assets');
const output=path.resolve(process.argv[2]??path.join(root,'exports','reaction-cutscenes'));
const width=640,height=360,framesPerBeat=3,delay=600;
const characterOrder:CharacterId[]=['world','junyeon','hyunsol','taewoo','taehun','seoyul'];
const eventKinds=['closeness','confidence','jealousy','boundary','chance'] as const;
const eventLocations:Record<CharacterId,LocationId>={world:'band',junyeon:'chemistry',hyunsol:'chemistry',taewoo:'dance',taehun:'observatory',seoyul:'art'};

function xml(value:string){return value.replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]!));}
function wrap(value:string,limit:number){
 const words=value.replaceAll('{name}','주인공').split(/\s+/),lines:string[]=[];let current='';
 for(const word of words){const next=current?`${current} ${word}`:word;if([...next].length>limit&&current){lines.push(current);current=word;}else current=next;}
 if(current)lines.push(current);return lines.slice(0,3);
}
function tspans(lines:string[],x:number,start:number,gap:number){return lines.map((text,index)=>`<tspan x="${x}" y="${start+index*gap}">${xml(text)}</tspan>`).join('');}
function overlay(spec:CutsceneSpec,beat:number){
 const final=beat===2,accent=spec.mood==='bad'?'#cf8585':spec.mood==='true'?'#f1d294':spec.mood==='event'?'#eead8a':'#b7cfb8';
 const main=final?wrap(spec.title,16):wrap(spec.beats[beat],26),sub=final?wrap(spec.subtitle,28):[];
 return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
 <defs><linearGradient id="shade" x1="0" x2="1"><stop offset="0" stop-color="#071010" stop-opacity=".96"/><stop offset=".62" stop-color="#071010" stop-opacity=".38"/><stop offset="1" stop-color="#071010" stop-opacity=".05"/></linearGradient></defs>
 <rect width="${width}" height="${height}" fill="url(#shade)"/><rect width="${width}" height="18" fill="#020505"/><rect y="342" width="${width}" height="18" fill="#020505"/>
 <text x="38" y="223" fill="${accent}" font-family="Malgun Gothic" font-size="8" font-weight="700" letter-spacing="2">${xml(spec.label)}</text>
 ${final?`<text x="38" y="265" fill="#fff9eb" font-family="Malgun Gothic" font-size="${[...spec.title].length>15?28:34}" font-weight="700">${tspans(main,38,265,38)}</text><text x="40" y="324" fill="#e8e0d1" font-family="Malgun Gothic" font-size="12">${tspans(sub,40,324,18)}</text>`:`<text x="38" y="246" fill="#eee0cc" font-family="Georgia" font-style="italic" font-size="9">SCENE 0${beat+1}</text><text x="38" y="278" fill="#fffaf0" font-family="Malgun Gothic" font-size="17">${tspans(main,38,278,28)}</text>`}
 <circle cx="545" cy="326" r="3" fill="${accent}"/><circle cx="560" cy="326" r="3" fill="#ffffff55"/><circle cx="575" cy="326" r="3" fill="#ffffff55"/>
 </svg>`);
}
async function portrait(id:CharacterId){
 const meta=await sharp(path.join(assets,'cast.webp')).metadata(),panel=Math.floor((meta.width??2172)/6);
 return sharp(path.join(assets,'cast.webp')).extract({left:panel*characterOrder.indexOf(id),top:0,width:panel,height:meta.height??724}).resize(216,330,{fit:'cover'}).webp().toBuffer();
}
async function renderFrame(spec:CutsceneSpec,beat:number,subframe:number){
 const source=path.join(assets,`${spec.art??spec.background}.webp`),extra=subframe*5;
 const bg=await sharp(source).resize(width+extra,height+extra,{fit:'cover'}).extract({left:Math.floor(extra*.35),top:Math.floor(extra*.3),width,height}).modulate({brightness:spec.mood==='bad'?.63:.83,saturation:spec.mood==='bad'?.6:1}).toBuffer();
 const layers:{input:Buffer;left?:number;top?:number}[]=[];
 if(spec.character&&!spec.art)layers.push({input:await portrait(spec.character),left:width-226,top:22});
 layers.push({input:overlay(spec,beat),left:0,top:0});
 return sharp(bg).composite(layers).png().toBuffer();
}
async function exportAnimation(spec:CutsceneSpec,file:string){
 const pages:Buffer[]=[];
 for(let beat=0;beat<3;beat++)for(let frame=0;frame<framesPerBeat;frame++)pages.push(await renderFrame(spec,beat,frame));
 const canvas=sharp({create:{width,height:height*pages.length,pageHeight:height,channels:4,background:{r:0,g:0,b:0,alpha:1}}});
 await canvas.composite(pages.map((input,index)=>({input,left:0,top:index*height}))).webp({quality:76,effort:4,loop:0,delay:Array(pages.length).fill(delay)}).toFile(file);
}
function card(file:string,title:string,type:string){return `<article><img src="${file}" alt="${xml(title)}"><div><small>${xml(type)}</small><h2>${xml(title)}</h2><a href="${file}" download>파일 저장</a></div></article>`;}

await mkdir(path.join(output,'ending-cutscenes'),{recursive:true});
await mkdir(path.join(output,'surprise-cutscenes'),{recursive:true});
await mkdir(path.join(output,'signature-stills'),{recursive:true});
const manifest:string[]=['type,id,title,file'],cards:string[]=[];
let completed=0,total=endings.length+characterOrder.length*eventKinds.length;
for(const ending of endings){
 const spec=endingCutscene(ending.id),relative=`ending-cutscenes/${ending.id}.webp`;
 await exportAnimation(spec,path.join(output,relative));manifest.push(`ending,${ending.id},"${ending.title.replaceAll('"','""')}",${relative}`);cards.push(card(relative,ending.title,`${ending.type} ENDING`));
 process.stdout.write(`\r${++completed}/${total} ${relative}          `);
}
for(const id of characterOrder)for(const kind of eventKinds){
 const spec=eventCutscene(id,kind,eventLocations[id],`export-${id}-${kind}`),relative=`surprise-cutscenes/${id}-${kind}.webp`;
 await exportAnimation(spec,path.join(output,relative));manifest.push(`surprise,${id}-${kind},"${spec.title.replaceAll('"','""')}",${relative}`);cards.push(card(relative,`${characterById[id].name} · ${spec.title}`,'SURPRISE EVENT'));
 process.stdout.write(`\r${++completed}/${total} ${relative}          `);
}
for(const file of ['event-world.webp','event-junyeon.webp','event-hyunsol.webp','event-taewoo-fall.webp','event-taehun.webp','event-seoyul.webp'])await copyFile(path.join(assets,file),path.join(output,'signature-stills',file));
await writeFile(path.join(output,'manifest.csv'),manifest.join('\r\n'),'utf8');
await writeFile(path.join(output,'README.md'),`# RE:ACTION 컷신 보관본\n\n- 엔딩 애니메이션: 34개\n- 돌발 이벤트 애니메이션: 30개 (6명 × 5유형)\n- 대표 돌발 이벤트 원본 일러스트: 6장\n- 형식: 반복 재생되는 Animated WebP, 640×360, 약 5.4초\n\n\`index.html\`을 브라우저로 열면 전체를 미리 보고 개별 저장할 수 있습니다. 각 폴더의 WebP 파일을 직접 복사해도 됩니다. 주인공 이름이 들어가는 문장은 보관본에서 “주인공”으로 표시했습니다.\n`,'utf8');
await writeFile(path.join(output,'index.html'),`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>RE:ACTION 컷신 보관함</title><style>body{margin:0;background:#121b1c;color:#f8f1e5;font-family:"Malgun Gothic",sans-serif}header{padding:48px 5%;background:#1e3130}h1{font-size:34px;margin:0 0 10px}header p{color:#bccac5}main{padding:30px 5%;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:22px}article{background:#1a2727;border:1px solid #3a4b48;border-radius:10px;overflow:hidden}img{width:100%;display:block}article div{padding:16px}small{color:#d7aa89}h2{font-size:17px;margin:7px 0 15px}a{color:#fff;background:#45685d;padding:9px 13px;border-radius:5px;text-decoration:none;display:inline-block}</style></head><body><header><h1>RE:ACTION 컷신 보관함</h1><p>엔딩 34개 · 돌발 이벤트 30개 · 각 카드의 파일 저장 버튼을 누르세요.</p></header><main>${cards.join('')}</main></body></html>`,'utf8');
process.stdout.write(`\n완료: ${output}\n`);
