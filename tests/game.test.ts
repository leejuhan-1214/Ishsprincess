import test from 'node:test';
import assert from 'node:assert/strict';
import { characters, locations } from '../src/data/characters';
import { commonScenes } from '../src/data/common';
import { endings } from '../src/data/endings';
import { haremScenes } from '../src/data/harem';
import { hangoutScene } from '../src/data/hangouts';
import {
  activeLines, activeScene, advance, applyEffects, blankMeta, candidates, choose,
  commonBad, completeActivity, currentActivity, freeTalk, haremChance, haremEligible,
  ids, isGameState, locationOf, newGame, nextDay, resolveEnding, routes, seededRoll,
  selectRoute, validName, visit, restoreGame,
  type GameState, type Meta,
} from '../src/engine/game';
import type { CharacterId, Effect, Line, Scene } from '../src/types';
import {directedScene} from '../src/engine/storyDirector';
import {characterReply,selectSuddenEvent,type TalkContext} from '../src/engine/characterAI';
import {endingCutscene,eventCutscene,eventKindFromScene} from '../src/engine/cutscenes';

const heroStats = ['affection', 'trust', 'jealousy', 'special'];
const globalStats = ['harmony', 'fair', 'reputation', 'ethics', 'safety'];
const legalSpeakers = new Set<string>([...ids, 'player', 'narrator', 'teacher', 'student']);
const legalLocations = new Set(locations.map(location => location.id));
const allScenes = () => [...commonScenes, ...ids.flatMap(id => routes[id]), ...haremScenes];

function assertFiniteState(state: GameState) {
  for (const [id, stats] of Object.entries(state.stats)) {
    for (const [key, value] of Object.entries(stats)) {
      assert.ok(Number.isFinite(value) && value >= 0 && value <= 100, `${id}.${key}: ${value}`);
    }
  }
  for (const [key, value] of Object.entries(state.global)) {
    assert.ok(Number.isFinite(value) && value >= 0 && value <= 100, `global.${key}: ${value}`);
  }
  assert.ok(Number.isFinite(state.actions));
  assert.ok(isGameState(state), `valid playable state: ${state.phase}/${state.segment}/${state.chapter}/${state.routeChapter}`);
}

/** Traverse actual authored lines and a choice, rather than jumping straight to finishScene. */
function playScene(state: GameState, choiceIndex = 0, meta: Meta = blankMeta()): GameState {
  assert.equal(state.phase, 'story');
  const originalId = activeScene(state).id;
  let current = state;
  const budget = activeLines(current).length + 30;
  let chose = Boolean(current.response);
  for (let step = 0; step < budget; step++) {
    if (current.phase !== 'story' || activeScene(current).id !== originalId) {
      assertFiniteState(current);
      return current;
    }
    if (!current.response && current.line >= activeScene(current).lines.length && activeScene(current).choices.length) {
      assert.equal(chose, false, `${originalId}: choice must apply once`);
      current = choose(current, choiceIndex);
      chose = true;
    } else {
      current = advance(current, meta);
    }
  }
  assert.fail(`${originalId} did not advance within ${budget} actions`);
}

/** A balanced player uses the real three actions, no injected relationship points. */
function playBalancedCommon(): GameState {
  let state = newGame('테스트학생', 42);
  for (let chapter = 0; chapter < commonScenes.length; chapter++) {
    assert.equal(state.chapter, chapter);
    state = playScene(state, 0);
    assert.notEqual(state.phase, 'ending', `positive common path ended at ${chapter}: ${state.ending}`);
    if (chapter === commonScenes.length - 1) break;
    assert.equal(state.phase, 'map');
    for (let action = 0; action < 3; action++) {
      const target = ids.filter(id => !state.visitedToday.includes(id)).sort((a, b) => {
        const scoreA = state.stats[a].affection + state.stats[a].trust;
        const scoreB = state.stats[b].affection + state.stats[b].trust;
        return scoreA - scoreB || state.visits[a] - state.visits[b];
      })[0];
      state = visit(state, target);
      state = playScene(state, 0);
    }
    assert.equal(state.actions, 0);
    assert.equal(state.visitedToday.length, 3);
    state = nextDay(state);
  }
  assert.equal(state.phase, 'routeSelect');
  return state;
}

