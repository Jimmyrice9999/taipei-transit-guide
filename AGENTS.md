<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.
This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:transit-research-rules -->

This project has a claims ratchet enforced by CI (tests/sourcing.test.mts
against docs/claims-baseline.json). Unsourced assertions must not exceed
the baseline. Do not edit the test or raise the baseline to make CI pass.
Research files under docs/research/ are leads, not sources — verify
against primaries directly.

---

# Transit research — the sourcing discipline

This is the method that has caught every error this project has found in itself:
a route length 1.25 km too long, a false attribution of the Innovia to Matra, a
line-colour set that was wrong in every English source, a feeder-colour table
missing a row, a citation URL that went somewhere else. It is not a style guide.
Each rule exists because breaking it produced a published falsehood.

## 1. Mandarin first, and it is not close

Deep coverage of Taipei transport exists in Mandarin and essentially nowhere
else. English-language material is a thin derivative layer, and where it
disagrees with the Mandarin it is wrong far more often than not.

Search and read in this order:

1. **Operator and government primary sources.** 臺北大眾捷運股份有限公司 (TRTC,
   metro.taipei), 新北大眾捷運股份有限公司 (NTMC, ntmetro.com.tw), 桃園大眾捷運
   (TYMC, tymetro.com.tw), 臺北市政府捷運工程局 (DORTS, dorts.gov.taipei),
   交通部 (MOTC) and its 運研所, 臺北市公共運輸處 (Taipei PTO), 新北市政府捷運工程局,
   臺灣鐵路 (TRA), 公路局. Tender documents, project pages, annual reports,
   press releases, statistics tables.
2. **zh.wikipedia** — 維基百科. Excellent as a lead index and a bibliography.
   Never as an authority. Read its footnotes and go to what they cite.
3. **Taiwanese news archives** — 自由時報, 聯合報, 中國時報, 中央社 (CNA),
   公視 (PTS), 蘋果日報 archives, 商業周刊, 天下雜誌.
4. **Railfan and enthusiast material** — PTT (批踢踢) MRT and Railway boards,
   Mobile01, 鐵道情報, local railfan wikis. Often the only place a detail exists.
   Treat as a lead, corroborate before publishing.
5. **Academic and institutional** — 交通部運輸研究所 reports, university theses
   (臺灣博碩士論文知識加值系統), 監察院 (Control Yuan) investigation reports,
   審計部 audits, court judgments via 司法院法學資料檢索系統.

Search in Chinese. A query in English returns the derivative layer.

## 2. Fetch full pages. Never publish from a snippet

**This is the rule that has mattered most.** A single full fetch of one DORTS
project page produced more usable, citable material than several rounds of
searching had. Search snippets are truncated, reordered, and frequently splice
two sentences that are not adjacent in the source.

- Use search to *find* the page. Then fetch the page and read it.
- If a fetch fails, say the fetch failed. Do not fall back to the snippet.
- Quote the original-language sentence you are relying on into the research
  file, so the next reader can check your reading without refetching.
- When a page is long, that is not a reason to rely on the summary — it is the
  reason the material is there at all.

### When a PDF won't extract

