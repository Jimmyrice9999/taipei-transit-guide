/**
 * Colour maths used to derive text-safe variants of the line colours.
 *
 * Line colours are chosen to be told apart on a map, not to carry type. This
 * module turns one official colour into the variants the site needs, so that
 * correcting an official value automatically corrects everything derived from
 * it. Nothing here is hand-tuned.
 */

export const WHITE = '#FFFFFF'
export const NEAR_BLACK = '#14171A'

/** WCAG AA for normal-size text. */
export const AA = 4.5

/** WCAG AA for non-text UI (a rule or bar that must have a defined edge). */
export const AA_NON_TEXT = 3

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number]
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((c) => Math.round(Math.max(0, Math.min(255, c))).toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  )
}

/** WCAG relative luminance. */
export function luminance(hex: string): number {
  return hexToRgb(hex)
    .map((c) => c / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((acc, c, i) => acc + c * [0.2126, 0.7152, 0.0722][i], 0)
}

/** WCAG contrast ratio, 1–21. */
export function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((p, q) => q - p)
  return (hi + 0.05) / (lo + 0.05)
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min
  const l = (max + min) / 2
  if (d === 0) return [0, 0, l]
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h: number
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return [h, s, l]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  if (s === 0) {
    const v = l * 255
    return [v, v, v]
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const channel = (t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  return [channel(h + 1 / 3) * 255, channel(h) * 255, channel(h - 1 / 3) * 255]
}

/**
 * Walk lightness down in 1% steps until `test` passes, holding hue and
 * saturation so the result still reads as the same line colour.
 */
export function darkenUntil(hex: string, test: (candidate: string) => boolean): string {
  const [h, s, l0] = rgbToHsl(...hexToRgb(hex))
  for (let l = l0; l >= 0; l -= 0.01) {
    const candidate = rgbToHex(...hslToRgb(h, s, l))
    if (test(candidate)) return candidate
  }
  return '#000000'
}

/**
 * Pick the text colour for a badge: keep the official colour as the fill and
 * choose whichever of white or near-black clears AA against it. Returns null if
 * neither does, in which case the caller must darken the fill.
 */
export function readableOn(background: string): string | null {
  if (contrast(WHITE, background) >= AA) return WHITE
  if (contrast(NEAR_BLACK, background) >= AA) return NEAR_BLACK
  return null
}
