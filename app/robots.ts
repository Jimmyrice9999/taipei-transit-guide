/**
 * robots.txt, generated so it can point at a sitemap whose URL depends on where
 * the site is deployed.
 *
 * This replaces the static public/robots.txt, which allowed indexing but named
 * no sitemap — the one thing a robots file is most useful for. The two cannot
 * coexist: a file in public/ wins over this route and would silently shadow it.
 */

import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
