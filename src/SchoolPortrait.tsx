import type {CSSProperties} from 'react';
import {schoolById,type SchoolId} from './data/classroomMystery';
import {artRevision} from './data/artRevision';
// Keep full-size cards in the native aspect ratio; thumbnails still use cover.
export const portraitDimensions:Record<SchoolId,[number,number]>={
 world:[1024,1536],junyeon:[1024,1536],hyunsol:[1024,1536],taewoo:[1024,1536],
 taehun:[1024,1536],seoyul:[1024,1536],juhan:[1024,1536],minhyuk:[1024,1536],
};
export function portraitAsset(id:SchoolId){
 return `${import.meta.env.BASE_URL}assets/mystery/cast-${id}.png?v=${artRevision}`;
}
export function SchoolPortrait({id,className=''}:{id:SchoolId;className?:string}){
 const [width,height]=portraitDimensions[id];
 return <div role="img" aria-label={schoolById[id].name} className={`portrait school-portrait ${className}`} style={{'--portrait-ratio':`${width} / ${height}`,'--portrait-aspect':width/height,backgroundImage:`url(${portraitAsset(id)})`,backgroundSize:'cover',backgroundPosition:'center 12%'} as CSSProperties}/>;
}
