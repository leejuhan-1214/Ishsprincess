import {BookOpen,Heart,RotateCcw} from 'lucide-react';
import {getEndingSummary} from './data/romanceEndings';
import {artById,artPath} from './data/romanceArt';
import {SchoolPortrait} from './SchoolPortrait';
import type {RState} from './romanceTypes';

export function RomanceEnding({game,paused,onLog,onGallery,onTitle}:{game:RState;paused:boolean;onLog:()=>void;onGallery:(id:string)=>void;onTitle:()=>void}){
 const ending=getEndingSummary(game),art=artById(ending.image);
 return <section className={`romance-ending ending-${ending.kind}`} inert={paused}>
  <div className="romance-ending-visual">{art?<img src={`${import.meta.env.BASE_URL}${artPath(art.id)}`} alt={art.alt}/>:ending.person?<SchoolPortrait id={ending.person}/>:<BookOpen size={64}/>}</div>
  <div className="romance-ending-copy"><small>{ending.subtitle}</small><h1>{ending.title}</h1><p>{ending.summary}</p><div className="romance-ending-afterword">{ending.afterword.map(line=><p key={line}>{line}</p>)}</div><div className="romance-inline">
   {art&&<button className="r-secondary" onClick={()=>onGallery(art.id)}><Heart size={16}/>그림 보기</button>}
   <button className="r-secondary" onClick={onLog}>대화 다시 보기</button><button className="r-primary" onClick={onTitle}>처음으로<RotateCcw size={16}/></button>
  </div></div>
 </section>;
}
