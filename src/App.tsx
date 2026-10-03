import {useEffect,useRef,useState, type CSSProperties, type FormEvent, type ReactNode} from 'react';
import {ArrowRight,BookOpen,Check,ChevronRight,Clock,FlaskConical,Heart,Home,MapPin,Maximize,Menu,Music2,Pause,Play,Save,Settings,SkipForward,Sparkles,Star,Sun,Volume2,VolumeX,X,Lock,NotebookPen,RotateCcw,CloudMoon,Gamepad2,Search} from 'lucide-react';
import {characters,characterById,locationById} from './data/characters';
import {commonScenes} from './data/common';
import {SchoolPortrait,portraitAsset} from './SchoolPortrait';
import {ClassroomMystery} from './ClassroomMystery';
import {schoolCharacters,schoolById,type ExtraId,type SchoolId} from './data/classroomMystery';
import {newClassroomState,bondAvailable,solvedCases,closeNotebook,openCase,type ClassroomState} from './engine/classroomMystery';
import {endings,endingById} from './data/endings';
import {activeScene,activeLines,choose,newGame,candidates,validName,readKey,ids,haremEligible,completeActivity,type GameState,type Meta} from './engine/game';
import {getSave,saveGame,getMeta,storeMeta,readJSON,writeJSON} from './engine/storage';
import {music} from './engine/audio';
import {endingCutscene,eventCutscene,eventKindFromScene,type CutsceneSpec} from './engine/cutscenes';
import type {CharacterId,LocationId,Line} from './types';
import {episodeCutscene} from './engine/episodes';
import {CutsceneProps,EpisodeGallery} from './CutsceneDetails';
import {advanceWithCases as advance,nextDayWithCases as nextDay,visitWithCases as visit,selectRouteWithCases as selectRoute,requiredCase,ensureRequiredCase,caseModalRequired,investigationFor,availableDiscoveries,discoverEvidence,goToTrial,schoolLocation,startSchoolBond,completeSchoolActivity,applyClassroom} from './engine/schoolFlow';
import {ActivityScreen} from './ActivityScreen';
import {shuffleChoices} from './engine/choiceOrder';
import {CampusMap} from './CampusMap';
import {SchoolBondScene} from './SchoolBondScene';
import {schoolActivity} from './data/extraDaily';
import {FieldInvestigation,InvestigationBrief} from './FieldInvestigation';

const asset=(name:string)=>`${import.meta.env.BASE_URL}assets/${name}.${name.startsWith('locations/')?'png':'webp'}`;
const label=(speaker:Line['speaker'],name:string)=>speaker==='player'?name:speaker==='narrator'?'':speaker==='teacher'?'담임 선생님':speaker==='student'?'1반 친구':speaker==='alter'?'얼터에고':schoolById[speaker].name;
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
const decisionPrompts:Record<string,string>={
 'common-0':'첫 지도의 빈칸에 무엇을 남길까?',
 'common-1':'깨진 비커 앞에서 누구의 안전을 먼저 살필까?',
 'common-2':'점심시간 한 번으로 어떤 약속을 지킬까?',
 'common-3':'서로 다른 반응을 하나의 전시로 어떻게 묶을까?',
 'common-4':'미완성 노래와 영상을 어디까지 보여 줄까?',
 'common-5':'여덟 번째 박자 전에 무엇을 확인할까?',
 'common-6':'관측값과 쓰다 만 문장을 어떻게 다룰까?',
 'common-7':'먼저 한 약속과 지금 마음 사이에서 어디에 앉을까?',
 'common-8':'다르게 나온 값도 발표에 남길 수 있을까?',
 'common-9':'잘린 장면 대신 어떤 사실을 보여 줄까?',
 'common-10':'오늘 못 지킬 약속에는 무엇이라고 답할까?',
 'common-11':'세 갈래의 문제 중 내가 직접 맡을 일은?',
 'common-12':'사라진 파일을 어떤 순서로 되찾을까?',
 'common-13':'행사가 끝난 뒤 누구와 어떤 약속을 남길까?',
};
function Portrait({id,className=''}:{id:SchoolId;className?:string}){return <SchoolPortrait id={id} className={className}/>;}
function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:ReactNode}){const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{ref.current?.showModal();},[]);return <dialog ref={ref} className="modal" onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===ref.current)onClose();}}><div className="modal-shell"><div className="modal-head"><div><span className="eyebrow">RE:ACTION / NOTEBOOK</span><h2>{title}</h2></div><button className="icon-button" aria-label="닫기" onClick={onClose}><X size={22}/></button></div><div className="modal-body">{children}</div></div></dialog>;}
function Meter({name,value,color}:{name:string;value:number;color?:string}){return <div className="meter"><div><span>{name}</span><span>{value}</span></div><div className="meter-track"><i style={{width:`${value}%`,background:color}}/></div></div>;}

