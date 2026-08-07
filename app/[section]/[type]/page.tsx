/** A page-type index: /rail/lines/, /rail/rolling-stock/, /rail/depots/ */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ComparisonTable from '@/components/ComparisonTable'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import HanContentSubset from '@/components/HanContentSubset'
import RichText from '@/components/RichText'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getFolderBody, getPages, getSection, getSections, getType, getTypes } from '@/lib/content'

type Props = { params: Promise<{ section: string; type: string }> }

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

  /*
   * The index's own header, computed from the tree rather than written down.
   *
   * Content pages have photographs and these do not, so run 6 left them
   * noticeably barer — and the honest fix is not to borrow a child page's
   * photograph, which would decorate a parent with a picture of one of its
   * children and push the links below the fold on a phone. It is to say
   * something true in the space: how many of these exist, and how many are
   * actually written. The second number is uncomfortable and computed, which
   * is the only reason it is worth printing.
   */
  const written = pages.filter((p) => p.specs.length > 0 || p.facts.length >= 6).length

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: sectionMeta.title, href: sectionMeta.href }, { label: typeMeta.title }]} />
      <h1 className="page-title">{typeMeta.title}</h1>
      {typeMeta.description && <p className="page-summary">{typeMeta.description}</p>}

      {typeMeta.status === 'planned' && (
        <p className="note note-planned">
          <strong>Planned for v2.</strong> Nothing here is written yet.
        </p>
      )}

      {pages.length > 1 && (
        <div className="index-tally">
          <span>
            <b>{pages.length}</b> {pages.length === 1 ? 'page' : 'pages'}
          </span>
          <span>
            <b>{written}</b> written up
          </span>
          <span>
            <b>{pages.length - written}</b> scope {pages.length - written === 1 ? 'statement' : 'statements'}
          </span>
        </div>
      )}

      {body && <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />}

      {pages.length === 0 ? (
        typeMeta.status === 'planned' ? null : (
          <p className="empty">No pages yet.</p>
        )
      ) : (
        <ul className="card-list">
          {pages.map((page) => {
            const isWritten = page.specs.length > 0 || page.facts.length >= 6
            return (
              <li key={page.slug}>
                <Link href={page.href}>
                  <span>
                    <span className="card-title">
                      <RichText>{page.title}</RichText>
                    </span>
                    {page.summary && (
                      <span className="card-desc">
                        <RichText>{page.summary}</RichText>
                      </span>
                    )}
                  </span>
                  <span className="card-meta">
                    {/*
                      A word, not a progress bar. A bar would turn a status into
                      a score and imply a scope statement is a fraction of a
                      page. It is not a partial page; it is a different and
                      complete thing, and the site argued that properly when it
                      wrote them.
                    */}
                    <span className="card-status" data-written={isWritten ? '' : undefined}>
                      {isWritten ? 'full page' : 'scope statement'}
                    </span>
                    <span className="card-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
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
