'use client'

import NextLink from 'next/link'
import { forwardRef, type ComponentProps } from 'react'
import { useLocale } from './LocaleContext'
import { localizedPath } from '@/lib/locale'

type Props = ComponentProps<typeof NextLink>

function localizeHref(locale: ReturnType<typeof useLocale>, href: Props['href']): Props['href'] {
  if (typeof href === 'string') return href.startsWith('#') || href.startsWith('http') ? href : localizedPath(locale, href)
  if (href && typeof href === 'object' && 'pathname' in href && typeof href.pathname === 'string') {
    return { ...href, pathname: localizedPath(locale, href.pathname) }
  }
  return href
}

const LocaleLink = forwardRef<HTMLAnchorElement, Props>(function LocaleLink({ href, ...props }, ref) {
  const locale = useLocale()
  return <NextLink ref={ref} href={localizeHref(locale, href)} {...props} />
})

export default LocaleLink
