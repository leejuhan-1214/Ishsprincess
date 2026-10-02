import {useEffect,useState} from 'react';
import {Download,ZoomIn,ZoomOut} from 'lucide-react';
import {evidenceVisuals} from './data/evidenceVisuals';
import './evidenceViewer.css';

/** Shared by location inspections and the collected-evidence notebook. */
export function EvidenceViewer({evidenceId}:{evidenceId:string}){
 const [zoomed,setZoomed]=useState(false);
 useEffect(()=>setZoomed(false),[evidenceId]);
 const visual=evidenceVisuals[evidenceId];
 if(!visual)return null;
 const source=`${import.meta.env.BASE_URL}${visual.image}`;
 return <figure className="evidence-viewer">
  <div className="evidence-viewer-toolbar">
   <span>자료 이미지</span>
   <div>
    <button type="button" aria-pressed={zoomed} onClick={()=>setZoomed(value=>!value)}>
     {zoomed?<ZoomOut size={18}/>:<ZoomIn size={18}/>} {zoomed?'원래 크기':'2배 확대'}
    </button>
    <a href={source} download={`${visual.id}.svg`}><Download size={18}/> 이미지 저장</a>
   </div>
  </div>
  <div className={`evidence-viewer-scroll${zoomed?' is-zoomed':''}`} tabIndex={zoomed?0:undefined}
   role={zoomed?'region':undefined} aria-label={zoomed?'확대된 증거 자료. 스크롤해서 모든 부분을 볼 수 있습니다.':undefined}>
   <img src={source} alt={visual.alt} width={1200} height={820} draggable={false}/>
  </div>
  <figcaption>{visual.caption}{zoomed&&<span> 확대 중 · 좌우와 위아래로 스크롤할 수 있어요.</span>}</figcaption>
 </figure>;
}
