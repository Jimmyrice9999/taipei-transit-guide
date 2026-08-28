/**
 * /about — what this site is, who made it, and how it sources material.
 *
 * A hand-built route rather than a content page, because it belongs at the root
 * rather than under a section, and because the sourcing policy should live
 * beside the code that enforces it rather than in a Markdown file that could
 * drift away from what the build actually does.
 *
 * Register: plain. A reference site earns trust by being specific about its
 * limits, not by describing its mission.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumbs from '@/components/Breadcrumbs'
import BackLink from '@/components/BackLink'
import TableOfContents from '@/components/TableOfContents'
import { NEUTRAL_LINE } from '@/lib/lines'
import { PROVENANCE, STATIONS } from '@/lib/stations'
import { LINES, TDX_LINES } from '@/lib/lines'
import { getAllPages } from '@/lib/content'

export const metadata: Metadata = {
  // Without an explicit canonical this page inherits the root layout's,
  // which declares '/' — telling search engines this page is really the
  // homepage, and that it should not be indexed in its own right.
  alternates: { canonical: '/about/' },
  title: 'About',
  description:
    'What this site is, what it covers so far, how it sources material, and how to report a correction.',
}

export default function AboutPage() {
  const written = getAllPages().length
  const stubs = getAllPages().filter((p) => p.stub).length

  return (
    <PageShell accent={NEUTRAL_LINE}>
      <Breadcrumbs trail={[{ label: 'About' }]} />
      <BackLink href="/" label="the home page" />
      <h1 className="page-title">About</h1>
      <p className="page-summary">
        An English-language reference for public transport across Taiwan — Taipei and
        New Taipei, Taoyuan, Taichung, Kaohsiung and the systems beyond them — written
        because the material exists in Mandarin and nowhere else in a form you can look
        something up in.
      </p>

      <div className="page-body">
        <TableOfContents items={[
          { id: 'what-this-is', label: 'What this is', level: 2 },
          { id: 'how-it-sources-material', label: 'How it sources material', level: 2 },
          { id: 'where-it-has-got-to', label: 'Where it has got to', level: 2 },
          { id: 'corrections', label: 'Corrections', level: 2 },
          { id: 'how-it-is-built', label: 'How it is built', level: 2 },
        ]} />
        <h2 className="section-heading" id="what-this-is">What this is</h2>
        <p>
          Taiwan's transport network is unusually well documented — in Mandarin. Between{' '}
          <span lang="zh-Hant">批踢踢</span> (PTT), Mobile01 and the Chinese Wikipedia there
          is detailed, argued-over coverage of rolling stock, depot allocations, signalling
          contracts and construction history, for systems from Taipei Metro to Kaohsiung
          Rapid Transit to the branch lines of Taiwan Railway. Some of it is better than
          anything published officially.
        </p>
        <p>
          In English there is an encyclopedia article per line and a great deal of
          visitor-facing advice about which exit to use. What is missing is the layer in
          between: structured reference material you can look a fact up in, with the
          source attached, and covering the country rather than one city. That gap is what
          this site is for.
        </p>
        <p>
          It is independent and non-commercial. It is not affiliated with any transit
          operator — Taipei Rapid Transit Corporation, New Taipei Metro, Taoyuan Metro,
          Taichung Metro, Kaohsiung Rapid Transit, Taiwan Railway, Taiwan High Speed Rail,
          any city or county government, or any bus, ferry or bike-share operator — and it
          carries no advertising.
        </p>

        <h2 className="section-heading" id="how-it-sources-material">How it sources material</h2>

        <h3>Official data where it exists</h3>
        <p>
          For the {STATIONS.filter((station) => station.recordSource === 'tdx').length}{' '}
          stations the platform carries, names, codes, running order, coordinates,
          interchanges, route lengths and end-to-end times come from{' '}
          <a href={PROVENANCE.sourceUrl} rel="noreferrer">
            TDX
          </a>
          , the Ministry of Transportation and Communications' open data platform. So do{' '}
          {TDX_LINES.length} of the {LINES.length} line colours, from the publishing
          operator's own line record. The exception is the Sanying Line, which opened in
          June 2026 and has no record on the platform at all; its colour was read instead
          from the operator's own line mark, and{' '}
          <Link href="/data/line-colours/">the line colours page</Link> says exactly which
          file and what it was checked against. TDX has no Sanying station dataset either,
          so LB01–LB12 are maintained in a separate hand-researched registry from the
          operator's station table and twelve information sheets. Every displayed Sanying
          fact links to that primary evidence, and coordinates remain TBC. The generated
          TDX registry itself is not hand-edited.
        </p>
        <p>
          That decision has already paid for itself twice. Every English-language line
          colour we could find was wrong, including two cases where a confident correction
          citing an official map moved <em>away</em> from the official value — the working
          is on <Link href="/data/line-colours/">the colours page</Link>. And the route
          length this site published was 1.4 km too long, because it measured geometry that
          runs past both termini into depot leads, while the operator's own figure sat
          unread in a field nobody had looked in.
        </p>

        <h3>Mandarin sources, synthesised rather than translated</h3>
        <p>
          Where official data stops — fleet histories, depot facilities, the Matra contract
          dispute, why a line was built the way it was — the material is in Mandarin. The
          policy is to read it, cross-check it, and write it in English from scratch, citing
          the original in its own language rather than an English mirror of it. Translating
          a forum thread wholesale would be both a copyright problem and a way of importing
          its errors without noticing them.
        </p>
        <p>
          Where sources disagree, the intention is to record every value rather than pick
          the most plausible one and present it as settled.
        </p>

        <h3>TBC rather than a guess</h3>
        <p>
          A figure marked <em>TBC</em> means nobody here has traced it to a source worth
          citing. It does not mean the number is unknown to the world. It would be easy to
          fill those gaps with figures that are probably right, and the site would look
          more finished; it would also stop being usable as a reference, because you could
          no longer tell which numbers had been checked.
        </p>
        <p>
          The same applies structurally. A section that has not been researched yet says so
          on its own index page rather than being hidden or padded out. Where a figure has
          been settled since — the two underground Wenhu Line stations were marked
          &ldquo;not established&rdquo; for four builds and are now named, from the
          builder&rsquo;s own record and an encyclopedia agreeing from different directions —
          the page says how it was settled rather than quietly filling the gap.
        </p>

        <h3>Citations, and a count of what has none</h3>
        <p>
          Every page carries a source list, and a figure that rests on one says so with a
          numbered mark you can follow. Each entry records the title in English and in the
          original language, the publisher, the date the URL was read, and whether the
          source is <strong>primary</strong> — the operator, the builder, a government
          department, a court — or <strong>secondary</strong>. That last field is required
          and has no default: this site has already found a case where a citation to an
          official route map was further from the published colour than the value it
          replaced, so who says a thing has to travel with the thing.
        </p>
        <p>
          Everything cited anywhere is collected in the{' '}
          <Link href="/data/sources/">bibliography</Link>, with the primary-to-secondary
          ratio stated at the top. It is currently about a third primary, which is not good
          enough and is published anyway.
        </p>
        <p>
          The build also counts statements that carry <em>no</em> source at all, separately
          from those marked TBC, and refuses to let that number grow. A labelled gap and an
          unlabelled assertion are different failures, and only one of them is honest.
        </p>

        <h3>What is not used</h3>
        <p>
          No operator's route map, photography or signage artwork. Those are copyrighted.
          The maps on this site are drawn from published coordinate geometry, and the line
          colours are the published hex values — a colour specification is a fact, an
          operator's specific map is a design.
        </p>
        <p>
          <Link href="/data/provenance/">Data provenance</Link> sets out field by field what
          is official, what is researched here, what is derived, and what is still open.
        </p>

        <h2 className="section-heading" id="where-it-has-got-to">Where it has got to</h2>
        <p>
          Coverage grew outward from Taipei Metro's Wenhu Line, this site's first deep case
          study, and now spans metro and light rail systems in Taipei, New Taipei, Taoyuan,
          Taichung and Kaohsiung; the national bus network across several cities; Taiwan
          Railway and High Speed Rail groundwork; ferries to the outlying islands; and
          YouBike. Depth is uneven by design — a system gets a page per station and per line
          once it has been researched to that standard, and a section not yet at that depth
          says so rather than padding itself out. {stubs} of the {written} written pages
          still carry a stub flag, meaning some figures on them still need tracing to a
          primary source.
        </p>
        <p>
          All {STATIONS.length} rail stations the platform carries are registered, so any
          station code on the site validates and any of them can be looked up on{' '}
          <Link href="/data/stations/">the station records page</Link>, with position,
          district, coordinates, interchanges and run times where the source publishes them.
          Where TDX does not publish structure, street exits or engineering numbers, some
          lines carry a hand-built overlay sourced from the operator directly instead — the
          station page for any given line says which kind of record it is.
        </p>

        <h2 className="section-heading" id="corrections">Corrections</h2>
        <p>
          Corrections are welcome, and specific ones are most useful: the page, the figure,
          and what it should be, with a source. A source in Mandarin is as good as one in
          English, and often better.
        </p>
        <p>
          The most valuable corrections are the ones that catch something stated
          confidently and wrongly, rather than something already marked TBC — a gap that is
          labelled is doing its job, but a wrong figure presented as checked undermines
          everything next to it.
        </p>
        <p className="note">
          <strong>Reporting a correction.</strong> Open an issue on the repository this site
          is built from, quoting the page URL and the figure in question. If you would
          rather not use an issue tracker, the same information sent any other way is just
          as welcome — what matters is the source, not the channel.
        </p>

        <h2 className="section-heading" id="how-it-is-built">How it is built</h2>
        <p>
          Content is Markdown; the site is generated as static HTML and served as files,
          with no server and no runtime API calls. Station code badges, Chinese language
          tagging, strip maps and geographic maps are all produced at build time from the
          data, which is why a station code that is not real fails the build rather than
          rendering as though it were.
        </p>
        <p className="page-updated">
          Station and line data retrieved from MOTC TDX
          {PROVENANCE.fetchedAt && <> on {PROVENANCE.fetchedAt.slice(0, 10)}</>}. Government
          open data, used under the Open Government Data Licence.
        </p>
      </div>
    </PageShell>
  )
}
