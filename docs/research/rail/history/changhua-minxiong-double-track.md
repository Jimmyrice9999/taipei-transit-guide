# Taiwan Railways Changhua–Minxiong Double Track — research findings, 26 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on the Changhua–Minxiong double-track entry in the
TRA construction-history record and its relationship to the current station and
Western Main Line data layers.

## What is established

- **The TRA construction-history HTML table lists Changhua–Minxiong as a 71.7 km double-track segment.** Source: National Taiwan Railways Corporation, *Railway route construction history*, titleOriginal `臺灣鐵路路線建造史`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/adr/about-1-5`, PRIMARY, High confidence because the complete operator HTML page was fetched and read. Original-language basis: `23.彰化 - 民雄(雙線)`, `71.7`, `臺灣鐵路管理局`, with the `添築雙線` explanation.
- **The same HTML table gives 1957 as the construction year and 1970 as operation start, and lists TRA as constructor.** Source: the same full operator page, PRIMARY, High confidence because the relevant row and aligned fields were read in the complete table. Original-language basis: `民國五九年 1970`, `民國四六年 1957`, `臺灣鐵路管理局`, `添築雙線`.
- **The full operator PDF repeats the Changhua–Minxiong entry as row 43 with the same 71.7 km, 1957 and 1970 values.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `43.彰化─民雄(雙線) Changhua-Minxiong 71.7 臺灣鐵路管理局 TRA`, followed by the aligned `民國47年1957 民國59年1970 添築雙線` fields.
- **The current operator page identifies Changhua as station 3360.** Source: National Taiwan Railways Corporation, *Changhua Station information*, titleOriginal `彰化車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/3360`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 3360 彰化`.
- **The current operator page identifies Minxiong as station 4060.** Source: National Taiwan Railways Corporation, *Minxiong Station information*, titleOriginal `民雄車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4060`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4060 民雄`.
- **The committed TDX StationOfLine pull places the current Changhua and Minxiong records in Western Main Line families.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full data pull was checked. Original-language basis: the current ordered line records contain Changhua in WL/WL-C and Minxiong in WL.

## Scope and measurement boundaries

- The 71.7 km value is the operator construction-table scope. It is not added to current TDX travelled-distance fields, and no surveyed equivalence between those scopes was found.
- The HTML table and the PDF repeat the same operator record; they are corroborating presentations, not independent route measurements.
- The phrase `添築雙線` is reported as the operator's explanation. The checked sources do not supply a current track-count/as-built survey for this exact historical boundary.
- Current station pages establish the live endpoint identities and current service pages. They do not prove that the historical segment has a separate current route identity.

## Checked and failed

- **Exact day/month of the double-track work and operation start** — checked 2026-08-26 in the full construction-history HTML page and full PDF. Only years are supplied.
- **Contract, completion certificate and commissioning notice** — checked 2026-08-26 in the same full operator records. No such document is linked or transcribed there.
- **Intermediate historical station register and surveyed 71.7 km boundary** — checked 2026-08-26 in the full operator records and current station pages. No complete register or survey was found.
- **Current track-count/as-built status for the historical boundary** — checked 2026-08-26 in the full construction records, current Changhua and Minxiong pages and committed TDX StationOfLine data. These sources establish construction history, station identity and line membership, not a track-count survey.

## Stated gaps

An operator engineering archive with the contract, completion record, historic
timetable, intermediate station register, surveyed centreline and current
as-built track plan would settle the day-level milestone, exact boundary and
relationship between the historical row and current route data. Until then,
71.7 km, 1957, 1970 and `添築雙線` remain the operator's historical record,
while current station and TDX membership are retained as separate layers.

## Update, 29 August 2026 — a staged, internally-conflicting sub-segment chronology

- **zh.wikipedia, `縱貫線 (南段)`**, raw wikitext, SECONDARY. Batches:
  1970-06-11 (Changhua-Yuanlin, Shetou-Ershui, Linnei-Douliu), footnoted to
  中華民國59年《交通年鑑》(1971); 1970-10-06 (Yuanlin-Shetou, Douliu-Minxiong,
  Linfengying-Shanhua), same footnote; 1971-06-28 (Ershui-Linnei, requiring
  a new Zhuoshui River bridge), footnoted to 中華民國60年《交通年鑑》(1972),
  described as what "substantively completed" double track across the
  wider Changhua-Tainan corridor.
- **zh.wikipedia, `二水車站`**, SECONDARY. Tianzhong-Ershui: 25 August 1969,
  citing a contemporary 臺灣民聲日報 article (1969-08-19). Ershui-Linnei:
  28 June 1971, citing a different 民聲日報 article (1971-06-29).
- **zh.wikipedia, `田中車站 (臺灣)`**, SECONDARY. Tianzhong-Ershui: 11 June
  1970, citing 中華民國59年《交通年鑑》(1971) — one year later than Ershui
  Station's newspaper-sourced date for the identical segment.
- **zh.wikipedia, `林內車站`**, SECONDARY. Linnei-Douliu: 11 June 1970,
  citing the same 1971 yearbook. Ershui-Linnei: 28 June 1971, citing 中華民國
  60年《交通年鑑》(1972) — agrees with Ershui Station's independent citation.
  Also carries its own footnote flagging a third value for Ershui-Linnei,
  6 October 1970, from the enthusiast site 臺灣驛站之旅 — a source `縱貫線
  (南段)`'s own explicit 1970-10-06 completion list does not include this
  segment in, weighing against but not disproving the enthusiast claim.
- **zh.wikipedia, `民雄車站`**, SECONDARY. Corroborates TRA table row 21
  (a separate, Japanese-era 1938/1942 Minxiong-Chiayi double-track entry,
  9.3 km) as distinct from this page's postwar 71.7 km Changhua-Minxiong
  row.

### Conflicts, not resolved

1. **Tianzhong-Ershui**: 25 August 1969 (newspaper) vs. 11 June 1970
   (yearbook) — a full year apart, for the identical segment.
2. **Ershui-Linnei**: 28 June 1971 (two independent sources: a 1971
   newspaper and a 1972 yearbook) vs. 6 October 1970 (one enthusiast site,
   contradicted by a third source's own explicit completion list).
3. None of TRA's own PDF or HTML table entries were re-independently
   verified against this sub-segment material this pass — the 71.7 km
   aggregate figure stands as the operator's own scope, unreconciled with
   any of the sub-segment dates above.

### A PDF/HTML year discrepancy noted but not resolved

The existing research file's own PDF quote reads `民國47年1957` (ROC 47 =
1958, not 1957) against its HTML quote of `民國四六年 1957` (ROC 46 = 1957,
consistent). This pass could not re-open the PDF to check whether "47" is
a genuine PDF value or an earlier transcription slip — flagged for a
future pass with a working PDF-extraction path, not asserted as an error
in either direction.

### Checked and failed (this pass)

- TRA construction-history PDF re-extraction — WebFetch could not parse
  the binary; no `pdftotext` fallback available to this scout.
- `http://taipei100.blogspot.com/2013/07/1970.html` (the blog cited for a
  1970-10-24 Changhua ceremony) — HTTP 404, live and archived.
- web.archive.org snapshots generally — fetch tool refuses this host.
- General web search (Bing, Google, DuckDuckGo) — all unusable; WebSearch
  budget exhausted before this pass began.
