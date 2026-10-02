import {useEffect,useRef,useState,type KeyboardEvent} from 'react';
import {ArrowRight,RotateCcw,Undo2,Pause,SkipForward} from 'lucide-react';
import {SchoolPortrait} from './SchoolPortrait';
import type {SchoolId} from './data/classroomMystery';
import {currentActivity,type GameState} from './engine/game';
import {isActivityAnswerCorrect,type Activity,type ActivityRound} from './engine/activities';
import './activities.css';

const modeNames:Record<ActivityRound['mode'],string>={timing:'박자 맞추기',memory:'패턴 기억',order:'순서 퍼즐',balance:'균형 조절',matching:'짝 맞추기',path:'경로 연결',search:'관찰 찾기'};
type Props={game?:GameState;person?:SchoolId;overrideActivity?:Activity;onFinish:(score:number)=>void;paused?:boolean};

export function ActivityScreen({game,person,overrideActivity,onFinish,paused=false}:Props){
 const activity=overrideActivity??(game?currentActivity(game):null);
 if(!activity)return null;
 return <ActivitySession key={activity.id} activity={activity} person={person??game?.visitor??'world'} onFinish={onFinish} paused={paused}/>;
}

function ActivitySession({activity,person,onFinish,paused}:{activity:Activity;person:SchoolId;onFinish:(score:number)=>void;paused:boolean}){
 const [round,setRound]=useState(0),[score,setScore]=useState(0),[result,setResult]=useState<boolean|null>(null),[attempt,setAttempt]=useState(0),[hidden,setHidden]=useState(document.hidden);
 const settled=useRef<boolean|null>(null),finished=useRef(false),heading=useRef<HTMLHeadingElement>(null),card=useRef<HTMLDivElement>(null);
 const challenge=activity.rounds[round],suspended=paused||hidden;
 useEffect(()=>{const onVisibility=()=>setHidden(document.hidden);document.addEventListener('visibilitychange',onVisibility);return()=>document.removeEventListener('visibilitychange',onVisibility);},[]);
 useEffect(()=>{heading.current?.focus({preventScroll:true});card.current?.scrollTo({top:0});},[round]);
 function settle(ok:boolean){if(suspended||settled.current!==null||finished.current)return;settled.current=ok;setResult(ok);if(ok)setScore(value=>Math.min(3,value+1));}
 function finish(){if(finished.current||suspended)return;finished.current=true;onFinish(score);}
 function next(){if(finished.current||suspended)return;if(round===activity.rounds.length-1){finish();return;}settled.current=null;setResult(null);setAttempt(0);setRound(value=>value+1);}
 function retry(){if(suspended||result!==false)return;settled.current=null;setResult(null);setAttempt(value=>value+1);}
 return <section className="activity-screen activity-v2" aria-label={`${activity.title} 미니게임`}>
  <div className="activity-card" ref={card}>
   <div className="activity-person"><SchoolPortrait id={person}/><span><small>AFTER SCHOOL / PLAY TOGETHER</small><b>{activity.title}</b></span><i>{activity.icon}</i></div>
   <div className="activity-round-status"><span>활동 {round+1} / {activity.rounds.length} · {modeNames[challenge.mode]}</span><span>성공 {score} / 3</span></div>
   <div className="activity-progress" aria-hidden="true">{activity.rounds.map((_,index)=><span key={index} className={`${index<round?'done':''} ${index===round?'current':''}`}/>)}</div>
   <p className="activity-subtitle">{activity.subtitle}</p>
   <details className="activity-help"><summary>함께하는 활동 안내</summary><p>{activity.context} 버튼은 터치하거나 Tab으로 이동한 뒤 Enter로 누를 수 있다. 타이머가 있는 화면도 다른 탭이나 메뉴를 열면 잠시 멈춘다.</p></details>
   <h2 ref={heading} tabIndex={-1}>{challenge.prompt}</h2>
   {suspended&&<p className="activity-paused" role="status"><Pause size={16}/>잠시 멈췄어요. 화면으로 돌아오면 이어집니다.</p>}
   <fieldset className="activity-board-fieldset" disabled={suspended||result!==null}>
    <RoundBoard key={`${round}:${attempt}`} round={challenge} paused={suspended||result!==null} settle={settle}/>
   </fieldset>
   {result!==null?<div className={`activity-feedback ${result?'success':'miss'}`} role="status"><b>{result?'둘의 호흡이 맞았다!':'조금 어긋났어. 다시 해도 괜찮아.'}</b><p>{result?challenge.explain:'이번 활동만 다시 시도할 수 있어. 서두르지 말고 하나씩 확인해 보자.'}</p><div className="activity-result-actions">{!result&&<button className="activity-secondary" onClick={retry} disabled={suspended}><RotateCcw size={16}/>이 활동 다시 하기</button>}<button className="primary" onClick={next} disabled={suspended}>{round===activity.rounds.length-1?'대화 이어가기':'다음 활동'}<ArrowRight size={16}/></button></div></div>:<div className="activity-navigation"><button type="button" onClick={next} disabled={suspended}><SkipForward size={15}/>이번 활동 건너뛰기</button><button type="button" onClick={finish} disabled={suspended}>여기까지 하고 대화하기</button></div>}
  </div>
 </section>;
}

