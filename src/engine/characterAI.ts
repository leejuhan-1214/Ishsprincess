import {caseAfterthought,schoolAfterthought,investigationThread} from '../data/storyContinuity';
import {characterById,locationById} from '../data/characters';
import {hangoutMoves,type ChoiceMood} from '../data/hangoutMoments';
import {bondTier,mainStoryThreads,relationshipLine} from './relationshipDirector';
import type {CharacterId,Choice,Effect,Line,LocationId,Scene} from '../types';

export type Relationship={affection:number;trust:number;jealousy:number;special:number};
export type TalkContext={id:CharacterId;location:LocationId;chapter:number;visit:number;stats:Relationship;flags:string[];seed:number;investigating?:boolean};
export type EventKind='closeness'|'confidence'|'jealousy'|'boundary'|'chance';

const persona:Record<CharacterId,{
 voice:string[];concerns:string[];soft:string[];guarded:string[];topics:string[];gestures:string[];
}>={
 world:{
  voice:['그 말, 다른 사람한테도 똑같이 하는 건 아니지?','카메라 밖에서도 그렇게 말해 주면 믿어 볼게.','조금 더 가까이 와서 다시 말해 줘.'],
  concerns:['사람들의 시선보다 네가 돌아서는 순간','완벽하게 보이려다 솔직함을 놓치는 일','좋아하는 마음이 상대의 경계를 넘는 순간'],
  soft:['세계가 장난스러운 표정을 잠깐 내려놓았다.','세계는 휴대폰 화면을 끄고 내 대답만 기다렸다.','세계의 목소리가 무대 위에서보다 한 톤 낮아졌다.'],
  guarded:['세계는 웃었지만 질문을 놓아주지는 않았다.','세계의 손끝이 기타 피크 가장자리를 느리게 문질렀다.','세계는 대답보다 내 표정을 먼저 확인했다.'],
  topics:['오늘 올리지 않은 사진','합주가 끝난 뒤의 침묵','읽음 표시가 늦어진 이유','둘만 알고 싶은 노래'],
  gestures:['이어폰 한쪽을 내민다','기타 줄을 가볍게 튕긴다','휴대폰을 뒤집어 책상에 놓는다']},
 junyeon:{
  voice:['내가 설명을 잘 못해도, 중간에 끊지만 말아 줘.','그렇게 물어보면… 나도 끝까지 말해 볼 수 있을 것 같아.','틀릴 수도 있는데, 내 생각부터 말해도 돼?'],
  concerns:['사람들 앞에서 자기 이름으로 설명하는 일','도움을 받는 것과 대신해 주는 것의 차이','실패한 실험 기록을 숨기지 않는 용기'],
  soft:['준연은 노트 귀퉁이를 펴며 조금 길게 숨을 내쉬었다.','준연의 시선이 바닥에서 내 얼굴까지 천천히 올라왔다.','준연은 지웠던 문장을 다시 자기 글씨로 적었다.'],
  guarded:['준연은 대답을 한 번 삼킨 뒤 더 작은 목소리로 시작했다.','준연의 펜이 같은 자리에서 두 번 멈췄다.','준연은 웃어야 할지 사과해야 할지 모르는 표정을 지었다.'],
  topics:['오늘 실패한 실험의 원인','자기 이름이 빠진 기록','말을 끝까지 들어 주는 사람','컴퓨터로 정리한 관측표'],
  gestures:['노트를 내 쪽으로 반쯤 돌린다','깨끗한 비커를 두 번 확인한다','저장 버튼 위에서 손을 멈춘다']},
 hyunsol:{
  voice:['근거가 있으면 듣고, 없으면 같이 확인하면 돼.','정답처럼 말하지 않을게. 네 생각은 어때?','내 말이 맞는지보다, 지금 필요한 말인지부터 보자.'],
  concerns:['정확한 지적과 모욕을 구분하는 일','실수의 책임을 공정하게 나누는 절차','감정을 오류로 취급하지 않는 태도'],
  soft:['현솔은 반박 대신 내 문장을 끝까지 들었다.','현솔이 체크리스트의 빈칸을 내 몫으로 남겨 두었다.','현솔은 계산기를 내려놓고 표정을 살폈다.'],
  guarded:['현솔은 미간을 좁혔지만 바로 결론을 내리지는 않았다.','현솔의 말끝이 날카로워지기 전에 한 박자 멈췄다.','현솔은 틀린 부분보다 말하는 방식을 먼저 고쳐 잡았다.'],
  topics:['깨진 비커 이후의 안전 절차','준연에게 사과하는 정확한 방법','오차를 인정한 보고서','논리와 기분이 충돌한 순간'],
  gestures:['체크리스트를 한 줄씩 가리킨다','보안경을 벗어 책상에 놓는다','모니터의 비교표를 확대한다']},
 taewoo:{
  voice:['말로만 응원하지 말고 한 카운트 같이 해 봐.','못해도 괜찮아. 박자 놓치면 내가 다시 잡아 줄게.','센터가 아닐 때도 나를 보고 있었어?'],
  concerns:['성적과 순위 없이 자신을 설명하는 일','아픈 몸을 숨기지 않고 멈추는 선택','무대 밖의 평범한 모습도 사랑받는지'],
  soft:['태우는 거울 대신 내 반응을 확인했다.','태우가 음악을 끄고 숨소리가 가라앉기를 기다렸다.','태우는 장난스러운 승부욕 대신 솔직한 미소를 보였다.'],
  guarded:['태우는 괜찮다는 말을 먼저 했지만 발목을 조심스럽게 디뎠다.','태우의 웃음 뒤에서 빠른 호흡이 늦게 정리됐다.','태우는 점수표를 접어 주머니에 넣었다.'],
  topics:['오늘 가장 어려웠던 한 박자','센터가 비어 있는 대형','연습을 멈춰야 하는 신호','컴퓨터로 느리게 돌려 본 춤'],
  gestures:['손가락으로 네 박자를 센다','운동화 끈을 다시 묶는다','영상 타임라인을 앞으로 돌린다']},
 taehun:{
  voice:['정답보다 네가 본 모양을 먼저 듣고 싶어.','관측값에는 못 써도, 시에는 남길 수 있겠네.','별이 없을 때 함께 기다린 사람도 기록이 될까?'],
  concerns:['과학적 기록과 문학적 감상을 함께 지키는 일','예보가 빗나간 이유까지 남기는 태도','보이지 않는 시간을 성급히 결론짓지 않는 것'],
  soft:['태훈은 관측일지 옆에 작은 여백을 내어 주었다.','태훈의 시선이 구름과 내 얼굴 사이를 천천히 오갔다.','태훈은 아직 제목 없는 문장을 조용히 읽었다.'],
  guarded:['태훈은 시집을 덮었지만 손을 떼지는 않았다.','태훈은 답을 서두르지 않고 구름의 이동부터 기록했다.','태훈의 문장은 끝났지만 연필 끝은 한동안 움직였다.'],
  topics:['오늘 구름의 실제 이름','관측일지 가장자리의 문장','틀린 예보를 남기는 이유','컴퓨터로 겹친 구름 사진'],
  gestures:['연필로 하늘의 경계를 그린다','관측 시각을 정확히 적는다','시집 사이에 새 책갈피를 끼운다']},
 seoyul:{
  voice:['완성됐다고 단정하지 말고, 지금 느낀 걸 말해 줘.','사진은 안 돼. 대신 더 가까이서 보는 건 허락할게.','틀린 색은 없어. 다만 내가 고르지 않은 색은 있지.'],
  concerns:['미완성 작업을 보여 줄 사람을 고르는 권리','창작물을 수정하고 공개하는 동의','음악과 그림 사이에서 자기 목소리를 잃지 않는 것'],
  soft:['서율은 가리던 스케치북을 조금 더 펼쳤다.','서율이 건반에서 손을 떼고 내 감상을 기다렸다.','서율은 저장하지 않은 파일에 처음으로 제목을 붙였다.'],
  guarded:['서율은 화면을 잠갔지만 자리를 뜨지는 않았다.','서율의 손이 그림 모서리를 한 번 더 눌렀다.','서율은 내 대답에서 평가보다 허락을 찾았다.'],
  topics:['아직 마르지 않은 색','일부러 불편하게 만든 화음','공개하지 않은 첫 번째 버전','컴퓨터 화면의 빈 프레임'],
  gestures:['색상표 두 장을 나란히 놓는다','건반 위에 손을 가볍게 얹는다','레이어 이름을 천천히 바꾼다']},
};

