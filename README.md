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
facts:                         # the "Quick facts" box in the right rail
  - label: Operator
    value: Taipei Rapid Transit Corporation
  - label: Stations
    value: 24
---
```

Every field is optional except `title`. `facts` has no fixed schema — a Line
page and a Depot page can list entirely different rows, and you can add a new
row just by writing one.

`line` takes a code from `lib/lines.ts` — `BR`, `R`, `G`, `O`, `BL`, `Y`, `A`.
It sets the accent bar, headings rules, table rules and eyebrow for that page.
Omit it and the page uses a neutral graphite.

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

### Other commands

| Command | When to run it |
| --- | --- |
| `npm run assets` | Runs all three generators below in order. |
| `npm run fonts` | After adding Chinese characters to any page. Rebuilds the subset webfont. Commit `public/fonts/`. |
| `npm run wordmark` | Only if the site name or dot pitch changes. Regenerates `public/wordmark.svg`. |
| `npm run favicon` | Only if you change the site mark. Regenerates `app/favicon.ico`. |
| `npm run palette` | After correcting a line colour in `lib/lines.ts`. Prints the derived palette and fails if anything drops below WCAG AA. |
| `npm run metrics` | If a typeface changes. Re-derives the Chinese `size-adjust` values from measured font metrics. |
| `npm run weigh` | After `npm run build`. Reports what the site weighs on disk and what a phone actually downloads. |

### Adding Chinese to a page

Just type it — `木柵機廠`. The build wraps Han runs in `lang="zh-Hant"` so
browsers pick Traditional rather than Simplified glyph variants, and sizes them
to sit level with the Latin text.

One extra step: run `npm run fonts` afterwards. The site ships a webfont
containing **only** the Chinese characters actually used — currently 8
characters, 2.5 KB. A new character will not render correctly for readers whose
device has no Traditional Chinese font until you regenerate it.

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

**Line colours are provisional.** They are community-sourced, not an official
TRTC specification, and conflicting values circulate. `lib/lines.ts` records the
provenance of each one and flags the unsourced one. To correct them: sample from
TRTC's official route map, edit the `map` value, and run `npm run palette` —
badge fills and accent colours re-derive automatically.

**Colour never carries meaning alone.** Every badge shows its letter code as
well as its colour, because brown, orange and red are exactly the set that
colour-vision deficiency confuses.

**Dot matrix appears in exactly one place** — the wordmark. It is the bus-side
counterpoint to the rail colour system, and it stops working if overused. Not in
nav, not in tables, not in prose.

## Content status

The five pages in this first version are **stubs**. Figures marked *TBC* are
placeholders, and the facts that are stated still need to be traced to a
primary source — TRTC publications, Taipei City Government records, or
manufacturer documentation — before the `stub: true` flag is removed.
