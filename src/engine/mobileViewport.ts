/** Follow mobile browser chrome/keyboards without disabling pinch zoom. */
export function bindGameViewport(win: Window, root: HTMLElement): () => void {
 const viewport=win.visualViewport;
 const update=()=>{
  // A pinch must enlarge the existing layout, not shrink/reflow it.
  if(viewport&&Math.abs(viewport.scale-1)>.01)return;
  const height=viewport?.height??win.innerHeight;
  if(Number.isFinite(height)&&height>0)root.style.setProperty('--game-viewport-height',`${Math.round(height)}px`);
 };
 update();
 win.addEventListener('resize',update);
 viewport?.addEventListener('resize',update);
 return()=>{
  win.removeEventListener('resize',update);
  viewport?.removeEventListener('resize',update);
  root.style.removeProperty('--game-viewport-height');
 };
}
