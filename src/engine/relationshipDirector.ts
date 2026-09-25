import type {CharacterId,Choice,Line,Scene} from '../types';

export type RelationshipStats={affection:number;trust:number;jealousy:number;special:number};
export type BondTier='distant'|'curious'|'warm'|'close';
type RelationshipState={stats:Record<CharacterId,RelationshipStats>;route:CharacterId|null;segment:string;flags:string[]};

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

type SceneMoment={focus:CharacterId;low:string;high:string;lowChoice:string;highChoice:string;lowReply:string;highReply:string;outcome:string;global?:'harmony'|'fair'|'ethics'|'safety'};

/** Each common chapter gets its own dilemma; the private option changes with the actual bond. */
const sceneMoments:Record<string,SceneMoment>={
 'common-0':{focus:'world',low:'“지도는 같이 고치자. 내가 그린 거라고 그대로 믿지는 말고.”',high:'“지도는 같이 고치자. 대신 다음에 길 잃으면 나부터 불러.”',lowChoice:'세계가 그린 지도에서 틀린 문을 찾아 함께 고친다.',highChoice:'세계와 점심에 둘만의 두 번째 지도를 그리기로 한다.',lowReply:'“좋아. 내가 앞서 안내해도 네가 확인해 주면 덜 헤매겠다.”',highReply:'“그 약속, 지도 구석에 작게 써도 돼?”',outcome:'세계의 별 표시 옆에 내가 직접 고친 화살표가 남았다.',global:'fair'},
 'common-1':{focus:'junyeon',low:'“놀란 건 맞지만, 다음 순서는 내가 직접 말할 수 있어.”',high:'“네가 먼저 손 괜찮냐고 물은 거, 사실 아직 기억해.”',lowChoice:'준연이 교사에게 사고 순서를 자기 말로 설명하도록 기다린다.',highChoice:'준연과 함께 안전기록 마지막 칸에 서로의 확인 서명을 남긴다.',lowReply:'“잠깐만. 처음부터 다시 말해 볼게.”',highReply:'“내 글씨 옆에 네 이름이 있으니까 덜 무서워.”',outcome:'기록에는 사고뿐 아니라 다시 시작할 절차도 남았다.',global:'safety'},
 'common-2':{focus:'taewoo',low:'“영상은 나중에도 볼 수 있어. 점심부터 놓치지 말자.”',high:'“내가 보여 주려던 건 점수보다 네가 보는 내 움직임이었어.”',lowChoice:'태우의 영상에서 센서가 놓친 동작 한 장면을 표시해 둔다.',highChoice:'태우와 식사 후 정원에서 안전한 한 동작만 직접 맞춰 본다.',lowReply:'“오, 네 눈에는 거기가 먼저 보였구나.”',highReply:'“한 동작만. 더 하고 싶어지면 다음 약속을 잡자.”',outcome:'태우는 영상을 끄고 내 답을 기다렸다.',global:'fair'},
 'common-3':{focus:'hyunsol',low:'“주제부터 분리하자. 같은 단어라도 측정 대상은 다르니까.”',high:'“네가 내 말을 끝까지 듣는 건 알아. 이번엔 나도 그러려고.”',lowChoice:'현솔과 전시 설명에 화학반응과 사람 반응의 차이를 한 줄로 적는다.',highChoice:'현솔에게 마지막 반박 대신 함께 수정할 문장을 골라 달라고 한다.',lowReply:'“이러면 단어가 비슷해도 오해하지 않겠어.”',highReply:'“같이 고친 문장이라면 네 앞에서 읽을 수 있겠네.”',outcome:'칠판에는 승자 이름 대신 모두가 검토할 문장이 남았다.',global:'ethics'},
 'common-4':{focus:'seoyul',low:'“미완성 파일은 내 화면에서만 봐 줘.”',high:'“이 부분은 아직 아무에게도 안 들려줬어. 네 의견은 듣고 싶어.”',lowChoice:'서율에게 공개용 컷과 작업 중인 컷을 서로 다른 폴더로 나누자고 한다.',highChoice:'서율이 허락한 미공개 편곡을 이어폰 한쪽씩 나누어 듣는다.',lowReply:'“폴더 이름부터 구분하면 실수할 일도 줄겠어.”',highReply:'“같이 들으니 내가 남긴 여백이 다르게 들린다.”',outcome:'공개 여부는 서율이 정했고, 나는 듣는 사람으로 남았다.',global:'ethics'},
 'common-5':{focus:'taewoo',low:'“센서 점수보다 바닥 표시를 먼저 확인해.”',high:'“너랑 맞춘 여덟 박자는 화면보다 더 선명하게 기억날 것 같아.”',lowChoice:'태우와 센서가 놓친 발 동작을 느린 속도로 다시 촬영한다.',highChoice:'촬영을 끄고 태우가 정한 멈춤 신호에 맞춰 둘만의 여덟 박자를 춘다.',lowReply:'“이제 왜 값이 튀는지 설명할 수 있겠다.”',highReply:'“네가 멈췄을 때 나도 멈춘 게 좋았어.”',outcome:'춤은 기록됐지만 점수로 줄 세울 사람은 없었다.',global:'safety'},
 'common-6':{focus:'taehun',low:'“시의 문장과 관측값은 다른 칸에 써야 해.”',high:'“네가 읽을 거라면 마지막 문장을 조금 다르게 쓰고 싶어.”',lowChoice:'태훈의 관측일지에 확인된 값과 아직 모르는 조건을 나눠 적는다.',highChoice:'태훈의 시집 여백에 오늘 본 구름을 한 문장씩 번갈아 적는다.',lowReply:'“좋아. 추측은 추측으로 남기면 다시 확인할 수 있으니까.”',highReply:'“이 문장, 다음 흐린 날에 같이 읽고 싶어.”',outcome:'같은 하늘에 두 사람의 다른 기록이 나란히 남았다.',global:'fair'},
 'common-7':{focus:'junyeon',low:'“내 문제는 내가 풀게. 모르는 줄만 같이 봐 줘.”',high:'“옆자리가 비어 있으면 네가 올 시간을 계산하게 돼.”',lowChoice:'준연이 단위를 스스로 찾을 때까지 문제 옆에 빈칸을 남겨 둔다.',highChoice:'약속한 20분을 지킨 뒤 준연에게 다음 자습 시간도 같이 정하자고 한다.',lowReply:'“아, 이 줄부터였어. 답은 내가 말해 볼게.”',highReply:'“시간을 정해 주니까 기다리는 것도 덜 겁나.”',outcome:'준연은 풀이의 마지막 줄을 자기 글씨로 끝냈다.',global:'harmony'},
 'common-8':{focus:'hyunsol',low:'“값 하나를 버리면 이유도 같이 사라져.”',high:'“네가 옆에 있으면 틀렸다고 말하는 게 덜 싫어.”',lowChoice:'현솔과 측정 시작 시점을 통일한 비교표를 새로 만든다.',highChoice:'현솔에게 각자 예상이 빗나간 시행을 하나씩 먼저 공개하자고 한다.',lowReply:'“이제 차이가 어디서 생겼는지 검토할 수 있겠어.”',highReply:'“그럼 내 실수부터 말할게. 네 앞에서는 숨기고 싶지 않아.”',outcome:'좋은 값만 남기는 대신 다시 할 수 있는 절차가 생겼다.',global:'ethics'},
 'common-9':{focus:'world',low:'“사진 한 장으로 내 마음을 설명하려고 하진 않을래.”',high:'“너랑 같이 걷던 날이 소문 때문에 지워지는 건 싫어.”',lowChoice:'세계와 원본 영상의 공개 범위를 하나씩 확인하고 교사에게 전달한다.',highChoice:'세계에게 사진이 찍히기 전후의 진짜 대화를 둘만 다시 이야기한다.',lowReply:'“내가 말한 부분만 남겨 줘. 네 얘기도 네가 골라.”',highReply:'“그래. 댓글보다 그날 네 목소리를 기억하고 싶어.”',outcome:'밖의 소문은 곧바로 멈추지 않았지만 두 사람의 기억은 서로 확인됐다.',global:'ethics'},
 'common-10':{focus:'seoyul',low:'“막연한 약속은 빈 의자보다 더 불편해.”',high:'“못 오는 날도 네가 먼저 말해 주면 기다리는 시간이 달라져.”',lowChoice:'서율과 오늘 가능한 시간과 못 가는 장소를 일정표에 직접 표시한다.',highChoice:'서율에게 오늘은 못 간다고 솔직히 말하고 둘만의 다음 전시 시간을 잡는다.',lowReply:'“적어 놓으면 각자 작업을 멈추지 않아도 되겠네.”',highReply:'“못 온다는 말보다 다음에 보자는 날짜가 더 오래 남을 것 같아.”',outcome:'대답하지 않은 약속 하나를 줄이자 실제로 지킬 약속 하나가 생겼다.',global:'harmony'},
 'common-11':{focus:'taewoo',low:'“발 상태는 숨기면 동선 전체가 위험해져.”',high:'“무대가 끝나도 네가 걱정한 내 발부터 확인해 줄 거야?”',lowChoice:'태우와 무대 동선을 줄인 대체 안을 교사에게 먼저 제출한다.',highChoice:'태우와 쉬는 시간을 정하고 그 뒤의 리허설을 함께 지켜보기로 한다.',lowReply:'“빼는 동작도 안무라는 걸 설명해 볼게.”',highReply:'“쉬겠어. 네가 본다고 하면 쉬는 것도 약속이니까.”',outcome:'무대를 포기하지 않으면서 다치지 않을 선택지가 남았다.',global:'safety'},
 'common-12':{focus:'junyeon',low:'“내 원자료는 따로 있어. 덮어쓰지 말고 비교하자.”',high:'“네가 내 파일부터 찾은 건… 내가 한 일을 기억해서겠지?”',lowChoice:'준연의 원자료와 세계의 백업을 별도 폴더에서 대조한다.',highChoice:'준연의 이름이 남은 수정 이력부터 함께 확인하고 복구를 시작한다.',lowReply:'“파일 이름보다 내용으로 확인하면 내가 설명할 수 있어.”',highReply:'“내가 만든 부분부터 다시 말해 볼게. 넌 옆에서 확인해 줘.”',outcome:'누가 잘못했는지보다 무엇이 남았는지가 먼저 보였다.',global:'ethics'},
 'common-13':{focus:'world',low:'“무대 끝나고도 정리는 같이 하자. 그게 마지막 일이야.”',high:'“페어가 끝나면 너랑 할 얘기가 하나 남아.”',lowChoice:'세계와 공연·전시 크레디트에 빠진 이름이 없는지 마지막으로 확인한다.',highChoice:'공동 정리를 마친 뒤 세계에게 공개하지 않을 다음 만남을 제안한다.',lowReply:'“우리 이름이 다 맞게 적혔네. 이제 끝났다고 말할 수 있겠다.”',highReply:'“좋아. 이번엔 카메라 없이 네 얘기를 들을게.”',outcome:'수많은 사람의 축하가 지나간 뒤 남은 것은 직접 정한 약속이었다.',global:'harmony'},
};
const sceneChoiceLabels:Record<string,[string,string]>={
 'common-0':['지도 수정','두 번째 지도'],'common-1':['사고 설명','공동 서명'],
 'common-2':['영상 검토','한 동작 약속'],'common-3':['설명 분리','함께 수정'],
 'common-4':['공개 폴더','이어폰 한쪽'],'common-5':['느린 재촬영','둘만의 8박'],
 'common-6':['관측일지','시집 여백'],'common-7':['빈칸 남기기','다음 자습'],
 'common-8':['비교표','예상 공개'],'common-9':['원본 범위','진짜 대화'],
 'common-10':['일정표','다음 전시'],'common-11':['대체 동선','쉬는 시간'],
 'common-12':['별도 복구','수정 이력'],'common-13':['마지막 크레디트','비공개 약속'],
};

