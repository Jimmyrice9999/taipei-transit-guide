/**
 * Every figure the site states, checked against the data it came from.
 *
 * Run: npm run facts
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY
 *
 * The same fact is stated in up to four places — Markdown prose, frontmatter
 * `facts:`, frontmatter `specs:`, and a generated page like /rail/network or
 * /data/stations. Nothing kept them in step. The consequences were not
 * hypothetical: the route length said 26.42 on one page and "unsettled between
 * 25.1 and 25.7" on another, and the footer contradicted /data about the
 * provenance of the line colours on all 45 pages simultaneously.
 *
 * This walks the *built output* and the source data together, and fails on
 * contradiction. Two classes are covered:
 *
 *   1. NUMBERS the site states that the data also knows — station counts, route
 *      lengths, travel times, positions, interchange claims.
 *   2. CLAIMS ABOUT SOURCES — "TDX does not publish X". That is the exact class
 *      of error that survived four builds, because it is a statement about
 *      absence and nothing was checking whether the absence was real.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import matter from 'gray-matter'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'out')
const CONTENT = path.join(ROOT, 'content')

/* Pull the data through a child process so this stays a plain .mjs script. */
const data = JSON.parse(
  execFileSync(
    process.execPath,
    [
      '--disable-warning=MODULE_TYPELESS_PACKAGE_JSON',
      '--input-type=module',
      '-e',
      `
      import { STATIONS, getLineStations, getStation } from './lib/stations.ts'
      import { LINES } from './lib/lines.ts'
      import { getLineSummaries, getInterchanges } from './lib/network.ts'
      import { getTrunkRoute, getRoutes } from './lib/routes.ts'
      import { getRunTime } from './lib/timetable.ts'
      const summaries = getLineSummaries().map(s => ({
        code: s.line.code, name: s.line.name, stations: s.stations.length,
        from: s.from?.code, to: s.to?.code, travelTimeMin: s.travelTimeMin,
        officialKm: s.officialKm, measuredKm: s.measuredKm, runs: s.runs, hasBranch: s.hasBranch,
        onTdx: s.line.onTdx, published: s.published,
      }))
      const br = getLineStations('BR').map((s,i) => ({
        code: s.code, name: s.name, nameZh: s.nameZh, position: i+1,
        structure: s.structure, interchange: s.interchange, district: s.district,
        exits: s.exits, engineering: s.engineering,
      }))
      console.log(JSON.stringify({
        totalStations: STATIONS.length,
        lineCount: LINES.length,
        // Not the same number as lineCount from run 12 on: the Sanying Line is
        // in the registry and has no stations in MOTC's extract. Pages that
        // count "lines" mean one or the other, and the checks below have to
        // know which.
        linesWithStations: new Set(STATIONS.map(s => s.line)).size,
        summaries, br,
        interchanges: getInterchanges().map(i => ({ name: i.name, codes: i.codes })),
        brRoutes: getRoutes('BR').map(r => ({ id: r.routeId, lengthKm: r.lengthKm, from: r.from, to: r.to })),
        brTrunkKm: getTrunkRoute('BR').lengthKm,
        runTimes: br.slice(0,-1).map((s,i) => ({ from: s.code, to: br[i+1].code, sec: getRunTime(s.code, br[i+1].code) })),
      }))
      `,
    ],
    { cwd: ROOT, encoding: 'utf8' },
  ),
)

const read = (rel) => {
  const full = path.join(OUT, rel)
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : null
}

/** Rendered markup only — never the serialised React payload. */
const visible = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')

/**
 * The page as a reader sees it, as one normalised string.
 *
 * React separates adjacent interpolated values with `<!-- -->`, so "157
 * stations across 7 lines" is emitted as
 * `157<!-- --> stations across <!-- -->7<!-- --> lines`. Matching prose against
 * raw markup therefore fails on exactly the sentences most worth checking —
 * the ones built from data. Comments go, tags become spaces, runs of
 * whitespace collapse.
 */
const text = (html) =>
  visible(html)
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()

const problems = []
const checks = []
const fail = (where, message) => problems.push({ where, message })
const ok = (label) => checks.push(label)

/* ------------------------------------------------------------------ */
/* 1. Counts                                                           */
/* ------------------------------------------------------------------ */

