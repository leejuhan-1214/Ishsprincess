import type {RPerson,RSpeaker} from '../romanceTypes';

export type TrialExperienceChoice={id:string;label:string};
export type TrialExperienceSource={id:string;speaker:RSpeaker;text:string};
export type TrialComicPanel={id:string;art:string;title:string;caption:string;records:string[]};
export type TrialPreludeDefinition={
 id:string;kind:'comparison'|'panic'|'alternative';title:string;prompt:string;
 sources:TrialExperienceSource[];choices:TrialExperienceChoice[];requiredSelections:number;
 answer:string[];success:string;retry:string;comicId:string;
};
export type TrialSupportDefinition={
 id:string;title:string;prompt:string;choices:TrialExperienceChoice[];answer:string[];
 success:string;retry:string;comicId:string;defaultWitness:Exclude<RPerson,'junyeon'>;
 witnessLines:Record<Exclude<RPerson,'junyeon'>,string>;
};

/** Existing illustrations and the original records stay linked, never rewritten. */
export const trialComicPanels:TrialComicPanel[]=[
 {id:'slip-1610',art:'memory-time',title:'두 장의 오후',caption:'같은 만남의 원본 쪽지. 세계에게는 15:40, 나에게는 16:10이 적혀 있었다.',records:['memory-01','memory-02']},
 {id:'booking-1700',art:'memory-reservation',title:'우리가 기다린 시간',caption:'예약은 16:20에서 17:00으로 바뀌었지만 태우의 안내에는 이전 시간이 남았다.',records:['memory-03','memory-04']},
 {id:'split-notifications',art:'memory-meeting',title:'세 곳으로 갈라진 약속',caption:'16:40의 같은 모임. 수신 집단마다 다른 장소가 입력된 공지로 서로 다른 곳에서 기다렸다.',records:['memory-05','memory-06']},
 {id:'cue-v3',art:'memory-cues',title:'리허설 뒤의 두 순서',caption:'승인본 v4의 공유와 수령 확인 뒤, 구버전 v3가 배포 대상으로 선택됐다.',records:['memory-07','memory-08']},
];

const comparisonSources:TrialExperienceSource[]=[
 {id:'world-original',speaker:'world',text:'내가 받은 원본은 15:40. 독서실 옆 공용 테이블에서 만나자는 안내야.'},
 {id:'same-memory',speaker:'junyeon',text:'종이는 같았는데 우리가 시간을 다르게 기억한 걸 수도 있잖아.'},
 {id:'player-original',speaker:'player',text:'내가 받은 원본은 16:10. 장소와 모임 내용은 세계의 쪽지와 같아.'},
 {id:'print-role',speaker:'minhyuk',text:'역할표에는 안내문 인쇄와 배부 담당이 적혀 있어. 그 역할만으로 작성자를 정할 수는 없어.'},
];

