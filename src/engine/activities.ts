import {characterById,locationById} from '../data/characters';
import {mainStoryThreads} from './relationshipDirector';
import type {CharacterId,LocationId} from '../types';

type RoundCopy={prompt:string;action:string;explain:string};
export type TimingRound=RoundCopy&{mode:'timing';target:number;tolerance:number;cycleMs:number};
export type MemoryRound=RoundCopy&{mode:'memory';symbols:string[];pattern:number[]};
export type OrderRound=RoundCopy&{mode:'order';items:string[];answer:string[]};
export type BalanceRound=RoundCopy&{mode:'balance';target:number;tolerance:number;left:string;right:string};
export type MatchingRound=RoundCopy&{mode:'matching';pairs:{left:string;right:string}[];options:string[]};
export type PathRound=RoundCopy&{mode:'path';size:number;start:number;goal:number;blocked:number[];solution:number[]};
export type SearchRound=RoundCopy&{mode:'search';items:string[];target:string};
export type ActivityRound=TimingRound|MemoryRound|OrderRound|BalanceRound|MatchingRound|PathRound|SearchRound;
export type Activity={id:string;title:string;subtitle:string;icon:string;context:string;rounds:ActivityRound[]};
export type ActivityPerson=CharacterId|'juhan'|'minhyuk';

