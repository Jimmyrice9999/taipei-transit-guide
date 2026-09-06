/**
 * Every colour in the system, and what it is allowed to be used for.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * The site derives seven line colours against a 4.6 safety margin, fails the
 * build below 4.5, and documents the reasoning at length. It then shipped
 * `--text-3` at 3.89:1 on white for four builds, colouring roughly three
 * hundred text nodes on every page. The rigour was real and it was aimed in one
 * direction.
 *
 * The fix in run 2 was to add the four greys to a test by name. That closed the
 * instance and not the class: the next colour someone adds is unchecked again
 * for exactly the same reason — nothing forces a decision about it.
 *
 * So this file inverts the default. Every `--name: #hex` in globals.css must
 * appear here with a role, and the test fails on any that does not. The
 * checkable question stops being "did anyone remember to add this colour to the
 * test" and becomes "does every colour have a stated job", which a build can
 * answer.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { AA, AA_NON_TEXT } from './color.ts'

/** What a colour is for, which decides the threshold it has to clear. */
export type Role =
  /** A surface other things sit on. Checked as a background, never as ink. */
  | 'surface'
  /** Body or UI text. WCAG 1.4.3, 4.5:1 against every surface it sits on. */
  | 'text'
  /** Borders, rules, focus rings, icon strokes. WCAG 1.4.11, 3:1. */
  | 'boundary'
  /**
   * Decoration that carries no information and never has text on it. Exempt
   * from both, and the exemption has to be argued in `why` rather than assumed.
   */
  | 'decorative'

export type Swatch = {
  /** The CSS custom property name, without the leading `--`. */
  name: string
  role: Role
  /** Surfaces this colour appears against, by name. Empty for a surface. */
  on: string[]
  /** Why this role and these surfaces. Read by the next person to add a colour. */
  why: string
}

/**
 * The registry.
 *
 * `on` lists the surfaces a colour genuinely sits against in the stylesheet,
 * not every surface that exists — checking `--band-ink` against white would
 * fail on a pairing that never renders, and a test that fails on things that
 * cannot happen gets suppressed.
 */
