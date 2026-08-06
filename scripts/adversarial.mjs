/**
 * Tries to break the build, one hostile fixture at a time.
 *
 * Run: npm run adversarial
 *
 * Every other check in this repository asks "does the correct input work". This
 * asks the opposite, because the failure mode that matters for a reference site
 * is not a crash — it is a malformed input that builds *successfully* and
 * publishes something wrong. A file that fails loudly is safe. A file that
 * quietly renders `undefined` as a station name is not.
 *
 * Each case declares what it expects:
 *
 *   'build-fails'  the build must exit non-zero — the input is unusable
 *   'warns'        the build may succeed but must say something on stderr
 *   'clean'        the input is legal and must produce no complaint
 *
 * and, separately, an `assert` run over the built output. A case passes only if
 * both hold. Cases that expect a warning and get silence are the interesting
 * failures: that is the class the last four builds kept shipping.
 *
 * Fixtures are written into content/ and data/ and removed afterwards, always,
 * including on interrupt.
 */

import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const ROOT = process.cwd()
const CONTENT = path.join(ROOT, 'content', 'rail', 'lines')
const OUT = path.join(ROOT, 'out')

const created = new Set()
const backups = new Map()

function write(rel, body) {
  const full = path.join(ROOT, rel)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  if (fs.existsSync(full) && !created.has(full)) backups.set(full, fs.readFileSync(full))
  fs.writeFileSync(full, body)
  created.add(full)
}

function cleanup() {
  for (const full of created) {
    if (backups.has(full)) fs.writeFileSync(full, backups.get(full))
    else if (fs.existsSync(full)) fs.rmSync(full)
  }
  created.clear()
  backups.clear()
}
process.on('exit', cleanup)
process.on('SIGINT', () => { cleanup(); process.exit(130) })

/*
 * Both streams, on both paths.
 *
 * The first version of this returned only stdout when the build succeeded, and
 * every warning this project emits goes to stderr via console.warn. So the
 * harness reported "built silently" for inputs it had just been warned about
 * — a false negative in the tool built to find false negatives.
 */
function build() {
  try {
    const result = spawnSync('npm', ['run', 'build'], {
      cwd: ROOT,
      encoding: 'utf8',
      shell: true,
    })
    return {
      code: result.status ?? 1,
      output: (result.stdout ?? '') + (result.stderr ?? ''),
    }
  } catch (error) {
    return { code: 1, output: String(error) }
  }
}

const read = (rel) => {
  const full = path.join(OUT, rel)
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : null
}

/* ------------------------------------------------------------------ */

