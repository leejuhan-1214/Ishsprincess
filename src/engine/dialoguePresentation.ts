import type {RLine} from '../romanceTypes';

/** A CG stays while the conversation stays in the same place; never leak it into a new scene. */
export function activeSceneArt(lines:readonly RLine[],index:number):string|undefined{
 for(let at=Math.min(index,lines.length-1);at>=0;at--){
  if(lines[at].art)return lines[at].art;
  if(lines[at].location)return undefined;
 }
 return undefined;
}
export type RevealProgress={key:string;count:number};
/** New dialogue cannot borrow the previous sentence's reveal length, even for one render. */
export function revealedCount(progress:RevealProgress,key:string,length:number,instant:boolean){
 return instant?length:progress.key===key?Math.min(length,progress.count):0;
}
