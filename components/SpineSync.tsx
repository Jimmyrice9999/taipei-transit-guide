'use client'

import { useEffect } from 'react'

/**
 * Lights the spine ticks for the stations the section you are reading mentions.
 *
 * `sectionStations` is computed at build time by walking the Markdown — see
 * rehypeSectionStations. So the highlight states something true: this section
 * talks about these stations. Mapping scroll depth onto the line instead would
 * be decoration dressed as data, because reading progress is not position on
 * the line.
 *
 * Sections that mention no stations leave the page's default marks lit rather
 * than blanking the spine.
 *
 * This is the only client-side JavaScript on a content page. It toggles
 * attributes and scrolls the strip's own scroll container — never the page —
 * so a highlight below the pinned window is brought into it. Nothing animates
 * unless CSS says so, and neither CSS nor the scroll do under
 * prefers-reduced-motion.
 */
export default function SpineSync({
  sectionStations,
}: {
  sectionStations: Record<string, string[]>
}) {
  useEffect(() => {
    const spine = document.querySelector('[data-spine]')
    if (!spine) return

    const ids = Object.keys(sectionStations).filter((id) => sectionStations[id].length > 0)
    if (ids.length === 0) return

    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (headings.length === 0) return

    const stops = new Map<string, HTMLElement>()
    spine.querySelectorAll<HTMLElement>('[data-station]').forEach((el) => {
      stops.set(el.dataset.station!, el)
    })

    let currentId: string | null = null

    /*
     * The strip map is a scroll container (30vh when pinned on mobile), so a
     * highlight below the visible window would light a tick nobody can see —
     * the pinned window otherwise shows whatever it was last scrolled to.
     * Nudge the container just far enough that the first highlighted stop is
     * inside it. The container alone is scrolled, never the page: this runs on
     * an IntersectionObserver, and scrolling the page from a scroll-driven
     * callback is a feedback loop.
     */
    const reveal = (active: Set<string>) => {
      if (!(spine instanceof HTMLElement) || spine.scrollHeight <= spine.clientHeight) return
      let target: HTMLElement | null = null
      for (const [code, el] of stops) {
        if (active.has(code)) {
          target = el
          break
        }
      }
      if (!target) return

      const frame = spine.getBoundingClientRect()
      const stop = target.getBoundingClientRect()
      // 8px of headroom so the revealed stop does not sit flush on the edge.
      const above = stop.top - (frame.top + 8)
      const below = stop.bottom - (frame.bottom - 8)
      if (above >= 0 && below <= 0) return

      spine.scrollBy({
        top: above < 0 ? above : below,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
      })
    }

    const apply = (id: string | null) => {
      if (id === currentId) return
      currentId = id
      const active = new Set(id ? sectionStations[id] : [])
      stops.forEach((el, code) => {
        el.toggleAttribute('data-current', active.has(code))
      })
      spine.toggleAttribute('data-syncing', active.size > 0)
      if (active.size > 0) reveal(active)
    }

    // The heading nearest the top of the viewport, but still above the midpoint,
    // is the one being read. Recomputed from the observer's own records so it
    // stays correct when several sections are on screen at once.
    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top)
          else visible.delete(entry.target.id)
        }

        if (visible.size === 0) return
        const [nearest] = [...visible.entries()].sort((a, b) => a[1] - b[1])
        apply(nearest[0])
      },
      { rootMargin: '-10% 0px -55% 0px', threshold: 0 },
    )

    headings.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionStations])

  return null
}
