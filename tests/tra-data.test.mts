import assert from 'node:assert/strict'
import test from 'node:test'
import { assertRailArchitecture } from '../lib/rail-architecture.ts'
import {
  TRA_ARCHITECTURE,
  TRA_DATASET_META,
  TRA_LINE_IDS,
  TRA_ROUTES,
  TRA_STATIONS,
  getTraLine,
  getTraStation,
} from '../lib/tra.ts'

test('the committed TRA snapshot retains the live TDX coverage boundary', () => {
  assert.equal(TRA_STATIONS.length, 245)
  assert.deepEqual(TRA_LINE_IDS, ['CZ', 'EL', 'JJ', 'LJ', 'NW', 'PX', 'SA', 'SH', 'SL', 'SU', 'WL', 'WL-C'])
  assert.equal(TRA_ROUTES.length, 12)
  assert.equal(TRA_DATASET_META.datasets.Route.status, 404)
  assert.equal(TRA_DATASET_META.datasets.StationOfRoute.status, 404)
})

test('TRA stations and routes validate through the temporal architecture', () => {
  assert.doesNotThrow(() => assertRailArchitecture(TRA_ARCHITECTURE))
  assert.equal(getTraStation('0900')?.currentName.nameEn, 'Keelung')
  assert.equal(getTraLine('wl')?.name.nameEn, 'Western Main Line')
  assert.equal(getTraLine('wl')?.versions[0].stationIds.length, 112)
})

test('each TRA line keeps its TDX station sequence and current 1067 mm segments', () => {
  for (const route of TRA_ROUTES) {
    const version = route.versions[0]
    assert.ok(version.stationIds.length > 0)
    const sequences = version.stationIds.map((stationId) =>
      TRA_ARCHITECTURE.stations.find((station) => station.stationId === stationId)!.routeMembership.find((membership) => membership.routeId === route.routeId)!.sequence,
    )
    assert.deepEqual(sequences, Array.from({ length: version.stationIds.length }, (_, index) => index + 1))
    for (const stationId of version.stationIds) {
      assert.equal(getTraStation(stationId)?.routeMembership.some((membership) => membership.routeId === route.routeId), true)
    }
  }
  assert.ok(TRA_ARCHITECTURE.segments.length > 200)
  assert.equal(new Set(TRA_ARCHITECTURE.segments.map((segment) => segment.gaugeMm)).size, 1)
  assert.equal(TRA_ARCHITECTURE.segments[0].gaugeMm, 1067)
})
