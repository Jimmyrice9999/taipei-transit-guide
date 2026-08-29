/**
 * The shell wrapped around every page: <html>, the header, the footer.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Zilla_Slab, Inter, IBM_Plex_Mono } from 'next/font/google'
import SiteNav from '@/components/SiteNav'
import SideNavRail from '@/components/SideNavRail'
import SiteSearch from '@/components/SiteSearch'
import { getNavTree } from '@/lib/nav'
import { PROVENANCE, STATIONS } from '@/lib/stations'
import { operatorCodesFor } from '@/lib/operators'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'
import JsonLd from '@/components/JsonLd'
import { websiteSchema } from '@/lib/structured-data'
import meta from '@/data/tdx/meta.json' with { type: 'json' }
import './globals.css'

/**
 * MOTC's own oldest last-updated stamp across the fetched datasets, which is
 * older than the date we retrieved them. Showing only the retrieval date would
 * imply the data is fresher than it is.
 */
const SOURCE_UPDATED = (() => {
  const operators = Object.values(
    (meta as { operators?: Record<string, { datasets: Record<string, { srcUpdatedOldest?: string | null }> }> })
      .operators ?? {},
  )
  const dates = operators
    .flatMap((op) => Object.values(op.datasets))
    .map((d) => d.srcUpdatedOldest)
    .filter((d): d is string => typeof d === 'string')
    .sort()
  return dates[0] ?? 'unknown'
})()

/**
 * Every operator actually behind a station page, not just whichever one
 * `npm run stations` happened to fetch first. See `operatorCodesFor`.
 */
const FOOTER_OPERATORS = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(
  operatorCodesFor(STATIONS.map((s) => s.operator)),
)

/*
 * The wordmark is a static file, not inline SVG. Drawn inline it put 700
 * <circle> elements into every page — 28% of each page's HTML, and duplicated
 * again into the client-navigation payloads. As a file it is fetched once and
 * cached for the whole visit.
 *
 * Regenerate with `npm run wordmark`; that script prints these dimensions if the
 * text or pitch changes. They are set explicitly so the header does not shift as
 * the image loads.
 */
const WORDMARK = { width: 246, height: 22 }

/*
 * next/font downloads these at build time and serves them from our own domain —
 * no request to Google at runtime, and no layout shift while they load.
 *
 * All three sit above the fold somewhere on the site (Inter is body text and
 * the nav, Zilla Slab is every page's <h1>, IBM Plex Mono is the station-code
 * badge and the eyebrow labels), and all three are declared in the root
 * layout, so next/font preloads all three on every route already — the
 * network tab shows `<link rel="preload" as="font">` for each before this
 * change did anything.
 *
 * `display: 'swap'` was still visible as a flash: the fallback face paints
 * first no matter how fast the real font arrives, then swaps the instant it
 * does. With the font preloaded, `optional` is the pairing that actually
 * removes the flash — the browser waits a very short beat for the download it
 * already kicked off, uses the real font if that beat is enough (true for a
 * same-origin, preloaded, few-KB subset on anything but a very slow first
 * load), and otherwise commits to the fallback for that paint rather than
 * swapping in later. `adjustFontFallback` (on by default) keeps the fallback
 * metric-matched, so `optional` costs no layout shift either way.
 */
const zilla = Zilla_Slab({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-zilla',
  display: 'optional',
})

