/**
 * The search index and the matcher that reads it.
 *
 * Two guarantees, and they are different in kind:
 *
 *   the index is current   The shipped file is generated from the content tree.
 *                          Rebuilding it here and comparing is what stops a new
 *                          page being invisible to search until someone
 *                          remembers to run `npm run search` — the same
 *                          contract postbuild enforces for the font subsets.
 *
 *   the matcher answers    A reader arrives with a station code, a route
 *                          number, an English name or a Chinese one. Each of
 *                          those is a case here, with the answer pinned, so a
 *                          change to the ranking has to be a decision rather
 *                          than a side effect.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { buildSearchIndex } from '../lib/search-entries.ts'
import { normalise, searchIndex } from '../lib/search.ts'

const FILE = path.join(process.cwd(), 'public', 'data', 'search-index.json')

const shipped = JSON.parse(fs.readFileSync(FILE, 'utf8'))
const built = buildSearchIndex()

test('the shipped index matches what the content produces', () => {
  assert.deepEqual(
    shipped,
    JSON.parse(JSON.stringify(built)),
    'public/data/search-index.json is stale — run `npm run search` and commit it.',
  )
})

test('the index is byte-stable across runs', () => {
  // Sorted by href in the builder, so two runs over the same content produce
  // the same file. A generated artifact that churns is a diff nobody reviews.
  assert.equal(JSON.stringify(buildSearchIndex()), JSON.stringify(built))
})

test('every indexed href is a page the site actually exports', () => {
  const OUT = path.join(process.cwd(), 'out')
  if (!fs.existsSync(OUT)) return
  const missing = built.entries
    .map((entry) => entry.h)
    .filter((href) => !fs.existsSync(path.join(OUT, ...href.split('/').filter(Boolean), 'index.html')))
  assert.deepEqual(missing, [], `search points at pages that do not exist:\n  ${missing.join('\n  ')}`)
})

test('every page type a reader might search for is in the index', () => {
  const kinds = new Set(built.entries.map((entry) => entry.c.split(' · ')[0]))
  for (const kind of ['Line', 'Depot', 'Operator', 'Article', 'Bus route', 'Section', 'Index']) {
    assert.ok(kinds.has(kind), `nothing in the index is a ${kind}`)
  }
  // Stations carry their line in the label, so they are matched by suffix.
  assert.ok(
    built.entries.some((entry) => entry.c.endsWith('station')),
    'no stations in the index',
  )
})

/* ---- the matcher ---------------------------------------------------- */

const top = (query: string) => searchIndex(built.entries, query, 1)[0]?.entry

test('a station code finds that station', () => {
  assert.equal(top('br13')?.t, 'Songshan Airport')
  assert.equal(top('BR 13')?.t, 'Songshan Airport')
  assert.equal(top('r22a')?.t, 'Xinbeitou')
})

test('a Chinese name finds its page', () => {
  assert.equal(top('文湖線')?.t, 'Wenhu Line')
  assert.equal(top('松山機場')?.t, 'Songshan Airport')
  assert.equal(top('棕10')?.h, '/bus/routes/colour-brown/brown-10/')
})

test('a route number finds the route', () => {
  // The slug carries a disambiguator where two TDX identities share a number.
  assert.match(top('212')?.h ?? '', /^\/bus\/routes\/series-200s\/212(-[a-z0-9]+)?\/$/)
  assert.equal(top('藍26')?.h, '/bus/routes/colour-blue/blue-26/')
})

test('a multi-word English name finds its page', () => {
  /*
   * The regression this pins: the matcher split a title on spaces before
   * normalising, so "New Taipei bus routes" became four tokens and the query
   * "new taipei" — which normalises to one word — matched none of them. The
   * group page a reader typed the name of came back below four operator
   * records.
   */
  assert.equal(top('new taipei')?.h, '/bus/routes/new-taipei/')
  assert.equal(top('muzha depot')?.h, '/rail/metro/depots/muzha-depot/')
  assert.equal(top('songshan airport')?.t, 'Songshan Airport')
})

test('an article is findable by its title', () => {
  assert.equal(top('matra')?.h, '/rail/history/matra-dispute/')
})

test('an empty or whitespace query returns nothing rather than everything', () => {
  assert.deepEqual(searchIndex(built.entries, ''), [])
  assert.deepEqual(searchIndex(built.entries, '   '), [])
})

test('the matcher never returns more than it was asked for', () => {
  assert.ok(searchIndex(built.entries, 'a', 5).length <= 5)
  assert.ok(searchIndex(built.entries, '線', 3).length <= 3)
})

test('normalising folds the separators a reader will not type', () => {
  assert.equal(normalise('Zhonghe–Xinlu Line'), 'zhongheXinluline'.toLowerCase())
  assert.equal(normalise('Tamsui-Xinyi'), 'tamsuixinyi')
  assert.equal(normalise('BR 13'), 'br13')
  // Han is left alone: no case, no spacing to fold.
  assert.equal(normalise('文湖線'), '文湖線')
})
