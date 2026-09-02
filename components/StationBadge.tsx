import Link from '@/components/LocaleLink'
import { getLine } from '@/lib/lines'
import { getStation, getStationHref } from '@/lib/stations'

/**
 * A station code badge, rendered from a code alone.
 *
 * The Markdown pipeline produces these from prose automatically; this is the
 * React equivalent, for pages built from data rather than Markdown.
 *
 * Links to the station's page where one exists. Only Wenhu's stations have
 * pages, so a BL15 badge stays inert while BR10 becomes a link — which is
 * honest, and avoids training readers to click badges that go nowhere.
 *
 * The line is taken from the station registry rather than parsed off the code,
 * so branch codes like R22A and G03A resolve correctly instead of being guessed
 * at with a regular expression.
 */
export default function StationBadge({
  code,
  operator,
  linked = true,
}: {
  code: string
  operator?: string
  /**
   * Pass false when the badge sits inside another link.
   *
   * An <a> inside an <a> is invalid HTML. What actually happened was worse
   * than invalid: the HTML parser splits the nesting on load, then React
   * hydration reconstructs it through DOM APIs — so the served page and the
   * hydrated page have different structures (a mismatch on all 24 station
   * pages), and the live DOM ends up with the nesting the parser exists to
   * prevent. The adjacent-station nav was doing this: the whole card is a
   * link, and the badge inside it was another one pointing at the same place.
   */
  linked?: boolean
}) {
  const station = getStation(code, operator)
  const line = station ? getLine(station.line, station.operator) : undefined

  if (!station || !line) {
    // Never render a badge for a station that is not in the registry: a badge
    // asserts the station exists.
    return <span className="badge-absent">{code}</span>
  }

  const style = {
    '--badge-bg': line.badgeBg,
    '--badge-fg': line.badgeFg,
  } as React.CSSProperties

  const label = `${station.code} ${station.name}`
  const href = linked ? getStationHref(code, station.operator) : null

  if (!href) {
    return (
      <span className="badge" title={label} style={style}>
        {code}
      </span>
    )
  }

  return (
    <Link className="badge badge-link" href={href} title={label} style={style}>
      {code}
    </Link>
  )
}
