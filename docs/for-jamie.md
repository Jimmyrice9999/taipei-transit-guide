# For Jamie

## Active handoff - Run 278 - 27 August 2026

Run 278 opens facilities/operations coverage for both KRTC and TYMC
(accessibility + ridership), and fixes a real recurring font-tooling bug
permanently: `scripts/subset-cjk.mjs` now detects when `out/` predates the
source it's supposed to represent (Runs 276 and 277 both silently missed new
characters this way) and auto-falls-back to the safe source-scan mode with a
loud warning, instead of trusting a stale build. Verified against a
deliberately-staled `out/`.

Also: after running the FULL local test suite (`node --test tests/*.test.mts`,
234 tests, not just `gate:fast`'s subset) against a fresh build for the first
time this session, caught a real bug `gate:fast` structurally cannot see —
two new `_index.md` descriptions under the 40-character minimum
(`discoverability.test.mts`). Fixed both. This is a policy update worth
keeping: run the full suite against a fresh build at least once per batch,
not just `gate:fast`, since two real bugs now (this one, and the earlier
specs/facts + search-index one) only showed up there.

Content: KRTC accessibility (operator states "all stations" have elevators,
no numeric completion figure or named regulation found) and ridership
(2025: 71.3M MRT + 13.34M light rail from the corporate homepage; monthly
PDF archive exists but is JS-rendered and unreadable this pass). TYMC
accessibility (detailed facility descriptions down to train wheelchair-space
dimensions, same "no named standard" gap) and ridership (built on an
already-committed data pull — Taipei Main Station carries 1.7M/month, more
than double the next stop; caught a genuine Wikipedia miscitation: a 2024
ridership figure footnoted to a 2017 opinion article).

Full local validation this round: fresh build, all 234 unit tests, `facts`,
`palette`, `geometry:audit`, `a11y` — all clean, matching CI's exact step
sequence. `probes/` remains untracked.

CI status: still processing a backlog from earlier pushes (checked twice,
spaced — not polling). Commit `88543c9c` (Run 275, the fix commit) was still
queued at last check. Will check again once, later, not repeatedly.

Next: continue KRTC/TYMC (depots/maintenance would complete the TRA-parallel
structure), or return to any remaining TRA gap.