const continuity:{scene:string;flag:string;line:Line}[]=[
 {scene:'common-4',flag:'choice:common-1:beaker-joke',line:{speaker:'junyeon',text:'“오늘 영상에 실수 장면은 안 넣었으면 좋겠어. 그날 웃던 소리가 아직 귀에 남아.”'}},
 {scene:'common-7',flag:'choice:common-2:map-overpromise',line:{speaker:'taehun',text:'“전에 세 곳에 동시에 간다고 했잖아. 이번엔 누구에게 몇 분을 약속했는지 먼저 적자.”'}},
 {scene:'common-9',flag:'choice:common-4:band-share',line:{speaker:'seoyul',text:'“미완성 파일을 몰래 보낸 일부터 정리하자. 이번에도 원본을 내 허락 없이 올리면 안 돼.”'}},
 {scene:'common-9',flag:'choice:common-4:band-permission',line:{speaker:'seoyul',text:'“지난번처럼 공개 범위를 먼저 정하자. 원본을 본 사람도 그 약속은 지켜야 해.”'}},
 {scene:'common-11',flag:'choice:common-5:dance-unsafe',line:{speaker:'taewoo',text:'“저번에 서둘렀다가 위험했잖아. 이번엔 내 발 상태를 숨기지 않을게.”'}},
 {scene:'common-12',flag:'choice:common-8:data-select',line:{speaker:'hyunsol',text:'“지난번에 값 골라내려던 것도 수정 이력에 남아 있어. 이번에는 원본부터 보존하자.”'}},
 {scene:'common-12',flag:'choice:common-9:rumor-unilateral',line:{speaker:'world',text:'“내가 보여 주지 말라고 한 대화까지 올렸잖아. 백업도 쓰기 전에 누가 볼지 정해 줘.”'}},
 {scene:'common-13',flag:'choice:common-12:restore-together',line:{speaker:'junyeon',text:'“복구한 자료에 수정 시각과 이름을 남겨서 다행이야. 질문이 나오면 내가 설명할게.”'}},
];

