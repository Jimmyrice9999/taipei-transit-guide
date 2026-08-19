import Link from 'next/link'
import CiteMark from './CiteMark'
import FactsPanel from './FactsPanel'
import RouteMap, { type MapStation } from './RouteMap'
import RichText from './RichText'
import { getStation, getStationHref } from '@/lib/stations'
import { getBusOperator, getBusShapes, getBusStopSequences, type BusRoute, type BusRouteGroup } from '@/lib/bus/routes'
import { GROUP_LINE, GROUP_PATH_COLOUR } from '@/lib/bus/route-groups'
import type { Line } from '@/lib/lines'
import type { NumberedSource } from '@/lib/sources'
import type { Point } from '@/lib/geometry'

function parseLineString(geometry: string): Point[] {
  const inner = geometry.match(/^LINESTRING\s*\((.*)\)$/i)?.[1]
  if (!inner) return []
  return inner.split(',').flatMap((pair) => {
    const [lon, lat] = pair.trim().split(/\s+/).map(Number)
    return Number.isFinite(lon) && Number.isFinite(lat) ? [[lon, lat] as Point] : []
  })
}

function stopLabel(stop: { names: { zh_tw: string; en: string } }) {
  return stop.names.en || stop.names.zh_tw || 'Unnamed stop'
}

function stopJoinMap(route: BusRoute) {
  const map = new Map<string, BusRoute['railJoins']>()
  for (const join of route.railJoins) {
    const joins = map.get(join.stopUid) ?? []
    joins.push(join)
    map.set(join.stopUid, joins)
  }
  return map
}

