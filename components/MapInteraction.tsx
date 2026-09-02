'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from './LocaleLink'

type MapView = { scale: number; x: number; y: number }

const MIN_SCALE = 1
const MAX_SCALE = 16

/**
 * Progressive enhancement for geographic SVG maps.
 *
 * The SVG remains a normal document with real station links when JavaScript is
 * absent. Once hydrated, pointer dragging and the wheel provide pan and zoom;
 * the buttons give the same controls to keyboard users. Station links still
 * win over the gesture: a tap selects a station, while a drag moves the map.
 */
export default function MapInteraction({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null)
  const viewRef = useRef<MapView>({ scale: 1, x: 0, y: 0 })
  const dragRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    startView: MapView
    moved: boolean
  } | null>(null)
  const suppressClick = useRef(false)
  const [view, setView] = useState<MapView>({ scale: 1, x: 0, y: 0 })
  const [enhanced, setEnhanced] = useState(false)
  const [selected, setSelected] = useState<{
    code: string
    name: string
    zh: string
    href: string
  } | null>(null)

  useEffect(() => {
    const root = container.current
    if (!root) return

    setEnhanced(true)
    let lastPointerWasTouch = false

    const updateView = (next: MapView) => {
      viewRef.current = next
      setView(next)
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || (event.target as Element | null)?.closest('.routemap-controls')) return
      lastPointerWasTouch = event.pointerType === 'touch' || event.pointerType === 'pen'
      dragRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startView: viewRef.current,
        moved: false,
      }
      root.setPointerCapture?.(event.pointerId)
    }

    const onPointerMove = (event: PointerEvent) => {
      const drag = dragRef.current
      if (!drag || drag.pointerId !== event.pointerId) return
      const dx = event.clientX - drag.startX
      const dy = event.clientY - drag.startY
      if (!drag.moved && Math.hypot(dx, dy) < 5) return
      drag.moved = true
      event.preventDefault()
      updateView({ scale: drag.startView.scale, x: drag.startView.x + dx, y: drag.startView.y + dy })
    }

    const onPointerUp = (event: PointerEvent) => {
      const drag = dragRef.current
      if (!drag || drag.pointerId !== event.pointerId) return
      if (drag.moved) suppressClick.current = true
      dragRef.current = null
      root.releasePointerCapture?.(event.pointerId)
    }

    const stations = [...root.querySelectorAll<HTMLAnchorElement>('a.routemap-station[href]')]
    stations.forEach((station, index) => station.setAttribute('tabindex', index === 0 ? '0' : '-1'))

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') lastPointerWasTouch = false

      const current = (event.target as Element | null)?.closest('a.routemap-station[href]')
      if (!current || stations.length === 0) return
      const index = stations.indexOf(current as HTMLAnchorElement)
      if (index < 0) return

      let next = index
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % stations.length
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + stations.length) % stations.length
      else if (event.key === 'Home') next = 0
      else if (event.key === 'End') next = stations.length - 1
      else return

      event.preventDefault()
      stations[index].setAttribute('tabindex', '-1')
      stations[next].setAttribute('tabindex', '0')
      stations[next].focus()
    }

    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest('a.routemap-station')
      if (!(target instanceof SVGAElement) && !(target instanceof HTMLElement)) return

      if (suppressClick.current) {
        event.preventDefault()
        suppressClick.current = false
        return
      }

      const code = target.getAttribute('data-code') ?? ''
      const href = target.getAttribute('href') ?? ''
      if (!code || !href || !lastPointerWasTouch) return
      if (selected?.code === code) return

      event.preventDefault()
      setSelected({
        code,
        name: target.getAttribute('data-name') ?? '',
        zh: target.getAttribute('data-zh') ?? '',
        href,
      })
    }

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const rect = root.getBoundingClientRect()
      const pointerX = event.clientX - rect.left
      const pointerY = event.clientY - rect.top
      const current = viewRef.current
      const nextScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, current.scale * (event.deltaY < 0 ? 1.16 : 0.86)))
      const ratio = nextScale / current.scale
      updateView({
        scale: nextScale,
        x: pointerX - (pointerX - current.x) * ratio,
        y: pointerY - (pointerY - current.y) * ratio,
      })
    }

    root.addEventListener('pointerdown', onPointerDown)
    root.addEventListener('pointermove', onPointerMove)
    root.addEventListener('pointerup', onPointerUp)
    root.addEventListener('pointercancel', onPointerUp)
    root.addEventListener('keydown', onKeyDown)
    root.addEventListener('click', onClick)
    root.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      stations.forEach((station) => station.removeAttribute('tabindex'))
      root.removeEventListener('pointerdown', onPointerDown)
      root.removeEventListener('pointermove', onPointerMove)
      root.removeEventListener('pointerup', onPointerUp)
      root.removeEventListener('pointercancel', onPointerUp)
      root.removeEventListener('keydown', onKeyDown)
      root.removeEventListener('click', onClick)
      root.removeEventListener('wheel', onWheel)
    }
  }, [selected])

  const adjustScale = (factor: number) => {
    const root = container.current
    const current = viewRef.current
    const nextScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, current.scale * factor))
    if (nextScale === current.scale) return
    const rect = root?.getBoundingClientRect()
    const cx = rect ? rect.width / 2 : 0
    const cy = rect ? rect.height / 2 : 0
    const ratio = nextScale / current.scale
    const next = {
      scale: nextScale,
      x: cx - (cx - current.x) * ratio,
      y: cy - (cy - current.y) * ratio,
    }
    viewRef.current = next
    setView(next)
  }

  const reset = () => {
    const next = { scale: 1, x: 0, y: 0 }
    viewRef.current = next
    setView(next)
  }

  return (
    <div className={`routemap-interactive${enhanced ? ' is-enhanced' : ''}`} ref={container}>
      {enhanced && (
        <div className="routemap-controls" aria-label="Map controls">
          <button type="button" onClick={() => adjustScale(1.25)} aria-label="Zoom in">+</button>
          <button type="button" onClick={() => adjustScale(0.8)} aria-label="Zoom out">−</button>
          <button type="button" onClick={reset} aria-label="Reset map view">Reset</button>
          <span aria-live="polite">{Math.round(view.scale * 100)}%</span>
        </div>
      )}

      <div
        className="routemap-viewport"
        style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}
      >
        {children}
      </div>

      {selected && (
        <div className="routemap-panel" role="status">
          <span className="routemap-panel-code">{selected.code}</span>
          <span className="routemap-panel-name">
            {selected.name}
            {selected.zh && <span className="routemap-panel-zh" lang="zh-Hant">{selected.zh}</span>}
          </span>
          <Link className="routemap-panel-go" href={selected.href}>Open →</Link>
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
