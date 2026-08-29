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

## Update, 29 August 2026 — a staged secondary chronology inside the corridor

A second pass found a secondary source giving a much more granular, staged
account of double-tracking inside the same Chiayi–Xinshi corridor, at odds
in structure (though not necessarily in substance) with TRA's single
1957–1970 aggregate row.

- **zh.wikipedia, `縱貫線 (南段)` (Longitudinal Line, Southern Section)**,
  `https://zh.wikipedia.org/wiki/縱貫線_(南段)`, SECONDARY. States
  Minxiong–Chiayi double track completed 1942 and Xinshi–Tainan completed
  1943 (both footnoted only to an enthusiast site, `trstour.com`, which
  could not be fetched — see below), and Nanjing–Linfengying double-tracked
  11 June 1970 (footnoted to 交通部交通研究所編《中華民國59年交通年鑑》(1971),
  a government yearbook not accessible online in this pass).
- **zh.wikipedia, `新市車站 (臺灣)`**, `https://zh.wikipedia.org/wiki/新市車站_(臺灣)`,
  and **`善化車站`**, SECONDARY. State Shanhua–Xinshi double track opened
  30 September 1969, footnoted (on the Shanhua article) to the same
  enthusiast site.
- **zh.wikipedia, `嘉義車站`** and **`民雄車站`**, SECONDARY. Both state the
  Chiayi–Minxiong double track completed in 1942, without a footnote on
  that specific sentence at the station-article level — possibly the same
  underlying claim repeated across two pages rather than two independent
  corroborations.

**Conflict, not resolved**: TRA's own table records one aggregate 1957
(construction) / 1970 (operation-start) project for the full 50.1 km
corridor. The secondary chronology above instead describes: parts of the
same corridor already double-tracked before 1945 (1942, 1943, at the
corridor's edges), and other parts still being completed piecemeal as late
as mid-1970 (Shanhua–Xinshi in 1969; Nanjing–Linfengying on 11 June 1970).
TRA's table contains no pre-1945 row anywhere for this corridor — a scope
limit of the table (it appears to record only TRA/postwar-attributed
construction), not evidence the 1942/1943 claims are false. A plausible
but **unstated-by-any-source** reading is that Japanese-era double track
in parts of this corridor was later reduced to single track (a documented
wartime practice elsewhere) and TRA's 1957–1970 「添築雙線」project rebuilt
it; this is flagged as a hypothesis only, not published as a claim.

**A caught secondary-citation error, corrected before use**: an initial
automated read of the 縱貫線(南段) article's `1971年6月28日` entry
mischaracterized it as "full double-track Changhua–Tainan achieved." A
stricter re-fetch shows this date is specifically about the commissioning
of the second-generation Zhuoshui River Bridge between Ershui and Linnei —
well north of this corridor, and not a full-corridor-complete statement.
Not used on the content page.

### Checked and failed (this pass)

- `http://trstour.com/shan-hua.htm` and `http://trstour.com/index1.htm`
  (the enthusiast site underlying the 1942/1943/1969 dates above) — both
  failed with an invalid self-signed HTTPS certificate, 2026-08-29.
- web.archive.org snapshots of both trstour.com pages — the fetch tool
  refuses this host entirely in this environment.
- 交通部交通研究所編《中華民國59年交通年鑑》(1971) and 《中華民國60年交通年鑑》
  (1972), the government yearbooks the 縱貫線(南段) article cites for its
  1970/1971 entries — not found at any accessible URL.
- TRA construction-history PDF row 44 — could not be re-parsed this pass
  (WebFetch cannot extract this PDF's binary content; the Read-tool
  PDF-image fallback needs `pdftoppm`, not installed in this environment,
  and no Bash tool was available to this scout to run the project's
  documented `pdftotext` workaround). Row 44's values were not
  re-independently verified this pass, though they match the first pass's
  reading already cited above.
- General web search (Bing returned unrelated content; DuckDuckGo returned
  a CAPTCHA) — not usable; WebSearch tool budget was exhausted before this
  pass began, so 自由時報/聯合報/中央社 archives were not checked at all this
  pass — the clearest next step for a further research session.
