# For Jamie

## Active handoff - Run 275 - 27 August 2026

Run 275: the local `gate:full` I ran after Run 274 (before assuming CI would
pass) caught two real failures `gate:fast` doesn't check. (1) `specs:` on 5
pages from Runs 265-274 held dates/multi-clause values ("7 January 2024",
"8 tunnels, 3 bridges, 4 stations") that trip a real test — `specs` is for
numeric value+unit pairs, dates/prose belong in `facts:`; moved all 6 to
`facts:`. (2) `public/data/search-index.json` was stale — never regenerated
after adding 9 pages this session, and nothing caught it (same class of gap
as the conflicts-index staleness from Run 269). Added `search:check`
(new --check mode on scripts/search-index.mts, ~2s) to `gate:fast`,
verified it fails when the index is blanked, restored, confirmed clean.

`gate:fast` is now ~14s total (cite, markers, conflicts:check, search:check,
font:check, 107 fast unit tests) — still well under a minute. `npm run
research` clean (238 files, 996 checked failures). `probes/` remains
untracked.

Two KRTC (Kaohsiung Metro) scouts already returned rich material —
signalling/automation (Red/Orange is driver-operated on Siemens track-circuit
interlockings; the under-construction Yellow Line is Siemens Trainguard MT
CBTC at GoA4, confirmed by the manufacturer's own press release) and rolling
stock (42 Siemens trainsets from 2005, a new 16-set Hyundai Rotem order for
extensions). content/rail/krtc/ currently has only lines/ and stations/ —
this is genuinely new ground, not a duplicate.

Next: write up both KRTC pages, commit, then continue — TRA/THSR-adjacent
systems content is getting saturated; KRTC and TYMC (both currently
lines+stations only) are the next large, well-defined gap matching the
brief's Parts 2-8 (fleet rosters, systems/operations).
