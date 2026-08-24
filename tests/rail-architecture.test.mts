import assert from 'node:assert/strict'
import test from 'node:test'
import {
  assertRailArchitecture,
  getRailStation,
  getRouteVersionAt,
  routeKey,
  stationKey,
  validateRailArchitecture,
  type RailArchitectureModel,
} from '../lib/rail-architecture.ts'

const model = (): RailArchitectureModel => ({
  stations: [
    {
      operator: 'TRA',
      stationId: 'west-001',
      code: 'TRA-001',
      currentName: { nameEn: 'Central', nameZh: '中央' },
      formerNames: [{ nameEn: 'Old Central', validFrom: '1900-01-01', validTo: '1930-12-31' }],
      routeMembership: [
        { routeId: 'western', role: 'trunk', status: 'active', sequence: 1 },
        { routeId: 'old-branch', role: 'closed', status: 'historical', validTo: '1930-12-31' },
      ],
      status: 'active',
      validFrom: '1931-01-01',
      interchangeGroup: 'central-complex',
    },
    {
      operator: 'TRA',
      stationId: 'west-002',
      currentName: { nameEn: 'South Junction', nameZh: '南 junction' },
      formerNames: [],
      routeMembership: [{ routeId: 'western', role: 'trunk', status: 'active', sequence: 2 }],
      status: 'active',
      interchangeGroup: 'central-complex',
    },
    {
      operator: 'TRA',
      stationId: 'branch-001',
      currentName: { nameEn: 'Branch Terminus', nameZh: '支線終點' },
      formerNames: [],
      routeMembership: [{ routeId: 'western', role: 'branch', status: 'active', sequence: 2 }],
      status: 'active',
    },
  ],
  routes: [
    {
      operator: 'TRA',
      routeId: 'western',
      name: { nameEn: 'Western Trunk Line', nameZh: '西部幹線' },
      versions: [
        {
          versionId: 'historical-standard-gauge',
          status: 'historical',
          validFrom: '1890-01-01',
          validTo: '1900-12-31',
          stationIds: ['west-001', 'west-002'],
          segmentIds: ['standard-001'],
          geometryIds: ['western-1890'],
        },
        {
          versionId: 'current-metric-gauge',
          status: 'active',
          validFrom: '1901-01-01',
          stationIds: ['west-001', 'west-002', 'branch-001'],
          segmentIds: ['metric-001', 'metric-branch'],
          geometryIds: ['western-current'],
        },
      ],
    },
    {
      operator: 'TRA',
      routeId: 'old-branch',
      name: { nameEn: 'Old Branch', nameZh: '舊支線' },
      versions: [{ versionId: 'closed', status: 'closed', validFrom: '1900-01-01', validTo: '1930-12-31', stationIds: ['west-001'], segmentIds: [], geometryIds: [] }],
    },
  ],
  segments: [
    { segmentId: 'standard-001', routeId: 'TRA:western', fromStationId: 'west-001', toStationId: 'west-002', gaugeMm: 1435, status: 'historical', validFrom: '1890-01-01', validTo: '1900-12-31' },
    { segmentId: 'metric-001', routeId: 'TRA:western', fromStationId: 'west-001', toStationId: 'west-002', gaugeMm: 1067, status: 'active', validFrom: '1901-01-01' },
    { segmentId: 'metric-branch', routeId: 'TRA:western', fromStationId: 'west-002', toStationId: 'branch-001', gaugeMm: 1067, status: 'active', validFrom: '1901-01-01' },
  ],
  geometries: [
    { geometryId: 'western-1890', routeId: 'TRA:western', versionId: 'historical-standard-gauge', status: 'historical', validFrom: '1890-01-01', validTo: '1900-12-31', wkt: 'LINESTRING(120 23,121 24)' },
    { geometryId: 'western-current', routeId: 'TRA:western', versionId: 'current-metric-gauge', status: 'active', validFrom: '1901-01-01', wkt: 'LINESTRING(120 23,121 24)' },
  ],
  interchanges: [{ groupId: 'central-complex', stationIds: ['TRA:WEST-001', 'TRA:WEST-002'] }],
})

test('the temporal graph preserves branches, renamings, closures and gauge by segment', () => {
  const fixture = model()
  assert.deepEqual(validateRailArchitecture(fixture), [])
  assert.doesNotThrow(() => assertRailArchitecture(fixture))
  assert.equal(stationKey('tra', 'west-001'), 'TRA:WEST-001')
  assert.equal(routeKey('tra', 'western'), 'TRA:WESTERN')
  assert.equal(getRailStation(fixture, 'TRA', 'WEST-001')?.formerNames[0].nameEn, 'Old Central')
  assert.equal(getRouteVersionAt(fixture, 'TRA', 'western', '1895-01-01')?.status, 'historical')
  assert.equal(getRouteVersionAt(fixture, 'TRA', 'western', '2026-01-01')?.versionId, 'current-metric-gauge')
  assert.deepEqual(fixture.segments.map((segment) => segment.gaugeMm), [1435, 1067, 1067])
  assert.equal(fixture.routes[0].versions[1].stationIds.includes('branch-001'), true)
  assert.equal(fixture.routes[1].versions[0].status, 'closed')
})

test('a duplicate namespaced station identity is rejected', () => {
  const fixture = model()
  fixture.stations.push({ ...fixture.stations[0] })
  assert.throws(() => assertRailArchitecture(fixture), /duplicates TRA:WEST-001/)
})

test('dangling branch references and bare interchange references are rejected', () => {
  const fixture = model()
  fixture.routes[0].versions[1].stationIds.push('not-a-station')
  fixture.interchanges[0].stationIds.push('WEST-002')
  const issues = validateRailArchitecture(fixture)
  assert.ok(issues.some((issue) => issue.includes('unknown station TRA:NOT-A-STATION')))
  assert.ok(issues.some((issue) => issue.includes('unknown station WEST-002')))
})

test('overlapping route versions and invalid gauge intervals are rejected', () => {
  const fixture = model()
  fixture.routes[0].versions[1].validFrom = '1900-01-01'
  fixture.segments[0].validFrom = '1901-01-01'
  fixture.segments[0].validTo = '1900-01-01'
  const issues = validateRailArchitecture(fixture)
  assert.ok(issues.some((issue) => issue.includes('overlapping versions')))
  assert.ok(issues.some((issue) => issue.includes('segment TRA:WESTERN:STANDARD-001 has validFrom after validTo')))
})
