import {existsSync,readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=resolve(root,'art-prompts/expansion-v6');
const people=['world','hyunsol','taewoo','taehun','seoyul','juhan','minhyuk','junyeon'];
const places=['gate','classroom','hallway','garden','cafeteria','library','chemistry','media','computer','observatory','band','art','dance','auditorium','roof','walk'];
const bridges={
  "hangout-world-1-v1": "세계가 안내한 길 끝에서 밴드실 문이 열렸고, 책상 위 녹음기의 재생등이 먼저 눈에 들어왔다.",
  "hangout-world-1-v2": "방금 녹음은 지우고 밴드실 마이크로 다시 해 보기로 했지만, 소개말 앞에서 세계의 입술이 또 한번 멈췄다.",
  "hangout-world-2-v1": "기타 케이블을 연결한 세계가 노래를 시작하려다 눈앞을 가린 마이크대를 올려다봤다.",
  "hangout-world-2-v2": "쟁반을 비우고 정원으로 나온 세계는 휴대폰을 꺼내 이번에는 만두 대신 사진 세 장을 내 앞에 놓았다.",
  "hangout-world-3-v1": "악보를 가방에 넣고 옥상에서 내려온 우리는 촬영하는 사람이 없는 정원 벤치에 앉았다.",
  "hangout-world-3-v2": "빌릴 책을 찾고 정원으로 나오자, 노래를 기다리던 세계의 시선이 먼저 내 어깨에 걸린 햇빛을 따라갔다.",
  "hangout-world-4-v1": "내 손을 확인한 세계가 밴드실까지 따라오라며 무대 인사 원고를 반으로 접었다.",
  "hangout-world-4-v2": "별을 그린 포스터를 말려 두고 연습실로 돌아오니, 세계가 펼친 곡 목록에도 작은 빈칸이 남아 있었다.",
  "hangout-world-5-v1": "게시판에 붙일 사진은 나중에 고르기로 하고 밴드실로 들어가자, 세계는 녹화 중이던 기기부터 하나씩 껐다.",
  "hangout-world-5-v2": "우산 끝에서 마지막 빗방울이 떨어질 즈음 우리는 정원을 지나 학교 뒤 산책로로 접어들었다.",
  "hangout-hyunsol-1-v1": "모형 주위를 한 바퀴 돈 현솔이 이번에는 실험대 끝의 밀봉된 전시병을 가리켰다.",
  "hangout-hyunsol-1-v2": "물뿌리개 손잡이를 가지런히 맞춘 뒤 화학실로 돌아가니, 아직 자리를 정하지 못한 전시병 하나가 남아 있었다.",
  "hangout-hyunsol-2-v1": "노란 공책을 돌려받아 가방에 넣고 교실을 나서자 학생식당 쪽에서 익숙한 냄새가 올라왔다.",
  "hangout-hyunsol-2-v2": "현솔이 마지막 한입을 삼키고 식판 밑에서 꺼낸 것은 아직 답을 적지 못한 급식 설문지였다.",
  "hangout-hyunsol-3-v1": "소설을 빌려 나온 나는 정원 벤치에 책을 내려놓았고, 현솔은 가방 옆의 종이컵 두 개를 내 쪽으로 당겼다.",
  "hangout-hyunsol-3-v2": "현솔이 마른 땅에 발을 내려놓은 뒤 함께 화학실로 돌아가 손을 씻고 전시용 설명 카드를 펼쳤다.",
  "hangout-hyunsol-4-v1": "관측을 마치고 교실로 돌아온 현솔은 하늘 이야기 대신 내게만 보여 줄 설명문 끝부분을 펼쳤다.",
  "hangout-hyunsol-4-v2": "노란 표식이 붙은 선을 제자리에 꽂고 교실로 돌아오자 현솔이 책상 아래로 발표 연습 영상을 내밀었다.",
  "hangout-hyunsol-5-v1": "분식집으로 가기 전 정원 벤치에서 가방을 정리하던 현솔의 손에 계산기가 두 개 잡혔다.",
  "hangout-hyunsol-5-v2": "섞은 색이 마르도록 붓을 씻어 두고 정원으로 나온 현솔은 아무 용도도 적히지 않은 새 노트를 꺼냈다.",
  "hangout-taewoo-1-v1": "태우 옆의 테이프 선에 발을 맞추자 음악이 멈추고 우리 둘의 카운트만 남았다.",
  "hangout-taewoo-1-v2": "주운 종이를 파일에 끼워 연습실까지 가져오자 태우는 거울을 가릴 큰 천부터 펼쳤다.",
  "hangout-taewoo-2-v1": "간식을 먹고 쉬었다가 연습실에서 한 번 맞춰 보니, 마지막에 우리 발이 서로 다른 쪽을 향했다.",
  "hangout-taewoo-2-v2": "다시 단단해진 매듭을 보니, 태우에게 그 두 색의 뜻을 처음 물었던 산책이 떠올랐다.",
  "hangout-taewoo-3-v1": "영상은 그 프레임에서 멈춰 두고 연습실로 돌아왔는데, 태우는 음악을 켜지 않고 벽 옆에 주저앉았다.",
  "hangout-taewoo-3-v2": "헤드폰을 벗고 연습실에 도착한 태우가 방금 어려웠던 화면 대신 후배가 보낸 질문을 내게 보여 줬다.",
  "hangout-taewoo-4-v1": "별을 쥔 손을 주머니에 넣은 태우가 무대 아래로 내려와 내가 앉을 객석 앞에서 멈췄다.",
  "hangout-taewoo-4-v2": "새로 오린 별을 챙겨 강당에 도착하자, 태우가 가방에서 오래된 열쇠고리 하나를 따로 꺼냈다.",
  "hangout-taewoo-5-v1": "비를 피해 강당으로 돌아온 태우가 우산을 접으며 조금 전 공연 때 내가 있던 객석을 다시 가리켰다.",
  "hangout-taewoo-5-v2": "별일 없는 이야기를 한참 나눈 뒤 벤치에서 일어난 우리는 연습실을 지나쳐 정문 쪽으로 걸었다.",
  "hangout-taehun-1-v1": "가리키던 구름이 흩어지자 태훈은 책을 안고 옥상 안쪽의 쉼터로 몇 걸음 옮겼다.",
  "hangout-taehun-1-v2": "책 수레가 지나가도록 길을 비킨 태훈은 반납할 책 안에서 빼지 못한 책갈피를 살짝 만졌다.",
  "hangout-taehun-2-v1": "별 모양 빵을 나눠 먹고 도서관 앞에 도착했을 때 태훈은 책보다 먼저 잔뜩 흐려진 창밖을 확인했다.",
  "hangout-taehun-2-v2": "구름 그림 옆의 설명을 노트에 고쳐 적은 태훈이 도서관 반납함 앞에서는 전혀 다른 놀이를 제안했다.",
  "hangout-taehun-3-v1": "관측 도구를 정리하느라 뒤늦게 옥상에 올라가니 먼저 도착한 태훈이 하늘을 보던 고개를 돌렸다.",
  "hangout-taehun-3-v2": "표본을 상자에 돌려놓은 태훈은 옥상에 올라서자 돋보기 대신 며칠 동안 모은 그림자 사진을 펼쳤다.",
  "hangout-taehun-4-v1": "선생님을 기다리며 관측실 창가에 나란히 선 태훈이 행사 뒤의 하늘부터 걱정하기 시작했다.",
  "hangout-taehun-4-v2": "바뀐 예보를 적고 컴퓨터를 끈 우리는 관측실에 들러 하늘을 볼 자리를 미리 확인하기로 했다.",
  "hangout-taehun-5-v1": "봉투를 책 사이에 끼우던 태훈의 휴대폰에 관측회 안내가 도착했지만, 산책로에서의 발걸음은 멈추지 않았다.",
  "hangout-taehun-5-v2": "작은 돌을 화단 옆에 돌려놓고 산책로로 나온 태훈은 노트 대신 아직 이름이 없는 봉투를 꺼냈다.",
  "hangout-seoyul-1-v1": "고른 색종이를 들고 미술실에 도착하자 서율은 말리고 있는 포스터 옆의 빈 의자를 내 쪽으로 돌렸다.",
  "hangout-seoyul-1-v2": "화집을 함께 미술실 작업대까지 옮겨 놓자 서율이 책 속 인물 대신 자신을 가리켰다.",
  "hangout-seoyul-2-v1": "웃음이 잦아들자 서율은 긴 여운을 남긴 건반에서 손을 떼고 내가 누를 음 하나를 짚었다.",
  "hangout-seoyul-2-v2": "날아간 장식을 파일 안에 넣고 밴드실로 들어온 서율이 색종이보다 먼저 짧은 곡 하나를 틀었다.",
  "hangout-seoyul-3-v1": "손가락 사각형 안에 넣었던 하늘을 떠올리며 미술실에 뒤늦게 들어서니 서율의 그림에는 의자 한쪽만 비어 있었다.",
  "hangout-seoyul-3-v2": "종이컵의 얼굴을 사진으로 남기고 미술실에 돌아오자 서율이 작업대 아래의 낡은 그림 상자를 끌어냈다.",
  "hangout-seoyul-4-v1": "강당 테이프 정리를 끝내고 산책로에 나온 서율은 내 소매를 힐끗 본 뒤 스케치북을 가슴 쪽으로 당겼다.",
  "hangout-seoyul-4-v2": "비가 가늘어져 처마를 벗어나자 서율이 젖지 않게 끼워 둔 초대장 한 장을 스케치북에서 꺼냈다.",
  "hangout-seoyul-5-v1": "빈 종이는 다음을 위해 남겨 둔 서율이 바닥에 펼친 그림들 사이에서 다른 한 장을 조심스럽게 골랐다.",
  "hangout-seoyul-5-v2": "접힌 그림에 어울릴 테두리를 골라 보려고 우리는 교문 안으로 돌아가 미술실 작업대 앞에 섰다.",
  "hangout-juhan-1-v1": "내가 헤맨 길에 작은 표시를 남긴 주한이 종이 미로를 치우고 컴퓨터의 방향키 쪽으로 의자를 밀었다.",
  "hangout-juhan-1-v2": "팝업북을 반납하고 컴퓨터실로 돌아오는 길에 주한은 종이 장치보다 훨씬 서툴렀던 자신의 첫 게임을 떠올렸다.",
  "hangout-juhan-2-v1": "쿠키 가루를 털고 컴퓨터실로 돌아온 주한은 이번에는 입을 가리는 대신 화면의 마지막 문장을 가리켰다.",
  "hangout-juhan-2-v2": "붙잡은 냅킨을 간식 봉투 밑에 눌러 둔 주한이 정원 벤치에 앉아 휴대폰 화면을 뒤집었다.",
  "hangout-juhan-3-v1": "겨우 세운 종이 상자를 선반에 올려 두고 컴퓨터실로 돌아오자 주한이 두 번째 조작기를 내 자리 앞에 놓았다.",
  "hangout-juhan-3-v2": "손 그림자를 접고 미술실에 들어선 주한은 이번에는 빛이 아니라 자투리 종이를 접어 보기로 했다.",
  "hangout-juhan-4-v1": "한 사람에게 건넬 목소리를 녹음한 뒤 컴퓨터실에서 시연을 마치자 주한의 손이 종료 버튼 위에 머물렀다.",
  "hangout-juhan-4-v2": "하늘 사진은 저장하지 않은 채 옥상에서 내려온 주한이 컴퓨터실 화면 한쪽의 작은 알림 창을 열었다.",
  "hangout-juhan-5-v1": "분필 가루를 씻고 컴퓨터실에 도착하자 주한은 수정할 코드 대신 같이 놀 게임부터 실행했다.",
  "hangout-juhan-5-v2": "산책로를 한 바퀴 더 돈 뒤 돌아온 컴퓨터실에는 주한이 닫지 않은 게임의 첫 화면이 남아 있었다.",
  "hangout-minhyuk-1-v1": "복도 테이프를 정리하고 정문에 이르렀을 때 빗소리가 굵어지자 민혁은 내 손에 우산이 없는 걸 먼저 알아봤다.",
  "hangout-minhyuk-1-v2": "옮긴 의자를 밀어 넣은 민혁이 교실 뒤에 말려 두었던 우산 손잡이에서 젖었다 마른 종이를 떼어 냈다.",
  "hangout-minhyuk-2-v1": "귤이 다시 구르지 않게 쟁반 한쪽에 놓은 민혁은 식탁 위 목록의 마지막 칸에 표시를 했다.",
  "hangout-minhyuk-2-v2": "화단 팻말을 세우고 손을 씻어 식당에 앉으니 민혁이 휴대폰에 띄운 두 자리 사진을 번갈아 확대했다.",
  "hangout-minhyuk-3-v1": "수레를 정리한 뒤 잠시 헤어졌다가 점심에 식당에서 다시 만났을 때 민혁은 아직 식사를 시작하지 않고 있었다.",
  "hangout-minhyuk-3-v2": "바람이 센 옥상에서 내려와 정원에 앉았는데도 민혁의 손에는 계획표 대신 출석부가 남아 있었다.",
  "hangout-minhyuk-4-v1": "안내문을 저장하고 교실로 돌아온 민혁이 모두에게 보낼 종이는 덮고 자기 일정표만 펼쳤다.",
  "hangout-minhyuk-4-v2": "인사 연습이 끝나 교실로 돌아오자 민혁은 새 완장을 팔에 대 보다가 뻣뻣한 끈을 내려다봤다.",
  "hangout-minhyuk-5-v1": "같은 속도로 정문에 도착한 민혁은 교문 기둥 옆에서 멈춰 팔에 남아 있던 완장 매듭을 풀었다.",
  "hangout-minhyuk-5-v2": "버리지 않기로 한 종이 별을 파일에 넣어 교문까지 들고 나온 민혁이 행사 사진에서 다른 작은 기억을 찾아냈다.",
  "hangout-junyeon-1-v1": "칠판 네모 안에 적을 준비물을 확인하고 나니 교실 앞 책상에 옮겨야 할 묶음이 쌓여 있었다.",
  "hangout-junyeon-1-v2": "비커 간격을 다시 확인하고 교실로 돌아온 준연은 공책을 꺼내 지우개 자국이 많은 계산 쪽을 펼쳤다.",
  "hangout-junyeon-2-v1": "가벼워진 가방을 메고 도서관에서 정원까지 걸어온 준연은 가방에 남아 있던 작은 일정표를 꺼냈다.",
  "hangout-junyeon-2-v2": "꽃잎마다 다른 모양을 찾던 준연의 손이 무릎 위 조 편성표로 내려오더니 이름이 적힌 칸에서 멈췄다.",
  "hangout-junyeon-3-v1": "점심을 먹고 각자 볼일을 마친 뒤 나는 정원을 지나다가 준연이 앉아 있는 벤치 앞에서 다시 멈췄다.",
  "hangout-junyeon-3-v2": "녹음 음량을 맞추고 정원에서 쉬던 준연이 가방에 달린 행사 명찰을 뒤집어 빈 뒷면을 보여 줬다.",
  "hangout-junyeon-4-v1": "합주실 문이 닫힌 뒤 남은 정리를 하러 교실로 돌아오자 준연이 가방 끈에서 손가락을 떼고 내일 이야기를 꺼냈다.",
  "hangout-junyeon-4-v2": "연습하던 종이를 미술실에 두고 교실로 돌아온 준연은 책 사이에 따로 끼워 둔 찢어진 초대장을 꺼냈다.",
  "hangout-junyeon-5-v1": "짧은 산책을 마치고 교실에 돌아온 준연이 책상 위 수정 문서를 내 쪽에서도 보이게 돌려놓았다.",
  "hangout-junyeon-5-v2": "함께 읽은 글을 보낸 뒤 다음 쉬는 시간 교실에서 만난 준연은 휴대폰을 책상 위에 엎어 두고 있었다."
};
const moments=[];
const slots=new Set();
const ids=new Set();
const projectAsset=entry=>{
 const saved=String(entry.savedPath??'').replace(/\\+/g,'/');
 const marker='public/assets/romance-cg/',at=saved.lastIndexOf(marker);
 if(at<0)return undefined;
 const relative=saved.slice(at);
 if(relative!==marker+entry.id+'.png')throw new Error('Unexpected project asset path: '+entry.id);
 // savedPath may record the original author's absolute Windows checkout.
 // Resolve its project-relative suffix so a fresh clone is reproducible.
 return resolve(root,relative);
};
for(const filename of readdirSync(source).filter(name=>name.endsWith('.json')).sort()){
 const manifest=JSON.parse(readFileSync(resolve(source,filename),'utf8'));
 for(const entry of manifest.entries??[]){
  // Unfinished generations are normal while the art batch is being produced.
  // Do not publish a planned placeholder, file path, prompt, or missing image.
  if(typeof entry.generatedPath!=='string'||!entry.generatedPath.trim())continue;
  const asset=projectAsset(entry);
  if(!asset||!existsSync(asset))continue;
  const slot=entry.person+':'+entry.chapter+':'+entry.visit;
  if(!people.includes(entry.person)||!Number.isInteger(entry.chapter)||entry.chapter<0||entry.chapter>4||![1,2].includes(entry.visit)||!places.includes(entry.location))throw new Error('Invalid moment slot in '+filename+': '+slot);
  if(entry.id!==entry.person+'-moment-'+String(entry.chapter*2+entry.visit).padStart(2,'0'))throw new Error('ID does not match chapter/visit: '+entry.id);
  if(slots.has(slot)||ids.has(entry.id))throw new Error('Duplicate illustrated encounter: '+entry.id);
  if(typeof entry.title!=='string'||!entry.title.trim()||!Array.isArray(entry.lines)||entry.lines.length<3||entry.lines.length>4)throw new Error('Invalid scene text: '+entry.id);
  const lines=entry.lines.map(line=>{
   if(!['narrator','player',entry.person].includes(line.speaker)||typeof line.text!=='string'||!line.text.trim())throw new Error('Invalid line in '+entry.id);
   return {speaker:line.speaker,text:line.text};
  });
  const sceneId='hangout-'+entry.person+'-'+(entry.chapter+1)+'-v'+entry.visit;
  const bridge=bridges[sceneId];
  if(!bridge)throw new Error('Missing authored transition: '+sceneId);
  slots.add(slot);ids.add(entry.id);
  // Explicit allowlist: never include production prompts, local paths or refs
  // in the browser bundle.
  moments.push({id:entry.id,person:entry.person,chapter:entry.chapter,visit:entry.visit,title:entry.title,location:entry.location,lines,bridge});
 }
}
moments.sort((a,b)=>people.indexOf(a.person)-people.indexOf(b.person)||a.chapter-b.chapter||a.visit-b.visit);
const header="// Generated by scripts/build-illustration-moments.mjs from completed art manifests.\n// Deliberately contains only playable scene data, never image prompts or local paths.\nimport type {RLine,RPerson,RScene,RState} from '../romanceTypes';\nimport type {LocationId} from '../types';\n\nexport type IllustrationMoment={id:string;person:RPerson;chapter:number;visit:1|2;title:string;location:LocationId;lines:RLine[];bridge:string};\nexport const illustrationMoments:readonly IllustrationMoment[] = ";
const helpers=";\n\nconst byScene=new Map(illustrationMoments.map(moment=>[\n 'hangout-'+moment.person+'-'+(moment.chapter+1)+'-v'+moment.visit,moment\n]));\nexport function momentForScene(sceneId:string):IllustrationMoment|undefined{return byScene.get(sceneId);}\n\n/** Opt-in at encounter ENTRY only. Old saves keep their exact dialogue cursor. */\nexport function withIllustratedMoment(scene:RScene,state:RState):RScene{\n const moment=momentForScene(scene.id);\n if(!moment||!state.flags.includes('art:moment:'+scene.id))return scene;\n const prelude:RLine[]=moment.lines.map(line=>({\n  ...line,text:line.text.replaceAll('{name}',state.name),art:moment.id,location:moment.location\n }));\n // A marker with no art ends this CG even when both portions share a room.\n // Keep the original title/location/choices/memory and all original CG beats.\n const transition:RLine={\n  speaker:'narrator',location:scene.location,\n  text:moment.bridge\n };\n return {...scene,lines:[...prelude,transition,...scene.lines]};\n}\n";
writeFileSync(resolve(root,'src/data/romanceIllustrationMoments.ts'),header+JSON.stringify(moments,null,2)+helpers,'utf8');
console.log('Illustrated moments: '+moments.length+'/80 completed entries emitted.');

