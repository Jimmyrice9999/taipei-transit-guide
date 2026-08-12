/**
 * Writes public/data/taipei-metro-line-colours.json.
 *
 * Run: npm run colours
 *
 * The point of the data section is that no English-language source publishes
 * these correctly. A page saying so is useful; a file someone can drop into
 * their own project is more useful. Generated from lib/lines.ts, so the download
 * and the site can never disagree.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { AA, NEAR_BLACK, WHITE, contrast } from '../lib/color.ts'
import { LINES } from '../lib/lines.ts'
import { PROVENANCE } from '../lib/stations.ts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'public', 'data', 'taipei-metro-line-colours.json')

const payload = {
  /*
   * `source` used to be one string for the whole file. It is now per line —
   * nine come from the platform and one does not, and a top-level field saying
   * "TDX LineColor" would have been a false statement about a tenth of the
   * records for anyone consuming this file rather than reading the page.
   */
  source: "Per line; see each record's colourSource. Most are Taiwan MOTC TDX LineColor.",
  sourceUrl: 'https://tdx.transportdata.tw/',
  licence: 'Open Government Data Licence (Taiwan). See https://data.gov.tw/licenses',
  retrieved: PROVENANCE.fetchedAt,
  note:
    'Official line colours as published by each operator. Community-sourced values ' +
    'in circulation (Wikipedia modules, Wikidata) differ from every one of these. ' +
    'badge and ink are derived by this project, not official: same hue, lightness ' +
    `reduced until the pair clears WCAG AA (${AA}:1) with a 0.1 margin.`,
  lines: LINES.map((line) => ({
    code: line.code,
    name: line.name,
    nameZh: line.nameZh,
    operator: line.operator,
    official: line.map,
    colourSource: {
      kind: line.colourSource.kind,
      description: line.colourSource.label,
      url: line.colourSource.url,
      accessed: line.colourSource.accessed,
    },
    contrast: {
      officialOnWhite: Number(contrast(line.map, WHITE).toFixed(2)),
      officialOnBlack: Number(contrast(line.map, NEAR_BLACK).toFixed(2)),
    },
    derived: {
      badgeBackground: line.badgeBg,
      badgeText: line.badgeFg,
      badgeContrast: Number(contrast(line.badgeFg, line.badgeBg).toFixed(2)),
      accentInk: line.ink,
      accentInkOnWhite: Number(contrast(line.ink, WHITE).toFixed(2)),
    },
  })),
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(payload, null, 2) + '\n')

const fromTdx = LINES.filter((l) => l.colourSource.kind === 'tdx').length
console.log(
  `colours: wrote public/data/taipei-metro-line-colours.json — ${LINES.length} lines, ` +
    `${fromTdx} from TDX LineColor, ${LINES.length - fromTdx} from operator material.`,
)
