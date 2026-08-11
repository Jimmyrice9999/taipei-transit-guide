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

import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import RouteMap from '@/components/RouteMap'
import StationBadge from '@/components/StationBadge'
import { getAllLineGeometry } from '@/lib/geometry'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getInterchanges, getLineSummaries } from '@/lib/network'
import { PROVENANCE } from '@/lib/stations'

export const metadata: Metadata = {
  // Without an explicit canonical this page inherits the root layout's,
  // which declares '/' — telling search engines this page is really the
  // homepage, and that it should not be indexed in its own right.
  alternates: { canonical: '/rail/network/' },
  title: 'The network',
  description:
    'Every Taipei Metro line — official colours, station counts, termini and end-to-end times, drawn from Taiwan MOTC open data.',
}

export default function NetworkPage() {
  const summaries = getLineSummaries().filter((s) => s.stations.length > 0)

  /* The scale for the length bars: the longest line, not a rounded number, so
     one bar always reaches the full width and the comparison is against the
     network rather than against an invented maximum. */
  const longestKm = Math.max(...summaries.map((s) => s.officialKm ?? 0), 1)
  const interchanges = getInterchanges()
  const geometry = getAllLineGeometry()

  const mapLines = summaries
    .map((summary) => {
      const g = geometry.find((entry) => entry.lineId === summary.line.code)
      return g
        ? {
            code: summary.line.code,
            name: summary.line.name,
            colour: summary.line.map,
            badgeBg: summary.line.badgeBg,
            badgeFg: summary.line.badgeFg,
            paths: g.paths,
          }
        : null
    })
    .filter((l): l is NonNullable<typeof l> => l !== null)

  const interchangeCodes = new Set(interchanges.flatMap((i) => i.codes))

  const mapStations = summaries.flatMap((summary) =>
    summary.stations
      .filter((s) => s.lat !== null && s.lon !== null)
      .map((s, i, all) => ({
        code: s.code,
        name: s.name,
        nameZh: s.nameZh,
        lat: s.lat!,
        lon: s.lon!,
        colour: summary.line.map,
        isTerminus: i === 0 || i === all.length - 1,
        isInterchange: interchangeCodes.has(s.code),
        /*
         * Deliberately NOT links here, although 24 of these stations have pages.
         *
         * At network scale the Wenhu stations BR02 and BR03 fall 8.3 viewBox
         * units apart — about 4 CSS px on a phone, 12 on a wide desktop. Their
         * tap targets overlap several times over, so a tap could not reliably
         * reach the station it was aimed at on any device. A control that looks
         * interactive and cannot be operated accurately is worse than a plain
         * dot: it invites a tap and then acts on something else.
         *
         * Every station on this page is still reachable at full size — from the
         * termini badges in the table and the interchange list below it, both of
         * which are ordinary text links. The map keeps its <title> on each dot,
         * so hovering and screen readers still name them.
         */
      })),
  )

  const totalStations = summaries.reduce((n, s) => n + s.stations.length, 0)

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Rail', href: '/rail/' }, { label: 'The network' }]} />
      <BackLink href="/rail/" label="Rail" />

      <h1 className="page-title">The network</h1>
      <p className="page-summary">
        {summaries.length} lines, {totalStations} stations, drawn from Taiwan MOTC route
        geometry. Colours are the official ones each operator publishes — not the values
        circulating in English-language sources, which are all slightly wrong.
      </p>

      <div className="page-body">
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
            <strong>The Sanying Line is not drawn.</strong> It opened on 30 June 2026
            and Taiwan MOTC&rsquo;s metro records for New Taipei Metro were last updated
            at source on 23 May 2023, so the platform this map is built from does not
            carry its geometry, its stations or its colour. Rather than draw an
            alignment from a source that does not publish one, it is absent here and
            written up from the operator&rsquo;s own announcement on its{' '}
            <Link href="/rail/lines/sanying-line/">line page</Link>.
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
            caption="Every line as surveyed, each labelled with its code at both ends — colour alone does not identify a line. Bannan blue and Airport MRT purple are indistinguishable to a reader with protanopia, and Tamsui red against Danhai red is the closest pair on the network even in normal colour vision, which is why every line carries its code. Interchange stations are ringed in black; termini are the outer dots. Where a line appears broken, the alignment across the gap is missing from the published geometry — those breaks are holes in the source data, not features of the network, and are left unbridged rather than joined with track we cannot evidence."
          />

          <h2 className="section-heading">Lines</h2>
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
                {summaries.map(({ line, stations, from, to, travelTimeMin, officialKm, measuredKm, hasBranch, runs }) => (
                  <tr key={line.code}>
                    <th scope="row">
                      <span className="network-line">
                        {/*
                          A code badge rather than a bare colour swatch. The map
                          now labels each line with its code, so the table has to
                          carry the same token or there is no way to get from one
                          to the other without matching colours by eye — which is
                          the thing that does not work under protanopia.
                        */}
                        <span
                          className="badge"
                          style={
                            {
                              '--badge-bg': line.badgeBg,
                              '--badge-fg': line.badgeFg,
                            } as React.CSSProperties
                          }
                        >
                          {line.code}
                        </span>
                        <span className="network-name">
                          {line.name}
                          {line.nameZh && (
                            <span className="network-zh" lang="zh-Hant">
                              {line.nameZh}
                            </span>
                          )}
                        </span>
                      </span>
                    </th>
                    <td className="num">
                      {stations.length}
                      {hasBranch && <span className="network-note"> incl. branch</span>}
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
                      {travelTimeMin ? `${travelTimeMin} min` : <span className="absent">—</span>}
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
                      {officialKm ? (
                        <span className="km-cell">
                          <span className="km-value">{officialKm.toFixed(2)} km</span>
                          <span
                            className="km-bar"
                            style={
                              {
                                '--km-fill': line.map,
                                '--km-width': `${(officialKm / longestKm) * 100}%`,
                              } as React.CSSProperties
                            }
                            aria-hidden="true"
                          />
                        </span>
                      ) : (
                        <span className="absent">—</span>
                      )}
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
                    <td className="network-operator">{line.operator}</td>
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

          <h2 className="section-heading">Interchanges</h2>
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