function endingFixture(route: CharacterId = 'world'): GameState {
  const state = newGame('엔딩검증', 42);
  state.phase = 'story';
  state.segment = 'route';
  state.chapter = commonScenes.length - 1;
  state.route = route;
  state.routeChapter = 5;
  state.global = { harmony: 90, fair: 90, reputation: 50, ethics: 80, safety: 80 };
  for (const id of ids) {
    state.stats[id] = { affection: 85, trust: 85, jealousy: 10, special: ['taehun', 'seoyul'].includes(id) ? 75 : 30 };
    state.visits[id] = 3;
  }
  return state;
}

test('authored content is complete, has valid references, and never supplies a default player name', () => {
  assert.equal(ids.length, 6);
  assert.equal(new Set(ids).size, 6);
  assert.equal(commonScenes.length, 14, 'prologue plus thirteen common chapters');
  assert.equal(haremScenes.length, 5);
  for (const id of ids) {
    assert.equal(routes[id].length, 6, `${id}: six complete route chapters`);
    routes[id].forEach(scene => assert.ok(scene.lines.length >= 35, `${scene.id}: ${scene.lines.length} lines`));
  }
  commonScenes.forEach(scene => assert.ok(scene.lines.length >= 30, `${scene.id}: ${scene.lines.length} lines`));
  const scenes = allScenes();
  assert.equal(new Set(scenes.map(scene => scene.id)).size, scenes.length, 'unique scene IDs');
  const validateLines = (list: Line[], context: string) => {
    for (const line of list) {
      assert.ok(legalSpeakers.has(line.speaker), `${context}: speaker ${line.speaker}`);
      assert.ok(typeof line.text === 'string' && line.text.trim().length > 0, `${context}: nonempty dialogue`);
      assert.doesNotMatch(line.text, /송승호|TODO|TBD|나중에 작성/, context);
    }
  };
  for (const scene of scenes) {
    assert.ok(legalLocations.has(scene.location), `${scene.id}: ${scene.location}`);
    assert.ok(Number.isFinite(scene.day), scene.id);
    assert.ok(scene.title.trim());
    assert.ok(scene.choices.length >= 3 && scene.choices.length <= 4, `${scene.id}: three or four choices`);
    assert.equal(new Set(scene.choices.map(choice => choice.id)).size, scene.choices.length, `${scene.id}: unique choice IDs`);
    validateLines(scene.lines, scene.id);
    for (const choice of scene.choices) {
      assert.ok(choice.text.trim());
      assert.ok(choice.response.length >= 3, `${scene.id}/${choice.id}: real response dialogue`);
      validateLines(choice.response, `${scene.id}/${choice.id}`);
      for (const effect of choice.effects) {
        assert.ok(Number.isFinite(effect.amount), `${scene.id}/${choice.id}: finite effect`);
        assert.ok(effect.target === 'global' || ids.includes(effect.target), `${scene.id}: effect target`);
        assert.ok((effect.target === 'global' ? globalStats : heroStats).includes(effect.stat), `${scene.id}: effect stat`);
      }
    }
  }
  assert.equal(new Set(endings.map(ending => ending.id)).size, endings.length, 'unique ending IDs');
  for (const ending of endings) {
    assert.ok(ending.text.length >= 2 && ending.text.every(line => line.trim()), ending.id);
    assert.doesNotMatch(ending.text.join(' '), /송승호|TODO|TBD/, ending.id);
  }
});

test('name entry rejects blank/defaultless input, markup, and overlong names', () => {
  for (const name of ['', ' ', '\n', '<script>', '이름'.repeat(7), 'a\nb']) {
    assert.equal(validName(name), false, JSON.stringify(name));
    assert.throws(() => newGame(name, 1));
  }
  for (const name of ['민수', 'A', 'Émile', '가나다라마바사아자차카타']) assert.ok(validName(name), name);
  const state = newGame('  민수  ', 1);
  assert.equal(state.name, '민수');
  assert.ok(isGameState(state));
});

test('effects clamp every authored branch to valid finite ranges and preserve input', () => {
  const original = newGame('수치검증', 1);
  const snapshot = structuredClone(original);
  const extreme: Effect[] = ids.flatMap(target => [
    { target, stat: 'affection' as const, amount: 500 },
    { target, stat: 'trust' as const, amount: -500 },
  ]);
  const changed = applyEffects(original, extreme, ['dedupe', 'dedupe']);
  assert.deepEqual(original, snapshot);
  for (const id of ids) {
    assert.equal(changed.stats[id].affection, 100);
    assert.equal(changed.stats[id].trust, 0);
  }
  assert.deepEqual(changed.flags, ['dedupe']);
  for (const scene of allScenes()) {
    for (const choice of scene.choices) assertFiniteState(applyEffects(changed, choice.effects, choice.flags));
  }
});

