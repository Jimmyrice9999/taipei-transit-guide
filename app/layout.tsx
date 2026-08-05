/**
 * The shell wrapped around every page: <html>, the header, the footer.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { Zilla_Slab, Inter, IBM_Plex_Mono } from 'next/font/google'
import SiteNav from '@/components/SiteNav'
import { getSections } from '@/lib/content'
import './globals.css'

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
 */
const zilla = Zilla_Slab({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-zilla',
  display: 'swap',
})

// Left variable deliberately. Pinning weight: ['400','500','600'] was measured
// and changes nothing — Next points all three weights at the same variable file
// and only grows the CSS. See `npm run weigh`.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
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

const HAN_FONT_FACE = `
@font-face {
  font-family: 'TTG Han';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  size-adjust: 94%;
  unicode-range: ${HAN_RANGE};
  src: url('${BASE_PATH}/fonts/noto-sans-tc-subset-400.woff2') format('woff2');
}
@font-face {
  font-family: 'TTG Han';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  size-adjust: 82%;
  unicode-range: ${HAN_RANGE};
  src: url('${BASE_PATH}/fonts/noto-sans-tc-subset-700.woff2') format('woff2');
}
:root { --font-han: 'TTG Han'; }
`

export const metadata: Metadata = {
  title: {
    default: 'Taipei Transit Guide',
    template: '%s — Taipei Transit Guide',
  },
  description:
    'An English-language reference for public transport in Taipei: metro lines, rolling stock, depots and bus routes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Read at build time, so the nav always matches the /content folder.
  const sections = getSections()

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
      </head>
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="site-title">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="wordmark"
                src={`${BASE_PATH}/wordmark.svg`}
                alt="Taipei Transit Guide"
                width={WORDMARK.width}
                height={WORDMARK.height}
              />
            </Link>
            <SiteNav items={sections.map((s) => ({ href: s.href, title: s.title }))} />
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container">
            <p>
              An independent, non-commercial reference site. Not affiliated with Taipei
              Rapid Transit Corporation, Taipei City Government, or any bus operator.
              Line colours are community-sourced and pending verification against TRTC's
              official route map.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
