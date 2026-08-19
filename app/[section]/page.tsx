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
import CardRow from '@/components/CardRow'
import Figure from '@/components/Figure'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import References from '@/components/References'
import RichText from '@/components/RichText'
import { getImage } from '@/lib/images'
import { NEUTRAL_LINE } from '@/lib/lines'
import { getFolderContent, getPages, getSection, getSections, getSystems, getTypes } from '@/lib/content'

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
  const systems = getSystems(section)
  const folderContent = await getFolderContent([], section)
  const heroImage = meta.hero?.image ? getImage(meta.hero.image) : null

  /*
   * A section with systems leads with them, and the types listed below are the
   * cross-system ones only — see the note on `Folder.kind` in lib/content. The
   * metro's own lines, fleets, depots and stations are on /rail/metro/, which
   * is where a reader who wants the metro is going anyway.
   *
   * This replaced the run-11 hub-card block, which hard-coded four Rail cards
   * here. Those cards were doing exactly this job — pulling the big types out
   * of a flat list — for a section that did not yet have a level to put them
   * on. It has one now.
   */
  const systemCounts = new Map(
    systems.map((system) => [
      system.slug,
      getTypes(section, system.slug).reduce(
        (total, type) => total + getPages(section, type.slug, system.slug).length,
        0,
      ),
    ]),
  )

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <HanContentSubset />
      {heroImage && (
        <Figure
          image={heroImage}
          alt={meta.hero?.alt || meta.title}
          caption={meta.hero?.caption}
          priority
          className="figure page-hero"
        />
      )}
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

      {/*
        The overview map leads, before the systems it draws.

        It is generated from data rather than Markdown, so it has no content
        folder to be listed from, and it puts every system's lines on one
        picture — so it belongs to the section rather than to any one system.
        Without this card it was reachable only by typing the URL.
      */}
      {section === 'rail' && (
        <ul className="card-list">
          <li>
            <Link href="/rail/network/">
              <span className="card-body">
                <span className="card-title">The network</span>
                <span className="card-desc">
                  Every line on one map, drawn from official route geometry, with
                  official colours, station counts, termini and end-to-end times.
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
        Then the systems.

        The reader who arrives at /rail/ wants a railway, and which railway is
        the first branch — not which kind of page. Each card carries its own
        page count, read from the tree rather than typed, so a system that
        gains a line cannot leave this card describing the old one.
      */}
      {systems.length > 0 && (
        <>
          <h2 className="section-heading">Systems</h2>
          <ul className="card-list">
            {systems.map((system) => {
              const count = systemCounts.get(system.slug) ?? 0
              return (
                <li key={system.slug}>
                  <Link href={system.href}>
                    <span className="card-body">
                      <span className="card-title">{system.title}</span>
                      {system.description && (
                        <span className="card-desc">
                          <RichText>{system.description}</RichText>
                        </span>
                      )}
                    </span>
                    <span className="card-meta">
                      {count} {count === 1 ? 'page' : 'pages'}
                      <span className="card-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
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
                <CardRow
                  key={page.slug}
                  href={page.href}
                  title={page.title}
                  summary={page.summary}
                  line={page.line}
                  isLine={type.slug === 'lines'}
                />
              ))}
            </ul>
          </section>
        )
      })}

      {/* The section's own prose, below the links. See the note above. */}
      {folderContent.html && <div className="prose section-essay" dangerouslySetInnerHTML={{ __html: folderContent.html }} />}
      <References references={folderContent.references} />
    </PageShell>
  )
}
