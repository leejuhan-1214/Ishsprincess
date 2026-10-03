import {useEffect,useRef,useState,type FormEvent} from 'react';
import {ArrowLeft,ArrowRight,BookOpen,ChevronRight,Heart,MapPin,Maximize,Menu,NotebookPen,Pause,Play,RotateCcw,Save,Search,Settings,SkipForward,Volume2,VolumeX,X} from 'lucide-react';
import {schoolById} from './data/classroomMystery';
import {locationById,locationImage} from './data/characters';
import {SchoolPortrait} from './SchoolPortrait';
import {CampusMap} from './CampusMap';
import RomanceActivity from './RomanceActivity';
import {EvidenceViewer} from './EvidenceViewer';
import {TrialRevolver,RebuttalBurst} from './TrialRevolver';
import {hasHangoutAvailable,getHangoutScene} from './data/romanceHangouts';
import {romanceArt,artById,artPath,awareness} from './data/romanceArt';
import {getRomanceActivity} from './data/romanceActivities';
import {music} from './engine/audio';
import {shuffleChoices} from './engine/choiceOrder';
import {newRomance,currentRomanceScene,romanceLines,advanceRomance,chooseRomance,nextRomance,selectFocus,startHangout,completeRomanceActivity,respondToActivity,pendingMainEvents,availableMemories,inspectMemory,submitArgument,continueArgument,submitReconstruction,setVerdict,personLocation,choiceOrder} from './engine/romance';
import {saveRomance,loadRomance,listRomanceSaves,type RomanceSlot} from './engine/romanceStorage';
import {memoryEvidence,romanceTrialRounds,romanceSequence} from './data/romanceMystery';
import {romancePeople,type RPerson,type RState} from './romanceTypes';
import type {LocationId} from './types';
import type {EvidenceVisual} from './data/evidenceVisuals';

type Panel='none'|'notebook'|'bonds'|'save'|'load'|'settings'|'backlog'|'menu'|'gallery';
const getStored=<T,>(key:string,fallback:T):T=>{try{const v=localStorage.getItem(`reaction-romance-v2:${key}`);return v?JSON.parse(v):fallback;}catch{return fallback;}};
const persist=(key:string,value:unknown)=>{try{localStorage.setItem(`reaction-romance-v2:${key}`,JSON.stringify(value));}catch{/* Saves report their own failures. */}};
const visualFor=(id:string):EvidenceVisual|undefined=>{const c=memoryEvidence.find(c=>c.id===id);return c?{id:c.id,image:c.image,alt:`${c.name}. ${c.description}`,caption:'이야기 속 자료'}:undefined;};
const asSlot=(slot:string):RomanceSlot=>slot==='auto'?'auto':Number(slot) as RomanceSlot;
const bg=(place:LocationId)=>`${import.meta.env.BASE_URL}${locationImage(place)}`;
const label=(speaker:string)=>speaker==='player'?'나':speaker==='narrator'?'':speaker==='teacher'?'담임 선생님':speaker==='alter'?'얼터에고':schoolById[speaker as RPerson]?.name??'';
const names=(id:RPerson)=>schoolById[id].name;
const together=(id:RPerson)=>`${names(id)}${id==='world'||id==='taewoo'?'와':'과'}`;

