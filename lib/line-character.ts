/**
 * What kind of railway each line actually is — the data behind the line icons.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS FILE EXISTS
 *
 * Run 11, reported: "the user wants actual icons for lines, not only coloured
 * badges", derived from "rubber-tyred versus steel wheel, light rail versus
 * heavy metro, driverless versus crewed".
 *
 * That is three claims per line, and this project does not put a claim on
 * screen without knowing where it came from. So the attributes live here, in a
 * table, each with the on-site source it rests on — rather than inside the
 * component that draws them, where nobody would ever check them again.
 *
 * WHAT IS ASSERTED, AND WHAT IS NOT
 *
 * `running` is asserted for every line. `cab` is asserted only where a line
 * page carries a sourced automation fact; everywhere else it is `unstated` and
 * the icon draws a front with no claim about who is sitting in it. A generic
 * front is not a gap in the icon set — a two-pane cab front and a one-pane
 * driverless front are different pictures, and the second is only drawn where
 * the site can say why.
 *
 * THE ONE INFERENCE, STATED PLAINLY
 *
 * Steel wheel is the default for heavy metro rather than a per-line citation.
 * The site's own Wenhu Line page says, in print, that Wenhu is "a rubber-tyred
 * guideway that climbs hills the rest of the network cannot" — an explicit
 * statement that the rest of the network is not rubber-tyred. Two fleet pages
 * say the same from the other end: the C301 works "the network's original
 * steel-wheel line" (Tamsui–Xinyi) and the C371 is "the network's most
 * numerous steel-wheel fleet" (Songshan–Xindian, Zhonghe–Xinlu). Bannan and
 * the Airport MRT have no such sentence on the site and take the default.
 *
 * That inference is recorded here so it can be replaced by a citation rather
 * than rediscovered. It is not laundered into the icon as if it were sourced.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { LINES, type Line } from './lines.ts'

/** What the vehicle runs on. Drawn as the icon's running gear. */
export type Running = 'steel' | 'rubber' | 'light-rail'

/** Whether the front of the train has a cab in it. */
export type Cab = 'driverless' | 'unstated'

export type LineCharacter = {
  running: Running
  cab: Cab
  /** One line, for the reader, naming what the icon is showing. */
  label: string
  /** Where the attributes come from. Read by tests and by the next person. */
  source: string
}

/**
 * Lines that are not steel wheel on steel rail. Exceptions only — see the note
 * above on why the default is not individually cited.
 */
const RUBBER_TYRED = new Set(['BR'])

/**
 * Lines whose page carries a sourced statement that the trains have no cab.
 *
 * BR — Wenhu Line page, facts: Automation "GoA4, driverless", cited to TRTC.
 * Y  — Circular Line page, facts: Automation "Fully automatic, driverless".
 *
 * Danhai and Ankeng are widely described as driverless too and neither has a
 * page with a sourced automation fact, so neither is listed. When those pages
 * are written this set is where the answer goes.
 */
const DRIVERLESS = new Set(['BR', 'Y'])

export function getCharacter(line: Line): LineCharacter {
  const running: Running = line.lightRail
    ? 'light-rail'
    : RUBBER_TYRED.has(line.code)
      ? 'rubber'
      : 'steel'

  const cab: Cab = DRIVERLESS.has(line.code) ? 'driverless' : 'unstated'

  const runningWords =
    running === 'light-rail'
      ? 'light rail'
      : running === 'rubber'
        ? 'rubber-tyred metro'
        : 'steel-wheel metro'

  return {
    running,
    cab,
    label: cab === 'driverless' ? `${runningWords}, driverless` : runningWords,
    source:
      running === 'light-rail'
        ? 'Light rail per the line registry (lib/lines.ts), from the operator codes TDX files these two lines under.'
        : running === 'rubber'
          ? 'Rubber-tyred per the line page fact "Guideway: Rubber-tyred, side-guided".'
          : 'Steel wheel by default for heavy metro — see the note in lib/line-character.ts.',
  }
}

/** Every displayed line with its character. Used by the tests. */
export const CHARACTERS = new Map(LINES.map((line) => [line.code, getCharacter(line)]))
