import {useState} from 'react';
import {ArrowRight,BookOpen,Check,MapPin,Search,Target} from 'lucide-react';
import type {Evidence} from './data/classroomMystery';
import {locationById} from './data/characters';
import {evidenceVisuals} from './data/evidenceVisuals';
import './trialRevolver.css';

type Props={evidence:Evidence[];total:number;title:string;onInspect:(id:string)=>void;onField:()=>void;onTrial:()=>void};
export function EvidenceNotebook({evidence,total,title,onInspect,onField,onTrial}:Props){
 const [selection,setSelection]=useState<string|null>(null);
 const selected=evidence.find(item=>item.id===selection)??evidence[0],visual=selected?evidenceVisuals[selected.id]:null;
 return <div className="classroom-investigation evidence-notebook">
  <header className="notebook-heading"><div><span className="trial-label">FIELD NOTES / {title}</span><h1><BookOpen size={23}/>사건의 조각들</h1></div><div className="notebook-count"><b>{evidence.length}<small> / {total}</small></b><span>확보한 증거</span></div></header>
  <div className="notebook-workspace">
   <nav className="notebook-index" aria-label="확보한 증거 목록">
    {evidence.map((entry,index)=><button type="button" key={entry.id} className={selected?.id===entry.id?'is-current':''} aria-pressed={selected?.id===entry.id} onClick={()=>setSelection(entry.id)}><span className="notebook-item-number">{String(index+1).padStart(2,'0')}</span><img src={`${import.meta.env.BASE_URL}${evidenceVisuals[entry.id].image}`} alt=""/><span className="notebook-item-copy"><b>{entry.name}</b><small><MapPin size={11}/>{locationById[entry.location].name}</small></span><Check size={14}/></button>)}
    {evidence.length===0&&<p className="notebook-empty">현장 조사에서 확인한 자료가 이곳에 기록됩니다.</p>}
   </nav>
   {selected&&visual?<article className="notebook-preview" key={selected.id}><div className="notebook-document"><img src={`${import.meta.env.BASE_URL}${visual.image}`} alt={visual.alt}/></div><div className="notebook-document-info"><div><small><MapPin size={12}/>{locationById[selected.location].name}에서 확보</small><h2>{selected.name}</h2><p>{selected.description}</p></div><button type="button" onClick={()=>onInspect(selected.id)}><Search size={15}/>확대 · 기록 · 저장</button></div></article>:<div className="notebook-blank"><Search size={36}/><h2>첫 단서를 찾아볼까요?</h2><p>학교 지도의 ‘현장 조사’를 따라가면<br/>직접 살펴볼 자료와 친구의 증언을 만날 수 있어요.</p><button className="trial-primary" onClick={onField}>현장 조사로<ArrowRight size={16}/></button></div>}
  </div>
  <footer className="notebook-footer"><button className="notebook-field-link" onClick={onField}><MapPin size={16}/>학교 지도로<ArrowRight size={16}/></button><button className="trial-primary" disabled={evidence.length!==total} onClick={onTrial}><Target size={17}/>{evidence.length===total?'학급재판 개정':`남은 증거 ${total-evidence.length}개`}</button></footer>
 </div>;
}
