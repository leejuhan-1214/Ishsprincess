import type {CSSProperties} from 'react';
import {schoolById,type SchoolId} from './data/classroomMystery';
// Keep full-size cards in the native aspect ratio; thumbnails still use cover.
export const portraitDimensions:Record<SchoolId,[number,number]>={
 world:[1024,1536],junyeon:[1024,1536],hyunsol:[1145,1374],taewoo:[1145,1374],
 taehun:[1145,1374],seoyul:[1214,1295],juhan:[1024,1536],minhyuk:[1189,1323],
};
export function SchoolPortrait({id,className=''}:{id:SchoolId;className?:string}){
 const [width,height]=portraitDimensions[id];
 return <div role="img" aria-label={schoolById[id].name} className={`portrait school-portrait ${className}`} style={{'--portrait-ratio':`${width} / ${height}`,backgroundImage:`url(${import.meta.env.BASE_URL}assets/mystery/cast-${id}.png${id==='juhan'?'?v=longhair-2':''})`,backgroundSize:'cover',backgroundPosition:'center 12%'} as CSSProperties}/>;
}
