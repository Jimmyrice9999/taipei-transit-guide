import assert from 'node:assert/strict'
import test from 'node:test'
import {
  KRTC_DATASET_META,
  KRTC_LINE_IDS,
  KRTC_LINES,
  KRTC_LRT_STATIONS,
  KRTC_METRO_STATIONS,
  KRTC_ROUTES,
  KRTC_STATION_COUNT,
  getKrtcLrtStation,
  getKrtcRoute,
  getKrtcStation,
} from '../lib/krtc.ts'

test('the live KRTC snapshot keeps the published Metro and LRT boundaries', () => {
  assert.equal(KRTC_METRO_STATIONS.length, 39)
  assert.equal(KRTC_LRT_STATIONS.length, 38)
  assert.equal(KRTC_STATION_COUNT, 77)
  assert.deepEqual(KRTC_LINE_IDS, ['R', 'O', 'C'])
  assert.deepEqual(KRTC_LINES.map((line) => line.id), ['O', 'R'])
  assert.equal(KRTC_DATASET_META.operators.KRTC.datasets.station.status, 200)
  assert.equal(KRTC_DATASET_META.operators.KRTC.datasets['station-of-route'].records, 4)
})

test('KRTC Metro routes preserve TDX sequence and current-distance fields', () => {
  assert.equal(KRTC_ROUTES.length, 4)
  for (const lineId of ['R', 'O']) {
    const route = getKrtcRoute(lineId)!
    assert.equal(route.direction, 0)
    assert.deepEqual(
      route.stations.map((station) => station.sequence),
      Array.from({ length: route.stations.length }, (_, index) => index + 1),
    )
    assert.ok(route.stations.every((station) => station.cumulativeDistance != null))
  }
  assert.equal(getKrtcStation('R10')?.name, 'Formosa Boulevard')
  assert.equal(getKrtcStation('O5')?.name, 'Formosa Boulevard')
})

test('the operator-published Circular Light Rail layer preserves C21A as a distinct station', () => {
  assert.equal(getKrtcLrtStation('C1')?.nameEn, 'Lizihnei')
  assert.equal(getKrtcLrtStation('C21A')?.sequence, 21)
  assert.equal(getKrtcLrtStation('C21')?.sequence, 22)
  assert.equal(new Set(KRTC_LRT_STATIONS.map((station) => station.id)).size, 38)
})
