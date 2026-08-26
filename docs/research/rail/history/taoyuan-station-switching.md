# Taiwan Railways Taoyuan Station Switching Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 115 of the operator's construction-history
table and its relationship to the current Taoyuan station and TDX records.

## What is established

- **The complete operator PDF records row 115 as Taoyuan Station at 0.3 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `115. 桃園車站 Taoyuan Station 0.3`.
- **The row names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read beside row 115. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The aligned chronology gives 2015 in both the construction-year and operation-start fields.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民 國104年 2015 民 國104年 2015` aligned to row 115.
- **The row describes the work as Switching of the Taoyuan temperal Station.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `桃園臨時站切換。`; the operator's English column reads `Switching of the Taoyuan temperal Station`.
- **The current operator page identifies Taoyuan as station 1080.** Source: National Taiwan Railways Corporation, *Taoyuan Station information*, titleOriginal `桃園車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1080`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 1080 桃園`.
- **The committed TDX station pull contains current station 1080.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 1080`, `StationName: { En: Taoyuan, Zh_tw: 桃園 }`.
- **The committed TDX Western Main Line record places Taoyuan at source sequence 20 and 57.6 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: WL`, `Sequence: 20`, `StationID: 1080`, `TraveledDistance: 57.6`, with Fengming at sequence 19 and Neili at sequence 21.

## Scope and measurement boundaries

- The historical 0.3 km value is retained as the operator's row 115 station subject distance. The current TDX 57.6 km value is retained as a Western Main Line travelled-distance field. Neither source defines them as the same kind of measurement.
- The 2015/2015 values are reported as the operator's construction and operation-start table fields. The row does not provide a day-level switching, station opening or commissioning date.
- The switching explanation is reported with the operator's spelling `temperal`. The checked PDF does not provide the temporary and permanent station sequence, a before-and-after plan or a detailed work scope.
- The current operator HTML history table was fetched and read; no matching Taoyuan Station row or row 115 switching explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

No direct numeric contradiction was found among the checked primaries. The historical
row's 0.3 km and the current WL record's 57.6 km are attached to different records
with different stated purposes and are not averaged, added or treated as competing
measurements of the same boundary. The current operator HTML omits the historical
row, which is recorded as a coverage difference.

## Checked and failed

- **Exact switching, station opening or commissioning day** — checked 2026-08-27 in the full ten-page operator PDF, current operator history HTML and current station page. The row supplies only 2015 year fields and no day.
- **Station sequence and before-and-after plan** — checked 2026-08-27 in the full operator PDF, current operator history HTML and current station page. No temporary/permanent station sequence or plan was found.
- **Surveyed boundary for the 0.3 km value** — checked 2026-08-27 in the full operator PDF and committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found for row 115.
- **Mapping row 115's 0.3 km to TDX's 57.6 km WL field** — checked 2026-08-27 by comparing the historical row with the current station-of-line record. The source descriptions do not establish a common boundary or measurement purpose.
- **Current operator HTML reproduction of row 115** — checked 2026-08-27 in the full operator construction-history table. No matching Taoyuan Station row or switching explanation was found.

## Stated gaps

An operator engineering archive with the temporary-station switching plan, track
register, contract, completion record, asset disposition and source-defined
measurement endpoints would settle the missing details. Until then, row 115 is
kept as a historical Taoyuan Station record, while current station 1080 and the
TDX WL sequence remain a separate live-data layer.
