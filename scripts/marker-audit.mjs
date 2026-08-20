/**
 * Catches citation markers that were rejoined onto the next line after a
 * sentence-ending period.
 *
 * A line-scoped grep for `\\n` cannot see a newline inside one file, so this
 * intentionally reads each Markdown file as a whole and applies one
 * multiline expression. The marker belongs on the same line as the sentence
 * it sources; otherwise the claim classifier can lose the association.
 *
 * Run: npm run markers
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT = path.join(ROOT, 'content')
const DEFECT = /\.\r?\n\[\^[^\]\r\n]+\]/g

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, found)
    else if (entry.isFile() && entry.name.endsWith('.md')) found.push(full)
  }
  return found
}

const problems = []
for (const file of walk(CONTENT)) {
  // Normalise CRLF so the same whole-file check behaves identically on
  // Windows and CI.
  const source = fs.readFileSync(file, 'utf8').replace(/\r\n?/g, '\n')
  const matches = [...source.matchAll(DEFECT)]
  if (matches.length === 0) continue

  const relative = path.relative(ROOT, file).replace(/\\/g, '/')
  for (const match of matches) {
    const line = source.slice(0, match.index).split('\n').length
    problems.push(`${relative}:${line}`)
  }
}

if (problems.length > 0) {
  console.error(`marker-audit: ${problems.length} citation marker(s) follow a period on the next line`)
  for (const problem of problems) console.error(`  ${problem}`)
  process.exitCode = 1
} else {
  console.log(`marker-audit: clean (${walk(CONTENT).length} Markdown files checked)`)
}
