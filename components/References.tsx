import RichText from './RichText'
import type { NumberedSource } from '@/lib/sources'

/**
 * The references list at the foot of a content page.
 *
 * Set as a numbered list rather than a prose paragraph, and carrying the
 * primary/secondary marking on every entry, because the marking is the point.
 * A reader should be able to tell at a glance how much of a page rests on the
 * operator's own publications and how much on an encyclopedia — without
 * clicking anything.
 *
 * Uncited entries are shown with a dash instead of a number and labelled. They
 * are a defect (`npm run cite` warns about them), and showing them is the same
 * argument the rest of the site makes for TBC: a visible gap beats a tidy page
 * that hides one.
 */
export default function References({
  references,
  badges = true,
  ignoreCodes,
  stationCodes = true,
}: {
  references: NumberedSource[]
  /**
   * Off on bus route pages: a route's own colour+number label (`R10`, `BR20`)
   * is frequently also a real, unrelated station's code (R10 is Taipei Main
   * Station; BR20 is Dahu Park), and a source title like "R10 route
   * schedule" would otherwise badge as that unrelated station — the same
   * false-identity risk `RichText`'s own `badges` prop was added to prevent
   * on the page title, just left unguarded here. See the note on `badges` in
   * components/RichText.
   */
  badges?: boolean
  ignoreCodes?: ReadonlySet<string>
  stationCodes?: boolean
}) {
  if (references.length === 0) return null

  const cited = references.filter((r) => r.cited)
  const primary = cited.filter((r) => r.kind === 'primary').length

  return (
    <section className="refs wide" aria-labelledby="references">
      <h2 className="refs-head" id="references">
        References
      </h2>

      {cited.length > 0 && (
        <p className="refs-summary">
          {primary} of {cited.length} {cited.length === 1 ? 'source' : 'sources'} on this page{' '}
          {primary === 1 ? 'is' : 'are'} primary — published by the operator, the builder or
          government.
        </p>
      )}

      <ol className="refs-list">
        {references.map((reference) => (
          <li className="refs-item" id={`ref-${reference.number}`} key={reference.id}>
            <span className="refs-number" aria-hidden="true">
              {reference.cited ? reference.number : '—'}
            </span>

            <div className="refs-body">
              <span className="refs-title">
                <a href={reference.url} rel="nofollow noopener">
                  <RichText badges={badges} ignoreCodes={ignoreCodes} stationCodes={stationCodes}>{reference.title}</RichText>
                </a>
              </span>

              {reference.titleOriginal && (
                <span className="refs-original" lang={reference.lang || undefined}>
                  {reference.titleOriginal}
                </span>
              )}

              <span className="refs-meta">
                <span
                  className="refs-kind"
                  data-kind={reference.kind}
                  title={
                    reference.kind === 'primary'
                      ? 'Published by the body that created the fact'
                      : 'Reports on a fact created elsewhere'
                  }
                >
                  {reference.kind}
                </span>
                <RichText badges={badges} ignoreCodes={ignoreCodes} stationCodes={stationCodes}>{reference.publisher}</RichText>
                {reference.accessed && <span className="refs-accessed">accessed {reference.accessed}</span>}
                {/*
                  The live URL leads; the snapshot is the insurance. Labelled
                  "archived" rather than the snapshot date because the date that
                  matters to a reader is `accessed` — when we read the page —
                  and two dates side by side invite comparing the wrong pair.
                */}
                {reference.snapshot && (
                  <a className="refs-archive" href={reference.snapshot} rel="nofollow noopener">
                    archived
                  </a>
                )}
                {/* A second, independent archive — carried where one archive
                    service cannot reach the origin, so a citation is never
                    one outage from unfollowable. */}
                {reference.snapshotAlt && (
                  <a className="refs-archive" href={reference.snapshotAlt} rel="nofollow noopener">
                    mirror
                  </a>
                )}
                {!reference.cited && (
                  <span className="refs-uncited">listed but not cited on this page</span>
                )}
              </span>

              {reference.note && (
                <span className="refs-note">
                  <RichText badges={badges} ignoreCodes={ignoreCodes} stationCodes={stationCodes}>{reference.note}</RichText>
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
