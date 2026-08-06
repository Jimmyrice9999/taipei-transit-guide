/**
 * Committed site imagery and its attribution.
 *
 * Every image under public/images/ has a sidecar JSON written by
 * scripts/fetch-commons.mjs at fetch time: photographer, licence, licence
 * URL, source page, pixel size, available widths. This module is the only
 * way pages get at images, which is what makes the attribution enforceable —
 * a component cannot render a photo without the sidecar, because the sidecar
 * IS the image record.
 *
 * CC BY and CC BY-SA make attribution and licence indication licence terms.
 * The site treats them as build requirements: tests/images.test.mts fails
 * the build on any sidecar with missing fields or a licence outside the
 * allowed set, and on any rendered <img> without dimensions.
 */

import fs from 'node:fs'
import path from 'node:path'

const IMAGES = path.join(process.cwd(), 'public', 'images')

/** Prefix for GitHub Pages subpath hosting; empty when served from the root. */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export type SiteImage = {
  /** Public URL base, e.g. /images/wenhu-line/hero — append -{width}.webp. */
  base: string
  /** Widths that exist on disk, descending. */
  widths: number[]
  /** Intrinsic size of the largest variant, for the img element. */
  width: number
  height: number
  /** Attribution, straight from the Commons record. */
  artist: string
  license: string
  licenseUrl: string | null
  /** The Commons file page — where attribution links to. */
  source: string
}

/** srcset string for the picture element. */
export function srcset(image: SiteImage): string {
  return image.widths
    .map((w) => `${BASE_PATH}${image.base}-${w}.webp ${w}w`)
    .join(', ')
}

export function src(image: SiteImage): string {
  const largest = Math.max(...image.widths)
  return `${BASE_PATH}${image.base}-${largest}.webp`
}

/**
 * The image for an id like `wenhu-line/hero` or `stations/br13`, or null.
 *
 * Null is a working state, not an error: a page whose image has not been
 * sourced yet renders its "photograph wanted" placeholder instead. The
 * placeholder says what should be shot; this returning null is what shows it.
 */
export function getImage(id: string): SiteImage | null {
  const sidecar = path.join(IMAGES, ...id.split('/')) + '.json'
  if (!fs.existsSync(sidecar)) return null
  const data = JSON.parse(fs.readFileSync(sidecar, 'utf8'))
  return {
    base: `/images/${id}`,
    widths: [...(data.widths ?? [])].sort((a, b) => b - a),
    width: data.width,
    height: data.height,
    artist: data.artist,
    license: data.license,
    licenseUrl: data.licenseUrl ?? null,
    source: data.source,
  }
}
