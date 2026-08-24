/**
 * Temporal rail-network primitives.
 *
 * The current metro registry is intentionally a small present-day view. TRA
 * cannot fit that shape: a station can have several route memberships, names
 * change over time, lines have branches and closed versions, and gauge belongs
 * to a dated segment rather than to the whole route. This module keeps those
 * dimensions explicit before any historical data is imported.
 */

export type RailStatus = 'active' | 'closed' | 'historical'

export type RailInterval = {
  validFrom?: string
  validTo?: string
}

export type RailName = {
  nameEn: string
  nameZh?: string
}

export type RailFormerName = RailName & RailInterval & {
  sourceId?: string
}

export type RailRouteMembership = RailInterval & {
  routeId: string
  role: 'trunk' | 'branch' | 'spur' | 'closed'
  status: RailStatus
  sequence?: number
}

export type RailStationEntity = RailInterval & {
  operator: string
  stationId: string
  code?: string
  currentName: RailName
  formerNames: RailFormerName[]
  routeMembership: RailRouteMembership[]
  status: RailStatus
  interchangeGroup?: string
}

export type RailRouteVersion = RailInterval & {
  versionId: string
  status: RailStatus
  stationIds: string[]
  segmentIds: string[]
  geometryIds: string[]
}

export type RailRouteEntity = {
  operator: string
  routeId: string
  name: RailName
  versions: RailRouteVersion[]
}

export type RailGaugeSegment = RailInterval & {
  segmentId: string
  routeId: string
  fromStationId: string
  toStationId: string
  gaugeMm: number
  status: RailStatus
}

export type RailGeometryVersion = RailInterval & {
  geometryId: string
  routeId: string
  versionId: string
  status: RailStatus
  wkt: string
}

export type RailInterchangeGroup = {
  groupId: string
  stationIds: string[]
}

export type RailArchitectureModel = {
  stations: RailStationEntity[]
  routes: RailRouteEntity[]
  segments: RailGaugeSegment[]
  geometries: RailGeometryVersion[]
  interchanges: RailInterchangeGroup[]
}

export function stationKey(operator: string, stationId: string): string {
  return `${operator.trim().toUpperCase()}:${stationId.trim().toUpperCase()}`
}

export function routeKey(operator: string, routeId: string): string {
  return `${operator.trim().toUpperCase()}:${routeId.trim().toUpperCase()}`
}

function intervalError(label: string, value: RailInterval): string | null {
  if (value.validFrom && Number.isNaN(Date.parse(value.validFrom))) {
    return `${label} has invalid validFrom ${value.validFrom}`
  }
  if (value.validTo && Number.isNaN(Date.parse(value.validTo))) {
    return `${label} has invalid validTo ${value.validTo}`
  }
  if (value.validFrom && value.validTo && value.validFrom > value.validTo) {
    return `${label} has validFrom after validTo`
  }
  return null
}

function overlaps(a: RailInterval, b: RailInterval): boolean {
  const aFrom = a.validFrom ?? ''
  const aTo = a.validTo ?? '\uffff'
  const bFrom = b.validFrom ?? ''
  const bTo = b.validTo ?? '\uffff'
  return aFrom <= bTo && bFrom <= aTo
}

function addUnique(map: Map<string, string>, key: string, label: string, issues: string[]): void {
  const previous = map.get(key)
  if (previous) issues.push(`${label} duplicates ${key} (${previous} and ${label})`)
  else map.set(key, label)
}

/** Find a station using its operator namespace. Bare cross-system lookup is impossible. */
export function getRailStation(
  model: RailArchitectureModel,
  operator: string,
  stationId: string,
): RailStationEntity | undefined {
  const key = stationKey(operator, stationId)
  return model.stations.find((station) => stationKey(station.operator, station.stationId) === key)
}

/** Find a route version that was valid on an ISO date. */
export function getRouteVersionAt(
  model: RailArchitectureModel,
  operator: string,
  routeId: string,
  date: string,
): RailRouteVersion | undefined {
  const route = model.routes.find((candidate) => routeKey(candidate.operator, candidate.routeId) === routeKey(operator, routeId))
  if (!route) return undefined
  return route.versions.find((version) => {
    const interval = intervalError('route version', version)
    if (interval) return false
    return (!version.validFrom || version.validFrom <= date) && (!version.validTo || date <= version.validTo)
  })
}

/**
 * Validate the graph before it is used to generate pages.
 *
 * The returned messages are deliberately structural: callers can print them
 * in a build failure, and tests can assert that a fixture is or is not valid.
 */
