# Taiwan Railways Hualien–Hualien Port Records — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the two similarly named Hualien–Hualien Port
records and the separate current operating and TDX layers.

## What is established

- **The complete operator construction-history PDF has an earlier Hualien–Hualien Port entry at 4.0 km, attributed to the Taiwan Railway Bureau before Retrocession.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `25.花蓮─花蓮港 Hualien-Hualien Port 4.0 光復前臺灣鐵道部 Taiwan Railway Bureau (Before Retrocession)`.
- **The same PDF has a later row 54 Hualien–Hualien Port entry at 5.8 km, with Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because row 54 was read in the complete document. Original-language basis: `54.花蓮─花蓮港 Hualien-Hualien Port 5.8 臺灣鐵路管理局 TRA`.
- **The aligned chronology gives the later 5.8 km entry 1975 as construction year and 1979 as operation-start year.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned continuation were read together. Original-language basis: `民國 64 年 1975 民國 68 年 1979`.
- **The current operator HTML history table does not repeat a Hualien–Hualien Port row; it instead contains Xincheng–Hualien Port at 19.2 km and later Hualien-area entries.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: `27.新城 - 花蓮港 | 19.2 ...`, followed later by `31.花蓮 - 和平 | 39.4 ...` and `32.和平 - 蘇澳新站 | 39.8 ...`.
- **The operator's 2005 statistical report records Hualien–Hualien Port as a 5.8 km operating section of the Huatung Line at the end of 2005.** Source: Taiwan Railways Administration, *Statistical Report of Taiwan Railways Administration 2005*, titleOriginal `臺灣鐵路統計年報`, publisher `交通部臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/67277957-973c-428a-a4a4-e803baadb956`, PRIMARY, High confidence because the complete report and Table 2 were fetched and read. Original-language basis: `花東線 Huatung Line ... 花蓮—花蓮港 Hualien Hualien-port ... 5.8` under `營業里程 Operating Kilometers`, `End of 2005`.
- **The operator chronology records Hualien Port station and the Hualien Port branch as fully electrified from 22 June 2012.** Source: Taiwan Railways Administration, *Taiwan Railways chronology, 2012*, titleOriginal `101年大事紀要表`, publisher `臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/adr/about-timeline?selectIndex=14`, PRIMARY, High confidence because the complete chronology page was fetched and the dated entry read. Original-language basis: `101.06.22 | 花蓮港站及花蓮港支線電氣化自6月22日0時起全線通車。`
- **The current operator station page identifies Hualien as station 7000.** Source: National Taiwan Railways Corporation, *Hualien Station information*, titleOriginal `花蓮車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7000`, PRIMARY, High confidence because the complete current station page was fetched and read. Original-language basis: `## 7000 花蓮`.
- **The committed TDX pulls contain Hualien 7000 but no named Hualien Port passenger-station record; Hualien is position 38 in the guide's one-based presentation of current EL data, with a supplied distance of 169.7 km.** Sources: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, and *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because both complete committed pulls were scanned. Original-language basis: station record `7000` / `花蓮`; EL record `Sequence: 37`, `TraveledDistance: 169.7`; no Hualien Port record in the station pull.

## Scope and measurement boundaries

- The 4.0 km and 5.8 km values are both retained because they belong to separate operator-record entries with different historical constructor contexts. They are not averaged.
- The 5.8 km in the 2005 operating-section table agrees numerically with the later construction-history row, but its dated operating-table context is not treated as proof of an identical surveyed construction boundary.
- The 2012 electrification entry establishes an operator-record milestone for Hualien Port station and branch; it does not establish current passenger service, current track count or the surviving physical extent.
- The current TDX Hualien station position is a data-layer reference point. It is not used to infer a port endpoint or to rewrite either historical operator value.

## Conflicts between primary presentations

- The full operator PDF presents two Hualien–Hualien Port entries: 4.0 km before Retrocession and 5.8 km for the later TRA record, with 1975 construction and 1979 operation start. The PDF does not explain the relationship between the scopes. This is a historical scope conflict and is published as such.
- The current operator HTML does not repeat either Hualien–Hualien Port row, while retaining Xincheng–Hualien Port and other Hualien-area entries. This is a coverage-boundary conflict, not evidence that either PDF record did not exist.
- The operator's 2005 report records a 5.8 km Hualien–Hualien Port operating section. Its numerical agreement with the later PDF record is retained as agreement between two source layers, not used to manufacture a surveyed endpoint correspondence.

## Checked and failed

- **Former station sequence and surveyed Hualien Port endpoint** — checked 2026-08-26 in the full construction-history PDF, current operator history table, current Hualien station page and committed TDX pulls. No complete former station sequence or surveyed port endpoint was found.
- **Relationship between the 4.0 km and 5.8 km operator entries** — checked 2026-08-26 in the complete construction-history PDF and 2005 operating-section table. The sources present the values under different table contexts but do not state whether the later record is a rebuild, widening, relocation or redefinition.
- **Current passenger/freight service boundary and current track count** — checked 2026-08-26 in the operator history page, 2005 report, 2012 chronology, current station page and TDX pulls. The checked sources establish an operating-section record and an electrification milestone, not a current service or as-built track survey.
- **Construction contract, completion certificate and day-level milestones for the 5.8 km record** — checked 2026-08-26 in the complete operator construction-history PDF and current HTML. Only the year-level chronology is supplied for this row.

## Stated gaps

An operator engineering file, former station register, route diagram, port-line
service record and current as-built track plan would settle the relationship
between the 4.0 km pre-Retrocession entry, the 5.8 km TRA entry and the 5.8 km
2005 operating section. Until those are fetched and read, all three contexts
remain visible as separate records.
