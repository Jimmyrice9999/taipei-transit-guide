/**
 * Fast ad-hoc screenshots of the built site.
 *
 *   node scripts/shots.mjs <tag> <url> [url...] --widths 1440,1920,2560
 *
 * `npm run verify:browser` shoots every page type at every width and takes
 * minutes. This shoots what you name, at the widths you name, in seconds — so
 * that "fix, look, fix again" is a loop you actually run rather than one you
 * skip and then guess about.
 *
 * Output: docs/screenshots/<tag>-<slug>-<width>.png
 *
 * The server is deliberately the same shape as browser-verify.mjs's: a request
 * for an extensionless path 404s unless it is a directory with an index.html,
 * and MIME comes from the extension. Anything smarter hides the class of bug
 * postbuild.mjs exists to fix.
 */

import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'out')
const SHOTS = path.join(ROOT, 'docs', 'screenshots')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

function serve() {
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0].replace(/\/{2,}/g, '/'))
    let file = path.join(OUT, urlPath)
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      file = path.join(file, 'index.html')
    }
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
      const custom = path.join(OUT, '404.html')
      res.end(fs.existsSync(custom) ? fs.readFileSync(custom) : 'not found')
      return
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream' })
    res.end(fs.readFileSync(file))
  })
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }))
  })
}

/*
 * One pass, so a flag can never be left behind in the positional list — the
 * first version spliced out --widths and not --clip, and the leftover flag was
 * navigated to as a URL.
 *
 * --clip N shoots only the first N px of the page rather than the full length.
 * A full-page shot of a line page at 2560 is 12,000 px tall and unreadable at
 * any zoom that fits a screen; the bugs reported live at the top.
 */
const argv = process.argv.slice(2)
let widths = [1440, 1920, 2560]
let clip = null
let el = null
let pad = 120
let click = null
const rest = []
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--widths') widths = argv[++i].split(',').map((n) => Number(n.trim()))
  else if (argv[i] === '--clip') clip = Number(argv[++i])
  // --el <selector> frames one element plus --pad px of its surroundings, which
  // is the only way to look at something halfway down a 12,000px page without
  // downsampling it into mush.
  else if (argv[i] === '--el') el = argv[++i]
  else if (argv[i] === '--pad') pad = Number(argv[++i])
  // --click <selector> presses something before shooting, so interactive
  // states — an open dropdown, an expanded panel — can be looked at rather
  // than reasoned about.
  else if (argv[i] === '--click') click = argv[++i]
  else rest.push(argv[i])
}
const tag = rest[0]
const urls = rest.slice(1)

if (!tag || urls.length === 0) {
  console.error('usage: node scripts/shots.mjs <tag> <url> [url...] [--widths a,b] [--clip px]')
  process.exit(2)
}

const { server, port } = await serve()
const base = `http://127.0.0.1:${port}`
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

fs.mkdirSync(SHOTS, { recursive: true })

for (const url of urls) {
  const slug = url.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home'
  for (const width of widths) {
    await page.setViewportSize({ width, height: clip ?? 900 })
    await page.goto(base + url, { waitUntil: 'load' })
    await page.evaluate(() => document.fonts.ready)
    if (click) await page.click(click)
    const out = path.join(SHOTS, `${tag}-${slug}-${width}.png`)
    if (el) {
      const rect = await page.evaluate(
        ([sel, p]) => {
          const node = document.querySelector(sel)
          if (!node) return null
          const r = node.getBoundingClientRect()
          return {
            x: Math.max(0, r.x + window.scrollX - p),
            y: Math.max(0, r.y + window.scrollY - p),
            width: r.width + p * 2,
            height: r.height + p * 2,
          }
        },
        [el, pad],
      )
      if (!rect) {
        console.log(`  (no ${el} on ${url})`)
        continue
      }
      // fullPage, or the clip is measured against the viewport and anything
      // below the fold is "outside the resulting image".
      await page.screenshot({ path: out, clip: rect, fullPage: true })
    } else {
      await page.screenshot({ path: out, fullPage: !clip })
    }
    console.log(out.replace(ROOT + path.sep, ''))
  }
}

await browser.close()
server.close()