export const trialPreludeDefinitions:TrialPreludeDefinition[]=[
 {
  id:'compare-original-testimony',kind:'comparison',title:'증언 대조 · 같은 약속, 다른 시간',
  prompt:'같은 장소와 모임을 가리키면서 시간이 다른 두 원본의 증언을 골라 나란히 놓자.',
  sources:comparisonSources,choices:comparisonSources.map(source=>({id:source.id,label:source.text})),requiredSelections:2,
  answer:['world-original','player-original'],
  success:'두 사람은 같은 약속의 원본을 읽고 있다. 기억을 다투기 전에 종이에 적힌 시간부터 증거와 맞춰 보자.',
  retry:'누가 담당했는지보다 두 원본에 실제로 무엇이 적혔는지를 비교하자. 세계의 쪽지와 내 쪽지를 읽는 증언을 하나씩 골라 보자.',
  comicId:'slip-1610',
 },
 {
  id:'quiet-the-overlap',kind:'panic',title:'겹친 목소리 · 확인할 질문 하나',
  prompt:'말들이 겹친다. 천천히 읽고, 공개 기록으로 확인할 수 있는 질문 하나를 골라 대화를 이어 가자. 시간 제한은 없다.',
  sources:[
   {id:'program-name',speaker:'junyeon',text:'표시 이름이 얼터에고 테스트였잖아. 프로그램이 바꾼 거 아냐?'},
   {id:'different-place',speaker:'taewoo',text:'이름만 따지면 또 놓쳐. 나는 강당, 밴드는 밴드실로 갔어.'},
   {id:'program-capability',speaker:'juhan',text:'이름하고 실제 동작은 달라. 어떤 설정과 권한으로 게시됐는지 봐 줘.'},
  ],
  choices:[
   {id:'check-reservation',label:'예약 변경 시각과 태우의 안내에 남은 이전 시간을 먼저 맞춰 볼까?'},
   {id:'check-settings',label:'공지의 장소 입력, 자동 변경 설정, 얼터에고의 게시 권한을 확인할 수 있을까?'},
   {id:'check-meeting-time',label:'세 안내의 모임 시각이 달라 처음부터 다른 모임이었는지 확인할까?'},
  ],requiredSelections:1,answer:['check-settings'],
  success:'확인할 질문이 하나로 모였다. 공지의 표시 이름을 넘어 실제 입력과 권한을 보여 주는 기록을 제시하자.',
  retry:'예약 시간과 모임 시각도 확인할 수 있지만, 지금 다투는 것은 프로그램이 장소를 골랐는지야. 실제 입력 항목과 기능을 확인할 질문을 찾아보자.',
  comicId:'split-notifications',
 },
 {
  id:'third-explanation',kind:'alternative',title:'제3의 설명 · 두 갈래 밖으로',
  prompt:'승인본이 없었거나 서율의 기억이 틀렸다는 두 설명만 가능한 걸까? 보관한 자료와 함께 확인할 수 있는 다른 설명을 고르자.',
  sources:[
   {id:'unavailable-final',speaker:'junyeon',text:'v3를 나눌 때는 v4가 없었어. 서율이 날짜를 잘못 기억한 거 아닐까?'},
   {id:'kept-approved',speaker:'seoyul',text:'전날 확인받은 v4를 보관했어. 종이와 버전 이력을 함께 보면 날짜를 맞출 수 있어.'},
   {id:'check-order',speaker:'minhyuk',text:'승인과 공유, 수령 확인, 배포 선택을 순서대로 보자. 가능한 설명을 둘로 제한할 필요는 없어.'},
  ],
  choices:[
   {id:'shared-after-distribution',label:'v4는 전날 승인됐지만, 공용 폴더에 공유된 것은 v3 배포 뒤였을 수 있다.'},
   {id:'old-version-selected',label:'승인본은 이미 준비됐지만, 실제 배포에는 구버전이 선택됐을 수 있다.'},
   {id:'revised-after-selection',label:'v3가 선택된 뒤에야 공연 순서가 바뀌면서 v4가 만들어졌을 수 있다.'},
  ],requiredSelections:1,answer:['old-version-selected'],
  success:'승인본의 존재와 배포본의 선택은 서로 다른 일이다. 어느 쪽이 먼저였는지 기록으로 검증하자. 선택한 사람과 경위는 그다음에 확인한다.',
  retry:'E08의 승인·공유와 수령 확인은 구버전 선택보다 앞서 있다. 승인본이 이미 있어도 다른 버전이 배포될 수 있는지 생각해 보자.',
  comicId:'cue-v3',
 },
];

