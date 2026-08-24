import type { Metadata } from 'next'
import Link from 'next/link'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import LineBadge from '@/components/LineBadge'
import PageShell from '@/components/PageShell'
import TableOfContents from '@/components/TableOfContents'
import { getLine, NEUTRAL_LINE } from '@/lib/lines'
import { getNetworkOpeningTimeline, getUndatedOpeningStations, NETWORK_TIMELINE_START } from '@/lib/data-explorer'
import { getStationHref } from '@/lib/stations'

export const metadata: Metadata = {
  alternates: { canonical: '/data/network-growth/' },
  title: 'Network growth timeline',
  description: 'A build-time timeline of Taipei-region station openings with the primary source recorded for every dated event and TBC gaps left visible.',
}

function stationLink(station: { code: string; name: string; operator: string }) {
  const href = getStationHref(station.code, station.operator)
  return href ? <Link href={href}>{station.code} {station.name}</Link> : <span>{station.code} {station.name}</span>
}

export default function NetworkGrowthPage() {
  const events = getNetworkOpeningTimeline()
  const undated = getUndatedOpeningStations()
  const years = [...new Set(events.map((event) => event.year))]
  const byLine = new Map<string, typeof undated>()
  for (const station of undated) {
    const key = `${station.operator}:${station.line}`
    byLine.set(key, [...(byLine.get(key) ?? []), station])
  }

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Network growth' }]} />
      <BackLink href="/data/" label="Data" />
      <h1 className="page-title">Network growth timeline</h1>
      <p className="page-summary">
        {NETWORK_TIMELINE_START} to now: {events.length} dated opening events covering {events.reduce((total, event) => total + event.stations.length, 0)} station records, with {undated.length} records still marked TBC.
      </p>

      <div className="page-body">
        <TableOfContents items={[
          { id: 'method', label: 'How to read this', level: 2 },
          { id: 'timeline', label: 'Dated openings', level: 2 },
          { id: 'undated', label: 'Opening date TBC', level: 2 },
        ]} />

        <h2 className="section-heading" id="method">How to read this</h2>
        <p>
          This is a station-opening chronology, not a reconstruction of every project
          announcement. A dated event appears only when the station registry carries an
          explicit opening date in its primary-source research record. Stations whose
          operator or government record has been checked for identity but does not carry a
          date remain in the TBC table; they are not assigned a line-opening date by
          inference. That distinction matters for extensions opened in phases and for
          stations whose civil completion preceded passenger service.
        </p>
        <p>
          The first dated record in the current corpus is in 1997, so the requested 1996
          start is retained as the timeline boundary rather than filled with an invented
          event. Each dated row links to the station pages and names the opening source
          read by the research record. A source can support several stations on one line;
          it is listed once per event, while the station links keep the sequence visible.
        </p>

        <h2 className="section-heading" id="timeline">Dated openings</h2>
        <ol className="timeline" aria-label="Station opening timeline">
          {events.map((event) => {
            const lines = [...new Map(event.stations.map((station) => {
              const line = getLine(station.line, station.operator)
              return [line?.key ?? `${station.operator}:${station.line}`, line] as const
            })).values()].filter((line): line is NonNullable<ReturnType<typeof getLine>> => Boolean(line))
            return (
              <li className="timeline-item" key={event.date}>
                <div className="timeline-when">{event.date}</div>
                <div className="timeline-what">
                  <div className="interchange-codes">
                    {lines.map((line) => <LineBadge key={line.key} code={line.code} operator={line.operator} />)}
                  </div>
                  <p>
                    {event.stations.map((station, index) => (
                      <span key={`${station.operator}:${station.code}`}>
                        {index > 0 && ', '}{stationLink(station)}
                      </span>
                    ))}
                  </p>
                  {event.sources.length > 0 && (
                    <p className="timeline-source">
                      Source: {event.sources.map((source, index) => (
                        <span key={source.id}>{index > 0 && '; '}<a href={source.url} rel="noreferrer">{source.title}</a></span>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
        <p className="page-updated">Dated years in this record: {years.join(', ')}.</p>

        <h2 className="section-heading" id="undated">Opening date TBC</h2>
        <p>
          These {undated.length} station records have no explicit opening date in the
          checked station research. They stay listed so the gap is auditable: the line and
          station identity are useful, but a plausible date would not be. The station page
          for each row carries its own source family and the same TBC boundary.
        </p>
        <div className="wide table-scroll" tabIndex={0}>
          <table className="station-table">
            <caption className="sr-only">Stations without a sourced opening date</caption>
            <thead><tr><th scope="col">Line</th><th scope="col">Station</th><th scope="col">Opening date</th></tr></thead>
            <tbody>
              {[...byLine.entries()].map(([key, stations]) => {
                const line = getLine(stations[0]?.line, stations[0]?.operator)
                return stations.map((station, index) => (
                  <tr key={`${key}:${station.code}`}>
                    {index === 0 && <th scope="rowgroup" rowSpan={stations.length}>{line?.name ?? station.line}</th>}
                    <td>{stationLink(station)}</td>
                    <td>TBC</td>
                  </tr>
                ))
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  )
}
