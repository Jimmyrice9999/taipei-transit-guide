'use client'

/**
 * The wide-viewport navigation rail — Part 3, Run 306.
 *
 * At laptop and desktop widths the site had substantial empty side margin
 * while the entire nav lived in a cramped top-bar dropdown. This moves that
 * navigation into the margin instead: a vertical tree, always visible from
 * ~1280px up, built from the identical `NavSection[]` data SiteNav's popover
 * already uses (see NavGroupView, exported from SiteNav.tsx) — one nav tree,
 * two renderings, so the two can never disagree about what a section
 * contains.
 *
 * Below the breakpoint this renders nothing (`display: none` in CSS; see the
 * `.side-nav-rail` rule in globals.css) and SiteNav's own top bar is
 * untouched — its hover-gap fix, keyboard traversal, nested subgroups and
 * passing axe checks all stay exactly as they were. The rail is additive,
 * not a replacement: two DOM trees for the same data, CSS deciding which one
 * a reader actually sees, so there is no client-side branch that could pick
 * the wrong one and end up with neither.
 *
 * Top-level sections are native `<details>` — free keyboard support, no
 * state to wire up — open by default only for the section the reader is
 * currently in, via the same `isInSection` rule SiteNav's own "current
 * section" link styling uses.
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { NavSection } from '@/lib/nav'
import { NavGroupView, isInSection } from './SiteNav'

export default function SideNavRail({
  sections,
  extra,
}: {
  sections: NavSection[]
  extra: { href: string; title: string }[]
}) {
  const pathname = usePathname()

  return (
    <nav className="side-nav-rail" aria-label="Sections">
      <ul className="side-nav-list">
        {sections.map((section) => {
          const current = isInSection(pathname, section.href)
          return (
            <li className="side-nav-item" key={section.href}>
              <details className="side-nav-section" open={current}>
                <summary>
                  <Link href={section.href} aria-current={current ? 'true' : undefined}>
                    {section.title}
                  </Link>
                  <span className="nav-submenu-caret" aria-hidden="true" />
                </summary>
                <div className="side-nav-section-body">
                  {section.groups.map((group) => (
                    <div className="nav-group" key={group.href}>
                      <NavGroupView group={group} />
                    </div>
                  ))}
                </div>
              </details>
            </li>
          )
        })}

        {extra.map((item) => (
          <li className="side-nav-item side-nav-item-plain" key={item.href}>
            <Link href={item.href} aria-current={isInSection(pathname, item.href) ? 'true' : undefined}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
