'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Makes map stations usable by touch without breaking them for anyone else.
 *
 * The stations are real links, so pointer, keyboard and screen reader access all
 * work with no JavaScript at all — hover and focus reveal the label in CSS, and
 * Enter follows the link. This adds one thing on top: on a touch device, the
 * first tap on a station selects it and opens a detail panel instead of
 * navigating immediately.
 *
 * Why that, rather than pan and zoom: both maps fit a phone at full width
 * without pinching, so zoom would solve a problem that does not exist, while
 * a hand-rolled pan implementation would fight the page's own scrolling. The
 * real touch problem is that a 4px dot is not a finger-sized target, and that is
 * solved in the SVG with a transparent 24px hit circle, not with gestures.
 *
 * Degrades to plain links if this never runs.
 */
export default function MapInteraction({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<{
    code: string
    name: string
    zh: string
    href: string
  } | null>(null)

  useEffect(() => {
    const root = container.current
    if (!root) return

    let lastPointerWasTouch = false

    const onPointerDown = (event: PointerEvent) => {
      lastPointerWasTouch = event.pointerType === 'touch' || event.pointerType === 'pen'
    }

    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest('a.routemap-station')
      if (!(target instanceof SVGAElement) && !(target instanceof HTMLElement)) return
      if (!target) return

      const code = target.getAttribute('data-code') ?? ''
      const href = target.getAttribute('href') ?? ''
      if (!code || !href) return

      // Mouse and keyboard: behave like a link.
      if (!lastPointerWasTouch) return

      // Touch: first tap selects, second tap on the panel link navigates.
      if (selected?.code === code) return

      event.preventDefault()
      setSelected({
        code,
        name: target.getAttribute('data-name') ?? '',
        zh: target.getAttribute('data-zh') ?? '',
        href,
      })
    }

    root.addEventListener('pointerdown', onPointerDown, true)
    root.addEventListener('click', onClick)
    return () => {
      root.removeEventListener('pointerdown', onPointerDown, true)
      root.removeEventListener('click', onClick)
    }
  }, [selected])

  return (
    <div className="routemap-interactive" ref={container}>
      {children}

      {selected && (
        <div className="routemap-panel" role="status">
          <span className="routemap-panel-code">{selected.code}</span>
          <span className="routemap-panel-name">
            {selected.name}
            {selected.zh && (
              <span className="routemap-panel-zh" lang="zh-Hant">
                {selected.zh}
              </span>
            )}
          </span>
          <a className="routemap-panel-go" href={selected.href}>
            Open →
          </a>
          <button
            className="routemap-panel-close"
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close station detail"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
