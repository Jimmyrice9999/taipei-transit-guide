import { test } from 'node:test'
import assert from 'node:assert/strict'
import inventory from '../data/ferry/national-ticketing-directory-2026-09.json' with { type: 'json' }
import smallThreeLinks from '../data/ferry/small-three-links-september-2026.json' with { type: 'json' }

test('ferry ticketing directory has unique corridor identities and honest status fields', () => {
  const modelFields = Object.keys(inventory.fieldDefinitions)
  for (const field of ['routeFamily', 'routeLeg', 'terminal', 'operator', 'vessel', 'timetable', 'seasonalPeriod', 'status', 'fare', 'reservation']) {
    assert.ok(modelFields.includes(field), `ferry model is missing ${field}`)
  }

  const ids = inventory.corridors.map((corridor) => corridor.id)
  assert.equal(new Set(ids).size, ids.length, 'duplicate ferry corridor id')
  assert.equal(inventory.counts.corridorRows, inventory.corridors.length)
  assert.equal(
    inventory.counts.operatorListingRows,
    inventory.corridors.reduce((total, corridor) => total + corridor.operators.length, 0),
    'operator listing count does not match corridor rows',
  )

  for (const corridor of inventory.corridors) {
    assert.notEqual(corridor.originOriginal, corridor.destinationOriginal, `${corridor.id} is a self-loop`)
    assert.equal(corridor.presence, 'official-current-ticketing-directory')
    assert.ok(corridor.timetableStatus.includes('direct') || corridor.timetableStatus.includes('separate'))
    assert.ok(corridor.operators.length > 0, `${corridor.id} has no operator listing`)
  }

  assert.ok(Array.isArray(inventory.datedScheduleSnapshots), 'dated ferry snapshots must be an array')
  for (const snapshot of inventory.datedScheduleSnapshots) {
    assert.match(snapshot.retrieved, /^2026-\d{2}-\d{2}$/)
    assert.match(snapshot.source, /^https?:\/\//)
    assert.ok(snapshot.queryWindow, 'dated ferry snapshot needs a query window')
    assert.ok(snapshot.status, 'dated ferry snapshot needs a status warning')
  }

  const budai = inventory.corridors.find((corridor) => corridor.id === 'budai-magong')
  assert.ok(budai?.scheduleSnapshot, 'Budaiâ€“Magong operator snapshot is missing')
  assert.equal(budai.scheduleSnapshot.queryMonth, '2026-09')
  assert.match(budai.scheduleSnapshot.pattern, /10:00/)
})

test('Small Three Links preserves current fare evidence and crossing-time conflict', () => {
  const quanzhou = smallThreeLinks.routeFamilies.find((route) => route.id === 'kinmen-shuitou-quanzhou-shijing')
  assert.ok(quanzhou, 'Kinmen–Quanzhou route family is missing')
  assert.deepEqual(
    quanzhou.crossingTimeConflict.map((entry) => entry.minutes),
    [60, 70],
    'official crossing-time disagreement must remain explicit',
  )
  assert.equal(quanzhou.fareSnapshot.oneWayAdultTwd, 650)
  assert.equal(quanzhou.fareSnapshot.cleaningChargeTwd, 100)
  assert.equal(quanzhou.fareSnapshot.asOf, '2026-09-07')
})
