# Bus — Hualien regional network

**Research file — leads, not sources.** Every promoted statement below was checked against the full official page or structured primary snapshot named in the record.

**Version 1.0 — 7 September 2026**
**Status: current official verification for `content/bus/regional/hualien.md`.**

## What is established

### Structured route layer

- **The national TDX city-scoped Hualien snapshot contains 9 route records and 31 supplied variants when retrieved on 7 September 2026.** **Source:** *Hualien city-bus route snapshot*, titleOriginal `花蓮縣公車路線資料（TDX Route/City/Hualien）`, Ministry of Transportation and Communications TDX, `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Hualien?$format=JSON`, PRIMARY, High confidence because the committed national acquisition preserves the full response and counts its RouteUID records and SubRoutes arrays. The counts are source-record measurements, not a claim that Hualien has 31 permanent unique routes.

### City and highway bus scope

- **The county’s current Hualien Yo真行 TPASS guide names Taroko Bus for city routes 301, 302, 302A, 303, 305 and 305A, and Ubus for 308, 308A, 311 and 311A.** **Source:** *TPASS usage guide*, titleOriginal `TPASS使用指南`, Hualien County Government, `https://www.hly.tw/tpass/usage`, PRIMARY, High confidence because the full current page was fetched on 7 September 2026. Original-language basis: the `市區公車路線` section naming `太魯閣客運` and `統聯客運` with those route labels.

- **The same guide lists Hualien-area highway-bus route families operated by Ubus, Xingdong Bus and East Taiwan Bus, including routes reaching Guangfu, Ruisui, Fengbin, Xiuguluan, Jingpu, Chenggong, Fuli and Taitung.** **Source:** the same full page. Original-language basis: the `公路客運路線` section and its operator headings `統聯客運`, `興東客運` and `東台灣客運`.

### Hualien public-transport pass

- **The county’s 199 plan covers unlimited, mileage-independent use of TRA within Hualien County and city-bus routes for 30 days; its 399 plan adds Hualien-area highway-bus routes. Neither plan includes all Taiwan Tourist Shuttle routes.** **Source:** the same full TPASS guide. Original-language basis: `199方案 售價: 199元`, `399方案 售價: 399元`, `使用期間為30日`, and `不包含臺灣好行所有路線`.

- **The guide identifies 25 TRA stations in the pass’s use scope but 22 designated TRA station sales locations.** **Source:** the same full page. Original-language basis: the use-scope line ending `共25站` and the sales-location line ending `共22站`. These are retained as different fields rather than silently treating one as an error.

### Interchange and evaluation

- **Hualien Yo真行 describes Hualien Transfer Station as the core around which its MaaS service connects public-transport information.** **Source:** *About MaaS*, titleOriginal `關於MaaS`, Hualien County Government, `https://www.hly.tw/about`, PRIMARY, High confidence because the full page was fetched on 7 September 2026. Original-language basis: `以花蓮轉運站為核心整合各公共運具間資訊串接功能`.

- **Hualien County’s Construction Department announced on 15 July 2026 that the 114年度 Hualien city-bus operations and service-evaluation project’s results report had been published as attachments.** **Source:** *Announcement of the 114年度 Hualien city-bus operations and service-evaluation results report*, titleOriginal `「114年度花蓮縣市區公車營運及服務評鑑計畫委託服務案」成果報告書公告`, Hualien County Government Construction Department, `https://pw.hl.gov.tw/Detail_sp/309bee78fdcb45d5af2ca51f02c1062e`, PRIMARY, High confidence because the full notice was fetched on 7 September 2026. Original-language basis: `最新消息 2026/07/15` and `成果報告書如附件`.

## Conflicts

- **The TPASS guide gives two different station-list counts: 25 stations in the validity scope and 22 stations where the pass can be purchased through station staff.** They appear to measure use eligibility and sales-channel coverage, respectively. No correction is made without a source that defines them as the same list.

## Checked and failed

- **114年度 evaluation score table** — Checked 2026-09-07. The county notice fetched successfully and linked an inner report PDF, but the PDF URL returned a cache-miss/fetch failure in the full-page source tool. No operator score, ranking or category result is promoted from the attachment listing.
- **A complete current Hualien route timetable and fare matrix** — Checked 2026-09-07. The full TPASS guide identifies included route families and operators but is not a departure timetable or route-by-route fare table. Those values remain TBC.

## Stated gaps

- The route-record and supplied-variant counts are a dated TDX discovery measurement, not a permanent unique-route total.
- Current route-by-route departure times, cash fares, concessions, vehicle allocation, operator contract terms and the contents of the 114年度 evaluation report remain TBC until the relevant official timetable, fare, procurement or report file can be fetched and read.

## Sources and archive status

All promoted sources are official government/TDX pages fetched or represented by the committed structured snapshot on 7 September 2026. No archive snapshot URL was captured. The failed evaluation PDF fetch is retained as a checked-and-failed seam rather than replaced with a search-result summary.