test('choice effects apply once and a full response returns a hangout to the map', () => {
  let state = newGame('선택검증', 2);
  assert.strictEqual(choose(state, 0), state, 'cannot choose before reading scene');
  state = { ...state, phase: 'map' };
  state = visit(state, 'world');
  while (state.line < activeScene(state).lines.length) state = advance(state, blankMeta());
  const before = state.stats.world.affection;
  const affectionChange = activeScene(state).choices[0].effects
    .filter(effect => effect.target === 'world' && effect.stat === 'affection')
    .reduce((sum, effect) => sum + effect.amount, 0);
  state = choose(state, 0);
  assert.equal(state.stats.world.affection, Math.max(0, Math.min(100, before + affectionChange)));
  assert.strictEqual(choose(state, 0), state, 'clicking twice cannot apply a response twice');
  while (state.phase === 'story') state = advance(state, blankMeta());
  assert.equal(state.phase, 'map');
  assert.equal(state.actions, 2);
  assert.equal(state.visits.world, 1);
  assert.deepEqual(state.visitedToday, ['world']);
  assert.strictEqual(visit(state, 'world'), state, 'one visit per heroine per afternoon');
  assert.strictEqual(visit({ ...state, actions: 0 }, 'junyeon').phase, 'map', 'no visit with depleted action budget');
});

test('saved dialogue and response states survive JSON round trips without changing progression', () => {
  let state = newGame('세이브', 12345);
  for (let step = 0; step < 5; step++) state = advance(state, blankMeta());
  const restored = JSON.parse(JSON.stringify(state)) as GameState;
  assert.ok(isGameState(restored));
  assert.deepEqual(activeScene(restored), activeScene(state));
  assert.deepEqual(advance(restored, blankMeta()), advance(state, blankMeta()));
  state.line = activeScene(state).lines.length;
  state = choose(state, 0);
  const responseRestored = JSON.parse(JSON.stringify(state)) as GameState;
  assert.ok(isGameState(responseRestored));
  assert.deepEqual(activeLines(responseRestored), activeLines(state));
  assert.deepEqual(advance(responseRestored, blankMeta()), advance(state, blankMeta()));
});

test('malformed saves that could crash dialogue, routes, or maps are rejected', () => {
  const valid = newGame('검증', 123);
  const mutations: [string, (state: any) => void][] = [
    ['NaN relationship', state => { state.stats.world.trust = NaN; }],
    ['invalid actions', state => { state.actions = NaN; }],
    ['negative visit index', state => { state.visits.world = -1; }],
    ['fractional route index', state => { state.segment = 'route'; state.route = 'world'; state.routeChapter = 0.5; }],
    ['non-array response', state => { state.response = { text: 'broken' }; }],
    ['invalid response speaker', state => { state.response = [{ speaker: 'missing', text: 'broken' }]; }],
    ['null flags', state => { state.flags = [null]; }],
    ['unknown visited heroine', state => { state.visitedToday = ['missing']; }],
    ['invalid line index', state => { state.line = 100000; }],
    ['nonfinite probability', state => { state.haremChance = NaN; }],
    ['global outside range', state => { state.global.fair = 101; }],
    ['broken backlog line', state => { state.backlog = [{ text: 123 }]; }],
    ['unknown ending ID', state => { state.phase = 'ending'; state.ending = 'missing-ending'; }],
    ['prototype name as ending ID', state => { state.phase = 'ending'; state.ending = '__proto__'; }],
    ['harem chapter outside content', state => { state.segment = 'harem'; state.routeChapter = haremScenes.length; }],
  ];
  const accepted: string[] = [];
  for (const [name, mutate] of mutations) {
    const damaged = structuredClone(valid);
    mutate(damaged);
    let result: boolean;
    try { result = isGameState(damaged); } catch { assert.fail(`save validation threw for ${name}`); }
    if (result) accepted.push(name);
  }
  assert.deepEqual(accepted, [], `unsafe saves accepted: ${accepted.join(', ')}`);
});

