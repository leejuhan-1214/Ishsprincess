import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {RomanceTrialExperience} from '../src/RomanceTrialExperience';
import {EvidenceViewer} from '../src/EvidenceViewer';
import {RebuttalBurst} from '../src/TrialRevolver';
import {newRomance,submitArgument,continueArgument,restoreRomance} from '../src/engine/romance';
import {solveTrialPrelude,solveTrialSupport,TRIAL_EXPERIENCE_EDITION} from '../src/engine/trialExperience';
import {memoryEvidence,romanceTrialRounds} from '../src/data/romanceMystery';
import {trialPreludeDefinitions,trialSupportDefinitions} from '../src/data/romanceTrialExperience';
import type {RState} from '../src/romanceTypes';
import '../src/styles.css';
import '../src/trialTheme.css';
import '../src/portraitFrames.css';
import '../src/viewport.css';
import '../src/romance.css';
import '../src/mobile.css';
import '../src/romanceTrialExperience.css';

if(!import.meta.env.DEV)throw new Error('Development preview only');
function fixture(round=0,legacy=false,trust=80):RState{
 const base=newRomance('검수',29);
 let s:RState={...base,chapter:4,act:0,phase:'trial',mode:'main',sceneKey:'main-5-1',location:'classroom',focus:'hyunsol',bonds:{...base.bonds,hyunsol:{affection:trust,trust}},clues:memoryEvidence.map(c=>c.id),flags:[...base.flags,'read:main-5-1','trial:convened',...(legacy?[]:[TRIAL_EXPERIENCE_EDITION])]};
 for(let i=0;i<round;i++){
  s=solveTrialPrelude(s,trialPreludeDefinitions[i].answer).state;
  s=submitArgument(s,romanceTrialRounds[i].target,romanceTrialRounds[i].evidence);
  s=solveTrialSupport(s,trialSupportDefinitions[i].answer).state;
  s=continueArgument(s);
 }
 return s;
}
function Preview(){
 const [game,setGame]=useState(()=>fixture()),[revision,setRevision]=useState(0),[inspect,setInspect]=useState<string|null>(null),[burst,setBurst]=useState(0);
 const reload=(round:number,legacy=false,trust=80)=>{setGame(fixture(round,legacy,trust));setRevision(v=>v+1);};
 const clue=memoryEvidence.find(c=>c.id===inspect);
 return <main className="romance-app in-game" style={{background:'#12111a'}}>
  <style>{`.trial-preview-tools{display:flex;gap:8px;align-items:center;padding:8px;flex-shrink:0;flex-wrap:wrap}.trial-preview-tools button,.trial-preview-tools select{color:#eee;background:#272334;border:1px solid #81738a;border-radius:4px;padding:8px;font-size:12px;min-height:36px}`}</style>
  <header className="trial-preview-tools">
   <select aria-label="검수 장면" defaultValue="0" onChange={e=>reload(Number(e.target.value))}><option value="0">진술 대조</option><option value="1">패닉 토론</option><option value="2">제3의 설명</option><option value="3">그림 재구성</option></select>
   <button onClick={()=>reload(0,true)}>이전 저장</button><button onClick={()=>reload(0,false,0)}>낮은 신뢰</button>
   <button onClick={()=>{const restored=restoreRomance(JSON.parse(JSON.stringify(game)));if(restored){setGame(restored);setRevision(v=>v+1);}}}>저장 복원</button>
  </header>
  {game.phase==='trial'?<RomanceTrialExperience key={revision} game={game} paused={!!inspect} onChange={setGame} onInspect={setInspect} onRebuttal={()=>setBurst(v=>v+1)}/>:<section><h1>재구성 완료</h1><p>당사자 설명 장면으로 정상 이동했습니다.</p></section>}
  {!!burst&&<RebuttalBurst key={`burst-${burst}`} eventId={String(burst)}/>}
  {clue&&<div role="dialog" aria-label="자료 확대" style={{position:'fixed',inset:12,zIndex:100,background:'#191623',overflow:'auto'}}><button onClick={()=>setInspect(null)}>자료 닫기</button><EvidenceViewer evidenceId={clue.id} visual={{id:clue.id,image:clue.image,alt:clue.description,caption:clue.name}}/></div>}
 </main>;
}
createRoot(document.getElementById('root')!).render(<Preview/>);
