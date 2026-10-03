import {romancePeople,type RPerson,type RState,type RScene,type RLine,type RChoice,type RClue,type REffect} from '../romanceTypes';
import {locations} from '../data/characters';
import type {LocationId} from '../types';
import {getMainScene,getHangoutScene,getRepairScene,getFinaleScene} from '../data/romanceStory';
import {memoryEvidence,romanceTrialRounds,romanceSequence,getDiscoveryScene,getRevelationScene} from '../data/romanceMystery';
import {shuffleChoices} from './choiceOrder';
import {hasHangoutAvailable} from '../data/romanceHangouts';
import {hasRomanceActivity} from '../data/romanceActivities';
import {artById} from '../data/romanceArt';

const clamp=(n:number,max=100)=>Math.max(0,Math.min(max,n));
const isPerson=(v:unknown):v is RPerson=>typeof v==='string'&&(romancePeople as readonly string[]).includes(v);
const isLocation=(v:unknown):v is LocationId=>typeof v==='string'&&locations.some(p=>p.id===v);
const uniq=(values:string[])=>[...new Set(values)];
const dates=[['D − 64','D − 51','D − 50'],['D − 49','D − 33','D − 32'],['D − 31','D − 16','D − 15'],['D − 14','D − 2','D − 1'],['FAIR DAY · 오전','FAIR DAY · 공연','FAIR DAY · 저녁']];
const schedules:Record<RPerson,LocationId[]>={
 world:['band','garden','media','classroom','cafeteria','auditorium'],
 hyunsol:['chemistry','library','classroom','garden','computer','cafeteria'],
 taewoo:['dance','auditorium','garden','classroom','cafeteria','walk'],
 taehun:['observatory','library','garden','classroom','walk','cafeteria'],
 seoyul:['art','band','garden','media','classroom','cafeteria'],
 juhan:['computer','library','garden','classroom','media','cafeteria'],
 minhyuk:['classroom','auditorium','garden','library','cafeteria','walk'],
 junyeon:['chemistry','library','classroom','garden','computer','cafeteria'],
};

export function junyeonCap(s:RState):70|100{return s.verdict==='forgive'?100:70;}
export function validRomanceName(value:string):boolean{
 const name=value.trim();return Array.from(name).length>=1&&Array.from(name).length<=12&&!/[<>\u0000-\u001f\u007f]/.test(name);
}
export function newRomance(name:string,seed:number):RState{
 if(typeof name!=='string'||!validRomanceName(name))throw new RangeError('이름을 1~12자로 입력해 주세요.');
 const s:RState={version:2,name:name.trim(),seed:Number.isFinite(seed)?seed>>>0:0,chapter:0,act:0,phase:'story',mode:'main',line:0,response:null,focus:null,visitor:null,location:'classroom',bonds:Object.fromEntries(romancePeople.map(id=>[id,{affection:8,trust:8}])) as RState['bonds'],flags:[],clues:[],actions:2,visited:[],visits:Object.fromEntries(romancePeople.map(id=>[id,0])) as RState['visits'],sceneKey:'',backlog:[],verdict:'pending',repairStep:0,repairDone:false,trialRound:0,trialFeedback:null,trialOrder:[],ending:null,date:dates[0][0]};
 return enterScene(s,'main');
}

