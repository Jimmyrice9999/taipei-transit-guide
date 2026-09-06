import { test } from 'node:test'
import assert from 'node:assert/strict'
import joinData from '../data/multimodal/curated-joins.json' with { type: 'json' }

type Join = (typeof joinData.joins)[number]

const allowedEvidence = new Set([
  'official-shared-complex',
  'official-access-chain',
  'stop-id-geometry',
  'published-coordinates',
])

const allowedConfirmedEvidence = new Set([
  'official-shared-complex',
  'stop-id-geometry',
])

test('multimodal join ids and evidence references are structurally unique', () => {
  const ids = joinData.joins.map((join) => join.id)
  assert.equal(new Set(ids).size, ids.length, 'duplicate multimodal join id')

  for (const join of joinData.joins) {
    assert.ok(join.from.trim(), `${join.id} has no origin`) 
    assert.ok(join.to.trim(), `${join.id} has no destination`)
    assert.ok(join.source.trim(), `${join.id} has no source id`)
    assert.ok(allowedEvidence.has(join.evidence), `${join.id} uses unknown evidence ${join.evidence}`)
  }
})

test('a non-stop or non-shared-complex access chain cannot be promoted to confirmed interchange', () => {
  for (const join of joinData.joins as Join[]) {
    if (join.status === 'confirmed-interchange') {
      assert.ok(
        allowedConfirmedEvidence.has(join.evidence),
        `${join.id} is marked confirmed without shared-complex or stop-ID/geometry evidence`,
      )
    }
    if (join.evidence === 'name-only' || join.evidence === 'nearby') {
      assert.notEqual(join.status, 'confirmed-interchange', `${join.id} promotes weak evidence`)
    }
  }
})
