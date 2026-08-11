/**
 * Turns MOTC route geometry into drawable coordinates.
 *
 * TDX publishes each metro line's alignment as a WKT MULTILINESTRING in
 * data/tdx/shape.json. This is the real surveyed shape of the line, not a
 * schematic — which is the whole point of drawing it.
 *
 * Two things about the source worth knowing:
 *
 *   · `EncodedPolyline` is empty on every line, so WKT is the only usable form.
 *   · The segments of a MULTILINESTRING are NOT in route order. Wenhu's six
 *     segments chain #0 → #5 → #1 → #2 → #3 → #4, each one's end matching the
 *     next one's start exactly. Drawing them in file order produces a line that
 *     jumps across the city. They have to be chained.
 *
 * All of this runs at build time. Nothing here touches the network.
 */

import { TDX_SHAPES } from './tdx.ts'
// Stations, so simplification can be checked against what it does to them —
// see the note on getLineGeometry. lib/stations.ts does not import this file,
// so there is no cycle.
import { STATIONS } from './stations.ts'

export type Point = [lon: number, lat: number]

type ShapeRecord = { LineID: string; Geometry: string }

/** Every operator's geometry, merged. Line codes are unique across operators. */
const shapes: ShapeRecord[] = [
  ...TDX_SHAPES<ShapeRecord>(),
]

/* ------------------------------------------------------------------ */
/* WKT                                                                 */
/* ------------------------------------------------------------------ */

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

/** Metres between two lon/lat points, near enough at city scale. */
export function metres(a: Point, b: Point): number {
  const mPerDegLat = 110574
  const mPerDegLon = 111320 * Math.cos((25 * Math.PI) / 180)
  return Math.hypot((a[0] - b[0]) * mPerDegLon, (a[1] - b[1]) * mPerDegLat)
}

/**
 * Joins segments end-to-end into continuous paths.
 *
 * Grows the current chain from BOTH ends, not just the tail. Growing forward
 * only looks like it works — it did for Wenhu — but that is luck: it depends on
 * the file happening to start with an end segment. Where the first segment sits
 * mid-line, every segment belonging before it is stranded and gets reported as a
 * separate run, which showed up as impossible 11 km "gaps" inside the Bannan
 * Line.
 *
 * When the nearest remaining segment is further than `toleranceM` from either
 * end, the line genuinely is discontinuous — a branch, or a separately published
 * alignment. Those are returned as separate paths rather than bridged with a
 * straight line that does not exist on the ground.
 */
export function chainSegments(segments: Point[][], toleranceM = 60): Point[][] {
  if (segments.length <= 1) return segments

  const remaining = segments.map((s) => [...s])
  const chains: Point[][] = []
  let current = remaining.shift()!

  while (remaining.length > 0) {
    const head = current[0]
    const tail = current[current.length - 1]

    let best = { index: -1, distance: Infinity, atHead: false, flip: false }

    remaining.forEach((seg, index) => {
      const start = seg[0]
      const end = seg[seg.length - 1]

      const options = [
        { d: metres(tail, start), atHead: false, flip: false }, // tail → seg
        { d: metres(tail, end), atHead: false, flip: true }, // tail → reversed seg
        { d: metres(head, end), atHead: true, flip: false }, // seg → head
        { d: metres(head, start), atHead: true, flip: true }, // reversed seg → head
      ]

      for (const option of options) {
        if (option.d < best.distance) {
          best = { index, distance: option.d, atHead: option.atHead, flip: option.flip }
        }
      }
    })

    if (best.index < 0 || best.distance > toleranceM) {
      // A real gap. Bank this chain and start another rather than inventing track.
      chains.push(current)
      current = remaining.shift()!
      continue
    }

    const next = remaining.splice(best.index, 1)[0]
    if (best.flip) next.reverse()

    // Drop the duplicated joining point.
    if (best.atHead) current.unshift(...next.slice(0, -1))
    else current.push(...next.slice(1))
  }

  chains.push(current)
  return chains
}

/**
 * Ramer–Douglas–Peucker. Drops points that sit within `toleranceM` of the line
 * between their neighbours, so a 678-point alignment becomes a couple of hundred
 * without visibly changing shape. Page weight matters more than sub-metre
 * fidelity on a diagram this size.
 */
