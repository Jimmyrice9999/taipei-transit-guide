'use client'

import type { AnchorHTMLAttributes } from 'react'
import { localizedPath } from '@/lib/locale'
import { useLocale } from './LocaleContext'

export default function LocaleSvgLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const locale = useLocale()
  return <a {...props} href={localizedPath(locale, href)} />
}