const routePulse:Record<CharacterId,[string,string][]>={
 world:[
  ['“비공개라는 말이 아직은 조금 어색해. 올리지 않을 걸 골라 본 적이 없어서.”','“네가 보고 있는 건 게시할 세계가 아니라 지금의 나야. 괜찮아?”'],
  ['“합주는 맞출 수 있는데 네 앞에서만 박자가 빨라져.”','“오늘 한 소절은 네가 들을 때만 완성된 것 같아.”'],
  ['“우연이라고 해 두면 내가 먼저 기다린 걸 들키지 않겠지.”','“맞아, 기다렸어. 이제 우연이라고 말하지 않을래.”'],
  ['“지운 메시지에도 보내려던 마음까지 없어지는 건 아니더라.”','“보냈다가 지웠어. 네가 싫어할까 봐 겁났거든.”'],
  ['“무대 뒤에서는 누가 봐 주는지 바로 알 수 있어.”','“네가 보이는 쪽에서 노래할게. 끝나면 가장 먼저 내려갈게.”'],
  ['“빈 객석이면 솔직해지기 쉬울 줄 알았어. 오히려 더 떨려.”','“관객이 한 명이어도 좋아. 내 다음 노래도 네게 들려주고 싶어.”'],
 ],
 junyeon:[
  ['“빈자리라고 해서 누가 와도 괜찮은 건 아니야. 먼저 물어봐 줘서 좋았어.”','“네가 앉으면 옆자리가 아니라 내 자리까지 안정돼.”'],
  ['“노트에 적힌 건 내 질문이야. 대신 답하지 않아도 돼.”','“네 앞에선 틀린 줄을 지우지 않고 그대로 보여 줄 수 있어.”'],
  ['“이름이 빠진 이유를 찾을게. 나를 대신해서 화내지만 말아 줘.”','“네가 내 이름을 먼저 찾는 걸 봤어. 그래도 이번엔 내가 직접 말할래.”'],
  ['“네가 없으면 못 한다는 뜻은 아니야. 그냥 네가 있으면 덜 무섭다는 거야.”','“혼자도 해 볼게. 끝나면 가장 먼저 네게 보여 주고 싶어.”'],
  ['“발표 첫 문장은 외웠어. 그다음은 내가 이해한 대로 말할게.”','“객석에서 네가 고개를 끄덕이는 게 보이면 마지막까지 내 목소리로 말할 수 있어.”'],
  ['“마지막 비커는 내가 직접 놓을게. 손이 떨려도 괜찮아.”','“처음엔 네가 나를 지켜 줬지. 이번엔 내가 이 실험을 지킬 차례야.”'],
 ],
 hyunsol:[
  ['“틀리지 않겠다는 말보다 틀리면 고치겠다는 말이 맞겠지.”','“네 앞에서 모른다고 인정하는 건 생각보다 어렵지 않았어.”'],
  ['“준연에게 한 말이 옳았어도 방식은 틀렸어. 둘 다 기록할게.”','“내가 차갑게 굴 때도 네가 곁에 있겠다는 약속은 요구하지 않을게.”'],
  ['“음성 메모는 내 말투까지 남아. 다시 들으니 변명할 수 없더라.”','“네가 듣는다고 생각하고 녹음했어. 그래서 끝을 조금 부드럽게 고쳤어.”'],
  ['“보고서는 책임을 나눠 적는 종이지, 떠넘기는 종이가 아니야.”','“네 이름을 넣을지 먼저 물어볼게. 함께했다는 증거를 멋대로 만들진 않을 거야.”'],
  ['“사과는 실험처럼 성공 여부를 판정할 수 없구나.”','“네가 나를 용서할지 계산하지 않고 말할게. 미안해.”'],
  ['“오차를 인정하고도 남는 값이 있어. 지우지 않을래.”','“좋아해. 이번에는 확인 가능한 근거보다 내 마음이 먼저야.”'],
 ],
 taewoo:[
  ['“두 박자 늦어도 같이 끝내면 돼. 날 따라잡으려고 무리하진 마.”','“네 박자도 들려. 이제 내가 그쪽으로 맞춰 볼게.”'],
  ['“화면엔 센서가 읽은 동작만 남아. 내 표정은 네가 본 거지?”','“프레임 밖에서 네가 웃었던 순간이 더 기억나.”'],
  ['“센터가 없어도 각자 보이는 자리가 있네.”','“네가 있는 쪽을 자꾸 찾지만, 내 자리는 내가 정할게.”'],
  ['“발이 아픈 걸 숨기면 네 카운트까지 꼬이겠지.”','“쉬어야 한다고 말할게. 네가 걱정하는 얼굴을 계속 보게 하고 싶진 않아.”'],
  ['“여덟 번째는 멈춤 신호야. 그다음 동작은 아직 정하지 않았어.”','“여덟 다음에 네 손이 있으면, 이번 무대는 점수로 안 남을 것 같아.”'],
  ['“불이 꺼지면 박수도 안 보이겠지. 그래도 난 계속 춤출 거야.”','“조명이 꺼져도 네가 있는 방향은 알아. 다음엔 같이 걸어 나가자.”'],
 ],
 taehun:[
  ['“일지에는 온도부터 적었어. 네가 온 시간은 여백에 남겼고.”','“관측일지의 동행자 칸에 네 이름을 먼저 쓰고 싶었어.”'],
  ['“비가 오지 않은 것도 예보를 검토할 자료가 돼.”','“우산은 필요 없었는데, 같이 걷자는 약속은 그대로 두고 싶어.”'],
  ['“익명 문장은 숨으려는 게 아니라 아직 고치고 있어서야.”','“네가 읽을 수 있게 내 이름을 적을게. 이제 숨기고 싶지 않아.”'],
  ['“마감이 둘이면 먼저 못 지킬 것을 말해야 해.”','“오늘은 시보다 네게 답하는 시간을 먼저 남겨 뒀어.”'],
  ['“흐린 밤의 관측 결과도 그대로 발표할 거야.”','“별이 안 보인다고 우리가 함께 기다린 시간이 사라지진 않아.”'],
  ['“별이 없어도 다시 올 수 있겠어. 이유를 찾은 것 같아.”','“다음에 하늘이 흐리면 또 만나자. 너와 있으면 기다리는 일도 좋으니까.”'],
 ],
 seoyul:[
  ['“미완성 화면은 네 평가를 기다리는 게 아니라 네가 무엇을 보는지 궁금한 거야.”','“완성 전의 나를 보여 준 건 너라면 지우라고 하지 않을 것 같아서야.”'],
  ['“스케치북 모서리는 접혀도 원래 그린 선이 남아.”','“네가 접힌 부분을 펴 줄 때 그림보다 내 손을 먼저 봤어.”'],
  ['“노래가 지나가는 동안 화면을 다 채울 필요는 없겠지.”','“세계의 노래가 끝난 뒤 네가 머문 여백은 남겨 둘래.”'],
  ['“출처는 작품을 약하게 만드는 글씨가 아니야.”','“네 이름도 같이 적고 싶지만, 먼저 네 뜻을 물어볼게.”'],
  ['“접힌 선은 고치지 않고 다음 그림의 시작으로 쓸게.”','“네가 남긴 흔적까지 내 작품이라고 부르기보단 같이 만들었다고 말할래.”'],
  ['“초상은 아직 미완성이야. 그래서 지금 보여 줄 수 있어.”','“완성된 얼굴보다 앞으로 네가 바뀌는 모습도 그리고 싶어.”'],
 ],
};

