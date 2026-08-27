# For Jamie

## Active handoff - Run 265 - 27 August 2026

Run 265 is the first content run using Run 264's parallel pattern: two
`line-scout` agents researched the Old Mountain Line (舊山線, Sanyi–Houlong)
and the Donggang Line (東港線) concurrently; the main session wrote both
pages sequentially from what they returned.

Donggang Line: TRA's own construction-history PDF could not be read for this
subject (unreadable compressed export) — the page rests on an Academia
Historica article and four news reports, all marked secondary. Closure
(1991) is attributed to a bridge ending road-travel dependence on the line,
not to South Link changes as the brief's hypothesis assumed; no source
supports that hypothesis. Old Mountain Line: heritage-designation dates for
Shengxing Station and Longteng Bridge could not be verified — the Ministry of
Culture's heritage database is a JS-rendered SPA the fetch tooling can't
execute, and web.archive.org is blocked — so those dates are reported as
unverified leads, not facts. Both pages publish several genuine multi-source
conflicts (exact closure dates, bridge construction year, tunnel/bridge
counts) rather than picking a value.

`npm run gate:fast` passed after fixes (3 initially-unsourced sentences were
found and cited); `npm run research` is clean (231 files, 977 checked
failures). `probes/` remains untracked.

Next: continue with more closed-line/branch subjects via the same
parallel-scout pattern, then move to Parts 2-8 once TRA/THSR gaps are
exhausted.
