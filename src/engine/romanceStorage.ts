import type {RState} from '../romanceTypes';
import {restoreRomance} from './romance';

export type RomanceSlot='auto'|1|2|3|4|5|6|7|8|9|10;
export type RomanceSave={state:RState;savedAt:string};
export type RomanceSaveEntry=RomanceSave&{slot:RomanceSlot};
type Store=Pick<Storage,'getItem'|'setItem'>;
export const ROMANCE_STORAGE_PREFIX='reaction-romance-v2:';
const slots:RomanceSlot[]=['auto',1,2,3,4,5,6,7,8,9,10];
const validSlot=(slot:unknown):slot is RomanceSlot=>slots.includes(slot as RomanceSlot);
function defaultStore():Store|null{try{return globalThis.localStorage??null;}catch{return null;}}

export function saveRomance(slot:RomanceSlot,state:RState,storage:Store|null=defaultStore()):boolean{
 if(!validSlot(slot)||!storage)return false;
 const clean=restoreRomance(state);if(!clean)return false;
 try{storage.setItem(`${ROMANCE_STORAGE_PREFIX}${slot}`,JSON.stringify({state:clean,savedAt:new Date().toISOString()} satisfies RomanceSave));return true;}catch{return false;}
}
export function loadRomance(slot:RomanceSlot,storage:Store|null=defaultStore()):RomanceSave|null{
 if(!validSlot(slot)||!storage)return null;
 try{
  const raw=storage.getItem(`${ROMANCE_STORAGE_PREFIX}${slot}`);if(!raw)return null;
  const saved=JSON.parse(raw) as Partial<RomanceSave>;
  if(typeof saved.savedAt!=='string'||!Number.isFinite(Date.parse(saved.savedAt)))return null;
  const state=restoreRomance(saved.state);return state?{state,savedAt:saved.savedAt}:null;
 }catch{return null;}
}
export function listRomanceSaves(storage:Store|null=defaultStore()):RomanceSaveEntry[]{
 return slots.flatMap(slot=>{const saved=loadRomance(slot,storage);return saved?[{slot,...saved}]:[];});
}