function CutsceneScreen({spec,onDone}:{spec:CutsceneSpec;onDone:()=>void}){
 const [beat,setBeat]=useState(0);
 const screen=useRef<HTMLElement>(null);
 useEffect(()=>{const overflow=document.body.style.overflow;document.body.style.overflow='hidden';screen.current?.querySelector('button')?.focus();return()=>{document.body.style.overflow=overflow;};},[]);
 useEffect(()=>{setBeat(0);},[spec.key]);
 const final=beat===spec.beats.length;
 return <section ref={screen} onKeyDown={event=>{
  if(event.key==='Escape'){event.preventDefault();onDone();}
  if(event.key==='Tab'){
   const buttons=screen.current?.querySelectorAll('button');if(!buttons?.length)return;
   if(event.shiftKey&&document.activeElement===buttons[0]){event.preventDefault();buttons[buttons.length-1].focus();}
   else if(!event.shiftKey&&document.activeElement===buttons[buttons.length-1]){event.preventDefault();buttons[0].focus();}
  }
 }} className={`cutscene cutscene-${spec.mood}`} role="dialog" aria-modal="true" aria-label={`${spec.title} 컷신`}>
  <div className="cutscene-image" key={spec.key} style={{backgroundImage:`url(${asset(spec.art??spec.background)})`}}/>
  {!spec.art&&spec.character&&<div className="cutscene-actor"><Portrait id={spec.character}/></div>}
  {!spec.art&&spec.motif&&spec.props&&!final&&<CutsceneProps key={`${spec.key}:prop:${beat}`} motif={spec.motif} caption={spec.props[beat]} beat={beat}/>}
  <div className="cutscene-vignette"/><div className="cutscene-flare"/><div className="cutscene-letterbox top"/><div className="cutscene-letterbox bottom"/>
  <div className={`cutscene-copy ${final?'final':''}`} key={`copy:${spec.key}:${beat}`} aria-live="polite">
   <span>{spec.label}</span>{final?<><h1>{spec.title}</h1><p>{spec.subtitle}</p></>:<><small>SCENE {String(beat+1).padStart(2,'0')}</small><p>{spec.beats[beat]}</p></>}
  </div>
  <div className="cutscene-controls"><div className="cutscene-progress">{spec.beats.map((_,index)=><i key={index} className={index<=beat?'active':''}/>)}</div><button onClick={()=>final?onDone():setBeat(value=>value+1)}><ArrowRight size={15}/>{final?'돌아가기':'다음 장면'}</button><button onClick={onDone}><SkipForward size={15}/>건너뛰기</button></div>
 </section>;
}


