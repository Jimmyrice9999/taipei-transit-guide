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
import { NEUTRAL_LINE, LINES } from '@/lib/lines'
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
                black, and which operator publishes each. Plus a reconciliation against the
                Wikipedia and Wikidata values — including one case where a citation to an
                official route map was further from correct than the value it replaced.
              </span>
              <span className="data-card-meta">{LINES.length} lines · MOTC TDX</span>
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
                English names, coordinates, interchanges and running order. Downloadable as
                JSON.
              </span>
              <span className="data-card-meta">{STATIONS.length} stations · JSON</span>
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
