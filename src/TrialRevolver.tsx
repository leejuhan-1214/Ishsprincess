import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {ChevronLeft,ChevronRight,Crosshair,Search} from 'lucide-react';
import type {Evidence} from './data/classroomMystery';
import {evidenceVisuals,type EvidenceVisual} from './data/evidenceVisuals';
import './trialRevolver.css';

type Props={evidence:Evidence[];selected:string|null;disabled:boolean;onSelect:(id:string)=>void;onInspect:(id:string)=>void;visuals?:Record<string,EvidenceVisual>};

/** The cylinder is an alternative evidence selector, never a timing challenge. */
export function TrialRevolver({evidence,selected,disabled,onSelect,onInspect,visuals=evidenceVisuals}:Props){
 const current=Math.max(0,evidence.findIndex(item=>item.id===selected));
 const item=evidence[current],visual=item?visuals[item.id]:null;
 const rotation=useRef(0),previous=useRef(current);
 if(previous.current!==current){
  const count=evidence.length,difference=((current-previous.current+count+count/2)%count)-count/2;
  rotation.current-=difference*360/count;
  previous.current=current;
 }
 if(!item||!visual)return null;
 const choose=(offset:number)=>onSelect(evidence[(current+offset+evidence.length)%evidence.length].id);
 return <section className="trial-revolver" aria-label="증거 말 탄환">
  <header><Crosshair size={17}/><div><b>말 탄환</b><small>자료를 골라 발언의 모순에 제시하세요</small></div><span>{current+1} / {evidence.length}</span></header>
  <div className="revolver-assembly">
   <div className="revolver-loader">
    <div className="revolver-cylinder" role="group" aria-label="회전 약실에서 증거 선택" style={{'--cylinder-turn':`${rotation.current}deg`,'--cylinder-counter-turn':`${-rotation.current}deg`} as CSSProperties} onKeyDown={event=>{if(disabled||!['ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();choose(event.key==='ArrowRight'?1:-1);}}>
     <div className="revolver-rotor">
      {evidence.map((entry,index)=>{const angle=index/evidence.length*Math.PI*2;return <button key={entry.id} className={`revolver-chamber${entry.id===selected?' is-loaded':''}`} style={{left:`${50+Math.sin(angle)*34}%`,top:`${50-Math.cos(angle)*34}%`} as CSSProperties} aria-label={`${entry.name} 말 탄환 장전`} aria-pressed={entry.id===selected} disabled={disabled} onClick={()=>onSelect(entry.id)}><i aria-hidden="true"/><span>{String(index+1).padStart(2,'0')}</span></button>;})}
     </div>
     <div className="revolver-hub" aria-hidden="true"><Crosshair size={26}/><small>EVIDENCE</small></div>
    </div>
    <div className="revolver-navigation"><button type="button" disabled={disabled} onClick={()=>choose(-1)} aria-label="이전 말 탄환"><ChevronLeft size={18}/></button><span>약실 회전</span><button type="button" disabled={disabled} onClick={()=>choose(1)} aria-label="다음 말 탄환"><ChevronRight size={18}/></button></div>
   </div>
   <div className="loaded-evidence" aria-live="polite" aria-atomic="true">
    <button className="loaded-evidence-image" onClick={()=>onInspect(item.id)} aria-label={`${item.name} 이미지 확대`}><img src={`${import.meta.env.BASE_URL}${visual.image}`} alt={visual.alt}/><span><Search size={13}/>자료 확대</span></button>
    <div className="loaded-evidence-copy"><small>{selected?'장전한 증거':'약실을 눌러 장전'} · {String(current+1).padStart(2,'0')}</small><h2>{item.name}</h2><p>{item.description}</p></div>
   </div>
  </div>
 </section>;
}

/** The result remains readable underneath; animation never delays progression. */
export function RebuttalBurst({eventId}:{eventId:string}){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{setVisible(true);const timer=window.setTimeout(()=>setVisible(false),1100);return()=>window.clearTimeout(timer);},[eventId]);
 return visible?<div className="rebuttal-burst" aria-hidden="true"><div className="rebuttal-slash"/><div className="rebuttal-word"><span>모순을 밝혀냈다</span><strong>논파</strong><small>RE:ACTION / COUNTERARGUMENT</small></div></div>:null;
}
