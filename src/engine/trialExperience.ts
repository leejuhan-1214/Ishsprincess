import type {RPerson,RSpeaker,RState} from '../romanceTypes';
import {memoryEvidence,romanceTrialRounds} from '../data/romanceMystery';
import {trialComicPanels,trialPreludeDefinitions,trialSupportDefinitions,type TrialComicPanel,type TrialExperienceChoice,type TrialExperienceSource} from '../data/romanceTrialExperience';

export const TRIAL_EXPERIENCE_EDITION='edition:trial-experience';
const prefix='trial-experience:';
const preludeFlag=(round:number)=>`${prefix}prelude:${round}`;
const supportFlag=(round:number)=>`${prefix}support:${round}`;
export type TrialPrelude={id:string;kind:'comparison'|'panic'|'alternative';title:string;prompt:string;sources:TrialExperienceSource[];choices:TrialExperienceChoice[];requiredSelections:number;comic:TrialComicPanel};
export type TrialSupport={id:string;title:string;prompt:string;witness:{id:RSpeaker;name:string;line:string};choices:TrialExperienceChoice[];requiredSelections:1;comic:TrialComicPanel};
export type TrialExperienceResult={state:RState;ok:boolean;text:string};

const hasEdition=(s:RState)=>s.flags.includes(TRIAL_EXPERIENCE_EDITION);
function canonicalTrial(s:RState):boolean{
 return s.version===2&&s.chapter===4&&s.act===0&&s.phase==='trial'&&s.verdict==='pending'
  &&Number.isInteger(s.trialRound)&&s.trialRound>=0&&s.trialRound<=romanceTrialRounds.length
  &&s.flags.includes('read:main-5-1')&&s.flags.includes('trial:convened')
  &&s.clues.length===memoryEvidence.length&&new Set(s.clues).size===memoryEvidence.length&&memoryEvidence.every(clue=>s.clues.includes(clue.id));
}
const priorComplete=(s:RState)=>Array.from({length:s.trialRound},(_,i)=>i).every(i=>s.flags.includes(preludeFlag(i))&&s.flags.includes(supportFlag(i)));
const comic=(id:string)=>trialComicPanels.find(panel=>panel.id===id)!;
const copyComic=(id:string):TrialComicPanel=>{const panel=comic(id);return {...panel,records:[...panel.records]};};

/** Keep only reachable checkpoints; call BEFORE advancing a round and on restore.
 * Existing v2 games without the edition flag always retain the original flow.
 */
export function normalizeTrialExperience(s:RState):RState{
 const allowed=new Set<string>();
 const finished=s.version===2&&s.chapter===4&&s.trialRound===romanceTrialRounds.length
  &&((s.phase==='story'&&s.mode==='revelation')||s.phase==='verdict'||s.verdict!=='pending');
 if(hasEdition(s)&&(canonicalTrial(s)||finished)){
  for(let round=0;round<trialPreludeDefinitions.length;round++){
   if(round>s.trialRound||!s.flags.includes(preludeFlag(round)))break;
   allowed.add(preludeFlag(round));
   if((round<s.trialRound||(round===s.trialRound&&s.trialFeedback?.ok===true))&&s.flags.includes(supportFlag(round)))allowed.add(supportFlag(round));
   else break;
  }
 }
 const flags=s.flags.filter(flag=>!flag.startsWith(prefix)||allowed.has(flag));
 return flags.length===s.flags.length?s:{...s,flags};
}

export function isPreludeComplete(s:RState):boolean{
 if(!hasEdition(s))return true;
 return canonicalTrial(s)&&priorComplete(s)&&(s.trialRound===romanceTrialRounds.length||s.flags.includes(preludeFlag(s.trialRound)));
}
export function isSupportComplete(s:RState):boolean{
 if(!hasEdition(s))return true;
 return canonicalTrial(s)&&priorComplete(s)&&(s.trialRound===romanceTrialRounds.length
  ||(s.trialFeedback?.ok===true&&s.flags.includes(preludeFlag(s.trialRound))&&s.flags.includes(supportFlag(s.trialRound))));
}

export function trialPrelude(s:RState):TrialPrelude|null{
 if(!hasEdition(s)||!canonicalTrial(s)||!priorComplete(s)||s.trialFeedback!==null||isPreludeComplete(s))return null;
 const entry=trialPreludeDefinitions[s.trialRound];
 if(!entry)return null;
 return {id:entry.id,kind:entry.kind,title:entry.title,prompt:entry.prompt,sources:entry.sources.map(source=>({...source})),choices:entry.choices.map(choice=>({...choice})),requiredSelections:entry.requiredSelections,comic:copyComic(entry.comicId)};
}

