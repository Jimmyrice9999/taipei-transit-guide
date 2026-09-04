/* One-off probe: contrast culprits, SVG semantics, nested anchors, focus ring. */
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { chromium } from 'playwright'

const OUT = path.join(process.cwd(), 'out')
const enPath = (logical) => logical === '/' ? '/en/' : `/en${logical}`
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml' }
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0].replace(/\/{2,}/g, '/'))
  let f = path.join(OUT, p)
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html')
  if (!fs.existsSync(f)) { res.writeHead(404); res.end('nope'); return }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] ?? 'application/octet-stream' })
  res.end(fs.readFileSync(f))
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

/* A. exact computed colours of every flagged muted-text style */
await page.goto(base + enPath('/rail/metro/stations/br13/'), { waitUntil: 'load' })
const colours = await page.evaluate(() => {
  const probe = (sel) => {
    const el = document.querySelector(sel)
    if (!el) return null
    const s = getComputedStyle(el)
    return { sel, color: s.color, fontSize: s.fontSize, fontWeight: s.fontWeight }
  }
  return [
    probe('.platform-fact dt'),
    probe('.spine-key-item'),
    probe('figcaption'),
    probe('.page-updated'),
    probe('.figure-credit'),
    probe('.absent'),
  ].filter(Boolean)
})
console.log('=== A. computed colours of flagged styles ===')
for (const c of colours) console.log(' ', c.sel.padEnd(22), c.color.padEnd(22), c.fontSize, 'w' + c.fontWeight)

/* B. what the accessibility tree exposes inside the map SVG */
const svgInfo = await page.evaluate(() => {
  const svg = document.querySelector('.routemap-svg')
  const links = svg.querySelectorAll('a').length
  return { role: svg.getAttribute('role'), links }
})
console.log('\n=== B. map SVG ===')
console.log('  role:', svgInfo.role, '| links inside:', svgInfo.links, '(role=img makes AT treat the subtree as one opaque image)')
const snap = await page.locator('.routemap-svg').ariaSnapshot()
console.log('  aria snapshot of the SVG:\n' + snap.split('\n').slice(0, 6).map((l) => '    ' + l).join('\n'))

/* C. the adjacent nav: did nested <a> survive parsing? */
const adjacent = await page.evaluate(() => {
  const link = document.querySelector('.adjacent-link.prev, a.adjacent-link')
  if (!link) return { found: false }
  const nestedInSource = /<a[^>]*adjacent-link[^>]*>(?:(?!<\/a>)[\s\S])*<a /.test(document.documentElement.outerHTML) ? 'maybe' : 'no'
  const badgeInside = link.querySelector('a.badge-link') !== null
  const nav = document.querySelector('.adjacent')
  const anchors = nav ? nav.querySelectorAll('a').length : 0
  return { found: true, badgeStillInside: badgeInside, anchorsInNav: anchors, html: nav?.innerHTML.slice(0, 400) }
})
console.log('\n=== C. adjacent nav nested-anchor check ===')
console.log('  badge link still inside outer link:', adjacent.badgeStillInside, '| anchors in nav:', adjacent.anchorsInNav)
console.log('  DOM sample:', adjacent.html?.replace(/\s+/g, ' ').slice(0, 320))

/* D. focus ring on a map station, checked visually */
await page.keyboard.press('Tab')
let focused = ''
for (let i = 0; i < 60; i++) {
  focused = await page.evaluate(() => document.activeElement?.className?.baseVal ?? document.activeElement?.className ?? '')
  if (String(focused).includes('routemap-station')) break
  await page.keyboard.press('Tab')
}
const ring = await page.evaluate(() => {
  const a = document.activeElement
  if (!String(a?.className?.baseVal ?? '').includes('routemap-station')) return { onStation: false }
  const dot = a.querySelector('circle:not(.routemap-hit):not(.routemap-interchange-ring)')
  const hit = a.querySelector('.routemap-hit')
  const ds = getComputedStyle(dot)
  const hs = getComputedStyle(hit)
  return {
    onStation: true,
    matchesFocusVisible: a.matches(':focus-visible'),
    dotStroke: ds.stroke, dotStrokeWidth: ds.strokeWidth, dotR: dot.getAttribute('r'),
    hitFill: hs.fill, hitStroke: hs.stroke,
  }
})
console.log('\n=== D. focus indicator on a map station link ===')
console.log(' ', JSON.stringify(ring))
await page.screenshot({ path: 'docs/screenshots/_probe-station-focus.png', clip: { x: 0, y: 200, width: 700, height: 500 } })

await browser.close()
server.close()
