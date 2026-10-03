import type {RPerson} from '../romanceTypes';
import {shuffleChoices} from '../engine/choiceOrder';

// These are authored, optional things the two people actually do in a scene.
// No stopwatch, random question pool, or repeated three-round exam is involved.
export type ActivityKind = 'mix'|'rhythm'|'compose'|'debug'|'stars'|'pack'|'ratio'|'compare';
type Mix = {kind:'mix';channels:[string,string,string];moods:[string,string,string];notes:[number,number,number]};
type Rhythm = {kind:'rhythm';gestures:[string,string,string];pattern:number[];bpm:number};
type Compose = {kind:'compose';pieces:string[];required:number;footer:number;paper:string};
type Debug = {kind:'debug';code:string[];tests:{input:string;expected:string;actual:string}[];patches:string[];answer:number};
type Stars = {kind:'stars';nodes:{label:string;x:number;y:number}[];edges:[number,number][];start:number;end:number;via:number;blocked:number;caption:string};
type Pack = {kind:'pack';items:{label:string;size:number}[];capacity:number;required:number[];bag:string};
type Ratio = {kind:'ratio';components:{label:string;color:string;parts:number}[];total:number;unit:string;caption:string};
type Compare = {kind:'compare';before:string;after:string;rows:{label:string;left:string;right:string}[];differences:number[];caption:string};
export type ActivityTask = Mix|Rhythm|Compose|Debug|Stars|Pack|Ratio|Compare;
export type RomanceActivityData = {id:string;person:RPerson;chapter:number;title:string;invitation:string;goal:string;success:string;retry:string;after:string;task:ActivityTask};
type Context = [title:string,invitation:string,goal:string,success:string,after:string];
type Author = {context:Context;task:ActivityTask};
const mix=(channels:Mix['channels'],moods:Mix['moods'],notes:Mix['notes']):Mix=>({kind:'mix',channels,moods,notes});
const rhythm=(gestures:Rhythm['gestures'],pattern:number[],bpm:number):Rhythm=>({kind:'rhythm',gestures,pattern,bpm});
const compose=(pieces:string[],required:number,footer:number,paper:string):Compose=>({kind:'compose',pieces,required,footer,paper});
const debug=(code:string[],tests:Debug['tests'],patches:string[],answer:number):Debug=>({kind:'debug',code,tests,patches,answer});
const pack=(bag:string,items:Pack['items'],capacity:number,required:number[]):Pack=>({kind:'pack',bag,items,capacity,required});
const item=(label:string,size:number)=>({label,size});
const test=(input:string,expected:string,actual:string)=>({input,expected,actual});
const ratio=(labels:string[],parts:number[],total:number,caption:string):Ratio=>({kind:'ratio',components:labels.map((label,i)=>({label,color:['#637bd1','#e4b165','#81bca6'][i],parts:parts[i]})),total,unit:'칸',caption});
const compare=(before:string,after:string,rows:Compare['rows'],caption:string):Compare=>({kind:'compare',before,after,rows,differences:rows.flatMap((row,i)=>row.left!==row.right?[i]:[]),caption});
const row=(label:string,left:string,right=left)=>({label,left,right});
const stars=(labels:string[],via:number,blocked:number,caption:string):Stars=>({kind:'stars',nodes:labels.map((label,i)=>({label,x:[8,30,28,57,65,91][i],y:[52,17,83,30,80,47][i]})),edges:[[0,1],[0,2],[1,2],[1,3],[2,4],[3,4],[3,5],[4,5]],start:0,end:5,via,blocked,caption});
const a=(context:Context,task:ActivityTask):Author=>({context,task});

