let ctx:AudioContext|null=null;let gain:GainNode|null=null;let timer:ReturnType<typeof setInterval>|null=null;let step=0;
const notes=[261.63,329.63,392,523.25,440,392,329.63,293.66,220,261.63,329.63,392,349.23,329.63,293.66,261.63];
export function music(enabled:boolean,volume:number){
 if(!enabled){if(timer)clearInterval(timer);timer=null;if(gain&&ctx)gain.gain.setTargetAtTime(0,ctx.currentTime,.1);return;}
 try{ctx??=new AudioContext();void ctx.resume();gain??=ctx.createGain();gain.disconnect();gain.connect(ctx.destination);gain.gain.setTargetAtTime(volume*.2,ctx.currentTime,.2);
 if(timer)return;
 const tick=()=>{if(!ctx||!gain)return;const o=ctx.createOscillator(),g=ctx.createGain();o.type='sine';o.frequency.value=notes[step++%notes.length];g.gain.setValueAtTime(0,ctx.currentTime);g.gain.linearRampToValueAtTime(.3,ctx.currentTime+.06);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+2.7);o.connect(g);g.connect(gain);o.start();o.stop(ctx.currentTime+3);o.onended=()=>{o.disconnect();g.disconnect();};};tick();timer=setInterval(tick,850);
 }catch{/* The game remains playable without audio. */}
}
