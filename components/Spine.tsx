import Link from 'next/link'
import { getLine, type Line } from '@/lib/lines'
import { STATIONS, getStationHref, type Station } from '@/lib/stations'

/**
 * The guideway spine — the line itself, run down the page.
 *
 * Two variants, because a line page and a rolling stock page have genuinely
 * different information shapes:
 *
 *   map   The full strip map, with names, interchanges and structure. On a line
 *         page this IS the station list — which is why the Markdown no longer
 *         carries a station table. It was a second copy of lib/stations.ts.
 *
 *   rail  A narrow marker rail: ticks only, no names, showing which stretch of
 *         the line the page concerns. For rolling stock and depots.
 *
 * Deliberately NOT its own visual language. Same station codes, same line
 * colour, same contrast rules as the inline badges — the spine is the badge
 * system arranged along an axis, not a second device competing with it.
 */

export type DepotMark = { at: string; title: string; href: string }

export default function Spine({
  variant,
  line,
  stations,
  marked,
  depots = [],
  railNote,
}: {
  variant: 'map' | 'rail'
  line: Line
  stations: Station[]
  /** Station codes this page is about. */
  marked: Set<string>
  /** Depot junctions, drawn from the depot pages' own `spine:` frontmatter. */
  depots?: DepotMark[]
  /**
   * Overrides the rail key's wording. The default says "Serves N of M
   * stations", which is a fleet's relationship to the line — a depot's is
   * "joins it here", and saying "serves" there is a small false claim in the
   * page furniture. The page decides; this component just refuses to guess.
   */
  railNote?: string
}) {
  if (stations.length === 0) return null

  const depotsAt = new Map<string, DepotMark[]>()
  for (const depot of depots) {
    if (!depotsAt.has(depot.at)) depotsAt.set(depot.at, [])
    depotsAt.get(depot.at)!.push(depot)
  }

  const hasUnknown = stations.some((s) => s.structure === 'unknown')

  return (
    <nav
      className={`spine spine-${variant}`}
      data-spine=""
      aria-label={`${line.name} Line strip map`}
    >
      {variant === 'map' && <div className="spine-head">The line</div>}

      <ol className="spine-track">
        {stations.map((station) => {
          const isMarked = marked.has(station.code)
          const stops = depotsAt.get(station.code) ?? []

          return (
            <li
              key={station.code}
              className="spine-stop"
              data-station={station.code}
              data-marked={isMarked ? '' : undefined}
              data-structure={station.structure}
            >
              <span className="spine-tick" aria-hidden="true" />

              {variant === 'map' &&
                (() => {
                  /*
                   * One linked unit per station: its own code, its interchange
                   * codes concatenated, then the name — the way LTG sets a
                   * station list, and one tap target instead of several small
                   * ones. The interchange codes ride inside the same link
                   * because they are facts about this station, not separate
                   * destinations; each still wears its own line's colours, so
                   * the spine stays the badge system arranged along an axis.
                   */
                  const codes = (
                    <span className="spine-codes">
                      <span
                        className="badge badge-mini"
                        style={
                          {
                            '--badge-bg': line.badgeBg,
                            '--badge-fg': line.badgeFg,
                          } as React.CSSProperties
                        }
                      >
                        {station.code}
                      </span>
                      {station.interchange.map((code) => {
                        const other = getLine(code)
                        if (!other) return null
                        /*
                         * The interchange pill carries the *station's* code on
                         * the other line — BL12, not BL — because that is the
                         * code on the signs a transferring rider follows. The
                         * registry lists the same station once per line under
                         * the same name, which is what makes this resolvable.
                         */
                        const twin = STATIONS.find(
                          (s) => s.line === code && s.name === station.name,
                        )
                        return (
                          <span
                            className="badge badge-mini"
                            key={code}
                            title={`Interchange with the ${other.name} Line`}
                            style={
                              {
                                '--badge-bg': other.badgeBg,
                                '--badge-fg': other.badgeFg,
                              } as React.CSSProperties
                            }
                          >
                            {twin?.code ?? code}
                          </span>
                        )
                      })}
                    </span>
                  )

                  const href = getStationHref(station.code)
                  return href ? (
                    <Link className="spine-station" href={href}>
                      {codes}
                      <span className="spine-name">{station.name}</span>
                    </Link>
                  ) : (
                    <span className="spine-station">
                      {codes}
                      <span className="spine-name">{station.name}</span>
                    </span>
                  )
                })()}

              {variant === 'rail' && <span className="sr-only">{station.code} {station.name}</span>}

              {variant === 'map' &&
                stops.map((depot) => (
                  <Link className="spine-depot" href={depot.href} key={depot.href}>
                    <span className="spine-depot-mark" aria-hidden="true" />
                    {depot.title}
                  </Link>
                ))}
            </li>
          )
        })}
      </ol>

      {/*
        A deliberate terminus. Without it the column simply stops, which reads
        as the page having run out rather than the line having ended.
      */}
      <div className="spine-terminus" aria-hidden="true">
        <span className="spine-terminus-cap" />
        {variant === 'map' && <span className="spine-terminus-label">end of line</span>}
      </div>

      {variant === 'map' && (
        <div className="spine-key">
          <span className="spine-key-item" data-structure="elevated">
            elevated
          </span>
          {hasUnknown && (
            <span className="spine-key-item" data-structure="unknown">
              not established
            </span>
          )}
        </div>
      )}

      {/* "13 of 24" alone told a reader nothing about what was being counted. */}
      {variant === 'rail' && (
        <div className="spine-key spine-key-rail">
          <span className="spine-key-item" data-marked="">
            {railNote ??
              (marked.size === stations.length
                ? `Serves all ${stations.length} stations`
                : `Serves ${marked.size} of ${stations.length} stations`)}
          </span>
        </div>
      )}
    </nav>
  )
}
