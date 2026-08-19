'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { normalizePath, previousPath } from '@/lib/navigation-history'

/**
 * A contextual up-navigation control with an explicit static fallback.
 *
 * The fallback is rendered in the static export. After hydration, the short
 * in-tab trail recorded by SiteNav can replace it with the route the reader
 * actually came from. Direct loads, disabled script, and blocked storage keep
 * the useful parent link instead.
 */
export default function BackLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const [destination, setDestination] = useState({ href, label })

  useEffect(() => {
    const previous = previousPath(pathname)
    if (!previous || normalizePath(previous) === normalizePath(href)) return
    setDestination({
      href: previous,
      label:
        previous === '/'
          ? 'the home page'
          : previous === '/rail/'
            ? 'Rail'
            : previous === '/rail/metro/stations/'
              ? 'the Stations index'
              : 'the previous page',
    })
  }, [href, pathname])

  return (
    <Link className="back-link" href={destination.href}>
      <span className="back-arrow" aria-hidden="true">
        ←
      </span>
      Back to {destination.label}
    </Link>
  )
}
