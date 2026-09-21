/** Twelve newly drawn poses, arranged left-to-right in a 3 × 4 atlas. */
export const MOTION_COLUMNS=3;
export const MOTION_ROWS=4;
export const MOTION_FRAMES=12;
export const episodeMotionAsset=(id:string)=>`motion/${id}`;

export function cutsceneDuration(text:string|undefined,motion:boolean){
 if(text===undefined)return 2300;
 return motion?Math.max(2400,Math.min(3400,text.length*55)):Math.max(4500,Math.min(8500,text.length*105));
}

/** Each narrative beat owns four poses; the title card holds the final pose. */
export function motionFrameAt(beat:number,elapsed:number,duration:number){
 if(beat>=3)return 11;
 const progress=Math.max(0,Math.min(1,elapsed/Math.max(1,duration)));
 const pose=progress<.18?0:progress<.4?1:progress<.68?2:3;
 return Math.max(0,Math.min(11,Math.floor(beat)*4+pose));
}

export function motionPosition(frame:number){
 const index=Math.max(0,Math.min(11,Math.floor(frame)));
 return `${(index%3)*50}% ${Math.floor(index/3)*100/3}%`;
}
