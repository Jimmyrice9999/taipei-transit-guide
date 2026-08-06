/**
 * Fetches static metro data from Taiwan MOTC's TDX platform and writes it to
 * data/tdx/<OPERATOR>/ for committing.
 *
 * Run:  npm run tdx              fetch and write
 *       npm run tdx -- --probe   report what exists, write nothing
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS DOES NOT RUN AT BUILD TIME, AND MUST NOT.
 *
 * GitHub Actions has no TDX credentials, and a reference site should not fail to
 * deploy because someone else's API is down. The output is committed JSON;
 * `npm run stations` turns it into TypeScript. Re-run this by hand, rarely —
 * station lists change when stations open.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Static endpoints only. No real-time data: this is a reference site, not a
 * departure board.
 *
 * Auth is OIDC client credentials against the TDXConnect Keycloak realm. Both
 * client_secret_post and client_secret_basic are advertised by the realm's
 * discovery document; this uses post, as TDX's own guide documents. The token
 * endpoint is rate-limited to 20 calls per minute per IP, so this fetches
 * exactly one token per run and paces the data calls behind it.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'data', 'tdx')

const TOKEN_URL =
  'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token'
const API_BASE = 'https://tdx.transportdata.tw/api/basic'

/**
 * The three operators whose lines appear on this site.
 *
 * Taipei's network is not run by one company, and pretending otherwise would
 * misdescribe it: the Circular Line is New Taipei Metro and the Airport MRT is
 * Taoyuan Metro. They publish through the same platform under their own codes,
 * and they do not all publish the same datasets — which is itself worth
 * recording, so meta.json keeps the per-operator result.
 */
const OPERATORS = [
  { code: 'TRTC', name: 'Taipei Rapid Transit Corporation' },
  { code: 'NTMC', name: 'New Taipei Metro' },
  { code: 'TYMC', name: 'Taoyuan Metro' },
]

/**
 * What we pull per operator, and the key each record is sorted by so diffs stay
 * readable. `required` means a 404 fails the run rather than being noted.
 */
const DATASETS = [
  {
    name: 'station',
    endpoint: 'Station',
    sortBy: 'StationID',
    required: true,
    note: 'station codes, Chinese/English/Japanese/Korean names, coordinates, address',
  },
  {
    name: 'station-of-route',
    endpoint: 'StationOfRoute',
    sortBy: 'RouteID',
    required: true,
    note: 'station sequence per route — what orders BR01 to BR24',
  },
  {
    name: 'line',
    endpoint: 'Line',
    sortBy: 'LineID',
    required: true,
    note: 'line records, including the official LineColor',
  },
  {
    name: 'route',
    endpoint: 'Route',
    sortBy: 'RouteID',
    required: false,
    note: 'route records, termini and end-to-end travel time',
  },
  {
    name: 'shape',
    endpoint: 'Shape',
    sortBy: 'LineNo',
    required: false,
    note: 'route geometry as WKT — the surveyed alignment the maps are drawn from',
  },
  {
    name: 'line-transfer',
    endpoint: 'LineTransfer',
    sortBy: 'FromStationID',
    required: false,
    note: 'interchange pairs, better than inferring transfers from station names',
  },
  {
    name: 's2s-travel-time',
    endpoint: 'S2STravelTime',
    sortBy: 'RouteID',
    required: false,
    note: 'run time and dwell between adjacent stations, in seconds',
  },
  {
    name: 'first-last-timetable',
    endpoint: 'FirstLastTimetable',
    sortBy: 'StationID',
    required: false,
    note: 'first and last train per station and direction',
  },

  // StationExit and StationTimeTable are deliberately not fetched. Exit
  // numbering is unused; full departure timetables are large, and schedule data
  // is exactly what goes quietly wrong six months later. First and last trains
  // are the durable part of a timetable, and those come from the dataset above.
]

/** Pause between data requests. TDX rate-limits per IP and returns 429. */
const REQUEST_DELAY_MS = 1500

/** How many times to retry a 429 before giving up. */
const MAX_RETRIES = 4

/* ------------------------------------------------------------------ */
/* Credentials                                                         */
/* ------------------------------------------------------------------ */

function loadEnv() {
  const file = path.join(ROOT, '.env.local')
  const env = { ...process.env }

  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8').replace(/^﻿/, '')
    for (const line of text.split(/\r?\n/)) {
      const m = line.match(/^\s*(?:export\s+)?([A-Za-z_0-9]+)\s*=\s*(.*?)\s*$/)
      if (m && !line.trimStart().startsWith('#')) {
        env[m[1]] = m[2].replace(/^["']|["']$/g, '')
      }
    }
  }
  return env
}

async function getToken(env) {
  const id = env.TDX_CLIENT_ID
  const secret = env.TDX_CLIENT_SECRET

  if (!id || !secret) {
    throw new Error(
      'TDX_CLIENT_ID and TDX_CLIENT_SECRET must be set in .env.local (which is gitignored).',
    )
  }

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: id,
      client_secret: secret,
    }),
  })

  const body = await res.text()

  if (!res.ok) {
    let hint = ''
    try {
      if (JSON.parse(body).error === 'invalid_client') {
        hint =
          '\n\n  TDX rejected the credentials themselves — the request was well formed.\n' +
          '  Check the key at https://tdx.transportdata.tw/user/dataservice/key :\n' +
          '    · the API key may have been revoked or regenerated\n' +
          '    · a new account can need its data service activating before the key works'
      }
    } catch {
      /* not JSON; fall through to the raw body */
    }
    throw new Error(
      `Token request failed: ${res.status} ${res.statusText}\n  ${body.slice(0, 300)}${hint}`,
    )
  }

  return JSON.parse(body)
}

