'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'ascending' | 'descending'

/**
 * Progressive sorting for a table whose complete body is already in the HTML.
 *
 * The server supplies every row. With JavaScript disabled this is an ordinary
 * table; after hydration the heading buttons reorder those existing rows in
 * place. No data is fetched, hidden or persisted in browser storage.
 */
export default function SortableTable({
  children,
  className = '',
  label,
}: {
  children: ReactNode
  className?: string
  label: string
}) {
  const table = useRef<HTMLTableElement>(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const root = table.current
    if (!root) return

    const onClick = (event: MouseEvent) => {
      const button = (event.target as Element | null)?.closest<HTMLButtonElement>('button[data-sort-column]')
      if (!button || !root.contains(button)) return

      const column = Number(button.dataset.sortColumn)
      const type = button.dataset.sortType === 'number' ? 'number' : 'text'
      const header = button.closest('th')
      const body = root.tBodies[0]
      if (!header || !body || !Number.isInteger(column)) return

      const next: Direction = header.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending'
      for (const th of root.querySelectorAll('thead th[aria-sort]')) th.setAttribute('aria-sort', 'none')
      header.setAttribute('aria-sort', next)

      const rows = [...body.rows]
      const value = (row: HTMLTableRowElement) => {
        const cell = row.cells[column]
        const raw = cell?.dataset.sortValue ?? cell?.textContent?.trim() ?? ''
        if (/^(?:TBC|—|-)?$/i.test(raw)) return null
        if (type === 'number') {
          const parsed = Number(raw.replace(/[^0-9.+-]/g, ''))
          return Number.isFinite(parsed) ? parsed : null
        }
        return raw.toLocaleLowerCase('en')
      }

      rows.sort((left, right) => {
        const a = value(left)
        const b = value(right)
        if (a === null && b === null) return left.rowIndex - right.rowIndex
        if (a === null) return 1
        if (b === null) return -1
        const order = typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b), 'en')
        return next === 'ascending' ? order : -order
      })
      body.append(...rows)
      setStatus(`${button.textContent?.trim() ?? 'Column'} sorted ${next}. TBC values are last.`)
    }

    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <table ref={table} className={className}>
        {children}
      </table>
      <p className="sr-only" aria-live="polite">{status}</p>
      <span className="sr-only">{label}: activate a column heading to sort; all rows are present before sorting.</span>
    </>
  )
}

export function SortButton({
  column,
  children,
  type = 'text',
}: {
  column: number
  children: ReactNode
  type?: 'text' | 'number'
}) {
  return <button className="table-sort" type="button" data-sort-column={column} data-sort-type={type}>{children}<span aria-hidden="true"> ↕</span></button>
}
