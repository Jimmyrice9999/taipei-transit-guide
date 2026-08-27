# For Jamie

## Active handoff - Run 281 - 27 August 2026

Run 281 completes TMRT's four-section structure (technology, rolling-stock,
facilities, operations) — now matching TRA, KRTC and TYMC. All four Taiwan
rail operators covered by this site now have the same section shape.

Accessibility: ten named facilities from the operator's own dedicated page
(ramps, parking, signage, tactile tiles, low ticket machines, accessible
gates, elevators, platform waiting zone, emergency buttons, intercoms) —
the page's own "1 2" pagination confirms a second page exists that
client-side rendering blocked this session from reading.

Ridership: one real month (July 2026) from the operator's PDF archive —
1,484,410 total, 47,884 daily average, internally consistent. The table's
own column headers didn't survive `pdftotext` extraction (CJK font issue),
so what's being counted rests on the file's title, not a read label — TBC,
not asserted. The 2024 annual report hit a worse PDF failure (undecodable
`Adobe-CNS1` font) and stayed unread.

Full local validation across Runs 279-281 (KRTC/TYMC depots, TMRT
tech+rolling-stock, TMRT facilities+operations): `gate:fast` clean every
time, `gate:full` clean against a fresh build every time (234/234 tests,
facts, research, geometry:audit, a11y) — two real bugs caught along the
way (spec `unit:` formatting, a too-short `_index.md` description), both
only visible to the full suite, not `gate:fast`. Audit JSONs restored each
time, not committed. `probes/` remains untracked.

Next: the brief's remaining Parts 2-8 (fare history, TOD, interactive
features) across any operator, or a first pass at THSR/TRA gaps not yet
covered by this session's operator-parity sweep.
