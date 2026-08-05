/**
 * Generates app/favicon.ico from the same mark as app/icon.svg.
 *
 * Modern browsers use the SVG icon. This exists so the legacy /favicon.ico
 * probe finds a real file instead of 404ing on every page load.
 *
 * Run: npm run favicon
 *
 * An .ico may contain a PNG directly, so this writes a 32x32 RGBA PNG and wraps
 * it in a one-entry icon directory. Encoded by hand to avoid pulling in an image
 * library for a single 32-pixel square.
 */

import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SIZE = 32

const PANEL = [0x0c, 0x0d, 0x0f]
const AMBER = [0xff, 0xb0, 0x00]
const CORNER_RADIUS = 5
const DOT_RADIUS = 2.6

/** The mark: a fragment of the destination blind, lit dots forming a T. */
const LIT = [
  [8, 9],
  [16, 9],
  [24, 9],
  [16, 16],
  [16, 23],
]
const UNLIT = [
  [8, 16],
  [24, 16],
  [8, 23],
  [24, 23],
]

/** Distance from a rounded-rectangle edge, for antialiased corners. */
function roundedRectAlpha(x, y) {
  const r = CORNER_RADIUS
  const cx = Math.min(Math.max(x, r), SIZE - r)
  const cy = Math.min(Math.max(y, r), SIZE - r)
  const d = Math.hypot(x - cx, y - cy)
  return Math.max(0, Math.min(1, r - d + 0.5))
}

function dotCoverage(x, y, dots) {
  let best = 0
  for (const [dx, dy] of dots) {
    const d = Math.hypot(x - dx, y - dy)
    best = Math.max(best, Math.max(0, Math.min(1, DOT_RADIUS - d + 0.5)))
  }
  return best
}

const mix = (a, b, t) => a.map((c, i) => Math.round(c + (b[i] - c) * t))

function renderPixels() {
  // RGBA, one row at a time, each row prefixed with a PNG filter byte (0 = none).
  const raw = Buffer.alloc(SIZE * (SIZE * 4 + 1))
  let p = 0

  for (let y = 0; y < SIZE; y++) {
    raw[p++] = 0
    for (let x = 0; x < SIZE; x++) {
      const px = x + 0.5
      const py = y + 0.5

      let rgb = PANEL
      rgb = mix(rgb, mix(PANEL, AMBER, 0.16), dotCoverage(px, py, UNLIT))
      rgb = mix(rgb, AMBER, dotCoverage(px, py, LIT))

      const alpha = Math.round(roundedRectAlpha(px, py) * 255)
      raw[p++] = rgb[0]
      raw[p++] = rgb[1]
      raw[p++] = rgb[2]
      raw[p++] = alpha
    }
  }
  return raw
}

/* ---------- minimal PNG encoder ---------- */

const CRC_TABLE = (() => {
  const table = new Int32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c
  }
  return table
})()

function crc32(buf) {
  let c = 0xffffffff
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([length, body, crc])
}

function encodePng(raw) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(SIZE, 0)
  ihdr.writeUInt32BE(SIZE, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // colour type: RGBA
  ihdr[10] = 0 // deflate
  ihdr[11] = 0 // adaptive filtering
  ihdr[12] = 0 // no interlace

  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/* ---------- ICO container ---------- */

function encodeIco(png) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type 1 = icon
  header.writeUInt16LE(1, 4) // one image

  const entry = Buffer.alloc(16)
  entry[0] = SIZE === 256 ? 0 : SIZE // width  (0 means 256)
  entry[1] = SIZE === 256 ? 0 : SIZE // height
  entry[2] = 0 // palette size
  entry[3] = 0 // reserved
  entry.writeUInt16LE(1, 4) // colour planes
  entry.writeUInt16LE(32, 6) // bits per pixel
  entry.writeUInt32BE(0, 8)
  entry.writeUInt32LE(png.length, 8)
  entry.writeUInt32LE(header.length + entry.length, 12)

  return Buffer.concat([header, entry, png])
}

const png = encodePng(renderPixels())
const ico = encodeIco(png)
const out = path.join(ROOT, 'app', 'favicon.ico')
fs.writeFileSync(out, ico)

console.log(`favicon: wrote app/favicon.ico — ${SIZE}x${SIZE}, ${ico.length} bytes`)
