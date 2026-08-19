import { getFolder, getPages, getSections, getSystems, getTypes } from '@/lib/content'
import { STATIONS } from '@/lib/stations'
import { LINES } from '@/lib/lines'
import { getBuiltBusRouteGroups } from '@/lib/bus/route-groups'

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

export type NavLink = {
  href: string
  title: string
  /**
   * The line's code badge, where the link's subject has a line.
   *
   * Run 11, part of putting colour where it means something: the Lines
   * dropdown listed ten line names in identical grey, which is the one place
   * on the site where a reader is choosing between lines and the one place the
   * network's own colour system was not used. Carried as plain values rather
   * than a Line object because SiteNav is a client component and cannot import
   * the registry, which reads TDX JSON off disk.
   *
   * The code is always rendered with the name, never instead of it.
   */
  badge?: { code: string; bg: string; fg: string }
}

export type NavGroup = {
  href: string
  title: string
  /** Pages inside this type. Capped — see CAP. */
  links: NavLink[]
  /** True when `links` is a sample rather than the whole set. */
  truncated: boolean
  /** A large category points to its index rather than enumerating items here. */
  large?: boolean
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
    /*
     * Bus navigation is an index menu, not a sample of route pages. The bus
     * architecture names these five stable browse keys; individual routes and
     * the legacy garages folder stay out of the global bar.
     */
    if (section.slug === 'bus') {
      /*
       * Route GROUPS (colour-red, series-300s, trunk…) are a bounded, stable
       * taxonomy — under two dozen even once every group is built — so unlike
       * individual routes or the 61 operators, listing them is not the
       * "ten-link sample" bus-architecture.md rules out. Routes therefore gets
       * a real closed-by-default subgroup, the same shape every other
       * dropdown's types get; Operators/Models/Depots stay direct links to
       * their index because sampling raw entities is exactly what a route
       * browser must not do.
       */
      const routeGroups = getBuiltBusRouteGroups().map((group) => {
        const folder = getFolder(['bus', 'routes'], group)
        return { href: folder.href, title: folder.title }
      })
      return {
        href: section.href,
        title: section.title,
        groups: [
          { href: '/bus/network/', title: 'Network', links: [], truncated: false },
          {
            href: '/bus/routes/',
            title: 'Routes',
            links: routeGroups.slice(0, CAP),
            truncated: routeGroups.length > CAP,
          },
          { href: '/bus/operators/', title: 'Operators', links: [], truncated: false },
          { href: '/bus/models/', title: 'Models', links: [], truncated: false },
          { href: '/bus/depots/', title: 'Depots', links: [], truncated: false },
        ],
      }
    }

    const systems = getSystems(section.slug)

    /*
     * A type inside a system carries the system's name in the menu when the
     * section has more than one — "Metro lines" and, when Taiwan Railway
     * arrives, "TRA lines". With one system the prefix would be noise, so it
     * is not applied. Computed rather than typed, so the menu cannot end up
     * with two groups both called "Lines".
     */
    const label = (systemTitle: string, typeTitle: string) =>
      systems.length > 1 ? `${systemTitle} ${typeTitle.toLowerCase()}` : typeTitle

    const typeGroup = (
      type: { slug: string; href: string; title: string },
      system: string,
      systemTitle: string,
    ): NavGroup => {
      const pages = getPages(section.slug, type.slug, system)
      const ordered =
        type.slug === 'lines'
          ? [...pages].sort((a, b) => (lineRank.get(a.line) ?? 99) - (lineRank.get(b.line) ?? 99))
          : pages
      return {
        href: type.href,
        title: system ? label(systemTitle, type.title) : type.title,
        links: ordered.slice(0, CAP).map((page) => {
          const line = LINES.find((l) => l.code === page.line)
          return {
            href: page.href,
            title: page.title,
            /*
             * Only on the Lines group. A fleet or a depot has a line too,
             * but a badge beside "Muzha Depot" in a menu says "brown" about
             * something whose name is already unambiguous, and ten badges
             * down a fleet column would be colour for its own sake — which
             * is the thing this site's rules actually forbid.
             */
            ...(type.slug === 'lines' && line
              ? { badge: { code: line.code, bg: line.badgeBg, fg: line.badgeFg } }
              : {}),
          }
        }),
        truncated: pages.length > CAP,
      }
    }

    const groups: NavGroup[] = [
      /*
       * Each system gets a direct link of its own before its types. A system
       * page is a real destination — the top of one railway — and without this
       * the only way into it from the bar would be to open a type index and
       * come back up.
       */
      ...systems.flatMap((system) => [
        { href: system.href, title: system.title, links: [], truncated: false, large: true },
        ...getTypes(section.slug, system.slug).map((type) =>
          typeGroup(type, system.slug, system.title),
        ),
      ]),
      ...getTypes(section.slug).map((type) => typeGroup(type, '', '')),
    ]
      /*
       * A type folder with no pages does not go in the menu. Run 10's brief:
       * a nav item leading to "0 pages" advertises absence. The folder still
       * exists and its index still renders for anyone holding the URL — it is
       * removed from the menu, not from the site. A system's own direct link
       * is `large` and keeps its place regardless.
       */
      .filter((group) => group.large || group.links.length > 0)

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
      /*
       * Placed with the rest of the metro's types rather than appended after
       * everything, so the panel reads down the hierarchy: the system, then
       * what belongs to it, then the section-level groups. Found by position
       * rather than by index so it stays right if the metro gains a type.
       */
      const afterMetro = rail.groups.findLastIndex((group) =>
        group.href.startsWith('/rail/metro/'),
      )
      rail.groups.splice(afterMetro + 1, 0, {
        href: '/rail/metro/stations/',
        title: 'Metro stations',
        links: [],
        truncated: withPages.length > STATION_CAP,
        large: true,
      })
    }
    rail.groups.push({ href: '/rail/network/', title: 'The network', links: [], truncated: false })
  }

  // A section with nothing behind it is dropped from the bar entirely.
  return sections.filter((section) => section.groups.length > 0)
}