test('balanced common play with three visits per chapter can qualify all six and unlock harem eligibility', () => {
  const state = playBalancedCommon();
  const eligible = ids.filter(id => state.stats[id].affection >= 60 && state.stats[id].trust >= 70);
  assert.deepEqual(eligible, ids, JSON.stringify(state.stats));
  assert.ok(haremEligible(state), JSON.stringify({ stats: state.stats, global: state.global, visits: state.visits }));
  assert.equal(candidates(state).length, 2, 'only the two highest candidates are shown');
  assert.ok(state.haremChance > 0);
  for (const id of ids) assert.ok(state.visits[id] >= 1);
});

test('three real unsafe choices reach the safety bad ending through normal play', () => {
  const unsafeIds = new Set(['beaker-clean', 'dance-unsafe', 'restore-rush-install']);
  const chosenUnsafe: string[] = [];
  let state = newGame('안전경로', 42);
  for (let chapter = 0; chapter < commonScenes.length; chapter++) {
    const scene = activeScene(state);
    const unsafeIndex = scene.choices.findIndex(choice => unsafeIds.has(choice.id));
    if (unsafeIndex >= 0) chosenUnsafe.push(scene.choices[unsafeIndex].id);
    state = playScene(state, unsafeIndex >= 0 ? unsafeIndex : 0);
    if (state.phase === 'ending') break;
    if (chapter === commonScenes.length - 1) break;
    // Maintain real friendships so isolation cannot mask the safety outcome.
    for (let action = 0; action < 3; action++) {
      const heroine = ids.filter(id => !state.visitedToday.includes(id)).sort((a, b) => state.stats[a].trust - state.stats[b].trust)[0];
      state = playScene(visit(state, heroine), 0);
    }
    state = nextDay(state);
  }
  assert.deepEqual(new Set(chosenUnsafe), unsafeIds);
  assert.equal(state.phase, 'ending');
  assert.equal(state.ending, 'common-safety');
  assert.ok(state.global.safety <= 20, `safety=${state.global.safety}`);
  assert.equal(state.flags.filter(flag => flag.startsWith('safety-strike:')).length, 3);
});

test('every personal route can be entered through candidates and played to a true ending', () => {
  const baseline = playBalancedCommon();
  for (const id of ids) {
    const state = structuredClone(baseline);
    // A tie is common after balanced play; lower only other candidates to exercise all six selectors.
    for (const other of ids) if (other !== id) state.stats[other].affection = 49;
    assert.ok(candidates(state).includes(id), `${id}: candidate entry`);
    let routeState = selectRoute(state, id);
    assert.equal(routeState.route, id);
    for (let chapter = 0; chapter < 6; chapter++) routeState = playScene(routeState, 0);
    assert.equal(routeState.phase, 'ending');
    assert.equal(routeState.ending, `${id}-true`, JSON.stringify({ id, stats: routeState.stats[id], flags: routeState.flags }));
  }
});

test('candidate filtering honors thresholds, ranking, and rejects unavailable choices', () => {
  const state = newGame('후보검증', 1);
  state.phase = 'routeSelect';
  state.stats.world = { affection: 80, trust: 60, jealousy: 0, special: 30 };
  state.stats.junyeon = { affection: 60, trust: 70, jealousy: 0, special: 30 };
  state.stats.hyunsol = { affection: 95, trust: 39, jealousy: 0, special: 30 };
  state.stats.taewoo = { affection: 49, trust: 100, jealousy: 0, special: 30 };
  state.stats.taehun = { affection: 70, trust: 80, jealousy: 0, special: 70 };
  assert.deepEqual(candidates(state), ['taehun', 'world']);
  assert.strictEqual(selectRoute(state, 'junyeon'), state);
  assert.strictEqual(selectRoute(state, 'harem'), state);
  assert.equal(selectRoute(state, 'world').route, 'world');
});

test('phase guards prevent skipping story or reentering a completed route', () => {
  const fresh = newGame('진행검증', 1);
  assert.strictEqual(nextDay(fresh), fresh);
  assert.strictEqual(selectRoute(fresh, 'none'), fresh);
  const ended = { ...fresh, phase: 'ending' as const, ending: 'normal' };
  assert.strictEqual(nextDay(ended), ended);
  assert.strictEqual(selectRoute(ended, 'none'), ended);
  const map = { ...fresh, phase: 'map' as const };
  assert.equal(nextDay(map).chapter, 1, 'choosing to rest may leave some actions unused');
  const lastDay = { ...map, chapter: commonScenes.length - 1 };
  assert.strictEqual(nextDay(lastDay), lastDay, 'no out-of-range common chapter');
});