// Left variable deliberately. Pinning weight: ['400','500','600'] was measured
// and changes nothing — Next points all three weights at the same variable file
// and only grows the CSS. See `npm run weigh`.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-plex-mono',
  display: 'optional',
})

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/*
 * Traditional Chinese.
 *
 * No `local()`. Every reader gets the same subset, deliberately.
 *
 * Using the reader's system font would save a 2.5 KB download, but it would mean
 * Chinese renders in PingFang TC on macOS, Microsoft JhengHei on Windows and
 * Noto on Android — three different sets of metrics. size-adjust is a single
 * number, so it can only be correct against one font. Shipping ours makes the
 * value exact for everyone and makes what you see while writing identical to
 * what a reader gets. At 2.5 KB — less than a small logo — that determinism is
 * worth more than the saving.
 *
 * The subset holds only the Han characters this site actually uses; run
 * `npm run fonts` after adding Chinese to a page.
 *
 * font-display: block, not swap. The fallback here is whatever CJK font the
 * device has, which on Android is typically the Simplified cut — so swapping
 * would flash visibly wrong glyph variants before correcting itself. Blocking
 * briefly on a 2.5 KB file is the better trade.
 *
 * size-adjust makes Han sit optically level with Latin. The values below are
 * measured, not guessed — run `npm run metrics` to re-derive them.
 *
 * Noto Sans TC draws Han to fill 91.7% of the em, while Inter's cap height is
 * 72.8% and Zilla Slab's only 65.0%. So at 100% a Han glyph is already 1.26x the
 * height of a capital H in body text, and 1.44x in a heading — it reads
 * oversized, not small. These values scale it DOWN to about 1.18x cap height:
 * still larger than Latin, because Han is dense and needs the room, but no
 * longer looming over it.
 *
 * Body stops at 94% rather than going further, because the smallest Han context
 * is a 14.5px table cell, where 94% leaves ~12.5px of ink for 16-stroke
 * characters like 機. Below roughly 12px those strokes start to merge on a phone.
 * Headings have no such floor, so they take the full correction.
 *
 * `unicode-range` binds these rules to Han only, so Latin always stays Inter —
 * and it must match HAN_RANGES in scripts/subset-cjk.mjs and HAN_PATTERN in
 * lib/text-tokens.ts.
 */
const HAN_RANGE =
  'U+2E80-2FDF, U+3000-303F, U+3100-312F, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF, U+FF00-FFEF'

/**
 * Builds the two @font-face rules for one Han subset.
 *
 * Exported so /data/stations and line station pages can declare their own
 * families from the same definition. The former renders 200-odd station names;
 * the latter use one reusable pair per line, so a station page does not carry
 * glyphs belonging to unrelated lines. See scripts/subset-cjk.mjs.
 *
 * The size-adjust values are per weight and are measured, not guessed — they
 * belong to the typeface, not to the subset, so both families use the same ones.
 */
export function hanFontFace(family: string, file: (weight: 400 | 700) => string) {
  return `
@font-face {
  font-family: '${family}';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  size-adjust: 94%;
  unicode-range: ${HAN_RANGE};
  src: url('${BASE_PATH}/fonts/${file(400)}') format('woff2');
}
@font-face {
  font-family: '${family}';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  size-adjust: 82%;
  unicode-range: ${HAN_RANGE};
  src: url('${BASE_PATH}/fonts/${file(700)}') format('woff2');
}
`
}

const HAN_FONT_FACE = `${hanFontFace('TTG Han', (w) => `noto-sans-tc-subset-${w}.woff2`)}
:root { --font-han: 'TTG Han'; }
`

/**
 * Site-wide metadata defaults.
 *
 * `metadataBase` is what makes every relative URL below resolve to an absolute
 * one — OpenGraph and canonical tags are meaningless relative, because the
 * consumer is another server, not the browser. Without it Next emits relative
 * og:image values and every share preview breaks.
 *
 * Each page overrides `title`, `description` and `alternates.canonical`; the
 * rest is inherited, so a new page gets correct social metadata by default
 * rather than by remembering to add it.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  /*
   * Deliberately NO default `alternates.canonical` here.
   *
   * A site-wide default of '/' is inherited by any page that does not set its
   * own, which means a forgotten canonical does not merely go missing — it
   * actively tells search engines that page is really the homepage and should
   * not be indexed. /about and /bus were both doing exactly that. Absent is a
   * recoverable mistake; wrong is not, and the test suite fails on either.
   */
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
  },
  twitter: {
    // A summary card with a large image: the OG images are 1200×630 line
    // colour panels, which are worth showing at size rather than as a thumbnail.
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'reference',
}

