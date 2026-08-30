import type { Metadata } from 'next'
import Link from 'next/link'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import LineBadge from '@/components/LineBadge'
import PageShell from '@/components/PageShell'
import TableOfContents from '@/components/TableOfContents'
import { getLine, NEUTRAL_LINE } from '@/lib/lines'
import { getNetworkOpeningTimeline, getUndatedOpeningStations } from '@/lib/data-explorer'

export const metadata: Metadata = {
  alternates: { canonical: '/data/network-growth/' },
  title: 'Network growth timeline',
  description: 'A build-time national timeline of sourced line openings, extensions, station additions, closures and reopenings, with TBC gaps visible.',
}

function subjectLink(subject: { label: string; href: string | null }) {
  return subject.href ? <Link href={subject.href}>{subject.label}</Link> : <span>{subject.label}</span>
}

export default function NetworkGrowthPage() {
  const events = getNetworkOpeningTimeline()
  const undated = getUndatedOpeningStations()
  const firstYear = events[0]?.year || 'TBC'
  const lastYear = events.at(-1)?.year || 'TBC'
  const years = [...new Set(events.map((event) => event.year))]
  const byLine = new Map<string, typeof undated>()
  for (const subject of undated) {
    const key = `${subject.operator}:${subject.line || 'unassigned'}`
    byLine.set(key, [...(byLine.get(key) ?? []), subject])
  }

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Network growth' }]} />
      <BackLink href="/data/" label="Data" />
      <h1 className="page-title">Network growth timeline</h1>
      <p className="page-summary">
        {firstYear} to {lastYear}: {events.length} sourced dates covering {events.reduce((total, event) => total + event.subjects.length, 0)} openings, extensions, station additions, closures or reopenings, with {undated.length} station dates still marked TBC.
      </p>

      <div className="page-body">
        <TableOfContents items={[
          { id: 'method', label: 'How to read this', level: 2 },
          { id: 'timeline', label: 'Dated openings', level: 2 },
          { id: 'undated', label: 'Opening date TBC', level: 2 },
        ]} />

        <h2 className="section-heading" id="method">How to read this</h2>
        <p>
          This chronology is generated from explicit dated facts in the committed station,
          line and history records. It includes line openings, extensions, station additions,
          closures and reopenings across every rail system represented by those records. A
          project announcement, construction date or plausible line-wide date is never
          substituted for passenger operation.
        </p>
        <p>
          Every dated row links to the content record and to the fetched source that supports
          its date. Records without an explicit sourced opening date stay in the TBC table.
          The layout is a vertical list at every width: at 320 pixels it needs no horizontal
          scroll affordance and preserves the same reading order as the static HTML.
        </p>

        <h2 className="section-heading" id="timeline">Dated openings</h2>
        <ol className="timeline" aria-label="Station opening timeline">
          {events.map((event) => {
            const lines = [...new Map(event.subjects.map((subject) => {
              const line = getLine(subject.line, subject.operator)
              return [line?.key ?? `${subject.operator}:${subject.line}`, line] as const
            })).values()].filter((line): line is NonNullable<ReturnType<typeof getLine>> => Boolean(line))
            return (
              <li className="timeline-item" key={event.date}>
                <div className="timeline-when">{event.date}</div>
                <div className="timeline-what">
                  <div className="interchange-codes">
                    {lines.map((line) => <LineBadge key={line.key} code={line.code} operator={line.operator} />)}
                  </div>
                  <p>
                    {event.subjects.map((subject, index) => (
                      <span key={subject.id}>
                        {index > 0 && '; '}<strong>{subject.kind}:</strong> {subjectLink(subject)}
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
              {[...byLine.entries()].map(([key, subjects]) => {
                const line = getLine(subjects[0]?.line, subjects[0]?.operator)
                return subjects.map((subject, index) => (
                  <tr key={`${key}:${subject.id}`}>
                    {index === 0 && <th scope="rowgroup" rowSpan={subjects.length}>{line?.name ?? [subject.operator, subject.line].filter(Boolean).join(' ')}</th>}
                    <td>{subjectLink(subject)}</td>
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