test('team successes and secret promises count distinct scenes rather than collapsing to one flag', () => {
  let state = newGame('사건검증', 1);
  for (const tag of ['team-success', 'secret-promise']) {
    const indexed = commonScenes.flatMap((scene, index) => {
      const choiceIndex = scene.choices.findIndex(choice => choice.flags?.includes(tag));
      return choiceIndex < 0 ? [] : [{ scene, index, choiceIndex }];
    });
    assert.ok(indexed.length >= 2, `${tag}: multiple real authored events`);
    for (const { scene, index, choiceIndex } of indexed) {
      const atChoice={ ...state, phase: 'story' as const, segment: 'common' as const, chapter: index, line: 0, response: null };
      atChoice.line=activeScene(atChoice).lines.length;
      state = choose(atChoice, choiceIndex);
    }
    assert.equal(state.flags.filter(flag => flag.startsWith(`${tag}:`)).length, indexed.length, tag);
    const first = indexed[0];
    const repeated={ ...state, phase: 'story' as const, segment: 'common' as const, chapter: first.index, line: 0, response: null };
    repeated.line=activeScene(repeated).lines.length;
    state = choose(repeated, first.choiceIndex);
    assert.equal(state.flags.filter(flag => flag.startsWith(`${tag}:`)).length, indexed.length, 'same scene cannot double-count');
  }
});

test('seeded harem rolls survive reloads, obey eligibility, and support third eligible attempt pity', () => {
  const state = endingFixture();
  state.flags = Array.from({ length: 6 }, (_, i) => `team-success:${i}`);
  assert.ok(haremEligible(state));
  assert.equal(haremChance(state), 65);
  assert.equal(haremChance({ ...state, ngPlus: true }), 75);
  assert.equal(haremChance(state, 1), 75);
  assert.equal(haremChance(state, 2), 100);
  for (let seed = 0; seed < 100; seed++) {
    const roll = seededRoll(seed);
    assert.ok(roll >= 0 && roll < 100);
    const restored = JSON.parse(JSON.stringify({ ...state, seed })) as GameState;
    assert.equal(seededRoll(restored.seed), roll);
  }
  assert.notEqual(seededRoll(1), seededRoll(2));
  const excluded = structuredClone(state);
  excluded.flags.push('exclusive:world');
  assert.equal(haremChance(excluded, 99), 0, 'pity never bypasses consent/exclusivity conditions');
  excluded.flags = [];
  excluded.stats.junyeon.special = 51;
  assert.equal(haremEligible(excluded), false);
});

test('all registered endings have reachable engine predicates, including every bad ending', () => {
  const reached = new Set<string>();
  for (const id of ids) {
    const trueState = endingFixture(id);
    trueState.flags = [1, 2, 3].map(chapter => `${id}-key-${chapter}`);
    reached.add(resolveEnding(trueState));
    assert.equal(resolveEnding(trueState), `${id}-true`);
    const goodState = endingFixture(id);
    goodState.stats[id].affection = 70;
    goodState.stats[id].trust = 60;
    reached.add(resolveEnding(goodState));
    assert.equal(resolveEnding(goodState), `${id}-good`);
    const bad1 = endingFixture(id);
    if (id === 'taehun') bad1.stats[id].special = 24;
    else if (id === 'seoyul') bad1.stats[id].trust = 29;
    else bad1.stats[id].special = id === 'world' ? 85 : 90;
    reached.add(resolveEnding(bad1));
    assert.equal(resolveEnding(bad1), `${id}-bad1`);
    const bad2 = endingFixture(id);
    if (id === 'world') bad2.stats.world.special = 95;
    else bad2.stats[id].trust = 32;
    reached.add(resolveEnding(bad2));
    assert.equal(resolveEnding(bad2), `${id}-bad2`);
  }
  const safety = endingFixture();
  safety.global.safety = 20;
  safety.flags = ['safety-strike:1', 'safety-strike:2', 'safety-strike:3'];
  assert.equal(commonBad(safety), 'common-safety');
  reached.add(resolveEnding(safety));
  const fraud = endingFixture();
  fraud.global.ethics = 20;
  fraud.flags = ['data-fraud'];
  reached.add(resolveEnding(fraud));
  const alone = endingFixture();
  for (const id of ids) alone.stats[id].trust = 5;
  reached.add(resolveEnding(alone));
  const war = endingFixture();
  war.global.harmony = 20;
  for (const id of ids) war.stats[id].jealousy = 80;
  reached.add(resolveEnding(war));
  const normal = endingFixture();
  normal.phase = 'routeSelect';
  reached.add(selectRoute(normal, 'none').ending!);
  normal.global.fair = 20;
  reached.add(selectRoute(normal, 'none').ending!);
  const harem = endingFixture();
  harem.segment = 'harem';
  harem.route = null;
  harem.routeChapter = haremScenes.length - 1;
  harem.flags = [1, 2, 3, 4].map(i => `harem-key-${i}`);
  reached.add(resolveEnding(harem));
  harem.stats.world.trust = 80;
  reached.add(resolveEnding(harem));
  for (const id of ids) harem.stats[id].jealousy = 50;
  reached.add(resolveEnding(harem));
  harem.stats.world.special = 85;
  reached.add(resolveEnding(harem));
  assert.deepEqual([...reached].sort(), endings.map(ending => ending.id).sort());
});