const hash=(text:string)=>{let h=2166136261;for(const c of text){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
export function activityShuffle<T>(items:readonly T[],seed:number):T[]{
 const result=[...items];let state=seed||1;
 for(let index=result.length-1;index>0;index--){state^=state<<13;state^=state>>>17;state^=state<<5;const swap=(state>>>0)%(index+1);[result[index],result[swap]]=[result[swap],result[index]];}
 return result;
}

const labels:Record<CharacterId,[string,string]>={world:['작은 합주실','♫'],junyeon:['둘이 하는 실험 준비','⚗'],hyunsol:['검증 파트너','±'],taewoo:['춤추기 전 워밍업','♪'],taehun:['관측 노트','✦'],seoyul:['색과 소리 작업실','◐']};
const finished:Record<ActivityPerson,string>={world:'세계가 휴대전화를 내려놓고, 둘이 맞춘 소리를 한 번 더 흥얼거렸다.',junyeon:'준연이 확인한 칸에 직접 표시를 남겼다. 이번에는 자기 목소리가 조금 더 또렷했다.',hyunsol:'현솔이 네 기록 옆에 확인 표시를 그렸다. 둘이 같은 기준으로 검토한 결과였다.',taewoo:'태우가 활짝 웃으며 손바닥을 내밀었다. 다음 연습도 같이하자는 약속 같았다.',taehun:'태훈이 관측 노트의 빈칸에 오늘 함께 확인한 것을 적었다.',seoyul:'서율이 완성한 작업 한쪽에 네가 고른 색으로 작은 점을 남겼다.',juhan:'주한이 노트북을 살짝 네 쪽으로 돌렸다. 함께 확인한 부분에 체크가 하나 더 생겼다.',minhyuk:'민혁이 점검표를 덮고 고개를 끄덕였다. 이제 둘 다 잠깐 쉬어도 되겠다.'};

/** Each visit offers three different, untimed or forgiving genres from a themed pool. */
export function activityRoundsFor(id:ActivityPerson,key:string,chapter:number):ActivityRound[]{
 const seed=hash(`${id}:${key}`),explain=finished[id];
 const timing=(prompt:string):TimingRound=>({mode:'timing',prompt,target:35+seed%30,tolerance:15,cycleMs:4200,action:'지금 맞추기',explain});
 const memory=(prompt:string,symbols:string[]):MemoryRound=>({mode:'memory',prompt,symbols,pattern:Array.from({length:chapter>=3?4:3},(_,i)=>hash(`${key}:note:${i}`)%symbols.length),action:'패턴 들어 보기',explain});
 const order=(prompt:string,answer:string[]):OrderRound=>({mode:'order',prompt,answer,items:activityShuffle(answer,seed),action:'이 순서로 확인',explain});
 const balance=(prompt:string,left:string,right:string):BalanceRound=>({mode:'balance',prompt,target:35+seed%30,tolerance:14,left,right,action:'조절 마치기',explain});
 const matching=(prompt:string,pairs:[string,string][]):MatchingRound=>({mode:'matching',prompt,pairs:pairs.map(([left,right])=>({left,right})),options:activityShuffle(pairs.map(p=>p[1]),seed^91),action:'짝 확인',explain});
 const path=(prompt:string):PathRound=>{
  const paths=[[0,1,2,6,10,11,15],[0,4,5,9,13,14,15],[0,1,5,6,7,11,15]];
  const solution=paths[seed%paths.length],outside=Array.from({length:16},(_,i)=>i).filter(i=>!solution.includes(i));
  return {mode:'path',prompt,size:4,start:0,goal:15,solution,blocked:activityShuffle(outside,seed).slice(0,5),action:'이 길로 연결',explain};
 };
 const search=(prompt:string,target:string,others:string[]):SearchRound=>({mode:'search',prompt,target,items:activityShuffle([target,target,target,...Array.from({length:13},(_,i)=>others[i%others.length])],seed),action:'관찰 완료',explain});
 const pools:Record<ActivityPerson,()=>ActivityRound[]>={
  world:()=>[
   memory('세계가 두드린 짧은 리프를 같은 순서로 돌려주자. 필요하면 몇 번이든 다시 들을 수 있다.',['도','미','솔','라']),
   matching('악기 케이블에 붙일 이름표를 같은 역할의 설명과 연결하자.',[['마이크','목소리 입력'],['건반','멜로디 연주'],['스피커','소리 출력']]),
   timing('세계가 세는 박자에 맞춰 합주 시작 신호를 보내자. 분홍 구간 안에서 멈추면 된다.'),
   search('세계의 악보에 흩어진 쉼표를 찾아 쉬어 갈 자리를 표시하자.','쉼',['도','미','솔']),
  ],
  junyeon:()=>[
   order('준연과 깨진 기구 주변을 정리한다. 먼저 접근을 막고, 담당자에게 알린 뒤 안전하게 수거하자.',['접근 막기','담당자 알리기','보호구·도구로 수거']),
   search('준연의 준비 목록에서 점검 표시가 필요한 기구를 찾아보자.','점검',['완료','완료','보관']),
   matching('준연과 준비물의 쓰임을 확인해서 올바른 라벨을 연결하자.',[['보안경','눈 보호'],['집게','물체 집기'],['기록지','관찰 적기']]),
   path('준연이 카트를 옮길 통로를 함께 찾는다. 상자가 놓인 칸을 피해 출발점부터 도착점까지 이어 보자.'),
  ],
  hyunsol:()=>[
   balance('현솔과 화면 밝기를 조정한다. 검증용 표시가 보이는 분홍 범위 안에 손잡이를 맞추자.','어둡게','밝게'),
   matching('현솔의 검증 노트에서 서로 맞는 항목을 연결하자.',[['측정값','단위 기록'],['재측정','조건 동일'],['원본','수정 전 보존']]),
   search('현솔과 전사한 표를 살펴본다. 재확인 표시가 남은 칸을 모두 찾아보자.','확인?',['확인✓','보존','확인✓']),
   order('값이 다를 때의 검증 순서를 정하자. 원본을 남긴 다음 조건을 확인하고 다시 측정한다.',['원본 보존','조건 확인','재측정']),
  ],
  taewoo:()=>[
   timing('태우와 시작 카운트를 맞춘다. 표시가 분홍 구간에 들어오면 버튼을 눌러 보자.'),
   path('태우의 무대 동선을 연결한다. 소품 칸을 피해 시작 위치에서 마지막 포즈 위치까지 이어 보자.'),
   memory('태우가 정한 짧은 스텝 조합을 순서대로 따라 해 보자. 동작표는 다시 볼 수 있다.',['왼발','오른발','박수','멈춤']),
   search('태우와 연습 전 바닥 표시를 점검한다. 들뜬 테이프 표시를 모두 찾아보자.','들뜸',['고정','고정','빈칸']),
  ],
  taehun:()=>[
   search('태훈과 관측 메모를 분류한다. 구름 때문에 다시 봐야 하는 기록을 찾아 표시하자.','구름',['맑음','기록','맑음']),
   path('태훈과 안전한 장비 이동 경로를 그린다. 장비가 놓인 칸을 피해 관측 지점까지 이어 보자.'),
   balance('태훈의 관측 기록 화면을 맞춘다. 분홍 기준 범위 안에서 읽기 편한 밝기를 고르자.','어둡게','밝게'),
   memory('태훈이 관측 순서를 네 칸의 기호로 정리했다. 같은 순서로 기록해 보자.',['달','별','구름','바람']),
  ],
  seoyul:()=>[
   balance('서율의 밑그림 위에 배경을 겹친다. 선이 살아 있는 분홍 농도 범위에 맞추자.','옅게','진하게'),
   matching('서율의 작업 도구와 쓰임을 짝지어 정리하자.',[['연필','밑그림'],['붓','채색'],['지우개','선 수정']]),
   memory('서율이 만든 전시 조명의 짧은 색 순서를 기억해 보자. 다시 확인해도 괜찮다.',['노랑','파랑','분홍','초록']),
   search('서율과 포스터 교정지를 살펴본다. 아직 비어 있는 서명 칸을 찾아보자.','서명□',['서명✓','확인✓','여백']),
  ],
  juhan:()=>[
   path('주한의 작은 회로 퍼즐을 완성한다. 막힌 칸을 피해 입력에서 출력까지 한 줄로 연결하자.'),
   order('주한과 버그 수정 절차를 정하자. 원본을 보존하고 문제를 재현한 뒤 수정본을 검증한다.',['원본 보존','문제 재현','수정·재검증']),
   search('주한의 시험 화면에서 오류 표시가 남은 칸을 모두 찾아보자.','오류',['정상','대기','정상']),
   matching('주한과 화면의 버튼에 알맞은 설명을 연결하자.',[['저장','현재 작업 보관'],['되돌리기','마지막 수정 취소'],['미리보기','공개 전 확인']]),
  ],
  minhyuk:()=>[
   search('민혁의 점검표에서 확인이 끝나지 않은 칸을 찾아 현장 점검 대상으로 표시하자.','미확인',['완료','보류','완료']),
   path('민혁과 비상 통로 안내도를 확인한다. 적치물 칸을 피해 출구까지 안전한 길을 이어 보자.'),
   order('민혁과 새로운 안내를 전달한다. 사실을 확인한 뒤 안내를 고치고 전달 여부를 확인하자.',['사실 확인','안내 정정','전달 확인']),
   matching('민혁과 교내 문제에 맞는 연락 장소를 연결하자.',[['몸이 아플 때','보건실'],['분실물 접수','학생 안내실'],['수업 상담','교무실']]),
  ],
 };
 const pool=pools[id](),offset=hash(`${key}:rotation`)%pool.length;
 return Array.from({length:3},(_,i)=>pool[(offset+i)%pool.length]);
}

export function isActivityAnswerCorrect(round:ActivityRound,answer:number|number[]|string[]):boolean{
 if(round.mode==='timing'||round.mode==='balance')return typeof answer==='number'&&Number.isFinite(answer)&&Math.abs(answer-round.target)<=round.tolerance;
 if(!Array.isArray(answer))return false;
 if(round.mode==='memory')return answer.length===round.pattern.length&&round.pattern.every((value,index)=>answer[index]===value);
 if(round.mode==='order')return answer.length===round.answer.length&&round.answer.every((value,index)=>answer[index]===value);
 if(round.mode==='matching')return answer.length===round.pairs.length&&round.pairs.every((pair,index)=>answer[index]===pair.right);
 if(round.mode==='search')return new Set<number|string>(answer).size===answer.length&&answer.length===round.items.filter(item=>item===round.target).length&&answer.every(index=>typeof index==='number'&&round.items[index]===round.target);
 if(!answer.length||answer[0]!==round.start||answer[answer.length-1]!==round.goal||new Set<number|string>(answer).size!==answer.length)return false;
 return answer.every((cell,index)=>{
  if(typeof cell!=='number'||!Number.isInteger(cell)||cell<0||cell>=round.size**2||round.blocked.includes(cell))return false;
  if(index===0)return true;
  const previous=Number(answer[index-1]);
  return Math.abs(Math.floor(cell/round.size)-Math.floor(previous/round.size))+Math.abs(cell%round.size-previous%round.size)===1;
 });
}

export function activityFor(id:CharacterId,location:LocationId,seed:number,chapter:number,visit:number):Activity{
 const [label,icon]=labels[id],thread=mainStoryThreads[Math.max(0,Math.min(chapter,mainStoryThreads.length-1))];
 return {id:`${id}-${location}-${chapter}-${visit}`,title:`${characterById[id].name} · ${label}`,icon,subtitle:`${locationById[location].name} · ${thread.title}`,context:'서로 다른 세 가지 활동을 함께한다. 서두르지 않아도 괜찮다. 다시 시도하거나 한 활동만 건너뛸 수도 있다.',rounds:activityRoundsFor(id,`${seed}:${chapter}:${visit}:${location}`,chapter)};
}
