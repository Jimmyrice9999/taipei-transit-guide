# Taiwan Railways Jianan–Taichung Port Double-Track Record — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Jianan–Taichung Port entry in the TRA
construction-history PDF and its relationship to the current operator HTML table,
station page and TDX data layers.

## What is established

- **The full TRA construction-history PDF lists Jianan–Taichung Port as row 45 at 7.8 km.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `45.甲南─臺中港 Jianan-Taichung Port 7.8 臺灣鐵路管理局 TRA`.
- **The PDF's aligned chronology gives 1957 as construction year, 1970 as operation start and 添築雙線 as the explanation.** Source: the same full operator PDF, PRIMARY, High confidence because the row and aligned continuation were read in the complete document. Original-language basis: `民 國 46 年 1957 民 國 59 年 1970 添築雙線。 Extended to be double-tracked`.
- **The current operator HTML history page does not contain a Jianan–Taichung Port row.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete page was fetched and read; it is marked last updated 2026-04-27 and its current numbered table proceeds from row 24 Chiayi–Xinshi to row 25 Xinpu–Tongxiao without this subject.
- **The current operator station page identifies Taichung Port as station 2210 and gives an address on 甲南路.** Source: National Taiwan Railways Corporation, *Taichung Port Station information*, titleOriginal `臺中港車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2210`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 2210 臺中港` and `地址：436-42 臺中市 清水區 頂湳里甲南路 2 號`.
- **The committed TDX station snapshot has no separate current Jianan or 甲南 station record.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was scanned for both names; it contains station 2210 as current Taichung Port.
- **The committed TDX StationOfLine pull places Taichung Port at sequence 11 of WL-C with a supplied travelled distance of 59.3 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: line `WL-C`, station `2210`/`臺中港`, `Sequence: 11`, `TraveledDistance: 59.3`.

## Conflicts between primary presentations

- The full PDF contains Jianan–Taichung Port as row 45 and supplies the 7.8 km, 1957, 1970 and double-track record. The current HTML page is a separate operator presentation: it includes the preceding Changhua–Minxiong and Chiayi–Xinshi subjects as rows 23 and 24, then moves to Xinpu–Tongxiao as row 25 and does not list Jianan–Taichung Port. The two primary presentations therefore have different row coverage and numbering. This is preserved as a source conflict, not resolved by choosing one.
- The current station page's 甲南路 address is a present address for station 2210. It is not a primary statement that the historical PDF's Jianan endpoint is the current Taichung Port station, and the TDX station pull has no separate Jianan/甲南 station record.

## Checked and failed

- **Current HTML-table Jianan–Taichung Port row** — checked 2026-08-26 in the complete operator HTML page, including its full numbered table. No such row was found; the current table continues from row 24 Chiayi–Xinshi to row 25 Xinpu–Tongxiao.
- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history PDF. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the full operator PDF and current HTML history page. No such document is linked or transcribed for this subject.
- **Intermediate historical station register and surveyed 7.8 km boundary** — checked 2026-08-26 in the full operator PDF, current HTML page and current Taichung Port station page. No complete register or survey was found.
- **Verified current station identity for historical Jianan/甲南 and current as-built track count** — checked 2026-08-26 in the full operator records and committed TDX station and StationOfLine pulls. These establish Taichung Port 2210 and WL-C membership, not the historical name's current mapping or a track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historical
timetable, intermediate station register, surveyed centreline and current
as-built track plan would settle the exact boundary, day-level milestones and
relationship between the PDF record and the current station model. Until then,
the 7.8 km Jianan–Taichung Port entry remains a PDF-recorded historical subject;
the current HTML omission and TDX station model remain published boundaries.
