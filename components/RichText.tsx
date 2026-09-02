import { Fragment } from 'react'
import Link from '@/components/LocaleLink'
import { getLine } from '@/lib/lines'
import { getStation } from '@/lib/stations'
import { isPlain, tokenize, type TokenizeOptions } from '@/lib/text-tokens'
import { getLinkEntities } from '@/lib/content'

/**
 * Links every entity name found in a plain string.
 *
 * The same registry the Markdown auto-linker uses, applied to text that came
 * from frontmatter rather than from a page body. Matching rules kept
 * deliberately narrower than the prose linker's:
 *
 *   - longest name first, so "New Taipei Metro Corporation" wins over
 *     "New Taipei Metro";
 *   - whole words only, so "Muzha" inside "Muzha Depot" does not get linked
 *     separately and leave a half-underlined phrase;
 *   - **every** occurrence, not first-mention-only. A facts panel is a list of
 *     independent rows; "first mention" is a property of continuous prose and
 *     means nothing across a table.
 *
 * Han names are matched too — the registry carries station names in Chinese —
 * but without the word-boundary guard, which does not apply to a script that
 * does not space its words.
 */
/**
 * -- Scope, and the mis-link that made it necessary --------------------------
 *
 * The first version linked every registry name it found. On the Wenhu Line
 * page that turned the facts row
 *
 *     DEPOTS   Muzha, Neihu
 *
 * into two links pointing at **Muzha and Neihu STATIONS**. Both names are in
 * the registry as stations; the depot pages are titled "Muzha Depot" and
 * "Neihu Depot", so the bare word matched the station and nothing matched the
 * depot. A row labelled Depots that links to two stations is worse than the
 * plain text it replaced -- it is confidently wrong -- and four pages carried it.
 *
 * The fix is not to rewrite the frontmatter: those values are sourced, and
 * "Muzha" is what the source says. Instead the caller passes the row's own
 * label, and a row that says Depots matches only depot pages -- including by
 * their title with the type word dropped, so "Muzha" reaches "Muzha Depot".
 * A name that matches nothing in scope stays as plain text.
 *
 * A small fixed set of scopes rather than anything general: each one is here
 * because a real row on the site needed it.
 */
const SCOPES: { test: RegExp; prefix: string; suffix: RegExp }[] = [
  { test: /depot/i, prefix: '/rail/metro/depots/', suffix: /\s+Depot$/i },
  { test: /operator/i, prefix: '/rail/operators/', suffix: /$^/ },
  {
    test: /^(lines?|interchanges?|serves|connects)/i,
    prefix: '/rail/metro/lines/',
    suffix: /\s+Line$/i,
  },
]

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/*
 * Written with \u escapes rather than the literal ideographs. Spelled out, the
 * file's encoding becomes load-bearing for a regex, which is how a CJK range
 * quietly stops matching after a tool round-trips the file. CJK Unified
 * Ideographs plus the compatibility block, where some variant forms live.
 */
const isHan = (s: string) => /[⺀-鿿豈-﫿]/.test(s)

/*
 * Han names get no \b guard. Word boundaries are defined against [A-Za-z0-9_],
 * so a boundary never exists between two ideographs and the pattern would
 * never match.
 */
function buildMatcher(byName: Map<string, string>) {
  const sorted = [...byName.keys()].sort((a, b) => b.length - a.length)
  if (sorted.length === 0) return null
  const alternatives = sorted.map((n) => (isHan(n) ? escapeRe(n) : `\\b${escapeRe(n)}\\b`))
  return { pattern: new RegExp(`(${alternatives.join('|')})`, 'g'), byName }
}

const scopedMatchers = new Map<string, ReturnType<typeof buildMatcher>>()

