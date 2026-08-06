/**
 * /rail/stations/[code] — a page per Wenhu station.
 *
 * Wenhu only, deliberately. Depth over breadth: these are built from real TDX
 * records rather than being stubs, and there is no point generating 133 more
 * pages for lines nobody has written about.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import Figure from '@/components/Figure'
import PageShell from '@/components/PageShell'
import RouteMap from '@/components/RouteMap'
import StationBadge from '@/components/StationBadge'
import { getImage } from '@/lib/images'
import { getLineGeometry } from '@/lib/geometry'
import { getAccent, getLine } from '@/lib/lines'
import { getLineStations, getStation } from '@/lib/stations'
import { formatRunTime, getFirstLast, getRunTime } from '@/lib/timetable'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, stationSchema } from '@/lib/structured-data'

/** The one line with written pages. */
const LINE = 'BR'

type Props = { params: Promise<{ code: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getLineStations(LINE).map((station) => ({ code: station.code.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const station = getStation(code)
  if (!station) return {}

  const stations = getLineStations(station.line)
  const position = stations.findIndex((s) => s.code === station.code) + 1
  const line = getAccent(station.line)

  /*
   * Built from the station's own record, so all 24 descriptions differ in the
   * ways the stations differ. The previous version was one sentence with the
   * code and name substituted in, which meant 24 pages competing for the same
   * search result with 24 near-identical descriptions — the specific thing that
   * gets pages filtered as duplicates.
   */
  const parts = [
    `${station.code} ${station.name}${station.nameZh ? ` (${station.nameZh})` : ''} is stop ${position} of ${stations.length} on Taipei Metro's ${line.name} Line`,
  ]

  if (station.district) parts[0] += `, in ${station.district}`
  parts[0] += '.'

  if (station.interchange.length) {
    const names = station.interchange
      .map((other) => getLine(other)?.name)
      .filter(Boolean)
      .join(' and ')
    parts.push(`Interchange with the ${names} Line${station.interchange.length > 1 ? 's' : ''}.`)
  }

  if (station.structure !== 'unknown') {
    parts.push(`${station.structure === 'elevated' ? 'Elevated' : 'Underground'} station.`)
  }

  parts.push('Coordinates, adjacent stations and first and last trains.')

  const description = parts.join(' ')

  return {
    title: `${station.code} ${station.name}`,
    description,
    alternates: { canonical: `/rail/stations/${station.code.toLowerCase()}/` },
    openGraph: {
      type: 'article',
      title: `${station.code} ${station.name}`,
      description,
      url: `/rail/stations/${station.code.toLowerCase()}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${station.code} ${station.name}`,
      description,
    },
  }
}

export default async function StationPage({ params }: Props) {
  const { code } = await params
  const station = getStation(code)
  if (!station || station.line !== LINE) notFound()

  const line = getAccent(station.line)
  const heroImage = getImage(`stations/${station.code.toLowerCase()}`)
  const stations = getLineStations(station.line)
  const index = stations.findIndex((s) => s.code === station.code)
  const previous = index > 0 ? stations[index - 1] : null
  const next = index < stations.length - 1 ? stations[index + 1] : null

  const toPrevious = previous ? getRunTime(previous.code, station.code) : null
  const toNext = next ? getRunTime(station.code, next.code) : null

  const service = getFirstLast(station.code)
  const geometry = getLineGeometry(station.line)

  const structureLabel =
    station.structure === 'unknown' ? 'Not established' : station.structure === 'elevated' ? 'Elevated' : 'Underground'

  return (
    <PageShell accent={line}>
      <JsonLd
        data={[
          stationSchema(station, line, index + 1, stations.length),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Rail', path: '/rail/' },
            { name: 'Wenhu Line', path: '/rail/lines/wenhu-line/' },
            {
              name: `${station.code} ${station.name}`,
              path: `/rail/stations/${station.code.toLowerCase()}/`,
            },
          ]),
        ]}
      />

      {heroImage && (
        <Figure
          image={heroImage}
          alt={`${station.name} station`}
          priority
          className="figure page-hero"
        />
      )}

      <Breadcrumbs
        trail={[
          { label: 'Rail', href: '/rail/' },
          { label: 'Wenhu Line', href: '/rail/lines/wenhu-line/' },
          { label: `${station.code} ${station.name}` },
        ]}
      />

      <div className="station-head">
        <StationBadge code={station.code} />
        <div>
          <h1 className="page-title">{station.name}</h1>
          {station.nameZh && (
            <p className="station-zh" lang="zh-Hant">
              {station.nameZh}
            </p>
          )}
        </div>
      </div>

      <div className="page-body">
        <section className="platform wide" aria-label="Station facts">
          <header className="platform-head">
            <span
              className="badge"
              style={
                { '--badge-bg': line.badgeBg, '--badge-fg': line.badgeFg } as React.CSSProperties
              }
            >
              {line.code}
            </span>
            <span className="platform-title">{line.name} Line</span>
            {line.nameZh && (
              <span className="platform-zh" lang="zh-Hant">
                {line.nameZh}
              </span>
            )}
          </header>

          <dl className="platform-facts">
            <div className="platform-fact">
              <dt>Position</dt>
              <dd>
                {index + 1} of {stations.length}
              </dd>
            </div>
            <div className="platform-fact">
              <dt>Interchange</dt>
              <dd>
                {station.interchange.length ? (
                  <span className="interchange-codes">
                    {station.interchange.map((other) => {
                      const otherLine = getLine(other)
                      if (!otherLine) return null
                      return (
                        <span
                          className="badge badge-mini"
                          key={other}
                          title={`Interchange with the ${otherLine.name} Line`}
                          style={
                            {
                              '--badge-bg': otherLine.badgeBg,
                              '--badge-fg': otherLine.badgeFg,
                            } as React.CSSProperties
                          }
                        >
                          {other}
                        </span>
                      )
                    })}
                  </span>
                ) : (
                  'None'
                )}
              </dd>
            </div>
            <div className="platform-fact">
              <dt>District</dt>
              <dd lang="zh-Hant">{station.district || '—'}</dd>
            </div>
            <div className="platform-fact">
              <dt>Structure</dt>
              <dd>{structureLabel}</dd>
            </div>
            <div className="platform-fact">
              <dt>Opened</dt>
              <dd>TBC</dd>
            </div>
            <div className="platform-fact">
              <dt>Operator</dt>
              <dd>{station.operator}</dd>
            </div>
          </dl>
        </section>

        {geometry && (
          <RouteMap
            lines={[
              { code: line.code, name: line.name, colour: line.map, paths: geometry.paths },
            ]}
            stations={stations
              .filter((s) => s.lat !== null && s.lon !== null)
              .map((s, i, all) => ({
                code: s.code,
                name: s.name,
                lat: s.lat!,
                lon: s.lon!,
                colour: line.map,
                isTerminus: i === 0 || i === all.length - 1,
                isInterchange: s.interchange.length > 0,
                href: `/rail/stations/${s.code.toLowerCase()}/`,
                highlighted: s.code === station.code,
              }))}
            width={640}
            caption={`${station.code} on the Wenhu Line. Drawn from MOTC route geometry.`}
          />
        )}

        <h2 className="section-heading">Location</h2>
        <dl className="detail-list">
          <div>
            <dt>Address</dt>
            <dd lang="zh-Hant">{station.address || <span className="absent">Not published</span>}</dd>
          </div>
          <div>
            <dt>Coordinates</dt>
            <dd>
              <code>
                {station.lat?.toFixed(6)}, {station.lon?.toFixed(6)}
              </code>
            </dd>
          </div>
        </dl>

        {service.length > 0 && (
          <>
            <h2 className="section-heading">First and last trains</h2>
            <div className="wide table-scroll" tabIndex={0}>
              <table className="station-table">
                <thead>
                  <tr>
                    <th scope="col">Towards</th>
                    <th scope="col" className="num">
                      First
                    </th>
                    <th scope="col" className="num">
                      Last
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.map((pattern) => (
                    <tr key={pattern.towards}>
                      <th scope="row">{pattern.towards}</th>
                      <td className="num">{pattern.first}</td>
                      <td className="num">{pattern.last}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Adjacent navigation: how people actually read a line. */}
        <nav className="adjacent wide" aria-label="Adjacent stations">
          {previous ? (
            <Link className="adjacent-link prev" href={`/rail/stations/${previous.code.toLowerCase()}/`}>
              <span className="adjacent-dir">‹ Previous</span>
              <span className="adjacent-station">
                {/* linked=false: this badge sits inside the card's own link. */}
                <StationBadge code={previous.code} linked={false} />
                {previous.name}
              </span>
              {toPrevious !== null && (
                <span className="adjacent-time">{formatRunTime(toPrevious)}</span>
              )}
            </Link>
          ) : (
            <span className="adjacent-link prev is-end">
              <span className="adjacent-dir">Terminus</span>
              <span className="adjacent-station">Start of the line</span>
            </span>
          )}

          {next ? (
            <Link className="adjacent-link next" href={`/rail/stations/${next.code.toLowerCase()}/`}>
              <span className="adjacent-dir">Next ›</span>
              <span className="adjacent-station">
                <StationBadge code={next.code} linked={false} />
                {next.name}
              </span>
              {toNext !== null && <span className="adjacent-time">{formatRunTime(toNext)}</span>}
            </Link>
          ) : (
            <span className="adjacent-link next is-end">
              <span className="adjacent-dir">Terminus</span>
              <span className="adjacent-station">End of the line</span>
            </span>
          )}
        </nav>
      </div>
    </PageShell>
  )
}
