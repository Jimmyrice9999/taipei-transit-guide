# Taiwan Railways Shanli–Taitung Double-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 110 of the operator's construction-history
table and its relationship to the current Shanli, Taitung and TDX records.

## What is established

- **The complete operator PDF records row 110 as Shanli–Taitung, a 7.3 km double-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `110. 山里─臺東(雙線) Shanli-Taitung 7.3`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor cells were read beside row 110. Original-language basis: `鐵路改建工程局 東部工程處`; the operator's English cells read `Railway Reconstruction Bureau Eastern Region Engineering Office`.
- **The aligned chronology gives 2010 in the construction-year field and 2013 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國 99 年 2010 民 國102年 2013` aligned to row 110.
- **The row describes the work as double-tracking.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `添築雙線。`; the operator's English column reads `Extended to be double-tracked`.
- **The current operator pages identify Shanli as station 6010 and Taitung as station 6000.** Source: National Taiwan Railways Corporation, *Shanli Station information* and *Taitung Station information*, titleOriginal `山里車站資訊` and `臺東車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6010` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6000`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 6010 山里` and `## 6000 臺東`.
- **The committed TDX station pull contains current records 6010 and 6000.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6010`, `StationName: { En: Shanli, Zh_tw: 山里 }`; `StationID: 6000`, `StationName: { En: Taitung, Zh_tw: 臺東 }`.
- **The committed TDX Eastern Main Line record places Shanli at source sequence 62 and 312.4 km and Taitung at source sequence 63 and 320.6 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 62`, `StationID: 6010`, `TraveledDistance: 312.4`; `Sequence: 63`, `StationID: 6000`, `TraveledDistance: 320.6`.

## Scope and measurement boundaries

- The historical 7.3 km value is retained as the operator's row 110 subject
  distance. The current TDX values are travelled-distance fields in the EL
  station-of-line record, not a source-defined replacement for the historical
  construction boundary.
- The 2010/2013 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  double-tracking or service-opening dates.
- The current operator construction-history HTML was fetched and read; no
  matching Shanli–Taitung row or row 110 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 7.3 km, while subtracting the current TDX EL
endpoint fields gives 8.2 km (320.6 minus 312.4). The current ordered record has
Luye between Shanli and Taitung, but neither source establishes that the two
values use the same endpoints, station reference points or measurement purpose.

## Checked and failed

- **Exact construction, double-tracking or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2010 and 2013 year fields.
- **Surveyed boundary for the 7.3 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 7.3 km to the current 8.2 km TDX interval** — checked 2026-08-27 by comparing row 110 with the current EL sequence. Shanli and Taitung are separated by current Luye, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 110** — checked 2026-08-27 in the full operator construction-history table. No matching Shanli–Taitung row or double-tracking explanation was found.

## Stated gaps

An operator engineering archive with row 110's surveyed endpoints, contract,
completion record, double-tracking scope, before-and-after track inventory and
source-defined measurement boundary would settle the missing details. Until then,
row 110 is kept as a historical 7.3 km double-track subject with 2010/2013 fields
and a double-tracking explanation, while current Shanli 6010, Taitung 6000 and
the EL sequence remain a separate live-data layer.
