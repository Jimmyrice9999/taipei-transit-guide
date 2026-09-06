/**
 * /data/sources — every source the site cites, in one list.
 *
 * The per-page references answer "what is this figure based on". This page
 * answers the harder question: "what is this whole site based on". It leads
 * with the primary-versus-secondary split because that ratio is the honest
 * summary of how much the site knows first-hand, and it is the number that
 * should embarrass us into finding better sources.
 */

import type { Metadata } from 'next'
import Link from '@/components/LocaleLink'
import JsonLd from '@/components/JsonLd'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import HanContentSubset from '@/components/HanContentSubset'
import RichText from '@/components/RichText'
import TableOfContents from '@/components/TableOfContents'
import { getAllSources } from '@/lib/content'
import { NEUTRAL_LINE } from '@/lib/lines'
import { breadcrumbSchema } from '@/lib/structured-data'
import { isLocale, withLocaleMetadata } from '@/lib/locale'
import { locale as rootLocale } from 'next/root-params'

export async function generateMetadata(): Promise<Metadata> {
  const currentLocale = await rootLocale()
  return withLocaleMetadata(isLocale(currentLocale) ? currentLocale : 'en', {
  alternates: { canonical: '/data/sources/' },
  title: 'Bibliography',
  description:
    'Every source cited anywhere on this site, marked primary or secondary, with the pages that rely on it and the date each URL was read.',
  })
}

export default async function SourcesPage() {
  const currentLocale = await rootLocale()
  const locale = isLocale(currentLocale) ? currentLocale : 'en'
  const entries = await getAllSources()
  const primary = entries.filter((e) => e.source.kind === 'primary')
  const secondary = entries.filter((e) => e.source.kind === 'secondary')

  const groups = [
    {
      kind: 'primary' as const,
      heading: 'Primary sources',
      blurb:
        'Published by the body that created the fact — the operator, the builder, the ' +
        'government department, or a court. A primary source can still be wrong, but it is ' +
        'wrong on its own authority rather than by transcription.',
      entries: primary,
    },
    {
      kind: 'secondary' as const,
      heading: 'Secondary sources',
      blurb:
        'Reports on a fact created elsewhere: encyclopedias, news, scholarship, enthusiast ' +
        'material. Used where nothing primary was found, and marked so that you know.',
      entries: secondary,
    },
  ]

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <HanContentSubset />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Data', path: '/data/' },
            { name: 'Bibliography', path: '/data/sources/' },
          ], locale),
        ]}
      />

      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Bibliography' }]} />
      <BackLink href="/data/" label="Data" />

      <h1 className="page-title">Bibliography</h1>
      <p className="page-summary">
        Every source cited anywhere on this site, with what kind of source it is and which
        pages rest on it.
      </p>

      <div className="page-body">
        <TableOfContents items={[
          ...groups
            .filter((group) => group.entries.length > 0)
            .map((group) => ({ id: `${group.kind}-sources`, label: group.heading, level: 2 as const })),
          { id: 'limits', label: 'What this page does not tell you', level: 2 },
        ]} />
        {entries.length === 0 ? (
          <p className="note">
            <strong>Nothing is cited yet.</strong> Pages declare their sources in
            frontmatter and cite them inline; until they do, this page is empty — which is
            an accurate report of the situation rather than a broken page.
          </p>
        ) : (
          <>
            <p className="lede wide">
              {primary.length} of {entries.length} sources are primary
              {entries.length > 0 && (
                <> — {Math.round((primary.length / entries.length) * 100)}% of the
                bibliography</>
              )}
              . That number is the one worth watching. A reference site assembled entirely
              from encyclopedias is a transcription of an encyclopedia.
            </p>

            {groups.map((group) =>
              group.entries.length === 0 ? null : (
                <section key={group.kind}>
                  <h2 className="section-heading" id={`${group.kind}-sources`}>
                    {group.heading} <span className="biblio-count">{group.entries.length}</span>
                  </h2>
                  <p>{group.blurb}</p>

                  <ol className="refs-list wide">
                    {group.entries.map(({ source, pages }) => (
                      <li className="refs-item" key={source.url || source.id}>
                        <span className="refs-number" aria-hidden="true">
                          ·
                        </span>
                        <div className="refs-body">
                          <span className="refs-title">
                            <a href={source.url} rel="nofollow noopener">
                              <RichText>{source.title}</RichText>
                            </a>
                          </span>

                          {source.titleOriginal && (
                            <span className="refs-original" lang={source.lang || undefined}>
                              {source.titleOriginal}
                            </span>
                          )}

                          <span className="refs-meta">
                            <span className="refs-kind" data-kind={source.kind}>
                              {source.kind}
                            </span>
                            <RichText>{source.publisher}</RichText>
                            {source.accessed && (
                              <span className="refs-accessed">accessed {source.accessed}</span>
                            )}
                            {source.snapshot && (
                              <a
                                className="refs-archive"
                                href={source.snapshot}
                                rel="nofollow noopener"
                              >
                                archived
                              </a>
                            )}
                            {source.snapshotAlt && (
                              <a
                                className="refs-archive"
                                href={source.snapshotAlt}
                                rel="nofollow noopener"
                              >
                                mirror
                              </a>
                            )}
                          </span>

                          {source.note && (
                            <span className="refs-note">
                              <RichText>{source.note}</RichText>
                            </span>
                          )}

                          <span className="refs-meta">
                            Cited by{' '}
                            {pages.map((page, index) => (
                              <span key={page.href}>
                                {index > 0 && ', '}
                                <Link href={page.href}>
                                  <RichText badges={false} stationCodes={false}>{page.title}</RichText>
                                </Link>
                              </span>
                            ))}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              ),
            )}
          </>
        )}

        <h2 className="section-heading" id="limits">What this page does not tell you</h2>
        <p>
          It lists what is cited, not what is asserted. A page can carry a figure with no
          citation at all, and that figure will not appear here — which is precisely why
          the build counts those separately. Run <code>npm run claims</code> for the count
          of statements on this site that currently rest on nobody&rsquo;s authority.
        </p>
        <p>
          Nor does it tell you whether a source is <em>right</em>. This site has already
          found one case where a citation to an official route map was further from the
          published colour than the value it replaced. Primary means &ldquo;first
          hand&rdquo;, not &ldquo;correct&rdquo;.
        </p>
      </div>
    </PageShell>
  )
}
