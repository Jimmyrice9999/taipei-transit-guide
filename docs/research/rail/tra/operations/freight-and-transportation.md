# Taiwan Railways freight and transportation statistics — research report

> Corpus warning: files under `docs/research/` are leads and working notes, not sources. Every claim below was checked against the linked primary report.

**Checked:** 27 August 2026. **Subject:** TRA aggregate freight volume, freight work, revenue and transportation measures.

## What is established

### June 2026 freight and transportation report

- **English title:** Monthly Statistical Report of Taiwan Railway — June 2026
- **Original title:** `臺灣鐵路統計月報`
- **Publisher:** National Taiwan Railways Corporation (`國營臺灣鐵路股份有限公司`)
- **URL:** https://www.railway.gov.tw/tra-tip-web/tip/file/7bf499cd-6c63-4277-ac88-7dc3807f8d87
- **Class:** PRIMARY
- **Confidence:** High for the aggregate values and table scope printed in the full 45-page report; the report does not establish a current station-to-station freight register.
- **Original-language basis:** `表5 貨運狀況`; `表6 貨品別貨運噸數`; `表7 貨品別延噸公里`; `表8 運輸狀況`; `表9 車種別列車次數`; `表10 車種別列車公里`; `表11 車種別車輛公里`.

The report's contents establish seven separate freight and transportation table families: total freight traffic, freight tonnes by goods, tonne-kilometres by goods, transportation status, train counts by type, train kilometres by type and car kilometres by type.

The report's June 2026 freight section records 296,529 metric tonnes, an average of 9,884 tonnes per day, and a 37.78% decrease from June 2025. The January–June 2026 cumulative total is 2,039,101 tonnes, 33.83% lower than the same period in 2025.

- **Original-language basis:** `貨運噸數：296,529 公噸，較上月減少 8.54%，較去年同月減少 37.78%；本年1至6月累計 2,039,101 公噸，較去年同期減少 33.83%`.

The report records June freight work of 15,001,347 tonne-kilometres, a daily average of 500,045 tonne-kilometres, June freight revenue of NT$28,561,095, and a daily average freight revenue of NT$952,037.

- **Original-language basis:** `延噸公里：15,001,347 噸公里，平均每日 500,045 噸公里`; `貨運收入：28,561,095 元，平均每日 952,037 元`.

The report gives an average freight journey of 50.6 km for June and 52.2 km for January–June. It gives June freight-car kilometres of 1,360,940, a daily average of 45,365, freight-car utilisation of 42.67% and freight-train punctuality of 100.00%.

- **Original-language basis:** `平均每一貨運旅客公里 50.6 公里`; `貨車公里：1,360,940 車公里，平均每日 45,365 車公里`; `貨車使用率 42.67%`; `貨運列車準點率 100.00%`.

The June goods table prints 119,893 tonnes for cement and 106,345 tonnes for limestone. These are commodity components within the report's aggregate freight table, not a station-origin/destination register.

- **Original-language basis:** the June row of `表5 貨運狀況` prints `合計 296,529`, `水泥 119,893` and `石灰石 106,345`.

The narrative attributes the June month-on-month freight-tonnage decrease to limestone and special goods, the year-on-year decrease to limestone, aggregate and cement, and the January–June cumulative decrease to cement, aggregate and limestone.

- **Original-language basis:** `本月貨運噸數較上月減少，主要為石灰石及特種貨物減少所致`; `較去年同月減少，主要為石灰石、砂石及水泥減少所致`; `本年累計貨運噸數較去年同期減少，主要為水泥、砂石及石灰石減少所致`.

## Conflicts

No direct numeric conflict was found in the opened report. June values, January–June values and annual comparison values are different time scopes, while the goods rows are components of the total, so they are not reconciled as competing totals.

## Checked and failed

- **Station-to-station freight origins and destinations** — checked 27 August 2026. The full monthly report provides aggregate freight and goods tables, but not a joined movement register.
- **Current freight-terminal inventory** — checked 27 August 2026. The opened report does not provide an active terminal list with facility status or handling capability.
- **Current wagon-by-commodity or wagon-by-route roster** — checked 27 August 2026. The transportation tables provide aggregate car-kilometre and utilisation measures, not vehicle assignments.
- **Current freight timetable and working-day rules** — checked 27 August 2026. The opened monthly report is a statistical report and does not provide a dated freight operating plan.

## Stated gaps

- A current operator freight-movement export with origin, destination, commodity and date fields would settle station-level freight flows.
- A dated TRA terminal/facilities register would settle which freight sites are active and what each can handle.
- A current wagon and service assignment register would settle fleet and route questions without inferring them from aggregate utilisation.
- A dated freight timetable or operating circular would settle service days, paths and current freight train patterns.

## Update, 29 August 2026 — a 74-year decline, named customers, revenue share

