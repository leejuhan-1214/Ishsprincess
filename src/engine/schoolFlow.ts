import {caseFiles,type ExtraId,type SchoolId} from '../data/classroomMystery';
import {locationOf,advance,nextDay,visit,selectRoute,type GameState,type Meta} from './game';
import {newClassroomState,openCase,solvedCases,beginBond,bondAvailable,type ClassroomState} from './classroomMystery';
import type {CharacterId,LocationId} from '../types';

/** Incidents are part of the calendar, not opt-in side quests. */
export function requiredCase(game:GameState){
 if(game.segment!=='common'||!['map','routeSelect'].includes(game.phase))return null;
 const state=game.classroom??newClassroomState();
 return caseFiles.find(file=>game.chapter>=file.chapter&&state.cases[file.id].phase!=='solved')??null;
}
export function ensureRequiredCase(game:GameState):GameState{
 const file=requiredCase(game);if(!file||game.classroom?.active?.kind==='bond')return game;
 const state=game.classroom??newClassroomState();
 if(state.active?.kind==='case'&&state.active.id===file.id)return game;
 return {...game,classroom:openCase(state,file.id,game.chapter)};
}
export const advanceWithCases=(game:GameState,meta:Meta)=>ensureRequiredCase(advance(game,meta));
export const nextDayWithCases=(game:GameState,meta?:Meta)=>requiredCase(game)?ensureRequiredCase(game):nextDay(game,meta);
export const visitWithCases=(game:GameState,id:CharacterId,location?:LocationId)=>requiredCase(game)?ensureRequiredCase(game):visit(game,id,location);
export const selectRouteWithCases=(game:GameState,id:CharacterId|'harem'|'none')=>requiredCase(game)?ensureRequiredCase(game):selectRoute(game,id);
export function applyClassroom(game:GameState,state:ClassroomState):GameState{
 const gained=Math.max(0,solvedCases(state)-solvedCases(game.classroom??newClassroomState()));
 const stats={...game.stats};if(gained)for(const id of Object.keys(stats) as CharacterId[])stats[id]={...stats[id],trust:Math.min(100,stats[id].trust+2*gained)};
 return ensureRequiredCase({...game,classroom:state,stats,global:gained?{...game.global,harmony:Math.min(100,game.global.harmony+4*gained),fair:Math.min(100,game.global.fair+2*gained)}:game.global});
}
const schedules:Record<ExtraId,LocationId[]>={juhan:['computer','library','classroom','media','garden','cafeteria'],minhyuk:['classroom','gate','chemistry','auditorium','library','garden']};
export function schoolLocation(game:GameState,id:SchoolId):LocationId{
 if(id!=='juhan'&&id!=='minhyuk')return locationOf(game,id);
 const places=schedules[id],slot=Math.max(0,3-game.actions);
 return places[(game.chapter*3+slot+(game.seed%5)+(id==='minhyuk'?2:0))%places.length];
}
export function startSchoolBond(game:GameState,id:ExtraId,location:LocationId,activity=false):GameState{
 if(requiredCase(game)||game.phase!=='map'||game.actions<1||schoolLocation(game,id)!==location)return game;
 const before=game.classroom??newClassroomState();if(!bondAvailable(before,id,game.chapter))return game;
 const started=beginBond(before,id,game.chapter);
 const classroom={...started,active:started.active?.kind==='bond'?{...started.active,location}:started.active};
 return {...game,actions:game.actions-1,classroom:activity?{...classroom,activity:{id,chapter:game.chapter,location}}:classroom};
}
export function completeSchoolActivity(game:GameState,score:number):GameState{
 const state=game.classroom,a=state?.activity;if(!state||!a||state.active?.kind!=='bond'||state.active.id!==a.id)return game;
 const points=Number.isFinite(score)?Math.max(0,Math.min(3,Math.floor(score))):0,bond=state.bonds[a.id];
 const {activity:_,...rest}=state;
 return {...game,classroom:{...rest,bonds:{...state.bonds,[a.id]:{...bond,affection:Math.min(100,bond.affection+3+points*2),trust:Math.min(100,bond.trust+1+points*3)}}},global:{...game.global,fair:Math.min(100,game.global.fair+points)}};
}
