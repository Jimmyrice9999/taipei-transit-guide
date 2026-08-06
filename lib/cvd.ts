/**
 * Colour-vision-deficiency simulation and perceptual difference.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * THE METHODOLOGICAL POINT THIS MODULE EXISTS TO GET RIGHT
 *
 * A previous run simulated dichromacy, then computed WCAG contrast on the
 * simulated colours, and reported six badge "failures". That is the wrong
 * measurement, and W3C says so directly. From Understanding SC 1.4.3:
 *
 *   "contrast is calculated in such a way that color (hue) is not a key factor"
 *   "Requiring good luminance contrast accommodates this by requiring contrast
 *    that is independent of color perception."
 *   "The 4.5:1 ratio … account[s] for the loss in contrast that results from
 *    moderately low visual acuity, congenital or acquired color deficiencies…"
 *
 * So the 4.5 threshold already prices in colour deficiency, and the ratio is
 * defined on the authored colours, not on a simulated rendering. Simulating and
 * then re-measuring double-counts the same allowance.
 *
 * It is also invalid on its own terms. Neither Viénot (1999) nor Brettel (1997)
 * is luminance-preserving — both project stimuli onto a reduced surface in LMS,
 * which is a lossy operation chosen to model *hue confusion*, not brightness.
 * Under protanopia the L cone is removed, and since L dominates the luminous
 * efficiency function, simulated luminance drops for reds by construction. That
 * drop is a property of the transform, not a report about a person: dichromats
 * have broadly normal luminance discrimination.
 *
 * THEREFORE: contrast is measured on authored colours only (lib/color.ts).
 * This module answers the different, real question — can two LINE COLOURS be
 * told apart — and answers it with a perceptual difference metric, which is
 * what that question actually calls for.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Sources:
 *   Brettel, Viénot & Mollon (1997), JOSA A 14, 2647–2655 — two-plane model.
 *   Viénot, Brettel & Mollon (1999), Color Res. Appl. 24(4), 243–252 — single
 *     matrix simplification for protan/deutan.
 *   Sharma, Wu & Dalal (2005), Color Res. Appl. 30(1) — CIEDE2000 test data,
 *     used below to verify this implementation rather than trust it.
 *   W3C, Understanding SC 1.4.3 Contrast (Minimum).
 */

export type Deficiency = 'protanopia' | 'deuteranopia' | 'tritanopia'
export type RGB = [number, number, number]

/* ------------------------------------------------------------------ */
/* sRGB plumbing                                                       */
/* ------------------------------------------------------------------ */

export const hexToRgb = (hex: string): RGB =>
  [0, 2, 4].map((i) => parseInt(hex.replace('#', '').slice(i, i + 2), 16)) as RGB

