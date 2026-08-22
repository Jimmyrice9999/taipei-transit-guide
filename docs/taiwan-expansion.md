# Taiwan expansion — Taichung Metro pilot

**Status: TMRT pilot implemented, 23 August 2026.** The first non-Taipei rail system is now represented by committed TDX data and content pages. This document records what changed from the earlier proposal and what remains outside scope.

## What was verified live

The authenticated TDX pull for `TMRT` returned one line record, 18 station records, two directional route records, one geometry record, two S2S travel-time records and first/last timetable records on 22 August 2026. The Green Line uses the bare code `G`, while Taipei's Songshan–Xindian Line also uses `G`; the two records are not interchangeable.

The fetched TMRT station sequence is `G0, G3, G4, G5, G6, G7, G8, G8a, G9, G10, G10a, G11, G12, G13, G14, G15, G16, G17`. The missing zero padding is source data, not a typo to correct. Current files live under `data/tdx/TMRT/` and are generated into the shared station registry.

## Architecture changes that were required

- `scripts/fetch-tdx.mjs` now includes TMRT as a fetched operator.
- `lib/lines.ts` imports TMRT line data and keys every line by `OPERATOR:CODE`; bare `G` is ambiguous and resolves to nothing. Namespaced calls such as `getLine('G', 'TMRT')` and `getLine('G', 'TRTC')` are explicit.
- `scripts/generate-stations.mts` reads station and route records with their operator namespace, so `G10` from TRTC cannot overwrite `G10` from TMRT. `lib/stations.ts` retains stable first-wins legacy bare lookups for old Taipei pages but exposes namespaced lookup for new content, maps and joins.
- Taipei's hand-researched `STATION_OVERLAY` is only applied to TRTC rows. Without that guard, TMRT's reused `G10`–`G17` codes would inherit Taipei structure and engineering facts.
- The generic filesystem-driven rail system route now serves `/rail/tmrt/`, `/rail/tmrt/lines/green-line/` and `/rail/tmrt/stations/<code>/`. Legacy `/rail/metro/stations/` generation explicitly excludes TMRT.
- The station data download is split: `taipei-metro-stations.json` contains non-TMRT Taipei-region TDX rows, while `taichung-metro-stations.json` contains the 18 TMRT rows. The data page names the collection as regional station records rather than calling TMRT a Taipei station.
- `getLinePageHref`, `LineBadge`, `LineIcon`, `CardRow`, `PhotoCard`, network summaries and station links all carry the operator where a bare code can collide.

## Content delivered

`content/rail/tmrt/` contains the system, Lines and Stations indexes, a Green Line page and 18 station pages. Each station page is over 200 words and uses TDX for code/name/address/coordinates/sequence/chainage, official project pages for CJ910/CJ920/CJ930 context, the operator FAQ for engineering form, and operator art, soundscape or incident records where a station-specific source exists. `docs/research/rail/tmrt/green-line.md` records the original-language primary-source basis, conflicts and failed checks.

The research found a material chronology correction: the joint-shaft fracture occurred during test operation on 21 November 2020; test operation restarted on 25 March 2021 and formal service opened on 25 April 2021. The brief's “2021 joint-collapse and 2022 reopening” wording is contradicted by the operator, city, MOTC and Control Yuan records. The station pages do not repeat it.

## Deliberate gaps

This pilot does not add TRA, THSR or Kaohsiung Metro. It does not infer station exits, platform layouts, individual construction completion dates or unlisted public art. It publishes the operator's 16.71 km route figure alongside TDX's 16.70 km `RouteLength` and 16.93/16.97 km directional station-chainage values because the sources do not establish that they measure the same thing.
