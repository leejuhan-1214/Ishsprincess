import {locationById} from '../data/characters';
import type {CharacterId,Choice,Line,LocationId,Scene} from '../types';

const ids:CharacterId[]=['world','junyeon','hyunsol','taewoo','taehun','seoyul'];
const locationNouns:Record<LocationId,string[]>={
 gate:['정문 경비실의 시계','교문 너머의 버스 소리','운동장을 건너온 바람','신발장 앞의 발소리'],
 classroom:['창가의 긴 햇빛','칠판에 남은 분필가루','책상 사이를 도는 선풍기','복도에서 멀어지는 발소리'],
 garden:['화단 사이의 바람','벤치 아래의 나뭇잎','농구장 쪽 웃음소리','급식실에서 흘러온 냄새'],
 cafeteria:['식판이 포개지는 소리','창가 자리에 남은 햇빛','자판기 냉각음','늦은 당번의 발소리'],
 library:['책장을 넘기는 소리','반납대의 작은 스탬프','창틀에 쌓인 빛','멀리서 울린 폐관 안내음'],
 chemistry:['초시계의 붉은 숫자','유리기구에 번진 노을','환풍기의 낮은 진동','정리대의 체크리스트'],
 media:['편집 화면의 재생 막대','헤드폰 밖으로 샌 박자','꺼진 카메라의 렌즈','저장 장치의 작은 불빛'],
 computer:['모니터의 푸른 대기 화면','키보드 사이의 짧은 침묵','자동 저장 알림','창가와 화면에 겹친 노을'],
 observatory:['돔 천장의 느린 그림자','관측 시각을 알리는 진동','렌즈에 맺힌 얇은 김','구름 사이의 작은 틈'],
 band:['앰프의 낮은 잡음','보면대 위의 연필 자국','멈춘 메트로놈','건반에 남은 손의 온기'],
 art:['물통에 번지는 색','마르지 않은 종이 모서리','석고상에 걸린 노을','겹쳐 놓은 팔레트'],
 dance:['거울 벽의 긴 반사','바닥에 붙은 대형 표시','스피커가 남긴 잔향','정리되지 않은 한 박자'],
 auditorium:['빈 객석의 희미한 반향','무대 가장자리의 안전선','천천히 식는 조명','막 뒤의 작은 움직임'],
 roof:['난간을 스치는 바람','도시 위로 켜지는 불빛','멀리 지나가는 비행기','옥상문이 닫히는 소리'],
 walk:['담장 아래 길어진 그림자','나란히 맞춰진 두 걸음','나뭇가지 사이의 가로등','갈림길 앞의 표지판'],
};
const movements=['한 박자 늦게 흔들렸다','방금 전보다 또렷해졌다','말 사이의 빈칸을 천천히 채웠다','다음 대답을 기다리듯 잠잠해졌다','서로 다른 표정을 한 화면에 묶었다','조금 전의 긴장을 부드럽게 흩뜨렸다'];
const observations=['나는 대답을 서두르지 않고 그 변화부터 기억했다.','말의 뜻만큼 말하기까지 걸린 시간도 중요해 보였다.','누가 옳은지보다 지금 무엇을 확인해야 하는지가 선명해졌다.','작은 침묵은 거절이 아니라 생각할 시간을 달라는 신호일 수 있었다.','같은 장면을 보고도 서로 다른 이유로 멈춰 있었다.','다음 말은 호감보다 신뢰를 선택해야 이어질 것 같았다.'];
const characterBeats:Record<CharacterId,string[]>={
 world:['세계는 웃음 뒤의 불안을 숨기지 않으려 했다.','세계는 대답을 재촉하려다 스스로 한 걸음 물러났다.','세계는 화면보다 내 표정에 오래 시선을 두었다.'],
 junyeon:['준연은 작아진 목소리를 포기하지 않고 끝까지 이어 갔다.','준연은 지웠던 자기 이름을 다시 천천히 적었다.','준연은 도움이 아니라 들어 줄 시간을 먼저 구했다.'],
 hyunsol:['현솔은 정답을 말하기 전에 그 말이 남길 상처를 계산했다.','현솔은 틀린 부분과 틀리게 말한 부분을 나누어 보았다.','현솔은 반박할 근거와 사과할 이유를 동시에 찾았다.'],
 taewoo:['태우는 멋진 동작보다 멈춰야 할 신호를 먼저 살폈다.','태우는 거울 속 점수 대신 내 반응을 기다렸다.','태우는 경쟁심을 숨기지 않되 그것으로 답을 강요하지 않았다.'],
 taehun:['태훈은 관측값 옆에 마음이 머물 여백을 남겼다.','태훈은 보이지 않는다고 없다고 쓰지 않았다.','태훈은 과학의 문장과 시의 문장을 서로 지우지 않았다.'],
 seoyul:['서율은 완성 여부보다 누구에게 보여 줄지를 먼저 정했다.','서율은 불편한 화음을 지우지 않고 이유를 설명했다.','서율은 내 감상을 기다리되 작품의 결정권은 놓지 않았다.'],
};

