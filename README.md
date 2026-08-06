# Taipei Transit Guide

An English-language reference site for public transport in Taipei. Built with
Next.js, exported as a static site, hosted on GitHub Pages.

## Writing pages

All content lives in `/content` as Markdown. **You never need to touch the code
to add a page.**

The folder layout is the site structure:

```
content/
  train/                      <- a section (appears in the top nav)
    _index.md                 <- names and describes the folder
    lines/                    <- a page type
      _index.md
      wenhu-line.md           <- a page: /train/lines/wenhu-line/
    rolling-stock/
    depots/
  bus/
    routes/
    operators/
```

- A **new page** — drop a `.md` file into a type folder.
- A **new page type** — make a folder with an `_index.md` inside it.
- A **new section** — make a top-level folder with an `_index.md`. It appears in
  the nav automatically.

Filenames become URLs, so use lowercase words separated by hyphens:
`wenhu-line.md`, not `Wenhu Line.md`.

### Page frontmatter

The block between `---` lines at the top of a file is frontmatter — structured
data about the page, as opposed to the page's prose.

```yaml
---
title: Wenhu Line              # heading and nav label
summary: One-sentence blurb.   # shown under the title and in index listings
order: 1                       # sort position in listings (lower first)
line: BR                       # accent colour for the whole page
stub: true                     # shows the "stub page" notice; remove when done
updated: 2026-08-05            # printed at the foot of the page
facts:                         # the "Quick facts" strip above the prose
  - label: Operator
    value: Taipei Rapid Transit Corporation
  - label: Stations
    value: "24"
    source: dorts-wenhu        # optional: cite a source id from below
sources:                       # everything this page cites
  - id: dorts-wenhu            # what [^dorts-wenhu] in the body refers to
    title: Wenshan—Neihu Line
    titleOriginal: 文山內湖線   # as published, if not in English
    publisher: Taipei City Government, DORTS
    url: https://www.dorts.gov.taipei/cp.aspx?n=DBAC040496EFAB94
    accessed: 2026-08-06
    kind: primary              # primary | secondary — required
    lang: zh-Hant              # required if titleOriginal is set
    note: What this settles, or what it doesn't.
---
```

Every field is optional except `title`. `facts` has no fixed schema — a Line
page and a Depot page can list entirely different rows, and you can add a new
row just by writing one.

`line` takes a code from `lib/lines.ts` — `BR`, `R`, `G`, `O`, `BL`, `Y`, `A`.
It sets the accent bar, headings rules, table rules and eyebrow for that page.
Omit it and the page uses a neutral graphite.

### Citations

Sourcing is the point of this site, so it is part of writing a page rather than
an afterthought.

Declare a source once in the `sources:` block above, then cite it:

- **in prose**, with a marker: `Route length is 25.17 km.[^dorts-wenhu]` — it
  renders as a numbered superscript linking to the references list;
- **on a fact or spec row**, with `source: dorts-wenhu` — it renders as the same
  mark beside the value.

Every page that declares sources gets a **References** section at the foot
automatically, with each entry marked *primary* or *secondary* in words, and a
line saying how many of its sources are primary. Everything cited anywhere on
the site is collected at `/data/sources/`.

`kind:` is not optional and there is no default. The line-colour episode proved
that a citation to an official source can itself be wrong, so "who says this"
has to travel with the claim.

```bash
npm run cite      # every marker resolves; every entry is complete
npm run claims    # sourced / TBC / asserted-without-a-source, and the count
```

`npm run cite` **fails** on a marker that resolves to nothing, on an incomplete
entry, and on a `[^id]:` footnote definition (which would make remark take over
every marker in the file). It warns on a source you listed and never cited.

`npm run claims` classifies every checkable statement in `content/` into three
states, and `tests/sourcing.test.mts` fails if the third one — asserted, with no
source — rises above the committed baseline in `docs/claims-baseline.json`. It
may fall. It may not rise.

### Station code badges

Write a station code anywhere — a table cell, a sentence, a `facts` value — and
it renders as a coloured badge automatically:

```markdown
The line runs from Taipei Zoo BR01 to Nangang Exhibition Center BR24.
```

There is no syntax to remember. To stop a code becoming a badge, wrap it in
backticks: `` `BR01` ``.

**Codes are checked against `lib/stations.ts` at build time.** A code that is
not a real station is left as plain text and reported:

```
⚠ unknown station code "BR99" in content/train/lines/wenhu-line.md
  "BR99" is not a station on that line — most likely a typo.
```

So writing a station list proofreads it. When you start on a new line, add its
stations to `lib/stations.ts` first, or every code will warn.

### Folder frontmatter (`_index.md`)

```yaml
---
title: Rolling Stock
description: Shown on the section and index pages.
order: 2
---
```

### Body text

Standard Markdown, plus GitHub-style tables:

```markdown
| Code | Station | Interchange |
| --- | --- | --- |
| BR01 | Taipei Zoo | — |
```

Link to other pages with site-absolute paths, including the trailing slash:

```markdown
See [Muzha Depot](/train/depots/muzha-depot/).
```

## Running it locally

