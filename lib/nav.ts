import { getPages, getSections, getTypes } from '@/lib/content'
import { STATIONS } from '@/lib/stations'
import { LINES } from '@/lib/lines'

/**
 * The navigation tree: sections → types → pages.
 *
 * Built once at build time and handed to `SiteNav` as plain data, because the
 * nav is a client component (it needs the current URL to mark the active
 * section) and a client component cannot read the filesystem.
 *
 * Why a tree at all: the flat bar carried seven links, and the site now has
 * more than 150 pages behind them. Reaching a fleet page meant Rail → Rolling
 * Stock → the fleet, three loads deep, with nothing in the header to say the
 * fleet pages existed. Mirroring the hierarchy in the bar puts every real page
 * two clicks from anywhere, which is the whole argument for a reference site
 * having a nav rather than a list of sections.
 */

export type NavLink = { href: string; title: string }

export type NavGroup = {
  href: string
  title: string
  /** Pages inside this type. Capped — see CAP. */
  links: NavLink[]
  /** True when `links` is a sample rather than the whole set. */
  truncated: boolean
}

export type NavSection = {
  href: string
  title: string
  groups: NavGroup[]
}

/*
 * A dropdown is a menu, not an index. Past a dozen or so items it stops being
 * scannable and becomes a page rendered in a panel — and the type's own index
 * already does that job properly. Groups over the cap show the first CAP
 * entries and link on with "All …".
 *
 * Stations force this: there are 157 of them.
 */
const CAP = 10

export function getNavTree(): NavSection[] {
  /*
   * Line pages are ordered by the network's own line order, not by title, so
   * the dropdown reads in the same sequence as the network page and the data
   * tables. Alphabetical would put Ankeng before Bannan before Circular and
   * scatter the three operators through one another.
   *
   * The key is the page's own `line:` frontmatter, which is the same field
   * that sets its accent colour — not a guess from the slug.
   */
  const lineRank = new Map(LINES.map((line, i) => [line.code, i]))

  const sections: NavSection[] = getSections().map((section) => {
    const groups: NavGroup[] = getTypes(section.slug)
      .map((type) => {
        const pages = getPages(section.slug, type.slug)
        const ordered =
          type.slug === 'lines'
            ? [...pages].sort(
                (a, b) => (lineRank.get(a.line) ?? 99) - (lineRank.get(b.line) ?? 99),
              )
            : pages
        return {
          href: type.href,
          title: type.title,
          links: ordered.slice(0, CAP).map((page) => ({ href: page.href, title: page.title })),
          truncated: pages.length > CAP,
        }
      })
      /*
       * A type folder with no pages does not go in the menu. Run 10's brief:
       * a nav item leading to "0 pages" advertises absence. The folder still
       * exists and its index still renders for anyone holding the URL — it is
       * removed from the menu, not from the site.
       */
      .filter((group) => group.links.length > 0)

    return { href: section.href, title: section.title, groups }
  })

  /*
   * Stations are generated from TDX rather than written into `content/`, so
   * they have no type folder for the loop above to find. Added to Rail by
   * hand, capped, pointing at the station index.
   */
  const rail = sections.find((s) => s.href === '/rail/')
  if (rail) {
    const withPages = STATIONS.filter((s) => s.line === 'BR')
    if (withPages.length) {
      /*
       * Deliberately shorter than CAP. Ten station names is the tallest column
       * in the panel by some way, and it is the least useful one — nobody
       * navigates to a specific station from a menu, they arrive from the line
       * page's strip map. Six is enough to show what the group contains; the
       * index does the rest.
       */
      const STATION_CAP = 6
      rail.groups.push({
        href: '/rail/stations/',
        title: 'Stations',
        links: withPages
          .slice(0, STATION_CAP)
          .map((s) => ({ href: `/rail/stations/${s.code.toLowerCase()}/`, title: s.name })),
        truncated: withPages.length > STATION_CAP,
      })
    }
    rail.groups.push({ href: '/rail/network/', title: 'The network', links: [], truncated: false })
  }

  // A section with nothing behind it is dropped from the bar entirely.
  return sections.filter((section) => section.groups.length > 0)
}
