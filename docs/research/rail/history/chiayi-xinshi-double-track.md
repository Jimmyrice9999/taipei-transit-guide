# Taiwan Railways Chiayi–Xinshi Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Chiayi–Xinshi double-track entry in the
TRA construction-history record and its relationship to the current station and
Western Main Line data layers.

## What is established

- **The TRA construction-history HTML table lists Chiayi–Xinshi as a 50.1 km double-track segment.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete operator HTML page was fetched and read. Original-language basis: `24.嘉義 - 新市(雙線)`, `50.1`, `臺灣鐵路管理局`, with the `添築雙線` explanation.
- **The same HTML table gives 1957 as the construction year and 1970 as operation start, and lists TRA as constructor.** Source: the same full operator page, PRIMARY, High confidence because the relevant row and aligned fields were read in the complete table. Original-language basis: `民國五九年 1970`, `民國四六年 1957`, `臺灣鐵路管理局`, `添築雙線`.
- **The full operator PDF repeats the Chiayi–Xinshi entry as row 44 with the same 50.1 km, 1957 and 1970 values.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `44.嘉義─新市(雙線) Chiayi-Xinshi 50.1`, followed by the aligned `民國47年1957 民國59年1970 添築雙線` fields.
- **The current operator page identifies Chiayi as station 4080.** Source: National Taiwan Railways Corporation, *Chiayi Station information*, titleOriginal `嘉義車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4080`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4080 嘉義`.
- **The current operator page identifies Xinshi as station 4190.** Source: National Taiwan Railways Corporation, *Xinshi Station information*, titleOriginal `新市車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4190`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4190 新市`.
- **The committed TDX StationOfLine pull places both current station records in the Western Main Line.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full data pull was checked. Original-language basis: the current ordered line record contains station 4080 `嘉義` and station 4190 `新市` under line `WL`.

## Scope and measurement boundaries

- The 50.1 km value is the operator construction-table scope. It is not added to current TDX travelled-distance fields, and no surveyed equivalence between those scopes was found.
- The HTML table and the PDF repeat the same operator record; they are corroborating presentations, not independent route measurements.
- The phrase `添築雙線` is reported as the operator's explanation. The checked sources do not supply a current track-count/as-built survey for this exact historical boundary.
- Current station pages establish the live endpoint identities and current service pages. They do not prove that the historical segment has a separate current route identity.

## Checked and failed

- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history HTML page and full PDF. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the same full operator records. No such document is linked or transcribed there.
- **Intermediate historical station register and surveyed 50.1 km boundary** — checked 2026-08-26 in the full operator records and current station pages. No complete register or survey was found.
- **Current track-count/as-built status for the historical boundary** — checked 2026-08-26 in the full construction records, current Chiayi and Xinshi pages and committed TDX StationOfLine data. These sources establish construction history, station identity and line membership, not a track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historic
timetable, intermediate station register, surveyed centreline and current
as-built track plan would settle the day-level milestone, exact boundary and
relationship between the historical row and current route data. Until then,
50.1 km, 1957, 1970 and `添築雙線` remain the operator's historical record,
while current station and TDX membership are retained as separate layers.
