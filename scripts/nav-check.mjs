/**
 * Drives the section nav the way a keyboard user and a touch user would.
 *
 *   npm run nav        (after npm run build)
 *
 * Run 10 built a dropdown nav, and "keyboard accessible, works on touch, must
 * not depend on hover alone" was a requirement rather than a nice-to-have. All
 * three are invisible to markup review and to axe: a menu can have perfect
 * ARIA and still be impossible to open with a thumb.
 *
 * One process note, because it cost time and is the sort of thing that gets
 * mistaken for a product bug: the first version of the touch test called
 * `waitForLoadState('load')` after tapping a link and then read `page.url()`.
 * A Next.js `<Link>` navigates client-side, so there is no new load event —
 * the wait resolved instantly against the document already there, and the URL
 * was read before the router had pushed it. The test reported a navigation
 * failure that did not exist. It now settles first, and checks the closed and
 * open cases against both tap and click so a real regression is distinguishable
 * from a harness artefact.
 */
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { chromium, devices } from 'playwright'

const ROOT = 'C:/Users/jamie/OneDrive/Documents/projects/taipei-transit-guide'
const OUT = path.join(ROOT, 'out')
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml' }
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0])
  let f = path.join(OUT, p)
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html')
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end('nf'); return }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] ?? 'application/octet-stream' })
  res.end(fs.readFileSync(f))
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch()

const results = []
const ok = (name, pass, detail = '') => {
  results.push({ name, pass, detail })
  console.log(`  ${pass ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`)
}

/* ---------- 1. keyboard ---------- */
console.log('\n1. Keyboard\n')
{
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base + '/rail/lines/wenhu-line/', { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)

  // Tab until the first nav toggle has focus. If it is never reachable, that
  // is the failure — a menu you cannot get to with a keyboard.
  let reached = false
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press('Tab')
    reached = await page.evaluate(() =>
      document.activeElement?.classList.contains('nav-toggle') ?? false,
    )
    if (reached) break
  }
  ok('the first section toggle is reachable by Tab', reached)

  const expandedBefore = await page.evaluate(() => document.activeElement?.getAttribute('aria-expanded'))
  await page.keyboard.press('Enter')
  const afterEnter = await page.evaluate(() => {
    const btn = document.activeElement
    const panel = document.getElementById(btn?.getAttribute('aria-controls') ?? '')
    return { expanded: btn?.getAttribute('aria-expanded'), panelVisible: panel ? !panel.hasAttribute('hidden') : null }
  })
  ok('Enter opens the panel', expandedBefore === 'false' && afterEnter.expanded === 'true' && afterEnter.panelVisible === true,
     `aria-expanded ${expandedBefore} → ${afterEnter.expanded}, panel visible ${afterEnter.panelVisible}`)

  // Category disclosures inside the open panel must be reachable by Tab.
  const firstSummaryText = await page.evaluate(() => {
    const panel = document.querySelector('.nav-panel:not([hidden])')
    return panel?.querySelector('summary')?.textContent ?? null
  })
  await page.keyboard.press('Tab')
  const focusedSummary = await page.evaluate(() => document.activeElement?.textContent?.trim() ?? '')
  ok('Tab moves to the first nested category', focusedSummary === firstSummaryText?.trim(),
     `focus is "${focusedSummary}", panel's first category is "${firstSummaryText?.trim()}"`)

  await page.keyboard.press('Enter')
  const nestedAfterEnter = await page.evaluate(() => {
    const summary = document.activeElement
    const details = summary?.closest('details')
    return { open: details?.hasAttribute('open') ?? false }
  })
  ok('Enter opens the nested category', nestedAfterEnter.open)

  const firstPanelLink = await page.evaluate(() => {
    const panel = document.querySelector('.nav-panel:not([hidden])')
    return panel?.querySelector('details[open] a')?.textContent ?? null
  })
  await page.keyboard.press('Tab')
  const focusedText = await page.evaluate(() => document.activeElement?.textContent?.trim() ?? '')
  ok('Tab moves into the open nested category', focusedText === firstPanelLink?.trim(),
     `focus is "${focusedText}", category's first link is "${firstPanelLink?.trim()}"`)

  await page.keyboard.press('Escape')
  const afterEscape = await page.evaluate(() => {
    const open = document.querySelector('.nav-panel:not([hidden])')
    return { open: Boolean(open), focus: document.activeElement?.className ?? '' }
  })
  ok('Escape closes it and returns focus to the toggle',
     !afterEscape.open && afterEscape.focus.includes('nav-toggle'),
     `panel open ${afterEscape.open}, focus on "${afterEscape.focus}"`)

  await page.keyboard.press('Space')
  const afterSpace = await page.evaluate(() => Boolean(document.querySelector('.nav-panel:not([hidden])')))
  ok('Space opens it too', afterSpace)
  await page.close()
}

