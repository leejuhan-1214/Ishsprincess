import test from 'node:test';
import assert from 'node:assert/strict';
import {bindGameViewport} from '../src/engine/mobileViewport';

class Events {
 readonly listeners=new Map<string,Set<()=>void>>();
 addEventListener(type:string,listener:()=>void){
  const group=this.listeners.get(type)??new Set<()=>void>();
  group.add(listener);this.listeners.set(type,group);
 }
 removeEventListener(type:string,listener:()=>void){this.listeners.get(type)?.delete(listener);}
 emit(type:string){for(const listener of this.listeners.get(type)??[])listener();}
 count(type:string){return this.listeners.get(type)?.size??0;}
}

function fixture(withViewport=true){
 const viewport=Object.assign(new Events(),{height:667.4,scale:1});
 const win=Object.assign(new Events(),{innerHeight:740,visualViewport:withViewport?viewport:null});
 const properties=new Map<string,string>([['--other-theme-property','untouched']]);
 const writes:Array<[string,string]>=[];
 const root={style:{
  setProperty:(name:string,value:string)=>{writes.push([name,value]);properties.set(name,value);},
  removeProperty:(name:string)=>{const value=properties.get(name)??'';properties.delete(name);return value;},
 }};
 const bind=()=>bindGameViewport(win as unknown as Window,root as unknown as HTMLElement);
 const height=()=>properties.get('--game-viewport-height');
 return {viewport,win,properties,writes,bind,height};
}

test('visible mobile height initializes immediately instead of using obscured innerHeight',()=>{
 const f=fixture(),dispose=f.bind();
 assert.equal(f.height(),'667px');
 assert.equal(f.win.count('resize'),1);
 assert.equal(f.viewport.count('resize'),1);
 dispose();
});

test('keyboard, browser chrome and rotation resize events update the visible height',()=>{
 const f=fixture(),dispose=f.bind();
 f.viewport.height=319.6;
 f.viewport.emit('resize');
 assert.equal(f.height(),'320px','opening the keyboard uses the remaining viewport');
 f.viewport.height=712.8;
 f.viewport.emit('resize');
 assert.equal(f.height(),'713px','closing the keyboard or hiding browser chrome restores space');
 f.viewport.height=360;
 f.win.innerHeight=390;
 f.win.emit('resize');
 assert.equal(f.height(),'360px','window rotation still prefers the visible viewport');
 dispose();
});

test('pinch zoom never shrinks or reflows the game and normal scale resumes updates',()=>{
 const f=fixture(),dispose=f.bind(),writesBeforeZoom=f.writes.length;
 f.viewport.scale=2;
 f.viewport.height=333;
 f.viewport.emit('resize');
 f.win.emit('resize');
 assert.equal(f.height(),'667px');
 assert.equal(f.writes.length,writesBeforeZoom,'both resize sources ignore a pinched viewport');
 f.viewport.scale=1;
 f.viewport.height=690;
 f.viewport.emit('resize');
 assert.equal(f.height(),'690px');
 dispose();
});

test('small browser scale rounding does not prevent ordinary viewport updates',()=>{
 const f=fixture(),dispose=f.bind();
 f.viewport.scale=1.005;
 f.viewport.height=651;
 f.viewport.emit('resize');
 assert.equal(f.height(),'651px');
 f.viewport.scale=1.02;
 f.viewport.height=630;
 f.viewport.emit('resize');
 assert.equal(f.height(),'651px');
 dispose();
});

test('browsers without VisualViewport use window height and still clean up',()=>{
 const f=fixture(false),dispose=f.bind();
 assert.equal(f.height(),'740px');
 assert.equal(f.viewport.count('resize'),0);
 f.win.innerHeight=518.7;
 f.win.emit('resize');
 assert.equal(f.height(),'519px');
 dispose();
 assert.equal(f.height(),undefined);
 assert.equal(f.win.count('resize'),0);
});

test('temporary invalid viewport measurements do not collapse the layout',()=>{
 const f=fixture(),dispose=f.bind(),writes=f.writes.length;
 for(const height of [0,-5,Number.NaN,Number.POSITIVE_INFINITY]){
  f.viewport.height=height;
  f.viewport.emit('resize');
  assert.equal(f.height(),'667px');
 }
 assert.equal(f.writes.length,writes);
 f.viewport.height=680;
 f.viewport.emit('resize');
 assert.equal(f.height(),'680px');
 dispose();
});

test('cleanup removes both listeners and only its own CSS property',()=>{
 const f=fixture(),dispose=f.bind();
 dispose();
 assert.equal(f.win.count('resize'),0);
 assert.equal(f.viewport.count('resize'),0);
 assert.equal(f.height(),undefined);
 assert.equal(f.properties.get('--other-theme-property'),'untouched');
 const previousWrites=f.writes.length;
 f.viewport.height=222;
 f.win.innerHeight=222;
 f.viewport.emit('resize');
 f.win.emit('resize');
 assert.equal(f.writes.length,previousWrites,'unmounted components cannot mutate the viewport');
 dispose();
 assert.equal(f.height(),undefined,'duplicate cleanup is harmless');
});

test('remounting after cleanup installs one fresh listener per event target',()=>{
 const f=fixture(),dispose=f.bind();
 dispose();
 f.viewport.height=720;
 const disposeAgain=f.bind();
 assert.equal(f.height(),'720px');
 assert.equal(f.win.count('resize'),1);
 assert.equal(f.viewport.count('resize'),1);
 const previousWrites=f.writes.length;
 f.viewport.emit('resize');
 assert.equal(f.writes.length,previousWrites+1);
 disposeAgain();
});
