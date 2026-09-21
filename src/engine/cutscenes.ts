import {characterById, locationById} from '../data/characters';
import {endingById, type Ending} from '../data/endings';
import type {CharacterId, LocationId} from '../types';
import type {EventKind} from './characterAI';
import type {EpisodeMotif} from '../data/cutsceneEpisodes';

export type CutsceneMood='true'|'good'|'bad'|'normal'|'event';
export type CutsceneSpec={
 key:string;
 label:string;
 title:string;
 subtitle:string;
 beats:[string,string,string];
 background:string;
 mood:CutsceneMood;
 character?:CharacterId;
 art?:string;
 /** A 3 × 4 atlas of twelve distinct character-action keyframes. */
 motion?:string;
 motif?:EpisodeMotif;
 props?:[string,string,string];
};

const characterBackground:Record<CharacterId,string>={
 world:'band',junyeon:'lab',hyunsol:'lab',taewoo:'dance',taehun:'night',seoyul:'band',
};

const commonBackground:Record<string,string>={
 normal:'classroom','common-safety':'lab','common-fraud':'computer','common-alone':'classroom',
 'common-war':'classroom','common-unfinished':'classroom','harem-true':'night','harem-good':'classroom',
 'harem-war':'night','harem-lonely':'band',
};

function moodOf(ending:Ending):CutsceneMood{
 return ending.type==='TRUE'?'true':ending.type==='GOOD'?'good':ending.type==='BAD'?'bad':'normal';
}

/** Every registered ending receives its own three-beat cinematic, keyed by ending ID. */
export function endingCutscene(id:string):CutsceneSpec{
 const ending=endingById[id];
 if(!ending)throw new Error(`Unknown ending cutscene: ${id}`);
 const character=ending.character;
 const intro=character
  ?`${characterById[character].name}과(와) 함께 고른 선택들이 마지막 장면을 만들었다.`
  :id.startsWith('harem-')?'일곱 사람이 합의한 관계의 모양이 마지막 장면을 만들었다.':'사이언스 페어가 끝나고, 1학년 1반에 결과가 남았다.';
 const closing=ending.text.at(-1)??ending.subtitle;
 return {
  key:`ending:${id}`,label:`${ending.type} ENDING CUTSCENE`,title:ending.title,subtitle:ending.subtitle,
  beats:[intro,ending.text[0]??ending.subtitle,closing],
  background:character?characterBackground[character]:(commonBackground[id]??'classroom'),
  mood:moodOf(ending),character,
 };
}

const eventLabels:Record<EventKind,string>={
 closeness:'예고 없는 둘만의 시간',confidence:'처음 맡기는 부탁',jealousy:'시선이 멈춘 곳',boundary:'넘지 말아야 할 선',chance:'예상 밖의 빈 시간',
};

const signatureEvent:Record<CharacterId,{title:string;art:string}>={
 world:{title:'붉은 비상등 아래',art:'event-world'},
 junyeon:{title:'균열음이 난 순간',art:'event-junyeon'},
 hyunsol:{title:'꺼진 불, 잡힌 소매',art:'event-hyunsol'},
 taewoo:{title:'여덟 번째 카운트의 사고',art:'event-taewoo-fall'},
 taehun:{title:'예보에 없던 소나기',art:'event-taehun'},
 seoyul:{title:'기울어진 캔버스',art:'event-seoyul'},
};

