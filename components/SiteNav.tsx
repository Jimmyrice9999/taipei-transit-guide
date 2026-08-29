'use client'

/**
 * The section bar, with a disclosure per section and a native disclosure for
 * each category inside it. The section link and its toggle remain separate so
 * the section index is always reachable without opening a panel.
 */

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import type { NavGroup, NavSection } from '@/lib/nav'
import { rememberPath } from '@/lib/navigation-history'

/**
 * "/rail/" and "/rail" should both count as being in the Rail section.
 *
 * Exported for SideNavRail, which needs the identical rule to highlight the
 * current section in the wide-viewport rail — the two navs must agree on
 * what "current" means, or a reader could see one lit and not the other.
 */
export function isInSection(pathname: string, href: string) {
  const base = href.replace(/\/+$/, '')
  return pathname === base || pathname.startsWith(base + '/')
}

/**
 * One group's content — a type's page list, or a system's nested types —
 * shared between the popover panel (SiteNav, hover/click, absolutely
 * positioned) and the always-visible rail (SideNavRail, click only, static
 * flow). Both want the identical tree: closed-by-default subgroups, the same
 * truncation and "Open X index" framing, the same badges. Only the container
 * around this differs between the two, which is exactly why this is its own
 * component rather than being inlined into SiteNav's popover markup.
 */
export function NavGroupView({ group }: { group: NavGroup }) {
  // A system nested one level inside a section (Rail's eight systems): its
  // own disclosure, opening onto its types rather than the type's own links
  // — SYSTEM before PAGE TYPE. Checked first because a system still carries
  // `large: true` as a fallback for the case right below, and that fallback
  // must not pre-empt a system that actually has something nested inside it.
  if (group.subgroups && group.subgroups.length > 0) {
    return (
      <details className="nav-submenu nav-system">
        <summary>
          <span>{group.title}</span>
          <span className="nav-submenu-caret" aria-hidden="true" />
        </summary>
        <div className="nav-submenu-body">
          <Link className="nav-group-index" href={group.href}>
            Open {group.title.toLowerCase()}
            <span aria-hidden="true"> →</span>
          </Link>
          <div className="nav-subgroups">
            {group.subgroups.map((sub) => (
              <div className="nav-group nav-subgroup" key={sub.href}>
                <NavGroupView group={sub} />
              </div>
            ))}
          </div>
        </div>
      </details>
    )
  }

  // A disclosure that opens to reveal exactly one link costs a click and
  // reveals nothing a direct link wouldn't — the same shape as Stations and
  // Network already get. `<= 1` rather than `=== 0` so a group with a single
  // page (rail/systems, bike/history, gondola/lines, ticketing/guides all had
  // this) also skips the pointless disclosure.
  if (group.large || group.links.length <= 1) {
    return (
      <Link className="nav-group-direct" href={group.href}>
        {group.title}
        <span aria-hidden="true"> →</span>
      </Link>
    )
  }

  return (
    <details className="nav-submenu">
      <summary>
        <span>{group.title}</span>
        <span className="nav-submenu-caret" aria-hidden="true" />
      </summary>
      <div className="nav-submenu-body">
        <Link className="nav-group-index" href={group.href}>
          {group.truncated ? `All ${group.title.toLowerCase()}` : `Open ${group.title.toLowerCase()} index`}
          <span aria-hidden="true"> →</span>
        </Link>
        <ul>
          {group.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                {link.badge && (
                  <span
                    className="badge badge-mini nav-badge"
                    style={
                      {
                        '--badge-bg': link.badge.bg,
                        '--badge-fg': link.badge.fg,
                      } as CSSProperties
                    }
                  >
                    {link.badge.code}
                  </span>
                )}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  )
}

export default function SiteNav({
  sections,
  extra,
}: {
  sections: NavSection[]
  /** Links with no submenu: Data, which is generated rather than written. */
  extra: { href: string; title: string }[]
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const idBase = useId()
  // Hover-intent for the close: the panel is positioned against `.site-header`,
  // not the trigger `<li>`, so there is a real few-pixel strip between the
  // toggle and the panel that belongs to neither — moving the pointer straight
  // down through it briefly leaves the nav's own DOM subtree and would fire
  // `mouseleave` before the pointer reaches the panel. A short close delay
  // (rather than a bridge element sized to match a gap set in CSS, or a
  // safe-triangle calculation) survives that crossing without any layout
  // assumptions, and costs nothing on the sections that have no gap at all.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cancelClose = () => {
    if (closeTimer.current === null) return
    clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(null), 250)
  }
  useEffect(() => cancelClose, [])

  // Any navigation closes the panel. Without this, following a link inside a
  // panel leaves it open over the page just requested.
  useEffect(() => setOpen(null), [pathname])

  // Keep a short in-tab trail so contextual BackLinks can use the route the
  // reader actually came from. Explicit server-rendered fallbacks remain the
  // behaviour for direct loads and browsers with storage disabled.
  useEffect(() => rememberPath(pathname), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
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
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
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
                cancelClose()
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
                onClick={() => {
                  cancelClose()
                  setOpen(isOpen ? null : section.href)
                }}
              >
                <svg viewBox="0 0 10 6" width="10" height="6" aria-hidden="true" focusable="false">
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>

              <div
                className="nav-panel"
                id={panelId}
                hidden={!isOpen}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              >
                <div className="nav-panel-inner">
                  {section.groups.map((group) => (
                    <div className="nav-group" key={group.href}>
                      <NavGroupView group={group} />
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
