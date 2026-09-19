import type {Character, CharacterId, LocationId} from '../types';
export const characters: Character[] = [
 {id:'world',name:'전세계',role:'밴드부 · 보컬 & 기타',tag:'너에게만 들려줄게',color:'#d997a6',specialLabel:'집착',bio:'무대 위에서는 누구보다 빛나는 사람. 웃음 뒤에 숨긴 불안은 아직 누구에게도 들려준 적 없다.',quote:'카메라가 꺼져도 내 옆에 있을 거야?',location:'band'},
 {id:'junyeon',name:'방준연',role:'화학 탐구 · 연구 기록',tag:'빈 옆자리의 온도',color:'#c2a37b',specialLabel:'위축',bio:'조금 느린 말투와 손때 묻은 노트. 주눅 든 모습 너머에는 누구보다 집요한 호기심이 있다.',quote:'내가 말할 때, 옆에 있어 줘.',location:'chemistry'},
 {id:'hyunsol',name:'최현솔',role:'화학 탐구 · 실험 설계',tag:'마음에도 오차가 있을까',color:'#85b6ad',specialLabel:'짜증',bio:'정확한 숫자와 틀림없는 절차를 믿는다. 마음까지 정답으로 설명할 수 있을 거라고 생각했다.',quote:'맞는 말이어도, 상처가 될 수 있겠지.',location:'chemistry'},
 {id:'taewoo',name:'김태우',role:'댄스부 · 센터',tag:'여덟 번째 카운트',color:'#d99c79',specialLabel:'경쟁심',bio:'누구보다 무대를 사랑하는 자신만만한 센터. 박수 소리가 멎은 뒤의 자신도 사랑받고 싶다.',quote:'실수해도, 끝까지 봐 줄 거지?',location:'dance'},
 {id:'taehun',name:'고태훈',role:'지구과학 · 문학',tag:'별과 문장 사이',color:'#93a8cd',specialLabel:'감성 동조',bio:'관측일지 가장자리에 시를 쓰는 문학소녀. 확률과 여백을 함께 사랑하는 조금 특별한 과학도.',quote:'별이 안 보여도, 기다리는 이유는 있어.',location:'observatory'},
 {id:'seoyul',name:'이서율',role:'밴드부 · 키보드 & 아트',tag:'미완성의 색',color:'#b2a0cd',specialLabel:'영감',bio:'음악과 그림으로 하루를 기억한다. 누군가에게 완성되지 않은 작업을 보여 주는 일은 작은 고백이다.',quote:'아직 그리는 중이야. 우리 이야기도.',location:'art'},
];
export const characterById = Object.fromEntries(characters.map(c=>[c.id,c])) as Record<CharacterId,Character>;
export const locations: {id:LocationId;name:string;sub:string;bg:string;x:number;y:number}[] = [
 {id:'gate',name:'정문',sub:'새로운 하루',bg:'classroom',x:46,y:88},
 {id:'classroom',name:'1학년 1반',sub:'우리의 시작점',bg:'classroom',x:47,y:52},
 {id:'garden',name:'중앙정원',sub:'점심의 햇살',bg:'night',x:50,y:72},
 {id:'cafeteria',name:'학생식당',sub:'비어 있는 옆자리',bg:'classroom',x:78,y:77},
 {id:'library',name:'도서관',sub:'조용한 문장들',bg:'classroom',x:76,y:31},
 {id:'chemistry',name:'화학실',sub:'실험과 작은 실수',bg:'lab',x:23,y:36},
 {id:'media',name:'미디어실',sub:'남겨 두는 순간',bg:'band',x:23,y:61},
 {id:'observatory',name:'천문대',sub:'별을 기다리는 시간',bg:'night',x:21,y:14},
 {id:'band',name:'밴드연습실',sub:'둘만의 앙코르',bg:'band',x:74,y:53},
 {id:'art',name:'미술준비실',sub:'아직 마르지 않은 색',bg:'band',x:88,y:13},
 {id:'dance',name:'댄스연습실',sub:'여덟 번의 카운트',bg:'band',x:10,y:79},
 {id:'auditorium',name:'대강당',sub:'조명이 켜지는 곳',bg:'band',x:8,y:52},
 {id:'roof',name:'옥상 휴게공간',sub:'밤에만 들리는 이야기',bg:'night',x:51,y:17},
 {id:'walk',name:'학교 뒤 산책로',sub:'조금 더 걸을까',bg:'night',x:91,y:94},
];
export const locationById = Object.fromEntries(locations.map(l=>[l.id,l])) as Record<LocationId,typeof locations[number]>;
