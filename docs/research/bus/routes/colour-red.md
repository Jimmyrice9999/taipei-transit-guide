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

## Batch 5 — 紅37, 紅38, 紅39, 紅5, 紅50 and 紅51, checked 18 August 2026

The six current official pages were fetched in full. They establish current
route identity, termini, service windows, fare class, operator contacts and
current timetable variants. They do not establish route opening history, the
original corridor decision or dated operator changes; those fields remain TBC.

### 紅37 / R37

The full official schedule page gives `淡海新市鎮 - 捷運淡水站`, weekday and
holiday service 0540–2330, one-section fare and `淡水客運新市站` as the service
contact. It records weekday peak/off-peak headways of 6–10/12–15 minutes,
holiday peak/off-peak headways of 10–30 minutes, and says trips detouring via
`淡水商工` do not make that detour on holidays or during university winter and
summer vacations.

- **Source:** “R37 route schedule” / `titleOriginal`: `紅37班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411003700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 淡海新市鎮 - 捷運淡水站`;
  `頭末班車 : [平日] 0540 - 2330 / [假日] 0540 - 2330`;
  `收費方式 : 一段票`; `業者服務電話 : 淡水客運新市站:02-2805-4870`;
  `繞淡水商工班次例假日及寒暑假不繞駛`; and the listed weekday/holiday
  headway notes.

### 紅38 / R38

The full official schedule page gives `淡海新市鎮 - 捷運淡水站`, weekday and
holiday service 0550–0000, one-section fare and `淡水客運新市站` as the service
contact. It records weekday peak/off-peak headways of 8–12/12–20 minutes,
holiday peak/off-peak headways of 15/20 minutes, and 20–30 minute service after
22:00.

- **Source:** “R38 route schedule” / `titleOriginal`: `紅38班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411003800
- **Kind/confidence:** PRIMARY; High — full official schedule page read after
  the official language redirect.
- **Original-language text read:** `起迄站名 : 淡海新市鎮 - 捷運淡水站`;
  `頭末班車 : [平日] 0550 - 0000 / [假日] 0550 - 0000`;
  `收費方式 : 一段票`; `業者服務電話 : 淡水客運新市站:02-2805-4870`;
  `尖峰:8分至12分`; `離峰:12分至20分`; and `22:00後每20-30分一車次`.

### 紅39 / R39

The full official schedule page gives `新春街 - 捷運淡水站`, weekday and
holiday service 0610–2210, one-section fare and `淡水客運淡水站` as the
service contact.

- **Source:** “R39 route schedule” / `titleOriginal`: `紅39班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411003900
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 新春街 - 捷運淡水站`;
  `頭末班車 : [平日] 0610 - 2210 / [假日] 0610 - 2210`;
  `收費方式 : 一段票`; and `業者服務電話 : 淡水客運淡水站:02-2621-3340`.

### 紅5 / R5

The full official route-and-stop page gives `陽明山 - 捷運劍潭站`, weekday and
holiday service 0530–2330, one-section fare and `大都會客運陽明山站` as the
service contact. It records weekday peak/off-peak headways of 4–8/12–15
minutes and holiday peak/off-peak headways of 12–15/12–15 minutes. It also
records specified weekday trips detouring via `文化大學`, with those detours
excluded on holidays and during winter and summer vacations.

- **Source:** “R5 route and stop information” / `titleOriginal`: `紅5路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111000500
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 陽明山 - 捷運劍潭站`;
  `頭末班車 : [平日] 0530 - 2330 / [假日] 0530 - 2330`;
  `尖峰:4分至8分`; `離峰:12分至15分`; `收費方式 : 一段票`;
  `業者服務電話 : 大都會客運陽明山站:02-2861-6206`; and the notes beginning
  `捷運劍潭站0730-0930班次、陽明山站1430-1830班次，繞駛文化大學`.

### 紅50 / R50

The full official schedule page gives `內湖 - 捷運圓山站`, weekday and holiday
service 0600–2200, one-section fare and `首都客運內湖站` as the service contact.
It also publishes a weekday subsidiary timetable labelled `經復興北路`, with
departures at 0930, 1100, 1300, 1430 and 1600.

- **Source:** “R50 route schedule” / `titleOriginal`: `紅50班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111005000
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 內湖 - 捷運圓山站`;
  `頭末班車 : [平日] 0600 - 2200 / [假日] 0600 - 2200`;
  `收費方式 : 一段票`; `業者服務電話 : 首都客運內湖站:02-8792-5056`; and
  the `紅50經復興北路班表` row `0930 1100 1300 1430 1600`.

### 紅51 / R51

The full official schedule page gives `淡海新市鎮 - 捷運淡水站`, weekday and
holiday service 0530–2230, one-section fare and `淡水客運淡水站` as the service
contact. It records weekday peak/off-peak headways of 15–30/30–60 minutes and
holiday peak/off-peak headways of 30/60 minutes.

- **Source:** “R51 route schedule” / `titleOriginal`: `紅51班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411005100
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 淡海新市鎮 - 捷運淡水站`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0530 - 2230`;
  `收費方式 : 一段票`; `業者服務電話 : 淡水客運淡水站:02-2621-3340`;
  `尖峰:15分至30分`; `離峰:30分至60分`; and the listed holiday headway notes.

