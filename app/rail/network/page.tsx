/**
 * /rail/network — the whole network on one page.
 *
 * An explicit route rather than a content folder, because it is generated
 * entirely from data and has no Markdown body. Static routes take precedence
 * over the [section]/[type] dynamic route, so this wins for /rail/network.
 *
 * This is the one page where the full palette is used. Everywhere else stays
 * single-line and disciplined; here, colour is the information.
 */

import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import LineBadge from '@/components/LineBadge'
import LineIcon from '@/components/LineIcon'
import { getLinePageHref as lineHref, getSection } from '@/lib/content'
import { getOperator } from '@/lib/operators'
import RouteMap from '@/components/RouteMap'
import TableOfContents from '@/components/TableOfContents'
import { NetworkRidershipPanel } from '@/components/RidershipPanel'
import StationBadge from '@/components/StationBadge'
import { NEUTRAL_LINE, branchTint } from '@/lib/lines'
import { getInterchanges, getLineSummaries, getLineTrack } from '@/lib/network'
import { getStationHref, PROVENANCE } from '@/lib/stations'
import { getNationalNetworkLayers } from '@/lib/national-network'

export const metadata: Metadata = {
  // Without an explicit canonical this page inherits the root layout's,
  // which declares '/' — telling search engines this page is really the
  // homepage, and that it should not be indexed in its own right.
  alternates: { canonical: '/rail/network/' },
  title: 'Taiwan rail network',
  description:
    'A pannable national rail overview and a detailed Taipei-region network map, generated from committed Taiwan MOTC data.',
}

/** "a, b and c" — written out rather than via Intl, which would make the build
 *  output depend on the ICU data of whichever machine ran it. */
function listOf(items: string[]): string {
  if (items.length <= 1) return items[0] ?? ''
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}

/**
 * Marks a figure that came from the operator rather than from the platform.
 *
 * The dagger is a hover hint AND a screen-reader one — `title` alone is neither
 * on most combinations, so the source is also in visually-hidden text. The note
 * under the table says the same thing again in full, because a symbol whose
 * only explanation is a tooltip explains nothing on a phone.
 */
function PublishedMark({ note }: { note: string }) {
  return (
    <>
      <span className="network-bound" title={note} aria-hidden="true">
        {' '}
        †
      </span>
      <span className="sr-only"> (source: {note})</span>
    </>
  )
}

