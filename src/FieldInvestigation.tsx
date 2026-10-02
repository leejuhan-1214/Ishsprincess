import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,Check,MapPin,Search,X} from 'lucide-react';
import {locationById} from './data/characters';
import {schoolById,type CaseFile,type SchoolLine} from './data/classroomMystery';
import {investigationScenes,type EvidenceDiscovery} from './data/investigation';
import {EvidenceViewer} from './EvidenceViewer';
import {SchoolPortrait} from './SchoolPortrait';
import type {LocationId} from './types';
import './investigation.css';

function speakerName(line:SchoolLine,name:string){return line.speaker==='player'?name:line.speaker==='narrator'?'현장 기록':line.speaker==='alter'?'ALTER EGO':schoolById[line.speaker].name;}

export function InvestigationBrief({file,clues,available,name,onSelect,onTrial}:{file:CaseFile;clues:string[];available:EvidenceDiscovery[];name:string;onSelect:(location:LocationId)=>void;onTrial:()=>void}){
 const places=[...new Set(available.map(item=>file.evidence.find(e=>e.id===item.evidenceId)!.location))];
 const ready=file.evidence.every(e=>clues.includes(e.id));
 return <section className="investigation-brief" aria-label="현재 사건의 현장 조사">
  <div className="investigation-brief-title"><Search size={22}/><div><small>FIELD INVESTIGATION / CASE 0{file.number}</small><h2>{file.title}</h2></div><b>확보 {clues.length} / {file.evidence.length}</b></div>
  <p>친구와 만나는 자유 행동 중 현장을 조사하세요. 단서 확인은 행동을 쓰지 않으며, 다음 조사 대상은 발견에 따라 열립니다.</p>
  <div className="investigation-leads"><span>{ready?'모든 자료를 확보했어요. 재판에서 서로 대조할 차례입니다.':'지금 확인할 현장'}</span>{places.map(place=><button key={place} onClick={()=>onSelect(place)}><MapPin size={13}/>{locationById[place].name}<ArrowRight size={13}/></button>)}<button className="investigation-trial" disabled={!ready} onClick={onTrial}>학급재판으로<ArrowRight size={15}/></button></div>
  <details className="investigation-briefing"><summary>사건 이후, 우리 반이 정한 조사 방향</summary>{investigationScenes[file.id]?.briefing.map((line,index)=><p key={index}><b>{speakerName(line,name)}</b>{line.text.replaceAll('{name}',name)}</p>)}</details>
 </section>;
}

export function FieldInvestigation({file,discovery,name,onClose,onRegister}:{file:CaseFile;discovery:EvidenceDiscovery;name:string;onClose:()=>void;onRegister:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 const [step,setStep]=useState(0);
 const evidence=file.evidence.find(item=>item.id===discovery.evidenceId)!;
 const line=discovery.lines[step];
 const actor=line&&line.speaker!=='player'&&line.speaker!=='narrator'&&line.speaker!=='alter'?line.speaker:null;
 const final=step===discovery.lines.length-1;
 useEffect(()=>{const previous=document.activeElement as HTMLElement|null,overflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.current?.showModal();return()=>{document.body.style.overflow=overflow;previous?.focus();};},[]);
 return <dialog ref={dialog} className="field-investigation" aria-labelledby="field-title" onCancel={event=>{event.preventDefault();onClose();}}>
  <header><div><small>FIELD CHECK / {locationById[evidence.location].name}</small><h2 id="field-title">{discovery.spot}</h2></div><button onClick={onClose} aria-label="조사를 닫고 지도로 돌아가기"><X size={20}/></button></header>
  <div className="field-investigation-body"><div className="field-document"><EvidenceViewer evidenceId={evidence.id}/><details><summary>자료 설명</summary><p>{evidence.description}</p></details></div>
   <section className="field-conversation" aria-label="증거를 발견하는 대화"><span className="field-case">CASE 0{file.number} · {file.title}</span><div className="field-speaker">{actor&&<SchoolPortrait id={actor}/>}<b>{speakerName(line,name)}</b><small>{step+1} / {discovery.lines.length}</small></div><p className={line.speaker==='narrator'?'field-narration':''}>{line.text.replaceAll('{name}',name)}</p><div className="field-progress">{discovery.lines.map((_,index)=><i key={index} className={index<=step?'read':''}/>)}</div>
    <div className="field-actions"><button disabled={step===0} onClick={()=>setStep(value=>value-1)}><ArrowLeft size={15}/>이전</button>{final?<button className="field-register" onClick={onRegister}><Check size={16}/>수첩에 증거 등록</button>:<button className="field-register" onClick={()=>setStep(value=>value+1)}>다음 확인<ArrowRight size={16}/></button>}</div><small className="field-cost">현장 조사 · 행동 소모 없음{final?' · 등록하면 다음 조사 대상이 갱신됩니다.':''}</small>
   </section>
  </div>
 </dialog>;
}
