/** Deterministic, self-contained SVG records. Run: node scripts/render-evidence.mjs */
import os from 'node:os';
import {mkdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
try{os.userInfo();}catch{if(typeof process.geteuid!=='function')process.geteuid=()=>0;}
const {register}=await import('tsx/esm/api');
register();
const {caseFiles}=await import('../src/data/classroomMystery.ts');
const {evidenceArtwork,evidenceVisuals}=await import('../src/data/evidenceVisuals.ts');
const directory=new URL('../public/assets/evidence/',import.meta.url);
await mkdir(directory,{recursive:true});
const esc=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]));
const ink='#252533',muted='#565569',paper='#fffdf8';
const colors={credit:'#ce2b6a',score:'#946011',absence:'#24639c',poem:'#177766',echo:'#a24830'};
const rect=(x,y,w,h,fill,stroke='none',rx=12)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}"/>`;
const line=(x1,y1,x2,y2,color='#bcb9c5',width=2,dash='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}"${dash?` stroke-dasharray="${dash}"`:''}/>`;
const txt=(x,y,value,size=24,color=ink,weight=500,anchor='start')=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${esc(value)}</text>`;
function wrap(value,units){
 let width=0,row='',result=[];
 for(const char of String(value)){
  const charWidth=/[\u0000-\u007f]/.test(char)?0.55:1;
  if(width+charWidth>units&&row){result.push(row);row='';width=0;}
  row+=char;width+=charWidth;
 }
 if(row)result.push(row);
 return result;
}
const block=(x,y,value,width=900,size=24,color=ink,weight=500,spacing=31)=>wrap(value,width/size).map((row,index)=>txt(x,y+index*spacing,row,size,color,weight)).join('');
function rows(data,x=88,y=224,width=1024,rowHeight=73){
 const split=Math.min(265,width*0.33);
 return data.map(([label,value],index)=>{
  const top=y+index*rowHeight;
  return rect(x,top-28,width,rowHeight-5,index%2===0?'#f0edf1':'#faf8f3','#d8d4dd',6)
   +block(x+18,top,label,split-30,20,muted,700,26)
   +block(x+split,top,value,width-split-22,24,ink,650,29);
 }).join('');
}
function card(x,y,width,height,label,value,accent){
 return rect(x,y,width,height,paper,'#cfc8d3')+rect(x,y,7,height,accent,'none',2)
  +txt(x+24,y+36,label,19,muted,700)+block(x+24,y+76,value,width-45,26,ink,750,34);
}
function chips(data,accent){
 return data.map(([label,value],index)=>card(88+(index%2)*528,192+Math.floor(index/2)*161,498,143,label,value,accent)).join('');
}
function trace(x,y,width,height,accent,seed=1){
 let path='';
 for(let n=0;n<=60;n++){
  const px=x+n*width/60;
  const py=y+height/2+Math.sin(n*.43+seed)*Math.cos(n*.17+seed*.3)*height*.39;
  path+=`${n===0?'M':'L'}${px.toFixed(2)},${py.toFixed(2)} `;
 }
 return line(x,y+height/2,x+width,y+height/2,'#d4ccd6',1)+`<path d="${path}" fill="none" stroke="${accent}" stroke-width="3.5"/>`;
}
function diagram(id,spec,accent){
 let out='';
 switch(spec.kind){
  case 'waveform':
   out=rect(88,193,1024,133,'#eee9ef','#d7ced9')+trace(106,213,988,90,accent,3)
    +card(88,349,498,122,'편곡','이서율',accent)+card(614,349,498,122,'보컬','전세계',accent)
    +txt(100,513,'15:58 저장본 · 두 사람 모두 이 버전의 공개에 동의',24,ink,700);break;
  case 'layers':
   out=rect(88,194,294,303,'#282534','#403948')+txt(109,230,'편집기 레이어',23,'#fff',750)
    +rect(110,249,249,65,'#54465f')+txt(128,290,'음원 · 그대로',22,'#fff')
    +rect(110,334,249,99,'#68344d',accent)+txt(128,373,'크레딧 레이어',21,'#fff',700)+txt(128,408,'16:42 수정',23,'#ffd1e2',750)
    +rows(spec.rows,409,222,703,72);break;
  case 'permissions':
   out=card(88,196,321,188,'읽기','허용',accent)+card(440,196,321,188,'파일 수정','권한 없음',accent)+card(792,196,321,188,'업로드','권한 없음',accent)
    +rect(88,409,1024,96,'#e7e6ed','#c8c1d0')+txt(115,447,'프로세스 실행 기록',20,muted,750)+txt(115,481,'얼터에고 최초 실행 16:50',29,ink,750);break;
  case 'queue':
   out=chips(spec.rows,accent)+line(583,259,614,259,accent,4);break;
  case 'clock':{
   const clocks=[['편집기 표시','17:42','#8a325b'],['실제 저장','16:42',accent]];
   out=clocks.map(([label,value,color],i)=>{
    const x=88+i*528;
    return rect(x,191,498,220,paper,'#cec8d3')+txt(x+249,236,label,25,muted,700,'middle')
     +txt(x+249,342,value,77,color,800,'middle');
   }).join('')+txt(600,460,'같은 순간 · 표시 설정만 +1시간',30,ink,750,'middle')+txt(600,506,'기준 시각을 맞추어 비교',22,muted,550,'middle');break;
  }
  case 'sessions':
   out=card(88,192,498,228,'S-28 / 공개 영상','원자료 84점',accent)+card(614,192,498,228,'S-27 / 전날 완주','97점',accent)
    +trace(109,310,449,79,accent,2)+trace(635,310,449,79,accent,9)
    +txt(600,472,'같은 사람의 기록 · 서로 다른 세션 ID',30,ink,750,'middle');break;
  case 'references':
   out=rows(spec.rows)+line(347,262,1080,262,accent,3);break;
  case 'history':
   out=rows(spec.rows)+txt(1110,530,'CHANGE LOG',18,accent,750,'end');break;
  case 'export':
   out=rect(88,190,1024,330,'#282534','#65566c')+txt(117,232,'순위 표 내보내기 · 16:22',26,'#fff',750)
    +card(112,256,477,159,'reference','개인 기록 기준',accent)+card(616,256,471,159,'공개 설명','동일 기준',accent)
    +txt(117,477,'원자료 변경 없음',25,'#f4e8cb',700)+txt(1084,477,'EXPORT',22,'#f4e8cb',750,'end');break;
  case 'recheck':
   out=chips(spec.rows,accent);break;
  case 'route':
   out=rect(88,191,492,316,'#eef0f3','#bfcbd6')+rect(122,219,424,212,paper,'#536c85')+txt(334,278,'교실',32,ink,750,'middle')
    +line(123,398,295,398,'#536c85',7)+line(374,398,546,398,'#536c85',7)+rect(295,366,79,63,accent,'none',4)
    +txt(334,406,'정문',20,'#fff',700,'middle')+txt(334,466,'기록 범위: 정문 카드 리더',23,ink,700,'middle')
    +rows(spec.rows,607,228,505,84);break;
  case 'inspection':
   out=rect(88,194,295,123,'#e4eaf1','#aebfce')+txt(235,267,'교실',30,ink,750,'middle')
    +rect(817,194,295,123,'#e4eaf1','#aebfce')+txt(964,267,'도서관',30,ink,750,'middle')
    +line(383,257,817,257,accent,5)+rect(477,221,246,72,paper,accent)+txt(600,266,'열 수 있는 보조문',24,ink,750,'middle')
    +card(88,341,498,151,'기록 센서 점검','17:20 ~ 17:50',accent)+card(614,341,498,151,'통행 상태','통행 금지 표시 없음',accent);break;
  case 'certificate':
   out=rows(spec.rows)+rect(887,476,204,58,'#e1eaf3','#7a9ab7',2)+txt(989,514,'교사 확인',24,accent,800,'middle');break;
  case 'battery':
   out=rect(116,185,277,338,'#262635','#67677a',25)+rect(130,217,249,273,'#f4f0f4','none',10)
    +rect(181,269,138,55,'none','#a24830',3)+rect(319,286,11,21,'#a24830','none',1)+txt(250,313,'0%',28,'#a24830',800,'middle')
    +txt(250,367,'17:18',40,ink,800,'middle')+txt(250,412,'전원 꺼짐',24,muted,750,'middle')
    +rows(spec.rows,447,243,665,86);break;
  case 'timeline':
   out=line(190,280,1008,280,accent,6)+`<circle cx="235" cy="280" r="13" fill="${accent}"/><circle cx="965" cy="280" r="13" fill="${accent}"/>`
    +txt(235,239,'17:36',51,accent,800,'middle')+txt(965,239,'17:40',51,accent,800,'middle')
    +card(88,320,498,139,'첫 사칭 메시지','발송',accent)+card(614,320,498,139,'로컬 얼터에고','실행 시작',accent)
    +txt(600,506,'그 이전 얼터에고 실행 프로세스 없음',28,ink,750,'middle');break;
  case 'split':
   out=chips(spec.rows,accent);break;
  case 'document':
   out=rect(88,190,1024,331,paper,'#c4b7a5',2)+rect(109,214,193,31,'#eee0c8','none',2)+txt(127,237,'교육용 시연',19,ink,750)
    +rows(spec.rows,109,289,981,61);break;
  case 'restore':
   out=rect(88,190,1024,126,'#faf4e8','#cabaa0')+rect(111,222,37,37,accent,'none',5)
    +`<path d="M120 239 L129 248 L142 230" stroke="#fff" stroke-width="4" fill="none"/>`
    +txt(165,250,'예약 작업도 함께 복원',32,ink,800)+txt(111,291,'선택된 체크 항목',20,muted,650)
    +rows(spec.rows.slice(1),88,366,1024,60);break;
  case 'address':
   out=card(88,190,498,129,'발송 수신 목록','1반 공개 테스트 주소록',accent)
    +card(614,190,498,129,'지난주 공개 테스트','주소록과 일치',accent)
    +rows(spec.rows.slice(1),88,376,1024,81);break;
  case 'face':
   out=rect(88,190,289,318,'#eee9e5','#cdc0b4')+rect(156,233,154,130,'#52434a','none',15)
    +`<circle cx="204" cy="280" r="9" fill="#fff"/><circle cx="265" cy="280" r="9" fill="#fff"/>`
    +line(204,322,265,322,'#fff',5)+txt(234,405,'이미지 복사본',26,ink,750,'middle')+txt(234,453,'≠ 실행 프로그램',23,accent,750,'middle')
    +rows(spec.rows,408,248,704,84);break;
  case 'stop':
   out=chips(spec.rows,accent);break;
  case 'poem':
   out=rect(88,191,453,319,paper,'#c2baaa',2)+rect(110,191,32,149,accent,'none',0)
    +txt(168,237,'비공개 시 초안',26,ink,750)+txt(168,278,'본문 재게시 안 함',21,muted,650)
    +[0,1,2,3].map((n)=>line(168,322+n*38,479-(n%2)*79,322+n*38,'#ccc4b6',8)).join('')
    +rows(spec.rows,569,229,543,72);break;
  case 'weather':
   out=rect(88,191,1024,318,'#f8fbf5','#b4c5be')+txt(116,232,'weather-note.txt',28,accent,800)
    +rows(spec.rows,107,286,986,61);break;
  case 'sync':
   out=card(88,192,498,156,'원본 위치','개인 메모 폴더',accent)+card(614,192,498,156,'자동 동기화 사본','작업 폴더',accent)
    +line(586,269,614,269,accent,5)+rows(spec.rows.slice(2),88,407,1024,70);break;
  case 'chat':
   out=rect(88,191,1024,322,'#e9eeed','#b6c7bf')+txt(111,231,'이서율',22,muted,750)
    +rect(111,248,677,64,'#fffdf8','#c5d3cd')+txt(135,290,'지금 시를 넣어도 돼?',29,ink,700)
    +txt(1087,348,'고태훈',22,muted,750,'end')+rect(269,365,818,79,'#dcece4','#a7bdaf')
    +txt(294,414,'지금 초안은 아니야. 새로 완성해서 줄게.',28,ink,750)
    +txt(600,488,'동의받은 관련 구간만 제출 · 다른 대화 제외',21,muted,650,'middle');break;
  case 'poster':
   out=rect(88,191,304,319,'#f1eee4','#bcb6a7',2)+txt(240,231,'전시 포스터',23,ink,750,'middle')
    +rect(174,270,124,88,'none','#766d79',6)+line(170,358,302,358,'#766d79',6)+line(181,358,172,403,'#766d79',5)+line(291,358,301,403,'#766d79',5)
    +txt(240,450,'시 본문 비공개',20,muted,700,'middle')+rows(spec.rows,419,246,693,85);break;
  default:out=rows(spec.rows);
 }
 return out;
}
function render(file,clue,spec,index){
 const accent=colors[file.id];
 const descriptions=wrap(clue.description,51);
 if(descriptions.length>5)throw new Error(`Description exceeds canvas: ${clue.id}`);
 return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="820" viewBox="0 0 1200 820" role="img" aria-labelledby="title description">
<title id="title">${esc(clue.name)}</title><desc id="description">${esc(clue.description)}</desc>
<style>text{font-family:'Noto Sans KR','Malgun Gothic','Apple SD Gothic Neo',sans-serif}text{font-variant-numeric:tabular-nums}</style>
${rect(0,0,1200,820,'#e9e7e3','none',0)}
${rect(0,0,1200,126,'#201e2c','none',0)}${rect(0,0,10,126,accent,'none',0)}
${txt(48,33,`CASE ${String(file.number).padStart(2,'0')} / ${clue.id.toUpperCase()}`,17,'#e4d3de',750)}
${txt(48,79,clue.name,35,'#fffaf0',800)}${txt(48,109,spec.label,18,'#e1d9e1',600)}
${txt(1152,44,`자료 ${String(index+1).padStart(2,'0')}`,20,'#ffe9a1',750,'end')}
${rect(48,148,1104,407,paper,'#c9c2cb')}${txt(88,178,spec.heading,22,accent,800)}
${diagram(clue.id,spec,accent)}
${rect(48,575,1104,212,'#faf8f4','#ccc5cd')}${txt(76,610,'관찰 내용',19,accent,800)}
${descriptions.map((value,i)=>txt(76,645+i*27,value,20,ink,550)).join('')}
${spec.note?txt(76,768,spec.note,15,muted,500):''}
${txt(600,809,'게임 내 가상 자료 · 실제 인물이나 학교의 기록이 아닙니다.',13,muted,500,'middle')}
</svg>
`;
}
let count=0;
for(const file of caseFiles){
 for(const [index,clue] of file.evidence.entries()){
  const spec=evidenceArtwork[clue.id];
  if(!spec||!evidenceVisuals[clue.id])throw new Error(`Missing evidence artwork: ${clue.id}`);
  const svg=render(file,clue,spec,index);
  await writeFile(new URL(`${clue.id}.svg`,directory),svg,'utf8');count++;
 }
}
if(Object.keys(evidenceArtwork).length!==count)throw new Error('Artwork contains an obsolete evidence id.');
console.log(`Rendered ${count} evidence illustrations in ${fileURLToPath(directory)}`);
