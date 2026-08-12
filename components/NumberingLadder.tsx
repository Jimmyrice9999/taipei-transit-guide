import type { Line } from '@/lib/lines'
import type { Station } from '@/lib/stations'

/**
 * Two numberings, one line — drawn so the inversion is visible rather than
 * described.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT IT SHOWS
 *
 * DORTS's station table lists a construction number (工程編號) against every
 * Wenhu station, and it is not the operating code. On the Muzha section it runs
 * the other way: BR01 動物園 is engineering BR13; BR13 松山機場 is engineering
 * BR1. The Neihu stations use a different series entirely, B1 to B11.
 *
 * The left rail is the line in operating order. The right rail is the same 24
 * stations in engineering order. A hairline joins each station to itself.
 *
 * Where the two orders agree the hairlines run parallel. Where they invert,
 * they cross. So the Muzha half draws a solid X and the Neihu half draws a
 * ladder, and the reason is the data rather than the drawing.
 *
 * WHY NOT A TABLE
 *
 * The table exists too, below this on the page, because a reader checking a
 * specific station needs one and because it is the evidence. But twenty-four
 * rows of "BR01 → BR13" do not make a reversal apparent; they make it something
 * you could work out. Crossing lines make it something you see.
 *
 * WHY NOT ON THE STRIP MAP
 *
 * Considered and rejected. Hover has no touch equivalent, and a toggle costs a
 * client component and a second state on the site's most-used navigation
 * device, to surface a fact that is historical rather than navigational.
 * Nobody standing on a platform needs the engineering number.
 *
 * ── Run 11: it was not understood either ────────────────────────────────────
 * Reported verbatim: "idk what you're even talking abt."
 *
 * Everything above is a defence of the drawing's GEOMETRY, and the geometry was
 * never the problem. The problem is that "the connecting lines cross" only
 * means something once you already know there are two numbering systems, and
 * the sentence establishing that was in the prose BELOW the figure. The figure
 * led the page — by decision, see DEVICES in lib/content — so the first thing
 * a reader met was two columns of codes with a bow-tie between them and no
 * statement of what either column was.
 *
 * Fixed by saying it, in words, above the drawing, with the worked example
 * spelled out: BR01 was BR13, BR13 was BR1. A reader who reads only that
 * sentence has the whole finding; the drawing then shows them it holds for
 * every station rather than the two named.
 *
 * The drawing itself gains two things:
 *
 *   - Brackets down the right, naming what each half does — "counted from the
 *     opposite end" against the crossing half, "same order" against the
 *     parallel one. The halves were previously distinguished only by whether
 *     their lines happened to be diagonal.
 *   - The two example connectors picked out. An exact reversal puts EVERY
 *     connector through the same centre point — that is arithmetic, not a
 *     drawing fault — so the X is a starburst and no single line can be
 *     traced through it. Picking out the two named in the sentence gives the
 *     eye one thread it can actually follow.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/*
 * Two layouts, and the reason is legibility rather than taste.
 *
 * The SVG scales to its container. At 375px the wide layout's 620-unit viewBox
 * renders 11px text at about 6px, which is not readable by anyone — a diagram
 * that technically fits and cannot be read is the same failure as hiding it.
 *
 * So the phone gets a layout without station names. The shape is the content;
 * the names are already on the page twice, in the two tables below. Both
 * variants are rendered and one is hidden by a media query, which keeps this a
 * static page with no client JavaScript — and `display: none` takes the hidden
 * one out of the accessibility tree, so a screen reader hears one diagram.
 */
type Layout = {
  key: 'wide' | 'compact'
  W: number
  CODE_X: number
  NAME_X: number | null
  LEFT_X: number
  RIGHT_X: number
  /**
   * Where the half-brackets and their labels go, or null where there is no
   * room. On the compact layout there is none: 250 units carries two code
   * columns and nothing else. That is not "hide it on mobile" — the sentence
   * the brackets abbreviate is in the lead paragraph above, which every width
   * gets, and the brackets are a restatement of it beside the drawing.
   */
  BRACKET_X: number | null
}

const WIDE: Layout = {
  key: 'wide',
  W: 620,
  CODE_X: 8,
  NAME_X: 54,
  LEFT_X: 262,
  RIGHT_X: 408,
  BRACKET_X: 478,
}
const COMPACT: Layout = {
  key: 'compact',
  W: 250,
  CODE_X: 4,
  NAME_X: null,
  LEFT_X: 56,
  RIGHT_X: 196,
  BRACKET_X: null,
}

