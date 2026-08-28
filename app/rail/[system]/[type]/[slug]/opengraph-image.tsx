/**
 * The share image for a page inside a rail system. Card in lib/og-content.
 */

import { OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og'
import { entityShareImage } from '@/lib/og-content'
import { getAllPages } from '@/lib/content'

export const dynamic = 'force-static'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Taiwan Transit Guide'

export function generateStaticParams() {
  return getAllPages()
    .filter((page) => page.section === 'rail' && page.system)
    .map((page) => ({ system: page.system, type: page.type, slug: page.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ system: string; type: string; slug: string }>
}) {
  const { system, type, slug } = await params
  return entityShareImage({ section: 'rail', system, type, slug })
}