/* ---------- 2. touch, no hover ---------- */
console.log('\n2. Touch (no hover, no mouse)\n')
{
  const context = await browser.newContext({ ...devices['Pixel 7'], hasTouch: true })
  const page = await context.newPage()
  await page.goto(base + '/rail/lines/wenhu-line/', { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)

  const before = await page.evaluate(() => Boolean(document.querySelector('.nav-panel:not([hidden])')))
  await page.locator('.nav-item').first().locator('button').tap()
  const after = await page.evaluate(() => {
    const panel = document.querySelector('.nav-panel:not([hidden])')
    return { open: Boolean(panel), links: panel?.querySelectorAll('a').length ?? 0 }
  })
  ok('tapping the caret opens the panel', !before && after.open, `${after.links} links inside`)

  await page.locator('.nav-panel:not([hidden]) summary').first().tap()
  const nestedOpen = await page.evaluate(() =>
    document.querySelector('.nav-panel:not([hidden]) details')?.hasAttribute('open') ?? false,
  )
  ok('tapping a category opens its nested submenu', nestedOpen)

  // Isolate: does it navigate with the panel CLOSED, and with it OPEN, and
  // does a mouse click behave differently from a tap?
  const trial = async (label, {open, how}) => {
    const pg = await context.newPage()
    await pg.goto(base + '/rail/lines/wenhu-line/', { waitUntil: 'load' })
    await pg.evaluate(() => document.fonts.ready)
    if (open) await pg.locator('.nav-item').first().locator('button').tap()
    const link = pg.locator('.nav-item').first().locator('a').first()
    if (how === 'tap') await link.tap()
    else await link.click()
    await pg.waitForTimeout(600)
    const u = pg.url().replace(base, '')
    console.log(`    ${label.padEnd(26)} → ${u}`)
    await pg.close()
    return u
  }
  await trial('closed + tap', { open: false, how: 'tap' })
  await trial('closed + click', { open: false, how: 'click' })
  const openTap = await trial('open + tap', { open: true, how: 'tap' })
  await trial('open + click', { open: true, how: 'click' })
  ok('tapping the section name still navigates with the panel open', openTap === '/rail/', openTap)

  // No horizontal overflow with the panel open on a phone.
  await page.locator('.nav-item').first().locator('button').tap()
  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth,
  )
  ok('no horizontal overflow with the panel open', overflow <= 0, `${overflow}px`)
  await context.close()
}

/* ---------- 3. does it depend on hover? ---------- */
console.log('\n3. Hover independence\n')
{
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(base + '/rail/lines/wenhu-line/', { waitUntil: 'load' })
  const cssOnly = await page.evaluate(() => {
    // A panel that only opens on :hover would have a CSS rule doing it. If the
    // only mechanism is JS state, there is no such rule.
    for (const sheet of document.styleSheets) {
      let rules
      try { rules = sheet.cssRules } catch { continue }
      for (const rule of rules ?? []) {
        if (rule.selectorText?.includes(':hover') && /nav-panel/.test(rule.selectorText)) return rule.selectorText
      }
    }
    return null
  })
  ok('no CSS :hover rule controls panel visibility', cssOnly === null, cssOnly ?? 'none found')
  await page.close()
}

console.log('')
const failed = results.filter((r) => !r.pass)
console.log(failed.length ? `${failed.length} FAILURE(S)` : `all ${results.length} checks pass`)
await browser.close(); server.close()
process.exit(failed.length ? 1 : 0)
