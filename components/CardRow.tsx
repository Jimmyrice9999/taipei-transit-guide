import Link from 'next/link'
import LineIcon from './LineIcon'
import EntityIcon, { type EntityIconKind } from './EntityIcon'
import RichText from './RichText'
import { getLine } from '@/lib/lines'

/**
 * One row of an index — the shape every `.card-list` on the site uses.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS, AND WHY IT IS COLOURED
 *
 * Run 11, reported for the third time: not enough colour, "not enough by a
 * long shot". Twice before, the answer was that colour without meaning is
 * decoration. That was the right rule and it was being used to protect the
 * wrong pages.
 *
 * Screenshot the site before this change and the argument collapses on its
 * own: `/rail/metro/lines/` listed ten lines — the ten things on this site that MOST
 * obviously have a colour, whose colours are the network's own wayfinding
 * system, sampled from government open data and published on their own page —
 * in black text on white, with no badge, no rule, no mark of any kind. The
 * same for the fleets, which each work a named line, and the depots, which
 * each serve one. The colour was in the registry, on the line pages, on the
 * map, and nowhere a reader chooses what to read.
 *
 * That is not restraint. It is a lookup table the site declines to use.
 *
 * WHAT CARRIES WHAT
 *
 * The colour is never alone and is never the thing you have to read:
 *
 *   the code badge   the letters, which is what the signage system uses
 *   the line name    printed in words at the right of the row
 *   the icon         only on rows that ARE a line, and it says what kind of
 *                    railway rather than which one — see LineIcon
 *   the rule         5px of the official colour down the left edge, with a
 *                    1px hairline of the text-safe ink so the pale lines
 *                    (Circular yellow, Zhonghe–Xinlu orange) have an edge
 *
 * Delete every colour on the row and it still reads. That is the test the
 * previous two arguments were actually about, and this passes it.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function CardRow({
  href,
  title,
  summary,
  line: lineCode,
  operator,
  entityKind,
  /** True on an index OF lines, where the row's subject is the line itself. */
  isLine = false,
  /**
   * False where the row's title and summary belong to another numbering
   * scheme — a bus route called BR10 is not station BR10. See the note on
   * `badges` in RichText.
   */
  badges = true,
  /**
   * The keys an in-page filter matches this row on, written to `data-search`.
   *
   * Explicit rather than read from the row's rendered text: the summary line
   * carries an operator count and a municipality, and a filter that matched
   * those would return rows for "1" and "Taipei". See components/RouteFilter.
   */
  search,
}: {
  href: string
  title: React.ReactNode
  summary?: string
  line?: string
  operator?: string
  entityKind?: EntityIconKind | null
  isLine?: boolean
  badges?: boolean
  search?: string
}) {
  const line = getLine(lineCode, operator)

  return (
    <li
      data-line={line ? line.code : undefined}
      data-search={search}
      style={
        line
          ? ({ '--row-map': line.map, '--row-ink': line.ink } as React.CSSProperties)
          : undefined
      }
    >
      <Link href={href}>
        {/*
          The icon is inside the row link, so it must not be a link itself —
          LineIcon renders a bare <svg> for exactly this reason. Same rule that
          makes StationBadge take `linked={false}` inside the adjacent-station
          cards.
        */}
        {isLine && line && <LineIcon code={line.code} operator={line.operator} size={30} className="card-icon" />}
        {!isLine && entityKind && <EntityIcon kind={entityKind} size={30} className="card-icon" />}
        <span className="card-body">
          <span className="card-title">
            {typeof title === 'string' ? <RichText badges={badges}>{title}</RichText> : title}
          </span>
          {summary && (
            <span className="card-desc">
              <RichText badges={badges}>{summary}</RichText>
            </span>
          )}
        </span>
        <span className="card-meta">
          {line && (
            <>
              {/* An inert span, not a LineBadge: this whole row is already a
                  link and an <a> inside an <a> is invalid. */}
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
              {/* The words, so the colour and the badge are never the only
                  statement of which line this is. */}
              {isLine ? (
                <span className="card-line-name" lang="zh-Hant">
                  {line.nameZh}
                </span>
              ) : (
                <span className="card-line-name">{line.name} Line</span>
              )}
            </>
          )}
          <span className="card-arrow" aria-hidden="true">
            →
          </span>
        </span>
      </Link>
    </li>
  )
}
