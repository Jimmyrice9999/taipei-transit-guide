# For Jamie

Written 13 August 2026, after run 17 — the ratchet fix. Run 16's 59 asserted
claims (baseline 32) never failed locally: `npm run verify` never ran the
ratchet test, only CI's own `test:unit` step did, and nobody ran that by
hand. Fixed the claims (18 prose sentences cited, TBC'd, or found a real
sourcing conflict for; 9 bare facts-labels cited to TDX) and the gap
(`verify` now runs `build` then `test:unit`). That rebuild+retest also
caught two pre-existing bugs since run 14/15: a stale page-count constant
and two specs with un-split units. Asserted is back to 32, matching
baseline — no baseline change. `npm run verify` clean, `test:unit` 184/184.
