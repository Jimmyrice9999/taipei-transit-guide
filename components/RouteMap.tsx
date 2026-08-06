import { makeProjection, metres, type Point } from '@/lib/geometry'
import MapInteraction from './MapInteraction'

/**
 * A geographic map of one or more lines, drawn from MOTC route geometry.
 *
 * The real surveyed alignment, not a schematic — the curve through the hills
 * above Muzha is the curve the track actually takes. Computed at build time and
 * emitted as static SVG: no tiles, no runtime requests, nothing that breaks a
 * static export.
 *
 * The cartographic furniture — graticule, scale bar, north point — is derived
 * from the same projection the lines use, so it describes this dataset rather
 * than decorating it. That is what makes it read as a map rather than a plotted
 * chart, without needing basemap data we cannot source honestly.
 *
 * Deliberately NOT a copy of any operator's map. Line colours are the published
 * official values; everything else is our own geometry and layout.
 */

export type MapLine = {
  code: string
  name: string
  colour: string
  paths: Point[][]
  /** Badge colours, needed when the line is labelled on the map itself. */
  badgeBg?: string
  badgeFg?: string
}

export type MapStation = {
  code: string
  name: string
  nameZh?: string
  lat: number
  lon: number
  colour: string
  isTerminus: boolean
  isInterchange: boolean
  /** When present the station becomes a link, and so keyboard reachable. */
  href?: string
  highlighted?: boolean
}

