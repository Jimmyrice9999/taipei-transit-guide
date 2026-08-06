/**
 * Photography, as licence compliance and as weight.
 *
 * CC BY and CC BY-SA make attribution and licence indication licence *terms* —
 * for this site they are build requirements, enforced here:
 *
 *   - every image variant has a sidecar with photographer, licence, source
 *   - every licence is in the allowed set (CC0 / PD / CC BY / CC BY-SA);
 *     an NC or ND file cannot ship no matter how it got into the tree
 *   - every page that shows a pipeline image renders the visible credit line
 *   - every <img> carries explicit dimensions (no layout shift)
 *   - no image file over 180 KB; no page referencing over 400 KB of imagery
 *
 * The fetch script enforces the same licence gate at download time. Two
 * gates on purpose: this one catches a hand-edited sidecar.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const IMAGES = path.join(ROOT, 'public', 'images')
const OUT = path.join(ROOT, 'out')

const MAX_FILE = 180 * 1024
const MAX_PAGE = 400 * 1024
const ALLOWED = /^(cc0|public domain|pd|cc[ -]by(?:[ -]sa)?[ -]?\d(?:\.\d)?)/i

function walk(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [full]
  })
}

const sidecars = walk(IMAGES).filter((f) => f.endsWith('.json'))
const webps = walk(IMAGES).filter((f) => f.endsWith('.webp'))

test('every image has a complete, allowed attribution sidecar', () => {
  for (const file of sidecars) {
    const rel = path.relative(ROOT, file)
    const data = JSON.parse(fs.readFileSync(file, 'utf8'))
    assert.ok(data.artist, `${rel}: no photographer`)
    assert.ok(data.license, `${rel}: no licence`)
    assert.ok(ALLOWED.test(data.license), `${rel}: licence "${data.license}" is not in the allowed set`)
    assert.ok(data.source, `${rel}: no source page URL`)
    if (!/cc0|public domain|pd/i.test(data.license)) {
      assert.ok(data.licenseUrl, `${rel}: a CC licence needs its deed URL`)
    }
    assert.ok(data.width > 0 && data.height > 0, `${rel}: no intrinsic dimensions`)
  }
})

test('every image variant belongs to a sidecar, and none is oversized', () => {
  for (const file of webps) {
    const rel = path.relative(ROOT, file)
    const sidecar = file.replace(/-\d+\.webp$/, '.json')
    assert.ok(fs.existsSync(sidecar), `${rel}: no attribution sidecar beside it`)
    const size = fs.statSync(file).size
    assert.ok(size <= MAX_FILE, `${rel}: ${(size / 1024).toFixed(0)} KB exceeds the ${MAX_FILE / 1024} KB budget`)
  }
})

/* ---- rendered output ---------------------------------------------- */

const html = () =>
  walk(OUT)
    .filter((f) => f.endsWith('.html'))
    .filter((f) => !path.relative(OUT, f).startsWith('train' + path.sep))

test('every rendered img has explicit dimensions', () => {
  if (!fs.existsSync(OUT)) return
  for (const file of html()) {
    const page = fs.readFileSync(file, 'utf8')
    for (const img of page.matchAll(/<img\b[^>]*>/g)) {
      const tag = img[0]
      assert.ok(
        /\bwidth=/.test(tag) && /\bheight=/.test(tag),
        `${path.relative(OUT, file)}: img without width/height: ${tag.slice(0, 120)}`,
      )
    }
  }
})

test('every page showing a pipeline image renders its credit, within budget', () => {
  if (!fs.existsSync(OUT)) return
  for (const file of html()) {
    const page = fs.readFileSync(file, 'utf8')
    const refs = [...page.matchAll(/\/images\/([\w/-]+)-(\d+)\.webp/g)]
    if (refs.length === 0) continue

    const rel = path.relative(OUT, file)
    assert.ok(/figure-credit/.test(page), `${rel} shows an image but renders no credit line`)

    // Weight: charge each distinct image its largest referenced variant —
    // what a desktop visitor actually downloads.
    const largest = new Map<string, number>()
    for (const [, id, w] of refs) {
      largest.set(id, Math.max(largest.get(id) ?? 0, Number(w)))
    }
    let bytes = 0
    for (const [id, w] of largest) {
      const f = path.join(IMAGES, ...id.split('/')) + `-${w}.webp`
      if (fs.existsSync(f)) bytes += fs.statSync(f).size
      const sidecar = path.join(IMAGES, ...id.split('/')) + '.json'
      assert.ok(fs.existsSync(sidecar), `${rel} references image "${id}" with no sidecar`)
      const meta = JSON.parse(fs.readFileSync(sidecar, 'utf8'))
      assert.ok(
        page.includes(meta.artist),
        `${rel}: the photographer "${meta.artist}" is not credited on the page`,
      )
    }
    assert.ok(
      bytes <= MAX_PAGE,
      `${rel}: ${(bytes / 1024).toFixed(0)} KB of imagery exceeds the ${MAX_PAGE / 1024} KB page budget`,
    )
  }
})
