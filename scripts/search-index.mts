/**
 * Writes public/data/search-index.json.
 *
 * Run: npm run search   (also part of `npm run data`)
 *
 * The site is a static export, so there is nothing to query at runtime: the
 * index is built from the same registries the pages are, shipped as one JSON
 * file, and filtered in the browser. See lib/search.ts for what is indexed and
 * why, and lib/search-entries.ts for where each key comes from.
 *
 * `tests/search.test.mts` rebuilds the index and compares it against the
 * committed file, so a content change that is not followed by `npm run search`
 * fails the build rather than shipping a search box that cannot find the new
 * page. Same contract as the font subsets.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildSearchIndex } from '../lib/search-entries.ts'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'public', 'data', 'search-index.json')
const CHECK = process.argv.includes('--check')

const index = buildSearchIndex()
const output = JSON.stringify(index) + '\n'

if (CHECK) {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : ''
  if (current !== output) {
    console.error('search: generated index is stale; run `npm run search` and commit public/data/search-index.json.')
    process.exitCode = 1
  } else {
    console.log('search: generated index is current.')
  }
} else {
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, output)

  const bytes = fs.statSync(OUT).size
  const withZh = index.entries.filter((entry) => entry.z).length
  console.log(
    `search: wrote public/data/search-index.json — ${index.entries.length} entries ` +
      `(${withZh} with a Chinese name), ${(bytes / 1024).toFixed(0)} KB.`,
  )
}
