import {useEffect,useRef,useState} from 'react';
import {ArrowLeft,ArrowRight,Check,ChevronLeft,ChevronRight,Layers,MessageCircle,Pause,RotateCcw,Undo2} from 'lucide-react';
import {SchoolPortrait} from './SchoolPortrait';
import {TrialRevolver} from './TrialRevolver';
import {schoolById} from './data/classroomMystery';
import {artById,artPath} from './data/romanceArt';
import {memoryEvidence,romanceTrialRounds} from './data/romanceMystery';
import {trialComicPanels} from './data/romanceTrialExperience';
import {shuffleChoices} from './engine/choiceOrder';
import {continueArgument,submitArgument,submitReconstruction} from './engine/romance';
import {trialPrelude,solveTrialPrelude,trialSupport,solveTrialSupport} from './engine/trialExperience';
import {romancePeople,type RPerson,type RSpeaker,type RState} from './romanceTypes';
import type {EvidenceVisual} from './data/evidenceVisuals';
import './romanceTrialExperience.css';

type Props={game:RState;paused:boolean;onChange:(next:RState)=>void;onInspect:(id:string)=>void;onRebuttal:()=>void};
type Notice={ok:boolean;text:string;stage:string};
const nameOf=(speaker:RSpeaker,name:string)=>speaker==='player'?name:speaker==='teacher'?'담임 선생님':speaker==='alter'?'얼터에고':speaker==='narrator'?'기록':schoolById[speaker]?.name??'';
const visualFor=(id:string):EvidenceVisual=>{const clue=memoryEvidence.find(item=>item.id===id)!;return {id,image:clue.image,alt:`${clue.name}. ${clue.description}`,caption:'이야기 속 자료'};};

function Speaker({id,name}:{id:RSpeaker;name:string}){
 return romancePeople.includes(id as RPerson)?<SchoolPortrait id={id as RPerson}/>:<span className="rtx-speaker-symbol" aria-label={name}><MessageCircle size={24}/></span>;
}

/** The enhanced flow is confined to the existing fifth-chapter trial phase. */
export function RomanceTrialExperience(props:Props){
 if(props.game.phase!=='trial'||props.game.chapter!==4)return null;
 return <TrialExperience key={`${props.game.seed}:${props.game.name}:${props.game.trialRound}`} {...props}/>;
}

export default RomanceTrialExperience;

