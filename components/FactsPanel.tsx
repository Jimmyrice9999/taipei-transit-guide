import Link from '@/components/LocaleLink'
import CiteMark from './CiteMark'
import LineBadge from './LineBadge'
import RichText from './RichText'
import { getLinePageHref, type Fact } from '@/lib/content'
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
  href,
  badges = true,
  operator,
}: {
  facts: Fact[]
  line: Line
  title: string
  references?: NumberedSource[]
  /** The page this panel is on, so it never links to itself. */
  href?: string
  /**
   * Off on bus route pages: the panel's own "Route" row carries a value like
   * "R10 / 紅10", and R10 is also the real, unrelated code for Taipei Main
   * Station — the same false-identity risk `RichText`'s `badges` prop exists
   * to prevent on the page title, just reached through a fact value here
   * instead. See the note on `badges` in components/RichText.
   */
  badges?: boolean
  operator?: string
}) {
  if (facts.length === 0) return null

  const lineHref = getLinePageHref(line.code, line.operator)
  const isOwnLine = Boolean(lineHref && href && lineHref === href)

  return (
    <section className="platform wide" aria-label="Quick facts">
      {/*
        The panel head names the line on every page that has one — fleet,
        depot, station, the line itself — and until run 10 none of them linked
        to it. `linked` is false on the page that IS that line, so a page does
        not carry a link to itself; getLinePageHref returns the same href the
        page already has.
      */}
      <header className="platform-head">
        {line.code && <LineBadge code={line.code} operator={line.operator} linked={!isOwnLine} />}
        <span className="platform-title">
          {line.code ? (
            lineHref && !isOwnLine ? (
              <Link href={lineHref}>{`${line.name} Line`}</Link>
            ) : (
              `${line.name} Line`
            )
          ) : (
            title
          )}
        </span>
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
              <RichText operator={operator}>{fact.label}</RichText>
            </dt>
            {/*
              `link` on the value, not the label. A label is a field name —
              "Operator", "Depots" — and linking those would send you to a page
              about the word rather than about this page's answer. The value is
              the entity.
            */}
            <dd>
              {fact.value ? (
                <RichText link label={fact.label} badges={badges} operator={operator}>
                  {fact.value}
                </RichText>
              ) : (
                '—'
              )}
              <CiteMark id={fact.source} references={references} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
