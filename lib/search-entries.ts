/**
 * Builds the search index from the same registries the pages are built from.
 *
 * Build-time only — it reads the content tree and the committed TDX pulls off
 * disk. `scripts/search-index.mts` writes what this returns to
 * `public/data/search-index.json`; `tests/search.test.mts` calls it again and
 * compares, so the shipped file cannot drift behind the content.
 *
 * Separate from lib/search.ts because that one runs in the browser and must not
 * pull the content loader — and its matcher is what the tests want to exercise
 * without a filesystem.
 */

import fs from 'node:fs'
import path from 'node:path'
import { getAllPages, getSections, getSystems, getTypes } from './content.ts'
import { STATIONS, getStationHref, PROVENANCE } from './stations.ts'
import { getLine } from './lines.ts'
import { getBusRoutesByGroup } from './bus/routes.ts'
import { getBuiltBusRouteGroups } from './bus/route-groups.ts'
import { getFolder } from './content.ts'
import type { SearchEntry, SearchIndex } from './search.ts'

/** The label a result row shows. Singular, because it labels one thing. */
function categoryOf(type: string, system: string): string {
  if (type === 'lines') return system === 'cable' ? 'Cable line' : 'Line'
  if (type === 'rolling-stock') return 'Rolling stock'
  if (type === 'depots') return 'Depot'
  if (type === 'operators') return 'Operator'
  if (type === 'history') return 'Article'
  if (type === 'technology') return 'Article'
  if (type === 'network') return 'Article'
  if (type === 'guides') return 'Guide'
  if (type === 'generations') return 'Article'
  return type.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase())
}

export function buildSearchIndex(): SearchIndex {
  const entries: SearchEntry[] = []

  /* ---- content pages: lines, fleets, depots, operators, articles ---- */

  for (const page of getAllPages()) {
    /*
     * Aliases are where the Chinese name of a content page lives — the
     * frontmatter carries `aliases: [文湖線, Brown Line]` and no separate
     * `nameZh` field. Han aliases become the Chinese key so a reader can type
     * 文湖線; the rest become search keys, which is what "Blue Line" for the
     * Bannan Line is for.
     */
    const han = page.aliases.filter((alias) => /[㐀-鿿]/.test(alias))
    const latin = page.aliases.filter((alias) => !/[㐀-鿿]/.test(alias))
    const keys = [...latin, page.line].filter(Boolean)
    entries.push({
      t: page.title,
      ...(han.length ? { z: han.join(' ') } : {}),
      ...(keys.length ? { k: keys.join(' ') } : {}),
      h: page.href,
      c: categoryOf(page.type, page.system),
    })
  }

  /* ---- stations ---- */

  for (const station of STATIONS) {
    const href = getStationHref(station.code)
    if (!href) continue
    const line = getLine(station.line)
    entries.push({
      t: station.name,
      ...(station.nameZh ? { z: station.nameZh } : {}),
      k: station.code,
      h: href,
      c: line ? `${line.name} Line station` : 'Station',
    })
  }

  /* ---- bus routes, for every group with pages built ---- */

  for (const group of getBuiltBusRouteGroups()) {
    const folder = getFolder(['bus', 'routes'], group)
    for (const route of getBusRoutesByGroup(group)) {
      const file = path.join(
        process.cwd(),
        'content',
        'bus',
        'routes',
        group,
        `${route.canonicalSlug}.md`,
      )
      if (!fs.existsSync(file)) continue
      /*
       * The canonical slug carries the ASCII form of the route number, which is
       * how an English-speaking reader types 棕10 — "brown-10", or just "10".
       * The English and Chinese names are the other two ways in.
       */
      entries.push({
        t: route.names.en || route.names.zh_tw,
        ...(route.names.zh_tw ? { z: route.names.zh_tw } : {}),
        k: route.canonicalSlug,
        h: `/bus/routes/${group}/${route.canonicalSlug}/`,
        c: `Bus route · ${folder.title}`,
      })
    }
  }

  /* ---- the indexes themselves ----
     A reader who types "stations" or "metro" wants the index, and an index is
     a page. Without these the search could find every station and not the page
     that lists them. */

  for (const section of getSections()) {
    entries.push({ t: section.title, h: section.href, c: 'Section' })
    for (const type of getTypes(section.slug)) {
      entries.push({ t: `${type.title} — ${section.title}`, h: type.href, c: 'Index' })
    }
    for (const system of getSystems(section.slug)) {
      entries.push({ t: system.title, h: system.href, c: 'System' })
      for (const type of getTypes(section.slug, system.slug)) {
        entries.push({ t: `${type.title} — ${system.title}`, h: type.href, c: 'Index' })
      }
    }
  }

  for (const group of getBuiltBusRouteGroups()) {
    const folder = getFolder(['bus', 'routes'], group)
    entries.push({ t: folder.title, h: folder.href, c: 'Bus route group' })
  }

  entries.push({ t: 'The network', h: '/rail/network/', c: 'Index' })
  entries.push({ t: 'Stations', h: '/rail/metro/stations/', c: 'Index' })
  entries.push({ t: 'Data', h: '/data/', c: 'Section' })
  entries.push({ t: 'About', h: '/about/', c: 'Page' })

  /*
   * Sorted by href, so two runs over the same content produce byte-identical
   * files. `npm run determinism` exists because a generated artifact that
   * changes without its inputs changing is a diff nobody can review.
   */
  entries.sort((a, b) => (a.h < b.h ? -1 : a.h > b.h ? 1 : a.t.localeCompare(b.t)))

  return {
    // A fact about the data, not about when the build ran — the same argument
    // as the sitemap's lastmod. See app/sitemap.ts.
    generated: PROVENANCE.fetchedAt?.slice(0, 10) ?? '',
    entries,
  }
}