const eventLines:Record<CharacterId,Record<EventKind,[string,string,string]>>={
 world:{
  closeness:['세계가 카메라를 끄고 한 걸음 가까이 왔다.','화면에 남기지 않을 순간을 너와만 기억하고 싶어.','세계는 대답을 재촉하지 않고 손을 내밀었다.'],
  confidence:['세계가 편집하지 않은 원본 파일을 열었다.','멋진 장면 말고, 불안해서 지운 부분부터 봐 줄래?','이번에는 좋아요 수보다 내 표정을 먼저 확인했다.'],
  jealousy:['세계의 손가락이 재생 버튼 위에서 멈췄다.','질투 난 건 맞아. 그래도 네 관계를 내가 정하면 안 되지.','꺼진 화면에 두 사람의 솔직한 표정만 비쳤다.'],
  boundary:['세계가 휴대전화를 내밀다 스스로 멈췄다.','확인해도 되는지 먼저 물을게. 싫으면 싫다고 해 줘.','허락을 기다리는 몇 초가 긴 고백처럼 흘렀다.'],
  chance:['밴드실 전원이 꺼지고 붉은 비상등만 켜졌다.','어둠 속에서 세계가 내 교복 소매를 본능적으로 붙잡았다.','불이 돌아온 뒤에도 세계는 한 박자 늦게 손을 놓았다.'],
 },
 junyeon:{
  closeness:['준연이 노트를 건네다 손끝을 급히 거두었다.','조금만 더 여기 있어 줄래? 설명을 끝내고 싶어.','작아지던 목소리가 둘만의 거리에서 또렷해졌다.'],
  confidence:['준연이 자기 이름으로 저장한 분석표를 열었다.','틀린 곳이 있어도, 이번에는 내가 직접 고쳐 볼게.','커서가 떨렸지만 저장 버튼은 준연이 눌렀다.'],
  jealousy:['준연은 웃는 척하다가 노트 귀퉁이를 접었다.','네가 누구와 친한지는 네 선택인데… 조금 부러웠어.','숨기지 않은 감정이 오히려 두 사람 사이를 편하게 했다.'],
  boundary:['대신 말해 주려는 내 앞에서 준연이 손을 들었다.','이번 문장은 내가 끝까지 말해 보고 싶어.','나는 기다렸고, 준연은 자기 속도로 문장을 완성했다.'],
  chance:['안전 트레이 안의 비커가 열 충격으로 짧은 균열음을 냈다.','둘은 보안경을 쓴 채 즉시 물러났고, 나는 준연이의 팔을 가볍게 받쳤다.','다친 곳이 없음을 확인한 준연은 놀란 숨 끝에서 작게 고맙다고 말했다.'],
 },
 hyunsol:{
  closeness:['현솔이 체크리스트를 접고 내 표정을 보았다.','정답을 확인하려는 게 아니야. 네 마음을 듣고 싶어.','계산할 수 없는 침묵이 이상하게 편안했다.'],
  confidence:['현솔이 미해결 오차가 적힌 보고서를 돌려 보였다.','모르겠다고 쓴 부분까지 함께 검토해 줄래?','완벽하지 않은 자료를 맡긴 건 현솔식의 신뢰였다.'],
  jealousy:['현솔의 대답이 평소보다 짧고 정확했다.','질투라는 설명이 가장 맞아. 그렇다고 네 탓은 아니고.','감정에 이름을 붙이자 날카로운 공기가 조금 풀렸다.'],
  boundary:['현솔이 지적하려던 문장을 중간에 고쳐 말했다.','맞는 말이어도 그렇게 말하면 상처겠지. 다시 말할게.','사과는 변명 없이 짧았고, 그래서 정확했다.'],
  chance:['화학실 조명이 순간 꺼졌다가 푸른 비상등과 함께 돌아왔다.','현솔은 자신도 모르게 붙잡은 내 실험복 소매를 보고 눈을 크게 떴다.','손을 놓은 현솔은 안전부터 확인한 뒤, 뒤늦게 시선을 피했다.'],
 },
 taewoo:{
  closeness:['빠른 회전 끝에 태우의 운동화가 매트 모서리를 밟았다.','몸이 기울고, 내가 손을 뻗은 다음 순간 둘은 매트 위로 넘어졌다.','“다친 데 없어?” 가까운 거리에서 같은 질문이 동시에 튀어나왔다.'],
  confidence:['태우가 센터 없는 대형 영상을 재생했다.','이번 동선, 네가 첫 관객이 되어 줄래?','태우는 점수 대신 내 눈이 머문 박자를 물었다.'],
  jealousy:['태우가 음악을 끄고 거울 속 내 시선을 붙잡았다.','아까는 다른 사람만 보고 있던 것 같아서… 조금 승부욕 났어.','태우는 경쟁 대신 솔직한 이유를 말하고 다시 재생을 눌렀다.'],
  boundary:['태우가 손목을 잡으려다 손바닥을 펴 보였다.','파트너 동작 해도 돼? 싫으면 혼자 카운트 맞출게.','내가 고개를 끄덕인 뒤에야 여덟 번째 박자가 시작됐다.'],
  chance:['빠른 회전 끝에 태우의 운동화가 매트 모서리를 밟았다.','몸이 기울고, 내가 손을 뻗은 다음 순간 둘은 매트 위로 넘어졌다.','“잠깐, 너무 가까워.” 태우가 웃으며 먼저 안전을 확인했다.'],
 },
 taehun:{
  closeness:['구름이 관측창을 가리자 태훈이 망원경에서 물러났다.','오늘 가장 보고 싶었던 건 하늘만은 아니었어.','관측일지에 흐림과 동행 한 명이 나란히 적혔다.'],
  confidence:['태훈이 시집 사이에 숨긴 관측 메모를 펼쳤다.','값으로 못 남긴 생각도 읽어 줄 수 있어?','과학과 문학 사이의 여백을 처음으로 함께 보았다.'],
  jealousy:['태훈의 연필이 같은 구름 경계를 두 번 그렸다.','네가 다른 사람과 웃는 걸 보니 마음의 예보가 흐려졌어.','태훈은 내 대답을 재촉하지 않고 관측 시각부터 적었다.'],
  boundary:['태훈이 내 손 가까이에 책갈피를 놓고 기다렸다.','이 시를 읽어도 되는지 먼저 물어보고 싶었어.','허락을 받은 뒤 읽은 마지막 문장이 밤공기처럼 잔잔했다.'],
  chance:['예보에 없던 소나기가 관측 돔 지붕을 빠르게 두드렸다.','둘은 관측일지를 품에 넣고 투명 우산 하나 아래로 뛰어들었다.','태훈은 별 대신 가까워진 거리를 기록할지 잠시 고민했다.'],
 },
 seoyul:{
  closeness:['서율이 가리던 스케치북을 내 쪽으로 더 펼쳤다.','완성된 다음 말고, 변하고 있는 지금 봐 줬으면 해.','마르지 않은 색 옆에 둘의 그림자가 나란히 놓였다.'],
  confidence:['서율이 이름 없는 작업 파일을 처음 열어 보였다.','평가 말고, 네가 느낀 장면 하나만 말해 줘.','내 대답을 들은 서율이 빈 레이어에 제목을 붙였다.'],
  jealousy:['서율은 건반에서 손을 떼고 내 시선을 따라갔다.','다른 사람의 감상도 중요하지만… 네 첫 반응은 내가 듣고 싶었어.','비교가 아닌 부탁으로 바뀐 말이 다음 화음을 만들었다.'],
  boundary:['서율이 촬영 버튼 앞을 손으로 가렸다.','지금은 사진 말고 눈으로만 봐 줘.','나는 휴대전화를 내려놓고 그림 앞에 조용히 앉았다.'],
  chance:['열린 창으로 들어온 돌풍에 미완성 캔버스가 앞으로 기울었다.','서율과 내가 양쪽에서 동시에 붙잡자 캔버스 가장자리 사이로 시선이 마주쳤다.','그제야 서율의 뺨에 묻은 작은 보라색 물감이 보였다.'],
 },
};

export function eventCutscene(id:CharacterId,kind:EventKind,location:LocationId,instance='preview'):CutsceneSpec{
 const illustrated=kind==='chance'||(id==='taewoo'&&kind==='closeness');
 const signature=signatureEvent[id];
 return {
  key:`event:${instance}:${id}:${kind}`,label:'SURPRISE EVENT CUTSCENE',title:illustrated?signature.title:eventLabels[kind],
  subtitle:`${characterById[id].name} · ${locationById[location].name}`,beats:eventLines[id][kind],
  background:locationById[location].bg,mood:'event',character:id,art:illustrated?signature.art:undefined,
  motion:id==='taewoo'&&illustrated?'motion/event-taewoo-fall':undefined,
 };
}

export function eventKindFromScene(id:string):EventKind|null{
 const match=id.match(/-event-(closeness|confidence|jealousy|boundary|chance)$/);
 return (match?.[1] as EventKind|undefined)??null;
}