function routeSequences(route: BusRoute) {
  const ordered = getBusStopSequences(route).sort((a, b) => {
    const direction = (a.direction ?? 99) - (b.direction ?? 99)
    return direction || a.id.localeCompare(b.id)
  })
  const seen = new Set<string>()
  return ordered.filter((sequence) => {
    const key = `${sequence.direction ?? 'unknown'}:${sequence.stops.map((stop) => stop.stopUid).join(',')}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function routeStopData(route: BusRoute) {
  const seen = new Set<string>()
  const termini = new Set<string>()
  const stops = routeSequences(route).flatMap((sequence) => {
    if (sequence.stops[0]) termini.add(sequence.stops[0].stopUid)
    if (sequence.stops.at(-1)) termini.add(sequence.stops.at(-1)!.stopUid)
    return sequence.stops.flatMap((stop) => {
      if (seen.has(stop.stopUid) || !stop.position) return []
      seen.add(stop.stopUid)
      return [stop]
    })
  })
  return { stops, termini }
}

function serviceClassLabel(group: BusRouteGroup) {
  if (group === 'special-shuttle') return 'Special shuttle / commuter service'
  if (group === 'minibus') return 'Minibus / community service'
  if (group === 'series-200s') return '200-series numbered service'
  if (group === 'series-600s') return '600-series numbered service'
  if (group === 'trunk') return 'Trunk service'
  if (group.startsWith('colour-')) return 'MRT feeder service'
  return 'Numbered bus service'
}

function stationJoinLabel(join: BusRoute['railJoins'][number]) {
  const station = getStation(join.stationCode)
  return station ? `${station.code} ${station.name}` : join.stationCode
}

function RouteFacts({ route, line, references, href }: { route: BusRoute; line: Line; references: NumberedSource[]; href: string }) {
  const sequences = routeSequences(route)
  const operators = route.operatorIds.map(getBusOperator).filter(Boolean)
  const termini = sequences
    .map((sequence) => {
      const first = sequence.stops[0]
      const last = sequence.stops[sequence.stops.length - 1]
      return first && last ? `${stopLabel(first)} – ${stopLabel(last)}` : ''
    })
    .filter(Boolean)

  const feederLine = GROUP_LINE[route.group]
  const variants = route.subRoutes
    .map((subRoute) => subRoute.names.zh_tw || subRoute.names.en)
    .filter(Boolean)
    .join(' · ')

  const facts = [
    { label: 'Route', value: `${route.names.en} / ${route.names.zh_tw}`, source: 'tdx-bus' },
    { label: 'Service class', value: serviceClassLabel(route.group), source: 'tdx-bus' },
    { label: 'Municipality', value: route.sourceCities.join(', '), source: 'tdx-bus' },
    { label: 'Current operator', value: operators.map((operator) => operator!.names.en || operator!.names.zh_tw).join(', ') || 'TBC', source: 'tdx-bus' },
    { label: 'Termini by direction', value: termini.join(' · ') || 'TBC', source: 'tdx-bus' },
    { label: 'Direction / variant', value: variants || 'TBC', source: 'tdx-bus' },
    { label: 'Stops', value: String(new Set(sequences.flatMap((sequence) => sequence.stops.map((stop) => stop.stopUid))).size), source: 'tdx-bus' },
    { label: 'Route length', value: 'TBC', source: 'tdx-bus' },
    { label: 'Service span', value: 'TBC', source: 'tdx-bus' },
    { label: 'Headway by day type', value: 'TBC', source: 'tdx-bus' },
    { label: 'Fare / transfer', value: 'TBC', source: 'tdx-bus' },
    { label: 'Confirmed MRT stop joins', value: String(route.railJoins.length), source: 'tdx-bus' },
    ...(feederLine
      ? [{ label: 'Feeder line', value: `${feederLine.name} (${feederLine.code})`, source: feederLine.sourceId }]
      : []),
  ]

  return <FactsPanel facts={facts} line={line} title={route.names.en} references={references} href={href} />
}

function OperatorRecords({ route, references }: { route: BusRoute; references: NumberedSource[] }) {
  const operators = route.operatorIds.map(getBusOperator).filter(Boolean)
  if (operators.length === 0) return null
  return (
    <p className="section-desc">
      Current operator records:{' '}
      {operators.map((operator, index) => (
        <span key={operator!.id}>
          {index > 0 && ', '}
          <Link href="/bus/operators/">
            {operator!.names.en || <span lang="zh-Hant">{operator!.names.zh_tw}</span>}
          </Link>
        </span>
      ))}
      <CiteMark id="tdx-bus" references={references} />
    </p>
  )
}

function BusRouteMap({ route, references }: { route: BusRoute; references: NumberedSource[] }) {
  const pathColour = GROUP_PATH_COLOUR[route.group] ?? '#5c5650'
  const shapes = getBusShapes(route)
  const paths = shapes.map((shape) => parseLineString(shape.geometry)).filter((path) => path.length > 1)
  const joinsByStop = stopJoinMap(route)
  const { stops, termini } = routeStopData(route)
  const stations: MapStation[] = stops.flatMap((stop) => {
    if (!stop.position) return []
    const join = joinsByStop.get(stop.stopUid)?.[0]
    return [{
      code: stop.stopUid,
      name: stopLabel(stop),
      nameZh: stop.names.zh_tw,
      lat: stop.position.lat,
      lon: stop.position.lon,
      colour: pathColour,
      isTerminus: termini.has(stop.stopUid),
      isInterchange: Boolean(join),
      href: join ? getStationHref(join.stationCode) ?? undefined : undefined,
    }]
  })

  if (paths.length === 0) return <p className="note">Route geometry: TBC.</p>

  return (
    <>
      <RouteMap
        lines={[{ code: route.names.en, name: route.names.zh_tw, colour: pathColour, paths }]}
        stations={stations}
        labels="key"
        caption="TDX route geometry. Stops are drawn from the normalized stop records; MRT links are shown only for the confirmed stop-ID joins."
      />
      <p className="data-note">Map data: TDX bus geometry and stop positions.<CiteMark id="tdx-bus" references={references} /></p>
    </>
  )
}

function StopJoin({ joins, references }: { joins: BusRoute['railJoins']; references: NumberedSource[] }) {
  if (joins.length === 0) return null
  return (
    <span className="bus-stop-join">
      {joins.map((join, index) => (
        <span key={`${join.stationCode}-${join.stopUid}`}>
          {index > 0 && ', '}
          {getStationHref(join.stationCode) ? (
            <Link href={getStationHref(join.stationCode)!}>{stationJoinLabel(join)}</Link>
          ) : (
            stationJoinLabel(join)
          )}
          <CiteMark id="tdx-bus" references={references} />
        </span>
      ))}
    </span>
  )
}

export function BusStopSequences({ route, references }: { route: BusRoute; references: NumberedSource[] }) {
  const joinsByStop = stopJoinMap(route)
  const sequences = routeSequences(route)

  return (
    <section className="bus-stops wide" aria-labelledby="stop-sequence">
      <h2 id="stop-sequence" className="section-heading">Stop sequence<CiteMark id="tdx-bus" references={references} /></h2>
      <p className="section-desc">StopUIDs and the raw TDX boarding flag are retained. A station link appears only where this exact stop ID has a confirmed MRT join.</p>
      {sequences.length === 0 ? <p className="note">Stop sequence: TBC.</p> : (
        sequences.map((sequence, sequenceIndex) => (
          <details key={sequence.id} open={sequenceIndex === 0} className="bus-sequence">
            <summary>{sequence.names.en || sequence.names.zh_tw || `Direction ${sequence.direction ?? 'TBC'}`}</summary>
            <div className="compare-scroll">
              <table>
                <thead><tr><th scope="col">#</th><th scope="col">Stop</th><th scope="col">StopUID</th><th scope="col">Boarding</th><th scope="col">MRT join</th></tr></thead>
                <tbody>
                  {sequence.stops.map((stop, index) => (
                    <tr key={`${sequence.id}-${stop.stopUid}-${index}`}>
                      <td>{stop.sequence ?? index + 1}</td>
                      <td><RichText>{stopLabel(stop)}</RichText>{stop.names.zh_tw && <span className="bus-stop-zh" lang="zh-Hant">{stop.names.zh_tw}</span>}</td>
                      <td className="mono">{stop.stopUid}</td>
                      <td>{stop.boarding ?? 'TBC'}</td>
                      <td><StopJoin joins={joinsByStop.get(stop.stopUid) ?? []} references={references} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        ))
      )}
    </section>
  )
}

export default function BusRouteData({ route, line, references, href }: { route: BusRoute; line: Line; references: NumberedSource[]; href: string }) {
  return (
    <>
      <RouteFacts route={route} line={line} references={references} href={href} />
      <OperatorRecords route={route} references={references} />
      <BusRouteMap route={route} references={references} />
      <BusStopSequences route={route} references={references} />
    </>
  )
}
