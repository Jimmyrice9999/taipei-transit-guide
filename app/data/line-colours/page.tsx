/**
 * /data/line-colours — the original contribution.
 *
 * No English-language source publishes TRTC's official line colours from MOTC
 * data. Everything here is derived at build time from data/tdx/, so the page
 * cannot drift from what the site itself renders.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, datasetSchema } from '@/lib/structured-data'
import { AA, AA_NON_TEXT, NEAR_BLACK, WHITE, contrast } from '@/lib/color'
import { LINES, NEUTRAL_LINE } from '@/lib/lines'
import { PROVENANCE } from '@/lib/stations'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  // Without an explicit canonical this page inherits the root layout's,
  // which declares '/' — telling search engines this page is really the
  // homepage, and that it should not be indexed in its own right.
  alternates: { canonical: '/data/line-colours/' },
  title: 'Official line colours',
  description:
    "Taipei Metro's official line colours from Taiwan MOTC open data, with contrast ratios and a reconciliation against the community-sourced values in circulation.",
}

/**
 * What the community sources carry, for the reconciliation.
 *
 * Recorded as data rather than prose so the difference is computed, not claimed.
 */
const SUPERSEDED: Record<string, { value: string; source: string }> = {
  BR: { value: '#C48C31', source: 'Wikidata, cited to a TRTC route map' },
  R: { value: '#E3002C', source: 'en.wikipedia Module:Adjacent stations' },
  G: { value: '#008659', source: 'en.wikipedia Module:Adjacent stations' },
  O: { value: '#F8B61C', source: 'en.wikipedia Module:Adjacent stations' },
  BL: { value: '#0070BD', source: 'en.wikipedia Module:Adjacent stations' },
  Y: { value: '#FFDB00', source: 'no source found' },
  A: { value: '#8E47AD', source: 'Wikidata' },
}

/** Perceptual-ish distance, just to say how far off each old value was. */
function difference(a: string, b: string): number {
  const rgb = (hex: string) =>
    [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
  const [r1, g1, b1] = rgb(a)
  const [r2, g2, b2] = rgb(b)
  return Math.round(Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2))
}

