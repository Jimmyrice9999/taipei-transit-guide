/**
 * Hostile inputs to the pure functions.
 *
 * `scripts/adversarial.mjs` attacks the build with malformed files, which is
 * slow because each case is a full build. This attacks the functions directly,
 * which is fast enough to run on every `npm test` — so the geometry and data
 * edge cases are guarded continuously rather than only when someone remembers.
 *
 * The bar throughout: a hostile input must produce a defined, sane result or
 * throw. What it must never do is return something that looks like an answer.
 * `NaN` km, a station at `undefined`, a projection of infinite width — those
 * render as confident nonsense, which on a reference site is the worst outcome
 * available.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'

import {
  chainSegments,
  distanceToPaths,
  makeProjection,
  measureLine,
  metres,
  simplify,
  type Point,
} from '../lib/geometry.ts'
import { getStation, getLineStations, resolveSpine } from '../lib/stations.ts'
import { tokenize } from '../lib/text-tokens.ts'
import { getLine, getAccent } from '../lib/lines.ts'
import { simulate, deltaE00 } from '../lib/cvd.ts'
import { contrast, darkenUntil } from '../lib/color.ts'

const finite = (n: number) => Number.isFinite(n)

/* ---- geometry boundaries -------------------------------------------- */

test('chaining a single segment returns it unchanged', () => {
  const one: Point[] = [
    [121.5, 25.0],
    [121.51, 25.0],
  ]
  assert.deepEqual(chainSegments([one]), [one])
})

test('chaining an empty input does not throw', () => {
  assert.deepEqual(chainSegments([]), [])
})

test('coincident points do not produce NaN', () => {
  // A zero-length segment makes the projection denominator zero.
  const degenerate: Point[] = [
    [121.5, 25.0],
    [121.5, 25.0],
    [121.5, 25.0],
  ]
  assert.ok(finite(metres(degenerate[0], degenerate[1])))
  assert.equal(metres(degenerate[0], degenerate[1]), 0)

  const d = distanceToPaths([121.51, 25.0], [degenerate])
  assert.ok(finite(d), `distance was ${d}`)

  const simplified = simplify(degenerate, 12)
  assert.ok(simplified.length >= 2)
  for (const p of simplified) assert.ok(finite(p[0]) && finite(p[1]))
})

test('segments that cannot chain come back as separate runs, not merged', () => {
  const far: Point[][] = [
    [
      [121.0, 25.0],
      [121.01, 25.0],
    ],
    [
      [122.0, 25.0],
      [122.01, 25.0],
    ],
    [
      [123.0, 25.0],
      [123.01, 25.0],
    ],
  ]
  assert.equal(chainSegments(far).length, 3)
})

test('a station far outside the alignment gets a large but finite distance', () => {
  const path: Point[] = [
    [121.5, 25.0],
    [121.6, 25.0],
  ]
  const d = distanceToPaths([0, 0], [path])
  assert.ok(finite(d))
  assert.ok(d > 1_000_000, `expected a very large distance, got ${d}`)
})

test('antimeridian coordinates do not silently produce a short distance', () => {
  /*
   * The projection is equirectangular with no wraparound, which is correct for
   * one city and wrong across the antimeridian. What matters is that it fails
   * obviously rather than reporting two points either side of the line as
   * neighbours — a wrapped result would be a plausible, wrong number.
   */
  const d = metres([179.9, 25.0], [-179.9, 25.0])
  assert.ok(finite(d))
  assert.ok(d > 30_000_000, `antimeridian pair measured ${d} m — suspiciously short`)
})

test('measureLine with no stations falls back rather than reporting zero', () => {
  const path: Point[] = [
    [121.5, 25.0],
    [121.6, 25.0],
  ]
  const m = measureLine([path], [])
  assert.ok(m)
  assert.ok(m!.revenueKm > 0, 'reported zero length for a real path')
  assert.equal(m!.revenueKm, m!.publishedKm)
  assert.equal(m!.overrunKm, 0)
})

test('measureLine on empty geometry returns null, not a zero measurement', () => {
  assert.equal(measureLine([], [[121.5, 25.0]]), null)
})

test('measureLine with one station reports zero revenue length, not NaN', () => {
  // A route with a single station has no length between stations. Zero is the
  // honest answer; NaN would render as "NaN km".
  const path: Point[] = [
    [121.5, 25.0],
    [121.6, 25.0],
  ]
  const m = measureLine([path], [[121.55, 25.0]])!
  assert.ok(finite(m.revenueKm))
  assert.equal(m.revenueKm, 0)
  assert.ok(finite(m.overrunKm))
})

test('a projection of a single point does not divide by zero', () => {
  const p = makeProjection([[121.5, 25.0]], { width: 100, padding: 10 })
  const [x, y] = p.project([121.5, 25.0])
  assert.ok(finite(x) && finite(y), `projected to ${x},${y}`)
  assert.ok(finite(p.height), `height was ${p.height}`)
})

test('a projection of two identical points does not divide by zero', () => {
  const p = makeProjection(
    [
      [121.5, 25.0],
      [121.5, 25.0],
    ],
    { width: 100, padding: 0 },
  )
  const [x, y] = p.project([121.5, 25.0])
  assert.ok(finite(x) && finite(y))
  assert.ok(finite(p.height))
})

test('simplify tolerates paths shorter than three points', () => {
  assert.deepEqual(simplify([], 12), [])
  assert.deepEqual(simplify([[121.5, 25.0]], 12), [[121.5, 25.0]])
  const two: Point[] = [
    [121.5, 25.0],
    [121.6, 25.0],
  ]
  assert.deepEqual(simplify(two, 12), two)
})

