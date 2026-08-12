import RichText from './RichText'
import type { Line } from '@/lib/lines'
import type { Station } from '@/lib/stations'

/**
 * The line in section — structure against distance.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * A metro line's structure is normally given as a count: "22 elevated, 2
 * underground". That tells you nothing about where the change happens, how long
 * the tunnel is, or that the railway dives under an active international airport
 * and a river and comes back up beside a road tunnel. Wenhu does all of that in
 * 3.9 km and no English source draws it.
 *
 * ── Run 11: it was not understood ────────────────────────────────────────────
 * Reported verbatim: "idk what the elevation profile is." The drawing was
 * correct and unlabelled — a brown rule near the top, a grey rule under it, a
 * short bar low down, and nothing anywhere saying that the grey rule was the
 * ground or that up and down meant above and below it. Every word explaining
 * the picture was in a caption UNDERNEATH it, after the reader had already
 * decided it was decoration.
 *
 * Three changes, all of them the same change — say what it is, on it:
 *
 *   1. A heading and one plain sentence ABOVE the drawing, before anyone has
 *      to interpret anything. It is called a section drawing by engineers;
 *      "as if the ground were cut open along the route" is what that means.
 *   2. The earth is drawn. A tunnel below a line reads as a tunnel only if
 *      there is something for it to be inside — so everything below street
 *      level is filled, flat, one neutral tone. Not a gradient, not the line
 *      colour: the ground is not part of the railway.
 *   3. The runs are labelled where they are: ON VIADUCT over the longest
 *      elevated stretch, IN TUNNEL at the bore, STREET LEVEL on the ground
 *      line. A key that makes you look away and come back is a key that most
 *      readers do not use.
 *
 * The old key stays, because the hatched region still needs explaining and
 * because labels placed on the longest run cannot name every run.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * WHAT IT DRAWS, AND FROM WHAT
 *
 *   horizontal   TDX CumulativeDistance, per station — the operator's own
 *                chainage, the same field whose last value is the route length
 *                printed on the line page. Not measured here, not estimated.
 *   vertical     structure, from lib/station-overlay.ts. NOT TO SCALE, and the
 *                caption says so: no source gives a rail level, so drawing one
 *                would be a fabricated axis dressed as a measurement.
 *
 * WHAT IT REFUSES TO DRAW
 *
 * Portal positions. DORTS gives 3.9 km of underground running on the Neihu
 * section and two underground stations. Those two stations are 2.58 km apart by
 * TDX's own chainage. The remaining ~1.3 km is ramp at the two portals, and no
 * source divides it between them. So the located part is drawn solid and the
 * unlocated part is drawn hatched, with the arithmetic printed underneath.
 *
 * Guessing the portals would produce a better-looking drawing that asserts two
 * chainages nobody published. This project has drawn one thing in the wrong
 * place already — a depot, for four builds — and that is what an illustration
 * costs when it is wrong: nobody reads a footnote inside a picture.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Total underground running on the line, where a source gives one. */
export type UndergroundExtent = {
  /** Kilometres, from the builder. */
  km: number
  /** Rendered under the drawing, explaining what the hatching means. */
  note: string
}

type Band = {
  from: number
  to: number
  structure: Station['structure']
  /** True where the extent is derived rather than published. */
  uncertain: boolean
}

/* Geometry, in viewBox units. The SVG scales; these do not need to be px. */
const W = 960
const PAD_L = 22
const PAD_R = 26
const GROUND = 70
const DECK = 28
const BORE = 114
const TICKS = 156
const H = 232
/** Where the filled earth stops — clear of the station codes on the scale. */
const EARTH_BOTTOM = TICKS - 10

