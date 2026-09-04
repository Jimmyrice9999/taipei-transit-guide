/*
 * Screenshots of any route in out/, at any widths.
 *
 *   node scripts/shot.mjs <tag> <name=route> [<name=route> ...] [--widths=1440,375]
 *
 * Generalises scripts/article-shot.mjs, which hardcoded one route and existed
 * because run 4.1 shipped a layout nobody had looked at. The lesson generalises
 * too: every visual claim in this project needs a file on disk behind it, so
 * taking one should cost a command rather than an edit.
 *
 * Waits on document.fonts.ready, not `load` — run 5.1 established that measuring
 * before the webfonts settle reads fallback metrics, which differ between this
 * machine and CI. A screenshot taken then is a picture of a page that never
 * ships to anyone.
 */
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { chromium } from 'playwright'

const OUT = path.join(process.cwd(), 'out')
const enPath = (logical) => logical === '/' ? '/en/' : /^\/((?:en|zh-Hant))(?:\/|$)/.test(logical) ? logical : `/en${logical}`
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0].replace(/\/{2,}/g, '/'))
  let f = path.join(OUT, p)
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html')
  if (!fs.existsSync(f)) {
    res.writeHead(404)
    res.end('')
    return
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] ?? 'application/octet-stream' })
  res.end(fs.readFileSync(f))
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`

const args = process.argv.slice(2)
const widthArg = args.find((a) => a.startsWith('--widths='))
const widths = widthArg
  ? widthArg.slice('--widths='.length).split(',').map(Number)
  : [1440, 768, 375]
/** --clip=<y>,<height> grabs one band at 1:1 instead of the whole page. */
const clipArg = args.find((a) => a.startsWith('--clip='))
const clip = clipArg ? clipArg.slice('--clip='.length).split(',').map(Number) : null
const rest = args.filter((a) => !a.startsWith('--'))
const tag = rest[0] ?? 'now'
const routes = rest.slice(1).map((pair) => {
  const at = pair.indexOf('=')
  return [pair.slice(0, at), pair.slice(at + 1)]
})

fs.mkdirSync('docs/screenshots', { recursive: true })

const browser = await chromium.launch()
for (const [name, url] of routes) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } })
    const response = await page.goto(base + enPath(url), { waitUntil: 'load' })
    if (!response || !response.ok()) {
      console.error(`  ${url} → HTTP ${response?.status() ?? 'no response'}`)
      await page.close()
      continue
    }
    await page.evaluate(() => document.fonts.ready)
    const file = `docs/screenshots/${name}-${width}-${tag}.png`
    await page.screenshot(
      clip
        ? { path: file, fullPage: true, clip: { x: 0, y: clip[0], width, height: clip[1] } }
        : { path: file, fullPage: true },
    )
    console.log(`  ${file}`)
    await page.close()
  }
}
await browser.close()
server.close()
