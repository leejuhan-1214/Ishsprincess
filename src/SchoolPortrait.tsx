import type {CSSProperties} from 'react';
import {schoolById,type SchoolId} from './data/classroomMystery';
// Keep full-size cards in the native aspect ratio; thumbnails still use cover.
export const portraitDimensions:Record<SchoolId,[number,number]>={
 world:[1024,1536],junyeon:[1024,1536],hyunsol:[1145,1374],taewoo:[1145,1374],
 taehun:[1145,1374],seoyul:[1214,1295],juhan:[1086,1448],minhyuk:[1086,1448],
};
export function portraitAsset(id:SchoolId){
 return `${import.meta.env.BASE_URL}assets/mystery/cast-${id}.png${id==='juhan'||id==='minhyuk'?'?v=cel-match-3':''}`;
}
export function SchoolPortrait({id,className=''}:{id:SchoolId;className?:string}){
 const [width,height]=portraitDimensions[id];
 return <div role="img" aria-label={schoolById[id].name} className={`portrait school-portrait ${className}`} style={{'--portrait-ratio':`${width} / ${height}`,'--portrait-aspect':width/height,backgroundImage:`url(${portraitAsset(id)})`,backgroundSize:'cover',backgroundPosition:'center 12%'} as CSSProperties}/>;
}
