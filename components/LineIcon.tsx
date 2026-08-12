import { getLine } from '@/lib/lines'
import { getCharacter } from '@/lib/line-character'

/**
 * A line icon — the front of the line's own train, in the line's own colour.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY A VEHICLE AND NOT A SYMBOL
 *
 * Run 11: "The user wants actual icons for lines, not only coloured badges.
 * Propose something derived from each line's own character — rubber-tyred
 * versus steel wheel, light rail versus heavy metro, driverless versus
 * crewed."
 *
 * The badge already does identity: BR is BR whatever else is on screen. What
 * the badge cannot do is say what kind of railway it is, and that difference
 * is real on this network in a way it is not on most — Taipei runs a
 * rubber-tyred metro, a steel-wheel metro and two street tramways under one
 * fare system, and nothing on the site said so at a glance.
 *
 * So the icon is a front elevation: the face of the train, which is the image
 * a rider actually has of a line.
 *
 *   running gear   steel        two wheels standing on a rail
 *                  rubber       two tyres, no rail, and the side guide bars
 *                               that are the whole reason Wenhu can climb
 *                  light rail   wheels on a rail, and a pantograph on the roof
 *
 *   front window   driverless   one pane, full width — the Wenhu Line's own
 *                               summary is "no cab, a front window you can
 *                               stand at", and this is that window
 *                  unstated     two panes divided by a pillar, which asserts
 *                               nothing about who is behind them
 *
 * WHAT IT IS NOT
 *
 * Not the sole carrier of anything. It never appears without the line's code
 * beside it, and the `title` names the character in words. Strip the colour and
 * strip the icon and every place it is used still reads.
 *
 * Colour is the badge pair — `badgeBg` behind, `badgeFg` in front — which is
 * already derived against the 4.6 margin in lib/lines.ts, so the window and
 * headlights clear AA against the body without a second derivation to keep in
 * step. The rail and the guide bars are neutral: they are not the train.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function LineIcon({
  code,
  size = 26,
  className = '',
}: {
  code: string
  /** Rendered px. Below about 22 the running gear stops being tellable apart. */
  size?: number
  className?: string
}) {
  const line = getLine(code)
  if (!line) return null

  const character = getCharacter(line)
  const lightRail = character.running === 'light-rail'

  /* Geometry in a 32×32 viewBox. The tram sits lower and shorter, so the
     pantograph has roof to stand on and the whole thing still reads as a
     smaller vehicle than the metro next to it in a list. */
  const bodyTop = lightRail ? 8 : 4.5
  const bodyBottom = 24
  const winTop = bodyTop + 3
  const winBottom = winTop + 6.5

  return (
    <svg
      className={`line-icon ${className}`.trim()}
      viewBox="0 0 32 32"
      width={size}
      height={size}
      role="img"
      aria-label={`${line.name} Line — ${character.label}`}
      style={
        {
          '--icon-body': line.badgeBg,
          '--icon-ink': line.badgeFg,
        } as React.CSSProperties
      }
    >
      <title>{`${line.name} Line — ${character.label}`}</title>

      {/* Pantograph, on light rail only. Drawn before the body so the arm
          disappears behind the roof rather than sitting on top of it. */}
      {lightRail && (
        <g className="line-icon-pantograph">
          <path d={`M 10 ${bodyTop} L 16 3.5 L 22 ${bodyTop}`} />
          <line x1="7" y1="2.5" x2="25" y2="2.5" />
        </g>
      )}

      {/* The car front. */}
      <rect
        className="line-icon-body"
        x="4.5"
        y={bodyTop}
        width="23"
        height={bodyBottom - bodyTop}
        rx="3"
      />

      {/* Front window. One pane where the line is driverless, two where the
          site has no source either way. */}
      {character.cab === 'driverless' ? (
        <rect
          className="line-icon-glass"
          x="7"
          y={winTop}
          width="18"
          height={winBottom - winTop}
          rx="1.2"
        />
      ) : (
        <>
          <rect
            className="line-icon-glass"
            x="7"
            y={winTop}
            width="8.2"
            height={winBottom - winTop}
            rx="1.2"
          />
          <rect
            className="line-icon-glass"
            x="16.8"
            y={winTop}
            width="8.2"
            height={winBottom - winTop}
            rx="1.2"
          />
        </>
      )}

      {/* Headlights — no information, but they are what makes 26 px of
          rounded rectangle read as the front of a train rather than a chip. */}
      <circle className="line-icon-glass" cx="8.6" cy={bodyBottom - 2.6} r="1.5" />
      <circle className="line-icon-glass" cx="23.4" cy={bodyBottom - 2.6} r="1.5" />

      {/* Running gear. */}
      {character.running === 'rubber' ? (
        <>
          {/* Tyres: drawn as rings, because a tyre has a wall and a wheel does
              not, and that ring is the only thing telling them apart at this
              size. No rail under them — there is not one. */}
          <circle className="line-icon-tyre" cx="11" cy="26.5" r="3" />
          <circle className="line-icon-tyre" cx="21" cy="26.5" r="3" />
          {/* Side guide bars — what the train steers against, and the reason
              this line climbs where the others do not. */}
          <line className="line-icon-guide" x1="2.5" y1="19" x2="2.5" y2="29.5" />
          <line className="line-icon-guide" x1="29.5" y1="19" x2="29.5" y2="29.5" />
        </>
      ) : (
        <>
          <circle className="line-icon-wheel" cx="11" cy="26" r="2.4" />
          <circle className="line-icon-wheel" cx="21" cy="26" r="2.4" />
          <line className="line-icon-rail" x1="2" y1="29.5" x2="30" y2="29.5" />
        </>
      )}
    </svg>
  )
}
