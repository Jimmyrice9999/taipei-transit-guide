# Taiwan Railways Hualien–Ruisui Double-track Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's Hualien–Ruisui construction
record, its double-track scope and the current TDX endpoint fields.

## What is established

- **The complete operator construction-history PDF records Hualien–Ruisui as row 92 at 70.5 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `92.花蓮─瑞穗 Hualien-Ruisui 70.5 鐵路改建工程局 Railway Reconstruction Bureau`.
- **The PDF assigns the project to the Railway Reconstruction Bureau's Eastern Region Engineering Office.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read in the complete table. Original-language basis: `鐵路改建工程局 東部工程處`.
- **The PDF's aligned chronology gives 1987 construction and 1994 operation start, with an extension to double track.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned continuation were read together. Original-language basis: `民國 76 年 1987 民國 83 年 1994 添築雙線。`.
- **The current operator HTML table does not contain a Hualien–Ruisui row.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: the full current table was read; it contains nearby `31.花蓮 - 和平`, `32.和平 - 蘇澳新站` and `33.花蓮 - 臺東(拓寬)` rows but no `花蓮 - 瑞穗` row.
- **The current operator station pages identify Hualien as 7000 and Ruisui as 6130.** Sources: National Taiwan Railways Corporation, *Hualien Station information*, titleOriginal `花蓮車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000`, and *Ruisui Station information*, titleOriginal `瑞穗站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6130`, PRIMARY, High confidence because both full current station pages were fetched and read. Original-language basis: `## 7000 花蓮` and `## 6130 瑞穗`.
- **The committed TDX station pull contains both current passenger-station records.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `StationID: 7000 ... StationName: {En: Hualien, Zh_tw: 花蓮}` and `StationID: 6130 ... StationName: {En: Ruisui, Zh_tw: 瑞穗}`.
- **The committed TDX station-of-line pull places Hualien at source sequence 37 with travelled distance 169.7 km and Ruisui at source sequence 50 with travelled distance 232.5 km on EL; the guide presents these as positions 38 and 51 and calculates a 62.8 km difference.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `LineID: EL`, `Sequence: 37, StationID: 7000, StationName: 花蓮, TraveledDistance: 169.7` and `Sequence: 50, StationID: 6130, StationName: 瑞穗, TraveledDistance: 232.5`.

## Scope and measurement boundaries

- The historical row 92 value is 70.5 km and its aligned chronology is 1987/1994; the row's explanation names extension to double track rather than a complete modern as-built inventory.
- The current HTML omission is a coverage boundary. It is not used to erase or disprove the older PDF row.
- The 62.8 km TDX difference is a subtraction of current supplied travelled-distance fields. It is not silently substituted for the historical construction length.
- Current station IDs identify current passenger records, not the surveyed historical boundary or the as-built state of intervening structures.

## Conflicts between primary presentations

- The complete operator PDF contains row 92, while the fetched current operator HTML table does not contain a Hualien–Ruisui row. This is a source-coverage conflict, not a disagreement over two published lengths.
- The operator's historical 70.5 km construction record and the current 62.8 km TDX endpoint-field difference are different measurement layers. The checked sources do not explain the 7.7 km difference.

## Checked and failed

- **Surveyed engineering boundary and chainage** — checked 2026-08-26 in the complete construction-history PDF, current operator HTML and committed TDX line pull. No surveyed boundary or contract-level chainage for row 92 was found.
- **Detailed contract package and completion certificate** — checked 2026-08-26 in the complete operator construction-history PDF and current operator history table. No row-specific contract or completion certificate was found.
- **Detailed scope beyond the double-track label** — checked 2026-08-26 in the complete operator construction-history PDF and current operator history table. The row names extension to double track but does not enumerate individual structures or a complete civil-work package.
- **Current as-built track count and service boundary** — checked 2026-08-26 in the operator history sources, current Hualien and Ruisui station pages and committed TDX pulls. The sources identify current stations and line fields but do not provide a complete as-built inventory for the project boundary.
- **Explanation for the 62.8 km TDX versus 70.5 km operator difference** — checked 2026-08-26 in the operator PDF and committed TDX line pull. The sources provide both values but do not identify whether the difference reflects rounding, route definition, station reference points or another measurement boundary.

## Stated gaps

An operator engineering file, contract/completion record or historical route
diagram would be needed to define the 70.5 km boundary and the exact sequence
of double-track works. A current as-built and service record would be needed to
say more about present physical use. Until those are fetched and read, the
70.5 km operator record and the 62.8 km TDX interval remain separate records.