```bash
npm install     # once
npm run dev     # then open http://localhost:3000
```

The dev server reloads when you save a Markdown file.

```bash
npm run build   # writes the finished static site to /out
```

### ⚠️ Always run `npm run build` before pushing

**The dev server does not exercise the static export.** `output: 'export'` is
switched on for production builds only — that was a deliberate trade, because
with it on in development a mistyped URL throws a 500 instead of showing your
own 404 page. The cost is that `npm run dev` succeeding does **not** prove the
site will export.

`npm run build` is the only thing that checks:

- that every page can actually be pre-rendered to static HTML
- that no station code is unknown — badge warnings only appear here
- that TypeScript is clean

The deploy workflow runs it too, so a broken export fails in CI rather than
publishing. Running it locally just means finding out in 30 seconds instead of
three minutes.

## Station data — the TDX pipeline

Station names, codes and running order come from **TDX**, the Ministry of
Transportation and Communications' open data platform, rather than from
transcription. The badge validator checks against that data, so `BR25` fails the
build.

### The pipeline never runs at build time

That is deliberate. GitHub Actions has no TDX credentials, and the site must not
fail to deploy because someone else's API is down.

```
npm run tdx        fetches from TDX  →  writes data/tdx/*.json   (commit these)
npm run stations   reads data/tdx/   →  writes lib/stations.generated.ts
npm run palette    confirms the official colours still clear WCAG AA
npm run fonts      regenerates the Chinese subset (station names are Chinese too)
```

Only the first needs credentials or a network. Everything downstream reads the
committed JSON, so it works in CI and for anyone without a key.

**Line colours come from the same fetch.** `lib/lines.ts` reads `LineColor`
straight out of `data/tdx/line*.json`, so refetching updates the palette and
`npm run palette` re-derives every badge and accent from it. Nothing about colour
is hand-maintained any more.

Three operators are fetched, not one: TRTC for Taipei Metro, plus a single line
record each from NTMC and TYMC, because the Circular Line and Airport MRT belong
to New Taipei Metro and Taoyuan Metro. A TRTC-only fetch returns five lines and
leaves those two without official colours.

`StationExit` is deliberately not fetched — exit numbering is unused, and it was
large enough to trip the rate limit. Requests are paced 1.5s apart and retry on
HTTP 429, honouring `Retry-After`.

### When to bother re-running

Rarely. Station lists change when stations open or are renamed — realistically
once every year or two. Re-run when:

- a station opens, closes or is renamed
- you start writing about a line whose stations are not yet pulled
- you want to confirm the data is still current before a push

There is no benefit to running it on a schedule.

### Credentials

`.env.local` (gitignored) needs:

```
TDX_CLIENT_ID=…
TDX_CLIENT_SECRET=…
```

Get them from **tdx.transportdata.tw → 會員專區 → 資料服務金鑰**. If the token
request fails with `invalid_client`, the request was fine and the key was
rejected — regenerate it rather than debugging the script. `npm run tdx -- --probe`
checks connectivity and reports which datasets exist without writing anything.

### The three files, and which you may edit

| File | Edit? | What it is |
| --- | --- | --- |
| `data/tdx/*.json` | No | Raw official data, committed. Sorted with stable key order so a refetch diffs cleanly. |
| `lib/stations.generated.ts` | **No** | Written by `npm run stations`. |
| `lib/station-overlay.ts` | **Yes** | Local research TDX does not publish — elevated vs underground. Never overwritten by a refetch. |
| `lib/stations.seed.ts` | No | The original hand transcription, kept as the reconciliation baseline. |

`npm run stations` prints every disagreement between the seed and official data
rather than silently overwriting — that report is the point of the pipeline.

### Other commands

| Command | When to run it |
| --- | --- |
| `npm run assets` | Runs all three generators below in order. |
| `npm run fonts` | After adding Chinese characters to any page — **after `npm run build`**, which it reads. Rebuilds both subset webfonts. Commit `public/fonts/`. |
| `npm run cite` | Before pushing. Every citation marker resolves to a source entry; every entry is complete. |
| `npm run claims` | Any time. Counts sourced / TBC / asserted-without-a-source across `content/`. `--list` prints them. |
| `npm run determinism` | After changing anything that generates output. Two clean builds, compared byte for byte. Slow. |
| `npm run wordmark` | Only if the site name or dot pitch changes. Regenerates `public/wordmark.svg`. |
| `npm run favicon` | Only if you change the site mark. Regenerates `app/favicon.ico`. |
| `npm run palette` | After correcting a line colour in `lib/lines.ts`. Prints the derived palette and fails if anything drops below WCAG AA. |
| `npm run metrics` | If a typeface changes. Re-derives the Chinese `size-adjust` values from measured font metrics. |
| `npm run weigh` | After `npm run build`. Reports what the site weighs on disk and what a phone actually downloads. |
| `npm run tdx` | Rarely — when a station opens or is renamed. Fetches official data. Needs credentials. |
| `npm run stations` | After `npm run tdx`, or after editing `lib/station-overlay.ts`. No network. |
| `npm test` | Before pushing. Builds, then runs every suite against the export. |
| `npm run check` | After a build. Walks `out/` and reports broken links, dangling anchors and orphan pages. |
| `npm run geometry:audit` | After a refetch. Whether each line's segments chain, and how far stations sit from their alignment. |

