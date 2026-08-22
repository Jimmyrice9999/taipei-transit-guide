/**
 * The station registry against the source it is generated from.
 *
 * `lib/stations.generated.ts` is written by `npm run stations` and committed, so
 * it can drift from `data/tdx/` if someone edits it by hand or forgets to
 * regenerate after a refetch. These tests are what make the committed file
 * trustworthy without re-running the generator.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'

import { STATIONS, getStation, getLineStations, resolveSpine } from '../lib/stations.ts'
import { LINES, TDX_LINES, getInterchangeLine, getLine } from '../lib/lines.ts'
import { getBranchRoutes, getRoutes, getTrunkRoute } from '../lib/routes.ts'
import { getInterchanges } from '../lib/network.ts'
import { validateSource } from '../lib/sources.ts'

/*
 * The same three-operator list that lib/ carried in three places until run 10
 * — see lib/tdx.ts. This copy was the fourth, and it failed the same way: the
 * light rail stations were in the registry, absent from this test's idea of
 * "the TDX source", and reported as records that do not exist.
 *
 * Station records are not merged in lib/tdx.ts because nothing in the app
 * reads raw station rows — the registry is generated from them ahead of time —
 * so the list is spelled out here, once, next to the assertion that needs it.
 */
import trtcStations from '../data/tdx/TRTC/station.json' with { type: 'json' }
import ntmcStations from '../data/tdx/NTMC/station.json' with { type: 'json' }
import tymcStations from '../data/tdx/TYMC/station.json' with { type: 'json' }
import ntdlrtStations from '../data/tdx/NTDLRT/station.json' with { type: 'json' }
import ntalrtStations from '../data/tdx/NTALRT/station.json' with { type: 'json' }
import tmrtStations from '../data/tdx/TMRT/station.json' with { type: 'json' }

type TdxStation = {
  operator: string
  StationID: string
  StationName?: { En?: string; Zh_tw?: string }
  StationPosition?: { PositionLat?: number; PositionLon?: number }
}

const withOperator = (operator: string, records: unknown): TdxStation[] =>
  (records as TdxStation[]).map((record) => ({ ...record, operator }))

const sourceStations = [
  ...withOperator('TRTC', trtcStations),
  ...withOperator('NTMC', ntmcStations),
  ...withOperator('TYMC', tymcStations),
  ...withOperator('NTDLRT', ntdlrtStations),
  ...withOperator('NTALRT', ntalrtStations),
  ...withOperator('TMRT', tmrtStations),
]

const sourceByKey = new Map(
  sourceStations.map((s) => [`${s.operator}:${s.StationID.toUpperCase()}`, s]),
)

/* ------------------------------------------------------------------ */

test('every registry station exists in the TDX source', () => {
  const missing = STATIONS.filter(
    (s) => s.recordSource === 'tdx' && !sourceByKey.has(`${s.operator}:${s.code.toUpperCase()}`),
  )
  assert.deepEqual(
    missing.map((s) => s.code),
    [],
    'stations in lib/stations.generated.ts with no matching TDX record — regenerate with `npm run stations`',
  )
})

test('the primary-sourced Sanying registry is complete and explicit about TDX gaps', () => {
  const sanying = getLineStations('LB')
  assert.deepEqual(
    sanying.map((station) => station.code),
    Array.from({ length: 12 }, (_, index) => `LB${String(index + 1).padStart(2, '0')}`),
  )

  for (const station of sanying) {
    assert.equal(station.recordSource, 'primary-research')
    assert.equal(
      sourceByKey.has(`${station.operator}:${station.code.toUpperCase()}`),
      false,
      `${station.code} unexpectedly exists in TDX`,
    )
    assert.notEqual(station.lat, null, `${station.code} has no primary-sourced coordinate`)
    assert.notEqual(station.lon, null, `${station.code} has no primary-sourced coordinate`)
    assert.ok(station.address, `${station.code} has no primary-sourced address`)
    assert.ok(station.exits !== null, `${station.code} has no primary-sourced exit count`)
    assert.ok(station.research, `${station.code} has no station-page research record`)
    assert.equal(station.research!.coordinateSource, 'ntpc-sanying-landmark-coordinates')
    assert.ok(station.research!.sources.every((source) => source.kind === 'primary'))
    assert.deepEqual(
      station.research!.sources.flatMap((source) => validateSource(source)),
      [],
      `${station.code} has an invalid page source`,
    )
  }
})

test('names match the TDX source exactly', () => {
  const wrong: string[] = []
  for (const station of STATIONS) {
    const source = sourceByKey.get(`${station.operator}:${station.code.toUpperCase()}`)
    if (!source) continue
    if (source.StationName?.En && source.StationName.En !== station.name) {
      wrong.push(`${station.code}: "${station.name}" vs source "${source.StationName.En}"`)
    }
  }
  assert.deepEqual(wrong, [])
})