/**
 * Data is an explicit nav item, not a content folder: it is generated from
 * the TDX records rather than written in Markdown, so it has no submenu.
 * Shared between the top-bar popover and the wide-viewport rail — one list,
 * so the two navs can never disagree about what's in it.
 */
const EXTRA_NAV_ITEMS = [
  { href: '/regions/', title: 'Regions' },
  { href: '/data/', title: 'Data' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Read at build time, so the nav always matches the /content folder.
  const navTree = getNavTree()

  return (
    /*
     * lang="en" because the page is English. Chinese is tagged per-run with
     * lang="zh-Hant" by the Markdown pipeline, which is what actually drives
     * glyph selection; declaring the whole document Chinese would make screen
     * readers announce all the English prose with Chinese pronunciation.
     */
    <html lang="en" className={`${zilla.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: HAN_FONT_FACE }} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="wordmark"
                src={`${BASE_PATH}/wordmark.svg`}
                alt={SITE_NAME}
                width={WORDMARK.width}
                height={WORDMARK.height}
              />
            </Link>
            <SiteNav sections={navTree} extra={EXTRA_NAV_ITEMS} />
            {/* Last in the bar and last in the tab order: the sections are the
                primary navigation and search is the shortcut past them. */}
            <SiteSearch />
          </div>
        </header>

        {/*
          Two navs, one tree (lib/nav.ts's `navTree`): SiteNav's popover stays
          the top bar at every width; SideNavRail is CSS-only revealed from
          ~1280px, in a two-column grid with `{children}`'s own `<main>` — see
          `.layout-shell` in globals.css. Below that width `.layout-shell` is
          a plain block and the rail is `display: none`, i.e. today's layout,
          unchanged.
        */}
        <div className="layout-shell">
          <SideNavRail sections={navTree} extra={EXTRA_NAV_ITEMS} />
          {children}
        </div>

        <footer className="site-footer">
          <div className="container">
            {/*
              The last sentence used to read "Line colours are community-sourced
              and pending verification against TRTC's official route map." That
              stopped being true when the palette moved to TDX, and it sat in the
              footer of every page contradicting /data, lib/lines.ts and the
              design reference — a disclaimer that undersold the work and told
              readers the opposite of the truth on 45 pages at once.
            */}
            <p>
              An independent, non-commercial reference site. Not affiliated with any
              transit operator or government body in Taiwan. Line colours are the
              official values published by each operator through Taiwan MOTC's open
              data platform. <Link href="/about/">About this site</Link>.
            </p>
            {/* Where the station data came from, and how current it is. Readers
                of a reference site are entitled to know both. */}
            <p className="footer-source">
              {PROVENANCE.source === 'tdx' ? (
                <>
                  Station names, codes and sequence from{' '}
                  <a href={PROVENANCE.sourceUrl} rel="noreferrer">
                    TDX Transport Data eXchange
                  </a>
                  , Ministry of Transportation and Communications, operators{' '}
                  {FOOTER_OPERATORS}. Government open data.
                  {PROVENANCE.fetchedAt && (
                    <> Retrieved {PROVENANCE.fetchedAt.slice(0, 10)};</>
                  )}{' '}
                  {/* The retrieval date flatters the data — MOTC's own records
                      are older than that, and a reader deserves the real one. */}
                  source last updated {SOURCE_UPDATED}.{' '}
                  The 12 Sanying station records absent from TDX are sourced directly to
                  New Taipei Metro and government publications on their pages.{' '}
                  <Link href="/data/provenance/">Provenance</Link>.
                </>
              ) : (
                <>
                  Station data is hand-transcribed and not yet verified against{' '}
                  <a href={PROVENANCE.sourceUrl} rel="noreferrer">
                    TDX
                  </a>
                  , the Ministry of Transportation and Communications open data platform.
                </>
              )}
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
