/**
 * The Markdown pipeline, and the frontmatter contract the README promises.
 *
 * The badge system is advertised as a proofreading tool — write a station code
 * and the build tells you if it is wrong. That promise is only as good as the
 * tokenizer, and the tokenizer silently failed on branch codes until this run.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

import { tokenize, isPlain, STATION_CODE_PATTERN } from '../lib/text-tokens.ts'
import { getStation } from '../lib/stations.ts'
import { getAllPages, getFolderContent, getPage, getSections, getTypes } from '../lib/content.ts'
import { getLine } from '../lib/lines.ts'

const CONTENT = path.join(process.cwd(), 'content')

/* ---- tokenizer ---------------------------------------------------- */

const codesIn = (text: string) =>
  tokenize(text).filter((t) => t.kind === 'code').map((t) => t.value)

test('plain station codes tokenize', () => {
  assert.deepEqual(codesIn('from BR01 to BR24'), ['BR01', 'BR24'])
  assert.deepEqual(codesIn('BL23 and O50 and Y20'), ['BL23', 'O50', 'Y20'])
})

test('branch codes tokenize', () => {
  // The regression: `\b` after the digits fails when a letter follows, so these
  // produced no badge and no warning at all.
  assert.deepEqual(codesIn('change at R22A'), ['R22A'])
  assert.deepEqual(codesIn('the G03A shuttle'), ['G03A'])
  assert.deepEqual(codesIn('A14a is on the airport line'), ['A14a'])
})

test('every branch code in the registry round-trips through the tokenizer', () => {
  const branchCodes = ['R22A', 'G03A', 'A14a']
  for (const code of branchCodes) {
    assert.ok(getStation(code), `${code} is not in the registry`)
    assert.deepEqual(codesIn(`go to ${code} now`), [code], `${code} did not tokenize`)
  }
})

test('a trailing letter that is not part of a code stays in the prose', () => {
  // "BR01s" is a plural, not a station. Swallowing the 's' would drop a
  // character from the sentence.
  const tokens = tokenize('two BR01s here')
  assert.deepEqual(tokens.filter((t) => t.kind === 'code').map((t) => t.value), ['BR01'])
  const text = tokens.filter((t) => t.kind === 'text').map((t) => t.value).join('')
  assert.ok(text.includes('s'), 'the trailing letter was lost')
})

test('an unknown code still tokenizes, so it can be warned about', () => {
  // If unknown codes were silently dropped to text, the proofreading would stop
  // working — which is the whole feature.
  assert.deepEqual(codesIn('BR99 does not exist'), ['BR99'])
  assert.equal(getStation('BR99'), undefined)
})

test('tokenizing never loses or reorders characters', () => {
  const samples = [
    'from BR01 to BR24 via R22A',
    '木柵機廠 is at BR01',
    'no codes at all here',
    'BR01s and A14a and BR99',
    'mixed 內湖機廠 BR19 text',
  ]
  for (const sample of samples) {
    const rebuilt = tokenize(sample).map((t) => t.value).join('')
    assert.equal(rebuilt, sample, `round-trip failed for ${JSON.stringify(sample)}`)
  }
})

test('Chinese is split out as han tokens', () => {
  const tokens = tokenize('the depot 木柵機廠 near BR01')
  assert.deepEqual(
    tokens.filter((t) => t.kind === 'han').map((t) => t.value),
    ['木柵機廠'],
  )
})

test('isPlain is true only when nothing needs special rendering', () => {
  assert.ok(isPlain(tokenize('ordinary English prose')))
  assert.ok(!isPlain(tokenize('a code BR01')))
  assert.ok(!isPlain(tokenize('some 中文')))
})

test('the station code pattern is anchored to whole words', () => {
  STATION_CODE_PATTERN.lastIndex = 0
  assert.equal(codesIn('XBR01').length, 0, 'matched inside a longer word')
  assert.equal(codesIn('BR012345').length, 0, 'matched a longer number')
})

/* ---- rendered HTML ------------------------------------------------ */

