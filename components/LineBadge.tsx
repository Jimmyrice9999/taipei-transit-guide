import Link from '@/components/LocaleLink'
import { getLine } from '@/lib/lines'
import { getLinePageHref } from '@/lib/content'

/**
 * A LINE code badge — "BR", "BL", "V" — linking to that line's page.
 *
 * Distinct from `StationBadge`, which renders a STATION code ("BR13") and
 * links to a station page. They look identical on purpose, because they are
 * the same token in the real signage system, but they resolve to different
 * things and conflating them is how "BR1" once got a badge on the page whose
 * whole subject is that BR1 is not a station code.
 *
 * Run 10, reported directly: on the network page, clicking "BR" must go to the
 * Wenhu Line. It did nothing. The badge was an inert `<span>` on the site's
 * most data-forward page — nine lines listed by code, and the code was the one
 * element of the row that was not a link.
 *
 * Falls back to an inert span when the line has no page, for the same reason
 * `StationBadge` does: linking to a page that does not exist trains readers to
 * stop clicking badges, which costs more than the missing link.
 */
export default function LineBadge({
  code,
  operator,
  linked = true,
  title,
  className = '',
}: {
  code: string
  /** Optional operator namespace when a bare code is shared by systems. */
  operator?: string
  /** Pass false when the badge sits inside another link — `<a>` in `<a>` is invalid. */
  linked?: boolean
  /** Overrides the tooltip. Defaults to the line's own name. */
  title?: string
  /** Extra classes, e.g. `badge-mini` for the interchange pills. */
  className?: string
}) {
  const line = getLine(code, operator)
  if (!line) return <span className={`badge-absent ${className}`.trim()}>{code}</span>

  const style = {
    '--badge-bg': line.badgeBg,
    '--badge-fg': line.badgeFg,
  } as React.CSSProperties

  const label = title ?? `${line.name} Line`
  const href = linked ? getLinePageHref(code, line.operator) : null

  if (!href) {
    return (
      <span className={`badge ${className}`.trim()} title={label} style={style}>
        {line.code}
      </span>
    )
  }

  return (
    <Link
      className={`badge badge-link ${className}`.trim()}
      href={href}
      title={label}
      style={style}
    >
      {line.code}
    </Link>
  )
}
