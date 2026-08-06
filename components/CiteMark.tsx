import type { NumberedSource } from '@/lib/sources'

/**
 * The superscript `[3]` beside a fact or a spec value.
 *
 * The same mark the Markdown pipeline renders for `[^id]` in prose, so a reader
 * learns one device. Kept as a component rather than duplicated because the two
 * paths are already different enough — one builds hast nodes at build time, the
 * other is React — and the failure mode of them drifting apart is a page where
 * half the citations look like citations.
 *
 * Renders nothing when the row cites nothing. That silence is deliberate: it is
 * what `npm run claims` counts, and dressing an unsourced row with a
 * placeholder mark would hide the very thing the count exists to surface.
 */
export default function CiteMark({
  id,
  references,
}: {
  id: string
  references: NumberedSource[]
}) {
  if (!id) return null

  const reference = references.find((r) => r.id === id)
  if (!reference) {
    return (
      <sup className="cite cite-unresolved" title={`Unknown source "${id}"`}>
        [?]
      </sup>
    )
  }

  return (
    <sup className="cite">
      <a href={`#ref-${reference.number}`} title={reference.title}>
        [{reference.number}]
      </a>
    </sup>
  )
}
