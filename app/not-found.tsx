/**
 * The 404 page.
 *
 * Previously Next's built-in one, which is a bare centred "404 — This page could
 * not be found" with no header, no navigation, no <main> landmark and no route
 * back into the site. On a reference site that is the worst page to strand
 * someone on, because a 404 here usually means a guessed URL — someone typing
 * /rail/metro/stations/br25/ or /rail/metro/lines/bannan-line/ — and those people know
 * exactly what they were looking for.
 *
 * So this offers the specific things they were most likely reaching for rather
 * than an apology.
 */

import type { Metadata } from 'next'
import Link from '@/components/LocaleLink'
import PageShell from '@/components/PageShell'
import BackLink from '@/components/BackLink'
import { NEUTRAL_LINE } from '@/lib/lines'
import { LINES_WITH_STATION_PAGES, STATIONS } from '@/lib/stations'
import { LINES } from '@/lib/lines'
import { SITE_NAME } from '@/lib/site'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''
const WORDMARK = { width: 246, height: 22 }

export const metadata: Metadata = {
  metadataBase: new URL(
    `${process.env.NEXT_PUBLIC_SITE_URL || 'https://jimmyrice9999.github.io'}${BASE_PATH}`,
  ),
  title: 'Page not found',
}

export default function NotFound() {
  const withPages = [...LINES_WITH_STATION_PAGES]
  const stationCount = STATIONS.filter((s) => withPages.includes(s.line)).length

  return (
    <html lang="en">
      <head>
        <style>{'@media print {.site-header { display: none !important; }}'}</style>
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <a href="/en/" className="site-title">
              <img
                className="wordmark"
                src={`${BASE_PATH}/wordmark.svg`}
                alt={SITE_NAME}
                width={WORDMARK.width}
                height={WORDMARK.height}
              />
            </a>
            <nav className="language-toggle language-toggle-header" aria-label="Language switcher">
              <a href="/zh-Hant/" lang="zh-Hant" aria-label="切換至繁體中文">繁體中文</a>
            </nav>
          </div>
        </header>
        <aside className="side-nav-rail">
          <nav className="language-toggle language-toggle-rail" aria-label="Language switcher, side rail">
            <a href="/zh-Hant/" lang="zh-Hant" aria-label="切換至繁體中文">繁體中文</a>
          </nav>
        </aside>
        <PageShell accent={NEUTRAL_LINE}>
      {/* The one page where an up-route matters most: a 404 is usually a
          guessed URL, so there is no history to go back to. */}
      <BackLink href="/" label="the home page" />
      <h1 className="page-title">Page not found</h1>
      <p className="page-summary">
        Nothing is published at this address. If you typed or guessed the URL, these are
        the most likely reasons.
      </p>

      <div className="page-body">
        <h2 className="section-heading">If you were after a station</h2>
        <p>
          Only the Wenhu Line has a page per station — {stationCount} of them, at{' '}
          <code>/rail/metro/stations/br01/</code> through <code>/rail/metro/stations/br24/</code>.
          Every other station on the network is in the data but has no page written about
          it yet, because linking to a page that does not exist would be worse than not
          linking at all.
        </p>
        <p>
          {/* The count of lines WITH STATIONS, which is not the count of lines:
              the Sanying Line is in the registry and its stations are not in
              MOTC's extract. Deriving it here rather than reusing LINES.length
              keeps the sentence true when the two numbers differ. */}
          All {STATIONS.length} stations across the{' '}
          {new Set(STATIONS.map((s) => s.line)).size} lines the data covers are listed on{' '}
          <Link href="/data/stations/">the station records page</Link>, with codes, names,
          coordinates and interchanges.
        </p>

        <h2 className="section-heading">If you were after a line</h2>
        <p>
          <Link href="/rail/metro/lines/wenhu-line/">The Wenhu Line</Link> is the only line
          written up so far. <Link href="/rail/network/">The network page</Link> covers all
          {' '}{LINES.length} with official colours, termini, lengths and interchanges.
        </p>

        <h2 className="section-heading">If you were after buses</h2>
        <p>
          <Link href="/bus/network/joint-operation/">The joint-operation network</Link> is
          written up — how Taipei&rsquo;s bus routes are numbered, coloured and paid for.
          The rest of <Link href="/bus/">the bus section</Link> is still being written.
        </p>

        <h2 className="section-heading">Everything else</h2>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rail/">Rail</Link> — lines, rolling stock, depots and operators
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
      </body>
    </html>
  )
}