function TrialExperience({game,paused,onChange,onInspect,onRebuttal}:Props){
 const round=romanceTrialRounds[game.trialRound],prelude=trialPrelude(game),support=trialSupport(game);
 const [selected,setSelected]=useState<string[]>([]),[claim,setClaim]=useState<string|null>(null),[loaded,setLoaded]=useState<string|null>(null);
 const [notice,setNotice]=useState<Notice|null>(null),[singleSpeaker,setSingleSpeaker]=useState(false),[speakerIndex,setSpeakerIndex]=useState(0),[readingPaused,setReadingPaused]=useState(false);
 const [selectedSlot,setSelectedSlot]=useState<number|null>(null),[supportReply,setSupportReply]=useState('');
 const history=useRef<string[][]>([]),scrollArea=useRef<HTMLDivElement>(null),heading=useRef<HTMLHeadingElement>(null);
 const stage=prelude?`prelude:${prelude.id}`:support?`support:${support.id}`:!round?'reconstruction':game.trialFeedback?.ok?'conclusion':'evidence';
 const fmt=(value:string)=>value.replaceAll('{name}',game.name);
 const order=game.trialOrder;
 const evidence=shuffleChoices(memoryEvidence.filter(item=>game.clues.includes(item.id)),`${game.seed}:trial:evidence`).map(({value:item})=>({id:item.id,name:item.name,location:item.location,description:item.description,inspection:[]}));
 const visuals=Object.fromEntries(memoryEvidence.map(item=>[item.id,visualFor(item.id)]));
 const claimOrder=round?shuffleChoices(round.claims,`${game.seed}:${round.id}:claims`).map(({value})=>value):[];
 const panelOrder=shuffleChoices(trialComicPanels,`${game.seed}:reconstruction`).map(({value})=>value);
 const sources=prelude?prelude.kind==='comparison'?shuffleChoices(prelude.sources,`${game.seed}:${prelude.id}:sources`).map(({value})=>value):prelude.sources:[];
 const choiceList=prelude?shuffleChoices(prelude.choices,`${game.seed}:${prelude.id}:choices`).map(({value})=>value):support?shuffleChoices(support.choices,`${game.seed}:${support.id}:choices`).map(({value})=>value):[];
 const stageName=!round?'사건 재구성':prelude?.kind==='comparison'?'발언 대조':prelude?.kind==='panic'?'교차 토론':prelude?.kind==='alternative'?'설명 검토':support?'함께 정리':'증거 제시';
 const activeNotice=notice?.stage===stage?notice:null;

 useEffect(()=>{setSelected([]);setSpeakerIndex(0);setSelectedSlot(null);scrollArea.current?.scrollTo({top:0});heading.current?.focus({preventScroll:true});},[stage]);
 const toggle=(id:string,max:number)=>{
  setNotice(null);
  setSelected(current=>current.includes(id)?current.filter(value=>value!==id):max===1?[id]:current.length<max?[...current,id]:[...current.slice(1),id]);
 };
 function solvePrelude(){
  if(paused||!prelude)return;
  const result=solveTrialPrelude(game,selected);
  setNotice({ok:result.ok,text:result.text,stage});
  if(result.ok)onChange(result.state);
 }
 function solveSupport(){
  if(paused||!support)return;
  const result=solveTrialSupport(game,selected);
  setNotice({ok:result.ok,text:result.text,stage});
  if(result.ok){setSupportReply(result.text);onChange(result.state);}
 }
 function argue(){
  if(paused||!claim||!loaded)return;
  const next=submitArgument(game,claim,loaded);
  onChange(next);
  if(next!==game&&next.trialFeedback?.ok)onRebuttal();
 }
 function place(next:string[]){
  if(paused||game.trialFeedback)return;
  history.current.push([...order]);
  setSelectedSlot(null);
  onChange({...game,trialOrder:next});
 }
 function pickSlot(index:number){
  if(selectedSlot===null){setSelectedSlot(index);return;}
  if(selectedSlot===index){setSelectedSlot(null);return;}
  const next=[...order];
  [next[selectedSlot],next[index]]=[next[index],next[selectedSlot]];
  place(next);
 }
 function undo(){
  if(paused||game.trialFeedback)return;
  const previous=history.current.pop()??order.slice(0,-1);
  setSelectedSlot(null);
  onChange({...game,trialOrder:previous});
 }

 return <section className={`rtx-trial rtx-stage-${stage.split(':')[0]}`} aria-label="학급재판" inert={paused}>
  <header className="rtx-heading">
   <div className="rtx-heading-top"><span>학급재판</span><span>{round?`${game.trialRound+1} / ${romanceTrialRounds.length}`:'마지막 기록'}</span></div>
   <h1 ref={heading} tabIndex={-1}>{round?.title??'우리가 겪은 일을 순서대로'}</h1>
   <div className="rtx-step-label"><span aria-hidden="true"/>{stageName}<small>{prelude?.kind==='panic'?'시간 제한 없음':'원본과 발언을 함께 살펴보세요'}</small></div>
  </header>

  {prelude&&<>
   <div className="rtx-scroll rtx-prelude" ref={scrollArea}>
    <div className="rtx-prompt"><h2>{prelude.title}</h2><p>{fmt(prelude.prompt)}</p></div>
    {prelude.kind==='panic'&&<div className="rtx-reading-tools" aria-label="토론 읽기 설정">
     <button type="button" aria-pressed={singleSpeaker} onClick={()=>{setSingleSpeaker(value=>!value);setSpeakerIndex(0);}}><Layers size={16}/>{singleSpeaker?'한 명씩 읽는 중':'한 명씩 읽기'}</button>
     <button type="button" aria-pressed={readingPaused} onClick={()=>setReadingPaused(value=>!value)}><Pause size={16}/>{readingPaused?'강조 다시 켜기':'멈춰 읽기'}</button>
    </div>}
    <div className={`rtx-sources ${prelude.kind==='panic'?'rtx-panic':''} ${singleSpeaker&&prelude.kind==='panic'?'rtx-single-speaker':''} ${readingPaused?'rtx-reading-paused':''}`} aria-label={prelude.kind==='comparison'?'대조할 발언 선택':'토론 발언'}>
     {(singleSpeaker&&prelude.kind==='panic'?sources.slice(speakerIndex,speakerIndex+1):sources).map(source=>{
      const label=nameOf(source.speaker,game.name),body=<><Speaker id={source.speaker} name={label}/><span className="rtx-source-copy"><small>{label}</small><span>{fmt(source.text)}</span></span>{prelude.kind==='comparison'&&<span className="rtx-choice-mark" aria-hidden="true">{selected.includes(source.id)?<Check size={16}/>:null}</span>}</>;
      return prelude.kind==='comparison'?<button type="button" key={source.id} className="rtx-source" aria-pressed={selected.includes(source.id)} onClick={()=>toggle(source.id,prelude.requiredSelections)}>{body}</button>:<article className="rtx-source" key={source.id}>{body}</article>;
     })}
    </div>
    {singleSpeaker&&prelude.kind==='panic'&&<nav className="rtx-speaker-nav" aria-label="발언 차례">
     <button type="button" aria-label="이전 발언" disabled={speakerIndex===0} onClick={()=>setSpeakerIndex(index=>index-1)}><ChevronLeft size={20}/></button>
     <span role="status">{speakerIndex+1} / {sources.length}</span>
     <button type="button" aria-label="다음 발언" disabled={speakerIndex===sources.length-1} onClick={()=>setSpeakerIndex(index=>index+1)}><ChevronRight size={20}/></button>
    </nav>}
    {prelude.kind!=='comparison'&&<div className="rtx-options" aria-label="설명 선택">{choiceList.map(choice=><button type="button" key={choice.id} aria-pressed={selected.includes(choice.id)} onClick={()=>toggle(choice.id,prelude.requiredSelections)}><span className="rtx-choice-mark" aria-hidden="true">{selected.includes(choice.id)?<Check size={16}/>:null}</span><span>{fmt(choice.label)}</span></button>)}</div>}
   </div>
   <footer className="rtx-footer">
    {activeNotice&&<p className="rtx-notice" role="status">{fmt(activeNotice.text)}</p>}
    <div className="rtx-footer-actions"><span>{selected.length} / {prelude.requiredSelections} 선택</span><button type="button" className="r-primary" disabled={selected.length!==prelude.requiredSelections} onClick={solvePrelude}>생각 전하기<ArrowRight size={17}/></button></div>
   </footer>
  </>}

  {support&&<>
   <div className="rtx-scroll rtx-cooperation" ref={scrollArea}>
    <div className="rtx-verified"><small>확인한 사실</small><p>{fmt(game.trialFeedback?.text??'')}</p></div>
    <article className="rtx-witness"><Speaker id={support.witness.id} name={support.witness.name}/><div><small>{support.witness.name}</small><h2>{support.title}</h2><p>{fmt(support.witness.line)}</p></div></article>
    <p className="rtx-support-prompt">{fmt(support.prompt)}</p>
    <div className="rtx-options" aria-label="친구에게 건넬 말">{choiceList.map(choice=><button type="button" key={choice.id} aria-pressed={selected.includes(choice.id)} onClick={()=>toggle(choice.id,1)}><span className="rtx-choice-mark" aria-hidden="true">{selected.includes(choice.id)?<Check size={16}/>:null}</span><span>{fmt(choice.label)}</span></button>)}</div>
   </div>
   <footer className="rtx-footer">{activeNotice&&<p className="rtx-notice" role="status">{fmt(activeNotice.text)}</p>}<div className="rtx-footer-actions"><span>함께 다음 말을 준비해요</span><button type="button" className="r-primary" disabled={selected.length!==1} onClick={solveSupport}>대답하기<ArrowRight size={17}/></button></div></footer>
  </>}

  {!prelude&&!support&&round&&game.trialFeedback?.ok&&<>
   <div className="rtx-scroll rtx-conclusion" ref={scrollArea}>
    <span className="rtx-conclusion-icon" aria-hidden="true"><Check size={26}/></span><h2>함께 확인한 사실</h2>
    <p>{fmt(game.trialFeedback.text)}</p>
    {supportReply&&<div className="rtx-support-reply" role="status">{fmt(supportReply)}</div>}
   </div>
   <footer className="rtx-footer"><div className="rtx-footer-actions"><span>기록을 바탕으로 이어갑니다</span><button type="button" className="r-primary" onClick={()=>onChange(continueArgument(game))}>계속<ArrowRight size={17}/></button></div></footer>
  </>}

  {!prelude&&!support&&round&&!game.trialFeedback?.ok&&<>
   <div className="rtx-evidence-workspace">
    <div className="rtx-claims rtx-scroll" aria-label="확인할 발언" ref={scrollArea}>
     <h2>어떤 발언과 대조할까요?</h2>
     {claimOrder.map(item=><button type="button" key={item.id} className="rtx-source" disabled={!!game.trialFeedback} aria-pressed={claim===item.id} onClick={()=>setClaim(item.id)}><Speaker id={item.speaker} name={nameOf(item.speaker,game.name)}/><span className="rtx-source-copy"><small>{nameOf(item.speaker,game.name)}</small><span>{fmt(item.text)}</span></span><span className="rtx-choice-mark" aria-hidden="true">{claim===item.id?<Check size={16}/>:null}</span></button>)}
    </div>
    <TrialRevolver evidence={evidence} selected={loaded} disabled={!!game.trialFeedback||paused} onSelect={setLoaded} onInspect={onInspect} visuals={visuals}/>
   </div>
   <footer className="rtx-footer">
    {game.trialFeedback&&<p className="rtx-notice" role="status">{fmt(game.trialFeedback.text)}</p>}
    <div className="rtx-footer-actions"><span>{game.trialFeedback?'원본을 다시 살펴보세요':`${claim?'발언 선택됨':'발언 선택'} · ${loaded?'증거 장전됨':'증거 선택'}`}</span>{game.trialFeedback?<button type="button" className="r-primary" onClick={()=>onChange(continueArgument(game))}>다시 살펴보기<RotateCcw size={16}/></button>:<button type="button" className="r-primary" disabled={!claim||!loaded} onClick={argue}>증거 제시<ArrowRight size={17}/></button>}</div>
   </footer>
  </>}

  {!round&&<>
   <div className="rtx-scroll rtx-reconstruction" ref={scrollArea}>
    <p className="rtx-reconstruction-help">기록을 눌러 채워 주세요. 놓인 두 칸을 차례로 누르면 순서가 바뀝니다.</p>
    <div className="rtx-comic-board" aria-label="사건의 순서">
     {Array.from({length:4},(_,index)=>{const panel=trialComicPanels.find(item=>item.id===order[index]);return <button type="button" key={index} className={`rtx-comic-slot ${panel?'is-filled':'is-empty'}`} disabled={!panel||!!game.trialFeedback} aria-pressed={selectedSlot===index} aria-label={panel?`${index+1}번째 ${panel.title}, 순서 바꾸기`:`${index+1}번째 빈칸`} onClick={()=>pickSlot(index)}>
      <span className="rtx-panel-number">{index+1}</span>
      {panel?<><img src={`${import.meta.env.BASE_URL}${artPath(panel.art)}`} alt={artById(panel.art)?.alt??panel.caption}/><span className="rtx-panel-copy"><b>{panel.title}</b><span>{panel.caption}</span></span></>:<span>기록 선택</span>}
     </button>;})}
    </div>
    {selectedSlot!==null&&<div className="rtx-slot-actions"><p role="status">{selectedSlot+1}번째 기록을 선택했어요. 바꿀 칸을 누르세요.</p><button type="button" className="r-secondary" disabled={!!game.trialFeedback} onClick={()=>place(order.filter((_,index)=>index!==selectedSlot))}><ArrowLeft size={16}/>이 기록 빼기</button></div>}
    {order.length<4&&<div className="rtx-comic-choices" aria-label="놓을 기록 선택">{panelOrder.filter(panel=>!order.includes(panel.id)).map(panel=><button type="button" key={panel.id} disabled={!!game.trialFeedback} onClick={()=>place([...order,panel.id])}>
     <img src={`${import.meta.env.BASE_URL}${artPath(panel.art)}`} alt={artById(panel.art)?.alt??panel.caption}/><span className="rtx-panel-copy"><b>{panel.title}</b><span>{panel.caption}</span><small>{panel.records.map(id=>memoryEvidence.find(item=>item.id===id)?.name).filter(Boolean).join(' · ')}</small></span>
    </button>)}</div>}
   </div>
   <footer className="rtx-footer">
    {game.trialFeedback&&<p className="rtx-notice" role="status">{fmt(game.trialFeedback.text)}</p>}
    {game.trialFeedback?<div className="rtx-footer-actions"><span>놓은 기록은 그대로 남아 있어요</span><button type="button" className="r-primary" onClick={()=>onChange(continueArgument(game))}>다시 살펴보기<RotateCcw size={16}/></button></div>:<div className="rtx-reconstruction-actions"><button type="button" className="r-secondary" disabled={!order.length} onClick={undo}><Undo2 size={16}/>되돌리기</button><button type="button" className="r-secondary" disabled={!order.length} onClick={()=>place([])} aria-label="놓은 기록 모두 다시 놓기"><RotateCcw size={16}/><span>다시 놓기</span></button><button type="button" className="r-primary" disabled={order.length!==4} onClick={()=>onChange(submitReconstruction(game,order))}>확인<ArrowRight size={17}/></button></div>}
   </footer>
  </>}
 </section>;
}
