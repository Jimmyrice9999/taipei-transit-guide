/**
 * A bus route page must never present a station code as an MRT connection
 * unless that code is in the route's curated `rail-stop-joins.json` entry.
 *
 * See scripts/bus-rail-join-audit.mjs for why this exists: 16 route pages
 * were found stating "confirmed rail-stop joins ... by stop-ID geometry" to
 * stations that were only ever raw name-match candidates. That is invisible
 * to a reader — the page just reads as fact — which is exactly the failure
 * mode the sourcing discipline exists to catch. This is the general check,
 * not a list of the files it was first found on.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'

// @ts-expect-error — plain .mjs script, deliberately not typed
import { auditBusRailJoinClaims } from '../scripts/bus-rail-join-audit.mjs'

test('no bus route page claims an MRT join absent from the curated join file', () => {
  const flagged = auditBusRailJoinClaims()
  assert.deepEqual(
    flagged,
    [],
    'unhedged, non-curated station-code mention(s) found:\n' +
      flagged.map((f) => `  ${f.file} [${f.code}]: …${f.context}…`).join('\n'),
  )
})
