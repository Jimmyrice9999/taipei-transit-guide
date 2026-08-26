# Taiwan Railways Longtian–Shanhua Double-track Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 102 of the operator's construction-history
table and its relationship to the current Longtian, Baling, Shanhua and TDX
records.

## What is established

- **The complete operator PDF records row 102 as Longtian–Shanhua at 3.8 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `102. 隆田─善化(雙線) Longtian-Shanhua 3.8`.
- **The same row names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read beside row 102. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The aligned chronology gives 2001 in the construction-year field and 2013 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine chronology were read together. Original-language basis: `民 國 90 年 2001 民 國102年 2013` aligned to row 102.
- **The row explains the work as new construction of the Zeng-Wun River Bridge.** Source: the same full operator PDF, PRIMARY, High confidence because the full Chinese and English explanation cells were read. Original-language basis: `曾文溪橋新建。`; the operator's English column reads `Zeng-Wun River Bridge new construction`.
- **The current operator page identifies station 4150 as Longtian.** Source: National Taiwan Railways Corporation, *Longtian Station information*, titleOriginal `隆田車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4150`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4150 隆田`.
- **The current operator page identifies station 4170 as Shanhua.** Source: National Taiwan Railways Corporation, *Shanhua Station information*, titleOriginal `善化車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4170`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4170 善化`.
- **The committed TDX station pull contains current records 4150 隆田 and 4170 善化.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 4150`, `StationName: { Zh_tw: 隆田 }`; `StationID: 4170`, `StationName: { Zh_tw: 善化 }`.
- **The committed TDX WL record places Longtian, Baling and Shanhua at source sequences 81, 82 and 83 with supplied travelled distances 327.4 km, 329.6 km and 334.2 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: WL`, `Sequence: 81`, `StationID: 4150`, `TraveledDistance: 327.4`; `Sequence: 82`, `StationID: 4160`, `TraveledDistance: 329.6`; `Sequence: 83`, `StationID: 4170`, `TraveledDistance: 334.2`.

## Scope and measurement boundaries

- The historical 3.8 km value is retained as the operator's row 102 value. The current TDX values are supplied travelled-distance fields in the WL station-of-line record. Neither source defines them as the same kind of measurement.
- The 2001/2013 values are reported as the operator's construction and operation-start table fields. The row does not provide day-level construction, bridge completion or station-opening dates.
- The bridge explanation is reported as the work description recorded in the row. The checked PDF does not provide a complete project boundary, contract package, bridge approach inventory or before-and-after track plan.
- The current operator HTML history table was fetched and read; no matching Longtian–Shanhua row or row 102 bridge explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

The historical operator row gives 3.8 km, while subtracting the current TDX WL
endpoint fields gives 6.8 km (334.2 minus 327.4). The TDX record also contains
Baling between the endpoint station members. These values are not averaged,
added or treated as a direct contradiction: the historical row is a construction
subject, while TDX supplies current ordered station-distance fields, and neither
source establishes a common boundary. The current operator HTML omits the
historical row, which is recorded as a coverage difference.

## Checked and failed

- **Exact construction, bridge-completion or operation-start days** — checked 2026-08-26 in the full ten-page operator PDF, current operator history HTML and both current station pages. The row supplies only 2001 and 2013 year fields.
- **Complete Zeng-Wun River Bridge project scope** — checked 2026-08-26 in the full operator PDF and current operator history HTML. The row says only `曾文溪橋新建。` / “Zeng-Wun River Bridge new construction”.
- **Surveyed boundary for the 3.8 km value** — checked 2026-08-26 in the full operator PDF and committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found for row 102.
- **Mapping the historical 3.8 km to the current 6.8 km TDX endpoint difference** — checked 2026-08-26 by comparing row 102 with the current WL sequence. The source descriptions do not establish a common boundary, and Baling is an intervening current member.
- **Current route-history HTML reproduction of row 102** — checked 2026-08-26 in the full operator HTML table. No matching Longtian–Shanhua row or bridge explanation was found there.

## Stated gaps

An operator engineering archive with the bridge project file, surveyed endpoints,
contract, completion record, track inventory and source-defined measurement
boundaries would settle the missing details. Until then, row 102 is kept as a
historical construction subject, while current station 4150, station 4170 and
the TDX WL sequence remain a separate live-data layer.
