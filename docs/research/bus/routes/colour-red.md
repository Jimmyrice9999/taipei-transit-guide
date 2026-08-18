> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Red-line feeder routes — research

**Run date: 18 August 2026.** This report covers the 40 records in the merged
TDX snapshot classified `colour-red`. No images were fetched.

## Audit — official catalogue and false-prefix matches

The full Taipei/New Taipei government bus catalogue has the heading
`捷運紅線接駁公車` and lists 39 labels: 紅2, 紅3, 紅3區, 紅5, 紅7, 紅7區, 紅9,
紅10, 紅10區, 紅12, 紅13, 紅15, 紅19, 紅22, 紅23, 紅25, 紅25區, 紅26,
紅27, 紅28, 紅28直, 紅29, 紅30, 紅31, 紅33, 紅35, 紅35區, 紅36, 紅37,
紅37行經海洋都心社區, 紅38, 紅39, 紅50, 紅51, 紅53, 紅55, 紅55區, 紅57
and 紅68. The TDX group contains those records plus 紅68預, for 40 total.
Both values are retained: the catalogue is the official class roster it
publishes, while TDX is the normalized snapshot used by the site.

- **Source:** “Taipei/New Taipei bus route catalogue” / `titleOriginal`:
  `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government /
  `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=all
- **Kind/confidence:** PRIMARY; High — the full government catalogue was read,
  including the red-feeder section.
- **Original-language text read:** `捷運紅線接駁公車` followed by the 39
  labels listed above.

- **Source:** “TDX bus data” / `titleOriginal`:
  `交通部運輸資料流通服務平臺`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平臺`
- **URL:** https://tdx.transportdata.tw/
- **Kind/confidence:** PRIMARY; High for the committed normalized snapshot —
  the repository’s `routes.json` contains 40 `colour-red` records, including
  `紅68預`.
- **Original-language text read:** the route identity `紅68預` in the committed
  TDX-derived record.

The false-prefix audit searched every normalized route name containing `紅`.
The 40 accepted red-group names are: 紅10區, 紅10, 紅12, 紅13, 紅15, 紅19,
紅2, 紅22, 紅23, 紅25區, 紅25, 紅26, 紅27, 紅28, 紅28直, 紅29, 紅3,
紅30, 紅31, 紅33, 紅35, 紅35區, 紅36, 紅37行經海洋都心社區, 紅37, 紅38,
紅39, 紅5, 紅50, 紅51, 紅53, 紅55, 紅55區, 紅57, 紅68預, 紅68, 紅7區,
紅7 and 紅9. Two names were excluded because `紅` is descriptive or part of
another place/service name rather than the route’s red-feeder prefix:

- `石門-捷運紅樹林站` / route 17975 — group `new-taipei`; `紅樹林` is the
  station/place name, not a red route prefix.
- `臺北觀光巴士紅線` / route 17800 — group `unclassified`; `紅線` describes
  the sightseeing service, not a record in the red MRT-feeder class.

- **Source:** “TDX bus data” / `titleOriginal`:
  `交通部運輸資料流通服務平臺`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平臺`
- **URL:** https://tdx.transportdata.tw/
- **Kind/confidence:** PRIMARY; High for the normalized name/group comparison —
  all 1,051 committed route records were checked by `names.zh_tw` and group.
- **Original-language text read:** `石門-捷運紅樹林站` and
  `臺北觀光巴士紅線`, contrasted with the 40 records whose names begin with
  `紅` and whose group is `colour-red`.

## Batch 1 — 紅10區, 紅10, 紅12, 紅13, 紅15 and 紅19, checked 18 August 2026

The six current official pages were fetched in full. They establish current
route identity, termini, service windows, fare class, operator contacts and the
current school-day variant on 紅19. They do not establish route opening history,
the original corridor decision or dated operator changes; those fields remain
TBC rather than being inferred from a current route page.

### 紅10區 / R10Shuttle

The full official route-and-stop page gives `社子 - 捷運劍潭站`, weekday service
0700–1800, holiday suspension, one-section fare and `光華巴士海專站` as the
service contact.

