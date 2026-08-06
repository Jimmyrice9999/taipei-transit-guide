/**
 * The 404 page.
 *
 * Previously Next's built-in one, which is a bare centred "404 — This page could
 * not be found" with no header, no navigation, no <main> landmark and no route
 * back into the site. On a reference site that is the worst page to strand
 * someone on, because a 404 here usually means a guessed URL — someone typing
 * /train/stations/br25/ or /train/lines/bannan-line/ — and those people know
 * exactly what they were looking for.
 *
 * So this offers the specific things they were most likely reaching for rather
 * than an apology.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import { NEUTRAL_LINE } from '@/lib/lines'
import { LINES_WITH_STATION_PAGES, STATIONS } from '@/lib/stations'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  const withPages = [...LINES_WITH_STATION_PAGES]
  const stationCount = STATIONS.filter((s) => withPages.includes(s.line)).length

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <h1 className="page-title">Page not found</h1>
      <p className="page-summary">
        Nothing is published at this address. If you typed or guessed the URL, these are
        the most likely reasons.
      </p>

      <div className="page-body">
        <h2 className="section-heading">If you were after a station</h2>
        <p>
          Only the Wenhu Line has a page per station — {stationCount} of them, at{' '}
          <code>/train/stations/br01/</code> through <code>/train/stations/br24/</code>.
          Every other station on the network is in the data but has no page written about
          it yet, because linking to a page that does not exist would be worse than not
          linking at all.
        </p>
        <p>
          All {STATIONS.length} stations across the seven lines are listed on{' '}
          <Link href="/data/stations/">the station records page</Link>, with codes, names,
          coordinates and interchanges.
        </p>

        <h2 className="section-heading">If you were after a line</h2>
        <p>
          <Link href="/train/lines/wenhu-line/">The Wenhu Line</Link> is the only line
          written up so far. <Link href="/train/network/">The network page</Link> covers all
          seven with official colours, termini, lengths and interchanges.
        </p>

        <h2 className="section-heading">If you were after buses</h2>
        <p>
          <Link href="/bus/">The bus section</Link> exists but is empty. It says what it
          will cover and why it does not yet.
        </p>

        <h2 className="section-heading">Everything else</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/train/">Train</Link> — lines, rolling stock and depots
          </li>
          <li>
            <Link href="/data/">Data</Link> — official line colours, station records,
            provenance
          </li>
          <li>
            <Link href="/about/">About</Link> — what this site is and how it sources
            material
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
