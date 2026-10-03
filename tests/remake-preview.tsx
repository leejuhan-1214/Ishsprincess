// Development-only component fixture; no save writes and no production entry.
import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import RomanceActivity from '../src/RomanceActivity';
import {RomanceEnding} from '../src/RomanceEnding';
import {newRomance} from '../src/engine/romance';
import type {RState} from '../src/romanceTypes';
import '../src/styles.css';
import '../src/romance.css';
import '../src/mobile.css';
function Fixture(){
 const [view,setView]=useState('ending'),[result,setResult]=useState<number|null>(null);
 const ending:RState={...newRomance('검증',77),chapter:4,phase:'ending',focus:'taewoo',flags:['romance:taewoo'],ending:'romance:taewoo:forgive'};
 return <main className="romance-app"><header className="romance-header"><nav style={{display:'flex',gap:10}}>{['ending','ratio','compare'].map(id=><button key={id} style={{minHeight:44,color:'white',background:'#302333',border:'1px solid #ae8ea0'}} onClick={()=>{setResult(null);setView(id);}}>{id==='ending'?'엔딩':id==='ratio'?'비율 맞추기':'기록 대조'}</button>)}</nav></header>{view==='ending'?<RomanceEnding game={ending} paused={false} onLog={()=>{}} onGallery={()=>{}} onTitle={()=>{}}/>:result===null?<RomanceActivity key={view} person={view==='ratio'?'hyunsol':'taewoo'} chapter={view==='ratio'?0:1} encounter={1} seed={77} onFinish={setResult}/>:<p role="status">완료 점수 {result}</p>}</main>;
}
createRoot(document.getElementById('root')!).render(<Fixture/>);
