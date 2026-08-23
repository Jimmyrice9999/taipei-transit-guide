import assert from 'node:assert/strict'
import test from 'node:test'
import {
  buildBareLineIndex,
  buildLineRegistry,
  resolveBareLine,
  type TdxLine,
} from '../lib/lines.ts'
import { GROUP_LINE } from '../lib/bus/route-groups.ts'

const line = (LineID: string): TdxLine => ({
  LineID,
  LineColor: '#123456',
  LineName: { En: `${LineID} Line`, Zh_tw: `${LineID}線` },
})

test('same bare code in two systems remains two namespaced records', () => {
  const registry = buildLineRegistry([
    { operator: 'TRTC', records: [line('R')] },
    { operator: 'TMRT', records: [line('R')] },
  ])

  assert.equal(registry.size, 2)
  assert.equal(registry.get('TRTC:R')?.operator, 'TRTC')
  assert.equal(registry.get('TMRT:R')?.operator, 'TMRT')
})

test('a bare-code collision is ambiguous instead of silently selecting a system', () => {
  const candidates = [
    { code: 'R', operator: 'TRTC' },
    { code: 'R', operator: 'TMRT' },
  ]
  const index = buildBareLineIndex(candidates)

  assert.equal(index.get('R')?.length, 2)
  assert.equal(resolveBareLine(index, 'R'), undefined)
})

test('duplicate code within one operator is rejected', () => {
  assert.throws(
    () =>
      buildLineRegistry([
        { operator: 'TMRT', records: [line('G'), line('G')] },
      ]),
    /Duplicate namespaced line identity: TMRT:G/,
  )
})

test('every feeder group carries an explicit operator namespace', () => {
  for (const [group, identity] of Object.entries(GROUP_LINE)) {
    assert.equal(identity.operator, 'TRTC', `${group} has no TRTC line namespace`)
  }
})
