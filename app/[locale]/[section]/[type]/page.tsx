/** A page-type index in a section with no systems: /bike/history/, /ticketing/guides/ */

import type { Metadata } from 'next'
import TypeIndex, { typeIndexMetadata } from '@/components/TypeIndex'
import { getSections, getTypes } from '@/lib/content'

type Props = { params: Promise<{ section: string; type: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getSections().flatMap((section) =>
    getTypes(section.slug).map((type) => ({ section: section.slug, type: type.slug })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, type } = await params
  return typeIndexMetadata({ section, type })
}

export default async function TypeIndexPage({ params }: Props) {
  const { section, type } = await params
  return <TypeIndex section={section} type={type} />
}
