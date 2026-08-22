/**
 * Every operator's TDX dataset, merged once.
 *
 * ── Why this module exists ───────────────────────────────────────────────────
 *
 * `lib/geometry.ts`, `lib/network.ts` and `lib/routes.ts` each imported
 * `TRTC/x.json`, `NTMC/x.json` and `TYMC/x.json` by hand and spread them into a
 * local array. Three files, three copies of the same list of operators.
 *
 * Run 10 added two operators — the light rail lines TDX files separately, see
 * the note on OPERATORS in `scripts/fetch-tdx.mjs` — and the failure was
 * exactly what a duplicated list produces: the lines appeared on the network
 * map as loose station dots with no route drawn between them, because
 * `lines.ts` and the station generator had been updated and `geometry.ts` had
 * not. Nothing errored. The map simply drew two lines' worth of stations and
 * no lines, and it looked like missing source data rather than a missing
 * import.
 *
 * The operator list now exists once, here. Adding an operator means adding two
 * import lines and one row to `OPERATOR_DATA` — and every consumer picks it up,
 * because there is no second list to forget.
 *
 * Line codes are only unique within an operator. Every merged record therefore
 * retains the operator namespace, so a future system can reuse a bare code
 * without overwriting a current record.
 */

import trtcShapes from '../data/tdx/TRTC/shape.json' with { type: 'json' }
import ntmcShapes from '../data/tdx/NTMC/shape.json' with { type: 'json' }
import tymcShapes from '../data/tdx/TYMC/shape.json' with { type: 'json' }
import ntdlrtShapes from '../data/tdx/NTDLRT/shape.json' with { type: 'json' }
import ntalrtShapes from '../data/tdx/NTALRT/shape.json' with { type: 'json' }
import tmrtShapes from '../data/tdx/TMRT/shape.json' with { type: 'json' }

import trtcRoutes from '../data/tdx/TRTC/route.json' with { type: 'json' }
import ntmcRoutes from '../data/tdx/NTMC/route.json' with { type: 'json' }
import tymcRoutes from '../data/tdx/TYMC/route.json' with { type: 'json' }
import ntdlrtRoutes from '../data/tdx/NTDLRT/route.json' with { type: 'json' }
import ntalrtRoutes from '../data/tdx/NTALRT/route.json' with { type: 'json' }
import tmrtRoutes from '../data/tdx/TMRT/route.json' with { type: 'json' }

import trtcTransfers from '../data/tdx/TRTC/line-transfer.json' with { type: 'json' }
import ntmcTransfers from '../data/tdx/NTMC/line-transfer.json' with { type: 'json' }
import tymcTransfers from '../data/tdx/TYMC/line-transfer.json' with { type: 'json' }

import trtcStationOfRoute from '../data/tdx/TRTC/station-of-route.json' with { type: 'json' }
import ntmcStationOfRoute from '../data/tdx/NTMC/station-of-route.json' with { type: 'json' }
import tymcStationOfRoute from '../data/tdx/TYMC/station-of-route.json' with { type: 'json' }
import ntdlrtStationOfRoute from '../data/tdx/NTDLRT/station-of-route.json' with { type: 'json' }
import ntalrtStationOfRoute from '../data/tdx/NTALRT/station-of-route.json' with { type: 'json' }
import tmrtStationOfRoute from '../data/tdx/TMRT/station-of-route.json' with { type: 'json' }

/*
 * `line-transfer` is absent for the two light rail operators, and that is the
 * platform's own answer rather than a gap in the fetch: the endpoint replies
 *
 *   RailSystem: 'NTDLRT' is not accepted but TRTC, KRTC, TYMC, NTMC
 *
 * It is restricted to the four heavy-metro systems. Recorded here so nobody
 * adds the import and finds the file missing.
 */
type OperatorRecords = { operator: string; records: readonly unknown[] }

const OPERATOR_DATA = {
  shapes: [
    { operator: 'TRTC', records: trtcShapes },
    { operator: 'NTMC', records: ntmcShapes },
    { operator: 'TYMC', records: tymcShapes },
    { operator: 'NTDLRT', records: ntdlrtShapes },
    { operator: 'NTALRT', records: ntalrtShapes },
    { operator: 'TMRT', records: tmrtShapes },
  ],
  routes: [
    { operator: 'TRTC', records: trtcRoutes },
    { operator: 'NTMC', records: ntmcRoutes },
    { operator: 'TYMC', records: tymcRoutes },
    { operator: 'NTDLRT', records: ntdlrtRoutes },
    { operator: 'NTALRT', records: ntalrtRoutes },
    { operator: 'TMRT', records: tmrtRoutes },
  ],
  transfers: [
    { operator: 'TRTC', records: trtcTransfers },
    { operator: 'NTMC', records: ntmcTransfers },
    { operator: 'TYMC', records: tymcTransfers },
  ],
  stationOfRoute: [
    { operator: 'TRTC', records: trtcStationOfRoute },
    { operator: 'NTMC', records: ntmcStationOfRoute },
    { operator: 'TYMC', records: tymcStationOfRoute },
    { operator: 'NTDLRT', records: ntdlrtStationOfRoute },
    { operator: 'NTALRT', records: ntalrtStationOfRoute },
    { operator: 'TMRT', records: tmrtStationOfRoute },
  ],
} as const

const merge = <T>(sets: readonly OperatorRecords[]): T[] =>
  sets.flatMap(({ operator, records }) =>
    records.map((record) => ({ ...(record as object), operator }) as T),
  )

export const TDX_SHAPES = <T>() => merge<T>(OPERATOR_DATA.shapes)
export const TDX_ROUTES = <T>() => merge<T>(OPERATOR_DATA.routes)
export const TDX_TRANSFERS = <T>() => merge<T>(OPERATOR_DATA.transfers)
export const TDX_STATION_OF_ROUTE = <T>() => merge<T>(OPERATOR_DATA.stationOfRoute)
