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

## TRA and THSR groundwork (researched, no pages built)

**Status: researched against live official services on 24 August 2026.** This is a
v3 design report, not a content import. No TRA or THSR page, station record, or
line record was added by this pass.

### Live TDX coverage

The [TDX Basic service catalogue](https://tdx.transportdata.tw/data-service/basic)
was fetched live. Its current catalogue exposes separate TRA and THSR domains,
including route and station data, route geometry, regular timetables and
station timetables. The catalogue showed 61 TRA services and 31 THSR services
at the time of the check; these are catalogue-service counts, not station or
line counts.

The [TDX Public Transport catalogue](https://tdx.transportdata.tw/data-service/basic/public-transport)
lists live TRA train-position, arrival/departure and punctuality services, plus
TRA internal route-transfer data. It also lists THSR dynamic seat-board data.
The [TDX Historical catalogue](https://tdx.transportdata.tw/data-service/historical)
lists 24 TRA historical services and historical route-geometry offerings. The
page did not expose a clearly labelled THSR historical service in the fetched
listing; THSR historical coverage is therefore TBC rather than inferred from
the presence of current services.

| system | live records/services established | what remains to be measured before import |
| --- | --- | --- |
| TRA | Route, station-of-line, station-of-route, train type, OD fare, general train timetable and station timetable schemas; current geometry and dynamic train services; a historical catalogue entry | deduplicated current station count, branch graph, route-version history, closed-line inventory, alias dates, segment gauges and historical geometry coverage |
| THSR | Route, station-of-route, station-transfer, OD fare, general train timetable and station timetable schemas; route geometry and station map v3; current timetable and dynamic seat-board services | exact historical API/file coverage, timetable-version retention, and whether any historical geometry is separately exposed |

The [PTX usage documentation](https://ptx.transportdata.tw/PTX/APIs/Usage)
confirms that TRA and THSRC are separate service identifiers and gives the
standard API shape; its example is
`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$format=xml`.
The [Government Data Standards TRA list](https://schema.nat.gov.tw/lists/5)
names `TRARouteList`, `TRAStationOfLineList`, `TRAStationOfRouteList`,
`TRATrainTypeList`, `TRAODFareList`, `TRAGeneralTrainTimeTableList` and
`TRAGeneralStationTimeTableList`. The corresponding [THSR list](https://schema.nat.gov.tw/lists/6)
names route, station-of-route, station-transfer, fare and both timetable
schemas. These schema names are an implementation lead, not proof that every
field is populated in every current response.

### Primary source families

| family | role in the first TRA/THSR release |
| --- | --- |
| [Taiwan Railways Administration](https://www.railway.gov.tw/tra-tip-web/tip) | current station index, operating notices, timetables and company statistics |
| [TRA route construction history](https://www.railway.gov.tw/tra-tip-web/adr/about-1-5) | primary route-segment construction/opening chronology; the page records 1,435 mm standard gauge and 1,067 mm TRA gauge, with segment-level dates and builders |
| [Railway Bureau](https://www.rb.gov.tw/) | feasibility, contracts, engineering, grade separation, station and corridor works; its annual plan is the project-level source for works that change the current graph |
| [National Railway Museum](https://www.nrm.gov.tw/cp.aspx?n=3310) | vehicles, track systems, technical objects, archives and restoration context; its [cooperation memorandum](https://www.nrm.gov.tw/News_Content.aspx?n=3307&s=226224) links the museum, TRA and Railway Bureau for heritage and technical records |
| [Taiwan High Speed Rail](https://www.thsrc.com.tw/ArticleContent/a3b630bb-1066-4352-a1ef-58c7b4e8ef7c) | current 12-station timetable/fare query and downloadable timetable; the fetched page was effective 2 February 2026 |
| [MOTC transport statistics](https://www.motc.gov.tw/ch/app/data/doc?aplistdn=&detailNo=1&id=2051&module=view&preview=&serno=202506250000&type=s) and [HSR continuation](https://www.motc.gov.tw/ch/app/data/doc?detailNo=1488826298280185856&id=2052&module=vbook&serno=202506250248&type=s) | annual passenger, passenger-kilometre and operating indicators; 2024 TRA and THSR totals are published there |
| [Academia Historica (國史館)](https://www.drnh.gov.tw/) and [Academia Sinica Taiwan-history railway research](https://www.ith.sinica.edu.tw/quarterly_download.php?filename=14459975382.pdf&name=02+%E8%94%A1%E9%BE%8D%E4%BF%9D3%E6%A0%A1%E7%A8%BF0914.pdf) | archival names, former alignments, policy chronology and independently studied railway history; each claim still needs the specific archival or paper citation |

### What the current architecture can and cannot represent

The TMRT pilot proved that the existing operator namespace is the right starting
point: `lineKey()` is `OPERATOR:CODE`, line registries reject duplicate namespaced
keys, station lookups support `operator:code`, and geometry records retain their
operator. TRA and THSR should therefore use `TRA:<code>` and `THSR:<code>` (or
`THSRC:<code>` only if that is the chosen TDX namespace) from their first data
pull. Bare line and station tokens must never be used for cross-system joins.

Several assumptions would break at TRA scale:

- `Station` currently has one line prefix, one sequence and one current name.
  A TRA junction can belong to multiple routes, while a closed station and a
  renamed station need validity intervals and aliases. Add stable operator
  station IDs, `routeMembership[]`, `formerNames[]`, `validFrom`, `validTo` and
  `status: active|closed|historical`; do not overload the current `name` field.
- `getLineStations()` and the current spine model return one ordered station
  list. A branch network needs an edge/route graph with junction membership and
  route versions; a trunk-plus-one-branch drawing is insufficient for multiple
  branches, abandoned alignments and short workings.
- `LineGeometry` currently resolves one current shape per namespaced line.
  TRA needs geometry keyed by route/segment and time period, including a
  `historical` or `closed` status. Gauge belongs on a segment and validity
  interval, not on a single line object: the official route history itself
  distinguishes 1,435 mm and 1,067 mm records.
- Current generated TDX data is a snapshot. Import must retain the fetched date,
  source version and raw response hash so a later timetable or station rename
  does not silently rewrite history.
- The station registry's bare `BY_CODE` map is intentionally first-wins for
  legacy Taipei links. That compatibility path is unsafe for TRA and must be
  rejected or made opt-in for every new network and every cross-system join.

### TRA stations that are MRT or THSR interchanges

Keep one canonical entity per operating system. For example, TRA Xinwuri,
THSR Taichung and TMRT G17 are separate station records with namespaced IDs;
they share an `interchangeGroup`/complex ID and carry reciprocal transfer edges.
The same pattern applies to Taipei Main Station and Banqiao. A transfer edge
should state the connected operator/station, walking or paid-area status when a
source establishes it, and its own provenance. It must not copy TRA platform or
fare facts into a TRTC page, or merge three names into one page. This preserves
the existing operator-specific facts panels while making a cross-system hub
discoverable from either direction.

### Proposed first TRA/THSR scope and order

1. Pull and freeze current TRA TDX route, station, geometry, timetable, fare and
   transfer data; produce a data-only audit of namespaced IDs, duplicate station
   joins, branch edges and deduplicated station count.
2. Add temporal graph primitives (`routeVersion`, active dates, aliases,
   closed status, segment gauge and historical geometry) and fixtures for one
   branch, one renamed station and one closed line before generating pages.
3. Add current THSR routes/stations/timetables and the TRA–THSR–MRT interchange
   graph, using the 12 current THSR stations as the bounded second-system test.
4. Write the first content in this order: network and line overviews; major
   interchange stations; one branch line; current station pages; then historical
   closed lines and renamings; rolling stock and depots only after their source
   inventories are stable.
5. Backfill archival and academic chronology with claim-level citations, keeping
   current operations and historical states separate in both data and prose.

### TBC

The live catalogue check did not establish an authoritative deduplicated TRA
station total, the complete branch/route graph, the inventory of closed lines,
the dates of every century-scale rename, the full gauge-change chronology, or
THSR historical API coverage. Those require raw TDX pulls plus TRA/Railway Bureau
route histories and archival/academic checking. No page should publish any of
those values until the underlying records are fetched and reconciled.

### Checked and failed (24 August 2026)

The Government Data Standards example links were tested as full fetches and not
used as sources: TRA route XML returned HTTP 500 Internal Server Error at
`https://ptx.transportdata.tw/PTX/Standard/Example/TRA/TRARouteList.xml`;
TRA station and fare XML returned HTTP 400 Unsupported content-type `text/xml` at
`https://ptx.transportdata.tw/PTX/Standard/Example/TRA/TRAStationOfLineList.xml`
and `https://ptx.transportdata.tw/PTX/Standard/Example/TRA/TRAODFareList.xml`;
THSR route XML returned HTTP 400 Timeout at
`https://ptx.transportdata.tw/PTX/Standard/Example/THSR/THSRRouteList.xml`;
and THSR station XML returned HTTP 500 Internal Server Error at
`https://ptx.transportdata.tw/PTX/Standard/Example/THSR/THSRStationOfRouteList.xml`.
The failed examples prove only that those example endpoints were unavailable at
the check time; the schema catalogue links above remain the usable leads.