const hash=(text:string)=>{let h=0;for(const c of text)h=(Math.imul(h,31)+c.charCodeAt(0))>>>0;return h;};
const pick=<T,>(items:T[],key:string)=>items[hash(key)%items.length];
const castOf=(scene:Scene)=>[...new Set(scene.lines.map(l=>l.speaker).filter((s):s is CharacterId=>ids.includes(s as CharacterId)))];

function enrichLines(lines:Line[],scene:Scene):Line[]{
 const cast=castOf(scene),fallback=cast[0];
 return lines.flatMap((original,index)=>{
  const key=`${scene.id}:${index}:${original.text}`,noun=pick(locationNouns[scene.location],key+'n'),movement=pick(movements,key+'m');
  const atmosphere:Line={speaker:'narrator',text:`${noun}이(가) ${movement}.`};
  if(ids.includes(original.speaker as CharacterId)){
   const id=original.speaker as CharacterId;
   return [original,atmosphere,{speaker:'narrator',text:pick(characterBeats[id],key+'c')}];
  }
  if(fallback&&original.speaker==='player')return [original,atmosphere,{speaker:fallback,text:pick([
   '응. 그 말의 뜻을 내가 멋대로 바꾸지 않고 들어 볼게.',
   '조금 더 구체적으로 말해 줘. 나도 솔직하게 답하고 싶어.',
   '지금처럼 확인해 주면, 내 선택도 내 말로 설명할 수 있을 것 같아.',
  ],key+'reply')}];
  return [original,atmosphere,{speaker:'player',text:pick(observations,key+'o')}];
 });
}

