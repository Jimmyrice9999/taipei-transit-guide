# Taiwan Railways Chishang–Haiduan Single-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 108 of the operator's construction-history
table and its relationship to the current Chishang, Haiduan and TDX records.

## What is established

- **The complete operator PDF records row 108 as Chishang–Haiduan, a 0.3 km single-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `108. 池上─海端(單線) Chishang-Haiduan 0.3`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because both constructor cells were read beside row 108. Original-language basis: `鐵路改建工程局 東部工程處`; the operator's English cells read `Railway Reconstruction Bureau Eastern Region Engineering Office`.
- **The aligned chronology gives 2012 in the construction-year field and 2013 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國101年 2012 民 國102年 2013` aligned to row 108.
- **The row describes the work as Hualien–Taitung railway electrification engineering.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `花東鐵路電氣化工程。`; the operator's English column reads `Hualien-Taitung railway electricification engineering`.
- **The current operator pages identify Chishang as station 6070 and Haiduan as station 6060.** Source: National Taiwan Railways Corporation, *Chishang Station information* and *Haiduan Station information*, titleOriginal `池上車站資訊` and `海端車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6070` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6060`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 6070 池上` and `## 6060 海端`.
- **The committed TDX station pull contains current records 6070 and 6060.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6070`, `StationName: { En: Chishang, Zh_tw: 池上 }`; `StationID: 6060`, `StationName: { En: Haiduan, Zh_tw: 海端 }`.
- **The committed TDX Eastern Main Line record places Chishang at source sequence 56 and 278.4 km and Haiduan at source sequence 57 and 284.1 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 56`, `StationID: 6070`, `TraveledDistance: 278.4`; `Sequence: 57`, `StationID: 6060`, `TraveledDistance: 284.1`.

## Scope and measurement boundaries

- The historical 0.3 km value is retained as the operator's row 108 subject
  distance. The current TDX values are travelled-distance fields in the EL
  station-of-line record, not a source-defined replacement for the historical
  construction boundary.
- The 2012/2013 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  electrification or service-opening dates.
- The current operator construction-history HTML was fetched and read; no
  matching Chishang–Haiduan row or row 108 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 0.3 km, while subtracting the current TDX EL
endpoint fields gives 5.7 km (284.1 minus 278.4). The current ordered record has
no member between Chishang and Haiduan, but neither source establishes that the
two values use the same endpoints, station reference points or measurement
purpose.

## Checked and failed

- **Exact construction, electrification or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2012 and 2013 year fields.
- **Surveyed boundary for the 0.3 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 0.3 km to the current 5.7 km TDX interval** — checked 2026-08-27 by comparing row 108 with the current EL sequence. Chishang and Haiduan are adjacent current members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 108** — checked 2026-08-27 in the full operator construction-history table. No matching Chishang–Haiduan row or electrification explanation was found.

## Stated gaps

An operator engineering archive with row 108's surveyed endpoints, contract,
completion record, electrification scope, track arrangement and source-defined
measurement boundary would settle the missing details. Until then, row 108 is
kept as a historical 0.3 km single-track subject with 2012/2013 fields and a
Hualien–Taitung electrification explanation, while current Chishang 6070, Haiduan
6060 and the EL sequence remain a separate live-data layer.
