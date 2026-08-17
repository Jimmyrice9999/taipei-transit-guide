/** A page-type index: /rail/lines/, /rail/rolling-stock/, /rail/depots/ */

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CardRow from '@/components/CardRow'
import ComparisonTable from '@/components/ComparisonTable'
import LineBadge from '@/components/LineBadge'
import PageShell from '@/components/PageShell'
import PhotoCard from '@/components/PhotoCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import HanContentSubset from '@/components/HanContentSubset'
import { getImage } from '@/lib/images'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getFolderBody, getPages, getSection, getSections, getType, getTypes } from '@/lib/content'

type Props = { params: Promise<{ section: string; type: string }> }

/*
 * Rolling stock and depots, and only these two, get the photographed-card
 * treatment. Part 11's complaint was these two types listed in full on
 * /rail — lines, operators, systems and history are not the wall of links
 * it named, and giving every type folder on the site a photo grid would be
 * a redesign nobody asked for. See docs/run-log.md for the audit that
 * scoped this.
 */
const PHOTO_GRID_TYPES = new Set(['rolling-stock', 'depots'])

export const dynamicParams = false

export function generateStaticParams() {
  return getSections().flatMap((section) =>
    getTypes(section.slug).map((type) => ({ section: section.slug, type: type.slug })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, type } = await params
  const sectionMeta = getSection(section)
  const typeMeta = getType(section, type)
  return {
    title: `${typeMeta.title} — ${sectionMeta.title}`,
    description: typeMeta.description || undefined,
    alternates: { canonical: typeMeta.href },
    openGraph: {
      title: `${typeMeta.title} — ${sectionMeta.title}`,
      description: typeMeta.description || undefined,
      url: typeMeta.href,
    },
  }
}

export default async function TypeIndexPage({ params }: Props) {
  const { section, type } = await params

  if (!getTypes(section).some((t) => t.slug === type)) notFound()

  const sectionMeta = getSection(section)
  const typeMeta = getType(section, type)
  const pages = getPages(section, type)
  const body = await getFolderBody([section], type)

  /*
   * ── The bug this replaced ───────────────────────────────────────────────
   * The comparison table used to REPLACE the link list whenever two pages had
   * specs. On /rail/lines/ that meant the index rendered a two-column table of
   * Wenhu and Sanying — and the other seven line pages had no link from the
   * page whose entire job is to list the lines. Written when there were two
   * line pages, still in place when there were nine.
   *
   * The list is not optional. An index navigates; a comparison compares. Both
   * can be on the page, in that order.
   * ────────────────────────────────────────────────────────────────────────
   */
  const withSpecs = pages.filter((p) => p.specs.length > 0)
  const photoGrid = section === 'rail' && PHOTO_GRID_TYPES.has(type)

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: sectionMeta.title, href: sectionMeta.href }, { label: typeMeta.title }]} />
      <BackLink href={sectionMeta.href} label={sectionMeta.title} />
      <h1 className="page-title">{typeMeta.title}</h1>
      {typeMeta.description && <p className="page-summary">{typeMeta.description}</p>}

      {/*
        Run 10 removed three things from this page, and they were all the same
        thing: an announcement of absence.
        ────────────────────────────────────────────────────────────────────
        A "Planned for v2" banner, a tally reading "N scope statements", and
        "No pages yet." Each was written as honesty about scope, and the
        argument for them is in run 1 §3 and it was a decent argument. On a
        live site it does not survive contact with a reader: what it actually
        says is that the section was started and abandoned. Nobody arrives at
        /bus/models/ wanting to know how many pages are missing.

        The discipline it was expressing has not been dropped — it has moved
        to where it belongs. TBC still marks an unsourced figure, the claims
        ratchet still counts unsourced assertions, and /about still states the
        site's scope in prose. Those are claims about *facts*, which is where
        this project's honesty is load-bearing. A counter of unwritten pages
        was only ever a claim about effort.

        Empty types are now dropped from the nav entirely (lib/nav.ts) rather
        than listed and apologised for.
      */}
      {body && <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />}

      {pages.length === 0 ? null : (
        <details className="index-disclosure" open={pages.length < 10}>
          <summary>
            <span className="section-heading" role="heading" aria-level={2}>
              {typeMeta.title}
            </span>
            <span className="disclosure-count">{pages.length} entries</span>
            <span className="disclosure-caret" aria-hidden="true" />
          </summary>
          <div className="index-disclosure-body">
            {photoGrid ? (
        /*
         * Photographed cards, one per item. A card's own page is the primary
         * link (photo, title, summary); the line it serves is a second, real
         * link in its own row below — LineBadge, not an inert span, because
         * Part 11 asked for cards that link to the lines they serve, not
         * cards that merely mention them.
         */
              <ul className="photo-card-grid">
          {pages.map((page) => (
            <PhotoCard
              key={page.slug}
              href={page.href}
              title={page.title}
              summary={page.summary}
              line={page.line}
              image={page.hero?.image ? getImage(page.hero.image) : null}
              meta={page.line && <LineBadge code={page.line} />}
            />
          ))}
              </ul>
            ) : (
              <ul className="card-list">
          {/*
            The per-card "scope statement" / "full page" chip was removed in
            run 10 with the tally above it, for the same reason: on a live site
            a label that says "this one is not really written" is not candour,
            it is a warning against clicking. Run 7 argued it should be a word
            rather than a progress bar so as not to read as a score — right
            about the bar, wrong that the word was needed at all.
          */}
          {pages.map((page) => (
            <CardRow
              key={page.slug}
              href={page.href}
              title={page.title}
              summary={page.summary}
              line={page.line}
              /*
               * The icon is the line's own train, so it belongs on rows whose
               * subject IS a line. A fleet or a depot row gets the badge and
               * the line name and no icon: the C301's row already says C301,
               * and a picture of "what the red line runs" beside it would be
               * read as a picture of the C301.
               */
              isLine={type === 'lines'}
            />
          ))}
              </ul>
            )}
          </div>
        </details>
      )}

      {/*
        The comparison sits BELOW the list now, not instead of it. Its column
        headers link to the same pages, which is why it used to replace them —
        but a table of the two pages that have specs is not an index of nine.
      */}
      {withSpecs.length >= 2 && (
        <>
          <h2 className="section-heading">Side by side</h2>
          <ComparisonTable pages={pages} />
        </>
      )}
    </PageShell>
  )
}
