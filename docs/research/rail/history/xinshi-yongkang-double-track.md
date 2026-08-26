# Taiwan Railways Xinshi–Yongkang Double-track Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 103 of the operator's construction-history
table and its relationship to the current Xinshi, Yongkang and TDX records.

## What is established

- **The complete operator PDF records row 103 as Xinshi–Yongkang at 2.9 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `103. 新市─永康(雙線) Xinshi-Yongkang 2.9`.
- **The same row names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read beside row 103. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The aligned chronology gives 2009 in the construction-year field and 2013 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine chronology were read together. Original-language basis: `民 國 98 年 2009 民 國102年 2013` aligned to row 103.
- **The row explains the work as new construction of the Yan-shui River Bridge.** Source: the same full operator PDF, PRIMARY, High confidence because the full Chinese and English explanation cells were read. Original-language basis: `鹽水溪橋新建。`; the operator's English column reads `Yan-shui River Bridge new construction`.
- **The current operator page identifies station 4190 as Xinshi.** Source: National Taiwan Railways Corporation, *Xinshi Station information*, titleOriginal `新市車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4190`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4190 新市`.
- **The current operator page identifies station 4200 as Yongkang.** Source: National Taiwan Railways Corporation, *Yongkang Station information*, titleOriginal `永康車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4200`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4200 永康`.
- **The committed TDX station pull contains current records 4190 新市 and 4200 永康.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 4190`, `StationName: { Zh_tw: 新市 }`; `StationID: 4200`, `StationName: { Zh_tw: 永康 }`.
- **The committed TDX WL record places Xinshi and Yongkang at source sequences 85 and 86 with supplied travelled distances 341.8 km and 346.8 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: WL`, `Sequence: 85`, `StationID: 4190`, `TraveledDistance: 341.8`; `Sequence: 86`, `StationID: 4200`, `TraveledDistance: 346.8`.

## Scope and measurement boundaries

- The historical 2.9 km value is retained as the operator's row 103 value. The current TDX values are supplied travelled-distance fields in the WL station-of-line record. Neither source defines them as the same kind of measurement.
- The 2009/2013 values are reported as the operator's construction and operation-start table fields. The row does not provide day-level construction, bridge completion or station-opening dates.
- The bridge explanation is reported as the work description recorded in the row. The checked PDF does not provide a complete project boundary, contract package, bridge approach inventory or before-and-after track plan.
- The current operator HTML history table was fetched and read; no matching Xinshi–Yongkang row or row 103 bridge explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 2.9 km, while subtracting the current TDX WL
endpoint fields gives 5.0 km (346.8 minus 341.8). The current TDX record has no
station member between Xinshi and Yongkang. These values are not averaged, added
or treated as a direct contradiction: the historical row is a construction
subject, while TDX supplies current ordered station-distance fields, and neither
source establishes a common boundary. The current operator HTML omits the
historical row, which is recorded as a coverage difference.

## Checked and failed

- **Exact construction, bridge-completion or operation-start days** — checked 2026-08-26 in the full ten-page operator PDF, current operator history HTML and both current station pages. The row supplies only 2009 and 2013 year fields.
- **Complete Yan-shui River Bridge project scope** — checked 2026-08-26 in the full operator PDF and current operator history HTML. The row says only `鹽水溪橋新建。` / “Yan-shui River Bridge new construction”.
- **Surveyed boundary for the 2.9 km value** — checked 2026-08-26 in the full operator PDF and committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found for row 103.
- **Mapping the historical 2.9 km to the current 5.0 km TDX endpoint difference** — checked 2026-08-26 by comparing row 103 with the current WL sequence. The source descriptions do not establish a common boundary even though no station member intervenes.
- **Current route-history HTML reproduction of row 103** — checked 2026-08-26 in the full operator HTML table. No matching Xinshi–Yongkang row or bridge explanation was found there.

## Stated gaps

An operator engineering archive with the bridge project file, surveyed endpoints,
contract, completion record, track inventory and source-defined measurement
boundaries would settle the missing details. Until then, row 103 is kept as a
historical construction subject, while current station 4190, station 4200 and
the TDX WL sequence remain a separate live-data layer.
