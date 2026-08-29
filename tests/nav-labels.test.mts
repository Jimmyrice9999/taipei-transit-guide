/**
 * scripts/nav-labels-check.mjs proves every section-dropdown link lands on
 * the page it names. That proof is only as good as its ability to actually
 * fail — Part 1 of Run 306's brief asked explicitly for a gate that fails
 * on a deliberately broken link, not just one that passes on a good build.
 * These tests run the checker's own logic against small synthetic `out/`
 * trees rather than the real build, so a deliberate break is cheap to set
 * up and the assertion is exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { auditNavLabels } from '../scripts/nav-labels-check.mjs'

function tempOut(files: Record<string, string>): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'nav-labels-test-'))
  for (const [rel, content] of Object.entries(files)) {
    const full = path.join(dir, rel)
    fs.mkdirSync(path.dirname(full), { recursive: true })
    fs.writeFileSync(full, content)
  }
  return dir
}

function walk(dir: string, found: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else if (entry.name.endsWith('.html')) found.push(full)
  }
  return found
}

const PAGE = (title: string, navHref: string, navText: string) => `<!doctype html><html><body>
<nav class="site-nav"><a href="${navHref}">${navText}</a></nav>
<h1 class="page-title">${title}</h1>
</body></html>`

/** A destination page with no nav link of its own — just the h1 a checked link should land on. */
const TARGET = (title: string) => `<!doctype html><html><body><h1 class="page-title">${title}</h1></body></html>`

test('a nav link whose text matches its target is clean', () => {
  const dir = tempOut({
    'index.html': PAGE('Home', '/rail/', 'Rail & cable'),
    'rail/index.html': TARGET('Rail & cable'),
  })
  const findings = auditNavLabels(walk(dir), dir)
  assert.deepEqual(findings, [])
  fs.rmSync(dir, { recursive: true, force: true })
})

test('a nav link that lands on the wrong page is caught', () => {
  const dir = tempOut({
    // The dropdown says "Rail & cable" but its href actually points at Bus —
    // the exact failure mode Part 1 asked this gate to catch.
    'index.html': PAGE('Home', '/bus/', 'Rail & cable'),
    'bus/index.html': TARGET('Bus'),
  })
  const findings = auditNavLabels(walk(dir), dir)
  assert.equal(findings.length, 1)
  assert.equal(findings[0].text, 'Rail & cable')
  assert.equal(findings[0].landsOn, '/bus/')
  assert.equal(findings[0].targetTitle, 'Bus')
  fs.rmSync(dir, { recursive: true, force: true })
})

test('a truncated group label ("All routes") is not a false positive against a fuller title ("Bus routes")', () => {
  const dir = tempOut({
    'index.html': PAGE('Home', '/bus/routes/', 'All routes'),
    'bus/routes/index.html': TARGET('Bus routes'),
  })
  const findings = auditNavLabels(walk(dir), dir)
  assert.deepEqual(findings, [])
  fs.rmSync(dir, { recursive: true, force: true })
})

test('a station code baked into a title survives comparison without becoming a false positive', () => {
  const title = 'Kaohsiung International Airport (R4) — Kaohsiung Metro'
  const dir = tempOut({
    'index.html': PAGE('Home', '/rail/krtc/stations/r4/', title),
    'rail/krtc/stations/r4/index.html': TARGET(
      'Kaohsiung International Airport (<span class="badge" title="R4">R4</span>) — Kaohsiung Metro',
    ),
  })
  const findings = auditNavLabels(walk(dir), dir)
  assert.deepEqual(findings, [])
  fs.rmSync(dir, { recursive: true, force: true })
})

test('a redirect stub in the chain still resolves to the real destination', () => {
  const dir = tempOut({
    'index.html': PAGE('Home', '/old/', 'Bus'),
    'old/index.html':
      '<!doctype html><html data-redirect-stub><head><meta http-equiv="refresh" content="0; url=/bus/"></head><body></body></html>',
    'bus/index.html': TARGET('Bus'),
  })
  const findings = auditNavLabels(walk(dir), dir)
  assert.deepEqual(findings, [])
  fs.rmSync(dir, { recursive: true, force: true })
})