test('badges render as spans carrying the line colours', async () => {
  const page = await getPage('rail', 'lines', 'wenhu-line', 'metro')
  assert.match(page.html, /class="badge"/, 'no badge rendered on the Wenhu Line page')

  const line = getLine('BR')!
  assert.ok(
    page.html.includes(`--badge-bg:${line.badgeBg}`),
    'badge does not carry the derived background',
  )
  assert.ok(
    page.html.includes(`--badge-fg:${line.badgeFg}`),
    'badge does not carry the derived foreground',
  )
})

test('colliding G station codes render in the page or folder operator namespace', async () => {
  const trtc = await getPage('rail', 'history', 'public-art')
  assert.match(trtc.html, /title="G17 Taipei Arena"/, 'TRTC G17 did not render in cross-cutting prose')

  const tmrt = await getFolderContent(['rail'], 'tmrt')
  assert.match(tmrt.html, /title="G10 Shui-an Temple"/, 'TMRT G10 resolved to the TRTC station')
  assert.doesNotMatch(tmrt.html, /title="G10 Chiang Kai-Shek Memorial Hall"/)
})

test('every badge in rendered content resolves to a real station', async () => {
  const bad: string[] = []
  for (const meta of getAllPages()) {
    const page = await getPage(meta.section, meta.type, meta.slug, meta.system)
    for (const match of page.html.matchAll(/class="badge"[^>]*>([^<]+)</g)) {
      if (!getStation(match[1])) bad.push(`${meta.href} → ${match[1]}`)
    }
  }
  assert.deepEqual(bad, [])
})

test('Chinese in rendered content is tagged zh-Hant', async () => {
  const page = await getPage('rail', 'depots', 'muzha-depot', 'metro')
  assert.match(page.html, /<span lang="zh-Hant">木柵機廠<\/span>/)
})

test('tables are wrapped in a keyboard-reachable scroll container', async () => {
  const page = await getPage('rail', 'lines', 'wenhu-line', 'metro')
  assert.match(page.html, /<div class="table-scroll" tabindex="0">\s*<table>/)
})

test('headings carry ids, so the spine can sync and links can anchor', async () => {
  const page = await getPage('rail', 'lines', 'wenhu-line', 'metro')
  assert.match(page.html, /<h2 id="history">/)
  assert.ok(Object.keys(page.sectionStations).length > 0, 'no section-to-station map built')
  assert.deepEqual(page.toc[0], { id: 'history', label: 'History', level: 2 })
})

/* ---- frontmatter -------------------------------------------------- */

test('every page has a title', () => {
  for (const page of getAllPages()) {
    assert.ok(page.title.trim(), `${page.href} has no title`)
  }
})

test('every `line:` in frontmatter is a real line code', () => {
  for (const page of getAllPages()) {
    if (!page.line) continue
    assert.ok(getLine(page.line, page.operator), `${page.href} sets line: ${page.line}, which is not a line`)
  }
})

test('every `spine:` value resolves to at least one station', () => {
  for (const page of getAllPages()) {
    if (!page.spine.trim()) continue
    const parts = page.spine.split(',').map((p) => p.trim()).filter(Boolean)
    for (const part of parts) {
      const endpoints = part.split(/[-–—]/).map((p) => p.trim()).filter(Boolean)
      for (const endpoint of endpoints) {
        assert.ok(
          getStation(endpoint),
          `${page.href} has spine: ${page.spine}, but ${endpoint} is not a station`,
        )
      }
    }
  }
})

test('`updated:` is an ISO date where present', () => {
  for (const page of getAllPages()) {
    if (!page.updated) continue
    assert.match(page.updated, /^\d{4}-\d{2}-\d{2}$/, `${page.href} updated: ${page.updated}`)
  }
})

test('specs split unit out of value, so the column can align', () => {
  for (const page of getAllPages()) {
    for (const spec of page.specs) {
      assert.ok(spec.label.trim(), `${page.href} has a spec with no label`)
      // A value like "25.17 km" means the unit was not split out, which breaks
      // the decimal alignment the spec table exists to provide.
      if (/^[\d.]+\s+[a-zA-Z]/.test(spec.value)) {
        assert.fail(`${page.href} spec "${spec.label}" has unit inside value: ${spec.value}`)
      }
    }
  }
})

