# Taiwan Railways Songshan–Nangang Underground Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's historical Songshan–Nangang
underground row and the boundary between that record and current passenger
station data.

## What is established

- **The complete operator construction-history PDF records Songshan–Nangang as row 96 at 7.7 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and its rendered places table was read. Original-language basis: `96.松山─南港(地下化) Songshan-Nangang 7.7 鐵路改建工程局 Railway Reconstruction Bureau`.
- **The PDF assigns the row to the Railway Reconstruction Bureau.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read in the complete table. Original-language basis: `鐵路改建工程局`.
- **The PDF's aligned chronology gives 1998 construction and 2008 operation start, with railway underground as the work description.** Source: the same full operator PDF, PRIMARY, High confidence because the places and chronology pages were rendered and aligned by row order. Original-language basis: `民 國 87 年 1998 民 國 97 年 2008 鐵路地下化。`.
- **The current operator HTML does not contain a matching Songshan–Nangang underground row.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: the current table's full route-history rows contain no `松山─南港(地下化)` or matching 7.7 km row.
- **The current operator provides station-information pages for 0990 Songshan and 0980 Nangang.** Sources: National Taiwan Railways Corporation, *Songshan Station information*, titleOriginal `松山站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/0990`, and *Nangang Station information*, titleOriginal `南港站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/0980`, PRIMARY, High confidence because both full operator pages were fetched and read. Original-language basis: the station page headings identify `0990 松山` and `0980 南港`.
- **The committed TDX station pull contains current records for 0980 Nangang and 0990 Songshan.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full committed pull was read. Original-language/data basis: records with `StationID: 0980, StationName: 南港` and `StationID: 0990, StationName: 松山`.
- **The committed TDX Western Main Line pull places Nangang at source sequence 8 and 19.3 km, and Songshan at source sequence 9 and 22.1 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `LineID: WL` with `Sequence: 8, StationID: 0980, StationName: 南港, TraveledDistance: 19.3` and `Sequence: 9, StationID: 0990, StationName: 松山, TraveledDistance: 22.1`.

## Scope and measurement boundaries

- The 7.7 km value is the historical operator row value. It is not replaced by the current TDX endpoint fields or treated as the distance between current station reference points.
- The chronology alignment is based on rendered row order: row 96 follows row 95 and aligns with the `1998 / 2008 / 鐵路地下化` continuation. The source does not provide a surveyed boundary or detailed asset inventory for this row.
- The current operator station pages and TDX station records establish current station identities only. They do not define the historical project's exact portals, engineering limits or as-built state.
- The TDX guide presentation uses one-based positions 9 and 10 for source sequences 8 and 9. Subtracting the supplied travelled-distance fields gives 2.8 km. This is a current data-layer interval, not a substitute for the 7.7 km historical project length.

## Conflicts between primary presentations

- The historical operator PDF contains row 96 at 7.7 km, while the current operator HTML does not contain a matching Songshan–Nangang underground row. This is a coverage difference between operator presentations; neither value or omission is silently rewritten.
- The historical project length is 7.7 km, while the current TDX WL endpoint fields differ by 2.8 km. The checked sources do not state whether these measure the same boundary, station reference points, a route centerline, or different project scopes. Both values are published with their contexts.
- The current TDX ordering places Nangang immediately before Songshan, but sequence adjacency does not define service stopping patterns or historical construction limits.

## Checked and failed

- **Surveyed 7.7 km boundary, tunnel portals and engineering limits** — checked 2026-08-26 in the complete construction-history PDF and current operator HTML. No detailed boundary or portal schedule was found.
- **Contract, completion certificate and detailed structures** — checked 2026-08-26 in the complete operator PDF and current HTML. Only the row-level constructor, years, distance and short underground work description were found.
- **Current as-built track, station depth and relocation inventory** — checked 2026-08-26 in the current operator station pages, current history HTML and committed TDX station/station-of-line pulls. No source checked supplies a complete as-built engineering inventory for the historical row.
- **Explanation for 7.7 km versus 2.8 km** — checked 2026-08-26 across the historical PDF, current HTML and TDX pulls. No checked primary states whether the difference is rounding, route definition, station reference points or another measurement boundary.

## Stated gaps

An operator engineering file, underground-project completion record, route
diagram, station relocation register and current as-built plan would be needed
to connect the historical row to exact portals, project limits and present
track architecture. Until those are fetched and read, the 7.7 km historical
record and the 2.8 km current TDX interval remain separate contexts.
