> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Orange-line feeder routes — research

**Run date: 19 August 2026.** This report covers the 18 records in the merged
TDX snapshot classified `colour-orange`. No images were fetched.

## Audit — official catalogue and false-prefix matches

The full Taipei/New Taipei government bus catalogue has the heading
`捷運橘線接駁公車` and lists 18 labels: 橘1, 橘2, 橘3, 橘5, 橘9, 橘10, 橘12,
橘13, 橘17, 橘18, 橘18福隆路, 橘19, 橘19副, 橘20, 橘21, 橘22, 橘25 and 橘26.
This matches the TDX `colour-orange` group exactly — 18 records, no
catalogue/TDX discrepancy.

- **Source:** "Taipei/New Taipei bus route catalogue" / `titleOriginal`:
  `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government /
  `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=all
- **Kind/confidence:** PRIMARY; High — the full government catalogue was
  fetched, including the orange-feeder section and each route's routeid.
- **Original-language text read:** `捷運橘線接駁公車` followed by the 18
  labels listed above, each linked to a `routeid` value used below.

The false-prefix audit searched every normalized route name (all 1,051
committed records) containing `橘`. Only the 18 `colour-orange` records
contain the character; no other route anywhere in the snapshot has `橘` as
part of a place name, a descriptive term or a sightseeing-service name. This
is a "not found" claim about the committed TDX snapshot — orange had no
exclusion case comparable to red's 紅樹林/觀光巴士紅線 or green's 綠野香坡.

- **Source:** "TDX bus data" / `titleOriginal`: `交通部運輸資料流通服務平臺`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平臺`
- **URL:** https://tdx.transportdata.tw/
- **Kind/confidence:** PRIMARY; High for the normalized name/group
  comparison — all 1,051 committed route records were checked by
  `names.zh_tw`.
- **Original-language text read:** the 18 records whose names begin with `橘`
  and whose group is `colour-orange`, with no other `橘`-containing record
  found in the snapshot.

## Batch 1 — all 18 colour-orange routes, checked 19 August 2026

The 18 full official schedule pages were fetched. They establish current
route identity, termini, service windows, fare class and operator contacts.
They do not establish route opening history, the original corridor decision
or dated operator changes; those fields remain TBC.

### 橘1 / O1

The full official schedule page gives `錦繡 - 捷運景安站`, weekday service
0530–2230, holiday service 0600–2230, one-section fare and 指南客運錦繡站
as the service contact.

- **Source:** "O1 route schedule" / `titleOriginal`: `橘1班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000100
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 錦繡 - 捷運景安站`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0600 - 2230`; `收費方式 : 一段票`;
  and `業者服務電話 : 指南客運錦繡站:02-2214-1721`.

### 橘2 / O2

The full official schedule page gives `中和 - 秀山`, weekday service
0550–2300, holiday service 0600–2300, one-section fare and 臺北客運中和站
as the service contact.

- **Source:** "O2 route schedule" / `titleOriginal`: `橘2班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 中和 - 秀山`;
  `頭末班車 : [平日] 0550 - 2300 / [假日] 0600 - 2300`; `收費方式 : 一段票`;
  and `業者服務電話 : 臺北客運中和站:02-2247-7620`.

### 橘3 / O3

The full official schedule page gives `中和 - 捷運頂溪站`, weekday service
0600–2300, holiday service 0640–2200, one-section fare and 臺北客運中和站
as the service contact. It records that weekday 0700–0900 departures do not
stop at 捷運頂溪站.

- **Source:** "O3 route schedule" / `titleOriginal`: `橘3班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000300
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 中和 - 捷運頂溪站`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0640 - 2200`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運中和站:02-2247-7620`; and the note that weekday
  0700–0900 departures skip 捷運頂溪站.

### 橘5 / O5

The full official schedule page gives `板橋 - 捷運景安站`, weekday service
0540–2310, holiday service 0600–2310, one-section fare and 臺北客運江子翠站
as the service contact.

- **Source:** "O5 route schedule" / `titleOriginal`: `橘5班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000500
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 板橋 - 捷運景安站`;
  `頭末班車 : [平日] 0540 - 2310 / [假日] 0600 - 2310`; `收費方式 : 一段票`;
  and `業者服務電話 : 臺北客運江子翠站:02-8965-3770`.

### 橘9 / O9

The full official schedule page gives `錦繡 - 雙和醫院`, weekday service
0555–1935, holiday service 0615–1935, one-section fare and 指南客運錦繡站
as the service contact.

- **Source:** "O9 route schedule" / `titleOriginal`: `橘9班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415000900
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 錦繡 - 雙和醫院`;
  `頭末班車 : [平日] 0555 - 1935 / [假日] 0615 - 1935`; `收費方式 : 一段票`;
  and `業者服務電話 : 指南客運錦繡站:02-2214-1721`.