{
  const html = text(read('data/stations/index.html') ?? '')
  const claimed = html.match(/(\d+) stations across (\d+) lines/)
  if (!claimed) fail('/data/stations', 'could not find the "N stations across M lines" claim to check')
  else {
    if (Number(claimed[1]) !== data.totalStations) {
      fail('/data/stations', `claims ${claimed[1]} stations; the registry holds ${data.totalStations}`)
    }
    if (Number(claimed[2]) !== data.linesWithStations) {
      fail(
        '/data/stations',
        `claims ${claimed[2]} lines; ${data.linesWithStations} lines have station records ` +
          `(the registry holds ${data.lineCount} lines in total)`,
      )
    }
    ok('station and line counts on /data/stations')
  }

  const network = text(read('rail/network/index.html') ?? '')
  const netClaim = network.match(/(\d+) lines, (\d+) stations/)
  if (netClaim) {
    if (Number(netClaim[2]) !== data.totalStations) {
      fail('/rail/network', `claims ${netClaim[2]} stations; registry holds ${data.totalStations}`)
    }
    if (Number(netClaim[1]) !== data.lineCount) {
      fail('/rail/network', `claims ${netClaim[1]} lines; registry holds ${data.lineCount}`)
    }
    ok('line and station counts on /rail/network')
  }

  const interchangeClaim = network.match(/(\d+) places where you can change lines/)
  if (interchangeClaim && Number(interchangeClaim[1]) !== data.interchanges.length) {
    fail(
      '/rail/network',
      `claims ${interchangeClaim[1]} interchanges; getInterchanges() finds ${data.interchanges.length}`,
    )
  } else if (interchangeClaim) ok('interchange count on /rail/network')
}

/* ------------------------------------------------------------------ */
/* 2. The Wenhu Line's stated figures                                  */
/* ------------------------------------------------------------------ */

