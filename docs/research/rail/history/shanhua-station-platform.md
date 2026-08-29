# Taiwan Railways Shanhua Station Platform Record — research findings, 27 August 2026

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary page, full PDF or committed data pull; no search snippet is used as evidence.

This is a one-subject report on row 118 of the operator's construction-history
table and its relationship to the current Shanhua and TDX records.

## What is established

- **The complete operator PDF records row 118 as Shanhua Station, a 0.3 km subject.** Source: National Taiwan Railways Corporation / former Taiwan Railways Administration, *Chronological History of Railroad Construction*, titleOriginal `路線修築沿革`, publisher `國營臺灣鐵路股份有限公司／臺灣鐵路管理局`, `https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5`, PRIMARY, High confidence because the complete ten-page PDF was fetched and read. Original-language basis: `118. 善化車站 Shanhua Station 0.3`.
- **The row names Taiwan Railways Administration as constructor.** Source: the same full operator PDF, PRIMARY, High confidence because the constructor field was read beside row 118. Original-language basis: `臺灣鐵路管理局 TRA`.
- **The aligned chronology gives 2017 in both the construction-year and operation-start fields.** Source: the same full operator PDF, PRIMARY, High confidence because the row order and page-nine continuation were read together. Original-language basis: `民國106年 2017 民國106年 2017` aligned to row 118.
- **The row describes the work as `增設月台`; the operator's English column reads `Add platform`.** Source: the same full operator PDF, PRIMARY, High confidence because the Chinese explanation and operator English column were read together. Original-language basis: `增設月台`; the operator's English column reads `Add platform`.
- **The current operator page identifies Shanhua as station 4170.** Source: National Taiwan Railways Corporation, *Shanhua Station information*, titleOriginal `善化車站資訊`, publisher `國營臺灣鐵路股份有限公司`, `https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4170`, PRIMARY, High confidence because the complete current station page was fetched. Original-language basis: `## 4170 善化`.
- **The committed TDX station pull contains current station 4170.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station records*, titleOriginal `臺灣鐵路車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `StationID: 4170`, `StationName: { En: Shanhua, Zh_tw: 善化 }`.
- **The committed TDX Western Main Line record places Shanhua at source sequence 83 and 334.2 km.** Source: Ministry of Transportation and Communications TDX, *Taiwan Railways station-of-line records*, titleOriginal `臺灣鐵路路線車站資料`, publisher `交通部運輸資料流通服務平臺`, `https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0`, PRIMARY, High confidence because the committed full pull was checked. Original-language basis: `LineID: WL`, `Sequence: 83`, `StationID: 4170`, `TraveledDistance: 334.2`.

## Scope and measurement boundaries

- The historical 0.3 km value is retained as the operator's row 118 station subject distance. The current TDX 334.2 km value is a travelled-distance field in the WL station-of-line record, not a source-defined replacement for the historical work boundary.
- The 2017/2017 values are reported as the operator's construction and operation-start table fields. The row does not provide a day-level platform-addition or commissioning date.
- The `增設月台` / `Add platform` explanation is reported as the operator's work description; the checked primary set does not expand it into a platform count, design or detailed project scope.
- The current operator construction-history HTML was fetched and read; no matching Shanhua Station row or row 118 explanation was found. This is a source-coverage difference from the complete PDF.

## Conflicts

No direct numeric contradiction was found among the checked primaries. The
historical row's 0.3 km and the current WL field of 334.2 km belong to records
with different stated purposes and are not competing measurements of the same
boundary; they are not averaged or combined. The current operator HTML omits
the historical row, which is recorded as a coverage difference.

## Checked and failed

- **Exact platform-addition or commissioning day** — checked 2026-08-27 in the full ten-page operator PDF, current operator history HTML and current station page. The row supplies only 2017 year fields and no day.
- **Platform count, type, geometry or detailed work scope** — checked 2026-08-27 in the full operator PDF, current operator history HTML and current station page. The row supplies only `增設月台` / `Add platform`.
- **Surveyed boundary for the 0.3 km value** — checked 2026-08-27 in the full operator PDF and committed TDX station-of-line data. No source-defined endpoints or accounting boundary were found for row 118.
- **Mapping row 118's 0.3 km to TDX's 334.2 km WL field** — checked 2026-08-27 by comparing the historical row with the current station-of-line record. The source descriptions do not establish a common boundary or measurement purpose.
- **Current operator HTML reproduction of row 118** — checked 2026-08-27 in the full operator construction-history table. No matching Shanhua Station row or platform explanation was found.

## Stated gaps

An operator engineering archive with the platform-addition plan, exact date,
platform register, contract, completion record, asset boundary and source-defined
measurement endpoints would settle the missing details. Until then, row 118 is
kept as a historical 0.3 km Shanhua Station platform subject with 2017/2017 fields
and the Add platform wording, while current station 4170 and the WL position remain
a separate live-data layer.

## Update, 29 August 2026 — purpose and date from secondary sources

A second research pass, still unable to find any TRA-authored account of row
118 beyond its year-level fields, found secondary material that gives the
platform addition's purpose and a day-level date.

- **PeoPo (公視 PeoPo 公民新聞), 2017-04-10, `善化車站第二月台配合本月底改點啟用 沙崙線列車始發`**,
  `https://www.peopo.org/news/333307`. SECONDARY, Medium confidence (citizen
  journalism, internally detailed, corroborated in outline by later
  independent reporting). States the new platform lets Shalun Line trains
  originate at Shanhua instead of running empty from Nanke, gives an opening
  date of 27 April 2017, and names eight renumbered train workings. Original:
  `對於善化車站欲前往沙崙線的旅客一直以來有很大的不便，有『看得到車，搭不到車』的窘況`.