export const SWATCHES: Swatch[] = [
  { name: 'bg', role: 'surface', on: [], why: 'The page. Everything else is measured against it.' },
  {
    name: 'bg-well',
    role: 'surface',
    on: [],
    why: 'Recessed panels: the facts panel, note boxes, code. The most demanding light surface.',
  },
  {
    name: 'band',
    role: 'surface',
    on: [],
    why: 'The header band and the print badge fallback. Dark; only band-ink sits on it.',
  },
  {
    name: 'profile-earth',
    role: 'surface',
    on: [],
    why: 'The filled ground in the section drawing (run 11). A surface rather than a fill, because the IN TUNNEL label is written on it — the drawing was reported as unreadable, the ground is what made it readable, and a colour with text on it has to be checked like one.',
  },
  {
    name: 'surface-muted',
    role: 'surface',
    on: [],
    why: 'Quiet atlas notes and secondary panels. It is a surface, not an ink colour.',
  },
  {
    name: 'surface',
    role: 'surface',
    on: [],
    why: 'The raised white surface used by the editorial atlas panels and table treatment.',
  },
  {
    name: 'status-dated-bg',
    role: 'surface',
    on: [],
    why: 'Pale blue background for a dated snapshot; the accompanying status ink carries the meaning.',
  },
  {
    name: 'status-tbc-bg',
    role: 'surface',
    on: [],
    why: 'Pale amber background for a genuine TBC state; it is not a loading indicator.',
  },
  {
    name: 'status-conflict-bg',
    role: 'surface',
    on: [],
    why: 'Pale amber background for conflicting official values; the conflict label and text carry the meaning.',
  },

  {
    name: 'text',
    role: 'text',
    on: ['bg', 'bg-well', 'profile-earth'],
    why: 'Body copy and headings, on the page and inside wells — and the STREET LEVEL / ON VIADUCT / IN TUNNEL labels written on the section drawing, which is why the filled earth is listed here.',
  },
  {
    name: 'text-2',
    role: 'text',
    on: ['bg', 'bg-well'],
    why: 'Secondary prose, spec labels, reference metadata.',
  },
  {
    name: 'text-3',
    role: 'text',
    on: ['bg', 'bg-well'],
    why: 'Captions, footer, spine key, units. The colour that failed for four builds.',
  },
  { name: 'link', role: 'text', on: ['bg', 'bg-well'], why: 'Links in prose and in tables.' },
  {
    name: 'accent',
    role: 'text',
    on: ['bg', 'bg-well'],
    why: 'The per-page ink. The default here is the site neutral; the per-line values are derived in lib/lines.ts and checked separately against the 4.6 margin.',
  },
  {
    name: 'band-ink',
    role: 'text',
    on: ['band'],
    why: 'The wordmark and nav, on the dark header band only.',
  },
  {
    name: 'band-ink-dim',
    role: 'text',
    on: ['band'],
    why: 'Inactive nav items on the band. Dimmed, so it is the one most likely to slip.',
  },
  { name: 'status-ink', role: 'text', on: ['bg'], why: 'Neutral status labels in the coverage ledger.' },
  { name: 'status-good', role: 'text', on: ['bg'], why: 'Positive or source-backed status labels in the coverage ledger.' },
  { name: 'status-data', role: 'text', on: ['bg'], why: 'Structured-data status labels in the coverage ledger.' },
  { name: 'status-tbc', role: 'text', on: ['bg'], why: 'TBC status labels, deliberately distinct from a loading state.' },
  { name: 'status-gap', role: 'text', on: ['bg'], why: 'Not-researched, not-applicable and no-service status labels.' },

  {
    name: 'rule',
    role: 'boundary',
    on: ['bg', 'bg-well'],
    why: 'Hairline table and section rules. Non-text, so 3:1 — and it does not reach it, see BOUNDARY_EXEMPT.',
  },
  {
    name: 'rule-strong',
    role: 'boundary',
    on: ['bg', 'bg-well'],
    why: 'Emphasised rules, spec table heads, dashed placeholder borders.',
  },

  {
    name: 'accent-map',
    role: 'decorative',
    on: [],
    why: 'The official line colour, used as a large fill on maps and the accent bar. Never carries text — that is what --accent is for — and the accent bar is given an ink hairline on the pale lines precisely because the fill itself cannot be relied on for an edge.',
  },
  {
    name: 'amber',
    role: 'decorative',
    on: [],
    why: 'The dot-matrix wordmark and the print badge fallback dot. Ornament on the band; nothing reads it and nothing depends on distinguishing it.',
  },
]

/**
 * Boundaries that do not reach 3:1, and the argument for each.
 *
 * WCAG 1.4.11 applies to "visual information required to identify user
 * interface components and states". A hairline separating two rows of a table
 * is not that — the table is legible without it, the rule is a reading aid, and
 * darkening every rule to 3:1 would turn a quiet document into a grid. Stated
 * here rather than left as a silent pass, so the judgement is visible and can
 * be argued with.
 */
export const BOUNDARY_EXEMPT: Record<string, string> = {
  rule: 'A row separator, not a control boundary. No information is lost without it.',
  'rule-strong':
    'Section and table-head rules. Structural emphasis; headings carry the structure themselves.',
}

export const THRESHOLD: Record<Role, number> = {
  surface: 0,
  text: AA,
  boundary: AA_NON_TEXT,
  decorative: 0,
}

/** Parses `--name: #rrggbb` declarations out of a stylesheet. */
export function declaredColours(css: string): Record<string, string> {
  const out: Record<string, string> = {}
  for (const match of css.matchAll(/--([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\b/g)) {
    out[match[1]] = match[2].toUpperCase()
  }
  return out
}
