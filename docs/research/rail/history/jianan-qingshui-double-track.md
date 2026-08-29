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

## Update, 29 August 2026 — a second operator source and wider corridor context

A second pass found a second, independent TRA open-data distribution of the
same construction-chronology dataset, plus wider Coast Line and station
naming-history context.

- **TRA open-data CSV, dataset id 77240**, `https://data.gov.tw/dataset/77240`,
  download `https://ods.railway.gov.tw/tra-ods-web/ods/download/dataResource/8963bc574e36428cac242c40372bbaa8`.
  PRIMARY. Row: `甲南─清水(雙線),6,臺灣鐵路管理局,1974,1974,添築雙線。` — matches the
  PDF exactly. Neighbouring rows: 苑裡–日南 (7.8 km, 1974/1974), 新埔–通霄
  (5.8 km, 1974/1974), 大甲–甲南 (5.3 km, construction 1974, opened 1977),
  甲南–臺中港 (7.8 km, 1973/1974, no 添築雙線 note — a different branch, see
  below). None of these rows name a shared programme. Note: extracted by
  WebFetch's page-reading model, not independently read byte-for-byte —
  high confidence but not a raw-file read.
- **zh.wikipedia, `清水車站 (台灣)`** (note: simplified-character disambiguator;
  the traditional-character URL 404s), states present-day track
  configuration is double north of Qingshui, single south — unfootnoted,
  no date given, geographically consistent with but not confirming this
  page's 1974 record.
- **Taichung Port station naming/rename conflict**: `臺中港車站`
  (zh.wikipedia) gives 1 January 1985 for the Jianan→Taichung Port rename,
  citing the 1985 TRA yearbook (not independently opened); `台中港線`
  (zh.wikipedia, on the separate harbor branch line) gives 1 April 1985 for
  the same rename, citing different news sources. Unresolved, both
  published.

### A separate branch line sharing the same junction station — not conflated

`甲南–臺中港` (Jianan–Taichung Harbor branch), 7.8 km per both the TRA CSV
and zh.wikipedia's infobox, is a physically separate spur to the harbor
itself, not a double-tracking of the coast mainline. zh.wikipedia's
`台中港線` article (unverified footnotes: four news citations not
independently fetched) describes it as originally built 1974 under a
different authority (`台中港工程局`), with operating rights transferred to
TRA on 1976-10-31 — conflicting with the TRA CSV's own attribution of the
branch to TRA itself as builder, 1973/1974. Both attributions published,
not resolved. A low-confidence secondary (a blog snippet, never
independently fetched) gave a conflicting ~13 km length for this branch
against the CSV/Wikipedia-agreeing 7.8 km — flagged but not used, since the
13 km source was never opened and its measurement basis is unknown.

### An unverified date conflict, not published on the content page

A search-snippet-only lead pointed to an enthusiast site
(`http://trstour.com/cing-shuei.htm`) allegedly stating double-tracking
between Qingshui and Jianan completed 15 November, ROC year 65 (1976) — a
full year later than TRA's 1974 date. Every fetch attempt failed (self-signed
certificate; web.archive.org refused by the fetch tool). Per rule 2, this is
recorded here as an unresolved, unverified lead only — it is NOT published
on the content page and must not be treated as an established conflict
until the source itself can actually be read.

### Checked and failed (this pass)

- `http://trstour.com/cing-shuei.htm` — self-signed certificate, twice.
- web.archive.org snapshot of the same page — fetch tool refuses this host
  entirely.
- TRA PDF re-extraction for surrounding rows — WebFetch could not parse
  the PDF binary this pass; no `pdftotext` fallback available to this scout.
- 自由時報 news footnotes underlying the `台中港線` Wikipedia article (four
  citations) — not independently located.
- 1985 TRA statistical yearbook (中華民國74年臺灣鐵路統計年報) — not located.
- General web search (Bing, DuckDuckGo) — unusable (irrelevant results;
  CAPTCHA); WebSearch budget exhausted before this pass began.