test('coordinates match the TDX source', () => {
  const wrong: string[] = []
  for (const station of STATIONS) {
    const source = sourceByKey.get(`${station.operator}:${station.code.toUpperCase()}`)
    const lat = source?.StationPosition?.PositionLat
    const lon = source?.StationPosition?.PositionLon
    if (typeof lat === 'number' && Math.abs((station.lat ?? 0) - lat) > 1e-6) {
      wrong.push(`${station.code} lat ${station.lat} vs ${lat}`)
    }
    if (typeof lon === 'number' && Math.abs((station.lon ?? 0) - lon) > 1e-6) {
      wrong.push(`${station.code} lon ${station.lon} vs ${lon}`)
    }
  }
  assert.deepEqual(wrong, [])
})

test('no duplicate station codes, case-insensitively', () => {
  // Case-insensitive because A14a and a hypothetical A14A would collide in
  // `getStation`, which uppercases. A duplicate that only differs in case would
  // make one of the two unreachable rather than throwing.
  const seen = new Map<string, string>()
  const clashes: string[] = []
  for (const station of STATIONS) {
    const key = `${station.operator}:${station.code.toUpperCase()}`
    const previous = seen.get(key)
    if (previous) clashes.push(`${previous} / ${station.code}`)
    else seen.set(key, station.code)
  }
  assert.deepEqual(clashes, [])
})

test('sequences are contiguous and 1-based within each line', () => {
  for (const line of LINES) {
    const stations = getLineStations(line.code, line.operator)
    if (stations.length === 0) continue
    const sequences = stations.map((s) => s.sequence)
    assert.deepEqual(
      sequences,
      Array.from({ length: stations.length }, (_, i) => i + 1),
      `${line.code} sequences are not 1..n without gaps or repeats`,
    )
  }
})

test('every station resolves through getStation, including branch codes', () => {
  // This is the A14a regression. The registry held it; the lookup could not
  // find it, because the map was keyed on the raw code and the lookup
  // uppercased. It rendered as "not a real station" on /data/stations.
  const unreachable = STATIONS.filter((s) => getStation(s.code, s.operator)?.code !== s.code)
  assert.deepEqual(unreachable.map((s) => s.code), [])
})

test('getStation is case-insensitive', () => {
  for (const code of ['A14a', 'a14A', 'br01', 'BR01', 'r22a', 'G03a']) {
    assert.ok(getStation(code), `getStation(${JSON.stringify(code)}) found nothing`)
  }
})

test('every station belongs to a line the site displays', () => {
  const displayed = new Set(LINES.map((l) => l.code))
  const orphans = STATIONS.filter((s) => !displayed.has(s.line))
  assert.deepEqual(orphans.map((s) => `${s.code} (line ${s.line})`), [])
})

test('every interchange is reciprocal', () => {
  /*
   * If BR10 lists BL as an interchange, some BL station must list BR back.
   * A one-way interchange means the transfer graph was built from a partial
   * read of the source, and it would show as a badge on one page and not the
   * other.
   */
  const linesAt = new Map<string, Set<string>>()
  for (const station of STATIONS) {
    for (const other of station.interchange) {
      if (!linesAt.has(station.line)) linesAt.set(station.line, new Set())
      linesAt.get(station.line)!.add(other)
    }
  }

  const oneWay: string[] = []
  for (const [line, others] of linesAt) {
    for (const other of others) {
      if (!linesAt.get(other)?.has(line)) oneWay.push(`${line} → ${other} is not returned`)
    }
  }
  assert.deepEqual(oneWay, [])
})

test('interchange groups contain stations on distinct lines', () => {
  for (const group of getInterchanges()) {
    const lines = group.codes.map((c) => getStation(c)?.line)
    assert.equal(
      new Set(lines).size,
      lines.length,
      `interchange ${group.name} lists two stations on the same line: ${group.codes.join(', ')}`,
    )
  }
})

test('every interchange code resolves to a real station', () => {
  const bad: string[] = []
  for (const group of getInterchanges()) {
    for (const code of group.codes) if (!getStation(code)) bad.push(code)
  }
  assert.deepEqual(bad, [])
})

test('every line code referenced as an interchange is a real line', () => {
  const bad = new Set<string>()
  for (const station of STATIONS) {
    for (const other of station.interchange) {
      if (!getInterchangeLine(other, station.operator)) bad.add(other)
    }
  }
  assert.deepEqual([...bad], [])
})

/* ---- routes ------------------------------------------------------- */

