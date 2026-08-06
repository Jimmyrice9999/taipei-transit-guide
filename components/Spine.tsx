import Link from 'next/link'
import { getLine, type Line } from '@/lib/lines'
import { getStationHref, type Station } from '@/lib/stations'

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
  railVerb = 'Serves',
}: {
  variant: 'map' | 'rail'
  line: Line
  stations: Station[]
  /** Station codes this page is about. */
  marked: Set<string>
  /** Depot junctions, drawn from the depot pages' own `spine:` frontmatter. */
  depots?: DepotMark[]
  /**
   * The verb in the rail key: a depot or a fleet *serves* stations, but a
   * history article *concerns* them. Wrong verb, wrong claim — the same
   * standard the site holds its figures to.
   */
  railVerb?: string
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

              {variant === 'map' && (
                <>
                  <span className="spine-code">{station.code}</span>
                  <span className="spine-name">
                    {/* The strip map is how people scan a line, so it is the
                        most useful place for a station to be reachable from. */}
                    {getStationHref(station.code) ? (
                      <Link href={getStationHref(station.code)!}>{station.name}</Link>
                    ) : (
                      station.name
                    )}
                    {station.interchange.length > 0 && (
                      <span className="spine-ix">
                        {/*
                          Real badges in the interchanging line's own colours,
                          not a spine-specific treatment. The spine has to stay
                          the badge system arranged along an axis; the moment it
                          grows its own vocabulary for line codes it becomes a
                          second device competing with the badges.
                        */}
                        {station.interchange.map((code) => {
                          const other = getLine(code)
                          if (!other) return null
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
                              {code}
                            </span>
                          )
                        })}
                      </span>
                    )}
                  </span>
                </>
              )}

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
            {marked.size === stations.length
              ? `${railVerb} all ${stations.length} stations`
              : `${railVerb} ${marked.size} of ${stations.length} stations`}
          </span>
        </div>
      )}
    </nav>
  )
}
