# Taiwan Railways Shoufeng–Fengtian Double-track Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 116 of the operator's construction-history
table and its relationship to the current Shoufeng, Fengtian and TDX records.

## What is established

- **The complete operator PDF records row 116 as Shoufeng–Fengtian, a 2.7 km double-track subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `116. 壽豐─豐田(雙線) Shoufeng-Fengtian 2.7`.
- **The row names the Railway Reconstruction Bureau's Eastern Region Engineering Office as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor cells were read beside row 116. Original-language basis: `鐵路改建工程局 Railway Reconstruction Bureau`; `東部工程處 Eastern Region Engineering Office`.
- **The aligned chronology gives 2015 in the construction-year field and 2016 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國104年 2015 民 國105年 2016` aligned to row 116.
- **The row describes the work as Extended to be double-tracked.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `添築雙線。`; the operator's English column reads `Extended to be double-tracked`.
- **The current operator pages identify Shoufeng as station 6220 and Fengtian as station 6210.** Source: National Taiwan Railways Corporation, *Shoufeng Station information* and *Fengtian Station information*, titleOriginal `壽豐車站資訊` and `豐田車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6220` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6210`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 6220 壽豐` and `## 6210 豐田`.
- **The committed TDX station pull contains current records 6220 and 6210.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 6220`, `StationName: { En: Shoufeng, Zh_tw: 壽豐 }`; `StationID: 6210`, `StationName: { En: Fengtian, Zh_tw: 豐田 }`.
- **The committed TDX Eastern Line record places Shoufeng at source sequence 41 and 186.8 km and Fengtian at source sequence 42 and 189.6 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: EL`, `Sequence: 41`, `StationID: 6220`, `TraveledDistance: 186.8`; `Sequence: 42`, `StationID: 6210`, `TraveledDistance: 189.6`.

## Scope and measurement boundaries

- The historical 2.7 km value is retained as the operator's row 116 subject distance. The current TDX values are travelled-distance fields in the EL station-of-line record, not a source-defined replacement for the historical construction boundary.
- The 2015/2016 values are reported as the operator's construction and operation-start table fields. The row does not provide day-level construction, double-tracking or service-opening dates.
- The current operator construction-history HTML was fetched and read; no matching Shoufeng–Fengtian row or row 116 explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 2.7 km, while subtracting the current TDX EL endpoint fields gives 2.8 km (189.6 minus 186.8). The current ordered record has no member between Shoufeng and Fengtian, but neither source establishes that the two values use the same endpoints, station reference points or measurement purpose.

## Checked and failed

- **Exact construction, double-tracking or operation-start days** — checked 2026-08-27 in the full ten-page operator PDF and both current station pages. The row supplies only 2015 and 2016 year fields.
- **Surveyed boundary for the 2.7 km value** — checked 2026-08-27 in the full operator PDF, the current construction-history HTML and the committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found.
- **Mapping the historical 2.7 km to the current 2.8 km TDX interval** — checked 2026-08-27 by comparing row 116 with the current EL sequence. Shoufeng and Fengtian are adjacent current members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 116** — checked 2026-08-27 in the full operator construction-history table. No matching Shoufeng–Fengtian row or double-tracking explanation was found.

## Stated gaps

An operator engineering archive with row 116's surveyed endpoints, contract,
completion record, double-tracking scope, track arrangement and source-defined
measurement boundary would settle the missing details. Until then, row 116 is kept
as a historical 2.7 km double-track subject with 2015/2016 fields and an Extended
to be double-tracked explanation, while current Shoufeng 6220, Fengtian 6210 and
the EL sequence remain a separate live-data layer.