export function validateRailArchitecture(model: RailArchitectureModel): string[] {
  const issues: string[] = []
  const stationKeys = new Map<string, string>()
  const routeKeys = new Map<string, string>()
  const segmentKeys = new Map<string, string>()
  const geometryKeys = new Map<string, string>()

  for (const station of model.stations) {
    const key = stationKey(station.operator, station.stationId)
    if (!station.operator.trim() || !station.stationId.trim()) issues.push(`station ${key} has no stable namespaced identity`)
    addUnique(stationKeys, key, `station ${key}`, issues)
    const stationInterval = intervalError(`station ${key}`, station)
    if (stationInterval) issues.push(stationInterval)
    if (!station.currentName.nameEn.trim()) issues.push(`station ${key} has no current English name`)

    for (const [index, former] of station.formerNames.entries()) {
      const formerInterval = intervalError(`former name ${key}[${index}]`, former)
      if (formerInterval) issues.push(formerInterval)
      if (!former.nameEn.trim() && !former.nameZh?.trim()) issues.push(`former name ${key}[${index}] is empty`)
      if (station.validFrom && former.validTo && former.validTo >= station.validFrom) {
        issues.push(`former name ${key}[${index}] overlaps the current name interval`)
      }
    }

    for (const [index, membership] of station.routeMembership.entries()) {
      const membershipInterval = intervalError(`route membership ${key}[${index}]`, membership)
      if (membershipInterval) issues.push(membershipInterval)
      if (membership.sequence !== undefined && (!Number.isInteger(membership.sequence) || membership.sequence < 1)) {
        issues.push(`route membership ${key}[${index}] has invalid sequence`)
      }
    }
  }

  for (const route of model.routes) {
    const key = routeKey(route.operator, route.routeId)
    if (!route.operator.trim() || !route.routeId.trim()) issues.push(`route ${key} has no stable namespaced identity`)
    addUnique(routeKeys, key, `route ${key}`, issues)
    if (!route.name.nameEn.trim()) issues.push(`route ${key} has no current English name`)
    for (const version of route.versions) {
      const versionLabel = `${key}@${version.versionId}`
      const versionInterval = intervalError(`route version ${versionLabel}`, version)
      if (versionInterval) issues.push(versionInterval)
      if (!version.validFrom) issues.push(`route version ${versionLabel} has no validFrom date`)
      for (const stationId of version.stationIds) {
        if (!stationKeys.has(stationKey(route.operator, stationId))) {
          issues.push(`route version ${versionLabel} references unknown station ${stationKey(route.operator, stationId)}`)
        }
      }
      if (new Set(version.stationIds.map((id) => id.toUpperCase())).size !== version.stationIds.length) {
        issues.push(`route version ${versionLabel} repeats a station`)
      }
      for (const segmentId of version.segmentIds) {
        if (!segmentKeys.has(`${routeKey(route.operator, route.routeId)}:${segmentId.toUpperCase()}`)) {
          // The segment map is populated later; retain this check after the loop.
        }
      }
    }
    for (let i = 0; i < route.versions.length; i++) {
      for (let j = i + 1; j < route.versions.length; j++) {
        if (overlaps(route.versions[i], route.versions[j])) {
          issues.push(`route ${key} has overlapping versions ${route.versions[i].versionId} and ${route.versions[j].versionId}`)
        }
      }
    }
  }

  for (const segment of model.segments) {
    const key = `${routeKey(segment.routeId.split(':')[0], segment.routeId.split(':').slice(1).join(':'))}:${segment.segmentId.toUpperCase()}`
    addUnique(segmentKeys, key, `segment ${key}`, issues)
    const segmentInterval = intervalError(`segment ${key}`, segment)
    if (segmentInterval) issues.push(segmentInterval)
    if (!Number.isFinite(segment.gaugeMm) || segment.gaugeMm <= 0) issues.push(`segment ${key} has invalid gauge`)
    const [operator] = segment.routeId.split(':', 1)
    const route = model.routes.find((candidate) => routeKey(candidate.operator, candidate.routeId) === segment.routeId.toUpperCase())
    if (!route) issues.push(`segment ${key} references unknown route ${segment.routeId}`)
    else {
      for (const stationId of [segment.fromStationId, segment.toStationId]) {
        if (!stationKeys.has(stationKey(operator, stationId))) issues.push(`segment ${key} references unknown station ${stationKey(operator, stationId)}`)
      }
    }
  }

  for (const route of model.routes) {
    for (const version of route.versions) {
      for (const segmentId of version.segmentIds) {
        const key = `${routeKey(route.operator, route.routeId)}:${segmentId.toUpperCase()}`
        if (!segmentKeys.has(key)) issues.push(`route version ${routeKey(route.operator, route.routeId)}@${version.versionId} references unknown segment ${segmentId}`)
      }
    }
  }

  for (const geometry of model.geometries) {
    const key = `${routeKey(geometry.routeId.split(':')[0], geometry.routeId.split(':').slice(1).join(':'))}:${geometry.geometryId.toUpperCase()}`
    addUnique(geometryKeys, key, `geometry ${key}`, issues)
    if (!geometry.wkt.trim()) issues.push(`geometry ${key} is empty`)
    const geometryInterval = intervalError(`geometry ${key}`, geometry)
    if (geometryInterval) issues.push(geometryInterval)
  }

  for (const route of model.routes) {
    for (const version of route.versions) {
      for (const geometryId of version.geometryIds) {
        const key = `${routeKey(route.operator, route.routeId)}:${geometryId.toUpperCase()}`
        if (!geometryKeys.has(key)) issues.push(`route version ${routeKey(route.operator, route.routeId)}@${version.versionId} references unknown geometry ${geometryId}`)
      }
    }
  }

  for (const group of model.interchanges) {
    const ids = group.stationIds.map((id) => id.toUpperCase())
    if (new Set(ids).size !== ids.length) issues.push(`interchange ${group.groupId} repeats a station`)
    if (ids.length < 2) issues.push(`interchange ${group.groupId} has fewer than two stations`)
    for (const id of group.stationIds) if (!stationKeys.has(id.toUpperCase())) issues.push(`interchange ${group.groupId} references unknown station ${id}`)
  }

  return issues
}

export function assertRailArchitecture(model: RailArchitectureModel): void {
  const issues = validateRailArchitecture(model)
  if (issues.length) throw new Error(`Invalid rail architecture:\n${issues.map((issue) => `- ${issue}`).join('\n')}`)
}
