/**
 * Run times between adjacent stations, and first and last trains.
 *
 * Both come from TDX static datasets that this project only found late:
 * S2STravelTime and FirstLastTimetable. Between them they answer two things
 * that were previously marked TBC across the site — how long a hop takes, and
 * when service starts and ends.
 *
 * Read straight from the committed JSON at build time. No network, no runtime.
 */

import trtcS2S from '../data/tdx/TRTC/s2s-travel-time.json' with { type: 'json' }
import trtcFirstLast from '../data/tdx/TRTC/first-last-timetable.json' with { type: 'json' }

type S2SRecord = {
  LineID: string
  RouteID: string
  TravelTimes: {
    Sequence: number
    FromStationID: string
    ToStationID: string
    /** Seconds moving between the two stations. */
    RunTime: number
    /** Seconds standing at the destination. */
    StopTime: number
  }[]
}

type FirstLastRecord = {
  StationID: string
  LineID: string
  DestinationStaionID?: string
  DestinationStationName?: { En?: string; Zh_tw?: string }
  TripHeadSign?: string
  FirstTrainTime: string
  LastTrainTime: string
}

/* ------------------------------------------------------------------ */
/* Run times                                                           */
/* ------------------------------------------------------------------ */

/**
 * Keyed "FROM>TO". Both directions are stored separately because they are
 * published separately and are not always equal.
 */
const RUN_TIMES = new Map<string, { runTime: number; stopTime: number }>()

for (const record of trtcS2S as unknown as S2SRecord[]) {
  for (const leg of record.TravelTimes ?? []) {
    if (!leg.FromStationID || !leg.ToStationID) continue
    RUN_TIMES.set(`${leg.FromStationID}>${leg.ToStationID}`, {
      runTime: leg.RunTime ?? 0,
      stopTime: leg.StopTime ?? 0,
    })
  }
}

/** Seconds of running time between two adjacent stations, either direction. */
export function getRunTime(from: string, to: string): number | null {
  const direct = RUN_TIMES.get(`${from}>${to}`)
  if (direct) return direct.runTime
  const reverse = RUN_TIMES.get(`${to}>${from}`)
  return reverse ? reverse.runTime : null
}

/**
 * Formats seconds the way a rider thinks about them.
 *
 * Under two minutes, seconds are the honest unit — "2 min" for a 68-second hop
 * overstates it by half. Above that, minutes.
 */
export function formatRunTime(seconds: number): string {
  if (seconds < 120) return `${seconds} sec`
  return `${Math.round(seconds / 60)} min`
}

/* ------------------------------------------------------------------ */
/* First and last trains                                               */
/* ------------------------------------------------------------------ */

export type ServicePattern = {
  /** Where this train is headed, in English where published. */
  towards: string
  first: string
  last: string
}

const FIRST_LAST = new Map<string, ServicePattern[]>()

for (const record of trtcFirstLast as unknown as FirstLastRecord[]) {
  if (!record.StationID) continue
  const towards =
    record.DestinationStationName?.En ??
    record.TripHeadSign ??
    record.DestinationStaionID ??
    ''

  const list = FIRST_LAST.get(record.StationID) ?? []
  // The same destination can appear more than once across service days; the
  // first record wins rather than the page listing near-duplicates.
  if (!list.some((entry) => entry.towards === towards)) {
    list.push({
      towards,
      first: (record.FirstTrainTime ?? '').slice(0, 5),
      last: (record.LastTrainTime ?? '').slice(0, 5),
    })
  }
  FIRST_LAST.set(record.StationID, list)
}

/** Service patterns at a station, one per direction. Empty when not published. */
export function getFirstLast(code: string): ServicePattern[] {
  return FIRST_LAST.get(code) ?? []
}
