// Some sandboxed Windows hosts cannot look up an OS username. tsx uses this
// only for naming its temporary cache, so supply a neutral cache identifier.
import os from 'node:os';
try { os.userInfo(); } catch { if(typeof process.geteuid!=='function') process.geteuid=()=>0; }
const {register}=await import('tsx/esm/api');
register();
await import('../tests/game.test.ts');
await import('../tests/classroom.test.ts');
await import('../tests/schoolFlow.test.ts');
await import('../tests/portraitFrames.test.ts');
await import('../tests/campusMap.test.ts');
await import('../tests/evidenceVisuals.test.ts');
await import('../tests/investigationUI.test.ts');
await import('../tests/choiceOrder.test.ts');
await import('../tests/activities.test.ts');
await import('../tests/trialPresentation.test.ts');
await import('../tests/romance.test.ts');
await import('../tests/romanceMystery.test.ts');
await import('../tests/romanceRemake.test.ts');
await import('../tests/romanceActivities.test.ts');
await import('../tests/romanceIntegrationAudit.test.ts');
await import('../tests/romanceSpoilers.test.ts');
await import('../tests/romanceUI.test.ts');
await import('../tests/locationBackgrounds.test.ts');
