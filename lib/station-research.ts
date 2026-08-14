import type { Source } from './sources.ts'

export type StationInterchange = {
  label: string
  lineCode?: string
  source?: string
}

export type FormerStationName = {
  name: string
  nameZh: string
  announced: string
  renamed: string
  source: string
}

/** Primary-source facts that sit beside the generated station registry. */
export type StationResearch = {
  sources: Source[]
  identitySource: string
  mapSource: string
  coordinateSource?: string
  structureSource: string
  openingSource: string
  scheduleSources: string[]
  openingDate?: string
  interchange?: StationInterchange
  branch?: { label: string; source: string }
  platformDetails?: string
  platformSource?: string
  exitDetails?: string
  exitSource?: string
  facilities: string
  facilitiesSource?: string
  depot?: string
  depotSource?: string
  publicArt?: string
  publicArtSource?: string
  naming?: string
  namingSource?: string
  engineeringHistory?: string
  engineeringHistorySource?: string
  landmarks?: string
  landmarksSource?: string
  provenance?: string
  provenanceSource?: string
  additionalName?: string
  additionalNameSource?: string
  formerName?: FormerStationName
  trialFare?: string
  trialHours?: string
  normalFare?: string
}
