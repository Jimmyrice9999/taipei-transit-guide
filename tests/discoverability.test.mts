/**
 * Metadata, share images, sitemap and structured data, checked against the
 * exported site.
 *
 * Every one of these can be wrong in a way that looks completely fine in the
 * source and in the browser — a share image served with the wrong Content-Type,
 * a canonical URL pointing at a host that does not exist, a description
 * duplicated across 24 pages. They only show up in the built output or in
 * someone else's crawler, which is why they are tested here rather than trusted.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

import { getAllPages } from '../lib/content.ts'
import { getLineStations } from '../lib/stations.ts'
import { SITE_URL } from '../lib/site.ts'

const OUT = path.join(process.cwd(), 'out')
const read = (rel: string) => fs.readFileSync(path.join(OUT, rel), 'utf8')

function allHtml(): string[] {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return walk(full)
      return entry.name.endsWith('.html') ? [full] : []
    })
  return walk(OUT)
}

const attr = (html: string, re: RegExp) => html.match(re)?.[1]

const titleOf = (html: string) => attr(html, /<title>([^<]*)<\/title>/)
const descriptionOf = (html: string) =>
  attr(html, /<meta name="description" content="([^"]*)"/)
const canonicalOf = (html: string) =>
  attr(html, /<link rel="canonical" href="([^"]*)"/)

/* ---- titles and descriptions ---------------------------------------- */

test('every page has a title and a description', () => {
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    const html = fs.readFileSync(file, 'utf8')
    assert.ok(titleOf(html), `${rel} has no <title>`)
    assert.ok(descriptionOf(html), `${rel} has no meta description`)
  }
})

test('no two pages share a description', () => {
  /*
   * The failure this catches: 24 station pages built from one template
   * sentence with the code substituted in. Near-identical descriptions across
   * a set of pages is the specific signal that gets them collapsed as
   * duplicates in search results, so the pages compete with each other instead
   * of ranking.
   */
  const seen = new Map<string, string>()
  const clashes: string[] = []

  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    if (rel.startsWith('404') || rel.startsWith('_not-found')) continue
    const description = descriptionOf(fs.readFileSync(file, 'utf8'))
    if (!description) continue
    const previous = seen.get(description)
    if (previous) clashes.push(`${previous} and ${rel}`)
    else seen.set(description, rel)
  }

  assert.deepEqual(clashes, [])
})

test('descriptions are a usable length', () => {
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    const description = descriptionOf(fs.readFileSync(file, 'utf8'))
    if (!description) continue
    assert.ok(description.length > 40, `${rel}: description is only ${description.length} chars`)
    assert.ok(description.length < 400, `${rel}: description is ${description.length} chars`)
  }
})

test('page titles are distinct and carry the site name', () => {
  const titles = new Set<string>()
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    if (rel.startsWith('404') || rel.startsWith('_not-found')) continue
    const title = titleOf(fs.readFileSync(file, 'utf8'))!
    assert.ok(!titles.has(title), `${rel} repeats the title "${title}"`)
    titles.add(title)
    assert.match(title, /Taipei Transit Guide/, `${rel}: "${title}" does not name the site`)
  }
})

/* ---- canonical ------------------------------------------------------- */

test('every page declares a canonical URL on the configured origin', () => {
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    if (rel.startsWith('404') || rel.startsWith('_not-found')) continue
    const canonical = canonicalOf(fs.readFileSync(file, 'utf8'))
    assert.ok(canonical, `${rel} has no canonical URL`)
    assert.ok(
      canonical!.startsWith(SITE_URL),
      `${rel}: canonical ${canonical} is not on ${SITE_URL}`,
    )
  }
})

test('canonical URLs are unique', () => {
  // Two pages claiming the same canonical tells a search engine one of them
  // does not exist.
  const seen = new Map<string, string>()
  const clashes: string[] = []
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    if (rel.startsWith('404') || rel.startsWith('_not-found')) continue
    const canonical = canonicalOf(fs.readFileSync(file, 'utf8'))!
    const previous = seen.get(canonical)
    if (previous) clashes.push(`${previous} and ${rel} both claim ${canonical}`)
    else seen.set(canonical, rel)
  }
  assert.deepEqual(clashes, [])
})

test('a station canonical points at its own URL', () => {
  const html = read('train/stations/br13/index.html')
  assert.equal(canonicalOf(html), `${SITE_URL}/train/stations/br13/`)
})

