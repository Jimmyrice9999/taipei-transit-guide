# Taiwan Railways Haiduan–Ruiyuan Single-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 109 of the operator's construction-history
table and its relationship to the current Haiduan, Ruiyuan and TDX records.

## What is established

- **The complete operator PDF records row 109 as Haiduan–Ruiyuan, a 4.6 km single-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `109. 海端─瑞源(單線) Haiduan-Ruiyuan 4.6`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor cells were read beside row 109. Original-language basis: `鐵路改建工程局 東部工程處`; the operator's English cells read `Railway Reconstruction Bureau Eastern Region Engineering Office`.
- **The aligned chronology gives 2010 in the construction-year field and 2013 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國 99 年 2010 民 國102年 2013` aligned to row 109.
- **The row describes the work as Hualien–Taitung railway electrification engineering.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `花東鐵路電氣化工程。`; the operator's English column reads `Hualien-Taitung railway electricification engineering`.
- **The current operator pages identify Haiduan as station 6060 and Ruiyuan as station 6030.** Source: National Taiwan Railways Corporation, *Haiduan Station information* and *Ruiyuan Station information*, titleOriginal `海端車站資訊` and `瑞源車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6060` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6030`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 6060 海端` and `## 6030 瑞源`.
- **The committed TDX station pull contains current records 6060 and 6030.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6060`, `StationName: { En: Haiduan, Zh_tw: 海端 }`; `StationID: 6030`, `StationName: { En: Ruiyuan, Zh_tw: 瑞源 }`.
- **The committed TDX Eastern Main Line record places Haiduan at source sequence 57 and 284.1 km and Ruiyuan at source sequence 60 and 300.8 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 57`, `StationID: 6060`, `TraveledDistance: 284.1`; `Sequence: 60`, `StationID: 6030`, `TraveledDistance: 300.8`.

## Scope and measurement boundaries

- The historical 4.6 km value is retained as the operator's row 109 subject
  distance. The current TDX values are travelled-distance fields in the EL
  station-of-line record, not a source-defined replacement for the historical
  construction boundary.
- The 2010/2013 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  electrification or service-opening dates.
- The current operator construction-history HTML was fetched and read; no
  matching Haiduan–Ruiyuan row or row 109 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 4.6 km, while subtracting the current TDX EL
endpoint fields gives 16.7 km (300.8 minus 284.1). The current ordered record
contains Guanshan and Ruihe between the endpoint members, but neither source
establishes that the two values use the same endpoints, station reference points
or measurement purpose.

## Checked and failed

- **Exact construction, electrification or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2010 and 2013 year fields.
- **Surveyed boundary for the 4.6 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 4.6 km to the current 16.7 km TDX interval** — checked 2026-08-27 by comparing row 109 with the current EL sequence. Haiduan and Ruiyuan are separated by current Guanshan and Ruihe members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 109** — checked 2026-08-27 in the full operator construction-history table. No matching Haiduan–Ruiyuan row or electrification explanation was found.

## Stated gaps

An operator engineering archive with row 109's surveyed endpoints, contract,
completion record, electrification scope, track arrangement and source-defined
measurement boundary would settle the missing details. Until then, row 109 is
kept as a historical 4.6 km single-track subject with 2010/2013 fields and a
Hualien–Taitung electrification explanation, while current Haiduan 6060, Ruiyuan
6030 and the EL sequence remain a separate live-data layer.
