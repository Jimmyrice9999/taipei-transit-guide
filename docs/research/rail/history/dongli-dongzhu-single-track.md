# Taiwan Railways Dongli–Dongzhu Single-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 106 of the operator's construction-history
table and its relationship to the current Dongli, Dongzhu and TDX records.

## What is established

- **The complete operator PDF records row 106 as Dongli–Dongzhu, a 2.1 km single-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `106. 東里─東竹(單線) Dongli-Dongzhu 2.1`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because both constructor cells were read beside row 106. Original-language basis: `鐵路改建工程局 東部工程處`; the operator's English cells read `Railway Reconstruction Bureau Eastern Region Engineering Office`.
- **The aligned chronology gives 2012 in the construction-year field and 2013 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民國101年 2012 民國102年 2013` aligned to row 106.
- **The row describes the work as Hualien–Taitung railway electrification engineering.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `花東鐵路電氣化工程。`; the operator's English column reads `Hualien-Taitung railway electricification engineering`.
- **The operator's broader achievement page records the Hualien–Taitung electrification and bottleneck double-tracking programme as approved in 2008, formally started on 4 December 2009, and covering 30 stations over about 155.46 km.** Source: National Taiwan Railways Corporation, *Railway achievements*, titleOriginal `臺鐵電氣化沿革及歷年建設`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-achievement-1`, PRIMARY, High confidence because the full current page was fetched and read. Original-language basis: `民國97年2月18日...花東線鐵路瓶頸路段雙軌化暨全線電氣化工程` and `民國98年12月4日...正式動工...涵蓋30個車站，路線全長約155.46公里`. This is programme context, not a source-defined row-106 boundary.
- **The current operator pages identify Dongli as station 6100 and Dongzhu as station 6090.** Source: National Taiwan Railways Corporation, *Dongli Station information* and *Dongzhu Station information*, titleOriginal `東里車站資訊` and `東竹車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6100` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6090`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 6100 東里` and `## 6090 東竹`.
- **The committed TDX station pull contains current records 6100 and 6090.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6100`, `StationName: { En: Dongli, Zh_tw: 東里 }`; `StationID: 6090`, `StationName: { En: Dongzhu, Zh_tw: 東竹 }`.
- **The committed TDX Eastern Main Line record places Dongli at source sequence 53 and 259.5 km and Dongzhu at source sequence 54 and 265.5 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 53`, `StationID: 6100`, `TraveledDistance: 259.5`; `Sequence: 54`, `StationID: 6090`, `TraveledDistance: 265.5`.

## Scope and measurement boundaries

- The historical 2.1 km value is retained as the operator's row 106 subject
  distance. The current TDX values are travelled-distance fields in the EL
  station-of-line record, not a source-defined replacement for the historical
  construction boundary.
- The 2012/2013 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  electrification or service-opening dates.
- The operator's 155.46 km and 30-station figures describe the broader
  Hualien–Taitung programme. The checked primary does not assign those totals to
  row 106 or define them as a replacement for its 2.1 km field.
- The current operator construction-history HTML was fetched and read; no
  matching Dongli–Dongzhu row or row 106 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 2.1 km, while subtracting the current TDX EL
endpoint fields gives 6.0 km (265.5 minus 259.5). The current ordered record has
no member between Dongli and Dongzhu, but neither source establishes that the two
values use the same endpoints, station reference points or measurement purpose.
The broader 155.46 km programme total is a separate scope and is not treated as a
segment value.

## Checked and failed

- **Exact construction, electrification or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF, the current operator achievement page and both current station pages. The row supplies only 2012 and 2013 year fields.
- **Surveyed boundary for the 2.1 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 2.1 km to the current 6.0 km TDX interval** — checked 2026-08-27 by comparing row 106 with the current EL sequence. Dongli and Dongzhu are adjacent current members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 106** — checked 2026-08-27 in the full operator construction-history table. No matching Dongli–Dongzhu row or electrification explanation was found.
- **Treating the 155.46 km programme total as row 106's distance** — checked 2026-08-27 against the full operator achievement page and PDF. The sources describe different scopes and do not make that mapping.

## Stated gaps

An operator engineering archive with row 106's surveyed endpoints, contract,
completion record, electrification scope, track arrangement and source-defined
measurement boundary would settle the missing details. Until then, row 106 is
kept as a historical 2.1 km single-track subject with 2012/2013 fields and a
Hualien–Taitung electrification explanation, while current Dongli 6100, Dongzhu
6090 and the EL sequence remain a separate live-data layer.
