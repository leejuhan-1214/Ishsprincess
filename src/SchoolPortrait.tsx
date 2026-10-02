import {schoolById,type SchoolId} from './data/classroomMystery';
export function SchoolPortrait({id,className=''}:{id:SchoolId;className?:string}){
 return <div role="img" aria-label={schoolById[id].name} className={`portrait school-portrait ${className}`} style={{backgroundImage:`url(${import.meta.env.BASE_URL}assets/mystery/cast-${id}.png)`,backgroundSize:'cover',backgroundPosition:'center 12%'}}/>;
}