## Tests

```bash
npm test          # builds, then runs all five suites
npm run test:unit # suites only, against whatever is already in out/
```

Node's built-in test runner, no framework — the suites are `.mts` and Node runs
them directly. **This needs Node 23.6 or newer**; on Node 22 they do not run at
all. CI pins 24.

| Suite | What it protects |
| --- | --- |
| `tests/data-integrity` | The committed station registry against `data/tdx/`: names, coordinates, contiguous sequences, no duplicate codes, reciprocal interchanges, trunk-vs-branch routes. |
| `tests/contrast` | Every derived colour against the real 4.5:1, plus the 4.6 derivation margin, plus which lines need a hairline. |
| `tests/geometry` | Chaining from both ends, simplification tolerance, no station beyond 200 m, and that measured lengths agree with the operators' published ones. |
| `tests/markdown` | The badge tokenizer including branch codes, `zh-Hant` tagging, frontmatter validity, formation notation. |
| `tests/build-output` | The exported HTML: page inventory, no unresolved badges, no leaked `undefined`, no broken links. |

The build-output suite reads `out/`, so it tests what actually ships rather than
what compiles — which matters here, because several past bugs were correct in
source and wrong in the rendered page.

### Adding Chinese to a page

Just type it — `木柵機廠`. The build wraps Han runs in `lang="zh-Hant"` so
browsers pick Traditional rather than Simplified glyph variants, and sizes them
to sit level with the Latin text.

One extra step: **`npm run build && npm run fonts`**, in that order.

The site ships webfonts containing only the Chinese characters actually
rendered, split in two: a base subset for 45 pages and a separate one for
`/data/stations`, which alone needs about as many characters as the whole of the
rest of the site. `npm run fonts` works out which characters belong to which
subset by reading `out/`, so the build has to have run first. Without `out/` it
falls back to scanning source, writes the union into both subsets, and says so.

Commit `public/fonts/` afterwards. **You cannot forget this any more**: the
build compares the Han on every page against the subset that page loads and
fails if anything is missing. That check exists because the symptom — tofu —
is invisible on any machine that has a system CJK font, which includes every
machine that builds this site.

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
Enable it once in the repository: **Settings → Pages → Source: GitHub Actions**.

The workflow sets `NEXT_PUBLIC_BASE_PATH` to your repository name, because a
GitHub project site is served from `https://<user>.github.io/<repo>/`. If you
later add a custom domain, remove that env var from the workflow.

## How the code is organised

| Path | What it does |
| --- | --- |
| `lib/content.ts` | Reads `/content`, converts Markdown to HTML |
| `lib/lines.ts` | **Line colours.** One official hex per line; everything else derived |
| `lib/color.ts` | Contrast maths behind that derivation |
| `lib/stations.ts` | Station registry — what makes badge validation possible |
| `lib/text-tokens.ts` | Splits text into station codes, Chinese, and the rest |
| `lib/markdown-plugins.ts` | Badges, language tagging, table wrappers, base path |
| `app/layout.tsx` | Header, fonts, the Chinese `@font-face` stack |
| `app/globals.css` | All styling |
| `components/Wordmark.tsx` | The dot-matrix destination blind |
| `scripts/` | Font subsetting, palette check, favicon generation |

## Design notes

**Line colours are official.** Each one is `LineColor` from the operator's own
TDX line record — TRTC for five lines, New Taipei Metro for the Circular Line,
Taoyuan Metro for the Airport MRT. Nothing about colour is hand-maintained: only
`map` comes from source, and badge fills, accent ink and the hairline flag all
derive from it. Refetch with `npm run tdx`, then `npm run palette` to confirm
every derived value still clears WCAG AA.

(This section previously said the colours were provisional and community-sourced.
That was true before the TDX pipeline landed and contradicted the section above
it. Every community value turned out to be wrong — see `docs/design-reference.md`
§1 for the old-to-new record.)

**Colour never carries meaning alone.** Every badge shows its letter code as
well as its colour, and every line on the network map is labelled with that
code at both ends.

Which colours actually confuse is measured, not assumed — run `npm run cvd`.
The answer is not the obvious one: brown and red do confuse under deuteranopia,
but brown and orange never do, and the worst pair on the whole network is
**Bannan blue against Airport MRT purple**, which collapse to CIEDE2000 2.5
under protanopia. See `docs/design-reference.md` §1 for the full matrix and for
the superseded claim it replaces.

**Dot matrix appears in exactly one place** — the wordmark. It is the bus-side
counterpoint to the rail colour system, and it stops working if overused. Not in
nav, not in tables, not in prose.

## Content status

The five pages in this first version are **stubs**. Figures marked *TBC* are
placeholders, and the facts that are stated still need to be traced to a
primary source — TRTC publications, Taipei City Government records, or
manufacturer documentation — before the `stub: true` flag is removed.
