import Link from 'next/link'
import CiteMark from './CiteMark'
import LineBadge from './LineBadge'
import RichText from './RichText'
import { getInterchangeLine } from '@/lib/lines'
import { getLinePageHref } from '@/lib/content'
import { getNearStationData } from '@/lib/near-station'
import type { NumberedSource } from '@/lib/sources'
import type { Station } from '@/lib/stations'

export default function NearStation({
  station,
  references,
}: {
  station: Station
  references: NumberedSource[]
}) {
  const near = getNearStationData(station)
  const interchangeLines = station.interchange
    .map((code) => ({ code, line: getInterchangeLine(code, station.operator) }))
    .filter((entry): entry is { code: string; line: NonNullable<ReturnType<typeof getInterchangeLine>> } => Boolean(entry.line))
  const interchangeSource = station.research?.interchange?.source ?? station.sources[0]?.id ?? ''
  const exitSource = station.research?.exitSource ?? station.research?.mapSource ?? ''

  return (
    <section className="near-station wide" aria-labelledby="near-this-station">
      <h2 className="section-heading" id="near-this-station">Near this station</h2>
      <p className="section-desc">
        Nearby connections are committed build-time joins. Bus links use curated exact-stop
        matches; YouBike links use the nearest-coordinate match within 200 metres, so a dock
        is nearby rather than an assertion that it sits inside the station.
      </p>

      <div className="near-station-grid">
        <section className="near-station-card" aria-labelledby="near-bus">
          <h3 id="near-bus">Bus routes</h3>
          {near.busRoutes.length > 0 ? (
            <ul className="near-station-list">
              {near.busRoutes.map(({ route, href }) => (
                <li key={route.id}>
                  {href ? <Link href={href}><RichText>{route.names.en || route.names.zh_tw}</RichText></Link> : <RichText>{route.names.en || route.names.zh_tw}</RichText>}
                  <span className="near-station-secondary">
                    <RichText>{[route.names.zh_tw, route.service?.providerName].filter(Boolean).join(' · ')}</RichText>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="absent">No curated exact-stop bus join is recorded.</p>
          )}
          <p className="near-station-source">
            TDX bus snapshot retrieved {near.busRetrieved || 'TBC'} · <a href={near.busSourceUrl} rel="noreferrer">source</a>
          </p>
        </section>

        <section className="near-station-card" aria-labelledby="near-bike">
          <h3 id="near-bike">YouBike docks</h3>
          {near.bikeDocks.length > 0 ? (
            <ul className="near-station-list">
              {near.bikeDocks.map((dock) => (
                <li key={dock.id}>
                  <span>{dock.names.en}</span>
                  <span className="near-station-secondary" lang="zh-Hant">{dock.names.zh_tw}</span>
                  <span className="near-station-meta">
                    {dock.distanceM.toFixed(1)} m · capacity {dock.capacity ?? 'TBC'}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="absent">No joined dock is within the checked threshold.</p>
          )}
          <p className="near-station-source">
            Static station records retrieved {near.bikeRetrieved || 'TBC'} · <a href={near.bikeSourceUrl} rel="noreferrer">TDX source</a> · live availability is not stored here.
          </p>
        </section>

        <section className="near-station-card" aria-labelledby="near-interchange">
          <h3 id="near-interchange">Rail interchanges</h3>
          {interchangeLines.length > 0 ? (
            <ul className="near-station-list">
              {interchangeLines.map(({ code, line }) => (
                <li key={code}>
                  <LineBadge code={code} operator={line.operator} />{' '}
                  {getLinePageHref(line.code, line.operator) ? (
                    <Link href={getLinePageHref(line.code, line.operator)!}>{line.name} Line</Link>
                  ) : `${line.name} Line`}
                  <CiteMark id={interchangeSource} references={references} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="absent">No published interchange is recorded.</p>
          )}
        </section>

        <section className="near-station-card" aria-labelledby="near-exits">
          <h3 id="near-exits">Exits and access</h3>
          <p>
            {station.exits === null ? 'Street-exit count: TBC.' : `Street exits: ${station.exits}.`}
            {station.exits !== null && <CiteMark id={exitSource} references={references} />}
          </p>
          {station.research?.exitDetails ? (
            <p><RichText>{station.research.exitDetails}</RichText><CiteMark id={exitSource} references={references} /></p>
          ) : (
            <p className="absent">Detailed exit positions: TBC.</p>
          )}
        </section>
      </div>
    </section>
  )
}