export function simplify(points: Point[], toleranceM: number): Point[] {
  if (points.length < 3) return points

  const perpendicular = (p: Point, a: Point, b: Point) => {
    const ab = metres(a, b)
    if (ab === 0) return metres(p, a)
    // Triangle area over base length gives the height.
    const mPerDegLat = 110574
    const mPerDegLon = 111320 * Math.cos((25 * Math.PI) / 180)
    const ax = a[0] * mPerDegLon
    const ay = a[1] * mPerDegLat
    const bx = b[0] * mPerDegLon
    const by = b[1] * mPerDegLat
    const px = p[0] * mPerDegLon
    const py = p[1] * mPerDegLat
    return Math.abs((bx - ax) * (ay - py) - (ax - px) * (by - ay)) / ab
  }

  const keep = new Array(points.length).fill(false)
  keep[0] = true
  keep[points.length - 1] = true

  const stack: [number, number][] = [[0, points.length - 1]]
  while (stack.length) {
    const [start, end] = stack.pop()!
    let worst = 0
    let index = -1
    for (let i = start + 1; i < end; i++) {
      const d = perpendicular(points[i], points[start], points[end])
      if (d > worst) {
        worst = d
        index = i
      }
    }
    if (index >= 0 && worst > toleranceM) {
      keep[index] = true
      stack.push([start, index], [index, end])
    }
  }

  return points.filter((_, i) => keep[i])
}

/**
 * Shortest distance from a point to a polyline, in metres.
 *
 * Measured to the nearest *segment*, not the nearest vertex. Measuring to
 * vertices is a trap after simplification: a line can pass within 20 m of a
 * station while its nearest retained vertex is 1.5 km away along a straight run.
 */
export function distanceToPaths(point: Point, paths: Point[][]): number {
  const mPerDegLat = 110574
  const mPerDegLon = 111320 * Math.cos((25 * Math.PI) / 180)
  const to = ([lon, lat]: Point) => [lon * mPerDegLon, lat * mPerDegLat] as const

  const [px, py] = to(point)
  let best = Infinity

  for (const path of paths) {
    for (let i = 1; i < path.length; i++) {
      const [ax, ay] = to(path[i - 1])
      const [bx, by] = to(path[i])
      const dx = bx - ax
      const dy = by - ay
      const lengthSquared = dx * dx + dy * dy

      // Project the point onto the segment, clamped to its ends.
      const t =
        lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared))

      best = Math.min(best, Math.hypot(px - (ax + t * dx), py - (ay + t * dy)))
    }
  }

  return best
}

/* ------------------------------------------------------------------ */
/* Public                                                              */
/* ------------------------------------------------------------------ */

export type LineGeometry = {
  lineId: string
  /** One entry per continuous run. More than one means a genuine gap. */
  paths: Point[][]
  /**
   * The same runs before simplification. Measure against these, draw the other
   * ones — folding a 12 m drawing tolerance into a published length would be
   * sloppy in a way nobody would ever notice.
   */
  chained: Point[][]
  /** Points before and after simplification, for the build report. */
  rawPoints: number
  points: number
  /** Length along the whole drawn path, in km. Includes track past the termini. */
  lengthKm: number
}

/**
 * ── Why the tolerance is chosen per line, not fixed at 12 m ──────────────────
 *
 * Douglas–Peucker guarantees that no *vertex of the original polyline* ends up
 * more than `epsilon` from the simplified line. It guarantees nothing about a
 * point that is not on the line — and a station is exactly that: it sits a few
 * metres to one side of the track it belongs to.
 *
 * When simplification cuts a sharp corner, the perpendicular distance from a
 * nearby station can change by far more than epsilon. Run 10 measured it on
 * the newly-added Ankeng Light Rail, whose alignment turns hard beside K06:
 *
 *     tolerance 12 m  →  K06 displaced 83.7 m   (34 points)
 *     tolerance  6 m  →  worst station  3.0 m   (48 points)
 *     tolerance  3 m  →  worst station  1.7 m   (68 points)
 *
 * A cliff, not a gradient. The eight older lines are nowhere near it, which is
 * why a fixed 12 m survived four runs unchallenged.
 *
 * So: ask for 12 m, then check what it actually did to the stations, and step
 * down until the drawing is faithful. The invariant the test asserts is now
 * produced by the code rather than hoped for, and a future line with a tighter
 * curve cannot reintroduce the fault — it will simply be drawn with a few more
 * points. Ankeng costs 14 extra vertices; nothing else changes at all.
 */
