import type {CharacterId,Line,Scene} from '../types';
type Bond={affection:number;trust:number;jealousy:number;special:number};
const after:Record<CharacterId,string[]>={
 world:['내 이름만 남겼던 영상은 고쳤어. 사과했다고 서율이 바로 웃어 주길 기대하진 않을래.','태우가 점수표 지우는 걸 봤어. 난 네 일정표에 내 이름만 쓰려던 걸 고치고 싶네.','민혁이 안 보일 때 알림 이름부터 믿었어. 누군가 날 보고 있다는 생각도 먼저 물어봐야겠네.','서율도 남의 문장으로 빈칸 채우려 했어. 우리 사이는 누구 편인지로 채우지 말자.','얼터에고 메시지는 멈췄어. 네가 다음에 올지는 프로그램 대신 나한테 말해 줘.'],
 junyeon:['서율이 지워진 이름을 직접 말하는 걸 봤어. 내 노트도 내 이름으로 보여 주고 싶어.','높은 숫자만 남기면 낮은 날이 없어지는 줄 알았어. 태우도 무서웠다는 게 좀 기억나.','보건실 간 걸 네가 모르면 걱정한다는 건 알았어. 다음엔 안전하다는 말부터 할게.','태훈이 아직 아니라고 한 말도 남겨야 했네. 나도 모르는 항목엔 바로 대답 안 하려고.','내 복구 요청에 책임이 있는 것까지 적었어. 협박하려던 마음은 아니었다는 것도. 다음엔 범위부터 물어볼게.'],
 hyunsol:['원본하고 공개본이 다른 이유부터 확인했어. 말이 맞는 것과 사람에게 잘 닿는 것도 다를 수 있겠지.','같은 표에 있으면 같은 기준일 거라고 생각했어. 전제를 먼저 확인할게.','허가받은 설정이라고 안내문까지 정확해지는 건 아니었어. 수정하지 않은 문장도 내 몫이야.','인용 이름을 적는 것과 사용 허락을 받는 건 다른 질문이었어. 내 보고서에도 범위를 붙일게.','이제 확인한 사실과 모르는 마음을 다른 칸에 둘 거야. 네 마음을 계산으로 채우진 않고.'],
 taewoo:['서율 이름이 빠진 영상 보면서도 내가 센터로 보이는지만 생각했어. 지금 말하니까 좀 별로네.','99점은 내 얼굴 앞에 붙인 왕관이었어. 없어도 다음 연습에 올 거라는 말 기억해.','민혁 안 보여서 무서웠는데 규칙 얘기로밖에 못했어. 돌아오니까 그냥 걱정했다고 말했어.','시 한 줄이 사람보다 먼저 고백해 버릴 수도 있네. 난 네 답을 무대로 대신 만들진 않을래.','협박 화면도 점수표처럼 사람 대신 대답하려 했네. 이번엔 네가 직접 나한테 말해 줘.'],
 taehun:['이름 빠진 원본을 찾았지. 못 본 것과 없던 것은 다르다는 걸 오늘 문장에도 남길게.','다른 기준으로 잰 점수는 나란히 놓을 수 없었어. 우리의 다른 속도도 누가 느린지로만 적진 말자.','기록에 없는 출구는 없던 출구가 아니었지. 기다리는 동안 모르는 칸을 비워 둔 게 다행이야.','내 문장은 다시 내가 고를 수 있게 됐어. 네게 들려준 다음 줄도 내가 정해서 보여 주고 싶어.','얼굴을 빌려도 마음까지 빌릴 순 없네. 오늘 내 문장의 주어는 내가 직접 말할게.'],
 seoyul:['내 이름은 돌아왔어. 세계 옆으로 돌아가는 데 걸릴 시간은 따로 필요하고.','그림의 색도 숫자 하나로 순위 만들면 남는 게 줄어. 태우 춤을 직접 보는 구역이 더 좋아.','사진에 잠긴 문이 있다고 사람이 갇혔다는 뜻은 아니었어. 보이는 부분만으로 전체를 그리지 않을게.','내 그림에 맞는다는 이유로 태훈 대답을 지웠어. 이제 여백은 남의 마음으로 채우지 않을래.','얼굴 이미지가 주한을 대신할 수 없었지. 네 초상도 네 대답보다 앞서 완성하지 않을게.'],
};
const mistakes:[string,CharacterId,string][]=[
 ['public-humiliation','junyeon','그때 내 실수로 웃겼던 말은 아직 기억해. 오늘 내 설명은 끝까지 들어 줬으면 해.'],
 ['art-private-leak','seoyul','내 사적인 그림을 공개한 일도 아직 남아 있어. 오늘은 무엇을 보여 줄지 내가 정할게.'],
 ['score-shamed','taewoo','내가 멈춘 영상을 웃긴 제목으로 보낸 건 정정한 표랑 다른 상처였어. 그건 없던 일은 아니야.'],
 ['absence-rumor','world','민혁 안전을 확인하고도 실종 소문을 보냈잖아. 이번에는 이름보다 사실을 먼저 보자.'],
 ['secret-promise','world','같은 시간을 다른 사람에게도 약속했지. 오늘은 기다리라는 말보다 가능한 날짜를 듣고 싶어.'],
 ['poem-exposed','taehun','내 초안을 고백이라고 밖에 말한 일은 아직 불편해. 지금 문장의 주어는 내가 고르게 해 줘.'],
];
export function caseAfterthought(id:CharacterId,chapter:number,flags:string[]){
 const remembered=mistakes.find(([flag,person])=>person===id&&flags.some(value=>value===flag||value.startsWith(flag+':')));
 return remembered?.[2]??after[id][Math.max(0,Math.min(4,chapter))];
}
export function schoolAfterthought(id:CharacterId,chapter:number,affection:number,trust:number,flags:string[]){
 const low=trust<30,close=affection>=65&&trust>=55;
 const ending:Record<CharacterId,[string,string,string]>={
  world:['오늘은 네 말 바로 믿진 못하겠어. 지킬 날짜부터 하나 정해 줘.','그다음 얘기는 너한테 먼저 하고 싶어. 조금 더 있다 가.','그다음 약속도 네가 와서 물어봐 줬으면 해.'],
  junyeon:['내 페이지는 내가 골라서 보여 줄게. 지금은 여기까지.','오늘은 내 말 끝난 다음에도 네가 있었으면 해.','오늘은 네가 내 첫 번째 독자여서 덜 무서워.'],
  hyunsol:['네 결론엔 아직 확인할 게 남아 있어. 내 마음까지 확정하지 마.','확인할 자료는 끝났어. 네가 남을 시간은 따로 있어?','자료 말고 네 생각도 듣고 싶어.'],
  taewoo:['이번엔 잘했다고만 말하지 마. 네가 정말 본 걸 말해 줘.','점수 안 켜도 날 계속 보고 있네. 그게 더 떨려.','다음엔 거울 말고 네 표정 보고 박자 잡아 볼게.'],
  taehun:['오늘 문장은 내 노트에 둘게. 읽을지는 다음에 정하고.','네가 오면 흐린 날도 기다릴 이유가 생겨.','오늘 일지 동행자 칸에 네 이름 써도 돼?'],
  seoyul:['오늘은 보여 준 그림 안에서만 얘기해 줘.','다음 그림은 전시 말고 너한테 먼저 보여 주고 싶어.','네가 가장 오래 본 색을 한 칸 더 남겨 둘게.'],
 };
 return `${caseAfterthought(id,chapter,flags)} ${ending[id][low?0:close?1:2]}`;
}
type Beat={focus:CharacterId;low:string;high:string;choice:string;closeChoice:string;reply:string;closeReply:string};
const beats:Record<string,Beat>={
 'common-0':{focus:'world',low:'첫 약속은 점심 한 번이면 돼. 네 하루 전부 달라는 건 아니고.',high:'네 이름 옆 별은 내가 기억하려고 그렸어. 네가 날 기억해 주면 더 좋고.',choice:'세계가 그린 별 옆에 내가 가능한 점심시간을 하나 표시한다.',closeChoice:'세계에게 다시 만나고 싶은 이유를 적어 별 옆에 건넨다.',reply:'시간 정해 주니까 진짜 올 것 같네.',closeReply:'그 이유는 다른 애한테 보여 주기 싫은데. 나만 기억할게.'},
 'common-0-b':{focus:'junyeon',low:'내 노트를 네가 대신 설명하지는 않았으면 해.',high:'네가 기다려 주면 오늘은 내 이름까지 말할 수 있을 것 같아.',choice:'준연 노트의 작성자 칸을 비워 두고 준연이 직접 채우게 한다.',closeChoice:'준연이 작성한 첫 페이지에 첫 독자로 내 이름을 남긴다.',reply:'한 글자씩 적어도 기다려 줄 거지?',closeReply:'작은 글씨로 써 줘. 자꾸 보게 될 것 같아서.'},
 'common-0-c':{focus:'seoyul',low:'내가 정한 마지막 화면까지 보고 가 줘.',high:'네가 듣고 난 뒤의 여백은 조금 다른 색으로 남기고 싶어.',choice:'서율에게 마지막 크레딧 뒤의 무음 시간도 편곡인지 묻는다.',closeChoice:'서율과 마지막 음 뒤의 침묵을 이어폰 한쪽씩 나누어 듣는다.',reply:'응. 끝났다고 생각하고도 조금 더 기다리는 부분.',closeReply:'네가 기다리는 소리까지 들어간 기분이네.'},
 'common-1':{focus:'world',low:'내가 사과했다고 바로 괜찮다고 말해 줄 필요는 없어.',high:'내 잘못 말고 오늘 내가 어떻게 있는지도 네가 봐 줬으면 해.',choice:'세계의 정정문을 다 읽고 남은 질문은 개인적으로 묻는다.',closeChoice:'세계와 촬영 없는 합주 뒤에도 함께 있을 10분을 정한다.',reply:'구경거리로 묻는 질문은 아니네. 대답할게.',closeReply:'노래 끝나도 네가 남는 약속이면 좋아.'},
 'common-1-b':{focus:'taewoo',low:'거울 말고 네가 본 마지막 움직임을 알려 줘.',high:'여덟 뒤에 네 손이 기다리고 있으면 점수가 덜 중요해질 것 같아.',choice:'태우에게 쉬어도 되는 박자를 직접 고르게 한다.',closeChoice:'태우가 원하면 여덟 뒤에도 손을 가까이 둔다.',reply:'그럼 마지막 두 박자는 의자에서. 네가 같이 세 줘.',closeReply:'반칙이야. 춤보다 여기서 더 틀릴 것 같아.'},
 'common-1-c':{focus:'taewoo',low:'내 좋은 기록도 같이 보자. 낮은 것만 내 얼굴 앞에 놓지는 말고.',high:'숫자 고치고도 네가 안 가면, 오늘은 그걸 기억할래.',choice:'태우의 서로 다른 두 기록을 별도 시도로 표기한다.',closeChoice:'태우와 표를 내린 뒤의 다음 연습 날짜를 정한다.',reply:'그래. 같은 사람이지만 다른 시도라고.',closeReply:'못 추는 날도 날짜 바꾸기 없기야. 나도 무리해서 보여 주진 않을게.'},
 'common-2':{focus:'hyunsol',low:'확인 안 한 원인은 모름으로 두자. 네 생각도 그 칸에 적어.',high:'네가 옆에 있으니까 내가 모른다고 말하는 게 덜 싫어.',choice:'현솔과 각각 아직 모르는 조건을 하나씩 적는다.',closeChoice:'현솔의 계산기 뒷면에 다음에 묻고 싶은 개인 질문을 남긴다.',reply:'내 조건도 비어 있네. 다음엔 둘 다 확인하자.',closeReply:'이건 실험 끝난 다음에 답할게. 너랑 둘이 있을 때.'},
 'common-2-b':{focus:'taehun',low:'시의 주어는 아직 내가 정하고 싶어.',high:'네가 읽고 난 뒤 문장의 다음 줄이 달라졌어.',choice:'태훈의 관측 칸에 사실만 적고 시집은 닫아 돌려준다.',closeChoice:'태훈에게 나만 읽을 수 있는 다음 줄을 기다리겠다고 말한다.',reply:'돌려주는 손도 기록에 남기고 싶네.',closeReply:'기다리는 사람이 정해지면 문장이 더 떨리네.'},
 'common-2-c':{focus:'hyunsol',low:'내 설정도 확인 대상이야. 허가받았다는 말로 끝내진 않을게.',high:'네가 내 말에 반박해도 이번엔 먼저 끝까지 들어 볼게.',choice:'현솔과 안내문에서 확인 범위가 빠진 문장에 표시한다.',closeChoice:'현솔에게 조사 뒤 개인적으로 듣고 싶은 말을 한 줄 남긴다.',reply:'모든이라는 단어부터 고쳐야겠네.',closeReply:'이 얘기도 미루면 안 될 것 같아. 끝나고 기다려.'},
 'common-3':{focus:'world',low:'가능한 날짜를 말해 줘. 못 온다고 해도 듣고는 싶어.',high:'오늘 내가 먼저 물으면 네가 부담스러울까? 그래도 보고 싶어.',choice:'세계에게 오늘 못 가는 이유와 다음 가능한 시간을 함께 말한다.',closeChoice:'세계에게 공연과 무관한 둘만의 약속을 새로 만든다.',reply:'거절만 있는 답보다 덜 무섭네.',closeReply:'카메라는 안 가져올게. 기억은 내가 할 거니까.'},
 'common-3-b':{focus:'seoyul',low:'보여 준 부분 안에서 네 감상을 말해 줘.',high:'다음엔 그림 핑계 말고 너를 만나도 될까?',choice:'서율에게 오늘 보여 준 그림에서 가장 오래 본 빈칸을 말한다.',closeChoice:'서율과 미공개 초상화를 볼 다음 만남을 둘이 정한다.',reply:'그 빈칸을 안 채우고 싶어진 건 네가 오래 봐서일 수도 있어.',closeReply:'그날은 붓 안 들고 와도 되겠네. 네 대답을 듣고 싶어서.'},
 'common-3-c':{focus:'taehun',low:'내가 아직 아니라고 한 대답도 자료로 남겨 줘.',high:'전시 밖에서 네가 기다려 준 문장은 아직 쓸 수 있어.',choice:'태훈에게 제공한 자료와 제공하지 않은 자료를 직접 구분하게 한다.',closeChoice:'태훈과 전시가 끝난 뒤 새 문장을 둘이 읽을 약속을 한다.',reply:'이번엔 내가 어디까지 말할지 정할 수 있네.',closeReply:'그 약속은 제목 먼저 붙이지 않을래. 네가 오면 정하자.'},
 'common-4':{focus:'taewoo',low:'네가 멈춤 신호 본 거 기억해. 이번에도 그걸 먼저.',high:'내 마지막 박자는 네가 보는 쪽으로 끝내고 싶어.',choice:'태우와 리허설 중단 신호를 객석에서도 보이게 확인한다.',closeChoice:'태우가 여덟 뒤에 찾아갈 객석 자리를 함께 정한다.',reply:'조명 꺼져도 알 수 있겠네.',closeReply:'거기 앉아 있어. 나는 점수판 말고 너한테 내려갈게.'},
 'common-4-b':{focus:'world',low:'나를 달래려고 못 지킬 답을 만들지 마.',high:'노래 안 하는 나도 네가 다시 만나고 싶어 했으면 해.',choice:'세계에게 오늘 머무를 수 있는 시간과 귀가 시각을 말한다.',closeChoice:'세계에게 행사 없이도 다시 만나고 싶다는 이유를 직접 말한다.',reply:'끝이 정해졌으니까 그전까진 눈치 덜 볼 수 있겠다.',closeReply:'내가 제일 듣고 싶던 말인데…… 바로 믿어도 되나 싶어. 그래도 좋아.'},
 'common-4-c':{focus:'seoyul',low:'누가 무슨 허락을 받았는지 끝까지 나눠 보자.',high:'재판 끝나면 네 그림을 보여 주고 싶어. 결론은 네가 말해 줘.',choice:'서율과 얼굴 이미지의 사용 범위를 실제 프로그램 기능과 따로 적는다.',closeChoice:'서율에게 재판 뒤 보여 줄 그림의 제목을 아직 비워 달라고 부탁한다.',reply:'얼굴 사용 허락이 모든 기능 허락은 아니었네.',closeReply:'좋아. 네가 보고 난 뒤 나랑 같이 정하자.'},
};
export function revisedRelationshipScene(scene:Scene,state:{stats:Record<CharacterId,Bond>;flags:string[]}):Scene{
 const beat=beats[scene.id];if(!beat)return scene;
 const bond=state.stats[beat.focus],close=bond.affection>=50&&bond.trust>=40,guarded=bond.trust<25;
 const remembered=mistakes.filter(([flag])=>state.flags.some(value=>value===flag||value.startsWith(flag+':'))).filter(([,id])=>scene.lines.some(l=>l.speaker===id)).slice(-2).map(([,speaker,text])=>({speaker,text} as Line));
 const last:Line={speaker:beat.focus,text:guarded?`지금은 네 대답을 바로 믿기 어려워. ${beat.low}`:close?beat.high:beat.low};
 return {...scene,lines:[...scene.lines.slice(0,-1),...remembered,...scene.lines.slice(-1),last],choices:[...scene.choices,{id:`bond-${scene.id}-${close?'close':'open'}`,label:close?'둘만의 다음':'지금의 거리',text:close?beat.closeChoice:beat.choice,response:[{speaker:'player',text:close?beat.closeChoice:beat.choice},{speaker:beat.focus,text:close?beat.closeReply:beat.reply}],effects:[{target:beat.focus,stat:'affection',amount:close?8:4},{target:beat.focus,stat:'trust',amount:7},{target:'global',stat:'fair',amount:4},{target:'global',stat:'harmony',amount:3}],flags:[`bond:${scene.id}:${beat.focus}`]}]};
}