- **Source:** “R10Shuttle route and stop information” / `titleOriginal`:
  `紅10區路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111001020
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 社子 - 捷運劍潭站`;
  `頭末班車 : [平日] 0700 - 1800 / [假日] 停駛`;
  `收費方式 : 一段票`; and `業者服務電話 : 光華巴士海專站:02-2810-8193`.

### 紅10 / R10

The full official schedule page gives `台北海大 - 捷運劍潭站`, weekday and
holiday service 0530–2340, one-section fare and `光華巴士海專站` as the
service contact.

- **Source:** “R10 route schedule” / `titleOriginal`: `紅10班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001000
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 台北海大 - 捷運劍潭站`;
  `頭末班車 : [平日] 0530 - 2340 / [假日] 0530 - 2340`;
  `收費方式 : 一段票`; and `業者服務電話 : 光華巴士海專站:02-2810-8193`.

### 紅12 / R12

The full official schedule page gives `天文科學館 - 捷運石牌站`, weekday and
holiday service 0600–2215, one-section fare, headway notes and
`中興巴士北士科站` as the service contact.

- **Source:** “R12 route schedule” / `titleOriginal`: `紅12班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 天文科學館 - 捷運石牌站`;
  `頭末班車 : [平日] 0600 - 2215 / [假日] 0600 - 2215`;
  `收費方式 : 一段票`; and `業者服務電話 : 中興巴士北士科站:02-2820-2588`.

### 紅13 / R13

The full official schedule page gives `八里 - 捷運關渡站`, weekday service
0600–2110, holiday service 0745–2110, one-section fare and `淡水客運八里站`
as the service contact.

- **Source:** “R13 route schedule” / `titleOriginal`: `紅13班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411001300
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 八里 - 捷運關渡站`;
  `頭末班車 : [平日] 0600 - 2110 / [假日] 0745 - 2110`;
  `收費方式 : 一段票`; and `業者服務電話 : 淡水客運八里站:02-2610-4393`.

### 紅15 / R15

The full official schedule page gives `天母 - 社子`, weekday and holiday
service 0600–2200, one-section fare and `中興巴士天母站` as the service
contact.

- **Source:** “R15 route schedule” / `titleOriginal`: `紅15班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001500
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 天母 - 社子`;
  `頭末班車 : [平日] 0600 - 2200 / [假日] 0600 - 2200`;
  `收費方式 : 一段票`; and `業者服務電話 : 中興巴士天母站:02-2831-0736`.

### 紅19 / R19

The full official schedule page gives `天母 - 捷運石牌站`, weekday and holiday
service 0630–2315, one-section fare and `光華巴士天東站` as the service
contact. It also records a weekday 0700 return trip serving `天母國中` except
during school holidays and non-school days.

- **Source:** “R19 route schedule” / `titleOriginal`: `紅19班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111001900
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 天母 - 捷運石牌站`;
  `頭末班車 : [平日] 0630 - 2315 / [假日] 0630 - 2315`;
  `收費方式 : 一段票`; `業者服務電話 : 光華巴士天東站:02-2872-1527`; and
  `平常日0700班次返程停靠「天母國中」站位(寒暑假期間及天母國中校方非上課日除外)`.

## Batch 2 — 紅2, 紅22, 紅23, 紅25區, 紅25 and 紅26, checked 18 August 2026

The six current official pages were fetched in full. They establish current
route identity, termini, service windows, fare class, operator contacts and
current timetable variants. They do not establish route opening history, the
original corridor decision or dated operator changes; those fields remain TBC.

### 紅2 / R2

The full official schedule page gives `汐止社后 - 捷運圓山站`, weekday and
holiday service 0600–2300, one-section fare and `光華巴士北峰站` as the service
contact.

