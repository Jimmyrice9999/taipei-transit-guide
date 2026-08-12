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
import { getLinePageHref } from '@/lib/content'
import BackLink from '@/components/BackLink'
import LineIcon from '@/components/LineIcon'
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
              {/* The heading names the line; it now links to it. This page
                  lists a line's stations, so the line itself is the obvious
                  thing to want next and it was not reachable from here. */}
              {/*
                The line's own icon beside its name — run 11. This page groups
                stations by line and said which line only in words; the icon
                and the badge now say it the way the network says it.
              */}
              <h2 className="section-heading station-index-head">
                {line && <LineIcon code={line.code} size={28} />}
                {line ? (
                  getLinePageHref(code) ? (
                    <Link href={getLinePageHref(code)!}>{`${line.name} Line`}</Link>
                  ) : (
                    `${line.name} Line`
                  )
                ) : (
                  code
                )}
              </h2>
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
                      {/*
                        ── Every line that serves the station ────────────────
                        Run 11. This index listed BR09, BR10, BR11 and BR24 with
                        a brown badge and nothing else, which says they are
                        ordinary stops on one line. They are the four places on
                        this line where you can change trains — the single most
                        useful thing an index of stations can tell you — and the
                        strip map on the line page has shown it since run 4
                        while the index did not.

                        Inert spans: the row is already a link to the station,
                        and an <a> inside an <a> is invalid. The badge letters
                        carry it, not the colour.
                      */}
                      {station.interchange.length > 0 && (
                        <span className="station-index-interchange">
                          <span className="sr-only">
                            {' '}
                            interchange with{' '}
                            {station.interchange
                              .map((other) => getLine(other)?.name)
                              .filter(Boolean)
                              .join(', ')}
                          </span>
                          {station.interchange.map((other) => {
                            const otherLine = getLine(other)
                            if (!otherLine) return null
                            return (
                              <span
                                key={other}
                                className="badge badge-mini"
                                aria-hidden="true"
                                style={
                                  {
                                    '--badge-bg': otherLine.badgeBg,
                                    '--badge-fg': otherLine.badgeFg,
                                  } as React.CSSProperties
                                }
                              >
                                {otherLine.code}
                              </span>
                            )
                          })}
                        </span>
                      )}
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