function RoundBoard({round,paused,settle}:{round:ActivityRound;paused:boolean;settle:(ok:boolean)=>void}){
 const [position,setPosition]=useState(0),[balance,setBalance]=useState(round.mode==='balance'&&round.target<50?75:25),[entered,setEntered]=useState<number[]>([]),[ordered,setOrdered]=useState<string[]>([]);
 const [memoryState,setMemoryState]=useState<'idle'|'showing'|'ready'>('idle'),[memoryStep,setMemoryStep]=useState(0);
 const [left,setLeft]=useState<number|null>(null),[matches,setMatches]=useState<Record<number,string>>({}),[path,setPath]=useState<number[]>(round.mode==='path'?[round.start]:[]),[found,setFound]=useState<number[]>([]),[notice,setNotice]=useState('');
 const elapsed=useRef(0),positionNow=useRef(0);
 const heading=modeNames[round.mode];
 useEffect(()=>{
  if(round.mode!=='timing'||paused)return;
  let frame=0,previous=performance.now();const cycle=round.cycleMs;
  const tick=(now:number)=>{elapsed.current+=Math.min(60,now-previous);previous=now;const phase=(elapsed.current%cycle)/(cycle/2),value=phase<=1?phase*100:(2-phase)*100;positionNow.current=value;setPosition(value);frame=requestAnimationFrame(tick);};
  frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame);
 },[round.mode,paused]);
 useEffect(()=>{
  if(round.mode!=='memory'||memoryState!=='showing'||paused)return;
  const timer=window.setTimeout(()=>{if(memoryStep===round.pattern.length-1){setMemoryState('ready');setMemoryStep(0);}else setMemoryStep(step=>step+1);},950);
  return()=>window.clearTimeout(timer);
 },[round.mode,memoryState,memoryStep,paused]);
 function replay(){if(paused||round.mode!=='memory'||memoryState==='showing')return;setEntered([]);setMemoryStep(0);setMemoryState('showing');setNotice('');}
 function memoryPick(index:number){if(paused||round.mode!=='memory'||memoryState!=='ready'||entered.length>=round.pattern.length)return;setEntered(values=>[...values,index]);}
 function move(cell:number){
  if(paused||round.mode!=='path')return;
  if(path.length>1&&cell===path[path.length-2]){setPath(value=>value.slice(0,-1));setNotice('한 칸 되돌렸어요.');return;}
  const last=path[path.length-1];
  if(round.blocked.includes(cell)||path.includes(cell)||cell<0||cell>=round.size**2||Math.abs(Math.floor(cell/round.size)-Math.floor(last/round.size))+Math.abs(cell%round.size-last%round.size)!==1){setNotice('현재 위치에서 위·아래·왼쪽·오른쪽의 빈칸을 이어 주세요.');return;}
  setPath(value=>[...value,cell]);setNotice(cell===round.goal?'도착했어요! 아래 버튼으로 경로를 확인해 주세요.':'');
 }
 function keyboard(event:KeyboardEvent<HTMLDivElement>){
  if(paused||event.altKey||event.ctrlKey||event.metaKey)return;
  if(round.mode==='memory'&&/^[1-4]$/.test(event.key)){event.preventDefault();memoryPick(Number(event.key)-1);}
  if(round.mode==='path'&&['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();const last=path[path.length-1],offset={ArrowUp:-round.size,ArrowDown:round.size,ArrowLeft:-1,ArrowRight:1}[event.key]!;move(last+offset);}
 }
 function match(option:string){
  if(paused||round.mode!=='matching'||left===null)return;
  if(round.pairs[left].right!==option){setNotice('이 둘은 짝이 아니에요. 다른 카드를 골라 보세요.');return;}
  const next={...matches,[left]:option};setMatches(next);setLeft(null);setNotice('한 쌍을 연결했어요.');
  if(Object.keys(next).length===round.pairs.length)settle(isActivityAnswerCorrect(round,round.pairs.map((_,index)=>next[index])));
 }
 return <div className={`activity-play activity-${round.mode}`} onKeyDown={keyboard} aria-label={heading}>
  {round.mode==='timing'&&<><p className="activity-objective">분홍 구간에서 멈추기 · 시간 제한 없음</p><div className="timing-track"><i className="target" style={{left:`${round.target-round.tolerance}%`,width:`${round.tolerance*2}%`}}/><i className="timing-marker" style={{left:`${position}%`}}/></div><button type="button" className="activity-action" onClick={()=>settle(isActivityAnswerCorrect(round,positionNow.current))}>{round.action}</button></>}
  {round.mode==='memory'&&<><p className="activity-objective">{round.pattern.length}개를 같은 순서로 · 현재 {entered.length} / {round.pattern.length}</p><div className={`memory-display ${memoryState==='showing'?'showing':''}`} aria-live="polite">{memoryState==='showing'?<><i key={memoryStep}>{round.symbols[round.pattern[memoryStep]]}</i><small>{memoryStep+1} / {round.pattern.length}</small></>:entered.length?entered.map((value,index)=><i key={index}>{round.symbols[value]}</i>):<span>{memoryState==='idle'?'먼저 패턴을 확인해 주세요.':'같은 순서로 버튼을 눌러 주세요.'}</span>}</div><div className="memory-keys">{round.symbols.map((symbol,index)=><button type="button" key={symbol} disabled={memoryState!=='ready'||entered.length===round.pattern.length} onClick={()=>memoryPick(index)} aria-label={`${index+1}번 ${symbol}`}>{symbol}<small>{index+1}</small></button>)}</div><div className="activity-edit-actions"><button type="button" onClick={replay} disabled={memoryState==='showing'}><RotateCcw size={15}/>{memoryState==='idle'?'패턴 보기':'다시 보기'}</button><button type="button" disabled={!entered.length||memoryState==='showing'} onClick={()=>setEntered(values=>values.slice(0,-1))}><Undo2 size={15}/>한 칸 취소</button></div><button type="button" className="activity-action" disabled={entered.length!==round.pattern.length} onClick={()=>settle(isActivityAnswerCorrect(round,entered))}>기억한 순서 확인</button></>}
  {round.mode==='order'&&<><p className="activity-objective">설명에 맞게 {round.answer.length}단계 연결 · 확인 전까지 바꿀 수 있어요</p><div className="order-slots">{round.answer.map((_,index)=><span key={index}><small>{index+1}</small>{ordered[index]??'빈칸'}</span>)}</div><div className="order-cards">{round.items.map(item=><button type="button" key={item} disabled={ordered.includes(item)} onClick={()=>setOrdered(value=>[...value,item])}>{item}</button>)}</div><div className="activity-edit-actions"><button type="button" disabled={!ordered.length} onClick={()=>setOrdered(values=>values.slice(0,-1))}><Undo2 size={15}/>한 칸 취소</button><button type="button" disabled={!ordered.length} onClick={()=>setOrdered([])}><RotateCcw size={15}/>처음부터</button></div><button type="button" className="activity-action" disabled={ordered.length!==round.answer.length} onClick={()=>settle(isActivityAnswerCorrect(round,ordered))}>{round.action}</button></>}
  {round.mode==='balance'&&<><p className="activity-objective">기준 {round.target-round.tolerance}~{round.target+round.tolerance} · 현재 {balance}</p><div className="balance-labels"><span>{round.left}</span><span>{round.right}</span></div><div className="balance-wrap"><i style={{left:`${round.target-round.tolerance}%`,width:`${round.tolerance*2}%`}}/><input aria-label="균형 조절" type="range" min="0" max="100" value={balance} onChange={event=>setBalance(Number(event.target.value))}/></div><button type="button" className="activity-action" onClick={()=>settle(isActivityAnswerCorrect(round,balance))}>{round.action}</button></>}
  {round.mode==='matching'&&<><p className="activity-objective">왼쪽 카드 → 맞는 오른쪽 카드 · 연결 {Object.keys(matches).length} / {round.pairs.length}</p><div className="matching-board"><div>{round.pairs.map((pair,index)=><button type="button" key={pair.left} className={`${left===index?'selected':''} ${matches[index]?'matched':''}`} aria-pressed={left===index} disabled={!!matches[index]} onClick={()=>{setLeft(index);setNotice('오른쪽에서 맞는 설명을 골라 주세요.');}}>{pair.left}{matches[index]&&<span>연결됨 ✓</span>}</button>)}</div><div>{round.options.map(option=><button type="button" key={option} className={Object.values(matches).includes(option)?'matched':''} disabled={left===null||Object.values(matches).includes(option)} onClick={()=>match(option)}>{option}{Object.values(matches).includes(option)&&<span>연결됨 ✓</span>}</button>)}</div></div></>}
  {round.mode==='path'&&<><p className="activity-objective">상하좌우로 연결 · 방향키 또는 칸 누르기 · 막힌 칸 ■</p><div className="path-board" style={{gridTemplateColumns:`repeat(${round.size},1fr)`}}>{Array.from({length:round.size**2},(_,cell)=>{const step=path.indexOf(cell),blocked=round.blocked.includes(cell);return <button type="button" key={cell} className={`${step>=0?'on-path':''} ${cell===path[path.length-1]?'current':''} ${cell===round.goal?'goal':''}`} disabled={blocked} onClick={()=>move(cell)} aria-label={`${Math.floor(cell/round.size)+1}행 ${cell%round.size+1}열 ${blocked?'막힘':cell===round.start?'출발':cell===round.goal?'도착':step>=0?`${step+1}번째 경로`:'빈칸'}`}>{blocked?'■':cell===round.start?'출발':cell===round.goal?'도착':step>=0?step:'·'}</button>;})}</div><div className="activity-edit-actions"><button type="button" disabled={path.length<2} onClick={()=>{setPath(value=>value.slice(0,-1));setNotice('');}}><Undo2 size={15}/>한 칸 취소</button><button type="button" onClick={()=>{setPath([round.start]);setNotice('');}}><RotateCcw size={15}/>처음부터</button></div><button type="button" className="activity-action" disabled={path[path.length-1]!==round.goal} onClick={()=>settle(isActivityAnswerCorrect(round,path))}>{round.action}</button></>}
  {round.mode==='search'&&<><p className="activity-objective">찾을 표시 <strong>{round.target}</strong> · 발견 {found.length} / {round.items.filter(item=>item===round.target).length}</p><div className="search-board">{round.items.map((item,index)=><button type="button" key={index} className={found.includes(index)?'found':''} disabled={found.includes(index)} aria-label={`${index+1}번 ${item}${found.includes(index)?' 찾음':''}`} onClick={()=>{if(item!==round.target){setNotice(`‘${round.target}’ 표시를 찾아 주세요. 시간 제한은 없어요.`);return;}setFound(value=>[...value,index]);setNotice('하나 찾았어요.');}}>{found.includes(index)?'✓':item}</button>)}</div><button type="button" className="activity-action" disabled={found.length!==round.items.filter(item=>item===round.target).length} onClick={()=>settle(isActivityAnswerCorrect(round,found))}>{round.action}</button></>}
  <p className="activity-notice" aria-live="polite">{notice||'천천히 확인해도 괜찮아요.'}</p>
 </div>;
}
