/**
 * The build-time snapshot consumed by locale-independent data pages.
 *
 * The underlying records do not change with the URL locale. Generating this
 * once before Next starts means `/en` and `/zh-Hant` read the same small JSON
 * file instead of walking and rendering the corpus twice.
 */

import fs from 'node:fs'
import path from 'node:path'
import type {
  LineComparison,
  OperatorComparison,
  StationComparison,
  SystemComparison,
  TimelineEvent,
  TimelineSubject,
} from './data-explorer.ts'
import type { Source } from './sources.ts'

export type AggregateSourceEntry = {
  source: Source
  pages: { title: string; href: string }[]
}

export type AggregateData = {
  version: 1
  sources: AggregateSourceEntry[]
  networkGrowth: {
    events: TimelineEvent[]
    undated: TimelineSubject[]
  }
  comparisons: {
    lines: LineComparison[]
    operators: OperatorComparison[]
    stations: StationComparison[]
    systems: SystemComparison[]
  }
}

const FILE = path.join(process.cwd(), 'data', 'generated', 'aggregate-data.json')
let cached: AggregateData | null = null

export function readAggregateData(): AggregateData {
  if (cached) return cached
  if (!fs.existsSync(FILE)) {
    throw new Error(
      `Missing ${path.relative(process.cwd(), FILE)}. Run npm run aggregates before the Next build.`,
    )
  }
  cached = JSON.parse(fs.readFileSync(FILE, 'utf8')) as AggregateData
  if (cached.version !== 1) {
    throw new Error(`Unsupported aggregate-data.json version: ${String(cached.version)}`)
  }
  return cached
}

export { FILE as AGGREGATE_DATA_FILE }
