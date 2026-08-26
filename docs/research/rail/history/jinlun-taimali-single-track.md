# Taiwan Railways Jinlun–Taimali Single-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 112 of the operator's construction-history
table and its relationship to the current Jinlun, Taimali and TDX records.

## What is established

- **The complete operator PDF records row 112 as Jinlun–Taimali, a 1.9 km single-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `112. 金崙─太麻里(單線) Jinlun-Taimali 1.9`.
- **The row names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor cell was read beside row 112. Original-language basis: `臺灣鐵路管理局 TRA`; the operator's English cell reads `TRA`.
- **The aligned chronology gives 2010 in the construction-year field and 2014 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國 99 年 2010 民 國103年 2014` aligned to row 112.
- **The row describes the work as a South-Taimail Bridge reconstruction.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `南太麻里溪橋改建。`; the operator's English column reads `South-Taimail Bridge reconstruction`.
- **The current operator pages identify Jinlun as station 5210 and Taimali as station 5220.** Source: National Taiwan Railways Corporation, *Jinlun Station information* and *Taimali Station information*, titleOriginal `金崙車站資訊` and `太麻里車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5210` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/5220`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 5210 金崙` and `## 5220 太麻里`.
- **The committed TDX station pull contains current records 5210 and 5220.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 5210`, `StationName: { En: Jinlun, Zh_tw: 金崙 }`; `StationID: 5220`, `StationName: { En: Taimali, Zh_tw: 太麻里 }`.
- **The committed TDX South Link record places Jinlun at source sequence 19 and 104.2 km and Taimali at source sequence 20 and 115.1 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: SL`, `Sequence: 19`, `StationID: 5210`, `TraveledDistance: 104.2`; `Sequence: 20`, `StationID: 5220`, `TraveledDistance: 115.1`.

## Scope and measurement boundaries

- The historical 1.9 km value is retained as the operator's row 112 subject
  distance. The current TDX values are travelled-distance fields in the SL
  station-of-line record, not a source-defined replacement for the historical
  construction boundary.
- The 2010/2014 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  bridge-reconstruction or service-opening dates.
- The current operator construction-history HTML was fetched and read; no
  matching Jinlun–Taimali row or row 112 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 1.9 km, while subtracting the current TDX SL
endpoint fields gives 10.9 km (115.1 minus 104.2). The current ordered record has
no member between Jinlun and Taimali, but neither source establishes that the two
values use the same endpoints, station reference points or measurement purpose.

## Checked and failed

- **Exact construction, bridge-reconstruction or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2010 and 2014 year fields.
- **Surveyed boundary for the 1.9 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 1.9 km to the current 10.9 km TDX interval** — checked 2026-08-27 by comparing row 112 with the current SL sequence. Jinlun and Taimali are adjacent current members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 112** — checked 2026-08-27 in the full operator construction-history table. No matching Jinlun–Taimali row or bridge-reconstruction explanation was found.

## Stated gaps

An operator engineering archive with row 112's surveyed endpoints, contract,
completion record, bridge-reconstruction scope, track arrangement and source-
defined measurement boundary would settle the missing details. Until then, row
112 is kept as a historical 1.9 km single-track subject with 2010/2014 fields and
a South-Taimail Bridge reconstruction explanation, while current Jinlun 5210,
Taimali 5220 and the SL sequence remain a separate live-data layer.
