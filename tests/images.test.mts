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

/**
 * The page as a reader sees it: markup gone, script and style payloads gone.
 *
 * ── Why the credit check needs this ──────────────────────────────────────────
 *
 * It used to search the raw HTML for the photographer's name, which worked
 * until a photographer's name was 蒼空 翔. The build tags Han runs for the
 * Traditional-variant face, and the space is not Han, so the credit ships as
 * `<span lang="zh-Hant">蒼空</span> <span lang="zh-Hant">翔</span>` — correctly
 * credited, correctly tagged, and not findable as one string anywhere in the
 * file. The name that fell out of this check would have been a licence-term
 * failure if it were real, so the check has to look at what the page says
 * rather than at how it is spelled in the markup.
 *
 * Stripping is also stricter than the substring match it replaces: a name
 * appearing only in a `title` attribute or inside the RSC payload used to
 * satisfy this test, and no longer can.
 */
function visibleText(html: string): string {
  return html
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, '')
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
        visibleText(page).includes(meta.artist),
        `${rel}: the photographer "${meta.artist}" is not credited on the page`,
      )
    }
    assert.ok(
      bytes <= MAX_PAGE,
      `${rel}: ${(bytes / 1024).toFixed(0)} KB of imagery exceeds the ${MAX_PAGE / 1024} KB page budget`,
    )
  }
})

/*
 * ── The hole this closes ─────────────────────────────────────────────────────
 *
 * `getImage()` returns null for an id with no sidecar, and that is deliberate:
 * a page whose photograph has not been sourced renders its "photograph wanted"
 * placeholder instead of breaking. But a *hard-coded* id is a different claim.
 * `app/page.tsx` asks for `matra-dispute/hero` by name; when run 22 removed
 * that sidecar as a quality cull, the front page's featured card silently lost
 * its picture and its credit, and nothing in the build noticed — the six pages
 * whose reference lived in frontmatter had theirs removed in the same commit,
 * and the one written in TSX did not.
 *
 * Nothing above catches it. The output has no dangling URL to find, because
 * the markup for the image is simply never emitted. So the check has to run
 * against the source: every literal id passed to getImage() must resolve.
 *
 * Template-literal calls (`stations/${code}`) are deliberately not checked —
 * those are per-item and null is the working state there, which is exactly
 * what the placeholder exists for.
 */
test('every hard-coded getImage() id has a sidecar', () => {
  const sources = [
    ...walk(path.join(ROOT, 'app')),
    ...walk(path.join(ROOT, 'components')),
    ...walk(path.join(ROOT, 'lib')),
  ].filter((f) => /\.tsx?$/.test(f))

  const dangling: string[] = []
  for (const file of sources) {
    const code = fs.readFileSync(file, 'utf8')
    for (const [, id] of code.matchAll(/\bgetImage\(\s*['"]([^'"$]+)['"]\s*\)/g)) {
      const sidecar = path.join(IMAGES, ...id.split('/')) + '.json'
      if (!fs.existsSync(sidecar)) dangling.push(`${path.relative(ROOT, file)} → ${id}`)
    }
  }

  assert.deepEqual(
    dangling,
    [],
    `getImage() asks for an image that does not exist:\n  ${dangling.join('\n  ')}`,
  )
})

/*
 * The mirror of the above, for content frontmatter: `hero: image:` names an
 * image by id, and a typo or a removed sidecar turns a hero into nothing at
 * all. `npm run unused` catches the other direction (a sidecar nothing uses).
 */
test('every hero image named in content frontmatter has a sidecar', () => {
  const content = walk(path.join(ROOT, 'content')).filter((f) => f.endsWith('.md'))
  const dangling: string[] = []
  for (const file of content) {
    const text = fs.readFileSync(file, 'utf8')
    const front = text.split(/^---$/m)[1]
    if (!front) continue
    for (const [, id] of front.matchAll(/^\s+image:\s*([\w/-]+)\s*$/gm)) {
      const sidecar = path.join(IMAGES, ...id.split('/')) + '.json'
      if (!fs.existsSync(sidecar)) dangling.push(`${path.relative(ROOT, file)} → ${id}`)
    }
  }
  assert.deepEqual(dangling, [], `frontmatter names a missing image:\n  ${dangling.join('\n  ')}`)
})
