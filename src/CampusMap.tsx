import {useState,type CSSProperties} from 'react';
import {BookOpen,FlaskConical,Music2,Trees,Lock,MapPin,Users,ChevronRight} from 'lucide-react';
import {locations} from './data/characters';
import type {LocationId} from './types';
import {SchoolPortrait} from './SchoolPortrait';
import {campusPlaceStatus,type CampusStudent} from './campusStatus';
import './campus.css';

export type {CampusStudent} from './campusStatus';
const zones=[
 {id:'research',name:'탐구동',sub:'실험 · 관측 · 프로그래밍',icon:FlaskConical,places:['chemistry','computer','observatory','roof'],color:'#8be0d4'},
 {id:'school',name:'생활동',sub:'교실 · 도서관 · 식당',icon:BookOpen,places:['classroom','library','cafeteria'],color:'#ffe36e'},
 {id:'arts',name:'예술동',sub:'연습 · 공연 · 미디어',icon:Music2,places:['band','dance','art','media','auditorium'],color:'#ff87b4'},
 {id:'outdoor',name:'야외',sub:'정문 · 정원 · 산책로',icon:Trees,places:['gate','garden','walk'],color:'#aabaef'},
];
type Props={selected:LocationId;students:CampusStudent[];locked:(place:LocationId)=>boolean;onSelect:(place:LocationId)=>void};
export function CampusMap({selected,students,locked,onSelect}:Props){
 const [filter,setFilter]=useState('all');
 const count=students.filter(s=>s.available).length;
 return <div className="campus-directory">
  <div className="campus-heading"><span><small>CAMPUS / LIVE LOCATIONS</small><b>방과 후 캠퍼스</b></span><i><Users size={15}/>만날 수 있는 친구 {count}명</i></div>
  <div className="campus-filters" role="group" aria-label="지도 구역 필터">{[{id:'all',name:'전체'},{id:'people',name:'친구 있는 곳'},...zones].map(zone=><button key={zone.id} aria-pressed={filter===zone.id} onClick={()=>setFilter(zone.id)}>{zone.name}</button>)}</div>
  <div className="campus-zones">{zones.filter(z=>filter==='all'||filter==='people'||filter===z.id).map(zone=>{
   const list=locations.filter(place=>zone.places.includes(place.id)&&(filter!=='people'||students.some(s=>s.place===place.id&&s.available)));
   if(!list.length)return null;const Icon=zone.icon;
   return <section key={zone.id} className="campus-zone" style={{'--zone-color':zone.color} as CSSProperties}><header><Icon size={18}/><div><h3>{zone.name}</h3><small>{zone.sub}</small></div><span>{list.length} PLACES</span></header><div className="campus-place-grid">{list.map(place=>{
    const people=students.filter(s=>s.place===place.id),isLocked=locked(place.id);
    return <button key={place.id} className={`campus-place ${selected===place.id?'selected':''} ${isLocked?'is-locked':''}`} aria-pressed={selected===place.id} aria-label={`${place.name}${isLocked?' · 관계 조건 잠김':''} · ${people.length?people.map(s=>s.name).join(', '):'지금은 조용한 곳'}`} onClick={()=>onSelect(place.id)}><div className="campus-place-title">{isLocked?<Lock size={13}/>:<MapPin size={13}/>}<b>{place.name}</b><ChevronRight size={13}/></div><div className="campus-occupants">{people.length?people.map(person=><span key={person.id} className={person.available?'available':person.visited?'visited':'unavailable'}><SchoolPortrait id={person.id}/><small>{person.name}</small></span>):<small className="campus-quiet">지금은 조용해요</small>}</div><span className="campus-place-status">{campusPlaceStatus(people,isLocked)}{selected===place.id&&<em>선택 중</em>}</span></button>;
   })}</div></section>;
  })}</div>
  {filter==='people'&&!count&&<p className="campus-empty">오늘 만날 수 있는 친구가 없어요. 일정을 마치고 다음 이야기로 이어 가세요.</p>}
  <footer><i/>장소를 선택하면 상세 카드에서 대화나 활동을 고를 수 있어요.<span>게임용 가상 캠퍼스</span></footer>
 </div>;
}