The environment has no `pdftoppm`/poppler, so the Read tool's page-image
fallback cannot render any PDF. It does have `pdftotext` (xpdf, bundled with
Git for Windows' MSYS2 toolchain, on `PATH` as `pdftotext`), which is a
working substitute for extraction — confirmed by pulling a PDF a fetch tool
had failed on and reading it directly:

```
curl -sL -o /tmp/x.pdf '<url>'
pdftotext -enc UTF-8 /tmp/x.pdf /tmp/x.txt   # add -layout only for tables;
```                                            # it can scramble vertical CJK

Two caveats found in practice. First, a source can be genuinely unreachable
rather than merely a PDF-extraction problem — `curl` against an
Incapsula-protected page returns an HTML challenge page, not a PDF, and
`pdftotext` will correctly refuse to read it; that is a fetch failure to
record as checked-and-failed, not a tool gap. Second, `-layout` reconstructs
columns by position and can badly scramble a table where station names are
rendered as vertically-stacked single characters next to a column of
numbers — the default (non-`-layout`) extraction, which groups all labels
then all values as two separate blocks, is often easier to correlate by
position, but multi-page or multi-column statistical tables can still defeat
reliable extraction. Confirm you can actually align a given number with its
label before publishing it; if you can't, that is a stated gap, not a
guess.

## 3. Every claim carries its provenance

For every factual claim, record:

- **Source title** in English, and **`titleOriginal`** in the original language.
- **Publisher**, with the original-language organisation name.
- **URL**, and an archive snapshot URL where one can be captured.
- **`kind: primary` or `kind: secondary`.**
- **Confidence: High / Medium / Low**, with the reason in a clause.
- **The original-language sentence** the claim rests on.

### What primary means here

Primary: the operator, the builder, the government body, the manufacturer, a
court, an audit office — publishing about its own work.

Secondary: news, encyclopedias, wikis, enthusiast sites, and *anything*
describing what a primary source says.

**A citation to an official source is not that source.** This project has been
burned by it twice. A news article saying "TRTC's route map gives the colour as
X" is secondary evidence about TRTC's route map. Go and read the route map.

## 4. Verify every secondary citation against the primary it claims

If a secondary source says "according to DORTS…", fetch the DORTS page and
check that it says that. Record the result either way.

Real failures this has caught:

- A research file's citation URL did not go where it said; the article it named
  did not exist at that address.
- A claimed corroboration between two sources turned out to be two different
  statements about two different things — 「穿越辛亥隧道北側」 against
  「穿越福州山隧道後」 — which had been read as agreement.
- A string asserted to be on a page was not on the page at all.

When you check a string, check the string. Searching a page for 福州山隧道 and
finding 富陽自然生態公園 is not a match.

## 5. Where sources conflict, publish every value. Never pick

Conflicts are findings, and they are usually the most valuable thing in the
file. Three different route lengths for the Wenhu Line turned out to be three
correct measurements of three different things — revenue length, total route
length, and the whole drawn alignment. Picking one would have destroyed the
only genuinely original result on the page.

Publish the conflict as a conflict: every value, every source, and what each
one appears to be measuring. If you cannot say what the difference is, say
that too.

Do **not**:

- average them
- take the most common
- take the most recent
- take the one from the source you like best
- quietly footnote the others

## 6. TBC beats a plausible number, always

A figure with no source does not go on the page. `TBC` goes on the page.

The build enforces this: `npm run claims` counts unsourced assertions against a
baseline that only ever ratchets down. Do not relax it to make a number look
better. An honest gap is the site's whole value proposition — it is what
distinguishes it from the English material it exists to replace.

The same applies to absence. "TRTC does not publish this" is itself a claim
about TRTC and needs evidence. Write "nothing found in this search answers it",
which is a claim about the search, and is true.

## 7. Synthesise. Never translate wholesale

The value is structure and cross-checking, not translation. Read several
sources, work out what is actually established, and write it in English as a
reference entry. Cite the originals with their original-language titles.

Reproducing a zh.wikipedia article in English is both a licensing problem and a
pointless one — it inherits every error and adds none of the checking.

## 8. Distinguish "not found" from "does not exist"

Three separate states, and they are not interchangeable:

- **Confirmed** — a source says it and you have read the source.
- **Not found** — you looked and did not find it. Say where you looked.
- **Contradicted** — a source says otherwise. Publish both.

A `## Checked and failed` section in the research file records claims that were
chased and did not survive, with a date and a reason, so the same dead lead is
not chased twice. `npm run research` enforces that those entries carry both,
and that a failed claim is not still asserted unqualified elsewhere in the file.

## 9. The existing corpus is leads, not sources

`docs/research/` is a lead file. It has been wrong repeatedly — a miscounted
exit total, a wrong URL, a misread tunnel description, an inverted arithmetic
hypothesis, a feeder-colour table missing a row. Use it to know what to look
for. Cite the underlying material, having read it.

## 10. Structured data comes from TDX, prose comes from research

Station lists, sequences, coordinates, interchanges, run times, route lengths
and bus routes are a data pull from `data/tdx/`, already committed. History,
engineering, controversy and design decisions are written from sources.

Do not research a station list. Do not invent an engineering history.

## 11. Parallel read-only research, sequential writes

Sequential Chinese-source fetching is this project's main bottleneck, and
fetch-and-read is embarrassingly parallel: nothing about reading a page
depends on another page having been read first.

Research subagents may run concurrently, but only under a hard boundary:

- They fetch and read sources, and return findings as text to the coordinating
  session. That is the whole job.
- They **never** write to the repo, **never** run `git`, **never** touch the
  working tree, and **never** spawn further subagents.
- All writes — research files, content pages, `docs/run-log.md`,
  `docs/for-jamie.md` — and all commits happen in the main session, one at a
  time, after the parallel research returns.

This is not a relaxation of the incident that made this project cautious
about concurrency: that incident was concurrent *writers* — two agents each
ran a directory-wide `git checkout --` and together destroyed roughly 570
files. The danger was two processes racing to mutate the same working tree.
Read-only fetches racing each other mutate nothing, so there is no
corresponding failure mode. One writer, sequenced, is what keeps that true —
do not let a "helper" agent write, commit, or touch git, even in passing.

Fetched pages may be cached outside `content/` (for example under a scratch
or `probes/`-style directory that is never staged) so that retries and 403s
are not re-hit across a batch. A cache is a convenience for refetching, not a
source: never publish a claim from a cached page without recording the URL
that produced it, per rule 2 above.

### Pipelining: overlap the next batch's fetches with this batch's writes

The naive shape — fetch batch N, then write batch N, then verify, then
commit, then fetch batch N+1 — leaves scouts idle for the entire write/verify/
commit phase. That phase is where the main session's own time actually goes
(assembling frontmatter, cross-checking citations, running gates), and
nothing about it depends on batch N+1's sources existing yet.

Pipeline it instead: **before starting to write batch N, dispatch the scouts
for batch N+1.** They fetch in the background while the main session writes,
verifies and commits batch N. By the time batch N is committed, batch N+1's
findings are already sitting in the conversation, and writing can start on
them immediately with no fetch-side dead time in between.

This does not relax rule 11 above in any way:

- Scouts stay strictly read-only — fetch and return text, never write, never
  run `git`, never touch the working tree, never spawn further subagents.
- There is still exactly one writer. Commits remain sequential, one at a time,
  in the main session.
- Only the *reads* move earlier to overlap the writes. Nothing about *who
  writes* or *when a commit happens* changes.

Run 6+ scouts per batch, scaling toward 8 (per the run brief's own guidance),
and back off immediately if a single source starts returning rate-limit
errors or 403s across the batch — a slower run is always preferable to
getting a government portal to block the project.

## Output contract

Research goes in `docs/research/<section>/<subject>.md`. Content goes in
`content/<section>/<type>/<slug>.md` with YAML frontmatter carrying `title`,
`summary`, `facts`, `specs` and a `sources` list whose ids are referenced from
the body as `[^id]`. Every `source:` id in `facts`/`specs` and every `[^id]` in
the body must exist in `sources`, or `npm run cite` fails the build.

Mark any figure you could not source as `value: TBC` with no `source:` key.

---

# Researching one subject — the per-subject brief

Research **one** Taipei-region transport subject at a time and produce two files
from primary sources. One subject per invocation, in a fresh context, because
drift across ten subjects in one long session is exactly what this design exists
to prevent.

The sourcing discipline above governs everything below.

## The hard rules

These are not negotiable and a report that violates them is worse than no page.

1. **Fetch full pages. Never publish from a search snippet.** Use search to find
   the page; then fetch and read it. If a fetch fails, record that it failed —
   do not fall back to the snippet. One full DORTS page fetch has outproduced
   several rounds of searching on this project.
2. **Verify every secondary citation against the primary it claims to cite.** If
   a source says "according to TRTC", go and read TRTC. Record the outcome
   either way, including when it does not check out.
3. **Report conflicts. Never resolve them by picking.** Publish every value with
   its source and what each appears to be measuring. Averaging, taking the most
   common, or taking the most recent are all forbidden.
4. **TBC beats a plausible number.** A figure with no source is `TBC`.
5. **Mandarin sources first**, in the order set out above. Search in Chinese.
6. **Synthesise, never translate wholesale.**
7. **Write BOTH files** — the research file and the content page. A research
   file alone is not the deliverable.
8. **`docs/research/` is leads only.** It has been wrong repeatedly. Verify
   everything taken from it against a primary source, and say in the report
   where it turned out to be wrong.

## What you produce

### 1. The research file

`docs/research/<path>/<subject>.md`, mirroring the content path. Start it with
the corpus warning header used across the corpus, then:

- **What is established**, claim by claim, each with source, original-language
  title, URL, PRIMARY/SECONDARY, confidence, and the original-language sentence
  it rests on.
- **Conflicts**, with every value and every source.
- **`## Checked and failed`** — anything chased that did not survive, each entry
  with a date and a reason. `npm run research` enforces both.
- **Stated gaps** — what a page still cannot say, and what would settle it.

### 2. The content page

`content/<section>/<type>/<slug>.md`. Copy the shape of
`content/rail/lines/sanying-line.md`, which is the reference implementation:

- YAML frontmatter: `title`, `summary`, `updated`, `facts`, `specs`, `sources`.
- Every `sources` entry needs `id`, `title`, `titleOriginal`, `publisher`,
  `url`, `accessed`, `kind` (primary|secondary), `lang`, and a `note` saying
  what the source actually supports.
- Body in Markdown, every factual sentence carrying `[^source-id]`.
- Unsourced figures: `value: TBC`, no `source:` key.
- Station codes written bare (`BR13`, `R22A`) become badges automatically.
- Chinese runs are tagged `zh-Hant` by the build — write them plainly.

**Do not invent frontmatter fields.** Check `lib/content.ts` for what is
actually read. An unknown field is silently dropped; a missing `source:` id
fails `npm run cite`.

### Verify before finishing

Run `npm run cite` and confirm the page's citations resolve. If it fails,
fix it — do not hand back a page that breaks the build.

## The report back

Keep it short and factual. Four sections:

1. **Sourced** — what was established, and from which primary sources.
2. **TBC** — what stayed unsourced, and what would settle each one.
3. **Contradicted the corpus** — where `docs/research/` was wrong, specifically.
4. **Conflicts found** — every disagreement between sources, with the values.

Section 4 matters most: independent researchers hitting the same primaries will
disagree somewhere, and those disagreements are where the errors are. Report
them; do not settle them.

<!-- END:transit-research-rules -->