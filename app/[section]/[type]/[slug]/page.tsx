/**
 * A content page: /train/lines/wenhu-line/
 *
 * The same code renders every page type — a Line, a Rolling Stock entry and a
 * Depot differ only in what their Markdown file says.
 */

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FactsTable from '@/components/FactsTable'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import { getAccent } from '@/lib/lines'
import { getAllPages, getPage, getSection, getType } from '@/lib/content'

type Props = { params: Promise<{ section: string; type: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPages().map((page) => ({
    section: page.section,
    type: page.type,
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, type, slug } = await params
  const page = await getPage(section, type, slug)
  return { title: page.title, description: page.summary || undefined }
}

export default async function ContentPage({ params }: Props) {
  const { section, type, slug } = await params

  const exists = getAllPages().some(
    (p) => p.section === section && p.type === type && p.slug === slug,
  )
  if (!exists) notFound()

  const page = await getPage(section, type, slug)
  const sectionMeta = getSection(section)
  const typeMeta = getType(section, type)

  // `line: BR` in frontmatter; falls back to the site neutral.
  const accent = getAccent(page.line)

  return (
    <PageShell accent={accent}>
      <Breadcrumbs
        trail={[
          { href: sectionMeta.href, label: sectionMeta.title },
          { href: typeMeta.href, label: typeMeta.title },
          { label: page.title },
        ]}
      />

      <article>
        <div className="eyebrow">
          {typeMeta.title}
          {accent.code && ` · ${accent.name} Line`}
        </div>
        <h1 className="page-title">
          <RichText>{page.title}</RichText>
        </h1>
        {page.summary && (
          <p className="page-summary">
            <RichText>{page.summary}</RichText>
          </p>
        )}

        <div className="page-grid">
          <div>
            {page.stub && (
              <p className="note">
                <strong>Stub page.</strong> This entry is an outline. Figures marked{' '}
                <em>TBC</em> still need to be checked against a primary source before
                publication.
              </p>
            )}

            {/*
              The Markdown body was converted to HTML at build time, including
              station badges and Chinese language tagging. React needs this
              explicit opt-in to insert raw HTML — only ever safe because the
              content is our own files in /content.
            */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />

            {page.updated && <p className="page-updated">Last updated: {page.updated}</p>}
          </div>

          <aside className="page-rail">
            <FactsTable facts={page.facts} />
          </aside>
        </div>
      </article>
    </PageShell>
  )
}