TRA's 2025 Statistical Yearbook (臺灣鐵路統計年報), a ~9.6MB PDF, resisted
both WebFetch's HTML pipeline and this session's PDF-to-text tooling but
rendered successfully via the Read tool's page-image capability — worth
noting for future sessions on this project, since the SKILL.md's
`pdftotext` workaround assumes a Bash tool this scout did not have access
to.

- **Table 5 (貨運概況), 1951–2025 unbroken annual series.** PRIMARY. Peak
  17,000,403 tonnes (1976); 16,480,600 (1996); 12,371,444 (2001);
  10,661,020 (2011); 5,193,219 (2025) — roughly a 70% fall from peak.
  Table 12 gives freight-car counts over the same span: 5,655 (1971) to
  1,428 (end of 2025).
- **Table 15 (運輸價格), tariff-history footnote**: `81年1月1日起停辦零擔業務`
  — L.C.L. (less-than-carload) freight service discontinued 1 January
  1992. Corroborated internally by Table 5's own tonnage series (a
  non-zero L.C.L. column through 1991, none after).
- **Tables 12/13/14, repeated footnote**: `柴電機車含台泥自備車6輛` — Taiwan
  Cement Corporation (台泥) operates 6 self-supplied diesel-electric
  locomotives on TRA's network. The only specific freight customer named
  in any primary source checked, though only as a locomotive-count
  footnote, not a route or contract description.
- **Table 1 vs. Table 10, route-length conflict**: the Hualien Port Line
  (the network's one freight-only segment) is 7.2 km per Table 1's
  route-length classification and 7.4 km per Table 10's line-and-track
  length — both in the same 2025 yearbook. Table 1 carries a footnote
  that its figure is operating-extended-km divided by operating days,
  which could explain the difference, but the yearbook does not draw that
  connection itself.
- **Table 6, station-level freight**: North Link Line shows by far the
  largest 2025 line-total freight (4,670,163 t loaded / 2,039,935 t
  unloaded) while every individual station under it shows zero — how the
  line-total is generated is not explained by anything read. Possibly
  related to the Hualien Port Line branching off Xincheng (a North Link
  Line station), per an unverified zh.wikipedia lead (below), but not
  confirmed.
- **Table 16 (營業收支)**: freight revenue is 1.21% of total revenue
  (against Grand Total including non-operating income) or 1.26% against
  operating revenue alone (calculated from the table's raw NT$ figures,
  not itself printed). Freight revenue rose 6.65% in 2025 even as tonnage
  fell 4.35%; Table 15 separately dates a freight tariff increase to
  23 June 2025 — juxtaposed, not asserted as cause-and-effect.
- **TRA Freight Overview reporting-form template (臺鐵貨運概況)**, PRIMARY,
  blank template only. Confirms freight statistics are classified by
  raw-material/processed-goods category, compiled from TRA's own freight
  data warehouse, and formally reported to MOTC's Statistics Department.
- **zh.wikipedia leads, NOT independently verified**: 北迴線 (North Link
  Line) attributes 1974 priority construction to Asia Cement's Xincheng
  plant cement transport needs; 花蓮港線 (Hualien Port Line) describes
  "east-sand-west-transport," China Steel running 10 daily round trips
  Hualien Port–Heren and Asia Cement running 18 daily round trips of bulk
  cement Hualien Port–Xincheng, passenger service ending 1982, and the
  Hualien Station–Hualien Port section discontinued in 2011. None of
  these figures were chased to their own footnoted primary sources this
  pass; reported as leads only, not used as sourced content-page facts.

### Checked and failed (this pass)

- TRA company annual report (臺鐵公司報告書, two URLs) — WebFetch returned
  binary/unreadable; unlike the Statistical Yearbook, the Read tool's
  page-image rendering also failed (`pdftoppm is not installed`) for this
  specific file, for reasons not established (possibly more image/photo
  content than the plain statistical-table Yearbook PDF).
- MOTC Statistics Department rail freight portal
  (`stat.motc.gov.tw/mocdb/stmain.jsp?sys=100`) — DNS failure, domain does
  not resolve.
- Asia Cement's own zh.wikipedia article — checked for TRA freight
  content; covers the Xincheng plant's 1973 establishment and a
  mining-rights controversy, but nothing about rail shipping.
- 臺灣鐵路管理局貨運列車 (a guessed article title for a TRA freight-train
  Wikipedia article) — HTTP 404, does not exist.
- No public TRA freight-service page (route/customer marketing page,
  analogous to passenger ticketing pages) was found via the homepage's
  full link inventory — recorded as not found, not confirmed absent.
- WebSearch — exhausted after 4 queries at the start of this pass; no
  Chinese news-archive search (自由時報/聯合報/中央社) was possible for this
  subject, which the sourcing discipline places first among secondary
  sources. The China Steel/Asia Cement round-trip figures and the North
  Link Line construction-motive claim above remain unverified for this
  reason.