// Forty contextual invitations; genre follows the character, not a shared rotation.
const authored:Record<RPerson,Author[]>={
 world:[
  a(['이어폰 한쪽의 첫 관객','세계가 막 녹음한 세 소리를 들려준다. 공개할 음원이 아니라, 네가 편하게 들을 작은 연주를 같이 만들자는 부탁이다.','세 소리의 크기를 직접 바꾸고 원하는 분위기를 고른 뒤 들어 본다. 음악 취향에 정답은 없다.','이렇게 들으니까 네가 어디를 듣는지 알겠다. 다음 곡도 제일 먼저 들려줄게.','세계는 완성한 설정에 「첫 관객」이라는 이름을 붙인다.'],mix(['가까운 기타','낮은 베이스','작은 벨'],['조용한 복도','따뜻한 햇빛','장난스러운 앙코르'],[261.63,130.81,523.25])),
  a(['목을 쉬게 하는 합주','목이 잠긴 세계가 노래 대신 책상 위 손장단을 제안한다. 큰 소리를 내지 않고도 후렴을 같이 만들 수 있다.','왼쪽·오른쪽·쉼의 짧은 장단을 이어 본다. 순서 모드로 천천히 눌러도 같은 보상을 받는다.','내가 안 불러도 후렴이 있네. 네 박자까지 들어가니까 더 좋다.','세계는 노래를 더 부르지 않고 물을 마신다. 둘의 손장단만 악보에 남는다.'],rhythm(['왼손 톡','오른손 톡','한 박 쉼'],[0,1,0,2,1,2],76)),
  a(['찍지 않는 날의 작은 티켓','오늘은 카메라를 쉬기로 했다. 세계가 대신 네 손으로 만든 「관객 한 명」 티켓을 갖고 싶다고 한다.','다섯 조각 중 세 개를 배치한다. 「관객 한 명」은 넣고 「사진 없이 기억하기」는 맨 아래에 둔다.','사진보다 네가 오래 만졌네, 이 종이. 구기지 않고 케이스에 넣어야겠다.','세계는 티켓의 빈 뒷면에 너에게만 들려준 후렴을 적는다.'],compose(['관객 한 명','작은 기타 그림','창가의 오후','사진 없이 기억하기','손글씨 별표'],0,3,'ONE LISTENER')),
  a(['두 버전의 앙코르','세계가 관객에게 건넬 곡 소개를 네 옆에 펼친다. 리허설 때 정한 내용과 바뀐 초안을 비교해서, 함께 합의한 부분이 어디까지인지 표시해 보자고 한다.','왼쪽 메모와 오른쪽 초안에서 달라진 칸만 모두 고른다. 같은 내용을 바뀌었다고 표시하면 다시 확인한다.','후렴 말고 내 인사도 기억했네. 그러면 내일 그 부분은 네 쪽 보고 할게.','세계는 달라진 부분을 직접 확인한 뒤, 네가 읽기 쉬운 크기로 최종본을 다시 쓴다.'],compare('둘이 정한 리허설','인쇄 전 초안',[row('첫 곡','푸른 오후'),row('앙코르','짧은 후렴','전체 곡'),row('인사','연주 후','연주 전'),row('촬영','동의한 사람만'),row('기타 조율','시작 전'),row('관객 자리','둘째 줄','셋째 줄')],'공연 전에 둘이 다시 확인하는 메모')),
  a(['공연이 끝난 뒤의 한 소절','세계가 공연 녹음 대신 빈 밴드실에서 새 코드를 친다. 큰 무대를 위한 소리가 아니라 네 옆에서 작게 들려줄 버전을 골라 달라고 한다.','세 음색의 크기를 바꾸고 분위기를 고른다. 직접 듣거나 소리 설명을 확인하면 저장할 수 있다.','무대에선 못 들었던 소리네. 네가 이렇게 가까이 앉아서 그런가.','세계는 완성한 소리를 다음 공연 후보가 아닌, 둘이 다시 만날 때 들을 폴더에 남긴다.'],mix(['기타의 첫음','낮은 현의 울림','후렴의 끝음'],['조용한 뒷풀이','다음 만남의 예고','조금 더 머무는 저녁'],[220,110,329.63]))
 ],
 hyunsol:[
  a(['창가의 같은 색','현솔이 실제 실험 기구를 치운 뒤 태블릿의 색물 모형을 켠다. 방금 본 색을 재현해 보자며, 농도가 아니라 같은 비율부터 확인하자고 한다.','색물과 맑은 물을 1:3 비율로 총 12칸 채운다. +와 −로 조절한다. 실제 약품을 섞는 활동이 아니다.','딱 3칸만 진하게 했네. 감으로 붓지 않고 먼저 나눠 본 거, 좋다.','현솔은 맞춘 화면을 관찰 메모 옆에 놓고 네가 붙였던 색 이름을 조용히 적는다.'],ratio(['파란 색물','맑은 물'],[1,3],12,'태블릿 속 가상 색물 · 실제 화학 실험 아님')),
  a(['취향을 묻는 관찰자','점심을 다 먹은 현솔이 네가 기억하는 자기 취향을 궁금해한다. 방금 나눈 대화를 적은 메모와 일부러 틀리게 적은 카드를 나란히 놓는다.','대화 메모와 카드에서 달라진 항목만 모두 짚는다. 취향은 카드의 추측보다 본인이 한 말을 기준으로 삼는다.','매운 건 못 먹는다고 했지. 말한 걸 기억해 주는 게 결과 맞히는 것보다 좋네.','현솔은 장난 카드를 접고 다음 점심에도 같은 자리를 비워 두겠다고 말한다.'],compare('직접 들은 취향','장난으로 쓴 카드',[row('매운맛','순한 쪽','매운 쪽'),row('음료','찬 보리차'),row('좋아하는 반찬','감자조림'),row('식사 속도','천천히','아주 빠르게'),row('후식','귤'),row('점심 자리','창가')],'남의 마음을 추측하기 전에 실제로 들은 말부터')),
  a(['정원 관찰의 준비물','실험실을 정리한 현솔이 이번에는 밖에서 점심시간을 보내자고 한다. 휴대용 관찰 노트와 마실 물만 잊지 않으면 된다고 덧붙인다.','일곱 칸 안에 노트와 물을 넣는다. 실험실 기구나 약품은 가지고 나가지 않는다.','너랑 나갈 때까지 실험이라고 부를 필요는 없겠네. 오늘은 산책.','현솔이 가방 끈을 한 번 확인하고 먼저 정원 쪽 문을 연다.'],pack('정원 산책 주머니',[item('관찰 노트',2),item('마실 물',2),item('색연필',2),item('작은 간식',2),item('접는 방석',3),item('손수건',1)],7,[0,1])),
  a(['관찰표의 두 얼굴','교실에서 발표 자료를 접던 현솔이 그림에 맞춰 줄바꿈을 하다가 숫자 칸까지 옮겼다고 한다. 실험 노트 원본과 인쇄용 표를 함께 맞춰 보기로 한다.','숫자·단위·조건 중 원본과 달라진 칸만 고른다. 실제 재측정 결과를 추측해서 덮어쓰지 않는다.','보기 좋게 만드는 데 정신 팔려서 단위까지 옮길 뻔했네. 이건 네가 먼저 봤다.','현솔은 틀린 칸만 고친 뒤 자료를 덮는다. 남은 쉬는 시간은 너와 보내겠다고 한다.'],compare('관찰 노트','편집한 표',[row('빛 방향','왼쪽'),row('시간','14:10','14:01'),row('온도','22 ℃'),row('관찰 횟수','3회','2회'),row('배경','흰 종이'),row('기록 방식','같은 위치에서')],'평범한 편집 실수 확인 · 사건 자료가 아님')),
  a(['두 사람 몫의 보라색','정원에서 다음 전시의 색 카드를 보던 현솔이 파랑과 빨강을 같은 방식으로 늘려 보자고 한다. 실험을 다시 시작하는 대신 화면 속 색 조각만 나눠 갖는다.','파랑·빨강·흰색을 2:1:1 비율로 총 16칸 맞춘다. 비율과 전체 양을 동시에 확인한다.','양은 늘었는데 비율은 같네. 다음에도 이렇게 둘이 나눠 맡으면 되겠다.','현솔은 완성한 색 카드 뒷면에 실험 번호 대신 다음에 만날 날짜를 적는다.'],ratio(['파랑 조각','빨강 조각','흰색 조각'],[2,1,1],16,'가상 색 조각 · 실제 안료 혼합색을 예측하는 모델 아님'))
 ],
 taewoo:[
  a(['첫 여덟 박자 중 네 박자','태우는 방금 맞춘 마지막 포즈 앞에 손동작 네 개를 붙여 보자고 한다. 이번에는 시범만 보는 게 아니라 나란히 한 소절을 완성해 보자는 제안이다.','손동작의 순서를 따라 한다. 박자 도전을 켜면 간격도 맞추지만, 천천히 해도 끝까지 함께할 수 있다.','방금 나 따라 하다가 웃었지? 그게 더 잘 어울리는데.','태우는 어려운 동작으로 넘어가지 않고 방금 둘이 맞춘 부분을 한 번 더 춘다.'],rhythm(['손 위로','옆으로 톡','가슴 앞 박수'],[0,1,2,1],84)),
  a(['거울이 아니라 같은 쪽','태우가 네 옆에 서서 연습 메모 두 장을 보여 준다. 거울처럼 좌우를 바꿔 따라 하던 부분을 알아챘으니, 이번에는 둘이 같은 방향을 보는 표를 고치자고 한다.','기준 동작표와 복사한 표에서 달라진 박자를 모두 고른다. 좌우는 화면을 보는 사람의 왼쪽·오른쪽이다.','이젠 같은 쪽으로 가네. 부딪힐 걱정 말고 조금만 더 가까이 서도 되겠다.','태우는 맞춘 부분까지만 천천히 걸어 본 뒤, 물병 두 개를 나란히 세운다.'],compare('같은 방향 기준','옮겨 적은 동작',[row('1박','← 왼발','→ 오른발'),row('2박','● 멈춤'),row('3박','↑ 손 위로'),row('4박','→ 오른발','← 왼발'),row('5박','● 멈춤'),row('6박','↗ 오른쪽 대각선')],'서로 마주 보는 거울 안무가 아닌 나란히 선 기준')),
  a(['앉아서 만드는 새 후렴','태우는 오늘 무리하지 않고 의자에 앉아 손동작만 짜기로 한다. 네가 한 번 보여 주고 자기가 이어 붙일 수 있는 짧은 후렴이 목표다.','동작을 살펴본 뒤 기억해서 이어 본다. 순서 안내를 켜거나 박자 도전을 끌 수 있다. 다리 동작은 없다.','발 안 써도 재밌네. 네가 만든 마지막 박수는 공연 때도 써도 돼?','태우는 새 안무를 더 늘리지 않고 저장한다. 잠깐 쉬자는 약속도 끝까지 지킨다.'],rhythm(['왼손 펴기','오른손 톡','두 손 박수'],[2,0,1,0,2,1,2],72)),
  a(['커튼 뒤에서 물병 찾기','공연 준비가 끝난 태우가 대기 가방을 함께 확인한다. 소품을 전부 넣기보다 꼭 필요한 것을 가볍게 가져가기로 했다.','여섯 칸 안에 물과 작은 수건을 넣는다. 나머지는 무대 뒤에서 실제로 쓰고 싶은 물건을 고른다.','과하게 챙기지 않은 거 마음에 든다. 네가 여기 있는 것도 준비물로 쳐도 돼?','태우는 물을 한 모금 마신 뒤 가방을 네 옆에 내려놓는다.'],pack('커튼 뒤 대기 가방',[item('물병',2),item('작은 수건',1),item('머리끈',1),item('간단한 간식',2),item('큰 스피커',5),item('여벌 티셔츠',3)],6,[0,1])),
  a(['네가 기억한 마지막 포즈','공연을 마친 태우가 동작표를 정리하며 네가 객석에서 본 장면을 묻는다. 촬영 영상이 아니라 둘이 확인한 표를 기준으로 잘못 옮긴 부분만 찾아본다.','리허설 기준과 새 메모를 비교해 달라진 세부 동작을 고른다. 시간을 재지 않으니 천천히 확인한다.','다른 사람은 마지막 포즈만 보던데, 너는 그 전 동작도 봤네. 좀 뿌듯하다.','태우는 동작표를 가방에 넣고 네 옆으로 온다. 이번에는 연습 말고 같이 걸어가자고 한다.'],compare('리허설 때의 약속','공연 후 옮긴 메모',[row('시작 위치','왼쪽 뒤'),row('손 방향','손바닥 위','손등 위'),row('멈추는 박자','넷','셋'),row('시선','객석 가운데'),row('마지막 발','나란히','교차'),row('인사','모두 함께')],'연습을 함께 기억하는 동작표'))
 ],
 taehun:[
  a(['책갈피 위의 작은 별길','태훈이 문학책의 빈 책갈피에 별 여섯 개를 그린다. 실제 별자리를 외우는 시험이 아니라, 둘이 읽은 문장을 이어 보는 그림이다.','첫 문장에서 좋아한 문장을 지나 마지막 페이지까지 잇는다. 잉크가 번진 별은 피한다.','너는 이 문장을 지나가네. 나도 거기서 조금 오래 멈췄어.','태훈은 연결된 그림 아래에 책 제목과 오늘 날짜를 적는다.'],stars(['첫 문장','좋아한 문장','잉크 번짐','쉼표','뒷문장','마지막 장'],1,2,'우리가 만든 책갈피 별그림 · 실제 천문 지도 아님')),
  a(['책 속 구름과 창밖 구름','관측 대신 도서관에 머문 태훈이 구름 도감의 표시를 종이에 옮긴다. 창밖에서 본 것을 멋진 이름으로 바꾸기 전에, 옮기다 달라진 설명부터 찾아 달라고 한다.','도감의 관찰 항목과 필사 메모를 비교한다. 별명을 떠올리는 것과 관찰 사실을 적는 것은 다른 칸이다.','솜사탕은 별명 칸에 둘게. 네가 구분해 주니까 둘 다 안 지워도 되겠네.','태훈은 과학 메모 아래에 짧은 문장을 덧붙이고, 네가 빌린 책에도 책갈피를 끼워 준다.'],compare('도감 옆 관찰 항목','태훈의 필사',[row('윤곽','덩어리 모양'),row('색','밝은 흰색','짙은 회색'),row('사이 하늘','보임'),row('움직임','천천히 동쪽'),row('관찰 시각','12:40','12:04'),row('개인적인 별명','솜사탕')],'구름 이름을 단정하는 시험이 아닌 관찰 메모 대조')),
  a(['옥상에서 읽을 한 페이지','태훈이 네게 소리 내 읽어 줄 짧은 글을 고른다. 본문 앞뒤에 어떤 여백을 둘지 함께 정해 보자고 한다.','「함께 읽을 문장」을 넣고 「작가와 책 제목」을 마지막에 둔다. 남은 한 칸은 읽기 전이나 읽은 뒤의 기분으로 고른다.','그 여백이면 말을 조금 늦게 끝내도 되겠네. 나한테는 좋은 편집이야.','태훈은 네가 만든 순서대로 천천히 한 페이지를 읽는다.'],compose(['함께 읽을 문장','바람 소리의 여백','작은 구름 스케치','작가와 책 제목','서로의 짧은 감상'],0,3,'ONE PAGE, TWO READERS')),
  a(['두 가지 하늘의 약속','태훈이 맑으면 관측, 흐리면 독서라는 두 계획을 노트에 그린다. 오늘은 흐린 쪽으로 가기로 했으니 젖은 계단을 피해서 책 읽을 자리까지 선을 잇는다.','관측동 입구에서 구름 메모를 확인하고 독서 자리까지 연결한다. 젖은 계단은 지나지 않는다.','관측 못 했다고 끝나는 길이 아니네. 네가 기다리는 자리가 남아 있어서 좋다.','태훈은 지도를 접고 망원경을 덮는다. 대신 네가 골라 준 책을 들고 일어난다.'],stars(['관측동 입구','구름 메모','젖은 계단','연결 복도','게시판','독서 자리'],1,2,'흐린 날의 대체 계획 · 실제 별자리 지도가 아님')),
  a(['오늘을 틀리지 않게 적기','별이 잘 보이지 않는 산책길에서도 태훈은 기록장을 편다. 멋있게 고친 문장과 실제 본 것을 나란히 적고, 사실이 바뀐 칸만 같이 짚어 보자고 한다.','처음 관찰한 내용과 다듬은 글을 대조한다. 표현이 같지 않은 게 아니라 기록 값이 달라진 항목을 찾는다.','별이 안 보였다는 말도 남기자. 그래야 너랑 걸은 얘기를 꾸며 쓰지 않아도 되니까.','태훈은 사실을 고친 문장 옆에 감상을 따로 적는다. 마지막 줄은 네가 직접 채우도록 남긴다.'],compare('처음 관찰','정리한 기록',[row('달','구름에 가림'),row('밝은 별','확인 못 함','세 개 확인'),row('바람','약함'),row('기록 장소','산책로'),row('함께 걸은 시간','20분','12분'),row('하늘 상태','흐림')],'보이지 않은 것은 보았다고 기록하지 않기'))
 ],
 seoyul:[
  a(['네 시선으로 만드는 엽서','서율이 빈 엽서를 건넨다. 예쁘게 정렬하는 시험이 아니라, 네가 먼저 본 장면을 앞에 두는 작업이라고 말한다.','「창가의 오후」와 마지막의 「우리의 서명」을 넣는다. 나머지 한 칸은 네 시선대로 고른다.','나는 손부터 그렸는데 너는 창부터 봤네. 같이 보면 그림이 넓어지는구나.','서율이 네 배치를 바꾸지 않고 그 위에 얇은 선을 더한다.'],compose(['창가의 오후','책상 위 손','작은 건반 그림','우리의 서명','열린 스케치북'],0,3,'A POSTCARD FOR TWO')),
  a(['건반과 빗소리 사이','밴드 연습을 마친 서율이 짧은 건반 소리를 세 가지 음색으로 나눠 놓았다. 그림처럼 소리에도 여백을 만들어 보고 싶다고 한다.','세 음색의 비율을 바꿔 보고 곡의 풍경을 고른다. 작게 남겨 둔 소리가 있어도 괜찮다.','다 채우지 않았네. 그 빈자리 마음에 든다. 너도 여기 앉아 있을 자리 같아서.','서율은 네가 남긴 여백만큼 다음 건반을 늦게 누른다.'],mix(['느린 건반','둥근 낮은음','가느다란 종'],['비 오는 창가','맑아진 오후','집에 가기 전'],[329.63,164.81,659.25])),
  a(['겹친 선을 찾아서','서율이 둘이 그린 스케치의 복사본을 들고 웃는다. 원본의 빈 공간은 살리고 싶다며 옮기는 동안 달라진 구성 요소만 먼저 찾아 달라고 한다.','원본과 복사본에서 위치·개수가 달라진 요소를 고른다. 취향 평가가 아니라 의도한 구성을 복원하는 작업이다.','그 빈자리를 알아봤네. 나도 거기는 안 채우고 싶었어. 네 시선이 머물 자리 같아서.','서율은 네가 고른 차이를 고친 뒤, 원래 선 옆에 너의 짧은 서명을 부탁한다.'],compare('함께 그린 원본','옮긴 스케치',[row('창','왼쪽 위'),row('컵','두 개','한 개'),row('책','오른쪽 아래'),row('빈 의자','창 옆','책상 뒤'),row('별 낙서','다섯 개'),row('서명','둘 다')],'그림 요소를 글자로도 확인할 수 있는 구성 대조')),
  a(['걷다가 멈춘 곳의 엽서','서율이 산책하다 본 색과 모양을 세 칸짜리 엽서에 담아 보자고 한다. 전시 동선을 설계하는 대신 방금 둘이 멈춘 벤치를 작은 그림의 중심으로 삼는다.','「둘이 앉은 벤치」를 포함하고 「함께 본 날짜」를 마지막에 둔다. 가운데 장면은 네가 고른다.','이렇게 놓으니까 우리 시선이 같은 데서 멈추네. 네가 먼저 고른 하늘도 마음에 든다.','서율은 엽서를 바로 완성하려 하지 않고 밑그림만 남긴다. 다음 만남에 채색하기로 한다.'],compose(['둘이 앉은 벤치','길 끝의 노을','네 손의 작은 잎','함께 본 날짜','공중에 뜬 씨앗'],0,3,'산책 엽서')),
  a(['우리 그림의 세 가지 색','전시 정리를 끝낸 서율이 남은 팔레트 메모를 화면에 띄운다. 같은 색을 재현하는 조색 계산이 아니라 엽서에 쓸 세 색 면적의 균형을 맞춰 보자는 제안이다.','남색·살구색·연두색을 3:2:1 비율로 총 18칸 나눈다. 실제 물감을 섞는 활동이 아니라 화면의 면적 구성이다.','작은 연두색까지 남겼네. 네가 고른 잎도 그림에서 안 사라지겠다.','서율은 비율을 정한 뒤 펜을 내려놓는다. 남은 칸에 누구의 이름을 먼저 쓸지 장난스럽게 묻는다.'],ratio(['남색 면','살구색 면','연두색 면'],[3,2,1],18,'엽서의 색 면적 배분 · 물감 혼합 비율 아님'))
 ],
 juhan:[
  a(['엔딩에서 잊어버린 이름','주한이 방금 함께 빠져나온 픽셀 게임의 종료 화면을 다시 연다. 이름을 바꿔도 첫 사용자만 부르는 실수라며, 네가 시험 입력을 눌러 주길 기다린다.','세 입력의 결과를 확인하고 저장된 첫 이름 대신 지금 입력한 이름을 사용하도록 고친다.','이제 네 이름을 제대로 부르네. 내가 직접 부르는 건 아직 조금 연습 중이고.','주한은 프로그램을 닫고 화면이 아니라 너를 보며 다시 인사한다.'],debug(['처음_이름 = "첫 방문자"','입력 받기: 지금_이름','인사(처음_이름)'],[test('이름: 새 친구','안녕, 새 친구','안녕, 첫 방문자'),test('이름: 별','안녕, 별','안녕, 첫 방문자'),test('이름: 우리 반','안녕, 우리 반','안녕, 첫 방문자')],['인사창을 숨긴다','모든 이름을 첫 방문자로 바꾼다','인사에 지금_이름을 전달한다'],2)),
  a(['둘이 눌러야 열리는 문','주한이 지난번 함께 하던 픽셀 게임에 협동 문을 추가했다. 그런데 한 사람만 눌러도 열려 버려서, 네가 테스트를 맡고 자기는 코드를 고치기로 한다.','서로 다른 입력을 두 개 이상 실행하고, 두 사람이 모두 준비했을 때만 문이 열리게 고친다.','혼자 먼저 달려가면 열리면 안 되지. 기다렸다가 같이 가는 문이니까.','주한은 수정한 게임에서 네 캐릭터가 올 때까지 멈춰 선다. 이번에는 코드가 아니라 직접 기다린다.'],debug(['왼쪽_준비 = 버튼 A','오른쪽_준비 = 버튼 B','문열기 = 왼쪽_준비 또는 오른쪽_준비'],[test('A만 누름','닫힘','열림'),test('B만 누름','닫힘','열림'),test('둘 다 누름','열림','열림')],['또는 대신 그리고 조건을 쓴다','열림 그림을 더 크게 만든다','한쪽 버튼을 화면에서 지운다'],0)),
  a(['컴퓨터를 끄고 갈 준비','주한이 쉬는 시간에도 자꾸 화면을 보자 네가 산책을 제안했다. 가방에는 노트와 물 정도만 넣기로 한다.','여섯 칸 안에 아이디어 노트와 물을 넣는다. 모니터까지 챙길 필요는 없다.','컴퓨터 없이 가도 말할 게 있겠지? 방금 그 질문부터 말할 게 생겼네.','주한은 저장을 확인한 뒤 모니터를 끄고 네 쪽으로 의자를 돌린다.'],pack('화면 밖의 산책 가방',[item('아이디어 노트',2),item('물',2),item('이어폰',1),item('작은 사탕',1),item('두꺼운 기술서',4),item('휴대용 키보드',3)],6,[0,1])),
  a(['약속 시간을 지우지 않는 저장','주한이 개인 일정 도우미의 연습용 파일을 보여 준다. 항목을 하나 추가하면 그전에 쓴 약속이 사라진다며 실제 일정에 쓰기 전에 같이 점검하고 싶다고 한다.','두 입력 이상을 확인하고 기존 목록을 지우지 않으면서 새 항목만 더하는 수정안을 고른다.','새 약속 하나 생겼다고 앞의 약속이 없어지면 곤란하지. 네 시간도 지우고 싶지 않고.','주한은 연습 파일만 저장한 뒤 화면을 닫는다. 너와의 약속은 다시 한번 직접 말해 확인한다.'],debug(['목록 = [점심 약속]','새_항목 = 입력 받기','목록 = [새_항목]'],[test('산책 추가','점심 약속, 산책','산책'),test('도서관 추가','점심 약속, 도서관','도서관'),test('아무것도 추가 안 함','점심 약속','점심 약속')],['새 항목 이름을 짧게 바꾼다','기존 목록 뒤에 새 항목을 덧붙인다','기존 목록도 함께 삭제한다'],1)),
  a(['네 이름으로 끝나는 화면','주한이 마지막으로 완성한 작은 게임의 엔딩 화면을 보여 준다. 첫 기획과 달리 표시되는 부분을 찾으면, 게임을 닫고 진짜 간식을 먹으러 가자는 내기다.','기획 메모와 현재 화면에서 다른 항목을 모두 선택한다. 외형이 바뀐 것만으로 프로그램 전체가 틀렸다고 판단하지 않는다.','마지막에 네 이름 나오는 건 맞았네. 그건 내가 제일 여러 번 확인했거든.','주한은 두 군데를 고치고 컴퓨터를 끈다. 화면 속 엔딩 뒤에도 너와 보낼 시간이 남아 있다.'],compare('함께 정한 엔딩','현재 출력',[row('주인공 이름','현재 입력한 이름'),row('함께한 사람','두 명'),row('다시 시작 버튼','물어본 뒤 시작','곧바로 시작'),row('소리','선택할 때만'),row('나가기 버튼','보임','숨김'),row('제작자 서명','주한과 첫 플레이어')],'주한이 만든 게임의 화면 점검'))
 ],
 minhyuk:[
  a(['비를 피해 넣어 둘 것들','정류장 지붕 아래에 도착한 민혁이 가방을 잠깐 연다. 바깥에 끼워 둔 공지 봉투가 젖지 않도록 안쪽 물건의 자리를 함께 바꿔 본다.','여섯 칸 안에 공지 봉투와 작은 수건을 넣는다. 바깥에 남길 물건은 젖지 않게 따로 들고, 필요한 것부터 안쪽에 챙긴다.','봉투만 챙기려 했는데 수건도 넣었네. 그럼 네 젖은 손부터 닦고 다시 우산 잡자.','민혁은 가방 지퍼를 닫은 뒤 수건을 네 쪽으로 건넨다. 비가 그칠 때까지 잠깐 같은 지붕 아래 서 있는다.'],pack('우산 아래의 마른 가방',[item('공지 봉투',2),item('작은 수건',1),item('물병',2),item('작은 간식',2),item('접은 머플러',3),item('여분 펜',1)],6,[0,1])),
  a(['줄을 세우지 않는 점심 카드','민혁은 모두에게 공평하게 하려다 자기 점심 약속도 공지처럼 적었다. 오늘은 두 사람만 읽는 편한 메모를 만들어 보기로 한다.','「같이 먹을 자리」를 포함하고 「쉬는 시간 끝 확인」을 마지막에 둔다. 가운데에는 민혁이 하고 싶은 일을 하나 넣는다.','규칙보다 내 점심부터 보이네. 이런 순서도 괜찮구나.','민혁이 카드의 딱딱한 제목을 지우고 작은 웃는 얼굴을 그린다.'],compose(['같이 먹을 자리','후식 반씩 나누기','오늘 들은 웃긴 말','쉬는 시간 끝 확인','말없이 천천히 먹기'],0,3,'LUNCH FOR TWO')),
  a(['내 시간도 들어간 표','민혁이 식사 뒤 역할표 사본을 펼치지만 오늘은 자기 약속 시간도 남겨 두기로 한다. 모두가 확인한 표와 옮겨 적은 메모에서 바뀐 칸을 찾아 달라고 한다.','확인한 역할표와 사본을 대조한다. 다른 사람의 차례나 쉬는 시간을 임의로 바꾸지 않고 차이만 표시한다.','내 쉬는 시간부터 찾아 줬네. 반장 칸에도 빈칸이 있어도 되는 건데 자꾸 잊는다.','민혁은 차이가 난 칸에 확인 표시만 남기고 표를 접는다. 수정은 당사자와 함께 하기로 한다.'],compare('확인한 역할표','옮긴 메모',[row('첫 점검','민혁·지원자'),row('점검 시간','15:30','15:03'),row('자료 담당','두 명'),row('민혁 휴식','16:00','비어 있음'),row('변경 방식','당사자 확인'),row('종료','16:30')],'실제 학급 명단이 아닌 둘이 확인하는 역할표')),
  a(['점검이 끝나면 쉬는 곳으로','공연장 최종 점검을 마친 민혁이 또 한 바퀴 돌려 하자, 너는 확인한 구역을 약도에서 이어 보여 준다. 마지막에는 쉬는 자리를 넣는다.','교실에서 점검한 통로를 거쳐 휴게 의자까지 잇는다. 정리 중인 창고는 지나지 않는다.','마지막 목적지가 의자인 줄 알았으면 더 빨리 끝냈을 텐데. 같이 앉을 거지?','민혁은 펜을 내려놓고 너와 함께 의자로 향한다.'],stars(['교실','창고 정리 중','점검한 통로','안내판','물 마시는 곳','휴게 의자'],2,1,'점검을 마친 뒤의 휴식 동선')),
  a(['일정표의 빈칸 지키기','민혁이 정문에서 접힌 개인 일정표를 꺼낸다. 너와 같이 갈 시간을 실수로 업무로 채우지 않았는지, 두 버전을 맞춰 보면 마음이 놓일 것 같다고 한다.','직접 정한 약속과 정리한 일정표에서 달라진 곳을 찾는다. 일을 더 넣는 것이 무조건 좋은 답은 아니다.','그 빈칸은 고칠 곳이 아니라 남겨 둘 곳이었네. 네가 안 짚었으면 또 약속을 일처럼 만들 뻔했다.','민혁은 일정표를 가방에 넣고 네 쪽으로 몸을 돌린다. 이제 어디로 갈지는 둘이 천천히 정한다.'],compare('직접 정한 약속','정리한 일정',[row('만나는 곳','정문'),row('시작 시간','15:00','15:30'),row('첫 행선지','각자 한 곳씩'),row('중간 시간','비워 두기','추가 점검'),row('귀가 확인','서로 직접'),row('업무표','오늘은 두고 가기','늘 지참')],'학급 공지가 아닌 두 사람의 개인 일정'))
 ],
 junyeon:[
  a(['비어 있지 않은 역할 카드','준연은 자기 역할 칸을 적다가 지우기를 반복한다. 대신 정해 주기보다 본인이 고를 수 있는 빈 부분을 남겨 둔 카드를 함께 만든다.','「내가 맡겠다고 한 일」을 넣고 「어려우면 말하기」를 마지막에 둔다. 약속할 일을 지나치게 늘리지 않는다.','많이 적지 않아도 되는 거네. 이 정도면 내가 직접 해 볼 수 있을 것 같아.','준연은 지우개를 내려놓고 자기 이름을 작게 적는다.'],compose(['내가 맡겠다고 한 일','도움받을 사람','함께 확인할 시간','어려우면 말하기','끝낸 뒤의 작은 표시'],0,3,'MY PART / ONE STEP')),
  a(['정원 벤치까지의 준비','준연이 사람 많은 곳은 오늘 조금 부담스럽다고 말한다. 둘은 짧게 정원에 다녀올 만큼만 챙기기로 한다.','다섯 칸 안에 물과 작은 메모장을 넣는다. 부담 없이 돌아올 수 있는 짧은 산책이다.','금방 돌아와도 괜찮지? 그 말 듣고 나니까 오히려 조금 더 걷고 싶네.','준연은 가방을 꽉 쥐지 않고 한 손으로 들고 일어난다.'],pack('짧은 산책 주머니',[item('물',2),item('메모장',1),item('작은 간식',1),item('휴지',1),item('큰 담요',4),item('무거운 도감',4)],5,[0,1])),
  a(['빠진 칸은 같이 확인하기','준연이 정원에서 가져온 간식 목록을 보여 준다. 급하게 옮겨 쓰다가 빠뜨린 것이 있다며 네가 원래 메모를 읽고 자기가 사본을 확인하기로 한다.','처음 적은 목록과 옮긴 목록에서 달라진 항목만 고른다. 사람의 의도 대신 적힌 내용만 확인한다.','과자가 없어진 게 아니라 내가 줄을 빠뜨렸네. 알았으니까 다음엔 천천히 옮겨야겠다.','준연은 목록을 직접 고친 뒤 네가 고른 간식을 기억해 두겠다고 말한다.'],compare('처음 적은 목록','옮긴 목록',[row('음료','복숭아 두 개'),row('작은 과자','한 봉지','빈칸'),row('휴지','챙김'),row('마실 시간','지금'),row('남은 봉투','둘이 정리','내일 정리'),row('다음 약속','직접 확인')],'둘이 챙긴 간식 목록 확인')),
  a(['한 번에 한 줄씩','준연이 교실에서 다음에 맡을 작은 일을 적다가 문장을 길게 지운다. 네가 할 일을 대신 정하지 않고, 준연이 말한 범위가 카드에 남도록 함께 정리한다.','「내가 고른 한 가지」를 넣고 「끝나면 직접 알리기」를 마지막에 둔다. 중간에는 확인할 사항 하나만 고른다.','한 번에 다 하겠다는 말은 빼자. 이건 내가 말한 만큼만 적혀 있네.','준연은 완성한 카드를 자기 노트에 넣는다. 너는 대신 끝내 주겠다는 약속을 더하지 않는다.'],compose(['내가 고른 한 가지','필요한 준비물','시작할 시간','끝나면 직접 알리기','도움이 필요한 부분'],0,3,'한 번에 한 가지')),
  a(['다시 맡은 일의 확인표','용서 이후, 준연은 감독 아래 다시 맡은 작은 일을 확인한다. 잘 보이기 위한 선물이 아니라, 약속한 물건을 빠짐없이 돌려놓는 것부터 시작한다.','여섯 칸 안에 반납 목록과 확인받을 자료를 넣는다. 대신 처리해 주지 않고 준연이 직접 확인하도록 돕는다.','이번에는 내가 들고 가서 확인받을게. 네가 해 줬다고 말하지 않을 거야.','준연이 직접 목록을 들고 담당 선생님에게 간다. 바뀌는 과정은 오늘 한 번으로 끝나지 않는다.'],pack('확인받고 반납할 자료 가방',[item('반납 목록',1),item('확인받을 자료',3),item('여분 펜',1),item('작은 물병',2),item('사과 선물 상자',4),item('개인 메모장',1)],6,[0,1]))
 ]
};

