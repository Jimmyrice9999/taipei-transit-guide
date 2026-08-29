# 深坑區公所 / Shenkeng District Office — operator research

> **Corpus warning:** `docs/research/` is a lead file, not a source. Every claim below was checked against the fetched source named under it. Search snippets and the existing corpus are not evidence.

Researched 22 August 2026. Subject: 深坑區公所 / Shenkeng District Office; TDX record bus-operator-shenkengdistrictoffice-ygzx5e.

## What is established

### TDX record identity and route scope

- **Claim.** The committed TDX bus pull identifies bus-operator-shenkengdistrictoffice-ygzx5e as the Shenkeng District Office / 深坑區公所 record in the NewTaipei source set, with operator code ShenkengDistrictOffice, operator number 1109, phone (02)2662-3116 and URL http://www.shenkeng.ntpc.gov.tw.
- **Source.** TDX bus operator and route pull / `titleOriginal`: 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind / confidence.** PRIMARY; High for the committed data snapshot and its fields.
- **Original-language sentence.** The repository's TDX operator row contains `id: bus-operator-shenkengdistrictoffice-ygzx5e`, `names.zh_tw: 深坑區公所`, `operatorId: 16246`, `operatorNo: 1109`, `phone: (02)2662-3116`, and `sourceCities: [NewTaipei]`.

- **Claim.** The committed route pull associates 3 route records with this operator ID; the content page renders those rows from `operatorIds` rather than hand-listing a route roster.
- **Source.** TDX bus operator and route pull / `titleOriginal`: 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind / confidence.** PRIMARY; High for the repository snapshot; this does not establish ownership of vehicles or the underlying service contract.
- **Original-language sentence.** The committed route data contains 3 route objects whose `operatorIds` array includes `bus-operator-shenkengdistrictoffice-ygzx5e`.

### Authority context

- **Claim.** New Taipei's Transport Management Division publishes a public service index linking TPASS, electric-bus replacement, Jump Frog and rapid-bus services, low-floor bus information, bus dynamic information and bus-service quality evaluation.
- **Source.** New Taipei Government Transport Management Division / `titleOriginal`: 運輸管理科
- **URL.** https://www.traffic.ntpc.gov.tw/home.jsp?id=f06672ba2aadbd3c
- **Kind / confidence.** PRIMARY; High for the links and scope visible on the full official page; it does not identify the contractor, fleet or depot for this record.
- **Original-language sentence.** The page navigation includes 「TPASS行政院通勤月票」, 「電動公車汰換」, 「跳蛙公車」, 「低地板公車」, 「公車動態資訊」 and 「公車營運服務品質評鑑」.

## Conflicts

1. **Administrative record versus private operator interpretation.** The TDX pull supplies a route-data record named for a district office, while the authority page is a citywide transport-management index. Neither fetched page supports treating this record as a separately incorporated bus company, so the page keeps company founding, ownership, parent-group and merger fields N/A/TBC rather than inventing them.
2. **Route rows versus service families.** The TDX count is 3 rows. Those rows may represent route, branch, direction or departure variants; no claim is made that the count equals a distinct route-family count.

## Checked and failed

- **Founding, ownership, parent group and merger history** — The full TDX pull and the full New Taipei Transport Management Division page were checked on 22 August 2026; neither publishes company-registration fields or a corporate history for this municipal record. These claims remain unasserted.
- **Fleet and propulsion** — The same fetched primary pages were checked on 22 August 2026; neither identifies a manufacturer, chassis, body, capacity, electric or hybrid specification for this record. The page leaves fleet models TBC.
- **Depot and garage** — The same fetched primary pages were checked on 22 August 2026; neither publishes a location, opening date, capacity or route allocation for a garage used by this record. The page leaves depots TBC.
- **Contract and incident history** — The same fetched primary pages were checked on 22 August 2026; neither names a contractor, award, value, term, incident or regulatory action for this record. No such event is assigned by inference.

