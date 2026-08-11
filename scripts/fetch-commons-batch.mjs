/**
 * Runs `scripts/fetch-commons.mjs` over a queue file, paced.
 *
 *   node scripts/fetch-commons-batch.mjs docs/image-queue.txt [--delay 2500]
 *
 * Queue format, one per line, `#` comments and blank lines ignored:
 *
 *   File:Some Photo.jpg | stations/br01
 *
 * Why this exists rather than a shell loop: Commons rate-limits hard, and the
 * failure mode is not an error but a throttled response that looks like a
 * missing file. The delay is deliberate and should not be tuned down. A run of
 * forty images takes a couple of minutes and that is fine.
 *
 * Each line is a separate process on purpose. `fetch-commons.mjs` exits
 * non-zero on a licence refusal, and one refused photo must not abandon the
 * queue — it is recorded and the run continues. The summary at the end is the
 * thing to read: it names every refusal and every failure, so an image that
 * did not ship cannot be mistaken for one that did.
 */

import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const argv = process.argv.slice(2)
let delay = 2500
const files = []
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--delay') delay = Number(argv[++i])
  else files.push(argv[i])
}
if (files.length !== 1) {
  console.error('usage: node scripts/fetch-commons-batch.mjs <queue.txt> [--delay ms]')
  process.exit(2)
}

const queue = fs
  .readFileSync(path.resolve(ROOT, files[0]), 'utf8')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => {
    const [title, dest] = line.split('|').map((s) => s.trim())
    return { title, dest }
  })

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const ok = []
const refused = []
const failed = []

for (const [i, item] of queue.entries()) {
  if (!item.title || !item.dest) {
    failed.push({ ...item, why: 'malformed queue line' })
    continue
  }
  // Already fetched? Skip. Re-running the queue after adding a few lines is
  // the normal way to use this, and refetching forty images to add two is
  // exactly the sort of thing that gets a client rate-limited.
  const sidecar = path.join(ROOT, 'public', 'images', `${item.dest}.json`)
  if (fs.existsSync(sidecar)) {
    console.log(`— ${item.dest} already present, skipping`)
    continue
  }

  console.log(`\n[${i + 1}/${queue.length}] ${item.dest}  ←  ${item.title}`)
  const run = spawnSync(
    process.execPath,
    [path.join(ROOT, 'scripts', 'fetch-commons.mjs'), item.title, item.dest],
    { cwd: ROOT, encoding: 'utf8' },
  )
  const out = (run.stdout ?? '') + (run.stderr ?? '')
  process.stdout.write(
    out
      .split('\n')
      .filter(Boolean)
      .map((l) => `    ${l}`)
      .join('\n') + '\n',
  )
  if (run.status === 0) ok.push(item)
  else if (/REFUSED/.test(out)) refused.push({ ...item, why: out.match(/REFUSED:[^\n]*/)[0] })
  else failed.push({ ...item, why: out.split('\n').find(Boolean) ?? `exit ${run.status}` })

  if (i < queue.length - 1) await sleep(delay)
}

console.log(`\n${'─'.repeat(60)}`)
console.log(`fetched  ${ok.length}`)
console.log(`refused  ${refused.length}`)
console.log(`failed   ${failed.length}`)
for (const r of refused) console.log(`  REFUSED ${r.dest}: ${r.why}`)
for (const f of failed) console.log(`  FAILED  ${f.dest}: ${f.why}`)

// Non-zero only on a hard failure. A licence refusal is the gate working.
process.exit(failed.length ? 1 : 0)
