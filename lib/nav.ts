import { getFolder, getPages, getSections, getSystems, getTypes } from '@/lib/content'
import { STATIONS } from '@/lib/stations'
import { lineKey, LINES } from '@/lib/lines'
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
  /**
   * A system's own page types, nested one level inside its own disclosure.
   *
   * Only set when a section has more than one system (today, only Rail: eight
   * systems each with up to six types once stations are added — flattening
   * system×type into one panel put 30-40 disclosures side by side, unscannable
   * and in the wrong order (type before system). Nesting means the panel's top
   * level lists systems, and opening one reveals what belongs to it — SYSTEM
   * before PAGE TYPE, as asked. A system group with `subgroups` still carries
   * `large: true` so SiteNav can fall back to a plain direct link if every
   * subgroup turns out empty.
   */
  subgroups?: NavGroup[]
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

/**
 * Rail's eight systems, grouped by mode so the section's dropdown reads as
 * three scannable categories instead of a flat list of eight system names in
 * an order nobody chose. See docs/run-log.md (Run 303, Part 2) for why this
 * particular grouping and not, say, one bucket per operator.
 *
 * The grouping is deliberately coarse — at the SYSTEM (content folder) level,
 * not the individual line. `metro` already holds TRTC, NTMC and the currently
 * operating Taoyuan Airport MRT line together as "the metropolitan network",
 * including the Sanying Line, whose own mode classification is the weakest
 * claim in lib/line-character.ts — grouping the whole `metro` folder under
 * "Metro and light rail" does not resolve that per-line ambiguity, it just
 * doesn't force a finer call the sources don't support either.
 */
const RAIL_MODE_GROUPS: { title: string; systems: string[] }[] = [
  { title: 'Metro and light rail', systems: ['metro', 'tymc', 'tmrt', 'krtc'] },
  { title: 'Conventional and high speed rail', systems: ['tra', 'thsr'] },
  { title: 'Heritage and special railways', systems: ['alishan', 'cable'] },
]

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
  const lineRank = new Map(LINES.map((line, i) => [line.key, i]))

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
     * A section with more than one system nests each system's types inside
     * that system's own disclosure (see NavGroup.subgroups) rather than
     * flattening system×type into one panel — a type there already sits
     * inside "TRA" or "KRTC", so prefixing its own title with the system name
     * again would repeat what the disclosure it lives inside already says.
     * A single-system section has no such disclosure to sit inside, so its
     * type keeps a plain title too — there is only ever one system it could
     * mean.
     */
    const nestSystems = systems.length > 1

    const typeGroup = (
      type: { slug: string; href: string; title: string },
      system: string,
    ): NavGroup => {
      const pages = getPages(section.slug, type.slug, system)
      const ordered =
        type.slug === 'lines'
          ? [...pages].sort((a, b) => {
              const keyFor = (page: (typeof pages)[number]) =>
                page.operator
                  ? lineKey(page.operator, page.line)
                  : LINES.find((line) => line.code === page.line)?.key ?? ''
              return (lineRank.get(keyFor(a)) ?? 99) - (lineRank.get(keyFor(b)) ?? 99)
            })
          : pages
      return {
        href: type.href,
        title: type.title,
        links: ordered.slice(0, CAP).map((page) => {
          const line =
            LINES.find((l) => l.key === lineKey(page.operator || '', page.line)) ??
            LINES.find((l) => l.code === page.line && !page.operator)
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

    /*
     * A type folder with no pages does not go in the menu. Run 10's brief: a
     * nav item leading to "0 pages" advertises absence. The folder still
     * exists and its index still renders for anyone holding the URL — it is
     * removed from the menu, not from the site.
     */
    const nonEmpty = (group: NavGroup) => group.large || group.links.length > 0

    const systemGroups: NavGroup[] = systems.map((system) => ({
      href: system.href,
      title: system.title,
      links: [],
      truncated: false,
      large: true,
      subgroups: getTypes(section.slug, system.slug)
        .map((type) => typeGroup(type, system.slug))
        .filter(nonEmpty),
    }))

    /*
     * Rail alone gets a mode layer above its systems (Part 2a, Run 303):
     * eight systems in one flat panel no longer told a reader "this is a
     * metro" versus "this is a heavy railway" versus "this is a heritage
     * line". Every other multi-system section (today none) keeps the plain
     * system list — this recurses through the same NavGroupView.subgroups
     * mechanism a system already uses for its own types, one level deeper,
     * so no new nav-rendering code was needed.
     */
    const railModeGroups: NavGroup[] | null =
      section.slug === 'rail'
        ? (() => {
            const bySlug = new Map(systems.map((s, i) => [s.href, systemGroups[i]]))
            const used = new Set<string>()
            const buckets: NavGroup[] = RAIL_MODE_GROUPS.map((bucket) => {
              const subgroups = bucket.systems
                .map((slug): NavGroup | null => {
                  const sys = systems.find((s) => s.href.endsWith(`/${slug}/`))
                  if (!sys) return null
                  used.add(sys.href)
                  return bySlug.get(sys.href) ?? null
                })
                .filter((g): g is NavGroup => g !== null)
              return {
                href: '/rail/',
                title: bucket.title,
                links: [],
                truncated: false,
                large: true,
                subgroups,
              }
            }).filter((bucket) => bucket.subgroups.length > 0)
            // Any system the mapping above doesn't account for (a new folder
            // added without updating RAIL_MODE_GROUPS) still appears, rather
            // than silently vanishing from the nav.
            const leftover = systemGroups.filter((g) => !used.has(g.href))
            return [...buckets, ...leftover]
          })()
        : null

    const groups: NavGroup[] = nestSystems
      ? [
          /*
           * One entry per system (or, for Rail, per mode bucket of
           * systems), each carrying its own types nested inside — SYSTEM
           * before PAGE TYPE, and the panel's top level stays a short,
           * scannable list instead of every system's every type laid out
           * side by side (30-40 groups before this). `large: true` is kept
           * so SiteNav falls back to a plain direct link if everything
           * nested inside turns out empty, the same fallback a leaf group
           * already had.
           */
          ...(railModeGroups ?? systemGroups),
          ...getTypes(section.slug).map((type) => typeGroup(type, '')).filter(nonEmpty),
        ]
      : [
          ...systems.flatMap((system) => [
            { href: system.href, title: system.title, links: [], truncated: false, large: true },
            ...getTypes(section.slug, system.slug).map((type) => typeGroup(type, system.slug)),
          ]),
          ...getTypes(section.slug).map((type) => typeGroup(type, '')),
        ].filter(nonEmpty)

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
       * Nested into the metro system's own subgroups rather than appended to
       * the section-level panel, so it reads as one of the metro's types
       * (Lines, Rolling stock, Depots, Stations) rather than a ninth item
       * bolted on beside eight unrelated systems. Titled plainly — "Metro"
       * is already the disclosure it lives inside.
       */
      // "metro" now sits one level deeper, inside the "Metro and light
      // rail" mode bucket (Part 2a, Run 303) rather than directly under
      // rail.groups, so the lookup has to check subgroups too.
      const metro = rail.groups
        .flatMap((group) => group.subgroups ?? [group])
        .find((group) => group.href === '/rail/metro/')
      metro?.subgroups?.push({
        href: '/rail/metro/stations/',
        title: 'Stations',
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
