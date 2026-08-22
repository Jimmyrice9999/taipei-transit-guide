# 板橋區公所 / Banqiao District Office — operator research

> **Corpus warning:** `docs/research/` is a lead file, not a source. Every claim below was checked against the fetched source named under it. Search snippets and the existing corpus are not evidence.

Researched 22 August 2026. Subject: 板橋區公所 / Banqiao District Office; TDX record bus-operator-banqiaodistrictoffice-11jjtvo.

## What is established

### TDX record identity and route scope

- **Claim.** The committed TDX bus pull identifies bus-operator-banqiaodistrictoffice-11jjtvo as the Banqiao District Office / 板橋區公所 record in the NewTaipei source set, with operator code BanqiaoDistrictOffice, operator number 0818, phone (02)2968-6911 and URL http://www.banqiao.ntpc.gov.tw.
- **Source.** TDX bus operator and route pull / `titleOriginal`: 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind / confidence.** PRIMARY; High for the committed data snapshot and its fields.
- **Original-language sentence.** The repository's TDX operator row contains `id: bus-operator-banqiaodistrictoffice-11jjtvo`, `names.zh_tw: 板橋區公所`, `operatorId: 16239`, `operatorNo: 0818`, `phone: (02)2968-6911`, and `sourceCities: [NewTaipei]`.

- **Claim.** The committed route pull associates 0 route records with this operator ID; the content page renders those rows from `operatorIds` rather than hand-listing a route roster.
- **Source.** TDX bus operator and route pull / `titleOriginal`: 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind / confidence.** PRIMARY; High for the repository snapshot; this does not establish ownership of vehicles or the underlying service contract.
- **Original-language sentence.** The committed route data contains 0 route objects whose `operatorIds` array includes `bus-operator-banqiaodistrictoffice-11jjtvo`.

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
