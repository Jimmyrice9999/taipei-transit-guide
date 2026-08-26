# Taiwan Railways Su'aoxin–Hanben Double-track Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's Su'aoxin–Hanben reconstruction
record, its recorded rail works and the current TDX endpoint fields.

## What is established

- **The complete operator construction-history PDF records Su'aoxin–Hanben as row 94 at 36.7 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `94.蘇澳新站─漢本 Su'aoxin-Hanben 36.7 鐵路改建工程局 Railway Reconstruction Bureau`.
- **The PDF assigns the project to the Railway Reconstruction Bureau's Eastern Region Engineering Office.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read in the complete table. Original-language basis: `鐵路改建工程局 東部工程處`.
- **The PDF's aligned chronology gives 1992 construction and 2003 operation start, with heavier rail and PC sleepers.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned continuation were read together. Original-language basis: `民 國 81 年 1992 民 國 92 年 2003 舖設重軌、PC枕。`.
- **The current operator HTML table does not contain a Su'aoxin–Hanben row.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: the full current table was read; it contains nearby `32.和平 - 蘇澳新站` and `33.花蓮 - 臺東(拓寬)` rows but no `蘇澳新站 - 漢本` row.
- **The current operator station pages identify Su'aoxin as 7130 and Hanben as 7070.** Sources: National Taiwan Railways Corporation, *Su'aoxin Station information*, titleOriginal `蘇澳新站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7130`, and *Hanben Station information*, titleOriginal `漢本站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7070`, PRIMARY, High confidence because both full current station pages were fetched and read. Original-language basis: `## 7130 蘇澳新` and `## 7070 漢本`.
- **The committed TDX station pull contains both current passenger-station records.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `StationID: 7130 ... StationName: {En: Su'aoxin, Zh_tw: 蘇澳新}` and `StationID: 7070 ... StationName: {En: Hanben, Zh_tw: 漢本}`.
- **The committed TDX station-of-line pull places Su'aoxin at source sequence 25 with travelled distance 90.2 km and Hanben at source sequence 30 with travelled distance 125.7 km on EL; the guide presents these as positions 26 and 31 and calculates a 35.5 km difference.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `LineID: EL`, `Sequence: 25, StationID: 7130, StationName: 蘇澳新, TraveledDistance: 90.2` and `Sequence: 30, StationID: 7070, StationName: 漢本, TraveledDistance: 125.7`.

## Scope and measurement boundaries

- The historical row 94 value is 36.7 km and its aligned chronology is 1992/2003; the row's explanation names heavy rail and PC sleepers rather than a complete modern as-built inventory.
- The current HTML omission is a coverage boundary. It is not used to erase or disprove the older PDF row.
- The 35.5 km TDX difference is a subtraction of current supplied travelled-distance fields. It is not silently substituted for the historical construction length.
- Current station IDs identify current passenger records, not the surveyed historical boundary or the as-built state of intervening structures.

## Conflicts between primary presentations

- The complete operator PDF contains row 94, while the fetched current operator HTML table does not contain a Su'aoxin–Hanben row. This is a source-coverage conflict, not a disagreement over two published lengths.
- The operator's historical 36.7 km construction record and the current 35.5 km TDX endpoint-field difference are different measurement layers. The checked sources do not explain the 1.2 km difference.

## Checked and failed

- **Surveyed engineering boundary and chainage** — checked 2026-08-26 in the complete construction-history PDF, current operator HTML and committed TDX line pull. No surveyed boundary or contract-level chainage for row 94 was found.
- **Detailed contract package and completion certificate** — checked 2026-08-26 in the complete operator construction-history PDF and current operator history table. No row-specific contract or completion certificate was found.
- **Detailed scope beyond the heavy-rail and PC-sleeper labels** — checked 2026-08-26 in the complete operator construction-history PDF and current operator history table. The row names the recorded rail and sleeper works but does not enumerate individual structures or a complete civil-work package.
- **Current as-built track count and service boundary** — checked 2026-08-26 in the operator history sources, current Su'aoxin and Hanben station pages and committed TDX pulls. The sources identify current stations and line fields but do not provide a complete as-built inventory for the project boundary.
- **Explanation for the 35.5 km TDX versus 36.7 km operator difference** — checked 2026-08-26 in the operator PDF and committed TDX line pull. The sources provide both values but do not identify whether the difference reflects rounding, route definition, station reference points or another measurement boundary.

## Stated gaps

An operator engineering file, contract/completion record or historical route
diagram would be needed to define the 36.7 km boundary and the exact sequence
of works. A current as-built and service record would be needed to say more
about present physical use. Until those are fetched and read, the 36.7 km
operator record and the 35.5 km TDX interval remain separate records.
