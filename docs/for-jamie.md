# For Jamie

Run 52 continues. Part 1 batches 1-12 done (series-other/unclassified/700s,
series-100s/900s, series-300s, colour-green, colour-orange, trunk,
series-500s, series-0-99, colour-blue, colour-red, minibus, series-600s —
328 routes total). Full detail in each batch's commit message;
`git log --oneline` for "Run 52 — Part 1 batch N".

series-600s batch (49 routes) is denser than trunk or colour-feeder
coverage — 40-84 stop corridors, 5-17 confirmed interchanges per route.
600 confirms ten consecutive Bannan Line stations (Taipei Main Station
to Kunyang, every stop on that stretch). 648 confirms thirteen distinct
interchanges, the most in the batch, threading nearly the whole
Songshan-Xindian Line. 682 runs 84 stops crossing the Tamsui River
twice, the longest corridor found. 669 confirms only one interchange
despite crossing central Taipei — sparsest coverage. The 605 family
splits into four variants, three sharing a corridor and interchange
set, one (605快) running a wholly different Nanjing Rd. corridor under
the same route number. Every comparative claim ("most", "fewest",
"matching") was checked against a full-batch ranking script before
publishing, not just routes already written — this project has been
burned before by superlatives that were only true relative to what had
been drafted so far.

minibus batch (prior, 48 routes) had the thinnest confirmed-interchange
coverage of any group — most routes confirm one or two stations, a few
zero despite naming MRT stops. 小15區預 has no dedicated schedule source
at all in the official catalogue. Checked directly for the batch-10
citation-marker line-break bug before running gates in both this batch
and the minibus one; none found in either.

colour-red batch found and fixed the citation-marker formatting bug
itself — a marker placed at the start of a wrapped line let the
sentence splitter orphan it, leaving the real sentence looking uncited.
Worth watching for in every future batch: keep `[^id]` immediately
after the period, never on its own wrapped line.

Trunk batch found a genuine open conflict: a currently-active route
(重慶幹線) carries the same name route 300's own page says 300 held before
a 2017 rename. Published as unresolved on both pages, not settled.

Gates: cite clean, test:unit 209/209, claims baseline held at 32, verify
clean, nav 19/19.

Next: special-shuttle (51) is the next-smallest remaining group, then
series-200s (92), new-taipei (562). Parts 2-7 not started.
Do not poll Actions. Do not stage the pre-existing untracked `probes/` dir.
