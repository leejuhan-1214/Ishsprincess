import {useState,type CSSProperties} from 'react';
import {BookOpen,FlaskConical,Music2,Trees,Lock,MapPin,Users,ChevronRight,Search} from 'lucide-react';
import {locations} from './data/characters';
import type {LocationId} from './types';
import {SchoolPortrait} from './SchoolPortrait';
import {campusPlaceStatus,type CampusStudent} from './campusStatus';
import './campus.css';

export type {CampusStudent} from './campusStatus';
const zones=[
 {id:'research',name:'탐구동',sub:'실험 · 관측 · 프로그래밍',icon:FlaskConical,places:['chemistry','computer','observatory','roof'],color:'#8be0d4'},
 {id:'school',name:'생활동',sub:'교실 · 도서관 · 식당',icon:BookOpen,places:['classroom','hallway','library','cafeteria'],color:'#ffe36e'},
 {id:'arts',name:'예술동',sub:'연습 · 공연 · 미디어',icon:Music2,places:['band','dance','art','media','auditorium'],color:'#ff87b4'},
 {id:'outdoor',name:'야외',sub:'정문 · 정원 · 산책로',icon:Trees,places:['gate','garden','walk'],color:'#aabaef'},
];
type Props={selected:LocationId;students:CampusStudent[];locked:(place:LocationId)=>boolean;onSelect:(place:LocationId)=>void;discoveries?:Partial<Record<LocationId,number>>};
export function CampusMap({selected,students,locked,onSelect,discoveries={}}:Props){
 const [filter,setFilter]=useState('all');
 const count=students.filter(s=>s.available).length;
 return <div className="campus-directory">
  <div className="campus-heading"><span><b>학교 지도</b></span><i><Users size={15}/>{count}명</i></div>
  <div className="campus-filters" role="group" aria-label="지도 구역 필터">{[{id:'all',name:'전체'},{id:'people',name:'친구'},{id:'clues',name:'확인할 곳'},...zones].map(zone=><button key={zone.id} aria-pressed={filter===zone.id} onClick={()=>setFilter(zone.id)}>{zone.name}</button>)}</div>
  <div className="campus-zones">{zones.filter(z=>filter==='all'||filter==='people'||filter==='clues'||filter===z.id).map(zone=>{
   const list=locations.filter(place=>zone.places.includes(place.id)&&(filter!=='people'||students.some(s=>s.place===place.id&&s.available))&&(filter!=='clues'||(discoveries[place.id]??0)>0));
   if(!list.length)return null;const Icon=zone.icon;
   return <section key={zone.id} className="campus-zone" style={{'--zone-color':zone.color} as CSSProperties}><header><Icon size={18}/><div><h3>{zone.name}</h3></div></header><div className="campus-place-grid">{list.map(place=>{
    const people=students.filter(s=>s.place===place.id),isLocked=locked(place.id);
    return <button key={place.id} className={`campus-place ${selected===place.id?'selected':''} ${isLocked?'is-locked':''}`} aria-pressed={selected===place.id} aria-label={`${place.name}${isLocked?' · 잠김':''}${discoveries[place.id]?` · 확인할 기록 ${discoveries[place.id]}개`:''} · ${people.length?people.map(s=>s.name).join(', '):'아무도 없음'}`} onClick={()=>onSelect(place.id)}><div className="campus-place-title">{isLocked?<Lock size={13}/>:<MapPin size={13}/>}<b>{place.name}</b><ChevronRight size={13}/></div><div className="campus-occupants">{people.length?people.map(person=><span key={person.id} className={person.available?'available':person.visited?'visited':'unavailable'}><SchoolPortrait id={person.id}/><small>{person.name}</small></span>):<small className="campus-quiet">—</small>}</div>{!!discoveries[place.id]&&<span className="campus-clue-badge"><Search size={12}/>확인 {discoveries[place.id]}</span>}<span className="campus-place-status">{campusPlaceStatus(people,isLocked)}</span></button>;
   })}</div></section>;
  })}</div>
  {filter==='people'&&!count&&<p className="campus-empty">지금 만날 수 있는 친구가 없어요.</p>}
  {filter==='clues'&&!Object.keys(discoveries).length&&<p className="campus-empty">새로 확인할 기록이 없어요.</p>}
 </div>;
}
