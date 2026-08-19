/**
 * /rail/metro/stations/[code] — a page per station on every catalogued line.
 *
 * Run 21: extended from Wenhu-only to every line in
 * `LINES_WITH_STATION_PAGES` (lib/stations.ts). Wenhu is still the depth
 * standard — 24 stations hand-researched for structure, exits, engineering
 * numbers and photographs, via `lib/station-overlay.ts` — everything else on
 * this page is normally a plain TDX read: position, district, coordinates,
 * interchange, and run times where TDX publishes them. Sanying is the explicit
 * exception: TDX has no LB records, so its twelve entries carry their own
 * primary-source evidence and visibly mark unpublished fields TBC. A thinner
 * station renders fewer rows rather than inventing values.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import CiteMark from '@/components/CiteMark'
import Figure from '@/components/Figure'
import HanLineSubset from '@/components/HanLineSubset'
import PageShell from '@/components/PageShell'
import References from '@/components/References'
import RouteMap from '@/components/RouteMap'
import RichText from '@/components/RichText'
import StationBadge from '@/components/StationBadge'
import LineBadge from '@/components/LineBadge'
import { getImage } from '@/lib/images'
import { getLinePageHref, getPages } from '@/lib/content'
import { getOperator } from '@/lib/operators'
import { getLineGeometry } from '@/lib/geometry'
import { branchTint, getAccent, getLine } from '@/lib/lines'
import { getDistrictEn } from '@/lib/districts'
import { getLineTrack } from '@/lib/network'
import { getLineStations, getStation, LINES_WITH_STATION_PAGES } from '@/lib/stations'
import { formatRunTime, getFirstLast, getRunTime } from '@/lib/timetable'
import { numberSources } from '@/lib/sources'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, stationSchema } from '@/lib/structured-data'

type Props = { params: Promise<{ code: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return [...LINES_WITH_STATION_PAGES].flatMap((line) =>
    getLineStations(line).map((station) => ({ code: station.code.toLowerCase() })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const station = getStation(code)
  if (!station) return {}

  const stations = getLineStations(station.line)
  const position = stations.findIndex((s) => s.code === station.code) + 1
  const line = getAccent(station.line)
  const operator = getOperator(station.operator)

  /*
   * Built from the station's own record, so all descriptions differ in the
   * ways the stations differ. The previous version was one sentence with the
   * code and name substituted in, which meant every page on a line competing
   * for the same search result with near-identical descriptions — the
   * specific thing that gets pages filtered as duplicates.
   *
   * "Taipei Metro's X Line" used to be hardcoded here, which was simply wrong
   * once this page covers NTMC's Circular Line or TYMC's Airport MRT — named
   * by operator instead, generically, rather than assuming TRTC.
   */
  const parts = [
    `${station.code} ${station.name}${station.nameZh ? ` (${station.nameZh})` : ''} is stop ${position} of ${stations.length} on ${operator ? `${operator.name}'s ` : ''}${line.name} Line`,
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

  const closing = station.lat !== null && station.lon !== null
    ? ['Coordinates', 'adjacent stations']
    : ['Adjacent stations']
  if (getFirstLast(station.code).length > 0) closing.push('first and last trains')
  parts.push(`${closing.join(' and ')}.`)

  const description = parts.join(' ')

  return {
    title: `${station.code} ${station.name}`,
    description,
    alternates: { canonical: `/rail/metro/stations/${station.code.toLowerCase()}/` },
    openGraph: {
      type: 'article',
      title: `${station.code} ${station.name}`,
      description,
      url: `/rail/metro/stations/${station.code.toLowerCase()}/`,
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
  if (!station || !LINES_WITH_STATION_PAGES.has(station.line)) notFound()

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
  const track = getLineTrack(station.line)
  const stationSources = station.research?.sources ?? station.sources
  const stationReferences = numberSources(
    stationSources,
    new Set(stationSources.map((source) => source.id)),
  )

  const structureLabel =
    station.structure === 'unknown' ? 'Not established' : station.structure === 'elevated' ? 'Elevated' : 'Underground'

  /*
   * Computed once, used twice: the header banner below and the facts-panel
   * row further down. Run 21 — interchange used to be stated only in the
   * facts panel, which meant scrolling past the hero and the head to learn
   * the single most useful fact about an interchange station.
   */
  const interchangeLines = station.interchange
    .map((code) => ({ code, line: getLine(code) }))
    .filter((entry): entry is { code: string; line: NonNullable<ReturnType<typeof getLine>> } =>
      Boolean(entry.line),
    )

  return (
    <PageShell accent={line}>
      <HanLineSubset line={line.code} />
      <JsonLd
        data={[
          stationSchema(station, line, index + 1, stations.length),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Rail', path: '/rail/' },
            ...(linePageHref ? [{ name: `${line.name} Line`, path: linePageHref }] : []),
            {
              name: `${station.code} ${station.name}`,
              path: `/rail/metro/stations/${station.code.toLowerCase()}/`,
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
          ...(linePageHref ? [{ label: `${line.name} Line`, href: linePageHref }] : []),
          { label: `${station.code} ${station.name}` },
        ]}
      />

      {linePageHref && <BackLink href={linePageHref} label={`the ${line.name} Line`} />}

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
          {interchangeLines.length > 0 && (
            <p className="station-interchange">
              <span className="station-interchange-label">Interchange</span>
              <span className="interchange-codes">
                {interchangeLines.map(({ code, line: otherLine }) => (
                  <LineBadge
                    code={code}
                    key={code}
                    title={`Interchange with the ${otherLine.name} Line`}
                  />
                ))}
              </span>
            </p>
          )}
          {station.research?.interchange &&
            (!station.research.interchange.lineCode ||
              !interchangeLines.some(({ code }) => code === station.research?.interchange?.lineCode)) && (
            <p className="station-interchange">
              <span className="station-interchange-label">Interchange</span>
              <span className="interchange-codes">
                {station.research.interchange.lineCode && (
                  <LineBadge
                    code={station.research.interchange.lineCode}
                    title={station.research.interchange.label}
                  />
                )}
                <span>{station.research.interchange.label}</span>
                <CiteMark
                  id={station.research.interchange.source ?? station.research.openingSource}
                  references={stationReferences}
                />
              </span>
            </p>
          )}
          <p className="station-standfirst">
            Stop {index + 1} of {stations.length}
            {station.research && (
              <CiteMark id={station.research.identitySource} references={stationReferences} />
            )}
            {station.district && (
              <>
                {' · '}
                <span>
                  {getDistrictEn(station.district) ?? 'TBC'} (
                  <span lang="zh-Hant">{station.district}</span>)
                </span>
                {station.research && (
                  <CiteMark id={station.research.identitySource} references={stationReferences} />
                )}
              </>
            )}
            {station.structure !== 'unknown' && (
              <>
                {' · '}{structureLabel.toLowerCase()}
                {station.research && (
                  <CiteMark id={station.research.structureSource} references={stationReferences} />
                )}
              </>
            )}
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
                {station.research && (
                  <CiteMark id={station.research.identitySource} references={stationReferences} />
                )}
              </dd>
            </div>
            <div className="platform-fact">
              <dt>Interchange</dt>
              <dd>
                {station.research?.interchange ? (
                  <>
                    {station.research.interchange.lineCode && (
                      <LineBadge
                        className="badge-mini"
                        code={station.research.interchange.lineCode}
                        title={station.research.interchange.label}
                      />
                    )}{' '}
                    {station.research.interchange.label}
                    <CiteMark
                      id={station.research.interchange.source ?? station.research.openingSource}
                      references={stationReferences}
                    />
                  </>
                ) : interchangeLines.length ? (
                  <span className="interchange-codes">
                    {/*
                      These are LINE codes, not station codes — "the lines
                      you can change to here" — so they link to line pages.
                      They were inert pills, which on an interchange station
                      made the most useful fact on the page a dead end.
                    */}
                    {interchangeLines.map(({ code, line: otherLine }) => (
                      <LineBadge
                        className="badge-mini"
                        code={code}
                        key={code}
                        title={`Interchange with the ${otherLine.name} Line`}
                      />
                    ))}
                  </span>
                ) : station.research ? (
                  'TBC'
                ) : (
                  'None'
                )}
              </dd>
            </div>
            <div className="platform-fact">
              <dt>District</dt>
              <dd>
                {station.district ? (
                  <>
                    {getDistrictEn(station.district) ?? 'TBC'} (
                    <span lang="zh-Hant">{station.district}</span>)
                    {station.research && (
                      <CiteMark id={station.research.identitySource} references={stationReferences} />
                    )}
                  </>
                ) : (
                  '—'
                )}
              </dd>
            </div>
            <div className="platform-fact">
              <dt>Structure</dt>
              <dd>
                {structureLabel}
                {station.research && (
                  <CiteMark id={station.research.structureSource} references={stationReferences} />
                )}
              </dd>
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
                <dd>
                  {station.exits}
                  {station.research && (
                    <CiteMark id={station.research.mapSource} references={stationReferences} />
                  )}
                </dd>
              </div>
            )}
            {station.research && (
              <div className="platform-fact">
                <dt>Facilities</dt>
                <dd>
                  <RichText>{station.research.facilities}</RichText>
                  <CiteMark
                    id={station.research.facilitiesSource ?? station.research.mapSource}
                    references={stationReferences}
                  />
                </dd>
              </div>
            )}
            {station.research?.exitDetails && (
              <div className="platform-fact">
                <dt>Exit locations</dt>
                <dd>
                  <RichText>{station.research.exitDetails}</RichText>
                  <CiteMark
                    id={station.research.exitSource ?? station.research.mapSource}
                    references={stationReferences}
                  />
                </dd>
              </div>
            )}
            {station.research?.platformDetails && (
              <div className="platform-fact">
                <dt>Platforms and tracks</dt>
                <dd>
                  <RichText>{station.research.platformDetails}</RichText>
                  {station.research.platformSource && (
                    <CiteMark id={station.research.platformSource} references={stationReferences} />
                  )}
                </dd>
              </div>
            )}
            {station.research?.branch && (
              <div className="platform-fact">
                <dt>Branch relationship</dt>
                <dd>
                  <RichText>{station.research.branch.label}</RichText>
                  <CiteMark id={station.research.branch.source} references={stationReferences} />
                </dd>
              </div>
            )}
            {station.research?.depot && (
              <div className="platform-fact">
                <dt>Depot serving this stretch</dt>
                <dd>
                  <RichText>{station.research.depot}</RichText>
                  {station.research.depotSource && (
                    <CiteMark id={station.research.depotSource} references={stationReferences} />
                  )}
                </dd>
              </div>
            )}
            {station.research?.publicArt && (
              <div className="platform-fact">
                <dt>Public art</dt>
                <dd>
                  <RichText>{station.research.publicArt}</RichText>
                  {station.research.publicArtSource && (
                    <CiteMark id={station.research.publicArtSource} references={stationReferences} />
                  )}
                </dd>
              </div>
            )}
            {station.research?.naming && (
              <div className="platform-fact">
                <dt>Station naming</dt>
                <dd>
                  <RichText>{station.research.naming}</RichText>
                  {station.research.namingSource && (
                    <CiteMark id={station.research.namingSource} references={stationReferences} />
                  )}
                </dd>
              </div>
            )}
            {station.research?.engineeringHistory && (
              <div className="platform-fact">
                <dt>Engineering history</dt>
                <dd>
                  <RichText>{station.research.engineeringHistory}</RichText>
                  {station.research.engineeringHistorySource && (
                    <CiteMark id={station.research.engineeringHistorySource} references={stationReferences} />
                  )}
                </dd>
              </div>
            )}
            {station.research?.landmarks && (
              <div className="platform-fact">
                <dt>Adjacent landmarks</dt>
                <dd>
                  <RichText>{station.research.landmarks}</RichText>
                  {station.research.landmarksSource && (
                    <CiteMark id={station.research.landmarksSource} references={stationReferences} />
                  )}
                </dd>
              </div>
            )}
            {station.research?.additionalName && (
              <div className="platform-fact">
                <dt>Additional name</dt>
                <dd>
                  <span lang="zh-Hant">{station.research.additionalName}</span>
                  <CiteMark
                    id={station.research.additionalNameSource ?? ''}
                    references={stationReferences}
                  />
                </dd>
              </div>
            )}
            {station.research?.formerName && (
              <div className="platform-fact">
                <dt>Former official name</dt>
                <dd>
                  {station.research.formerName.name} (
                  <span lang="zh-Hant">{station.research.formerName.nameZh}</span>), announced{' '}
                  {station.research.formerName.announced}; renamed{' '}
                  {station.research.formerName.renamed}
                  <CiteMark id={station.research.formerName.source} references={stationReferences} />
                </dd>
              </div>
            )}
            {station.engineering && (
              <div className="platform-fact">
                <dt>
                  <Link href="/rail/technology/station-numbering/">Engineering no.</Link>
                </dt>
                <dd>
                  <code>{station.engineering}</code>
                </dd>
              </div>
            )}
            <div className="platform-fact">
              <dt>Opened</dt>
              <dd>
                {station.research?.openingDate ?? 'TBC'}
                {station.research && (
                  <CiteMark id={station.research.openingSource} references={stationReferences} />
                )}
              </dd>
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
                {station.research && (
                  <CiteMark id={station.research.identitySource} references={stationReferences} />
                )}
              </dd>
            </div>
            {station.research?.trialFare && (
              <>
                <div className="platform-fact">
                  <dt>Trial fare</dt>
                  <dd>
                    {station.research.trialFare}
                    <CiteMark id={station.research.openingSource} references={stationReferences} />
                  </dd>
                </div>
              </>
            )}
            {station.research?.trialHours && (
                <div className="platform-fact">
                  <dt>Trial hours</dt>
                  <dd>
                    {station.research.trialHours}
                    {station.research.scheduleSources.map((source) => (
                      <CiteMark key={source} id={source} references={stationReferences} />
                    ))}
                  </dd>
                </div>
            )}
            {station.research?.normalFare && (
                <div className="platform-fact">
                  <dt>Normal fare</dt>
                  <dd>
                    {station.research.normalFare}
                    <CiteMark id={station.research.openingSource} references={stationReferences} />
                  </dd>
                </div>
            )}
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
            {!station.research?.depot && depots.length > 0 && (
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
              {
                code: line.code,
                name: line.name,
                colour: line.map,
                // Wenhu has no branch, so this resolves to the whole alignment
                // as trunk. Routed through the same helper anyway, so station
                // pages on a branched line get the right picture for free.
                paths: track.trunk,
                branchPaths: track.branch,
                branchColour: branchTint(line),
                branchEdge: line.ink,
              },
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
                href: `/rail/metro/stations/${s.code.toLowerCase()}/`,
                highlighted: s.code === station.code,
              }))}
            width={640}
            caption={`${station.code} on the ${line.name} Line. Drawn from MOTC route geometry.`}
          />
        )}

        <h2 className="section-heading">Location</h2>
        <dl className="detail-list">
          <div>
            <dt>Address</dt>
            <dd>
              {station.address ? (
                <span lang="zh-Hant">{station.address}</span>
              ) : (
                <span className="absent">TBC</span>
              )}
              {station.research && (
                <CiteMark id={station.research.identitySource} references={stationReferences} />
              )}
            </dd>
          </div>
          {station.location && (
            <div>
              <dt>Station location</dt>
              <dd>
                <span lang="zh-Hant">{station.location}</span>
                <CiteMark id={station.locationSource} references={stationReferences} />
              </dd>
            </div>
          )}
          <div>
            <dt>Coordinates</dt>
            <dd>
              {station.lat !== null && station.lon !== null ? (
                <>
                  <code>{station.lat.toFixed(6)}, {station.lon.toFixed(6)}</code>
                  {station.research?.coordinateSource && (
                    <CiteMark id={station.research.coordinateSource} references={stationReferences} />
                  )}
                </>
              ) : (
                <span className="absent">TBC</span>
              )}
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

        {station.research?.provenance && (
          <p className="provenance-note wide">
            {station.research.provenance}
            {station.research.provenanceSource && (
              <CiteMark id={station.research.provenanceSource} references={stationReferences} />
            )}
          </p>
        )}

        {station.prose && station.prose.length > 0 && (
          <div className="prose station-prose">
            <p>
              {station.prose.map((sentence, index) => (
                <span key={`${station.code}-${index}`}>
                  {index > 0 ? ' ' : ''}
                  <RichText>{sentence.text}</RichText>
                  <CiteMark id={sentence.source} references={stationReferences} />
                </span>
              ))}
            </p>
          </div>
        )}

        {/* Adjacent navigation: how people actually read a line. */}
        <nav className="adjacent wide" aria-label="Adjacent stations">
          {previous ? (
            <Link className="adjacent-link prev" href={`/rail/metro/stations/${previous.code.toLowerCase()}/`}>
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
            <Link className="adjacent-link next" href={`/rail/metro/stations/${next.code.toLowerCase()}/`}>
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

        {(station.research || station.sources.length > 0) && <References references={stationReferences} />}
      </div>
    </PageShell>
  )
}
