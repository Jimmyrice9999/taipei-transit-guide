/* Screenshots of the Matra article at review widths. Serves out/ statically. */
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { chromium } from 'playwright'

const OUT = path.join(process.cwd(), 'out')
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

const stamp = process.argv[2] ?? 'now'
const routes = [['matra', '/rail/history/matra-dispute/']]
const widths = [1440, 768, 375]

const browser = await chromium.launch()
for (const [name, url] of routes) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } })
    await page.goto(base + url, { waitUntil: 'load' })
    await page.screenshot({ path: `docs/screenshots/${name}-${width}-${stamp}.png`, fullPage: true })
    await page.close()
  }
}
await browser.close()
server.close()
console.log('wrote docs/screenshots/*-' + stamp + '.png')
