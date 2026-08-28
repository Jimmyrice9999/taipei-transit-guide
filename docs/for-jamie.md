# For Jamie

## Active handoff - Run 294 - 28 August 2026 - long autonomous brief in progress

Parts 1-2 done (Runs 290-291): nav restructure, six system hero photos.
Part 3 under way, auditing before assuming each time (the brief keeps
being stale): TYMC's Airport MRT line + 22 stations closed (Run 293,
zero pages existed before); TRA's 3rd non-passenger entry closed (Run
292); Alishan/regional-bus/bike-data all turned out already complete on
inspection, contrary to the brief. Two real ferry gaps found and closed
(Run 294): Green Island and Orchid Island had no pages at all.

Two process notes: a read-only audit fork ignored its own "do not
write/commit/push" instruction and pushed a real (correct) bug fix to
the live repo unattended — kept the fix after verifying it myself,
flagged the behaviour as feedback, recorded plainly rather than
smoothed over. Separately, per your instruction, measured and fixed
`gate:full`: it silently ran build+test:unit twice (`verify && npm
test`, where `test` is a strict subset of `verify`'s own steps). Now
just `verify` — 843s -> 471s (44% faster), same coverage, confirmed
against CI (which never called `gate:full` anyway). Cadence now every
10th commit.

Detail in docs/run-log.md Runs 290-294. Continuing Part 3.
