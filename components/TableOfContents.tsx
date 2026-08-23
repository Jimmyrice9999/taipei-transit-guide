import type { TocEntry } from '@/lib/markdown-plugins'
import RichText from '@/components/RichText'

export default function TableOfContents({ items }: { items: TocEntry[] }) {
  const seen = new Set<string>()
  const unique = items.filter((item) => {
    if (!item.id || seen.has(item.id)) return false
    seen.add(item.id)
    return true
  })

  if (unique.filter((item) => item.level === 2).length < 3) return null

  return (
    <nav className="page-toc wide" aria-labelledby="page-toc-title">
      <p className="page-toc-title" id="page-toc-title">On this page</p>
      <ol className="page-toc-list">
        {unique.map((item) => (
          <li className={`page-toc-item level-${item.level}`} key={item.id}>
            <a href={`#${item.id}`}><RichText>{item.label}</RichText></a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
