'use client'

/**
 * The section bar, with a dropdown per section mirroring the site hierarchy.
 *
 * This is a "client component": it runs a little JavaScript in the browser so
 * it can read the current URL and open and close the panels. Everything else
 * on this site is rendered once at build time and ships as plain HTML.
 *
 * ── Why it is built this way ─────────────────────────────────────────────────
 *
 * Each section is TWO controls, not one: a link to the section, and a separate
 * toggle button for its panel. Collapsing them into a single element forces a
 * choice between "the section index is unreachable from the bar" and "opening
 * the menu navigates away", and both are worse than an extra 20px of button.
 * The link is what a section name should do; the caret is what a menu should
 * do; they are different jobs and they get different controls.
 *
 * **Nothing depends on hover.** Hover opens a panel on a fine pointer as an
 * enhancement, and that is all it is — every panel opens on click, on Enter,
 * and on Space, so it works on touch, with a keyboard, and with a screen
 * reader. The brief for run 10 called this out specifically, and it is also
 * WCAG 2.1 SC 2.1.1: a hover-only menu is unreachable without a mouse.
 *
 * `aria-expanded` on the button and `hidden` on the panel are the whole
 * accessibility contract. No `role="menu"` — that role implies application
 * keyboard semantics (arrow keys move, Tab leaves the whole menu) which is
 * wrong for what this is: a set of links in a disclosure. Plain links in a
 * plain list, which Tab already traverses correctly.
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import type { NavSection } from '@/lib/nav'

/** "/rail/" and "/rail" should both count as being in the Rail section. */
function isInSection(pathname: string, href: string) {
  const base = href.replace(/\/+$/, '')
  return pathname === base || pathname.startsWith(base + '/')
}

export default function SiteNav({
  sections,
  extra,
}: {
  sections: NavSection[]
  /** Links with no submenu — Data, which is generated rather than written. */
  extra: { href: string; title: string }[]
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const idBase = useId()

  // Any navigation closes the panel. Without this, following a link inside a
  // panel leaves it open over the page you just asked for.
  useEffect(() => setOpen(null), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      // Focus goes back to the button that opened the panel, or the user is
      // dropped at the top of the document with no idea where they were.
      const button = navRef.current?.querySelector<HTMLButtonElement>(
        `[data-toggle="${open}"]`,
      )
      setOpen(null)
      button?.focus()
    }
    const onPointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <nav
      className="site-nav"
      aria-label="Sections"
      ref={navRef}
      // Hover is an enhancement only, and only where a pointer can hover.
      // Leaving the bar closes whatever it opened; a panel left hanging over
      // the page after the pointer has gone is the classic hover-menu bug.
      onMouseLeave={() => setOpen(null)}
    >
      <ul className="nav-list">
        {sections.map((section) => {
          const panelId = `${idBase}-${section.href.replace(/\W+/g, '')}`
          const isOpen = open === section.href
          const current = isInSection(pathname, section.href)
          return (
            <li
              key={section.href}
              className="nav-item"
              onMouseEnter={(event) => {
                // matchMedia rather than a touch test: what matters is whether
                // the pointer can hover at all, not whether the device has a
                // touchscreen. Hybrid laptops have both.
                if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
                  setOpen(section.href)
                }
                event.stopPropagation()
              }}
            >
              <Link href={section.href} aria-current={current ? 'true' : undefined}>
                {section.title}
              </Link>
              <button
                type="button"
                className="nav-toggle"
                data-toggle={section.href}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={`${section.title} pages`}
                onClick={() => setOpen(isOpen ? null : section.href)}
              >
                <svg viewBox="0 0 10 6" width="10" height="6" aria-hidden="true" focusable="false">
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              <div className="nav-panel" id={panelId} hidden={!isOpen}>
                <div className="nav-panel-inner">
                  {section.groups.map((group) => (
                    <div className="nav-group" key={group.href}>
                      <Link className="nav-group-head" href={group.href}>
                        {group.title}
                      </Link>
                      {group.links.length > 0 && (
                        <ul>
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href}>{link.title}</Link>
                            </li>
                          ))}
                          {group.truncated && (
                            <li>
                              <Link className="nav-all" href={group.href}>
                                All {group.title.toLowerCase()} →
                              </Link>
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          )
        })}

        {extra.map((item) => (
          <li className="nav-item" key={item.href}>
            <Link
              href={item.href}
              aria-current={isInSection(pathname, item.href) ? 'true' : undefined}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
