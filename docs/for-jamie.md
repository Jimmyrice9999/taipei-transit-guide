# For Jamie

Part 1: nav hover-gap fixed (250ms delay), Bus→Routes now a real subgroup, and the redundant "Systems" one-page dropdown removed — please confirm that was the right one.
Part 2: 1,238 confirmed MRT joins curated for red/green/orange/blue/trunk (132 routes), by stop-ID geometry (200m, calibrated against brown's own 74), never by name.
Part 3 complete: series-700s/300s/100s/900s/0-99/500s built, all 93 routes. Site now covers 245 of 1,051 routes.
539預/542預 resolved: reservation-only workings of 539/542, not a separate class — confirmed via primary sources + Taipei's real-time bus system.
Several genuine conflicts published, not resolved: 108's two termini, 129's buffer-zone name mismatch, 950's trip-count disagreement (2014 launch vs. live schedule), 66's fleet-launch date, and more — see run-log for the full list.
Route numbers 41/52/53/63/66/72/88/300/505 collide with unrelated same-numbered routes in other Taiwanese cities; not asserted on live pages without a fetched per-city citation.
A real site bug found and fixed: SpecTable didn't Han-tag spec values (FactsPanel already did); first exposed by a Chinese fare label.
A real fact-check.mjs false positive found (not fixed by relaxing the checker): a shortened TBC sentence tripped its absence-claim regex; reworded instead.
Part 4: browser harness clean — reflow, keyboard, axe all pass across 580 pages; 236 screenshots incl. landscape phone; no orphans beyond legacy /train redirects; nav dropdown correctly truncates+links "All routes" now that 12 groups exceed the 10-item cap.
All gates green throughout: cite, verify, npm test 185/185, browser harness. Claims baseline untouched at 32.
Stopped after series-500s as instructed — 200s/600s/900s(remaining)/minibus/special-shuttle/new-taipei/unclassified are next.
