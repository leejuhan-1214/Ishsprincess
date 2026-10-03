import {bondEpisodes,caseFiles,type ExtraId,type SchoolId,type SchoolLine,type BondEpisode} from '../data/classroomMystery';

import {dailyBond} from '../data/extraDaily';
import {locationById} from '../data/characters';
import type {LocationId} from '../types';

export type CasePhase='opening'|'investigation'|'debate'|'reconstruction'|'verdict'|'motive'|'closing'|'failed'|'solved';
export type CaseProgress={phase:CasePhase;line:number;round:number;clues:string[];order:string[];health:number;feedback:{ok:boolean;text:string}|null};
export type ExtraBond={affection:number;trust:number;visits:number;days:number[];ending:'true'|'friend'|'distance'|null};
export type ClassroomState={version:1;activity?:{id:ExtraId;chapter:number;location:LocationId};cases:Record<string,CaseProgress>;bonds:Record<ExtraId,ExtraBond>;active:{kind:'case';id:string}|{kind:'bond';id:ExtraId;episode:number;line:number;choice:number|null;location?:LocationId}|null};
const freshCase=():CaseProgress=>({phase:'opening',line:0,round:0,clues:[],order:[],health:5,feedback:null});
export const newClassroomState=():ClassroomState=>({version:1,cases:Object.fromEntries(caseFiles.map(c=>[c.id,freshCase()])),bonds:{juhan:{affection:8,trust:8,visits:0,days:[],ending:null},minhyuk:{affection:8,trust:8,visits:0,days:[],ending:null}},active:null});
const clamp=(n:number)=>Math.min(100,Math.max(0,n));
export const solvedCases=(state:ClassroomState)=>caseFiles.filter(c=>state.cases[c.id].phase==='solved').length;
export function caseAvailable(state:ClassroomState,id:string,chapter:number){const index=caseFiles.findIndex(c=>c.id===id);return index>=0&&chapter>=caseFiles[index].chapter&&caseFiles.slice(0,index).every(c=>state.cases[c.id].phase==='solved');}
export function openCase(state:ClassroomState,id:string,chapter:number):ClassroomState{
 if(!caseAvailable(state,id,chapter)||state.active?.kind==='bond')return state;
 return {...state,active:{kind:'case',id}};
}
export function closeNotebook(state:ClassroomState):ClassroomState{return state.active?.kind==='bond'?state:{...state,active:null};}
export function activeCase(state:ClassroomState){return state.active?.kind==='case'?caseFiles.find(c=>c.id===state.active?.id)??null:null;}
function updateCase(state:ClassroomState,update:(p:CaseProgress)=>CaseProgress):ClassroomState{const c=activeCase(state);return c?{...state,cases:{...state.cases,[c.id]:update(state.cases[c.id])}}:state;}
export function caseLines(state:ClassroomState):SchoolLine[]{const c=activeCase(state);if(!c)return [];const p=state.cases[c.id];return p.phase==='opening'?c.opening:p.phase==='closing'||p.phase==='solved'?c.closing:[];}
export function continueCase(state:ClassroomState):ClassroomState{
 const c=activeCase(state);if(!c)return state;const p=state.cases[c.id];
 if(p.phase==='opening'){
  if(p.line+1<c.opening.length)return updateCase(state,v=>({...v,line:v.line+1}));
  const out=updateCase(state,v=>({...v,phase:'investigation',line:0}));
  return {...out,active:null};
 }
 if(p.phase==='closing'){
  if(p.line+1<c.closing.length)return updateCase(state,v=>({...v,line:v.line+1}));
  const out=updateCase(state,v=>({...v,phase:'solved',line:0}));
  return {...out,bonds:Object.fromEntries(Object.entries(out.bonds).map(([id,b])=>[id,{...b,affection:clamp(b.affection+5),trust:clamp(b.trust+8)}])) as ClassroomState['bonds']};
 }
 if(p.phase==='debate'&&p.feedback)return updateCase(state,v=>!v.feedback?.ok?{...v,feedback:null}:v.round+1<c.debates.length?{...v,round:v.round+1,feedback:null}:{...v,phase:'reconstruction',feedback:null});
 return state;
}
export function collectEvidence(state:ClassroomState,id:string):ClassroomState{
 const c=activeCase(state);if(!c||state.cases[c.id].phase!=='investigation'||!c.evidence.some(e=>e.id===id))return state;
 return updateCase(state,p=>p.clues.includes(id)?p:{...p,clues:[...p.clues,id]});
}
export function beginTrial(state:ClassroomState):ClassroomState{
 const c=activeCase(state);if(!c)return state;
 return updateCase(state,p=>p.phase==='investigation'&&c.evidence.every(e=>p.clues.includes(e.id))?{...p,phase:'debate',round:0,health:5,feedback:null}:p);
}
const miss=(p:CaseProgress,text:string):CaseProgress=>({...p,health:Math.max(0,p.health-1),phase:p.health<=1?'failed':p.phase,feedback:{ok:false,text}});
export function rebut(state:ClassroomState,claim:number,evidence:string):ClassroomState{
 const c=activeCase(state);if(!c)return state;const d=c.debates[state.cases[c.id].round];
 return updateCase(state,p=>{
  if(p.phase!=='debate'||p.feedback||!Number.isInteger(claim)||claim<0||claim>=d.claims.length||!p.clues.includes(evidence))return p;
  return claim===d.target&&evidence===d.evidence?{...p,feedback:{ok:true,text:d.reason}}:miss(p,'이 자료는 선택한 문장을 직접 반박하지 못한다. 시각·권한·출처 중 무엇을 증명하는 자료인지 다시 확인하자.');
 });
}
export function addSequence(state:ClassroomState,event:string):ClassroomState{const c=activeCase(state);if(!c||!c.sequence.includes(event))return state;return updateCase(state,p=>p.phase==='reconstruction'&&!p.order.includes(event)&&p.order.length<c.sequence.length?{...p,order:[...p.order,event],feedback:null}:p);}
export function clearSequence(state:ClassroomState):ClassroomState{return updateCase(state,p=>p.phase==='reconstruction'?{...p,order:[],feedback:null}:p);}
export function submitSequence(state:ClassroomState):ClassroomState{const c=activeCase(state);if(!c)return state;return updateCase(state,p=>p.phase!=='reconstruction'||p.order.length!==c.sequence.length?p:p.order.every((v,i)=>v===c.sequence[i])?{...p,phase:'verdict',feedback:null}:{...miss(p,'원인보다 결과를 먼저 놓은 부분이 있다. 수집한 기록의 시각과 작업 순서를 비교하자.'),order:[]});}
export function vote(state:ClassroomState,id:SchoolId):ClassroomState{const c=activeCase(state);if(!c)return state;return updateCase(state,p=>p.phase!=='verdict'?p:id===c.culprit?{...p,phase:'motive',feedback:null}:miss(p,'그 사람을 지목하는 근거가 부족하다. 인상이나 계정 표시 이름이 아니라 실제로 확인한 행동을 따라가자.'));}
export function explainMotive(state:ClassroomState,index:number):ClassroomState{const c=activeCase(state);if(!c)return state;return updateCase(state,p=>p.phase!=='motive'||!Number.isInteger(index)||index<0||index>=c.motives.length?p:index===c.motive?{...p,phase:'closing',line:0,feedback:null}:miss(p,'실제 행위와 당사자가 밝힌 이유를 구분하자. 증거에 없는 악의를 만들어 넣으면 결론도 왜곡된다.'));}
export function retryTrial(state:ClassroomState):ClassroomState{return updateCase(state,p=>p.phase==='failed'?{...p,phase:'debate',round:0,order:[],health:5,feedback:null}:p);}

