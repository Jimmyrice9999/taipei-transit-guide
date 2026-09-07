import { test } from 'node:test'
import assert from 'node:assert/strict'
import snapshot from '../data/air/domestic-schedule-september-2026.json' with { type: 'json' }

test('domestic-air snapshot counts and route identities remain internally consistent', () => {
  const keys = snapshot.routeFamilies.map((route) => {
    const endpoints = [route.originOriginal, route.destinationOriginal].sort()
    return endpoints.join('–')
  })

  assert.equal(new Set(keys).size, keys.length, 'duplicate normalized airport pair')
  assert.equal(snapshot.counts.undirectedRouteFamilies, snapshot.routeFamilies.length)
  assert.equal(
    snapshot.counts.timetableRows,
    snapshot.routeFamilies.reduce((total, route) => total + route.directionalTimetableRows, 0),
    'declared timetable row count does not match route-family roll-up',
  )
  assert.ok(snapshot.effectiveFrom <= snapshot.effectiveTo, 'invalid snapshot date range')

  const operators = new Set(snapshot.operators)
  for (const route of snapshot.routeFamilies) {
    assert.notEqual(route.originOriginal, route.destinationOriginal, `${route.origin} is a self-loop`)
    assert.ok(route.directionalTimetableRows > 0, `${route.origin}–${route.destination} has no rows`)
    for (const operator of route.operators) assert.ok(operators.has(operator), `${operator} is not in the operator registry`)
  }
})