/** Main-story beats follow the current chapter and prior decisions, not a reusable romance template. */
export function relationshipScene(scene:Scene,state:RelationshipState):Scene{
 if(scene.id.startsWith('common-')){
  const moment=sceneMoments[scene.id];if(!moment)return scene;
  const close=['warm','close'].includes(bondTier(state.stats[moment.focus]));
  const remembered=continuity.filter(item=>item.scene===scene.id&&state.flags.includes(item.flag)).map(item=>item.line);
  const lines=[...scene.lines.slice(0,1),...remembered,...scene.lines.slice(1),{speaker:moment.focus,text:close?moment.high:moment.low} as Line];
  const choice:Choice={id:`moment-${scene.id}-${close?'close':'open'}`,label:sceneChoiceLabels[scene.id][close?1:0],text:close?moment.highChoice:moment.lowChoice,
   response:[{speaker:'narrator',text:close?moment.highChoice:moment.lowChoice},{speaker:moment.focus,text:close?moment.highReply:moment.lowReply},{speaker:'narrator',text:moment.outcome}],
   effects:[{target:moment.focus,stat:'affection',amount:close?7:3},{target:moment.focus,stat:'trust',amount:close?5:6},...(moment.global?[{target:'global' as const,stat:moment.global,amount:3}]:[])],
   flags:[`moment:${scene.id}:${moment.focus}:${close?'close':'open'}`]};
  return {...scene,lines,choices:[...scene.choices,choice]};
 }
 if(state.segment==='route'&&state.route&&scene.id.startsWith(`${state.route}-`)){
  const chapter=Number(scene.id.slice(state.route.length+1))-1;
  const pulse=routePulse[state.route][chapter];
  if(pulse){const close=bondTier(state.stats[state.route])==='close';return {...scene,lines:[...scene.lines,{speaker:state.route,text:pulse[close?1:0]}]};}
 }
 if(state.segment==='harem')return scene;
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
