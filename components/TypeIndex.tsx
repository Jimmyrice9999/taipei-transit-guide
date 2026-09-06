/**
 * A page-type index: /rail/metro/lines/, /bike/history/, /ticketing/guides/.
 *
 * The layout is shared by the two route shapes that reach it — see the note in
 * components/EntityPage for why a section may now have a system level between
 * it and its types.
 */

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
import References from '@/components/References'
import RouteFilter from '@/components/RouteFilter'
import { LIST_FILTER_THRESHOLD } from '@/lib/list-filter'
import TableOfContents from '@/components/TableOfContents'
import { getImage } from '@/lib/images'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getFolderContent, getPages, getSection, getSystem, getType, getTypes } from '@/lib/content'
import { getEntityIconKind } from '@/components/EntityIcon'
import { isLocale, withLocaleMetadata } from '@/lib/locale'
import { locale as rootLocale } from 'next/root-params'
import NationalCoachIndex from '@/components/NationalCoachIndex'
import NationalTouristShuttleAtlas from '@/components/NationalTouristShuttleAtlas'
import EditorialHeader from '@/components/EditorialHeader'


/** Which type index to render. `system` is '' for a section with no systems. */
export type TypeRef = {
  section: string
  system?: string
  type: string
}

/*
 * Rolling stock and depots, and only these two, get the photographed-card
 * treatment. Part 11's complaint was these two types listed in full on
 * /rail — lines, operators, systems and history are not the wall of links
 * it named, and giving every type folder on the site a photo grid would be
 * a redesign nobody asked for. See docs/run-log.md for the audit that
 * scoped this.
 */
const PHOTO_GRID_TYPES = new Set(['rolling-stock', 'depots'])

export async function typeIndexMetadata({ section, system = '', type }: TypeRef): Promise<Metadata> {
  const sectionMeta = getSection(section)
  const systemMeta = system ? getSystem(section, system) : null
  const typeMeta = getType(section, type, system)
  /*
   * The system belongs in the title, not just in the URL. /rail/metro/lines/
   * and /rail/cable/lines/ are both "Lines — Rail & cable" without it, which
   * is a duplicate `<title>` — the thing tests/discoverability checks for, and
   * the thing that makes two search results indistinguishable.
   */
  const title = [typeMeta.title, systemMeta?.title, sectionMeta.title]
    .filter(Boolean)
    .join(' — ')
  const currentLocale = await rootLocale()
  return withLocaleMetadata(isLocale(currentLocale) ? currentLocale : 'en', {
    title,
    description: typeMeta.description || undefined,
    alternates: { canonical: typeMeta.href },
    openGraph: {
      title,
      description: typeMeta.description || undefined,
      url: typeMeta.href,
    },
  })
}

