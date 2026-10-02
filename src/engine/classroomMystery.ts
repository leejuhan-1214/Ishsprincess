import {bondEpisodes,caseFiles,type ExtraId,type SchoolId,type SchoolLine} from '../data/classroomMystery';

export type CasePhase='opening'|'investigation'|'debate'|'reconstruction'|'verdict'|'motive'|'closing'|'failed'|'solved';
export type CaseProgress={phase:CasePhase;line:number;round:number;clues:string[];order:string[];health:number;feedback:{ok:boolean;text:string}|null};
export type ExtraBond={affection:number;trust:number;visits:number;days:number[];ending:'true'|'friend'|'distance'|null};
export type ClassroomState={version:1;cases:Record<string,CaseProgress>;bonds:Record<ExtraId,ExtraBond>;active:{kind:'case';id:string}|{kind:'bond';id:ExtraId;episode:number;line:number;choice:number|null}|null};
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
 if(p.phase==='opening')return updateCase(state,v=>v.line+1<c.opening.length?{...v,line:v.line+1}:{...v,phase:'investigation',line:0});
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
export function bondAvailable(state:ClassroomState,id:ExtraId,chapter:number){const b=state.bonds[id],episode=bondEpisodes[id][b.visits],required=bondRequirement(state,id);return !!episode&&chapter>=episode.chapter&&(!required||state.cases[required].phase==='solved')&&!b.days.includes(chapter)&&state.active===null;}
export function beginBond(state:ClassroomState,id:ExtraId,chapter:number):ClassroomState{
 if(!bondAvailable(state,id,chapter))return state;
 return {...state,bonds:{...state.bonds,[id]:{...state.bonds[id],days:[...state.bonds[id].days,chapter]}},active:{kind:'bond',id,episode:state.bonds[id].visits,line:0,choice:null}};
}
export function bondLines(state:ClassroomState):SchoolLine[]{const a=state.active;if(a?.kind!=='bond')return [];const e=bondEpisodes[a.id][a.episode],b=state.bonds[a.id];if(a.episode===3&&a.choice===0&&(b.affection<55||b.trust<50))return [{speaker:a.id,text:'말해 줘서 고마워. 하지만 그동안 지켜지지 않은 약속도 있어. 오늘 한 번의 고백으로 그 시간을 없앨 수는 없을 것 같아.'},{speaker:'player',text:'네 마음을 재촉하지 않을게. 내가 했던 말도 함께 기억할게.'}];return a.choice===null?e.lines:e.choices[a.choice].reply;}
export function selectBondChoice(state:ClassroomState,index:number):ClassroomState{
 const a=state.active;if(!Number.isInteger(index)||a?.kind!=='bond'||a.choice!==null||a.line<bondLines(state).length)return state;
 const choice=bondEpisodes[a.id][a.episode].choices[index];if(!choice)return state;
 const b=state.bonds[a.id];return {...state,bonds:{...state.bonds,[a.id]:{...b,affection:clamp(b.affection+choice.affection),trust:clamp(b.trust+choice.trust)}},active:{...a,line:0,choice:index}};
}
export function continueBond(state:ClassroomState):ClassroomState{
 const a=state.active;if(a?.kind!=='bond')return state;const length=bondLines(state).length;
 if(a.line+1<length||a.choice===null)return {...state,active:{...a,line:Math.min(length,a.line+1)}};
 const b=state.bonds[a.id],ending=a.episode===3?(a.choice===0&&b.affection>=55&&b.trust>=50?'true':a.choice===1?'friend':'distance'):null;
 return {...state,bonds:{...state.bonds,[a.id]:{...b,visits:a.episode+1,ending}},active:null};
}
export function isClassroomState(value:unknown):value is ClassroomState{
 if(!value||typeof value!=='object')return false;const s=value as ClassroomState;
 const integer=(n:unknown,min:number,max:number)=>typeof n==='number'&&Number.isInteger(n)&&n>=min&&n<=max;
 if(s.version!==1||!s.cases||!s.bonds)return false;
 for(const id of ['juhan','minhyuk'] as const){const b=s.bonds[id];if(!b||!integer(b.affection,0,100)||!integer(b.trust,0,100)||!integer(b.visits,0,4)||!Array.isArray(b.days)||!b.days.every(n=>integer(n,0,13))||new Set(b.days).size!==b.days.length||![null,'true','friend','distance'].includes(b.ending))return false;}
 for(const c of caseFiles){const p=s.cases[c.id];if(!p||!['opening','investigation','debate','reconstruction','verdict','motive','closing','failed','solved'].includes(p.phase)||!integer(p.line,0,p.phase==='opening'?c.opening.length-1:p.phase==='closing'?c.closing.length-1:0)||!integer(p.round,0,c.debates.length-1)||!integer(p.health,0,5)||!Array.isArray(p.clues)||!p.clues.every(id=>c.evidence.some(e=>e.id===id))||new Set(p.clues).size!==p.clues.length||!Array.isArray(p.order)||!p.order.every(e=>c.sequence.includes(e))||new Set(p.order).size!==p.order.length||!(p.feedback===null||(p.feedback&&typeof p.feedback.ok==='boolean'&&typeof p.feedback.text==='string')))return false;}
 if(s.active===null)return true;
 const a=s.active;if(!a||typeof a!=='object')return false;
 if(a.kind==='case')return caseFiles.some(c=>c.id===a.id);
 if(a.kind!=='bond'||!['juhan','minhyuk'].includes(a.id)||!integer(a.episode,0,3)||a.episode!==s.bonds[a.id].visits||!integer(a.line,0,bondEpisodes[a.id][a.episode].lines.length)||!(a.choice===null||integer(a.choice,0,2)))return false;
 return a.choice===null||a.line<=bondEpisodes[a.id][a.episode].choices[a.choice].reply.length;
}
