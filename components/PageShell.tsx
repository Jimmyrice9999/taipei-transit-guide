import type { Line } from '@/lib/lines'

/**
 * Wraps a page's content and applies its line accent.
 *
 * The accent bar sits directly under the site header and is the first thing
 * that tells you which line you are reading about. It uses the official line
 * colour, with a 1px hairline of the text-safe variant beneath: brown, orange
 * and yellow all measure under 3:1 against white, so the bar alone would have
 * no defined edge on those lines.
 *
 * Everything downstream — h2 rules, table headers, the eyebrow, focus rings —
 * reads --accent, so a page is accented consistently from one frontmatter field.
 */
export default function PageShell({
  accent,
  children,
}: {
  accent: Line
  children: React.ReactNode
}) {
  return (
    <div
      style={
        {
          '--accent': accent.ink,
          '--accent-map': accent.map,
        } as React.CSSProperties
      }
    >
      <div className="accent-bar" />
      <div className="accent-bar-hairline" />
      <main>
        <div className="container">{children}</div>
      </main>
    </div>
  )
}