/* ---- share images ---------------------------------------------------- */

test('every share image is a real PNG with a .png extension', () => {
  /*
   * The extension is the load-bearing part. Next writes these to an
   * extension-less path, and GitHub Pages types files by extension — so
   * without the postbuild rename they are served as application/octet-stream
   * and every social crawler rejects them, while the HTML looks perfect.
   */
  const images: string[] = []
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/opengraph-image/.test(entry.name)) images.push(full)
    }
  }
  walk(OUT)

  assert.ok(images.length > 0, 'no share images were generated at all')

  for (const image of images) {
    const rel = path.relative(OUT, image)
    assert.ok(rel.endsWith('.png'), `${rel} has no .png extension`)

    const head = Buffer.alloc(8)
    const fd = fs.openSync(image, 'r')
    fs.readSync(fd, head, 0, 8, 0)
    fs.closeSync(fd)
    assert.deepEqual(
      [...head.subarray(0, 4)],
      [0x89, 0x50, 0x4e, 0x47],
      `${rel} is not a PNG`,
    )
  }
})

test('every og:image URL ends in .png and resolves to a file', () => {
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    const html = fs.readFileSync(file, 'utf8')
    const image = attr(html, /<meta property="og:image" content="([^"]*)"/)
    if (!image) continue

    const withoutQuery = image.split('?')[0]
    assert.match(withoutQuery, /\.png$/, `${rel}: og:image ${image} is not a .png`)

    const local = withoutQuery.replace(SITE_URL, '')
    assert.ok(
      fs.existsSync(path.join(OUT, local)),
      `${rel}: og:image points at ${local}, which was not exported`,
    )
  }
})