export function bondRequirement(state:ClassroomState,id:ExtraId){const visits=state.bonds[id].visits;return id==='minhyuk'&&visits===2?'absence':id==='juhan'&&visits===3?'echo':null;}
export function mainBondAvailable(state:ClassroomState,id:ExtraId,chapter:number){const b=state.bonds[id],episode=bondEpisodes[id][b.visits],required=bondRequirement(state,id);return !!episode&&chapter>=episode.chapter&&(!required||state.cases[required].phase==='solved');}
export function bondAvailable(state:ClassroomState,id:ExtraId,chapter:number){
 const episode=bondEpisodes[id][state.bonds[id].visits],required=bondRequirement(state,id);
 // Do not spend the final chapter's one visit on a filler conversation before
 // the incident unlocks its authored follow-up. That would make it unreachable.
 const waiting=!!episode&&chapter>=episode.chapter&&!!required&&state.cases[required].phase!=='solved';
 return chapter>=0&&chapter<=4&&!waiting&&!state.bonds[id].days.includes(chapter)&&state.active===null;
}
const bondMeetingSpots:Record<LocationId,string>={
 hallway:'복도 창가의 휴식 자리',
 gate:'통행을 막지 않는 쉼터',classroom:'비어 있는 창가 자리',garden:'벤치',cafeteria:'비어 있는 식탁',library:'목소리를 낮춰 이야기할 수 있는 열람 자리',
 chemistry:'실험대와 분리된 휴식 자리',media:'사용하지 않는 편집 작업대 옆',computer:'비어 있는 작업 자리',observatory:'관측 장비와 떨어진 준비 자리',
 band:'앰프를 끈 휴식 자리',art:'마른 작업탁 옆',dance:'연습 동선을 벗어난 휴식 자리',auditorium:'리허설 동선을 벗어난 객석',roof:'난간과 떨어진 휴식 벤치',walk:'길을 비켜 마련된 쉼터',
};
/** Only present-tense staging changes. Recalled incidents and future destinations
 * stay intact, and no line is inserted so every existing save cursor still fits. */
