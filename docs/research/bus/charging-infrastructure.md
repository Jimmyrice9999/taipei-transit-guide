> **This file is a LEAD FILE, not a source.** Nothing here may be published on
> its own authority. Publish the underlying source it names, having read that
> source. This corpus has been wrong before — a miscounted exit total, a wrong
> URL, a misread tunnel description, an inverted arithmetic hypothesis, a
> feeder-colour table missing a row. Verify against primary sources.

# Bus depot electrification and charging infrastructure

Research pass, 28 August 2026. No consolidated national depot-charger
registry exists — searches of thb.gov.tw, motc.gov.tw and open-data portals
found only ad hoc figures in news, Legislative Yuan documents and city
press releases. This is consistent with `docs/research/bus/models/electric-buses.md`'s
independent finding that thb.gov.tw's national electric-bus open-data page
returns an empty, apparently JS-rendered page with no extractable data.

## National public-charger counts — scope ambiguity, not bus-specific

**12,334 public charger connectors nationally as of end-July 2025, against
110,768 registered electric passenger cars, a 9.0:1 vehicle-to-charger
ratio.** Source: MOTC press release, https://www.motc.gov.tw/ch/app/data/view?module=news&id=14&serno=3df3fb48-8179-4028-944c-6f4f7e99e2e9,
PRIMARY, High. Original: "全國公共充電樁總數已達12,334槍，對應同期電動小客車登記數
110,768輛，車樁比為9.0:1" — **explicitly measured against 電動小客車 (passenger
cars), not buses.**

**13,482 connectors, 8.8:1 overall ratio, 35:1 fast-charge ratio, as of
9 December 2025**, attributed to MOTC but with no vehicle-category stated
in the article itself. Source: 鉅亨網 (CNYES), https://news.cnyes.com/news/id/6268115,
SECONDARY, Medium. **This figure is very plausibly the same general,
largely-passenger-car national series continuing to grow from the July
2025 figure above — no source confirms this either way, and it is NOT
confirmed to be bus-specific.** This matters because
`docs/research/bus/electric-bus-programme.md` presents this same figure in
a passage about bus-fleet penetration; it should not be read as
bus-specific charging infrastructure without further confirmation.

## The Forward-Looking Infrastructure public-charger programme — targets electric cars, not buses

THB's "公共充電樁設置及區域充電需求評估計畫" is a 前瞻基礎建設計畫 (Forward-Looking
Infrastructure Program) initiative, NT$9.8 billion budgeted 2023–2024,
subsidising local governments to build public charging stations. Its
companion demand-assessment tool "specifically targets electric sedans"
(電動小客車), repeatedly, per 交通部運輸研究所's own page:
https://www.iot.gov.tw/zh_tw/proclamation/news/-公共充電樁設施需求評估工具-運具電動化推動新助力-82908441,
PRIMARY, High.

**Progress figures conflict and are not reconciled**: 4,865 approved
(4,124 slow / 741 fast), 836 activated as of Dec 2024, versus 4,768
approved, 1,653 activated as of Jul 2025 (the latter from the MOTC press
release above) — the approved count appears to *drop* despite the later
date, unexplained by either source. Both figures came via WebSearch
summary, not an independently fetched primary page for this specific
comparison — carried at lower confidence pending a direct re-fetch.
Neither figure is confirmed to include buses.

## No dedicated depot-electrification budget line found

The 2030 electric-bus programme's verified FY2025 budget breakdown (from
`docs/research/bus/electric-bus-programme.md`, a Legislative Yuan primary
document) is: 購車補助 (purchase subsidy) NT$5.92bn, 營運補助 (operating
subsidy) NT$797.2m, 路網優化補助 (network optimisation subsidy) NT$130.8m,
維修保養體系 (maintenance system) NT$9.5m. **None of these four lines is
labelled "充電站建置" or "場站電動化."** 路網優化補助 is the closest candidate
but is not confirmed to include charging infrastructure specifically. This
is a genuine gap, not something further sourcing in this pass settled.

## Named depot/charging installations

**Beitou depot (北投機廠), Taipei** — a shared electric-bus charging zone
inside TRTC's Beitou MRT depot, opened 2 July 2025: 11 charging posts, 22
charging bays, managed by 大南汽車 (Danan Bus) but open to all bus
operators, coordinated by Taipei's Department of Transportation/PTO with
TRTC. Rationale given: metro power draw peaks by day, electric-bus charging
peaks by night, so sharing land and grid capacity benefits both. Source:
壹蘋新聞網, https://news.nextapple.com/life/20250702/DDD0E2E236342D6970153F6AEC9C25D1,
SECONDARY, Medium-High (re-fetched twice with consistent verbatim
results). **A Taipei DOT primary press release and a TRTC primary page for
this facility were both attempted and both returned only their
respective homepages, not the article content — not independently
confirmed by a primary source this pass.**

**南港站 (Nangang depot), Capital Bus (首都客運)** — 8 slow-charge posts, 16
charging guns total, 30 vehicles rotating through them, each charge taking
roughly 3–4 hours. Source: 報導者 (The Reporter),
https://www.twreporter.org/a/challenges-for-transport-sector-to-achieve-net-zero-electric-buses,
文字：孫文臨, 15 September 2025, SECONDARY, Medium-High (verbatim quote
confirmed on a targeted re-fetch).

**二重站 depot, New Taipei** — roughly 38 vehicles, only 5 charging bays,
requiring a charge after every run. Same source as above. Which operator
runs this depot is not clear from the fetched article — a stated gap.