const CASES = [
  /* ---- malformed content ---- */
  {
    name: 'frontmatter with no body',
    expect: 'clean',
    files: { 'content/rail/lines/zz-empty-body.md': '---\ntitle: Empty Body\nline: BR\n---\n' },
    assert: () => (read('rail/lines/zz-empty-body/index.html') ? null : 'page was not generated'),
  },
  {
    name: 'completely empty file',
    expect: 'clean',
    files: { 'content/rail/lines/zz-empty.md': '' },
    assert: () => {
      const html = read('rail/lines/zz-empty/index.html')
      if (!html) return 'page was not generated'
      // Must fall back to a title derived from the slug, never render blank.
      return /<h1[^>]*>\s*<\/h1>/.test(html) ? 'rendered an empty <h1>' : null
    },
  },
  {
    /*
     * An unclosed fence makes gray-matter read the entire file as YAML, which
     * then fails to parse. Failing the build is correct — the file is unusable
     * and guessing the author's intent would be worse. What matters is that
     * the error names the file rather than sending you hunting across 46 pages.
     */
    name: 'unterminated frontmatter fence',
    expect: 'build-fails',
    files: { 'content/rail/lines/zz-unterminated.md': '---\ntitle: Unterminated\nline: BR\n\nBody text here.\n' },
    namesFile: 'zz-unterminated',
  },
  {
    name: 'invalid YAML in frontmatter',
    expect: 'build-fails',
    files: { 'content/rail/lines/zz-bad-yaml.md': '---\ntitle: "unclosed\nline: [BR\nfacts: {{{\n---\n\nBody.\n' },
    namesFile: 'zz-bad-yaml',
  },
  {
    name: 'unknown station code in prose',
    expect: 'warns',
    files: { 'content/rail/lines/zz-badcode.md': '---\ntitle: Bad Code\nline: BR\n---\n\nTrains run to BR99 and back.\n' },
    assert: () => {
      const html = read('rail/lines/zz-badcode/index.html')
      if (!html) return 'page was not generated'
      return html.includes('class="badge"') && html.includes('>BR99<')
        ? 'BR99 rendered as a real badge'
        : null
    },
  },
  {
    name: 'nonexistent line code in frontmatter',
    expect: 'warns',
    files: { 'content/rail/lines/zz-badline.md': '---\ntitle: Bad Line\nline: ZZ\n---\n\nBody.\n' },
  },
  {
    name: 'spine range referencing unknown stations',
    expect: 'warns',
    files: { 'content/rail/lines/zz-badspine.md': '---\ntitle: Bad Spine\nline: BR\nspine: BR97-BR99\n---\n\nBody.\n' },
  },
  {
    name: 'broken formation syntax',
    expect: 'clean',
    files: { 'content/rail/lines/zz-formation.md': '---\ntitle: Bad Formation\nline: BR\nformation: "=== + + = ="\n---\n\nBody.\n' },
    assert: () => {
      const html = read('rail/lines/zz-formation/index.html')
      if (!html) return 'page was not generated'
      /*
       * Scoped to the formation section. Searching the whole document matched
       * `$undefined` in React's serialised payload — a framework marker, not
       * rendered content — and reported a bug that did not exist.
       */
      const section = html.match(/<section class="formation[\s\S]*?<\/section>/)?.[0]
      if (!section) return null // rendering nothing for unparseable input is correct
      return /\b0 cars\b|NaN|undefined/.test(section) ? 'formation diagram rendered nonsense' : null
    },
  },
  {
    name: 'enormous title and summary',
    expect: 'clean',
    files: {
      'content/rail/lines/zz-huge.md':
        `---\ntitle: ${'Very '.repeat(400)}Long\nsummary: ${'word '.repeat(3000)}\nline: BR\n---\n\nBody.\n`,
    },
    assert: () => {
      const html = read('rail/lines/zz-huge/index.html')
      if (!html) return 'page was not generated'
      const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ''
      return description.length > 400 ? `meta description is ${description.length} chars, unbounded` : null
    },
  },

  /* ---- unicode ---- */
  {
    name: 'RTL override injection in a title',
    expect: 'clean',
    files: {
      'content/rail/lines/zz-rtl.md':
        '---\ntitle: "Wenhu ‮ enil uhneW ‬ Line"\nline: BR\n---\n\nBody with ‮ reversed ‬ text.\n',
    },
    assert: () => {
      const html = read('rail/lines/zz-rtl/index.html')
      if (!html) return 'page was not generated'
      // A bidi override that escapes its element can reorder unrelated UI.
      // It must at minimum still be inside the page, not in an attribute that
      // breaks parsing.
      return html.includes('<h1') ? null : 'page structure broken by bidi control characters'
    },
  },
  {
    name: 'zero-width joiners, combining marks, emoji',
    expect: 'clean',
    files: {
      'content/rail/lines/zz-unicode.md':
        '---\ntitle: "Zero‍width é́́́ and 🚇🚊"\nline: BR\n---\n\nStation 動物園‍園 with emoji 🚇 and combining á́́.\n',
    },
    assert: () => {
      const html = read('rail/lines/zz-unicode/index.html')
      if (!html) return 'page was not generated'
      return html.includes('🚇') ? null : 'emoji was dropped from the output'
    },
  },
  {
    name: 'Han characters not in the font subset',
    /*
     * This case USED to expect `clean`, and that was the bug rather than the
     * specification. Adding Chinese to a page without re-running `npm run
     * fonts` shipped a subset that could not draw it: a reader with a system
     * CJK font saw nothing wrong, a reader without one saw tofu, and no part of
     * the build knew. Run 2 recorded it as an open hole (§19.3).
     *
     * postbuild now compares the Han rendered on every built page against the
     * subset that page declares, and refuses. So the expectation flips: this
     * input is no longer legal, and the fixture asserts the refusal names the
     * characters rather than failing vaguely.
     */
    expect: 'build-fails',
    files: {
      // Deliberately obscure characters that the committed subset cannot hold.
      'content/rail/lines/zz-han.md': '---\ntitle: Rare Han\nline: BR\n---\n\nRare: 龘齾靐龗 here.\n',
    },
    assert: ({ output = '' } = {}) => {
      if (!/not in the subset they load/.test(output)) {
        return 'the build failed but not with the missing-glyph message'
      }
      return /[龘齾靐龗]/.test(output) ? null : 'the failure did not name the missing characters'
    },
  },

  /* ---- injection ---- */
  {
    name: 'javascript: URL in a Markdown link',
    expect: 'warns',
    files: {
      'content/rail/lines/zz-jsurl.md':
        '---\ntitle: JS URL\nline: BR\n---\n\n[click](javascript:alert(1)) and <javascript:alert(2)>\n',
    },
    assert: () => {
      const html = read('rail/lines/zz-jsurl/index.html')
      if (!html) return 'page was not generated'
      return /href="javascript:/i.test(html) ? 'javascript: URL survived into the output' : null
    },
  },
  {
    name: 'data: URL in a Markdown image',
    expect: 'warns',
    files: {
      'content/rail/lines/zz-dataurl.md':
        '---\ntitle: Data URL\nline: BR\n---\n\n![x](data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==)\n',
    },
    assert: () => {
      const html = read('rail/lines/zz-dataurl/index.html')
      if (!html) return 'page was not generated'
      return /src="data:text\/html/i.test(html) ? 'data:text/html URL survived' : null
    },
  },
  {
    name: 'raw HTML and event handlers in Markdown',
    expect: 'clean',
    files: {
      'content/rail/lines/zz-html.md':
        '---\ntitle: Raw HTML\nline: BR\n---\n\n<script>alert(1)</script>\n\n<img src=x onerror=alert(2)>\n\n<span onmouseover="alert(3)">x</span>\n',
    },
    assert: () => {
      const html = read('rail/lines/zz-html/index.html')
      if (!html) return 'page was not generated'
      const prose = html.match(/<div class="prose">[\s\S]*?<\/div>/)?.[0] ?? ''
      if (/<script/i.test(prose)) return 'a <script> element was emitted into the prose'
      if (/\son(error|load|mouseover|click)\s*=/i.test(prose)) return 'an event handler attribute survived'
      return null
    },
  },
  {
    name: 'HTML in frontmatter values',
    expect: 'clean',
    files: {
      'content/rail/lines/zz-fmhtml.md':
        '---\ntitle: \'FM <script>alert(1)</script>\'\nsummary: \'<img src=x onerror=alert(2)>\'\nline: BR\nfacts:\n  - label: \'<b>L</b>\'\n    value: \'</td><script>alert(3)</script>\'\n---\n\nBody.\n',
    },
    assert: () => {
      const html = read('rail/lines/zz-fmhtml/index.html')
      if (!html) return 'page was not generated'
      const body = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
      return /<script>alert/.test(body) ? 'frontmatter HTML was not escaped' : null
    },
  },
]

/* ------------------------------------------------------------------ */

console.log('\n═══ Adversarial fixtures ═══\n')

let failures = 0
const results = []

for (const testCase of CASES) {
  for (const [rel, body] of Object.entries(testCase.files)) write(rel, body)

  const { code, output } = build()
  const warned = /⚠/.test(output)
  const built = code === 0

  let verdict = null
  if (testCase.expect === 'build-fails' && built) verdict = 'build succeeded but should have failed'
  if (testCase.expect === 'clean' && !built) verdict = 'build failed but the input is legal'
  if (testCase.expect === 'clean' && warned) verdict = 'build warned about legal input'
  if (testCase.expect === 'warns' && built && !warned) verdict = 'built silently — no warning'
  if (testCase.expect === 'warns' && !built) verdict = 'build failed; a warning was expected'

  /*
   * A build that fails is only useful if it says WHICH file failed. "Unexpected
   * token at line 3" across 46 pages is a scavenger hunt, not an error message.
   */
  if (!verdict && !built && testCase.namesFile && !output.includes(testCase.namesFile)) {
    verdict = `build failed without naming ${testCase.namesFile} in its output`
  }

  /*
   * The assertion used to run only when the build succeeded, which meant a
   * `build-fails` case could assert nothing about *why* it failed — any
   * non-zero exit counted. The font-subset case needs the opposite: it has to
   * check that the refusal names the missing characters, because "the build
   * broke somehow" is not evidence the right check fired.
   */
  if (!verdict && testCase.assert) verdict = testCase.assert({ output, built, code })

  results.push({ name: testCase.name, expect: testCase.expect, code, warned, verdict })
  if (verdict) failures++

  console.log(
    `  ${verdict ? '✗' : '✓'} ${testCase.name.padEnd(42)} ` +
      `expect=${testCase.expect.padEnd(12)} exit=${code} warned=${warned ? 'y' : 'n'}` +
      (verdict ? `\n      ${verdict}` : ''),
  )

  cleanup()
}

/* Restore a good build so later checks are not run against fixture output. */
build()

console.log(`\n  ${CASES.length - failures}/${CASES.length} cases behaved as specified\n`)

fs.writeFileSync(
  path.join(ROOT, 'docs', 'adversarial-results.json'),
  JSON.stringify({ generated: new Date().toISOString(), results }, null, 2),
)

process.exit(failures > 0 ? 1 : 0)
