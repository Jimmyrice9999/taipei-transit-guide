import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (name: string) => JSON.parse(fs.readFileSync(path.join(root, 'data/forest/alishan', name), 'utf8'))
const stations = read('stations.json') as Array<{ id: string; lineId: string; sequence: number; serviceStatus: string }>
const lines = read('lines.json') as Array<{ id: string; status: string; stationIds: string[] }>
const rollingStock = read('rolling-stock.json') as Array<{ id: string; source: string }>

test('Alishan snapshot has unique station identities and a complete active main line', () => {
  assert.equal(new Set(stations.map((station) => station.id)).size, stations.length)
  const main = stations.filter((station) => station.lineId === 'main-line')
  assert.equal(main.length, 16)
  assert.deepEqual(main.map((station) => station.sequence), Array.from({ length: 16 }, (_, i) => i + 1))
  assert.ok(main.every((station) => station.serviceStatus === 'scheduled'))
})

test('Alishan snapshot keeps closed Mianyue separate from scheduled branches', () => {
  assert.equal(lines.find((line) => line.id === 'mianyue-line')?.status, 'closed')
  assert.equal(lines.filter((line) => line.status === 'scheduled').length, 4)
  const scheduledIds = new Set(lines.filter((line) => line.status === 'scheduled').flatMap((line) => line.stationIds))
  assert.ok(scheduledIds.has('branch-shenmu'))
  assert.ok(scheduledIds.has('branch-zhaoping'))
  assert.ok(scheduledIds.has('branch-zhushan'))
})

test('Alishan rolling-stock rows all carry a fetched source id', () => {
  assert.ok(rollingStock.length >= 10)
  assert.ok(rollingStock.every((row) => row.id && row.source))
})