type SceneMove={key:string;label:string;text:string;player:string;reply:string;kind:'observe'|'prototype'|'perform'};
const sceneMoves:Record<LocationId,SceneMove[]>={
 gate:[
  {key:'route-map',label:'동선지도',text:'학교 앱 지도에 각자의 이동 경로를 색이 다른 선으로 겹친다.',player:'말로만 찾지 말고 우리가 어디서 엇갈렸는지 선으로 보자.',reply:'같은 학교인데도 전혀 다른 하루를 걷고 있었네.',kind:'observe'},
  {key:'sixty-sec',label:'60초',text:'서로의 첫인상을 60초 음성 메모로 남기고 졸업식 날 열기로 한다.',player:'지금의 오해까지 봉인해 두자. 나중에 들으면 우리가 얼마나 달라졌는지 알겠지.',reply:'미래의 내가 부끄러워할 것 같은데… 그래서 더 해 보고 싶어.',kind:'perform'},
  {key:'bus-board',label:'귀가합의',text:'버스 도착 시간을 기준으로 오늘 대화의 종료 시각부터 정한다.',player:'붙잡는 대신 몇 시까지 이야기할지 먼저 맞추자.',reply:'끝을 정해 두면 그전까지는 눈치 보지 않아도 되겠네.',kind:'prototype'},
 ],
 classroom:[
  {key:'anon-notes',label:'익명질문',text:'각자 답하기 어려운 질문을 포스트잇에 써 섞은 뒤 한 장씩 뽑는다.',player:'누가 썼는지는 묻지 말고, 답하고 싶은 질문만 고르자.',reply:'정답 없는 쪽지가 시험지보다 더 긴장되네.',kind:'perform'},
  {key:'board-timeline',label:'타임라인',text:'칠판을 세 구역으로 나눠 사건·감정·아직 모르는 사실을 따로 적는다.',player:'확인한 일과 우리가 추측한 마음을 같은 칸에 두지 말자.',reply:'이렇게 보니 싸운 이유보다 모르는 부분이 더 많았어.',kind:'observe'},
  {key:'seat-swap',label:'자리교대',text:'상대가 앉았던 자리로 옮겨 같은 장면을 반대 시점에서 설명한다.',player:'네 자리에서 보인 칠판과 내 표정이 어땠는지부터 말해 볼게.',reply:'시야가 달라지니 네가 놓친 것과 내가 놓친 게 둘 다 보인다.',kind:'prototype'},
 ],
 garden:[
  {key:'shadow-clock',label:'그림자시계',text:'벤치 그림자의 끝을 표시하고 움직이는 동안 한 가지 질문만 주고받는다.',player:'그림자가 다음 선에 닿을 때까지만 솔직해지기. 질문은 하나씩.',reply:'시간제한이 있는데도 이상하게 덜 급해지는 규칙이네.',kind:'perform'},
  {key:'wind-note',label:'바람검증',text:'날아간 메모를 순서대로 모으며 빠진 문장이 무엇인지 추리한다.',player:'새로 쓰기 전에 남은 조각부터 맞추자. 빈칸은 빈칸으로 두고.',reply:'없는 문장을 멋대로 채우지 않는 거지. 그 편이 좋아.',kind:'observe'},
  {key:'three-turns',label:'세바퀴',text:'정원을 세 바퀴 돌며 첫 바퀴엔 사실, 둘째엔 감정, 셋째엔 부탁만 말한다.',player:'한꺼번에 섞지 말고 종류를 나눠서 말해 보자.',reply:'세 번째 바퀴까지 같이 걷는다면 부탁도 말할 수 있을 것 같아.',kind:'prototype'},
 ],
 cafeteria:[
  {key:'last-dessert',label:'반반실험',text:'마지막 디저트를 정확히 반으로 나누되 먼저 고를 권리는 상대에게 준다.',player:'똑같이 나누는 것과 공평한 게 같은지 시험해 보자.',reply:'크기보다 먼저 고르게 해 준 게 더 신경 쓰이는데.',kind:'perform'},
  {key:'noise-distance',label:'소음거리',text:'식당 소음 속에서 목소리를 높이지 않아도 들리는 거리를 찾아 자리를 옮긴다.',player:'큰 소리로 이기지 말고 서로 들을 수 있는 자리를 찾자.',reply:'가까워지는 데 이런 핑계가 생길 줄은 몰랐네.',kind:'observe'},
  {key:'seat-network',label:'자리배치',text:'다음 모임 좌석을 관계가 아니라 필요한 협업 기준으로 다시 그린다.',player:'친한 사람끼리보다 자료를 주고받아야 하는 사람끼리 앉혀 보자.',reply:'감정은 복잡해도 동선은 단순해질 수 있겠다.',kind:'prototype'},
 ],
 library:[
  {key:'bookmark-question',label:'책갈피',text:'‘{title}’을 한 문장으로 바꿔 책갈피 뒷면에 질문으로 적는다.',player:'대답 대신 다음에 다시 펼칠 질문을 남기자.',reply:'책을 반납해도 질문은 우리한테 남겠네.',kind:'observe'},
  {key:'sentence-trade',label:'문장교환',text:'같은 페이지에서 각자 멈춘 문장을 골라 이유만 바꿔 읽는다.',player:'내가 고른 문장을 네 이유로, 네 문장을 내 이유로 읽어 보자.',reply:'문장은 같은데 주인이 바뀌니까 전혀 다른 뜻이 된다.',kind:'perform'},
  {key:'due-date',label:'기한설계',text:'반납일을 기준으로 다시 이야기할 날짜와 준비할 것을 정한다.',player:'언젠가가 아니라 이 책을 돌려주는 날 다시 확인하자.',reply:'책갈피보다 확실한 약속이네. 달력에 적을게.',kind:'prototype'},
 ],
 chemistry:[
  {key:'safety-rehearsal',label:'안전리허설',text:'실험을 시작하지 않고 사고가 났을 때의 동선부터 역할극으로 맞춘다.',player:'성공 절차보다 멈추는 절차를 먼저 몸으로 확인하자.',reply:'실제로 당황하기 전에 틀려 볼 수 있는 연습이네.',kind:'prototype'},
  {key:'blind-label',label:'블라인드',text:'시료 이름을 가리고 기록만으로 어떤 판단을 내리는지 비교한다.',player:'누가 만든 값인지 모를 때도 같은 기준을 쓰는지 보자.',reply:'편견이 있었는지 숫자 앞에서 들키겠네.',kind:'observe'},
  {key:'error-exhibit',label:'오류전시',text:'가장 숨기고 싶은 실패 하나에 원인·영향·재시험 방법을 캡션으로 붙인다.',player:'실패를 자랑하자는 게 아니라 다시 쓸 수 있게 전시하자는 거야.',reply:'지우는 것보다 용기가 필요하지만 자료로는 훨씬 낫겠어.',kind:'perform'},
 ],
 media:[
  {key:'raw-thirty',label:'무편집',text:'‘{title}’을 편집 없이 30초 원테이크 영상으로 다시 말한다.',player:'좋은 부분만 자르지 말고 머뭇거린 시간까지 남겨 보자.',reply:'컷이 없으면 변명할 곳도 없네. 그래도 해 볼게.',kind:'perform'},
  {key:'delete-vote',label:'삭제권',text:'촬영된 사람 모두가 남기기·보류·삭제 중 하나를 직접 고르게 한다.',player:'찍은 사람이 아니라 찍힌 사람이 공개 범위를 정해야 해.',reply:'보류도 선택지에 있는 게 좋다. 지금 당장 결정하지 않아도 되니까.',kind:'prototype'},
  {key:'silent-board',label:'무음콘티',text:'대사를 전부 지우고 손과 시선만으로 장면 순서를 다시 배열한다.',player:'말이 없어도 오해 없이 읽히는지 먼저 보자.',reply:'표정을 숨길 수 없어서 더 솔직한 편집이 되겠네.',kind:'observe'},
 ],
 computer:[
  {key:'version-graph',label:'버전그래프',text:'파일 수정 기록을 사람별 색으로 연결해 사라진 변경점을 찾는다.',player:'최신 파일 하나를 고르지 말고 변경이 갈라진 지점부터 보자.',reply:'누구 작업이 덮였는지 선으로 보이겠다.',kind:'observe'},
  {key:'read-only-copy',label:'복구본',text:'원본을 읽기 전용으로 잠그고 ‘{title}’ 전용 복구 사본을 만든다.',player:'되돌릴 수 있는 상태부터 만들고 나서 실험하자.',reply:'마음껏 고칠 수 있는 건 돌아갈 곳이 있을 때뿐이네.',kind:'prototype'},
  {key:'debug-pair',label:'페어디버그',text:'한 사람은 조작하고 다른 사람은 이유를 소리 내어 설명하는 페어 디버깅을 한다.',player:'키보드는 한 명만 잡고, 다음 행동은 둘이 합의하자.',reply:'내가 놓친 가정이 말하는 순간 드러날 수도 있겠어.',kind:'perform'},
 ],
 observatory:[
  {key:'red-mode',label:'적색등',text:'화면과 손전등을 붉은빛으로 바꾸고 눈이 어둠에 적응할 시간을 잰다.',player:'사진부터 찍지 말고 우리 눈이 먼저 하늘을 보게 하자.',reply:'기다린 시간까지 관측의 일부로 남기면 되겠네.',kind:'prototype'},
  {key:'no-observation',label:'무관측',text:'보이지 않은 대상과 구름량·시각·방향을 가장 자세히 기록한다.',player:'빈칸을 실패라고 부르지 말자. 못 본 조건도 데이터니까.',reply:'없음과 관측 불가는 다른 문장이지.',kind:'observe'},
  {key:'safe-window',label:'관측창',text:'천체가 보일 확률과 귀가 시간을 겹쳐 40분짜리 관측 창을 정한다.',player:'밤새 기다린다는 약속보다 지킬 수 있는 40분을 고르자.',reply:'끝을 정했으니 그 안에서는 마음껏 기다릴 수 있겠다.',kind:'perform'},
 ],
 band:[
  {key:'swap-parts',label:'파트교대',text:'한 소절 동안 보컬·반주·청자의 역할을 차례로 바꾼다.',player:'자기 소리를 다른 자리에서 들어 보고 나서 결론을 내리자.',reply:'내가 듣지 못했던 빈틈이 네 자리에서는 들릴지도 몰라.',kind:'perform'},
  {key:'noise-sample',label:'잡음채집',text:'앰프 잡음과 의자 소리를 샘플링해 ‘{title}’의 짧은 인트로를 만든다.',player:'없애려던 소리만으로 시작하면 오늘 장면과 어울릴 것 같아.',reply:'실수를 음악으로 바꾸는 건 꽤 마음에 드는데.',kind:'prototype'},
  {key:'no-mic',label:'생목',text:'마이크를 끄고 객석 한 자리에서 들리는 만큼만 노래한다.',player:'볼륨이 아니라 닿는 거리를 확인해 보자.',reply:'한 사람에게만 들리게 부르는 게 더 떨릴 수도 있겠네.',kind:'observe'},
 ],
 art:[
  {key:'three-palette',label:'삼색제한',text:'현재 장면을 세 가지 색으로만 다시 구성한다.',player:'색을 더 찾지 말고 선택한 세 색의 관계만 바꿔 보자.',reply:'제한이 생기니까 숨기고 있던 중심색이 보인다.',kind:'prototype'},
  {key:'upside-down',label:'뒤집기',text:'작품을 거꾸로 놓고 내용 대신 균형과 빈 공간만 확인한다.',player:'무엇을 그렸는지 잠깐 잊고 어디가 무거운지만 보자.',reply:'이 방향에선 내가 집착하던 부분이 별로 중요하지 않네.',kind:'observe'},
  {key:'photo-consent',label:'촬영범위',text:'보기·촬영·편집·공개 허용 범위를 각각 다른 스티커로 표시한다.',player:'한 번 허락했다고 모든 사용을 허락한 건 아니니까.',reply:'작품 옆에 내 선택도 같이 전시되는 셈이네.',kind:'perform'},
 ],
 dance:[
  {key:'mirror-blackout',label:'거울끄기',text:'거울을 가리고 발소리와 호흡만으로 ‘{title}’의 여덟 박자를 맞춘다.',player:'모양보다 우리가 같은 박자에 있는지부터 확인하자.',reply:'표정으로 잘하는 척할 수 없겠네. 그래서 더 재밌어.',kind:'perform'},
  {key:'half-speed',label:'반속도',text:'가장 자신 있는 구간을 절반 속도로 춰 습관적인 흔들림을 찾는다.',player:'빠르게 숨긴 실수는 느리게 보면 배울 동작이 될 수 있어.',reply:'슬로모션은 잔인하지만 거짓말은 안 하니까.',kind:'observe'},
  {key:'stop-signal',label:'정지신호',text:'통증이나 공포를 느끼면 이유 설명 없이 누를 수 있는 중단 신호를 정한다.',player:'신호가 나오면 먼저 멈추고 이유는 안전해진 뒤에 듣자.',reply:'버티는 걸 칭찬하지 않는 규칙이면 믿을 수 있겠다.',kind:'prototype'},
 ],
 auditorium:[
  {key:'empty-row',label:'빈객석',text:'서로 다른 객석 세 자리에서 같은 장면의 인상을 한 단어로 기록한다.',player:'무대만 바꾸지 말고 보는 자리부터 바꿔 보자.',reply:'같은 조명인데도 앞줄과 뒷줄의 이야기가 다르네.',kind:'observe'},
  {key:'tape-line',label:'안전선',text:'무대 가장자리 안전선을 직접 밟지 않고 눈 감은 동선으로 확인한다.',player:'조명이 꺼져도 멈출 위치를 몸이 기억하게 하자.',reply:'멋진 퇴장보다 안전한 퇴장이 먼저겠네.',kind:'prototype'},
  {key:'blackout-cue',label:'암전큐',text:'암전 5초 동안 대사 없이 손 신호만으로 다음 장면을 연결한다.',player:'안 보일 때도 서로의 신호를 놓치지 않는지 시험해 보자.',reply:'말이 없으니 작은 움직임 하나가 더 크게 느껴진다.',kind:'perform'},
 ],
 roof:[
  {key:'light-map',label:'빛지도',text:'도시 불빛의 방향과 밝기를 지도에 찍어 보이지 않는 별의 이유를 찾는다.',player:'별이 없다고 끝내지 말고 무엇이 가렸는지 기록하자.',reply:'도시도 오늘 관측 대상이 되는 거네.',kind:'observe'},
  {key:'weather-line',label:'철수기준',text:'풍속·강수·귀가 시각 세 조건으로 옥상 철수선을 미리 정한다.',player:'아쉬운 마음이 기준을 바꾸지 못하게 지금 결정하자.',reply:'떠날 이유를 정했으니 머무는 동안은 덜 불안하겠다.',kind:'prototype'},
  {key:'city-sounds',label:'도시채집',text:'1분 동안 도시 소리 세 개를 골라 ‘{title}’의 배경음으로 이름 붙인다.',player:'보이는 것 말고 들리는 야경도 남겨 보자.',reply:'네가 고른 소리와 내가 고른 소리가 얼마나 다를지 궁금해.',kind:'perform'},
 ],
 walk:[
  {key:'fork-rule',label:'갈림길',text:'갈림길마다 번갈아 방향을 고르고 선택 이유는 다음 모퉁이에서 말한다.',player:'한 사람이 계속 이끌지 말고 결정권을 번갈아 갖자.',reply:'틀린 길이어도 같이 고른 과정은 남겠네.',kind:'perform'},
  {key:'pace-sync',label:'보폭실험',text:'빠른 사람이 느린 사람에게 맞춘 뒤 중간 지점을 함께 찾는다.',player:'누가 참고 따라가는 속도 말고 둘 다 말할 수 있는 속도를 찾자.',reply:'걸음이 맞으니 침묵도 덜 어색해진다.',kind:'observe'},
  {key:'distance-choice',label:'거리선택',text:'나란히·한 걸음 뒤·잠시 혼자 걷기 중 각자 편한 거리를 직접 고른다.',player:'가까워야 솔직한 건 아니니까 지금 편한 거리를 말해 줘.',reply:'거리를 고를 수 있으니 오히려 네 옆으로 가고 싶어.',kind:'prototype'},
 ],
};

