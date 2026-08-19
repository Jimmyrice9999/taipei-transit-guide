/**
 * Bus route group metadata — the piece the page templates need but the TDX
 * pull does not carry: which MRT line (if any) a group's colour prefix
 * declares, and which built group folders actually exist under
 * `content/bus/routes/`.
 *
 * The page templates used to hardcode `GROUP = 'colour-brown'` throughout,
 * from when brown was the only pilot. That left `colour-red`'s 40 already-
 * written pages unreachable — `dynamicParams = false` with
 * `generateStaticParams` returning only brown meant the red route slugs were
 * never generated at all. Deriving the group list from the content
 * directory, the way `CATALOGUED_LINES` replaced a hardcoded line set for
 * rail stations, means a new group folder is served as soon as its
 * `_index.md` exists rather than needing a second matching code change.
 */
import fs from 'node:fs'
import path from 'node:path'
import { listSubfolders } from '../content.ts'
import type { BusRouteGroup } from './routes.ts'

/** Every group folder with an `_index.md`, in that folder's declared order. */
export function getBuiltBusRouteGroups(): BusRouteGroup[] {
  return listSubfolders(['bus', 'routes'])
    .filter((folder) => fs.existsSync(path.join(process.cwd(), 'content', 'bus', 'routes', folder.slug, '_index.md')))
    .map((folder) => folder.slug as BusRouteGroup)
}

/**
 * The MRT line each colour prefix declares, per ebus.gov.taipei's own
 * category list (捷運紅線接駁公車, 捷運藍線接駁公車, 捷運綠線接駁公車,
 * 捷運棕線接駁公車, 捷運橘線接駁公車 — fetched in full 18 August 2026).
 * `trunk` and any other non-colour group carries no entry: a 幹線 trunk
 * route is a service class of its own, not a feeder, so it gets no feeder-
 * line fact unless a specific route's `railJoins` says otherwise.
 */
export const GROUP_LINE: Partial<Record<BusRouteGroup, { code: string; name: string; sourceId: string }>> = {
  'colour-red': { code: 'R', name: 'Red Line (Tamsui–Xinyi)', sourceId: 'ebus-red' },
  'colour-blue': { code: 'BL', name: 'Blue Line (Bannan)', sourceId: 'ebus-blue' },
  'colour-green': { code: 'G', name: 'Green Line (Songshan–Xindian)', sourceId: 'ebus-green' },
  'colour-brown': { code: 'BR', name: 'Wenhu Line', sourceId: 'ebus-brown' },
  'colour-orange': { code: 'O', name: 'Orange Line (Zhonghe–Xinlu)', sourceId: 'ebus-orange' },
}

/**
 * Muted per-group tone for the route's own drawn path on its map.
 *
 * Deliberately NOT the MRT line's official (saturated) colour: the line on
 * this map is the bus route, not the railway, and painting it in the
 * official MRT colour would visually claim the bus IS the line it feeds.
 * Each tone is checked at ≥4.3:1 against the map ground (#faf9f7), clearing
 * WCAG 1.4.11's 3:1 non-text minimum with margin. `trunk` gets a neutral
 * tone since it carries no colour identity at all.
 */
export const GROUP_PATH_COLOUR: Record<BusRouteGroup, string> = {
  'colour-red': '#8a4a42',
  'colour-blue': '#3d5a7a',
  'colour-green': '#3f7a48',
  'colour-brown': '#8d6e3d',
  'colour-orange': '#a06a35',
  'colour-yellow': '#8a7a2e',
  'series-0-99': '#5c5650',
  'series-100s': '#5c5650',
  'series-200s': '#5c5650',
  'series-300s': '#5c5650',
  'series-500s': '#5c5650',
  'series-600s': '#5c5650',
  'series-700s': '#5c5650',
  'series-900s': '#5c5650',
  'series-other': '#5c5650',
  'special-shuttle': '#5c5650',
  trunk: '#5c5650',
  minibus: '#5c5650',
  'new-taipei': '#5c5650',
  unclassified: '#5c5650',
}

/** Folder title → line code, for accent colour and card badges. */
export function getGroupLineCode(group: BusRouteGroup): string | undefined {
  return GROUP_LINE[group]?.code
}

/**
 * How many bus route pages are actually published.
 *
 * ── The false zero this exists to stop ──────────────────────────────────────
 *
 * Bus route overlays live at `content/bus/routes/<group>/<slug>.md`, a nested
 * registry `getPages('bus', 'routes')` deliberately does not read (see the
 * fourth implementation note in docs/bus-architecture.md). Every caller that
 * asked the content loader how many route pages there were therefore got 0 —
 * and the home page printed "Routes · 0 pages" beside a section holding 1,051
 * of them, while `/bus/` dropped the type entirely on the same evidence. A
 * count in the furniture that contradicts the site is the same class of error
 * as a figure in the prose that contradicts its source.
 *
 * Counted from the overlays on disk, so it is the number of pages the build
 * will actually export rather than the number of TDX identities that exist.
 */
export function getBuiltBusRoutePageCount(): number {
  return getBuiltBusRouteGroups().reduce((total, group) => {
    const dir = path.join(process.cwd(), 'content', 'bus', 'routes', group)
    if (!fs.existsSync(dir)) return total
    return (
      total +
      fs.readdirSync(dir).filter((name) => name.endsWith('.md') && !name.startsWith('_')).length
    )
  }, 0)
}
