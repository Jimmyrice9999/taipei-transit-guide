import { GROUP_PATH_COLOUR } from '@/lib/bus/route-groups'
import type { BusRouteGroup } from '@/lib/bus/routes'

/**
 * A small mark for a bus route group — what service class a group is, not
 * which one. Same rule LineIcon follows for rail: never the sole carrier of
 * anything (the group's own title is what actually says which group this
 * is), and derived from a real distinction riders experience rather than
 * decoration. Colour comes from `GROUP_PATH_COLOUR`, the token this site
 * already uses for a group's route lines on the map — no second palette.
 *
 * The six shapes:
 *   feeder     (colour-*)        two lines converging into one — a feeder
 *                                joining the trunk it was named for
 *   trunk      (trunk)           one bold corridor, unbranched
 *   numbered   (series-*)        a route-number tag
 *   minibus    (minibus)         a small vehicle body, drawn smaller than
 *                                the trunk mark rather than differently
 *   shuttle    (special-shuttle) a loop — there-and-back service, the
 *                                pattern this group's own routes share
 *   municipal  (new-taipei)      a place marker — its own numbering system,
 *                                filed by municipality rather than class
 *
 * `unclassified`/`series-other` get no icon: there is no shared class to
 * depict, and a placeholder mark would claim one that is not there.
 */
type GroupKind = 'feeder' | 'trunk' | 'numbered' | 'minibus' | 'shuttle' | 'municipal' | null

function kindOf(group: BusRouteGroup): GroupKind {
  if (group.startsWith('colour-')) return 'feeder'
  if (group.startsWith('series-')) return 'numbered'
  if (group === 'trunk') return 'trunk'
  if (group === 'minibus') return 'minibus'
  if (group === 'special-shuttle') return 'shuttle'
  if (group === 'new-taipei') return 'municipal'
  return null
}

const LABEL: Record<Exclude<GroupKind, null>, string> = {
  feeder: 'MRT feeder route',
  trunk: 'Trunk route',
  numbered: 'Numbered route',
  minibus: 'Minibus route',
  shuttle: 'Shuttle service',
  municipal: 'New Taipei route',
}

export default function BusGroupIcon({
  group,
  size = 26,
  className = '',
}: {
  group: BusRouteGroup
  size?: number
  className?: string
}) {
  const kind = kindOf(group)
  if (!kind) return null

  const colour = GROUP_PATH_COLOUR[group]

  return (
    <svg
      className={`bus-group-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label={LABEL[kind]}
      style={{ color: colour }}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{LABEL[kind]}</title>

      {kind === 'feeder' && (
        <>
          <path d="M4 6 L11 12 L4 18" />
          <line x1="11" y1="12" x2="20" y2="12" />
        </>
      )}

      {kind === 'trunk' && (
        <>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="8" x2="3" y2="16" />
          <line x1="21" y1="8" x2="21" y2="16" />
        </>
      )}

      {kind === 'numbered' && (
        <>
          <path d="M4 5 L14 5 L20 12 L14 19 L4 19 Z" />
          <circle cx="9.5" cy="12" r="1.3" fill="currentColor" stroke="none" />
        </>
      )}

      {kind === 'minibus' && (
        <>
          <rect x="6" y="7" width="12" height="8" rx="2" />
          <circle cx="9" cy="17" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="15" cy="17" r="1.6" fill="currentColor" stroke="none" />
        </>
      )}

      {kind === 'shuttle' && (
        <path d="M6 8 a6 6 0 1 1 -1.5 6.5 M4.5 14.5 v-4 h4" />
      )}

      {kind === 'municipal' && (
        <>
          <path d="M12 3 C8 3 5.5 5.6 5.5 9 C5.5 13.5 12 21 12 21 C12 21 18.5 13.5 18.5 9 C18.5 5.6 16 3 12 3 Z" />
          <circle cx="12" cy="9" r="2.2" />
        </>
      )}
    </svg>
  )
}
