import { hanFontFace } from '@/app/layout'

/**
 * Declares the content-page Han subset and points --font-han at it.
 *
 * The three-way split, run 6: content pages quote sources in Chinese and
 * carry hundreds of Han glyphs; station, data and chrome pages carry a few
 * dozen proper nouns. One shared subset made 60-odd light pages pay for the
 * content pages' quotations. Three subsets now:
 *
 *   base      chrome, stations, data pages — the small set (layout declares)
 *   content   md-backed pages, their indexes, the bibliography (this file)
 *   stations  /data/stations alone (that page declares its own)
 *
 * `:root:root` outweighs the layout's `:root` without touching !important,
 * same device as /data/stations. Rendered as a hoisted <style> beside the
 * layout's font rules. postbuild verifies every page's rendered Han against
 * the subset that page actually declares, so a page classified wrongly fails
 * the build rather than rendering tofu.
 */
const CONTENT_HAN = `${hanFontFace('TTG Han Content', (w) => `noto-sans-tc-content-${w}.woff2`)}
:root:root { --font-han: 'TTG Han Content'; }
`

export default function HanContentSubset() {
  return <style dangerouslySetInnerHTML={{ __html: CONTENT_HAN }} />
}
