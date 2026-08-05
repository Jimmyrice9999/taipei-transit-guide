/**
 * A section landing page: /train/ or /bus/
 *
 * The square brackets make this a dynamic route — one file rendering many URLs.
 * `generateStaticParams` lists the ones that exist; `dynamicParams = false`
 * makes anything else a 404 instead of an error.
 */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getPages, getSection, getSections, getTypes } from '@/lib/content'

type Props = { params: Promise<{ section: string }> }

/*
 * Without this, a request for a path that is not a real section — /favicon.ico,
 * /robots.txt, a typo — reaches this route and throws, because a static export
 * cannot render a page it was never told about. false turns those into a clean
 * 404. The notFound() call below is the belt to this braces.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return getSections().map((section) => ({ section: section.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params
  const meta = getSection(section)
  return { title: meta.title, description: meta.description || undefined }
}

export default async function SectionPage({ params }: Props) {
  const { section } = await params

  if (!getSections().some((s) => s.slug === section)) notFound()

  const meta = getSection(section)
  const types = getTypes(section)

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: meta.title }]} />
      <h1 className="page-title">{meta.title}</h1>
      {meta.description && <p className="page-summary">{meta.description}</p>}

      {types.map((type) => {
        const pages = getPages(section, type.slug)
        return (
          <section key={type.slug}>
            <h2 className="section-heading">
              {type.title}
              <Link className="all-link" href={type.href}>
                All {type.title.toLowerCase()} →
              </Link>
            </h2>
            {type.description && <p className="section-desc">{type.description}</p>}
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
          </section>
        )
      })}
    </PageShell>
  )
}
