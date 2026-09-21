import {useEffect,useRef,useState, type CSSProperties, type FormEvent, type ReactNode} from 'react';
import {ArrowRight,BookOpen,Check,ChevronRight,Clock,FlaskConical,Heart,Home,MapPin,Maximize,Menu,Music2,Pause,Play,Save,Settings,SkipForward,Sparkles,Star,Sun,Volume2,VolumeX,X,Lock,NotebookPen,RotateCcw,CloudMoon,Gamepad2} from 'lucide-react';
import {characters,characterById,locations,locationById} from './data/characters';
import {commonScenes} from './data/common';
import {endings,endingById} from './data/endings';
import {activeScene,activeLines,advance,choose,newGame,nextDay,visit,candidates,selectRoute,validName,readKey,ids,haremEligible,currentActivity,completeActivity,locationOf,type GameState,type Meta} from './engine/game';
import {getSave,saveGame,getMeta,storeMeta,readJSON,writeJSON} from './engine/storage';
import {music} from './engine/audio';
import {endingCutscene,eventCutscene,eventKindFromScene,type CutsceneSpec} from './engine/cutscenes';
import type {CharacterId,LocationId,Line} from './types';
import {episodeCutscene} from './engine/episodes';
import {CutsceneProps,EpisodeGallery} from './CutsceneDetails';
import {cutsceneDuration,motionFrameAt,motionPosition} from './engine/motion';

const asset=(name:string)=>`${import.meta.env.BASE_URL}assets/${name}.webp`;
const label=(speaker:Line['speaker'],name:string)=>speaker==='player'?name:speaker==='narrator'?'':speaker==='teacher'?'담임 선생님':speaker==='student'?'1반 친구':characterById[speaker].name;
type Panel='none'|'settings'|'save'|'load'|'backlog'|'journal'|'gallery'|'cast'|'menu';
type Options={speed:number;volume:number;sound:boolean;showStats:boolean};
const galleryArt:{key:string;label:string;alt:string;event?:[CharacterId,LocationId]}[]=[
 {key:'classroom',label:'방과 후 교실',alt:'방과 후 교실'},
 {key:'lab',label:'노을빛 화학실',alt:'노을빛 화학실'},
 {key:'band',label:'밴드연습실',alt:'밴드연습실'},
 {key:'dance',label:'댄스연습실',alt:'댄스연습실'},
 {key:'computer',label:'컴퓨터실',alt:'컴퓨터실'},
 {key:'night',label:'천문대의 밤',alt:'천문대의 밤'},
 {key:'event-world',label:'세계 · 붉은 비상등 아래',alt:'전세계 돌발 이벤트 컷신',event:['world','band']},
 {key:'event-junyeon',label:'준연 · 균열음이 난 순간',alt:'방준연 돌발 이벤트 컷신',event:['junyeon','chemistry']},
 {key:'event-hyunsol',label:'현솔 · 꺼진 불, 잡힌 소매',alt:'최현솔 돌발 이벤트 컷신',event:['hyunsol','chemistry']},
 {key:'event-taewoo-fall',label:'태우 · 여덟 번째 카운트의 사고',alt:'김태우 돌발 이벤트 컷신',event:['taewoo','dance']},
 {key:'event-taehun',label:'태훈 · 예보에 없던 소나기',alt:'고태훈 돌발 이벤트 컷신',event:['taehun','observatory']},
 {key:'event-seoyul',label:'서율 · 기울어진 캔버스',alt:'이서율 돌발 이벤트 컷신',event:['seoyul','art']},
 {key:'cast',label:'여섯 명의 친구',alt:'여섯 명의 친구'},
];
function Portrait({id,className=''}:{id:CharacterId;className?:string}){return <div role="img" aria-label={characterById[id].name} className={`portrait ${className}`} style={{backgroundImage:`url(${asset('cast')})`,backgroundPosition:`${ids.indexOf(id)*20}% 25%`}}/>;}
function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:ReactNode}){const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{ref.current?.showModal();},[]);return <dialog ref={ref} className="modal" onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===ref.current)onClose();}}><div className="modal-shell"><div className="modal-head"><div><span className="eyebrow">RE:ACTION / NOTEBOOK</span><h2>{title}</h2></div><button className="icon-button" aria-label="닫기" onClick={onClose}><X size={22}/></button></div><div className="modal-body">{children}</div></div></dialog>;}
function Meter({name,value,color}:{name:string;value:number;color?:string}){return <div className="meter"><div><span>{name}</span><span>{value}</span></div><div className="meter-track"><i style={{width:`${value}%`,background:color}}/></div></div>;}

