import type { Metadata } from 'next'
import Link from 'next/link'
import { hanFontFace } from '@/app/layout'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import LineBadge from '@/components/LineBadge'
import BackLink from '@/components/BackLink'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, datasetSchema } from '@/lib/structured-data'
import StationBadge from '@/components/StationBadge'
import { NEUTRAL_LINE, LINES, getLine } from '@/lib/lines'
import { getOperator } from '@/lib/operators'
import { PROVENANCE, STATIONS, getStationHref } from '@/lib/stations'

export const metadata: Metadata = {
  // Without an explicit canonical this page inherits the root layout's,
  // which declares '/' — telling search engines this page is really the
  // homepage, and that it should not be indexed in its own right.
  alternates: { canonical: '/data/stations/' },
  title: 'Station records',
  description:
    'Every Taipei-region metro station — TDX records plus twelve primary-sourced Sanying stations, with gaps marked TBC. The TDX subset is downloadable as JSON.',
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * This page loads its own Han subset, and only this page.
 *
 * It renders every station name on the network in Chinese — about 200 distinct
 * characters, roughly twice what the whole of the rest of the site uses, and
 * ~100 of them appear nowhere else. Sharing one subset made 45 other pages pay
 * ~40 KB for glyphs they never draw; a rolling stock page was fetching about
 * 80 KB of Chinese to render three characters.
 *
 * Overriding `--font-han` rather than redeclaring the same family name is the
 * safe form. Two @font-face rules with the same family, weight and
 * unicode-range would leave which one wins to declaration order across two
 * separately-injected <style> elements — true today, and exactly the kind of
 * thing that changes when a framework starts hoisting styles differently. A
 * distinct family name cannot be ambiguous, and the base face is simply never
 * matched here, so it is never fetched.
 *
 * `:root:root` is not a typo. The layout's rule and this one are both `:root`,
 * so which wins would otherwise come down to which <style> the framework emits
 * last — currently this one, and not something worth depending on. Doubling the
 * selector raises specificity from (0,1,0) to (0,2,0), which settles it by the
 * cascade rather than by document order.
 */
const STATIONS_HAN = `${hanFontFace('TTG Han Stations', (w) => `noto-sans-tc-stations-${w}.woff2`)}
:root:root { --font-han: 'TTG Han Stations'; }
`

export default function StationDataPage() {
  const byLine = LINES.map((line) => ({
    line,
    stations: STATIONS.filter((s) => s.line === line.code).sort((a, b) => a.sequence - b.sequence),
  })).filter((group) => group.stations.length > 0)
  const tdxStationCount = STATIONS.filter((station) => station.recordSource === 'tdx').length
  const researchedStationCount = STATIONS.length - tdxStationCount

  /*
   * Counted, not typed. Two strings on this page said "seven lines" and one of
   * them said "three operators" — both written when seven was right, both left
   * behind by run 10's two light rail lines, and neither anywhere near the
   * `{byLine.length}` two lines below that had been counting correctly the
   * whole time. Companies, not TDX operator codes: the platform files New
   * Taipei's light rail under codes of its own, and counting those would invent
   * two extra operators. See lib/operators.ts.
   */
  const operatorCount = new Set(
    byLine.map(({ line }) => getOperator(line.operator)?.name ?? line.operator),
  ).size

  return (
    <PageShell accent={NEUTRAL_LINE}>
      {/* React hoists a <style> into <head>, so this lands beside the layout's
          own font rules rather than mid-document. */}
      <style dangerouslySetInnerHTML={{ __html: STATIONS_HAN }} />

      {/* Dataset is the one type on this site with a real chance of being
          useful: it drives dataset search, and a structured English record of
          Taipei's station data is a genuinely findable thing. */}
      <JsonLd
        data={[
          datasetSchema({
            name: 'Taipei Metro station records',
            description:
              `Every station on the Taipei Metro network — ${STATIONS.length} records across ` +
              `${byLine.length} lines and ${operatorCount} operators, with station codes, English and ` +
              'Traditional Chinese names, coordinates where published, districts and interchanges. ' +
              `${tdxStationCount} are derived from Taiwan MOTC's TDX open data platform; ` +
              `${researchedStationCount} Sanying records are transcribed from operator primary sources.`,
            path: '/data/stations/',
            downloadPath: '/data/taipei-metro-stations.json',
            keywords: [
              'Taipei Metro', 'MRT', 'rapid transit', 'station codes', 'Taiwan',
              'open data', 'TDX', '台北捷運',
            ],
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Data', path: '/data/' },
            { name: 'Station records', path: '/data/stations/' },
          ]),
        ]}
      />

      <Link className="up-link" href="/data/">
        ‹ Data
      </Link>

      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Station records' }]} />
      <BackLink href="/data/" label="Data" />
      <h1 className="page-title">Station records</h1>
      <p className="page-summary">
        {STATIONS.length} stations across {byLine.length} lines, in official running order,
        — {tdxStationCount} from Taiwan MOTC's TDX platform and {researchedStationCount}{' '}
        Sanying records from operator primary sources
        {PROVENANCE.fetchedAt && <> — retrieved {PROVENANCE.fetchedAt.slice(0, 10)}</>}.
      </p>

      <div className="page-body">
          {/* `wide` sits on the section, not the table: only direct children of
              the editorial container participate in the grid, so the class on a
              nested element would silently do nothing. */}
          {byLine.map(({ line, stations }) => (
            <section key={line.code} className="wide">
              <h2 className="section-heading">
                <span
                  className="network-swatch"
                  style={{ background: line.map }}
                  aria-hidden="true"
                />
                {line.name}
                {line.nameZh && (
                  <span className="colour-zh" lang="zh-Hant">
                    {line.nameZh}
                  </span>
                )}
              </h2>

              <div className="wide table-scroll" tabIndex={0}>
                <table className="station-table">
                  <thead>
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">English</th>
                      {/*
                        The only Han on the site written straight into JSX rather
                        than coming through the Markdown pipeline or RichText,
                        and so the only Han that was missing its lang tag. On a
                        device carrying a Simplified font that renders the wrong
                        glyph variants, and a screen reader announces it with
                        English pronunciation rules.
                      */}
                      <th scope="col" lang="zh-Hant">
                        中文
                      </th>
                      <th scope="col" className="num">
                        Latitude
                      </th>
                      <th scope="col" className="num">
                        Longitude
                      </th>
                      <th scope="col">Interchange</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stations.map((station) => (
                      <tr key={station.code}>
                        <th scope="row">
                          <StationBadge code={station.code} />
                        </th>
                        <td>
                          {getStationHref(station.code) ? (
                            <Link href={getStationHref(station.code)!}>{station.name}</Link>
                          ) : (
                            station.name
                          )}
                        </td>
                        <td lang="zh-Hant">{station.nameZh || <span className="absent">—</span>}</td>
                        <td className="num">{station.lat?.toFixed(6) ?? '—'}</td>
                        <td className="num">{station.lon?.toFixed(6) ?? '—'}</td>
                        <td>
                          {station.research?.interchange ? (
                            <span className="interchange-codes">
                              {station.research.interchange.lineCode && (
                                <LineBadge
                                  className="badge-mini"
                                  code={station.research.interchange.lineCode}
                                  title={station.research.interchange.label}
                                />
                              )}
                              <span>{station.research.interchange.label}</span>
                            </span>
                          ) : station.interchange.length ? (
                            <span className="interchange-codes">
                              {/* Line codes, in that line's own colour — the
                                  interchanging station's own code on the other
                                  line is not asserted, only the line. */}
                              {station.interchange.map((code) => {
                                const other = getLine(code)
                                if (!other) return null
                                return (
                                  <LineBadge
                                    className="badge-mini"
                                    code={code}
                                    key={code}
                                    title={`Interchange with the ${other.name} Line`}
                                  />
                                )
                              })}
                            </span>
                          ) : station.recordSource === 'primary-research' ? (
                            <span className="absent">TBC</span>
                          ) : (
                            <span className="absent">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          {/* A footnote, not a header: you download the file after deciding the
              data is what you want, not before. */}
          <section className="download wide">
            <h2 className="download-head">Download</h2>
            <p className="download-links">
              <a href={`${BASE_PATH}/data/taipei-metro-stations.json`} download>
                ↓ taipei-metro-stations.json
              </a>
              <span className="download-meta">
                {tdxStationCount} TDX stations · JSON
              </span>
            </p>
            <p className="download-note">
              This download contains only the {tdxStationCount} TDX-backed records. The{' '}
              {researchedStationCount} primary-sourced Sanying records appear on this page
              and their station pages but are kept out of a file distributed under the TDX
              licence. Structure — elevated or underground — is deliberately excluded from
              the TDX export because the platform does not publish it.
            </p>
            <p className="download-note">
              Taiwan government open data, published by MOTC under the{' '}
              <a href="https://data.gov.tw/licenses" rel="noreferrer">
                Open Government Data Licence
              </a>
              . Free to use, adapt and redistribute, including commercially, with
              attribution to the source. See <Link href="/data/provenance/">provenance</Link>.
            </p>
          </section>
        </div>
      </PageShell>
  )
}