**木柵二站 (Muzha depot #2), 欣欣客運 (Xinxin Bus)** — Taipei's first
electric-bus fast-charging station, opened February 2023: charges to 80%
in 20 minutes; connector is CCS1, "matching what most of Taiwan's electric
buses currently use"; explicitly built as a shared facility under central
policy, likened to a petrol-station model with bays reserved for other
operators' vehicles. Source: 聯合新聞網 (UDN),
https://autos.udn.com/autos/story/7825/7035147/, SECONDARY, Medium-High
(verbatim quotes confirmed).

## Costs and delays, from named industry sources

A charger for a large electric bus costs roughly NT$3 million per unit,
"not counting the cost of the Taipower feed-in application process" —
attributed to 台灣通運資深經理簡志華, a named individual, not a document.
Converting a depot (removing fuel tanks, applying for a Taipower feed,
installing a transformer and chargers) typically takes one to two years of
administrative process and costs tens of millions of NT dollars —
attributed to 首都客運協理張世峰. Taipower feed-in applications can take
"several months" without approval, a real difficulty for operators — same
speaker as the cost figure above. All three from 報導者, SECONDARY, Medium
(named individuals quoted in a single article, not an audited cost or an
official document).

**A specific NT$90 million Taipei subsidy figure for the Beitou station,
and a named location (宜蘭蘇澳) for the Taipower feed-in delay example, both
appeared in an initial paraphrased read of the 報導者 article and did NOT
appear when the same article was re-fetched and asked for a verbatim
quote.** Neither is published here — recorded as a caught summarizer
artefact, not a source failure, and a concrete demonstration of why a
quote-forcing re-fetch matters.

## Charging connector standard

CCS1 was selected as Taiwan's unified public fast-charging standard by an
ITRI-led (工研院) alliance of roughly 50 companies, reported 4 March 2021:
"考量消費者意見與政府建置功效，「CCS1」規格比較適合台灣環境", reasoning partly
that Taiwan's grid environment resembles the US's and that CCS1 is
compatible with the existing J1772 slow-charge base. Source: 數位時代/
BusinessNext, https://www.bnext.com.tw/article/61595/itri-ev-alliance,
SECONDARY, Medium. **This article addresses electric vehicles generally,
not buses specifically** — but bus-specific corroboration exists
independently: RAC Electric Vehicles' own current bus spec page (already
verified PRIMARY in `docs/research/bus/models/electric-buses.md`) states
the RAC-700 charges via "CCS1，雙槍" (dual guns), and the Muzha-depot UDN
article above independently states most Taiwan electric buses use CCS1.

## A city-level combined figure: Keelung

Keelung's transport bureau plans to replace all 164 remaining diesel city
buses and build 8 charging stations by 2026 (民國114–115年), combined
budget NT$1.8 billion — an audit finding that the programme is running
significantly behind schedule. Source: 自由時報,
https://news.ltn.com.tw/news/Keelung/breakingnews/5524342, SECONDARY,
Medium. **The NT$1.8 billion figure is not split between vehicles and
charging infrastructure by this source** — the underlying audit document
itself could not be located or fetched.

## Checked and failed

- **THB's own public-charger plan page**, https://www.thb.gov.tw/cp.aspx?n=12435
  — two attempts, both returned no extractable content. Checked 2026-08-28.
- **The Executive Yuan's approved 2030 plan PDF**,
  https://www.ey.gov.tw/File/BF07D400DBD4F87 — binary/compressed PDF
  stream, unreadable by the fetch tool available for this specific
  research pass. Very likely the richest primary source for the plan's
  charging-infrastructure section (smart grid blueprint, power-supply
  standards, storage feasibility) — known only from unfetched search
  summaries, not published here. A future pass with `pdftotext` access
  should retry this. Checked 2026-08-28.
- **Taipei DOT's press release on the Beitou depot** — WebFetch returned
  the department's homepage, not the article. Checked 2026-08-28.
- **TRTC's own depot-charging page**, metro.taipei/News.aspx?n=3AD91A4EC612554C
  — WebFetch returned the metro.taipei homepage, not the content. Checked
  2026-08-28.
- **審計部 (Audit Office) report on shared bus-charging zones** — two fetch
  attempts, both blank/unreadable, likely PDF binary. Search-snippet text
  suggests a 17 June 2022 requirement that new bus transfer stations
  reserve charging-pile space, and permission from 31 December 2024 for
  existing large facilities to install public bus chargers — **not
  published, snippet only, not independently verified.** Checked
  2026-08-28.
- **New Taipei farmland-conversion-fee waiver for bus charging stations**
  — both source news URLs (udn.com) returned HTTP 404; the traffic.ntpc.gov.tw
  press-release listing showed no matching release on its first page.
  This entire claim rests only on unfetched search-snippet text and is
  not published. Checked 2026-08-28.

## Stated gaps

No confirmed bus-specific national vehicle-to-charger ratio exists in any
primary source found — every confirmed ratio is explicitly measured
against passenger cars. No confirmed dedicated budget line for depot
electrification, distinct from vehicle-purchase subsidy, exists in any
primary document examined. The Executive Yuan's own plan PDF, likely the
richest source for this whole subject, remains unread. Whether Beitou's or
Nangang's chargers are CCS1 is not stated by any source fetched — only the
Muzha depot source states connector type explicitly. Which operator runs
二重站 is unclear from the fetched material.
