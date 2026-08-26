# Taiwan Railways Pingtung–Chaozhou Double-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 113 of the operator's construction-history
table and its relationship to the current Pingtung, Chaozhou and TDX records.

## What is established

- **The complete operator PDF records row 113 as Pingtung–Chaozhou, a 16.3 km double-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `113. 屏東─潮州(雙線) Pingtung-Chaozhou 16.3`.
- **The row names the Railway Reconstruction Bureau's Southern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor cells were read beside row 113. Original-language basis: `鐵路改建工程局 Railway Reconstruction Bureau`; `南部工程處 Soithern Region Engineering Office` (the official PDF English cell contains the spelling `Soithern`).
- **The aligned chronology gives 2009 in the construction-year field and 2015 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國 98 年 2009 民 國104年 2015` aligned to row 113.
- **The row describes the work as South of Pingtung to Chaozhou Railway Elevated.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `屏東以南至潮州鐵路高架化。`; the operator's English column reads `South of Pingtung to Chaozhou Railway Elevated`.
- **The current operator pages identify Pingtung as station 5000 and Chaozhou as station 5050.** Source: National Taiwan Railways Corporation, *Pingtung Station information* and *Chaozhou Station information*, titleOriginal `屏東車站資訊` and `潮州車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5000` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5050`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 5000 屏東` and `## 5050 潮州`.
- **The committed TDX station pull contains current records 5000 and 5050.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 5000`, `StationName: { En: Pingtung, Zh_tw: 屏東 }`; `StationID: 5050`, `StationName: { En: Chaozhou, Zh_tw: 潮州 }`.
- **The committed TDX South Link record places Pingtung at source sequence 0 and 0.0 km and Chaozhou at source sequence 5 and 15.0 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: SL`, `Sequence: 0`, `StationID: 5000`, `TraveledDistance: 0`; `Sequence: 5`, `StationID: 5050`, `TraveledDistance: 15`.

## Scope and measurement boundaries

- The historical 16.3 km value is retained as the operator's row 113 subject distance. The current TDX values are travelled-distance fields in the SL station-of-line record, not a source-defined replacement for the historical construction boundary.
- The 2009/2015 values are reported as the operator's construction and operation-start table fields. The row does not provide day-level construction, elevation or service-opening dates.
- The current operator construction-history HTML was fetched and read; no matching Pingtung–Chaozhou row or row 113 explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 16.3 km, while the current TDX SL endpoint fields give 15.0 km (15.0 minus 0.0). The current ordered record has four members between Pingtung and Chaozhou, but neither source establishes that the two values use the same endpoints, station reference points or measurement purpose.

## Checked and failed

- **Exact construction, elevation or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2009 and 2015 year fields.
- **Surveyed boundary for the 16.3 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 16.3 km to the current 15.0 km TDX interval** — checked 2026-08-27 by comparing row 113 with the current SL sequence. Pingtung and Chaozhou are separated by four current members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 113** — checked 2026-08-27 in the full operator construction-history table. No matching Pingtung–Chaozhou row or railway-elevation explanation was found.

## Stated gaps

An operator engineering archive with row 113's surveyed endpoints, contract,
completion record, railway-elevation scope, track arrangement and source-defined
measurement boundary would settle the missing details. Until then, row 113 is kept
as a historical 16.3 km double-track subject with 2009/2015 fields and a South of
Pingtung to Chaozhou Railway Elevated explanation, while current Pingtung 5000,
Chaozhou 5050 and the SL sequence remain a separate live-data layer.
