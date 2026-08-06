/**
 * Reads pixel dimensions out of an image file's header.
 *
 * Explicit width and height on every <img> is what stops the page jumping as
 * photographs load, and asking an author to type them by hand guarantees they
 * will eventually be wrong. Reading them costs a few bytes off the front of the
 * file at build time.
 *
 * JPEG, PNG and WebP — the three formats worth shooting for the web. Anything
 * else returns null and renders without dimensions rather than lying about them.
 */

import fs from 'node:fs'
import path from 'node:path'

export type ImageSize = { width: number; height: number }

function readPng(buffer: Buffer): ImageSize | null {
  // 8-byte signature, then an IHDR chunk whose first two fields are the size.
  if (buffer.length < 24) return null
  if (buffer.readUInt32BE(0) !== 0x89504e47) return null
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }
}

function readJpeg(buffer: Buffer): ImageSize | null {
  if (buffer.length < 4 || buffer.readUInt16BE(0) !== 0xffd8) return null

  let offset = 2
  while (offset < buffer.length - 9) {
    if (buffer[offset] !== 0xff) {
      offset++
      continue
    }
    const marker = buffer[offset + 1]

    // SOF0–SOF15 carry the frame dimensions; DHT/DAC/RST are not frames.
    const isFrame =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc

    if (isFrame) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) }
    }

    const length = buffer.readUInt16BE(offset + 2)
    if (length < 2) return null
    offset += 2 + length
  }
  return null
}

function readWebp(buffer: Buffer): ImageSize | null {
  if (buffer.length < 30) return null
  if (buffer.toString('ascii', 0, 4) !== 'RIFF') return null
  if (buffer.toString('ascii', 8, 12) !== 'WEBP') return null

  const format = buffer.toString('ascii', 12, 16)

  if (format === 'VP8 ') {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    }
  }
  if (format === 'VP8L') {
    const bits = buffer.readUInt32LE(21)
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 }
  }
  if (format === 'VP8X') {
    const width = 1 + (buffer.readUIntLE(24, 3) & 0xffffff)
    const height = 1 + (buffer.readUIntLE(27, 3) & 0xffffff)
    return { width, height }
  }
  return null
}

const cache = new Map<string, ImageSize | null>()

/**
 * Dimensions for a site-absolute image path such as `/images/br01.jpg`.
 * Null when the file is missing or the format is not recognised.
 */
export function getImageSize(src: string): ImageSize | null {
  if (cache.has(src)) return cache.get(src)!

  let size: ImageSize | null = null

  if (src.startsWith('/') && !src.startsWith('//')) {
    const file = path.join(process.cwd(), 'public', src.replace(/^\//, '').split('?')[0])
    if (fs.existsSync(file)) {
      const handle = fs.openSync(file, 'r')
      try {
        // 64 KB is far more than any header needs, and avoids reading a 6 MB
        // photograph into memory to learn two numbers.
        const buffer = Buffer.alloc(Math.min(65536, fs.fstatSync(handle).size))
        fs.readSync(handle, buffer, 0, buffer.length, 0)
        size = readPng(buffer) ?? readJpeg(buffer) ?? readWebp(buffer)
      } finally {
        fs.closeSync(handle)
      }
    }
  }

  cache.set(src, size)
  return size
}
