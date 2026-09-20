import {characterById} from './characters';
import {hangoutScene as createHangoutScene} from '../engine/characterAI';
import type {CharacterId,Scene} from '../types';

/** Compatibility helper for story-content audits and older save tooling. */
export function hangoutScene(id:CharacterId,visit:number,chapter:number):Scene{
 return createHangoutScene({
  id,
  location:characterById[id].location,
  chapter,
  visit,
  stats:{affection:45,trust:40,jealousy:10,special:id==='taehun'||id==='seoyul'?35:25},
  flags:[],
  seed:chapter*97+visit*13,
 });
}
