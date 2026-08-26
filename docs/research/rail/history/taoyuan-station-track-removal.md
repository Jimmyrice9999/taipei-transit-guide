# Taiwan Railways Tao-yuan Station Track-removal Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 100 of the operator's construction-history
table and its relationship to the current Taoyuan station and TDX records.

## What is established

- **The complete operator PDF records row 100 as Tao-yuan Station at 3.1 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `100.桃園車站 Tao-yuan Station 3.1`.
- **The same row names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read beside row 100. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The aligned chronology gives 1969 in both the construction-year and operation-start fields.** Source: the same full operator PDF, PRIMARY, High confidence because page 7 was read with the row order from page 6. Original-language basis: `民 國 58 年 1969 民 國 58 年 1969` aligned to row 100.
- **The row records a May 2012 removal explanation.** Source: the same full operator PDF, PRIMARY, High confidence because the full Chinese and English explanation cells were read. Original-language basis: `民國101年5月拆除桃園站側線5至11股、拖上線及麵粉線。` The operator's English column reads: `Dismantled No.5-No11 tracks on branch line, loading line and flour line in Tao-yuan Station in May, 2012`.
- **The current operator page identifies station 1080 as Taoyuan.** Source: National Taiwan Railways Corporation, *Taoyuan Station information*, titleOriginal `桃園車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1080`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 1080 桃園`.
- **The committed TDX station pull contains current station 1080 桃園.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 1080`, `StationName: { Zh_tw: 桃園 }`.
- **The committed TDX WL record places Taoyuan at source sequence 20 and 57.6 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `Sequence: 20`, `StationID: 1080`, `StationName: 桃園`, `TraveledDistance: 57.6`, with Fengming before and Neili after in the ordered record.

## Scope and measurement boundaries

- The historical 3.1 km value is retained as the operator's row 100 value. The current TDX 57.6 km value is retained as a Western Main Line travelled-distance field. Neither source defines them as the same kind of measurement.
- The 1969/1969 values are reported as the operator's construction and operation-start table fields. The row does not provide a day-level station opening or commissioning record.
- The May 2012 explanation is reported with the named assets. The checked PDF does not provide a day in May, work sequence, before-and-after track plan or disposition record.
- The current operator HTML history table was fetched and read; no matching Tao-yuan Station row or row 100 removal explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

No direct numeric contradiction was found among the checked primaries. The
historical row's 3.1 km and the current WL record's 57.6 km are attached to
different records with different stated purposes and are not averaged, added or
treated as competing measurements of the same boundary. The current operator
HTML omits the historical row, which is recorded as a coverage difference.

## Checked and failed

- **Exact day in May 2012** — checked 2026-08-26 in the full ten-page operator PDF, current operator history HTML and current station page. The row says only `民國101年5月` / “in May, 2012”.
- **Station opening or commissioning day** — checked 2026-08-26 in the same primary records. The two 1969 table fields are not accompanied by a day-level opening statement.
- **Surveyed boundary for the 3.1 km value** — checked 2026-08-26 in the full operator PDF and committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found for row 100.
- **Station-yard plan, removal sequence and asset disposition** — checked 2026-08-26 in the full operator PDF, current operator history HTML and current station page. No detailed engineering or disposal record was linked or transcribed there.
- **Mapping row 100's 3.1 km to TDX's 57.6 km WL field** — checked 2026-08-26 by comparing the historical row with the current station-of-line record. The source descriptions do not establish a common boundary or measurement purpose.

## Stated gaps

An operator engineering archive with the yard plan, track register, removal
contract, work completion record, asset disposition and source-defined
measurement endpoints would settle the missing details. Until then, row 100 is
kept as a historical station-yard record, while current station 1080 and the
TDX WL sequence remain a separate live-data layer.