const DRAW_TOLERANCE_M = 12
const TOLERANCE_STEPS = [12, 6, 3, 1]

/** Geometry for one line, chained and simplified. Null when not published. */
export function getLineGeometry(lineId: string, toleranceM?: number): LineGeometry | null {
  const record = shapes.find((s) => s.LineID === lineId)
  if (!record?.Geometry) return null

  const segments = parseWkt(record.Geometry)
  if (segments.length === 0) return null

  const rawPoints = segments.reduce((n, s) => n + s.length, 0)
  const chained = chainSegments(segments)

  /*
   * An explicit tolerance is honoured as given — the geometry audit passes one
   * deliberately to report what simplification costs at a chosen value.
   */
  const stations = STATIONS.filter((s) => s.line === lineId && s.lat !== null && s.lon !== null)
  const worstShift = (paths: Point[][]) =>
    stations.reduce((worst, station) => {
      const point: Point = [station.lon!, station.lat!]
      const shift = Math.abs(distanceToPaths(point, paths) - distanceToPaths(point, chained))
      return Math.max(worst, shift)
    }, 0)

  let paths: Point[][]
  if (toleranceM !== undefined) {
    paths = chained.map((path) => simplify(path, toleranceM))
  } else {
    paths = chained.map((path) => simplify(path, TOLERANCE_STEPS[0]))
    for (const step of TOLERANCE_STEPS.slice(1)) {
      if (stations.length === 0 || worstShift(paths) <= DRAW_TOLERANCE_M) break
      paths = chained.map((path) => simplify(path, step))
    }
  }

  let lengthKm = 0
  for (const path of chained) {
    for (let i = 1; i < path.length; i++) lengthKm += metres(path[i - 1], path[i])
  }

  return {
    lineId,
    paths,
    chained,
    rawPoints,
    points: paths.reduce((n, p) => n + p.length, 0),
    lengthKm: lengthKm / 1000,
  }
}

/** Every line with published geometry. */
export function getAllLineGeometry(toleranceM = 12): LineGeometry[] {
  return shapes
    .map((s) => getLineGeometry(s.LineID, toleranceM))
    .filter((g): g is LineGeometry => g !== null)
}

/* ------------------------------------------------------------------ */
/* Measuring a line between its termini                                */
/* ------------------------------------------------------------------ */

/**
 * Where a point lands along a path: which run, how far along it, how far off it.
 *
 * "Chainage" is the surveyor's term for distance measured along an alignment
 * from a datum, and it is the right primitive here — it lets us ask where a
 * station sits on the line rather than merely how near it is.
 */
export type Chainage = { run: number; alongM: number; offsetM: number }

function chainageAlong(point: Point, paths: Point[][]): Chainage | null {
  const mPerDegLat = 110574
  const mPerDegLon = 111320 * Math.cos((25 * Math.PI) / 180)
  const to = ([lon, lat]: Point) => [lon * mPerDegLon, lat * mPerDegLat] as const
  const [px, py] = to(point)

  let best: Chainage | null = null

  paths.forEach((path, run) => {
    let travelled = 0
    for (let i = 1; i < path.length; i++) {
      const [ax, ay] = to(path[i - 1])
      const [bx, by] = to(path[i])
      const dx = bx - ax
      const dy = by - ay
      const lengthSquared = dx * dx + dy * dy
      const segment = Math.sqrt(lengthSquared)
      const t =
        lengthSquared === 0
          ? 0
          : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared))
      const offsetM = Math.hypot(px - (ax + t * dx), py - (ay + t * dy))
      if (!best || offsetM < best.offsetM) {
        best = { run, alongM: travelled + t * segment, offsetM }
      }
      travelled += segment
    }
  })

  return best
}

export type Measurement = {
  /** Length of everything published, including track past the termini. */
  publishedKm: number
  /** Length between the outermost stations on each run, summed. */
  revenueKm: number
  /** How much published alignment lies outside the station extent. */
  overrunKm: number
}