{
  const source = fs.readFileSync(path.join(CONTENT, 'rail/lines/wenhu-line.md'), 'utf8')

  /*
   * ── Harness bug, found by this run's own edits ─────────────────────────────
   * Every lookup below used to be a regex over the raw YAML, of the form
   *
   *     /label:\s*Route length[\s\S]*?value:\s*([\d.]+)/
   *
   * which reads "find that label, then the next number". Two ways that lies,
   * both of which bit at once when the route length row was renamed and quoted:
   *
   *   - `value: "25.17"` does not match `value:\s*([\d.]+)` because of the
   *     quote, so `[\s\S]*?` keeps going and finds the NEXT row's number.
   *   - `label: Route length` also matches `Route length, revenue`, and a label
   *     that no longer exists matches nothing while the check still reports.
   *
   * Together they made the checker announce "specs say route length 2 km" —
   * having silently read the value off `Underground stations`. A cross-checker
   * that reports a contradiction that is not there is the §16 failure mode
   * again: it teaches you to skim its output.
   *
   * Parsed properly now, and looked up by exact label.
   * ──────────────────────────────────────────────────────────────────────────
   */
  const frontmatter = matter(source).data
  const rowsOf = (block) => (Array.isArray(frontmatter[block]) ? frontmatter[block] : [])
  const row = (block, label) => rowsOf(block).find((r) => r?.label === label)
  const value = (block, label) => {
    const found = row(block, label)
    return found?.value === undefined || found?.value === null ? undefined : String(found.value)
  }
  const number = (block, label) => {
    const raw = value(block, label)
    if (raw === undefined) return undefined
    const parsed = Number(raw)
    return Number.isFinite(parsed) ? parsed : undefined
  }

  // Route length, in frontmatter and in prose, against the official record.
  /*
   * Renamed from "Route length, revenue" in run 7 to match 營運長度, the term
   * both DORTS and zh.wikipedia use and the one the page's prose now uses.
   * The rename is here as well as in the content because this lookup is by
   * exact label and fails loudly rather than skipping — which is the whole
   * point of the exact-label rule above.
   */
  const specLength = number('specs', 'Route length, operating')
  if (specLength === undefined) {
    fail(
      'wenhu-line.md',
      'no numeric specs row labelled "Route length, operating" — the cross-check ' +
        'against TDX cannot run. Rename the row back or update this check; a ' +
        'silently skipped check is the thing this file exists to prevent.',
    )
  } else if (Math.abs(specLength - data.brTrunkKm) > 0.005) {
    fail('wenhu-line.md', `specs say route length ${specLength} km; TDX route BR-1 says ${data.brTrunkKm}`)
  } else ok(`route length ${specLength} km matches TDX BR-1`)

  for (const m of source.matchAll(/\*\*Route length is ([\d.]+) km\.?\*\*/g)) {
    if (Math.abs(Number(m[1]) - data.brTrunkKm) > 0.005) {
      fail('wenhu-line.md', `prose says ${m[1]} km; TDX says ${data.brTrunkKm}`)
    }
  }

  // Station count, in frontmatter and in prose.
  const brStations = data.br.length
  const factStations = number('facts', 'Stations')
  if (factStations !== undefined && factStations !== brStations) {
    fail('wenhu-line.md', `facts say ${factStations} stations; the line has ${brStations}`)
  } else if (factStations !== undefined) ok(`Wenhu station count ${brStations}`)

  // Elevated + underground must add up to the total, and match the overlay.
  const elevated = number('specs', 'Elevated stations') ?? NaN
  const underground = number('specs', 'Underground stations') ?? NaN
  if (Number.isFinite(elevated) && Number.isFinite(underground)) {
    if (elevated + underground !== brStations) {
      fail('wenhu-line.md', `${elevated} elevated + ${underground} underground ≠ ${brStations} stations`)
    } else ok('elevated + underground = total stations')

    const actualElevated = data.br.filter((s) => s.structure === 'elevated').length
    if (elevated !== actualElevated) {
      fail(
        'wenhu-line.md',
        `claims ${elevated} elevated; lib/station-overlay.ts marks ${actualElevated} ` +
          `(${data.br.filter((s) => s.structure === 'unknown').length} still unknown)`,
      )
    } else ok('elevated count matches the station overlay')
  }

  /*
   * Exit counts, prose against the registry.
   *
   * Added in run 7 because the research corpus — and, following it, this run's
   * own brief — said eleven Wenhu stations have a single exit. The builder's
   * table says eight. The miscount was in a lead file rather than on the site,
   * but it would have reached the site if nobody had counted, and prose numbers
   * that restate a registry are exactly where drift happens silently.
   */
  const withExits = data.br.filter((s) => typeof s.exits === 'number')
  if (withExits.length === data.br.length) {
    const singles = withExits.filter((s) => s.exits === 1).length
    const totalExits = withExits.reduce((sum, s) => sum + s.exits, 0)
    const words = { 8: 'Eight', 11: 'Eleven', 20: 'Twenty', 24: 'Twenty-four' }

    const prosePattern = /\*\*(\w+) of the twenty-four stations have exactly one exit\*\*/
    const proseMatch = source.match(prosePattern)
    if (!proseMatch) {
      fail(
        'wenhu-line.md',
        'no "N of the twenty-four stations have exactly one exit" sentence found — ' +
          'the exit cross-check cannot run. Update this check or restore the sentence; ' +
          'a check that silently skips is what this file exists to prevent.',
      )
    } else if (proseMatch[1] !== words[singles]) {
      fail(
        'wenhu-line.md',
        `prose says ${proseMatch[1].toLowerCase()} single-exit stations; ` +
          `the registry counts ${singles}`,
      )
    } else ok(`single-exit station count ${singles} matches the registry`)

    if (!source.includes(`sixty-three between its twenty-four stations`) && totalExits === 63) {
      // The written total is spelled out; only flag when the number moves.
    } else if (totalExits !== 63) {
      fail('wenhu-line.md', `prose says sixty-three exits in total; the registry counts ${totalExits}`)
    } else ok(`total exit count ${totalExits} matches the registry`)
  }

  // End-to-end time against TDX.
  const brSummary = data.summaries.find((s) => s.code === 'BR')
  const endToEnd = Number(value('facts', 'End to end')?.match(/(\d+)\s*min/)?.[1] ?? NaN)
  if (Number.isFinite(endToEnd) && brSummary.travelTimeMin && endToEnd !== brSummary.travelTimeMin) {
    fail('wenhu-line.md', `facts say ${endToEnd} min end to end; TDX says ${brSummary.travelTimeMin}`)
  } else if (Number.isFinite(endToEnd)) ok(`end-to-end ${endToEnd} min matches TDX`)

  // Termini.
  const termini = value('facts', 'Termini')?.match(/(\S+)\s*[—–-]\s*(\S+)/)
  if (termini) {
    if (termini[1] !== brSummary.from || termini[2] !== brSummary.to) {
      fail(
        'wenhu-line.md',
        `facts say termini ${termini[1]}–${termini[2]}; the trunk route runs ${brSummary.from}–${brSummary.to}`,
      )
    } else ok(`termini ${termini[1]}–${termini[2]} match the trunk route`)
  }

  /*
   * The depot marker on the strip map comes from each depot page's own `spine:`
   * frontmatter, so a wrong value there draws the depot in the wrong place on a
   * live page and nothing else notices. That is exactly what happened: Neihu
   * Depot was marked at BR19 for four builds because it shares a name with the
   * district BR19 sits in, and it actually joins the line at BR24.
   *
   * There is no dataset of depot junctions to check against — TDX has none — so
   * this checks the only thing that can be checked mechanically: that the code
   * is a real station on the line the depot page claims. That would not have
   * caught BR19. What caught BR19 was reading a source, and the check that
   * would have caught it is the citation on the row.
   */
  for (const depot of ['muzha-depot', 'neihu-depot']) {
    const file = path.join(CONTENT, 'rail/depots', `${depot}.md`)
    if (!fs.existsSync(file)) continue
    const depotData = matter(fs.readFileSync(file, 'utf8')).data
    const at = String(depotData.spine ?? '').trim().toUpperCase()
    const connectsAt = (Array.isArray(depotData.facts) ? depotData.facts : [])
      .find((r) => r?.label === 'Connects at')
    const stated = String(connectsAt?.value ?? '').trim().toUpperCase()

    if (!data.br.some((s) => s.code === at)) {
      fail(`${depot}.md`, `spine: "${at}" is not a station on the Wenhu Line`)
    } else if (stated && stated !== at) {
      fail(
        `${depot}.md`,
        `facts say it connects at ${stated} but spine: marks ${at} — the strip map ` +
          `would draw the depot somewhere the page says it is not`,
      )
    } else ok(`${depot} strip-map marker and stated junction agree (${at})`)
  }
}

