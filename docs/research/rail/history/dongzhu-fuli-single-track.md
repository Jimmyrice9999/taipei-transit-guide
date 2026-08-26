# Taiwan Railways Dongzhu–Fuli Single-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 107 of the operator's construction-history
table and its relationship to the current Dongzhu, Fuli and TDX records.

## What is established

- **The complete operator PDF records row 107 as 東竹─富里, with the adjacent English cell spelling the pair Dongzhi-Fuli, a 2.9 km single-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `107. 東竹─富里(單線) Dongzhi-Fuli 2.9`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because both constructor cells were read beside row 107. Original-language basis: `鐵路改建工程局 東部工程處`; the operator's English cells read `Railway Reconstruction Bureau Eastern Region Engineering Office`.
- **The aligned chronology gives 2012 in the construction-year field and 2013 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國101年 2012 民 國102年 2013` aligned to row 107.
- **The row describes the work as Hualien–Taitung railway electrification engineering.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `花東鐵路電氣化工程。`; the operator's English column reads `Hualien-Taitung railway electricification engineering`.
- **The current operator pages identify Dongzhu as station 6090 and Fuli as station 6080.** Source: National Taiwan Railways Corporation, *Dongzhu Station information* and *Fuli Station information*, titleOriginal `東竹車站資訊` and `富里車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6090` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6080`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 6090 東竹` and `## 6080 富里`.
- **The committed TDX station pull contains current records 6090 and 6080.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6090`, `StationName: { En: Dongzhu, Zh_tw: 東竹 }`; `StationID: 6080`, `StationName: { En: Fuli, Zh_tw: 富里 }`.
- **The committed TDX Eastern Main Line record places Dongzhu at source sequence 54 and 265.5 km and Fuli at source sequence 55 and 271.6 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 54`, `StationID: 6090`, `TraveledDistance: 265.5`; `Sequence: 55`, `StationID: 6080`, `TraveledDistance: 271.6`.

## Scope and measurement boundaries

- The historical 2.9 km value is retained as the operator's row 107 subject
  distance. The current TDX values are travelled-distance fields in the EL
  station-of-line record, not a source-defined replacement for the historical
  construction boundary.
- The 2012/2013 values are reported as the operator's construction and
  operation-start table fields. The row does not provide day-level construction,
  electrification or service-opening dates.
- The current operator construction-history HTML was fetched and read; no
  matching Dongzhu–Fuli row or row 107 explanation was found. This is a
  source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 2.9 km, while subtracting the current TDX EL
endpoint fields gives 6.1 km (271.6 minus 265.5). The current ordered record has
no member between Dongzhu and Fuli, but neither source establishes that the two
values use the same endpoints, station reference points or measurement purpose.

The PDF's Chinese endpoint is 東竹, while its adjacent English cell spells the
pair `Dongzhi-Fuli`; the current operator station page spells station 6090
Dongzhu. The page uses Dongzhu for the current identity and reports `Dongzhi` as
the PDF's transcription variant, without deciding that the source strings are
interchangeable.

## Checked and failed

- **Exact construction, electrification or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2012 and 2013 year fields.
- **Surveyed boundary for the 2.9 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 2.9 km to the current 6.1 km TDX interval** — checked 2026-08-27 by comparing row 107 with the current EL sequence. Dongzhu and Fuli are adjacent current members, but the sources do not establish a common measurement boundary.
- **Endpoint-name equivalence** — checked 2026-08-27 in the full operator PDF and current Dongzhu station page. The PDF's English cell says `Dongzhi-Fuli`, while the Chinese row and current station heading use 東竹 / Dongzhu; no operator note explaining the spelling difference was found.
- **Current operator HTML reproduction of row 107** — checked 2026-08-27 in the full operator construction-history table. No matching Dongzhu–Fuli row or electrification explanation was found.

## Stated gaps

An operator engineering archive with row 107's surveyed endpoints, contract,
completion record, electrification scope, track arrangement and source-defined
measurement boundary would settle the missing details. Until then, row 107 is
kept as a historical 2.9 km single-track subject with 2012/2013 fields and a
Hualien–Taitung electrification explanation, while current Dongzhu 6090, Fuli
6080 and the EL sequence remain a separate live-data layer.
