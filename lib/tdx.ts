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
 * Line codes are unique across operators, so a flat merge is safe; nothing
 * downstream needs to know which company a record came from.
 */

import trtcShapes from '../data/tdx/TRTC/shape.json' with { type: 'json' }
import ntmcShapes from '../data/tdx/NTMC/shape.json' with { type: 'json' }
import tymcShapes from '../data/tdx/TYMC/shape.json' with { type: 'json' }
import ntdlrtShapes from '../data/tdx/NTDLRT/shape.json' with { type: 'json' }
import ntalrtShapes from '../data/tdx/NTALRT/shape.json' with { type: 'json' }

import trtcRoutes from '../data/tdx/TRTC/route.json' with { type: 'json' }
import ntmcRoutes from '../data/tdx/NTMC/route.json' with { type: 'json' }
import tymcRoutes from '../data/tdx/TYMC/route.json' with { type: 'json' }
import ntdlrtRoutes from '../data/tdx/NTDLRT/route.json' with { type: 'json' }
import ntalrtRoutes from '../data/tdx/NTALRT/route.json' with { type: 'json' }

import trtcTransfers from '../data/tdx/TRTC/line-transfer.json' with { type: 'json' }
import ntmcTransfers from '../data/tdx/NTMC/line-transfer.json' with { type: 'json' }
import tymcTransfers from '../data/tdx/TYMC/line-transfer.json' with { type: 'json' }

import trtcStationOfRoute from '../data/tdx/TRTC/station-of-route.json' with { type: 'json' }
import ntmcStationOfRoute from '../data/tdx/NTMC/station-of-route.json' with { type: 'json' }
import tymcStationOfRoute from '../data/tdx/TYMC/station-of-route.json' with { type: 'json' }
import ntdlrtStationOfRoute from '../data/tdx/NTDLRT/station-of-route.json' with { type: 'json' }
import ntalrtStationOfRoute from '../data/tdx/NTALRT/station-of-route.json' with { type: 'json' }

/*
 * `line-transfer` is absent for the two light rail operators, and that is the
 * platform's own answer rather than a gap in the fetch: the endpoint replies
 *
 *   RailSystem: 'NTDLRT' is not accepted but TRTC, KRTC, TYMC, NTMC
 *
 * It is restricted to the four heavy-metro systems. Recorded here so nobody
 * adds the import and finds the file missing.
 */
const OPERATOR_DATA = {
  shapes: [trtcShapes, ntmcShapes, tymcShapes, ntdlrtShapes, ntalrtShapes],
  routes: [trtcRoutes, ntmcRoutes, tymcRoutes, ntdlrtRoutes, ntalrtRoutes],
  transfers: [trtcTransfers, ntmcTransfers, tymcTransfers],
  stationOfRoute: [
    trtcStationOfRoute,
    ntmcStationOfRoute,
    tymcStationOfRoute,
    ntdlrtStationOfRoute,
    ntalrtStationOfRoute,
  ],
} as const

const merge = <T>(sets: readonly unknown[]): T[] => sets.flatMap((s) => s as T[])

export const TDX_SHAPES = <T>() => merge<T>(OPERATOR_DATA.shapes)
export const TDX_ROUTES = <T>() => merge<T>(OPERATOR_DATA.routes)
export const TDX_TRANSFERS = <T>() => merge<T>(OPERATOR_DATA.transfers)
export const TDX_STATION_OF_ROUTE = <T>() => merge<T>(OPERATOR_DATA.stationOfRoute)