## Batch 4 — 紅31, 紅33, 紅35, 紅35區, 紅36 and 紅37行經海洋都心社區, checked 18 August 2026

The six current official pages were fetched in full. They establish current
route identity, termini, service windows, fare class, operator contacts and
current timetable variants. They do not establish route opening history, the
original corridor decision or dated operator changes; those fields remain TBC.

### 紅31 / R31

The full official schedule page gives `捷運大湖公園站 - 捷運民權西路站`,
weekday and holiday service 0600–2300, one-section fare and `三重客運南港站`
as the service contact. It records a weekday peak headway of 15–20 minutes.

- **Source:** “R31 route schedule” / `titleOriginal`: `紅31班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003100
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 捷運大湖公園站 - 捷運民權西路站`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 2300`;
  `收費方式 : 一段票`; `業者服務電話 : 三重客運南港站:02-2651-8473`; and
  `[平日] 尖峰:15分至20分`.

### 紅33 / R33

The full official route-and-stop page gives `葫蘆里 - 聯合醫院中興院區(西寧)`,
weekday and holiday service 0900–1900, one-section fare and `首都客運士林站`
as the service contact. It lists weekday departures at 0900, 1100, 1300,
1500, 1700 and 1900, and holiday departures at 0900, 1300, 1500, 1700 and
1900.

- **Source:** “R33 route and stop information” / `titleOriginal`: `紅33路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111003300
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 葫蘆里 - 聯合醫院中興院區(西寧)`;
  `頭末班車 : [平日] 0900 - 1900 / [假日] 0900 - 1900`;
  `班表:0900 1100 1300 1500 1700 1900`; `班表:0900 1300 1500 1700 1900`;
  `收費方式 : 一段票`; and `業者服務電話 : 首都客運士林站:02-2834-5022`.

### 紅35 / R35

The full official schedule page gives `關渡碼頭 - 臺北藝術大學`, weekday and
holiday service 0900–2150, one-section fare and `大南汽車關渡站` as the
service contact.

- **Source:** “R35 route schedule” / `titleOriginal`: `紅35班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003500
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 關渡碼頭 - 臺北藝術大學`;
  `頭末班車 : [平日] 0900 - 2150 / [假日] 0900 - 2150`;
  `收費方式 : 一段票`; and `業者服務電話 : 大南汽車關渡站:02-2858-3023`.

### 紅35區 / R35Shuttle

The full official schedule page gives `捷運關渡站 - 北藝大游泳館`, weekday
service 0750–1730, no holiday service, one-section fare and `大南汽車關渡站`
as the service contact. It repeats that holidays are suspended.

- **Source:** “R35Shuttle route schedule” / `titleOriginal`: `紅35區班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003520
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 捷運關渡站 - 北藝大游泳館`;
  `頭末班車 : [平日] 0750 - 1730 / [假日] 停駛`;
  `收費方式 : 一段票`; `業者服務電話 : 大南汽車關渡站:02-2858-3023`; and
  `例假日停駛`.

### 紅36 / R36

The full official route-and-stop page gives `新春街 - 捷運淡水站`, weekday and
holiday service 0600–0000, one-section fare and `淡水客運淡水站` as the service
contact. It records weekday peak headways of 5–8 minutes, weekday off-peak
headways of 10–15 minutes, 15–20 minutes after 22:00, and holiday peak/off-peak
headways of 15/20 minutes.

- **Source:** “R36 route and stop information” / `titleOriginal`: `紅36路線資訊`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0411003600
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 新春街 - 捷運淡水站`;
  `頭末班車 : [平日] 0600 - 0000 / [假日] 0600 - 0000`;
  `尖峰:5分至8分`; `離峰:10分至15分`; `22時後15-20分`;
  `收費方式 : 一段票`; and `業者服務電話 : 淡水客運淡水站:02-2621-3340`.

