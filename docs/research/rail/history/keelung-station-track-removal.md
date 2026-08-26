# Taiwan Railways Keelung Station Track-removal Records — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the two historical Keelung Station rows in the
operator's construction-history PDF and their relationship to current station
data.

## What is established

- **The complete operator construction-history PDF contains row 97 as Keelung Station at 2.9 km, with TRA as constructor.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and its rendered places table was read. Original-language basis: `97.基隆車站 Keelung Station 2.9 臺灣鐵路管理局 TRA`.
- **The row 97 chronology aligns with 1978 and 2010 and records removal of Keelung Station tracks 10–16 on 27 April 2010.** Source: the same full operator PDF, PRIMARY, High confidence because the places and chronology pages were rendered and aligned by row order. Original-language basis: `民 國 67 年 1978 民 國 99 年 2010 民國99年4月27日拆除基隆站內10至16股道。`.
- **The complete operator construction-history PDF contains row 98 as a separate Keelung Station entry at 2.0 km, also with TRA as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the complete places table was read. Original-language basis: `98.基隆車站 Keelung Station 2.0 臺灣鐵路管理局 TRA`.
- **The row 98 chronology aligns with 1969 and 2010 and records removal of tracks 3–5, one enginehouse line and the turntable line on 27 April 2010.** Source: the same full operator PDF, PRIMARY, High confidence because the continuation text was read in the rendered chronology table. Original-language basis: `民 國 58 年 1969 民 國 99 年 2010 民國99年4月27日拆除基隆站內3至5股、機庫線1股及轉車台線。`.
- **The current operator HTML route-history table does not repeat either historical Keelung Station track-removal row.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read; searching the full fetched page for `基隆車站` returned no match.
- **The current operator station page identifies Keelung as 0900 基隆.** Source: National Taiwan Railways Corporation, *Keelung Station information*, titleOriginal `基隆站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/0900`, PRIMARY, High confidence because the full page was fetched and read. Original-language basis: `## 0900 基隆`.
- **The committed TDX station pull contains current station 0900 基隆.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full committed pull was read. Original-language/data basis: the record with `StationID: 0900` and `StationName: 基隆`.
- **The committed TDX Western Main Line pull places Keelung at source sequence 0 with travelled distance 0.0 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the complete committed pull was read. Original-language/data basis: `LineID: WL`, `Sequence: 0`, `StationID: 0900`, `StationName: 基隆`, `TraveledDistance: 0`.

## Scope and measurement boundaries

- Rows 97 and 98 are kept as two operator records. The PDF does not state whether 2.9 km and 2.0 km are nested, overlapping, or separate accounting boundaries for one station site.
- The chronology's 2010 field is retained as the operator's operation-year column, while the explanation for each row records dismantling on 27 April 2010. The report does not reinterpret that combination as a new opening, a closure date, or a complete yard-removal date.
- The two rows' track-group explanations are the only checked asset scopes: tracks 10–16 for row 97; tracks 3–5, one enginehouse line and the turntable line for row 98. No map in the checked PDF ties either distance to a surveyed track geometry.
- Current 0900 station identity and WL source sequence 0 / travelled distance 0.0 km are reference data from current sources. They do not replace the historical rows' yard scopes.

## Conflicts between primary presentations

- The historical PDF gives two different distances under the same Keelung Station name: 2.9 km and 2.0 km. The rows also carry different construction-year fields, 1978 and 1969, and different removal scopes. They are published separately; no 4.9 km total is inferred.
- The current operator HTML omits both historical Keelung Station rows. This is a source-coverage difference, not a reason to delete or rewrite the PDF records.
- The current TDX station-of-line dataset has a 0.0 km Keelung reference field. It is a current ordered-station field and is not treated as a historical yard measurement.

## Checked and failed

- **Whether 2.9 km and 2.0 km are nested, overlapping or additive** — checked 2026-08-26 in the complete construction-history PDF, current operator HTML and current station/TDX records. The checked sources name separate track groups but do not define the measurement relationship.
- **A surveyed yard plan, distance chainage and asset register** — checked 2026-08-26 in the complete operator PDF and current HTML. No mapped track geometry or asset-level distance breakdown was found.
- **Contract, completion and post-removal disposition records** — checked 2026-08-26 in the complete operator PDF, current HTML and current Keelung station page. No full project file or disposition register was found.
- **A current operator chronology entry that independently expands the 27 April 2010 removal explanation** — checked 2026-08-26 in the full operator 99-year chronology page at `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=16`. No matching Keelung track-removal entry was found there; the PDF remains the source for the row-level wording.

## Stated gaps

An operator Keelung yard plan, track register, project completion file and
post-removal asset record would be needed to connect each distance to a mapped
boundary and explain why two rows share the station name and removal date.
Until those are fetched and read, the two historical rows and the current TDX
station field remain separate contexts.
