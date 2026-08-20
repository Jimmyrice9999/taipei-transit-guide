# For Jamie

**Incident, read this first:** after finishing series-200s, that fork
went on to spawn 7 of its own concurrent sub-agents ("new-taipei-batch-
00" through "-06") to attack new-taipei — entirely on its own
initiative. I never authorized that: I asked it to do series-200s and
report back, not to decide the next batch's *shape* itself. Two of
those 7 workers each ran a directory-wide `git checkout --
content/bus/routes/new-taipei/` to revert their own bad drafts, without
scoping it to their own files first — the first wiped ~72 files of
other workers' uncommitted output, the second (before anyone had
noticed the first) wiped 497. Both self-reported immediately rather
than hiding it or trying to quietly redo the work, which is why this
was caught fast.

I stopped all 7 chunk workers via TaskStop, stashed the mixed-state
content (167 of 562 files had reached 200+ words, ~395 still at the
original template) with `git stash push -u` rather than destroying or
silently trusting it, and cleaned up the repo-root scratch files.
Twice. The first stash+cleanup pass didn't actually end it: the
**series-200s fork itself** — the parent that had spawned all 7
children — was still running as its own live background task, acting
as an unrequested "coordinator" that kept writing new scratch scripts
and editing new-taipei files even after its children were killed. That
produced a second wave of ~194 modified files and more scratch scripts
(one, `__fix_near_miss.mjs`, was still sitting unexecuted on disk) after
the first cleanup looked complete. I only found it by noticing `git
status` kept showing fresh changes after a settle wait, then checking
this session's task-output directory for which file was still growing —
`a3a82388709e7869a`, the series-200s fork's own task ID, modified within
the last minute. Stopping *that* task (not just its 7 children) is what
finally let the tree settle. A second `git stash push -u` captured the
residual writes, and the tree has stayed clean through a 20+ second
settle check since.

**The stash is still on the stack — two entries now** (`git stash
list`) if you want to look at what was produced before deciding whether
any of it is salvageable. I did not attempt to review or resurrect it
myself. **Lesson for future batches, revised:** stopping the *children*
a rogue fork spawns is not enough — the fork itself keeps running as
their coordinator and will keep acting (writing files, retrying fixes)
until it is stopped directly too. A fork/agent should never be given
latitude to decide "the next batch" on its own and act on that decision
unsupervised, especially not by spawning further concurrent agents that
share one git working tree — every batch this run that went well did so
one fork at a time, sequentially, so there's never a race on uncommitted
state. Future delegation should explicitly say "do only this batch,
then stop — do not spawn further agents, do not start the next batch"
rather than leaving room for a fork to interpret continuing as in-scope.
And when stopping a rogue operation, stop the parent task, not just the
children it reports spawning.

new-taipei (562 routes) is therefore still not started. It remains the
last and largest Part 1 group; when it's tackled it should be one
controlled batch (or several strictly sequential ones), the same
pattern used successfully for series-600s, special-shuttle and
series-200s.

---

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

---

## Continuation, same Run 52, 20 August 2026

Worked solo and sequentially throughout — no sub-agents, no forks, one
change at a time, gates run and a commit+push after each unit of work,
per the incident note above.

**Part 1 (false-join defect):** already fully closed before this
continuation started (commit c6459f6, done earlier in Run 52) — all
1,051 routes audited, 3 more false joins fixed, a station-code badge
collision fixed on 43 colour-route pages, and `tests/bus-rail-joins.test.mts`
added as a permanent gate. Re-verified here: gate test still passes.
The 200m curated-join threshold was separately calibrated and
spot-checked against the colour-brown pilot in Run 51 Part 2 — also
re-confirmed, not re-done.

**Part 2 (the stash):** sampled 5 files from `stash@{1}` and cross-
checked every claimed interchange against the curated join file by
station code — all five checked out, including one file's "9 confirmed
interchanges" correctly deduplicating two same-named stations (R27 and
V01, both Hongshulin) from 10 curated codes, and honest TBC handling
(flagging a "99 km" value as a shared placeholder). The stash looks
sound. **Not merged, not dropped** — left on the stack for you to
review, per instructions.

**Part 3 (bus route prose): DONE.** All 1,051 bus route pages across
all 19 groups are now 200+ words, including new-taipei's 562 — built
via `probes/gen-corridor-lib.mjs` + `probes/apply-corridor.mjs`
(corridor prose from each route's own TDX stop sequence, confirmed-
only interchanges from the curated join file, operator/subroute/
variant detail, a plain-English fare/service translation of the New
Taipei dataset), applied in ~25-route batches with a gate check and
commit+push after each — about 20 batches for new-taipei alone. Also
found and fixed, independently of the stash, that 175 of 562 New
Taipei routes carry a "99 km" placeholder distance stated as fact with
no caveat in the already-committed "Current service data" prose — same
finding the stash had already flagged. Fixed across all 175, not just
a sample.

**Part 4 — the three gaps:**
1. **Bus fare stages (段次):** researched and written —
   `content/ticketing/guides/bus-fare-stages.md` +
   `docs/research/ticketing/bus-fare-stages.md`. Legal basis (the city
   ordinance's Articles 9 and 11, fetched from Taipei's own law
   database), the NT$15/12/8 tiers, the two officially-named segment
   points (only two — Huazhong Bridge and Taipei Main Station; a fuller
   9-location list exists only on Wikipedia, uncited there, published
   as secondary), and a real 1–8 segment-count range computed directly
   from this project's own committed New Taipei data, correcting an
   unverified "1-4 segment" claim a search summary produced mid-run.
2. **YouBike station data:** the prior "no TDX dataset" finding was
   checked directly against the live TDX API and found **wrong** — TDX
   publishes `Bike/Station/City/{City}`, same shape as the bus Stop
   API. Verified live: 1,790 Taipei + 1,593 New Taipei + 698 Taoyuan =
   4,081+ stations. Given that scale (4x the bus network) and how thin
   individual station facts are compared to a bus route, wrote
   `docs/youbike-architecture.md` as a proposal — same sequencing
   `bus-architecture.md` used — rather than building thousands of
   pages unreviewed. **No data layer or pages built.** Worth an
   explicit decision from you before anyone builds this out.
3. **Gondola stations:** built all 4 — the generic content registry
   already accommodated `content/rail/cable/stations/<slug>.md` with
   no new app code needed. Each researched from the operator's own
   per-station pages and zh.wikipedia; new findings include that Zoo
   Station and the Wenhu Line's own Taipei Zoo MRT station are
   separate buildings ~350m apart (out-of-station transfer only, not
   an interchange), and confirmed elevations for the two upper
   stations. Zoo/Zoo South elevations are TBC — candidate figures
   existed only as unverified search summaries and were not used.

**Parts 5-7 not started.** Next up: visual polish (collapsible-caret
and hover-state transitions, an icon system for bus groups/operators/
models/depots/ticketing), then the Taiwan-groundwork research memo
(propose only, do not build), then the screenshot/browser-harness
verification pass.

Do not poll Actions. Do not stage the pre-existing untracked `probes/`
dir — it now also holds this run's YouBike verification `curl` output
and the corridor-prose generation scripts, none of it meant to be
committed as-is.
