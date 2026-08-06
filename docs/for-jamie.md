# For Jamie

Written 6 August 2026, after run 4 — the content run. Assume you read this and
nothing else.

The one-line version: **the Matra article is published, the line page is
finished, all six of your decisions are executed, and the suite is green** —
172 tests, citations clean, zero unsourced assertions on the new page, ratchet
tightened 34 → 33.

What you decided, done: article published (1/A), 30vh kept + scroll-into-view
added (2), font tables deleted from the run log (3B), all primary sources
archived with `snapshot:` fields (4A), ratchet left alone (5), corrections
moved to a foot-of-page section on all five pages (6).

Two upgrades happened during publication, recorded in run-log §33: the fire
mechanism found a second independent source (自由時報 2008), and the
「馬特拉不拉，我們自己拉」 quote found a primary one — 陳水扁 himself,
retelling it in 鏡週刊 this March. The draft's red lines held: no dongle
story, no 1999 date, no withdrawal year — the 1996-vs-1997 disagreement is
published as a disagreement.

---

## Decision 1 — The article made every page ~57 KB heavier, and I did not act

Quoting sources in their own language has a price: the article's Chinese
quotations grew the base Han subset from 217 to 404 characters — **71.6 KB to
128.5 KB, loaded by 45 of 46 pages**. Your decision 3 said stop optimising
fonts, so I am reporting this, not acting on it.

| Option | Trade |
| --- | --- |
| **A. Accept it** | First visit ~437 KB. Every page after is still ~15 KB. Nothing to maintain. |
| B. Shorten the article's Chinese quotations | Free bytes, worse article. The quotes are the evidence. |
| C. Reopen the split, article on its own subset | The mechanism exists (it is the `/data/stations` mechanism). It is also exactly the work you told this project to stop doing. |

**Recommend A.** If the number nags at you when more Chinese-heavy articles
exist, C is one more subset — but let there be more articles first.

## Decision 2 — The Internet Archive cannot reach Taiwan's government sites

All four fresh captures of `.gov.taipei` / `metro.taipei` pages failed with
HTTP 523 — the Archive's crawler is blocked or unroutable from their side. The
`snapshot:` fields point at the newest *existing* captures instead (DORTS:
Feb 2026; headways: 3 days old; the two others: mid-2025). Meanwhile the rot
argument proved itself mid-run: **the 民報 source died** — 404 on the day the
archiving decision was executed — and survives only because a 2019 capture
exists. It is now cited via that capture.

| Option | |
| --- | --- |
| **A. Accept existing captures, retry occasionally** | The mid-2025 ones predate our access date; content is stable government boilerplate. |
| B. Add a second archive (archive.today) for the blocked four | Another dependency, no schema change — `snapshot:` takes any URL. |

**Recommend A** now, B only if a gov page actually changes or dies.

## Decision 3 — Two purchases, both small, both yours

- **The 2005 Supreme Court judgment.** Taiwan's judgments are indexed; the 22
  July 2005 civil judgment would move the article's whole litigation section
  from reportage to primary record and settle the intermediate dates it
  declines to give. Needs a human with the judicial database.
- **商業周刊 445 (30 May 1996).** The only near-contemporaneous account of the
  breakdown, paywalled. The article currently cites its date and title only.

## Not a decision — where the article lives

`/train/history/matra-dispute/`, under a new **History** type, linked from the
line page and VAL256. Nothing links it from the home page; if you want it
featured there, say so — I did not redesign the home page on a content run.

## What I'd do next

Retrieve the judgment, then write the next article. The pattern held: writing
content found better sources than three runs of infrastructure did.