### 橘10 / O10

The full official schedule page gives `泰山 - 蘆洲`, weekday service
0600–1820, no holiday service (`停駛`), one-section fare and 指南客運泰山站
as the service contact. It lists six weekday departures: 0600, 0700, 0810,
1540, 1650 and 1820.

- **Source:** "O10 route schedule" / `titleOriginal`: `橘10班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001000
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 泰山 - 蘆洲`;
  `頭末班車 : [平日] 0600 - 1820 / [假日] 停駛`; `班表:0600 0700 0810 1540
  1650 1820`; `收費方式 : 一段票`; and
  `業者服務電話 : 指南客運泰山站:02-2297-8073`.

### 橘12 / O12

The full official schedule page gives `二重 - 捷運三重國小站`, weekday
service 0630–1700, no holiday service (`停駛`), one-section fare and
首都客運二重站 as the service contact.

- **Source:** "O12 route schedule" / `titleOriginal`: `橘12班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 二重 - 捷運三重國小站`;
  `頭末班車 : [平日] 0630 - 1700 / [假日] 停駛`; `收費方式 : 一段票`;
  and `業者服務電話 : 首都客運二重站:02-2983-0708`.

### 橘13 / O13

The full official schedule page gives `三重 - 五股`, weekday service
0530–2200, holiday service 0600–2200, one-section fare and 首都客運三重一站
as the service contact.

- **Source:** "O13 route schedule" / `titleOriginal`: `橘13班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001300
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 三重 - 五股`;
  `頭末班車 : [平日] 0530 - 2200 / [假日] 0600 - 2200`; `收費方式 : 一段票`;
  and `業者服務電話 : 首都客運三重一站:02-2288-8789`.

### 橘17 / O17

The full official schedule page gives `新莊中原路 - 捷運三民高中站`, weekday
service 0540–2000, holiday service 0800–1900, one-section fare and
大都會客運新莊站 as the service contact.

- **Source:** "O17 route schedule" / `titleOriginal`: `橘17班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001700
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 新莊中原路 - 捷運三民高中站`;
  `頭末班車 : [平日] 0540 - 2000 / [假日] 0800 - 1900`; `收費方式 : 一段票`;
  and `業者服務電話 : 大都會客運新莊站:02-8521-2772`.

### 橘18 / O18

The full official schedule page gives `蘆洲 - 五華街`, weekday service
0600–2200, holiday service 0600–2100, one-section fare and 大都會客運蘆洲站
as the service contact.

- **Source:** "O18 route schedule" / `titleOriginal`: `橘18班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001800
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 蘆洲 - 五華街`;
  `頭末班車 : [平日] 0600 - 2200 / [假日] 0600 - 2100`; `收費方式 : 一段票`;
  and `業者服務電話 : 大都會客運蘆洲站:02-2282-0037`.

### 橘18福隆路 / O18fu

The full official schedule page gives `蘆洲 - 五華街`, weekday service
0600–2000, holiday service 0600–1900, one-section fare and 大都會客運蘆洲站
as the service contact — the same termini and operator as plain 橘18, on a
separate TDX record distinguished by the `福隆路` suffix.

- **Source:** "O18fu route schedule" / `titleOriginal`: `橘18福隆路班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001870
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 蘆洲 - 五華街`;
  `頭末班車 : [平日] 0600 - 2000 / [假日] 0600 - 1900`; `收費方式 : 一段票`;
  and `業者服務電話 : 大都會客運蘆洲站:02-2282-0037`.

### 橘19 / O19

The full official schedule page gives `五股 - 三重`, weekday and holiday
service 0530–2330, one-section fare and 三重客運五股站 as the service
contact.

- **Source:** "O19 route schedule" / `titleOriginal`: `橘19班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001900
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 五股 - 三重`;
  `頭末班車 : [平日] 0530 - 2330 / [假日] 0530 - 2330`; `收費方式 : 一段票`;
  and `業者服務電話 : 三重客運五股站:02-2292-1629`.

### 橘19副 / O19Sub

The full official schedule page gives `五股 - 三重`, weekday service
0630–1900, holiday service 0800–1900, one-section fare and 三重客運五股站
as the service contact — the same termini and operator as plain 橘19, on a
separate TDX record with a shorter published span.

- **Source:** "O19Sub route schedule" / `titleOriginal`: `橘19副班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415001910
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 五股 - 三重`;
  `頭末班車 : [平日] 0630 - 1900 / [假日] 0800 - 1900`; `收費方式 : 一段票`;
  and `業者服務電話 : 三重客運五股站:02-2292-1629`.

### 橘20 / O20

The full official schedule page gives `觀音山 - 蘆洲`, weekday service
0540–2050, holiday service 0540–2000, one-section fare and 三重客運五股站
as the service contact.

