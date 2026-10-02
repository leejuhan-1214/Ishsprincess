import {cutsceneEpisodes,episodeById,type CutsceneEpisode} from '../data/cutsceneEpisodes';
import {characterById,locationById} from '../data/characters';
import type {TalkContext} from './characterAI';
import type {CutsceneSpec} from './cutscenes';
import type {Scene} from '../types';
import {mainStoryThreads} from './relationshipDirector';
import {investigationThread} from '../data/storyContinuity';

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
 const sequence=cutsceneEpisodes.filter(item=>item.character===episode.character),index=sequence.findIndex(item=>item.id===episode.id);
 const chapterGate=[0,0,1,1,2,3,4][index]??0;
 const previous=index<=0||ctx.flags.includes(episodeSeenFlag(sequence[index-1].id));
 return episode.character===ctx.id&&episode.location===ctx.location&&ctx.chapter>=chapterGate&&previous
  &&ctx.stats.affection>=episode.affection&&ctx.stats.trust>=episode.trust
  &&!ctx.flags.includes(episodeSeenFlag(episode.id));
}
export function selectEpisode(ctx:TalkContext):CutsceneEpisode|null{
 // Earliest available vignette first; save/reload never rerolls or relocates a scene.
 return cutsceneEpisodes.find(episode=>episodeEligible(episode,ctx))??null;
}
export function episodeScene(episode:CutsceneEpisode,ctx:TalkContext):Scene{
 const id=episode.character,thread=ctx.investigating?investigationThread(ctx.chapter):mainStoryThreads[Math.min(ctx.chapter,mainStoryThreads.length-1)],place=locationById[episode.location].name;
 const bridge:Record<TalkContext['id'],string>={
  world:`“‘${thread.title}’ 때는 남들한테 보일 장면만 골랐지. 지금부터는 너한테만 보여 줄게.”`,
  junyeon:`“‘${thread.title}’ 뒤에 계속 연습했어. 이번에는 내 말로 끝까지 설명해 보고 싶어.”`,
  hyunsol:`“‘${thread.title}’에서 내 판단이 전부 맞았던 건 아니야. 확인할 장면이 하나 더 있어.”`,
  taewoo:`“‘${thread.title}’ 끝나고 만든 동작이야. 점수 말고 네 반응을 첫 기준으로 삼을래.”`,
  taehun:`“‘${thread.title}’의 기록 옆에 값으로 남지 않는 문장이 하나 생겼어. 같이 읽을래?”`,
  seoyul:`“‘${thread.title}’에서 지우지 못한 색이 있어. 완성하기 전에 네가 먼저 봐 줬으면 해.”`,
 };
 const pendingBridge:Record<TalkContext['id'],string>={
  world:'조사 얘기를 잠깐 내려놔도 될까? 이 장면은 원래 네게만 보여 주고 싶었어.',
  junyeon:'아직 확인할 것도 있지만, 이것도 내 말로 끝까지 설명해 보고 싶어. 잠깐 들어 줄래?',
  hyunsol:'결론은 아직 보류야. 지금은 내 앞에 있는 네 반응을 먼저 듣고 싶어.',
  taewoo:'그 표와는 별개로 네게 보여 주고 싶은 동작이 있어. 숫자 없이 봐 줄래?',
  taehun:'모르는 칸은 그대로 두고, 옆에 새 문장을 적고 싶어. 이건 내가 직접 들려줄게.',
  seoyul:'조사 자료하고 이 그림은 따로야. 지금 보여 줄 범위는 내가 골라 왔어.',
 };
 return {
  id:`episode:${episode.id}:${ctx.chapter}:${ctx.visit}`,cutsceneId:episode.id,title:episode.title,
  location:episode.location,day:0,
  lines:[{speaker:'narrator',text:`${thread.detail} ${ctx.investigating?'조사 사이에 잠시 쉬기로 한':'그날의 일이 끝난 뒤의'} ${place}. ${characterById[id].name} 쪽에서 먼저 조용히 나를 불렀다.`},{speaker:id,text:ctx.investigating?pendingBridge[id]:bridge[id]},{speaker:id,text:episode.question}],cutsceneAt:2,
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