export const rgbToHex = (rgb: RGB): string =>
  '#' +
  rgb
    .map((c) => Math.round(Math.max(0, Math.min(255, c))).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()

const toLinear = (c: number) => {
  const s = c / 255
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
}

const fromLinear = (c: number) => {
  const v = c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055
  return v * 255
}

const apply = (m: number[][], v: RGB): RGB =>
  m.map((row) => row[0] * v[0] + row[1] * v[1] + row[2] * v[2]) as RGB

/* ------------------------------------------------------------------ */
/* Simulation — Brettel two-plane, in linear RGB                       */
/* ------------------------------------------------------------------ */

/*
 * Brettel's construction rather than Viénot's single matrix.
 *
 * Viénot 1999 collapses the two half-planes into one, which is a good
 * approximation for protan and deutan and an acknowledged poor one for tritan.
 * Since this site has to answer for all three, the two-plane form is the honest
 * choice; for protan/deutan the two agree closely anyway.
 *
 * These are the standard sRGB-space projection matrices for the Brettel model,
 * one pair of half-plane matrices per deficiency, with the separation plane
 * given by the normal `n` applied to linear RGB.
 */
const BRETTEL: Record<
  Deficiency,
  { plane1: number[][]; plane2: number[][]; normal: RGB }
> = {
  protanopia: {
    plane1: [
      [0.14980, 1.19548, -0.34528],
      [0.10764, 0.84864, 0.04372],
      [0.00384, -0.00540, 1.00156],
    ],
    plane2: [
      [0.14930, 1.04211, -0.19143],
      [0.10776, 0.95990, -0.06765],
      [0.00401, -0.00248, 0.99847],
    ],
    normal: [0.00048, 0.00393, -0.00441],
  },
  deuteranopia: {
    plane1: [
      [0.36477, 0.86381, -0.22858],
      [0.26294, 0.64245, 0.09462],
      [-0.02006, 0.02728, 0.99278],
    ],
    plane2: [
      [0.37298, 0.88166, -0.25464],
      [0.25954, 0.63506, 0.10540],
      [-0.01980, 0.02784, 0.99196],
    ],
    normal: [-0.00281, -0.00611, 0.00892],
  },
  tritanopia: {
    plane1: [
      [1.01277, 0.13548, -0.14826],
      [-0.01243, 0.86812, 0.14431],
      [0.07589, 0.80500, 0.11911],
    ],
    plane2: [
      [0.93678, 0.18979, -0.12657],
      [0.06154, 0.81526, 0.12320],
      [-0.37562, 1.12767, 0.24796],
    ],
    normal: [0.03901, -0.02788, -0.01113],
  },
}

/** A dichromat's confusion applied to one colour. */
export function simulate(hex: string, deficiency: Deficiency): string {
  const linear = hexToRgb(hex).map(toLinear) as RGB
  const { plane1, plane2, normal } = BRETTEL[deficiency]
  const side = linear[0] * normal[0] + linear[1] * normal[1] + linear[2] * normal[2]
  const projected = apply(side >= 0 ? plane1 : plane2, linear)
  return rgbToHex(projected.map(fromLinear) as RGB)
}

/* ------------------------------------------------------------------ */
/* CIELAB and CIEDE2000                                                */
/* ------------------------------------------------------------------ */

export function rgbToLab(hex: string): [number, number, number] {
  const [r, g, b] = hexToRgb(hex).map(toLinear)
  // sRGB → XYZ (D65), normalised to the D65 white point.
  let x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) / 0.95047
  let y = r * 0.2126729 + g * 0.7151522 + b * 0.072175
  let z = (r * 0.0193339 + g * 0.119192 + b * 0.9503041) / 1.08883

  const f = (t: number) => (t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27) * t / 116 + 16 / 116)
  ;[x, y, z] = [f(x), f(y), f(z)]

  return [116 * y - 16, 500 * (x - y), 200 * (y - z)]
}

/** Straight Euclidean distance in CIELAB. Reported as a comparator only. */
export function deltaE76(a: string, b: string): number {
  const [l1, a1, b1] = rgbToLab(a)
  const [l2, a2, b2] = rgbToLab(b)
  return Math.hypot(l1 - l2, a1 - a2, b1 - b2)
}

const deg = (r: number) => (r * 180) / Math.PI
const rad = (d: number) => (d * Math.PI) / 180

