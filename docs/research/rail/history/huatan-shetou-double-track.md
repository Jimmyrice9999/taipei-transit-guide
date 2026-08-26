# Taiwan Railways Huatan–Shetou Double-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 111 of the operator's construction-history
table and its relationship to the current Huatan, Shetou and TDX records.

## What is established

- **The complete operator PDF records row 111 as Huatan–Shetou, a 4.3 km double-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `111. 花壇─社頭(雙線) Huatan-Shetou 4.3`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor cells were read beside row 111. Original-language basis: `鐵路改建工程局 東部工程處`; the operator's English cells read `Railway Reconstruction Bureau Eastern Region Engineering Office`.
- **The aligned chronology gives 2006 in the construction-year field and 2014 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國 95 年 2006 民 國103年 2014` aligned to row 111.
- **The row describes the work as a Yuan-Lin Railway elevated project.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `員林鐵路高架化。`; the operator's English column reads `Yuan-Lin Railway Elevated`.
- **The current operator pages identify Huatan as station 3370 and Shetou as station 3410.** Source: National Taiwan Railways Corporation, *Huatan Station information* and *Shetou Station information*, titleOriginal `花壇車站資訊` and `社頭車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/3370` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/3410`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 3370 花壇` and `## 3410 社頭`.
- **The committed TDX station pull contains current records 3370 and 3410.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 3370`, `StationName: { En: Huatan, Zh_tw: 花壇 }`; `StationID: 3410`, `StationName: { En: Shetou, Zh_tw: 社頭 }`.
- **The committed TDX Western Main Line record places Huatan at source sequence 59 and 217.5 km and Shetou at source sequence 63 and 232.8 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: WL`, `Sequence: 59`, `StationID: 3370`, `TraveledDistance: 217.5`; `Sequence: 63`, `StationID: 3410`, `TraveledDistance: 232.8`.

## Scope and measurement boundaries

- The historical 4.3 km value is retained as the operator's row 111 subject
  distance. The current TDX values are travelled-distance fields in the WL
  station-of-line record, not a source-defined replacement for the historical
  construction boundary.
- The 2006/2014 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  elevated-railway or service-opening dates.
- The current operator construction-history HTML was fetched and read; no
  matching Huatan–Shetou row or row 111 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 4.3 km, while subtracting the current TDX WL
endpoint fields gives 15.3 km (232.8 minus 217.5). The current ordered record has
Dacun, Yuanlin and Yongjing between Huatan and Shetou, but neither source
establishes that the two values use the same endpoints, station reference points
or measurement purpose.

## Checked and failed

- **Exact construction, elevated-railway or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2006 and 2014 year fields.
- **Surveyed boundary for the 4.3 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 4.3 km to the current 15.3 km TDX interval** — checked 2026-08-27 by comparing row 111 with the current WL sequence. Huatan and Shetou are separated by current Dacun, Yuanlin and Yongjing members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 111** — checked 2026-08-27 in the full operator construction-history table. No matching Huatan–Shetou row or elevated-railway explanation was found.

## Stated gaps

An operator engineering archive with row 111's surveyed endpoints, contract,
completion record, elevated-railway scope, before-and-after track inventory and
source-defined measurement boundary would settle the missing details. Until then,
row 111 is kept as a historical 4.3 km double-track subject with 2006/2014 fields
and a Yuan-Lin Railway elevated explanation, while current Huatan 3370, Shetou 3410
and the WL sequence remain a separate live-data layer.
