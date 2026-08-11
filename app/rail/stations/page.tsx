/**
 * /rail/stations — the station index.
 *
 * Generated from the station registry, the same data that draws the maps, so
 * it can never disagree with them. Static wins over the [section]/[type]
 * dynamic route, so this renders /rail/stations/ even though no content
 * folder backs it.
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { NEUTRAL_LINE, getLine } from '@/lib/lines'
import { STATIONS, getStationHref } from '@/lib/stations'

export const metadata: Metadata = {
  title: 'Stations',
  description:
    'Every station with a page on this site, by line — names, codes and interchanges, generated from the same registry that draws the maps.',
  alternates: { canonical: '/rail/stations/' },
}

export default function StationsIndexPage() {
  // One group per line that actually has station pages.
  const byLine = new Map<string, typeof STATIONS>()
  for (const station of STATIONS) {
    if (!getStationHref(station.code)) continue
    const group = byLine.get(station.line) ?? []
    group.push(station)
    byLine.set(station.line, group)
  }

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Rail', path: '/rail/' },
            { name: 'Stations', path: '/rail/stations/' },
          ]),
        ]}
      />

      <Breadcrumbs trail={[{ label: 'Rail', href: '/rail/' }, { label: 'Stations' }]} />
      <BackLink href="/rail/" label="Rail" />
      <h1 className="page-title">Stations</h1>
      <p className="page-summary">
        Every station with a page so far. Lines whose stations are not listed here are not
        yet covered — the coverage grows line by line, not station by station.
      </p>

      <div className="page-body">
        {[...byLine.entries()].map(([code, stations]) => {
          const line = getLine(code)
          return (
            <section key={code}>
              <h2 className="section-heading">{line ? `${line.name} Line` : code}</h2>
              <ul className="station-index">
                {stations.map((station) => (
                  <li key={station.code}>
                    <Link className="station-index-link" href={getStationHref(station.code)!}>
                      <span
                        className="badge"
                        style={
                          {
                            '--badge-bg': line?.badgeBg,
                            '--badge-fg': line?.badgeFg,
                          } as React.CSSProperties
                        }
                      >
                        {station.code}
                      </span>{' '}
                      {station.name}
                      <span className="station-index-zh" lang="zh-Hant">
                        {station.nameZh}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </PageShell>
  )
}
