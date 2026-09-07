> **This file is a LEAD FILE, not a source.** Nothing here may be published on
> its own authority. Publish the underlying source it names, having read that
> source. Verify against primary sources.

# Chiayi City and County regional buses

**Checked 7 September 2026.** This pass separates Chiayi City and Chiayi
County. The TDX route snapshot was already committed as a national structured
pull; full official City/County and operator pages were fetched for the
editorial overlay.

## What is established

- **Claim.** The national TDX snapshot contains 11 Chiayi City route records
  and 29 supplied SubRoutes variants, and 41 Chiayi County route records and
  104 supplied SubRoutes variants.
- **Sources.** `Chiayi City city-bus route snapshot` and `Chiayi County city-bus
  route snapshot`.
- **Publisher.** Taiwan MOTC TDX / `交通部運輸資料流通服務平臺`.
- **URLs.**
  `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Chiayi?$format=JSON`
  and
  `https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/ChiayiCounty?$format=JSON`.
- **Kind.** PRIMARY. **Confidence.** High — the committed national JSON was
  acquired from TDX and the route/variant definitions are explicit.
- **Original-language basis.** The TDX source fields are RouteUID-oriented
  route records and `SubRoutes`; the national snapshot defines variants as the
  supplied SubRoutes array records rather than timeless unique routes.

- **Claim.** The official Highway Bureau directory assigns Chiayi City urban
  buses to Chiayi City Transportation Department and Chiayi County urban buses
  to Chiayi County Public Bus Office.
- **Source.** `Urban bus information` / `市區公車資訊`.
- **URL.** https://www.taiwanbus.tw/eBUSPage/link3.aspx
- **Kind.** PRIMARY. **Confidence.** High — full page fetched and read.
- **Original-language basis.** The table labels `嘉義市市區公車`, `主管機關
  嘉義市政府交通處`, and separately `嘉義縣市區公車`, `主管機關 嘉義縣公共汽車管理處`.

- **Claim.** Chiayi County's official iBus site is a county-developed service
  with dynamic bus, stop, transfer-planning and Happiness Bus reservation
  surfaces.
- **Source.** `Chiayi County iBus` / `嘉義縣iBus`.
- **URL.** https://chiayiibus.cyhg.gov.tw/Links
- **Kind.** PRIMARY. **Confidence.** High — full HTML fetched directly with
  curl after the web reader's protocol-error response.
- **Original-language basis.** The page metadata describes a `嘉義縣政府所開發`
  smart-bus site, and the navigation exposes `公車動態查詢`, `站牌查詢`,
  `轉乘規劃` and `預約幸福巴士`.

- **Claim.** The County reservation page requires route/provider/contact and
  boarding/alighting details, and publishes a 15-kilometre NT$100 example for
  Puzi, Dongshi and Budai; the fetched interface also displayed a maintenance
  notice directing users to telephone reservation.
- **Source.** `Chiayi County iBus reservation interface` / `嘉義縣iBus預約幸福巴士`.
- **URL.** https://chiayiibus.cyhg.gov.tw/DynamicBusQuery
- **Kind.** PRIMARY. **Confidence.** High — full HTML fetched directly.
- **Original-language basis.** The page displays `預約系統維修中請改用電話預約` and
  the note `朴子市、東石鄉及布袋鎮目前可選擇任一地點上下車，15公里以內單次收費100元`.

- **Claim.** Chiayi Bus's full BRT page links 7211, 7212 and a 7212 early-
  morning branch, and its stop table names Chiayi Park, Chiayi rear-station
  transfer centre, HSR Chiayi Station and Puzi Transfer Station.
- **Source.** `BRT bus rapid transit` / `BRT公車捷運`.
- **URL.** https://www.cibus.com.tw/brt3
- **Kind.** PRIMARY. **Confidence.** High — full operator page fetched and read.
- **Original-language basis.** The page links `7211路線`, `7212路線` and
  `7212支線 早上05:50班次`; its table starts with `嘉義公園` and `嘉義縣朴子轉運站`,
  and includes `台鐵嘉義後站` and `高鐵嘉義站`.

## Conflicts

- The TDX structured counts and the Highway Bureau/operator publication layers
  do not define one equivalent route universe. The guide keeps 11/29 and
  41/104 as TDX measurements and does not reconcile them with operator or
  reservation categories.
- The County iBus interface's online-maintenance notice is a dated interface
  state, not proof that all Happiness Bus booking remains telephone-only.

## Checked and failed

- **Current permanent City/County route total across all publication layers** —
  checked 7 September 2026: the sources use TDX RouteUID/SubRoutes, operator
  BRT surfaces and county reservation categories; no equivalent total was found.
- **Complete City/County operator roster and fare matrix** — checked 7 September
  2026: the fetched official pages expose partial operator/route and flexible
  fare evidence, not a unified current matrix.
- **Official Chiayi City route portal with a current complete route table** —
  checked 7 September 2026: the Highway Bureau directory identifies the city
  authority, and the Chiayi Bus operator page exposes BRT routes, but no single
  current city-government route export was located in this pass.
- **Timed rail/HSR interchange** — checked 7 September 2026: the Chiayi Bus
  page names the rear-station transfer centre and HSR Chiayi Station as stops,
  but does not publish a coordinated transfer guarantee; no multimodal join is
  asserted from this page alone.

## Stated gaps

The next useful sources are Chiayi City Transportation Department's current
route/fare pages, county operator timetable pages, and route-specific station
or stop evidence for any multimodal joins. The current page intentionally adds
regional structure and an operator corridor overlay without claiming those
gaps are resolved.
