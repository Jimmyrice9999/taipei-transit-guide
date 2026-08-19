/**
 * Curates confirmed bus-stop-to-MRT-station joins for the 132 routes in
 * colour-red, colour-green, colour-orange, colour-blue and trunk, and
 * (re)writes data/tdx/bus/rail-stop-joins.json.
 *
 * Run: node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON scripts/curate-bus-rail-joins.mts
 *
 * ─────────────────────────────────────────────────────────────────────────
 * WHY GEOMETRY, NOT NAME
 *
 * The raw TDX pull's `railJoins` (in data/tdx/bus/routes.json) match a stop to
 * a station by NORMALIZED NAME — a bus stop called 捷運景安站 is matched to
 * Jing'an station because the strings agree, not because anyone checked the
 * stop is actually there. Run 48 Part 2 (18 August 2026) found that name match
 * reaching every route page as a false "confirmed" MRT interchange and fixed
 * it to render zero joins for any route without an individually curated entry.
 * "A bus stop named after a station is not evidence it serves that station"
 * is the standing rule (AGENTS.md, this run's brief).
 *
 * This script never reads a stop's name. It computes the great-circle
 * distance — lib/geometry.ts's `metres`, the same helper the site's own
 * 200 m station-to-alignment offset tolerance uses — from each stop's own
 * committed TDX position to every MRT station's own committed TDX position,
 * and confirms a join only when that specific stop sits within 200 m of that
 * specific station, unambiguously (no second station on the same line also
 * within range).
 *
 * The 200 m threshold is not arbitrary: it is calibrated against the 20
 * colour-brown pilot's own 74 already-curated joins, which range 19–197 m
 * from their station (measured by this same function — see
 * probes/join-calibrate.mts) and are treated by the existing codebase and
 * this run's brief as the trusted baseline. 200 m also matches the distinct,
 * separately-established "no station sits more than 200 m from its line"
 * geometry tolerance elsewhere in this project (tests/geometry.test.mts).
 *
 * A stop within 500 m but outside 200 m, or ambiguous (two same-line
 * stations both within 200 m), is counted and reported as a rejected
 * candidate, never silently dropped.
 * ─────────────────────────────────────────────────────────────────────────
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { STATIONS } from '../lib/stations.ts'
import { BUS_ROUTES, BUS_STOPS, getBusStopSequences, type BusRouteGroup } from '../lib/bus/routes.ts'
import { metres, type Point } from '../lib/geometry.ts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_FILE = path.join(ROOT, 'data', 'tdx', 'bus', 'rail-stop-joins.json')

const CONFIRM_M = 200
const CANDIDATE_M = 500

const TARGET_GROUPS: BusRouteGroup[] = ['colour-red', 'colour-green', 'colour-orange', 'colour-blue', 'trunk']

const stopById = new Map(BUS_STOPS.map((s) => [s.id, s]))
const stationsWithPosition = STATIONS.filter((s) => s.lat != null && s.lon != null)

type Join = { stopUid: string; stationCode: string; lineCode: string; match: 'stop-id' }

/** Preserve every route (including brown's 20, and every other built/unbuilt
 * route) already in the file untouched; only (re)compute the five target
 * groups. Re-running this script is therefore idempotent for everyone else. */
const existing = JSON.parse(fs.readFileSync(OUT_FILE, 'utf8')) as Array<{ routeId: string; joins: Join[] }>
const untouchedRouteIds = new Set(
  BUS_ROUTES.filter((r) => !TARGET_GROUPS.includes(r.group)).map((r) => r.id),
)
const preserved = existing.filter((record) => untouchedRouteIds.has(record.routeId))

const report: Record<string, { confirmed: number; rejectedFar: number; rejectedAmbiguous: number; routes: number }> = {}
for (const group of TARGET_GROUPS) report[group] = { confirmed: 0, rejectedFar: 0, rejectedAmbiguous: 0, routes: 0 }

const output: Array<{ routeId: string; joins: Join[] }> = [...preserved]

for (const route of BUS_ROUTES) {
  if (!TARGET_GROUPS.includes(route.group)) continue
  report[route.group].routes++

  // Every stop the route actually calls at, across all its stop sequences
  // (both directions, every sub-route) — deduplicated by stop UID.
  const stopUids = new Set<string>()
  for (const sequence of getBusStopSequences(route)) {
    for (const s of sequence.stops) stopUids.add(s.stopUid)
  }

  const joins: Join[] = []
  for (const stopUid of stopUids) {
    const stop = stopById.get(stopUid)
    if (!stop?.position) continue
    const stopPoint: Point = [stop.position.lon, stop.position.lat]

    // Nearest station per line within the candidate radius.
    const byLine = new Map<string, { code: string; d: number }[]>()
    for (const station of stationsWithPosition) {
      const d = metres(stopPoint, [station.lon as number, station.lat as number])
      if (d > CANDIDATE_M) continue
      if (!byLine.has(station.line)) byLine.set(station.line, [])
      byLine.get(station.line)!.push({ code: station.code, d })
    }

    for (const [lineCode, candidates] of byLine) {
      candidates.sort((a, b) => a.d - b.d)
      const within = candidates.filter((c) => c.d <= CONFIRM_M)
      if (within.length === 0) {
        report[route.group].rejectedFar++
        continue
      }
      if (within.length > 1) {
        // Two distinct stations on the same line both within the confirm
        // radius: which one this stop actually serves is not decidable from
        // position alone. Reject rather than guess.
        report[route.group].rejectedAmbiguous++
        continue
      }
      joins.push({ stopUid, stationCode: within[0].code, lineCode, match: 'stop-id' })
      report[route.group].confirmed++
    }
  }

  joins.sort((a, b) => `${a.stationCode}:${a.stopUid}`.localeCompare(`${b.stationCode}:${b.stopUid}`))
  if (joins.length > 0) output.push({ routeId: route.id, joins })
}

output.sort((a, b) => a.routeId.localeCompare(b.routeId))
fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 2) + '\n')

console.log(`Confirm radius: ${CONFIRM_M} m. Candidate radius: ${CANDIDATE_M} m.\n`)
for (const group of TARGET_GROUPS) {
  const r = report[group]
  console.log(
    `${group.padEnd(14)} routes ${String(r.routes).padStart(3)}  confirmed ${String(r.confirmed).padStart(3)}  ` +
      `rejected(far) ${String(r.rejectedFar).padStart(4)}  rejected(ambiguous) ${r.rejectedAmbiguous}`,
  )
}
const totalConfirmed = Object.values(report).reduce((s, r) => s + r.confirmed, 0)
const totalRejected = Object.values(report).reduce((s, r) => s + r.rejectedFar + r.rejectedAmbiguous, 0)
console.log(`\nTotal confirmed joins: ${totalConfirmed}. Total rejected candidates: ${totalRejected}.`)
console.log(`Wrote ${output.length} route records to ${path.relative(ROOT, OUT_FILE)}`)