- **Source:** "O20 route schedule" / `titleOriginal`: `橘20班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002000
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 觀音山 - 蘆洲`;
  `頭末班車 : [平日] 0540 - 2050 / [假日] 0540 - 2000`; `收費方式 : 一段票`;
  and `業者服務電話 : 三重客運五股站:02-2292-1629`.

### 橘21 / O21

The full official schedule page gives `龍壽里 - 新北產業園區`, weekday and
holiday service 0530–2330, one-section fare and 三重客運迴龍站 as the
service contact. It records 32 weekday departures and 20 holiday departures
with reduced mid-day frequency.

- **Source:** "O21 route schedule" / `titleOriginal`: `橘21班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002100
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 龍壽里 - 新北產業園區`;
  `頭末班車 : [平日] 0530 - 2330 / [假日] 0530 - 2330`; `收費方式 : 一段票`;
  and `業者服務電話 : 三重客運迴龍站:02-8200-0511`.

### 橘22 / O22

The full official schedule page gives `瓊林 - 捷運新莊站`, weekday service
0630–1830, no holiday service (`停駛`), one-section fare and 三重客運新莊站
as the service contact.

- **Source:** "O22 route schedule" / `titleOriginal`: `橘22班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002200
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 瓊林 - 捷運新莊站`;
  `頭末班車 : [平日] 0630 - 1830 / [假日] 停駛`; `收費方式 : 一段票`;
  and `業者服務電話 : 三重客運新莊站:02-2202-8871`.

### 橘25 / O25

The full official schedule page gives `蘆洲 - 捷運三重國小站`, weekday
service 0600–1800, no holiday service (`停駛`), one-section fare and
三重客運蘆二站 as the service contact.

- **Source:** "O25 route schedule" / `titleOriginal`: `橘25班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002500
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 蘆洲 - 捷運三重國小站`;
  `頭末班車 : [平日] 0600 - 1800 / [假日] 停駛`; `收費方式 : 一段票`;
  and `業者服務電話 : 三重客運蘆二站:02-2285-5311`.

### 橘26 / O26

The full official schedule page gives `東昇公園 - 捷運迴龍站`, weekday
service 0530–2200, holiday service 0600–2100, one-section fare and
三重客運樹林站 as the service contact.

- **Source:** "O26 route schedule" / `titleOriginal`: `橘26班表`
- **Publisher:** New Taipei City Public Transportation Office / `新北市政府交通局`
- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0415002600
- **Kind/confidence:** PRIMARY; High — full official schedule page read.
- **Original-language text read:** `起迄站名 : 東昇公園 - 捷運迴龍站`;
  `頭末班車 : [平日] 0530 - 2200 / [假日] 0600 - 2100`; `收費方式 : 一段票`;
  and `業者服務電話 : 三重客運樹林站:02-2681-5303`.

## MRT stop-ID joins — not curated in this run

`data/tdx/bus/rail-stop-joins.json` has 20 entries, all `colour-brown`. Every
orange route's raw `railJoins` is a `normalized-name` match, discarded by
`lib/bus/routes.ts` since Run 48 Part 2 rather than presented as confirmed. No
new stop-ID curation was done for `colour-orange`: every page shows zero
confirmed MRT stop joins, even at termini named after stations (`捷運景安
站`, `捷運三重國小站`, `捷運新莊站`, `捷運迴龍站`).

## What remains TBC

- **All 18 routes:** opening date, earlier alignment, original corridor
  rationale and dated operator transfers are TBC.
- **橘3:** the current 7:00–9:00 weekday skip of 捷運頂溪站 is established;
  its creation date and rationale are TBC.
- **橘18 / 橘18福隆路:** both share termini and operator; their relationship
  (variant vs. historically distinct route) and the meaning of the `福隆路`
  suffix beyond a literal street name are TBC.
- **橘19 / 橘19副:** both share termini and operator; their relationship and
  the origin of the shorter 副 span are TBC.
- **橘21:** the current 32/20 weekday/holiday departure counts are
  established; their creation date and rationale are TBC.
- **Confirmed MRT stop-ID joins:** none exist for any orange route in
  `rail-stop-joins.json`.

## Checked and failed

- **Dated opening, corridor-rationale and operator-change records for all 18
  routes** — full current schedule pages were checked, but no dated primary
  history record was promoted from those pages. Checked 19 August 2026.

## Stated gaps

- The TDX snapshot has no route-length, service-span or headway fields for
  these content pages; route-specific timetable values are left in prose with
  their official eBus source, while structural specs remain TBC.
- Confirmed stop-ID MRT joins for `colour-orange` would need the same
  individual verification the brown pilot used for its 20 curated entries;
  none was attempted here.