export const activityKindNames:Record<ActivityKind,string>={mix:'소리 만들기',rhythm:'동작 기억하기',compose:'종이 편집',debug:'프로그램 고치기',stars:'경로 연결',pack:'준비물 챙기기',ratio:'비율 맞추기',compare:'다른 부분 찾기'};
export function hasRomanceActivity(_person:RPerson,chapter:number,encounter:1|2){return Number.isInteger(chapter)&&chapter>=0&&chapter<5&&encounter===1;}
export function getRomanceActivity(person:RPerson,chapter:number,encounter:1|2=1,seed=0):RomanceActivityData{
 const index=Math.max(0,Math.min(4,Math.trunc(chapter)));
 const authoredTask=authored[person][index];
 const [title,invitation,goal,success,after]=authoredTask.context;
 const id=`together-${person}-${index+1}-${encounter}`;
 return {id,person,chapter:index,title,invitation,goal,success,after,retry:'괜찮아. 서두르지 않고 다시 해 보거나, 여기서 멈추고 이야기를 이어 가도 돼.',task:taskForRun(authoredTask.task,`${seed}:${id}`)};
}
function taskForRun(task:ActivityTask,key:string):ActivityTask{
 if(task.kind==='compose'){const options=shuffleChoices(task.pieces,key);return {...task,pieces:options.map(option=>option.value),required:options.findIndex(option=>option.index===task.required),footer:options.findIndex(option=>option.index===task.footer)};}
 if(task.kind==='pack'){const options=shuffleChoices(task.items,key);return {...task,items:options.map(option=>({...option.value})),required:task.required.map(index=>options.findIndex(option=>option.index===index))};}
 if(task.kind==='debug'){const options=shuffleChoices(task.patches,key);return {...task,patches:options.map(option=>option.value),answer:options.findIndex(option=>option.index===task.answer)};}
 if(task.kind==='compare'){const options=shuffleChoices(task.rows,key);return {...task,rows:options.map(option=>({...option.value})),differences:options.flatMap((option,index)=>task.differences.includes(option.index)?[index]:[])};}
 if(task.kind==='stars'&&key.includes('taehun-4-'))return {...task,nodes:task.nodes.map((node,i)=>({...node,x:[8,32,28,56,68,91][i],y:[45,18,81,71,21,49][i]})),edges:[[0,1],[0,2],[1,4],[2,3],[3,4],[4,5],[3,5]]};
 return structuredClone(task);
}
export function compositionIsValid(task:Compose,slots:number[]){return slots.length===3&&new Set(slots).size===3&&slots.every(i=>Number.isInteger(i)&&i>=0&&i<task.pieces.length)&&slots.includes(task.required)&&slots[2]===task.footer;}
export function packingIsValid(task:Pack,selected:number[]){return new Set(selected).size===selected.length&&selected.every(i=>Number.isInteger(i)&&i>=0&&i<task.items.length)&&task.required.every(i=>selected.includes(i))&&selected.reduce((sum,i)=>sum+task.items[i].size,0)<=task.capacity;}
export function starPathIsValid(task:Stars,path:number[]){return path.length>=2&&path[0]===task.start&&path.at(-1)===task.end&&path.includes(task.via)&&!path.includes(task.blocked)&&new Set(path).size===path.length&&path.every((node,i)=>Number.isInteger(node)&&node>=0&&node<task.nodes.length&&(i===0||task.edges.some(([a,b])=>(a===path[i-1]&&b===node)||(b===path[i-1]&&a===node))));}
export function rhythmIsValid(task:Rhythm,entered:number[],times:number[],timed:boolean){if(entered.length!==task.pattern.length||entered.some((value,i)=>value!==task.pattern[i]))return false;if(!timed)return true;if(times.length!==entered.length)return false;const interval=60000/task.bpm;return times.slice(1).every((time,i)=>Number.isFinite(time)&&Math.abs(time-times[i]-interval)<=interval*.65);}
export function debugIsValid(task:Debug,tested:number[],patch:number){return new Set(tested.filter(i=>Number.isInteger(i)&&i>=0&&i<task.tests.length)).size>=2&&patch===task.answer;}
export function ratioIsValid(task:Ratio,amounts:number[]){const parts=task.components.reduce((sum,component)=>sum+component.parts,0);return amounts.length===task.components.length&&amounts.every(value=>Number.isInteger(value)&&value>=0)&&amounts.reduce((sum,value)=>sum+value,0)===task.total&&amounts.every((value,i)=>value*parts===task.total*task.components[i].parts);}
export function comparisonIsValid(task:Compare,selected:number[]){return selected.length===task.differences.length&&new Set(selected).size===selected.length&&selected.every(index=>Number.isInteger(index)&&task.differences.includes(index));}
