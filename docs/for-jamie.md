# For Jamie

Written 12 August 2026, after run 13. Three small tasks, separately
committed, `npm run verify` clean after each. No research/images/screenshots.

1. **Districts show English + Chinese** everywhere printed. New
   `lib/districts.ts`, Taipei/New Taipei only — Taoyuan (Airport MRT) is `TBC`.
2. **Deleted the audit-confirmed dead code**: `METRO_LINES`,
   `getRouteOrderedStations`, 7 CSS selectors. Wired `npm run unused` into
   `verify`. Kept `LIGHT_RAIL_LINES`/`CHARACTERS`, commented why.
3. **Font flash fixed**: `display: swap → optional`, all three Latin fonts —
   they were already preloaded/self-hosted, `swap` itself was the flash. No
   trustworthy timing number; run-log §87.3 says why and what would work.
