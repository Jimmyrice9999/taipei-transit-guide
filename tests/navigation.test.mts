/**
 * The session nav trail.
 *
 * Run 51 fixed a reported loop: from Home, Rail ▸ Network, an operator link,
 * Back — and the Back control on the Network page then pointed forward, to the
 * operator page. Pressing it again bounced between the two. The trail was a
 * visit log being read as a path; see lib/navigation-history.ts.
 *
 * These drive the reported sequence directly. `npm run nav` also walks it in a
 * real browser, which is what proves the component wired to this behaves; this
 * is what proves the decision, and it is the one that would have caught it.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { advanceTrail, normalizePath, previousPath } from '../lib/navigation-history.ts'

/** The pure half of the module, driven the way the component drives it. */
function walk(paths: string[]) {
  return paths.reduce<string[]>((trail, path) => advanceTrail(trail, path), [])
}

test('the exact reported repro no longer walks forward', () => {
  // Home → Network → operator → Back (to Network).
  const trail = walk(['/', '/rail/network/', '/rail/operators/trtc/', '/rail/network/'])
  assert.deepEqual(trail, ['/', '/rail/network/'])

  // On Network, "back" is Home — not the operator page just left.
  const back = trail.at(-2)
  assert.equal(back, '/')
  assert.notEqual(back, '/rail/operators/trtc/')

  // And back again from Home leaves nothing above it, so the caller's own
  // fallback stands rather than a link into the branch just abandoned.
  const atHome = advanceTrail(trail, '/')
  assert.deepEqual(atHome, ['/'])
})

test('going forward again after a back does not resurrect the old branch', () => {
  const trail = walk([
    '/',
    '/rail/network/',
    '/rail/operators/trtc/',
    '/rail/network/', // back
    '/rail/lines/', // a different way on
  ])
  assert.deepEqual(trail, ['/', '/rail/network/', '/rail/lines/'])
})

test('a multi-step back truncates to the page landed on', () => {
  const trail = walk([
    '/',
    '/rail/',
    '/rail/lines/',
    '/rail/lines/wenhu-line/',
    '/', // long-press Back, three steps at once
  ])
  assert.deepEqual(trail, ['/'])
})

test('a repeat of the current path is not a navigation', () => {
  assert.deepEqual(advanceTrail(['/', '/rail/'], '/rail/'), ['/', '/rail/'])
  assert.deepEqual(advanceTrail(['/', '/rail/'], '/rail'), ['/', '/rail/'])
})

test('the trail never grows without bound', () => {
  const many = Array.from({ length: 400 }, (_, i) => `/page-${i}/`)
  assert.equal(walk(many).length, 50)
})

test('trailing slashes, queries and fragments normalise to one route', () => {
  assert.equal(normalizePath('/rail/network'), '/rail/network/')
  assert.equal(normalizePath('/rail/network/?x=1'), '/rail/network/')
  assert.equal(normalizePath('/rail/network/#map'), '/rail/network/')
  assert.equal(normalizePath('//rail//network//'), '/rail/network/')
  assert.equal(normalizePath('/'), '/')
})

test('previousPath returns null off the server, where there is no trail', () => {
  // Node has no window, so readHistory() is empty — the caller's explicit
  // fallback is what renders, which is the whole point of having one.
  assert.equal(previousPath('/rail/network/'), null)
})
