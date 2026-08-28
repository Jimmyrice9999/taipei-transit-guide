# For Jamie

## Active handoff - Run 291 - 28 August 2026 - long autonomous brief in progress

Running the multi-part brief (nav hierarchy → photos/visual → finish v3)
unattended. Part 1 done (Run 290): Rail's dropdown nested system before
type; long flat indexes got a filter box; fixed a real bug where a
`'use client'`-exported constant had silently disabled New Taipei's
562-route filter.

Part 2 opening batch done (Run 291): the six Rail system landing pages
with no hero photo (Metro, TRA, KRTC, THSR, TYMC, Alishan) now have one,
plus the one metro depot not yet checked. Every image subject-verified
against its decoded pixels, not its filename. Full station-level photo
coverage (TRA 242, KRTC 78, etc.) is NOT done — judged not tractable at
the needed accuracy in one session; recorded as an open gap, not
attempted at low confidence.

Lost time to a Windows process-tracking quirk: `run_in_background: true`
gate:full calls were reported "killed" while the real npm process kept
running detached, blocking the next attempt with a stale `.next/lock`.
Plain Bash calls that auto-background past timeout tracked correctly.

`gate:fast`/`gate:full` clean on both commits. Detail in docs/run-log.md
Runs 290-291. Continuing into Part 3 next, batching by system.