function CutsceneScreen({spec,onDone}:{spec:CutsceneSpec;onDone:()=>void}){
 const [beat,setBeat]=useState(0),[paused,setPaused]=useState(false);
 const [elapsed,setElapsed]=useState(0),[imageState,setImageState]=useState<'loading'|'ready'|'error'>(spec.motion?'loading':'ready');
 const elapsedRef=useRef(0),doneRef=useRef(onDone);doneRef.current=onDone;
 const screen=useRef<HTMLElement>(null);
 useEffect(()=>{const overflow=document.body.style.overflow;document.body.style.overflow='hidden';screen.current?.querySelector('button')?.focus();return()=>{document.body.style.overflow=overflow;};},[]);
 useEffect(()=>{
  setBeat(0);setPaused(!!spec.motion&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);setElapsed(0);elapsedRef.current=0;
  if(!spec.motion){setImageState('ready');return;}
  let active=true;const img=new Image();setImageState('loading');
  img.onload=()=>{if(active)setImageState('ready');};img.onerror=()=>{if(active)setImageState('error');};img.src=asset(spec.motion);
  return()=>{active=false;};
 },[spec.key,spec.motion]);
 const duration=cutsceneDuration(spec.beats[beat],!!spec.motion);
 useEffect(()=>{setElapsed(0);elapsedRef.current=0;},[beat]);
 useEffect(()=>{
  if(paused||imageState!=='ready')return;
  let previous=performance.now();
  const timer=window.setInterval(()=>{
   const now=performance.now(),delta=now-previous;previous=now;
   // Returning from a background tab must not skip the entire film.
   if(document.hidden)return;
   elapsedRef.current+=Math.min(delta,100);setElapsed(elapsedRef.current);
   if(elapsedRef.current>=duration){window.clearInterval(timer);if(beat<3)setBeat(value=>value+1);else doneRef.current();}
  },40);
  return()=>window.clearInterval(timer);
 },[beat,paused,duration,imageState,spec.key]);
 const final=beat===spec.beats.length;
 const frame=motionFrameAt(beat,elapsed,duration);
 const replay=()=>{elapsedRef.current=0;setElapsed(0);setBeat(0);setPaused(false);};
 return <section ref={screen} onKeyDown={event=>{
  if(event.key==='Escape'){event.preventDefault();onDone();}
  if(event.key==='Tab'){
   const buttons=screen.current?.querySelectorAll('button');if(!buttons?.length)return;
   if(event.shiftKey&&document.activeElement===buttons[0]){event.preventDefault();buttons[buttons.length-1].focus();}
   else if(!event.shiftKey&&document.activeElement===buttons[buttons.length-1]){event.preventDefault();buttons[0].focus();}
  }
 }} className={`cutscene cutscene-${spec.mood} ${spec.motion?'cutscene-motion':''} ${paused?'cutscene-paused':''}`} role="dialog" aria-modal="true" aria-label={`${spec.title} 컷신`}>
  {spec.motion?<div className="motion-stage">
   {imageState==='ready'?<div className="motion-frame" role="img" aria-label={`${spec.title} · 연속 동작 장면`} data-frame={frame} style={{backgroundImage:`url(${asset(spec.motion)})`,backgroundPosition:motionPosition(frame)}}/>:<p className="motion-loading" role="status">{imageState==='error'?'장면을 불러오지 못했어요. 돌아간 뒤 다시 재생해 주세요.':'새 장면을 불러오는 중…'}</p>}
  </div>:<div className="cutscene-image" key={`${spec.key}:${beat}`} style={{backgroundImage:`url(${asset(spec.art??spec.background)})`}}/>}
  {!spec.motion&&!spec.art&&spec.character&&<div className="cutscene-actor"><Portrait id={spec.character}/></div>}
  {!spec.motion&&spec.motif&&spec.props&&!final&&<CutsceneProps key={`${spec.key}:prop:${beat}`} motif={spec.motif} caption={spec.props[beat]} beat={beat}/>}
  <div className="cutscene-vignette"/><div className="cutscene-flare"/><div className="cutscene-letterbox top"/><div className="cutscene-letterbox bottom"/>
  <div className={`cutscene-copy ${final?'final':''}`} key={`copy:${spec.key}:${beat}`} aria-live="polite">
   <span>{spec.label}</span>{final?<><h1>{spec.title}</h1><p>{spec.subtitle}</p></>:<><small>SCENE {String(beat+1).padStart(2,'0')}</small><p>{spec.beats[beat]}</p></>}
  </div>
  <div className="cutscene-controls"><div className="cutscene-progress">{spec.beats.map((_,index)=><i key={index} className={index<=beat?'active':''}/>)}</div>{spec.motion&&<button onClick={replay}><RotateCcw size={15}/>처음부터</button>}<button onClick={()=>setPaused(value=>!value)}>{paused?<Play size={15}/>:<Pause size={15}/>} {paused?'재생':'일시정지'}</button><button onClick={()=>final?onDone():setBeat(value=>value+1)}><ArrowRight size={15}/>{final?'돌아가기':'다음 장면'}</button><button onClick={onDone}><SkipForward size={15}/>건너뛰기</button></div>
 </section>;
}