/**
 * Radius of the invisible tap target around each station dot, in viewBox units.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * This used to say "touch targets must be ~24px regardless of how small the dot
 * is drawn", with r=12. That was wrong, and measurably so: these are viewBox
 * units, and the SVG is drawn at `width: 100%`, so they scale with the
 * container. On a 390px phone the line map renders at 0.53×, which turns a
 * nominal 24px target into **12.8 CSS px** — barely half of WCAG 2.2 SC 2.5.8
 * (Target Size (Minimum), Level AA, 24×24 CSS px).
 *
 * r=16 gives a 32-unit target, which is as large as the geometry allows: the
 * closest pair of stations on the line map, BR02 and BR03, sit 38 units apart,
 * so anything wider would make neighbouring targets overlap and turn a precise
 * tap into a coin flip. That takes a phone to ~17 CSS px and a desktop to 55.
 *
 * It still does not reach 24 CSS px on a phone, and cannot: the constraint is
 * station spacing, not the constant. What makes that acceptable is SC 2.5.8's
 * "Equivalent" exception — on a line page the spine beside the prose lists
 * every station as a full-size text link, and on the network page the
 * interchange list and termini do the same. The map is a second route to a
 * destination the page already offers properly, not the only one.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const HIT_RADIUS = 16

export default function RouteMap({
  lines,
  stations,
  width = 640,
  padding = 40,
  labels = 'key',
  lineLabels = false,
  caption,
}: {
  lines: MapLine[]
  stations: MapStation[]
  width?: number
  padding?: number
  /** 'key' labels termini, interchanges and any highlighted station. */
  labels?: 'key' | 'none'
  /**
   * Draw each line's code badge at both ends of its longest run.
   *
   * Required wherever more than one line is drawn, and not decoration: with
   * seven lines and no labels, colour was the *only* thing telling them apart.
   * Simulating protanopia puts Bannan `#0A59AE` and the Airport MRT `#8246AF`
   * at ΔE 0.8 — indistinguishable — and deuteranopia puts Wenhu and
   * Tamsui–Xinyi at 4.9. A reader with either could not identify a line on the
   * map at all, which is WCAG 1.4.1.
   *
   * The fix is the badge system rather than a new device: dashed or dotted
   * strokes would have distinguished the lines while making the map harder to
   * read for everyone, and would have invented a second visual vocabulary for
   * line identity when the site already has one.
   */
  lineLabels?: boolean
  caption?: string
}) {
  const allPoints: Point[] = [
    ...lines.flatMap((l) => l.paths.flat()),
    ...stations.map((s) => [s.lon, s.lat] as Point),
  ]
  if (allPoints.length === 0) return null

  const projection = makeProjection(allPoints, { width, padding })
  const { project, height } = projection

  const lons = allPoints.map((p) => p[0])
  const lats = allPoints.map((p) => p[1])
  const bounds = {
    minLon: Math.min(...lons),
    maxLon: Math.max(...lons),
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
  }

  /* ---- graticule: real coordinates, at the interval the extent warrants ---- */
  const step = bounds.maxLat - bounds.minLat > 0.12 ? 0.05 : 0.02
  const round = (v: number) => Math.ceil(v / step) * step

  const latLines: number[] = []
  for (let lat = round(bounds.minLat); lat < bounds.maxLat; lat += step) latLines.push(lat)
  const lonLines: number[] = []
  for (let lon = round(bounds.minLon); lon < bounds.maxLon; lon += step) lonLines.push(lon)

  /* ---- scale bar: a round number of kilometres in projected pixels ---- */
  const kmInPixels = (() => {
    const a: Point = [bounds.minLon, bounds.minLat]
    const b: Point = [bounds.maxLon, bounds.minLat]
    const spanKm = metres(a, b) / 1000
    const spanPx = project(b)[0] - project(a)[0]
    return spanPx / spanKm
  })()

  const scaleKm = [10, 5, 2, 1].find((km) => km * kmInPixels < width * 0.32) ?? 1
  const scalePx = scaleKm * kmInPixels

  const labelled =
    labels === 'none'
      ? stations.filter((s) => s.highlighted)
      : stations.filter((s) => s.isTerminus || s.isInterchange || s.highlighted)

  const placed = labelled
    .map((station) => {
      const [x, y] = project([station.lon, station.lat])
      return { station, x, y, labelY: y }
    })
    .sort((a, b) => a.y - b.y)

  // Push labels apart vertically so they never overlap; a leader line connects
  // any label that had to move.
  const MIN_GAP = 13
  for (let i = 1; i < placed.length; i++) {
    const gap = placed[i].labelY - placed[i - 1].labelY
    if (gap < MIN_GAP) placed[i].labelY = placed[i - 1].labelY + MIN_GAP
  }

  return (
    <figure className="routemap wide">
      <MapInteraction>
        {/*
          role="group" when the map contains links, role="img" when it does not.

          This was role="img" unconditionally, which is an ARIA trap with links
          inside: img makes the whole subtree presentational, so a conforming
          screen reader flattens the map to one caption and the 24 station
          links inside it simply do not exist for that reader. axe flags the
          same structure as nested-interactive (serious) on every page with a
          linked map. A group with a label announces the map's purpose AND
          exposes the links.
        */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          height="auto"
          role={stations.some((s) => s.href) ? 'group' : 'img'}
          aria-label={caption ?? `Geographic map of ${lines.map((l) => l.name).join(', ')}`}
          className="routemap-svg"
        >
          <rect width={width} height={height} className="routemap-ground" />

          {/* Graticule. Real latitude and longitude, labelled — the map states
              its own coordinate system rather than floating in space. */}
          <g className="routemap-graticule" aria-hidden="true">
            {latLines.map((lat) => {
              const y = project([bounds.minLon, lat])[1]
              return (
                <g key={`lat-${lat}`}>
                  <line x1={padding * 0.4} y1={y} x2={width - padding * 0.4} y2={y} />
                  <text x={padding * 0.4} y={y - 3} className="routemap-grat-label">
                    {lat.toFixed(2)}
                  </text>
                </g>
              )
            })}
            {lonLines.map((lon) => {
              const x = project([lon, bounds.minLat])[0]
              return (
                <g key={`lon-${lon}`}>
                  <line x1={x} y1={padding * 0.4} x2={x} y2={height - padding * 0.4} />
                  <text x={x + 3} y={height - padding * 0.4} className="routemap-grat-label">
                    {lon.toFixed(2)}
                  </text>
                </g>
              )
            })}
          </g>

          {/* Casing under every line, so crossings read as over/under rather
              than as a merge. Drawn as a pass beneath all coloured strokes. */}
          {lines.map((line) =>
            line.paths.map((path, index) => (
              <path
                key={`casing-${line.code}-${index}`}
                d={pathData(path, project)}
                className="routemap-casing"
              />
            )),
          )}

          {lines.map((line) =>
            line.paths.map((path, index) => (
              <path
                key={`${line.code}-${index}`}
                d={pathData(path, project)}
                fill="none"
                stroke={line.colour}
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )),
          )}

          {stations.map((station) => {
            const [x, y] = project([station.lon, station.lat])
            const r = station.isInterchange ? 5.2 : station.isTerminus ? 4.6 : 3.4

            const dot = (
              <>
                {/* Invisible, generous hit target. The drawn dot is 3–5px; a
                    finger is not. */}
                <circle cx={x} cy={y} r={HIT_RADIUS} className="routemap-hit" />
                {station.isInterchange && (
                  <circle cx={x} cy={y} r={r + 2.6} className="routemap-interchange-ring" />
                )}
                <circle
                  cx={x.toFixed(1)}
                  cy={y.toFixed(1)}
                  r={r}
                  fill="#ffffff"
                  stroke={station.isInterchange ? '#14171A' : station.colour}
                  strokeWidth={station.isInterchange ? 2.4 : 2.2}
                />
                <title>
                  {station.code} {station.name}
                  {station.nameZh ? ` ${station.nameZh}` : ''}
                </title>
              </>
            )

            if (!station.href) {
              return (
                <g key={station.code} className="routemap-station">
                  {dot}
                </g>
              )
            }

            return (
              <a
                key={station.code}
                href={station.href}
                className="routemap-station is-link"
                data-code={station.code}
                data-name={station.name}
                data-zh={station.nameZh ?? ''}
                data-current={station.highlighted ? '' : undefined}
              >
                {dot}
              </a>
            )
          })}

          {placed.map(({ station, x, y, labelY }) => {
            const moved = Math.abs(labelY - y) > 2
            return (
              <g
                key={`label-${station.code}`}
                className="routemap-label"
                data-current={station.highlighted ? '' : undefined}
                /* The station's name already reaches AT through its link (or
                   its <title>); with the SVG now a group rather than an img,
                   leaving these visible texts in the tree would announce every
                   name twice. */
                aria-hidden="true"
              >
                {moved && (
                  <line x1={x + 7} y1={y} x2={x + 12} y2={labelY - 3} className="routemap-leader" />
                )}
                <text x={x + 14} y={labelY} className="routemap-code">
                  {station.code}
                </text>
                <text
                  x={x + 14 + station.code.length * 6.4 + 5}
                  y={labelY}
                  className="routemap-name"
                >
                  {station.name}
                </text>
              </g>
            )
          })}

          {/*
            Line identity, in text, on the map itself. Drawn last so it sits
            above the strokes and the station dots.
          */}
          {lineLabels &&
            lines.flatMap((line) => {
              const longest = line.paths.reduce(
                (best, path) => (path.length > best.length ? path : best),
                line.paths[0] ?? [],
              )
              if (longest.length < 2) return []

              const ends: Point[] = [longest[0], longest[longest.length - 1]]

              return ends.map((point, index) => {
                const [x, y] = project(point)
                const w = line.code.length * 7.2 + 9
                const h = 15
                // Keep the badge inside the frame at either end.
                const bx = Math.max(2, Math.min(width - w - 2, x - w / 2))
                const by = Math.max(2, Math.min(height - h - 2, y - h / 2))

                return (
                  /* Visual identification only; the caption and the table name
                     every line for AT. Unhidden, a group-role map would read
                     out fourteen bare line codes. */
                  <g key={`lineLabel-${line.code}-${index}`} className="routemap-linelabel" aria-hidden="true">
                    <rect
                      x={bx.toFixed(1)}
                      y={by.toFixed(1)}
                      width={w}
                      height={h}
                      rx={2}
                      fill={line.badgeBg ?? line.colour}
                      stroke="#FFFFFF"
                      strokeWidth={1.5}
                    />
                    <text
                      x={(bx + w / 2).toFixed(1)}
                      y={(by + h / 2 + 3.9).toFixed(1)}
                      textAnchor="middle"
                      fill={line.badgeFg ?? '#FFFFFF'}
                      className="routemap-linelabel-text"
                    >
                      {line.code}
                    </text>
                  </g>
                )
              })
            })}

          {/* Scale bar and north point. */}
          <g className="routemap-furniture" aria-hidden="true">
            <line
              x1={padding * 0.5}
              y1={height - padding * 0.5}
              x2={padding * 0.5 + scalePx}
              y2={height - padding * 0.5}
              className="routemap-scale"
            />
            <line
              x1={padding * 0.5}
              y1={height - padding * 0.5 - 3}
              x2={padding * 0.5}
              y2={height - padding * 0.5 + 3}
              className="routemap-scale"
            />
            <line
              x1={padding * 0.5 + scalePx}
              y1={height - padding * 0.5 - 3}
              x2={padding * 0.5 + scalePx}
              y2={height - padding * 0.5 + 3}
              className="routemap-scale"
            />
            <text
              x={padding * 0.5 + scalePx / 2}
              y={height - padding * 0.5 - 6}
              className="routemap-scale-label"
            >
              {scaleKm} km
            </text>

            <text x={width - padding * 0.5} y={padding * 0.5 + 4} className="routemap-north">
              N ↑
            </text>
          </g>
        </svg>
      </MapInteraction>

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function pathData(path: Point[], project: (p: Point) => [number, number]) {
  return path
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${project(p).map((n) => n.toFixed(1)).join(' ')}`)
    .join(' ')
}