### 紅37行經海洋都心社區 / R37 Via The Ocean Communty

The full official route-and-stop page gives `淡海新市鎮 - 捷運淡水站`, weekday
service 0605–2300, holiday service 0820–2200, one-section fare and
`淡水客運新市站` as the service contact.

- **Source:** “R37 Via The Ocean Community route and stop information” /
  `titleOriginal`: `紅37行經海洋都心社區路線資訊`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0411003790
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 淡海新市鎮 - 捷運淡水站`;
  `頭末班車 : [平日] 0605 - 2300 / [假日] 0820 - 2200`;
  `收費方式 : 一段票`; and `業者服務電話 : 淡水客運新市站:02-2805-4870`.

## Batch 3 — 紅27, 紅28, 紅28直, 紅29, 紅3 and 紅30, checked 18 August 2026

The six current official pages were fetched in full. They establish current
route identity, termini, service windows, fare class, operator contacts and
current timetable variants. They do not establish route opening history, the
original corridor decision or dated operator changes; those fields remain TBC.

### 紅27 / R27

The full official schedule page gives `淡江大學 - 捷運淡水站`, weekday service
0640–0000, holiday service 0700–0000, one-section fare and `指南客運淡大站`
as the service contact. It records 20–30 minute holiday headways and a
30-minute service after 23:30.

- **Source:** “R27 route schedule” / `titleOriginal`: `紅27班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 淡江大學 - 捷運淡水站`;
  `頭末班車 : [平日] 0640 - 0000 / [假日] 0700 - 0000`;
  `收費方式 : 一段票`; `業者服務電話 : 指南客運淡大站:02-2623-8495`;
  `例假日、寒暑假頭末班時間07:00~00:00 發車間距20-30分`; and
  `23:30以後30分乙車次`.

### 紅28 / R28

The full official schedule page gives `淡江大學 - 捷運淡水站`, weekday service
0600–2220, holiday service 0640–2220, one-section fare and `淡水客運淡水站`
as the service contact.

- **Source:** “R28 route schedule” / `titleOriginal`: `紅28班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002800
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 淡江大學 - 捷運淡水站`;
  `頭末班車 : [平日] 0600 - 2220 / [假日] 0640 - 2220`;
  `收費方式 : 一段票`; and `業者服務電話 : 淡水客運淡水站:02-2621-3340`.

### 紅28直 / R28Sub

The full official schedule page gives `淡江大學 - 捷運淡水站`, weekday service
0624–1930, no holiday service, one-section fare and `淡水客運淡水站` as the
service contact. It notes suspension on holidays and during university winter
and summer vacations.

- **Source:** “R28Sub route schedule” / `titleOriginal`: `紅28直班表`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0411002830
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 淡江大學 - 捷運淡水站`;
  `頭末班車 : [平日] 0624 - 1930 / [假日] 停駛`;
  `收費方式 : 一段票`; `業者服務電話 : 淡水客運淡水站:02-2621-3340`; and
  `例假日、寒暑假期間停駛(配合淡江大學)`.

