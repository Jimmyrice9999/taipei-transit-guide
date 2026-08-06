/**
 * A harder look at the route geometry than `npm run geometry` gives.
 *
 * `geometry-report` answers "what did chaining produce". This answers the
 * question behind it: is a multi-run line a real branch, or did chaining fail?
 *
 * Three things it does that the report does not:
 *
 *   1. Measures gaps between EVERY pair of runs, not just consecutive entries in
 *      the array. Consecutive array entries are not geographically adjacent —
 *      when a chain is banked, the next one starts from whatever segment happened
 *      to be next in the file, so the "jump" the report prints is close to
 *      arbitrary.
 *   2. Names the stations nearest each run's endpoints, which is what actually
 *      tells you whether a break sits where a branch diverges.
 *   3. Measures station offsets against the RAW chained alignment rather than the
 *      simplified one, so simplification tolerance is not folded into the number.
 */

import {
  chainSegments,
  distanceToPaths,
  metres,
  simplify,
  type Point,
} from '../lib/geometry.ts'
import { STATIONS } from '../lib/stations.ts'
import { LINES } from '../lib/lines.ts'
import trtcShapes from '../data/tdx/TRTC/shape.json' with { type: 'json' }
import ntmcShapes from '../data/tdx/NTMC/shape.json' with { type: 'json' }
import tymcShapes from '../data/tdx/TYMC/shape.json' with { type: 'json' }

type ShapeRecord = { LineID: string; Geometry: string }
const shapes: ShapeRecord[] = [
  ...(trtcShapes as unknown as ShapeRecord[]),
  ...(ntmcShapes as unknown as ShapeRecord[]),
  ...(tymcShapes as unknown as ShapeRecord[]),
]

/** Same WKT reader lib/geometry.ts uses; duplicated because it is not exported. */
function parseWkt(wkt: string): Point[][] {
  const open = wkt.indexOf('(')
  if (open < 0) return []
  const type = wkt.slice(0, open).trim().toUpperCase()
  const body = wkt.slice(open + 1, wkt.lastIndexOf(')'))
  const chunks =
    type === 'MULTILINESTRING' ? [...body.matchAll(/\(([^()]*)\)/g)].map((m) => m[1]) : [body]
  return chunks
    .map((chunk) =>
      chunk
        .split(',')
        .map((pair) => pair.trim().split(/\s+/).map(Number) as Point)
        .filter((p) => p.length >= 2 && Number.isFinite(p[0]) && Number.isFinite(p[1])),
    )
    .filter((seg) => seg.length > 1)
}

const pad = (s: string | number, n: number) => String(s).padEnd(n)

/** The station whose coordinates sit nearest a given point. */
function nearestStation(point: Point, lineCode: string) {
  let best: { code: string; name: string; d: number } | null = null
  for (const s of STATIONS) {
    if (s.line !== lineCode || s.lat === null || s.lon === null) continue
    const d = metres(point, [s.lon, s.lat])
    if (!best || d < best.d) best = { code: s.code, name: s.name, d }
  }
  return best
}

let problems = 0

console.log('\n════ 1. Segment chaining, per line ════\n')

