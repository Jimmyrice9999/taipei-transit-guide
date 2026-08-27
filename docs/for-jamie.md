# For Jamie

## Active handoff - Run 276 - 27 August 2026

Run 276 opens KRTC (Kaohsiung Metro) systems coverage — previously only
lines/stations existed. Signalling: Red/Orange (2008-) run with drivers on
Siemens track-circuit interlockings, confirmed directly by an operator FAQ
and by the Gangshan extension's own engineering page (which describes
extending the existing R22 interlocking, not overlaying new tech); the
under-construction Yellow Line is Siemens Trainguard MT CBTC at GoA4,
confirmed by Siemens' own press release — a genuinely different system
generation, not an upgrade. Rolling stock: no primary KRTC/government page
was found stating the original 42-Siemens-trainset fleet directly (secondary
sources only, though two independently corroborate each other); a new
16-set Hyundai Rotem order for the Gangshan-Luzhu and Xiaogang-Linyuan
extensions is confirmed compatible with the existing Siemens system; the
Circular Light Rail (2 manufacturers, CAF then Alstom) and Yellow Line
(Stadler) fleets are each separately sourced.

Also hit and fixed a second font-tooling trap this session: `npm run fonts`
silently used a stale `out/` (in build mode) and missed 2 new characters
entirely — deleted `out/` to force the safe source-scan fallback, then did
a full fresh rebuild afterward to restore the properly-optimized per-page
font split (fallback mode unions everything into every subset, ballooning
each to 693KB). Confirmed clean afterward via a full rebuild:
`tests/build-output.test.mts`, `accessibility.test.mts`,
`discoverability.test.mts`, `search.test.mts` and `markdown.test.mts`
(104 tests total, all excluded from `gate:fast` as slow/build-dependent)
all pass.

`npm run gate:fast` passed after fixes (2 uncited sentences); `npm run
research` clean (240 files, 1004 checked failures). `probes/` remains
untracked.

Next: continue KRTC (accessibility, ridership, depots) or move to TYMC
(Taoyuan Metro/Airport MRT), which is in the same lines-only state.
