import trtcData from '@/data/accessibility/trtc-station-disabled.json'
import type { Source } from './sources.ts'

export type StationAccessibility = {
  source: Source
  lift: string
  stepFree: string
  tactile: string
  toilet: string
  nursing: string
  platformGap: string
}
type TrtcRecord = {
  code: string
  stationNumber: string
  accessibleElevator: string
  exitElevator: string
  accessibleToilet: string
  stairAntiSlipStrip: string
  tactilePaving: string
}

const trtcSource: Source = {
  id: 'trtc-station-disabled-api',
  title: 'TRTC station accessibility records',
  titleOriginal: '車站無障礙設施查詢',
  publisher: 'Taipei Rapid Transit Corporation (臺北大眾捷運股份有限公司)',
  url: 'https://web.metro.taipei/pages/tw/stationdisabledinfo/',
  accessed: '2026-08-24',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'TRTC’s stationdisabledinfo API was fetched for all 121 station records returned by its station-label endpoint. The API publishes station-specific lift/ramp locations, accessible-toilet locations, tactile-paving and stair anti-slip fields. It does not publish nursing-room or platform-gap fields; those remain TBC here.',
}

const ntmcSource: Source = {
  id: 'ntmc-accessibility',
  title: 'New Taipei Metro accessibility services',
  titleOriginal: '無障礙服務',
  publisher: 'New Taipei Metro Corporation (新北大眾捷運股份有限公司)',
  url: 'https://www.ntmetro.com.tw/basic/?node=10041',
  accessed: '2026-08-24',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The operator’s full accessibility page distinguishes Circular Line and light-rail services, publishing lifts, ramps, accessible gates, toilets, tactile paving and nursing-room station codes. It does not publish a platform-gap measurement.',
}

const tymcSource: Source = {
  id: 'tymc-accessibility',
  title: 'Taoyuan Metro accessibility services',
  titleOriginal: '無障礙服務',
  publisher: 'Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)',
  url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/accessible.html',
  accessed: '2026-08-24',
  snapshot: '',
  snapshotAlt: '',
  kind: 'primary',
  lang: 'zh-Hant',
  note: 'The operator’s full accessibility page says every station has accessible lifts, gates, tactile warnings, accessible toilets and ramps where level differences occur. It does not publish nursing-room locations or a platform-gap measurement.',
}

const trtcRecords = new Map<string, TrtcRecord>()
for (const record of trtcData.stations as TrtcRecord[]) {
  for (const code of record.code.split('/')) trtcRecords.set(code, record)
}

const published = (value: string | undefined) =>
  value && value !== '0' && value.toLowerCase() !== 'false' ? 'Published' : 'Not marked in this operator field'

function trtcAccessibility(code: string): StationAccessibility | null {
  const record = trtcRecords.get(code.toUpperCase())
  if (!record) return null
  return {
    source: trtcSource,
    lift: `${published(record.accessibleElevator)}; the operator also publishes the station’s exit lift/ramp locations in Chinese.`,
    stepFree: `${published(record.exitElevator)} in the operator’s exit lift/ramp field; the station-specific route text is retained in the source record.`,
    tactile: `Tactile paving: ${published(record.tactilePaving)}. Stair anti-slip strips: ${published(record.stairAntiSlipStrip)}.`,
    toilet: `${published(record.accessibleToilet)}; the operator publishes the station-specific accessible-toilet location in Chinese.`,
    nursing: 'TBC — this TRTC station-accessibility API does not publish nursing-room data.',
    platformGap: 'TBC — no platform-gap measurement was found in this TRTC station-accessibility API.',
  }
}

function ntmcAccessibility(line: string, code: string, structure: string): StationAccessibility {
  if (line === 'Y') {
    return {
      source: ntmcSource,
      lift: 'Every Circular Line station has an accessible elevator to the platform.',
      stepFree: 'Every Circular Line station publishes accessible ramps, a wide accessible gate and a lower accessible ticket machine.',
      tactile: 'Tactile paving runs from station entrances toward the accessible elevator, lobby, accessible gate and platform; warning blocks are also published at stairs and platform edges.',
      toilet: 'Every Circular Line station has an accessible toilet.',
      nursing: ['Y06', 'Y07', 'Y08', 'Y10', 'Y16', 'Y17', 'Y19'].includes(code)
        ? 'Nursing room published at this station; ask station staff for access.'
        : 'No nursing room is listed for this station on the operator’s current accessibility page.',
      platformGap: 'TBC — the operator describes boarding facilities but does not publish a platform-gap measurement.',
    }
  }

  const nursing = line === 'V' && ['V01', 'V26'].includes(code)
    ? 'Nursing room published at this station; ask station staff for access.'
    : line === 'K' && code === 'K09'
      ? 'Nursing room published at this station; ask station staff for access.'
      : 'No nursing room is listed for this station on the operator’s current accessibility page.'
  const toilet = line === 'V' && ['V01', 'V26'].includes(code)
    ? 'Accessible toilet published at this station.'
    : line === 'K' && code === 'K09'
      ? 'Accessible toilet published at this station.'
      : 'No accessible toilet is listed for this station on the operator’s current light-rail accessibility page.'
  return {
    source: ntmcSource,
    lift: structure === 'elevated'
      ? 'The operator says elevated light-rail stations have accessible elevators to the platform.'
      : 'TBC — the operator describes elevators at elevated light-rail stations, but this station is not identified as elevated in the current registry.',
    stepFree: structure === 'elevated'
      ? 'Accessible elevator access to the platform is published for elevated stations.'
      : 'The operator says at-grade light-rail stations use accessible ramps between the platform and crossing.',
    tactile: 'The operator publishes tactile warning blocks at stairs, platform ends and platform edges.',
    toilet,
    nursing,
    platformGap: 'TBC — the operator does not publish a platform-gap measurement.',
  }
}

function tymcAccessibility(): StationAccessibility {
  return {
    source: tymcSource,
    lift: 'Every Airport MRT station is designed with an accessible elevator; the operator publishes Braille, voice announcements, secondary controls, handrails and an intercom.',
    stepFree: 'The operator publishes accessible gates and ramps wherever there is a level difference inside or outside a station.',
    tactile: 'The operator publishes tactile warning blocks at stairs, platform edges and elevator call buttons, plus high-contrast stair guidance stickers.',
    toilet: 'The operator says station toilets include accessible facilities; station-specific toilet locations are TBC in the fetched page.',
    nursing: 'TBC — no nursing-room locations are published on the fetched operator accessibility page.',
    platformGap: 'TBC — no platform-gap measurement is published on the fetched operator accessibility page.',
  }
}

/** Accessibility evidence for the station page. Data is deliberately partial: TBC is safer than a plausible station-specific feature. */
export function getStationAccessibility(
  operator: string,
  line: string,
  code: string,
  structure: string,
): StationAccessibility | null {
  if (operator === 'TRTC') return trtcAccessibility(code)
  if (operator === 'NTMC' && ['Y', 'V', 'K'].includes(line)) return ntmcAccessibility(line, code, structure)
  if (operator === 'TYMC' && line === 'A') return tymcAccessibility()
  return null
}
