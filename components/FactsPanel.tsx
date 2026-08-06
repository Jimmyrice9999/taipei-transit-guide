import CiteMark from './CiteMark'
import RichText from './RichText'
import type { Fact } from '@/lib/content'
import type { Line } from '@/lib/lines'
import type { NumberedSource } from '@/lib/sources'

/**
 * Identity facts, set as a platform information panel.
 *
 * Horizontal, spanning the content column — because that is what a platform
 * information display is. The signs hanging over a platform are wide strips, not
 * tall boxes. It was previously a vertical right-hand rail, which is the exact
 * shape of an encyclopedia infobox and reserved a full-height column that left
 * the prose stranded off-centre once it ran out. Turning it on its side fixed
 * the layout and the resemblance at the same time.
 *
 * Rows come from the `facts:` frontmatter block — no fixed schema, so a Line
 * page and a Depot page list completely different fields. Measurements belong in
 * `specs:`, which is set as engineering data further down.
 */
export default function FactsPanel({
  facts,
  line,
  title,
  references = [],
}: {
  facts: Fact[]
  line: Line
  title: string
  references?: NumberedSource[]
}) {
  if (facts.length === 0) return null

  return (
    <section className="platform wide" aria-label="Quick facts">
      <header className="platform-head">
        {line.code && (
          <span
            className="badge"
            style={
              {
                '--badge-bg': line.badgeBg,
                '--badge-fg': line.badgeFg,
              } as React.CSSProperties
            }
          >
            {line.code}
          </span>
        )}
        <span className="platform-title">{line.code ? `${line.name} Line` : title}</span>
        {line.nameZh && (
          <span className="platform-zh" lang="zh-Hant">
            {line.nameZh}
          </span>
        )}
      </header>

      <dl className="platform-facts">
        {facts.map((fact) => (
          <div className="platform-fact" key={fact.label}>
            <dt>
              <RichText>{fact.label}</RichText>
            </dt>
            <dd>
              {fact.value ? <RichText>{fact.value}</RichText> : '—'}
              <CiteMark id={fact.source} references={references} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