export const trialSupportDefinitions:TrialSupportDefinition[]=[
 {
  id:'support-originals',title:'함께 반박 · 확인한 범위까지',prompt:'방금 제시한 원본이 뒷받침하는 말을 골라 함께 확인하자.',
  choices:[
   {id:'different-papers',label:'같은 약속의 원본 시간이 다르다. 쪽지를 바꾼 사람과 이유는 더 확인해야 한다.'},
   {id:'different-meetings',label:'두 종이에 적힌 시간이 다르니 장소와 모임 내용도 서로 다른 약속이다.'},
   {id:'departure-and-arrival',label:'한 쪽지에는 출발 시간을, 다른 쪽지에는 만날 시간을 적은 것이다.'},
  ],answer:['different-papers'],
  success:'원본의 시간이 다르다는 데까지 함께 확인했어. 누가 왜 바꿨는지는 다음 기록과 설명으로 이어 가자.',
  retry:'두 원본은 시간 차이를 입증하지만 작성자나 의도까지 알려 주지는 않는다. 확인한 범위를 넘지 않는 말을 골라 보자.',
  comicId:'slip-1610',defaultWitness:'world',
  witnessLines:{
   world:'내가 가져온 종이도 여기 그대로 있어. 기다린 기억과 원본에 적힌 시간을 나눠서 말할게.',
   hyunsol:'같은 조건이라고 생각했는데 종이부터 다르네. 확인한 결과와 추측은 칸을 나눠 두자.',
   taewoo:'누가 더 오래 기다렸나 겨루는 건 그만하자. 각자 받은 시간을 같이 읽으면 돼.',
   taehun:'같은 약속에 붙은 시간이 두 개야. 빈칸에 이유를 쓰기 전에 원본부터 남기자.',
   seoyul:'종이를 나란히 두니까 차이가 보여. 보이는 차이보다 더 멀리 선을 긋지는 말자.',
   juhan:'두 원본의 값이 다르다는 건 비교할 수 있어. 입력한 사람까지 같은 자료로 찾을 수는 없고.',
   minhyuk:'역할표도 보관했다. 담당 업무와 실제로 한 행동은 따로 확인하자.',
  },
 },
 {
  id:'support-posting',title:'함께 반박 · 이름과 작동을 구분하기',prompt:'대기열 내보내기와 권한 설정이 뒷받침하는 설명을 함께 고르자.',
  choices:[
   {id:'automatic-place-fields',label:'수신 집단은 각각 입력했지만 장소는 자동 변경 기능이 골랐다.'},
   {id:'manual-fields',label:'집단별 장소가 직접 입력됐고 자동 변경은 꺼져 있었다. 입력한 사람은 인계와 설명을 더 대조해야 한다.'},
   {id:'same-post-different-retelling',label:'게시된 원문은 같은 장소였지만 참가자들이 전달하면서 다른 장소로 바뀌었다.'},
  ],answer:['manual-fields'],
  success:'자동 장소 변경과 얼터에고의 게시로 설명할 수는 없어. 실제 입력은 담당 인계와 당사자 설명을 함께 확인하자.',
  retry:'설정은 게시 방식을 보여 주지만 사람을 대신 지목하지는 않는다. 장소 입력과 권한에서 확인된 사실을 이어 보자.',
  comicId:'split-notifications',defaultWitness:'juhan',
  witnessLines:{
   world:'같은 시간에 다른 곳을 기다렸다는 원문도 남아 있어. 제목보다 그 공지가 올라온 방식을 보자.',
   hyunsol:'기능이 있었는지부터 확인하자. 이름이 그럴듯하다는 건 작동했다는 근거가 아니니까.',
   taewoo:'내 안내에는 강당이었어. 장소가 갈라진 사실과 누가 입력했는지는 나눠서 맞추자.',
   taehun:'표시된 이름으로 빈칸을 채우기엔 아직 빠르네. 기록이 보여 주는 경로부터 따라가자.',
   seoyul:'밴드 안내 원문은 그대로야. 같은 서식 안에서 어디가 달라졌는지 같이 볼게.',
   juhan:'선생님과 확인한 내보내기야. 수신 집단별 입력과 자동 변경 설정, 권한을 차례로 읽어 줄게.',
   minhyuk:'공개 인계표도 같이 확인하자. 시스템 설정만 보고 사람의 행동까지 정하지는 않겠다.',
  },
 },
 {
  id:'support-version-order',title:'함께 반박 · 순서와 책임 사이',prompt:'승인본과 배포 이력으로 확인한 순서를 정리하자. 실제로 받은 사람과 선택한 사람의 설명은 이어서 듣는다.',
  choices:[
   {id:'sharing-after-selection',label:'v4의 승인은 전날이지만 공유와 수령 확인은 v3 선택보다 뒤였다.'},
   {id:'late-approval',label:'v3가 배포된 뒤에야 v4가 승인됐으니 배포 때는 구버전밖에 없었다.'},
   {id:'approval-before-selection',label:'v4 승인·공유와 수령 확인이 v3 배포 선택보다 앞선다. 실제 인계와 선택은 본인의 설명에 대조한다.'},
  ],answer:['approval-before-selection'],
  success:'v4가 준비된 뒤 v3가 선택됐다는 순서는 확인했어. 네 장면을 잇고, 준연이 실제로 받은 자료와 선택한 일을 원본에 맞춰 설명하도록 듣자.',
  retry:'이름 하나가 동기까지 설명하지는 않는다. 승인·공유와 수령 확인, 구버전 선택 중 무엇이 먼저인지 확인해 보자.',
  comicId:'cue-v3',defaultWitness:'seoyul',
  witnessLines:{
   world:'옛 순서로 기다린 것과 승인본이 없었다는 말은 달라. 언제 어떤 종이가 있었는지 잇자.',
   hyunsol:'최종본이 있었다는 것과 최종본을 골랐다는 것은 다른 조건이야. 두 순서를 섞지 말자.',
   taewoo:'승인본으로 다시 맞췄을 때는 전환도 됐어. 왜 다른 순서가 나왔는지 기록부터 보자.',
   taehun:'앞뒤가 정해진 칸부터 이어 두자. 남은 빈칸은 본인의 설명으로 확인하고.',
   seoyul:'내가 보관한 승인본이 여기 있어. 전날의 종이와 오늘 배포된 종이를 이력에 맞춰 놓을게.',
   juhan:'버전이 있는 것과 배포 대상으로 선택하는 건 별개야. 이력에서 두 시점을 따로 보자.',
   minhyuk:'수령 확인이 먼저고 v3 선택이 뒤다. 실제로 누구에게 무엇을 넘겼는지도 설명과 맞추겠다.',
  },
 },
];
