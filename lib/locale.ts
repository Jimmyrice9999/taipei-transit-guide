export const LOCALES = ['en', 'zh-Hant'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

/** Remove the locale prefix before comparing a path with the content tree. */
export function withoutLocale(pathname: string): string {
  for (const locale of LOCALES) {
    if (pathname === `/${locale}` || pathname === `/${locale}/`) return '/'
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1) || '/'
  }
  return pathname || '/'
}

/** Return the one canonical URL for a path in the requested locale. */
export function localizedPath(locale: Locale, pathname: string): string {
  const path = withoutLocale(pathname)
  return path === '/' ? `/${locale}/` : `/${locale}${path}`
}

/** Add canonical and hreflang URLs while retaining the page's other metadata. */
import type { Metadata } from 'next'
import { SITE_URL } from './site.ts'

export function withLocaleMetadata(
  locale: Locale,
  metadata: Metadata,
): Metadata {
  const canonical = metadata.alternates?.canonical
  const canonicalPath =
    typeof canonical === 'string'
      ? canonical
      : canonical && typeof canonical === 'object' && 'pathname' in canonical
        ? String(canonical.pathname)
        : '/'
  return {
    ...metadata,
    metadataBase: metadata.metadataBase ?? new URL(SITE_URL),
    alternates: {
      ...metadata.alternates,
      canonical: localizedPath(locale, canonicalPath),
      languages: {
        ...metadata.alternates?.languages,
        en: localizedPath('en', canonicalPath),
        'zh-Hant': localizedPath('zh-Hant', canonicalPath),
      },
    },
    openGraph: {
      ...metadata.openGraph,
      url: localizedPath(locale, canonicalPath),
    },
  } as Metadata
}
