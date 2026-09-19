// Some sandboxed Windows hosts cannot look up an OS username. tsx uses this
// only for naming its temporary cache, so supply a neutral cache identifier.
import os from 'node:os';
try { os.userInfo(); } catch { if(typeof process.geteuid!=='function') process.geteuid=()=>0; }
const {register}=await import('tsx/esm/api');
register();
await import('../tests/game.test.ts');