function ActivityScreen({game,onFinish}:{game:GameState;onFinish:(score:number)=>void}){
 const activity=currentActivity(game)!;
 const [round,setRound]=useState(0),[score,setScore]=useState(0),[selected,setSelected]=useState<number|null>(null);
 useEffect(()=>{setRound(0);setScore(0);setSelected(null);},[activity.id]);
 const question=activity.questions[round],done=round===activity.questions.length-1&&selected!==null;
 function answer(index:number){if(selected!==null)return;setSelected(index);if(index===question.answer)setScore(value=>value+1);}
 function proceed(){if(done){onFinish(score);return;}setRound(value=>value+1);setSelected(null);}
 return <section className="activity-screen"><div className="activity-card"><div className="activity-person"><Portrait id={game.visitor!}/><span><small>AFTER SCHOOL MINI GAME</small><b>{activity.title}</b></span><i>{activity.icon}</i></div><div className="activity-progress">{activity.questions.map((_,index)=><span key={index} className={`${index<round?'done':''} ${index===round?'current':''}`}/>)}</div><p className="activity-subtitle">{activity.subtitle}</p><h2>{question.prompt}</h2><div className="activity-options">{question.options.map((option,index)=><button key={option} disabled={selected!==null} className={selected===null?'':index===question.answer?'correct':index===selected?'wrong':''} onClick={()=>answer(index)}><small>{index+1}</small>{option}</button>)}</div>{selected!==null&&<div className="activity-feedback"><b>{selected===question.answer?'좋아, 호흡이 맞았어.':'괜찮아, 다음에는 확인할 수 있어.'}</b><p>{question.explain}</p><button className="primary" onClick={proceed}>{done?'결과와 함께 대화하기':'다음 문제'}<ArrowRight size={16}/></button></div>}{selected===null&&<button className="text-button activity-skip" onClick={()=>onFinish(0)}>미니게임을 건너뛰고 대화한다</button>}</div></section>;
}

