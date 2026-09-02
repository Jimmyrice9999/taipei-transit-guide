/**
 * A content page in a section with no systems: /bike/history/youbike/.
 *
 * The layout lives in components/EntityPage — see the note there for why. This
 * route only resolves params and filters `generateStaticParams` down to the
 * pages that actually live at this depth; the ones under a system are served by
 * app/rail/[system]/[type]/[slug]/.
 */

import type { Metadata } from 'next'
import EntityPage, { entityMetadata } from '@/components/EntityPage'
import { getAllPages } from '@/lib/content'

type Props = { params: Promise<{ section: string; type: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPages()
    .filter((page) => !page.system)
    .map((page) => ({ section: page.section, type: page.type, slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, type, slug } = await params
  return entityMetadata({ section, type, slug })
}

export default async function ContentPage({ params }: Props) {
  const { section, type, slug } = await params
  return <EntityPage section={section} type={type} slug={slug} />
}
