# Taiwan Railways Wuhe–Sanmin Single-track Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 104 of the operator's construction-history
table and its relationship to the current Sanmin station and TDX records.

## What is established

- **The complete operator PDF records row 104 as Wuhe–Sanmin, a 1.6 km single-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `104. 舞鶴─三民(單線) Wuhe-Sanmin 1.6`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because both constructor cells were read beside row 104. Original-language basis: `鐵路改建工程局 東部工程處`; the operator's English cells read `Railway Reconstruction Bureau Eastern Region Engineering Office`.
- **The aligned chronology gives 2013 in both the construction-year and operation-start fields.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民國102年 2013 民國102年 2013` aligned to row 104.
- **The row describes the work as Hualien–Taitung railway electrification engineering.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `花東鐵路電氣化工程。`; the operator's English column reads `Hualien-Taitung railway electricification engineering`.
- **The operator's broader achievement page records the Hualien–Taitung electrification and bottleneck double-tracking programme as approved in 2008, formally started on 4 December 2009, and covering 30 stations over about 155.46 km.** Source: National Taiwan Railways Corporation, *Railway achievements*, titleOriginal `臺鐵電氣化沿革及歷年建設`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-achievement-1`, PRIMARY, High confidence because the full current page was fetched and read. Original-language basis: `民國97年2月18日...花東線鐵路瓶頸路段雙軌化暨全線電氣化工程` and `民國98年12月4日...正式動工...涵蓋30個車站，路線全長約155.46公里`. This is programme context, not a source-defined row-104 boundary.
- **The current operator page identifies Sanmin as station 6120.** Source: National Taiwan Railways Corporation, *Sanmin Station information*, titleOriginal `三民車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6120`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 6120 三民`.
- **The committed TDX station pull contains the current station 6120 record and no record whose English or Traditional Chinese name matches Wuhe / 舞鶴.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6120`, `StationName: { En: Sanmin, Zh_tw: 三民 }`; no matching `Wuhe` or `舞鶴` entry was found in that pull.
- **The committed TDX Eastern Main Line record places Sanmin at source sequence 51 with a supplied travelled distance of 241.9 km, between Ruisui at sequence 50 and Yuli at sequence 52.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 50`, `StationID: 6130`, `TraveledDistance: 232.5`; `Sequence: 51`, `StationID: 6120`, `TraveledDistance: 241.9`; `Sequence: 52`, `StationID: 6110`, `TraveledDistance: 252.7`.

## Scope and measurement boundaries

- The historical 1.6 km value is retained as the operator's row 104 subject
  distance. The current TDX record supplies a Sanmin station field and its
  surrounding EL sequence, not a Wuhe–Sanmin project interval.
- The 2013/2013 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  electrification or service-opening dates.
- The operator's 155.46 km and 30-station figures describe the broader
  Hualien–Taitung programme. The checked primary does not assign those totals to
  row 104 or define them as a replacement for its 1.6 km field.
- The current operator construction-history HTML was fetched and read; no
  matching Wuhe–Sanmin row or row 104 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

No like-for-like current numeric interval was found for Wuhe–Sanmin. The
historical operator row gives 1.6 km, while current TDX identifies Sanmin at
241.9 km and does not expose a Wuhe member from which an endpoint difference
could be calculated. The programme page's approximately 155.46 km is a broader
scope and is not treated as a competing value. The absence of a current Wuhe
record is reported as a coverage gap, not as evidence that the historical row
was false.

## Checked and failed

- **Exact construction, electrification or operation-start days** — checked 2026-08-26 in the full ten-page operator PDF, the current operator achievement page and the current Sanmin page. The row supplies only 2013 year fields.
- **Surveyed boundary for the 1.6 km value** — checked 2026-08-26 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 1.6 km to a current TDX interval** — checked 2026-08-26 against the full committed TRA station and EL station-of-line pulls. Sanmin is present, but no current Wuhe member or endpoint field was found.
- **Current operator HTML reproduction of row 104** — checked 2026-08-26 in the full operator construction-history table. No matching Wuhe–Sanmin row or electrification explanation was found.
- **Treating the 155.46 km programme total as row 104's distance** — checked 2026-08-26 against the full operator achievement page and PDF. The sources describe different scopes and do not make that mapping.

## Stated gaps

An operator engineering archive with row 104's surveyed endpoints, contract,
completion record, electrification scope, track arrangement and source-defined
measurement boundary would settle the missing details. A current structured
record for the historical Wuhe endpoint, if one exists under another identity,
would allow a present-day interval comparison. Until then, row 104 is kept as a
historical 1.6 km single-track subject with 2013/2013 fields, while current
Sanmin 6120 and the EL sequence remain a separate live-data layer.
