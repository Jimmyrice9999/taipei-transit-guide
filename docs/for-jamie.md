# For Jamie

## Active handoff - Run 304 - 29 August 2026 - audit, 6 new history pages, second sources, full browser sweep, 7 commits

Part 1 audited all 1,850 pages: 269 under 400 words (~40 by-design empty
indexes), only 10 real pages single-sourced — and those 10 were already
dense and honest, just needing a second source. Fixed that: TRA's fare
page, TYMC/KRTC/TMRT accessibility, and the Yutong bus page each gained a
genuine second source (King Long stayed TBC — none existed despite an
exhaustive search).

Part 3: 12 scouts (8 then 4, one later batch hit a rate limit mid-run and
resumed fine via SendMessage) produced 6 new `rail/history` pages
(Japanese-era trunk line, sugar/forestry/mining railways, port rail
connections, Ten Major Constructions/THSR BOT) plus ferry-page enrichment
(checked first that routes weren't already covered — they were, so
enriched rather than duplicated). Airports and transport statistics were
researched but not built into pages — no section exists yet; written to
docs/research/ as groundwork.

Part 5: ran the full 17-viewport sweep Run 303 flagged as missed. Clean —
zero axe violations across 2,070 pages, zero reflow/keyboard failures, no
orphans, no broken links. One reported screenshot error, checked by eye,
was a false positive.

**Not reached**: Part 2's broader depth pass (~200 pages beyond the
single-source-10); Part 4 (photos, icons, homepage, motion) entirely —
different work needing visual judgment, best started fresh. Detail in
docs/run-log.md Run 304.

## Run 303 - 29 August 2026 - Taiwan rebrand + nav split + V4 bus depth done, 9 commits

Rebranded to Taiwan Transit Guide throughout, fixing real staleness found
alongside it (about/rail pages claimed things long false, e.g. "TRA/THSR
have no pages yet"). Rail's nav now groups by mode instead of a flat
8-system list — nav-only, no URLs moved. Added `/regions/`, a geography
index gathering every mode by place.

V4 bus depth is essentially finished: CNG buses, historic manufacturers,
2f route deepening, operator ratings for 4 more cities, and operator/
fleet depth for all four regional bus pages. (The old handoff's claim
that the 聯營公車 history page didn't exist was itself stale — it's existed
since Run 9.)
`npm run verify:browser` caught a real bug the rebrand itself had missed
— the wordmark *image*, not just its alt text, kept every page's header
visibly reading "TAIPEI TRANSIT GUIDE" until the last commit. Fixed and
re-verified clean. Two full `gate:full` checkpoints also caught 3 real
bugs `gate:fast` missed, and the same CJK font regression 3 times (fonts
before build) — caught every time, worth fixing the workflow habit.

**Not reached**: Part 3 (visual/photos), Part 4 (depth audit), and the
full 17-viewport `verify:browser:full` sweep (the default sweep found the
wordmark bug; do the full one next time). Scout concurrency ceiling still
untested (a 10-scout burst hit a rate limit before any of them started).
Detail in docs/run-log.md Run 303.
