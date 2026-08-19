/**
 * A content page inside a rail system: /rail/metro/lines/wenhu-line/.
 *
 * The layout is components/EntityPage, shared with the sections that have no
 * system level. This route exists to give those pages a URL that names the
 * system they belong to — see the note on `Folder.kind` in lib/content for why
 * that level exists at all.
 */

import type { Metadata } from 'next'
import EntityPage, { entityMetadata } from '@/components/EntityPage'
import { getAllPages } from '@/lib/content'

type Props = { params: Promise<{ system: string; type: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPages()
    .filter((page) => page.section === 'rail' && page.system)
    .map((page) => ({ system: page.system, type: page.type, slug: page.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { system, type, slug } = await params
  return entityMetadata({ section: 'rail', system, type, slug })
}

export default async function RailSystemContentPage({ params }: Props) {
  const { system, type, slug } = await params
  return <EntityPage section="rail" system={system} type={type} slug={slug} />
}
