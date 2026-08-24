# For Jamie

## Active handoff — 24 August 2026
Parts 0–2 are complete. Parts 3–6 remain complete through Runs 104–117.
Part 1’s CI hard gate is green: Actions run 342 completed Tests, Build for
Pages and deployment after fixing adversarial warning attribution.

Part 2 adds `data/ridership/` plus three permanent importers. TRTC and TYMC
have 13 months of station entry/exit data; NTMC has 10 months of station rows
and line subtotals. Station pages now show dated movement, trend, rank and a
no-JS table; line pages show published totals or TBC; `/rail/network/` shows
operator trends without deduplicating transfers.

Full-source research is in `docs/research/rail/metro/ridership.md`; Run 119 is
in `docs/run-log.md`. TRTC’s index reaches 2015 and includes 2018–2019; those
older months are not yet imported. NTMC’s statistics-portal link timed out.

Fresh gates passed: build, cite, facts, 219 unit tests, a11y (1,457 pages),
research and browser verification. Browser axe found zero violations across
1,456 pages; the expanded matrix produced 491 screenshots and clean print
checks. Generated audits were restored and `probes/` was not staged.

Known determinism artefact remains unchanged. Next unit: Part 3 fleet evidence
and roster design, then Parts 4–15 in the user-specified order.
