import type {CharacterId,Choice,Line,Scene} from '../types';

export type RelationshipStats={affection:number;trust:number;jealousy:number;special:number};
export type BondTier='distant'|'curious'|'warm'|'close';
type RelationshipState={stats:Record<CharacterId,RelationshipStats>;route:CharacterId|null;segment:string};

const ids:CharacterId[]=['world','junyeon','hyunsol','taewoo','taehun','seoyul'];
const hash=(text:string)=>{let h=2166136261;for(const c of text){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
const pick=<T,>(items:T[],key:string)=>items[hash(key)%items.length];

export function bondTier(stats:RelationshipStats):BondTier{
 if(stats.affection>=75&&stats.trust>=65)return 'close';
 if(stats.affection>=50&&stats.trust>=40)return 'warm';
 if(stats.affection>=25||stats.trust>=20)return 'curious';
 return 'distant';
}

export const mainStoryThreads=[
 {title:'전학생의 첫날',detail:'아직 서로를 잘 모르는 1학년 1반의 첫인상이 오늘 대화의 거리감을 정하고 있었다.'},
 {title:'깨진 비커 이후',detail:'화학실 사고에서 누가 누구를 먼저 살폈는지가 방과 후에도 쉽게 잊히지 않았다.'},
 {title:'첫 번째 지도',detail:'점심시간에 누구와 어디로 갔는지에 따라 기다린 사람들의 표정이 조금씩 달라져 있었다.'},
 {title:'RE:ACTION의 시작',detail:'사이언스 페어의 역할이 정해지면서 둘이 함께 보낼 시간이 구체적인 일정이 되었다.'},
 {title:'두 사람의 밴드',detail:'세계와 서율의 편곡 충돌은 음악뿐 아니라 서로를 대하는 방식까지 다시 생각하게 했다.'},
 {title:'여덟 번의 카운트',detail:'댄스실에서 맞춘 박자와 멈춰야 할 신호가 다른 활동에서도 둘만의 기준처럼 남았다.'},
 {title:'구름과 문장',detail:'예보와 감상을 함께 남기는 방법을 두고 생긴 의견 차이가 아직 완전히 끝나지 않았다.'},
 {title:'야간 자습',detail:'늦은 시간까지 남은 교실에서 누구 곁에 앉았는지가 평소보다 크게 느껴지는 날이었다.'},
 {title:'재현되지 않는 반응',detail:'같은 실험을 다시 해도 결과가 달랐고, 사람의 마음도 한 번의 대답으로 단정할 수 없었다.'},
 {title:'잘라 붙인 장면',detail:'편집된 영상과 원본 사이의 차이가 커지면서 믿고 보여 줄 수 있는 사람이 중요해졌다.'},
 {title:'세 개의 방과 후',detail:'동시에 지킬 수 없는 약속들이 생겨 누구를 먼저 찾아갔는지가 관계의 온도를 바꾸고 있었다.'},
 {title:'세 갈래의 위기',detail:'발표·공연·안전 문제가 한꺼번에 겹쳐, 도움보다 곁에 남는 방식이 더 중요해진 시점이었다.'},
 {title:'사라진 최종본',detail:'최종 파일이 사라진 뒤 서로를 의심할지 믿을지에 따라 말투부터 달라질 수밖에 없었다.'},
 {title:'페어 당일',detail:'오랫동안 준비한 행사가 시작되자 미뤄 둔 마음도 더는 다음 일정 뒤로 숨기기 어려워졌다.'},
] as const;

const voice:Record<CharacterId,Record<BondTier,string[]>>={
 world:{
  distant:['세계는 웃고 있었지만 내 대답을 촬영하듯 조심스럽게 살폈다.','“아직은 네가 어디까지 진심인지 모르겠어.” 세계가 휴대전화를 뒤집어 놓았다.'],
  curious:['“요즘은 네 반응부터 찾게 돼.” 세계가 장난처럼 말하고는 시선을 늦게 거뒀다.','세계는 다른 친구들 앞에서보다 조금 낮은 목소리로 내 이름을 불렀다.'],
  warm:['“오늘 끝나고도 바로 가지 마.” 세계가 내 일정표의 빈칸을 손끝으로 가리켰다.','세계가 카메라를 끄고 말했다. “이건 올리지 않을 거야. 우리만 기억하자.”'],
  close:['“다른 사람들의 시선보다 네가 날 보는 순간이 더 중요해졌어.” 세계는 이번에는 웃음을 숨기지 않았다.','세계가 내 소매를 가볍게 잡았다. “오늘은 내가 먼저 좋아한다고 말해도 되지?”'],
 },
 junyeon:{
  distant:['준연은 내 표정을 확인한 뒤에야 준비해 둔 문장을 조심스럽게 읽었다.','“괜히 방해한 거면 말해 줘.” 준연의 손이 노트 가장자리에서 멈췄다.'],
  curious:['“네가 기다려 주면 끝까지 말할 수 있을 것 같아.” 준연이 지운 문장을 다시 적었다.','준연은 작은 목소리였지만 이번에는 내 눈을 피하지 않고 질문했다.'],
  warm:['“이건 다른 사람보다 네가 먼저 봐 줬으면 했어.” 준연이 노트를 내 쪽으로 완전히 돌렸다.','준연은 내 옆자리의 가방을 치워 두고도 한참 아무 말 없이 기다렸다.'],
  close:['“네 앞에서는 틀려도 다시 말할 수 있어.” 준연이 떨리는 숨 끝에서 웃었다.','준연이 손을 내밀다 멈췄다. “잡아도 되는지… 이번에는 내가 먼저 물어볼게.”'],
 },
 hyunsol:{
  distant:['현솔은 필요한 말만 남기고 내 반응을 판단 목록의 마지막 칸에 보류했다.','“호의와 정확함은 별개야.” 현솔은 아직 선을 분명히 그었다.'],
  curious:['현솔은 반박하기 전에 내 문장을 끝까지 듣고 체크 표시 대신 물음표를 남겼다.','“네 설명이라면 한 번 더 검토할 가치는 있어.” 현솔의 말끝이 전보다 부드러웠다.'],
  warm:['“네가 옆에 있으면 모른다고 말하기가 덜 싫어.” 현솔이 계산기를 내려놓았다.','현솔은 정답을 확인하기보다 내 표정이 상하지 않았는지 먼저 살폈다.'],
  close:['“이 감정은 오차라고 지울 생각 없어.” 현솔이 내 손 가까이에 자기 손을 놓았다.','현솔이 짧게 숨을 골랐다. “좋아해. 근거는 나중에 더 설명할게.”'],
 },
 taewoo:{
  distant:['태우는 자신 있게 웃었지만 내가 정말 보고 있었는지는 다시 확인했다.','“응원은 말보다 박자로 보여 줘.” 태우가 아직은 한 걸음 떨어져 섰다.'],
  curious:['“방금 동작 말고 내 표정도 봤지?” 태우가 거울 대신 나를 돌아봤다.','태우는 승부를 걸듯 손을 내밀었지만 내 대답을 기다린 뒤에야 가까워졌다.'],
  warm:['“센터가 아니어도 네 시선은 내가 가져갈 거야.” 태우가 장난스럽게 윙크했다.','태우가 음악을 끄고 말했다. “이번 한 곡은 점수 말고 우리 둘만 생각하자.”'],
  close:['“좋아하는 사람 앞에서는 완벽하게 추는 것보다 같이 틀리는 게 더 떨리네.” 태우가 환하게 웃었다.','태우가 내 손바닥에 카운트를 두드렸다. “여덟 번째 박자 다음에는 우리 약속이야.”'],
 },
 taehun:{
  distant:['태훈은 관측값을 먼저 적고, 내게 하려던 말은 노트의 여백에 남겨 두었다.','“아직은 같은 하늘을 다르게 보고 있는 것 같아.” 태훈이 구름 쪽으로 시선을 돌렸다.'],
  curious:['“네가 본 모양도 기록해 둘까?” 태훈이 관측일지 한쪽을 비워 주었다.','태훈은 별보다 내 대답을 기다리는 시간이 길어졌다는 사실을 조용히 알아차렸다.'],
  warm:['“흐린 날인데도 네가 오면 기다릴 이유가 생겨.” 태훈이 책갈피를 내게 건넸다.','태훈의 문장 끝에는 요즘 자주 내 이름이 남았고, 그는 더는 그것을 지우지 않았다.'],
  close:['“오늘 가장 보고 싶었던 건 하늘만은 아니었어.” 태훈이 망원경에서 물러나 내 곁에 섰다.','태훈이 관측일지에 ‘동행 한 명’을 적었다. “다음 밤도 네 자리로 남겨 둘게.”'],
 },
 seoyul:{
  distant:['서율은 보여 줄 부분과 가릴 부분을 정확히 나눈 뒤 내 감상을 기다렸다.','“평가보다 네가 무엇을 봤는지 말해 줘.” 서율은 아직 작품 뒤에 반쯤 숨어 있었다.'],
  curious:['서율이 미완성 페이지를 한 장 더 펼쳤다. 내게 허락한 범위가 조금 넓어졌다.','“네가 고른 색은 이상하게 오래 남아.” 서율이 같은 색을 팔레트에 다시 만들었다.'],
  warm:['“완성된 다음보다 변하고 있는 지금 네가 옆에 있었으면 해.” 서율이 의자를 가까이 당겼다.','서율은 내 발소리가 들어간 구간만 지우지 않고 여러 번 다시 들었다.'],
  close:['“이 그림의 빈자리는 처음부터 네 자리였나 봐.” 서율이 마르지 않은 화면을 함께 바라봤다.','서율이 내 손 위에 붓을 겹쳐 잡았다. “다음 선은 같이 그어도 돼.”'],
 },
};

export function relationshipLine(id:CharacterId,tier:BondTier,key:string){return pick(voice[id][tier],`${id}:${tier}:${key}`);}

type RomanceMove={label:string;text:string;player:string};
const romanceMoves:Record<CharacterId,Record<BondTier,RomanceMove>>={
 world:{
  distant:{label:'카메라 끄기',text:'‘{title}’에서 촬영하지 않기로 한 순간을 세계에게 직접 확인한다.',player:'이건 기록보다 네 마음을 먼저 듣고 싶어. 카메라 꺼도 될까?'},
  curious:{label:'한쪽 이어폰',text:'세계가 고른 곡을 이어폰 한쪽씩 나눠 듣고 오늘 장면의 제목을 붙인다.',player:'이 곡 끝날 때까지만, 다른 사람 반응 말고 우리 둘이 들은 것만 말하자.'},
  warm:{label:'비공개 앙코르',text:'‘{title}’ 뒤에 공개하지 않을 둘만의 앙코르를 제안한다.',player:'누구에게도 올리지 않을 한 곡, 나한테만 들려줄래?'},
  close:{label:'화면 밖 약속',text:'세계의 휴대전화를 뒤집어 놓고 행사와 무관한 다음 약속을 정한다.',player:'다음에는 찍을 것도, 올릴 것도 없이 너를 만나고 싶어.'},
 },
 junyeon:{
  distant:{label:'끝까지 듣기',text:'‘{title}’에서 준연이 삼킨 문장을 재촉하지 않고 기다린다.',player:'정리해서 말하지 않아도 돼. 네 문장이 끝날 때까지 안 끊을게.'},
  curious:{label:'공동 메모',text:'준연의 설명을 대신 고치지 않고 서로 모르는 부분을 다른 색으로 적는다.',player:'네 답을 고치는 대신 내가 모르는 곳도 같이 표시할게.'},
  warm:{label:'첫 번째 독자',text:'준연이 자기 이름으로 저장한 초안을 가장 먼저 읽어 보겠다고 말한다.',player:'완성본 아니어도 좋아. 네가 쓴 첫 버전을 내가 먼저 읽고 싶어.'},
  close:{label:'먼저 내민 손',text:'‘{title}’이 끝난 뒤 준연이 선택할 수 있도록 손바닥을 조용히 펼친다.',player:'잡고 싶으면 잡아. 이번 대답은 네 속도로 해 줘.'},
 },
 hyunsol:{
  distant:{label:'판단 보류',text:'‘{title}’에 대한 현솔의 결론보다 아직 확인하지 못한 사실을 함께 적는다.',player:'지금 결론 내리지 말고, 우리 둘 다 모르는 칸부터 남겨 두자.'},
  curious:{label:'말투 재검토',text:'같은 지적을 상처 없이 전달하는 문장으로 둘이 다시 써 본다.',player:'맞는 말인지 확인했으니, 이번엔 닿는 방식도 같이 고쳐 보자.'},
  warm:{label:'오차 인정',text:'현솔에게 완벽하지 않은 마음도 지우지 않고 말해 달라고 부탁한다.',player:'정확하지 않아도 괜찮아. 지금 네 마음을 오차처럼 지우진 말아 줘.'},
  close:{label:'검증 없는 고백',text:'체크리스트를 접고 ‘{title}’ 이후에도 곁에 있고 싶다고 말한다.',player:'이번 말에는 근거표 없어. 그래도 나는 네 곁에 있고 싶어.'},
 },
 taewoo:{
  distant:{label:'멈춤 신호',text:'‘{title}’의 다음 동작보다 태우가 쉬고 싶은 순간의 신호부터 정한다.',player:'잘하는 것보다 멈추고 싶을 때 말해 주는 게 먼저야.'},
  curious:{label:'거울 밖 시선',text:'거울을 가린 뒤 태우의 동작이 아니라 표정을 보고 카운트를 맞춘다.',player:'이번엔 발 말고 네 표정 보고 박자 잡아 볼게.'},
  warm:{label:'둘만의 8박',text:'평가도 촬영도 없는 여덟 박자를 태우와 즉흥으로 만든다.',player:'점수 없는 한 세트만 더 하자. 틀리면 같이 웃는 걸로.'},
  close:{label:'아홉 번째 박자',text:'여덟 카운트가 끝난 뒤에도 놓지 않을 다음 약속을 태우에게 건넨다.',player:'여덟 다음은 카운트 말고 우리 약속으로 남기자.'},
 },
 taehun:{
  distant:{label:'관측과 감상',text:'‘{title}’에서 확인한 사실과 서로 다르게 느낀 마음을 두 칸에 나눠 적는다.',player:'같이 본 것과 내가 느낀 걸 섞지 않고 둘 다 남겨 볼게.'},
  curious:{label:'여백의 답장',text:'태훈의 짧은 문장 아래 정답 대신 내 감상을 한 줄 덧붙인다.',player:'설명은 못 해도, 네 문장을 읽고 떠오른 건 적어도 될까?'},
  warm:{label:'흐린 날 약속',text:'날씨와 상관없이 만날 수 있는 다음 장소를 태훈과 정한다.',player:'별이 안 보여도 만나자. 흐리면 도서관으로 가면 되니까.'},
  close:{label:'동행 한 명',text:'태훈의 다음 관측일지에 내 자리를 미리 예약해 달라고 말한다.',player:'다음 기록에도 동행 한 명, 내 이름으로 남겨 줘.'},
 },
 seoyul:{
  distant:{label:'보여 준 만큼',text:'서율이 공개한 부분 안에서만 ‘{title}’의 색과 구도를 이야기한다.',player:'가린 부분은 묻지 않을게. 네가 보여 준 이 색부터 말해도 돼?'},
  curious:{label:'네 번째 색',text:'서율의 팔레트에 오늘 기억을 닮은 색 하나를 함께 만든다.',player:'네 색을 고치진 않고, 내 기억의 색을 옆에 놓아 볼게.'},
  warm:{label:'첫 관객',text:'완성 평가 없이 미완성 장면의 첫 관객이 되겠다고 제안한다.',player:'고치라고 말하지 않을게. 변하고 있는 지금을 옆에서 보고 싶어.'},
  close:{label:'함께 긋는 선',text:'서율이 허락한 다음 선을 같은 붓으로 천천히 이어 그린다.',player:'이 빈자리가 내 자리라면, 다음 선은 같이 그어도 될까?'},
 },
};

function castOf(scene:Scene){return [...new Set(scene.lines.map(line=>line.speaker).filter((speaker):speaker is CharacterId=>ids.includes(speaker as CharacterId)))];}

function relationshipChoice(scene:Scene,id:CharacterId,tier:BondTier):Choice{
 const move=romanceMoves[id][tier],fill=(value:string)=>value.replaceAll('{title}',scene.title);
 const gain={distant:[2,5],curious:[5,5],warm:[8,5],close:[10,6]}[tier];
 return {
  id:`relationship-${scene.id}-${id}-${tier}`,label:move.label,text:fill(move.text),
  response:[{speaker:'player',text:fill(move.player)},{speaker:id,text:relationshipLine(id,tier,`${scene.id}:choice`)}],
  effects:[{target:id,stat:'affection',amount:gain[0]},{target:id,stat:'trust',amount:gain[1]},{target:id,stat:'jealousy',amount:tier==='distant'?0:-2}],
  flags:[`relationship-beat:${scene.id}:${id}:${tier}`],
 };
}

/** Adds one relationship-specific beat and one situational romantic choice without rewriting authored plot facts. */
export function relationshipScene(scene:Scene,state:RelationshipState):Scene{
 const cast=castOf(scene);
 if(!cast.length)return scene;
 const focus=state.route&&cast.includes(state.route)?state.route:[...cast].sort((a,b)=>(state.stats[b].affection+state.stats[b].trust)-(state.stats[a].affection+state.stats[a].trust))[0];
 const tier=bondTier(state.stats[focus]);
 const first=scene.lines.findIndex(line=>line.speaker===focus);
 const lines=scene.lines.map(line=>({...line}));
 if(first>=0)lines[first]={...lines[first],text:`${lines[first].text}\n${relationshipLine(focus,tier,`${scene.id}:main`)}`} as Line;
 const choices=scene.choices.some(choice=>choice.id.startsWith('relationship-'))||scene.choices.length>=6?scene.choices:[...scene.choices,relationshipChoice(scene,focus,tier)];
 return {...scene,lines,choices};
}

const expressionArt:Record<CharacterId,string[]>={
 world:['world-one-seat','world-unposted','world-pick','world-notification','world-reflection','world-silent-vocal','world-two-tickets'],
 junyeon:['junyeon-title-slide','junyeon-bookmark','junyeon-question-box','junyeon-label','junyeon-empty-chair','junyeon-voice','junyeon-first-invitation'],
 hyunsol:['hyunsol-meniscus','hyunsol-correction','hyunsol-cursor','hyunsol-errata','hyunsol-blind-taste','hyunsol-pause','hyunsol-ungraded'],
 taewoo:['taewoo-silent-count','taewoo-back-row','taewoo-freeze-frame','taewoo-shoelace','taewoo-small-stage','taewoo-walking-duet','taewoo-curtain-bow'],
 taehun:['taehun-cloud-name','taehun-pressed-leaf','taehun-missing-data','taehun-stone','taehun-red-light','taehun-shadow','taehun-overcast'],
 seoyul:['seoyul-three-colors','seoyul-rest','seoyul-layer','seoyul-window-frame','seoyul-sound-color','seoyul-unfinished-portrait','seoyul-two-signatures'],
};

export type ExpressionName='차분'|'경계'|'호기심'|'당황'|'질투'|'다정'|'설렘';
export function expressionFor(id:CharacterId,text:string,sceneKey:string,stats:RelationshipStats){
 const tier=bondTier(stats),lower=text.toLowerCase();
 let index:number;
 if(/질투|삐|화가|불편|싫|날카|의심/.test(lower))index=4;
 else if(/놀라|갑자기|뭐\?|정말\?|설마|사고/.test(lower))index=3;
 else if(/좋아|사랑|둘만|약속|손을|가까|보고 싶/.test(lower))index=tier==='close'?6:5;
 else if(/웃|재밌|신나|성공|좋다/.test(lower))index=2;
 else if(/미안|부끄|떨|망설|조심/.test(lower))index=1;
 else index=tier==='distant'?0:tier==='curious'?1:tier==='warm'?5:6;
 const names:ExpressionName[]=['차분','경계','호기심','당황','질투','다정','설렘'];
 // Neutral lines rotate between adjacent subtle expressions so consecutive scenes do not reuse one face.
 if(index===0&&hash(`${sceneKey}:${text}`)%3)index=hash(`${sceneKey}:${text}`)%3;
 return {asset:`cutscenes/${expressionArt[id][index]}`,name:names[index]};
}
