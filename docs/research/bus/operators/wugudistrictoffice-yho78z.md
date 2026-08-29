# 五股區公所 / Wugu District Office — operator research

> **Corpus warning:** `docs/research/` is a lead file, not a source. Every claim below was checked against the fetched source named under it. Search snippets and the existing corpus are not evidence.

Researched 22 August 2026. Subject: 五股區公所 / Wugu District Office; TDX record bus-operator-wugudistrictoffice-yho78z.

## What is established

### TDX record identity and route scope

- **Claim.** The committed TDX bus pull identifies bus-operator-wugudistrictoffice-yho78z as the Wugu District Office / 五股區公所 record in the NewTaipei source set, with operator code WuguDistrictOffice, operator number 0411, phone (02)2291-6051 ~ 5 and URL http://www.wugu.ntpc.gov.tw.
- **Source.** TDX bus operator and route pull / `titleOriginal`: 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind / confidence.** PRIMARY; High for the committed data snapshot and its fields.
- **Original-language sentence.** The repository's TDX operator row contains `id: bus-operator-wugudistrictoffice-yho78z`, `names.zh_tw: 五股區公所`, `operatorId: 16234`, `operatorNo: 0411`, `phone: (02)2291-6051 ~ 5`, and `sourceCities: [NewTaipei]`.

- **Claim.** The committed route pull associates 0 route records with this operator ID; the content page renders those rows from `operatorIds` rather than hand-listing a route roster.
- **Source.** TDX bus operator and route pull / `titleOriginal`: 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind / confidence.** PRIMARY; High for the repository snapshot; this does not establish ownership of vehicles or the underlying service contract.
- **Original-language sentence.** The committed route data contains 0 route objects whose `operatorIds` array includes `bus-operator-wugudistrictoffice-yho78z`.

### Authority context

- **Claim.** New Taipei's Transport Management Division publishes a public service index linking TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation.
- **Source.** New Taipei Government Transport Management Division / `titleOriginal`: 運輸管理科
- **URL.** https://www.traffic.ntpc.gov.tw/home.jsp?id=f06672ba2aadbd3c
- **Kind / confidence.** PRIMARY; High for the links and scope visible on the full official page; it does not identify the contractor, fleet or depot for this record.
- **Original-language sentence.** The page navigation includes 「TPASS行政院通勤月票」, 「電動公車汰換」, 「跳蛙公車」, 「低地板公車」, 「公車動態資訊」 and 「公車營運服務品質評鑑」.

## Conflicts

1. **Administrative record versus private operator interpretation.** The TDX pull supplies a route-data record named for a district office, while the authority page is a citywide transport-management index. Neither fetched page supports treating this record as a separately incorporated bus company, so the page keeps company founding, ownership, parent-group and merger fields N/A/TBC rather than inventing them.
2. **Route rows versus service families.** The TDX count is 0 rows. Those rows may represent route, branch, direction or departure variants; no claim is made that the count equals a distinct route-family count.

## Checked and failed

- **Founding, ownership, parent group and merger history** — The full TDX pull and the full New Taipei Transport Management Division page were checked on 22 August 2026; neither publishes company-registration fields or a corporate history for this municipal record. These claims remain unasserted.
- **Fleet and propulsion** — The same fetched primary pages were checked on 22 August 2026; neither identifies a manufacturer, chassis, body, capacity, electric or hybrid specification for this record. The page leaves fleet models TBC.
- **Depot and garage** — The same fetched primary pages were checked on 22 August 2026; neither publishes a location, opening date, capacity or route allocation for a garage used by this record. The page leaves depots TBC.
- **Contract and incident history** — The same fetched primary pages were checked on 22 August 2026; neither names a contractor, award, value, term, incident or regulatory action for this record. No such event is assigned by inference.

## Stated gaps

A district-office service page, procurement file, budget or award notice, contractor disclosure, current fleet register and garage record would be needed to establish who supplies service, which vehicles are used, where they are kept and how performance is monitored. The TDX snapshot can establish the route-data associations, not those private or contractual facts.