test('all five harem chapters advance through real choices to their true ending', () => {
  const state = endingFixture();
  state.phase = 'routeSelect';
  state.haremOffered = true;
  let current = selectRoute(state, 'harem');
  for (let chapter = 0; chapter < haremScenes.length; chapter++) current = playScene(current, 0);
  assert.equal(current.phase, 'ending');
  assert.equal(current.ending, 'harem-true', JSON.stringify({ stats: current.stats, flags: current.flags }));
});

test('an explicit decision to postpone the relationship remains harem-good despite high scores', () => {
  const state = endingFixture();
  state.segment = 'harem';
  state.route = null;
  state.routeChapter = haremScenes.length - 1;
  state.flags = ['harem-pause', ...[1, 2, 3, 4, 5].map(i => `harem-key-${i}`)];
  assert.equal(resolveEnding(state), 'harem-good');
  state.stats.world.special = 85;
  assert.equal(resolveEnding(state), 'harem-lonely', 'postponement does not erase abusive choices');
  state.stats.world.special = 30;
  for (const id of ids) state.stats[id].jealousy = 50;
  assert.equal(resolveEnding(state), 'harem-war');
});

test('every rotating hangout produces valid uniquely addressed scenes and finite effects', () => {
  const unique = new Set<string>();
  for (const character of characters) {
    for (let count = 0; count < 12; count++) {
      const scene: Scene = hangoutScene(character.id, count, count + 1);
      assert.ok(!unique.has(scene.id));
      unique.add(scene.id);
      assert.equal(scene.location, character.location);
      assert.ok(scene.lines.every(line => line.text.trim()));
      for (const choice of scene.choices) assertFiniteState(applyEffects(newGame('자유행동', 1), choice.effects, choice.flags));
    }
  }
});

test('after-school decisions use five tagged character actions without repeated copy across twelve visits', () => {
  for (const character of characters) {
    const texts = new Set<string>();
    for (let visit = 0; visit < 12; visit++) {
      const scene = hangoutScene(character.id, visit, visit + 1);
      assert.equal(scene.choices.length, 5, `${character.id}/${visit}: five actions`);
      for (const choice of scene.choices) {
        assert.ok(choice.label?.trim(), `${character.id}/${visit}/${choice.id}: action label`);
        assert.ok(!texts.has(choice.text), `${character.id}: repeated choice copy: ${choice.text}`);
        texts.add(choice.text);
      }
    }
  }
});

test('hangout scenes keep the calendar date of the common chapter that opened the map', () => {
  for (let chapter = 0; chapter < commonScenes.length - 1; chapter++) {
    const map = { ...newGame('날짜검증', 1), phase: 'map' as const, chapter };
    for (const heroine of ids) {
      const state = visit(map, heroine);
      assert.equal(activeScene(state).day, commonScenes[chapter].day, `${heroine} at chapter ${chapter}`);
      assert.ok(isGameState(state));
    }
  }
});

test('dialogue proceeds without padding while authored events and choices remain intact', () => {
  for(const scene of [...allScenes(),...ids.map(id=>hangoutScene(id,0,1))]){
    const expanded=directedScene(scene);
    assert.deepEqual(expanded.lines,scene.lines,scene.id);
    assert.deepEqual(expanded.choices.slice(0,scene.choices.length),scene.choices);
    assert.equal(expanded.choices.length,scene.choices.length+2);
  }
  const state=newGame('지문확인',1);
  const next=advance(state,blankMeta());
  assert.equal(activeLines(next)[next.line].text,commonScenes[0].lines[1].text);
  assert.equal(activeLines(next)[next.line].speaker,'player');
});

