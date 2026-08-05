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
        if (!line) return <Fragment key={i}>{token.value}</Fragment>

        const station = getStation(token.value)
        return (
          <span
            key={i}
            className="badge"
            title={station ? `${token.value} ${station.name}` : token.value}
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
