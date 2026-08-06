/**
 * A share image per content page, in that page's line colour.
 *
 * `generateStaticParams` is required here as well as on the page: without it
 * the static export has no list of images to render and emits none.
 */

import { ImageResponse } from 'next/og'
import { OG_CONTENT_TYPE, OG_SIZE, OgContentCard, ogFonts } from '@/lib/og'
import { getAllPages, getPage, getType } from '@/lib/content'
import { getAccent } from '@/lib/lines'

// A static export has to be told these routes are build-time only; without it
// the export step refuses to emit them at all.
export const dynamic = "force-static"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Taipei Transit Guide'

export function generateStaticParams() {
  return getAllPages().map((page) => ({
    section: page.section,
    type: page.type,
    slug: page.slug,
  }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ section: string; type: string; slug: string }>
}) {
  const { section, type, slug } = await params
  const page = await getPage(section, type, slug)
  const accent = getAccent(page.line)
  const typeMeta = getType(section, type)

  /*
   * The summary is written for a reader, so it is the right subtitle — but it
   * has to be trimmed to stay legible at share-preview size.
   *
   * Cut at a word boundary, and prefer a clause boundary where one falls in
   * range. Slicing at a fixed character count broke "…climbs hills the rest of
   * the network can…" mid-phrase, which reads as a truncation bug rather than a
   * deliberate excerpt.
   */
  const subtitle = (() => {
    const summary = page.summary
    if (summary.length <= 150) return summary

    const window = summary.slice(0, 150)
    const clause = Math.max(window.lastIndexOf(' — '), window.lastIndexOf(', '))
    if (clause > 80) return window.slice(0, clause) + '…'

    const word = window.lastIndexOf(' ')
    return (word > 0 ? window.slice(0, word) : window).trimEnd() + '…'
  })()

  return new ImageResponse(
    (
      <OgContentCard
        title={page.title}
        subtitle={subtitle}
        lineCode={accent.code || undefined}
        badgeBg={accent.badgeBg}
        badgeFg={accent.badgeFg}
        accent={accent.map}
        footer={page.stub ? `${typeMeta.title} · stub` : typeMeta.title}
      />
    ),
    { ...size, fonts: ogFonts() },
  )
}
