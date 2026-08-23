import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const CONTENT = path.join(process.cwd(), 'content')

function markdownFiles(directory: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) markdownFiles(file, files)
    else if (entry.name.endsWith('.md')) files.push(file)
  }
  return files
}

test('published pages do not describe unfinished site or page coverage', () => {
  const forbidden = [
    /^##\s+What (?:this page|is) (?:does )?not yet\b/im,
    /^##\s+What is not yet on this page\b/im,
    /^##\s+(?:(?:What is not|Not) established(?:\s+(?:here|on this page))?|Scope)\s*$/im,
    /^##\s+.*\bwhat is not known\b.*$/im,
    /\b(?:this page|this site|this guide) (?:does not yet|has not yet|doesn't yet)\b/i,
    /\b(?:this page|this site|this guide|this project)\s+(?:cannot yet|has not yet|hasn't yet|has not been able to source|is deliberately narrower)\b/i,
    /\b(?:not researched yet|next task on this page|still not reproduced on this page)\b/i,
    /\b(?:future page|future version|future coverage)\b/i,
  ]
  const findings: string[] = []

  for (const file of markdownFiles(CONTENT)) {
    const text = fs.readFileSync(file, 'utf8')
    for (const pattern of forbidden) {
      if (pattern.test(text)) {
        findings.push(path.relative(process.cwd(), file).replace(/\\/g, '/'))
        break
      }
    }
  }

  assert.deepEqual(
    findings,
    [],
    'coverage gaps belong in docs/research, not reader-facing content',
  )
})
