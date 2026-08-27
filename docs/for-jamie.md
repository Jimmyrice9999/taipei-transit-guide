# For Jamie

## Active handoff - Run 277 - 27 August 2026

Run 277 opens TYMC (Taoyuan Airport MRT) systems coverage, same pattern as
KRTC. Signalling: named the previously-unidentified British firm (Invensys)
at the centre of the decade-old Marubeni signalling-subcontracting dispute;
declined to publish an automation grade (GoA2 then GoA4) because the
Wikipedia infobox line carrying it has no citation at all, and GoA4
(driverless) contradicts every source describing conventionally crewed
trains — published as TBC rather than repeat an unsupported number. Rolling
stock: a real cross-check catch — the manufacturer's own commuter-train
spec sheet and the operator's own seat-count total agree exactly (188);
Wikipedia's own composition table for the same fleet sums to 185, likely a
transcription error, published as a conflict rather than silently
corrected.

`npm run gate:fast` passed after fixes (2 uncited meta-sentences); `npm run
research` clean (242 files, 1007 checked failures). Ran the full local
`gate:full` before this batch (12m50s: 234/234 tests, 17/17 fact
cross-checks, clean) since Run 276 needed real fixes CI had caught —
confirms the pipeline is solid again. `probes/` remains untracked.

KRTC and TYMC now both have technology/ and rolling-stock/ sections
alongside lines/stations. Both operators still lack facilities/ and
operations/ sections (accessibility, ridership) — the next natural gap,
mirroring TRA's structure.

Next: continue KRTC/TYMC accessibility or ridership, or return to any
remaining TRA-specific gap. Commit counter since last full gate: 0 (just
ran one before this batch).
