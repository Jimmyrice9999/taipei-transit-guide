/**
 * Fetches one image from Wikimedia Commons, verifies its licence, and
 * commits it to the site as responsive WebP with a machine-readable
 * attribution sidecar.
 *
 * Run:  npm run image -- "File:Something.jpg" wenhu-line/hero
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * The rules, all load-bearing:
 *
 *   licence gate    Only CC0, public domain, CC BY and CC BY-SA pass. NC and
 *                   ND variants are refused here, at the door — and the image
 *                   test refuses again at build, so hand-editing a sidecar
 *                   cannot launder an unlicensed image in.
 *   never hotlink   The original is downloaded once into a git-ignored cache;
 *                   what ships is committed WebP. The site must render with
 *                   Commons unreachable.
 *   attribution     Photographer, licence name, licence URL and the source
 *                   file page are captured from extmetadata and stored beside
 *                   the image. CC BY-SA makes attribution a licence term, not
 *                   a courtesy; the sidecar is what the build enforces from.
 *   sizes           1600 / 800 / 400 px WebP. The 1600 must land under the
 *                   budget the image test enforces; quality steps down until
 *                   it does rather than shipping an oversized file.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CACHE = path.join(ROOT, '.image-cache')
const IMAGES = path.join(ROOT, 'public', 'images')

const UA = 'TaipeiTransitGuide/1.0 (independent reference site; image pipeline)'
const API = 'https://commons.wikimedia.org/w/api.php'

const WIDTHS = [1600, 800, 400]
const MAX_BYTES = 180 * 1024

/** Licences the site may ship. Anything else is refused loudly. */
const ALLOWED = /^(cc0|public domain|pd|cc[ -]by(?:[ -]sa)?[ -]?\d(?:\.\d)?)/i

const [, , fileTitle, dest] = process.argv
if (!fileTitle || !dest) {
  console.error('Usage: npm run image -- "File:Name.jpg" <dest e.g. wenhu-line/hero>')
  process.exit(2)
}

const strip = (html) =>
  String(html ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const meta = await (async () => {
  const url =
    `${API}?action=query&titles=${encodeURIComponent(fileTitle)}` +
    `&prop=imageinfo&iiprop=url|size|extmetadata&format=json`
  const response = await fetch(url, { headers: { 'User-Agent': UA } })
  const json = await response.json()
  const page = Object.values(json.query?.pages ?? {})[0]
  const info = page?.imageinfo?.[0]
  if (!info) {
    console.error(`No imageinfo for ${fileTitle} — is the title exact?`)
    process.exit(1)
  }
  const em = info.extmetadata ?? {}
  return {
    url: info.url,
    descriptionUrl: info.descriptionurl,
    width: info.width,
    height: info.height,
    artist: strip(em.Artist?.value) || '(unnamed photographer)',
    license: strip(em.LicenseShortName?.value),
    licenseUrl: strip(em.LicenseUrl?.value),
    date: strip(em.DateTimeOriginal?.value),
  }
})()

if (!ALLOWED.test(meta.license)) {
  console.error(
    `REFUSED: ${fileTitle} is licensed "${meta.license}" — not in the allowed set\n` +
      `(CC0, public domain, CC BY, CC BY-SA). NC and ND variants cannot ship here.`,
  )
  process.exit(1)
}
if (!meta.licenseUrl && !/public domain|pd|cc0/i.test(meta.license)) {
  console.error(`REFUSED: ${fileTitle} has no licence URL and is not PD/CC0.`)
  process.exit(1)
}

fs.mkdirSync(CACHE, { recursive: true })
const cached = path.join(CACHE, fileTitle.replace(/^File:/, '').replace(/[^\w.-]+/g, '_'))
if (!fs.existsSync(cached)) {
  console.log(`fetching ${meta.url}`)
  const response = await fetch(meta.url, { headers: { 'User-Agent': UA } })
  if (!response.ok) {
    console.error(`Download failed: HTTP ${response.status}`)
    process.exit(1)
  }
  fs.writeFileSync(cached, Buffer.from(await response.arrayBuffer()))
}

const outDir = path.join(IMAGES, path.dirname(dest))
fs.mkdirSync(outDir, { recursive: true })
const base = path.basename(dest)

const written = {}
for (const width of WIDTHS) {
  if (meta.width < width && width !== WIDTHS[WIDTHS.length - 1]) continue
  const out = path.join(outDir, `${base}-${width}.webp`)
  let buffer
  // Step quality down, then pixels, until the file clears the budget — the
  // budget is enforced here, not hoped for. A dense aerial can defeat the
  // quality floor alone; a slightly smaller dense aerial cannot.
  encode: for (const w of [width, Math.round(width * 0.85), Math.round(width * 0.7)]) {
    for (let quality = 78; quality >= 40; quality -= 8) {
      buffer = await sharp(cached).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality }).toBuffer()
      if (buffer.length <= MAX_BYTES) break encode
    }
  }
  if (buffer.length > MAX_BYTES) {
    console.error(`Could not fit ${base}-${width} under ${MAX_BYTES / 1024} KB — choose a different photo.`)
    process.exit(1)
  }
  fs.writeFileSync(out, buffer)
  const info = await sharp(buffer).metadata()
  written[width] = { bytes: buffer.length, width: info.width, height: info.height }
  console.log(`  ${path.relative(ROOT, out)}  ${(buffer.length / 1024).toFixed(0)} KB  ${info.width}×${info.height}`)
}

const largest = written[WIDTHS.find((w) => written[w])] ?? Object.values(written)[0]
const sidecar = {
  file: fileTitle,
  source: meta.descriptionUrl,
  artist: meta.artist,
  license: meta.license,
  licenseUrl: meta.licenseUrl || null,
  taken: meta.date || null,
  widths: Object.keys(written).map(Number),
  width: largest.width,
  height: largest.height,
  fetched: new Date().toISOString().slice(0, 10),
}
fs.writeFileSync(path.join(outDir, `${base}.json`), JSON.stringify(sidecar, null, 2) + '\n')
console.log(`  ${path.relative(ROOT, path.join(outDir, `${base}.json`))}  © ${meta.artist} · ${meta.license}`)