/** CIEDE2000 on two CIELAB triples. Verified against Sharma et al. (2005). */
export function ciede2000(
  [L1, a1, b1]: [number, number, number],
  [L2, a2, b2]: [number, number, number],
): number {
  const kL = 1
  const kC = 1
  const kH = 1

  const C1 = Math.hypot(a1, b1)
  const C2 = Math.hypot(a2, b2)
  const Cbar = (C1 + C2) / 2

  const G = 0.5 * (1 - Math.sqrt(Cbar ** 7 / (Cbar ** 7 + 25 ** 7)))
  const a1p = (1 + G) * a1
  const a2p = (1 + G) * a2

  const C1p = Math.hypot(a1p, b1)
  const C2p = Math.hypot(a2p, b2)

  const h1p = C1p === 0 ? 0 : ((deg(Math.atan2(b1, a1p)) % 360) + 360) % 360
  const h2p = C2p === 0 ? 0 : ((deg(Math.atan2(b2, a2p)) % 360) + 360) % 360

  const dLp = L2 - L1
  const dCp = C2p - C1p

  let dhp: number
  if (C1p * C2p === 0) dhp = 0
  else if (Math.abs(h2p - h1p) <= 180) dhp = h2p - h1p
  else if (h2p - h1p > 180) dhp = h2p - h1p - 360
  else dhp = h2p - h1p + 360

  const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin(rad(dhp) / 2)

  const Lbarp = (L1 + L2) / 2
  const Cbarp = (C1p + C2p) / 2

  let hbarp: number
  if (C1p * C2p === 0) hbarp = h1p + h2p
  else if (Math.abs(h1p - h2p) <= 180) hbarp = (h1p + h2p) / 2
  else if (h1p + h2p < 360) hbarp = (h1p + h2p + 360) / 2
  else hbarp = (h1p + h2p - 360) / 2

  const T =
    1 -
    0.17 * Math.cos(rad(hbarp - 30)) +
    0.24 * Math.cos(rad(2 * hbarp)) +
    0.32 * Math.cos(rad(3 * hbarp + 6)) -
    0.2 * Math.cos(rad(4 * hbarp - 63))

  const dTheta = 30 * Math.exp(-(((hbarp - 275) / 25) ** 2))
  const RC = 2 * Math.sqrt(Cbarp ** 7 / (Cbarp ** 7 + 25 ** 7))
  const SL = 1 + (0.015 * (Lbarp - 50) ** 2) / Math.sqrt(20 + (Lbarp - 50) ** 2)
  const SC = 1 + 0.045 * Cbarp
  const SH = 1 + 0.015 * Cbarp * T
  const RT = -Math.sin(rad(2 * dTheta)) * RC

  return Math.sqrt(
    (dLp / (kL * SL)) ** 2 +
      (dCp / (kC * SC)) ** 2 +
      (dHp / (kH * SH)) ** 2 +
      RT * (dCp / (kC * SC)) * (dHp / (kH * SH)),
  )
}

/** CIEDE2000 between two sRGB hex colours. */
export const deltaE00 = (a: string, b: string): number => ciede2000(rgbToLab(a), rgbToLab(b))

/* ------------------------------------------------------------------ */
/* Verification vectors                                                */
/* ------------------------------------------------------------------ */

/**
 * Sharma, Wu & Dalal (2005) CIEDE2000 test data.
 *
 * These exist because CIEDE2000 has three discontinuity traps — the hue-mean
 * wraparound, the C′=0 case and the RT rotation term — and a wrong
 * implementation passes casual inspection while being quietly off by a factor
 * that would change every conclusion drawn from it. Anything asserting colour
 * differences should prove its arithmetic before reporting numbers.
 */
export const CIEDE2000_VECTORS: {
  lab1: [number, number, number]
  lab2: [number, number, number]
  expected: number
}[] = [
  { lab1: [50, 2.6772, -79.7751], lab2: [50, 0, -82.7485], expected: 2.0425 },
  { lab1: [50, 3.1571, -77.2803], lab2: [50, 0, -82.7485], expected: 2.8615 },
  { lab1: [50, 2.8361, -74.02], lab2: [50, 0, -82.7485], expected: 3.4412 },
  { lab1: [50, -1.3802, -84.2814], lab2: [50, 0, -82.7485], expected: 1.0 },
  { lab1: [50, -1.1848, -84.8006], lab2: [50, 0, -82.7485], expected: 1.0 },
  { lab1: [50, -0.9009, -85.5211], lab2: [50, 0, -82.7485], expected: 1.0 },
  { lab1: [50, 0, 0], lab2: [50, -1, 2], expected: 2.3669 },
  { lab1: [50, -1, 2], lab2: [50, 0, 0], expected: 2.3669 },
  { lab1: [50, 2.49, -0.001], lab2: [50, -2.49, 0.0009], expected: 7.1792 },
  { lab1: [60.2574, -34.0099, 36.2677], lab2: [60.4626, -34.1751, 39.4387], expected: 1.2644 },
  { lab1: [63.0109, -31.0961, -5.8663], lab2: [62.8187, -29.7946, -4.0864], expected: 1.263 },
  { lab1: [22.7233, 20.0904, -46.694], lab2: [23.0331, 14.973, -42.5619], expected: 2.0373 },
  { lab1: [2.0776, 0.0795, -1.135], lab2: [0.9033, -0.0636, -0.5514], expected: 0.9082 },
]

/**
 * Neutrals lie on the achromatic axis, which every dichromat shares with a
 * trichromat, so a correct simulation must leave them alone. A simulation that
 * shifts white is broken in a way that would silently bias every pair.
 */
export const NEUTRAL_INVARIANTS = ['#FFFFFF', '#808080', '#000000']