function getMatcher(label?: string) {
  const scope = label ? SCOPES.find((s) => s.test.test(label)) : undefined
  const key = scope?.prefix ?? ''
  const cached = scopedMatchers.get(key)
  if (cached !== undefined) return cached

  const byName = new Map<string, string>()
  for (const entity of getLinkEntities()) {
    if (scope && !entity.href.startsWith(scope.prefix)) continue
    // First registration wins: getLinkEntities lists a page's title before its
    // aliases, and the title is the better destination for an ambiguous string.
    if (!byName.has(entity.name)) byName.set(entity.name, entity.href)
    if (scope) {
      const short = entity.name.replace(scope.suffix, '')
      if (short !== entity.name && short.length > 2 && !byName.has(short)) {
        byName.set(short, entity.href)
      }
    }
  }
  const built = buildMatcher(byName)
  scopedMatchers.set(key, built)
  return built
}

function EntityText({ children, label }: { children: string; label?: string }) {
  const matcher = getMatcher(label)
  if (!matcher) return <>{children}</>
  const { pattern, byName } = matcher
  pattern.lastIndex = 0
  const parts = children.split(pattern)
  if (parts.length === 1) return <>{children}</>
  return (
    <>
      {parts.map((part, i) => {
        const href = byName.get(part)
        return href ? (
          <Link className="entity-link" href={href} key={i}>
            {part}
          </Link>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      })}
    </>
  )
}

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
export default function RichText({
  children,
  link = false,
  label,
  badges = true,
  operator,
  ignoreCodes,
  stationCodes = true,
}: {
  children: string
  /**
   * Link any entity name in the string to its page — operators, lines, depots,
   * fleets, stations.
   *
   * **Opt-in, and it has to be.** `RichText` is used inside card titles, which
   * are themselves links, and an `<a>` inside an `<a>` is the exact bug run 2
   * spent a section on: the parser splits the nesting on load, React hydration
   * rebuilds it through DOM APIs, and the served markup and the live DOM end
   * up different. So this is off by default and switched on only where the
   * caller knows it is not inside a link — the facts panel and the spec table.
   *
   * Run 10's complaint was that every page names an operator, a line and a
   * depot in its facts panel, and none of them went anywhere. This is what
   * fixes that; the Markdown pipeline already does the same job for prose via
   * rehypeAutoLink, with the same registry.
   */
  link?: boolean
  /**
   * The field name this value sits under, e.g. "Depots" or "Operator".
   * Narrows which pages a name may resolve to — see the note on SCOPES.
   */
  label?: string
  /**
   * Whether a station-code-shaped token may become a station badge.
   *
   * ── The false badge this turns off ─────────────────────────────────────────
   *
   * A badge asserts "this is a real station", and the tokenizer decides from
   * the shape of the string plus a lookup. That is right in prose and in a
   * facts panel, and wrong wherever the surrounding subject is not the metro:
   * the brown-line feeder bus route titled `BR10 / 棕10` was rendering BR10 as
   * a brown station badge, which says the bus route is Jiannan Road station. It
   * is not; BR10 there is the route's own identifier and the collision with a
   * Wenhu station code is a coincidence of two numbering schemes.
   *
   * Off wherever the caller knows the string belongs to another numbering
   * scheme. Not a heuristic inside the tokenizer, because the tokenizer cannot
   * know what the page is about — only the caller can.
   */
  badges?: boolean
  /** Operator namespace for page fields whose line code is reused by another system. */
  operator?: string
  /** Code-shaped strings that belong to the page's other numbering scheme. */
  ignoreCodes?: ReadonlySet<string>
  /** False for page types such as bus vehicle models. */
  stationCodes?: boolean
}) {
  const tokens = tokenize(children, { ignoreCodes, stationCodes } satisfies TokenizeOptions)
  if (isPlain(tokens))
    return link ? <EntityText label={label}>{children}</EntityText> : <>{children}</>

  return (
    <>
      {tokens.map((token, i) => {
        if (token.kind === 'text') {
          return link ? (
            <EntityText key={i} label={label}>
              {token.value}
            </EntityText>
          ) : (
            <Fragment key={i}>{token.value}</Fragment>
          )
        }

        if (token.kind === 'han') {
          return (
            <span lang="zh-Hant" key={i}>
              {token.value}
            </span>
          )
        }

        const station = getStation(token.value, operator)
        const line = getLine(token.line, station?.operator ?? operator)
        if (!badges || !line || !station) return <Fragment key={i}>{token.value}</Fragment>

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
