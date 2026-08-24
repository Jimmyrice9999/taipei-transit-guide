# For Jamie

## Active handoff - 24 August 2026
Parts 0-3 are complete. Parts 4-15 remain.
Part 1 CI hard gate is green: Actions run 342 completed Tests, Build for Pages
and deployment after adversarial warning attribution was fixed.

Part 2 adds `data/ridership/` plus three importers. TRTC and TYMC have 13
months of station entry/exit data; NTMC has 10 months of station rows and line
subtotals. Station pages show dated movement, trend, rank and no-JS tables;
line pages show published totals or TBC; `/rail/network/` shows operator trends.

Part 3 ships the family/lot fleet roster at
`/rail/metro/rolling-stock/fleet-roster/`; individual set/depot/withdrawal
records remain TBC. Research: `docs/research/rail/metro/fleet-rosters.md`.

Fresh gates passed: build, cite, facts, research, claims (0 ASSERTED), 219 unit
tests and browser verification. Axe found zero violations across 1,457 pages;
the expanded matrix produced 498 screenshots and clean print checks.

Ridership older months remain TBC: TRTC index reaches 2015, committed pull is
July 2025-July 2026; NTMC committed pull is September 2025-June 2026. The
New Taipei statistics-portal link timed out.

Known determinism artefact remains unchanged. Next: Part 4 systems and
operations, then Parts 5-15 in the user-specified order.
