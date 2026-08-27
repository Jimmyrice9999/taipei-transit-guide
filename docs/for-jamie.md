# For Jamie

## Active handoff - Run 268 - 27 August 2026

Run 268 publishes TRA's maintenance-workshop network, and corrects a framing
risk in the process: TRA's "depots" are actually two legally distinct
tiers, not one flat list — three heavy-overhaul workshops (富岡/Fugang,
潮州/Chaozhou, 花蓮/Hualien, each under its own bylaw per the Organization
Act) versus seven lighter operating sections (機務段) plus four inspection
sections (檢車段). The existing fleet-roster page's "operating groups"
(Qidu/Taipei/Hsinchu etc.) are 機務段-level stabling assignments, not
heavy-overhaul depot assignments — that distinction is now stated on the
new page rather than left implicit. TRA's approved 2024-27 maintenance plan
(65 pages, read in full) gives each workshop's planned annual volume and
explains why EMU900/EMU3000 Level 3/4 work moved to Chaozhou (Fugang and
Hualien were already at capacity).

This is commit 5 of the run: per the tiered-gate policy, `npm run gate:full`
(`verify && test`) is now due before continuing.

`npm run gate:fast` passed after fixes (3 uncited sentences found and
sourced); `npm run research` clean (235 files, 985 checked failures).
`probes/` remains untracked.

Next: run the full gate, then continue TRA-systems/closed-line subjects via
parallel scouts.