export default function NetworkPage() {
  /*
   * Every line in the registry, including the one with no station records.
   *
   * This used to filter on `stations.length > 0`, and that filter was the whole
   * reason the Sanying Line was missing from this page: it has no TDX records
   * of any kind, so it came through with an empty station list and was dropped
   * silently. A line the site knows about, and knows the colour of, does not
   * get to disappear because one dataset is short — it gets a row that says
   * which figures are the operator's rather than the platform's.
   */
  const summaries = getLineSummaries()

  /* The scale for the length bars: the longest line, not a rounded number, so
     one bar always reaches the full width and the comparison is against the
     network rather than against an invented maximum.

     Sanying's 14.29 km counts toward the scale like any other, because it is
     the same quantity measured the same way — an operator's published route
     length. What differs is who published it, and that is said in the cell and
     in the note under the table, not by leaving the bar out. */
  const lengthOf = (s: (typeof summaries)[number]) => s.officialKm ?? s.published?.routeKm ?? null
  const longestKm = Math.max(...summaries.map((s) => lengthOf(s) ?? 0), 1)
  const interchanges = getInterchanges()

  const mapLines = summaries
    .map((summary) => {
      /*
       * Run 12: trunk and branch are drawn separately.
       *
       * Xinbeitou and Xiaobitan were drawn in their parent's exact colour, so a
       * two-station shuttle read as part of the trunk — and the Luzhou branch,
       * which TDX publishes as a run of its own, read as a second Zhonghe–Xinlu
       * main line. `getLineTrack` cuts the branch out of the alignment using
       * the route records; see lib/geometry.ts partitionBranch.
       */
      const track = getLineTrack(summary.line.code, summary.line.operator)
      if (track.trunk.length === 0 && track.branch.length === 0) return null
      return {
        code: summary.line.code,
        name: summary.line.name,
        colour: summary.line.map,
        badgeBg: summary.line.badgeBg,
        badgeFg: summary.line.badgeFg,
        paths: track.trunk,
        branchPaths: track.branch,
        branchColour: branchTint(summary.line),
        branchEdge: summary.line.ink,
        /* See the note on `dashed` in components/RouteMap: a chain of published
           station points is not a surveyed alignment and must not look like
           one. */
        dashed: track.kind === 'station-chain',
      }
    })
    .filter((l): l is NonNullable<typeof l> => l !== null)

  const branchedLines = mapLines.filter((l) => l.branchPaths.length > 0)
  const chainedLines = mapLines.filter((l) => l.dashed)

  const interchangeCodes = new Set(interchanges.flatMap((i) => i.codes))

  const mapStations = summaries.flatMap((summary) =>
    summary.stations
      .filter((s) => s.lat !== null && s.lon !== null)
      .map((s, i, all) => ({
        id: `${summary.line.operator}:${s.code}`,
        code: s.code,
        name: s.name,
        nameZh: s.nameZh,
        lat: s.lat!,
        lon: s.lon!,
        colour: summary.line.map,
        href: getStationHref(s.code, summary.line.operator) ?? undefined,
        isTerminus: i === 0 || i === all.length - 1,
        isInterchange: interchangeCodes.has(s.code),
        /*
         * Every catalogued station is a real link. Progressive pan-and-zoom
         * enhancement separates dense dots on a small screen; the line table
         * and interchange list remain ordinary text links as a second route.
         *
         * At network scale the Wenhu stations BR02 and BR03 can be close together;
         * units apart — about 4 CSS px on a phone, 12 on a wide desktop. Their
         * Pan-and-zoom makes the individual targets separable without removing
         * the static links.
         * The map also keeps a title on each dot, so hover and screen readers
         * still identify stations.
         *
         * Every station on this page is still reachable at full size — from the
         * termini badges in the table and the interchange list below it, both of
         * which are ordinary text links.
         */
      })),
  )

  const totalStations = summaries.reduce((n, s) => n + s.stations.length, 0)
  const national = getNationalNetworkLayers()
  const nationalLines = [...mapLines, ...national.lines]
  const nationalStations = [...mapStations, ...national.stations]

  /* Lines the platform carries, and the ones it does not. Both counts are read
     off the registry rather than typed, so the sentence below cannot survive a
     refetch that changes the answer. */
  const mapped = summaries.filter((s) => s.line.onTdx)
  const offPlatform = summaries.filter((s) => !s.line.onTdx)

  return (
    <PageShell accent={NEUTRAL_LINE}>
      {/* The section's own title, read from its _index.md rather than typed —
          it became "Rail & cable" in run 51 and a typed crumb would not know. */}
      <Breadcrumbs
        trail={[{ label: getSection('rail').title, href: '/rail/' }, { label: 'The network' }]}
      />
      <BackLink href="/rail/" label={getSection('rail').title} />

      <h1 className="page-title">The network</h1>
      <p className="page-summary">
        {/*
          The counts are the registry's, and they have to be: `npm run facts`
          reads this sentence and compares both numbers against LINES.length and
          STATIONS.length. What the sentence has to do is make sure a reader
          knows what they are counts OF — 180 does not include Sanying's twelve,
          and saying "10 lines, 180 stations, drawn from MOTC route geometry"
          would have been three claims of which the third was false.
        */}
        {summaries.length} lines, {totalStations} stations. {mapped.length} of the lines are
        drawn below from Taiwan MOTC route geometry
        {offPlatform.map((s) => (
          <React.Fragment key={s.line.code}>
            {/*
              Run 51. This said the line "is not on the map", which stopped
              being true in part 1 of the same run — the note under this
              paragraph and the map itself both said otherwise, three sentences
              apart. The line is drawn; what is worth saying here is what it is
              drawn from, because that is the part a reader would otherwise
              assume.
            */}
            ; the {s.line.name} Line is newer than MOTC&rsquo;s extract, so its{' '}
            {s.published?.stations ?? 0} stations are outside that station count and it is
            drawn dashed, as a chain of the operator&rsquo;s published station points rather
            than as surveyed track
          </React.Fragment>
        ))}
        . Colours are the official ones each operator publishes — not the values
        circulating in English-language sources, which are all slightly wrong.
      </p>

      <TableOfContents
        items={[
          { id: 'national-overview', label: 'National overview', level: 2 },
          { id: 'ridership', label: 'Ridership', level: 2 },
          { id: 'lines', label: 'Lines', level: 2 },
          { id: 'interchanges', label: 'Interchanges', level: 2 },
        ]}
      />

      <div className="page-body">
          <h2 className="section-heading" id="national-overview">National overview</h2>
          <p>
            This overview combines every committed TDX alignment for TRA, THSR, Kaohsiung
            Metro and the Taipei-region systems. It is generated during the static build;
            the browser makes no map or data request. Use the zoom controls, a wheel or a
            pinch gesture, then drag to pan. Keyboard users can enter the station layer once
            with Tab, move between stations with the arrow keys, and use Home or End for the
            first or last station.
          </p>
          <p className="note">
            Official operator colours identify the urban lines and every line also carries a
            code label, so colour is not the only key. TDX publishes TRA and THSR geometry but
            no line-colour field; those alignments use neutral ink rather than an invented
            operator colour. The committed extract has no route geometry or coordinates for
            Kaohsiung Circular Light Rail or Maokong Gondola, so neither is given a guessed
            alignment. The Sanying Line remains the explicitly dashed chain of published
            station points described below.
          </p>
          <div className="national-network-map">
            <RouteMap
              lines={nationalLines}
              stations={nationalStations}
              width={840}
              labels="none"
              lineLabels
              caption="National rail overview generated from committed TDX geometry. Every linked station has an accessible name; arrow keys move through the station layer. Urban lines use published operator colours and line-code labels. TRA and THSR use neutral ink because their TDX geometry has no colour field. Sanying is dashed because only station points, not route geometry, are published in the committed sources."
            />
          </div>
          <div className="national-network-small" aria-label="National map small-screen alternative">
            <p><strong>Small-screen view.</strong> At 480 pixels and below, the dense island-wide drawing is replaced by this useful system list. The detailed Taipei-region map and its ordinary links remain below.</p>
            <ul>
              <li><Link href="/rail/tra/">Taiwan Railways</Link> — 12 committed line geometries and 245 station records</li>
              <li><Link href="/rail/thsr/">Taiwan High Speed Rail</Link> — one geometry and 12 station records</li>
              <li><Link href="/rail/krtc/">Kaohsiung Metro and light rail</Link> — Red and Orange line geometry; Circular Light Rail is listed but not guessed</li>
              <li><Link href="/rail/metro/">Taipei, New Taipei, Taoyuan and Taichung urban rail</Link> — the detailed diagram follows</li>
              <li><Link href="/rail/cable/">Maokong Gondola</Link> — station pages remain available without an invented alignment</li>
            </ul>
          </div>
          {/*
            What is on this map is what TDX publishes, and what is missing is
            worth stating rather than leaving as an apparent oversight.

            The two light rail lines were absent until run 10 for a reason that
            was ours, not the platform's: TDX files them under their own
            operator codes (NTDLRT, NTALRT) and the fetch only ever asked for
            TRTC, NTMC and TYMC.

            The Sanying Line is a different case and is genuinely not there.
          */}
          <p className="note">
            {/*
              Run 51. This paragraph used to open "The Sanying Line is not
              drawn", above twelve Sanying dots — the station layer never
              filtered on whether the line had geometry, so the page contradicted
              itself in the space of one screen. The line is drawn now, as what
              can actually be evidenced, and this says which that is.
            */}
            <strong>The Sanying Line is drawn as a chain of station points, not as
            an alignment.</strong> It opened on 30 June 2026. The New Taipei Metro line
            records this map is built from carry a source update stamp of 23 May 2023 —
            nearly three years earlier — and return one line, the Circular Line. There
            is no LB route geometry to draw. What its dashed line joins is its twelve
            stations, in the operator&rsquo;s published order, at the New Taipei City
            landmark register&rsquo;s own coordinates: it states where the stations are
            and what sequence they run in, and states nothing about the route between
            them. The line is written up from the operator&rsquo;s own announcement on
            its <Link href="/rail/metro/lines/sanying-line/">line page</Link>.{' '}
            {/*
              Run 12. The line was previously missing from the table as well as
              the map, which was not a decision — the table filtered on "has
              stations" and Sanying has none. It is in the table now, with its
              own colour, which is the part that took actual work: there is no
              LineColor field to read for a line the platform has never heard
              of. See OFF_PLATFORM in lib/lines.ts.
            */}
            It <em>is</em> in the table below, in its own colour, taken from the
            operator&rsquo;s LB line mark.
          </p>

          <RouteMap
            lines={mapLines}
            stations={mapStations}
            width={760}
            labels="none"
            lineLabels
            /* The previous caption claimed the gaps were "real, not missing
               data". Auditing the geometry showed that is false for at least
               four lines: the Circular Line's two breaks are 320 m and 680 m of
               absent track in the middle of a continuous line, and the Airport
               MRT contributes two stray fragments under a kilometre long. The
               map should not vouch for its source beyond what the source
               supports. */
            caption={
              'Every line the site carries, each labelled with its code at both ends — colour alone does not ' +
              'identify a line. Bannan blue and Airport MRT purple are indistinguishable to a reader with ' +
              'protanopia, and Tamsui red against Danhai red is the closest pair on the network even in ' +
              'normal colour vision, which is why every line carries its code. Interchange stations are ' +
              'ringed in black; termini are the outer dots. ' +
              /* Built from the data, so a line that gains or loses a branch cannot
                 leave this sentence describing the old network. */
              `Branch track is drawn as a pale core of its parent's colour inside a hairline of the same ` +
              `colour darkened — a branch belongs to its line rather than being a line of its own, and the ` +
              `hairline is what gives the pale core a defined edge on the paper. ` +
              `${branchedLines.length} lines have one: ${listOf(
                branchedLines.map((l) => l.name),
              )}. Where a line appears broken, the alignment across the gap is missing from the published ` +
              'geometry — those breaks are holes in the source data, not features of the network, and are ' +
              'left unbridged rather than joined with track we cannot evidence. ' +
              /* Built from the data for the same reason the branch sentence is:
                 if MOTC ever publishes LB geometry, this sentence has to stop
                 claiming a dashed line is on the map. */
              (chainedLines.length === 0
                ? ''
                : `A dashed line is not surveyed track: it joins that line's published station points in ` +
                  `order and says nothing about the route between them. ${listOf(
                    chainedLines.map((l) => l.name),
                  )} ${chainedLines.length === 1 ? 'is' : 'are'} drawn that way, having no published ` +
                  'route geometry at all.')
            }
          />

          <NetworkRidershipPanel />

          <h2 className="section-heading" id="lines">Lines</h2>
          <div className="wide table-scroll" tabIndex={0}>
            <table className="network-table">
              <thead>
                <tr>
                  <th scope="col">Line</th>
                  <th scope="col" className="num">
                    Stations
                  </th>
                  <th scope="col">Termini</th>
                  <th scope="col" className="num">
                    End to end
                  </th>
                  <th scope="col" className="num">
                    Length
                  </th>
                  <th scope="col" className="num">
                    Measured
                  </th>
                  <th scope="col">Operator</th>
                </tr>
              </thead>
              <tbody>
                {summaries.map(({ line, stations, from, to, travelTimeMin, officialKm, measuredKm, hasBranch, runs, published }) => (
                  <tr key={line.key} data-off-platform={published ? '' : undefined}>
                    <th scope="row">
                      <span className="network-line">
                        {/*
                          A code badge rather than a bare colour swatch. The map
                          now labels each line with its code, so the table has to
                          carry the same token or there is no way to get from one
                          to the other without matching colours by eye — which is
                          the thing that does not work under protanopia.

                          Run 10: the badge and the name both link to the line.
                          They are separate links to the same place rather than
                          one link wrapping both, because the badge carries a
                          `title` of its own and nesting it inside a wider
                          anchor would swallow that.
                        */}
                        {/*
                          Run 11. Nine rows of this table differ by colour,
                          code, name and numbers, and said nothing about the
                          one distinction a rider actually notices: two of
                          these are tramways, one runs on tyres, and the rest
                          are steel-wheel metro. The icon says which. Its
                          accessible name spells that out in words — see
                          components/LineIcon.
                        */}
                        <LineIcon code={line.code} operator={line.operator} size={26} />
                        <LineBadge code={line.code} operator={line.operator} />
                        <span className="network-name">
                          {lineHref(line.code, line.operator) ? (
                          <Link href={lineHref(line.code, line.operator)!}>{line.name}</Link>
                          ) : (
                            line.name
                          )}
                          {line.nameZh && (
                            <span className="network-zh" lang="zh-Hant">
                              {line.nameZh}
                            </span>
                          )}
                        </span>
                      </span>
                    </th>
                    {/*
                      Every figure in this row and the next three is the
                      platform's, except on a line the platform has no record
                      of, where it is the operator's and carries a dagger
                      saying so. The dagger is not decoration either: two
                      numbers in one column from two different sources, with
                      nothing distinguishing them, is precisely the kind of
                      quiet merge this table exists to avoid.
                    */}
                    <td className="num">
                      {published ? (
                        <>
                          {published.stations}
                          <PublishedMark note={published.label} />
                        </>
                      ) : (
                        <>
                          {stations.length}
                          {hasBranch && <span className="network-note"> incl. branch</span>}
                        </>
                      )}
                    </td>
                    <td>
                      {from && to ? (
                        <span className="network-termini">
                          <StationBadge code={from.code} />
                          <span aria-hidden="true">→</span>
                          <StationBadge code={to.code} />
                        </span>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="num">
                      {published ? (
                        <>
                          about {published.endToEndMin} min
                          <PublishedMark note={published.label} />
                        </>
                      ) : travelTimeMin ? (
                        `${travelTimeMin} min`
                      ) : (
                        <span className="absent">—</span>
                      )}
                    </td>
                    {/*
                      The bar is the number, drawn to scale against the longest
                      line on the network. Seven figures between 15 and 52 km
                      read as seven figures; drawn, the Airport MRT is visibly
                      twice the Bannan Line and three times the Circular.
                      Nothing new is asserted — same value, same cell, and the
                      figure is still printed beside it, because a bar cannot
                      be read to two decimal places.

                      It takes the line's own colour, and that is the one place
                      in run 7 where colour was added. It is defensible here and
                      almost nowhere else: on this table the LINE is the
                      variable, every row already carries the same colour in its
                      badge two cells to the left, and the bar is therefore
                      colour restating an encoding that is already redundant.
                      On a chart of depot areas, by contrast, the line is not
                      the variable and colouring by it would encode nothing.
                    */}
                    <td className="num">
                      {(() => {
                        const km = officialKm ?? published?.routeKm ?? null
                        if (!km) return <span className="absent">—</span>
                        return (
                          <span className="km-cell">
                            <span className="km-value">
                              {km.toFixed(2)} km
                              {published && <PublishedMark note={published.label} />}
                            </span>
                            {/*
                              The hairline, at last actually drawn.

                              `needsHairline` has been computed in lib/lines.ts
                              since run 5 — "too pale to read as a rule on
                              white" — asserted by a test, printed by
                              `npm run palette`, and consumed by nothing. So the
                              Circular Line's bar has been shipping at 1.19:1
                              against the paper, which is not a rule so much as
                              a rumour of one, and the Zhonghe–Xinlu Line's at
                              1.90:1. Adding a tenth line made it three: LB is
                              2.21:1.

                              A 1px inset ring in the line's own ink, which is
                              derived against 4.6:1, gives the bar an edge
                              without changing the fill away from the colour the
                              operator publishes. Lines whose colour already
                              rules on white get no ring and look exactly as
                              they did.
                            */}
                            <span
                              className="km-bar"
                              style={
                                {
                                  '--km-fill': line.map,
                                  '--km-edge': line.needsHairline ? line.ink : 'transparent',
                                  '--km-width': `${(km / longestKm) * 100}%`,
                                } as React.CSSProperties
                              }
                              aria-hidden="true"
                            />
                          </span>
                        )
                      })()}
                    </td>
                    <td className="num">
                      {measuredKm ? (
                        <>
                          {/* "≥" is not decoration. Where the published geometry
                              breaks, the track across the gap is not in the data
                              and cannot be measured, so the figure is a floor
                              rather than an estimate. */}
                          {runs > 1 && (
                            <span className="network-bound" title={`Geometry published in ${runs} discontinuous runs; track across the gaps is not measured`}>
                              ≥{' '}
                            </span>
                          )}
                          {measuredKm.toFixed(1)} km
                        </>
                      ) : (
                        <span className="absent">—</span>
                      )}
                    </td>
                    {/*
                      The code was printed raw — "NTDLRT" is not a name, and it
                      is not even a company: TDX files New Taipei's light rail
                      under its own code, but the operator is New Taipei Metro.
                      The cell now prints the company and links to it, keeping
                      the code as the tooltip for anyone matching against TDX.
                    */}
                    <td className="network-operator">
                      {(() => {
                        const op = getOperator(line.operator)
                        if (!op) return line.operator
                        return op.href ? (
                          <Link href={op.href} title={`TDX operator code ${op.code}`}>
                            {op.name}
                          </Link>
                        ) : (
                          <span title={`TDX operator code ${op.code}`}>{op.name}</span>
                        )
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>Length is official; Measured is ours.</strong> The operators publish a
            route length through TDX — as a running total against the last station of each
            route, not in the route-length field, which is zero throughout. Measured is
            computed independently from the surveyed geometry, taken between the outermost
            stations because the published alignment runs on past both termini into depot
            leads and tail track. The two agree to within about 150 m on every line whose
            geometry is continuous, which is the point of printing both: the check is
            visible rather than asserted. Both columns describe the trunk route only, so a
            line's branch is excluded from each. A <span className="network-bound">≥</span>{' '}
            marks a line whose geometry arrives in discontinuous runs — the track crossing
            each gap is absent from the source, so our figure is a floor, and the shortfall
            against the official column measures how much is missing: 0.8 km on the
            Tamsui–Xinyi Line, 2.8 km on the Circular. End-to-end times are MOTC's own.
          </p>

          {offPlatform.length > 0 && (
            <p className="note">
              <strong>
                A <span className="network-bound">†</span> marks a figure that is not the
                platform's.
              </strong>{' '}
              {offPlatform.map((s) => (
                <React.Fragment key={s.line.code}>
                  {/* "no route length" is not available as a phrase here: the
                      site once claimed TDX publishes no route length at all,
                      that was wrong, and `npm run facts` now fails any page
                      that says it. The claim being made is about this line, not
                      about the field, and has to read that way. */}
                  MOTC's data holds no record of the {s.line.name} Line of any kind — not a
                  line record, not a station, not a metre of geometry — so its station
                  count, length and end-to-end time on this table are the operator's own,
                  from {s.published?.label}, and are cited on its{' '}
                  <Link href={lineHref(s.line.code, s.line.operator) ?? '/rail/'}>line page</Link>. The
                  length bar is drawn to the same scale as every other, because a published
                  route length is the same quantity whoever published it; what the dagger
                  marks is that this row was assembled from a different source than the{' '}
                  {mapped.length} above it, not that it is worth less. Its colour is the
                  operator's too — see{' '}
                  <Link href="/data/line-colours/">the line colours page</Link> for where
                  that was read and what it was checked against.
                </React.Fragment>
              ))}
            </p>
          )}

          <h2 className="section-heading" id="interchanges">Interchanges</h2>
          <p className="section-desc">
            {interchanges.length} places where you can change lines. Each carries a
            different code on each line it serves, which is exactly what the badge system
            makes legible.
          </p>

          <ul className="interchange-list wide">
            {interchanges.map((interchange) => (
              <li key={interchange.codes.join('-')}>
                <span className="interchange-name">
                  {interchange.name}
                  {interchange.nameZh && (
                    <span className="interchange-zh" lang="zh-Hant">
                      {interchange.nameZh}
                    </span>
                  )}
                </span>
                <span className="interchange-codes">
                  {interchange.codes.map((code) => (
                    <StationBadge code={code} key={code} />
                  ))}
                </span>
              </li>
            ))}
          </ul>

          <p className="page-updated">
            Station and line data from Taiwan MOTC TDX
            {PROVENANCE.fetchedAt && <>, retrieved {PROVENANCE.fetchedAt.slice(0, 10)}</>}.{' '}
            <Link href="/data/">See the data section</Link> for the full records and
            provenance.
          </p>
        </div>
      </PageShell>
  )
}