### 紅29 / R29

The full official schedule page gives `內湖(新湖二路) - 捷運民權西路站`,
weekday and holiday service 0600–2340, one-section fare and `東南客運內湖站`
as the service contact. It records 0800–2130 trips serving
`三軍總醫院內湖院區`, followed by 2130, 2230 and 2340 departures on both day
types.

- **Source:** “R29 route schedule” / `titleOriginal`: `紅29班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111002900
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 內湖(新湖二路) - 捷運民權西路站`;
  `頭末班車 : [平日] 0600 - 2340 / [假日] 0600 - 2340`;
  `收費方式 : 一段票`; `業者服務電話 : 東南客運內湖站:02-8791-7712`;
  `平日0800~2130行駛三軍總醫院內湖院區；2130後車時刻為2130、2230、2340`; and
  the matching holiday sentence.

### 紅3 / R3

The full official schedule page gives `社子 - 台北花市`, weekdays suspended,
a single 10:30 Saturday service, two-section fare, the `陽明高中-劍潭`
buffer and `光華巴士洲美站` as the service contact. It says Sundays, national
holidays, make-up days and typhoon closure days are suspended.

- **Source:** “R3 route schedule” / `titleOriginal`: `紅3班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000300
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 社子 - 台北花市`;
  `頭末班車 : [平日] 停駛 / [假日] 1030 - 1030`;
  `分段緩衝 : 陽明高中-劍潭`; `收費方式 : 兩段票`;
  `業者服務電話 : 光華巴士洲美站:02-2823-0188`;
  `平常日停駛`; `紅3週六班表:1030`; and
  `星期日、國定假日、補休、停班停課時停駛`.

### 紅30 / R30

The full official schedule page gives `故宮博物院 - 捷運劍潭站`, weekday service
0720–1830, holiday service 0730–1900, one-section fare and `中興巴士故宮站`
as the service contact.

- **Source:** “R30 route schedule” / `titleOriginal`: `紅30班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111003000
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 故宮博物院 - 捷運劍潭站`;
  `頭末班車 : [平日] 0720 - 1830 / [假日] 0730 - 1900`;
  `收費方式 : 一段票`; and `業者服務電話 : 中興巴士故宮站:02-2882-2126`.

## Batch 6 — 紅53, 紅55, 紅55區, 紅57, 紅68預 and 紅68, checked 18 August 2026

The full official pages were fetched. They establish current route identity,
termini, service windows, fare class, operator contacts and the published
calendar or detour notes. They do not establish route opening history, the
original corridor decision or dated operator changes; those fields remain TBC.

### 紅53 / R53

The full official route-and-stop page gives `淡海新市鎮 - 捷運淡水站`, weekday
service 0630–2000, no holiday service, one-section fare and `淡水客運新市站`
as the service contact. It lists weekday departures at 0630, 0750, 0900,
1010, 1120, 1500, 1620, 1740, 1850 and 2000, and notes that the route is
suspended on holidays.

- **Source:** “R53 route and stop information” / `titleOriginal`: `紅53路線資訊`
- **Publisher:** New Taipei City Public Transportation Office /
  `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0411005300
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 淡海新市鎮 - 捷運淡水站`;
  `頭末班車 : [平日] 0630 - 2000 / [假日] 停駛`;
  `班表:0630 0750 0900 1010 1120 1500 1620 1740 1850 2000`;
  `收費方式 : 一段票`; `業者服務電話 : 淡水客運新市站:02-2805-4870`; and
  `例假日停駛`.

