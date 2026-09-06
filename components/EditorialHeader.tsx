import type { ReactNode } from 'react'

export default function EditorialHeader({
  eyebrow,
  title,
  summary,
  icon,
  updated,
  className = '',
  titleClassName = '',
  summaryClassName = 'page-summary',
}: {
  eyebrow?: ReactNode
  title: ReactNode
  summary?: ReactNode
  icon?: ReactNode
  updated?: string
  className?: string
  titleClassName?: string
  summaryClassName?: string
}) {
  const titleClasses = ['page-title', icon && 'page-title-with-icon', titleClassName].filter(Boolean).join(' ')
  const headerClasses = ['editorial-header', className].filter(Boolean).join(' ')

  return (
    <header className={headerClasses}>
      {(eyebrow || updated) && (
        <div className="editorial-header-meta">
          {eyebrow && <span className="editorial-header-kicker">{eyebrow}</span>}
          {updated && <time dateTime={updated}>Guide update {updated}</time>}
        </div>
      )}
      <h1 className={titleClasses}>
        {icon}
        <span className="page-title-text">{title}</span>
      </h1>
      {summary && <div className={summaryClassName}>{summary}</div>}
    </header>
  )
}
