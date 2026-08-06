/** A page-type index: /train/lines/, /train/rolling-stock/, /train/depots/ */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ComparisonTable from '@/components/ComparisonTable'
import PageShell from '@/components/PageShell'
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

  // Must match ComparisonTable's own threshold, or one of them renders nothing
  // and the page loses its links entirely.
  const comparable = pages.filter((p) => p.specs.length > 0).length >= 2

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Link className="up-link" href={sectionMeta.href}>
        ‹ {sectionMeta.title}
      </Link>
      <h1 className="page-title">{typeMeta.title}</h1>
      {typeMeta.description && <p className="page-summary">{typeMeta.description}</p>}

      {typeMeta.status === 'planned' && (
        <p className="note note-planned">
          <strong>Planned for v2.</strong> Nothing here is written yet.
        </p>
      )}

      {body && <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />}

      {/*
        Where the folder holds two or more things with specifications, the
        comparison table replaces the link list rather than sitting above it.
        Its column headers are already links to the same pages, so showing both
        put the identical two links twice within 200px of each other.
      */}
      <ComparisonTable pages={pages} />

      {comparable ? null : pages.length === 0 ? (
        typeMeta.status === 'planned' ? null : (
          <p className="empty">No pages yet.</p>
        )
      ) : (
        <ul className="card-list">
          {pages.map((page) => (
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
                  <span className="card-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  )
}
