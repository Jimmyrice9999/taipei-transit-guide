# Taiwan Railways Haikeguan–Badouzi Reopening Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 117 of the operator's construction-history
table and its relationship to the current Haikeguan, Badouzi and TDX records.

## What is established

- **The complete operator PDF records row 117 as Haikeguan–Badouzi, a 0.4 km subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `117. 海科館–八斗子 Haikeguan-Badouzi 0.4`.
- **The row names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read beside row 117. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The aligned chronology gives 2015 in the construction-year field and 2016 in the operation-start field.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民國104年 2015 民國105年 2016` aligned to row 117.
- **The row describes the event as `復駛`; the operator's English column reads `Revest drove`.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `復駛`; the operator's English column reads `Revest drove`.
- **The current operator pages identify Haikeguan as station 7361 and Badouzi as station 7362.** Source: National Taiwan Railways Corporation, *Haikeguan Station information* and *Badouzi Station information*, titleOriginal `海科館車站資訊` and `八斗子車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7361` and `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7362`, PRIMARY, High confidence because both complete current station pages were fetched. Original-language basis: `## 7361 海科館` and `## 7362 八斗子`.
- **The committed TDX station pull contains current records 7361 and 7362.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 7361`, `StationName: { En: Haikeguan, Zh_tw: 海科館 }`; `StationID: 7362`, `StationName: { En: Badouzi, Zh_tw: 八斗子 }`.
- **The committed TDX Shenao Line record places Haikeguan at source sequence 1 and 4.3 km and Badouzi at source sequence 2 and 4.7 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: SA`, `Sequence: 1`, `StationID: 7361`, `TraveledDistance: 4.3`; `Sequence: 2`, `StationID: 7362`, `TraveledDistance: 4.7`.

## Scope and measurement boundaries

- The historical 0.4 km value is retained as the operator's row 117 subject distance. The current TDX values are travelled-distance fields in the SA station-of-line record, not a source-defined replacement for the historical boundary.
- The 2015/2016 values are reported as the operator's construction and operation-start table fields. The row does not provide a day-level reopening date or a service timetable.
- The operator's English wording is reported exactly as `Revest drove`; the Chinese explanation `復駛` is not silently replaced with a corrected translation.
- The current operator construction-history HTML was fetched and read; no matching Haikeguan–Badouzi row or row 117 explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

No direct numeric contradiction was found among the checked primaries. The
historical row's 0.4 km and the current SA endpoint-field difference of 0.4 km
are numerically equal but belong to records with different stated purposes; they
are not assumed to have identical reference points or measurement boundaries.
The current operator HTML omits the historical row, which is recorded as a
coverage difference.

## Checked and failed

- **Exact reopening day, service timetable or operating pattern** — checked 2026-08-27 in the full ten-page operator PDF, current operator history HTML and both current station pages. The row supplies only 2015 and 2016 year fields and no timetable.
- **Surveyed boundary for the 0.4 km value** — checked 2026-08-27 in the full operator PDF, current operator history HTML and committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found for row 117.
- **Mapping the historical 0.4 km to the current 0.4 km TDX interval** — checked 2026-08-27 by comparing row 117 with the current SA sequence. Haikeguan and Badouzi are adjacent current members, but the sources do not establish a common measurement boundary.
- **Current operator HTML reproduction of row 117** — checked 2026-08-27 in the full operator construction-history table. No matching Haikeguan–Badouzi row or reopening explanation was found.

## Stated gaps

An operator engineering and service archive with the reopening notice, exact date,
timetable, contract or completion record, asset boundary and source-defined
measurement endpoints would settle the missing details. Until then, row 117 is
kept as a historical 0.4 km reopening subject with 2015/2016 fields and the
operator's `Revest drove` wording, while current stations 7361/7362 and the SA
sequence remain a separate live-data layer.