function sceneMoveEffects(id:CharacterId,kind:SceneMove['kind']){
 if(kind==='observe')return [{target:id,stat:'trust' as const,amount:8},{target:id,stat:'affection' as const,amount:4},{target:'global' as const,stat:'harmony' as const,amount:2}];
 if(kind==='prototype')return [{target:id,stat:'trust' as const,amount:6},{target:'global' as const,stat:'fair' as const,amount:4},{target:'global' as const,stat:'safety' as const,amount:2}];
 return [{target:id,stat:'affection' as const,amount:8},{target:id,stat:'trust' as const,amount:3},{target:'global' as const,stat:'reputation' as const,amount:2}];
}

function contextualChoices(scene:Scene):Choice[]{
 const cast=castOf(scene),id=cast[0];
 if(!id)return [];
 const place=locationById[scene.location].name,deck=sceneMoves[scene.location],start=hash(scene.id)%deck.length;
 return [deck[start],deck[(start+1)%deck.length]].map(move=>{
  const fill=(value:string)=>value.replaceAll('{title}',scene.title).replaceAll('{place}',place);
  return {id:`director-${move.key}`,label:move.label,text:move.text.includes('{title}')?fill(move.text):`‘${scene.title}’에서 ${fill(move.text)}`,response:enrichLines([
   {speaker:'player',text:fill(move.player)},
   {speaker:id,text:fill(move.reply)},
   {speaker:'narrator',text:`${place}에서 말로만 남아 있던 갈등이 ‘${move.label}’이라는 행동으로 바뀌었다.`},
  ],scene),effects:sceneMoveEffects(id,move.kind),flags:[`director-${move.key}:${scene.id}`]};
 });
}

const cache=new Map<string,Scene>();
/** Triples authored dialogue at runtime and adds two context-aware decisions to every main scene. */
export function directedScene(scene:Scene,{addChoices=true,cacheable=true}:{addChoices?:boolean;cacheable?:boolean}={}):Scene{
 const key=`${scene.id}:${addChoices}`;
 if(cacheable&&cache.has(key))return cache.get(key)!;
 const expanded={...scene,lines:enrichLines(scene.lines,scene),choices:[...scene.choices.map(choice=>({...choice,response:enrichLines(choice.response,scene)})),...(addChoices?contextualChoices(scene):[])]};
 if(cacheable)cache.set(key,expanded);
 return expanded;
}
