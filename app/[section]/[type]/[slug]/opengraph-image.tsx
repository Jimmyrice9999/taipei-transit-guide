/**
 * A share image per content page, in that page's line colour.
 *
 * `generateStaticParams` is required here as well as on the page: without it
 * the static export has no list of images to render and emits none. The card
 * itself is in lib/og-content, shared with the system route.
 */

import { OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og'
import { entityShareImage } from '@/lib/og-content'
import { getAllPages } from '@/lib/content'

// A static export has to be told these routes are build-time only; without it
// the export step refuses to emit them at all.
export const dynamic = 'force-static'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Taiwan Transit Guide'

export function generateStaticParams() {
  return getAllPages()
    .filter((page) => !page.system)
    .map((page) => ({ section: page.section, type: page.type, slug: page.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ section: string; type: string; slug: string }>
}) {
  const { section, type, slug } = await params
  return entityShareImage({ section, type, slug })
}
