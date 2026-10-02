import {useEffect,useState} from 'react';
import {BookOpen,ChevronRight,Heart,MapPin,Menu,Save,Sparkles} from 'lucide-react';
import {schoolById,type SchoolLine} from './data/classroomMystery';
import {locationById} from './data/characters';
import {bondLines,continueBond,currentBondEpisode,selectBondChoice,type ClassroomState} from './engine/classroomMystery';
import {shuffleChoices} from './engine/choiceOrder';
import {SchoolPortrait} from './SchoolPortrait';

type Props={state:ClassroomState;name:string;seed?:number;speed:number;paused:boolean;onChange:(state:ClassroomState)=>void;onJournal:()=>void;onSave:()=>void;onPause:()=>void};
export function SchoolBondScene({state,name,seed=0,speed,paused,onChange,onJournal,onSave,onPause}:Props){
 const a=state.active;if(a?.kind!=='bond')return null;
 return <BondDialogue {...{state,name,seed,speed,paused,onChange,onJournal,onSave,onPause}}/>;
}
function BondDialogue({state,name,seed=0,speed,paused,onChange,onJournal,onSave,onPause}:Props){
 const a=state.active! as Extract<NonNullable<ClassroomState['active']>,{kind:'bond'}>,episode=currentBondEpisode(state),line=bondLines(state)[a.line] as SchoolLine|undefined;
 const person=schoolById[a.id],place=locationById[a.location??person.location],bond=state.bonds[a.id];
 const choices=shuffleChoices(episode.choices,`${seed}:bond:${a.id}:${a.episode}:${bond.days.at(-1)??-1}:${a.location??person.location}`);
 const text=line?.text.replaceAll('{name}',name)??'',speaker=line?.speaker==='player'?name:line?.speaker==='alter'?'ALTER EGO':line&&line.speaker!=='narrator'?schoolById[line.speaker].name:'';
 const [visible,setVisible]=useState(speed===0?text.length:0);
 useEffect(()=>{setVisible(speed===0?text.length:0);if(speed===0||paused)return;const timer=setInterval(()=>setVisible(n=>Math.min(text.length,n+2)),speed);return()=>clearInterval(timer);},[a.line,a.choice,text,speed,paused]);
 const next=()=>{if(paused)return;if(visible<text.length){setVisible(text.length);return;}onChange(continueBond(state));};
 useEffect(()=>{const key=(event:KeyboardEvent)=>{if(paused||(event.target as HTMLElement)?.matches('input,textarea,select')||event.isComposing)return;if(event.key==='Enter'||event.code==='Space'){event.preventDefault();if(line)next();}else if(!line&&/^[1-3]$/.test(event.key)){const selected=choices[Number(event.key)-1];if(selected){event.preventDefault();onChange(selectBondChoice(state,selected.index));}}else if(event.key==='Escape'){event.preventDefault();onPause();}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);});
 return <section className="story-screen school-bond-scene">
  <div className="scene-meta"><span className="eyebrow">AFTER SCHOOL</span><h2>{episode.title}</h2><span><MapPin size={13}/>{place.name}</span></div>
  <div className="chapter-ribbon">{a.episode===4?'DAY':String(a.episode+1).padStart(2,'0')}<span>{a.episode===4?'FREE TIME':'PERSONAL STORY'}</span></div>
  <div className="actor-panel"><SchoolPortrait id={a.id} className="actor-portrait"/><div className="actor-caption"><span style={{background:person.color}}/>{person.role}</div></div>
  {line?<button className={`dialogue ${line.speaker==='narrator'?'narrator-dialogue':''}`} onClick={next} aria-label="다음 대사">{speaker&&<div className="speaker-line"><span style={{borderColor:person.color}}>{speaker}</span></div>}<p>{text.slice(0,visible)}{visible<text.length&&'▏'}</p><div className="dialogue-bottom"><span>{visible<text.length?'CLICK TO REVEAL':'CLICK OR PRESS SPACE'}</span><ChevronRight size={17}/></div></button>:<div className="choice-block"><div className="choice-prompt"><span/><Sparkles size={15}/>{episode.title} · 지금의 행동<span/></div>{choices.map(({value:choice,index},position)=><button key={index} onClick={()=>onChange(selectBondChoice(state,index))}><small>{String(position+1).padStart(2,'0')}</small><span>{choice.text}</span><ChevronRight size={19}/></button>)}</div>}
  <nav className="story-toolbar" aria-label="대화 도구"><span><BookOpen size={13}/>함께한 날 {bond.days.length}</span><button onClick={onJournal}><Heart size={14}/>관계</button><button onClick={onSave}><Save size={14}/>저장</button><button onClick={onPause}><Menu size={14}/>메뉴</button></nav>
 </section>;
}