export function currentRomanceScene(s:RState):RScene{
 if(s.mode==='hangout'&&s.visitor){
  const prefix=`meeting-place:${s.sceneKey}:`,origin=s.flags.find(flag=>flag.startsWith(prefix))?.slice(prefix.length);
  return getHangoutScene(s.visitor,s,isLocation(origin)?origin:s.location);
 }
 if(s.mode==='discovery')return getDiscoveryScene(s.sceneKey.replace(/^discover-/,''),s);
 if(s.mode==='revelation')return getRevelationScene(s);
 if(s.mode==='repair')return getRepairScene(Math.min(3,s.repairStep),s);
 if(s.mode==='finale')return getFinaleScene(s);
 return getMainScene(s.chapter,s.act,s);
}
export function romanceLines(s:RState):RLine[]{return s.response??currentRomanceScene(s).lines;}
export function choiceOrder(s:RState,choices:readonly RChoice[]):{value:RChoice;index:number}[]{return shuffleChoices(choices,`${s.seed}:romance:${s.sceneKey}`);}
export function personLocation(s:RState,id:RPerson):LocationId{
 const meeting=availableMemories(s).find(clue=>clue.lines.find(line=>isPerson(line.speaker))?.speaker===id);
 if(meeting)return meeting.location;
 const places=schedules[id],offset=romancePeople.indexOf(id);
 return places[(s.seed%places.length+s.chapter*3+s.act*2+(2-s.actions)+offset)%places.length];
}
function enterScene(s:RState,mode:RState['mode'],key?:string):RState{
 let next={...s,phase:'story' as const,mode,line:0,response:null,sceneKey:key??s.sceneKey};
 const scene=currentRomanceScene(next);
 next={...next,sceneKey:key??scene.id,location:scene.location};
 return next;
}
function addHistory(s:RState,...lines:RLine[]):RState{return {...s,backlog:[...s.backlog,...lines].slice(-800)};}
function effects(s:RState,items:REffect[]=[]):RState{
 const bonds={...s.bonds};
 for(const effect of items){
  if(!isPerson(effect.person)||(effect.person==='junyeon'&&s.verdict==='exclude'))continue;
  const old=bonds[effect.person],a=Number.isFinite(effect.affection)?effect.affection??0:0,t=Number.isFinite(effect.trust)?effect.trust??0:0;
  bonds[effect.person]={affection:clamp(old.affection+a,effect.person==='junyeon'?junyeonCap(s):100),trust:clamp(old.trust+t)};
 }
 return {...s,bonds};
}
export function junyeonFocusCount(s:RState):number{
 return new Set(s.flags.flatMap(flag=>{const match=/^junyeon-focus:hangout-junyeon-([1-4])-v[12]$/.exec(flag);return match?[match[1]]:[];})).size;
}
export function junyeonRomanceEligible(s:RState):boolean{
 return s.verdict==='forgive'&&s.repairDone&&junyeonFocusCount(s)>=2&&s.bonds.junyeon.affection>=85&&s.bonds.junyeon.trust>=70&&(s.focus===null||s.focus==='junyeon')&&!s.flags.some(flag=>flag.startsWith('romance:')&&flag!=='romance:junyeon');
}
function allowedChoice(s:RState,choice:RChoice):boolean{
 const romance=(choice.flags??[]).filter(flag=>flag.startsWith('romance:'));
 if(!romance.length)return true;
 if(s.mode!=='finale')return false;
 return romance.every(flag=>{const id=flag.slice(8);return isPerson(id)&&(id==='junyeon'?junyeonRomanceEligible(s):s.focus===id);});
}
export function chooseRomance(s:RState,choiceId:string):RState{
 if(s.phase!=='story'||s.response!==null)return s;
 const scene=currentRomanceScene(s),choice=scene.choices.find(c=>c.id===choiceId);
 if(s.line<scene.lines.length||!choice||!allowedChoice(s,choice)||s.flags.includes(`choice:${s.sceneKey}:${choice.id}`))return s;
 const changed=effects(s,choice.effects),next=addHistory({...changed,line:0,response:choice.response,flags:uniq([...changed.flags,`choice:${s.sceneKey}:${choice.id}`,...(choice.flags??[])])},{speaker:'player',text:choice.text});
 return choice.response.length?next:finishScene(next,scene);
}
export function advanceRomance(s:RState):RState{
 if(s.phase!=='story')return s;
 const scene=currentRomanceScene(s),lines=romanceLines(s);
 if(s.line>=lines.length){if(s.response===null&&scene.choices.length)return s;return finishScene(s,scene);}
 const next=addHistory({...s,line:s.line+1},lines[s.line]);
 if(next.line===lines.length&&(s.response!==null||!scene.choices.length))return finishScene(next,scene);
 return next;
}
function finishScene(s:RState,scene:RScene):RState{
 if(s.mode==='hangout'&&s.visitor&&hasRomanceActivity(s.visitor,s.chapter,s.sceneKey.includes('-v2:')?2:1)&&!s.flags.includes(`activity:${s.sceneKey}`)&&!s.flags.includes(`activity-skipped:${s.sceneKey}`))return {...s,phase:'activity-invite',line:0,response:null};
 let next={...s,flags:uniq([...s.flags,`read:${scene.id}`]),line:0,response:null};
 if(s.mode==='discovery'){
  const clue=memoryEvidence.find(c=>`discover-${c.id}`===s.sceneKey);
  if(clue)next={...next,clues:uniq([...next.clues,clue.id])};
  return {...next,phase:'map'};
 }
 if(s.mode==='hangout'&&s.visitor){
  if(s.visitor==='junyeon'&&s.chapter<4&&s.verdict==='pending')next={...next,flags:uniq([...next.flags,`junyeon-focus:${scene.id}`])};
  return {...next,phase:'map',visits:{...next.visits,[s.visitor]:next.visits[s.visitor]+1}};
 }
 if(s.mode==='revelation')return {...next,phase:'verdict'};
 if(s.mode==='repair'){
  if(s.repairStep<3)return enterScene({...next,repairStep:s.repairStep+1,date:`후일담 · ${s.repairStep+2}주째`},'repair');
  return enterScene({...next,repairStep:4,repairDone:true,date:'후일담 · 4주 뒤'},'finale');
 }
 if(s.mode==='finale'){
  const decision=[...next.flags].reverse().find(f=>/^(romance|friendship):/.test(f));
  return {...next,phase:'ending',ending:`${decision??`friendship:${s.focus??'class'}`}:${s.verdict}`};
 }
 next={...next,actions:2,visited:[],visitor:null};
 if(s.chapter===4&&s.act===0&&s.verdict==='pending'&&allMemories(next))return {...next,phase:'trial-briefing',trialRound:0,trialFeedback:null,trialOrder:[]};
 return {...next,phase:'map'};
}
function allMemories(s:RState):boolean{return memoryEvidence.every(c=>s.clues.includes(c.id));}
function chapterMemories(s:RState):boolean{return memoryEvidence.filter(c=>c.chapter<=s.chapter).every(c=>s.clues.includes(c.id));}
export function nextRomance(s:RState):RState{
 if(s.phase!=='map'||!s.flags.includes(`read:${getMainScene(s.chapter,s.act,s).id}`))return s;
 if(s.chapter===4&&s.act===0&&s.verdict==='pending')return allMemories(s)?{...s,phase:'trial-briefing',trialRound:0,trialFeedback:null,trialOrder:[]}:s;
 if(s.act<2)return enterScene({...s,act:s.act+1,date:dates[s.chapter][s.act+1],visitor:null},'main');
 if(!chapterMemories(s))return s;
 if(s.chapter===1)return {...s,phase:'focus'};
 if(s.chapter<4)return enterScene({...s,chapter:s.chapter+1,act:0,date:dates[s.chapter+1][0],visitor:null},'main');
 if(s.verdict==='pending')return s;
 if(s.verdict==='forgive'&&!s.repairDone)return enterScene({...s,repairStep:0,date:'후일담 · 1주째',visitor:null},'repair');
 return enterScene({...s,date:'후일담 · 4주 뒤',visitor:null},'finale');
}
export function selectFocus(s:RState,id:RPerson|null):RState{
 if(s.phase!=='focus'||s.chapter!==1||s.act!==2||!(id===null||isPerson(id)))return s;
 return enterScene({...s,focus:id,chapter:2,act:0,visitor:null,date:dates[2][0],flags:uniq([...s.flags,`focus:${id??'none'}`])},'main');
}
export function startHangout(s:RState,id:RPerson,location:LocationId,_activity=false):RState{
 if(s.phase!=='map'||!isPerson(id)||!isLocation(location)||s.actions<1||s.visited.includes(id)||!hasHangoutAvailable(id,s)||(id==='junyeon'&&s.verdict==='exclude')||personLocation(s,id)!==location)return s;
 const scene=getHangoutScene(id,s,location),key=`${scene.id}:visit-${s.visits[id]+1}`;
 const next=enterScene({...s,actions:s.actions-1,visited:[...s.visited,id],visitor:id,location,flags:uniq([...s.flags,`meeting-place:${key}:${location}`])},'hangout',key);
 return next;
}
export function respondToActivity(s:RState,accept:boolean):RState{
 if(s.phase!=='activity-invite'||s.mode!=='hangout'||!s.visitor)return s;
 if(accept)return {...s,phase:'activity'};
 return finishScene({...s,flags:uniq([...s.flags,`activity-skipped:${s.sceneKey}`])},currentRomanceScene(s));
}
export function completeRomanceActivity(s:RState,score:number):RState{
 if(s.phase!=='activity'||s.mode!=='hangout'||!s.visitor||s.flags.includes(`activity:${s.sceneKey}`))return s;
 const value=Number.isFinite(score)?Math.floor(clamp(score,3)):0;
 const next=value?effects(s,[{person:s.visitor,affection:value*2,trust:value*3}]):s;
 return finishScene({...next,flags:uniq([...next.flags,`activity:${s.sceneKey}`,`activity-score:${s.sceneKey}:${value}`])},currentRomanceScene(s));
}
export function conveneTrial(s:RState):RState{
 if(s.phase!=='trial-briefing'||s.chapter!==4||s.act!==0||s.verdict!=='pending'||!allMemories(s)||!s.flags.includes('read:main-5-1'))return s;
 return {...s,phase:'trial',trialRound:0,trialFeedback:null,trialOrder:[],flags:uniq([...s.flags,'trial:convened'])};
}
export function availableMemories(s:RState,location?:LocationId):RClue[]{
 if(s.phase!=='map')return [];
 return memoryEvidence.filter(c=>!s.clues.includes(c.id)&&(s.chapter>c.chapter||(s.chapter===c.chapter&&s.act>=c.unlockAct))&&c.requires.every(id=>s.clues.includes(id))&&(!location||c.location===location));
}
export function inspectMemory(s:RState,id:string):RState{
 const clue=availableMemories(s,s.location).find(c=>c.id===id);
 if(!clue)return s;
 return enterScene({...s,visitor:null,location:clue.location},'discovery',`discover-${id}`);
}
export function submitArgument(s:RState,claimId:string,evidenceId:string):RState{
 if(s.phase!=='trial'||s.trialFeedback||s.trialRound>=romanceTrialRounds.length)return s;
 const round=romanceTrialRounds[s.trialRound];
 if(!round.claims.some(c=>c.id===claimId)||!s.clues.includes(evidenceId))return s;
 const ok=round.target===claimId&&round.evidence===evidenceId;
 return {...s,trialFeedback:{ok,text:ok?round.reason:round.hint}};
}
export function continueArgument(s:RState):RState{
 if(s.phase!=='trial'||!s.trialFeedback)return s;
 return {...s,trialRound:s.trialRound+(s.trialFeedback.ok?1:0),trialFeedback:null};
}
export function submitReconstruction(s:RState,order:string[]):RState{
 if(s.phase!=='trial'||s.trialRound!==romanceTrialRounds.length||s.trialFeedback)return s;
 if(order.length!==romanceSequence.length||new Set(order).size!==order.length||order.some(id=>!romanceSequence.some(item=>item.id===id)))return s;
 const ok=romanceSequence.every((item,index)=>item.id===order[index]);
 if(!ok)return {...s,trialOrder:[...order],trialFeedback:{ok:false,text:'처음 어긋난 쪽지부터 페어 전야의 배포까지, 일어난 순서를 다시 살펴보자.'}};
 return enterScene({...s,trialOrder:[...order],trialFeedback:null},'revelation');
}
export function setVerdict(s:RState,verdict:'exclude'|'forgive'):RState{
 if(s.phase!=='verdict'||s.verdict!=='pending'||s.chapter!==4||(verdict!=='exclude'&&verdict!=='forgive'))return s;
 return enterScene({...s,verdict,act:1,visitor:null,date:dates[4][1],flags:uniq([...s.flags,`verdict:${verdict}`])},'main');
}

