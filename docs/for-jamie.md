# For Jamie

**Important process fix this batch:** the grep check used every prior
batch to confirm no citation-marker line-break bug survived
(`grep -rlP '\.\n\[\^id\]'`) was itself broken — `grep -P` does not
match `\n` across lines by default, so it reported clean even when the
bug was present. It silently passed on every earlier "checked, none
found" claim in this log. A proper check is `perl -0777 -ne 'exit(/\.\n\[\^[\w-]+\]/ ? 0 : 1)'` per file, or any genuinely multiline regex
tool. Re-checking with the working version found the bug in 15
special-shuttle files and, retroactively, in 13 already-committed
minibus files from last batch (pushed as `f73dacb`). All 28 are now
fixed and pushed. If you see a future "checked directly for the bug,
none found" claim in this log, it should be from the perl check, not
a bare `grep -P`.

Run 52 continues. Part 1 batches 1-13 done (series-other/unclassified/
700s, series-100s/900s, series-300s, colour-green, colour-orange,
trunk, series-500s, series-0-99, colour-blue, colour-red, minibus,
series-600s, special-shuttle — 379 routes total). Full detail in each
batch's commit message; `git log --oneline` for "Run 52 — Part 1 batch N".

special-shuttle batch (51 routes) had the most classification variety
of any group so far: Neihu Science Park commuter shuttles (~20, most
converging on one corridor from different origins), Nangang Software
Park shuttles (4), general commuter routes (many single-trip-a-day),
and a residual bucket of tourist loops, Maokong feeders, Children's
Amusement Park shuttles and four 懷恩專車 routes feeding one facility
from four stations. 臺北觀光巴士紅線 confirms eleven interchange stations,
the widest spread found. Several route pairs duplicate the same
corridor under different operators with no stated reason found.

series-600s batch (prior, 49 routes) is denser than minibus — 40-84
stop corridors, 5-17 confirmed interchanges. 600 confirms ten
consecutive Bannan Line stations; 648 confirms thirteen interchanges,
the most in that batch; 682 runs 84 stops crossing the Tamsui River
twice.

Trunk batch found a genuine open conflict: 重慶幹線 carries the name
300's own page says it held before a 2017 rename. Published as
unresolved on both pages.

Gates: cite clean, test:unit 209/209, claims baseline held at 32,
verify clean, nav 19/19.

Next: series-200s (92) is the next-smallest remaining group, then
new-taipei (562). Parts 2-7 not started.
Do not poll Actions. Do not stage the pre-existing untracked `probes/` dir.
