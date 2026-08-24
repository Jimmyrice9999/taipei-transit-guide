import assert from 'node:assert/strict'
import test from 'node:test'
import tymcLines from '../data/tdx/TYMC/line.json' with { type: 'json' }
import { getLine } from '../lib/lines.ts'
import { getLineStations, getStation } from '../lib/stations.ts'
import {
  TAOYUAN_GREEN_STATIONS,
  TAOYUAN_GREEN_STATION_COUNT,
  getTaoyuanGreenStation,
} from '../lib/taoyuan-green.ts'

test('the Green Line project registry preserves the DORTS station table boundary', () => {
  assert.equal(TAOYUAN_GREEN_STATION_COUNT, 21)
  assert.deepEqual(
    TAOYUAN_GREEN_STATIONS.map((station) => station.code),
    ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G15a', 'G15b', 'G16', 'G17', 'G18', 'G19'],
  )
  assert.equal(getTaoyuanGreenStation('g15B')?.name, 'Kengkou')
  assert.equal(getTaoyuanGreenStation('G16')?.nameZh, '')
})

test('TYMC Green Line lookups are separate from the live Airport MRT dataset', () => {
  assert.equal(getLine('G', 'TYMC')?.name, 'Green')
  assert.equal(getLine('G', 'TYMC')?.onTdx, false)
  assert.equal(getLine('G', 'TYMC')?.map, '#5DA131')
  assert.equal(getLineStations('G', 'TYMC').length, 21)
  assert.equal(getStation('G04', 'TYMC')?.name, 'Danan')
  assert.equal(tymcLines.length, 1)
  assert.equal(tymcLines[0].LineID, 'A')
})
