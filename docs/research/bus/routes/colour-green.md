> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Green-line feeder routes — research

**Run date: 18–19 August 2026.** This report covers the 17 records in the
merged TDX snapshot classified `colour-green`. No images were fetched.

## Audit — official catalogue and false-prefix matches

The full Taipei/New Taipei government bus catalogue has the heading
`捷運綠線接駁公車` and lists 17 labels: 綠2右, 綠2左, 綠3, 綠5, 綠6, 綠7,
綠8, 綠9, 綠9耕莘, 綠9北新國小, 綠10, 綠11, 綠12, 綠13, 綠15, 綠17 and 綠18.
This matches the TDX `colour-green` group exactly — 17 records, no
catalogue/TDX discrepancy (unlike `colour-red`'s 39-vs-40 split over 紅68預).

- **Source:** "Taipei/New Taipei bus route catalogue" / `titleOriginal`:
  `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government /
  `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=all
- **Kind/confidence:** PRIMARY; High — the full government catalogue was
  fetched, including the green-feeder section and each route's routeid.
- **Original-language text read:** `捷運綠線接駁公車` followed by the 17
  labels listed above, each linked to a `routeid` value used below.

The false-prefix audit searched every normalized route name (all 1,051
committed records) containing `綠`. The 17 accepted green-group names are the
17 listed above. Three names were excluded because `綠` is part of a place
name rather than the route's green-feeder prefix:

- `棕7綠野香坡` / group `colour-brown` — `綠野香坡` is a New Taipei housing
  estate name (Xindian); the route's own prefix is `棕` (brown), already
  covered in the brown pilot.
- `624綠野香坡` / group `new-taipei` — same place name, on a numbered New
  Taipei route with no colour prefix at all.
- `新店(綠中海)-捷運新店站` / group `new-taipei` — `綠中海` ("Green Sea") is
  an apartment-complex name at the route's Xindian terminus, not a colour
  prefix.

No `臺北觀光巴士綠線` (sightseeing green line) was found anywhere in the
1,051-record snapshot — unlike red and blue, which each have one excluded
sightseeing-service record. This is a "not found" claim about the committed
TDX snapshot, not a claim that no such branding exists anywhere.

- **Source:** "TDX bus data" / `titleOriginal`: `交通部運輸資料流通服務平臺`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平臺`
- **URL:** https://tdx.transportdata.tw/
- **Kind/confidence:** PRIMARY; High for the normalized name/group
  comparison — all 1,051 committed route records were checked by
  `names.zh_tw` and `group`.
- **Original-language text read:** `棕7綠野香坡`, `624綠野香坡` and
  `新店(綠中海)-捷運新店站`, contrasted with the 17 records whose names begin
  with `綠` and whose group is `colour-green`.

## Batch 1 — all 17 colour-green routes, checked 18–19 August 2026

The 17 full official schedule pages were fetched. They establish current
route identity, termini, service windows, fare class and operator contacts.
They do not establish route opening history, the original corridor decision
or dated operator changes; those fields remain TBC rather than being inferred
from a current schedule page.

### 綠2右 / G2Right

The full official schedule page gives `景美女中 - 中永和`, weekday and
holiday service 0530–2345, one-section fare and 欣欣客運中興站 as the service
contact, with peak headways of 12–15 minutes on weekdays and enhanced
afternoon service on school days.

- **Source:** "G2Right route schedule" / `titleOriginal`: `綠2右班表`
- **Publisher:** Taipei City Public Transportation Office / `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 景美女中 - 中永和`;
  `頭末班車 : [平日] 0530 - 2345 / [假日] 0530 - 2345`; `收費方式 : 一段票`;
  and `業者服務電話 : 欣欣客運中興站:02-2910-6261`.

### 綠2左 / G2Left

The full official schedule page gives `景美女中 - 中永和`, weekday and
holiday service 0600–0000, one-section fare and 欣欣客運中興站 as the
service contact.

- **Source:** "G2Left route schedule" / `titleOriginal`: `綠2左班表`
- **Publisher:** Taipei City Public Transportation Office / `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000270
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 景美女中 - 中永和`;
  `頭末班車 : [平日] 0600 - 0000 / [假日] 0600 - 0000`; `收費方式 : 一段票`;
  and `業者服務電話 : 欣欣客運中興站:02-2910-6261`.

### 綠3 / G3

The full official schedule page gives `花園新城 - 中和`, weekday and holiday
service 0600–2200, one-section fare and 新店客運碧潭站 as the service
contact.

- **Source:** "G3 route schedule" / `titleOriginal`: `綠3班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000300
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 花園新城 - 中和`;
  `頭末班車 : [平日] 0600 - 2200 / [假日] 0600 - 2200`; `收費方式 : 一段票`;
  and `業者服務電話 : 新店客運碧潭站:02-2217-1448`.

### 綠5 / G5

The full official schedule page gives `大崎腳 - 中正環河路口`, weekday and
holiday service 0530–2230, one-section fare and 新店客運新店站 as the
service contact.

- **Source:** "G5 route schedule" / `titleOriginal`: `綠5班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000500
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 大崎腳 - 中正環河路口`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0530 - 2230`; `收費方式 : 一段票`;
  and `業者服務電話 : 新店客運新店站:02-2217-1448`.

### 綠6 / G6

The full official schedule page gives `美之城 - 中和`, weekday and holiday
service 0600–2230, one-section fare and 新店客運碧潭站 as the service
contact, with peak headways of 15–20 minutes and off-peak headways of
20–30 minutes on both day types.

- **Source:** "G6 route schedule" / `titleOriginal`: `綠6班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000600
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 美之城 - 中和`;
  `頭末班車 : [平日] 0600 - 2230 / [假日] 0600 - 2230`; `收費方式 : 一段票`;
  and `業者服務電話 : 新店客運碧潭站:02-2217-1448`.

### 綠7 / G7

The full official schedule page gives `黎明清境 - 捷運大坪林站`, weekday and
holiday service 0600–2230, one-section fare and two service contacts,
新店客運碧潭站 and 新店客運錦繡站, with weekday/holiday peak headways of
15–20 minutes and off-peak headways of 20–30 minutes.

- **Source:** "G7 route schedule" / `titleOriginal`: `綠7班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 黎明清境 - 捷運大坪林站`;
  `頭末班車 : [平日] 0600 - 2230 / [假日] 0600 - 2230`; `收費方式 : 一段票`;
  `業者服務電話 : 新店客運碧潭站:02-2217-1448`; and
  `新店客運錦繡站:02-2215-5578`.

### 綠8 / G8

The full official schedule page gives `台北小城 - 中和`, weekday and holiday
service 0600–2230, one-section fare and 新店客運碧潭站 as the service
contact, with weekday peak/off-peak headways of 15–20/20–30 minutes and
holiday peak/off-peak headways of 20–30/20–30 minutes.

- **Source:** "G8 route schedule" / `titleOriginal`: `綠8班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000800
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 台北小城 - 中和`;
  `頭末班車 : [平日] 0600 - 2230 / [假日] 0600 - 2230`; `收費方式 : 一段票`;
  and `業者服務電話 : 新店客運碧潭站:02-2217-1448`.

### 綠9 / G9

The full official schedule page gives `大香山 - 慈濟醫院`, weekday service
0900–2300, no holiday service (`停駛`), one-section fare and 大南汽車土城站
as the service contact. It records accessible reserved departures at 10:00,
12:00, 14:00 and 16:00 on weekdays, requiring booking two days ahead.

- **Source:** "G9 route schedule" / `titleOriginal`: `綠9班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000900
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 大香山 - 慈濟醫院`;
  `頭末班車 : [平日] 0900 - 2300 / [假日] 停駛`; `收費方式 : 一段票`;
  `業者服務電話 : 大南汽車土城站:02-2274-1827`; and the low-floor reserved
  departure note for 10:00/12:00/14:00/16:00, booked two days in advance.

### 綠9耕莘 / G9Gengxin

The full official schedule page gives `大香山 - 耕莘醫院`, weekday service
0740–1650, holiday service 1530–2100, one-section fare and 大南汽車土城站
as the service contact.

- **Source:** "G9Gengxin route schedule" / `titleOriginal`: `綠9耕莘班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000990
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 大香山 - 耕莘醫院`;
  `頭末班車 : [平日] 0740 - 1650 / [假日] 1530 - 2100`; `收費方式 : 一段票`;
  and `業者服務電話 : 大南汽車土城站:02-2274-1827`.

### 綠9北新國小 / G9Beixin

The full official schedule page gives `大香山 - 北新國小`, weekday service
0550–2155, holiday service 0600–2310, one-section fare and 大南汽車土城站
as the service contact.

- **Source:** "G9Beixin route schedule" / `titleOriginal`: `綠9北新國小班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000970
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 大香山 - 北新國小`;
  `頭末班車 : [平日] 0550 - 2155 / [假日] 0600 - 2310`; `收費方式 : 一段票`;
  and `業者服務電話 : 大南汽車土城站:02-2274-1827`.

### 綠10 / G10

The full official schedule page gives `景文科技大學 - 捷運大坪林站`, weekday
and holiday service 0600–2230, one-section fare and 新店客運碧潭站 as the
service contact, publishing 29 departures across the day.

- **Source:** "G10 route schedule" / `titleOriginal`: `綠10班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001000
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 景文科技大學 - 捷運大坪林站`;
  `頭末班車 : [平日] 0600 - 2230 / [假日] 0600 - 2230`; `收費方式 : 一段票`;
  and `業者服務電話 : 新店客運碧潭站:02-2217-1448`.

### 綠11 / G11

The full official schedule page gives `萬芳社區 - 台電大樓`, weekday and
holiday service 0600–2300, one-section fare and 東南客運萬芳站 as the
service contact. It records a weekday peak-hour detour serving `公訓正門`
(06:55–08:00 and 16:00–17:20), bypassed at other times and on holidays.

- **Source:** "G11 route schedule" / `titleOriginal`: `綠11班表`
- **Publisher:** Taipei City Public Transportation Office / `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001100
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 萬芳社區 - 台電大樓`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 2300`; `收費方式 : 一段票`;
  `業者服務電話 : 東南客運萬芳站:02-8230-0364`; and
  `平日上午6時55分至8時,下午16時至17時20分行駛停靠「公訓正門」站`.

### 綠12 / G12

The full official schedule page gives `坪林 - 捷運新店站`, weekday and
holiday service 0600–1915, two-section fare and 新店客運碧潭站 as the
service contact.

- **Source:** "G12 route schedule" / `titleOriginal`: `綠12班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 坪林 - 捷運新店站`;
  `頭末班車 : [平日] 0600 - 1915 / [假日] 0600 - 1915`; `收費方式 : 二段票`;
  and `業者服務電話 : 新店客運碧潭站:02-2217-1448`.

### 綠13 / G13

The full official schedule page gives `青潭 - 捷運公館站`, weekday and
holiday service 0530–2230, two-section fare and 新店客運新店站 as the
service contact, with peak headways of 10 minutes and off-peak headways of
20 minutes on both day types.

- **Source:** "G13 route schedule" / `titleOriginal`: `綠13班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001300
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 青潭 - 捷運公館站`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0530 - 2230`; `收費方式 : 二段票`;
  and `業者服務電話 : 新店客運新店站:02-2217-1448`.

### 綠15 / G15

The full official schedule page gives `綠野香坡 - 捷運大坪林站`, weekday and
holiday service 0540–2200, one-section fare and 新店客運錦繡站 as the
service contact.

- **Source:** "G15 route schedule" / `titleOriginal`: `綠15班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413001500
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 綠野香坡 - 捷運大坪林站`;
  `頭末班車 : [平日] 0540 - 2200 / [假日] 0540 - 2200`; `收費方式 : 一段票`;
  and `業者服務電話 : 新店客運錦繡站:02-2215-5578`.

Note the place name `綠野香坡` recurs here as a terminus, exactly as it does
in `棕7綠野香坡` and `624綠野香坡` above — corroborating that it is a place
in Xindian, not a colour marker, wherever it appears.

### 綠17 / G17

The full official schedule page gives `華中河濱公園 - 大稻埕碼頭`, weekday
service 0740–1840, no holiday service (`停駛`), and 首都客運東園站 as the
service contact. The page does not state a fare class.

- **Source:** "G17 route schedule" / `titleOriginal`: `綠17班表`
- **Publisher:** Taipei City Public Transportation Office / `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 華中河濱公園 - 大稻埕碼頭`;
  `頭末班車 : [平日] 0740 - 1840 / [假日] 停駛`; and
  `業者服務電話 : 首都客運東園站:02-2339-5189`.

### 綠18 / G18

The full official schedule page gives `捷運大坪林站 - 捷運萬芳醫院站`,
weekday service 0630–1830, no holiday service (`停駛`), one-section fare and
欣欣客運中興站 as the service contact.

- **Source:** "G18 route schedule" / `titleOriginal`: `綠18班表`
- **Publisher:** Taipei City Public Transportation Office / `臺北市政府公共運輸處`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001800
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 捷運大坪林站 - 捷運萬芳醫院站`;
  `頭末班車 : [平日] 0630 - 1830 / [假日] 停駛`; `收費方式 : 一段票`;
  and `業者服務電話 : 欣欣客運中興站:02-2910-6261`.

## MRT stop-ID joins — not curated in this run

`data/tdx/bus/rail-stop-joins.json` — the file of individually verified
stop-ID MRT joins — has 20 entries, all `colour-brown`. Every green route's
raw `railJoins` from the TDX pull is a `normalized-name` match (a bus stop
whose name contains a station name, not a verified stop-ID join), which
`lib/bus/routes.ts` now discards rather than presenting as confirmed (see
Run 48 Part 2). No new stop-ID curation was done for `colour-green` in this
run: every green route page correctly shows zero confirmed MRT stop joins,
even where a terminus is named after a station (`捷運大坪林站`,
`捷運公館站`, `捷運萬芳醫院站`) and a real interchange likely exists. That
gap is stated on each such page rather than inferred.

## What remains TBC

- **All 17 routes:** opening date, earlier alignment, original corridor
  rationale and dated operator transfers are TBC.
- **綠9:** the accessible reserved-departure scheme is established; its
  creation date and rationale are TBC.
- **綠9耕莘 / 綠9北新國小:** current service variants are established; their
  relationship to plain 綠9 (shared numbering, distinct termini) and any
  dated split from a single original route are TBC.
- **綠11:** the current 公訓正門 peak-hour detour is established; its
  creation date and rationale are TBC.
- **綠17 / 綠18:** current holiday suspension is established; creation dates
  and corridor rationale are TBC. 綠17's fare class is not published on its
  schedule page and is left TBC rather than assumed to match its neighbours.
- **Confirmed MRT stop-ID joins:** none exist for any green route in
  `rail-stop-joins.json`; see the section above.

## Checked and failed

- **Dated opening, corridor-rationale and operator-change records for all 17
  routes** — full current schedule pages were checked, but no dated primary
  history record was promoted from those pages. Current service data was not
  treated as an origin story. Checked 18–19 August 2026.
- **A `臺北觀光巴士綠線` sightseeing record** — searched the full 1,051-record
  TDX snapshot for any route name matching a green-branded sightseeing
  service, on the pattern of the red and blue exclusions. None found. Checked
  18 August 2026.

## Stated gaps

- The TDX snapshot has no route-length, service-span or headway fields for
  these content pages; route-specific timetable values are left in prose with
  their official eBus source, while structural specs remain TBC.
- Confirmed stop-ID MRT joins for `colour-green` would need the same
  individual verification the brown pilot used for its 20 curated entries;
  none was attempted here given the volume across the remaining groups.
