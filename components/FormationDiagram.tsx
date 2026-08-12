/**
 * Train formation, drawn rather than described.
 *
 * Notation, written in frontmatter:
 *
 *   formation: Mc1=M2 + M2=Mc1
 *
 *   =   cars within one unit (a pair)
 *   +   coupling between units
 *
 * ── Why `=` no longer says "permanently" ─────────────────────────────────────
 * It used to, in the notation and in the rendered key, on both Wenhu fleet
 * pages. That is a claim about how the units are held together, and it turned
 * out to be contradicted for one of the two fleets: zh.wikipedia describes the
 * VAL256 as 「非固定編組」, a NON-fixed formation, with four consecutively
 * numbered cars making a train rather than a permanent set. Nothing found says
 * either way for the Innovia.
 *
 * The notation only ever encoded car order and unit boundaries. Permanence was
 * an extra assertion riding along inside an illustration, on two pages, where
 * nobody reads a footnote. The key now states what the drawing knows.
 * ─────────────────────────────────────────────────────────────────────────────
 *   Mc  a car with a driving cab, by the usual convention — Mc cars at the ends
 *       of the train get a cab wedge drawn on their outer end
 *
 * Kept close to enthusiast notation rather than made into an infographic: plain
 * boxes, monospaced labels, coupler and cab marked, no fills or shadows beyond
 * the line accent. A reader who knows the notation should recognise it; a reader
 * who does not should still see car order and where the cabs are.
 *
 * ── Run 11: "the formation diagram isn't visible on fleet pages" ─────────────
 * Two separate things, and only one of them was a bug.
 *
 * IT IS ABSENT on five of the seven fleet pages — C301, C321, C341, C371,
 * C381 — because those pages declare no `formation:` at all. Each is a scope
 * page that says in its own prose that the formation is "still to be verified
 * against primary sources", and each ends "Nothing numerical is asserted on
 * this page." A formation is a numerical assertion. Drawing one from an
 * enthusiast wiki to fill the slot is precisely the failure this site's rules
 * exist to prevent, so the diagram stays absent until the research lands.
 * Nothing was fixed here; the fix is a research pass on those five fleets.
 *
 * IT WAS INVISIBLE on the two pages that do carry one. Four thin-outlined
 * white rectangles with monospaced labels read as a table fragment, not as a
 * train — no weight, no colour, nothing under them. So the drawing now has a
 * roof in the line's colour, wheels, and a rail to stand on. The line colour
 * is doing work rather than decorating: it says which railway this fleet
 * works, on a page whose whole subject is a fleet.
 * ─────────────────────────────────────────────────────────────────────────────
 */

type Car = { label: string; cab: 'left' | 'right' | null }

function parse(formation: string): Car[][] {
  const units = formation
    .split('+')
    .map((unit) => unit.trim())
    .filter(Boolean)
    .map((unit) =>
      unit
        .split('=')
        .map((car) => car.trim())
        .filter(Boolean)
        .map((label): Car => ({ label, cab: null })),
    )
    .filter((unit) => unit.length > 0)

  if (units.length === 0) return []

  // Cabs at the outer ends of the train, where those cars are cab cars.
  const first = units[0][0]
  const lastUnit = units[units.length - 1]
  const last = lastUnit[lastUnit.length - 1]

  if (/^mc/i.test(first.label)) first.cab = 'left'
  if (/^mc/i.test(last.label)) last.cab = 'right'

  return units
}

export default function FormationDiagram({ formation }: { formation: string }) {
  const units = parse(formation)
  if (units.length === 0) return null

  const carCount = units.reduce((total, unit) => total + unit.length, 0)
  const summary =
    `${carCount} cars` +
    (units.length > 1 ? ` · ${units.length} units of ${units[0].length}` : '')

  return (
    <section className="formation wide" aria-labelledby="formation">
      <h2 className="formation-head" id="formation">
        Formation
      </h2>

      <div className="formation-scroll">
        {/* The rail the train stands on. One element, under the whole
            formation, so the couplings between units read as gaps in a train
            rather than as gaps in the drawing. */}
        <div className="formation-train" role="img" aria-label={`Formation: ${formation}`} data-railed>
          {units.map((unit, unitIndex) => (
            <div className="formation-unit" key={unitIndex}>
              {unitIndex > 0 && <span className="formation-coupler" aria-hidden="true" />}
              <div className="formation-cars">
                {unit.map((car, carIndex) => (
                  <div
                    className="formation-car"
                    data-cab={car.cab ?? undefined}
                    key={`${unitIndex}-${carIndex}`}
                  >
                    <span className="formation-roof" aria-hidden="true" />
                    <span className="formation-label">{car.label}</span>
                    {/* Bogies. Two spans rather than a background image: the
                        site's rules forbid gradients, and a radial-gradient
                        wheel is a gradient however small. Marked aria-hidden
                        because the whole train already has one label. */}
                    <span className="formation-bogies" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="formation-key">
        {summary}
        <span className="formation-key-sep">·</span>
        <span className="formation-key-item">
          <span className="formation-key-swatch" data-kind="pair" aria-hidden="true" />
          one unit
        </span>
        <span className="formation-key-item">
          <span className="formation-key-swatch" data-kind="coupler" aria-hidden="true" />
          coupling
        </span>
        {units.some((u) => u.some((c) => c.cab)) && (
          <span className="formation-key-item">
            <span className="formation-key-swatch" data-kind="cab" aria-hidden="true" />
            cab
          </span>
        )}
      </p>
    </section>
  )
}
