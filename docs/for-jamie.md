# For Jamie

Run 52 continues. Part 1 batches 1-14 done (series-other/unclassified/
700s, series-100s/900s, series-300s, colour-green, colour-orange,
trunk, series-500s, series-0-99, colour-blue, colour-red, minibus,
series-600s, special-shuttle, series-200s — 471 routes total). Full
detail in each batch's commit message; `git log --oneline` for
"Run 52 — Part 1 batch N".

series-200s batch (92 routes, done hands-on rather than delegated) —
222 confirms thirteen interchange stations, verified against a full-
batch ranking script as the actual widest spread in the group (two
draft claims for other routes, 212直 and 278, were caught making the
same superlative wrongly and corrected before publishing). 223 runs up
to 92 confirmed stops, one of the longest corridors in the whole run.
Recurring findings: several 直/區/預 variant pairs share their parent's
exact interchange list, some with an identical head/last-departure
field ("0700 - 0700"), unexplained; 246預 has no separately listed
schedule; two corridors (265, 299) are filed under two operator names
for one physical route; the "狗狗公車" pet-friendly subroute pattern
first seen in series-600s recurs here too.

**Process note, still live:** even after diagnosing the broken
`grep -rlP` marker-bug check last batch, this batch's own freshly
written prose still tripped the bug in 25 files — the fix from last
batch fixed old files, not the drafting habit that introduces it. The
corrected check (`grep -Pzq '\.\n\[\^id\]'` per file, or an equivalent
whole-file multiline regex) is what actually catches it; a bare
`grep -rlP` across a `\n` in the pattern silently passes every time.
Fixing the rejoin also cost 3 files their 200-word minimum by removing
a whitespace boundary the counter relied on — always recheck word
count after a marker-bug fix, not just before.

special-shuttle batch (51 routes) had the most classification variety
of any group so far: Neihu Science Park commuter shuttles (~20, most
converging on one corridor from different origins), Nangang Software
Park shuttles (4), general commuter routes (many single-trip-a-day),
and a residual bucket of tourist loops, Maokong feeders, Children's
Amusement Park shuttles and four 懷恩專車 routes feeding one facility
from four stations. 臺北觀光巴士紅線 confirms eleven interchange stations,
the widest spread found in that batch. This is also where the
`grep -rlP` bug was first diagnosed and 32 older files were retroactively
fixed (15 special-shuttle, 13 minibus, 4 colour-green/colour-orange).

series-600s batch (49 routes) is denser than minibus — 40-84 stop
corridors, 5-17 confirmed interchanges. 600 confirms ten consecutive
Bannan Line stations; 648 confirms thirteen interchanges, the most in
that batch; 682 runs 84 stops crossing the Tamsui River twice.

Trunk batch found a genuine open conflict: 重慶幹線 carries the name
300's own page says it held before a 2017 rename. Published as
unresolved on both pages.

Gates: cite clean, test:unit 209/209, claims baseline held at 32,
verify clean, nav 19/19.

Next: new-taipei (562 routes) is the last and largest Part 1 group —
likely worth delegating to one or more forks given the scale. Parts
2-7 not started.
Do not poll Actions. Do not stage the pre-existing untracked `probes/` dir.