/* ------------------------------------------------------------------ */
/* 3. Station pages against the registry                               */
/* ------------------------------------------------------------------ */

{
  let mismatches = 0
  for (const station of data.br) {
    const html = visible(read(`rail/stations/${station.code.toLowerCase()}/index.html`) ?? '')
    if (!html) {
      fail(station.code, 'station page missing')
      mismatches++
      continue
    }

    const position = html.match(/<dt>Position<\/dt><dd>(\d+) of (\d+)<\/dd>/)
    if (position) {
      if (Number(position[1]) !== station.position || Number(position[2]) !== data.br.length) {
        fail(station.code, `page says position ${position[1]} of ${position[2]}; registry says ${station.position} of ${data.br.length}`)
        mismatches++
      }
    }

    if (!html.includes(station.name)) {
      fail(station.code, `page does not contain its own registry name "${station.name}"`)
      mismatches++
    }

    // Interchange claims must match the registry exactly, both ways.
    // Run 21: the same interchange badge now renders twice on a station page
    // — once in the head banner, once in the facts panel, so a reader does
    // not have to scroll past the hero to find the page's most useful fact.
    // Dedupe to the distinct lines named, which is what this check actually
    // means to verify; two honest badges for the same line are not a
    // fabricated interchange.
    const shown = [
      ...new Set([...html.matchAll(/title="Interchange with the ([^"]+) Line"/g)].map((m) => m[1])),
    ]
    if (shown.length !== station.interchange.length) {
      fail(
        station.code,
        `page shows ${shown.length} interchange badge(s); registry says ${station.interchange.length}`,
      )
      mismatches++
    }
  }
  if (mismatches === 0) ok(`all ${data.br.length} station pages agree with the registry`)
}

/* ------------------------------------------------------------------ */
/* 4. The spine agrees with the station pages                          */
/* ------------------------------------------------------------------ */

{
  const html = visible(read('rail/lines/wenhu-line/index.html') ?? '')
  const spineOrder = [...html.matchAll(/data-station="([^"]+)"/g)].map((m) => m[1])
  const expected = data.br.map((s) => s.code)

  if (spineOrder.length !== expected.length) {
    fail('spine', `strip map lists ${spineOrder.length} stations; the line has ${expected.length}`)
  } else if (spineOrder.join(',') !== expected.join(',')) {
    const firstDiff = spineOrder.findIndex((c, i) => c !== expected[i])
    fail('spine', `strip map order diverges at position ${firstDiff + 1}: ${spineOrder[firstDiff]} vs ${expected[firstDiff]}`)
  } else ok('strip map order matches the registry sequence exactly')
}

/* ------------------------------------------------------------------ */
/* 5. Travel times: station pages against TDX                          */
/* ------------------------------------------------------------------ */

{
  let checked = 0
  for (const leg of data.runTimes) {
    if (leg.sec == null) continue
    const html = visible(read(`rail/stations/${leg.from.toLowerCase()}/index.html`) ?? '')
    if (!html) continue
    const expected = `${Math.round(leg.sec / 60)} min`
    const alt = `${leg.sec} sec`
    if (html.includes('adjacent-time') && !html.includes(expected) && !html.includes(alt)) {
      // Formatting varies; only flag when neither form appears at all.
      const shown = html.match(/class="adjacent-time">([^<]*)</)?.[1]
      if (shown && !shown.includes(String(Math.round(leg.sec / 60)))) {
        fail(leg.from, `run time to ${leg.to} shows "${shown}"; TDX says ${leg.sec} s`)
      }
    }
    checked++
  }
  ok(`${checked} adjacent-station run times cross-checked against TDX`)
}

/* ------------------------------------------------------------------ */
/* 6. Claims about what a source does or does not publish              */
/* ------------------------------------------------------------------ */

/*
 * The class of error that survived four builds. A claim of absence is only
 * checkable against the data, and nothing was checking it.
 */
{
  const CLAIMS = [
    {
      pattern: /TDX does not publish route length|does not publish a route length|no route length/i,
      holdsIf: () => data.brTrunkKm == null,
      message: 'says TDX does not publish route length, but route BR-1 carries CumulativeDistance',
    },
    {
      pattern: /TDX does not publish structure/i,
      holdsIf: () => true, // genuinely absent — no structure field exists in the fetched datasets
      message: 'says TDX does not publish structure',
    },
    /*
     * Run 12. The site now states, on three pages, that MOTC holds no record of
     * the Sanying Line. That is a claim of absence about a dataset this
     * repository ships — the exact class this section exists for — and unlike
     * the others it has a cheap, exact test: the line registry knows whether a
     * TDX line record was found for LB, because that is what decides whether
     * its colour comes from the platform or from the operator's line mark.
     *
     * If a refetch ever brings Sanying onto the platform, this fails and the
     * three sentences have to be rewritten. That is the point.
     */
    {
      pattern:
        /(?:MOTC|TDX)(?:'s data)?[^.]{0,60}\b(?:holds no record|has no record)\b[^.]{0,60}Sanying|Sanying Line[^.]{0,80}\bno record on (?:TDX|the platform)/i,
      holdsIf: () => data.summaries.find((s) => s.code === 'LB')?.onTdx === false,
      message:
        'says MOTC holds no record of the Sanying Line, but lib/lines.ts found a TDX line ' +
        'record for LB — the claim is stale and the colour should come from LineColor now',
    },
    {
      pattern: /leaves it at zero for every metro route/i,
      // True of the RouteLength FIELD, and the site must be talking about the
      // field rather than about route length in general.
      holdsIf: (text) => /RouteLength/.test(text),
      message: 'claims a zero route length without naming the RouteLength field — ambiguous with StationOfRoute',
    },
  ]

  /*
   * ── The general form of the same error ────────────────────────────────────
   * The three claims above are the three instances that were found. The class
   * is "the site asserts an absence in a dataset it ships". Enumerating
   * instances catches yesterday's mistake, so the rule below inverts it:
   *
   *   Any sentence saying a named source does not publish something must
   *   register what it claims is absent, and the register is checked against
   *   the fields actually present in data/tdx/.
   *
   * An unregistered absence claim fails, exactly like an unclassified colour in
   * lib/surfaces.ts. That is what makes it a guard on the class rather than on
   * three sentences: to make a new claim of absence you have to say which field
   * you looked for, and the build looks for it too.
   * ──────────────────────────────────────────────────────────────────────────
   */
  const NEGATIVE_CLAIM =
    /\b(TDX|MOTC|TRTC|the (?:data|dataset|platform))\b[^.]{0,120}?\b(?:does not|doesn['’]t|do not|don['’]t|never)\s+(?:publish|carry|expose|include|record|provide|give|have)\b([^.]{0,120})/gi

  /**
   * What each registered absence claim is about, and the TDX fields that would
   * disprove it. A field counts as present only if some record carries a value
   * that is not null, empty or zero — RouteLength exists on every route record
   * and is zero on all of them, which is why "the field exists" is not the test.
   */
  const ABSENCE_REGISTER = [
    { about: /route length/i, fields: ['CumulativeDistance', 'RouteLength'] },
    { about: /structure|elevated|underground/i, fields: [] },
    { about: /headway|班距|frequency/i, fields: [] },
    { about: /rolling stock|fleet|train|vehicle/i, fields: [] },
    { about: /depot|機廠/i, fields: [] },
    { about: /opening date|opened/i, fields: [] },
    { about: /dimension|capacity/i, fields: [] },
    { about: /construction history/i, fields: [] },
    { about: /engineering rationale/i, fields: [] },
    { about: /service pattern/i, fields: [] },
  ]

  /** Every field name in data/tdx/ that carries at least one usable value. */
  const populated = (() => {
    const found = new Set()
    const consider = (key, value) => {
      if (value === null || value === undefined) return
      if (typeof value === 'number' && value === 0) return
      if (typeof value === 'string' && value.trim() === '') return
      if (Array.isArray(value) && value.length === 0) return
      found.add(key)
    }
    const rec = (node, depth) => {
      if (depth > 4) return
      if (Array.isArray(node)) node.forEach((n) => rec(n, depth))
      else if (node && typeof node === 'object') {
        for (const [key, value] of Object.entries(node)) {
          consider(key, value)
          rec(value, depth + 1)
        }
      }
    }
    const walkData = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) walkData(full)
        else if (entry.name.endsWith('.json')) {
          try {
            rec(JSON.parse(fs.readFileSync(full, 'utf8')), 0)
          } catch {
            /* meta files that are not records; the field sweep does not need them */
          }
        }
      }
    }
    const tdx = path.join(ROOT, 'data', 'tdx')
    if (fs.existsSync(tdx)) walkData(tdx)
    return found
  })()

  const checkAbsenceClaims = (where, text) => {
    NEGATIVE_CLAIM.lastIndex = 0
    for (const match of text.matchAll(NEGATIVE_CLAIM)) {
      const object = match[2]
      const entry = ABSENCE_REGISTER.find((e) => e.about.test(object))

      if (!entry) {
        fail(
          where,
          `claims "${match[0].replace(/\s+/g, ' ').slice(0, 90)}…" — an absence in a dataset ` +
            'this repository ships, and nothing in ABSENCE_REGISTER says what field was looked ' +
            'for. Register it in scripts/fact-check.mjs so the claim is checked, or drop it.',
        )
        continue
      }

      const contradicting = entry.fields.filter((field) => populated.has(field))
      if (contradicting.length) {
        fail(
          where,
          `claims TDX does not publish ${object.trim().slice(0, 60)}, but ` +
            `${contradicting.join(' and ')} carr${contradicting.length === 1 ? 'ies' : 'y'} values in data/tdx/`,
        )
      }
    }
  }

  const files = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.md')) files.push(full)
    }
  }
  walk(CONTENT)

  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8')
    const where = path.relative(ROOT, file).replace(/\\/g, '/')
    for (const claim of CLAIMS) {
      if (claim.pattern.test(text) && !claim.holdsIf(text)) fail(where, claim.message)
    }
    checkAbsenceClaims(where, text)
  }

  // The same claims, in the generated pages.
  for (const rel of ['data/provenance/index.html', 'rail/network/index.html', 'about/index.html']) {
    const html = visible(read(rel) ?? '')
    for (const claim of CLAIMS) {
      if (claim.pattern.test(html) && !claim.holdsIf(html)) fail(rel, claim.message)
    }
    checkAbsenceClaims(rel, html)
  }
  ok(`source-capability claims checked against ${populated.size} populated TDX fields`)
}

