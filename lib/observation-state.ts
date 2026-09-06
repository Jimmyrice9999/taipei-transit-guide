export type ObservationState = 'current' | 'dated' | 'tbc' | 'conflict'

/**
 * Gives shared fact/spec furniture a small amount of editorial semantics.
 * This is deliberately derived from the author's existing label/value rather
 * than adding a second frontmatter schema: TBC and conflict wording already
 * carry meaning in the content corpus.
 */
export function getObservationState(label: string, value: string): ObservationState {
  const text = `${label} ${value}`
  if (/\bTBC\b/i.test(text)) return 'tbc'
  if (/conflict|conflicting|different snapshots|disagree/i.test(text)) return 'conflict'
  if (/\b20\d{2}-\d{2}-\d{2}\b/.test(value) || /as[- ]of|retriev|snapshot|updated|opened|operation began/i.test(label)) {
    return 'dated'
  }
  return 'current'
}

export function observationLabel(state: ObservationState): string {
  switch (state) {
    case 'dated':
      return 'dated'
    case 'tbc':
      return 'TBC'
    case 'conflict':
      return 'conflict'
    default:
      return ''
  }
}
