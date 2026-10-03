import type {RPerson} from '../romanceTypes';

// A pleasant answer is not automatically a relationship milestone. Different
// people notice different intentions; the selected answer is remembered.
const keys:Record<RPerson,string[]>={
 world:['listening','unperformed','privacy','invitation','next-song'],
 hyunsol:['process','attention','curiosity','shared-work','no-pretext'],
 taewoo:['rhythm','recovery','rest','signal','offstage'],
 taehun:['observation','reading','uncertainty','weather','shared-page'],
 seoyul:['looking','silence','unfinished','exchange','coauthor'],
 juhan:['cooperation','authorship','imperfection','own-voice','offline'],
 minhyuk:['balance','delegation','personal','unscheduled','shared-plan'],
 junyeon:['presence','boundaries','separate-time','ordinary','accountability']
};
// Index of the answer which stays pleasant but misses the scene's invitation.
const missed:Record<RPerson,number[]>={world:[1,2,2,0,0],hyunsol:[1,2,0,0,0],taewoo:[1,0,2,0,0],taehun:[2,0,2,0,0],seoyul:[0,2,0,0,0],juhan:[1,2,1,0,0],minhyuk:[1,2,2,0,0],junyeon:[1,0,1,0,0]};
const promiseIndex:Record<RPerson,number>={world:1,hyunsol:1,taewoo:2,taehun:1,seoyul:2,juhan:1,minhyuk:2,junyeon:2};
export function routeChoiceFlags(person:RPerson,chapterIndex:number,visit:1|2,optionIndex:number):string[]{
 if(person==='junyeon'||chapterIndex<0||chapterIndex>4)return[];
 const earns=visit===1?optionIndex!==missed[person][chapterIndex]:optionIndex!==(missed[person][chapterIndex]+1)%3;
 const flags=earns?[`route:${person}:${chapterIndex+1}:${keys[person][chapterIndex]}`]:[];
 // A chosen ordinary future together matters more than a repeatedly selected
 // first button. These options explicitly propose a meeting, not ownership.
 if(visit===1&&chapterIndex===3&&optionIndex===promiseIndex[person])flags.push(`route:${person}:commitment`);
 return flags;
}

export function routeChoiceEffect(person:RPerson,chapterIndex:number,visit:1|2,optionIndex:number):{affection:number;trust:number}{
 const earned=routeChoiceFlags(person,chapterIndex,visit,optionIndex).some(flag=>flag!==`route:${person}:commitment`);
 // Near misses are recoverable: warmth can rise while understanding does not.
 if(person==='junyeon')return{affection:0,trust:0};
 return earned?{affection:-2,trust:-2}:{affection:-3,trust:-7};
}
