# For Jamie

## Active handoff - Run 301 - 28 August 2026 - long autonomous brief in progress

Parts 1-2 done (290-291). Part 3's per-operator sweep closed 5 systems
(293-299), then a "planned"-marker cleanup (300). Then ran `gate:full`
as a checkpoint (hadn't run since 294) and it was NOT clean - important,
please read this part.

Two real bug classes had accumulated across 6 commits of `gate:fast`-
only work, invisible to the fast checks: 11 spec-table formatting
violations (values like "20 to 40" that break the column layout), one
Chinese title mistakenly tagged as English on the bibliography page,
and 46 `npm run research` failures - every "Checked and failed" entry
I wrote all run was missing the required date stamp the tooling checks
for, even though I'd followed the spirit of the rule (explaining what
disproved each lead) without the literal format. All fixed; `gate:full`
is clean now (234/234, citations/research/claims all clean).

The lesson worth keeping: `gate:fast` clean across several runs isn't
the same claim as "this work is correct" - it only means the fast
subset stayed green. Worth an occasional `gate:full` checkpoint even
mid-way to the 10th commit, not just waiting for the count.

Detail in docs/run-log.md Runs 290-301.
