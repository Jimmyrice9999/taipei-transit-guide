# For Jamie

## Active handoff - Run 307 - 30 August 2026 - Part 0 verification, CI cost fix, research depth, 4 commits

Part 0: all five claimed fixes independently verified against the live
site with a real headless browser, not by reading code — live site loads
with its own 404, nav dropdowns land correctly (225 Rail links checked),
side rail collapses cleanly, Sanying LB01/LB08 coordinates cross-checked
against independent TDX/TRA sources (57m/177m offsets, both physically
plausible, not a systematic projection error), Systems-dropdown removal
confirmed correct. Part 1: no concurrent writer threatens this repo (two
live Codex processes found are on the unrelated `taipei-commute` project);
documented the historical fork's mechanism. Part 2: found CI's *real* cost
via the Actions API — adversarial fixtures were 80% of a ~104-minute Tests
job (17 serial full builds) — and cut it to 5 builds with identical 16/16
verdicts; the brief's other three CI claims (build cache, double-build,
Node 20) were already fixed by prior runs, confirmed not re-done. Parts
3/4: 5 scouts deepened Kaohsiung airport (ICAO/IATA/passenger stats via a
PDF a scout without Bash couldn't read), vehicle registration (3
non-comparable EV figures published, not picked), Penghu ferry (pre-1989
fleet lineage, a reused vessel name flagged), and New Taipei/Taoyuan bus
operator ratings (both now have real depth beyond one round each).

**Not reached**: Parts 5 (interactive features), 6 (Chinese mode) and most
of 7 (full device sweep) — each is a multi-hour build in its own right
and starting one without room to finish and verify it properly would be
worse than leaving it explicitly for next time. Part 3's ~113 remaining
thin pages are the TYMC-station/bike-station/bus-route clusters already
confirmed genuinely data-only across three separate runs now (Run 306
spot-checked again just before this run) — not a live gap.

## Run 306 - 29 August 2026 - CI fix, Air/Road/Statistics sections, nav-label gate, side rail, 5 photos, 19 pages deepened, 14 commits

**Matters most**: every dead/mistyped link on the live site has been
showing GitHub's generic 404, not this site's own, for the project's whole
history — `postbuild.mjs` never wrote a root `out/404.html`. Fixed.

Part 0: image-budget CI fix, structural (figures cap at 800w). Part 1: new
permanent nav-label gate. Part 3: wide-viewport side rail, 0 axe violations
after fixing 2 real regressions it introduced. Part 4: all 5 pending
Commons photos sourced and wired in — caught a WebFetch summary that
misdescribed a photo and a caption em-dash that silently ate a photo
credit. Part 5: deepened 19 pages via 20 scouts across three waves (TRA
history/freight, KRTC, TMRT, TRTC, Taipei Metro depots/platform doors, 4
more NTPC district offices) — real conflicts and findings throughout, not
restatement: KRTC's joint-development case list rendered for the first
time (15 cases, one unresolved legal-basis question); TRA's 2025 yearbook
gave a 74-year freight-decline series; TMRT's Green Line got its first
vendor-named signalling product; DORTS's own terminology distinguishes
"gate-type" retrofit doors from "full-height" new-build ones, never
"half-height" as commonly said elsewhere. This closes out the most
promising remaining thin pages — what's left is mostly TDX-data-only
bus-route/station pages, not a research gap. Four gate-format lessons
learned and fixed along the way (claims-ratchet topic-sentence citations,
an uncited source entry, the research-check bullet format), never by
weakening a checker. Part 6: three new sections (Air, Road, Statistics).
Part 7: page-weight
note added.

**Not reached**: a dedicated Part 4 icon/colour pass (motion and icons
were checked directly this run and are already clean, so this is lower
priority than it sounds). Remaining thin pages (~118) are overwhelmingly
bus/routes and TYMC/bike station pages; spot-checked 4 bus/routes pages
this run to confirm they're genuinely TDX-data-only per rule 10 (each has
its own explicit "Research status" section marking history/renumbering
TBC by design) — confirmed, not a research gap.

## Run 305 - 29 August 2026 - NTPC bus depth, first photos, homepage/regions redesign, full browser sweep, 4 commits

Part 1: found the New Taipei district-office bus cluster (19 pages) badly
under-researched, not exhausted — each office runs its own named routes,
several with a contractor named on the office's own site. Wrote real depth
into all 19. TYMC G18/G19 gained a construction-contract section with a
genuine DORTS-vs-DORTS conflict on which stations one contract covers.

Part 2: the site already had a full Commons photo pipeline but almost no
photos used. Sourced and committed 19 license/subject-verified images (TRA
stations, TRA/THSR rolling stock, two bus models, four TRTC/TYMC stations).
Five more verified candidates are ready but Commons rate-limited this
session for a sustained period — their File: titles and licenses are in
this run's scout transcripts, ready to fetch next time with no re-research.

Part 3: gave the homepage and `/regions/` a lead photo per section/region
instead of a plain link list. Part 4: found and fixed a real reduced-motion
gap via an actual Playwright check, not assumption — a search-results
hover transition had no `prefers-reduced-motion` override.

Part 5: full 17-viewport sweep clean — zero axe violations across 2,070
pages, no reflow/keyboard failures, no orphans, no broken links.

**Not reached**: the ~200-page broader depth pass beyond the three named
clusters (absorbed by the NTPC cluster's real depth); KRTC/TMRT photos.

## Run 304 - 29 August 2026 - audit, 6 new history pages, second sources, full browser sweep, 7 commits

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
