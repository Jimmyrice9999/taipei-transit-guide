/** A page-type index: /train/lines/, /train/rolling-stock/, /train/depots/ */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getPages, getSection, getSections, getType, getTypes } from '@/lib/content'

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
  }
}

export default async function TypeIndexPage({ params }: Props) {
  const { section, type } = await params

  if (!getTypes(section).some((t) => t.slug === type)) notFound()

  const sectionMeta = getSection(section)
  const typeMeta = getType(section, type)
  const pages = getPages(section, type)

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs
        trail={[
          { href: sectionMeta.href, label: sectionMeta.title },
          { label: typeMeta.title },
        ]}
      />
      <h1 className="page-title">{typeMeta.title}</h1>
      {typeMeta.description && <p className="page-summary">{typeMeta.description}</p>}

      {pages.length === 0 ? (
        <p className="empty">No pages yet.</p>
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