export default function LineColoursPage() {
  return (
    <PageShell accent={NEUTRAL_LINE}>
      <JsonLd
        data={[
          datasetSchema({
            name: 'Taipei Metro official line colours',
            description:
              'The official colour of every Taipei Metro line, taken from each operating ' +
              "company's own line record on Taiwan MOTC's TDX platform, with contrast ratios " +
              'and a reconciliation against the community-sourced values in circulation.',
            path: '/data/line-colours/',
            downloadPath: '/data/taipei-metro-line-colours.json',
            keywords: [
              'Taipei Metro', 'line colours', 'brand colours', 'hex', 'WCAG contrast',
              'Taiwan', 'open data', 'TDX', '台北捷運',
            ],
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Data', path: '/data/' },
            { name: 'Official line colours', path: '/data/line-colours/' },
          ]),
        ]}
      />

      <Link className="up-link" href="/data/">
        ‹ Data
      </Link>

      <h1 className="page-title">Official line colours</h1>
      <p className="page-summary">
        Taken from the <code>LineColor</code> field published by each operator through
        Taiwan MOTC's TDX platform
        {PROVENANCE.fetchedAt && <>, retrieved {PROVENANCE.fetchedAt.slice(0, 10)}</>}.
      </p>

      <div className="page-body">
          <div className="wide table-scroll" tabIndex={0}>
            <table className="colour-table">
              <thead>
                <tr>
                  <th scope="col">Line</th>
                  <th scope="col">Official</th>
                  <th scope="col" className="num">
                    on white
                  </th>
                  <th scope="col" className="num">
                    on black
                  </th>
                  <th scope="col">Badge</th>
                  <th scope="col">Accent ink</th>
                  <th scope="col">Operator</th>
                </tr>
              </thead>
              <tbody>
                {LINES.map((line) => {
                  const onWhite = contrast(line.map, WHITE)
                  const onBlack = contrast(line.map, NEAR_BLACK)
                  return (
                    <tr key={line.code}>
                      <th scope="row">
                        <span className="colour-line">
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
                          <span className="colour-name">
                            {line.name}
                            {line.nameZh && (
                              <span className="colour-zh" lang="zh-Hant">
                                {line.nameZh}
                              </span>
                            )}
                          </span>
                        </span>
                      </th>
                      <td>
                        <span className="colour-chip" style={{ background: line.map }} />
                        <code>{line.map}</code>
                      </td>
                      <td className="num">
                        {onWhite.toFixed(2)}
                        <span className={onWhite >= AA_NON_TEXT ? 'ok' : 'weak'}>
                          {onWhite >= AA_NON_TEXT ? ' ✓' : ' ✗'}
                        </span>
                      </td>
                      <td className="num">{onBlack.toFixed(2)}</td>
                      <td>
                        <code>{line.badgeBg}</code>
                        <span className="colour-sub">
                          {line.badgeFg === WHITE ? 'white text' : 'dark text'} ·{' '}
                          {contrast(line.badgeFg, line.badgeBg).toFixed(2)}
                        </span>
                      </td>
                      <td>
                        <code>{line.ink}</code>
                        <span className="colour-sub">
                          {contrast(line.ink, WHITE).toFixed(2)} on white
                        </span>
                      </td>
                      <td className="colour-operator">{line.operator}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>Three values per line, not one.</strong> The official colour is chosen
            to be told apart on a map, not to carry type. Several fail {AA}:1 against white
            or black, so a badge fill and an accent ink are derived from each one — same
            hue, lightness reduced until it clears WCAG AA with a small margin. Every
            derived value on this site is generated that way, never picked by eye.
          </p>

          <h2 className="section-heading">What everyone else has</h2>

          <div className="wide table-scroll" tabIndex={0}>
            <table className="colour-table">
              <thead>
                <tr>
                  <th scope="col">Line</th>
                  <th scope="col">Official</th>
                  <th scope="col">Commonly cited</th>
                  <th scope="col" className="num">
                    Δ
                  </th>
                  <th scope="col">Where that value comes from</th>
                </tr>
              </thead>
              <tbody>
                {LINES.map((line) => {
                  const old = SUPERSEDED[line.code]
                  if (!old) return null
                  return (
                    <tr key={line.code}>
                      <th scope="row">{line.code}</th>
                      <td>
                        <span className="colour-chip" style={{ background: line.map }} />
                        <code>{line.map}</code>
                      </td>
                      <td>
                        <span className="colour-chip" style={{ background: old.value }} />
                        <code>{old.value}</code>
                      </td>
                      <td className="num">{difference(line.map, old.value)}</td>
                      <td className="colour-source">{old.source}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <h2 className="section-heading">A warning about citation chains</h2>

          <p>
            Two of these are worth dwelling on, because they show a failure mode that is
            easy to repeat.
          </p>

          <p>
            This site originally carried <code>#B57A28</code> for the Wenhu Line. That was
            replaced with <code>#C48C31</code> on the strength of a Wikidata value{' '}
            <em>citing TRTC's own route map</em> — which sounds authoritative and is the
            kind of provenance you would normally accept. The official value is{' '}
            <code>#B57A25</code>. The correction moved the value further from the truth
            than the guess it replaced.
          </p>

          <p>
            The same thing happened with the Airport MRT. An earlier{' '}
            <code>#8246AF</code> was replaced by <code>#8E47AD</code> from Wikidata. The
            official value is <code>#8246AF</code> — exactly what was discarded.
          </p>

          <p>
            The lesson is not that Wikidata is unreliable. It is that{' '}
            <strong>a citation to an official source is not the same as the official
            source</strong>, and confidence in a chain of references is not evidence about
            what sits at the end of it. Where a government publishes the data through an
            API, use the API.
          </p>

          <h2 className="section-heading">Caveats</h2>
          <ul>
            <li>
              <strong>Circular and Airport MRT are not TRTC.</strong> Circular is New Taipei
              Metro and the Airport MRT is Taoyuan Metro, so their colours come from those
              operators' records. A request limited to TRTC returns five lines.
            </li>
            <li>
              <strong>These are screen values.</strong> DORTS states its signage system
              defines Pantone, RGB and CMYK values per line; that specification is not
              published openly and may not match these hex values exactly.
            </li>
            <li>
              <strong>The source data is not new.</strong> See{' '}
              <Link href="/data/provenance/">provenance</Link>.
            </li>
          </ul>

          <section className="download wide">
            <h2 className="download-head">Download</h2>
            <p className="download-links">
              <a href={`${BASE_PATH}/data/taipei-metro-line-colours.json`} download>
                ↓ taipei-metro-line-colours.json
              </a>
              <span className="download-meta">{LINES.length} lines · official + derived</span>
            </p>
            <p className="download-note">
              Official colours with the contrast-checked badge and accent values derived
              from them, generated from the same source this page renders.
            </p>
            <p className="download-note">
              The official values are Taiwan government open data under the{' '}
              <a href="https://data.gov.tw/licenses" rel="noreferrer">
                Open Government Data Licence
              </a>
              — free to use, adapt and redistribute, including commercially, with
              attribution. The derived values are ours and carry no additional conditions.
            </p>
          </section>
        </div>
      </PageShell>
  )
}
