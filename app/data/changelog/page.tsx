import type { Metadata } from 'next'
import Link from 'next/link'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageShell from '@/components/PageShell'
import RichText from '@/components/RichText'
import TableOfContents from '@/components/TableOfContents'
import { getChangelogEntries } from '@/lib/changelog'
import { NEUTRAL_LINE } from '@/lib/lines'

export const metadata: Metadata = {
  alternates: { canonical: '/data/changelog/' },
  title: 'Changelog',
  description: 'A generated changelog from the project run log, showing research, corrections, audits and new data layers.',
}

function RunEntry({ entry }: { entry: ReturnType<typeof getChangelogEntries>[number] }) {
  return (
    <article className="changelog-entry" id={entry.anchor}>
      <div className="changelog-entry-head">
        <span className="changelog-run">{entry.kind}</span>
        <time>{entry.date || 'Date TBC'}</time>
      </div>
      <h3><RichText>{entry.title}</RichText></h3>
      <p><RichText>{entry.summary}</RichText></p>
    </article>
  )
}

export default function ChangelogPage() {
  const entries = getChangelogEntries()
  const recent = entries.slice(-12).reverse()
  const archive = entries.slice(0, -12).reverse()

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'Data', href: '/data/' }, { label: 'Changelog' }]} />
      <BackLink href="/data/" label="Data" />
      <h1 className="page-title">Changelog</h1>
      <p className="page-summary">{entries.length} reader-facing changes, generated at build time from the project&rsquo;s detailed research log.</p>

      <div className="page-body">
        <TableOfContents items={[
          { id: 'method', label: 'How this is generated', level: 2 },
          { id: 'recent', label: 'Recent runs', level: 2 },
          { id: 'archive', label: 'Earlier runs', level: 2 },
        ]} />
        <h2 className="section-heading" id="method">How this is generated</h2>
        <p>
          This page is a static reading of the repository run log. At build time the parser
          reads both generations of run headings, groups split parts into one change, and
          selects prose about new coverage, updates or corrections. Gate output, test counts,
          commit hashes, CI mechanics and unfinished-work notes are deliberately excluded.
          It does not query an API, render a server endpoint or guess at Git history.
        </p>
        <p>
          Entries are ordered newest first so a reader can see what changed since the last
          visit. Corrections stay visible and are labelled in words. An absent date remains
          “Date TBC” rather than being replaced with the build date.
        </p>

        <h2 className="section-heading" id="recent">Recent runs</h2>
        <div className="changelog-list">
          {recent.map((entry) => <RunEntry key={entry.anchor} entry={entry} />)}
        </div>

        <h2 className="section-heading" id="archive">Earlier runs</h2>
        <div className="changelog-list">
          {archive.map((entry) => <RunEntry key={entry.anchor} entry={entry} />)}
        </div>
        <p className="page-updated">
          The detailed source record is <Link href="/about/">the guide's research and audit corpus</Link> in the repository; this page is regenerated whenever the run log changes.
        </p>
      </div>
    </PageShell>
  )
}
