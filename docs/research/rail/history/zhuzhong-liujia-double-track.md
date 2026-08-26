# Taiwan Railways Zhuzhong–Liujia Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the row 99 Zhuzhong–Liujia double-track entry
and its relationship to the current operator station pages and TDX line data.

## What is established

- **The complete operator PDF records row 99 as Zhuzhong–Liujia at 3.1 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `99.竹中─六家 Zhuzhong-Liujia 3.1 鐵路改建工程局 Railway Reconstruction Bureau`.
- **The same row names Railway Reconstruction Bureau as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read alongside row 99. Original-language basis: `鐵路改建工程局`.
- **The aligned chronology gives 2005 in the construction-year field and 2011 in the operation-start year field.** Source: the same full operator PDF, PRIMARY, High confidence because the page-7 chronology was read with the page-6 row order. Original-language basis: `民 國 94 年 2005 民 國100 年 2011` aligned to row 99.
- **The operator's explanation is 添築雙線, rendered in the PDF as “Extended to be double-tracked.”** Source: the same full operator PDF, PRIMARY, High confidence because the explanation cell was read in full. Original-language basis: `添築雙線。`.
- **The current operator station page identifies station 1193 as Zhuzhong.** Source: National Taiwan Railways Corporation, *Zhuzhong Station information*, titleOriginal `竹中車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1193`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 1193 竹中`.
- **The current operator station page identifies station 1194 as Liujia.** Source: National Taiwan Railways Corporation, *Liujia Station information*, titleOriginal `六家車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1194`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 1194 六家`.
- **The committed TDX StationOfLine pull contains two current LJ members, Zhuzhong then Liujia, with supplied travelled distances 0.0 km and 3.1 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: line ID `LJ`, station `1193` `竹中` sequence `0` travelled distance `0`, followed by station `1194` `六家` sequence `1` travelled distance `3.1`.
- **The same TDX pull places Zhuzhong in the NW record as sequence 3 at 6.5 km.** Source: the same committed TDX StationOfLine pull, PRIMARY, High confidence because both the LJ and NW records were read. Original-language basis: line ID `NW` contains `竹中` at sequence `3` and travelled distance `6.5`.

## Scope and measurement boundaries

- The 3.1 km historical value is the operator construction-table record. The current TDX 0.0/3.1 km values are retained as supplied travelled-distance fields, not treated as proof of an identical historical survey boundary.
- The operator's year fields are reported as 2005 and 2011. The PDF does not provide day-level dates for those milestones in the row checked.
- `添築雙線` is reported as the operator's explanation. The checked record does not provide a before-and-after track count, a current as-built survey or the full works package behind that phrase.
- The current operator HTML route-history table was fetched and read; no matching Zhuzhong–Liujia row was found. This is a source-coverage difference from the complete PDF, not a reason to erase the PDF row.
- The two current TDX line relationships at Zhuzhong are preserved as current data relationships. They do not expand or redefine the historical LJ construction subject.

## Conflicts

No numeric contradiction was found among the checked primaries: the PDF row is
3.1 km and the current LJ TDX endpoint fields also differ by 3.1 km. The
measurement boundary is not established as identical, so the apparent
agreement is recorded as a correspondence to investigate, not merged as one
proven measurement. The current operator HTML omits the row, which is a
presentation-coverage difference.

## Checked and failed

- **Exact day and month of construction and operation start** — checked 2026-08-26 in the full ten-page operator PDF. Only 2005 and 2011 year fields were found for row 99.
- **Construction contract, completion certificate and commissioning notice** — checked 2026-08-26 in the full operator PDF, full current operator history HTML and both current station pages. No such record was linked or transcribed there.
- **Surveyed boundary and intermediate historical station register** — checked 2026-08-26 in the full operator PDF, current operator history HTML and TDX line data. No survey or complete historical register was found.
- **Before-and-after track count, electrification, signalling and as-built scope** — checked 2026-08-26 in the same primary records. The explanation says 添築雙線 but does not supply those engineering details.
- **Proof that the TDX 3.1 km LJ interval is the historical construction boundary** — checked 2026-08-26 by comparing the current TDX endpoint fields with the PDF row. The numbers match, but the sources do not define their measurement points or accounting boundaries.

## Stated gaps

An operator engineering archive with the contract, completion record, historic
timetable, intermediate station register, surveyed centreline, track inventory
and current as-built plan would settle the exact boundary and the works implied
by `添築雙線`. Until then, the historical 3.1 km and 2005/2011 fields remain
the operator's construction record, while the current LJ TDX interval and
station identities remain a separate live-data layer.
