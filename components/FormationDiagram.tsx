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
        <div className="formation-train" role="img" aria-label={`Formation: ${formation}`}>
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
                    {car.label}
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
