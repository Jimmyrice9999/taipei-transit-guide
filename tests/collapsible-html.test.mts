import assert from 'node:assert/strict'
import test from 'node:test'
import { collapseMajorSections } from '../lib/collapsible-html.ts'

test('primary article sections remain present and open in the static HTML', () => {
  const article = '<h2 id="overview">Overview</h2><p>Visible prose.</p><h2 id="history">History</h2>'
  const rendered = collapseMajorSections(article)

  assert.equal(rendered, article)
  assert.doesNotMatch(rendered, /<details\b|content-disclosure/)
})
