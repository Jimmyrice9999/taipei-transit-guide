# Taiwan Railways Jianan–Qingshui Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Jianan–Qingshui entry in the TRA
construction-history record and its relationship to the current station and
Western Main Line data layers.

## What is established

- **The full operator construction-history PDF lists Jianan–Qingshui as row 48 at 6.0 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `48.甲南─清水(雙線) Jianan-Qingshui 6.0`, followed by the aligned chronology fields.
- **The PDF gives 1974 as both the construction year and operation-start year, lists TRA as constructor and explains the work as 添築雙線.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned continuation were read in the complete document. Original-language basis: `臺灣鐵路管理局 TRA` and `民 國 63 年 1974 民 國 63 年 1974 添築雙線`.
- **The current operator HTML history page omits Jianan–Qingshui.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current operator HTML page was fetched and read; it is marked last updated 2026-04-27 and its current table lists Xinpu–Tongxiao as row 25, Yuanli–Rinan as row 26 and Xincheng–Hualian Port as row 27.
- **The current operator page identifies Taichung Port as station 2210.** Source: National Taiwan Railways Corporation, *Taichung Port Station information*, titleOriginal `臺中港車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2210`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 2210 臺中港`.
- **The current operator page identifies Qingshui as station 2220.** Source: National Taiwan Railways Corporation, *Qingshui Station information*, titleOriginal `清水車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2220`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 2220 清水`.
- **The committed TDX StationOfLine pull places Taichung Port and Qingshui consecutively on WL-C.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full data pull was checked. Original-language basis: line `WL-C` contains Taichung Port `臺中港` at source sequence 11 with travelled distance 59.3 and Qingshui `清水` at source sequence 12 with 65.3; the content layer presents these ordered positions as 12 and 13.

## Scope and measurement boundaries

- The 6.0 km value is the operator construction-table scope. The current TDX values are retained as supplied travelled-distance fields and are not treated as proof of a surveyed historical boundary.
- The PDF retains the historical record while the current HTML table has different row coverage and omits this subject; they are not independent route measurements.
- The phrase `添築雙線` is reported as the operator's explanation. The checked sources do not supply a current track-count/as-built survey for this exact historical boundary.
- Current station pages establish the live station identities and current service pages. They do not supply the historical construction contract, intermediate station register or surveyed boundary.

## Conflicts between primary presentations

- The full PDF contains Jianan–Qingshui as row 48 and supplies the 6.0 km, 1974/1974 and double-track record. The current HTML page is a separate operator presentation: it lists Xinpu–Tongxiao as row 25, Yuanli–Rinan as row 26 and Xincheng–Hualian Port as row 27, and does not list Jianan–Qingshui. The two primary presentations therefore have different row coverage and numbering. This is preserved as a source conflict, not resolved by choosing one.
- The current TDX endpoint fields differ by 6.0 km after subtraction, numerically matching the PDF's 6.0 km construction-table value. The agreement is retained as arithmetic only; it does not establish that the current interval and historical construction boundary are surveyed equivalents.

## Checked and failed

- **Current HTML-table Jianan–Qingshui row** — checked 2026-08-26 in the complete operator HTML page, including its full numbered table. No such row was found; the current table proceeds from row 25 Xinpu–Tongxiao and row 26 Yuanli–Rinan to row 27 Xincheng–Hualian Port.
- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history PDF. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the same full operator records. No such document is linked or transcribed there.
- **Intermediate historical station register and surveyed 6.0 km boundary** — checked 2026-08-26 in the full operator records and current station pages. No complete register or survey was found.
- **Current track-count/as-built status for the historical boundary** — checked 2026-08-26 in the full construction records, current Taichung Port and Qingshui pages and committed TDX StationOfLine data. These sources establish construction history, station identity and line membership, not a track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historic
timetable, intermediate station register, surveyed centreline and current
as-built track plan would settle the day-level milestones, exact boundary and
relationship between the historical row and current route data. Until then,
6.0 km, 1974, 1974 and `添築雙線` remain the operator PDF's historical record,
while the current HTML omission, station pages and TDX membership are retained
as separate layers.
