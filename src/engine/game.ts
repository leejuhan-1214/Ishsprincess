import { characters, characterById, locationById, scheduledLocation } from '../data/characters';
import { commonScenes } from '../data/common';
import { routesA } from '../data/routesA';
import { routesB } from '../data/routesB';
import { haremScenes } from '../data/harem';
import { endingById } from '../data/endings';
import {freeTalkResult,hangoutScene,pendingEvent,selectSuddenEvent,type TalkContext} from './characterAI';
import {activityFor} from './activities';
import {directedScene} from './storyDirector';
import type { CharacterId, GlobalKey, StatKey, Line, Effect, Scene, LocationId } from '../types';

export const routes = {...routesA,...routesB} as Record<CharacterId,Scene[]>;
export const ids=characters.map(c=>c.id);
export type Stats=Record<StatKey,number>;
export type GameState={version:1;name:string;seed:number;phase:'story'|'activity'|'map'|'routeSelect'|'ending';segment:'common'|'route'|'hangout'|'harem';chapter:number;route:CharacterId|null;routeChapter:number;line:number;response:Line[]|null;stats:Record<CharacterId,Stats>;global:Record<GlobalKey,number>;flags:string[];visits:Record<CharacterId,number>;visitor:CharacterId|null;visitLocation?:LocationId|null;actions:number;visitedToday:CharacterId[];backlog:Line[];ending:string|null;haremOffered:boolean;haremChance:number;ngPlus:boolean;date:string;};
export type Meta={endings:string[];read:string[];failures:number;attempted:number[]};
export const blankMeta=():Meta=>({endings:[],read:[],failures:0,attempted:[]});
export const clamp=(n:number)=>Math.max(0,Math.min(100,n));
export function validName(value:string){const n=value.trim();return /^[\p{L}\p{N}][\p{L}\p{N} .·_-]{0,11}$/u.test(n);}
export function newGame(name:string,seed:number,ngPlus=false):GameState{
 if(!validName(name))throw new Error('이름을 1~12자로 입력해 주세요.');
 const specials=[15,65,25,35,10,20];
 return {version:1,name:name.trim(),seed:seed>>>0,phase:'story',segment:'common',chapter:0,route:null,routeChapter:0,line:0,response:null,stats:Object.fromEntries(ids.map((id,i)=>[id,{affection:10,trust:5,jealousy:0,special:specials[i]}])) as Record<CharacterId,Stats>,global:{harmony:40,fair:10,reputation:0,ethics:50,safety:50},flags:[],visits:Object.fromEntries(ids.map(id=>[id,0])) as Record<CharacterId,number>,visitor:null,visitLocation:null,actions:3,visitedToday:[],backlog:[],ending:null,haremOffered:false,haremChance:0,ngPlus,date:new Date().toISOString()};
}
function talkContext(s:GameState,id=s.visitor!):TalkContext{return {id,location:s.visitLocation??characterById[id].location,chapter:s.chapter,visit:s.visits[id],stats:s.stats[id],flags:s.flags,seed:s.seed};}
export function activeScene(s:GameState):Scene{
 if(s.segment==='hangout'&&s.visitor)return directedScene({...hangoutScene(talkContext(s)),day:commonScenes[s.chapter].day},{addChoices:false,cacheable:false});
 if(s.segment==='route'&&s.route)return directedScene(routes[s.route][s.routeChapter]);
 if(s.segment==='harem')return directedScene(haremScenes[s.routeChapter]);
 return directedScene(commonScenes[Math.min(s.chapter,commonScenes.length-1)]);
}
export const activeLines=(s:GameState)=>s.response??activeScene(s).lines;
export const readKey=(s:GameState)=>`${activeScene(s).id}:${s.response?'r'+s.flags.filter(f=>f.startsWith('choice:')).slice(-1)[0]:'l'}:${s.line}`;
export function applyEffects(s:GameState,effects:Effect[],flags:string[]=[]):GameState{
 const out=structuredClone(s);
 for(const e of effects){ if(e.target==='global'){const k=e.stat as GlobalKey;if(k in out.global)out.global[k]=clamp(out.global[k]+e.amount);}else{const k=e.stat as StatKey;if(k in out.stats[e.target])out.stats[e.target][k]=clamp(out.stats[e.target][k]+e.amount);}}
 out.flags=[...new Set([...s.flags,...flags])];return out;
}
export function choose(s:GameState,index:number):GameState{
 if(s.phase!=='story'||s.response||s.line<activeScene(s).lines.length)return s;
 const scene=activeScene(s),c=scene.choices[index];if(!c)return s;
 // Count separate events, while reloading or revisiting the same event cannot duplicate it.
 const countedFlags=['safety-strike','team-success','secret-promise'];
 const flags=(c.flags??[]).map(f=>countedFlags.includes(f)?`${f}:${scene.id}`:f);
 let out=applyEffects(s,c.effects,[...flags,`choice:${scene.id}:${c.id}`]);
 out.response=c.response;out.line=0;out.backlog=[...out.backlog,{speaker:'player' as const,text:`〈선택〉 ${c.text}`}].slice(-800);return out;
}
export function freeTalk(s:GameState,input:string):GameState{
 const message=input.trim().slice(0,160);
 if(!message||s.phase!=='story'||s.segment!=='hangout'||!s.visitor||s.response||s.line<activeScene(s).lines.length)return s;
 const result=freeTalkResult(talkContext(s),message);
 let out=applyEffects(s,result.effects,[...result.flags,`choice:${activeScene(s).id}:free-${s.visits[s.visitor]}`]);
 out.response=result.lines;out.line=0;out.backlog=[...out.backlog,{speaker:'player' as const,text:`〈직접 말하기〉 ${message}`}].slice(-800);return out;
}
export const currentActivity=(s:GameState)=>s.visitor?activityFor(s.visitor,s.visitLocation??characterById[s.visitor].location,s.seed,s.chapter,s.visits[s.visitor]):null;
export function completeActivity(s:GameState,score:number):GameState{
 if(s.phase!=='activity'||!s.visitor)return s;
 const points=Math.max(0,Math.min(3,Math.floor(score))),id=s.visitor,positiveSpecial=['taehun','seoyul'].includes(id);
 const effects:Effect[]=[{target:id,stat:'affection',amount:3+points*2},{target:id,stat:'trust',amount:1+points*3},{target:id,stat:'special',amount:positiveSpecial?points*2:-points*2},{target:'global',stat:'fair',amount:points},{target:'global',stat:'safety',amount:points===3?2:0}];
 return {...applyEffects(s,effects,[`activity:${id}:${s.visitLocation??characterById[id].location}:${s.chapter}:${points}`]),phase:'story',line:0,response:null};
}
export function haremEligible(s:GameState){return ids.every(id=>s.stats[id].affection>=60&&s.stats[id].trust>=70&&s.stats[id].jealousy<=30&&s.visits[id]>=1)&&s.global.harmony>=80&&s.global.fair>=85&&s.global.ethics>=70&&s.stats.world.special<=60&&s.stats.junyeon.special<=50&&s.stats.hyunsol.special<=60&&!s.flags.some(f=>f.startsWith('exclusive:'));}
export function haremChance(s:GameState,failures=0){
 if(!haremEligible(s))return 0;if(failures>=2)return 100;
 const uniqueFlags=[...new Set(s.flags)];
 const perfect=uniqueFlags.filter(f=>f==='team-success'||f.startsWith('team-success:')).length;
 const secretPromises=uniqueFlags.filter(f=>f==='secret-promise'||f.startsWith('secret-promise:')).length;
 return Math.min(75,Math.max(5,15+Math.min(30,perfect*5)+(s.global.harmony>=90?10:0)+(ids.every(id=>s.stats[id].trust>=80)?10:0)+(s.ngPlus?15:0)-ids.filter(id=>s.stats[id].jealousy>=25).length*5-secretPromises*10+(failures===1?20:0)));
}
export function seededRoll(seed:number){let t=(seed+0x6D2B79F5)|0;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296*100;}
export function commonBad(s:GameState):string|null{
 if(s.global.safety<=20&&s.flags.filter(f=>f.startsWith('safety-strike')).length>=3)return 'common-safety';
 if(s.global.ethics<=20&&s.flags.includes('data-fraud'))return 'common-fraud';
 if(ids.every(id=>s.stats[id].trust<25)&&s.chapter>=10)return 'common-alone';
 if(ids.reduce((n,id)=>n+s.stats[id].jealousy,0)/6>=70&&s.global.harmony<30)return 'common-war';
 return null;
}
export function finishScene(s:GameState,meta:Meta):GameState{
 let out=structuredClone(s);out.line=0;out.response=null;
 if(s.segment==='hangout'){
  const event=pendingEvent(out.flags,s.visitor!);
  if(event){const [, ,id,kind]=event.split(':');out.flags=out.flags.filter(flag=>flag!==event);out.flags.push(`event-seen:${id}:${kind}`);}
  out.visits[s.visitor!]+=1;out.visitedToday.push(s.visitor!);out.actions-=1;out.visitor=null;out.visitLocation=null;out.segment='common';out.phase='map';return out;
 }
 if(s.segment==='common'){
  out=applyEffects(out,ids.flatMap(target=>[{target,stat:'trust' as const,amount:1},{target,stat:'affection' as const,amount:1}]),[]);
  const bad=commonBad(out);if(bad)return {...out,phase:'ending',ending:bad};
  if(s.chapter===commonScenes.length-1){out.phase='routeSelect';out.haremChance=haremChance(out,meta.failures);out.haremOffered=out.haremChance>0&&seededRoll(out.seed)<out.haremChance;return out;}
  out.phase='map';out.actions=3;out.visitedToday=[];return out;
 }
 const scenes=s.segment==='harem'?haremScenes:routes[s.route!];
 if(s.routeChapter+1<scenes.length){out.routeChapter++;return out;}
 return {...out,phase:'ending',ending:resolveEnding(out)};
}
export function advance(s:GameState,meta:Meta):GameState{
 if(s.phase!=='story')return s;
 const lines=activeLines(s);
 if(s.line>=lines.length){if(s.response||activeScene(s).choices.length===0)return finishScene(s,meta);return s;}
 const out={...s,line:s.line+1,backlog:[...s.backlog,lines[s.line]].slice(-800)};
 if(out.response&&out.line>=lines.length)return finishScene(out,meta);
 if(!out.response&&out.line>=lines.length&&activeScene(out).choices.length===0)return finishScene(out,meta);
 return out;
}
export const nextDay=(s:GameState):GameState=>s.phase!=='map'||s.chapter>=commonScenes.length-1?s:({...s,phase:'story',segment:'common',chapter:s.chapter+1,line:0,response:null,visitor:null,visitLocation:null});
export const locationOf=(s:GameState,id:CharacterId)=>scheduledLocation(id,s.chapter,s.actions,s.seed);
export function visit(s:GameState,id:CharacterId,place?:LocationId):GameState{
 if(s.phase!=='map'||s.actions<=0||s.visitedToday.includes(id))return s;
 const expected=locationOf(s,id),location=place??expected;if(place&&place!==expected)return s;
 const ctx:TalkContext={id,location,chapter:s.chapter,visit:s.visits[id],stats:s.stats[id],flags:s.flags,seed:s.seed};
 const event=selectSuddenEvent(ctx),flags=event?[...s.flags,`pending-event:${id}:${event}`]:s.flags;
 return {...s,phase:place?'activity':'story',segment:'hangout',visitor:id,visitLocation:location,flags,line:0,response:null};
}
export const candidates=(s:GameState)=>ids.filter(id=>s.stats[id].affection>=50&&s.stats[id].trust>=40).sort((a,b)=>(s.stats[b].affection+s.stats[b].trust)-(s.stats[a].affection+s.stats[a].trust)).slice(0,2);
export function selectRoute(s:GameState,id:CharacterId|'harem'|'none'):GameState{
 if(s.phase!=='routeSelect')return s;
 if(id==='none')return {...s,phase:'ending',ending:s.global.fair<40?'common-unfinished':'normal'};
 if(id==='harem'&&!s.haremOffered)return s;if(id!=='harem'&&!candidates(s).includes(id))return s;
 return {...s,phase:'story',segment:id==='harem'?'harem':'route',route:id==='harem'?null:id,routeChapter:0,line:0,response:null};
}
export function resolveEnding(s:GameState):string{
 const bad=commonBad(s);if(bad)return bad;
 if(s.segment==='harem'){
  if(s.stats.world.special>=80)return 'harem-lonely';
  if(ids.reduce((n,id)=>n+s.stats[id].jealousy,0)/6>45||s.global.harmony<40)return 'harem-war';
  // Deliberately postponing the relationship is a real ending choice, not a lesser score.
  if(s.flags.includes('harem-pause'))return 'harem-good';
  if(ids.every(id=>s.stats[id].trust>=85&&s.stats[id].jealousy<=20)&&s.stats.world.special<=45&&s.flags.filter(f=>f.startsWith('harem-key-')).length>=4)return 'harem-true';
  return 'harem-good';
 }
 const id=s.route!;const p=s.stats[id];const keys=s.flags.filter(f=>f.startsWith(`${id}-key-`)).length;
 if(id==='world'&&p.special>=90&&ids.some(i=>i!=='world'&&s.stats[i].affection>=75))return 'world-bad2';
 if(id==='world'&&p.special>=80)return 'world-bad1';
 if(id==='junyeon'&&p.special>=75)return 'junyeon-bad1';
 if(id==='hyunsol'&&p.special>=80)return 'hyunsol-bad1';
 if(id==='taewoo'&&p.special>=85)return 'taewoo-bad1';
 if(id==='taehun'&&p.special<25)return 'taehun-bad1';
 if(id==='seoyul'&&p.trust<30)return 'seoyul-bad1';
 if(p.trust<35)return `${id}-bad2`;
 const specialOk=id==='world'?p.special<=60:id==='junyeon'?p.special<=40:id==='hyunsol'?p.special<=55:id==='taewoo'?p.special<=60:p.special>=60;
 if(p.affection>=80&&p.trust>=75&&p.jealousy<=35&&keys>=3&&specialOk&&s.global.ethics>=50&&s.global.safety>=40)return `${id}-true`;
 if(p.affection>=65&&p.trust>=50)return `${id}-good`;
 return `${id}-bad2`;
}
export function isGameState(s:unknown):s is GameState{
 if(!s||typeof s!=='object'||Array.isArray(s))return false;
 const v=s as GameState;
 const inRange=(value:unknown,min:number,max:number)=>typeof value==='number'&&Number.isFinite(value)&&value>=min&&value<=max;
 const integer=(value:unknown,min:number,max:number)=>Number.isInteger(value)&&inRange(value,min,max);
 const isLine=(value:unknown):value is Line=>{
  if(!value||typeof value!=='object'||Array.isArray(value))return false;
  const line=value as Line;
  return [...ids,'player','narrator','teacher','student'].includes(line.speaker)&&typeof line.text==='string';
 };
 if(v.version!==1||typeof v.name!=='string'||!validName(v.name)||!integer(v.seed,0,0xffffffff)
  ||!integer(v.chapter,0,commonScenes.length-1)||!integer(v.line,0,100000)
  ||!['story','activity','map','routeSelect','ending'].includes(v.phase)||!['common','route','hangout','harem'].includes(v.segment)
  ||!ids.every(id=>v.stats?.[id]&&(['affection','trust','jealousy','special'] as StatKey[]).every(k=>inRange(v.stats[id][k],0,100)))
  ||!(['harmony','fair','reputation','ethics','safety'] as GlobalKey[]).every(k=>inRange(v.global?.[k],0,100))
  ||!Array.isArray(v.flags)||!v.flags.every(flag=>typeof flag==='string')
  ||!Array.isArray(v.backlog)||v.backlog.length>800||!v.backlog.every(isLine)
  ||!(v.response===null||(Array.isArray(v.response)&&v.response.every(isLine)))
  ||!Array.isArray(v.visitedToday)||v.visitedToday.length>3||!v.visitedToday.every(id=>ids.includes(id))
  ||new Set(v.visitedToday).size!==v.visitedToday.length
  ||!ids.every(id=>integer(v.visits?.[id],0,commonScenes.length))
  ||!(v.route===null||ids.includes(v.route))||!(v.visitor===null||ids.includes(v.visitor))
  ||!(v.visitLocation===undefined||v.visitLocation===null||(typeof v.visitLocation==='string'&&Object.hasOwn(locationById,v.visitLocation)))
  ||!integer(v.routeChapter,0,5)||!integer(v.actions,0,3)
  ||typeof v.haremOffered!=='boolean'||!inRange(v.haremChance,0,100)||typeof v.ngPlus!=='boolean'
  ||typeof v.date!=='string'||!Number.isFinite(Date.parse(v.date))
  ||!(v.ending===null||(typeof v.ending==='string'&&Object.hasOwn(endingById,v.ending))))return false;
 if(v.segment==='route'&&(v.route===null||v.routeChapter>=routes[v.route].length))return false;
 if(v.segment==='hangout'&&(v.visitor===null||v.visitedToday.includes(v.visitor)))return false;
 if(v.phase==='activity'&&(v.segment!=='hangout'||v.visitor===null))return false;
 if(v.segment==='harem'&&v.routeChapter>=haremScenes.length)return false;
 // Validate indices only after all data used by activeScene has been checked.
 return v.line<=(v.response??activeScene(v).lines).length;
}
