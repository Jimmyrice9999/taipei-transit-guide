# For Jamie

## Active handoff - Run 272 - 27 August 2026

Run 272 corrects a stale TBC: the operations `_index.md` said station-level
service data "still needs a separate primary-data pass." It does exist — TRA
publishes a live, per-station, per-day gate entry/exit dataset
(data.gov.tw #8792) with JSON/compressed downloads — but this run could not
read its actual content (only a single low-confidence data point via an
unparsed-JSON summary) or the separate Statistical Report's station-level
Table 6 (PDF extraction failed; the environment lacks poppler-utils
entirely, so no PDF in this project can currently be read by the Read tool's
page-render fallback either). New page states what's confirmed (the
dataset's existence/access method, high confidence) versus what's still
TBC (actual station figures/rankings, all resting on unverified secondary
compilations only). A third-party TDX guide suggests no full
station-to-station OD matrix exists for TRA at all (only Taipei MRT) — also
unverified against TDX's own docs.

`npm run gate:fast` passed clean on the first pass; `npm run research`
needed one date fix (238 files, 995 checked failures). `probes/` remains
untracked.

This is a good stopping point for a status report to the user after a long
session (Runs 264-272): Part 0 speed fixes shipped, Part 1 substantially
advanced with 9 new TRA-systems/closed-line pages, all gated and pushed.

Next: the missing poppler-utils/PDF-extraction capability is now a
recurring blocker (hit on TRA's fire/tunnel report, the maintenance-workshop
Phase I page, and this ridership Table 6) — worth flagging to Jamie
directly rather than re-discovering per-run. Otherwise: continue
TRA-systems gaps or move to Parts 2-8 (fare/TOD) in the next run.
