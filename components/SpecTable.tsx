import CiteMark from './CiteMark'
import RichText from './RichText'
import type { Spec } from '@/lib/content'
import type { NumberedSource } from '@/lib/sources'
import { getObservationState, observationLabel } from '@/lib/observation-state'

/**
 * Technical specifications, set as engineering data rather than prose furniture.
 *
 * Hairline rules, square corners, no card background, tabular figures, values
 * right-aligned against their units, units a step lighter than the numbers they
 * qualify, and leading tighter than body text. It should read as if lifted off a
 * technical drawing — deliberately unlike the comfortable prose above it. That
 * contrast is the point; compressing everything would lose it.
 *
 * Splitting `unit` from `value` in frontmatter is what makes the numeric column
 * align: "2.56 m" as one string cannot be right-aligned on the decimal.
 */
export default function SpecTable({
  specs,
  references = [],
  operator,
  ignoreCodes,
  stationCodes = true,
}: {
  specs: Spec[]
  references?: NumberedSource[]
  operator?: string
  ignoreCodes?: ReadonlySet<string>
  stationCodes?: boolean
}) {
  if (specs.length === 0) return null

  return (
    <section className="specs wide" aria-labelledby="specifications">
      <h2 className="specs-head" id="specifications">
        Specifications
      </h2>
      <table>
        <tbody>
          {specs.map((spec) => {
            const state = getObservationState(spec.label, spec.value)
            const stateLabel = observationLabel(state)
            return (
            <tr key={spec.label} data-state={state}>
              <th scope="row">
                <RichText operator={operator} ignoreCodes={ignoreCodes} stationCodes={stationCodes}>{spec.label}</RichText>
                {stateLabel && <span className="fact-state">{stateLabel}</span>}
              </th>
              <td className="specs-value">{spec.value ? <RichText operator={operator} ignoreCodes={ignoreCodes} stationCodes={stationCodes}>{spec.value}</RichText> : '—'}</td>
              <td className="specs-unit">
                {spec.unit}
                <CiteMark id={spec.source} references={references} />
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