export default function App(){
 const [game,setGame]=useState<GameState|null>(null),[name,setName]=useState(''),[error,setError]=useState('');
 const [meta,setMeta]=useState<Meta>(getMeta),[panel,setPanel]=useState<Panel>('none'),[toast,setToast]=useState('');
 const [options,setOptions]=useState<Options>(()=>{const x=readJSON('options') as Partial<Options>|null;return {speed:typeof x?.speed==='number'?Math.max(0,Math.min(60,x.speed)):24,volume:typeof x?.volume==='number'?Math.max(0,Math.min(1,x.volume)):.3,sound:false,showStats:!!x?.showStats};});
 const [auto,setAuto]=useState(false),[skip,setSkip]=useState(false),[visible,setVisible]=useState(0),[selectedPlace,setSelectedPlace]=useState<LocationId>('classroom');
 const [slotMode,setSlotMode]=useState<'save'|'load'>('save'),[confirmSlot,setConfirmSlot]=useState<string|null>(null),[galleryType,setGalleryType]=useState<'endings'|'art'|'episodes'>('endings'),[profile,setProfile]=useState<CharacterId>('world');
 const [cutscene,setCutscene]=useState<CutsceneSpec|null>(null),playedCutscenes=useRef(new Set<string>()),returnToGallery=useRef(false);
 const [galleryCharacter,setGalleryCharacter]=useState<CharacterId>('world');
 const gameRef=useRef(game),metaRef=useRef(meta);gameRef.current=game;metaRef.current=meta;
 const scene=game?activeScene(game):null,lines=game?activeLines(game):[],line=game?lines[game.line]:null;
 const formatted=(text:string)=>text.replaceAll('{name}',game?.name??'당신');
 const lineText=line?formatted(line.text):'';
 const lineId=game?readKey(game):'title';
 const choiceVisible=!!game&&game.phase==='story'&&!game.response&&game.line>=lines.length;
 const actor=line&&ids.includes(line.speaker as CharacterId)?line.speaker as CharacterId:null;
 const bg=game&&scene?locationById[scene.location].bg:'classroom';
 const showToast=(s:string)=>setToast(s);

 useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),3300);return()=>clearTimeout(t);},[toast]);
 useEffect(()=>{writeJSON('options',options);music(options.sound,options.volume);return()=>music(false,0);},[options]);
 useEffect(()=>{if(!game)return;if(!saveGame('auto',game))showToast('브라우저 저장 공간이 부족해 자동 저장하지 못했어요.');},[game]);
 useEffect(()=>{storeMeta(meta);},[meta]);
 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[game?.phase]);
 useEffect(()=>{
  if(!game)return;
  if(game.phase==='ending'&&game.ending&&!meta.endings.includes(game.ending))setMeta(m=>({...m,endings:[...m.endings,game.ending!]}));
  if(game.phase==='routeSelect'&&haremEligible(game)&&!meta.attempted.includes(game.seed))setMeta(m=>({...m,attempted:[...m.attempted,game.seed],failures:m.failures+(game.haremOffered?0:1)}));
 },[game,meta.endings,meta.attempted]);
 useEffect(()=>{
  if(!game||cutscene)return;
  let nextCutscene:CutsceneSpec|null=null;
  if(game.phase==='ending'&&game.ending)nextCutscene=endingCutscene(game.ending);
  else if(game.phase==='story'&&game.segment==='hangout'&&game.visitor&&scene&&game.line===0&&!game.response){
   if(scene.cutsceneId&&!game.flags.includes(`episode-watched:${scene.cutsceneId}`))nextCutscene=episodeCutscene(scene.cutsceneId);
   else if(!scene.cutsceneId){const kind=eventKindFromScene(scene.id);if(kind)nextCutscene=eventCutscene(game.visitor,kind,scene.location,scene.id);}
  }
  if(nextCutscene&&!playedCutscenes.current.has(nextCutscene.key)){playedCutscenes.current.add(nextCutscene.key);setCutscene(nextCutscene);}
 },[game,scene,cutscene]);
 useEffect(()=>{setVisible(options.speed===0?lineText.length:0);if(options.speed===0)return;const t=setInterval(()=>setVisible(v=>{if(v>=lineText.length){clearInterval(t);return v;}return v+2;}),options.speed);return()=>clearInterval(t);},[lineId,lineText,options.speed]);
 function next(){const g=gameRef.current;if(!g||g.phase!=='story'||panel!=='none'||cutscene)return;if(visible<lineText.length){setVisible(lineText.length);return;}if(g.line<activeLines(g).length){const key=readKey(g);setMeta(m=>m.read.includes(key)?m:{...m,read:[...m.read,key]});}setGame(advance(g,metaRef.current));}
 function pick(index:number){if(!game)return;const c=activeScene(game).choices[index];if(!c)return;setGame(choose(game,index));if(options.showStats)showToast(c.effects.slice(0,4).map(e=>`${e.target==='global'?({harmony:'조화',fair:'완성',ethics:'윤리',safety:'안전',reputation:'평판'} as Record<string,string>)[e.stat]:characterById[e.target].name+' '+({affection:'호감',trust:'신뢰',jealousy:'질투',special:characterById[e.target].specialLabel} as Record<string,string>)[e.stat]} ${e.amount>0?'+':''}${e.amount}`).join(' · '));}
 useEffect(()=>{if(!game||game.phase!=='story'||panel!=='none'||choiceVisible||cutscene)return;const isRead=meta.read.includes(lineId);if(skip&&!isRead){setSkip(false);return;}if(!auto&&!skip)return;const t=setTimeout(()=>{setVisible(lineText.length);if(visible>=lineText.length||skip){if(game.line<lines.length)setMeta(m=>m.read.includes(lineId)?m:{...m,read:[...m.read,lineId]});setGame(advance(game,metaRef.current));}},skip?50:Math.max(1400,lineText.length*55));return()=>clearTimeout(t);},[auto,skip,game,lineId,visible,lineText,panel,choiceVisible,cutscene]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(cutscene||(e.target as HTMLElement)?.matches('input,textarea,select')||e.isComposing)return;if(e.key==='Escape'){e.preventDefault();setPanel(p=>p==='none'?'menu':'none');return;}if(panel!=='none'||gameRef.current?.phase==='activity')return;if(e.key==='Enter'||e.code==='Space'){e.preventDefault();next();}if(/^[1-6]$/.test(e.key)&&choiceVisible){e.preventDefault();pick(Number(e.key)-1);}if(e.key==='Control')setSkip(true);};const up=(e:KeyboardEvent)=>{if(e.key==='Control')setSkip(false);};window.addEventListener('keydown',key);window.addEventListener('keyup',up);return()=>{window.removeEventListener('keydown',key);window.removeEventListener('keyup',up);};});

 function start(e:FormEvent){e.preventDefault();if(!validName(name)){setError('이름을 1~12자로 입력해 주세요. 한글·영문·숫자를 사용할 수 있어요.');return;}const seed=crypto.getRandomValues(new Uint32Array(1))[0];playedCutscenes.current.clear();setGame(newGame(name,seed,meta.endings.length>0));setError('');setAuto(false);setSkip(false);}
 function load(slot:string){const saved=getSave(slot);if(saved){playedCutscenes.current.clear();setGame(saved.state);setPanel('none');setAuto(false);setSkip(false);showToast('그날의 이야기를 불러왔어요.');}else showToast('유효한 저장 기록이 없어요.');}
 function goHome(){setGame(null);setName('');setPanel('none');setAuto(false);setSkip(false);}
 function fullscreen(){if(document.fullscreenElement)void document.exitFullscreen();else void document.documentElement.requestFullscreen().catch(()=>showToast('이 브라우저에서는 전체화면을 지원하지 않아요.'));}
 const dayLabel=scene?scene.day>0?`D − ${scene.day}`:scene.day===0?'FAIR DAY':`AFTER + ${-scene.day}`:'D − 64';
 function residents(place:LocationId){if(!game)return [];return characters.filter(c=>locationOf(game,c.id)===place);}
 function locked(place:LocationId){if(!game)return false;return (place==='walk'&&!ids.some(id=>game.stats[id].affection>=40))||(place==='roof'&&!ids.some(id=>game.stats[id].trust>=50));}

 function previewEpisode(spec:CutsceneSpec){returnToGallery.current=true;setPanel('none');setCutscene(spec);}
 function finishCutscene(){
  if(returnToGallery.current){returnToGallery.current=false;setPanel('gallery');}
  else if(cutscene?.key.startsWith('episode:')){
   const flag='episode-watched:'+cutscene.key.slice('episode:'.length);
   setGame(current=>current&&!current.flags.includes(flag)?{...current,flags:[...current.flags,flag]}:current);
  }
  setCutscene(null);
 }
 return <main className={`app ${game?'in-game':'on-title'}`}>
  {cutscene&&<CutsceneScreen spec={cutscene} onDone={finishCutscene}/>}
  <div className={`scene-background bg-${bg}`} style={{backgroundImage:`url(${asset(bg)})`}}/><div className="scene-wash"/><div className="grain"/>
  <header className="topbar"><button className="brand" onClick={()=>game?setPanel('menu'):setPanel('none')} aria-label="RE:ACTION 메뉴"><FlaskConical size={23}/><span>RE:ACTION<i>인천과학고 연애실험</i></span></button><div className="topbar-right">{game?<span className="date-badge"><Sun size={14}/>{dayLabel}<span>1학년 1반</span></span>:<span className="edition">A SUMMER OF POSSIBILITIES</span>}<button className="icon-button" aria-label={options.sound?'배경음 끄기':'배경음 켜기'} onClick={()=>setOptions(o=>({...o,sound:!o.sound}))}>{options.sound?<Volume2 size={18}/>:<VolumeX size={18}/>}</button><button className="icon-button" aria-label="설정" onClick={()=>setPanel('settings')}><Settings size={18}/></button><button className="icon-button fullscreen" aria-label="전체화면" onClick={fullscreen}><Maximize size={18}/></button>{game&&<button className="icon-button" aria-label="게임 메뉴" onClick={()=>setPanel('menu')}><Menu size={20}/></button>}</div></header>

  {!game?<section className="title-screen"><div className="title-content"><div className="tiny-label"><span/> OUR STORY STARTS HERE</div><h1><small>인천과학고 연애실험</small>RE<span>:</span>ACTION<span className="title-flower">✳</span></h1><p className="title-kicker">아직 증명하지 못한, 우리 사이의 반응.</p><p className="title-description">낯선 교실, 여섯 번의 만남.<br/>사이언스 페어까지 남은 64일,<br/>이 이야기는 당신의 이름으로 시작됩니다.</p><form className="name-form" onSubmit={start}><label htmlFor="player-name">새로 온 전학생, 이름이 뭐야?<span>01 / INTRODUCTION</span></label><div className={`name-field ${error?'invalid':''}`}><input id="player-name" autoComplete="off" value={name} onChange={e=>{setName(e.target.value);setError('');}} maxLength={12} placeholder="당신의 이름을 입력해 주세요" aria-invalid={!!error} aria-describedby="name-help"/><NotebookPen size={19}/></div><p id="name-help" className={error?'form-error':'form-hint'}>{error||'이름은 1~12자 · 이야기 속 모든 대사에 반영돼요'}</p><button className="primary start-button" type="submit" disabled={!name.trim()}>우리의 이야기 시작하기<ArrowRight size={19}/></button></form><div className="title-links"><button onClick={()=>{setSlotMode('load');setPanel('load');}}><BookOpen size={15}/>이어서 하기</button><span/><button onClick={()=>setPanel('gallery')}><Star size={15}/>기억의 서랍 <small>{meta.endings.length}</small></button></div></div><div className="title-note"><span>MEMORY NO. 001</span><p>마음은, 실험처럼<br/>예측할 수 없어서.</p><i>— 방과 후의 1학년 1반</i></div><div className="meet-strip"><div><span className="eyebrow">SIX DIFFERENT REACTIONS</span><p>너를 기다리는 여섯 가지 이야기</p></div><div className="meet-faces">{characters.map(c=><button key={c.id} aria-label={`${c.name} 소개`} onClick={()=>{setProfile(c.id);setPanel('cast');}}><Portrait id={c.id}/><span>{c.name}</span></button>)}</div><button className="meet-more" aria-label="등장인물 소개" onClick={()=>setPanel('cast')}><ArrowRight size={22}/></button></div><footer className="title-footer"><span>FICTIONAL SCHOOL ROMANCE · CHAPTER 01–14</span><span>등장인물·사건·시설 배치는 모두 허구입니다.</span></footer></section>:
  <>
  {game.phase==='activity'&&<ActivityScreen game={game} onFinish={score=>{setGame(completeActivity(game,score));showToast(score===3?'완벽한 호흡! 관계가 크게 깊어졌어요.':score>0?'함께한 활동이 대화의 문을 열었어요.':'결과보다 함께 시도한 시간이 남았어요.');}}/>}
  {game.phase==='story'&&<section className="story-screen"><div className="scene-meta"><span className="eyebrow">{game.segment==='common'?'COMMON ROUTE':game.segment==='hangout'?(scene!.id.includes('-event-')?'SURPRISE EVENT':'AFTER SCHOOL'):game.segment==='harem'?'HIDDEN ROUTE':`${characterById[game.route!].name} ROUTE`}</span><h2>{scene!.title}</h2><span><MapPin size={13}/>{locationById[scene!.location].name}</span></div><div className="chapter-ribbon">{game.segment==='common'?String(game.chapter).padStart(2,'0'):String(game.routeChapter+1).padStart(2,'0')}<span>CHAPTER</span></div>{actor&&<div className="actor-panel" key={actor}><Portrait id={actor} className="actor-portrait"/><div className="actor-caption"><span style={{background:characterById[actor].color}}/>{characterById[actor].role}</div></div>}
   {choiceVisible?<div className="choice-block"><div className="choice-prompt"><span/><Sparkles size={15}/>{game.segment==='hangout'?`‘${scene!.title}’을 어떻게 이어갈까?`:'이 선택으로 무엇을 바꿀까?'}<span/></div>{scene!.choices.map((c,i)=><button key={c.id} onClick={()=>pick(i)}><small className={c.label?'choice-tag':undefined}>{c.label??String(i+1).padStart(2,'0')}</small><span>{formatted(c.text)}</span><ChevronRight size={19}/></button>)}</div>:<button className="dialogue" onClick={next} aria-label="다음 대사"><div className="speaker-line"><span style={{borderColor:actor?characterById[actor].color:undefined}}>{line?label(line.speaker,game.name)||'마음의 기록':'이어서'}</span><i>1학년 1반</i></div><p>{lineText.slice(0,visible)}<span className="type-cursor">{visible<lineText.length?'▏':''}</span></p><div className="dialogue-bottom"><span>{visible<lineText.length?'CLICK TO REVEAL':'CLICK OR PRESS SPACE'}</span><ChevronRight size={17}/></div></button>}
   <nav className="story-toolbar" aria-label="대화 도구"><button onClick={()=>setPanel('backlog')}><BookOpen size={14}/>기록</button><button className={auto?'active':''} onClick={()=>{setAuto(!auto);setSkip(false);}}>{auto?<Pause size={14}/>:<Play size={14}/>}자동</button><button className={skip?'active':''} onClick={()=>{if(!meta.read.includes(lineId)){showToast('이미 읽은 대사만 빠르게 넘길 수 있어요.');return;}setSkip(!skip);setAuto(false);}}><SkipForward size={14}/>읽은 대사</button><span/><button onClick={()=>setPanel('journal')}><Heart size={14}/>관계</button><button onClick={()=>{setSlotMode('save');setPanel('save');}}><Save size={14}/>저장</button></nav>
  </section>}

  {game.phase==='map'&&<section className="map-screen"><div className="map-heading"><div><span className="eyebrow">A LIVING TIMETABLE</span><h1>방과 후, 어디로 갈까?</h1><p>친구들은 매일·시간대마다 다른 장소로 움직여요.</p></div><div className="action-points"><Clock size={17}/>{game.actions===3?'점심시간':game.actions>0?'방과 후':'하루의 끝'}<span>{Array.from({length:3},(_,i)=><i key={i} className={i<game.actions?'filled':''}/>)}</span></div></div><div className="map-layout"><div className="campus-map"><span className="map-watermark">I S H S</span><div className="map-court"/><svg className="map-roads" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M46 90V52H23V14M23 52H76V13M50 52V17M50 72H10V52M50 72H78V94H91"/></svg><span className="north">N ↑</span>{locations.map(l=><button key={l.id} className={`map-pin ${selectedPlace===l.id?'selected':''} ${locked(l.id)?'locked':''}`} style={{left:`${l.x}%`,top:`${l.y}%`}} onClick={()=>setSelectedPlace(l.id)}><span>{locked(l.id)?<Lock size={14}/>:<MapPin size={16}/>}</span><b>{l.name}</b>{residents(l.id).length>0&&<i>{residents(l.id).map(c=><em key={c.id} style={{background:c.color}}/>)}</i>}</button>)}<div className="map-caption">인천과학고 · 게임용 가상 캠퍼스</div></div><aside className="place-card"><img src={asset(locationById[selectedPlace].bg)} alt={locationById[selectedPlace].name+' 분위기 일러스트'}/><div className="place-content"><span className="eyebrow">{locationById[selectedPlace].sub}</span><h2>{locationById[selectedPlace].name}</h2>{locked(selectedPlace)?<p className="empty-place"><Lock size={20}/>{selectedPlace==='walk'?'호감도 40 이상인 친구가 생기면 함께 걸을 수 있어요.':'신뢰도 50 이상인 친구가 있으면 야간 공간이 열려요.'}</p>:residents(selectedPlace).length?residents(selectedPlace).map(c=><button className="resident" key={c.id} disabled={game.actions===0||game.visitedToday.includes(c.id)} onClick={()=>setGame(visit(game,c.id,selectedPlace))}><Portrait id={c.id}/><span><b>{c.name}</b><small>{game.visitedToday.includes(c.id)?'오늘 함께 보낸 시간':'상황별 미니게임 + 대화 · 행동 1'}</small></span><Gamepad2 size={18}/></button>):<div className="empty-place"><CloudMoon size={23}/><p>지금은 조용하네요.<br/>시간이 지나면 이곳에 다른 친구가 올 수도 있어요.</p></div>}<p className="schedule-note">시간·챕터·회차에 따라 위치가 바뀌며, 관계 수치가 높아지면 돌발 이벤트가 생겨요.</p></div></aside></div><div className="map-bottom"><button className="secondary" onClick={()=>setPanel('journal')}><Heart size={16}/>관계 수첩</button><button className="primary" onClick={()=>setGame(nextDay(game))}>{game.actions>0?'오늘 일정을 마치고':'이야기 이어가기'}<ArrowRight size={17}/></button></div></section>}

  {game.phase==='routeSelect'&&<section className="route-screen"><span className="eyebrow">THE MESSAGE YOU WERE WAITING FOR</span><h1>오늘, 가장 만나고 싶은 사람.</h1><p>같은 하루의 끝에서 서로 다른 메시지가 도착했습니다.</p><div className="route-options">{candidates(game).map(id=><button key={id} className="route-letter" onClick={()=>setGame(selectRoute(game,id))}><Portrait id={id}/><span><small>FROM. {characterById[id].name}</small><b>{({world:'미디어실로 와. 카메라는 꺼 놨어.',junyeon:'화학실에 네가 봐 줬으면 하는 게 있어.',hyunsol:'오늘 마지막으로 확인할 게 있어.',taewoo:'운동장으로 나와. 춤추자는 거 아니야.',taehun:'별이 안 보여도 괜찮아. 같이 기다리자.',seoyul:'전시실에 마지막 그림이 남아 있어.'})[id]}</b><i>{characterById[id].tag}</i></span><ArrowRight size={20}/></button>)}{game.haremOffered&&<button className="route-letter hidden-route" onClick={()=>setGame(selectRoute(game,'harem'))}><Sparkles size={32}/><span><small>FROM. 우리 일곱 명</small><b>옥상에서, 함께 이야기해 볼래?</b><i>히든 루트 · 다중성의 해답</i></span><ArrowRight size={20}/></button>}{candidates(game).length===0&&<p className="empty-state">오늘은 특별한 약속이 잡히지 않았어요.<br/>다음 이야기에서는 방과 후의 시간을 조금 더 함께 보내 보세요.</p>}</div><button className="text-button" onClick={()=>setGame(selectRoute(game,'none'))}>혼자 교실로 돌아간다 <ArrowRight size={14}/></button></section>}

  {game.phase==='ending'&&game.ending&&<section className={`ending-screen ${endingById[game.ending].type==='BAD'?'bad-ending':''}`}><div className="ending-emblem">{endingById[game.ending].type==='BAD'?<CloudMoon size={38}/>:<Sparkles size={38}/>}</div><span className="eyebrow">{endingById[game.ending].type} ENDING / MEMORY SAVED</span><h1>{endingById[game.ending].title}</h1><p className="ending-sub">{endingById[game.ending].subtitle}</p><div className="ending-prose">{endingById[game.ending].text.map((text,i)=><p key={i}>{formatted(text)}</p>)}</div><div className="ending-actions"><button className="secondary" onClick={()=>setCutscene(endingCutscene(game.ending!))}><Play size={16}/>컷신 다시 보기</button><button className="secondary" onClick={()=>setPanel('gallery')}><Star size={16}/>기억의 서랍</button><button className="primary" onClick={goHome}><RotateCcw size={17}/>새로운 이야기</button></div><span className="ending-note">이 엔딩은 기억의 서랍에 보관되었습니다. 다음 시작부터 읽은 대사를 넘길 수 있어요.</span></section>}
  </>}

 {toast&&<div className="toast" role="status"><Check size={17}/>{toast}</div>}
 {panel!=='none'&&<Modal title={({settings:'취향에 맞게',save:'그날의 기록',load:'다시 이어지는 이야기',backlog:'지나온 대화',journal:'관계 수첩',gallery:'기억의 서랍',cast:'우리 반의 여섯 얼굴',menu:'잠깐, 쉬어 가기'})[panel]} onClose={()=>{setPanel('none');setConfirmSlot(null);}}>
 {panel==='settings'&&<div className="settings-list"><label>대사 표시 속도 <span>{options.speed===0?'즉시':options.speed<20?'빠르게':options.speed<40?'보통':'천천히'}</span><input type="range" min="0" max="60" value={options.speed} onChange={e=>setOptions(o=>({...o,speed:Number(e.target.value)}))}/></label><label>배경음 볼륨 <span>{Math.round(options.volume*100)}%</span><input type="range" min="0" max="1" step=".05" value={options.volume} onChange={e=>setOptions(o=>({...o,volume:Number(e.target.value)}))}/></label><label className="check-row"><span>오리지널 앰비언트 배경음</span><input type="checkbox" checked={options.sound} onChange={e=>setOptions(o=>({...o,sound:e.target.checked}))}/></label><label className="check-row"><span>선택 후 관계 수치 변화 표시</span><input type="checkbox" checked={options.showStats} onChange={e=>setOptions(o=>({...o,showStats:e.target.checked}))}/></label><div className="control-help"><p><kbd>Space</kbd> <kbd>Enter</kbd> 다음 대사</p><p><kbd>1</kbd> – <kbd>6</kbd> 선택지 <kbd>Esc</kbd> 메뉴</p><p><kbd>Ctrl</kbd> 이미 읽은 대사 빠르게 넘기기</p></div></div>}
 {(panel==='save'||panel==='load')&&<><div className="tabs"><button className={slotMode==='save'?'active':''} disabled={!game} onClick={()=>{setSlotMode('save');setConfirmSlot(null);}}>저장하기</button><button className={slotMode==='load'?'active':''} onClick={()=>{setSlotMode('load');setConfirmSlot(null);}}>불러오기</button></div><div className="save-grid">{['auto',...Array.from({length:10},(_,i)=>String(i+1))].map(slot=>{const saved=getSave(slot),blocked=slotMode==='save'?slot==='auto'||!game:!saved;return <button key={slot} className="save-slot" disabled={blocked} onClick={()=>{if(slotMode==='load'){load(slot);return;}if(saved&&confirmSlot!==slot){setConfirmSlot(slot);return;}if(game&&saveGame(slot,game)){showToast(`${slot}번 슬롯에 저장했어요.`);setConfirmSlot(null);setPanel('none');}else showToast('저장 공간을 확인해 주세요.');}}><span className="eyebrow">{slot==='auto'?'AUTO SAVE':`SLOT ${slot.padStart(2,'0')}`}</span>{saved?<><b>{saved.state.name} · {activeScene(saved.state).title}</b><small>{new Date(saved.savedAt).toLocaleString('ko-KR')}</small></>:<b>아직 쓰이지 않은 페이지</b>}{confirmSlot===slot&&<em>기존 기록을 덮어쓰려면 한 번 더 눌러 주세요.</em>}</button>;})}</div></>}
 {panel==='backlog'&&<div className="backlog">{game?.backlog.length?game.backlog.map((l,i)=><div key={i}><b>{label(l.speaker,game.name)||'독백'}</b><p>{formatted(l.text)}</p></div>):<p>아직 기록된 대화가 없어요.</p>}</div>}
 {panel==='journal'&&game&&<><div className="journal-summary">{Object.entries(game.global).map(([key,val])=><Meter key={key} name={({harmony:'1반 조화',fair:'페어 완성도',reputation:'교내 평판',ethics:'연구 윤리',safety:'안전 관리'} as Record<string,string>)[key]} value={val}/>)}</div><div className="relationship-grid">{characters.map(c=><div className="relation-card" key={c.id}><div className="relation-top"><Portrait id={c.id}/><div><h3>{c.name}</h3><p>{c.role}</p></div></div><Meter name="호감" value={game.stats[c.id].affection} color={c.color}/><Meter name="신뢰" value={game.stats[c.id].trust}/><Meter name="질투" value={game.stats[c.id].jealousy} color="#bc8585"/><Meter name={c.specialLabel} value={game.stats[c.id].special} color={c.color}/><small>방과 후 함께한 시간 {game.visits[c.id]}회</small></div>)}</div><p className="muted-note">호감만으로는 충분하지 않아요. 지킬 수 있는 약속과 서로의 경계가 신뢰를 만듭니다.</p></>}
 {panel==='cast'&&<><div className="cast-tabs">{characters.map(c=><button className={profile===c.id?'active':''} key={c.id} onClick={()=>setProfile(c.id)}>{c.name}</button>)}</div><div className="profile-layout"><Portrait id={profile}/><div><span className="eyebrow">1학년 1반 / {characterById[profile].role}</span><h2>{characterById[profile].name}</h2><h3>{characterById[profile].tag}</h3><p>{characterById[profile].bio}</p><blockquote>“{characterById[profile].quote}”</blockquote></div></div></>}
 {panel==='gallery'&&<><div className="tabs"><button className={galleryType==='endings'?'active':''} onClick={()=>setGalleryType('endings')}>엔딩 {meta.endings.length} / {endings.length}</button><button className={galleryType==='art'?'active':''} onClick={()=>setGalleryType('art')}>풍경과 인물</button><button className={galleryType==='episodes'?'active':''} onClick={()=>setGalleryType('episodes')}>새 컷씬 42</button></div>{galleryType==='episodes'?<EpisodeGallery flags={game?.flags??[]} onPlay={previewEpisode} character={galleryCharacter} onCharacter={setGalleryCharacter}/>:galleryType==='art'?<div className="art-gallery">{galleryArt.map(item=><figure key={item.key}><img src={asset(item.key)} alt={item.alt}/><figcaption>{item.label}</figcaption>{item.event&&<button className="secondary gallery-cutscene" onClick={()=>{setPanel('none');setCutscene(eventCutscene(item.event![0],'chance',item.event![1],`gallery-${item.event![0]}`));}}><Play size={15}/>돌발 컷신 재생</button>}</figure>)}</div>:<div className="ending-gallery">{endings.map(e=>{const unlocked=meta.endings.includes(e.id);return <details key={e.id} className={unlocked?'unlocked':''}><summary>{unlocked?<Star size={16}/>:<Lock size={15}/>}<span><small>{e.type} {e.character?`· ${characterById[e.character].name}`:''}</small><b>{unlocked?e.title:'아직 만나지 않은 결말'}</b></span><ChevronRight size={16}/></summary><div>{unlocked?<>{e.text.map((p,i)=><p key={i}>{formatted(p)}</p>)}<button className="secondary gallery-cutscene" onClick={()=>{setPanel('none');setCutscene(endingCutscene(e.id));}}><Play size={15}/>컷신 재생</button></>:<p>{e.hint}</p>}</div></details>;})}</div>}</>}
 {panel==='menu'&&<div className="pause-menu">{game&&<><button onClick={()=>setPanel('none')}><Play size={18}/>계속하기</button><button onClick={()=>{setSlotMode('save');setPanel('save');}}><Save size={18}/>저장 · 불러오기</button><button onClick={()=>setPanel('journal')}><Heart size={18}/>관계 수첩</button></>}<button onClick={()=>setPanel('gallery')}><Star size={18}/>기억의 서랍</button><button onClick={()=>setPanel('settings')}><Settings size={18}/>설정</button><button onClick={goHome}><Home size={18}/>처음 화면으로</button><p>진행 상황은 자동 저장됩니다.<br/>저장 기록은 지금 사용하는 브라우저에 보관돼요.</p></div>}
 </Modal>}
 </main>;
}
