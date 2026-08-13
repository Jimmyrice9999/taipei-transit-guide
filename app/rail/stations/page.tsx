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
import LineBadge from '@/components/LineBadge'
import PageShell from '@/components/PageShell'
import PhotoCard from '@/components/PhotoCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getLinePageHref } from '@/lib/content'
import BackLink from '@/components/BackLink'
import LineIcon from '@/components/LineIcon'
import JsonLd from '@/components/JsonLd'
import { getImage } from '@/lib/images'
import { breadcrumbSchema } from '@/lib/structured-data'
import { NEUTRAL_LINE, getLine } from '@/lib/lines'
import { STATIONS, getStationHref } from '@/lib/stations'

export const metadata: Metadata = {
  title: 'Stations',
  description:
    'Every station with a page on this site, by line — photographed where a picture exists, with every interchange linked.',
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
        Every station on every line, grouped by line — photographed where a picture exists,
        with every interchange linked.
      </p>

      {/*
        Not `.page-body` — that wrapper caps its direct children to
        `--measure` (~729px), which is right for a page with a floated
        spine beside a reading column, and wrong here: this page has no
        spine, and a photo-card grid capped to the measure fits two columns
        at any width, the same two columns whether the viewport is 1440 or
        2560. The grid wants the container's full width, like the rolling
        stock and depot indexes get by not being wrapped in .page-body at
        all.
      */}
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
            <ul className="photo-card-grid">
              {stations.map((station) => (
                <PhotoCard
                  key={station.code}
                  href={getStationHref(station.code)!}
                  line={station.line}
                  image={getImage(`stations/${station.code.toLowerCase()}`)}
                  title={
                    <>
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
                    </>
                  }
                  subtitle={
                    station.nameZh ? <span lang="zh-Hant">{station.nameZh}</span> : undefined
                  }
                  meta={
                    <>
                      <LineBadge code={station.line} />
                      {/*
                        ── Every line that serves the station ────────────────
                        Run 11. This index listed interchange stations with a
                        brown badge and nothing else, which said they were
                        ordinary stops on one line. They are the places on
                        this line where you can change trains, and — new in
                        this pass — the badge is a real link to that line
                        now, not an inert aria-hidden pill: LineBadge already
                        links a code to its line page everywhere else on the
                        site, and a station's interchange list is exactly
                        "the lines it serves" beyond its own.
                      */}
                      {station.interchange.map((other) => {
                        const otherLine = getLine(other)
                        if (!otherLine) return null
                        return (
                          <LineBadge
                            key={other}
                            className="badge-mini"
                            code={other}
                            title={`Interchange with the ${otherLine.name} Line`}
                          />
                        )
                      })}
                    </>
                  }
                />
              ))}
            </ul>
          </section>
        )
      })}
    </PageShell>
  )
}