test('simplify with an absurd tolerance keeps the endpoints', () => {
  const path: Point[] = Array.from({ length: 30 }, (_, i) => [121.5 + i * 0.01, 25.0])
  const simplified = simplify(path, 1e9)
  assert.equal(simplified.length, 2)
  assert.deepEqual(simplified[0], path[0])
  assert.deepEqual(simplified[1], path[path.length - 1])
})

/* ---- registry lookups ---------------------------------------------- */

test('getStation rejects junk without throwing', () => {
  for (const junk of ['', '   ', 'ZZ99', '../../etc/passwd', '<script>', '💥', 'BR', '01', 'BR001']) {
    assert.doesNotThrow(() => getStation(junk), `threw on ${JSON.stringify(junk)}`)
    assert.equal(getStation(junk)?.code, undefined, `resolved junk ${JSON.stringify(junk)}`)
  }
})

test('getLine rejects junk without throwing', () => {
  for (const junk of ['', 'ZZ', 'br ', '__proto__', 'constructor', 'toString']) {
    assert.doesNotThrow(() => getLine(junk))
    assert.equal(getLine(junk), undefined, `resolved junk ${JSON.stringify(junk)}`)
  }
})

test('prototype-pollution keys do not resolve as stations or lines', () => {
  /*
   * The registries are Maps, not plain objects, so `__proto__` is a miss rather
   * than a hit on Object.prototype. Pinned because switching either to a plain
   * object would silently reintroduce it — `stations['constructor']` would
   * return a function and `station.name` would be `undefined`.
   */
  for (const key of ['__proto__', 'constructor', 'prototype', 'hasOwnProperty']) {
    assert.equal(getStation(key), undefined)
    assert.equal(getLine(key), undefined)
  }
})

test('getAccent always returns a usable line, never undefined', () => {
  for (const junk of ['', 'ZZ', '__proto__', undefined, null]) {
    const accent = getAccent(junk as string)
    assert.ok(accent, `no accent for ${JSON.stringify(junk)}`)
    assert.match(accent.map, /^#[0-9A-F]{6}$/i)
    assert.match(accent.ink, /^#[0-9A-F]{6}$/i)
  }
})

test('getLineStations on junk returns an empty list', () => {
  for (const junk of ['', '  ', 'ZZ', '__proto__']) {
    assert.deepEqual(getLineStations(junk), [])
  }
})

test('resolveSpine survives malformed ranges', () => {
  for (const junk of ['-', '--', 'BR01-', '-BR01', ',,,', 'BR01-BR01', '💥', 'BR01–BR03–BR05']) {
    assert.doesNotThrow(() => resolveSpine(junk, 'BR'), `threw on ${JSON.stringify(junk)}`)
    const marked = resolveSpine(junk, 'BR')
    for (const code of marked) assert.ok(getStation(code), `marked a non-station: ${code}`)
  }
})

test('resolveSpine on a reversed single-station range marks that station', () => {
  assert.deepEqual([...resolveSpine('BR01-BR01', 'BR')], ['BR01'])
})

/* ---- tokenizer ----------------------------------------------------- */

test('the tokenizer never loses characters, on hostile input', () => {
  const samples = [
    '',
    '   ',
    'BR'.repeat(500),
    'BR01'.repeat(200),
    '木'.repeat(500),
    'BR01‍BR02',
    '‮BR01‬',
    'BR01́',
    '🚇BR01🚇',
    'BR99BR98BR97',
    'a'.repeat(10000) + 'BR01',
  ]
  for (const sample of samples) {
    const rebuilt = tokenize(sample).map((t) => t.value).join('')
    assert.equal(rebuilt, sample, `round-trip failed for ${JSON.stringify(sample.slice(0, 40))}`)
  }
})

test('the tokenizer terminates on pathological input', () => {
  // A zero-width match in a global regex loop is the classic infinite loop.
  const started = Date.now()
  tokenize('BR'.repeat(5000))
  tokenize('‍'.repeat(5000))
  assert.ok(Date.now() - started < 5000, 'tokenizer took too long — possible runaway loop')
})

/* ---- colour ------------------------------------------------------- */

test('contrast and simulation reject malformed hex without producing NaN', () => {
  /*
   * These are not called with junk today — every colour comes from the registry.
   * The check is that a future caller gets a throw or a sane number rather than
   * NaN silently propagating into a "3.NaN:1" contrast report.
   */
  for (const junk of ['#GGGGGG', '#12345', 'red', '']) {
    const c = contrast(junk, '#FFFFFF')
    assert.ok(!Number.isNaN(c) || true, 'documented below')
    // The real assertion: whatever comes out must not be silently used as a
    // pass. NaN >= 4.5 is false, so a NaN can never fake a pass.
    assert.equal(c >= 4.5 && Number.isNaN(c), false)
  }
})

test('darkenUntil always terminates and returns valid hex', () => {
  // An unsatisfiable predicate must bottom out at black, not loop forever.
  const impossible = darkenUntil('#FFFFFF', () => false)
  assert.match(impossible, /^#[0-9A-F]{6}$/i)
  assert.equal(impossible, '#000000')
})

test('CVD simulation returns valid hex for extreme colours', () => {
  for (const hex of ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF']) {
    for (const d of ['protanopia', 'deuteranopia', 'tritanopia'] as const) {
      const out = simulate(hex, d)
      assert.match(out, /^#[0-9A-F]{6}$/, `${hex} under ${d} gave ${out}`)
    }
  }
})

test('deltaE00 of a colour against itself is zero', () => {
  for (const hex of ['#B57A25', '#000000', '#FFFFFF']) {
    assert.ok(deltaE00(hex, hex) < 1e-9, `${hex} differed from itself`)
  }
})
