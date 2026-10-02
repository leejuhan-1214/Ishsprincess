import type {LocationId} from './types';
import type {SchoolId} from './data/classroomMystery';
export type CampusStudent={id:SchoolId;name:string;color:string;place:LocationId;available:boolean;visited?:boolean;waiting?:boolean};
export function campusPlaceStatus(people:CampusStudent[],isLocked:boolean){
 if(isLocked)return '관계 조건 필요';
 const ready=people.filter(person=>person.available).length;
 if(ready)return `만남 가능 ${ready}명`;
 if(!people.length)return '장소 살펴보기';
 if(people.some(person=>person.waiting))return '재판 후 약속';
 return people.every(person=>person.visited)?'오늘 만남 완료':'지금은 만날 수 없어요';
}
