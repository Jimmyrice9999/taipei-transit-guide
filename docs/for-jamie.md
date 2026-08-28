# For Jamie

## Active handoff - Run 303 - 29 August 2026 - Taiwan rebrand + nav split + V4 bus depth done, 7 commits

Rebranded to Taiwan Transit Guide throughout, fixing real staleness found
alongside it (about/rail pages claimed things long false, e.g. "TRA/THSR
have no pages yet"). Rail's nav now groups by mode instead of a flat
8-system list — nav-only, no URLs moved. Added `/regions/`, a geography
index gathering every mode by place.

V4 bus depth is essentially finished: CNG buses, historic manufacturers,
2f route deepening, operator ratings for Taoyuan/Taichung/Kaohsiung/Tainan
(not just Taipei/New Taipei), and operator/fleet depth for all four
regional bus pages. The old handoff's claim that the 聯營公車 history page
didn't exist was itself stale — it's existed since Run 9.

Two full `gate:full` checkpoints, both clean; caught 3 real bugs
`gate:fast` missed, and self-inflicted the same CJK font regression 3
times (fonts before build) — caught every time, worth fixing the habit.

**Not reached**: Part 3 (visual/photos) and Part 4 (depth audit) not
started. Browser/viewport verification wasn't run — do `/regions/` and
the new nav first next time. Scout concurrency ceiling still untested (a
10-scout burst hit a session rate limit before any of them started).
Detail in docs/run-log.md Run 303.
