# Taiwan Railways Yuanli–Rinan Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Yuanli–Rinan double-track entry in the TRA
construction-history record and its relationship to the current station and
Western Main Line data layers.

## What is established

- **The current TRA construction-history HTML table lists Yuanli–Rinan as a 7.8 km double-track segment.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current operator HTML page was fetched and read. Original-language basis: `26.苑裡 - 日南(雙線)`, `7.8`, `臺灣鐵路管理局`, and `添築雙線`.
- **The same HTML row gives 1974 as the construction year and operation-start year, and lists TRA as constructor.** Source: the same full operator page, PRIMARY, High confidence because the relevant row and aligned fields were read in the complete table. Original-language basis: `民國六三年 1974` in both year fields, `臺灣鐵路管理局`, and `添築雙線`.
- **The full operator PDF repeats the subject as row 47 with the same 7.8 km and 1974/1974 chronology.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `47.苑裡─日南(雙線) Yuanli-Rinan 7.8`, followed by the aligned `民國六三年 1974 民國六三年 1974 添築雙線` fields.
- **The current operator page identifies Yuanli as station 2180.** Source: National Taiwan Railways Corporation, *Yuanli Station information*, titleOriginal `苑裡車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2180`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 2180 苑裡`.
- **The current operator page identifies Rinan as station 2190.** Source: National Taiwan Railways Corporation, *Rinan Station information*, titleOriginal `日南車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2190`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 2190 日南`.
- **The committed TDX StationOfLine pull places Yuanli and Rinan consecutively on WL-C.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full data pull was checked. Original-language basis: line `WL-C` contains Yuanli `苑裡` at source sequence 8 with travelled distance 41.7 and Rinan `日南` at source sequence 9 with travelled distance 49.4; the content layer presents these ordered positions as 9 and 10.

## Scope and measurement boundaries

- The 7.8 km value is the operator construction-table scope. The current TDX values are retained as supplied travelled-distance fields and are not treated as proof of a surveyed historical boundary.
- The HTML table and PDF repeat the same operator record; they are corroborating presentations, not independent route measurements.
- The phrase `添築雙線` is reported as the operator's explanation. The checked sources do not supply a current track-count/as-built survey for this exact historical boundary.
- Current station pages establish the live endpoint identities and current service pages. They do not supply the historical construction contract, intermediate station register or track plan.

## Checked and failed

- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history HTML page and full PDF. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the same full operator records. No such document is linked or transcribed there.
- **Intermediate historical station register and surveyed 7.8 km boundary** — checked 2026-08-26 in the full operator records and current station pages. No complete register or survey was found.
- **Current track-count/as-built status for the historical boundary** — checked 2026-08-26 in the full construction records, current Yuanli and Rinan pages and committed TDX StationOfLine data. These sources establish construction history, station identity and line membership, not a track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historic
timetable, intermediate station register, surveyed centreline and current
as-built track plan would settle the day-level milestones, exact boundary and
relationship between the historical row and current route data. Until then,
7.8 km, 1974, 1974 and `添築雙線` remain the operator's historical record,
while the current station and TDX membership are retained as separate layers.
