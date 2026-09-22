import type {CSSProperties} from 'react';
import {Play,Check} from 'lucide-react';
import {characters,characterById} from './data/characters';
import {cutsceneEpisodes,type EpisodeMotif} from './data/cutsceneEpisodes';
import {episodeCutscene,episodeHint,episodeSeenFlag} from './engine/episodes';
import type {CutsceneSpec} from './engine/cutscenes';
import type {CharacterId} from './types';
import './cutsceneDetails.css';

/** Animated stage props reuse the game's illustration style without pretending to be new CG. */
export function CutsceneProps({motif,caption,beat}:{motif:EpisodeMotif;caption:string;beat:number}){
 return <div className={`cinema-prop cinema-${motif} cinema-beat-${beat}`} aria-hidden="true">
  <svg viewBox="0 0 360 240" fill="none" stroke="currentColor" strokeWidth="1.4">
   {motif==='ticket'&&<g className="prop-float"><path d="M52 53H308V100Q280 120 308 140V187H52V140Q80 120 52 100Z"/><path d="M250 53V187" strokeDasharray="4 7"/><path d="M90 87H217M90 100H168M90 151H209"/><circle cx="205" cy="132" r="10"/></g>}
   {motif==='wave'&&<g>{Array.from({length:27},(_,i)=><path className="prop-wave" key={i} d={`M${24+i*12} ${120-(12+(i*23)%65)}V${120+(12+(i*23)%65)}`} style={{animationDelay:`${i*-.11}s`}}/>)}</g>}
   {motif==='note'&&<g className="prop-float"><path d="M91 26H256L279 51V217H91Z"/><path d="M256 26V51H279M116 72H245M116 95H236M116 118H249M116 141H208"/><path className="prop-draw" d="M123 177Q162 144 188 178T251 176"/></g>}
   {motif==='frame'&&<g><path d="M48 37H312V203H48Z"/><path d="M64 53H296V187H64Z"/><circle className="prop-sun" cx="252" cy="85" r="20"/><path className="prop-draw" d="M65 171L118 113L177 171L221 131L295 184"/><path d="M36 22V49M22 36H49M311 217H338M325 204V231"/></g>}
   {motif==='screen'&&<g><rect x="38" y="31" width="284" height="164" rx="9"/><path d="M38 61H322M140 215H220M180 195V215"/><circle cx="53" cy="46" r="3"/><circle cx="65" cy="46" r="3"/><path d="M60 82H140M60 96H111"/><path className="prop-draw" d="M61 161L102 136L140 152L184 113L229 128L288 85"/><path className="prop-cursor" d="M210 142L210 170L219 162L228 179L235 174L225 158L238 157Z"/></g>}
   {motif==='cards'&&<g>{[0,1,2].map(i=><g key={i} className="prop-card" style={{animationDelay:`${i*.2}s`}} transform={`translate(${50+i*87},${62-i*8}) rotate(${i*7-7} 42 64)`}><rect width="78" height="124" rx="4"/><path d="M13 23H65M13 38H58M13 53H65M13 94H49"/></g>)}</g>}
   {motif==='glass'&&<g><path d="M101 32H163M109 32V89L71 179Q67 201 90 205H251Q274 201 270 179L232 89V32M224 32H240"/><path className="prop-liquid" d="M93 145Q131 132 170 145T249 145V186H90Z"/><path d="M233 66H219M233 83H222M245 119H229M252 137H239"/><circle className="prop-bubble" cx="135" cy="176" r="5"/><circle className="prop-bubble" cx="205" cy="166" r="8"/></g>}
   {motif==='dots'&&<g>{[0,1,2,3,4,5,6].map(i=><g key={i} className="prop-dot" style={{animationDelay:`${i*.15}s`}}><circle cx={72+i*36} cy={155-Math.abs(3-i)*23} r="12"/><path d={`M${72+i*36} ${171-Math.abs(3-i)*23}v12`}/></g>)}<path d="M40 202H320M180 36V66" strokeDasharray="4 5"/></g>}
   {motif==='ribbon'&&<g><path className="prop-draw" d="M25 150Q77 28 174 119Q240 185 273 81Q292 27 230 66Q169 107 180 146Q169 74 112 74Q48 74 105 116Q145 137 180 119L280 201M180 119L117 214"/><path className="prop-float" d="M218 117Q249 105 271 132Q265 163 242 185Q215 160 218 117Z"/></g>}
   {motif==='steps'&&<g>{[0,1,2,3,4,5,6,7].map(i=><g key={i} className="prop-step" style={{animationDelay:`${i*.3}s`}} transform={`translate(${50+i*35},${i%2?125:75}) rotate(-20)`}><rect width="17" height="30" rx="8"/><path d="M0 36H17"/></g>)}</g>}
   {motif==='orbit'&&<g><ellipse cx="180" cy="120" rx="147" ry="66" transform="rotate(-22 180 120)"/><circle cx="180" cy="120" r="36"/><g className="prop-orbit"><circle cx="309" cy="74" r="7" fill="currentColor"/></g><path d="M58 38V54M50 46H66M298 174V194M288 184H308M108 177V191M101 184H115"/></g>}
   {motif==='prism'&&<g><path d="M180 40L269 187H91ZM180 40V149L91 187M180 149L269 187"/><path className="prop-draw" d="M28 134L140 106L222 117L327 91M225 125L330 123M229 133L332 155"/><path d="M67 191L288 191" strokeDasharray="3 8"/></g>}
   {motif==='map'&&<g><path d="M40 57L133 34L227 65L320 40V185L227 209L133 178L40 203ZM133 34V178M227 65V209"/><path className="prop-draw" d="M70 166Q100 61 164 132T290 85" strokeDasharray="5 6"/><circle cx="70" cy="166" r="6"/><circle className="prop-dot" cx="290" cy="85" r="9"/></g>}
   {motif==='clock'&&<g><circle cx="180" cy="120" r="84"/><circle cx="180" cy="120" r="4"/><path d="M180 46V57M180 183V195M106 120H117M244 120H255M180 120L145 91"/><path className="prop-hand" d="M180 120V65"/></g>}
  </svg>
  <span>{caption}</span><small>RE:ACTION / MOMENT {String(beat+1).padStart(2,'0')}</small>
 </div>;
}

