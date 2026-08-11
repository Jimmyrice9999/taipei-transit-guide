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
import BackLink from '@/components/BackLink'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import { LINES, NEUTRAL_LINE } from '@/lib/lines'
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
      <BackLink href="/" label="the home page" />
      <h1 className="page-title">{meta.title}</h1>
      {meta.description && <p className="page-summary">{meta.description}</p>}

      {/*
        ── Two changes here in run 10, and the second is the important one ────
        The "Planned for v2" banner is gone — see the long note in
        [type]/page.tsx for the argument. An empty section is now simply not
        in the nav (lib/nav.ts) rather than listed with an apology attached.

        And the section's prose has moved BELOW the links. It used to render
        between the summary and the cards, which on /rail/ meant a full screen
        of explanation before the first link — reported as having to scroll a
        page to reach them. An index's job is to get you out of it. Whoever
        wants the essay will still find it under the links; nobody who wanted
        the Wenhu Line had to read it first.
      */}

      {/* The network overview and the station index are generated from data
          rather than Markdown, so they have no content folder to be listed
          from. Without these cards they were reachable only by typing the URL. */}
      {section === 'rail' && (
        <ul className="card-list">
          <li>
            <Link href="/rail/network/">
              <span>
                <span className="card-title">The network</span>
                {/*
                  Counted, not typed. This said "All seven lines across three
                  operators" and was still saying it after run 10 added the two
                  light rail lines — the same class of staleness that had /data
                  claiming "157 stations across five lines" when there were
                  seven. A number in prose about the site's own data should
                  come from that data.
                */}
                <span className="card-desc">
                  All {LINES.length} lines across {new Set(LINES.map((l) => l.operator)).size}{' '}
                  operators, with a geographic map drawn from official route geometry.
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

      {/*
        A type with no pages is not rendered at all — no heading, no "No pages
        yet.", nothing. The heading was the whole of the problem: it announced
        a category and then had nothing in it, which is a worse experience than
        the category simply not being mentioned yet.
      */}
      {types.map((type) => {
        const pages = getPages(section, type.slug)
        if (pages.length === 0) return null
        return (
          <section key={type.slug}>
            <h2 className="section-heading">
              {type.title}
              <Link className="all-link" href={type.href}>
                All {type.title.toLowerCase()} →
              </Link>
            </h2>
            {type.description && <p className="section-desc">{type.description}</p>}
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
          </section>
        )
      })}

      {/* The section's own prose, below the links. See the note above. */}
      {body && <div className="prose section-essay" dangerouslySetInnerHTML={{ __html: body }} />}
    </PageShell>
  )
}
