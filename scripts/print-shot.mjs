/* Print-media screenshots for visual review, A4 width (794 CSS px at 96dpi). */
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
  if (!fs.existsSync(f)) { res.writeHead(404); res.end(''); return }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] ?? 'application/octet-stream' })
  res.end(fs.readFileSync(f))
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 794, height: 1123 } })
for (const [name, url] of [['line-wenhu', '/rail/metro/lines/wenhu-line/'], ['station-br13', '/rail/metro/stations/br13/']]) {
  await page.goto(base + enPath(url), { waitUntil: 'load' })
  await page.emulateMedia({ media: 'print' })
  await page.screenshot({ path: `docs/print/_${name}-printmedia.png`, fullPage: true })
  await page.emulateMedia({ media: 'screen' })
}
await browser.close(); server.close()
console.log('done')
