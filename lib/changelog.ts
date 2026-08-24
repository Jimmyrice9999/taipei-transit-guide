import fs from 'node:fs'
import path from 'node:path'

export type ChangelogEntry = {
  number: number
  title: string
  date: string
  summary: string
  anchor: string
}

const HEADING = /^# Run (\d+)\s+[-—]\s+(.+?)\s*$/

function plain(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*`_]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function anchor(value: string): string {
  return value.toLowerCase().replace(/[—–]/g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function getChangelogEntries(): ChangelogEntry[] {
  const file = path.join(process.cwd(), 'docs', 'run-log.md')
  if (!fs.existsSync(file)) return []
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  const entries: ChangelogEntry[] = []
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(HEADING)
    if (!match) continue
    const heading = match[2]
    const date = heading.match(/(\d{1,2} \w+ \d{4})$/)?.[1] ?? ''
    const title = date ? heading.slice(0, -date.length).replace(/[,; ]+$/, '') : heading
    const body: string[] = []
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      if (/^# Run \d+\s+[-—]/.test(lines[cursor])) break
      if (!lines[cursor].trim() || lines[cursor].startsWith('#') || lines[cursor].startsWith('---')) continue
      if (lines[cursor].startsWith('- **') || lines[cursor].startsWith('## ')) continue
      body.push(plain(lines[cursor]))
      if (body.join(' ').length >= 320) break
    }
    entries.push({
      number: Number(match[1]),
      title,
      date,
      summary: `${body.join(' ').slice(0, 320).replace(/\s+\S*$/, '')}…`,
      anchor: anchor(`run-${match[1]}-${title}`),
    })
  }
  return entries
}