### 紅55 / R55

The full official route-and-stop page gives `捷運關渡站 - 臺北藝術大學`,
weekday service 0700–1900, holiday service 0800–1900, one-section fare and
`大南汽車關渡站` as the service contact. It says that the holiday timetable
is used during university winter and summer vacations.

- **Source:** “R55 route and stop information” / `titleOriginal`: `紅55路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111005500
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 捷運關渡站 - 臺北藝術大學`;
  `頭末班車 : [平日] 0700 - 1900 / [假日] 0800 - 1900`;
  `收費方式 : 一段票`; `業者服務電話 : 大南汽車關渡站:02-2858-3023`;
  `寒暑假以假日班次行駛`.

### 紅55區 / R55Shuttle

The full official route-and-stop page gives `捷運關渡站 - 臺北城市科技大學`,
weekday service 0720–1830, no holiday service, one-section fare and
`大南汽車關渡站` as the service contact. It says the route is suspended on
holidays and during university winter and summer vacations.

- **Source:** “R55Shuttle route and stop information” /
  `titleOriginal`: `紅55區路線資訊`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/StopsOfRoute?routeid=0111005520
- **Kind/confidence:** PRIMARY; High — full official route-and-stop page read.
- **Original-language text read:** `起迄站名 : 捷運關渡站 - 臺北城市科技大學`;
  `頭末班車 : [平日] 0720 - 1830 / [假日] 停駛`;
  `收費方式 : 一段票`; `業者服務電話 : 大南汽車關渡站:02-2858-3023`;
  `寒暑假停駛`.

### 紅57 / R57

The full official schedule page gives `捷運行天宮站 - 捷運科技大樓站`,
weekday service 0630–2100 and no holiday service. It records a one-section
fare and service contacts at 首都客運社子站, 首都客運士林站 and 臺北客運士林站,
and notes that the route is suspended on holidays.

- **Source:** “R57 route schedule” / `titleOriginal`: `紅57班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111005700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 捷運行天宮站 - 捷運科技大樓站`;
  `頭末班車 : [平日] 0630 - 2100 / [假日] 停駛`;
  `收費方式 : 一段票`; `業者服務電話 : 首都客運社子站:02-2810-8566`;
  `首都客運士林站:02-2834-5022`; `臺北客運士林站:02-2834-5022`; and
  `例假日停駛`.

### 紅68預 / R68B

The committed TDX snapshot contains a colour-red record named `紅68預`, with
canonical slug `red-68-hdunl`. The full official catalogue lists 39 labels
under `捷運紅線接駁公車` and omits `紅68預`. The full official page for `紅68`
contains appointment-only trial workings, but is labelled `紅68` and does not
name a separate `紅68預` route. No separate official route page was found, so
the relationship between the TDX record and the official `紅68` service is
not resolved.