export default function ElevationProfile({
  line,
  stations,
  underground,
  caption,
  /** Codes that keep a printed label at every width. Others get ticks only. */
  label = [],
}: {
  line: Line
  stations: Station[]
  underground?: UndergroundExtent
  caption: string
  label?: string[]
}) {
  const placed = stations.filter(
    (s): s is Station & { chainageKm: number } => typeof s.chainageKm === 'number',
  )
  if (placed.length < 2) return null

  const total = placed[placed.length - 1].chainageKm
  if (!(total > 0)) return null

  const x = (km: number) => PAD_L + (km / total) * (W - PAD_L - PAD_R)

  /*
   * Bands run between stations. A stretch takes a structure only when the
   * stations at both ends agree; where they differ the structure changes
   * somewhere inside it, and that somewhere is exactly what is not published.
   */
  const bands: Band[] = []
  for (let i = 0; i < placed.length - 1; i++) {
    const a = placed[i]
    const b = placed[i + 1]
    bands.push({
      from: a.chainageKm,
      to: b.chainageKm,
      structure: a.structure === b.structure ? a.structure : 'unknown',
      uncertain: a.structure !== b.structure,
    })
  }

  const yFor = (structure: Station['structure']) =>
    structure === 'underground' ? BORE : structure === 'at-grade' ? GROUND : DECK

  /* The located underground run, and what is left over for the ramps. */
  const undergroundStations = placed.filter((s) => s.structure === 'underground')
  const locatedKm =
    undergroundStations.length >= 2
      ? undergroundStations[undergroundStations.length - 1].chainageKm -
        undergroundStations[0].chainageKm
      : 0
  const unlocatedKm = underground ? Math.max(0, underground.km - locatedKm) : 0

  const labelled = new Set(label.map((c) => c.toUpperCase()))

  /*
   * Scale marks every 5 km, plus the end — which is never a round number and
   * is the figure the page argues about, so it is always printed. A round mark
   * too close to the end is dropped rather than allowed to overprint it.
   */
  const marks: number[] = []
  for (let km = 0; km < total; km += 5) {
    if (total - km > total * 0.06) marks.push(km)
  }
  marks.push(total)

  /*
   * Where to write ON VIADUCT and IN TUNNEL: on the longest run of each kind,
   * and nowhere if there is no room for the words. Adjacent bands of one
   * structure are merged first.
   *
   * Bands run station to station, and on Wenhu the longest single one is under
   * 1.5 km — so a label sized against a band never fitted and the first version
   * of this silently printed nothing. What a reader sees is not the band, it is
   * the RUN: twelve elevated bands end to end read as one viaduct, and that is
   * what gets named.
   */
  const longestBand = (structure: Station['structure']) => {
    const runs: Band[] = []
    for (const b of bands) {
      if (b.uncertain || b.structure !== structure) continue
      const last = runs[runs.length - 1]
      if (last && last.to === b.from) last.to = b.to
      else runs.push({ ...b })
    }
    return runs.reduce<Band | null>(
      (best, b) => (!best || b.to - b.from > best.to - best.from ? b : best),
      null,
    )
  }

  /* Roughly the width of the text at 9px monospace, in viewBox units, plus a
     little clearance either side. Measured against the rendered drawing, not
     assumed: at 8 units a character "IN TUNNEL" needs 72 and Wenhu's bore
     spans 93, so the tunnel is labelled and a shorter one would not be. */
  const fits = (text: string, span: number) => span >= text.length * 5.8 + 14
  const runLabel = (structure: Station['structure'], text: string, dy: number) => {
    const band = longestBand(structure)
    if (!band) return null
    const x1 = x(band.from)
    const x2 = x(band.to)
    if (!fits(text, x2 - x1)) return null
    return (
      <text x={(x1 + x2) / 2} y={yFor(structure) + dy} className="profile-run-label" textAnchor="middle">
        {text}
      </text>
    )
  }

  return (
    <figure className="figure profile wide">
      {/*
        The explanation goes ABOVE the drawing, not in the caption below it.
        A reader who cannot tell what a picture is does not scroll past it to
        find out — they decide it is decoration and move on. That is exactly
        what happened to this one. See the note at the top of the file.
      */}
      <div className="profile-intro">
        <h2 className="profile-head">Above ground and below</h2>
        <p className="profile-lead">
          A side-on view of the {line.name} Line, as if the ground were cut open
          along the route. <strong>Left to right is distance</strong> from{' '}
          {placed[0].code}, to scale. <strong>Up and down is street level</strong> —
          track drawn above the shaded ground is carried on a viaduct, and track
          drawn inside it is in tunnel.
        </p>
      </div>

      {/*
        tabIndex on the scroll container, not decoration: a region that scrolls
        must be reachable and scrollable from the keyboard (WCAG 2.1.1), and on
        a phone this one does scroll. Same treatment as .table-scroll.
      */}
      <div
        className="profile-frame"
        tabIndex={0}
        role="group"
        aria-label={`${line.name} Line section drawing, scrollable`}
      >
        <svg
          className="profile-svg"
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`Section drawing of the ${line.name} Line. ${caption}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/*
              Hatching, not a tint: a tint reads as another structure type, and
              there are only three of those. Diagonal rule reads as "this region
              is indicative", which is the convention on a real section drawing.
            */}
            <pattern
              id="profile-hatch"
              width="7"
              height="7"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="7" stroke="var(--accent-map)" strokeWidth="2" />
            </pattern>
          </defs>

          {/*
            The earth, filled flat.
            ────────────────────────────────────────────────────────────────
            Drawn before anything else so everything below street level sits
            inside it. This is the change that makes the drawing legible
            without reading a word: a bore floating in white space is a short
            bar, and the same bar inside a solid ground reads as a tunnel.

            One flat neutral, deliberately not the line colour and not a
            gradient — the ground is not part of the railway, and a graded
            fill would imply a depth axis this drawing explicitly does not
            have.
          */}
          {/* Full viewBox width, not padded to the railway: ground does not
              stop where the line does, and an inset rectangle reads as a panel
              rather than as the earth. */}
          <rect x={0} y={GROUND} width={W} height={EARTH_BOTTOM - GROUND} className="profile-earth" />

          {/* Ground. The one line in the drawing that is a real thing. */}
          <line
            x1={PAD_L}
            y1={GROUND}
            x2={W - PAD_R}
            y2={GROUND}
            className="profile-ground"
          />

          {/* The railway. */}
          {bands.map((band) => {
            const x1 = x(band.from)
            const x2 = x(band.to)
            const y = yFor(band.structure)

            if (band.uncertain) {
              /*
               * A stretch whose two ends differ: the structure changes inside
               * it and nothing says where. Drawn as a hatched wedge spanning
               * both levels rather than a line taking a guessed path.
               */
              const yA = yFor(placed.find((s) => s.chainageKm === band.from)!.structure)
              const yB = yFor(placed.find((s) => s.chainageKm === band.to)!.structure)
              const top = Math.min(yA, yB) - 4
              const bottom = Math.max(yA, yB) + 4
              return (
                <g key={band.from}>
                  <rect
                    x={x1}
                    y={top}
                    width={Math.max(2, x2 - x1)}
                    height={bottom - top}
                    fill="url(#profile-hatch)"
                    opacity="0.32"
                  />
                  <rect
                    x={x1}
                    y={top}
                    width={Math.max(2, x2 - x1)}
                    height={bottom - top}
                    className="profile-uncertain-edge"
                  />
                </g>
              )
            }

            return (
              <g key={band.from}>
                {band.structure === 'elevated' && (
                  /* Piers, so the deck reads as viaduct rather than a rule. */
                  <g className="profile-piers">
                    {pierXs(x1, x2).map((px) => (
                      <line key={px} x1={px} y1={DECK} x2={px} y2={GROUND} />
                    ))}
                  </g>
                )}
                <line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  className={`profile-run profile-run-${band.structure}`}
                />
              </g>
            )
          })}

          {/*
            Named where they are, rather than only in a key underneath. The
            key still exists for the hatching, which cannot be labelled in
            place because its whole point is that its extent is unknown.
          */}
          <text x={PAD_L + 3} y={GROUND - 7} className="profile-run-label" textAnchor="start">
            STREET LEVEL
          </text>
          {runLabel('elevated', 'ON VIADUCT', -14)}
          {runLabel('underground', 'IN TUNNEL', 21)}

          {/*
            Stations. Only the named ones get a leader down to the scale: a
            drop line from all twenty-four turned the drawing into a comb, and
            the unnamed stops are already located by their own dots. Every
            station is still in the accessible description below.
          */}
          {placed.map((station) => {
            const px = x(station.chainageKm)
            const py = yFor(station.structure)
            const named = labelled.has(station.code.toUpperCase())
            return (
              <g key={station.code}>
                {named && (
                  <line x1={px} y1={py} x2={px} y2={TICKS - 12} className="profile-drop" />
                )}
                <circle
                  cx={px}
                  cy={py}
                  r="5"
                  className="profile-stop"
                  data-structure={station.structure}
                />
                {named && (
                  <text
                    x={px}
                    y={TICKS + 2}
                    className="profile-code"
                    textAnchor={anchorAt(px)}
                  >
                    {station.code}
                  </text>
                )}
              </g>
            )
          })}

          {/* Distance scale. */}
          <line x1={PAD_L} y1={TICKS + 22} x2={W - PAD_R} y2={TICKS + 22} className="profile-axis" />
          {marks.map((km) => (
            <g key={km}>
              <line
                x1={x(km)}
                y1={TICKS + 22}
                x2={x(km)}
                y2={TICKS + 28}
                className="profile-axis"
              />
              <text
                x={x(km)}
                y={TICKS + 44}
                className="profile-scale"
                textAnchor={anchorAt(x(km))}
              >
                {km === total ? total.toFixed(2) : km}
              </text>
            </g>
          ))}
          <text x={W - PAD_R} y={TICKS + 68} className="profile-scale" textAnchor="end">
            km along the route
          </text>
        </svg>
      </div>

      {/*
        The key is text, not colour, and it repeats the shapes rather than
        naming hues — the whole drawing is one accent, so the distinctions are
        position and fill. It survives greyscale and every dichromacy because
        there is nothing chromatic in it to lose.
      */}
      <ul className="profile-key">
        <li data-structure="elevated">elevated — deck on piers</li>
        <li data-structure="underground">underground</li>
        <li data-structure="unknown">structure changes somewhere in here; no source says where</li>
      </ul>

      {/* RichText, not a bare string: these captions quote sources in Chinese,
          and untagged Han loads the wrong font and fails the language audit.
          Caught by that audit rather than by review. */}
      <figcaption>
        <RichText>{caption}</RichText>
        {underground && (
          <>
            {' '}
            <strong>
              {underground.km.toFixed(1)} km of the line runs underground.
            </strong>{' '}
            {locatedKm.toFixed(2)} km of that is between the two underground
            stations, which is fixed by the operator&rsquo;s own chainage. The
            remaining {unlocatedKm.toFixed(2)} km is ramp at the two portals, and
            no source divides it between them — so it is drawn as unplaced rather
            than split. <RichText>{underground.note}</RichText>
          </>
        )}{' '}
        <span className="profile-caveat">
          Distance is to scale. Height is not: no source gives a rail level, and
          an axis invented to look like a measurement would be worse than none.
        </span>
      </figcaption>
    </figure>
  )
}

/**
 * Keeps a label inside the drawing at the two ends.
 *
 * A centred label on the first or last station overhangs the viewBox and gets
 * clipped — which on the first render turned BR01 into "R01" and BR24 into
 * "BR2". Found by looking at the picture, which is the only way it gets found.
 */
function anchorAt(px: number): 'start' | 'middle' | 'end' {
  if (px < PAD_L + 26) return 'start'
  if (px > W - PAD_R - 26) return 'end'
  return 'middle'
}

/** Evenly spaced piers, capped so a long viaduct does not become a comb. */
function pierXs(x1: number, x2: number): number[] {
  const span = x2 - x1
  const count = Math.max(1, Math.min(6, Math.round(span / 26)))
  const step = span / (count + 1)
  return Array.from({ length: count }, (_, i) => x1 + step * (i + 1))
}
