import { Fragment } from 'react'
import { getLine } from '@/lib/lines'
import { getStation } from '@/lib/stations'
import { isPlain, tokenize } from '@/lib/text-tokens'

/**
 * Renders a plain string with station codes as badges and Chinese tagged
 * `lang="zh-Hant"`.
 *
 * The Markdown pipeline does this for page bodies. This does the same for text
 * that comes from frontmatter — page summaries and `facts:` values — so
 * "Taipei Zoo (BR01)" in a facts row looks the same as it does in a table, and
 * 木柵機廠 gets the right glyphs in both places.
 *
 * Unlike the Markdown pipeline, an unrecognised code is rendered as plain text
 * without a warning: frontmatter is validated on the page body pass, and
 * warning twice for the same file would be noise.
 *
 * ── The bug this comment used to describe incorrectly ────────────────────────
 * It said "rendered as plain text", and it was not. The check was on the LINE
 * — `getLine('BR')` resolves — so any `<known prefix><digits>` string in
 * frontmatter got a badge whether or not it was a station. `BR1` rendered as a
 * brown badge titled "BR1", on a page whose whole subject is that BR1 is an
 * engineering number and not a station code.
 *
 * A badge asserts "this is a real station". That is the guarantee the README
 * sells the badge system on, and it is the same failure `badge-absent` was
 * introduced to prevent on /data/stations. The station now has to resolve too.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function RichText({ children }: { children: string }) {
  const tokens = tokenize(children)
  if (isPlain(tokens)) return <>{children}</>

  return (
    <>
      {tokens.map((token, i) => {
        if (token.kind === 'text') return <Fragment key={i}>{token.value}</Fragment>

        if (token.kind === 'han') {
          return (
            <span lang="zh-Hant" key={i}>
              {token.value}
            </span>
          )
        }

        const line = getLine(token.line)
        const station = getStation(token.value)
        if (!line || !station) return <Fragment key={i}>{token.value}</Fragment>

        return (
          <span
            key={i}
            className="badge"
            title={`${token.value} ${station.name}`}
            style={
              {
                '--badge-bg': line.badgeBg,
                '--badge-fg': line.badgeFg,
              } as React.CSSProperties
            }
          >
            {token.value}
          </span>
        )
      })}
    </>
  )
}