function locatedBondEpisode(base:BondEpisode,id:ExtraId,episode:number,place:LocationId):BondEpisode{
 const edits:Record<number,string>={};
 if(id==='juhan'){
  if(episode===0){
   edits[0]='챙겨 온 노트북 옆에서 주한이 작게 손을 흔들었다. 민트색 가디건 아래에 교복 리본이 단정하게 매여 있었다.';
   edits[1]='이주한이야. 잠깐 괜찮으면 내 옆에서 같이 봐 줄래? 설명은 천천히 할게. 네가 잘 들을 수 있게.';
   edits[6]='주한의 손이 노트북 키보드에서 잠깐 멈췄다. 나는 화면이 아니라 주한을 바라봤다.';
  }else if(episode===1){
   edits[0]='지난번 이야기 기억해서 챙겨 온 노트북의 사용자 화면을 바꿨어. 질문하기 전에, 보여 줘도 되는 파일인지 먼저 묻게 했어.';
   edits[6]='주한이 내 눈을 보고 노트북 화면을 잠갔다. 꺼진 화면 대신 서로의 얼굴을 바라보자 짧은 침묵이 남았다.';
  }else if(episode===2){
   edits[0]='챙겨 온 발표 원고를 펼친 주한의 첫 문장이 두 번 끊겼다. 주한은 노트북의 준비된 AI 설명 화면을 열려다 손을 거뒀다.';
  }else if(episode===3){
   edits[0]='얼터에고 사건 뒤 주한이 챙겨 온 노트북에서 새 개발 파일을 보여 줬다. 제목 옆에 자신의 이름을 지우지 않고 적어 두었다.';
   edits[4]='주한이 내 손 가까이 손을 내밀다 멈췄다. 손등에 노트북 화면의 작은 불빛이 닿았다.';
  }
 }else{
  if(episode===0){
   edits[0]='민혁은 챙겨 온 출석표의 마지막 칸을 확인하고 있었다. 어두운 피부 위로 오후의 햇빛이 닿았고, 붉은 완장의 매듭은 빈틈없이 정리돼 있었다.';
   edits[3]='…당연하지. 이름을 부르는 데 허가는 필요 없다. 다만 출석표를 확인하는 동안에는 설명부터 끝내게 해라!';
   edits[4]='민혁은 목소리가 커진 것을 깨닫고 출석표를 내려다봤다. 잠깐 숨을 고른 뒤 다시 나를 돌아봤다.';
  }else if(episode===2){
   edits[3]='민혁이 완장을 풀어 접은 출석표 위에 놓았다. 손목에 남은 자국을 한 번 문지른 뒤 내 쪽으로 몸을 돌렸다.';
  }else if(episode===4&&base.chapter%3===0&&place!=='classroom'){
   edits[3]='점검표에는 완료 표시가 다 있는데, 조금 전 돌아본 교실의 확인 사진에는 정리하지 않은 의자가 남아 있어. 사진과 종이가 다른 이유를 같이 확인하자.';
  }
 }
 const lines=base.lines.map((line,index)=>edits[index]===undefined?line:{...line,text:edits[index]});
 const firstNarrator=lines.findIndex(line=>line.speaker==='narrator');
 if(firstNarrator>=0){
  const props=id==='juhan'?'주한의 휴대 노트북을 사이에 두고':'출석표와 메모장을 챙겨 온 민혁과';
  lines[firstNarrator]={...lines[firstNarrator],text:`${locationById[place].name}의 ${bondMeetingSpots[place]}에서 ${props} 이야기를 이어갔다. ${lines[firstNarrator].text}`};
 }
 const choices=base.choices.map((choice,index)=>{
  if(index!==0)return choice;
  if(id==='juhan'&&episode===0)return {...choice,text:'주한 곁에서, 먼저 설명하고 싶은 기능을 주한이 직접 고르게 한다.'};
  if(id==='minhyuk'&&episode===0)return {...choice,text:'친해지고 싶어서 물었다고 말하고, 출석표 확인이 끝날 때까지 옆에서 기다린다.'};
  if(id==='minhyuk'&&episode===1)return {...choice,text:'출석표를 잠깐 내려놓고 다음 식사는 함께 챙기기로 약속한다.',reply:choice.reply.map((line,i)=>i===0?{...line,text:'다음 식사 시간의 담당 업무는 밥 먹기야. 우리 둘 다.'}:line)};
  if(id==='minhyuk'&&episode===4&&base.chapter%3===0&&place!=='classroom')return {...choice,text:'확인 사진과 점검표를 함께 비교하고 서로 놓친 점을 다른 색으로 표시한다.'};
  return choice;
 });
 return {...base,lines,choices};
}
export function currentBondEpisode(state:ClassroomState,id?:ExtraId){
 const a=state.active,bid=id??(a?.kind==='bond'?a.id:'juhan'),b=state.bonds[bid],chapter=b.days.at(-1)??0;
 const episode=a?.kind==='bond'&&a.id===bid?a.episode:b.visits,file=caseFiles.find(c=>c.chapter===chapter);
 const base=episode<4?bondEpisodes[bid][episode]:dailyBond(bid,chapter,b.affection,b.trust,!!file&&state.cases[file.id].phase==='investigation');
 return a?.kind==='bond'&&a.id===bid&&a.location?locatedBondEpisode(base,bid,episode,a.location):base;
}
export function beginBond(state:ClassroomState,id:ExtraId,chapter:number):ClassroomState{
 if(!bondAvailable(state,id,chapter))return state;
 return {...state,bonds:{...state.bonds,[id]:{...state.bonds[id],days:[...state.bonds[id].days,chapter]}},active:{kind:'bond',id,episode:mainBondAvailable(state,id,chapter)?state.bonds[id].visits:4,line:0,choice:null}};
}
export function bondLines(state:ClassroomState):SchoolLine[]{const a=state.active;if(a?.kind!=='bond')return [];const e=currentBondEpisode(state),b=state.bonds[a.id];if(a.episode===3&&a.choice===0&&(b.affection<55||b.trust<50))return [{speaker:a.id,text:'말해 줘서 고마워. 하지만 그동안 지켜지지 않은 약속도 있어. 오늘 한 번의 고백으로 그 시간을 없앨 수는 없을 것 같아.'},{speaker:'player',text:'네 마음을 재촉하지 않을게. 내가 했던 말도 함께 기억할게.'}];return a.choice===null?e.lines:e.choices[a.choice].reply;}
export function selectBondChoice(state:ClassroomState,index:number):ClassroomState{
 const a=state.active;if(!Number.isInteger(index)||a?.kind!=='bond'||a.choice!==null||a.line<bondLines(state).length)return state;
 const choice=currentBondEpisode(state).choices[index];if(!choice)return state;
 const b=state.bonds[a.id];return {...state,bonds:{...state.bonds,[a.id]:{...b,affection:clamp(b.affection+choice.affection),trust:clamp(b.trust+choice.trust)}},active:{...a,line:0,choice:index}};
}
export function continueBond(state:ClassroomState):ClassroomState{
 const a=state.active;if(a?.kind!=='bond')return state;const length=bondLines(state).length;
 if(a.line+1<length||a.choice===null)return {...state,active:{...a,line:Math.min(length,a.line+1)}};
 const b=state.bonds[a.id],ending=a.episode===3?(a.choice===0&&b.affection>=55&&b.trust>=50?'true':a.choice===1?'friend':'distance'):b.ending;
 return {...state,bonds:{...state.bonds,[a.id]:{...b,visits:a.episode===4?b.visits:a.episode+1,ending}},active:null};
}
export function isClassroomState(value:unknown):value is ClassroomState{
 if(!value||typeof value!=='object')return false;const s=value as ClassroomState;
 const integer=(n:unknown,min:number,max:number)=>typeof n==='number'&&Number.isInteger(n)&&n>=min&&n<=max;
 if(s.version!==1||!s.cases||!s.bonds)return false;
 for(const id of ['juhan','minhyuk'] as const){const b=s.bonds[id];if(!b||!integer(b.affection,0,100)||!integer(b.trust,0,100)||!integer(b.visits,0,4)||!Array.isArray(b.days)||!b.days.every(n=>integer(n,0,13))||new Set(b.days).size!==b.days.length||![null,'true','friend','distance'].includes(b.ending))return false;}
 for(const c of caseFiles){const p=s.cases[c.id];if(!p||!['opening','investigation','debate','reconstruction','verdict','motive','closing','failed','solved'].includes(p.phase)||!integer(p.line,0,p.phase==='opening'?c.opening.length-1:p.phase==='closing'?c.closing.length-1:0)||!integer(p.round,0,c.debates.length-1)||!integer(p.health,0,5)||!Array.isArray(p.clues)||!p.clues.every(id=>c.evidence.some(e=>e.id===id))||new Set(p.clues).size!==p.clues.length||!Array.isArray(p.order)||!p.order.every(e=>c.sequence.includes(e))||new Set(p.order).size!==p.order.length||!(p.feedback===null||(p.feedback&&typeof p.feedback.ok==='boolean'&&typeof p.feedback.text==='string')))return false;}
 if(s.activity!==undefined&&(!s.activity||!['juhan','minhyuk'].includes(s.activity.id)||!integer(s.activity.chapter,0,13)||!Object.hasOwn(locationById,s.activity.location)||s.active?.kind!=='bond'||s.active.id!==s.activity.id||!s.bonds[s.activity.id].days.includes(s.activity.chapter)))return false;
 if(s.active===null)return true;
 const a=s.active;if(!a||typeof a!=='object')return false;
 if(a.kind==='case')return caseFiles.some(c=>c.id===a.id);
 if(a.kind!=='bond'||!['juhan','minhyuk'].includes(a.id)||!integer(a.episode,0,4)||(a.episode!==4&&a.episode!==s.bonds[a.id].visits)||!integer(a.line,0,a.episode===4?dailyBond(a.id,s.bonds[a.id].days.at(-1)??0,s.bonds[a.id].affection,s.bonds[a.id].trust).lines.length:bondEpisodes[a.id][a.episode].lines.length)||!(a.choice===null||integer(a.choice,0,2)))return false;
 return (a.location===undefined||Object.hasOwn(locationById,a.location))&&(a.choice===null||a.line<=currentBondEpisode(s).choices[a.choice].reply.length);
}