- **zh.wikipedia, `善化車站`**, `https://zh.wikipedia.org/wiki/善化車站`. SECONDARY,
  cites the PeoPo article for the same date and adds an unverified claim
  (Shanhua was previously TRA's only single-platform second-class station)
  not found in the cited article itself — flagged as unverified, not used on
  the content page.
- **Liberty Times (自由時報), 2024-06-27/28**, `https://news.ltn.com.tw/news/life/breakingnews/4719121`
  and `https://news.ltn.com.tw/news/life/paper/1653707`. SECONDARY. Describe a
  separate, later cross-platform reconstruction plan (NT$20m planning fee,
  NT$715m estimated construction for Shanhua alone, part of a combined
  ~NT$1.4bn plan with Longtian Station) — not the 2017 platform addition.
  Confirms Shanhua's role as the Shalun Line's originating station and >3,000
  daily trips as of 2024.
- **PTT Railway board, 2022-03-05, `[新聞] 台鐵善化站 交通局力爭擴建`**,
  `https://www.ptt.cc/bbs/Railway/M.1646454709.A.CEB.html`. SECONDARY repost
  of news coverage. Describes a 2020-proposed "Platform 1 expansion and
  station-yard improvement," a third, differently-named and differently-dated
  project.

**Conflict/ambiguity, not resolved**: three chronologically distinct episodes
of platform work at Shanhua now have some documentation — the 2017 `增設月台`
row, a 2020-proposed "Platform 1 expansion," and a 2020s cross-platform
reconstruction plan reported in 2022–2024 — and no source read explicitly
states whether any two of these describe the same physical platform. Do not
merge them.

### Checked and failed (this pass)

- CNA/中央社 search endpoint (`cna.com.tw/search/hydsearchws.aspx`) — tried
  2026-08-29 with two encodings; both HTTP 404. Endpoint likely wrong path,
  not a confirmed zero-result search.
- UDN/聯合報 site search for `善化車站 月台` — tried 2026-08-29; returned
  "共找到0筆" (0 results) for 2017-specific coverage.
- Liberty Times site search for 2017-specific coverage (as opposed to the
  2024 reconstruction articles already found) — tried 2026-08-29 with two
  keyword encodings; both HTTP 404. Unresolved, not a confirmed zero.
- TRA's own primary announcement of the April 2017 timetable change — several
  guessed URL paths on railway.gov.tw all returned 404; the operator's
  current construction-history HTML (already recorded above as not
  containing row 118) was rechecked in full and still does not contain it.
- web.archive.org fetch of the PeoPo article — refused by the fetch tool for
  that domain; relied on the live peopo.org page instead, which was
  reachable.
- General web search (Google, Bing, DuckDuckGo, Marginalia) for 2017-specific
  coverage — all either blocked, geo-mismatched, or CAPTCHA'd; WebSearch tool
  budget was exhausted before any query in this pass could run.