- **Source:** “TDX bus route snapshot” / `titleOriginal`: `臺北市公車資料`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平台`
- **URL:** https://tdx.transportdata.tw/api-service/swagger
- **Kind/confidence:** PRIMARY; High — the committed TDX route record was read.
- **Original-language text read:** the committed route record has `name: 紅68預`,
  `canonicalSlug: red-68-hdunl`, `routeId: 19719`, and `group: colour-red`.

- **Source:** “Bus route catalogue” / `titleOriginal`: `臺北市公車路線查詢`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/ebus?ct=all
- **Kind/confidence:** PRIMARY; High — full official catalogue page read.
- **Original-language text read:** the heading is `捷運紅線接駁公車`; its 39
  labels include `紅68` but do not include `紅68預`.

- **Source:** “R68 route schedule” / `titleOriginal`: `紅68班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111006800
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 北投士林科技園區 - 捷運芝山站`;
  `頭末班車 : [平日] 0640 - 1830 / [假日] 停駛`;
  `收費方式 : 一段票`; `業者服務電話 : 首都客運士林站:02-2834-5022`;
  `自115年3月1日起試辦平日0550、1210、1300、1930班次為預約公車班次`;
  and `自114年6月30日起試辦例假日1030、1640班次為預約公車班次`.

### 紅68 / R68

The full official schedule page gives `北投士林科技園區 - 捷運芝山站`,
weekday service 0640–1830 and no regular holiday service, with one-section
fare and `首都客運士林站` as the service contact. It records weekday workings
that detour via 中鼎第二總部大樓 and appointment-only trial workings; the page
does not present those workings as a separate `紅68預` route.

- **Source:** “R68 route schedule” / `titleOriginal`: `紅68班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111006800
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 北投士林科技園區 - 捷運芝山站`;
  `頭末班車 : [平日] 0640 - 1830 / [假日] 停駛`;
  `收費方式 : 一段票`; `業者服務電話 : 首都客運士林站:02-2834-5022`;
  `平日07:30、13:00返程班次及12:10、18:30、19:30往程班次繞駛中鼎第二總部大樓`;
  and `自114年6月30日起試辦例假日1030、1640班次為預約公車班次`.

## Batch 7 — 紅3區, 紅7區, 紅7 and 紅9, checked 18 August 2026

The exact four remaining records in the committed `colour-red` TDX group were
checked. Their full official schedule pages establish current route identity,
termini, service windows, fare class, operator contacts and current timetable
notes. They do not establish route opening history, the original corridor
decision or dated operator changes; those fields remain TBC.

### 紅3區 / R3Shuttle

The full official schedule page gives `社子站 - 內湖科技園區`, weekday service
0545–2200, holiday service 0800–2000, a `陽明高中-劍潭` fare buffer, two-section
fare and `光華巴士洲美站` as the service contact. It says national holidays
use the Sunday timetable, Lunar New Year's Eve uses the Saturday timetable and
typhoon closure days use the Sunday timetable.

- **Source:** “R3Shuttle route schedule” / `titleOriginal`: `紅3區班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000320
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 社子站 - 內湖科技園區`;
  `頭末班車 : [平日] 0545 - 2200 / [假日] 0800 - 2000`;
  `分段緩衝 : 陽明高中-劍潭`; `收費方式 : 兩段票`;
  `業者服務電話 : 光華巴士洲美站:02-2823-0188`; and
  `遇國定假日以星期日班次發車，農曆除夕日以星期六班次發車，颱風日倘停班停課，依星期日班次發車`.

### 紅7區 / R7Shuttle

The full official schedule page gives `社子 - 捷運劍潭站`, weekday and holiday
service 0540–2350, one-section fare and `首都客運社子站` as the service contact.
It records weekday peak/off-peak intervals of 10/20 minutes and holiday
intervals of 15–20 minutes, with fixed departures after 22:00; the
`陽明戲院` stop toward 捷運劍潭站 is served only before 11:00.

- **Source:** “R7Shuttle route schedule” / `titleOriginal`: `紅7區班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000720
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 社子 - 捷運劍潭站`;
  `頭末班車 : [平日] 0540 - 2350 / [假日] 0540 - 2350`;
  `收費方式 : 一段票`; `業者服務電話 : 首都客運社子站:02-2810-8566`;
  `[平日] 尖峰:10分; 離峰:20分`; `[假日] 尖峰:15分至20分; 離峰:15分至20分`;
  and `平日22:00以後發車時間為固定班次`.

### 紅7 / R7

The full official schedule page gives `捷運劍潭站 - 社子`, weekday service
0600–1900, holiday service 0800–1700, one-section fare and `首都客運士林站`
as the service contact. It says the `陽明戲院` stop toward 捷運劍潭站 is
served only by departures before 11:00 on both weekdays and holidays.

- **Source:** “R7 route schedule” / `titleOriginal`: `紅7班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 捷運劍潭站 - 社子`;
  `頭末班車 : [平日] 0600 - 1900 / [假日] 0800 - 1700`;
  `收費方式 : 一段票`; `業者服務電話 : 首都客運士林站:02-2834-5022`; and
  `平日「陽明戲院」(往捷運劍潭站方向)站位，僅上午11:00前班次停靠`.

### 紅9 / R9

The full official schedule page gives `蘆洲 - 捷運劍潭站`, weekday service
0540–2330, holiday service 0600–2300, one-section fare and `三重客運蘆一站`
as the service contact. It records a weekday peak interval of 12–15 minutes.

- **Source:** “R9 route schedule” / `titleOriginal`: `紅9班表`
- **Publisher:** Taipei City Public Transportation Office /
  `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0111000900
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 蘆洲 - 捷運劍潭站`;
  `頭末班車 : [平日] 0540 - 2330 / [假日] 0600 - 2300`;
  `收費方式 : 一段票`; `業者服務電話 : 三重客運蘆一站:02-2282-1429`; and
  `[平日] 尖峰:12分至15分`.

## What remains TBC

- **All forty batch-1/2/3/4/5/6/7 routes:** opening date, earlier alignment, original
  corridor rationale and dated operator transfers are TBC.
- **紅19:** its current school-day return stop variant is established; its
  creation date and rationale are TBC.
- **紅22:** the current timed detours and late-evening service are established;
  their creation dates and rationale are TBC.
- **紅26:** the current no-fisherman-wharf short working is established; its
  creation date and rationale are TBC.
- **紅27:** current holiday headways and the late-evening interval are
  established; their creation dates and rationale are TBC.
- **紅28直:** current university-calendar suspension is established; its
  creation date and rationale are TBC.
- **紅29:** the current hospital short working is established; its creation
  date and rationale are TBC.
- **紅31:** the current weekday peak interval is established; its creation date
  and rationale are TBC.
- **紅35區:** current holiday suspension is established; its creation date and
  rationale are TBC.
- **紅37:** current 淡水商工 detour treatment is established; its creation date
  and rationale are TBC.
- **紅5:** current 文化大學 detours are established; their creation dates and
  rationale are TBC.
- **紅50:** the current 復興北路 subsidiary timetable is established; its
  creation date and rationale are TBC.
- **紅53:** current holiday suspension is established; its creation date and
  corridor rationale are TBC.
- **紅55:** current university-calendar timetable variant is established; its
  creation date and rationale are TBC.
- **紅55區:** current holiday and university-calendar suspension is established;
  its creation date and rationale are TBC.
- **紅57:** current holiday suspension is established; its creation date and
  corridor rationale are TBC.
- **紅68 and 紅68預:** the current official `紅68` schedule and TDX-only
  `紅68預` record are established, but their relationship, any separate service
  span and any dated creation or operator change remain TBC.
- **紅3區, 紅7區, 紅7 and 紅9:** current service variants are established;
  their creation dates and corridor rationales are TBC.

## Checked and failed

- **Dated opening, corridor-rationale and operator-change records for batches 1–4** —
  full current route pages were checked, but no dated primary history record was
  promoted from those pages. Current service data was not treated as an origin
  story. Checked 18 August 2026.
- **紅37行經海洋都心社區 route-information page** — the official
  `VsSimpleMap` URL timed out during full-page fetching. The full official
  `StopsOfRoute` page was fetched and used instead. Checked 18 August 2026.
- **紅68預 separate official route page** — full official catalogue,
  `RouteSchedule`, `StopsOfRoute` and `VsSimpleMap` searches found no page
  labelled `紅68預`; the full `紅68` page was fetched and did not name a
  separate route. Checked 18 August 2026.

## Stated gaps

- The TDX snapshot has no route-length, service-span or headway fields for these
  content pages; route-specific timetable values are left in prose with their
  official eBus source, while structural specs remain TBC.
- The catalogue/TDX roster difference for 紅68預 needs a primary notice or a
  later catalogue revision to explain whether it is a reserved, seasonal or
  otherwise separately treated working.
