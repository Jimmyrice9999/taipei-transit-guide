# Taiwan Railways Hanben–Hualien Double-track Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's Hanben–Hualien reconstruction
record, its construction scope and the current TDX endpoint fields.

## What is established

- **The complete operator construction-history PDF records Hanben–Hualien as row 91 at 42.5 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `91.漢本─花蓮(雙線) Hanben-Hualien 42.5 鐵路改建工程局 Railway Reconstruction Bureau`.
- **The PDF assigns the project to the Railway Reconstruction Bureau's Eastern Region Engineering Office.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read in the complete table. Original-language basis: `鐵路改建工程局 東部工程處`.
- **The PDF's aligned chronology gives 1992 construction and 2003 operation start, with double-tracking, electrification, heavier rail and PC sleepers.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned continuation were read together. Original-language basis: `民國 81 年 1992 民國 92 年 2003 添築雙線、電氣化、重軌、PC枕。`.
- **The current operator HTML table does not contain a Hanben–Hualien row.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: the full current table was read; its displayed later rows include `33.花蓮 - 臺東(拓寬)` and it contains no `漢本 - 花蓮` row.
- **The operator's full chronology records the East Line widening beginning at Nanhua in 1978.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Taiwan Railways chronology, 1966–1998*, titleOriginal `66年～98年大事紀要表`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=17`, PRIMARY, High confidence because the full chronology page was fetched and the dated entry read. Original-language basis: `67.07.01 | 東線鐵路拓寬工程，在南華站正式全面開工。`
- **An official 4 July 2003 ceremony record says North Link electrification formally opened and credits the Railway Reconstruction Bureau and its Eastern Region Engineering Office.** Source: Office of the President, Republic of China (Taiwan), *President attends the opening ceremony for East Railway Improvement Project North Link electrification*, titleOriginal `總統參加「東部鐵路改善計畫北迴線電氣化」通車典禮`, publisher `中華民國總統府`, `https://www.president.gov.tw/NEWS/154`, PRIMARY, High confidence because the full official page was fetched and read. Original-language basis: `92年07月04日` and `北迴鐵路的電氣化今天正式完工通車` plus the thanks to `鐵路改建工程局` and `東工處`.
- **The current operator station pages identify Hanben as 7070 and Hualien as 7000.** Sources: National Taiwan Railways Corporation, *Hanben Station information*, titleOriginal `漢本站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7070`, and *Hualien Station information*, titleOriginal `花蓮車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000`, PRIMARY, High confidence because both full current station pages were fetched and read. Original-language basis: `## 7070 漢本` and `## 7000 花蓮`.
- **The committed TDX station-of-line pull places Hanben at source sequence 30 with travelled distance 125.7 km and Hualien at source sequence 37 with travelled distance 169.7 km on EL; the guide presents these as positions 31 and 38 and calculates a 44.0 km difference.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `LineID: EL`, `Sequence: 30, StationID: 7070, StationName: 漢本, TraveledDistance: 125.7` and `Sequence: 37, StationID: 7000, StationName: 花蓮, TraveledDistance: 169.7`.
- **The committed TDX station pull contains both current passenger-station records.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `StationID: 7070 ... StationName: {En: Hanben, Zh_tw: 漢本}` and `StationID: 7000 ... StationName: {En: Hualien, Zh_tw: 花蓮}`.

## Scope and measurement boundaries

- The historical row 91 value is 42.5 km and its aligned chronology is 1992/2003; the row's explanation names several recorded work categories rather than a complete modern as-built inventory.
- The current HTML omission is a coverage boundary. It is not used to erase or disprove the older PDF row.
- The 44.0 km TDX difference is a subtraction of current supplied travelled-distance fields. It is not silently substituted for the historical construction length.
- Current station IDs identify current passenger records, not the surveyed historical boundary or the as-built state of intervening structures.

## Conflicts between primary presentations

- The complete operator PDF contains row 91, while the fetched current operator HTML table does not contain a Hanben–Hualien row. This is a source-coverage conflict, not a disagreement over two published lengths.
- The operator's historical 42.5 km construction record and the current 44.0 km TDX endpoint-field difference are different measurement layers. The checked sources do not explain the 1.5 km difference.
- The 4 July 2003 presidential ceremony record confirms the North Link electrification opening and credits the same reconstruction office named in the row, but it does not state that the ceremony's full project boundary equals row 91's 42.5 km.

## Checked and failed

- **Surveyed engineering boundary and chainage** — checked 2026-08-26 in the complete construction-history PDF, current operator HTML and committed TDX line pull. No surveyed boundary or contract-level chainage for row 91 was found.
- **Detailed contract package and completion certificate** — checked 2026-08-26 in the complete operator construction-history PDF, current operator history table and the official 2003 opening record. No row-specific contract or completion certificate was found.
- **Current as-built track count and service boundary** — checked 2026-08-26 in the operator history sources, current Hanben and Hualien station pages and committed TDX pulls. The sources identify current stations and line fields but do not provide a complete as-built inventory for the project boundary.
- **Explanation for the 44.0 km TDX versus 42.5 km operator difference** — checked 2026-08-26 in the operator PDF and committed TDX line pull. The sources provide both values but do not identify whether the difference reflects rounding, route definition, station reference points or another measurement boundary.

## Stated gaps

An operator engineering file, contract/completion record or historical route
diagram would be needed to define the 42.5 km boundary and the exact sequence
of works. A current as-built and service record would be needed to say more
about present physical use. Until those are fetched and read, the 42.5 km
operator record, the 44.0 km TDX interval and the 2003 opening context remain
separate records.
