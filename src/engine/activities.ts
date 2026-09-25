import {characterById,locationById} from '../data/characters';
import {mainStoryThreads} from './relationshipDirector';
import type {CharacterId,LocationId} from '../types';

export type TimingRound={mode:'timing';prompt:string;target:number;tolerance:number;action:string;explain:string};
export type MemoryRound={mode:'memory';prompt:string;symbols:string[];pattern:number[];action:string;explain:string};
export type OrderRound={mode:'order';prompt:string;items:string[];answer:string[];action:string;explain:string};
export type BalanceRound={mode:'balance';prompt:string;target:number;tolerance:number;left:string;right:string;action:string;explain:string};
export type ActivityRound=TimingRound|MemoryRound|OrderRound|BalanceRound;
export type Activity={id:string;title:string;subtitle:string;icon:string;context:string;rounds:ActivityRound[]};

const hash=(text:string)=>{let h=2166136261;for(const c of text){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
const shuffle=<T,>(items:T[],seed:number)=>{
 const result=[...items];let state=seed||1;
 for(let index=result.length-1;index>0;index--){state^=state<<13;state^=state>>>17;state^=state<<5;const swap=(state>>>0)%(index+1);[result[index],result[swap]]=[result[swap],result[index]];}
 return result.every((item,index)=>item===items[index])?[...result.slice(1),result[0]]:result;
};

const labels:Record<CharacterId,[string,string]>={
 world:['리프 메모리','♫'],junyeon:['세이프티 시퀀스','⚗'],hyunsol:['오차 보정','±'],
 taewoo:['8카운트 싱크','♪'],taehun:['관측 초점','✦'],seoyul:['색과 소리의 균형','◐'],
};

function roundsFor(id:CharacterId,key:string,chapter:number):ActivityRound[]{
 const n=hash(key),difficulty=Math.min(2,Math.floor(chapter/5));
 if(id==='world'){
  const symbols=['♪','●','▲','◆'];
  return [5,6,7].map((base,index)=>{
   const length=base+difficulty;
   let state=(n^Math.imul(index+1,0x9e3779b9))>>>0;
   return ({
   mode:'memory' as const,prompt:index===0?'세계가 두드린 짧은 리프를 기억해 그대로 돌려준다.':index===1?'조명이 꺼진 뒤에도 이어진 리듬을 재현한다.':'마지막 한 음을 비워 둔 앙코르 패턴을 완성한다.',
   symbols,pattern:Array.from({length},()=>{state^=state<<13;state^=state>>>17;state^=state<<5;return (state>>>0)%symbols.length;}),action:'리프 듣기 · 한 번만',
   explain:index===2?'마지막 패턴까지 맞춘 순간, 세계가 휴대전화를 내려놓고 네 반응을 먼저 보았다.':'소리를 외운 것이 아니라 세계가 준 박자를 다시 건넸다.',
   });
  });
 }
 if(id==='junyeon'){
  const plans:[string,string[],string[]][]=[
   ['깨진 기구 주변을 안전하게 정리할 순서를 함께 정한다.',['접근 막기','담당자 알리기','보호구 착용','도구로 수거'],['접근 막기','담당자 알리기','보호구 착용','도구로 수거']],
   ['라벨 없는 시료를 발견했을 때의 확인 순서를 맞춘다.',['사용 중지','기록 확인','담당자 확인','표기 후 보관'],['사용 중지','기록 확인','담당자 확인','표기 후 보관']],
   ['실패한 측정값을 다시 검증할 순서를 맞춘다.',['원값 보존','조건 기록','기구 점검','재측정'],['원값 보존','조건 기록','기구 점검','재측정']],
  ];
  return plans.map(([prompt,answer],index)=>({mode:'order' as const,prompt,items:shuffle(answer,n+index*97),answer,action:'순서 확정',explain:'준연이 남이 시킨 절차가 아니라 둘이 확인한 순서를 자기 목소리로 다시 읽었다.'}));
 }
 if(id==='hyunsol')return [28,54,76].map((base,index)=>{
  const target=Math.max(15,Math.min(85,base+((n>>index)%9)-4));
  return {mode:'balance' as const,prompt:['준연의 원본과 현솔의 수정본 사이에서 검증 강도를 맞춘다.','정확한 지적과 상대가 받아들일 수 있는 속도의 균형을 잡는다.','최종 발표본에서 확신과 보류 표시의 비율을 조정한다.'][index],target,tolerance:Math.max(3,5-difficulty),left:index===0?'원본 보존':'천천히 확인',right:index===0?'수정 반영':'즉시 수정',action:'이 값으로 검증',explain:'현솔은 정답 하나를 강요하지 않고, 네가 멈춘 지점을 함께 검토 기준으로 삼았다.'};
 });
 if(id==='taewoo')return [24,50,76].map((base,index)=>({
  mode:'timing' as const,prompt:['태우가 손뼉을 치는 두 번째 박자에 맞춰 발을 내딛는다.','거울을 보지 않고 서로의 네 번째 카운트를 맞춘다.','멈춤 신호 뒤 다시 시작되는 여덟 번째 박자를 잡는다.'][index],
  target:base+((n>>index)%7)-3,tolerance:Math.max(3,(index===2?5:6)-difficulty),action:index===2?'마지막 박자 잡기':'지금 스텝!',
  explain:index===2?'완벽한 동작보다 같은 순간에 멈추고 다시 시작한 일이 태우의 웃음을 바꿨다.':'발끝이 맞은 순간 태우가 거울이 아니라 네 얼굴을 확인했다.',
 }));
 if(id==='taehun')return [31,58,79].map((base,index)=>({
  mode:'timing' as const,prompt:['흐르는 구름 사이로 관측 대상이 보이는 순간을 포착한다.','붉은 조명 아래 초점이 선명해지는 지점을 잡는다.','빛공해가 가장 약해지는 짧은 관측창을 기록한다.'][index],
  target:base+((n>>index)%7)-3,tolerance:Math.max(3,(index===2?5:6)-difficulty),action:'관측 기록',
  explain:index===2?'태훈은 별의 위치 옆에 네가 함께 기다린 시간도 빠뜨리지 않고 적었다.':'보인 것과 보이지 않은 조건을 함께 남기자 태훈이 조용히 고개를 끄덕였다.',
 }));
 return [34,57,73].map((base,index)=>{
  const target=base+((n>>index)%9)-4;
  return {mode:'balance' as const,prompt:['서율의 밑그림이 묻히지 않도록 배경의 색 농도를 맞춘다.','밴드 편곡에서 건반과 보컬 사이의 빈 공간을 조절한다.','완성할 부분과 일부러 남겨 둘 여백의 비율을 고른다.'][index],target,tolerance:Math.max(3,5-difficulty),left:index===1?'건반':'여백',right:index===1?'보컬':'채우기',action:'이 균형으로 남기기',explain:index===2?'서율은 네가 전부 채우지 않은 여백에 작은 서명을 하나 더 남겼다.':'같은 색과 소리도 둘이 정한 비율에서 새로운 장면이 되었다.'};
 });
}

export function activityFor(id:CharacterId,location:LocationId,seed:number,chapter:number,visit:number):Activity{
 const [label,icon]=labels[id],thread=mainStoryThreads[Math.min(chapter,mainStoryThreads.length-1)];
 return {
  id:`${id}-${location}-${chapter}-${visit}`,title:`${characterById[id].name} · ${label}`,icon,
  subtitle:`${locationById[location].name} · ${thread.title}`,context:`오늘의 활동은 ‘${thread.title}’에서 남은 문제를 둘이 직접 풀어 보는 시간이다.`,
  rounds:roundsFor(id,`${seed}:${chapter}:${visit}:${location}`,chapter),
 };
}