/* ------------------------------------------------------------------ */
/* Fetching                                                            */
/* ------------------------------------------------------------------ */

const PAGE_SIZE = 1000
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/** One request, retrying on 429 with backoff and honouring Retry-After. */
async function request(token, url) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${token.access_token}`,
        'accept-encoding': 'gzip',
      },
    })

    if (res.status !== 429) return res

    if (attempt >= MAX_RETRIES) {
      throw new Error(
        `rate limited (429) after ${MAX_RETRIES} retries.\n` +
          `  Raise REQUEST_DELAY_MS in scripts/fetch-tdx.mjs, or wait a minute and re-run.`,
      )
    }

    const retryAfter = Number(res.headers.get('retry-after'))
    const wait =
      Number.isFinite(retryAfter) && retryAfter > 0
        ? retryAfter * 1000
        : REQUEST_DELAY_MS * 2 ** (attempt + 1)

    process.stdout.write(`429, waiting ${Math.round(wait / 1000)}s… `)
    await sleep(wait)
  }
}

async function fetchAll(token, operator, dataset) {
  const rows = []

  for (let skip = 0; ; skip += PAGE_SIZE) {
    const url =
      `${API_BASE}/v2/Rail/Metro/${dataset.endpoint}/${operator}` +
      `?%24format=JSON&%24top=${PAGE_SIZE}&%24skip=${skip}`

    const res = await request(token, url)

    if (res.status === 404) return { status: 404, rows: null }
    if (!res.ok) {
      throw new Error(
        `${operator}/${dataset.name} failed: ${res.status} ${res.statusText}\n  ${(await res.text()).slice(0, 200)}`,
      )
    }

    const body = await res.json()
    const page = Array.isArray(body)
      ? body
      : (body.Stations ?? body.Lines ?? body.Routes ?? body.Shapes ?? body.data ?? [])

    rows.push(...page)
    if (page.length < PAGE_SIZE) break
    await sleep(REQUEST_DELAY_MS)
  }

  return { status: 200, rows }
}

/* ------------------------------------------------------------------ */
/* Diff-stable output                                                  */
/* ------------------------------------------------------------------ */

/** Sorts keys recursively so an unchanged refetch produces an identical file. */
function stable(value) {
  if (Array.isArray(value)) return value.map(stable)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stable(value[key])]),
    )
  }
  return value
}

function writeJson(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, JSON.stringify(stable(value), null, 2) + '\n')
}

/* ------------------------------------------------------------------ */

async function main() {
  const probeOnly = process.argv.includes('--probe')
  const env = loadEnv()

  console.log('tdx: requesting access token…')
  const token = await getToken(env)
  console.log(`tdx: token OK, valid for ${token.expires_in}s\n`)

  const meta = {
    fetchedAt: new Date().toISOString(),
    source: 'Taiwan MOTC TDX (Transport Data eXchange)',
    sourceUrl: 'https://tdx.transportdata.tw/',
    licence: 'Government open data — see https://data.gov.tw/licenses',
    apiBase: API_BASE,
    operators: {},
    datasetNotes: Object.fromEntries(DATASETS.map((d) => [d.name, d.note])),
  }

  fs.mkdirSync(OUT_DIR, { recursive: true })

  try {
    for (const operator of OPERATORS) {
      console.log(`${operator.code} — ${operator.name}`)
      meta.operators[operator.code] = { name: operator.name, datasets: {} }

      for (const dataset of DATASETS) {
        process.stdout.write(`  ${dataset.name.padEnd(22)} `)

        const { status, rows } = await fetchAll(token, operator.code, dataset)

        if (status === 404) {
          console.log('not published')
          if (dataset.required) {
            throw new Error(
              `Required dataset ${operator.code}/${dataset.name} returned 404.`,
            )
          }
          meta.operators[operator.code].datasets[dataset.name] = { status: 404, records: 0 }
          await sleep(REQUEST_DELAY_MS)
          continue
        }

        const sorted = [...rows].sort((a, b) =>
          String(a?.[dataset.sortBy] ?? '').localeCompare(String(b?.[dataset.sortBy] ?? '')),
        )

        // Record the fields actually received, and the source's own update
        // stamp, so staleness is reported per dataset rather than guessed.
        const fields = sorted[0] ? Object.keys(sorted[0]).sort() : []
        const srcUpdated = sorted
          .map((r) => r?.SrcUpdateTime)
          .filter((t) => typeof t === 'string')
          .sort()

        meta.operators[operator.code].datasets[dataset.name] = {
          status: 200,
          records: sorted.length,
          fields,
          srcUpdatedOldest: srcUpdated[0]?.slice(0, 10) ?? null,
          srcUpdatedNewest: srcUpdated[srcUpdated.length - 1]?.slice(0, 10) ?? null,
        }

        console.log(`${String(sorted.length).padStart(4)} records`)

        if (!probeOnly) {
          writeJson(path.join(OUT_DIR, operator.code, `${dataset.name}.json`), sorted)
        }

        await sleep(REQUEST_DELAY_MS)
      }
      console.log('')
    }
  } finally {
    // Written even on a partial failure: partial data with an honest record of
    // what happened beats partial data with no record at all.
    if (!probeOnly) writeJson(path.join(OUT_DIR, 'meta.json'), meta)
  }

  if (probeOnly) {
    console.log('tdx: probe only, nothing written.')
    return
  }

  console.log('tdx: done. Next — npm run stations, then npm run fonts.')
  console.log('tdx: commit data/tdx/ so the build never depends on the API.')
}

main().catch((err) => {
  console.error(`\ntdx failed: ${err.message}\n`)
  process.exit(1)
})
