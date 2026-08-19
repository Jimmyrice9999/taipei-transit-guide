import CiteMark from './CiteMark'
import RichText from './RichText'
import type { Spec } from '@/lib/content'
import type { NumberedSource } from '@/lib/sources'

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
}: {
  specs: Spec[]
  references?: NumberedSource[]
}) {
  if (specs.length === 0) return null

  return (
    <section className="specs wide" aria-labelledby="specifications">
      <h2 className="specs-head" id="specifications">
        Specifications
      </h2>
      <table>
        <tbody>
          {specs.map((spec) => (
            <tr key={spec.label}>
              <th scope="row">
                <RichText>{spec.label}</RichText>
              </th>
              <td className="specs-value">{spec.value ? <RichText>{spec.value}</RichText> : '—'}</td>
              <td className="specs-unit">
                {spec.unit}
                <CiteMark id={spec.source} references={references} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
