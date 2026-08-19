/**
 * The share image for one content page, in that page's line colour.
 *
 * Shared by the two route shapes that render an entity — see the note in
 * components/EntityPage. The `size`, `contentType` and `dynamic` exports have
 * to stay in the route files themselves; Next reads them from the route module.
 */

import { ImageResponse } from 'next/og'
import { OG_SIZE, OgContentCard, ogFonts } from '@/lib/og'
import { getPage, getType } from '@/lib/content'
import { getAccent } from '@/lib/lines'
import type { EntityRef } from '@/components/EntityPage'

export async function entityShareImage({ section, system = '', type, slug }: EntityRef) {
  const page = await getPage(section, type, slug, system)
  const accent = getAccent(page.line)
  const typeMeta = getType(section, type, system)

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
    { ...OG_SIZE, fonts: ogFonts() },
  )
}