## Corpus check

The earlier page was a TDX-only scaffold. This pass expands the route snapshot and records the authority context while preserving the unresolved distinction between a municipal data record and a private bus operator.

## Update, 29 August 2026 — successor operators found, citywide context, one unresolved conflict

- **Successor route operators, from the project's own committed TDX
  route/operator pull**: route 580 (Wugu Station-Mackay Memorial
  Hospital) → 指南客運 (Zhinan Bus Co.); routes 581/582/583 → 國光客運
  (Kuo-Kuang Motor Transport Co.). Cross-checked against TDX subroute
  names, which closely match the district office's stated old-route
  termini ("580馬偕醫院" ≈ F221's Mackay Hospital terminal), independent
  evidence these are the same converted routes.
- **New Taipei City's own New Bus overview page**
  (`https://www.ntpc.gov.tw/ch/home.jsp?id=854`), PRIMARY. Groups Wugu
  under a shared F2 numbering block with Xinzhuang, Taishan and Linkou;
  describes only the original free-service design, with no mention of any
  paid conversion — content appears to predate or not reflect 2020.
- **zh.wikipedia, `新北市新巴士`**, SECONDARY, lead only. Lists Wugu's four
  conversions with dates/numbers matching the primary source exactly,
  plus a much longer list of other district conversions 2019-2024
  (F107/F108→837 branches 2019/6/1; F110/F111→594/595 2021/9/1;
  F112→593 2020/11/1; F125→878 2021/4/1; F137→882 2023/1/16;
  F501→596 2024/11/1; F502→585 2021/6/7; F511→577 2020/7/1;
  F601-F607→570-575 2020/1/1; F702→576 2020/1/1; F705/F706→592
  2020/7/1; F906/F908/F912/F916-F918→586-591/677 2020) — showing this
  was a rolling, multi-year, multi-district programme, not a
  Wugu-specific event. **Checked the article's own footnotes directly:
  none of its three citations (a district-history page, a 2012 bus-livery
  ceremony article, a 2014 council district list) support the conversion
  table.** The table is uncited within the article itself — used only as
  a consistent lead, not independent confirmation, and the wider list
  beyond the Wugu rows was not independently verified.
- **Conflict, not resolved**: the district office names one terminal of
  routes 581 and 583 as 五股站 (Wugu Station); the current TDX subroute
  names instead give 五林路口 (Wulin Road junction) for the same routes.
  May be the same stop under different labels, or the terminus may have
  moved since the district office's page (last updated 2021-03-23)
  against the TDX pull (sourceUpdated 2026-08-15). Both published.

### Checked and failed (this pass)

- **Rationale for the free-to-paid conversion** (funding, ridership,
  citywide policy) — checked 2026-08-29 across the district office page,
  the city's New Bus overview, the Traffic Bureau's Transport Management
  Division page, and zh.wikipedia's conversion table (which gives only
  "原路線改制為收費路線" as its own stated reason, i.e. none). Not found
  anywhere checked.
- **Contemporary news coverage of the 2020 conversion** — checked
  2026-08-29: UDN's own site search returned zero results; 自由時報 and CNA
  search endpoints both 404'd; Bing/Google/DuckDuckGo/Yahoo substitutes
  all failed (unrelated results, CAPTCHA, empty render, HTTP 500). No
  coverage found.
- **web.archive.org**, for an earlier/fuller version of the district
  office's announcement — checked 2026-08-29, fetch tool refuses this
  host entirely.
- **Operator confirmation from csgroup-bus.com.tw (指南客運) and
  kingbus.com.tw (國光客運)'s own route-query pages** — checked
  2026-08-29, both returned only header/navigation content; their route
  data is evidently JavaScript-rendered and did not reach the fetch tool.
  Operator attribution rests on the committed TDX pull plus the
  terminal-name cross-check, not the operators' own published pages.
- **PTT MRT-board search** for enthusiast discussion of the conversion —
  checked 2026-08-29, returned only page chrome, no result entries;
  inconclusive rather than a confirmed absence.
