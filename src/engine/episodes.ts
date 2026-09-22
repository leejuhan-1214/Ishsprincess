import {cutsceneEpisodes,episodeById,type CutsceneEpisode} from '../data/cutsceneEpisodes';
import {characterById,locationById} from '../data/characters';
import type {TalkContext} from './characterAI';
import type {CutsceneSpec} from './cutscenes';
import type {Scene} from '../types';

export const episodeSeenFlag=(id:string)=>`episode-seen:${id}`;
export const episodePendingFlag=(id:string)=>`pending-episode:${id}`;
export function pendingEpisode(flags:string[],character:TalkContext['id']):CutsceneEpisode|null{
 for(const flag of flags){
  if(!flag.startsWith('pending-episode:'))continue;
  const episode=episodeById[flag.slice('pending-episode:'.length)];
  if(episode?.character===character)return episode;
 }
 return null;
}
export function episodeEligible(episode:CutsceneEpisode,ctx:TalkContext){
 return episode.character===ctx.id&&episode.location===ctx.location
  &&ctx.stats.affection>=episode.affection&&ctx.stats.trust>=episode.trust
  &&!ctx.flags.includes(episodeSeenFlag(episode.id));
}
export function selectEpisode(ctx:TalkContext):CutsceneEpisode|null{
 // Earliest available vignette first; save/reload never rerolls or relocates a scene.
 return cutsceneEpisodes.find(episode=>episodeEligible(episode,ctx))??null;
}
export function episodeScene(episode:CutsceneEpisode,ctx:TalkContext):Scene{
 const id=episode.character;
 return {
  id:`episode:${episode.id}:${ctx.chapter}:${ctx.visit}`,cutsceneId:episode.id,title:episode.title,
  location:episode.location,day:0,
  lines:[{speaker:id,text:episode.question}],
  choices:episode.choices.map((choice,index)=>({
   id:`${episode.id}-${index}`,label:choice.label,text:choice.text,
   response:[{speaker:id,text:choice.reply}],
   effects:[{target:id,stat:'affection',amount:choice.affection},{target:id,stat:'trust',amount:choice.trust},
    {target:id,stat:'special',amount:choice.trust<0?(id==='taehun'||id==='seoyul'?-5:5):(id==='taehun'||id==='seoyul'?4:-3)}],
   flags:[`personal:${id}`,`episode-choice:${episode.id}:${index}`],
  })),
 };
}
export function episodeCutscene(id:string):CutsceneSpec{
 const episode=episodeById[id];
 if(!episode)throw new Error(`Unknown cutscene episode: ${id}`);
 return {
  key:`episode:${id}`,label:'AFTER SCHOOL · SPECIAL MOMENT',title:episode.title,
  subtitle:`${characterById[episode.character].name} · ${locationById[episode.location].name}`,
  beats:episode.beats,background:locationById[episode.location].bg,mood:'event',character:episode.character,
  motif:episode.motif,props:episode.props,
  art:`cutscenes/${episode.id}`,
 };
}
export function episodeHint(episode:CutsceneEpisode){
 return `${locationById[episode.location].name} · 호감 ${episode.affection} 이상 · 신뢰 ${episode.trust} 이상`;
}
