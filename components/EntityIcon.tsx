/**
 * A small subject mark for entity pages that do not have a line's own
 * vehicle icon. It is deliberately semantic rather than decorative: the
 * adjacent title still names the subject, while this mark gives an index a
 * quick visual distinction between an operator, depot, vehicle model, card,
 * ferry or bike-share record.
 *
 * The mark never carries the fact by itself. It has a text label and every
 * rendered page remains fully intelligible with colour and SVG disabled.
 */
export type EntityIconKind = 'operator' | 'depot' | 'fleet' | 'ticket' | 'ferry' | 'bike' | 'region'

const LABEL: Record<EntityIconKind, string> = {
  operator: 'Transit operator',
  depot: 'Transit depot',
  fleet: 'Rail vehicle model',
  ticket: 'Ticketing and fares',
  ferry: 'Ferry service',
  bike: 'Bike-share service',
  region: 'Geographic region',
}

/** The page types that have a stable subject vocabulary and icon. */
export function getEntityIconKind(section: string, type: string): EntityIconKind | null {
  if (type === 'operators') return 'operator'
  if (type === 'depots') return 'depot'
  if (type === 'rolling-stock' || type === 'models') return 'fleet'
  if (section === 'ticketing') return 'ticket'
  if (section === 'ferry') return 'ferry'
  if (section === 'bike') return 'bike'
  return null
}

export default function EntityIcon({
  kind,
  size = 30,
  className = '',
}: {
  kind: EntityIconKind
  size?: number
  className?: string
}) {
  return (
    <svg
      className={`entity-icon ${className}`.trim()}
      viewBox="0 0 32 32"
      width={size}
      height={size}
      role="img"
      aria-label={LABEL[kind]}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{LABEL[kind]}</title>

      {kind === 'operator' && (
        <>
          <path d="M5 27.5h22M7.5 27.5V9.5h17v18M5 9.5 16 4l11 5.5M11 14h2M19 14h2M11 19h2M19 19h2" />
          <path d="M14 27.5v-5h4v5" />
        </>
      )}

      {kind === 'depot' && (
        <>
          <path d="M4 27h24M6 27V12l10-6 10 6v15M10 16h12M10 21h12" />
          <path d="M8 27v-5h16v5M13 16v5M19 16v5" />
        </>
      )}

      {kind === 'fleet' && (
        <>
          <rect x="5" y="7" width="22" height="16" rx="3" />
          <path d="M8 12h16M8 18h16M10 27h-3M25 27h-3" />
          <circle cx="11" cy="26" r="2" />
          <circle cx="21" cy="26" r="2" />
        </>
      )}

      {kind === 'ticket' && (
        <>
          <path d="M7 5.5h18a2 2 0 0 1 2 2v5a3.5 3.5 0 0 0 0 7v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a3.5 3.5 0 0 0 0-7v-5a2 2 0 0 1 2-2Z" />
          <path d="M12 10.5h8M12 16h8M12 21.5h5" />
        </>
      )}

      {kind === 'ferry' && (
        <>
          <path d="M5 22h22l-3 4H8l-3-4ZM8 22V12h11l4 10M11 12V8h7l3 4M4 28c3 1.5 5 1.5 8 0 3 1.5 5 1.5 8 0 3 1.5 5 1.5 8 0" />
        </>
      )}

      {kind === 'bike' && (
        <>
          <circle cx="8" cy="23" r="4.5" />
          <circle cx="24" cy="23" r="4.5" />
          <path d="M8 23 13 12h5l6 11M13 12l-3-3M15 23h-7M18 12l3-3h3M16 12l-3 11" />
        </>
      )}

      {kind === 'region' && (
        <>
          <path d="M16 4C10.5 4 6 8.4 6 13.7 6 21.5 16 29 16 29s10-7.5 10-15.3C26 8.4 21.5 4 16 4Z" />
          <circle cx="16" cy="13.5" r="4" />
        </>
      )}
    </svg>
  )
}
