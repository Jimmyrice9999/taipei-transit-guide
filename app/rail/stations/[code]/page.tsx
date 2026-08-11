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
import BackLink from '@/components/BackLink'
import Figure from '@/components/Figure'
import PageShell from '@/components/PageShell'
import RouteMap from '@/components/RouteMap'
import RichText from '@/components/RichText'
import StationBadge from '@/components/StationBadge'
import LineBadge from '@/components/LineBadge'
import { getImage } from '@/lib/images'
import { getLinePageHref, getPages } from '@/lib/content'
import { getOperator } from '@/lib/operators'
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

  const linePageHref = getLinePageHref(station.line)
  const operator = getOperator(station.operator)
  /*
   * Depot pages carry `line:` and `spine:` frontmatter — the line they serve
   * and the station they sit beside — which is what the strip map already
   * draws its depot marks from. Same source, so the row and the map cannot
   * disagree.
   */
  const depots = getPages('rail', 'depots')
    .filter((page) => page.line === station.line)
    .map((page) => ({ title: page.title, href: page.href }))
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

      <BackLink href="/rail/lines/wenhu-line/" label="the Wenhu Line" />

      {/*
        The code at platform-sign scale.
        ────────────────────────────────────────────────────────────────────
        On a station page the code IS the identity — it is what is printed
        largest on the platform, what someone reads off a wall, and what this
        site's whole visual system is built around. It was set at 0.82em beside
        the title, which is the size it takes when it is an aside inside a
        sentence. Here it is not an aside.

        Same token, same colours, same contrast guarantee; the only thing that
        changes is the scale, which is why this costs no new colour and cannot
        drift from the badge system.
      */}
      <div className="station-head">
        <span
          className="station-code"
          style={
            { '--badge-bg': line.badgeBg, '--badge-fg': line.badgeFg } as React.CSSProperties
          }
          aria-hidden="true"
        >
          {station.code}
        </span>
        <div className="station-titles">
          <h1 className="page-title">
            <span className="sr-only">{station.code} </span>
            {station.name}
          </h1>
          {station.nameZh && (
            <p className="station-zh" lang="zh-Hant">
              {station.nameZh}
            </p>
          )}
          <p className="station-standfirst">
            Stop {index + 1} of {stations.length}
            {station.district && (
              <>
                {' · '}
                <span lang="zh-Hant">{station.district}</span>
              </>
            )}
            {station.structure !== 'unknown' && <> · {structureLabel.toLowerCase()}</>}
          </p>
        </div>
      </div>

      <div className="page-body">
        <section className="platform wide" aria-label="Station facts">
          {/*
            Run 10: the badge and the line name both link to the line. On a
            station page the line is the single most likely next destination
            and it was the one thing named here that went nowhere.
          */}
          <header className="platform-head">
            <LineBadge code={line.code} />
            <span className="platform-title">
              {linePageHref ? (
                <Link href={linePageHref}>{line.name} Line</Link>
              ) : (
                `${line.name} Line`
              )}
            </span>
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
                      /*
                        These are LINE codes, not station codes — "the lines
                        you can change to here" — so they link to line pages.
                        They were inert pills, which on an interchange station
                        made the most useful fact on the page a dead end.
                      */
                      return (
                        <LineBadge
                          className="badge-mini"
                          code={other}
                          key={other}
                          title={`Interchange with the ${otherLine.name} Line`}
                        />
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
            {/*
              Exits, from the builder's own station table. Eleven of Wenhu's
              twenty-four have exactly one, which is a real characteristic of
              an elevated line built down the middle of a road and appears in
              no English source. It is a fact about the station, so it goes in
              the station's facts.
            */}
            {station.exits !== null && (
              <div className="platform-fact">
                <dt>Street exits</dt>
                <dd>{station.exits}</dd>
              </div>
            )}
            {station.engineering && (
              <div className="platform-fact">
                <dt>
                  <Link href="/rail/systems/station-numbering/">Engineering no.</Link>
                </dt>
                <dd>
                  <code>{station.engineering}</code>
                </dd>
              </div>
            )}
            <div className="platform-fact">
              <dt>Opened</dt>
              <dd>TBC</dd>
            </div>
            <div className="platform-fact">
              <dt>Operator</dt>
              <dd>
                {operator ? (
                  operator.href ? (
                    <Link href={operator.href}>{operator.name}</Link>
                  ) : (
                    operator.name
                  )
                ) : (
                  station.operator
                )}
              </dd>
            </div>
            {/*
              Depots on this line, not "the depot serving this station".
              ────────────────────────────────────────────────────────────────
              The tempting version is to name the nearest depot by sequence
              distance, and it would usually be right. But which depot stables
              and maintains a given train is an operational fact this site has
              no source for, and a row headed "Depot" against one station name
              reads as that claim rather than as an inference from a map. The
              honest row is the one that can be sourced: these depots are on
              this line. Where each sits is on the strip map already.
            */}
            {depots.length > 0 && (
              <div className="platform-fact">
                <dt>Depots on this line</dt>
                <dd>
                  {depots.map((depot, i) => (
                    <span key={depot.href}>
                      {i > 0 && ', '}
                      <Link href={depot.href}>{depot.title}</Link>
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>

          {/*
            Planned interchanges.
            ──────────────────────────────────────────────────────────────────
            A future connection is real information — it changes where people
            buy flats — and it must never be mistaken for something you can use
            today. So it is not in the Interchange row, does not get a coloured
            pill, and does not print a station code, because the code does not
            exist yet. It gets a plainly-labelled strip that says "planned".
          */}
          {station.planned.length > 0 && (
            <div className="platform-planned">
              <span className="platform-planned-label">Planned</span>
              <ul>
                {station.planned.map((entry) => (
                  <li key={entry.line}>
                    {/* RichText, not a bare string: these notes name stations
                        in Chinese, and untagged Han loads the wrong font and
                        fails the language-tagging audit. Caught by that audit
                        rather than by review. */}
                    <span className="pill-planned">{entry.line}</span>{' '}
                    <RichText>{entry.note}</RichText>{' '}
                    <a className="planned-cite" href={entry.sourceUrl}>
                      <RichText>{entry.sourceTitle}</RichText>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
