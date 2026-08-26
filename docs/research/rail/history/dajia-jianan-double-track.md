# Taiwan Railways Dajia–Jianan Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Dajia–Jianan construction-history entry in
the full TRA PDF and its relationship to the current operator HTML table, current
station pages and TDX data layers.

## What is established

- **The full TRA construction-history PDF lists Dajia–Jianan as row 50 at 5.3 km, with TRA as constructor.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `50.大甲─甲南(雙線) Dajia-Jianan 5.3 臺灣鐵路管理局 TRA`.
- **The PDF's aligned chronology gives 1974 as construction year, 1977 as operation start and 添築雙線 as the explanation.** Source: the same full operator PDF, PRIMARY, High confidence because row 50 and its aligned continuation were read in the complete document. Original-language basis: `民 國 63 年 1974 民 國 66 年 1977 添築雙線。 Extended to be double-tracked`.
- **The current operator HTML history page does not contain a Dajia–Jianan row.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete current table was fetched and read; its rows 27 and 28 are Xincheng–Hualien Port and Dongshan–Su'aoxin Station.
- **The current operator station page identifies Dajia as station 2200.** Source: National Taiwan Railways Corporation, *Dajia Station information*, titleOriginal `大甲車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2200`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 2200 大甲`.
- **The committed TDX station snapshot has no separate current Jianan or 甲南 station record.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was scanned for both names; it contains current station 2200 as Dajia.
- **The committed TDX StationOfLine pull places Dajia at source sequence 10 and 54.1 km, followed by Taichung Port at source sequence 11 and 59.3 km on WL-C.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `WL-C`, `2200`/`大甲`, `Sequence: 10`, `TraveledDistance: 54.1`; next `2210`/`臺中港`, `Sequence: 11`, `TraveledDistance: 59.3`.
- **The current Taichung Port operator page gives an address on 甲南路.** Source: National Taiwan Railways Corporation, *Taichung Port Station information*, titleOriginal `臺中港車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/2210`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 2210 臺中港` and `地址：436-42 臺中市 清水區 頂湳里甲南路 2 號`.

## Conflicts between primary presentations

- The full PDF contains Dajia–Jianan as row 50 with 5.3 km, 1974/1977 chronology and a double-track explanation, while the current HTML page omits that subject and its current rows 27 and 28 are Xincheng–Hualien Port and Dongshan–Su'aoxin Station. The two operator presentations therefore have different row coverage and numbering; this is retained as a source conflict.
- The historical PDF names Jianan as an endpoint, while current operator and TDX records expose Dajia 2200 followed by Taichung Port 2210; Taichung Port's 甲南路 address is not treated as proof of a historical endpoint mapping. The current TDX interval is 5.2 km (59.3 minus 54.1), while the PDF construction scope is 5.3 km. These are retained as separate measures.

## Checked and failed

- **Current HTML-table Dajia–Jianan row** — checked 2026-08-26 in the complete operator HTML page, including its full numbered table. No such row was found; the current table proceeds through rows 27 and 28 without this subject.
- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history PDF. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the full operator PDF and current HTML history page. No such document is linked or transcribed for this subject.
- **Intermediate historical station register and surveyed 5.3 km boundary** — checked 2026-08-26 in the full operator PDF, current HTML page and current station pages. No complete register or survey was found.
- **Verified current station identity for historical Jianan/甲南 and current as-built track count** — checked 2026-08-26 in the full operator records and committed TDX station and StationOfLine pulls. These establish current Dajia and Taichung Port records, not the historical endpoint mapping or a track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historical
timetable, intermediate station register, surveyed centreline and current
as-built track plan would settle the exact boundary, day-level milestones,
historical-to-current endpoint relationship and current track count. Until then,
the 5.3 km Dajia–Jianan entry remains a PDF-recorded historical subject, while
the current Dajia–Taichung Port TDX interval remains a separate 5.2 km data-layer
measure.
