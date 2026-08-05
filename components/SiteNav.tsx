'use client'

/**
 * The Train / Bus links in the header.
 *
 * This is a "client component" (that's what the 'use client' line above means):
 * it runs a little JavaScript in the browser so it can read the current URL and
 * underline the section you are in. Everything else on this site is rendered
 * once at build time and ships as plain HTML.
 *
 * The links themselves come from the /content folder, so adding a top-level
 * folder there adds a nav item here.
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { href: string; title: string }

/** "/train/" and "/train" should both count as being in the Train section. */
function isInSection(pathname: string, href: string) {
  const base = href.replace(/\/+$/, '')
  return pathname === base || pathname.startsWith(base + '/')
}

export default function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <nav className="site-nav" aria-label="Sections">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isInSection(pathname, item.href) ? 'true' : undefined}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
