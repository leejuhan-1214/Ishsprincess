import type {RPerson,RState} from '../romanceTypes';
import {illustrationMoments} from './romanceIllustrationMoments';

export const romanceArt = [
 {id:'world-earbud',person:'world',title:'한쪽씩 나눠 듣는 봄',alt:'노을이 비치는 밴드실에서 세계가 옆에 앉은 나에게 이어폰 한쪽을 건넨다.'},
 {id:'hyunsol-crystal',person:'hyunsol',title:'같은 빛을 들여다볼 때',alt:'실험실 창가에서 현솔이 밀봉된 푸른 결정 표본을 들어 보이고 나는 흰 종이를 받쳐 준다.'},
 {id:'taewoo-hand',person:'taewoo',title:'마지막 박자에 내 손을',alt:'댄스실에서 마지막 포즈를 가르쳐 준 태우가 웃으며 내 쪽으로 손을 내민다.'},
 {id:'taehun-atlas',person:'taehun',title:'바람이 넘기지 못한 페이지',alt:'안전 난간이 있는 관측 테라스에서 태훈과 별자리지도의 양쪽 페이지를 함께 잡는다.'},
 {id:'seoyul-sketch',person:'seoyul',title:'그림 밖에서 마주친 눈',alt:'미술실에서 내 얼굴을 그리던 서율이 스케치북 위로 눈을 맞춘다.'},
 {id:'juhan-pixel',person:'juhan',title:'너만 찾은 숨은 화면',alt:'컴퓨터실에서 주한이 직접 만든 게임 속 작은 픽셀 하트를 보여 주며 수줍게 웃는다.'},
 {id:'minhyuk-rain',person:'minhyuk',title:'우산의 가운데',alt:'비 오는 정문에서 민혁과 나란히 우산을 나누어 쓰며 손잡이를 함께 잡는다.'},
 {id:'world-ending',person:'world',title:'화면 밖의 약속',alt:'기타를 내려놓은 밴드실에서 세계가 휴대폰을 뒤집어 놓고 내 손을 잡는다.'},
 {id:'hyunsol-ending',person:'hyunsol',title:'정답이 없는 오후',alt:'정원 벤치에서 현솔이 두 찻잔 중 하나를 내게 건네며 웃는다.'},
 {id:'taewoo-ending',person:'taewoo',title:'같은 색의 마지막 박자',alt:'연습이 끝난 댄스실에서 태우가 내 손목에 작은 리본을 묶어 준다.'},
 {id:'taehun-ending',person:'taehun',title:'다음 별을 기다리며',alt:'안전 난간이 있는 옥상에서 태훈과 담요 위로 손을 잡고 다음 별을 기다린다.'},
 {id:'seoyul-ending',person:'seoyul',title:'둘이 그린 빈칸',alt:'미술실에서 서율의 노란 연필과 내 파란 연필이 한 장의 그림을 채운다.'},
 {id:'juhan-ending',person:'juhan',title:'저장되지 않는 온도',alt:'협동 게임의 컨트롤러를 내려놓은 주한이 컴퓨터실에서 내 손을 잡는다.'},
 {id:'minhyuk-ending',person:'minhyuk',title:'당번이 아닌 약속',alt:'완장을 가방에 넣은 민혁이 노을 진 정문에서 나에게 손을 내민다.'},
 {id:'memory-time',person:'world',title:'두 장의 오후',alt:'도서관에서 세계와 서로 다른 약속 쪽지를 나란히 확인한다.'},
 {id:'memory-reservation',person:'taewoo',title:'우리가 기다린 시간',alt:'댄스실 앞에서 태우의 휴대폰 안내와 예약 변경 확인서를 비교한다.'},
 {id:'memory-meeting',person:'seoyul',title:'세 곳으로 갈라진 약속',alt:'밴드실 앞에서 서율과 세 모둠이 받은 모임 안내를 펼쳐 본다.'},
 {id:'memory-cues',person:'minhyuk',title:'리허설 뒤의 두 순서',alt:'강당 객석의 진행 테이블에서 민혁과 승인본 및 배포본을 비교한다.'},
 ...illustrationMoments.map(moment=>({id:moment.id,person:moment.person,title:moment.title,alt:moment.lines[0].text})),
] satisfies readonly {id:string;person:RPerson;title:string;alt:string}[];
export function artById(id?:string){return romanceArt.find(art=>art.id===id);}
export function artPath(id:string){return `assets/romance-cg/preview/${id}.webp`;}
export function artOriginalPath(id:string){return `assets/romance-cg/${id}.png`;}
export function awareness(s:RState){
 const stages=[
  {title:'첫 약속',text:'친구들과 페어 준비를 시작했다.',after:'read:main-1-1'},
  {title:'엇갈린 시간',text:'같은 약속 쪽지에 다른 시간이 적혀 있었다.',after:'read:main-1-2'},
  {title:'바뀐 예약',text:'태우의 연습실 예약도 안내와 달랐다.',after:'read:main-2-2'},
  {title:'세 곳의 안내',text:'같은 모임인데 기다린 장소가 달랐다.',after:'read:main-3-2'},
  {title:'남아 있던 옛 순서',text:'승인본이 준비된 뒤에도 옛 큐시트가 배포됐다.',after:'read:main-4-2'},
  {title:'원본을 펼치며',text:'함께 겪은 일을 원본과 맞춰 보기로 했다.',after:'read:main-5-1'},
 ];
 return [...stages].reverse().find(stage=>s.flags.includes(stage.after))??stages[0];
}
