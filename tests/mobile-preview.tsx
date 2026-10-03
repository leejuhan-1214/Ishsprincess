// Manual responsive fixture, excluded from the production index.html build.
import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {TrialRevolver} from '../src/TrialRevolver';
import {memoryEvidence} from '../src/data/romanceMystery';
import '../src/styles.css';
import '../src/romance.css';
import '../src/mobile.css';
function Fixture(){
 const [selected,setSelected]=useState<string|null>(null),[inspected,setInspected]=useState('');
 const evidence=memoryEvidence.map(c=>({id:c.id,name:c.name,location:c.location,description:c.description,inspection:[]}));
 const visuals=Object.fromEntries(memoryEvidence.map(c=>[c.id,{id:c.id,image:`../${c.image}`,alt:c.name,caption:'검사용 자료'}]));
 return <main className="romance-app"><header className="romance-header">모바일 패널 검사</header><section className="romance-trial"><header><h1>자료를 함께 확인하기</h1></header><div className="romance-trial-body"><div className="romance-claims"><h2>확인할 발언</h2>{[1,2,3].map(i=><button key={i}><small>친구 {i}</small><p>같은 약속을 서로 다른 시간으로 알고 있었다. 각자 받은 안내를 나란히 확인해 보자.</p></button>)}<button className="r-primary">증거 제시</button></div><TrialRevolver evidence={evidence} selected={selected} onSelect={setSelected} onInspect={setInspected} visuals={visuals}/><div className="romance-mobile-submit"><button className="r-primary">증거 제시</button></div></div><p role="status">{inspected?'원본 열기 입력 확인':''}</p></section></main>;
}
createRoot(document.getElementById('root')!).render(<Fixture/>);
