/**
 * Route geometry: chaining, measurement, and how far stations sit from track.
 *
 * These are the tests that would have caught the route length being 1.4 km too
 * long. The site presents geometry as evidence, so the geometry needs evidence
 * of its own.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'

import {
  chainSegments,
  distanceToPaths,
  getAllLineGeometry,
  getLineGeometry,
  makeProjection,
  measureLine,
  metres,
  simplify,
  type Point,
} from '../lib/geometry.ts'
import { LINES } from '../lib/lines.ts'
import { STATIONS } from '../lib/stations.ts'
import { getLineSummaries } from '../lib/network.ts'
import { getTrunkRoute } from '../lib/routes.ts'

/* ---- chaining ----------------------------------------------------- */

test('chaining grows from both ends, not just the tail', () => {
  /*
   * The bug this replaced: growing forward only stranded every segment that
   * belonged *before* the file's first segment, which showed up as impossible
   * 11 km gaps inside the Bannan Line. Here the middle segment is given first,
   * so a tail-only implementation returns three runs instead of one.
   */
  const middle: Point[] = [[121.5, 25.0], [121.51, 25.0]]
  const before: Point[] = [[121.49, 25.0], [121.5, 25.0]]
  const after: Point[] = [[121.51, 25.0], [121.52, 25.0]]

  const chains = chainSegments([middle, before, after])
  assert.equal(chains.length, 1, 'segments before the first one were stranded')
  assert.equal(chains[0].length, 4)
})

test('chaining reverses a segment when that is how it joins', () => {
  const a: Point[] = [[121.5, 25.0], [121.51, 25.0]]
  const reversed: Point[] = [[121.52, 25.0], [121.51, 25.0]]
  const chains = chainSegments([a, reversed])
  assert.equal(chains.length, 1)
  assert.deepEqual(chains[0][chains[0].length - 1], [121.52, 25.0])
})

test('a genuine gap is left as a separate run, not bridged', () => {
  // Bridging would draw track that does not exist. Two segments 5 km apart.
  const a: Point[] = [[121.5, 25.0], [121.51, 25.0]]
  const far: Point[] = [[121.6, 25.0], [121.61, 25.0]]
  assert.equal(chainSegments([a, far]).length, 2)
})

test('Wenhu and Bannan chain into a single continuous run', () => {
  // The two lines with no branch and no holes in the source. If either splits,
  // either the data changed or the chaining broke.
  assert.equal(getLineGeometry('BR')!.paths.length, 1)
  assert.equal(getLineGeometry('BL')!.paths.length, 1)
})

test('every line publishes geometry', () => {
  for (const line of LINES) {
    assert.ok(getLineGeometry(line.code), `${line.code} has no geometry`)
  }
})

/* ---- simplification ----------------------------------------------- */

test('simplification keeps the endpoints', () => {
  const path: Point[] = Array.from({ length: 50 }, (_, i) => [121.5 + i * 0.001, 25.0 + i * 0.0001])
  const simplified = simplify(path, 12)
  assert.deepEqual(simplified[0], path[0])
  assert.deepEqual(simplified[simplified.length - 1], path[path.length - 1])
  assert.ok(simplified.length <= path.length)
})

test('simplification never moves a station more than its tolerance', () => {
  for (const line of LINES) {
    const geometry = getLineGeometry(line.code)!
    const stations = STATIONS.filter((s) => s.line === line.code && s.lat !== null)
    for (const station of stations) {
      const raw = distanceToPaths([station.lon!, station.lat!], geometry.chained)
      const drawn = distanceToPaths([station.lon!, station.lat!], geometry.paths)
      assert.ok(
        Math.abs(drawn - raw) <= 12,
        `${station.code}: simplification moved the line ${Math.abs(drawn - raw).toFixed(1)} m relative to the station, above the 12 m tolerance`,
      )
    }
  }
})

/* ---- station offsets ---------------------------------------------- */

test('no station sits more than 200 m from its line', () => {
  /*
   * Station coordinates are entrances or centroids, not track positions, so
   * tens of metres are expected. Hundreds would mean the geometry does not
   * describe the line we think it does — a mismatch, not a rendering offset.
   *
   * Measured against the unsimplified alignment so the drawing tolerance is not
   * counted as station error.
   */
  const flagged: string[] = []
  for (const line of LINES) {
    const geometry = getLineGeometry(line.code)!
    for (const station of STATIONS.filter((s) => s.line === line.code && s.lat !== null)) {
      const d = distanceToPaths([station.lon!, station.lat!], geometry.chained)
      if (d > 200) flagged.push(`${station.code} ${station.name} — ${d.toFixed(0)} m`)
    }
  }
  assert.deepEqual(flagged, [])
})

test('distance is measured to the nearest segment, not the nearest vertex', () => {
  /*
   * The trap this guards: after simplification a line can pass within metres of
   * a station while its nearest retained vertex is a kilometre away along a
   * straight run. Vertex distance would report the kilometre.
   */
  const straight: Point[] = [[121.5, 25.0], [121.6, 25.0]]
  const beside: Point = [121.55, 25.0005]
  const d = distanceToPaths(beside, [straight])
  assert.ok(d < 100, `expected a short perpendicular distance, got ${d.toFixed(0)} m`)
})

/* ---- measurement -------------------------------------------------- */

