# For Jamie

## Active handoff - Run 282 - 27 August 2026

Run 282 adds Kaohsiung Metro's under-construction Yellow Line: first
dedicated content+research pages, found by fetching the bureau's actual
menu (guessed URLs 404'd). 22.91 km, 1 elevated + 22 underground stations
+ 1 depot, full Y1-Y23 station table with six named interchanges, station
names explicitly provisional. Construction budget rose from NT$144.237bn
(2022 comprehensive plan) to NT$236.858bn (2025 revised plan) — ~64%,
unexplained by the source. Six contract packages each at a different
stage; one August 2026 tender failed with zero bidders. No opening date,
no depot name found.

`gate:full` caught a real bug: `line: Y` in frontmatter has no registered
accent-colour for KRTC (Yellow Line has no TDX/project-registry data-layer
entry — unlike TYMC Green Line, registered in an earlier run). Fixed by
dropping the `line:` field rather than guessing a colour or doing infra
work outside a content run's scope — a real follow-up if line colours
matter here later.

CI note (single check, not polled further): commit `faa1ade1` (Run 278,
pushed ~13:38 UTC checked at ~14:20 UTC) has had its "Tests" job stuck
`in_progress` for 50+ minutes — far longer than any local run (~60-85s)
— and, unlike three later pushes which correctly got auto-cancelled by
newer commits on the same branch, this one wasn't. Looks like the same
stuck-runner class of issue reported after Run 278, still unresolved,
still outside what's fixable from this session.

Full local validation across Runs 279-282: `gate:fast` clean every time,
`gate:full` clean against a fresh build every time (234/234 tests, facts,
research, geometry:audit, a11y). Audit JSONs restored each time, not
committed. `probes/` remains untracked.

Next: continuing the brief — remaining Parts 2-8 (fare history, TOD,
interactive features), or more KRTC Yellow Line depth (depot name,
opening date) as sources surface.
