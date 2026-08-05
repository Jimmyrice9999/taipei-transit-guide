import RichText from './RichText'
import type { Fact } from '@/lib/content'

/**
 * The "Quick facts" box in the right rail.
 *
 * Rows come from the `facts:` block in a Markdown file's frontmatter — no fixed
 * schema, so a Line page and a Depot page can list completely different fields.
 * Values run through RichText, so a station code in a facts row renders as the
 * same badge it would in a table, and Chinese gets the right glyphs.
 */
export default function FactsTable({ facts }: { facts: Fact[] }) {
  if (facts.length === 0) return null

  return (
    <div className="facts">
      <div className="facts-caption">Quick facts</div>
      <table>
        <tbody>
          {facts.map((fact) => (
            <tr key={fact.label}>
              <th scope="row">
                <RichText>{fact.label}</RichText>
              </th>
              <td>{fact.value ? <RichText>{fact.value}</RichText> : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
