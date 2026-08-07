/*
 * Flags research claims the site has already contradicted.
 *
 *   npm run research
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * The corpus under docs/research/ is a lead file, and it has no memory. Run 5
 * checked two claims in `sanying-line.md` and killed both — the free-trial hours
 * had changed, and "runs at random" was nobody's sourced claim — and the file
 * still says both. Anyone reading it fresh reintroduces them.
 *
 * That is worse than a stale document. A research file that has been *checked*
 * and still reads as unchecked actively costs work: the next reader repeats the
 * verification, or worse, does not.
 *
 * So each research file carries a `## Checked and failed` section listing what
 * was disproved, what disproved it, and when. This script checks two things:
 *
 *   1. Every entry in a "Checked and failed" section names a date and a reason.
 *      A bare "this was wrong" is not a record; it is a rumour about a rumour.
 *   2. A claim listed as failed does not still appear, unqualified, elsewhere in
 *      the same file. That is the specific failure sanying-line.md had.
 *
 * It cannot detect an unrecorded contradiction — nothing can, short of reading.
 * What it can do is stop a recorded one from rotting back in, which is the case
 * that actually happened.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const RESEARCH = path.join(ROOT, 'docs', 'research')

const HEADING = /^##\s+Checked and failed\s*$/im
/**
 * `- **<claim>** — <what disproved it>. Checked <date>.`
 *
 * The detail runs to the next bullet or the end of the section, not to the end
 * of the line. An entry worth writing is longer than one line, and the first
 * version of this pattern stopped at the newline — which made it report a
 * missing date on an entry that had one on its second line. Caught by running
 * it against the first entry written for it.
 */
const ENTRY = /^-\s+\*\*(.+?)\*\*\s+—\s+([\s\S]*)$/

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'INDEX.md'
      ? [full]
      : []
  })
}

const problems = []
let files = 0
let entries = 0

for (const file of walk(RESEARCH)) {
  files++
  const rel = path.relative(ROOT, file).replace(/\\/g, '/')
  /*
   * Normalised for the same reason readContent() is: this file matches
   * multi-line patterns against source Markdown, and the repository is CRLF on
   * Windows and LF on the runner. The claims counter had exactly this shape of
   * bug and it made a tracked metric platform-dependent for five runs (run-log
   * §75). The other readers in scripts/ mostly parse built HTML, which Next
   * emits identically either way; this one parses hand-written prose.
   */
  const source = fs.readFileSync(file, 'utf8').replace(/\r\n?/g, '\n')

  const at = source.search(HEADING)
  if (at < 0) continue

  // The section runs to the next `## ` heading or to the end of the file.
  const after = source.slice(at)
  const end = after.slice(3).search(/^##\s/m)
  const section = end < 0 ? after : after.slice(0, end + 3)
  const before = source.slice(0, at)

  /*
   * Split on the bullet marker rather than matching bullets with one regex.
   * A lookahead ending in `$` under the `m` flag stops at the first newline,
   * so multi-line entries were silently truncated to their first line — which
   * made this report a missing date on an entry whose date was on line two.
   */
  const found = section
    .split(/\n(?=-\s+\*\*)/)
    .map((chunk) => chunk.trim().match(ENTRY))
    .filter((m) => m !== null)

  if (found.length === 0) {
    problems.push(`${rel}: has a "Checked and failed" section with no entries in it.`)
    continue
  }

  for (const [, claim, detail] of found) {
    entries++

    if (!/\b(19|20)\d{2}\b/.test(detail)) {
      problems.push(
        `${rel}: "${claim}" is listed as failed but the entry names no date. ` +
          `When it was checked is the whole value of the record.`,
      )
    }

    if (detail.trim().length < 25) {
      problems.push(
        `${rel}: "${claim}" is listed as failed with no reason given. ` +
          `Say what disproved it, or the next reader has to check it again.`,
      )
    }

    /*
     * The rot case. A claim recorded as failed must not still be asserted
     * earlier in the same file — which is exactly what sanying-line.md did with
     * its trial hours for two runs.
     *
     * Matched on the claim's own distinctive fragment rather than fuzzily: the
     * entry author chooses what to put between the asterisks, so they choose
     * what this looks for. A false positive is fixed by writing a better entry.
     */
    const needle = claim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    if (new RegExp(needle, 'i').test(before)) {
      problems.push(
        `${rel}: "${claim}" is recorded as checked and failed, and still appears ` +
          `earlier in the file. Strike it through or qualify it there, or the ` +
          `next reader will publish it.`,
      )
    }
  }
}

console.log(`research: ${files} file(s), ${entries} recorded as checked and failed.`)

if (problems.length === 0) {
  console.log('research: clean.')
  process.exit(0)
}

console.log('')
for (const problem of problems) console.log(`  ✗ ${problem}`)
console.log(`\nresearch: ${problems.length} problem(s).`)
process.exit(1)
