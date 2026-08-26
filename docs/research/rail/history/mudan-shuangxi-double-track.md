# Taiwan Railways Mudan–Shuangxi Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Mudan–Shuangxi construction-history entry
and its relationship to the current operator table, station pages and TDX line
data.

## What is established

- **The full TRA construction-history PDF lists Mudan–Shuangxi (double track) as row 53 at 3.1 km, with TRA as constructor.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `53.牡丹─雙溪(雙線) Mudan-Shuangxi 3.1 臺灣鐵路管理局 TRA`.
- **The PDF's aligned chronology gives 1974 as construction year, 1978 as operation start and 添築雙線 as the explanation.** Source: the same full operator PDF, PRIMARY, High confidence because row 53 and its aligned continuation were read in the complete document. Original-language basis: `民國 63 年 1974 民國 67 年 1978 添築雙線。 Extended to be double-tracked`.
- **The current operator HTML independently lists the same subject as row 30 at 3.1 km, with 1974 construction, 1978 operation start and 添築雙線.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read. Original-language basis: `30.牡丹 - 雙溪(雙線) | 3.1 | 臺灣鐵路管理局 | 民國六七年 1978 | 民國六三年 1974 | 添築雙線`.
- **The current operator station pages identify Mudan as 7320 and Shuangxi as 7310.** Sources: National Taiwan Railways Corporation, *Mudan Station information*, titleOriginal `牡丹車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7320`, and *Shuangxi Station information*, titleOriginal `雙溪車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/7310`, PRIMARY, High confidence because both complete current station pages were fetched and read. Original-language bases: `## 7320 牡丹` and `## 7310 雙溪`.
- **The committed TDX station pull contains the current station records for 7320 Mudan and 7310 Shuangxi.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full committed pull was scanned for both station IDs. Original-language basis: records whose station IDs are `7320` and `7310` and whose names are `牡丹` and `雙溪`.
- **The committed TDX StationOfLine pull places Mudan at source sequence 6 and 19.5 km and Shuangxi at source sequence 7 and 22.9 km on EL.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平台`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the full committed pull was checked. Original-language basis: `EL`, `7320`/`牡丹`, `Sequence: 6`, `TraveledDistance: 19.5`; `7310`/`雙溪`, `Sequence: 7`, `TraveledDistance: 22.9`.

## Scope and measurement boundaries

- The 3.1 km value is the construction-table scope reported by both operator presentations. The current TDX endpoint fields are retained as supplied travelled-distance data and are not treated as a surveyed historical boundary.
- The historical PDF row number is 53 and the current HTML row number is 30. The differing numbering is a presentation boundary; the two operator records agree on the reported values for this subject.
- The phrase `添築雙線` is reported as the operator's explanation. The checked records do not supply a current as-built track-count survey for this historical boundary.
- The current TDX sequence makes Mudan and Shuangxi adjacent in the EL snapshot. That current ordering is not treated as proof that its 3.4 km endpoint-field difference is the exact historical construction boundary.

## Conflicts between primary presentations

- No numerical disagreement was found between the full operator PDF and the current operator HTML: both report 3.1 km, TRA, 1974 construction, 1978 operation start and double-track work. Their row numbers differ (53 versus 30), and that presentation difference is retained.
- The operator construction scope is 3.1 km, while the current TDX endpoint fields differ by 3.4 km (22.9 minus 19.5). These are different evidence layers and are not averaged or silently substituted.

## Checked and failed

- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history PDF and current operator HTML. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the full operator PDF and current HTML history page. No such document is linked or transcribed for this subject.
- **Historical engineering chainage and surveyed 3.1 km boundary** — checked 2026-08-26 in the full operator records, current station pages and committed TDX pulls. No surveyed boundary or complete engineering chainage was found.
- **Current as-built track count for the historical boundary** — checked 2026-08-26 in the full construction records, current station pages and TDX data. These establish the historical explanation and current ordered records, not a current track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historic
timetable, surveyed centreline and current as-built track plan would settle the
day-level milestones, exact construction boundary and relationship between the
3.1 km record and the current 3.4 km distance-field interval. Until then, both
measures are retained separately.