test('padded saves resume at the next authored line and keep choices reachable', () => {
  const original=commonScenes[0].lines;
  const atmosphere:Line={speaker:'narrator',text:'교문 너머의 버스 소리이(가) 방금 전보다 또렷해졌다.'};
  const thought:Line={speaker:'player',text:'나는 대답을 서두르지 않고 그 변화부터 기억했다.'};
  const legacy=newGame('이어읽기',3);
  delete legacy.dialogueRevision;
  legacy.backlog=[original[0],atmosphere,thought];
  legacy.line=3;
  const restored=restoreGame(legacy)!;
  assert.equal(restored.line,1);
  assert.deepEqual(restored.backlog,[original[0]]);
  assert.equal(activeLines(restored)[restored.line].text,original[1].text);
  assert.deepEqual(restoreGame(restored),restored,'migration is applied only once');
  const atChoices=restoreGame({...legacy,line:original.length*3})!;
  assert.equal(atChoices.line,original.length);
  assert.ok(choose(atChoices,0).response,'existing saved choice screen still works');
  const duringPadding=restoreGame({...legacy,line:2})!;
  assert.equal(duringPadding.line,1);
  assert.deepEqual(legacy.backlog,[original[0],atmosphere,thought],'original save is not mutated');
});

test('saved responses shed padding without losing original dialogue or free-form replies', () => {
  const legacy=newGame('선택반응',7);
  delete legacy.dialogueRevision;
  const first:Line={speaker:'player',text:'오늘 같이 연습할래?'};
  const second:Line={speaker:'world',text:'좋아. 기타 가져올게.'};
  const padding:Line={speaker:'narrator',text:'앰프의 낮은 잡음이(가) 한 박자 늦게 흔들렸다.'};
  const thought:Line={speaker:'narrator',text:'세계는 화면보다 내 표정에 오래 시선을 두었다.'};
  const restored=restoreGame({...legacy,response:[first,padding,thought,second,padding,thought],line:2})!;
  assert.deepEqual(restored.response,[first,second]);
  assert.equal(restored.line,1);
  assert.equal(advance(restored,blankMeta()).phase,'map');
  const freeReply={...legacy,response:[first,second],line:1};
  assert.deepEqual(restoreGame(freeReply)?.response,freeReply.response);
  assert.equal(restoreGame(freeReply)?.line,1);
  const preExpansion={...legacy,line:5,backlog:commonScenes[0].lines.slice(0,5)};
  assert.equal(restoreGame(preExpansion)?.line,5,'original pre-expansion saves keep their cursor');
  assert.equal(restoreGame({...legacy,line:99999}),null,'invalid indices remain rejected');
});

test('main-story bonus decisions are tagged location actions, not repeated generic advice', () => {
  const copy = new Set<string>();
  for (const scene of allScenes()) {
    const extras = directedScene(scene).choices.slice(scene.choices.length);
    assert.equal(extras.length, 2, `${scene.id}: two location actions`);
    for (const choice of extras) {
      assert.ok(choice.label?.trim(), `${scene.id}/${choice.id}: action label`);
      assert.doesNotMatch(choice.text, /말을 요약해|지금 할 수 있는 일과 다음에 해야 할 일/);
      assert.ok(!copy.has(choice.text), `repeated director copy: ${choice.text}`);
      copy.add(choice.text);
    }
  }
});

test('living timetable moves every heroine and uses the new computer and dedicated dance rooms', () => {
  const state={...newGame('시간표',123),phase:'map' as const};
  const all=new Set<string>();
  for(const id of ids){
    const own=new Set<string>();
    for(let chapter=0;chapter<13;chapter++)for(const actions of [3,2,1]){
      const place=locationOf({...state,chapter,actions},id);own.add(place);all.add(place);
    }
    assert.ok(own.size>=7,`${id}: ${[...own]}`);
  }
  assert.ok(all.has('computer'));
  assert.ok(all.has('dance'));
  assert.equal(locations.find(place=>place.id==='dance')?.bg,'dance');
  assert.equal(locations.find(place=>place.id==='computer')?.bg,'computer');
});

