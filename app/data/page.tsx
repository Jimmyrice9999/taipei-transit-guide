/**
 * /data — the section index.
 *
 * Leads with the finding rather than a menu of files. The contribution here is
 * not "we have tables"; it is that the values every English-language source
 * carries are wrong, and here is the official set with the working shown.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import { NEUTRAL_LINE, LINES, TDX_LINES } from '@/lib/lines'
import { PROVENANCE, STATIONS } from '@/lib/stations'

export const metadata: Metadata = {
  // Without an explicit canonical this page inherits the root layout's,
  // which declares '/' — telling search engines this page is really the
  // homepage, and that it should not be indexed in its own right.
  alternates: { canonical: '/data/' },
  title: 'Data',
  description:
    "Taipei Metro's official line colours from Taiwan MOTC open data, with station records, provenance, and a reconciliation against the community-sourced values in circulation.",
}

export default function DataPage() {
  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Data' }]} />
      <BackLink href="/" label="the home page" />
      <h1 className="page-title">Data</h1>

      <div className="page-body">
          <p className="lede wide">
            Every English-language source we could find has Taipei's metro line colours
            wrong. Not badly wrong — most are within a few percent — but not one of the
            seven matches what the operators actually publish. These are the official
            values, taken from Taiwan's Ministry of Transportation and Communications, with
            the working shown.
          </p>

          <div className="data-cards wide">
            <Link href="/data/line-colours/" className="data-card">
              <span className="data-card-title">Official line colours</span>
              <span className="data-card-desc">
                All {LINES.length} lines: hex values, swatches, contrast against white and
                black, and where each one was read. Plus a reconciliation against the
                Wikipedia and Wikidata values — including one case where a citation to an
                official route map was further from correct than the value it replaced, and
                one line the platform does not carry at all.
              </span>
              {/*
                Run 11. This card describes the palette and did not show it —
                on a section whose lede is a claim about colour values. Nine
                badges in the official colours are the card's own subject, and
                each carries its line's code, so the row still reads with the
                colour stripped. Inert spans: the card is the link.
              */}
              <span className="data-card-swatches" aria-hidden="true">
                {LINES.map((line) => (
                  <span
                    key={line.key}
                    className="badge badge-mini"
                    style={
                      {
                        '--badge-bg': line.badgeBg,
                        '--badge-fg': line.badgeFg,
                      } as React.CSSProperties
                    }
                  >
                    {line.code}
                  </span>
                ))}
              </span>
              {/* Not "{LINES.length} lines · MOTC TDX" any more: that was a
                  provenance claim covering every badge in the row above, and
                  from run 12 one of them comes from somewhere else. */}
              <span className="data-card-meta">
                {LINES.length} lines · {TDX_LINES.length} from MOTC TDX
              </span>
            </Link>

            <Link href="/data/stations/" className="data-card">
              <span className="data-card-title">Station records</span>
              <span className="data-card-desc">
                {/* "five lines" was left over from a TRTC-only fetch. The
                    Circular Line and Airport MRT have been in the data since
                    NTMC and TYMC were added, which is seven. Counted from the
                    records now, so it cannot go stale again. */}
                All {STATIONS.length} stations across{' '}
                {new Set(STATIONS.map((s) => s.line)).size} lines — codes, Chinese and
                English names, coordinates where published, interchanges and running order.
                TDX-backed records are downloadable as JSON; Sanying's twelve records cite
                the operator on their station pages.
              </span>
              <span className="data-card-meta">
                {STATIONS.length} stations · mixed provenance
              </span>
            </Link>

            <Link href="/data/sources/" className="data-card">
              <span className="data-card-title">Bibliography</span>
              <span className="data-card-desc">
                Every source cited anywhere on this site, marked primary or secondary, with
                the pages that rest on it and the date each URL was read. The
                primary-to-secondary ratio is the honest summary of how much of this site is
                first-hand.
              </span>
              <span className="data-card-meta">Cited sources · primary vs secondary</span>
            </Link>

            <Link href="/data/provenance/" className="data-card">
              <span className="data-card-title">Provenance</span>
              <span className="data-card-desc">
                What came from official data, what is hand-researched, what is still
                unknown, and how current any of it is. Including the staleness caveat that
                applies to everything on this site.
              </span>
              <span className="data-card-meta">
                {PROVENANCE.fetchedAt ? `Retrieved ${PROVENANCE.fetchedAt.slice(0, 10)}` : 'Pending'}
              </span>
            </Link>

            <Link href="/data/network-growth/" className="data-card">
              <span className="data-card-title">Network growth</span>
              <span className="data-card-desc">
                A dated station-opening timeline from the researched station records, with
                every missing opening date left as TBC and grouped by line for checking.
              </span>
              <span className="data-card-meta">Opening chronology · 1996 to now</span>
            </Link>

            <Link href="/data/comparisons/" className="data-card">
              <span className="data-card-title">Comparisons</span>
              <span className="data-card-desc">
                Lines by length and stations, operators by documented fleet-family records,
                and every station by structure and latest imported ridership.
              </span>
              <span className="data-card-meta">Accessible tables · no JavaScript required</span>
            </Link>

            <Link href="/data/changelog/" className="data-card">
              <span className="data-card-title">Changelog</span>
              <span className="data-card-desc">
                The project's run log as a reader-facing history of new research, corrections,
                audits and data layers, regenerated at build time.
              </span>
              <span className="data-card-meta">Generated from docs/run-log.md</span>
            </Link>
          </div>

          <h2 className="section-heading">Use it</h2>
          <p>
            All of this is derived from Taiwan government open data and is reproduced here
            under the same terms. If you are building something and need Taipei Metro line
            colours or station records, take them — a link back is welcome but not
            required.
          </p>
          <p>
            If you find an error, it matters. The whole point of this section is that
            incorrect values propagate quietly for years, and the only defence is people
            checking.
          </p>
        </div>
      </PageShell>
  )
}