/**
 * Two lengths for one line, because they answer different questions.
 *
 * `publishedKm` is the whole drawn alignment. It is NOT the length of the line
 * as anyone quotes it, because MOTC's geometry runs past both termini into
 * depot leads and tail tracks — 1.38 km of it on Wenhu alone. Reporting that
 * number as the line's length overstates it, and the error is not a rounding
 * difference: it is most of the gap between the site's old figure of 26.42 km
 * and the 25.1 km that circulates in published sources.
 *
 * `revenueKm` trims each run to the extent of the stations that sit on it, so
 * it measures terminus to terminus along the surveyed curve. On Wenhu that
 * gives 25.04 km, which is the published 25.1 to within 60 m — the geometry and
 * the literature agree once the overrun is taken out.
 */
export function measureLine(paths: Point[][], stations: Point[]): Measurement | null {
  if (paths.length === 0) return null

  let publishedM = 0
  for (const path of paths) {
    for (let i = 1; i < path.length; i++) publishedM += metres(path[i - 1], path[i])
  }

  // The extent of the stations that project onto each run.
  const extents = new Map<number, { lo: number; hi: number }>()
  for (const station of stations) {
    const c = chainageAlong(station, paths)
    if (!c) continue
    const current = extents.get(c.run)
    if (!current) extents.set(c.run, { lo: c.alongM, hi: c.alongM })
    else {
      current.lo = Math.min(current.lo, c.alongM)
      current.hi = Math.max(current.hi, c.alongM)
    }
  }

  let revenueM = 0
  for (const { lo, hi } of extents.values()) revenueM += hi - lo

  // With no stations to trim against there is nothing to measure honestly, so
  // fall back rather than reporting zero.
  if (extents.size === 0) {
    return { publishedKm: publishedM / 1000, revenueKm: publishedM / 1000, overrunKm: 0 }
  }

  return {
    publishedKm: publishedM / 1000,
    revenueKm: revenueM / 1000,
    overrunKm: (publishedM - revenueM) / 1000,
  }
}

/* ------------------------------------------------------------------ */
/* Projection                                                          */
/* ------------------------------------------------------------------ */

export type Projection = {
  project: (p: Point) => [x: number, y: number]
  width: number
  height: number
}

/**
 * Equirectangular with a cos(latitude) correction on longitude.
 *
 * At the scale of one city this is visually indistinguishable from Web Mercator
 * and far simpler. North is up, east is right, and distances stay proportionate.
 */
export function makeProjection(
  points: Point[],
  { width, padding = 0 }: { width: number; padding?: number },
): Projection {
  const lons = points.map((p) => p[0])
  const lats = points.map((p) => p[1])

  const minLon = Math.min(...lons)
  const maxLon = Math.max(...lons)
  const minLat = Math.min(...lats)
  const maxLat = Math.max(...lats)

  const cos = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180))

  /*
   * Guard the degenerate spans.
   *
   * With every point at the same longitude, spanX is 0 and `inner / spanX` is
   * Infinity — every projected coordinate becomes NaN, and `height` with it.
   * That renders `<svg viewBox="0 0 640 NaN">` with NaN on every dot: an
   * invisible, silently broken map, with no error anywhere to say so.
   *
   * Reachable from a line with one station, or one whose geometry is missing
   * so only station coordinates remain. Falling back to a small nonzero span
   * degenerates gracefully — the single point lands in the middle of a
   * sensibly-sized frame instead of nowhere in a frame of NaN height.
   *
   * The fallback is ~1 km in degrees, which keeps the scale bar plausible
   * rather than claiming a map is millimetres across.
   */
  const MIN_SPAN_DEG = 0.01
  const spanX = Math.max((maxLon - minLon) * cos, MIN_SPAN_DEG * cos)
  const spanY = Math.max(maxLat - minLat, 0)

  const inner = Math.max(width - padding * 2, 1)
  const scale = inner / spanX
  const height = spanY * scale + padding * 2

  return {
    width,
    height,
    project: ([lon, lat]) => [
      padding + (lon - minLon) * cos * scale,
      // SVG y grows downward; latitude grows north, so flip.
      padding + (maxLat - lat) * scale,
    ],
  }
}