export function EpisodeGallery({flags,onPlay,character,onCharacter}:{flags:string[];onPlay:(spec:CutsceneSpec)=>void;character:CharacterId;onCharacter:(id:CharacterId)=>void}){
 const episodes=cutsceneEpisodes.filter(item=>item.character===character);
 return <div className="episode-gallery">
  <p className="episode-intro">장면 일러스트 42개 · 캐릭터별 7개 · 이야기의 결정적인 한순간을 담은 정지 컷<br/>미리보기는 관계 수치나 게임 진행을 바꾸지 않습니다. 게임에서는 아래 장소·관계 조건을 만족하면 한 번씩 발생합니다.</p>
  <div className="cast-tabs" aria-label="컷씬 캐릭터">{characters.map(c=><button key={c.id} className={character===c.id?'active':''} onClick={()=>onCharacter(c.id)} aria-pressed={character===c.id}>{c.name}</button>)}</div>
  <div className="episode-grid">{episodes.map((episode,index)=>{
   const seen=flags.includes(episodeSeenFlag(episode.id));
   return <article className="episode-card" key={episode.id} style={{'--episode-color':characterById[character].color} as CSSProperties}>
    <div className="episode-thumbnail episode-still-thumbnail" style={{backgroundImage:`url(${import.meta.env.BASE_URL}assets/cutscenes/${episode.id}.webp)`}}><span>{String(index+1).padStart(2,'0')}</span><small>SCENE STILL</small></div>
    <div><small>{seen?<><Check size={12}/> 이 회차에서 완료</>:'SPECIAL MOMENT'}</small><h3>{episode.title}</h3><p>{episodeHint(episode)}</p><button className="secondary" onClick={()=>onPlay(episodeCutscene(episode.id))} aria-label={`${episode.title} 컷씬 재생`}><Play size={14}/>컷씬 재생</button></div>
   </article>;
  })}</div>
 </div>;
}
