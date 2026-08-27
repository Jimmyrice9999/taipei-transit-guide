# For Jamie

## Active handoff - Run 283 - 27 August 2026

Run 283 adds TYMC fare history, upgrading a thin existing lead (the
airport-mrt.md research had only a search-synthesis NT$160 figure, flagged
as unverified). Two TYMC ticketing pages fetched directly turned up a real
fare-reform event the corpus had entirely missed: on 2 January 2025, TYMC
replaced its whole season-pass line with a new "超值定期票" scheme —
different day-counts, different discount tiers on every duration, not a
rebrand. Six-month fee-free exchange/refund window for old-pass holders.

The base single fare in NT$ is still unconfirmed — both TYMC pages
reference "公告票價" only as a formula variable behind a JS fare
calculator; TDX's ODFare endpoint needs an API key this session doesn't
have. This is now a *confirmed* gap (TYMC's static pages genuinely don't
state it) rather than the previous session's unverified gap.

`gate:fast` caught a real scope-statements violation: a header and a
sentence both used "this page cannot yet ..." phrasing, which
tests/scope-statements.test.mts correctly flags as process-commentary that
belongs in docs/research, not reader-facing content. Reworded both to
state the gap as a source fact rather than a page limitation.

Full local validation across Runs 279-283 (KRTC/TYMC depots, TMRT
tech+rolling-stock, TMRT facilities+operations, KRTC Yellow Line, TYMC
fares): `gate:fast` clean every time, `gate:full` clean against a fresh
build every time. Audit JSONs restored each time, not committed. `probes/`
remains untracked.

CI note from Run 282 (not re-checked since, per the no-polling rule):
commit faa1ade1's (Run 278) "Tests" job was stuck in_progress 50+ minutes
past normal, not auto-cancelled by later pushes unlike three other
commits — still the same unresolved stuck-runner pattern, still outside
what's fixable from here.

Next: KRTC fare history (parallel gap to TYMC's), or continuing the
brief's remaining Parts 2-8 (TOD, interactive features) across any
operator.
