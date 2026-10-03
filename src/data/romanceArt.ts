import type {RHero,RState} from '../romanceTypes';

export const romanceArt = [
 {id:'world-earbud',person:'world',title:'한쪽씩 나눠 듣는 봄',alt:'노을이 비치는 밴드실에서 세계가 옆에 앉은 나에게 이어폰 한쪽을 건넨다.'},
 {id:'hyunsol-crystal',person:'hyunsol',title:'같은 빛을 들여다볼 때',alt:'실험실 창가에서 현솔이 밀봉된 푸른 결정 표본을 들어 보이고 나는 흰 종이를 받쳐 준다.'},
 {id:'taewoo-hand',person:'taewoo',title:'마지막 박자에 내 손을',alt:'댄스실에서 마지막 포즈를 가르쳐 준 태우가 웃으며 내 쪽으로 손을 내민다.'},
 {id:'taehun-atlas',person:'taehun',title:'바람이 넘기지 못한 페이지',alt:'안전 난간이 있는 관측 테라스에서 태훈과 별자리지도의 양쪽 페이지를 함께 잡는다.'},
 {id:'seoyul-sketch',person:'seoyul',title:'그림 밖에서 마주친 눈',alt:'미술실에서 내 얼굴을 그리던 서율이 스케치북 위로 눈을 맞춘다.'},
 {id:'juhan-pixel',person:'juhan',title:'너만 찾은 숨은 화면',alt:'컴퓨터실에서 주한이 직접 만든 게임 속 작은 픽셀 하트를 보여 주며 수줍게 웃는다.'},
 {id:'minhyuk-rain',person:'minhyuk',title:'우산의 가운데',alt:'비 오는 정문에서 민혁과 나란히 우산을 나누어 쓰며 손잡이를 함께 잡는다.'},
] as const satisfies readonly {id:string;person:RHero;title:string;alt:string}[];
export function artById(id?:string){return romanceArt.find(art=>art.id===id);}
export function artPath(id:string){return `assets/romance-cg/${id}.png`;}
export function awareness(s:RState){
 const stages=[
  {title:'아직은, 조금 서툰 새 학기',text:'새 얼굴과 첫 약속. 어떤 사람인지 알아가는 중이다.',after:'read:main-1-1'},
  {title:'같은 약속, 서로 다른 시간',text:'세계와 내 쪽지의 시간이 달랐다. 아직은 옮겨 적다 생긴 실수일 수도 있다.',after:'read:main-1-2'},
  {title:'우연이라고 넘기기엔',text:'태우의 예약까지 어긋났다. 지난 쪽지와 비슷하다고, 친구들이 먼저 이야기를 꺼냈다.',after:'read:main-2-2'},
  {title:'각자 탓인 줄 알았던 오후',text:'세 장소로 갈라진 안내를 함께 비교했다. 이제 듣기만 한 말은 당사자에게 다시 묻기로 했다.',after:'read:main-3-2'},
  {title:'수정했는데도 돌아온 옛 안내',text:'승인된 새 큐시트 대신 옛 버전이 배포됐다. 준비 실수만으로 설명되지 않는 기록이 남았다.',after:'read:main-4-2'},
  {title:'오늘의 무대를 지키기 위해',text:'공연 취소 요청까지 도착했다. 선생님과 친구들 앞에서 사실과 추측을 나누어 확인하기로 했다.',after:'read:main-5-1'},
 ];
 return [...stages].reverse().find(stage=>s.flags.includes(stage.after))??stages[0];
}