function exactSelection(ids:string[],answer:string[],choices:TrialExperienceChoice[]):boolean{
 return Array.isArray(ids)&&ids.length===answer.length&&new Set(ids).size===ids.length
  &&ids.every(id=>choices.some(choice=>choice.id===id))&&answer.every(id=>ids.includes(id));
}
function complete(s:RState,flag:string,text:string):TrialExperienceResult{
 const current=normalizeTrialExperience(s);
 return {state:{...current,flags:[...current.flags,flag]},ok:true,text};
}
const unavailable=(s:RState):TrialExperienceResult=>({state:s,ok:false,text:'지금은 이 순서의 확인을 진행할 수 없다.'});

export function solveTrialPrelude(s:RState,ids:string[]):TrialExperienceResult{
 if(!trialPrelude(s))return unavailable(s);
 const entry=trialPreludeDefinitions[s.trialRound];
 if(!exactSelection(ids,entry.answer,entry.choices))return {state:s,ok:false,text:entry.retry};
 return complete(s,preludeFlag(s.trialRound),entry.success);
}

const names:Record<RPerson,string>={world:'세계',hyunsol:'현솔',taewoo:'태우',taehun:'태훈',seoyul:'서율',juhan:'주한',minhyuk:'민혁',junyeon:'준연'};
const witnessOpenings:Record<Exclude<RPerson,'junyeon'>,{close:string;closer:string}>={
 world:{close:'응, 네 말 듣고 있어. ',closer:'천천히 해도 돼. 나 여기서 같이 볼게. '},
 hyunsol:{close:'좋아, 옆에서 한 번 더 확인해 줄게. ',closer:'네가 짚은 데부터 볼까? 나도 놓친 게 있으면 말해 줘. '},
 taewoo:{close:'잠깐, 너 말 끝까지 듣자. ',closer:'급하게 안 해도 돼. 내가 옆에서 같이 짚어 줄게. '},
 taehun:{close:'네가 읽는 쪽을 나도 볼게. ',closer:'잠깐 멈춰도 괜찮아. 같은 페이지를 펴고 있으니까. '},
 seoyul:{close:'이쪽에 놓아 줘. 같이 볼게. ',closer:'내 쪽에서도 잘 보여. 네가 읽는 속도에 맞출게. '},
 juhan:{close:'응. 네가 고른 항목부터 확인하자. ',closer:'설명이 엉키면 내가 다시 읽을게. 너 혼자 다 말하지 않아도 돼. '},
 minhyuk:{close:'다 듣고 확인하겠다. 계속해. ',closer:'네가 짚은 부분은 내가 함께 확인할게. 서둘러 결론 낼 필요 없어. '},
};
function supportWitness(s:RState):TrialSupport['witness']{
 const entry=trialSupportDefinitions[s.trialRound];
 const focus=s.focus,close=focus!==null&&focus!=='junyeon'&&!!s.bonds[focus]&&(s.bonds[focus].trust>=30||s.bonds[focus].affection>=40);
 const id:Exclude<RPerson,'junyeon'>=close?focus:entry.defaultWitness;
 const bond=s.bonds[id],veryClose=close&&bond&&(bond.trust>=55||bond.affection>=60);
 const opening=veryClose?witnessOpenings[id].closer:close?witnessOpenings[id].close:'';
 return {id,name:names[id],line:opening+entry.witnessLines[id]};
}

export function trialSupport(s:RState):TrialSupport|null{
 if(!hasEdition(s)||!canonicalTrial(s)||!priorComplete(s)||s.trialFeedback?.ok!==true||!isPreludeComplete(s)||isSupportComplete(s))return null;
 const entry=trialSupportDefinitions[s.trialRound];
 if(!entry)return null;
 return {id:entry.id,title:entry.title,prompt:entry.prompt,witness:supportWitness(s),choices:entry.choices.map(choice=>({...choice})),requiredSelections:1,comic:copyComic(entry.comicId)};
}

export function solveTrialSupport(s:RState,ids:string[]):TrialExperienceResult{
 const support=trialSupport(s);
 if(!support)return unavailable(s);
 const entry=trialSupportDefinitions[s.trialRound];
 if(!exactSelection(ids,entry.answer,entry.choices))return {state:s,ok:false,text:entry.retry};
 return complete(s,supportFlag(s.trialRound),`${support.witness.name}: ${entry.success}`);
}
