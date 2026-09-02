/**
 * Materialise the expensive, locale-neutral data views once per build.
 *
 * Next renders every locale independently. These views are identical beneath
 * the locale labels, so leaving their corpus walks inside page components
 * makes a second locale pay the full scan again and can hit Next's per-page
 * static-generation timeout. This script runs before `next build` and writes a
 * deterministic snapshot consumed by both locale trees.
 */

import fs from 'node:fs'
import path from 'node:path'
import { buildAllSources } from '../lib/content.ts'
import {
  buildLineComparison,
  buildNetworkOpeningTimeline,
  buildOperatorComparison,
  buildStationComparison,
  buildSystemComparison,
  buildUndatedOpeningStations,
} from '../lib/data-explorer.ts'
import { AGGREGATE_DATA_FILE } from '../lib/aggregate-data.ts'

const started = Date.now()
const events = buildNetworkOpeningTimeline()
const lines = buildLineComparison()
const operators = buildOperatorComparison(lines)

const aggregate = {
  version: 1 as const,
  sources: await buildAllSources(),
  networkGrowth: {
    events,
    undated: buildUndatedOpeningStations(events),
  },
  comparisons: {
    lines,
    operators,
    stations: buildStationComparison(),
    systems: buildSystemComparison(lines, operators),
  },
}

fs.mkdirSync(path.dirname(AGGREGATE_DATA_FILE), { recursive: true })
fs.writeFileSync(AGGREGATE_DATA_FILE, `${JSON.stringify(aggregate, null, 2)}\n`, 'utf8')

console.log(
  `aggregates: wrote ${path.relative(process.cwd(), AGGREGATE_DATA_FILE)} — ` +
    `${aggregate.sources.length} sources, ${events.length} dated events, ` +
    `${aggregate.comparisons.stations.length} station rows in ${Date.now() - started} ms`,
)
