import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BackLink from '@/components/BackLink'
import Breadcrumbs from '@/components/Breadcrumbs'
import CardRow from '@/components/CardRow'
import RouteFilter from '@/components/RouteFilter'
import HanContentSubset from '@/components/HanContentSubset'
import PageShell from '@/components/PageShell'
import References from '@/components/References'
import RichText from '@/components/RichText'
import { getFolder, getFolderContent } from '@/lib/content'
import { getBusRoutesByGroup, type BusRouteGroup } from '@/lib/bus/routes'
import { getNewTaipeiRouteSubgroup, NEW_TAIPEI_SUBGROUPS } from '@/lib/bus/new-taipei'
import { getBuiltBusRouteGroups, getGroupLineCode, getGroupLineOperator } from '@/lib/bus/route-groups'
import { getAccent } from '@/lib/lines'

type Props = { params: Promise<{ group: string }> }

export const dynamicParams = false

/*
 * Above this many routes a group gets its own filter box.
 *
 * Twenty is the size of the brown-line feeder group, which fits on one screen
 * at desktop width and does not need one; New Taipei's 562 plainly does. The
 * number is a judgement about when a list stops being scannable, not a
 * measurement, and it is here rather than inline so it is one decision.
 */
const FILTER_THRESHOLD = 24

function hasOverlay(group: string, slug: string) {
  return fs.existsSync(path.join(process.cwd(), 'content', 'bus', 'routes', group, `${slug}.md`))
}

export function generateStaticParams() {
  return getBuiltBusRouteGroups().map((group) => ({ group }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group } = await params
  if (!getBuiltBusRouteGroups().includes(group as BusRouteGroup)) notFound()
  const folder = getFolder(['bus', 'routes'], group)
  return {
    title: folder.title,
    description: folder.description || undefined,
    alternates: { canonical: folder.href },
  }
}

export default async function BusRouteGroupPage({ params }: Props) {
  const { group } = await params
  if (!getBuiltBusRouteGroups().includes(group as BusRouteGroup)) notFound()

  const folder = getFolder(['bus', 'routes'], group)
  const routes = getBusRoutesByGroup(group as BusRouteGroup).filter((route) => hasOverlay(group, route.canonicalSlug))
  const folderContent = await getFolderContent(['bus', 'routes'], group)
  const lineCode = getGroupLineCode(group as BusRouteGroup)
  const lineOperator = getGroupLineOperator(group as BusRouteGroup)
  const subgroups = group === 'new-taipei'
    ? NEW_TAIPEI_SUBGROUPS.map((subgroup) => ({
        ...subgroup,
        routes: routes.filter((route) => getNewTaipeiRouteSubgroup(route) === subgroup.key),
      })).filter((subgroup) => subgroup.routes.length > 0)
    : []
  const routeCards = (items: typeof routes) => items.map((route) => (
    <CardRow
      key={route.id}
      href={`/bus/routes/${group}/${route.canonicalSlug}/`}
      title={`${route.names.en} / ${route.names.zh_tw}`}
      /* The keys the in-group filter matches on — the same three the global
         search index carries for this route. */
      search={`${route.names.en} ${route.names.zh_tw} ${route.canonicalSlug}`}
      summary={`${route.sourceCities.join(', ')} · ${route.operatorIds.length} current operator record${route.operatorIds.length === 1 ? '' : 's'}`}
      line={lineCode}
      operator={lineOperator}
      /* A bus route's number is its own; a collision with a metro station code
         is a coincidence of two numbering schemes. See RichText's `badges`. */
      badges={false}
    />
  ))

  return (
    <PageShell accent={getAccent(lineCode, lineOperator)}>
      <HanContentSubset />
      <Breadcrumbs trail={[{ label: 'Bus', href: '/bus/' }, { label: 'Routes', href: '/bus/routes/' }, { label: folder.title }]} />
      <BackLink href="/bus/routes/" label="Routes" />
      <h1 className="page-title"><RichText>{folder.title}</RichText></h1>
      {folder.description && <p className="page-summary"><RichText>{folder.description}</RichText></p>}
      {folderContent.html && <div className="prose" dangerouslySetInnerHTML={{ __html: folderContent.html }} />}
      {/*
        The filter scope. Every route below is a real link in the static HTML;
        the filter only sets `hidden` on rows that do not match — see the note
        in components/RouteFilter for why it works that way round.
      */}
      <div data-route-filter="">
      {routes.length >= FILTER_THRESHOLD && <RouteFilter total={routes.length} />}
      {group === 'new-taipei' ? (
        <div className="bus-subgroups">
          {subgroups.map((subgroup, index) => (
            /*
             * Seven peers, and the reader is choosing between them — the case a
             * disclosure is for. The first opens so the page is never a column
             * of closed rows; the other six wait. With 562 routes in this group
             * that is the difference between a browsable page and a scroll.
             */
            <details
              key={subgroup.key}
              className="index-disclosure subgroup-disclosure"
              data-subgroup=""
              open={index === 0}
            >
              <summary>
                <span className="section-heading" role="heading" aria-level={2}>{subgroup.title}</span>
                <span className="disclosure-count">{subgroup.routes.length} routes</span>
                <span className="disclosure-caret" aria-hidden="true" />
              </summary>
              <div className="index-disclosure-body">
                <p className="section-desc"><RichText>{subgroup.description}</RichText></p>
                <ul className="card-list">{routeCards(subgroup.routes)}</ul>
              </div>
            </details>
          ))}
        </div>
      ) : (
      /*
       * Run 51, part 4. This was a disclosure, closed, wrapping the entire
       * reason the page exists: /bus/routes/colour-brown/ opened with a single
       * grey summary row and no routes visible. Reported, and correct to
       * report. One list that is the page gets no control — see the note on
       * `.index-section` in globals.css.
       */
      <section className="index-section">
        <h2 className="section-heading">
          Routes in this group
          <span className="disclosure-count">{routes.length} routes</span>
        </h2>
        <div>
          <ul className="card-list">
        {routes.map((route) => (
          <CardRow
            key={route.id}
            href={`/bus/routes/${group}/${route.canonicalSlug}/`}
            title={`${route.names.en} / ${route.names.zh_tw}`}
            search={`${route.names.en} ${route.names.zh_tw} ${route.canonicalSlug}`}
            summary={`${route.sourceCities.join(', ')} · ${route.operatorIds.length} current operator record${route.operatorIds.length === 1 ? '' : 's'}`}
            line={lineCode}
            badges={false}
          />
        ))}
          </ul>
        </div>
      </section>
      )}
      </div>
      {/* Sources last: a reference list is what you check a statement against,
          so it belongs below everything it answers for — not above the route
          list, which is where it used to sit. */}
      {/* badges={false}: a group index cites individual route schedule
          sources whose titles carry a route's own colour+number label —
          see the note on References' own badges prop. */}
      <References references={folderContent.references} badges={false} />
    </PageShell>
  )
}