test('measureLine separates the whole alignment from the revenue length', () => {
  const geometry = getLineGeometry('BR')!
  const stations = STATIONS.filter((s) => s.line === 'BR' && s.lat !== null)
  const measurement = measureLine(
    geometry.chained,
    stations.map((s) => [s.lon!, s.lat!] as Point),
  )!

  assert.ok(measurement.publishedKm > measurement.revenueKm, 'no overrun detected')
  assert.ok(
    Math.abs(measurement.overrunKm - 1.38) < 0.05,
    `Wenhu overrun measured ${measurement.overrunKm.toFixed(2)} km, expected about 1.38`,
  )
  assert.ok(
    Math.abs(measurement.revenueKm - 25.04) < 0.05,
    `Wenhu revenue length measured ${measurement.revenueKm.toFixed(2)} km, expected about 25.04`,
  )
})

test('the measured length agrees with the official one on continuous lines', () => {
  /*
   * The heart of it. Where the geometry has no holes, our own measurement and
   * the operator's published figure must agree closely — that agreement is what
   * makes either number trustworthy, and it is why both are printed.
   */
  for (const summary of getLineSummaries()) {
    if (summary.runs !== 1 || summary.officialKm === null || summary.measuredKm === null) continue
    const delta = Math.abs(summary.measuredKm - summary.officialKm)
    assert.ok(
      delta < 0.2,
      `${summary.line.code}: measured ${summary.measuredKm.toFixed(2)} km against official ${summary.officialKm.toFixed(2)} km — ${(delta * 1000).toFixed(0)} m apart`,
    )
  }
})

test('measured length never wildly exceeds the official one', () => {
  // A measurement longer than the operator's own figure by more than a
  // kilometre means overrun is being counted again.
  for (const summary of getLineSummaries()) {
    if (summary.officialKm === null || summary.measuredKm === null) continue
    assert.ok(
      summary.measuredKm - summary.officialKm < 1,
      `${summary.line.code}: measured ${summary.measuredKm.toFixed(2)} km exceeds official ${summary.officialKm.toFixed(2)} km`,
    )
  }
})

test('the Wenhu Line measures 25.0 km, not 26.4', () => {
  // Pinned against the specific regression.
  const summary = getLineSummaries().find((s) => s.line.code === 'BR')!
  assert.ok(summary.measuredKm! > 24.8 && summary.measuredKm! < 25.3, `got ${summary.measuredKm}`)
  assert.ok(summary.publishedGeometryKm! > 26, 'the whole alignment should still be about 26.4 km')
})

test('every line summary reports the number of runs honestly', () => {
  for (const summary of getLineSummaries()) {
    const geometry = getLineGeometry(summary.line.code)
    assert.equal(summary.runs, geometry ? geometry.paths.length : 0)
  }
})

test('branch flags come from routes, not from geometry breaks', () => {
  // The Circular Line's geometry arrives in three runs but it has no branch.
  const y = getLineSummaries().find((s) => s.line.code === 'Y')!
  assert.ok(y.runs > 1, 'expected the Circular Line geometry to be discontinuous')
  assert.equal(y.hasBranch, false, 'discontinuous geometry was mistaken for a branch')

  const g = getLineSummaries().find((s) => s.line.code === 'G')!
  assert.equal(g.hasBranch, true, 'the Xiaobitan branch was missed')
})

test('trunk termini are the first and last station drawn on the map', () => {
  for (const summary of getLineSummaries()) {
    const trunk = getTrunkRoute(summary.line.code)!
    assert.equal(summary.from?.code, trunk.from)
    assert.equal(summary.to?.code, trunk.to)
  }
})

/* ---- projection --------------------------------------------------- */

test('the projection puts north up and east right', () => {
  const points: Point[] = [[121.5, 25.0], [121.6, 25.1]]
  const { project, width, height } = makeProjection(points, { width: 100, padding: 0 })
  const [x0, y0] = project(points[0])
  const [x1, y1] = project(points[1])

  assert.ok(x1 > x0, 'east is not to the right')
  assert.ok(y1 < y0, 'north is not up — SVG y grows downward, so it must be flipped')
  assert.equal(width, 100)
  assert.ok(height > 0)
})

test('the projection keeps proportions, so the scale bar means something', () => {
  const points: Point[] = [[121.5, 25.0], [121.6, 25.0], [121.5, 25.1]]
  const { project } = makeProjection(points, { width: 500, padding: 0 })

  const eastWestM = metres([121.5, 25.0], [121.6, 25.0])
  const northSouthM = metres([121.5, 25.0], [121.5, 25.1])

  const [ax, ay] = project([121.5, 25.0])
  const [bx] = project([121.6, 25.0])
  const [, cy] = project([121.5, 25.1])

  const eastWestPx = Math.abs(bx - ax)
  const northSouthPx = Math.abs(cy - ay)

  const ratio = eastWestPx / northSouthPx / (eastWestM / northSouthM)
  assert.ok(Math.abs(ratio - 1) < 0.02, `aspect distorted by ${((ratio - 1) * 100).toFixed(1)}%`)
})

test('the metre approximation is sane at Taipei latitudes', () => {
  // One degree of latitude is about 110.6 km everywhere.
  const oneDegreeLat = metres([121.5, 25.0], [121.5, 26.0])
  assert.ok(Math.abs(oneDegreeLat - 110574) < 100, `${oneDegreeLat.toFixed(0)} m`)
  assert.equal(metres([121.5, 25.0], [121.5, 25.0]), 0)
})

// Counted from LINES rather than written as 7. The literal outlasted the fact
// twice — the network was five lines, then seven, and is nine since run 10.
test('every line reports geometry totals', () => {
  const geometry = getAllLineGeometry()
  assert.equal(geometry.length, LINES.length)
  for (const g of geometry) {
    assert.ok(g.lengthKm > 0, `${g.lineId} has zero length`)
    assert.ok(g.points <= g.rawPoints, `${g.lineId} gained points during simplification`)
  }
})