const ROW = 26
const TOP = 40

export default function NumberingLadder({
  line,
  stations,
  /** Where the engineering series changes. Drawn as a rule across both rails. */
  seriesBreakAfter,
}: {
  line: Line
  stations: Station[]
  seriesBreakAfter?: string
}) {
  const rows = stations.filter((s) => s.engineering)
  if (rows.length < 2) return null

  /*
   * The right rail's order. Sorted by series letter first, then number — so
   * BR1…BR13 come before B1…B11, which is the order the two contracts were
   * drawn in and the order that makes the crossing legible. Sorting the two
   * series into one numeric sequence would interleave them and show nothing.
   */
  const parse = (code: string) => {
    const m = code.match(/^([A-Z]+)(\d+)$/i)
    return m ? { series: m[1].toUpperCase(), n: Number(m[2]) } : { series: code, n: 0 }
  }
  const engineeringOrder = [...rows].sort((a, b) => {
    const pa = parse(a.engineering)
    const pb = parse(b.engineering)
    // Longer prefix first: "BR" before "B", which is contract order here.
    if (pa.series !== pb.series) return pb.series.length - pa.series.length
    return pa.n - pb.n
  })

  const leftY = new Map(rows.map((s, i) => [s.code, TOP + i * ROW]))
  const rightY = new Map(engineeringOrder.map((s, i) => [s.code, TOP + i * ROW]))
  const H = TOP + rows.length * ROW + 18

  const breakIndex = seriesBreakAfter
    ? rows.findIndex((s) => s.code.toUpperCase() === seriesBreakAfter.toUpperCase())
    : -1
  const breakY = breakIndex >= 0 ? TOP + (breakIndex + 1) * ROW - ROW / 2 : null

  /*
   * Which stations sit at a different height on the two rails — that is, which
   * ones the two numbering systems disagree about. Computed from the drawing's
   * own geometry rather than from `seriesBreakAfter`, so the brackets can
   * never describe a different split from the one drawn.
   */
  const crossing = rows.filter((s) => leftY.get(s.code) !== rightY.get(s.code))
  const parallel = rows.filter((s) => leftY.get(s.code) === rightY.get(s.code))

  /* The two ends of the reversed run — the worked example in the sentence
     above the drawing, and the two connectors picked out inside it. */
  const exampleA = crossing[0]
  const exampleB = crossing[crossing.length - 1]
  const examples = new Set([exampleA?.code, exampleB?.code].filter(Boolean))

  const describe =
    `The ${line.name} Line's stations in operating order beside the same stations in ` +
    `construction-number order. On the southern section the two run in opposite ` +
    `directions, so the connecting lines cross; on the northern section they agree.`

  /** A vertical bracket down the right of one half, with a label beside it. */
  const bracket = (L: Layout, group: Station[], lines: string[], key: string) => {
    if (L.BRACKET_X === null || group.length < 2) return null
    const ys = group.map((s) => leftY.get(s.code)!)
    const top = Math.min(...ys) - ROW / 2 + 3
    const bottom = Math.max(...ys) + ROW / 2 - 3
    const x = L.BRACKET_X
    return (
      <g key={key} className="ladder-bracket">
        {/* A square bracket, not a brace: the ends have to read as "from here
            to here" at 9px, and a brace's curves vanish at that size. */}
        <path d={`M ${x + 6} ${top} H ${x} V ${bottom} H ${x + 6}`} />
        {lines.map((text, i) => (
          <text
            key={text}
            x={x + 14}
            y={(top + bottom) / 2 + (i - (lines.length - 1) / 2) * 13 + 3}
            className="ladder-bracket-label"
            textAnchor="start"
          >
            {text}
          </text>
        ))}
      </g>
    )
  }

  const draw = (L: Layout) => (
    <svg
      key={L.key}
      className={`ladder-svg ladder-${L.key}`}
      viewBox={`0 0 ${L.W} ${H}`}
      role="img"
      aria-label={describe}
    >
      <text x={L.CODE_X} y={18} className="ladder-head" textAnchor="start">
        OPERATING
      </text>
      {/* Right-aligned on the compact layout, where a left-aligned
          "ENGINEERING" runs off the viewBox and reads "ENGINEER". */}
      <text
        x={L.NAME_X === null ? L.W - 4 : L.RIGHT_X}
        y={18}
        className="ladder-head"
        textAnchor={L.NAME_X === null ? 'end' : 'start'}
      >
        ENGINEERING
      </text>
      {L.NAME_X !== null && (
        <>
          <text x={L.CODE_X} y={31} className="ladder-sub" textAnchor="start">
            what the signs say
          </text>
          <text x={L.RIGHT_X} y={31} className="ladder-sub" textAnchor="start">
            what the drawings said
          </text>
        </>
      )}

      {/* Connectors first, so the labels sit over them. */}
      {rows.map((station) => {
        const y1 = leftY.get(station.code)!
        const y2 = rightY.get(station.code)!
        const bend = Math.min(60, (L.RIGHT_X - L.LEFT_X) * 0.42)
        return (
          <path
            key={station.code}
            className="ladder-link"
            data-crossing={y1 !== y2 ? '' : undefined}
            /* The two the sentence above names. An exact reversal sends every
               connector through one point, so the crossing is a starburst and
               nothing in it can be followed; these two are drawn heavier so
               the eye has one thread to trace. */
            data-example={examples.has(station.code) ? '' : undefined}
            d={
              `M ${L.LEFT_X + 8} ${y1} C ${L.LEFT_X + bend} ${y1}, ` +
              `${L.RIGHT_X - bend} ${y2}, ${L.RIGHT_X - 8} ${y2}`
            }
          />
        )
      })}

      {breakY !== null && (
        <line x1={4} y1={breakY} x2={L.W - 4} y2={breakY} className="ladder-break" />
      )}

      {/*
        Left rail: code then name, both left-aligned in fixed columns. They
        were previously code-at-fixed-x and name-right-aligned-to-the-rail,
        which overprinted every long name straight through its own code —
        "Wanfang CoBR03unity". Two left-aligned columns cannot collide.
      */}
      {rows.map((station) => (
        <g key={station.code}>
          <text
            x={L.CODE_X}
            y={leftY.get(station.code)! + 4}
            className="ladder-code"
            textAnchor="start"
          >
            {station.code}
          </text>
          {L.NAME_X !== null && (
            <text
              x={L.NAME_X}
              y={leftY.get(station.code)! + 4}
              className="ladder-name"
              textAnchor="start"
            >
              {station.name}
            </text>
          )}
        </g>
      ))}

      {/*
        Right rail: numbers only, no names. The point of this rail is its
        ORDER; a name on it invites reading it as a second station list, and
        the station is already named once, on the left.
      */}
      {engineeringOrder.map((station) => (
        <text
          key={station.code}
          x={L.RIGHT_X + 4}
          y={rightY.get(station.code)! + 4}
          className="ladder-code ladder-eng"
          textAnchor="start"
          data-series={parse(station.engineering).series}
        >
          {station.engineering}
        </text>
      ))}

      {/* Last, over everything, so the labels are never crossed by a rail. */}
      {bracket(L, crossing, ['counted from the', 'opposite end —', 'every line crosses'], 'x')}
      {bracket(L, parallel, ['same order —', 'the lines run straight'], 'p')}
    </svg>
  )

  return (
    <figure className="figure ladder wide">
      {/*
        The sentence, above the drawing.

        This device leads its page, so this paragraph is the first thing on it
        that says what the page is about — which is why it states the finding
        in full rather than pointing at the picture. A reader who reads this
        and nothing else has the whole thing; the drawing then shows it holds
        for all twenty-four stations rather than the two named here.
      */}
      <div className="ladder-intro">
        <h2 className="ladder-head-text">Two numbers for every station</h2>
        <p className="ladder-lead">
          The signs carry one — {rows[0].code} to {rows[rows.length - 1].code}, the
          operating code, the one passengers use. The construction drawings
          carried another.{' '}
          {exampleA && exampleB && (
            <>
              On the southern half the drawings counted from the opposite end, so{' '}
              <strong>
                {exampleA.code} {exampleA.name} was drawing number {exampleA.engineering}
              </strong>
              , and{' '}
              <strong>
                {exampleB.code} {exampleB.name} was drawing number {exampleB.engineering}
              </strong>
              .{' '}
            </>
          )}
          Below, each station on the left is joined to its own drawing number on
          the right. Where the two systems disagree the joins cross; where they
          agree they run straight across.
        </p>
      </div>

      <div className="ladder-frame">
        {draw(WIDE)}
        {draw(COMPACT)}
      </div>
    </figure>
  )
}