test('content and station pages get their own share image', () => {
  for (const page of getAllPages()) {
    const rel = page.href.replace(/^\//, '') + 'opengraph-image.png'
    assert.ok(fs.existsSync(path.join(OUT, rel)), `${page.href} has no share image`)
  }
  for (const station of getLineStations('BR')) {
    const rel = `train/stations/${station.code.toLowerCase()}/opengraph-image.png`
    assert.ok(fs.existsSync(path.join(OUT, rel)), `${station.code} has no share image`)
  }
})

test('pages declare a large summary card', () => {
  const html = read('train/lines/wenhu-line/index.html')
  assert.match(html, /twitter:card" content="summary_large_image"/)
})

/* ---- sitemap and robots ---------------------------------------------- */

test('the sitemap lists every page and nothing else', () => {
  const xml = read('sitemap.xml')
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

  assert.ok(locs.length > 30, `sitemap has only ${locs.length} entries`)

  for (const page of getAllPages()) {
    assert.ok(locs.includes(`${SITE_URL}${page.href}`), `${page.href} is missing from the sitemap`)
  }
  for (const station of getLineStations('BR')) {
    const url = `${SITE_URL}/train/stations/${station.code.toLowerCase()}/`
    assert.ok(locs.includes(url), `${station.code} is missing from the sitemap`)
  }
  assert.ok(locs.includes(`${SITE_URL}/about/`), '/about/ is missing from the sitemap')

  // Every sitemap URL must be a page that exists.
  for (const loc of locs) {
    const local = loc.replace(SITE_URL, '')
    const file = path.join(OUT, local, 'index.html')
    assert.ok(fs.existsSync(file), `sitemap lists ${local}, which was not exported`)
  }
})

test('sitemap entries are unique', () => {
  const locs = [...read('sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  assert.equal(new Set(locs).size, locs.length, 'the sitemap repeats a URL')
})

test('robots.txt allows indexing and names the sitemap', () => {
  const robots = read('robots.txt')
  assert.match(robots, /Allow: \//)
  assert.ok(!/^Disallow: \/$/m.test(robots), 'robots.txt blocks the whole site')
  assert.ok(
    robots.includes(`${SITE_URL}/sitemap.xml`),
    'robots.txt does not point at the sitemap',
  )
})

/* ---- structured data -------------------------------------------------- */

function jsonLdIn(html: string): Record<string, unknown>[] {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  return blocks.flatMap((m) => {
    const parsed = JSON.parse(m[1].replace(/\\u003c/g, '<'))
    return Array.isArray(parsed) ? parsed : [parsed]
  })
}

test('every JSON-LD block parses', () => {
  for (const file of allHtml()) {
    assert.doesNotThrow(
      () => jsonLdIn(fs.readFileSync(file, 'utf8')),
      `${path.relative(OUT, file)} has unparseable JSON-LD`,
    )
  }
})

test('every JSON-LD node declares a context and a type', () => {
  for (const file of allHtml()) {
    for (const node of jsonLdIn(fs.readFileSync(file, 'utf8'))) {
      assert.equal(node['@context'], 'https://schema.org', path.relative(OUT, file))
      assert.ok(node['@type'], `${path.relative(OUT, file)}: node with no @type`)
    }
  }
})

test('a station is marked up as a SubwayStation with real coordinates', () => {
  const nodes = jsonLdIn(read('train/stations/br10/index.html'))
  const station = nodes.find((n) => n['@type'] === 'SubwayStation')
  assert.ok(station, 'no SubwayStation node')

  assert.equal(station!.identifier, 'BR10')
  assert.equal(station!.name, 'Zhongxiao Fuxing')

  const geo = station!.geo as Record<string, unknown>
  assert.equal(geo['@type'], 'GeoCoordinates')
  assert.equal(typeof geo.latitude, 'number')
  assert.equal(typeof geo.longitude, 'number')
  // Taipei, roughly.
  assert.ok((geo.latitude as number) > 24 && (geo.latitude as number) < 26)
  assert.ok((geo.longitude as number) > 120 && (geo.longitude as number) < 122)
})

test('no node asserts a null or empty value', () => {
  // A geo block with null coordinates, or an empty address, claims a value the
  // site does not have — which is the structured-data version of guessing.
  const check = (node: unknown, where: string) => {
    if (node === null) assert.fail(`${where} contains null`)
    if (Array.isArray(node)) return node.forEach((n, i) => check(n, `${where}[${i}]`))
    if (typeof node !== 'object') return
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      assert.notEqual(value, null, `${where}.${key} is null`)
      assert.notEqual(value, '', `${where}.${key} is an empty string`)
      check(value, `${where}.${key}`)
    }
  }

  for (const file of allHtml()) {
    for (const node of jsonLdIn(fs.readFileSync(file, 'utf8'))) {
      check(node, `${path.relative(OUT, file)} ${node['@type']}`)
    }
  }
})

test('the data pages are marked up as Datasets with a working download', () => {
  for (const [page, file] of [
    ['data/stations/index.html', 'data/taipei-metro-stations.json'],
    ['data/line-colours/index.html', 'data/taipei-metro-line-colours.json'],
  ] as const) {
    const dataset = jsonLdIn(read(page)).find((n) => n['@type'] === 'Dataset')
    assert.ok(dataset, `${page} has no Dataset node`)

    const distribution = (dataset!.distribution as Record<string, unknown>[])[0]
    assert.equal(distribution['@type'], 'DataDownload')

    const url = String(distribution.contentUrl).replace(SITE_URL, '')
    assert.ok(fs.existsSync(path.join(OUT, url)), `${page}: ${url} was not exported`)
    assert.equal(url, `/${file}`)
  }
})

test('breadcrumbs are positioned in order and point at real pages', () => {
  for (const file of allHtml()) {
    const rel = path.relative(OUT, file)
    const trail = jsonLdIn(fs.readFileSync(file, 'utf8')).find(
      (n) => n['@type'] === 'BreadcrumbList',
    )
    if (!trail) continue

    const items = trail.itemListElement as Record<string, unknown>[]
    items.forEach((item, index) => {
      assert.equal(item.position, index + 1, `${rel}: breadcrumb positions are not sequential`)
      const local = String(item.item).replace(SITE_URL, '')
      assert.ok(
        fs.existsSync(path.join(OUT, local, 'index.html')),
        `${rel}: breadcrumb points at ${local}, which does not exist`,
      )
    })
  }
})

test('no line page claims a transit type schema.org does not define', () => {
  /*
   * schema.org has station types but nothing for a line or route. If someone
   * later adds `TransitLine`, `BusRoute` or similar to a line page, it will
   * validate as an unrecognised type and mean nothing — the markup equivalent
   * of a plausible unsourced figure.
   */
  const invented = ['TransitLine', 'TrainLine', 'MetroLine', 'Route', 'BusRoute']
  for (const file of allHtml()) {
    for (const node of jsonLdIn(fs.readFileSync(file, 'utf8'))) {
      assert.ok(
        !invented.includes(String(node['@type'])),
        `${path.relative(OUT, file)} uses "${node['@type']}", which schema.org does not define`,
      )
    }
  }
})