test('map visits start a situational three-round mini game and its score changes the relationship', () => {
  const map={...newGame('활동',77),phase:'map' as const};
  const place=locationOf(map,'taewoo');
  let state=visit(map,'taewoo',place);
  assert.equal(state.phase,'activity');
  const activity=currentActivity(state)!;
  assert.equal(activity.questions.length,3);
  assert.match(activity.subtitle,new RegExp(locations.find(item=>item.id===place)!.name));
  const before=state.stats.taewoo.trust;
  state=completeActivity(state,3);
  assert.equal(state.phase,'story');
  assert.equal(state.stats.taewoo.trust,before+10);
  assert.ok(state.flags.some(flag=>flag.startsWith(`activity:taewoo:${place}:`)));
  assert.ok(isGameState(state));
});

test('free-form character AI changes voice by heroine, intent, relationship, and current location', () => {
  const base={...newGame('대화',91),phase:'map' as const,chapter:4};
  const replies=new Set<string>();
  for(const id of ids){
    const ctx:TalkContext={id,location:'computer',chapter:4,visit:2,stats:{affection:70,trust:75,jealousy:5,special:30},flags:[],seed:91};
    replies.add(characterReply(ctx,'오늘 힘들어 보여. 같이 오류를 찾아볼까?').map(item=>item.text).join(' '));
  }
  assert.equal(replies.size,ids.length,'each heroine has an independent voice');
  const place=locationOf(base,'seoyul');
  let state=visit(base,'seoyul');
  state={...state,line:activeScene(state).lines.length};
  const before=state.stats.seoyul.trust;
  state=freeTalk(state,'미완성 그림은 허락 없이 찍지 않을게. 어떤 부분을 같이 볼까?');
  assert.ok(state.response?.some(item=>item.text.includes('미완성 그림')));
  assert.ok(state.response?.some(item=>item.speaker==='seoyul'));
  assert.ok(state.stats.seoyul.trust>before);
  assert.equal(activeScene(state).location,place);
});

test('relationship thresholds deterministically unlock one-time sudden events', () => {
  const base=newGame('돌발',13);
  const ctx:TalkContext={id:'world',location:'band',chapter:3,visit:1,stats:{affection:70,trust:60,jealousy:10,special:30},flags:[],seed:13};
  const first=selectSuddenEvent(ctx);
  assert.equal(first,'confidence');
  assert.notEqual(selectSuddenEvent({...ctx,flags:['event-seen:world:confidence']}),'confidence');
  assert.equal(selectSuddenEvent({...ctx,stats:{...ctx.stats,jealousy:60}}),'jealousy');
  const map={...base,phase:'map' as const,stats:{...base.stats,world:ctx.stats}};
  const place=locationOf(map,'world');
  const started=visit(map,'world',place);
  assert.ok(started.flags.some(flag=>flag.startsWith('pending-event:world:')));
  assert.equal(started.phase,'activity');
});

test('all 34 endings and every surprise-event combination have playable cutscene data', () => {
  for(const ending of endings){
    const cutscene=endingCutscene(ending.id);
    assert.equal(cutscene.key,`ending:${ending.id}`);
    assert.equal(cutscene.title,ending.title);
    assert.equal(cutscene.beats.length,3);
    assert.ok(cutscene.beats.every(beat=>beat.trim().length>0));
  }
  const kinds=['closeness','confidence','jealousy','boundary','chance'] as const;
  for(const id of ids)for(const kind of kinds){
    const cutscene=eventCutscene(id,kind,id==='taewoo'?'dance':'classroom',`${id}-${kind}`);
    assert.equal(cutscene.beats.length,3);
    assert.equal(eventKindFromScene(`visit-${id}-event-${kind}`),kind);
  }
  const eventArt={world:'event-world',junyeon:'event-junyeon',hyunsol:'event-hyunsol',taewoo:'event-taewoo-fall',taehun:'event-taehun',seoyul:'event-seoyul'} as const;
  for(const id of ids)assert.equal(eventCutscene(id,'chance',id==='taewoo'?'dance':'classroom').art,eventArt[id]);
  assert.equal(eventKindFromScene('ordinary-visit'),null);
});

test('legacy version-one saves without a visit location remain loadable', () => {
  const legacy=newGame('예전세이브',5) as GameState;
  delete legacy.visitLocation;
  assert.ok(isGameState(legacy));
});
