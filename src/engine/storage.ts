import {blankMeta,isGameState,type GameState,type Meta} from './game';
const prefix='reaction-v1:';
export type Save={state:GameState;savedAt:string};
export const readJSON=(key:string):unknown=>{try{return JSON.parse(localStorage.getItem(prefix+key)??'null');}catch{return null;}};
export const writeJSON=(key:string,data:unknown)=>{try{localStorage.setItem(prefix+key,JSON.stringify(data));return true;}catch{return false;}};
export function getSave(slot:string):Save|null{const v=readJSON('save:'+slot) as Save|null;return v&&isGameState(v.state)&&typeof v.savedAt==='string'?v:null;}
export function saveGame(slot:string,state:GameState){return writeJSON('save:'+slot,{state,savedAt:new Date().toISOString()});}
export function getMeta():Meta{const m=readJSON('meta') as Meta|null;return m&&Array.isArray(m.endings)&&Array.isArray(m.read)&&Array.isArray(m.attempted)&&typeof m.failures==='number'?m:blankMeta();}
export const storeMeta=(m:Meta)=>writeJSON('meta',m);
