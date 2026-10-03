import {useEffect,useMemo,useRef,useState} from 'react';
import {ArrowRight,Check,Heart,Music2,Pause,Play,RotateCcw,SkipForward,Undo2,Volume2} from 'lucide-react';
import type {RPerson} from './romanceTypes';
import {activityKindNames,compositionIsValid,debugIsValid,getRomanceActivity,packingIsValid,rhythmIsValid,starPathIsValid,type ActivityTask,type RomanceActivityData} from './data/romanceActivities';
import './romanceActivities.css';

type Props={person:RPerson;chapter:number;encounter:1|2;seed:number;paused?:boolean;onFinish:(score:number)=>void};
type Result={ok:boolean;detail:string};
type BoardProps<T extends ActivityTask>={task:T;paused:boolean;settle:(ok:boolean,detail?:string)=>void};
const names:Record<RPerson,string>={world:'전세계',hyunsol:'최현솔',taewoo:'김태우',taehun:'고태훈',seoyul:'이서율',juhan:'이주한',minhyuk:'황민혁',junyeon:'방준연'};

export default function RomanceActivity({person,chapter,encounter,seed,paused=false,onFinish}:Props){
 const activity=useMemo(()=>getRomanceActivity(person,chapter,encounter,seed),[person,chapter,encounter,seed]);
 return <ActivitySession key={activity.id} activity={activity} paused={paused} onFinish={onFinish}/>;
}
function ActivitySession({activity,paused,onFinish}:{activity:RomanceActivityData;paused:boolean;onFinish:(score:number)=>void}){
 const [result,setResult]=useState<Result|null>(null),[attempt,setAttempt]=useState(0),[hidden,setHidden]=useState(document.hidden);
 const finished=useRef(false),settled=useRef(false),heading=useRef<HTMLHeadingElement>(null);
 const suspended=paused||hidden;
 useEffect(()=>{heading.current?.focus({preventScroll:true});const watch=()=>setHidden(document.hidden);document.addEventListener('visibilitychange',watch);return()=>document.removeEventListener('visibilitychange',watch);},[]);
 function settle(ok:boolean,detail=''){if(suspended||settled.current||finished.current)return;settled.current=true;setResult({ok,detail});}
 function finish(score:number){if(suspended||finished.current)return;finished.current=true;onFinish(score);}
 function retry(){if(suspended||finished.current)return;settled.current=false;setResult(null);setAttempt(value=>value+1);}
 return <section className="romance-together" aria-label={`${names[activity.person]}와 ${activity.title}`}>
  <div className="rt-card">
   <header className="rt-header"><span className="rt-kicker"><Heart size={14}/>AFTER SCHOOL / 둘이 해 보는 일</span><span className="rt-person">{names[activity.person]}</span><h2 ref={heading} tabIndex={-1}>{activity.title}</h2><span className="rt-kind">{activityKindNames[activity.task.kind]} · 선택 활동</span></header>
   <div className="rt-scroll">
    <p className="rt-invitation">{activity.invitation}</p>
    <p className="rt-goal">{activity.goal}</p>
    {suspended&&<p className="rt-pause" role="status"><Pause size={15}/>잠시 멈췄어요. 돌아오면 이어 할 수 있어요.</p>}
    <fieldset className="rt-fieldset" disabled={suspended||result!==null}>
     <legend className="rt-sr-only">{activityKindNames[activity.task.kind]}</legend>
     <ActivityBoard key={`${activity.id}-${attempt}`} task={activity.task} paused={suspended||result!==null} settle={settle}/>
    </fieldset>
    {result&&<div className={`rt-result ${result.ok?'is-complete':'is-retry'}`} role="status"><b>{result.ok?'함께 만든 작은 순간':'다시 해도, 여기서 멈춰도 괜찮아'}</b>{result.detail&&<p>{result.detail}</p>}<blockquote>{result.ok?activity.success:activity.retry}</blockquote>{result.ok&&<p className="rt-after">{activity.after}</p>}</div>}
   </div>
   <footer className="rt-footer">{result?<><button type="button" className="rt-secondary" onClick={retry} disabled={suspended}><RotateCcw size={16}/>{result.ok?'다르게 해 보기':'다시 해 보기'}</button><button type="button" className="rt-primary" onClick={()=>finish(result.ok?3:0)} disabled={suspended}>함께한 시간 마치기<ArrowRight size={17}/></button></>:<><span className="rt-no-pressure">실패·건너뛰기 모두 관계 손실 없음</span><button type="button" className="rt-secondary" onClick={()=>finish(0)} disabled={suspended}><SkipForward size={16}/>이야기로 돌아가기</button></>}</footer>
  </div>
 </section>;
}
function ActivityBoard({task,paused,settle}:BoardProps<ActivityTask>){
 switch(task.kind){
  case 'mix':return <MixBoard task={task} paused={paused} settle={settle}/>;
  case 'rhythm':return <RhythmBoard task={task} paused={paused} settle={settle}/>;
  case 'compose':return <ComposeBoard task={task} paused={paused} settle={settle}/>;
  case 'debug':return <DebugBoard task={task} paused={paused} settle={settle}/>;
  case 'stars':return <StarsBoard task={task} paused={paused} settle={settle}/>;
  case 'pack':return <PackBoard task={task} paused={paused} settle={settle}/>;
 }
}
function MixBoard({task,paused,settle}:BoardProps<Extract<ActivityTask,{kind:'mix'}>>){
 const [levels,setLevels]=useState([35,35,35]),[mood,setMood]=useState<number|null>(null),[edited,setEdited]=useState(false),[reviewed,setReviewed]=useState(false),[notice,setNotice]=useState('');
 const audio=useRef<AudioContext|null>(null);
 useEffect(()=>()=>{void audio.current?.close().catch(()=>{});},[]);
 useEffect(()=>{if(paused&&audio.current){void audio.current.close().catch(()=>{});audio.current=null;}},[paused]);
 const strongest=levels.indexOf(Math.max(...levels));
 async function listen(){
  if(paused)return;setReviewed(true);setNotice('소리를 들을 수 없어도 아래 설명만 확인하고 완성할 수 있어요.');
  try{
   if(audio.current)await audio.current.close().catch(()=>{});
   const context=new AudioContext();audio.current=context;await context.resume();
   if(paused||audio.current!==context)return;
   const start=context.currentTime;
   task.notes.forEach((note,i)=>{const oscillator=context.createOscillator(),gain=context.createGain();oscillator.type=i===1?'sine':'triangle';oscillator.frequency.value=note;gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(levels[i]/100*.065,start+.08);gain.gain.exponentialRampToValueAtTime(.0001,start+1.45);oscillator.connect(gain);gain.connect(context.destination);oscillator.start(start+i*.055);oscillator.stop(start+1.5);});
  }catch{setNotice('기기에서 소리를 재생하지 못했어요. 소리 설명을 읽고 그대로 완성해도 괜찮아요.');}
 }
 return <div className="rt-mixer">
  <div className="rt-mixer-head" aria-hidden="true"><Music2 size={27}/><span>OUR LITTLE MIX</span><i/><i/><i/></div>
  <div className="rt-channels">{task.channels.map((channel,i)=><label key={channel}><span>{channel}<output>{levels[i]}%</output></span><input aria-label={`${channel} 크기`} type="range" min="0" max="100" step="5" value={levels[i]} onChange={event=>{const value=Number(event.target.value);setLevels(values=>values.map((previous,index)=>index===i?value:previous));setEdited(true);setReviewed(false);}}/></label>)}</div>
  <div className="rt-moods" role="group" aria-label="우리가 만들 분위기">{task.moods.map((value,i)=><button type="button" key={value} aria-pressed={mood===i} className={mood===i?'is-picked':''} onClick={()=>setMood(i)}>{value}</button>)}</div>
  <div className="rt-inline-actions"><button type="button" className="rt-secondary" onClick={()=>void listen()}><Volume2 size={16}/>짧게 들어 보기</button><button type="button" className="rt-quiet" onClick={()=>{setReviewed(true);setNotice('소리 없이 설명으로 확인했어요. 같은 방식으로 완성할 수 있어요.');}}>소리 없이 살펴보기</button></div>
  <p className="rt-preview" aria-live="polite">{Math.max(...levels)===0?'지금은 모든 소리가 쉬고 있어요.':`${task.channels[strongest]}이 가장 가까이 들리는 소리예요.`}{mood!==null&&` 분위기는 「${task.moods[mood]}」.`}</p>
  {notice&&<p className="rt-help" role="status">{notice}</p>}
  <button type="button" className="rt-submit" disabled={!edited||mood===null||!reviewed} onClick={()=>settle(true,`${task.moods[mood??0]} · ${task.channels.map((name,i)=>`${name} ${levels[i]}%`).join(' / ')}`)}><Check size={17}/>이 소리를 우리 버전으로 남기기</button>
  {(!edited||mood===null||!reviewed)&&<p className="rt-help">슬라이더 하나 이상을 바꾸고 → 분위기를 고른 뒤 → 듣거나 설명으로 살펴봐요.</p>}
 </div>;
}
function RhythmBoard({task,paused,settle}:BoardProps<Extract<ActivityTask,{kind:'rhythm'}>>){
 const [entered,setEntered]=useState<number[]>([]),[times,setTimes]=useState<number[]>([]),[timed,setTimed]=useState(false),[guide,setGuide]=useState(false),[pulse,setPulse]=useState(false);
 useEffect(()=>{if(!guide||paused)return;const timer=window.setInterval(()=>setPulse(value=>!value),60000/task.bpm);return()=>window.clearInterval(timer);},[guide,paused,task.bpm]);
 function pick(index:number){if(paused||entered.length>=task.pattern.length)return;setEntered(previous=>[...previous,index]);setTimes(previous=>[...previous,performance.now()]);}
 function reset(){setEntered([]);setTimes([]);setGuide(false);}
 const complete=entered.length===task.pattern.length;
 return <div className="rt-rhythm">
  <div className="rt-mode-switch"><label><input type="checkbox" checked={timed} disabled={entered.length>0} onChange={event=>{setTimed(event.target.checked);setGuide(false);}}/>박자 간격도 맞춰 보기 <small>(선택)</small></label><span>{timed?`${task.bpm} BPM`:'시간 제한 없는 순서 모드'}</span></div>
  <ol className="rt-pattern" aria-label="함께 따라 할 동작">{task.pattern.map((value,i)=><li key={i} className={i<entered.length?(entered[i]===value?'is-right':'is-different'):i===entered.length?'is-next':''}><span>{i+1}</span><b>{task.gestures[value]}</b>{i<entered.length&&<small>{task.gestures[entered[i]]}</small>}</li>)}</ol>
  {timed&&<button type="button" className="rt-tempo" onClick={()=>setGuide(value=>!value)} aria-pressed={guide}><i className={guide&&pulse?'is-lit':''}/>{guide?'박자 불빛 끄기':'박자 불빛 켜기'}<span>불빛이 바뀔 때 한 번씩</span></button>}
  <div className="rt-gesture-buttons">{task.gestures.map((gesture,i)=><button type="button" key={gesture} onClick={()=>pick(i)} disabled={complete}><span aria-hidden="true">{['●','✦','—'][i]}</span>{gesture}</button>)}</div>
  <div className="rt-inline-actions"><button type="button" className="rt-secondary" onClick={reset} disabled={entered.length===0&&!guide}><RotateCcw size={15}/>처음부터</button><span className="rt-help" aria-live="polite">{entered.length} / {task.pattern.length} 동작</span></div>
  <button type="button" className="rt-submit" disabled={!complete} onClick={()=>{setGuide(false);const ok=rhythmIsValid(task,entered,times,timed);settle(ok,ok?(timed?'같은 간격으로 짧은 합주를 마쳤어요.':'서두르지 않고 서로의 차례를 끝까지 맞췄어요.'):'순서나 간격이 살짝 달랐어요. 다음에는 시간 제한 없는 순서 모드로 해도 같은 보상을 받아요.');}}><Check size={17}/>둘의 호흡 확인하기</button>
 </div>;
}
function ComposeBoard({task,paused,settle}:BoardProps<Extract<ActivityTask,{kind:'compose'}>>){
 const [slots,setSlots]=useState<number[]>([]);
 function add(index:number){if(paused)return;setSlots(previous=>previous.includes(index)?previous.filter(value=>value!==index):previous.length<3?[...previous,index]:previous);}
 return <div className="rt-compose">
  <div className="rt-paper" aria-label="종이 미리보기"><small>{task.paper}</small>{[0,1,2].map(index=><button type="button" key={index} className={`rt-paper-slot slot-${index}`} onClick={()=>{if(slots[index]!==undefined)setSlots(previous=>previous.filter((_,i)=>i!==index));}} aria-label={`${index+1}번째 칸: ${slots[index]!==undefined?task.pieces[slots[index]]:'비어 있음'}${slots[index]!==undefined?', 누르면 빼기':''}`}><span>{['첫 시선','가운데 여백','마지막 한 줄'][index]}</span><b>{slots[index]!==undefined?task.pieces[slots[index]]:'아래 조각을 골라 주세요'}</b></button>)}</div>
  <div className="rt-pieces" role="group" aria-label="순서대로 놓을 종이 조각">{task.pieces.map((piece,i)=><button type="button" key={piece} className={slots.includes(i)?'is-picked':''} aria-pressed={slots.includes(i)} disabled={slots.length===3&&!slots.includes(i)} onClick={()=>add(i)}>{piece}{slots.includes(i)&&<Check size={13}/>}</button>)}</div>
  <p className="rt-help">고른 순서대로 위에서 아래로 놓여요. 종이의 칸이나 선택한 조각을 누르면 다시 뺄 수 있어요.</p>
  <button type="button" className="rt-submit" disabled={slots.length!==3} onClick={()=>{const ok=compositionIsValid(task,slots);settle(ok,ok?`「${slots.map(i=>task.pieces[i]).join(' → ')}」 순서로 우리만의 종이가 완성됐어요.`:`「${task.pieces[task.required]}」를 포함하고, 마지막에는 「${task.pieces[task.footer]}」를 놓아 봐요. 나머지 한 칸은 자유예요.`);}}><Check size={17}/>이 배치로 함께 읽기</button>
 </div>;
}
function DebugBoard({task,paused,settle}:BoardProps<Extract<ActivityTask,{kind:'debug'}>>){
 const [tested,setTested]=useState<number[]>([]),[selected,setSelected]=useState<number|null>(null),[active,setActive]=useState<number|null>(null);
 function run(index:number){if(paused)return;setActive(index);setTested(previous=>previous.includes(index)?previous:[...previous,index]);}
 return <div className="rt-debug">
  <div className="rt-terminal"><div className="rt-terminal-dots" aria-hidden="true"><i/><i/><i/><span>작은 연습 프로그램 · 실제 데이터와 연결되지 않음</span></div><ol>{task.code.map((line,i)=><li key={i}><code>{line}</code></li>)}</ol></div>
  <div className="rt-test-inputs" role="group" aria-label="시험 입력">{task.tests.map((value,i)=><button type="button" key={i} className={active===i?'is-picked':''} onClick={()=>run(i)}>{tested.includes(i)&&<Check size={13}/>}입력 {i+1}: {value.input}</button>)}</div>
  <div className="rt-test-result" aria-live="polite">{active===null?<p>입력을 하나 눌러 보면 무엇이 달라지는지 확인할 수 있어요.</p>:<><div><span>기대한 결과</span><b>{task.tests[active].expected}</b></div><div className={task.tests[active].expected!==task.tests[active].actual?'is-unexpected':''}><span>지금 나온 결과</span><b>{task.tests[active].actual}</b></div></>}</div>
  <p className="rt-help">서로 다른 입력을 두 개 이상 확인한 뒤, 바꿀 부분을 골라요. 확인 {tested.length} / {task.tests.length}</p>
  <div className="rt-patches" role="group" aria-label="한 군데 고칠 방법">{task.patches.map((patch,i)=><button type="button" key={patch} disabled={tested.length<2} aria-pressed={selected===i} className={selected===i?'is-picked':''} onClick={()=>setSelected(i)}>{patch}</button>)}</div>
  <button type="button" className="rt-submit" disabled={selected===null||tested.length<2} onClick={()=>{const ok=debugIsValid(task,tested,selected??-1);settle(ok,ok?'같은 입력을 다시 넣었을 때 기대한 결과가 나왔어요. 작은 원인 하나를 함께 확인했어요.':'이 수정만으로는 기대한 결과와 실제 결과의 차이가 사라지지 않아요. 다른 입력도 함께 살펴볼까요?');}}><Play size={16}/>고친 뒤 다시 실행하기</button>
 </div>;
}
function StarsBoard({task,paused,settle}:BoardProps<Extract<ActivityTask,{kind:'stars'}>>){
 const [path,setPath]=useState<number[]>([task.start]),[notice,setNotice]=useState('');
 function connect(node:number){
  if(paused)return;
  if(node===task.blocked){setNotice('이 지점은 지금 지나갈 수 없어요. 다른 연결선을 찾아봐요.');return;}
  if(node===path.at(-1)&&path.length>1){setPath(previous=>previous.slice(0,-1));setNotice('마지막 선을 지웠어요.');return;}
  if(path.includes(node)){setNotice('이미 지난 지점이에요. 마지막 점을 누르면 한 칸 되돌아갈 수 있어요.');return;}
  if(!task.edges.some(([a,b])=>(a===path.at(-1)&&b===node)||(b===path.at(-1)&&a===node))){setNotice('현재 점에서 얇은 선으로 연결된 다음 지점을 골라요.');return;}
  setPath(previous=>[...previous,node]);setNotice(`${task.nodes[node].label}까지 이었어요.`);
 }
 return <div className="rt-stars">
  <div className="rt-star-board">
   <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{task.edges.map(([a,b])=><line key={`${a}-${b}`} x1={task.nodes[a].x} y1={task.nodes[a].y} x2={task.nodes[b].x} y2={task.nodes[b].y} className="rt-star-possible"/>)}{path.slice(1).map((node,i)=><line key={i} x1={task.nodes[path[i]].x} y1={task.nodes[path[i]].y} x2={task.nodes[node].x} y2={task.nodes[node].y} className="rt-star-drawn"/>)}</svg>
   {task.nodes.map((node,i)=><button type="button" key={i} style={{left:`${node.x}%`,top:`${node.y}%`}} className={`rt-star-node ${path.includes(i)?'is-linked':''} ${i===task.blocked?'is-blocked':''} ${i===path.at(-1)?'is-current':''}`} onClick={()=>connect(i)} aria-label={`${node.label}${i===task.start?' · 시작':i===task.end?' · 도착':i===task.via?' · 꼭 들를 곳':i===task.blocked?' · 지나갈 수 없음':''}`}><i aria-hidden="true">{i===task.blocked?'×':i===task.end?'☆':path.includes(i)?'●':'✧'}</i><span>{node.label}</span></button>)}
  </div>
  <p className="rt-board-caption">{task.caption}</p>
  <p className="rt-path-readout" aria-live="polite">{path.map(node=>task.nodes[node].label).join(' → ')}</p>
  <div className="rt-inline-actions"><button type="button" className="rt-secondary" disabled={path.length<2} onClick={()=>{setPath(previous=>previous.slice(0,-1));setNotice('마지막 선을 지웠어요.');}}><Undo2 size={15}/>한 선 뒤로</button><span className="rt-help">{task.nodes[task.via].label}을 거쳐요.</span></div>
  {notice&&<p className="rt-help" role="status">{notice}</p>}
  <button type="button" className="rt-submit" disabled={path.at(-1)!==task.end} onClick={()=>{const ok=starPathIsValid(task,path);settle(ok,ok?'우리의 시작과 잠깐 머물 곳, 마지막 자리가 한 선으로 이어졌어요.':`도착하기 전에 「${task.nodes[task.via].label}」에도 들러 봐요.`);}}><Check size={17}/>이 길을 함께 따라가기</button>
 </div>;
}
function PackBoard({task,paused,settle}:BoardProps<Extract<ActivityTask,{kind:'pack'}>>){
 const [selected,setSelected]=useState<number[]>([]);
 const used=selected.reduce((sum,i)=>sum+task.items[i].size,0);
 function choose(index:number){if(paused)return;setSelected(previous=>previous.includes(index)?previous.filter(i=>i!==index):[...previous,index]);}
 return <div className="rt-pack">
  <div className="rt-bag"><div className="rt-bag-handle" aria-hidden="true"/><h3>{task.bag}</h3><div className="rt-capacity" role="img" aria-label={`${task.capacity}칸 중 ${used}칸 사용${used>task.capacity?', 가방이 넘쳐요':''}`}>{Array.from({length:Math.max(task.capacity,used)},(_,i)=><span key={i} className={`${i<used?'is-full':''} ${i>=task.capacity?'is-over':''}`}/>)}</div><b className={used>task.capacity?'rt-overflow':''}>{used} / {task.capacity}칸</b><p>{selected.length?selected.map(i=>task.items[i].label).join(' · '):'아직 비어 있어요. 필요한 만큼만 담아 봐요.'}</p></div>
  <div className="rt-pack-items" role="group" aria-label="가방에 넣거나 뺄 물건">{task.items.map((value,i)=><button type="button" key={value.label} aria-pressed={selected.includes(i)} className={selected.includes(i)?'is-picked':''} onClick={()=>choose(i)}><span>{value.label}</span><small>{value.size}칸 {selected.includes(i)?'· 빼기':'· 넣기'}</small></button>)}</div>
  <button type="button" className="rt-submit" disabled={selected.length===0} onClick={()=>{const ok=packingIsValid(task,selected);settle(ok,ok?`${selected.map(i=>task.items[i].label).join(', ')}. 필요한 것을 챙기고 ${task.capacity-used}칸의 여유를 남겼어요.`:used>task.capacity?'가방이 조금 넘쳤어요. 오늘 꼭 필요하지 않은 것을 하나 내려놓아도 괜찮아요.':`「${task.required.map(i=>task.items[i].label).join('」「')}」는 이번 약속에 꼭 필요해요. 다시 확인해 볼까요?`);}}><Check size={17}/>이 가방으로 같이 가기</button>
 </div>;
}
