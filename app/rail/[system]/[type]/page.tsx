/** A page-type index inside a rail system: /rail/metro/lines/, /rail/cable/lines/ */

import type { Metadata } from 'next'
import TypeIndex, { typeIndexMetadata } from '@/components/TypeIndex'
import { getSystems, getTypes } from '@/lib/content'

type Props = { params: Promise<{ system: string; type: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getSystems('rail').flatMap((system) =>
    getTypes('rail', system.slug).map((type) => ({ system: system.slug, type: type.slug })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { system, type } = await params
  return typeIndexMetadata({ section: 'rail', system, type })
}

export default async function RailSystemTypeIndexPage({ params }: Props) {
  const { system, type } = await params
  return <TypeIndex section="rail" system={system} type={type} />
}
