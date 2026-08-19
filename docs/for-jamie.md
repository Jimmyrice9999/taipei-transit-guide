# For Jamie

Run 52 continues. Part 1 batches 1-10 done (series-other/unclassified/700s,
series-100s/900s, series-300s, colour-green, colour-orange, trunk,
series-500s, series-0-99, colour-blue, colour-red — 231 routes total).
Full detail in each batch's commit message; `git log --oneline` for
"Run 52 — Part 1 batch N".

colour-red batch found the densest interchange counts yet: 紅2 threads
eight consecutive Wenhu Line stations plus Yuanshan; 紅23 confirms eight
Danhai LRT interchanges. Also found and fixed a formatting bug — a
citation marker placed at the start of a wrapped line let the sentence
splitter orphan it, leaving the real sentence looking uncited — in 5
already-committed files from earlier batches (route-1sjvy8q, blue-1,
blue-15, blue-38, blue-39). Worth watching for in future batches: keep
`[^id]` immediately after the period, never on its own wrapped line.

Trunk batch found a genuine open conflict: a currently-active route
(重慶幹線) carries the same name route 300's own page says 300 held before
a 2017 rename. Published as unresolved on both pages, not settled.

Gates: cite clean, test:unit 209/209, claims baseline held at 32, verify
running.

Next: minibus (48 routes) is the next-smallest remaining group, then
series-600s, special-shuttle, series-200s, new-taipei (562). Parts 2-7
not started.
Do not poll Actions. Do not stage the pre-existing untracked `probes/` dir.