test('every line has a trunk route whose endpoints are real stations', () => {
  // TDX_LINES throughout this group: a line the platform does not carry has no
  // route records to have endpoints, and that absence is the documented state
  // rather than a fault. See OFF_PLATFORM in lib/lines.ts.
  for (const line of TDX_LINES) {
    const trunk = getTrunkRoute(line.code, line.operator)
    assert.ok(trunk, `${line.code} has no route record`)
    assert.ok(getStation(trunk!.from, line.operator), `${line.code} trunk starts at unknown ${trunk!.from}`)
    assert.ok(getStation(trunk!.to, line.operator), `${line.code} trunk ends at unknown ${trunk!.to}`)
  }
})

test('the trunk route is the longest route on its line', () => {
  for (const line of TDX_LINES) {
    const trunk = getTrunkRoute(line.code, line.operator)!
    for (const route of getRoutes(line.code, line.operator)) {
      assert.ok(
        route.stations.length <= trunk.stations.length,
        `${route.routeId} calls at more stations than the trunk ${trunk.routeId}`,
      )
    }
  }
})

test('official route lengths are published and plausible', () => {
  // A metro route between 1 and 60 km. This is a sanity bound, not a check of
  // the value: it catches a unit change (metres for km) or a zeroed field,
  // which is exactly how the RouteLength field misled the site in the first
  // place.
  for (const line of TDX_LINES) {
    const trunk = getTrunkRoute(line.code, line.operator)!
    assert.ok(
      trunk.lengthKm !== null,
      `${line.code} trunk ${trunk.routeId} has no CumulativeDistance — the official route length is missing`,
    )
    assert.ok(
      trunk.lengthKm! > 1 && trunk.lengthKm! < 60,
      `${line.code} trunk length ${trunk.lengthKm} km is out of plausible range`,
    )
  }
})

test('the Wenhu Line route length is the official 25.17 km', () => {
  // Pinned deliberately. This is the number the site got wrong by 1.25 km, and
  // a silent change to it should fail the build rather than ship.
  assert.equal(getTrunkRoute('BR')!.lengthKm, 25.17)
})

test('branch detection excludes short workings', () => {
  // G-2 (Taipower Building – Songshan) runs over trunk track and is not a
  // branch; G-3 (Qizhang – Xiaobitan) is. Counting routes would call both.
  const branches = getBranchRoutes('G', 'TRTC').map((r) => r.routeId)
  assert.deepEqual(branches, ['G-3'])

  assert.deepEqual(getBranchRoutes('Y').map((r) => r.routeId), [], 'the Circular Line has no branch')
  assert.deepEqual(getBranchRoutes('BR').map((r) => r.routeId), [], 'the Wenhu Line has no branch')
})

test('trunk termini are not branch stations', () => {
  // The regression that put G03A Xiaobitan on the network page as a terminus of
  // the Songshan–Xindian Line.
  for (const line of TDX_LINES) {
    const trunk = getTrunkRoute(line.code, line.operator)!
    const branchOnly = new Set(
      getBranchRoutes(line.code, line.operator)
        .flatMap((r) => r.stations)
        .filter((s) => !trunk.stations.includes(s)),
    )
    assert.ok(!branchOnly.has(trunk.from), `${line.code} starts at branch station ${trunk.from}`)
    assert.ok(!branchOnly.has(trunk.to), `${line.code} ends at branch station ${trunk.to}`)
  }
})

test('known termini are what the operator publishes', () => {
  const expected: Record<string, [string, string]> = {
    BR: ['BR01', 'BR24'],
    BL: ['BL01', 'BL23'],
    G: ['G01', 'G19'],
    R: ['R02', 'R28'],
    O: ['O01', 'O21'],
    Y: ['Y07', 'Y20'],
    A: ['A1', 'A22'],
  }
  for (const [code, [from, to]] of Object.entries(expected)) {
    const trunk = getTrunkRoute(code, code === 'G' ? 'TRTC' : undefined)!
    assert.deepEqual([trunk.from, trunk.to], [from, to], `${code} termini`)
  }
})

/* ---- spine ranges ------------------------------------------------- */

test('resolveSpine handles points, ranges and the empty case', () => {
  assert.deepEqual([...resolveSpine('BR01', 'BR')], ['BR01'])
  assert.deepEqual([...resolveSpine('BR01, BR19', 'BR')].sort(), ['BR01', 'BR19'])
  assert.equal(resolveSpine('BR01-BR12', 'BR').size, 12)
  assert.equal(resolveSpine('', 'BR').size, getLineStations('BR').length)
  // Reversed ranges are the same range.
  assert.equal(resolveSpine('BR12-BR01', 'BR').size, 12)
})

test('resolveSpine returns the registry spelling, not the caller spelling', () => {
  // Marking is matched against `station.code` in the Spine component, so an
  // uppercased "A14A" would never light A14a's tick.
  assert.deepEqual([...resolveSpine('a14a', 'A')], ['A14a'])
})

test('resolveSpine ignores codes that are not stations', () => {
  assert.equal(resolveSpine('BR99', 'BR').size, 0)
})
