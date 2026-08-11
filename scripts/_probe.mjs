/**
 * Read-only probe of TDX: which rail operators exist, and what lines each
 * publishes. Writes nothing. Answers "why is Sanying not on the network page".
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([A-Z_]+)=(.*)$/)
  if (m) process.env[m[1]] = m[2].trim()
}

const API = 'https://tdx.transportdata.tw/api/basic'

const token = await (async () => {
  const res = await fetch(
    'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
    {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.TDX_CLIENT_ID,
        client_secret: process.env.TDX_CLIENT_SECRET,
      }),
    },
  )
  const json = await res.json()
  if (!json.access_token) throw new Error('auth failed: ' + JSON.stringify(json).slice(0, 200))
  return json.access_token
})()

const get = async (url) => {
  const res = await fetch(url, { headers: { authorization: `Bearer ${token}` } })
  if (!res.ok) return { status: res.status, body: null }
  return { status: res.status, body: await res.json() }
}

console.log('── Rail/Metro network list ─────────────────────────────')
const nets = await get(`${API}/v2/Rail/Metro/Network?%24format=JSON`)
if (nets.body) {
  for (const n of nets.body) {
    console.log(
      `${(n.OperatorCode ?? n.OperatorID ?? '?').padEnd(14)} ${n.OperatorName?.Zh_tw ?? ''} ${n.OperatorName?.En ?? ''}`,
    )
  }
} else console.log('status', nets.status)

console.log('\n── Lines per candidate operator ────────────────────────')
for (const op of ['NTALRT', 'NTSYLRT', 'NTSYL', 'SYL', 'NTMCSY', 'NTLRT']) {
  const r = await get(`${API}/v2/Rail/Metro/Line/${op}?%24format=JSON`)
  if (!r.body) {
    console.log(`${op.padEnd(10)} HTTP ${r.status}`)
    continue
  }
  const lines = r.body.map((l) => `${l.LineID}:${l.LineName?.Zh_tw ?? ''}(${l.LineColor ?? '—'})`)
  console.log(`${op.padEnd(10)} ${r.body.length} line(s)  ${lines.join('  ')}`)
  await new Promise((r) => setTimeout(r, 6000))
}