function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:React.ReactNode}){
 const box=useRef<HTMLElement>(null);
 useEffect(()=>{const old=document.activeElement as HTMLElement|null;box.current?.focus();return()=>old?.focus();},[]);
 return <div className="romance-modal-backdrop" onClick={onClose}><section className="romance-modal" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={box} onClick={e=>e.stopPropagation()} onKeyDown={e=>{
  if(e.key!=='Tab')return;const elements=Array.from(box.current?.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],input,select,[tabindex="0"]')??[]);const first=elements[0],last=elements.at(-1);if(!first)return;
  if(e.shiftKey&&(document.activeElement===first||document.activeElement===box.current)){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }}><header><h2>{title}</h2><button aria-label="창 닫기" onClick={onClose}><X size={21}/></button></header><div className="romance-modal-body">{children}</div></section></div>;
}

export default function RomanceGame(){
 const [game,setGame]=useState<RState|null>(null),[name,setName]=useState(''),[nameError,setNameError]=useState('');
 const [panel,setPanel]=useState<Panel>('none'),[place,setPlace]=useState<LocationId>('classroom');
 const [auto,setAuto]=useState(false),[visible,setVisible]=useState(0),[hidden,setHidden]=useState(document.hidden);
 const [read,setRead]=useState<string[]>(()=>{const v=getStored<unknown>('read',[]);return Array.isArray(v)?v.filter(x=>typeof x==='string'):[];});
 const [collected,setCollected]=useState<string[]>(()=>{const v=getStored<unknown>('endings',[]);return Array.isArray(v)?v.filter(x=>typeof x==='string'):[];});
 const [seenArt,setSeenArt]=useState<string[]>(()=>{const v=getStored<unknown>('art',[]);return Array.isArray(v)?v.filter(x=>typeof x==='string'&&artById(x)):[];});
 const [galleryArt,setGalleryArt]=useState<string|null>(null);
 const [settings,setSettings]=useState(()=>{const v=getStored<Record<string,unknown>>('settings',{});return {speed:[0,12,24,45].includes(Number(v?.speed))?Number(v.speed):24,music:v?.music===true,volume:typeof v?.volume==='number'?Math.max(0,Math.min(.8,v.volume)):.35};});
 const [toast,setToast]=useState(''),[notebookId,setNotebookId]=useState<string|null>(null),[inspectId,setInspectId]=useState<string|null>(null);
 const [selectedClaim,setSelectedClaim]=useState<string|null>(null),[loaded,setLoaded]=useState<string|null>(null),[burst,setBurst]=useState(0),[session,setSession]=useState(0);
 const [overwrite,setOverwrite]=useState<string|null>(null),[titlePerson,setTitlePerson]=useState<RPerson>('world');
 const saveWarned=useRef(false),stateRef=useRef(game);stateRef.current=game;
 const scene=game?currentRomanceScene(game):null,lines=game?romanceLines(game):[];
 const raw=game?lines[game.line]:undefined,text=raw?.text.replaceAll('{name}',game?.name??'')??'';
 const lineKey=game?`${game.sceneKey}:${game.response?'r':'l'}:${game.line}:${raw?.speaker??''}:${text}`:'';
 const order=game?.trialOrder??[];
 const setOrder=(value:string[]|((current:string[])=>string[]))=>setGame(s=>s?{...s,trialOrder:typeof value==='function'?value(s.trialOrder):value}:s);
 const choosing=!!game&&game.phase==='story'&&!game.response&&game.line>=lines.length&&!!scene?.choices.length;
 const choices=game&&scene?choiceOrder(game,scene.choices):[];
 const portrait=raw&&romancePeople.includes(raw.speaker as RPerson)?raw.speaker as RPerson:game?.visitor??lines.slice(0,(game?.line??0)+1).reverse().find(l=>romancePeople.includes(l.speaker as RPerson))?.speaker as RPerson|undefined;
 const memories=game?availableMemories(game):[],localMemories=memories.filter(c=>c.location===place);
 const pendingEvents=game?pendingMainEvents(game):[];
 const students=game?romancePeople.filter(id=>!(id==='junyeon'&&game.verdict==='exclude')).map(id=>({id,name:names(id),color:schoolById[id].color,place:personLocation(game,id),available:game.actions>0&&!game.visited.includes(id)&&hasHangoutAvailable(id,game),visited:game.visited.includes(id),exhausted:!hasHangoutAvailable(id,game)})):[];
 const onSite=students.filter(s=>s.place===place);
 const notebook=memoryEvidence.filter(c=>game?.clues.includes(c.id));
 const endingFlag=game?[...game.flags].reverse().find(f=>/^(romance|friendship):/.test(f))?.split(':')[1]:null;
 const endingPerson=romancePeople.includes(endingFlag as RPerson)?endingFlag as RPerson:game?.focus;
 const note=notebook.find(c=>c.id===notebookId)??notebook[0];
 const activeRound=game?romanceTrialRounds[game.trialRound]:undefined;
 const claimOrder=game&&activeRound?shuffleChoices(activeRound.claims,`${game.seed}:${activeRound.id}:claims`).map(x=>x.value):[];
 const sequenceOrder=game?shuffleChoices(romanceSequence,`${game.seed}:reconstruction`).map(x=>x.value):[];
 const trialEvidence=notebook.map(c=>({id:c.id,name:c.name,location:c.location,description:c.description,inspection:[]}));
 const visuals=Object.fromEntries(memoryEvidence.map(c=>[c.id,visualFor(c.id)!]));
 const visualLine=raw??(choosing?scene?.lines.at(-1):undefined);
 const currentArt=artById(visualLine?.art),thought=game?awareness(game):null;
 const encounter:1|2=game?.sceneKey.includes('-v2:')?2:1;
 const invitation=game?.visitor?getRomanceActivity(game.visitor,game.chapter,encounter,game.seed):null;
 const fmt=(s:string)=>s.replaceAll('{name}',game?.name??'');
 const closePanel=()=>{setPanel('none');setOverwrite(null);};
 const tell=(s:string)=>setToast(s);
 const mutate=(f:(s:RState)=>RState)=>setGame(s=>s?f(s):s);
 function step(){if(!game||panel!=='none'||inspectId||game.phase!=='story'||choosing)return;if(visible<text.length){setVisible(text.length);return;}if(text&&!read.includes(lineKey))setRead(r=>[...r,lineKey]);mutate(advanceRomance);}
 function start(e:FormEvent){e.preventDefault();try{const next=newRomance(name,crypto.getRandomValues(new Uint32Array(1))[0]);setGame(next);setNameError('');setAuto(false);setPlace('classroom');}catch{setNameError('이름을 1~12자로 입력해 주세요. 한글·영문·숫자를 사용할 수 있어요.');}}
 function open(p:Panel){setAuto(false);setPanel(p);setOverwrite(null);}
 function load(slot:string){const saved=loadRomance(asSlot(slot));if(!saved){tell('저장 파일을 불러올 수 없어요.');return;}setGame(saved.state);setSession(v=>v+1);setPlace(saved.state.location);setAuto(false);closePanel();tell('불러왔어요.');}
 function save(slot:string){if(!game)return;if(loadRomance(asSlot(slot))&&overwrite!==slot){setOverwrite(slot);return;}if(saveRomance(asSlot(slot),game)){closePanel();tell(`${slot}번 슬롯에 저장했어요.`);}else tell('브라우저 저장 공간을 확인해 주세요.');}
 function next(){if(!game)return;if(pendingEvents.length){setPlace(pendingEvents[0].location);tell(pendingEvents[0].label);return;}const value=nextRomance(game);if(value===game){tell('진행 중인 이야기를 마쳐 주세요.');return;}setGame(value);setPlace('classroom');}
 function argue(){if(!game||!selectedClaim||!loaded)return;const next=submitArgument(game,selectedClaim,loaded);setGame(next);if(next!==game&&next.trialFeedback?.ok)setBurst(n=>n+1);}
 function fullscreen(){if(document.fullscreenElement)void document.exitFullscreen().catch(()=>tell('전체화면을 종료하지 못했어요.'));else void document.documentElement.requestFullscreen?.().catch(()=>tell('이 브라우저에서는 전체화면을 지원하지 않아요.'));}
 useEffect(()=>{if(!game)return;if(!saveRomance('auto',game)&&!saveWarned.current){saveWarned.current=true;tell('자동 저장을 하지 못했어요. 저장 공간을 확인해 주세요.');}},[game]);
 useEffect(()=>{persist('read',read);},[read]);
 useEffect(()=>{if(game?.phase==='story'&&currentArt)setSeenArt(found=>found.includes(currentArt.id)?found:[...found,currentArt.id]);},[game?.phase,currentArt?.id]);
 useEffect(()=>{persist('art',seenArt);},[seenArt]);
 useEffect(()=>{persist('settings',settings);music(settings.music,settings.volume);return()=>music(false,0);},[settings]);
 useEffect(()=>{const fn=()=>setHidden(document.hidden);document.addEventListener('visibilitychange',fn);return()=>document.removeEventListener('visibilitychange',fn);},[]);
 useEffect(()=>{setVisible(settings.speed===0?text.length:0);},[lineKey,text,settings.speed]);
 useEffect(()=>{if(hidden||panel!=='none'||!text||settings.speed===0||visible>=text.length)return;const t=setTimeout(()=>setVisible(n=>Math.min(n+1,text.length)),settings.speed);return()=>clearTimeout(t);},[visible,text,settings.speed,hidden,panel]);
 useEffect(()=>{if(!auto||hidden||panel!=='none'||inspectId||game?.phase!=='story'||choosing||visible<text.length)return;const t=setTimeout(step,Math.max(1300,text.length*30));return()=>clearTimeout(t);},[auto,hidden,panel,inspectId,lineKey,visible,choosing,game?.phase]);
 useEffect(()=>{if(toast){const t=setTimeout(()=>setToast(''),4300);return()=>clearTimeout(t);}},[toast]);
 useEffect(()=>{setSelectedClaim(null);setLoaded(null);},[game?.trialRound,game?.phase,session]);
 useEffect(()=>{if(game?.phase==='map')setPlace(game.location);},[game?.phase,game?.sceneKey]);
 useEffect(()=>{if(game?.trialFeedback)document.querySelector('.romance-trial-feedback')?.scrollIntoView({block:'nearest'});},[game?.trialFeedback]);
 useEffect(()=>{if(game?.phase==='ending'&&game.ending&&!collected.includes(game.ending)){const all=[...collected,game.ending];setCollected(all);persist('endings',all);}},[game?.phase,game?.ending]);
 useEffect(()=>{const listener=(e:KeyboardEvent)=>{if(e.key==='Escape'){e.preventDefault();if(inspectId)setInspectId(null);else if(panel!=='none')closePanel();else open('menu');return;}if(panel!=='none'||inspectId||e.ctrlKey||e.metaKey||e.altKey||(e.target instanceof HTMLElement&&e.target.closest('input,textarea,select,button,a')))return;if(game?.phase==='story'&&(e.key===' '||e.key==='Enter')){e.preventDefault();step();}else if(choosing&&/^[1-9]$/.test(e.key)){const c=choices[Number(e.key)-1];if(c){e.preventDefault();mutate(s=>chooseRomance(s,c.value.id));}}};window.addEventListener('keydown',listener);return()=>window.removeEventListener('keydown',listener);});

 return <main className={`romance-app${game?' in-game':''}`}>
  <div className="romance-backdrop" style={{backgroundImage:`url(${bg(game?(game.phase==='map'?place:visualLine?.location??scene?.location??game.location):'classroom')})`}}/>
  <header className="romance-header"><button className="romance-brand" onClick={()=>open('menu')} aria-label="메뉴 열기"><span>RE:ACTION</span><small>빈자리에 남긴 약속</small></button><div className="romance-header-right">{game&&<span className="romance-calendar">{game.date}<small>{game.chapter+1}장 · 1학년 1반</small></span>}<button aria-label={settings.music?'배경음 끄기':'배경음 켜기'} onClick={()=>setSettings(s=>({...s,music:!s.music}))}>{settings.music?<Volume2 size={19}/>:<VolumeX size={19}/>}</button><button aria-label="전체화면" onClick={fullscreen}><Maximize size={19}/></button><button aria-label="설정" onClick={()=>open('settings')}><Settings size={19}/></button><button aria-label="메뉴" onClick={()=>open('menu')}><Menu size={21}/></button></div></header>

  {!game?<section className="romance-title"><div className="romance-title-copy"><h1>너와의 약속을,<br/><em>기억할게.</em></h1><p>인천과학고 1학년 1반, 우리의 봄.</p><form onSubmit={start}><label htmlFor="romance-name">이름</label><div className="romance-name-box"><input id="romance-name" value={name} onChange={e=>{setName(e.target.value);setNameError('');}} maxLength={12} autoComplete="off" placeholder="이름을 입력해 주세요" aria-describedby={nameError?'romance-name-help':undefined} aria-invalid={!!nameError}/><NotebookPen size={20}/></div>{nameError&&<small id="romance-name-help" className="romance-error">{nameError}</small>}<button className="r-primary" disabled={!name.trim()} type="submit">시작하기<ArrowRight size={18}/></button></form><div className="romance-title-links"><button onClick={()=>open('load')}><BookOpen size={16}/>이어하기</button><button onClick={()=>open('gallery')}><Heart size={16}/>갤러리</button></div></div><aside className="romance-cast-preview"><div className="romance-featured-person"><SchoolPortrait id={titlePerson}/><div><small>{schoolById[titlePerson].role}</small><h2>{names(titlePerson)}</h2><p>“{schoolById[titlePerson].quote}”</p></div></div><div className="romance-cast-tabs" aria-label="등장인물 둘러보기">{romancePeople.map(id=><button key={id} aria-pressed={titlePerson===id} onClick={()=>setTitlePerson(id)}><SchoolPortrait id={id}/><span>{names(id)}</span></button>)}</div></aside><footer>등장인물과 이야기는 허구입니다.</footer></section>:<>

   {game.phase==='story'&&scene&&<section className="romance-story" aria-label="이야기" inert={panel!=='none'||!!inspectId}><div className={`romance-stage${currentArt?' has-event-art':''}`}><div className="romance-scene-title"><h1>{scene.title}</h1><p><MapPin size={14}/>{locationById[visualLine?.location??scene.location].name}</p></div>{currentArt?<figure className="romance-event-art" key={currentArt.id}><img src={`${import.meta.env.BASE_URL}${artPath(currentArt.id)}`} alt={currentArt.alt}/><figcaption><Heart size={13}/>{currentArt.title}<button onClick={()=>{setGalleryArt(currentArt.id);open('gallery');}}>그림 보기</button></figcaption></figure>:scene.image?<img className="romance-scene-art" src={`${import.meta.env.BASE_URL}${scene.image}`} alt={`${scene.title} - 함께한 순간`}/>:portrait&&<div className={`romance-portrait-card emotion-${visualLine?.expression??'neutral'}`} key={portrait}><SchoolPortrait id={portrait}/></div>}</div><div className={`romance-dialogue${choosing?' with-choices':''}`}>
    {choosing?<div className="romance-choices" aria-label="대답 선택">{choices.map(({value},i)=><button key={value.id} onClick={()=>mutate(s=>chooseRomance(s,value.id))}><span>{String(i+1).padStart(2,'0')}</span><b>{fmt(value.text)}</b><ChevronRight size={18}/></button>)}</div>:<button className="romance-line" onClick={step} aria-label={text?`${raw?.speaker==='player'?game.name:label(raw?.speaker??'')} ${text} - 다음 대사`:'이야기 이어가기'}><b>{raw?.speaker==='player'?game.name:label(raw?.speaker??'')}</b><p>{text.slice(0,visible)||(!text?'계속':' ')}</p><span aria-hidden="true"><ChevronRight size={18}/></span></button>}
   </div><nav className="romance-toolbar" aria-label="대화 도구"><button onClick={()=>open('backlog')}><BookOpen size={15}/>기록</button><button aria-pressed={auto} onClick={()=>setAuto(!auto)}>{auto?<Pause size={15}/>:<Play size={15}/>}자동</button><button disabled={!read.includes(lineKey)||choosing} onClick={()=>{setVisible(text.length);mutate(advanceRomance);}}><SkipForward size={15}/>읽은 대사</button><button onClick={()=>open('notebook')}><NotebookPen size={15}/>기억</button><button onClick={()=>open('bonds')}><Heart size={15}/>관계</button><button onClick={()=>open('save')}><Save size={15}/>저장</button></nav></section>}

   {game.phase==='map'&&<section className="romance-map" inert={panel!=='none'||!!inspectId}><div className="romance-map-heading"><h1>방과 후</h1><div className="romance-actions"><b>{game.actions}</b><span>남은 만남</span></div></div><div className="romance-map-body"><CampusMap selected={place} students={students} locked={()=>false} onSelect={setPlace} discoveries={Object.fromEntries(memories.map(c=>[c.location,memories.filter(x=>x.location===c.location).length]))}/><aside className="romance-place"><img className="romance-place-background" src={bg(place)} alt={locationById[place].name}/><div className="romance-place-content"><h2>{locationById[place].name}</h2>{localMemories.map(c=><button key={c.id} className="romance-memory-discovery" onClick={()=>{setAuto(false);mutate(s=>inspectMemory({...s,location:place},c.id));}}><Search size={18}/><span><b>{c.spot}</b><small>{c.lead}</small></span><ChevronRight size={18}/></button>)}{onSite.length?onSite.map(p=><div className="romance-meeting" key={p.id}><SchoolPortrait id={p.id}/><div><b>{p.name}{game.focus===p.id&&<Heart size={12}/>}</b>{p.available&&<small>{getHangoutScene(p.id,game,p.place).title}</small>}<div><button disabled={!p.available} onClick={()=>{setAuto(false);mutate(s=>startHangout(s,p.id,place));}}>{!p.available?(p.exhausted||p.visited?'만남 완료':'오늘은 여기까지'):getHangoutScene(p.id,game,p.place).location===place?'만나기':`함께 ${locationById[getHangoutScene(p.id,game,p.place).location].name} 가기`}</button></div></div></div>):<p className="romance-quiet">지금은 아무도 없어요.</p>}</div></aside></div><footer className="romance-map-footer"><button onClick={()=>open('notebook')}><NotebookPen size={16}/>수첩{game.clues.length>0&&<b>{game.clues.length}</b>}</button><div className="romance-pending-events">{pendingEvents[0]&&<button onClick={()=>setPlace(pendingEvents[0].location)} aria-label={`${pendingEvents[0].label} · ${locationById[pendingEvents[0].location].name} 선택`}><MapPin size={15}/><span>{pendingEvents[0].label}</span></button>}</div><button className="r-primary" disabled={pendingEvents.length>0} title={pendingEvents.length?'남은 약속을 먼저 확인해 주세요.':undefined} onClick={next}>계속<ArrowRight size={17}/></button></footer></section>}

   {game.phase==='focus'&&<section className="romance-focus" inert={panel!=='none'}><header><h1>누구를 더 만나고 싶어?</h1></header><div className="romance-focus-grid">{romancePeople.map(id=><button key={id} onClick={()=>mutate(s=>selectFocus(s,id))}><SchoolPortrait id={id}/><span><b>{names(id)}</b></span><ChevronRight size={18}/></button>)}</div><button className="r-secondary" onClick={()=>mutate(s=>selectFocus(s,null))}>아직 정하지 않을래</button></section>}

   {game.phase==='activity-invite'&&game.visitor&&<section className="romance-invitation" inert={panel!=='none'}><SchoolPortrait id={game.visitor}/><div><h1>{invitation?.title}</h1><p>{invitation?.invitation}</p><div className="romance-inline"><button className="r-primary" onClick={()=>mutate(s=>respondToActivity(s,true))}>함께하기<ArrowRight size={17}/></button><button className="r-secondary" onClick={()=>mutate(s=>respondToActivity(s,false))}>다음에 할래</button></div></div></section>}
   {game.phase==='activity'&&game.visitor&&<RomanceActivity key={`${session}:${game.sceneKey}`} person={game.visitor} chapter={game.chapter} encounter={encounter} seed={game.seed} paused={panel!=='none'||!!inspectId} onFinish={score=>mutate(s=>completeRomanceActivity(s,score))}/>}

   {game.phase==='trial'&&<section className="romance-trial" inert={panel!=='none'||!!inspectId}><header><span className="romance-kicker">학급재판</span><h1>{activeRound?activeRound.title:'우리가 겪은 일을 순서대로'}</h1></header>{activeRound?<div className="romance-trial-body"><div className="romance-claims"><h2>확인할 발언</h2>{claimOrder.map((c,i)=><button key={c.id} disabled={!!game.trialFeedback} aria-pressed={selectedClaim===c.id} onClick={()=>setSelectedClaim(c.id)}><small>{i+1} / {label(c.speaker)}</small><p>{fmt(c.text)}</p></button>)}{game.trialFeedback?<div className={`romance-trial-feedback ${game.trialFeedback.ok?'correct':''}`} role="status"><b>{game.trialFeedback.ok?'확인된 사실':'다시 살펴볼 부분'}</b><p>{game.trialFeedback.text}</p><button className="r-primary" onClick={()=>mutate(continueArgument)}>계속<ArrowRight size={16}/></button></div>:<button className="r-primary" disabled={!selectedClaim||!loaded} onClick={argue}>증거 제시<ArrowRight size={17}/></button>}</div><TrialRevolver evidence={trialEvidence} selected={loaded} disabled={!!game.trialFeedback} onSelect={setLoaded} onInspect={setInspectId} visuals={visuals}/><div className="romance-mobile-submit">{game.trialFeedback?<button className="r-primary" onClick={()=>mutate(continueArgument)}>계속<ArrowRight size={16}/></button>:<button className="r-primary" disabled={!selectedClaim||!loaded} onClick={argue}>증거 제시<ArrowRight size={17}/></button>}</div></div>:<div className="romance-reconstruction"><p>일어난 순서대로 놓아 주세요.</p><div className="romance-sequence-slots">{Array.from({length:4},(_,i)=><div key={i}><b>{i+1}</b><span>{romanceSequence.find(x=>x.id===order[i])?.text??'기록 선택'}</span></div>)}</div><div className="romance-sequence-options">{sequenceOrder.map(s=><button key={s.id} disabled={order.includes(s.id)||!!game.trialFeedback} onClick={()=>setOrder(v=>[...v,s.id])}>{s.text}</button>)}</div>{game.trialFeedback?<div role="status" className="romance-trial-feedback"><p>{game.trialFeedback.text}</p><button className="r-primary" onClick={()=>{mutate(continueArgument);setOrder([]);}}>계속</button></div>:<div className="romance-inline"><button className="r-secondary" onClick={()=>setOrder([])}>다시 놓기</button><button className="r-primary" disabled={order.length!==4} onClick={()=>mutate(s=>submitReconstruction(s,order))}>확인</button></div>}</div>}</section>}

   {game.phase==='verdict'&&<section className="romance-verdict" inert={panel!=='none'}><h1>이제, 어떤 관계로 남을까?</h1><div><button onClick={()=>mutate(s=>setVerdict(s,'exclude'))}><h2>프로젝트에서는 여기까지 하자.</h2><p>개인적인 약속은 끝낸다. 잘못된 안내를 바로잡는 일은 선생님과 계속해 줘.</p><ArrowRight size={19}/></button><button onClick={()=>mutate(s=>setVerdict(s,'forgive'))}><h2>바꾼 것부터 바로잡아 줘.</h2><p>선생님과 약속한 역할부터 다시 해 보자. 내 마음까지 곧바로 돌아오진 않겠지만.</p><ArrowRight size={19}/></button></div></section>}

   {game.phase==='ending'&&<section className="romance-ending" inert={panel!=='none'}>{endingPerson&&<SchoolPortrait id={endingPerson}/>}<h1>{game.flags.some(f=>f.startsWith('romance:'))?'다음 약속도, 너와.':endingPerson==='junyeon'&&game.verdict==='exclude'?'비워 둔 자리를 접으며':'우리의 속도로, 다음 페이지.'}</h1><p>{endingPerson?`${together(endingPerson)} 함께 보낸 봄.`:'함께 보낸 날들은 남습니다.'}</p><div className="romance-inline"><button className="r-secondary" onClick={()=>open('backlog')}>대화 다시 보기</button><button className="r-primary" onClick={()=>{setGame(null);setAuto(false);setName('');}}>처음으로<RotateCcw size={16}/></button></div></section>}
  </>}

  {panel!=='none'&&<Modal title={{notebook:'수첩',bonds:'관계',save:'저장',load:'불러오기',settings:'설정',backlog:'대화 기록',menu:'메뉴',gallery:'갤러리'}[panel]} onClose={closePanel}>
   {panel==='notebook'&&thought&&<div className="romance-notice"><b>{thought.title}</b><p>{thought.text}</p></div>}
   {panel==='notebook'&&(notebook.length?<div className="romance-notebook"><nav aria-label="찾아 둔 기록">{notebook.map(c=><button key={c.id} aria-pressed={note?.id===c.id} onClick={()=>setNotebookId(c.id)}><b>{c.name}</b><small>{locationById[c.location].name}</small></button>)}</nav>{note&&<article><h3>{note.name}</h3><EvidenceViewer evidenceId={note.id} visual={visualFor(note.id)}/><p>{note.description}</p><div className="romance-note-limit"><b>아직 모르는 점</b><p>{note.limit}</p></div></article>}</div>:<div className="romance-empty"><NotebookPen size={36}/><h3>아직 남긴 기록이 없어요.</h3></div>)}
   {panel==='bonds'&&game&&<div className="romance-bonds">{romancePeople.map(id=><article key={id}><SchoolPortrait id={id}/><div><h3>{names(id)} {game.focus===id&&<Heart size={15}/>}</h3><label>호감 <b>{game.bonds[id].affection}</b></label><meter min={0} max={100} value={game.bonds[id].affection}/><label>신뢰 <b>{game.bonds[id].trust}</b></label><meter min={0} max={100} value={game.bonds[id].trust}/></div></article>)}</div>}
   {(panel==='save'||panel==='load')&&<div className="romance-save-grid">{['auto',...Array.from({length:10},(_,i)=>String(i+1))].map(slot=>{const saved=loadRomance(asSlot(slot));return <button key={slot} disabled={panel==='save'?slot==='auto'||!game:!saved} onClick={()=>panel==='save'?save(slot):load(slot)}><small>{slot==='auto'?'자동 저장':`저장 ${slot.padStart(2,'0')}`}</small><b>{saved?`${saved.state.name} · ${saved.state.chapter+1}장`:'빈 슬롯'}</b>{saved&&<span>{new Date(saved.savedAt).toLocaleString('ko-KR')}</span>}{overwrite===slot&&<em>한 번 더 누르면 덮어씁니다.</em>}</button>;})}</div>}
   {panel==='settings'&&<div className="romance-settings"><label>대사 속도<select value={settings.speed} onChange={e=>setSettings(s=>({...s,speed:Number(e.target.value)}))}><option value={45}>천천히</option><option value={24}>보통</option><option value={12}>빠르게</option><option value={0}>즉시 표시</option></select></label><label>배경음<input type="checkbox" checked={settings.music} onChange={e=>setSettings(s=>({...s,music:e.target.checked}))}/></label><label>음량<input type="range" min="0" max="0.8" step="0.05" value={settings.volume} onChange={e=>setSettings(s=>({...s,volume:Number(e.target.value)}))}/></label><p>Space / Enter: 다음 · 숫자키: 선택 · Esc: 메뉴</p></div>}
   {panel==='backlog'&&<div className="romance-log">{game?.backlog.length?game.backlog.map((l,i)=><p key={i}><b>{l.speaker==='player'?game.name:label(l.speaker)}</b>{fmt(l.text)}</p>):<p>아직 나눈 대사가 없어요.</p>}</div>}
   {panel==='gallery'&&<div className="romance-art-gallery">{galleryArt&&seenArt.includes(galleryArt)&&<figure><img src={`${import.meta.env.BASE_URL}${artPath(galleryArt)}`} alt={artById(galleryArt)?.alt}/><figcaption>{artById(galleryArt)?.title}<a className="r-secondary" href={`${import.meta.env.BASE_URL}${artPath(galleryArt)}`} download={`RE_ACTION-${galleryArt}.png`}>원본 저장</a></figcaption></figure>}<div className="romance-art-grid">{romanceArt.filter(art=>seenArt.includes(art.id)).map(art=><button key={art.id} onClick={()=>setGalleryArt(art.id)}><img src={`${import.meta.env.BASE_URL}${artPath(art.id)}`} alt={art.alt} loading="lazy"/><b>{names(art.person)}</b><small>{art.title}</small></button>)}</div>{!seenArt.length&&<p className="romance-empty">아직 함께한 그림이 없어요.</p>}</div>}
   {panel==='gallery'&&collected.length>0&&<div className="romance-gallery"><h3>함께한 결말</h3>{collected.map(id=><div key={id}><Heart size={18}/><span>{id.split(':').map(part=>romancePeople.includes(part as RPerson)?names(part as RPerson):({romance:'연애',friendship:'우정',friend:'우정',exclude:'관계 단절',forgive:'두 번째 기회',normal:'우리의 다음 페이지',alone:'나의 다음 페이지',class:'1반 친구들'}[part]??part)).join(' · ')}</span></div>)}</div>}
   {panel==='menu'&&<div className="romance-menu">{game&&<><button onClick={()=>open('save')}><Save size={18}/>저장</button><button onClick={()=>open('notebook')}><NotebookPen size={18}/>수첩</button><button onClick={()=>open('bonds')}><Heart size={18}/>관계</button></>}<button onClick={()=>open('load')}><BookOpen size={18}/>불러오기 <small>{listRomanceSaves().length}</small></button><button onClick={()=>open('settings')}><Settings size={18}/>설정</button><button onClick={()=>open('gallery')}><Heart size={18}/>갤러리</button>{game&&<button onClick={()=>{setGame(null);setAuto(false);closePanel();}}><ArrowLeft size={18}/>처음으로</button>}<button className="r-primary" onClick={closePanel}>닫기<Play size={17}/></button></div>}
  </Modal>}
  {inspectId&&<Modal title="기록 원본 보기" onClose={()=>setInspectId(null)}><EvidenceViewer evidenceId={inspectId} visual={visualFor(inspectId)}/><p>{memoryEvidence.find(c=>c.id===inspectId)?.limit}</p></Modal>}
  {!!burst&&game?.phase==='trial'&&<RebuttalBurst key={burst} eventId={`romance-${burst}`}/>}
  {toast&&<div className="romance-toast" role="status">{toast}</div>}
 </main>;
}