for (const line of LINES) {
  const record = shapes.find((s) => s.LineID === line.code)
  if (!record?.Geometry) {
    console.log(`${line.code}: no published geometry`)
    continue
  }

  const segments = parseWkt(record.Geometry)
  const runs = chainSegments(segments)

  console.log(
    `${pad(line.code, 4)} ${pad(line.name, 20)} ${segments.length} source segment(s) → ${runs.length} run(s)`,
  )

  for (const [i, run] of runs.entries()) {
    let km = 0
    for (let j = 1; j < run.length; j++) km += metres(run[j - 1], run[j])
    const head = nearestStation(run[0], line.code)
    const tail = nearestStation(run[run.length - 1], line.code)
    console.log(
      `        run ${i}: ${String(run.length).padStart(4)} pts, ${(km / 1000).toFixed(2).padStart(6)} km   ` +
        `${head?.code ?? '??'}…${tail?.code ?? '??'}  ` +
        `(ends ${head?.d.toFixed(0)} m / ${tail?.d.toFixed(0)} m from nearest station)`,
    )
  }

  // Closest approach between every pair of runs, measured endpoint to endpoint.
  // A small number here means chaining gave up on something it should have
  // joined; a large one means the runs genuinely do not meet.
  if (runs.length > 1) {
    for (let a = 0; a < runs.length; a++) {
      for (let b = a + 1; b < runs.length; b++) {
        const ends = [
          [runs[a][0], runs[b][0]],
          [runs[a][0], runs[b][runs[b].length - 1]],
          [runs[a][runs[a].length - 1], runs[b][0]],
          [runs[a][runs[a].length - 1], runs[b][runs[b].length - 1]],
        ] as [Point, Point][]
        const closest = Math.min(...ends.map(([p, q]) => metres(p, q)))
        const flag = closest < 300 ? '  ← under 300 m: likely a chaining failure, not a branch' : ''
        if (closest < 300) problems++
        console.log(
          `        runs ${a}↔${b}: closest endpoints ${(closest / 1000).toFixed(2)} km${flag}`,
        )
      }
    }
  }
  console.log('')
}

console.log('\n════ 2. Station offsets, perpendicular to the RAW alignment ════\n')
console.log('Measured against the chained-but-unsimplified path, so the 12 m')
console.log('simplification tolerance is not counted as a station offset.\n')
console.log(pad('line', 6) + pad('n', 5) + pad('mean', 8) + pad('p90', 8) + pad('worst', 8) + 'worst station')
console.log('-'.repeat(70))

const OFFSET_LIMIT_M = 200
const flagged: string[] = []

for (const line of LINES) {
  const record = shapes.find((s) => s.LineID === line.code)
  if (!record?.Geometry) continue
  const raw = chainSegments(parseWkt(record.Geometry))

  const stations = STATIONS.filter((s) => s.line === line.code && s.lat !== null && s.lon !== null)
  if (stations.length === 0) continue

  const rows = stations
    .map((s) => ({ s, d: distanceToPaths([s.lon!, s.lat!], raw) }))
    .sort((a, b) => a.d - b.d)

  const mean = rows.reduce((n, r) => n + r.d, 0) / rows.length
  const p90 = rows[Math.floor(rows.length * 0.9)]?.d ?? 0
  const worst = rows[rows.length - 1]

  console.log(
    pad(line.code, 6) +
      pad(rows.length, 5) +
      pad(mean.toFixed(0) + ' m', 8) +
      pad(p90.toFixed(0) + ' m', 8) +
      pad(worst.d.toFixed(0) + ' m', 8) +
      `${worst.s.code} ${worst.s.name}`,
  )

  for (const row of rows) {
    if (row.d > OFFSET_LIMIT_M) {
      flagged.push(`${row.s.code} ${row.s.name} (${line.code}) — ${row.d.toFixed(0)} m`)
    }
  }
}

console.log('')
if (flagged.length === 0) {
  console.log(`  ✓ no station sits more than ${OFFSET_LIMIT_M} m from its line's alignment`)
} else {
  console.log(`  ✗ ${flagged.length} station(s) beyond ${OFFSET_LIMIT_M} m — suspect a data mismatch:`)
  for (const f of flagged) console.log(`      ${f}`)
  problems += flagged.length
}

console.log('\n════ 3. What simplification costs ════\n')
console.log('Largest extra station offset introduced by simplifying at 12 m.\n')

for (const line of LINES) {
  const record = shapes.find((s) => s.LineID === line.code)
  if (!record?.Geometry) continue
  const raw = chainSegments(parseWkt(record.Geometry))
  const simplified = raw.map((p) => simplify(p, 12))

  const stations = STATIONS.filter((s) => s.line === line.code && s.lat !== null && s.lon !== null)
  let worst = 0
  for (const s of stations) {
    const a = distanceToPaths([s.lon!, s.lat!], raw)
    const b = distanceToPaths([s.lon!, s.lat!], simplified)
    worst = Math.max(worst, Math.abs(b - a))
  }
  console.log(`  ${pad(line.code, 4)} worst drift ${worst.toFixed(1)} m`)
}

console.log('')
process.exit(problems > 0 ? 1 : 0)