const hash=(text:string)=>{let h=2166136261;for(const c of text){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
const pick=<T,>(items:T[],key:string)=>items[hash(key)%items.length];
const line=(speaker:Line['speaker'],text:string):Line=>({speaker,text});
const subject=(name:string)=>{const code=name.charCodeAt(name.length-1)-0xac00;return `${name}${code>=0&&code<=11171&&code%28!==0?'이':'가'}`;};

const eventTitles:Record<EventKind,string>={closeness:'예고 없는 둘만의 시간',confidence:'처음 맡기는 부탁',jealousy:'시선이 멈춘 곳',boundary:'넘지 말아야 할 선',chance:'예상 밖의 순간'};

const activityEcho:Record<CharacterId,[string,string,string]>={
 world:['“리프가 엇갈렸네. 그래도 모르는 척 넘기진 않은 건 마음에 들어.”','“몇 음 놓쳤어도 내 박자를 다시 찾으려 한 건 알겠어.”','“전부 기억했네. 노래보다 내가 준 신호를 기억한 것 같아서 좀 설렌다.”'],
 junyeon:['“순서가 꼬였지만 같이 멈춰 확인해서 다행이야.”','“틀린 단계는 다시 말할 수 있어. 네가 기다려 주니까.”','“이번엔 내가 절차를 끝까지 설명했어. 네 앞이라 가능했던 것 같아.”'],
 hyunsol:['“값이 벗어났어. 실패 처리 말고 왜 멈췄는지부터 보자.”','“완전히 맞진 않아도 기준을 같이 조정한 건 의미 있어.”','“오차 범위 안이야. 그런데 네가 내 속도까지 맞춘 건 계산 밖이네.”'],
 taewoo:['“박자는 놓쳤지만 내 멈춤 신호는 봤네. 그게 더 중요해.”','“두 번은 맞았어. 다음엔 거울 없이도 나만 보면 되겠다.”','“세 카운트 전부 맞았어! 지금만큼은 센터보다 네 파트너가 더 좋다.”'],
 taehun:['“관측창을 놓쳤어도 구름 시간을 적었으니 빈 기록은 아니야.”','“몇 번 흐렸지만 같은 방향을 보고 기다렸네.”','“세 번 모두 잡았어. 하늘보다 네가 기다리는 리듬을 먼저 알게 될 것 같아.”'],
 seoyul:['“색이 벗어나도 원본은 남아 있어. 다시 고를 수 있어.”','“완전히 같은 색보다 네가 멈춘 색이 더 궁금해.”','“세 번 모두 내가 남기고 싶던 여백에서 멈췄네. 우리 감각이 닮았나 봐.”'],
};

export function selectSuddenEvent(ctx:TalkContext):EventKind|null{
 const seen=(kind:EventKind)=>ctx.flags.includes(`event-seen:${ctx.id}:${kind}`);
 const candidates:EventKind[]=[];
 if(ctx.chapter>=2&&ctx.visit>=2&&ctx.stats.jealousy>=45&&!seen('jealousy'))candidates.push('jealousy');
 if(ctx.chapter>=2&&ctx.visit>=1&&ctx.stats.trust>=55&&!seen('confidence'))candidates.push('confidence');
 if(ctx.chapter>=2&&ctx.visit>=2&&ctx.stats.affection>=65&&!seen('closeness'))candidates.push('closeness');
 const boundaryHigh=['world','junyeon','hyunsol','taewoo'].includes(ctx.id)?ctx.stats.special>=70:ctx.stats.special<=20;
 if(ctx.chapter>=2&&ctx.visit>=2&&boundaryHigh&&!seen('boundary'))candidates.push('boundary');
 const signaturePlace:Record<CharacterId,LocationId>={world:'band',junyeon:'chemistry',hyunsol:'chemistry',taewoo:'dance',taehun:'observatory',seoyul:'art'};
 if(ctx.chapter>=1&&ctx.visit>=2&&ctx.location===signaturePlace[ctx.id]&&(hash(`${ctx.seed}:${ctx.chapter}:${ctx.visit}:${ctx.id}`)%100)<14&&!seen('chance'))candidates.push('chance');
 return candidates[0]??null;
}

function eventIntro(ctx:TalkContext,kind:EventKind):Line[]{
 const name=characterById[ctx.id].name,place=locationById[ctx.location].name;
 const details:Record<EventKind,string[]>={
  closeness:[`${place}의 불이 한 줄씩 꺼질 무렵, ${name}이 평소보다 가까운 거리에서 멈췄다.`,`오늘은 네가 먼저 가 버릴까 봐 조금 신경 쓰였어.`],
  confidence:[`${name}이 다른 누구에게도 보여 주지 않았던 작업 파일을 내 쪽으로 돌렸다.`,`잘됐는지 말고, 내가 왜 이렇게 했는지 먼저 들어 줄래?`],
  jealousy:[`복도 끝에서 다른 친구와 웃던 장면을 본 ${name}의 대답이 눈에 띄게 짧아졌다.`,`아무것도 아니라고 하면 거짓말이겠지. 그래도 네 인간관계를 정할 권리는 없어.`],
  boundary:[`${name}이 익숙한 행동을 하려다 스스로 손을 멈췄다.`,`좋아한다는 이유로 허락을 생략하면 안 되는 거잖아. 지금 물어볼게.`],
   chance:({
    world:['합주 도중 전원이 꺼지고 밴드실에 붉은 비상등만 남았다.','잠깐만… 불이 돌아올 때까지 옆에 있어.'],
    junyeon:['가열을 멈춘 안전 트레이 안에서 비커에 짧은 균열음이 났다.','물러나자. 이번에는 내가 먼저 주변에 알릴게.'],
    hyunsol:['화학실 조명이 꺼졌다가 푸른 비상등만 늦게 켜졌다.','움직이지 마. 네 위치부터 확인할게.'],
    taewoo:['빠른 회전 끝에 태우의 운동화가 매트 모서리를 밟았다.','잠깐— 중심이 안 잡혀!'],
    taehun:['관측 돔을 닫기 직전 예보에 없던 소나기가 쏟아졌다.','일지부터 품에 넣어. 우산은 하나면 돼.'],
    seoyul:['열린 창으로 들어온 돌풍에 미완성 캔버스가 앞으로 기울었다.','오른쪽 잡아 줘! 물감은 나중에 닦아도 돼.'],
   } as Record<CharacterId,[string,string]>)[ctx.id],
 };
 return [line('narrator',details[kind][0]),line(ctx.id,details[kind][1])];
}

const locationTopics:Record<LocationId,string[]>={
 hallway:['창가에서 나눈 인사','계단을 내려가며 이어진 이야기'],
 gate:['오늘 하루에 남은 말','집에 가기 전 확인하고 싶은 약속'],classroom:['칠판에 남은 역할표','오늘 바뀐 발표 순서'],
 garden:['바람에 날린 메모','점심시간에 못다 한 말'],cafeteria:['마지막 남은 디저트','같이 앉을 자리'],
 library:['반납일이 겹친 책','책갈피에 적힌 한 문장'],chemistry:['실험 기록의 빈칸','안전표에 누락된 단계'],
 media:['편집하지 않은 원본','삭제할지 남길지 고민한 장면'],computer:['오류가 난 공동 파일','누가 마지막으로 수정했는지 남은 기록'],
 observatory:['구름 때문에 미뤄진 관측','오늘의 별자리 후보'],band:['맞지 않는 마지막 화음','녹음되지 않은 앙코르'],
 art:['마르지 않은 물감','제목 없는 새 그림'],dance:['두 박자 늦은 동작','거울 없이 맞춰 보는 대형'],
 auditorium:['꺼진 무대 조명','객석에서 들린 작은 박수'],roof:['난간 너머의 야경','말없이 지나간 비행기'],walk:['갈림길에서 늦춘 걸음','학교 담장 너머의 저녁'],
};

const aftermaths:Record<ChoiceMood,string[]>={
 sync:['두 사람이 맞춘 것은 정답이 아니라 다음에도 다시 확인할 수 있는 기준이었다.','서로의 몫이 분명해지자 긴장 대신 함께 만든 리듬이 남았다.'],
 spark:['짧은 침묵이 어색함 대신 방금 전보다 가까워진 거리를 알려 주었다.','장난처럼 시작한 선택은 둘만 알아보는 표정 하나를 남겼다.'],
 craft:['{topic}에는 결과뿐 아니라 과정과 수정 흔적까지 또렷하게 남았다.','{place}의 문제는 사라지지 않았지만, 다시 시험할 수 있는 형태로 바뀌었다.'],
 dare:['예상 밖의 선택은 성공과 실패 어느 쪽으로도 깔끔하게 정리되지 않는 장면을 만들었다.','조금 무모한 시도 끝에 둘은 웃었지만, 다음에는 어디서 멈출지도 함께 정해야 했다.'],
 space:['멈출 시각과 선을 먼저 정하자, 함께 있는 시간은 오히려 더 편안해졌다.','상대의 선택권을 남겨 둔 침묵은 회피가 아니라 신뢰로 기록됐다.'],
 play:['계획표에는 없던 방식이 {scene}을(를) 둘만의 기억으로 바꾸었다.','정답을 고르지 않은 몇 분이 {place}의 공기를 가볍게 흔들었다.'],
};

const locationGesture:Record<LocationId,string>={
 hallway:'통행을 막지 않도록 창가 쪽으로 한 걸음 물러난다',
 gate:'버스 전광판과 내 얼굴을 번갈아 확인한다',classroom:'칠판에 남은 역할표 옆으로 의자를 당긴다',garden:'바람에 들리는 메모를 손바닥으로 눌러 둔다',
 cafeteria:'맞은편의 빈 의자에서 가방을 치운다',library:'펼친 책 위에 조용히 책갈피를 놓는다',chemistry:'보안경과 실험대의 안전선을 먼저 확인한다',
 media:'편집 화면을 멈추고 원본 재생 위치를 가리킨다',computer:'공동 파일을 복구본으로 연 뒤 키보드에서 손을 뗀다',observatory:'관측일지의 시각과 구름량을 먼저 적는다',
 band:'앰프 음량을 낮추고 마이크 전원을 확인한다',art:'마르지 않은 작업 옆에 보호 표시를 붙인다',dance:'음악을 켜기 전에 바닥의 매트와 신발 끈을 확인한다',
 auditorium:'무대 가장자리의 안전 테이프 안쪽에 선다',roof:'난간에서 한 걸음 떨어진 자리에 관측 노트를 편다',walk:'갈림길 앞에서 걸음을 늦추고 내가 따라오는지 돌아본다',
};

const portableMoves:Record<CharacterId,string[]>={
 world:['room-sample','phones-down','lyric-trade','one-earbud','exit-time','silent-band'],
 junyeon:['thirty-seconds','question-cards','credit-card','one-variable','silence-minute','empty-audience'],
 hyunsol:['apology-draft','rule-swap','feeling-scale','blank-owner','forced-break','defer-verdict'],
 taewoo:['floor-constellation','half-speed','silent-count','flaw-remix','safety-sign','random-track'],
 taehun:['cloud-haiku','failed-forecast','humidity-metaphor','margin-trade','three-minutes','two-columns'],
 seoyul:['three-colors','sound-color','faceless-board','consent-card','filename-title','leave-unfinished'],
};
function moveEffects(id:CharacterId,mood:ChoiceMood):Effect[]{
 const positiveSpecial=id==='taehun'||id==='seoyul';
 const profile:Record<ChoiceMood,[number,number,number,number,number,number]>={
  sync:[8,11,-3,positiveSpecial?5:-5,2,2],
  spark:[13,5,2,positiveSpecial?4:2,1,0],
  craft:[6,10,-1,positiveSpecial?6:-4,1,3],
  dare:[10,-3,5,positiveSpecial?-4:7,-2,0],
  space:[3,9,-6,positiveSpecial?3:-6,3,1],
  play:[9,5,0,positiveSpecial?3:0,2,1],
 };
 const [affection,trust,jealousy,special,harmony,fair]=profile[mood];
 return [{target:id,stat:'affection',amount:affection},{target:id,stat:'trust',amount:trust},{target:id,stat:'jealousy',amount:jealousy},{target:id,stat:'special',amount:special},{target:'global',stat:'harmony',amount:harmony},{target:'global',stat:'fair',amount:fair}];
}

function aftermath(mood:ChoiceMood,id:CharacterId,place:string,topic:string,scene:string,key:string){
 return pick(aftermaths[mood],`${id}:${key}`).replaceAll('{place}',place).replaceAll('{topic}',topic).replaceAll('{scene}',scene);
}

export function hangoutScene(ctx:TalkContext):Scene{
 const c=characterById[ctx.id],place=locationById[ctx.location],p=persona[ctx.id];
 const pending=ctx.flags.find(flag=>flag.startsWith(`pending-event:${ctx.id}:`));
 const event=pending?.split(':').at(-1) as EventKind|undefined;
 const topic=pick(locationTopics[ctx.location],`${ctx.seed}:${ctx.chapter}:${ctx.visit}:topic`);
 const scene=`${place.name}에서 이어진 ${topic}`;
 const tier=bondTier(ctx.stats),thread=ctx.investigating?investigationThread(ctx.chapter):mainStoryThreads[Math.min(ctx.chapter,mainStoryThreads.length-1)];
 const fill=(value:string)=>value.replaceAll('{scene}',scene).replaceAll('{topic}',topic).replaceAll('{place}',place.name);
 const opening=`${place.name}에 도착하자 ${subject(c.name)} ${locationGesture[ctx.location]}.`;
 const mood=tier==='distant'?pick(p.guarded,`${ctx.chapter}:${ctx.visit}:guarded`):pick(p.soft,`${ctx.chapter}:${ctx.visit}:soft`);
 const activityFlag=[...ctx.flags].reverse().find(flag=>flag.startsWith(`activity-result:${ctx.id}:${ctx.chapter}:`));
 const activityScore=activityFlag?Number(activityFlag.split(':').at(-1)):null;
 const lead:Line[]=[
  line('narrator',opening),
  line('narrator',thread.detail),
  line(ctx.id,caseAfterthought(ctx.id,Math.min(ctx.chapter,4),ctx.flags,ctx.investigating)),
  line('narrator',mood),
 ];
 const tail:Line[]=[
  line(ctx.id,pick(p.voice,`${ctx.location}:${ctx.chapter}:${ctx.visit}:voice`)),
  ...(activityScore===null?[]:[line(ctx.id,activityEcho[ctx.id][activityScore===3?2:activityScore>0?1:0])]),
  line(ctx.id,relationshipLine(ctx.id,tier,`${ctx.chapter}:${ctx.visit}:after-school`)),
 ];
 const eventLead=event?eventIntro(ctx,event):[];
 const intro=[...lead,...eventLead,...tail];
 const deck=hangoutMoves[ctx.id].filter(move=>portableMoves[ctx.id].includes(move.key)),start=(hash(`${ctx.seed}:${ctx.chapter}:${ctx.visit}:${ctx.location}:moves`)+ctx.visit*7)%deck.length;
 const selected=Array.from({length:3},(_,index)=>deck[(start+index*2)%deck.length]);
 const situational:Choice={
  id:`story-thread-${ctx.chapter}-${ctx.id}`,label:'오늘의 사건',
  text:`${ctx.visit+1}번째 만남 · `+({world:`‘${thread.title}’에서 공개하지 않기로 한 장면을 다시 보며, 세계가 숨긴 감정을 묻는다.`,junyeon:`‘${thread.title}’에서 준연이 끝내 설명하지 못한 자기 몫을 직접 말할 때까지 기다린다.`,hyunsol:`‘${thread.title}’의 사실과 추측을 두 칸으로 나눠 현솔과 서로의 판단을 다시 검토한다.`,taewoo:`‘${thread.title}’에서 느낀 감정을 여덟 박자 동작으로 만들어 태우와 번갈아 따라 한다.`,taehun:`‘${thread.title}’의 관측 사실과 감상을 나눠 적고 태훈의 문장 옆에 내 문장을 남긴다.`,seoyul:`‘${thread.title}’에서 가장 오래 남은 순간을 색 하나로 골라 서율의 팔레트 옆에 놓는다.`})[ctx.id],
  response:[line('player',`아까 ${thread.title} 얘기, 네 생각을 더 듣고 싶어.`),line(ctx.id,schoolAfterthought(ctx.id,Math.min(ctx.chapter,4),ctx.stats.affection,ctx.stats.trust,ctx.flags,ctx.investigating)),line('narrator',`${place.name}에서 나눈 이야기는 ${ctx.investigating?'아직 확인하지 못한 물음과, 조사를 끝낸 뒤 함께 쉬기로 한':'다음 준비 때 확인할'} 작은 약속으로 남았다.`)],
  effects:[{target:ctx.id,stat:'affection',amount:8},{target:ctx.id,stat:'trust',amount:10},{target:ctx.id,stat:'jealousy',amount:-2},{target:'global',stat:'fair',amount:2},{target:'global',stat:'harmony',amount:1}],flags:[`personal:${ctx.id}`,`story-thread:${ctx.id}:${ctx.chapter}`],
 };
 const choiceBeats=['오늘 확인한 일 뒤에,','네가 남겨 둔 시간에,','다음 약속을 정하기 전에,'];
 const choices:Choice[]=[situational,...selected.map((move,index)=>({
  id:`moment-${ctx.visit}-${move.key}`,
  label:move.tag,
   text:`${thread.title} · ${ctx.visit+1}번째 만남: ${choiceBeats[index]} ${fill(move.text)}`,
  response:[line('player',fill(move.player)),line(ctx.id,fill(move.reply)),line(ctx.id,relationshipLine(ctx.id,tier,`${ctx.chapter}:${ctx.visit}:${move.key}:reply`)),line('narrator',aftermath(move.mood,ctx.id,place.name,topic,scene,`${ctx.seed}:${ctx.chapter}:${ctx.visit}:${move.key}`))],
  effects:moveEffects(ctx.id,move.mood),
  flags:[`personal:${ctx.id}`,`hangout-move:${ctx.id}:${move.key}`],
 }))];
 return {id:`visit-${ctx.id}-${ctx.chapter}-${ctx.visit}-${ctx.location}${event?`-event-${event}`:''}`,title:event?`돌발 · ${eventTitles[event]} · ${topic}`:`${thread.title} · ${topic}`,location:ctx.location,day:0,lines:intro,choices,cutsceneAt:event?lead.length+eventLead.length:undefined};
}

export function pendingEvent(flags:string[],id:CharacterId){return flags.find(flag=>flag.startsWith(`pending-event:${id}:`))??null;}
