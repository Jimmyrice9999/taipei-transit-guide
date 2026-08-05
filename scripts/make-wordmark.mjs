/**
 * Generates public/wordmark.svg — the site wordmark, set as a Taipei bus
 * destination blind.
 *
 * Run: npm run wordmark
 *
 * This was originally a React component rendering inline SVG. That put 700
 * <circle> elements into the HTML of every page — 39.6 KB, about 28% of each
 * page, on pages whose actual prose is under 3 KB, and duplicated again into
 * Next's client-navigation payloads. The mark never changes, so it is a static
 * file: one request, cached for the whole visit, nothing in the HTML.
 *
 * Latin only. Traditional Chinese needs a full 16x16 cell to stay legible, and
 * hand-encoding Han bitmaps risks shipping malformed characters.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

/** 5 wide, 7 tall, one string of bits per row. */
const GLYPHS = {
  A: '01110,10001,10001,11111,10001,10001,10001',
  B: '11110,10001,10001,11110,10001,10001,11110',
  C: '01110,10001,10000,10000,10000,10001,01110',
  D: '11100,10010,10001,10001,10001,10010,11100',
  E: '11111,10000,10000,11110,10000,10000,11111',
  F: '11111,10000,10000,11110,10000,10000,10000',
  G: '01110,10001,10000,10111,10001,10001,01111',
  H: '10001,10001,10001,11111,10001,10001,10001',
  I: '11111,00100,00100,00100,00100,00100,11111',
  J: '00111,00010,00010,00010,00010,10010,01100',
  K: '10001,10010,10100,11000,10100,10010,10001',
  L: '10000,10000,10000,10000,10000,10000,11111',
  M: '10001,11011,10101,10101,10001,10001,10001',
  N: '10001,11001,10101,10011,10001,10001,10001',
  O: '01110,10001,10001,10001,10001,10001,01110',
  P: '11110,10001,10001,11110,10000,10000,10000',
  Q: '01110,10001,10001,10001,10101,10010,01101',
  R: '11110,10001,10001,11110,10100,10010,10001',
  S: '01111,10000,10000,01110,00001,00001,11110',
  T: '11111,00100,00100,00100,00100,00100,00100',
  U: '10001,10001,10001,10001,10001,10001,01110',
  V: '10001,10001,10001,10001,10001,01010,00100',
  W: '10001,10001,10001,10101,10101,11011,10001',
  X: '10001,10001,01010,00100,01010,10001,10001',
  Y: '10001,10001,01010,00100,00100,00100,00100',
  Z: '11111,00001,00010,00100,01000,10000,11111',
  '0': '01110,10001,10011,10101,11001,10001,01110',
  '1': '00100,01100,00100,00100,00100,00100,01110',
  '2': '01110,10001,00001,00010,00100,01000,11111',
  '3': '11111,00010,00100,00010,00001,10001,01110',
  '4': '00010,00110,01010,10010,11111,00010,00010',
  '5': '11111,10000,11110,00001,00001,10001,01110',
  '6': '00110,01000,10000,11110,10001,10001,01110',
  '7': '11111,00001,00010,00100,01000,01000,01000',
  '8': '01110,10001,10001,01110,10001,10001,01110',
  '9': '01110,10001,10001,01111,00001,00010,01100',
  '-': '00000,00000,00000,11111,00000,00000,00000',
  ' ': '00000,00000,00000,00000,00000,00000,00000',
}

const GLYPH_W = 5
const GLYPH_H = 7
const GLYPH_GAP = 1

const TEXT = 'TAIPEI TRANSIT GUIDE'
const PITCH = 2 // px per dot cell
const PAD = 2 // panel padding, in dot cells

/** True LED amber on near-black, per docs/design-reference.md. */
const AMBER = '#FFB000'
const PANEL = '#0C0D0F'
const UNLIT = 'rgba(255,176,0,.13)'

const chars = [...TEXT.toUpperCase()]
const cols = chars.length * (GLYPH_W + GLYPH_GAP) - GLYPH_GAP
const width = cols + PAD * 2
const height = GLYPH_H + PAD * 2

/*
 * Lit and unlit dots are collected into two <g> elements so the fill colour is
 * stated twice rather than 700 times. Coordinates stay integers — every dot sits
 * on the grid — and the half-cell centring offset lives on the outer group.
 *
 * The radius is repeated on each circle rather than hoisted onto the group: `r`
 * only inherits as a CSS geometry property in SVG 2, which is not safe to rely
 * on. It costs nothing after compression, since the bytes are identical.
 */
const lit = []
const unlit = []

chars.forEach((char, i) => {
  const rows = (GLYPHS[char] ?? GLYPHS[' ']).split(',')
  const xOffset = i * (GLYPH_W + GLYPH_GAP) + PAD

  for (let y = 0; y < GLYPH_H; y++) {
    for (let x = 0; x < GLYPH_W; x++) {
      const dot = `<circle cx="${xOffset + x}" cy="${y + PAD}" r=".4"/>`
      ;(rows[y][x] === '1' ? lit : unlit).push(dot)
    }
  }
})

const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" ` +
  `width="${width * PITCH}" height="${height * PITCH}" role="img" aria-label="${TEXT}">` +
  `<title>${TEXT}</title>` +
  `<rect width="${width}" height="${height}" rx="1.5" fill="${PANEL}"/>` +
  `<g transform="translate(.5 .5)">` +
  `<g fill="${UNLIT}">${unlit.join('')}</g>` +
  `<g fill="${AMBER}">${lit.join('')}</g>` +
  `</g></svg>\n`

const out = path.join(ROOT, 'public', 'wordmark.svg')
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, svg)

console.log(`wordmark: ${width * PITCH}x${height * PITCH}px, ${lit.length} lit of ${lit.length + unlit.length} dots`)
console.log(`wordmark: wrote public/wordmark.svg — ${(svg.length / 1024).toFixed(1)} KB`)
console.log(`wordmark: if the text or pitch changes, update WORDMARK in app/layout.tsx to ${width * PITCH}x${height * PITCH}`)
