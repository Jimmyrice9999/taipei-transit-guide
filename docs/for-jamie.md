# For Jamie

Written 11 August 2026, after run 11. Scope was Parts 2 and 6 only, by
instruction. Assume you read this and nothing else.

## Green. The run-10 "do not push" warning is stale — already resolved before I started

Whatever fixed the 30 unsourced sentences on circular-line/bannan-line/
tamsui-xinyi-line happened before this session (the claims count was already
back at the baseline of 32 when I checked). `npm test` and `npm run verify`
both pass clean: 179/179 tests, 8,311 links / 0 broken, a11y 0 errors,
18/18 fact cross-checks, claims steady at 32.

## The bug worth your time

**`scripts/fetch-commons.mjs` could silently serve the wrong photo.** Its
cache key stripped non-ASCII characters, so two *different* Han-only Commons
filenames collapsed to the same key. Nangang Depot's page was about to carry
a photo of a Danhai LRT tram, correctly licensed and completely wrong.
Caught by MD5-comparing the downloaded files — three fetched under different
titles were byte-identical — not by anything in the pipeline itself. Fixed
by hashing the full title into the cache filename. Worth remembering next
time a fetch "succeeds" too easily.

## Part 2 — done

Run 10 already pulled the "Planned for v2" banner and the "N scope
statements" tally out of the app shell, and empty sections/types are already
dropped from the nav. What was left was `_index.md` copy that still *said*
"nothing here yet" even though the counters were gone. Fixed on `/bus/`,
`/bus/operators/`, `/bus/routes/` (the worst offenders — one page's entire
body was "Planned, not written... why it is empty"), plus softer wording on
gondola/ferry/ticketing/bike/systems, and a stale claim on `/about/` ("one
line properly rather than seven badly" — it's ten lines now).

## Part 6 — 32 pages with a photo → 45

**Every one of the ten rail lines now has at least one photograph.** Six of
seven rolling-stock fleets, three of eight depots, and — new — a mechanism
for section pages like `/gondola/` to carry a hero image at all, which is
what got the gondola a photo without writing any new content.

Thirteen of those new pages cost nothing to fetch: run 10 had already pulled
nine image folders off Commons and never wired them into a page. Found by
inventorying `public/images/`, verified against Commons before use (same
discipline as always — looked at every one).

**Seven more images are found, licence-checked, and queued — Commons just
would not hand them over.** Every fetch attempt this run hit a 429, including
a final pass at 20s between requests with full backoff. This isn't a pacing
problem, it's the rate limit doing what the brief said it would do. Candidates
are recorded in the run log; re-running the same fetch list once Commons has
cooled down should just work.

**Two subjects have nothing on Commons at all** — Tucheng Depot and
Xinzhuang Depot. Not "nothing licence-clean," nothing.

**One photo found and rejected on a rendering technicality.** A clean C341
photo exists, but its photographer's Commons username is two Chinese words
with a space between them, and the site's own credit-attribution test does a
literal substring search that a legitimately-tagged two-span credit fails.
The credit displays correctly to a reader; it fails one test's shortcut.
Reverted rather than force it through — C341 has no photo this run. Your
call whether to fix `lib/text-tokens.ts` (a real but narrow fix) or just
fetch the alternate Latin-credited photo already found.

## Not done

Parts 7, 8, 9, 10, 11, 12, 13 — not in scope this run. The rate-limited
fetches above and the C341 decision are the only Part 6 loose ends.

## Screenshots

1. `rail/lines/bannan-line/` at 1440 — hero photo, then an inline body photo
   with a full linked credit line further down the page.
2. `rail/lines/danhai-lrt/` at 1440 — the free-thirteen wiring: a hero photo
   on a page that had none this morning.
3. `/gondola/` at 1440 — the new section-hero mechanism: a scope-statement
   page that now opens with a real photograph instead of nothing.
