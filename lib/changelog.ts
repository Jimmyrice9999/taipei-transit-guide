import fs from 'node:fs'
import path from 'node:path'

export type ChangelogEntry = {
  number: number
  title: string
  date: string
  summary: string
  anchor: string
  kind: 'Correction' | 'New coverage' | 'Update'
}

const HEADING = /^#{1,2}\s+Run\s+(\d+)(.*?)\s+[-—]\s+(.+?)\s*$/i
const RUN_BOUNDARY = /^#{1,2}\s+Run\s+\d+/i
const INTERNAL = /(?:\b(?:gate(?::(?:fast|full))?|npm run|unit tests?|axe|browser verification|build generated|postbuild|commit(?:ted)?|hash|CI|scouts?|generated audit|not reached|part \d+|GitHub Actions|concurrent (?:writer|fork)|separate product|live Codex)\b|(?:probes|content|docs)\/|[A-Z]:\\)/i
const READER_SIGNAL = /\b(?:add(?:ed|s)?|publish(?:ed|es)?|correct(?:ed|ion|s)?|fix(?:ed|es)?|new|expand(?:ed|s)?|deepen(?:ed|s)?|source(?:d|s)?|cover(?:ed|age|s)?|replace(?:d|s)?|remove(?:d|s)?|rename(?:d|s)?|open(?:ed|ing|s)?|close(?:d|s)?|update(?:d|s)?)\b/i

function plain(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/[*`_#>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function anchor(value: string): string {
  return value.toLowerCase().replace(/[—–]/g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function dateFrom(value: string): string {
  return value.match(/\b\d{4}-\d{2}-\d{2}\b/)?.[0]
    ?? value.match(/\b\d{1,2}\s+\w+\s+\d{4}\b/)?.[0]
    ?? ''
}

function cleanTitle(prefix: string, heading: string): string {
  return plain(`${prefix} ${heading}`)
    .replace(/^\s*(?:Parts?\s+[\d/]+(?:\s+continuation)?|continuation|follow-up)\s*[-,:]?\s*/i, '')
    .replace(/\s*\([^)]*\d{4}[^)]*\)\s*$/, '')
    .replace(/[,;]?\s+\d{1,2}\s+\w+\s+\d{4}(?:\s+[-—].*)?$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function paragraphs(lines: string[]): string[] {
  const out: string[] = []
  let current: string[] = []
  const flush = () => {
    const value = plain(current.join(' '))
    if (value) out.push(value)
    current = []
  }
  for (const line of lines) {
    if (!line.trim() || /^#{1,6}\s/.test(line) || /^---+$/.test(line)) {
      flush()
      continue
    }
    if (/^\s*[-*]\s+https?:\/\//.test(line)) continue
    current.push(line.replace(/^\s*[-*]\s+/, ''))
  }
  flush()
  return out
}

function bestSummary(lines: string[]): string {
  const candidates = paragraphs(lines)
    .filter((value) => value.length >= 45 && !INTERNAL.test(value))
    .sort((a, b) => Number(READER_SIGNAL.test(b)) - Number(READER_SIGNAL.test(a)) || b.length - a.length)
  const value = candidates[0] ?? ''
  if (!value) return ''
  const clipped = value.length > 360 ? value.slice(0, 360).replace(/\s+\S*$/, '') : value
  return /[.!?]$/.test(clipped) ? clipped : `${clipped}.`
}

function kindOf(title: string, summary: string): ChangelogEntry['kind'] {
  const value = `${title} ${summary}`
  if (/correct|fix|wrong|error|stale|replace|remove/i.test(value)) return 'Correction'
  if (/add|new|publish|open|coverage|expand|deepen/i.test(value)) return 'New coverage'
  return 'Update'
}

export function getChangelogEntries(): ChangelogEntry[] {
  const file = path.join(process.cwd(), 'docs', 'run-log.md')
  if (!fs.existsSync(file)) return []
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  const raw: Array<{ number: number; title: string; date: string; summary: string }> = []

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(HEADING)
    if (!match) continue
    let end = index + 1
    while (end < lines.length && !RUN_BOUNDARY.test(lines[end])) end += 1
    const title = cleanTitle(match[2], match[3])
    const summary = bestSummary(lines.slice(index + 1, end))
    if (!summary) continue
    raw.push({ number: Number(match[1]), title: title || `Research update ${match[1]}`, date: dateFrom(lines[index]), summary })
  }

  const grouped = new Map<number, typeof raw>()
  for (const entry of raw) grouped.set(entry.number, [...(grouped.get(entry.number) ?? []), entry])

  return [...grouped.entries()]
    .map(([number, parts]) => {
      const preferred = parts.find((part) => /add|publish|correct|fix|new|coverage|deepen/i.test(`${part.title} ${part.summary}`)) ?? parts[0]
      const summary = [...new Set(parts.map((part) => part.summary))]
        .filter((value) => !INTERNAL.test(value))
        .slice(0, 2)
        .join(' ')
      return {
        number,
        title: preferred.title,
        date: parts.find((part) => part.date)?.date ?? '',
        summary,
        anchor: anchor(`change-${number}-${preferred.title}`),
        kind: kindOf(preferred.title, summary),
      }
    })
    .filter((entry) => entry.summary)
    .sort((a, b) => a.number - b.number)
}