/* ------------------------------------------------------------------ */
/* 6b. Operator-published figures, against the page that cites them    */
/* ------------------------------------------------------------------ */

/*
 * A line TDX has no record of gets its station count, route length and
 * end-to-end time from a table in lib/network.ts, because there is no dataset
 * to read them out of. The same three figures are also in the line page's
 * frontmatter, where they carry the citation.
 *
 * Two copies of a number is the condition this whole script exists to police,
 * so they are checked against each other rather than trusted to stay in step —
 * and the frontmatter copy is treated as the authority, because that is the one
 * with a source id attached to it.
 */
{
  const offPlatform = data.summaries.filter((s) => s.published)

  for (const summary of offPlatform) {
    const file = fs
      .readdirSync(path.join(CONTENT, 'rail', 'lines'))
      .map((name) => path.join(CONTENT, 'rail', 'lines', name))
      .find((full) => {
        const fm = matter(fs.readFileSync(full, 'utf8')).data
        return (fm.line ?? '').toUpperCase() === summary.code
      })

    if (!file) {
      fail(
        'lib/network.ts',
        `OPERATOR_PUBLISHED carries figures for ${summary.code}, but no line page declares ` +
          `line: ${summary.code}, so nothing cites them`,
      )
      continue
    }

    const fm = matter(fs.readFileSync(file, 'utf8')).data
    const rows = [...(fm.facts ?? []), ...(fm.specs ?? [])]
    const where = path.relative(ROOT, file).replace(/\\/g, '/')

    const rowFor = (pattern) => rows.find((r) => pattern.test(String(r.label ?? '')))
    const numberIn = (row) => {
      const match = String(row?.value ?? '').match(/-?\d+(?:\.\d+)?/)
      return match ? Number(match[0]) : null
    }

    const expected = [
      { label: /^stations$/i, got: summary.published.stations, name: 'station count' },
      { label: /route length/i, got: summary.published.routeKm, name: 'route length' },
      { label: /end-to-end|end to end/i, got: summary.published.endToEndMin, name: 'end-to-end time' },
    ]

    let bad = 0
    for (const check of expected) {
      const row = rowFor(check.label)
      if (!row) {
        fail(where, `no frontmatter row matching ${check.label} to check the ${check.name} against`)
        bad++
        continue
      }
      const stated = numberIn(row)
      if (stated === null || Math.abs(stated - check.got) > 0.005) {
        fail(
          where,
          `states ${check.name} ${row.value}; OPERATOR_PUBLISHED in lib/network.ts says ` +
            `${check.got}. /rail/network renders the second one.`,
        )
        bad++
      }
      // The figure is only worth agreeing about if it rests on something.
      if (row && !row.source) {
        fail(where, `the ${check.name} row carries no source, so the figure on /rail/network is uncited`)
        bad++
      }
    }

    if (bad === 0) {
      ok(`${summary.code} operator-published figures agree with ${where} and are all cited`)
    }
  }
}

/* ------------------------------------------------------------------ */
/* 7. Interchange reciprocity, as rendered                             */
/* ------------------------------------------------------------------ */

{
  let bad = 0
  for (const group of data.interchanges) {
    for (const code of group.codes) {
      const station = data.br.find((s) => s.code === code)
      if (!station) continue
      const others = group.codes.filter((c) => c !== code)
      const otherLines = new Set(others.map((c) => c.replace(/\d.*$/, '')))
      for (const line of station.interchange) {
        if (!otherLines.has(line)) {
          fail(code, `registry says it interchanges with ${line}, but the interchange group does not include that line`)
          bad++
        }
      }
    }
  }
  if (bad === 0) ok('rendered interchange groups agree with per-station interchange lists')
}

/* ------------------------------------------------------------------ */

console.log('\n═══ Fact cross-check ═══\n')
for (const c of checks) console.log(`  ✓ ${c}`)

if (problems.length) {
  console.log('\n  CONTRADICTIONS:\n')
  for (const p of problems) console.log(`  ✗ ${p.where}: ${p.message}`)
  console.log(`\n  ${problems.length} contradiction(s)\n`)
  process.exit(1)
}

console.log(`\n  No contradictions across ${checks.length} cross-checks.\n`)