export default async function TypeIndex({ section, system = '', type }: TypeRef) {
  if (!getTypes(section, system).some((t) => t.slug === type)) notFound()

  const currentLocale = await rootLocale()
  const locale = isLocale(currentLocale) ? currentLocale : 'en'

  const sectionMeta = getSection(section)
  const systemMeta = system ? getSystem(section, system) : null
  const typeMeta = getType(section, type, system)
  const pages = getPages(section, type, system)
  const folderContent = await getFolderContent(system ? [section, system] : [section], type, locale)

  /*
   * ── The bug this replaced ───────────────────────────────────────────────
   * The comparison table used to REPLACE the link list whenever two pages had
   * specs. On /rail/metro/lines/ that meant the index rendered a two-column table of
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
  const entityKind = getEntityIconKind(section, type)
  const toc = [
    ...folderContent.toc,
    ...(withSpecs.length >= 2 ? [{ id: 'side-by-side', label: 'Side by side', level: 2 as const }] : []),
    ...(folderContent.references.length > 0 ? [{ id: 'references', label: 'References', level: 2 as const }] : []),
  ]

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <HanContentSubset />
      <Breadcrumbs
        trail={[
          { label: sectionMeta.title, href: sectionMeta.href },
          ...(systemMeta ? [{ label: systemMeta.title, href: systemMeta.href }] : []),
          { label: typeMeta.title },
        ]}
      />
      {/* Up one level, which is the system when there is one. A type index
          inside a system belongs to that system, not to the section. */}
      <BackLink
        href={systemMeta ? systemMeta.href : sectionMeta.href}
        label={systemMeta ? systemMeta.title : sectionMeta.title}
      />
      <EditorialHeader
        eyebrow={[sectionMeta.title, systemMeta?.title].filter(Boolean).join(' · ')}
        title={typeMeta.title}
        summary={typeMeta.description}
      />

      <TableOfContents items={toc} />

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
      {folderContent.html && <div className="prose" dangerouslySetInnerHTML={{ __html: folderContent.html }} />}

      {section === 'bus' && type === 'intercity' && <NationalCoachIndex />}
      {section === 'bus' && type === 'tourist' && <NationalTouristShuttleAtlas />}

      {/*
        ── Run 51, part 4: this list is why the page exists ────────────────────
        It was wrapped in a disclosure with `open={pages.length < 10}`, so
        /rail/metro/lines/ — with exactly ten line pages — shipped CLOSED. The
        index of the site's ten metro lines was one click away on the page whose
        only job is to list them, and the threshold that decided it was a count
        nobody could see. Reported, and correct to report.

        The rule applied across the site: a disclosure is legitimate when it is
        one of several peers and the reader is choosing between them — the
        station index's ten lines, the New Taipei subgroups, a route's two
        directions. A single disclosure wrapping the whole of a page's content
        is not that. Its only useful state is open, so it does not need a
        control, and having one is a way for the page to be wrong.
      */}
      {pages.length === 0 ? null : (
        <section className="index-section" data-route-filter={photoGrid ? undefined : ''}>
          {/*
            No heading. The disclosure this replaced needed one for its summary,
            but the `<h1>` two lines up already says "Lines" — repeating it as an
            `<h2>` immediately below is the same word twice with nothing between
            them. The count is worth keeping and is not a heading.
          */}
          <p className="index-count">
            {pages.length} {pages.length === 1 ? 'entry' : 'entries'}
          </p>
          {/*
            A type index can run past 200 entries — TRA's station index is 243
            rows in a single flat list, the same "long flat list" problem the
            nav redesign fixed at the dropdown level. Reuses the exact filter
            the bus route groups already ship (components/RouteFilter) rather
            than inventing a second one: it hides non-matching rows via
            `hidden` on real static `<a>`s, so the list stays a complete index
            with JavaScript off. Not offered on a photo grid — the photo-card
            layout does not write `data-search` onto its rows (see PhotoCard),
            and every photo-grid type on the site (rolling stock, depots) is
            well under the threshold anyway.
          */}
          {!photoGrid && pages.length >= LIST_FILTER_THRESHOLD && (
            <RouteFilter total={pages.length} noun={typeMeta.title.toLowerCase()} />
          )}
          <div>
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
              operator={page.operator || undefined}
              image={page.hero?.image ? getImage(page.hero.image) : null}
              entityKind={entityKind}
              meta={page.line && <LineBadge code={page.line} operator={page.operator || undefined} />}
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
              operator={page.operator || undefined}
              entityKind={entityKind}
              /* Same three keys the global search index and the bus route
                 filter both match on: the title, any alternate names, and the
                 slug — not the rendered summary, which can carry an unrelated
                 number (a county, a sequence) that would produce false hits. */
              search={[page.title, ...page.aliases, page.slug].join(' ')}
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
        </section>
      )}

      {/*
        The comparison sits BELOW the list now, not instead of it. Its column
        headers link to the same pages, which is why it used to replace them —
        but a table of the two pages that have specs is not an index of nine.
      */}
      {withSpecs.length >= 2 && (
        <>
          <h2 className="section-heading" id="side-by-side">Side by side</h2>
          <ComparisonTable pages={pages} />
        </>
      )}

      {/*
        Sources last. This used to sit directly under the folder's prose and
        ABOVE the index — so on /rail/metro/lines/ a reader met the citation
        list before the list of lines. A reference list is what you check a
        statement against; it belongs below everything it answers for.
      */}
      <References references={folderContent.references} />
    </PageShell>
  )
}
