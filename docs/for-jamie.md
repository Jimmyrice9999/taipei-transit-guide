# For Jamie

Run 52 continues. Part 1 batches 1-11 done (series-other/unclassified/700s,
series-100s/900s, series-300s, colour-green, colour-orange, trunk,
series-500s, series-0-99, colour-blue, colour-red, minibus — 279 routes
total). Full detail in each batch's commit message; `git log --oneline`
for "Run 52 — Part 1 batch N".

minibus batch (48 routes) had the thinnest starting template yet
(98-105 words, no corridor prose) and the thinnest confirmed-interchange
coverage of any group so far — most routes confirm one or two stations,
a few confirm zero despite naming MRT stops. Richest exceptions: 小12
confirms four stations to the Maokong Gondola; 小15 records seven named
subroutes, the group's richest, climbing to 擎天崗 while its own shorter
siblings stop short; 小16 (S16) records ten named variants keyed to
departure time rather than named branch, unique in this batch. One
route, 小15區預, has no dedicated schedule source at all in the official
catalogue — its span/headway/fare stay TBC by design, not oversight.
市民小巴6 is filed under two different operator names for what the data
shows as one physical corridor — flagged, not resolved. Checked directly
for the batch-10 citation-marker line-break bug before running gates;
none found in this batch's new prose.

colour-red batch (prior) found the densest interchange counts yet: 紅2
threads eight consecutive Wenhu Line stations plus Yuanshan; 紅23
confirms eight Danhai LRT interchanges. That batch also found and fixed
a formatting bug — a citation marker placed at the start of a wrapped
line let the sentence splitter orphan it, leaving the real sentence
looking uncited — in 5 already-committed files from earlier batches.
Worth watching for in every future batch: keep `[^id]` immediately after
the period, never on its own wrapped line.

Trunk batch found a genuine open conflict: a currently-active route
(重慶幹線) carries the same name route 300's own page says 300 held before
a 2017 rename. Published as unresolved on both pages, not settled.

Gates: cite clean, test:unit 209/209, claims baseline held at 32, verify
clean, nav 19/19.

Next: series-600s (49) is the next-smallest remaining group, then
special-shuttle (51), series-200s (92), new-taipei (562). Parts 2-7
not started.
Do not poll Actions. Do not stage the pre-existing untracked `probes/` dir.
