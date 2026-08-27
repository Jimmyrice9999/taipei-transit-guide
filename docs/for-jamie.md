# For Jamie

## Active handoff - Run 289 - 28 August 2026

Run 289 adds TRA's own fare page — the fourth and final operator to get
one, extending past the three-operator metro fare set (Runs 283-285).
Richer than expected: a full published charter-train rate table (5
distance tiers × 3 classes, NT$/person/km), a dated free-seating rollout
(1 July 2026, named EMU3000 train numbers, 95% adult fare), group-ticket
tiers, and Puyuma/Taroko round-trip volume discounts effective 1 January
2026.

Same cross-operator pattern confirmed a fourth time: TRA's own page also
defers the ordinary single-ticket base fare to an unfetched calculator
tool rather than stating it as text — matching TYMC, KRTC and TMRT. Nine
named regional TPASS-style passes plus several other named products
(season pass, TR-PASS, etc.) are confirmed to exist but weren't followed
through to their own pages this session.

Full local validation across Runs 279-289 (11 commits this
continuation): `gate:fast` clean every time (after one scope-statements
fix — a "this page does not yet..." header, same class hit twice before),
`gate:full` clean against a fresh build every time. Audit JSONs restored
each time, not committed. `probes/` remains untracked.

All four Taiwan rail operators (TRA, KRTC, TYMC, TMRT) now have technology,
rolling-stock, facilities, operations/ridership, and operations/fares
coverage. KRTC/TYMC/TMRT also have projects/TOD coverage.

Next: TRA's own TOD/land-development page (if TRA has an equivalent
programme — not yet checked), the nine regional TPASS passes in more
depth, or continuing other Parts of the brief (interactive features).
