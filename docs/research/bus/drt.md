> **This file is a LEAD FILE, not a source.** Nothing here may be published on
> its own authority. Publish the underlying source it names, having read that
> source. This corpus has been wrong before — a miscounted exit total, a wrong
> URL, a misread tunnel description, an inverted arithmetic hypothesis, a
> feeder-colour table missing a row. Verify against primary sources.

# Happiness Bus, Happiness Taxi and demand-responsive transport

**Checked 6 September 2026.** This pass establishes the national Highway
Bureau inventory and one dated national programme measurement. It does not
claim that the live query page can be reduced to one current total without
extracting all of its filter results.

## What is established

### 1. The Highway Bureau publishes a national route inventory

- **Claim.** The Highway Bureau has an official searchable page titled
  `幸福巴士及幸福小黃營運資訊` that exposes all 22 first-order jurisdictions as
  filters, followed by township/district filters and a table with service type,
  area, route name, route stops and modification date.
- **Source.** “Happiness Bus and Happiness Taxi operating information” /
  `titleOriginal`: `幸福巴士及幸福小黃營運資訊`
- **Publisher.** Highway Bureau, MOTC / `交通部公路局`
- **URL.** https://www.thb.gov.tw/News.aspx?_CSN=4106&n=10738&sms=13903
- **Kind.** PRIMARY. **Confidence.** High — the full page was fetched and read.
- **Original-language evidence.** `類型 | 區域 | 路線名稱 | 路線行駛站點 | 修改時間`;
  the page lists the jurisdiction filters from `基隆市` through `連江縣` and
  shows `幸福巴士 | 峨眉鄉 | 峨眉線` with flexible reservation wording and
  `114-12-01` as its route modification date. The page footer says
  `更新日期 115-08-19`.

The inventory therefore supports a route/service discovery layer, but the
route rows are not interchangeable with ordinary fixed-route city-bus rows.
The same page explicitly mixes `幸福巴士` and `幸福小黃`; the guide keeps
those categories separate from ordinary city buses.

### 2. A dated MOTC measurement gives a national programme snapshot

- **Claim.** As of February 2026, the MOTC reported 507 Happiness Bus services
  (including Happiness Taxi) across 193 townships/districts, including 247
  routes in 64 rural areas, and a rural public-transport coverage rate of
  95.10%.
- **Source.** “MOTC 115 annual unit settlement / public-transport
  implementation report” /
  `titleOriginal`: `交通部115年度單位決算`
- **Publisher.** Ministry of Transportation and Communications / `交通部`
- **URL.** https://www.motc.gov.tw/ch/app/data/doc?aplistdn=&detailNo=1488795645681602560&id=811&module=policy&preview=&serno=ac2163a7-13ef-4a20-92a9-2de9f4129bcd&type=s
- **Kind.** PRIMARY. **Confidence.** High — the complete official PDF was
  fetched and the relevant page was text-extracted.
- **Original-language sentence.** `截至115年2月止共計推動全國193個鄉鎮區共507條
  路線（含64個偏鄉，247條路線）幸福巴士（含幸福小黃）服務；全國偏鄉地區公路公共運輸涵蓋率達95.10％。`

This is a dated programme measurement, not a September 2026 live total. The
Highway Bureau inventory page and the MOTC report are kept as two different
measurements rather than combined.

### 3. Flexible reservation is an explicit policy direction

- **Claim.** The same MOTC report says the programme is reviewing conversion
  from fixed operation to flexible reservation service, with a 2026 target of
  completing 40 fixed routes converted to flexible reservation service.
- **Source.** The MOTC report above, page 77.
- **Kind.** PRIMARY. **Confidence.** High — same full PDF fetch.
- **Original-language sentence.** `檢討幸福巴士固定營運模式轉型彈性預約服務，以切符民眾
  對班次、服務時段、服務區域之實際需求，並以115年累計完成40處固定路線轉彈性預約服務目標推動。`

### 4. Eligibility-limited mobility remains a distinct research seam

The Highway Bureau page is an open public-service inventory, not an eligibility
crosswalk for rehabilitation buses or accessible taxis. The existing municipal
pages are therefore not evidence for a national eligibility rule. The guide
keeps those programmes in a separate accessibility lane and leaves the national
operator/eligibility crosswalk TBC.

## Conflicts and measurement boundaries

- **507 route services (MOTC, cutoff February 2026)** versus the **live Highway
  Bureau route table**, which is a queryable inventory whose full filtered row
  set was not extracted in this pass. These are not conflicting counts: one is
  a dated programme total and one is a live discovery interface.
- Tainan’s municipal 小黃公車 counts remain **52** in the full Q&A table and
  **49** in the 5 August 2026 expansion notice. Those are retained on the
  content page as a separate local conflict and are not folded into the MOTC
  national figure.

## Checked and failed

- **Current live national total** — Checked 6 September 2026. The Highway
  Bureau page fetched successfully, but its default HTML response contains one
  filtered route row rather than a complete unfiltered export. No current
  national total is asserted from a search snippet or from the visible default
  row.
- **National eligibility/operator crosswalk for 復康巴士 and accessible taxi
  programmes** — Checked 6 September 2026. The official municipal material
  found in this pass is jurisdiction-specific; no single primary national
  crosswalk was fetched. The content layer retains TBC.

## Stated gaps

The next useful source pull is a complete Highway Bureau export/API or a
jurisdiction-by-jurisdiction filtered fetch, preserving each row’s service type,
township, route name, reservation status and modification date. A second pass
should fetch the commissioning authority and booking rules for accessible
transport in each jurisdiction before any eligibility statement is generalized.