test('every folder has an _index.md', () => {
  for (const section of getSections()) {
    const index = path.join(CONTENT, section.slug, '_index.md')
    assert.ok(fs.existsSync(index), `${section.slug} has no _index.md`)
    for (const type of getTypes(section.slug)) {
      const typeIndex = path.join(CONTENT, section.slug, type.slug, '_index.md')
      assert.ok(fs.existsSync(typeIndex), `${section.slug}/${type.slug} has no _index.md`)
    }
  }
})

test('frontmatter parses on every content file', () => {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name)
      return entry.isDirectory() ? walk(full) : entry.name.endsWith('.md') ? [full] : []
    })

  for (const file of walk(CONTENT)) {
    assert.doesNotThrow(
      () => matter(fs.readFileSync(file, 'utf8')),
      `frontmatter does not parse in ${file}`,
    )
  }
})

function articleBodyWords(markdown: string) {
  const body = markdown
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/\[\^[^\]]+\]/g, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
  return body.trim() ? body.trim().split(/\s+/u).length : 0
}

test('every bus route article has at least 300 body words', () => {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name)
      return entry.isDirectory() ? walk(full) : entry.name.endsWith('.md') && entry.name !== '_index.md' ? [full] : []
    })
  const root = path.join(CONTENT, 'bus', 'routes')
  const short = walk(root)
    .map((file) => ({ file, words: articleBodyWords(fs.readFileSync(file, 'utf8')) }))
    .filter(({ words }) => words < 300)
    .map(({ file, words }) => `${path.relative(process.cwd(), file)} (${words})`)
  assert.deepEqual(short, [], `short bus route articles: ${short.join(', ')}`)
})

/* ---- formation notation ------------------------------------------- */

/**
 * Mirrors the parser in components/FormationDiagram.tsx. Kept as a local copy
 * because the component is JSX and this suite runs outside the bundler; the
 * test is of the notation contract, which is what the frontmatter promises.
 */
function parseFormation(formation: string) {
  return formation
    .split('+')
    .map((unit) => unit.trim())
    .filter(Boolean)
    .map((unit) => unit.split('=').map((car) => car.trim()).filter(Boolean))
    .filter((unit) => unit.length > 0)
}

test('formation notation parses into units and cars', () => {
  assert.deepEqual(parseFormation('Mc1=M2 + M2=Mc1'), [
    ['Mc1', 'M2'],
    ['M2', 'Mc1'],
  ])
  assert.deepEqual(parseFormation('Mc1=M2'), [['Mc1', 'M2']])
  assert.deepEqual(parseFormation(''), [])
  assert.deepEqual(parseFormation('  '), [])
})

test('every `formation:` in content parses to at least one car', () => {
  for (const page of getAllPages()) {
    if (!page.formation.trim()) continue
    const units = parseFormation(page.formation)
    assert.ok(units.length > 0, `${page.href} formation "${page.formation}" parses to nothing`)
    const cars = units.reduce((n, u) => n + u.length, 0)
    assert.ok(cars > 0, `${page.href} formation "${page.formation}" has no cars`)
    assert.ok(cars <= 12, `${page.href} formation has ${cars} cars, which is implausible`)
  }
})

test('formation car counts match the stated fleet, where both are given', () => {
  // The formation diagram prints "N cars" from the notation. If a page also
  // states a car count in its specs, the two must agree or the page contradicts
  // itself in two adjacent blocks.
  for (const page of getAllPages()) {
    if (!page.formation.trim()) continue
    const cars = parseFormation(page.formation).reduce((n, u) => n + u.length, 0)
    const spec = page.specs.find((s) => /cars per (train|set)|formation/i.test(s.label))
    if (!spec || !/^\d+$/.test(spec.value.trim())) continue
    assert.equal(
      cars,
      Number(spec.value),
      `${page.href}: formation draws ${cars} cars but specs say ${spec.value}`,
    )
  }
})