## Stated gaps

A district-office service page, procurement file, budget or award notice, contractor disclosure, current fleet register and garage record would be needed to establish who supplies service, which vehicles are used, where they are kept and how performance is monitored. The TDX snapshot can establish the route-data associations, not those private or contractual facts.

## Corpus check

The earlier page was a TDX-only scaffold. This pass expands the route snapshot and records the authority context while preserving the unresolved distinction between a municipal data record and a private bus operator.

## Update, 29 August 2026 — self-operation confirmed via ebus.gov.taipei, citywide programme context

- **Greater Taipei Bus (ebus.gov.taipei) route pages for F711/F712/F713**,
  PRIMARY. Operator field on all three gives 深坑區公所 (the district
  office itself), sharing the office's own phone number — the first
  source found naming any operator for these routes. Data-system
  evidence of self-operation, not a prose policy statement.
- **New Taipei City's citywide New Bus overview**
  (`https://www.ntpc.gov.tw/ch/home.jsp?id=259bb19174111891`), PRIMARY.
  States the programme continues pre-2010 township-level community buses'
  free-riding policy, consolidated under one name after New Taipei's 2010
  special-municipality upgrade; groups Shenkeng with Xindian, Shiding,
  Pinglin and Wulai in one F7 zone.
- **Shenkeng's own geography/transport page**, PRIMARY. Confirms no
  current MRT station (long-term plan seeks an extension, doesn't
  describe one built); names four intercity bus companies serving the
  district separately from the community routes (Chinese names for two of
  the four not independently confirmed against a verbatim quote this
  pass).
- **Full stop lists for all three routes** (via ebus.gov.taipei), PRIMARY.
  Every stop is a residential hillside place name, the district market,
  the office, or Shenkeng Elementary — no MRT station, no "old street"
  stop. Reads as intra-district residential coverage, not an MRT feeder
  or tourist shuttle.
- **Conflict, not resolved**: the district office's own page states the
  no-holiday/no-typhoon rule only for F713; ebus.gov.taipei states
  holiday suspension for all three routes. Both published.
- **zh.wikipedia, `新北市新巴士`**, SECONDARY, lead only. Its claim that
  New Bus routes citywide split into two models (district-self-operated
  vs. tendered-out) was not found stated in any NTPC or Shenkeng primary
  page checked. Shenkeng's self-operated status specifically is
  separately confirmed via ebus.gov.taipei (above), not via this
  Wikipedia framework.

### Checked and failed (this pass)

- **政府電子採購網 (government e-procurement) tender search**, two URL
  attempts — checked 2026-08-29; the site requires a JS-rendered
  session/form-post flow static fetch cannot execute. No procurement
  record found or ruled out.
- **Shenkeng District Office's own budget, announcements and statistics
  pages** — checked 2026-08-29, fetched in full; none contains a
  bus-service line item, tender notice or contractor disclosure. A real
  negative finding, not an unsearched gap.
- **CNA (中央社) search** — checked 2026-08-29, guessed search URL
  returned HTTP 404; no working CNA search endpoint found this pass.
- **PTT BusTimes board search** for F711/深坑新巴士 specifically — checked
  2026-08-29, returned only page navigation, no result entries.
  (General 深坑 searches did return real posts, but all about the separate
  intercity 指南/欣欣客運 routes, not the district's own F7xx buses.)
- **Mobile01 search**, two URL patterns — checked 2026-08-29, both HTTP
  403 Forbidden.
- **General web search (Google, Bing, DuckDuckGo)** — checked 2026-08-29,
  all unusable (empty page, mismatched cached results, CAPTCHA);
  WebSearch budget exhausted before this pass's own queries.
- **自由時報/聯合報 site search** for 深坑新巴士 — checked 2026-08-29; the one
  自由時報 match found was about Taishan District's shuttle, not Shenkeng;
  聯合報's tag search returned only a generic sidebar, no matches.
