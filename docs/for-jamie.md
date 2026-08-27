# For Jamie

## Active handoff - Run 274 - 27 August 2026

Run 274 closes the two gaps flagged after Run 273's CI fix. `npm run
font:check` (new, in `gate:fast`, ~1s) scans content/**/*.md for Han
characters in 2+-character runs and fails if any is missing from every
committed subset — verified it actually fails (removed 籌, confirmed
detection, restored). Scoped to content/ only after lib/components/app
produced 9 false-positive-in-spirit hits: real characters in pre-existing
Danhai/Circular/Airport-MRT data files that a full build's own postbuild
check confirms never actually render on any current page — narrower scope
avoids permanent noise while still catching the real failure mode (new
content pages, which is what broke CI).

PDF extraction: `pdftoppm`/poppler isn't installed, but `pdftotext` (xpdf)
already is, on PATH. Confirmed by extracting 2 of the 3 previously-failed
PDFs in full (a 143-page TRA tunnel-safety report; the TRA annual
statistics digest) — documented in AGENTS.md/SKILL.md. The third
(rb.gov.tw's fire-safety report) is Incapsula-blocked at the network level,
not a tool gap.

That extraction paid off immediately: TRA's annual 2024 statistics digest,
now readable, **primary-confirms level-crossings.md's 415 figure** (was
secondary-only) and reveals the earlier station-ridership research
mis-cited which report has "Table 6" — the *monthly* report's Table 6 is
line-level passenger-km, not stations; the *annual* report's Table 6 is the
real station-level table, extracted but not yet reliably row-aligned (still
TBC, honestly). Both pages corrected and re-cited.

`npm run gate:fast` passed after fixes; `npm run research` clean (238
files, 996 checked failures). `probes/` remains untracked.

Next: continue the 14-part brief. TRA is at 242/245 stations and all 12
THSR are done (confirmed stale in the prior brief) — audit before assuming
scope. This is commit 2 since the last full gate (Run 272); running
`gate:full` once more anyway before continuing, given how much changed
(font tooling, PDF workflow) since CI broke.
