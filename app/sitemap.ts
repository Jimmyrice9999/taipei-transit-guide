/**
 * sitemap.xml, generated from the route list rather than maintained by hand.
 *
 * Every URL here is derived from the same functions the pages themselves are
 * built from, so a page cannot exist without appearing in the sitemap, and a
 * sitemap entry cannot point at a page that was never generated. A hand-written
 * sitemap gets one or the other wrong within about two commits.
 *
 * `changeFrequency` and `priority` are advisory and widely ignored by search
 * engines, but they are cheap and honest here: the station pages really do
 * change less often than the network page, because they are generated from data
 * that changes when a station opens.
 */

import type { MetadataRoute } from 'next'
import { getAllPages, getSections, getTypes } from '@/lib/content'
import { getLineStations, PROVENANCE } from '@/lib/stations'
import { absoluteUrl } from '@/lib/site'

export const dynamic = 'force-static'

/**
 * The fallback modification date for pages with no `updated:` of their own.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * This was `new Date()`, and that was wrong twice over.
 *
 * It made the build non-deterministic — two builds a second apart produced
 * different `sitemap.xml` files, which the determinism check now catches. And
 * it was a claim about the world that was not true: telling search engines that
 * all 46 URLs were modified at 13:45:37.866 today, because that is when the CI
 * runner happened to reach this function, is exactly the class of unsourced
 * assertion the rest of this site is built to avoid. `lastmod` on every page on
 * every deploy is also the standard way to get a sitemap's dates ignored.
 *
 * The generated pages — the network map, the data tables, the station pages —
 * really do change when the underlying data changes, and the data records when
 * it was retrieved. So that is the honest date, and it is stable between builds
 * because it is a fact about the data rather than about the build.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const DATA_DATE = new Date(PROVENANCE.fetchedAt ?? '2026-08-05T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const now = DATA_DATE

  /** A page's own `updated:` date where it has one, else the data's own date. */
  const lastModified = (updated?: string) => {
    if (!updated) return now
    const parsed = new Date(updated)
    return Number.isNaN(parsed.getTime()) ? now : parsed
  }

  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/about/'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: absoluteUrl('/train/network/'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/data/'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: absoluteUrl('/data/stations/'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: absoluteUrl('/data/line-colours/'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: absoluteUrl('/data/provenance/'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: absoluteUrl('/data/sources/'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Sections and page types, straight from the content folder.
  for (const section of getSections()) {
    entries.push({
      url: absoluteUrl(section.href),
      lastModified: now,
      changeFrequency: 'monthly',
      // A section declared "planned" has nothing in it. Listing it at full
      // weight would push an empty page ahead of written ones.
      priority: section.status === 'planned' ? 0.2 : 0.8,
    })
    for (const type of getTypes(section.slug)) {
      entries.push({
        url: absoluteUrl(type.href),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: type.status === 'planned' ? 0.2 : 0.7,
      })
    }
  }

  for (const page of getAllPages()) {
    entries.push({
      url: absoluteUrl(page.href),
      lastModified: lastModified(page.updated),
      changeFrequency: 'monthly',
      // A stub is a real page but not a finished one, and saying so costs
      // nothing.
      priority: page.stub ? 0.6 : 0.8,
    })
  }

  for (const station of getLineStations('BR')) {
    entries.push({
      url: absoluteUrl(`/train/stations/${station.code.toLowerCase()}/`),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    })
  }

  return entries
}
