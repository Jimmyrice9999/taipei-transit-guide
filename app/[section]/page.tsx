/**
 * A section landing page: /rail/ or /bus/
 *
 * The square brackets make this a dynamic route — one file rendering many URLs.
 * `generateStaticParams` lists the ones that exist; `dynamicParams = false`
 * makes anything else a 404 instead of an error.
 */

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getFolderBody, getPages, getSection, getSections, getTypes } from '@/lib/content'

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
  return {
    title: meta.title,
    description: meta.description || undefined,
    alternates: { canonical: meta.href },
    openGraph: {
      title: meta.title,
      description: meta.description || undefined,
      url: meta.href,
    },
  }
}

export default async function SectionPage({ params }: Props) {
  const { section } = await params

  if (!getSections().some((s) => s.slug === section)) notFound()

  const meta = getSection(section)
  const types = getTypes(section)
  const body = await getFolderBody([], section)

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: meta.title }]} />
      <h1 className="page-title">{meta.title}</h1>
      {meta.description && <p className="page-summary">{meta.description}</p>}

      {/*
        A section that is deliberately empty says so, once, at the top — and
        then explains itself in its own prose. The alternative was three
        repetitions of "No pages yet.", which reads as abandonment rather than
        as scope.
      */}
      {meta.status === 'planned' && (
        <p className="note note-planned">
          <strong>Planned for v2.</strong> Nothing in this section is written yet. What
          follows is what it will cover and why it does not exist — stated deliberately,
          rather than left as an empty listing.
        </p>
      )}

      {body && <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />}

      {/* The network overview and the station index are generated from data
          rather than Markdown, so they have no content folder to be listed
          from. Without these cards they were reachable only by typing the URL. */}
      {section === 'rail' && (
        <ul className="card-list">
          <li>
            <Link href="/rail/network/">
              <span>
                <span className="card-title">The network</span>
                <span className="card-desc">
                  All seven lines across three operators, with a geographic map drawn
                  from official route geometry.
                </span>
              </span>
              <span className="card-meta">
                <span className="card-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/rail/stations/">
              <span>
                <span className="card-title">Stations</span>
                <span className="card-desc">
                  Every station with a page so far — generated from the same registry
                  that draws the maps.
                </span>
              </span>
              <span className="card-meta">
                <span className="card-arrow" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          </li>
        </ul>
      )}

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
              /* Under a planned section the notice at the top has already said
                 this, and repeating "No pages yet." once per type is what made
                 the section read as neglected rather than deliberate. */
              meta.status === 'planned' ? null : (
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
          </section>
        )
      })}
    </PageShell>
  )
}
