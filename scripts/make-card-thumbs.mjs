/**
 * Adds a small "card" WebP variant (240px) to existing images, for the
 * photographed-card grids at /rail/rolling-stock/, /rail/depots/ and
 * /rail/stations/.
 *
 * Run:  node scripts/make-card-thumbs.mjs <id> [<id> ...]
 *   e.g. node scripts/make-card-thumbs.mjs c301/hero stations/br01
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Why a fourth width instead of reusing the existing 400: a card in these
 * grids never displays wider than ~280px, but tests/images.test.mts charges
 * a page for the *largest variant its markup references*, and a grid can
 * carry two dozen images (the stations index already does). 24 images at
 * 400w summed to 437 KB on their own, over the 400 KB page budget before a
 * single other byte of the page counted. There is no smaller existing
 * bucket to fall back to.
 *
 * This resizes DOWN from the already-committed 400w WebP, not from the
 * cached Commons original — most originals are not still in .image-cache
 * (it is not meant to be a permanent archive), and re-fetching two dozen
 * files from Commons to shrink a thumbnail would be a much bigger, slower,
 * rate-limited operation for no licensing reason: it is the same image,
 * same photographer, same licence, already verified and attributed. Re-
 * encoding a WebP that is already lossy loses a little more at this size,
 * which is invisible at 240px in a grid card.
 *
 * Idempotent: skips an id that already has a 240 entry in its sidecar.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const IMAGES = path.join(ROOT, 'public', 'images')
const WIDTH = 240
const MAX_BYTES = 180 * 1024

const ids = process.argv.slice(2)
if (ids.length === 0) {
  console.error('Usage: node scripts/make-card-thumbs.mjs <id> [<id> ...]')
  process.exit(2)
}

for (const id of ids) {
  const dir = path.join(IMAGES, path.dirname(id))
  const base = path.basename(id)
  const sidecarPath = path.join(dir, `${base}.json`)
  if (!fs.existsSync(sidecarPath)) {
    console.error(`  ${id}: no sidecar at ${path.relative(ROOT, sidecarPath)} — skipped`)
    continue
  }
  const sidecar = JSON.parse(fs.readFileSync(sidecarPath, 'utf8'))
  if ((sidecar.widths ?? []).includes(WIDTH)) {
    console.log(`  ${id}: already has a ${WIDTH}w variant`)
    continue
  }

  const smallest = Math.min(...sidecar.widths)
  const source = path.join(dir, `${base}-${smallest}.webp`)
  if (!fs.existsSync(source)) {
    console.error(`  ${id}: source ${path.relative(ROOT, source)} missing — skipped`)
    continue
  }

  let buffer
  for (let quality = 72; quality >= 40; quality -= 8) {
    buffer = await sharp(source).resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality }).toBuffer()
    if (buffer.length <= MAX_BYTES) break
  }

  const out = path.join(dir, `${base}-${WIDTH}.webp`)
  fs.writeFileSync(out, buffer)
  sidecar.widths = [...sidecar.widths, WIDTH].sort((a, b) => b - a)
  fs.writeFileSync(sidecarPath, JSON.stringify(sidecar, null, 2) + '\n')
  console.log(`  ${path.relative(ROOT, out)}  ${(buffer.length / 1024).toFixed(1)} KB`)
}