- **Source:** “R2 route schedule” / `titleOriginal`: `紅2班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 汐止社后 - 捷運圓山站`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 2300`;
  `收費方式 : 一段票`; and `業者服務電話 : 光華巴士北峰站:02-8693-2251`.

### 紅22 / R22

The full official schedule page gives `八里 - 捷運關渡站`, weekday service
0530–2330, holiday service 0545–2330, one-section fare and
`淡水客運八里站` as the service contact. It records 07:03 return and 17:19
outbound detours and 30-minute service after 22:00.

- **Source:** “R22 route schedule” / `titleOriginal`: `紅22班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 八里 - 捷運關渡站`;
  `頭末班車 : [平日] 0530 - 2330 / [假日] 0545 - 2330`;
  `收費方式 : 一段票`; `業者服務電話 : 淡水客運八里站:02-2610-4393`; and
  `07:03 返程繞駛、17:19 往程繞駛；22:00後30分乙班次`.

### 紅23 / R23

The full official schedule page gives `淡水 - 關渡`, weekday and holiday
service 0550–0000, one-section fare and `三重客運淡水站` as the service
contact.

- **Source:** “R23 route schedule” / `titleOriginal`: `紅23班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002300
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 淡水 - 關渡`;
  `頭末班車 : [平日] 0550 - 0000 / [假日] 0550 - 0000`;
  `收費方式 : 一段票`; and `業者服務電話 : 三重客運淡水站:02-2805-4701`.

### 紅25區 / R25Shuttle

The full official schedule page gives `南港 - 捷運南京復興站`, weekday service
0940–2110, holiday service 0830–2030, one-section fare and
`首都客運經貿站` as the service contact.

- **Source:** “R25Shuttle route schedule” / `titleOriginal`: `紅25區班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111002520
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 南港 - 捷運南京復興站`;
  `頭末班車 : [平日] 0940 - 2110 / [假日] 0830 - 2030`;
  `收費方式 : 一段票`; and `業者服務電話 : 首都客運經貿站:02-2654-6782`.

### 紅25 / R25

The full official route-information page gives `南港 - 捷運北門站`, weekday
service 0550–2200, holiday service 0700–2130, one-section fare and
`首都客運經貿站` as the service contact.

- **Source:** “R25 route information” / `titleOriginal`: `紅25路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/EBus/VsSimpleMap?routeid=0111002500
- **Kind/confidence:** PRIMARY; High — full official route-information page read.
- **Original-language text read:** `起訖站名：南港 - 捷運北門站`;
  `平日：0550~2200`; `假日：0700~2130`; `收費方式：一段票`; and
  `業者服務電話 : 首都客運經貿站:02-2654-6782`.

### 紅26 / R26

The full official schedule page gives `漁人碼頭 - 捷運淡水站`, weekday and
holiday service 0600–0000, one-section fare and `指南客運淡海站` as the service
contact. It records a current working from 淡海 that does not enter 漁人碼頭
before 08:00 or after 22:00.

- **Source:** “R26 route schedule” / `titleOriginal`: `紅26班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002600
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 漁人碼頭 - 捷運淡水站`;
  `頭末班車 : [平日] 0600 - 0000 / [假日] 0600 - 0000`;
  `收費方式 : 一段票`; `業者服務電話 : 指南客運淡海站:02-2805-2262`; and
  `08:00前與22:00後自淡海發車(不進漁人碼頭)`.

## What remains TBC

- **All twelve batch-1/2 routes:** opening date, earlier alignment, original
  corridor rationale and dated operator transfers are TBC.
- **紅19:** its current school-day return stop variant is established; its
  creation date and rationale are TBC.
- **紅22:** the current timed detours and late-evening service are established;
  their creation dates and rationale are TBC.
- **紅26:** the current no-fisherman-wharf short working is established; its
  creation date and rationale are TBC.

## Checked and failed

- **Dated opening, corridor-rationale and operator-change records for batches 1–2** —
  full current route pages were checked, but no dated primary history record was
  promoted from those pages. Current service data was not treated as an origin
  story. Checked 18 August 2026.

## Stated gaps

- The TDX snapshot has no route-length, service-span or headway fields for these
  content pages; route-specific timetable values are left in prose with their
  official eBus source, while structural specs remain TBC.
- The catalogue/TDX roster difference for 紅68預 needs a primary notice or a
  later catalogue revision to explain whether it is a reserved, seasonal or
  otherwise separately treated working.
