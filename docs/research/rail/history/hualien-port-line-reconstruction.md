# Taiwan Railways Hualien Port Line Reconstruction Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the operator's Hualien Port Line
construction-history row and the boundary of current passenger data.

## What is established

- **The complete operator construction-history PDF records Hualien Port Line as row 95 at 10.5 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and its rendered places table was read. Original-language basis: `95.花蓮港線 Hualien Port Line 10.5 鐵路改建工程局 Railway Reconstruction Bureau`.
- **The PDF assigns the row to the Railway Reconstruction Bureau's Eastern Region Engineering Office.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor continuation was read in the complete table. Original-language basis: `鐵路改建工程局 東部工程處`.
- **The PDF's aligned chronology gives 1992 construction and 2004 operation start, with heavier rail and PC sleepers.** Source: the same full operator PDF, PRIMARY, High confidence because the places and chronology pages were rendered and aligned by row order. Original-language basis: `民 國 81 年 1992 民 國 93 年 2004 舖設重軌、PC枕。`.
- **The current operator HTML table does not contain a Hualien Port Line row; it contains Xincheng–Hualien Port at 19.2 km and other Hualien-area rows.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: `27.新城 - 花蓮港 | 19.2 ...`, followed by the later Hualien-area rows; no `花蓮港線` row appears.
- **The operator chronology records Hualien Port station and branch electrification from 22 June 2012.** Source: Taiwan Railways Administration, *Taiwan Railways chronology, 2012*, titleOriginal `101年大事紀要表`, publisher `臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=14`, PRIMARY, High confidence because the complete chronology page was fetched and read. Original-language basis: `101.06.22 | 花蓮港站及花蓮港支線電氣化自6月22日0時起全線通車。`
- **The current operator station page identifies Hualien as 7000, while the committed TDX station pull has no named Hualien Port passenger-station record.** Sources: National Taiwan Railways Corporation, *Hualien Station information*, titleOriginal `花蓮車站資訊`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000`, and Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full operator page and committed full TDX pull were read. Original-language/data basis: `## 7000 花蓮`; the TDX pull contains `StationID: 7000` for Hualien and no named Hualien Port passenger record.
- **The committed TDX station-of-line pull places Hualien at source sequence 37 with supplied travelled distance 169.7 km on EL; it contains no named Hualien Port endpoint record.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was scanned. Original-language/data basis: `LineID: EL`, `Sequence: 37, StationID: 7000, StationName: 花蓮, TraveledDistance: 169.7`; no Hualien Port endpoint record.

## Scope and measurement boundaries

- The 10.5 km value is the operator's historical row value. It is not replaced by the current TDX Hualien station field or by the current HTML's 19.2 km Xincheng–Hualien Port row.
- The chronology alignment is based on rendered row order: row 95 follows row 94 and aligns with the `1992 / 2004 / 舖設重軌、PC枕` continuation. The source does not provide a surveyed boundary or detailed asset inventory for the row.
- The 2012 electrification entry is retained as a related operator milestone. It does not by itself define the 10.5 km construction boundary or current passenger service.
- The current Hualien station and TDX fields are reference records only. They do not establish a port endpoint or a current service boundary.

## Conflicts between primary presentations

- The historical operator PDF contains row 95 at 10.5 km, while the current operator HTML omits Hualien Port Line and instead contains Xincheng–Hualien Port at 19.2 km. The two presentations have different coverage and named boundaries; neither value is substituted for the other.
- The current passenger layer identifies Hualien 7000 but does not provide a named Hualien Port passenger endpoint. This is a data-coverage boundary, not evidence that the historical line did not exist.
- The 2012 operator chronology names Hualien Port station and branch electrification, but the checked source does not state whether that branch boundary is identical to PDF row 95. The relationship remains open.

## Checked and failed

- **Surveyed Hualien Port endpoint and former station sequence** — checked 2026-08-26 in the complete construction-history PDF, current operator HTML and committed TDX station and station-of-line pulls. No complete endpoint or station sequence for row 95 was found.
- **Detailed contract, completion certificate and structures in the 10.5 km row** — checked 2026-08-26 in the complete operator PDF and current HTML. Only the year-level chronology and short work description were found.
- **Relationship between row 95 and other Hualien Port-named records** — checked 2026-08-26 in the complete operator PDF, current HTML and 2012 chronology. The checked primaries do not say whether the boundaries are shared, overlapping or different.
- **Current passenger/freight service boundary and track count** — checked 2026-08-26 in the current operator HTML, 2012 chronology, current Hualien station page and committed TDX pulls. No current as-built or service-boundary record was found.

## Stated gaps

An operator engineering file, former station register, route diagram, port-line
service record and current as-built plan would be needed to connect row 95 to a
surveyed endpoint and to the other Hualien Port-named records. Until those are
fetched and read, the 10.5 km historical record, the 19.2 km current HTML row
and the current Hualien 7000 passenger record remain separate contexts.