const modes=['main','hangout','discovery','revelation','repair','finale'];
const phases=['story','map','focus','activity-invite','activity','trial-briefing','trial','verdict','ending'];
const lineValue=(v:unknown):v is RLine=>{
 if(!v||typeof v!=='object'||!('speaker' in v)||!('text' in v)||!(isPerson(v.speaker)||['player','narrator','teacher','alter'].includes(String(v.speaker)))||typeof v.text!=='string'||v.text.length>10000)return false;
 const line=v as RLine;
 return (line.location===undefined||isLocation(line.location))&&(line.art===undefined||(typeof line.art==='string'&&!!artById(line.art)))&&(line.expression===undefined||['neutral','smile','shy','serious','surprised','sad'].includes(line.expression));
};
const stringArray=(v:unknown,max=5000):v is string[]=>Array.isArray(v)&&v.length<=max&&v.every(item=>typeof item==='string'&&item.length<=500);
const int=(v:unknown,min:number,max:number):v is number=>typeof v==='number'&&Number.isInteger(v)&&v>=min&&v<=max;
export function restoreRomance(value:unknown):RState|null{
 try{
  if(!value||typeof value!=='object')return null;
  const s=value as RState;
  if(s.version!==2||typeof s.name!=='string'||!validRomanceName(s.name)||!int(s.seed,0,0xffffffff)||!int(s.chapter,0,4)||!int(s.act,0,2)||!phases.includes(s.phase)||!modes.includes(s.mode)||!int(s.line,0,2000)||!(s.response===null||(Array.isArray(s.response)&&s.response.length<=2000&&s.response.every(lineValue))))return null;
  if(!(s.focus===null||isPerson(s.focus))||!(s.visitor===null||isPerson(s.visitor))||!isLocation(s.location)||!stringArray(s.flags)||!stringArray(s.clues,8)||!int(s.actions,0,2)||!stringArray(s.visited,8)||!s.visited.every(isPerson)||typeof s.sceneKey!=='string'||s.sceneKey.length>300)return null;
  if(!['pending','exclude','forgive'].includes(s.verdict)||!int(s.repairStep,0,4)||typeof s.repairDone!=='boolean'||!int(s.trialRound,0,romanceTrialRounds.length)||!stringArray(s.trialOrder,4)||!(s.ending===null||typeof s.ending==='string')||typeof s.date!=='string'||s.date.length>100||!Array.isArray(s.backlog)||s.backlog.length>800||!s.backlog.every(lineValue))return null;
  if(!(s.trialFeedback===null||(typeof s.trialFeedback==='object'&&typeof s.trialFeedback.ok==='boolean'&&typeof s.trialFeedback.text==='string'&&s.trialFeedback.text.length<=2000)))return null;
  if(s.chapter<4&&(s.verdict!=='pending'||['trial-briefing','trial','verdict','ending'].includes(s.phase)||['revelation','repair','finale'].includes(s.mode)))return null;
  if(s.repairDone&&(s.verdict!=='forgive'||s.repairStep!==4))return null;
  if(s.mode==='repair'&&(s.verdict!=='forgive'||s.repairStep>3))return null;
  if(s.phase==='focus'&&(s.chapter!==1||s.act!==2))return null;
  if((s.phase==='activity'||s.phase==='activity-invite'||s.mode==='hangout')&&!s.visitor)return null;
  if((s.phase==='activity'||s.phase==='activity-invite')&&s.mode!=='hangout')return null;
  if((s.phase==='trial'||s.phase==='trial-briefing')&&(s.chapter!==4||s.act!==0||s.verdict!=='pending'||!allMemories(s)))return null;
  if(s.phase==='verdict'&&(s.mode!=='revelation'||s.verdict!=='pending'))return null;
  if(s.clues.some(id=>!memoryEvidence.some(c=>c.id===id&&(c.chapter<s.chapter||(c.chapter===s.chapter&&c.unlockAct<=s.act))&&c.requires.every(required=>s.clues.includes(required)))))return null;
  if(new Set(s.trialOrder).size!==s.trialOrder.length||s.trialOrder.some(id=>!romanceSequence.some(item=>item.id===id)))return null;
  const bonds={} as RState['bonds'],visits={} as RState['visits'];
  for(const id of romancePeople){
   const bond=s.bonds?.[id];
   if(!bond||typeof bond.affection!=='number'||!Number.isFinite(bond.affection)||typeof bond.trust!=='number'||!Number.isFinite(bond.trust)||!int(s.visits?.[id],0,10000))return null;
   bonds[id]={affection:clamp(bond.affection,id==='junyeon'?junyeonCap(s):100),trust:clamp(bond.trust)};visits[id]=s.visits[id];
  }
  const restored:RState={...s,name:s.name.trim(),bonds,visits,flags:uniq(s.flags),clues:uniq(s.clues),visited:uniq(s.visited),trialOrder:[...s.trialOrder],backlog:s.backlog.map(line=>({...line})),response:s.response?.map(line=>({...line}))??null,trialFeedback:s.trialFeedback?{...s.trialFeedback}:null};
  // Edition 2 launched activities before the encounter. Resume those saves at
  // the conversation, rather than silently marking its unread story complete.
  if(restored.phase==='activity'&&!restored.flags.some(flag=>flag.startsWith(`choice:${restored.sceneKey}:`))){restored.phase='story';restored.line=0;restored.response=null;}
  if(restored.mode==='discovery'&&!memoryEvidence.some(c=>`discover-${c.id}`===restored.sceneKey))return null;
  if(restored.mode==='discovery'&&restored.phase==='story'&&!availableMemories({...restored,phase:'map'},restored.location).some(c=>`discover-${c.id}`===restored.sceneKey))return null;
  const scene=currentRomanceScene(restored),lines=romanceLines(restored);
  if(restored.response!==null&&!scene.choices.some(choice=>restored.flags.includes(`choice:${restored.sceneKey}:${choice.id}`)))return null;
  if(restored.phase==='story'&&restored.line>lines.length)return null;
  if(restored.phase==='story'&&restored.mode!=='hangout'&&restored.sceneKey!==scene.id)return null;
  if((restored.phase==='story'||restored.phase==='activity'||restored.phase==='activity-invite')&&restored.mode==='hangout'&&restored.sceneKey!==`${scene.id}:visit-${restored.visits[restored.visitor!]+1}`)return null;
  return restored;
 }catch{return null;}
}