export default function App(){
 const [game,setGame]=useState<GameState|null>(null),[name,setName]=useState(''),[error,setError]=useState('');
 const [meta,setMeta]=useState<Meta>(getMeta),[panel,setPanel]=useState<Panel>('none'),[toast,setToast]=useState('');
 const [options,setOptions]=useState<Options>(()=>{const x=readJSON('options') as Partial<Options>|null;return {speed:typeof x?.speed==='number'?Math.max(0,Math.min(60,x.speed)):24,volume:typeof x?.volume==='number'?Math.max(0,Math.min(1,x.volume)):.3,sound:false,showStats:!!x?.showStats};});
 const [auto,setAuto]=useState(false),[skip,setSkip]=useState(false),[visible,setVisible]=useState(0),[selectedPlace,setSelectedPlace]=useState<LocationId>('classroom');
 const [slotMode,setSlotMode]=useState<'save'|'load'>('save'),[confirmSlot,setConfirmSlot]=useState<string|null>(null),[galleryType,setGalleryType]=useState<'endings'|'art'|'episodes'>('endings'),[profile,setProfile]=useState<SchoolId>('world');
 const [cutscene,setCutscene]=useState<CutsceneSpec|null>(null),playedCutscenes=useRef(new Set<string>()),returnToGallery=useRef(false);
 const [mysteryOpen,setMysteryOpen]=useState(false);
 const [fieldInspection,setFieldInspection]=useState<{caseId:string;evidenceId:string;location:LocationId}|null>(null);
 const classroom=game?.classroom??newClassroomState();
 const bondActive=classroom.active?.kind==='bond';
 const investigation=game?investigationFor(game):null;
 const discoveries=game?availableDiscoveries(game):[];
 const localDiscoveries=game?availableDiscoveries(game,selectedPlace):[];
 const fieldDiscovery=investigation&&fieldInspection?.caseId===investigation.id?discoveries.find(item=>item.evidenceId===fieldInspection.evidenceId):undefined;
 const discoveryCounts=Object.fromEntries(discoveries.map(item=>investigation!.evidence.find(e=>e.id===item.evidenceId)!.location).map((place,_,places)=>[place,places.filter(value=>value===place).length])) as Partial<Record<LocationId,number>>;
 const [galleryCharacter,setGalleryCharacter]=useState<CharacterId>('world');
 const gameRef=useRef(game),metaRef=useRef(meta);gameRef.current=game;metaRef.current=meta;
 const scene=game?activeScene(game):null,lines=game?activeLines(game):[],line=game?lines[game.line]:null;
 const formatted=(text:string)=>text.replaceAll('{name}',game?.name??'당신');
 const lineText=line?formatted(line.text):'';
 const lineId=game?readKey(game):'title';
 const choiceVisible=!!game&&game.phase==='story'&&!game.response&&game.line>=lines.length;
 const visibleChoices=game&&scene?shuffleChoices(scene.choices,`${game.seed}:story:${scene.id}:${game.chapter}:${game.routeChapter}:${game.visitor?game.visits[game.visitor]:0}`):[];
 const actor=line&&schoolCharacters.some(c=>c.id===line.speaker)?line.speaker as SchoolId:null;
 const choiceActor=choiceVisible?[...lines].reverse().find(item=>schoolCharacters.some(c=>c.id===item.speaker))?.speaker as SchoolId|undefined:undefined;
 const stagedActor=actor??choiceActor;
 const bg=bondActive&&classroom.active?.kind==='bond'?locationById[classroom.active.location??schoolById[classroom.active.id].location].bg:game&&scene?locationById[scene.location].bg:'classroom';
 const showToast=(s:string)=>setToast(s);

 useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),3300);return()=>clearTimeout(t);},[toast]);
 useEffect(()=>{writeJSON('options',options);music(options.sound,options.volume);return()=>music(false,0);},[options]);
 useEffect(()=>{if(!game)return;if(!saveGame('auto',game))showToast('브라우저 저장 공간이 부족해 자동 저장하지 못했어요.');},[game]);
 useEffect(()=>{storeMeta(meta);},[meta]);
 useEffect(()=>{if(!game)return;const value=ensureRequiredCase(game);if(value!==game)setGame(value);if(caseModalRequired(value)&&value.classroom?.active?.kind!=='bond'){setMysteryOpen(true);setPanel('none');setAuto(false);setSkip(false);}else if(value.classroom?.active?.kind==='bond')setMysteryOpen(false);},[game]);
 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[game?.phase,scene?.id,bondActive]);
 useEffect(()=>{
  if(!game)return;
  if(game.phase==='ending'&&game.ending&&!meta.endings.includes(game.ending))setMeta(m=>({...m,endings:[...m.endings,game.ending!]}));
  if(game.phase==='routeSelect'&&haremEligible(game)&&!meta.attempted.includes(game.seed))setMeta(m=>({...m,attempted:[...m.attempted,game.seed],failures:m.failures+(game.haremOffered?0:1)}));
 },[game,meta.endings,meta.attempted]);
 useEffect(()=>{
  if(!game||cutscene)return;
  let nextCutscene:CutsceneSpec|null=null;
  if(game.phase==='ending'&&game.ending)nextCutscene=endingCutscene(game.ending);
  else if(game.phase==='story'&&game.segment==='hangout'&&game.visitor&&scene&&scene.cutsceneAt!==undefined&&game.line===scene.cutsceneAt&&!game.response){
   if(scene.cutsceneId&&!game.flags.includes(`episode-watched:${scene.cutsceneId}`))nextCutscene=episodeCutscene(scene.cutsceneId);
   else if(!scene.cutsceneId&&!game.flags.includes(`cutscene-watched:${scene.id}`)){const kind=eventKindFromScene(scene.id);if(kind)nextCutscene=eventCutscene(game.visitor,kind,scene.location,scene.id);}
  }
  if(nextCutscene&&!playedCutscenes.current.has(nextCutscene.key)){playedCutscenes.current.add(nextCutscene.key);setCutscene(nextCutscene);}
 },[game,scene,cutscene]);
 useEffect(()=>{setVisible(options.speed===0?lineText.length:0);if(options.speed===0)return;const t=setInterval(()=>setVisible(v=>{if(v>=lineText.length){clearInterval(t);return v;}return v+2;}),options.speed);return()=>clearInterval(t);},[lineId,lineText,options.speed]);
 function next(){const g=gameRef.current;if(!g||g.phase!=='story'||panel!=='none'||cutscene||mysteryOpen||fieldInspection||g.classroom?.active?.kind==='bond')return;if(visible<lineText.length){setVisible(lineText.length);return;}if(g.line<activeLines(g).length){const key=readKey(g);setMeta(m=>m.read.includes(key)?m:{...m,read:[...m.read,key]});}setGame(advance(g,metaRef.current));}
 function pick(index:number){if(!game)return;const c=activeScene(game).choices[index];if(!c)return;setGame(choose(game,index));if(options.showStats)showToast(c.effects.slice(0,4).map(e=>`${e.target==='global'?({harmony:'조화',fair:'완성',ethics:'윤리',safety:'안전',reputation:'평판'} as Record<string,string>)[e.stat]:characterById[e.target].name+' '+({affection:'호감',trust:'신뢰',jealousy:'질투',special:characterById[e.target].specialLabel} as Record<string,string>)[e.stat]} ${e.amount>0?'+':''}${e.amount}`).join(' · '));}
 useEffect(()=>{if(!game||game.phase!=='story'||panel!=='none'||choiceVisible||cutscene||mysteryOpen||fieldInspection)return;const isRead=meta.read.includes(lineId);if(skip&&!isRead){setSkip(false);return;}if(!auto&&!skip)return;const t=setTimeout(()=>{setVisible(lineText.length);if(visible>=lineText.length||skip){if(game.line<lines.length)setMeta(m=>m.read.includes(lineId)?m:{...m,read:[...m.read,lineId]});setGame(advance(game,metaRef.current));}},skip?50:Math.max(1400,lineText.length*55));return()=>clearTimeout(t);},[auto,skip,game,lineId,visible,lineText,panel,choiceVisible,cutscene,mysteryOpen,fieldInspection]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(bondActive||mysteryOpen||fieldInspection||cutscene||(e.target as HTMLElement)?.matches('input,textarea,select')||e.isComposing)return;if(e.key==='Escape'){e.preventDefault();setPanel(p=>p==='none'?'menu':'none');return;}if(panel!=='none'||gameRef.current?.phase==='activity')return;if(e.key==='Enter'||e.code==='Space'){e.preventDefault();next();}if(/^[1-6]$/.test(e.key)&&choiceVisible){e.preventDefault();const selected=visibleChoices[Number(e.key)-1];if(selected)pick(selected.index);}if(e.key==='Control')setSkip(true);};const up=(e:KeyboardEvent)=>{if(e.key==='Control')setSkip(false);};window.addEventListener('keydown',key);window.addEventListener('keyup',up);return()=>{window.removeEventListener('keydown',key);window.removeEventListener('keyup',up);};});

 function start(e:FormEvent){e.preventDefault();if(!validName(name)){setError('이름을 1~12자로 입력해 주세요. 한글·영문·숫자를 사용할 수 있어요.');return;}const seed=crypto.getRandomValues(new Uint32Array(1))[0];playedCutscenes.current.clear();setGame(newGame(name,seed,meta.endings.length>0));setError('');setAuto(false);setSkip(false);}
 function load(slot:string){const saved=getSave(slot);if(saved){playedCutscenes.current.clear();setFieldInspection(null);setGame(saved.state);setMysteryOpen(saved.state.classroom?.active?.kind==='case');setPanel('none');setAuto(false);setSkip(false);showToast('그날의 이야기를 불러왔어요.');}else showToast('유효한 저장 기록이 없어요.');}
 function goHome(){setMysteryOpen(false);setFieldInspection(null);setGame(null);setName('');setPanel('none');setAuto(false);setSkip(false);}
 function fullscreen(){if(document.fullscreenElement)void document.exitFullscreen();else void document.documentElement.requestFullscreen().catch(()=>showToast('이 브라우저에서는 전체화면을 지원하지 않아요.'));}
 const dayLabel=game?.segment==='common'&&game.chapter===4&&classroom.cases.echo.phase==='solved'?'FAIR DAY':scene?scene.day>0?`D − ${scene.day}`:scene.day===0?'FAIR DAY':`AFTER + ${-scene.day}`:'D − 64';
 function residents(place:LocationId){if(!game)return [];return schoolCharacters.filter(c=>schoolLocation(game,c.id)===place);}
 function isVisited(id:SchoolId){return id==='juhan'||id==='minhyuk'?classroom.bonds[id].days.includes(game?.chapter??0):!!game?.visitedToday.includes(id);}
 function personAvailable(id:SchoolId){if(!game||game.actions<1||caseModalRequired(game))return false;return id==='juhan'||id==='minhyuk'?bondAvailable(classroom,id,game.chapter):!game.visitedToday.includes(id);}
 function waitingForTrial(id:SchoolId){return !!game&&(id==='juhan'||id==='minhyuk')&&!isVisited(id)&&classroom.active===null&&!bondAvailable(classroom,id,game.chapter);}
 function meet(id:SchoolId,activity=false){if(!game)return;if(id==='juhan'||id==='minhyuk'){startExtraBond(id,activity);return;}setGame(visit(game,id,activity?selectedPlace:undefined));}
 function locked(place:LocationId){if(!game||investigation?.evidence.some(e=>e.location===place))return false;return (place==='walk'&&!ids.some(id=>game.stats[id].affection>=40))||(place==='roof'&&!ids.some(id=>game.stats[id].trust>=50));}

 function previewEpisode(spec:CutsceneSpec){returnToGallery.current=true;setPanel('none');setCutscene(spec);}
 function finishCutscene(){
  if(returnToGallery.current){returnToGallery.current=false;setPanel('gallery');}
  else if(cutscene?.key.startsWith('episode:')){
   const flag='episode-watched:'+cutscene.key.slice('episode:'.length);
   setGame(current=>current&&!current.flags.includes(flag)?{...current,flags:[...current.flags,flag]}:current);
  }
  else if(cutscene?.key.startsWith('event:')&&scene){
   const flag=`cutscene-watched:${scene.id}`;
   setGame(current=>current&&!current.flags.includes(flag)?{...current,flags:[...current.flags,flag]}:current);
  }
  setCutscene(null);
 }
 function openNotebook(){if(!game||bondActive||fieldInspection)return;setPanel('none');setAuto(false);setSkip(false);setMysteryOpen(true);const file=requiredCase(game);if(file&&classroom.cases[file.id].phase==='investigation')setGame({...game,classroom:openCase(classroom,file.id,game.chapter)});else if(!game.classroom)setGame({...game,classroom:newClassroomState()});}
 function changeClassroom(value:ClassroomState){const before=gameRef.current;if(!before)return;const required=requiredCase(before),finished=required&&value.cases[required.id].phase==='solved',startExploring=required&&before.classroom?.cases[required.id].phase==='opening'&&value.cases[required.id].phase==='investigation';let next=applyClassroom(before,value);if(finished&&!requiredCase(next)){next={...next,classroom:{...value,active:null}};setMysteryOpen(false);showToast('사건을 해결했어요. 남은 방과 후 일정을 이어 갈 수 있어요.');}else if(startExploring){setMysteryOpen(false);setSelectedPlace(required.evidence[0].location);showToast('학교 지도가 열렸어요. 현장을 살펴 단서를 찾아보세요.');}setGame(next);}
 function inspectField(evidenceId:string){if(!investigation||!localDiscoveries.some(item=>item.evidenceId===evidenceId))return;setAuto(false);setSkip(false);setFieldInspection({caseId:investigation.id,evidenceId,location:selectedPlace});}
 function registerField(){const before=gameRef.current;if(!before||!fieldInspection||!fieldDiscovery)return;const next=discoverEvidence(before,fieldInspection.evidenceId,fieldInspection.location);if(next===before)return;setGame({...next,backlog:[...next.backlog,{speaker:'narrator' as const,text:`〈현장 조사〉 ${locationById[fieldInspection.location].name} · ${fieldDiscovery.spot}`},...fieldDiscovery.lines].slice(-800)});setFieldInspection(null);showToast('증거를 수첩에 등록했어요. 지도에서 다음 조사 장소를 확인하세요.');}
 function startExtraBond(id:ExtraId,activity=false){if(!game)return;const next=startSchoolBond(game,id,selectedPlace,activity);if(next===game)return;setGame(next);setMysteryOpen(false);setAuto(false);setSkip(false);}
 function closeMystery(){if(!game)return;if(caseModalRequired(game)){showToast('사건 도입과 학급재판은 끝까지 진행해야 해요.');return;}changeClassroom(closeNotebook(classroom));setMysteryOpen(false);}
 return <main className={`app school-trial-theme ${game?'in-game':'on-title'}`}>
  {game&&mysteryOpen&&<ClassroomMystery state={classroom} seed={game.seed} chapter={game.chapter} name={game.name} required={caseModalRequired(game)} onChange={changeClassroom} onClose={closeMystery}/>}
  {game&&investigation&&fieldDiscovery&&<FieldInvestigation key={fieldDiscovery.evidenceId} file={investigation} discovery={fieldDiscovery} name={game.name} onClose={()=>setFieldInspection(null)} onRegister={registerField}/>}

  {cutscene&&<CutsceneScreen spec={cutscene} onDone={finishCutscene}/>}
  <div className={`scene-background bg-${bg}`} style={{backgroundImage:`url(${asset(bg)})`}}/><div className="scene-wash"/><div className="grain"/>
  <header className="topbar" inert={mysteryOpen||!!fieldInspection||!!cutscene}><button className="brand" onClick={()=>game?setPanel('menu'):setPanel('none')} aria-label="RE:ACTION 메뉴"><FlaskConical size={23}/><span>RE:ACTION<i>인천과학고 · 연애와 학급재판</i></span></button><div className="topbar-right">{game?<span className="date-badge"><Sun size={14}/>{dayLabel}<span>1학년 1반</span></span>:<span className="edition">LOVE × CLASS TRIAL</span>}<button className="icon-button" aria-label={options.sound?'배경음 끄기':'배경음 켜기'} onClick={()=>setOptions(o=>({...o,sound:!o.sound}))}>{options.sound?<Volume2 size={18}/>:<VolumeX size={18}/>}</button><button className="icon-button" aria-label="설정" onClick={()=>setPanel('settings')}><Settings size={18}/></button><button className="icon-button fullscreen" aria-label="전체화면" onClick={fullscreen}><Maximize size={18}/></button>{game&&<button className="icon-button" aria-label="게임 메뉴" onClick={()=>setPanel('menu')}><Menu size={20}/></button>}</div></header>

  {!game?<section className="title-screen"><div className="title-content"><div className="tiny-label"><span/> OUR STORY STARTS HERE</div><h1><small>인천과학고 · 연애와 학급재판</small>RE<span>:</span>ACTION<span className="title-flower">✳</span></h1><p className="title-kicker">아직 증명하지 못한, 우리 사이의 반응.</p><p className="title-description">낯선 교실, 여덟 번의 만남.<br/>사이언스 페어까지 남은 64일,<br/>이 이야기는 당신의 이름으로 시작됩니다.</p><form className="name-form" onSubmit={start}><label htmlFor="player-name">새로 온 전학생, 이름이 뭐야?<span>01 / INTRODUCTION</span></label><div className={`name-field ${error?'invalid':''}`}><input id="player-name" autoComplete="off" value={name} onChange={e=>{setName(e.target.value);setError('');}} maxLength={12} placeholder="당신의 이름을 입력해 주세요" aria-invalid={!!error} aria-describedby="name-help"/><NotebookPen size={19}/></div><p id="name-help" className={error?'form-error':'form-hint'}>{error||'이름은 1~12자 · 이야기 속 모든 대사에 반영돼요'}</p><button className="primary start-button" type="submit" disabled={!name.trim()}>우리의 이야기 시작하기<ArrowRight size={19}/></button></form><div className="title-links"><button onClick={()=>{setSlotMode('load');setPanel('load');}}><BookOpen size={15}/>이어서 하기</button><span/><button onClick={()=>setPanel('gallery')}><Star size={15}/>기억의 서랍 <small>{meta.endings.length}</small></button></div></div><div className="title-note"><span>MEMORY NO. 001</span><p>마음은, 실험처럼<br/>예측할 수 없어서.</p><i>— 방과 후의 1학년 1반</i></div><div className="meet-strip"><div><span className="eyebrow">EIGHT DIFFERENT REACTIONS</span><p>너를 기다리는 여덟 가지 이야기</p></div><div className="meet-faces">{schoolCharacters.map(c=><button key={c.id} aria-label={`${c.name} 소개`} onClick={()=>{setProfile(c.id);setPanel('cast');}}><Portrait id={c.id}/><span>{c.name}</span></button>)}</div><button className="meet-more" aria-label="등장인물 소개" onClick={()=>setPanel('cast')}><ArrowRight size={22}/></button></div><footer className="title-footer"><span>SCHOOL ROMANCE × MYSTERY · 5 CHAPTERS / 5 TRIALS</span><span>등장인물·사건·시설 배치는 모두 허구입니다.</span></footer></section>:
  <>
  {bondActive&&(classroom.activity?<div className="extra-activity-layer"><ActivityScreen game={game} paused={panel!=='none'||!!cutscene||mysteryOpen||!!fieldInspection} person={classroom.activity.id} overrideActivity={schoolActivity(classroom.activity.id,game.chapter,classroom.activity.location,game.seed)} onFinish={score=>setGame(completeSchoolActivity(game,score))}/></div>:<SchoolBondScene state={classroom} seed={game.seed} name={game.name} speed={options.speed} paused={panel!=='none'} onChange={changeClassroom} onJournal={()=>setPanel('journal')} onSave={()=>{setSlotMode('save');setPanel('save');}} onPause={()=>setPanel('menu')}/>)}
  {game.phase==='activity'&&<ActivityScreen game={game} paused={panel!=='none'||!!cutscene||mysteryOpen||!!fieldInspection} onFinish={score=>{setGame(completeActivity(game,score));showToast(score===3?'완벽한 호흡! 관계가 크게 깊어졌어요.':score>0?'함께한 활동이 대화의 문을 열었어요.':'결과보다 함께 시도한 시간이 남았어요.');}}/>}
  {game.phase==='story'&&<section className="story-screen" inert={mysteryOpen||!!fieldInspection||!!cutscene}><div className="scene-meta"><span className="eyebrow">{game.segment==='common'?'COMMON ROUTE':game.segment==='hangout'?(scene!.id.includes('-event-')?'SURPRISE EVENT':'AFTER SCHOOL'):game.segment==='harem'?'HIDDEN ROUTE':`${characterById[game.route!].name} ROUTE`}</span><h2>{scene!.title}</h2><span><MapPin size={13}/>{locationById[scene!.location].name}</span></div><div className="chapter-ribbon">{game.segment==='common'?String(game.chapter+1).padStart(2,'0'):String(game.routeChapter+1).padStart(2,'0')}<span>CHAPTER</span></div>{stagedActor&&<div className="actor-panel" key={stagedActor}><Portrait id={stagedActor} className="actor-portrait"/><div className="actor-caption"><span style={{background:schoolById[stagedActor].color}}/>{schoolById[stagedActor].role}</div></div>}
   {choiceVisible?<div className="choice-block"><div className="choice-prompt"><span/><Sparkles size={15}/>{(scene!.narrative===2?`${scene!.title} · 지금의 선택`:decisionPrompts[scene!.id])??(game.segment==='hangout'?scene!.title:`${scene!.title} · 지금의 대답`)}<span/></div>{visibleChoices.map(({value:c,index},displayIndex)=><button key={c.id} onClick={()=>pick(index)}><small>{String(displayIndex+1).padStart(2,'0')}</small><span>{formatted(c.text)}</span><ChevronRight size={19}/></button>)}</div>:<button className={`dialogue ${line?.speaker==='narrator'?'narrator-dialogue':''}`} onClick={next} aria-label="다음 대사">{line?.speaker!=='narrator'&&<div className="speaker-line"><span style={{borderColor:actor?schoolById[actor].color:undefined}}>{line?label(line.speaker,game.name):'이어서'}</span></div>}<p>{lineText.slice(0,visible)}<span className="type-cursor">{visible<lineText.length?'▏':''}</span></p><div className="dialogue-bottom"><span>{visible<lineText.length?'CLICK TO REVEAL':'CLICK OR PRESS SPACE'}</span><ChevronRight size={17}/></div></button>}
   <nav className="story-toolbar" aria-label="대화 도구"><button onClick={()=>setPanel('backlog')}><BookOpen size={14}/>기록</button><button className={auto?'active':''} onClick={()=>{setAuto(!auto);setSkip(false);}}>{auto?<Pause size={14}/>:<Play size={14}/>}자동</button><button className={skip?'active':''} onClick={()=>{if(!meta.read.includes(lineId)){showToast('이미 읽은 대사만 빠르게 넘길 수 있어요.');return;}setSkip(!skip);setAuto(false);}}><SkipForward size={14}/>읽은 대사</button><span/><button onClick={openNotebook}><NotebookPen size={14}/>사건</button><button onClick={()=>setPanel('journal')}><Heart size={14}/>관계</button><button onClick={()=>{setSlotMode('save');setPanel('save');}}><Save size={14}/>저장</button></nav>
  </section>}

  {game.phase==='map'&&!bondActive&&<section className="map-screen" inert={mysteryOpen||!!fieldInspection||!!cutscene}>
   <div className="map-heading"><div><span className="eyebrow">{investigation?'FREE ACTION × FIELD INVESTIGATION':'A LIVING TIMETABLE / 8 CLASSMATES'}</span><h1>{investigation?'우리 반의 하루, 현장 속 단서':'방과 후, 어디로 갈까?'}</h1><p>{investigation?'친구와 시간을 보내며, 장소마다 남은 자료와 증언을 직접 확인하세요.':'지도에서 장소를 고르고, 그곳의 친구와 이야기하거나 함께 활동해 보세요.'}</p></div><div className="action-points"><Clock size={17}/>{game.actions>0?`방과 후 · 남은 행동 ${game.actions}`:investigation?'만남 종료 · 현장 조사 가능':'하루의 끝'}<span>{Array.from({length:3},(_,i)=><i key={i} className={i<game.actions?'filled':''}/>)}</span></div></div>
   <button className="casebook-banner" onClick={openNotebook}><NotebookPen size={20}/><span><b>1반 사건 기록</b><i>해결 {solvedCases(classroom)}/5 · 매 장의 사건과 학급재판을 해결하면 다음 일정이 열립니다.</i></span><ArrowRight size={18}/></button>
   {investigation&&<InvestigationBrief file={investigation} clues={classroom.cases[investigation.id].clues} available={discoveries} name={game.name} onSelect={place=>{setSelectedPlace(place);document.querySelector('.place-content')?.scrollTo({top:0});}} onTrial={()=>setGame(goToTrial(game))}/>}
   <div className="map-layout">
    <CampusMap selected={selectedPlace} students={schoolCharacters.map(c=>({id:c.id,name:c.name,color:c.color,place:schoolLocation(game,c.id),available:personAvailable(c.id),visited:isVisited(c.id),waiting:waitingForTrial(c.id)}))} discoveries={discoveryCounts} locked={locked} onSelect={place=>{setSelectedPlace(place);document.querySelector('.place-content')?.scrollTo({top:0});}}/>
    <aside className="place-card"><img src={asset(locationById[selectedPlace].bg)} alt={locationById[selectedPlace].name+' 분위기 일러스트'}/><div className="place-content"><span className="eyebrow">{locationById[selectedPlace].sub}</span><h2>{locationById[selectedPlace].name}</h2>
     {investigation&&<section className="local-investigation" aria-label={`${locationById[selectedPlace].name} 현장 조사`}><h3><Search size={16}/>현장 조사</h3>{localDiscoveries.length?localDiscoveries.map(discovery=><button key={discovery.evidenceId} onClick={()=>inspectField(discovery.evidenceId)}><b><Search size={14}/>{discovery.spot}</b><span>{discovery.lead}</span><small>살펴보기 · 행동 소모 없음</small></button>):<p>{investigation.evidence.some(e=>e.location===selectedPlace&&classroom.cases[investigation.id].clues.includes(e.id))?'이곳에서 찾은 자료는 수첩에 있어요. 새 단서를 찾으면 다시 확인할 일이 생길 수 있어요.':'지금 확인할 조사 대상이 없어요. 지도에 표시된 현장을 먼저 살펴보세요.'}</p>}</section>}
     {locked(selectedPlace)?<p className="empty-place"><Lock size={20}/>{selectedPlace==='walk'?'호감도 40 이상인 친구가 생기면 함께 걸을 수 있어요.':'신뢰도 50 이상인 친구가 있으면 야간 공간이 열려요.'}</p>:residents(selectedPlace).length?residents(selectedPlace).map(c=><div className="resident-visit" key={c.id}><div className="resident"><Portrait id={c.id}/><span><b>{c.name}</b><small>{isVisited(c.id)?'오늘 함께 보낸 시간':waitingForTrial(c.id)?'재판 후 개인 약속이 열려요':c.role+' · 행동 1'}</small></span></div><div className="resident-actions"><button disabled={!personAvailable(c.id)} onClick={()=>meet(c.id)}><BookOpen size={15}/>이야기하기</button><button disabled={!personAvailable(c.id)} onClick={()=>meet(c.id,true)}><Gamepad2 size={15}/>함께 작업하기</button></div></div>):<div className="empty-place"><CloudMoon size={23}/><p>지금은 조용해요.<br/>다른 장소에서 친구를 찾아볼까요?</p></div>}
     <p className="schedule-note">{investigation?'조사할 친구는 열린 단서의 장소에 있어요. 자료를 등록하면 다음 현장으로 이동하며, 대화·활동은 행동 1회를 사용합니다.':'8명 모두 챕터와 남은 행동에 따라 이동해요. 대화와 활동은 같은 행동 자원을 사용합니다.'}</p>
    </div></aside>
   </div>
   <div className="map-bottom"><button className="secondary" onClick={()=>setPanel('journal')}><Heart size={16}/>관계 수첩</button><button className="primary" disabled={!!requiredCase(game)} onClick={()=>setGame(nextDay(game,meta))}>{requiredCase(game)?'현재 사건 해결 후 다음 장':game.chapter===commonScenes.length-1?'개인 약속에 답하기':game.actions>0?'오늘 일정을 마치고':'다음 장으로'}<ArrowRight size={17}/></button></div>
  </section>}

  {game.phase==='routeSelect'&&<section className="route-screen" inert={mysteryOpen||!!fieldInspection||!!cutscene}><span className="eyebrow">THE MESSAGE YOU WERE WAITING FOR</span><h1>오늘, 가장 만나고 싶은 사람.</h1><p>같은 하루의 끝에서 서로 다른 메시지가 도착했습니다.</p><div className="route-options">{candidates(game).map(id=><button key={id} className="route-letter" onClick={()=>setGame(selectRoute(game,id))}><Portrait id={id}/><span><small>FROM. {characterById[id].name}</small><b>{({world:'미디어실로 와. 카메라는 꺼 놨어.',junyeon:'화학실에 네가 봐 줬으면 하는 게 있어.',hyunsol:'오늘 마지막으로 확인할 게 있어.',taewoo:'운동장으로 나와. 춤추자는 거 아니야.',taehun:'별이 안 보여도 괜찮아. 같이 기다리자.',seoyul:'전시실에 마지막 그림이 남아 있어.'})[id]}</b><i>{characterById[id].tag}</i></span><ArrowRight size={20}/></button>)}{game.haremOffered&&<button className="route-letter hidden-route" onClick={()=>setGame(selectRoute(game,'harem'))}><Sparkles size={32}/><span><small>FROM. 우리 일곱 명</small><b>옥상에서, 함께 이야기해 볼래?</b><i>히든 루트 · 다중성의 해답</i></span><ArrowRight size={20}/></button>}{candidates(game).length===0&&<p className="empty-state">오늘은 특별한 약속이 잡히지 않았어요.<br/>다음 이야기에서는 방과 후의 시간을 조금 더 함께 보내 보세요.</p>}</div><button className="secondary" onClick={openNotebook}><NotebookPen size={16}/>1반 사건 기록 · 주한과 민혁의 결말</button><button className="text-button" onClick={()=>setGame(selectRoute(game,'none'))}>혼자 교실로 돌아간다 <ArrowRight size={14}/></button></section>}

  {game.phase==='ending'&&game.ending&&<section inert={mysteryOpen||!!fieldInspection||!!cutscene} className={`ending-screen ${endingById[game.ending].type==='BAD'?'bad-ending':''}`}><div className="ending-emblem">{endingById[game.ending].type==='BAD'?<CloudMoon size={38}/>:<Sparkles size={38}/>}</div><span className="eyebrow">{endingById[game.ending].type} ENDING / MEMORY SAVED</span><h1>{endingById[game.ending].title}</h1><p className="ending-sub">{endingById[game.ending].subtitle}</p><div className="ending-prose">{endingById[game.ending].text.map((text,i)=><p key={i}>{formatted(text)}</p>)}</div><div className="ending-actions"><button className="secondary" onClick={()=>setCutscene(endingCutscene(game.ending!))}><Play size={16}/>컷신 다시 보기</button><button className="secondary" onClick={()=>setPanel('gallery')}><Star size={16}/>기억의 서랍</button><button className="primary" onClick={goHome}><RotateCcw size={17}/>새로운 이야기</button></div><span className="ending-note">이 엔딩은 기억의 서랍에 보관되었습니다. 다음 시작부터 읽은 대사를 넘길 수 있어요.</span></section>}
  </>}

 {toast&&<div className="toast" role="status"><Check size={17}/>{toast}</div>}
 {panel!=='none'&&<Modal title={({settings:'취향에 맞게',save:'그날의 기록',load:'다시 이어지는 이야기',backlog:'지나온 대화',journal:'관계 수첩',gallery:'기억의 서랍',cast:'우리 반의 여덟 얼굴',menu:'잠깐, 쉬어 가기'})[panel]} onClose={()=>{setPanel('none');setConfirmSlot(null);}}>
 {panel==='settings'&&<div className="settings-list"><label>대사 표시 속도 <span>{options.speed===0?'즉시':options.speed<20?'빠르게':options.speed<40?'보통':'천천히'}</span><input type="range" min="0" max="60" value={options.speed} onChange={e=>setOptions(o=>({...o,speed:Number(e.target.value)}))}/></label><label>배경음 볼륨 <span>{Math.round(options.volume*100)}%</span><input type="range" min="0" max="1" step=".05" value={options.volume} onChange={e=>setOptions(o=>({...o,volume:Number(e.target.value)}))}/></label><label className="check-row"><span>오리지널 앰비언트 배경음</span><input type="checkbox" checked={options.sound} onChange={e=>setOptions(o=>({...o,sound:e.target.checked}))}/></label><label className="check-row"><span>선택 후 관계 수치 변화 표시</span><input type="checkbox" checked={options.showStats} onChange={e=>setOptions(o=>({...o,showStats:e.target.checked}))}/></label><div className="control-help"><p><kbd>Space</kbd> <kbd>Enter</kbd> 다음 대사</p><p><kbd>1</kbd> – <kbd>6</kbd> 선택지 <kbd>Esc</kbd> 메뉴</p><p><kbd>Ctrl</kbd> 이미 읽은 대사 빠르게 넘기기</p></div></div>}
 {(panel==='save'||panel==='load')&&<><div className="tabs"><button className={slotMode==='save'?'active':''} disabled={!game} onClick={()=>{setSlotMode('save');setConfirmSlot(null);}}>저장하기</button><button className={slotMode==='load'?'active':''} onClick={()=>{setSlotMode('load');setConfirmSlot(null);}}>불러오기</button></div><div className="save-grid">{['auto',...Array.from({length:10},(_,i)=>String(i+1))].map(slot=>{const saved=getSave(slot),blocked=slotMode==='save'?slot==='auto'||!game:!saved;return <button key={slot} className="save-slot" disabled={blocked} onClick={()=>{if(slotMode==='load'){load(slot);return;}if(saved&&confirmSlot!==slot){setConfirmSlot(slot);return;}if(game&&saveGame(slot,game)){showToast(`${slot}번 슬롯에 저장했어요.`);setConfirmSlot(null);setPanel('none');}else showToast('저장 공간을 확인해 주세요.');}}><span className="eyebrow">{slot==='auto'?'AUTO SAVE':`SLOT ${slot.padStart(2,'0')}`}</span>{saved?<><b>{saved.state.name} · {activeScene(saved.state).title}</b><small>{new Date(saved.savedAt).toLocaleString('ko-KR')}</small></>:<b>아직 쓰이지 않은 페이지</b>}{confirmSlot===slot&&<em>기존 기록을 덮어쓰려면 한 번 더 눌러 주세요.</em>}</button>;})}</div></>}
 {panel==='backlog'&&<div className="backlog">{game?.backlog.length?game.backlog.map((l,i)=><div key={i}><b>{label(l.speaker,game.name)||'독백'}</b><p>{formatted(l.text)}</p></div>):<p>아직 기록된 대화가 없어요.</p>}</div>}
 {panel==='journal'&&game&&<><div className="journal-summary">{Object.entries(game.global).map(([key,val])=><Meter key={key} name={({harmony:'1반 조화',fair:'페어 완성도',reputation:'교내 평판',ethics:'연구 윤리',safety:'안전 관리'} as Record<string,string>)[key]} value={val}/>)}</div><div className="relationship-grid">{schoolCharacters.map(c=>{const extra=c.id==='juhan'||c.id==='minhyuk',values=extra?classroom.bonds[c.id as ExtraId]:game.stats[c.id as CharacterId];return <div className="relation-card" key={c.id}><div className="relation-top"><Portrait id={c.id}/><div><h3>{c.name}</h3><p>{c.role}</p></div></div><Meter name="호감" value={values.affection} color={c.color}/><Meter name="신뢰" value={values.trust}/>{!extra&&<><Meter name="질투" value={game.stats[c.id as CharacterId].jealousy} color="#bc8585"/><Meter name={c.specialLabel} value={game.stats[c.id as CharacterId].special} color={c.color}/></>}<small>방과 후 함께한 시간 {extra?classroom.bonds[c.id as ExtraId].days.length:game.visits[c.id as CharacterId]}회</small></div>;})}</div><p className="muted-note">호감만으로는 충분하지 않아요. 지킬 수 있는 약속과 서로의 경계가 신뢰를 만듭니다.</p></>}
 {panel==='cast'&&<><div className="cast-tabs">{schoolCharacters.map(c=><button className={profile===c.id?'active':''} key={c.id} onClick={()=>setProfile(c.id)}>{c.name}</button>)}</div><div className="profile-layout"><Portrait id={profile}/><div><span className="eyebrow">1학년 1반 / {schoolById[profile].role}</span><h2>{schoolById[profile].name}</h2><h3>{schoolById[profile].tag}</h3><p>{schoolById[profile].bio}</p><blockquote>“{schoolById[profile].quote}”</blockquote></div></div></>}
{panel==='gallery'&&<><div className="tabs"><button className={galleryType==='endings'?'active':''} onClick={()=>setGalleryType('endings')}>엔딩 {meta.endings.length} / {endings.length}</button><button className={galleryType==='art'?'active':''} onClick={()=>setGalleryType('art')}>풍경과 인물</button><button className={galleryType==='episodes'?'active':''} onClick={()=>setGalleryType('episodes')}>새 컷씬 42</button></div>{galleryType==='episodes'?<EpisodeGallery flags={game?.flags??[]} onPlay={previewEpisode} character={galleryCharacter} onCharacter={setGalleryCharacter}/>:galleryType==='art'?<div className="art-gallery">{galleryArt.map(item=><figure key={item.key}><img src={asset(item.key)} alt={item.alt}/><figcaption>{item.label}</figcaption>{item.event&&<button className="secondary gallery-cutscene" onClick={()=>{setPanel('none');setCutscene(eventCutscene(item.event![0],'chance',item.event![1],`gallery-${item.event![0]}`));}}><Play size={15}/>돌발 컷신 재생</button>}</figure>)}{schoolCharacters.map(c=><figure key={'design-'+c.id}><img src={portraitAsset(c.id)} alt={c.name+' 새 캐릭터 디자인'}/><figcaption>{c.name} · 새 캐릭터 디자인</figcaption><a className="secondary" href={portraitAsset(c.id)} download={`${c.name}-캐릭터.png`}>일러스트 저장</a></figure>)}</div>:<div className="ending-gallery">{endings.map(e=>{const unlocked=meta.endings.includes(e.id);return <details key={e.id} className={unlocked?'unlocked':''}><summary>{unlocked?<Star size={16}/>:<Lock size={15}/>}<span><small>{e.type} {e.character?`· ${characterById[e.character].name}`:''}</small><b>{unlocked?e.title:'아직 만나지 않은 결말'}</b></span><ChevronRight size={16}/></summary><div>{unlocked?<>{e.text.map((p,i)=><p key={i}>{formatted(p)}</p>)}<button className="secondary gallery-cutscene" onClick={()=>{setPanel('none');setCutscene(endingCutscene(e.id));}}><Play size={15}/>컷신 재생</button></>:<p>{e.hint}</p>}</div></details>;})}</div>}</>}
 {panel==='menu'&&<div className="pause-menu">{game&&<><button onClick={()=>setPanel('none')}><Play size={18}/>계속하기</button><button onClick={()=>{setSlotMode('save');setPanel('save');}}><Save size={18}/>저장 · 불러오기</button><button onClick={()=>setPanel('journal')}><Heart size={18}/>관계 수첩</button><button onClick={openNotebook}><NotebookPen size={18}/>1반 사건 기록</button></>}<button onClick={()=>setPanel('gallery')}><Star size={18}/>기억의 서랍</button><button onClick={()=>setPanel('settings')}><Settings size={18}/>설정</button><button onClick={goHome}><Home size={18}/>처음 화면으로</button><p>진행 상황은 자동 저장됩니다.<br/>저장 기록은 지금 사용하는 브라우저에 보관돼요.</p></div>}
 </Modal>}
 </main>;
}
