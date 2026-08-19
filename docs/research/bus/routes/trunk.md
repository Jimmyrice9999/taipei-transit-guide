> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Trunk routes (幹線) — research

**Run date: 19 August 2026.** This report covers the 19 records in the
merged TDX snapshot classified `trunk`. No images were fetched.

## Audit — official catalogue and false-prefix matches

The full Taipei/New Taipei government bus catalogue has a heading
`幹線專車` and lists 19 labels: 中山幹線, 仁愛幹線, 內湖幹線, 北環幹線,
民生幹線, 民權幹線, 和平幹線, 忠孝幹線, 承德幹線, 東環幹線, 松江新生幹線,
信義幹線, 南京幹線, 南環幹線, 重慶幹線, 基隆路幹線, 復興幹線, 敦化幹線 and
羅斯福路幹線. This matches the TDX `trunk` group exactly — 19 records, no
catalogue/TDX discrepancy.

- **Source:** "Taipei/New Taipei bus route catalogue" / `titleOriginal`:
  `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government /
  `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=all
- **Kind/confidence:** PRIMARY; High — the full government catalogue was
  fetched, including the 幹線專車 section and each route's routeid.
- **Original-language text read:** `幹線專車` followed by the 19 labels
  listed above, each linked to a `routeid` value used below.

**Colour-word false-prefix audit.** None of the 19 trunk route names contain
any of 紅/藍/綠/棕/橘/黃 at all — not as a prefix, not anywhere in the name.
This is consistent with `docs/bus-architecture.md`'s classification
precedence: trunk is the route's own official service class (`幹線`), and no
colour word appears to test against it. This audit found nothing to exclude,
which is itself the audit result for this group: unlike red, green, orange
and blue, trunk had no colour-character candidate at all to check.

- **Source:** "TDX bus data" / `titleOriginal`: `交通部運輸資料流通服務平臺`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平臺`
- **URL:** https://tdx.transportdata.tw/
- **Kind/confidence:** PRIMARY; High — all 19 `trunk`-group route names were
  read directly and checked character-by-character against 紅/藍/綠/棕/橘/黃.
- **Original-language text read:** the 19 route names listed above, none of
  which contain a colour character.

## Batch 1 — all 19 trunk routes, checked 19 August 2026

The 19 full official schedule pages were fetched. They establish current
route identity, termini, service windows, fare class and operator contacts.
They do not establish route opening history, the original corridor decision
or dated operator changes; those fields remain TBC. All 19 pages publish a
two-tier fare (`一段票` single-section or `兩段票` two-section) rather than
the flat one-section fare seen on most colour-prefixed feeder routes,
consistent with trunk routes running longer cross-city corridors.

### 民生幹線 / Minsheng Metro Bus

`麥帥新城 - 圓環`, weekday service 0550–2230, holiday service 0600–2230,
one-section fare, 首都客運內湖站.

- **Source:** "Minsheng Metro Bus route schedule" / `titleOriginal`:
  `民生幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000300 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 麥帥新城 - 圓環`;
  `頭末班車 : [平日] 0550 - 2230 / [假日] 0600 - 2230`; `收費方式 : 一段票`;
  `業者服務電話 : 首都客運內湖站:02-8792-5056`.

### 民權幹線 / Minquan Metro Bus

`南港 - 臺北橋`, weekday and holiday service 0540–2340, one-section fare,
首都客運南港站.

- **Source:** "Minquan Metro Bus route schedule" / `titleOriginal`:
  `民權幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001300 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 南港 - 臺北橋`;
  `頭末班車 : [平日] 0540 - 2340 / [假日] 0540 - 2340`; `收費方式 : 一段票`;
  `業者服務電話 : 首都客運南港站:02-2654-7071`.

### 復興幹線 / Fuxing Metro Bus

`建國北路 - 景美`, weekday and holiday service 0550–2300, one-section fare,
大都會客運建北站.

- **Source:** "Fuxing Metro Bus route schedule" / `titleOriginal`:
  `復興幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000800 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 建國北路 - 景美`;
  `頭末班車 : [平日] 0550 - 2300 / [假日] 0550 - 2300`; `收費方式 : 一段票`;
  `業者服務電話 : 大都會客運建北站:02-2501-3694`.

### 和平幹線 / Heping Metro Bus

`萬芳社區 - 衡陽路`, weekday and holiday service 0520–2300, one-section
fare, weekday peak headways 4–6 minutes, off-peak 5–10 minutes, holiday
15–20 minutes, 大都會客運萬芳站. Publishes a two-way transfer discount
(`公車雙向轉乘優惠`).

- **Source:** "Heping Metro Bus route schedule" / `titleOriginal`:
  `和平幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000700 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 萬芳社區 - 衡陽路`;
  `頭末班車 : [平日] 0520 - 2300 / [假日] 0520 - 2300`; `尖峰:4分至6分`;
  `離峰:5分至10分`; `收費方式 : 一段票`; `公車雙向轉乘優惠`;
  `業者服務電話 : 大都會客運萬芳站:02-2230-3428`.

### 東環幹線 / Donghuan Metro Bus

`松德站 - 捷運劍南路站`, weekday-only service 0630–1930, no holiday service
(`停駛`), one-section fare, 大都會客運松德站.

- **Source:** "Donghuan Metro Bus route schedule" / `titleOriginal`:
  `東環幹線班表` — New Taipei City Public Transportation Office /
  `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001600 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 松德站 - 捷運劍南路站`;
  `頭末班車 : [平日] 0630 - 1930 / [假日] 停駛`; `收費方式 : 一段票`;
  `業者服務電話 : 大都會客運松德站:02-2759-0319`.

### 松江新生幹線 / Songjiang Xinsheng Metro Bus

`青潭 - 復興北村`, weekday and holiday service 0530–2230, two-section fare,
新店客運新店站.

- **Source:** "Songjiang Xinsheng Metro Bus route schedule" /
  `titleOriginal`: `松江新生幹線班表` — New Taipei City Public
  Transportation Office / `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000400 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 青潭 - 復興北村`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0530 - 2230`; `收費方式 : 兩段票`;
  `業者服務電話 : 新店客運新店站:02-2217-1448`.

### 敦化幹線 / Dunhua Metro Bus

`麟光新村 - 榮總`, weekday and holiday service 0510–2230, two-section fare,
大都會客運麟光站.

- **Source:** "Dunhua Metro Bus route schedule" / `titleOriginal`:
  `敦化幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000500 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 麟光新村 - 榮總`;
  `頭末班車 : [平日] 0510 - 2230 / [假日] 0510 - 2230`; `收費方式 : 兩段票`;
  `業者服務電話 : 大都會客運麟光站:02-2733-7164`.

### 重慶幹線 / Chongqing Metro Bus

`天母 - 東園`, weekday and holiday service 0510–2230, two-section fare,
大都會客運榮總站.

- **Source:** "Chongqing Metro Bus route schedule" / `titleOriginal`:
  `重慶幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001000 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 天母 - 東園`;
  `頭末班車 : [平日] 0510 - 2230 / [假日] 0510 - 2230`; `收費方式 : 兩段票`;
  `業者服務電話 : 大都會客運榮總站:02-2821-7597`.

### 北環幹線 / Beihuan Metro Bus

`北士科 - 中華科技大學`, weekday service 0530–2230, holiday service
0600–2230, two-section fare, two contacts: 光華巴士北士科站 and
大有巴士興中站.

- **Source:** "Beihuan Metro Bus route schedule" / `titleOriginal`:
  `北環幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100062000 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 北士科 - 中華科技大學`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0600 - 2230`; `收費方式 : 兩段票`;
  `業者服務電話 : 光華巴士北士科站:02-2820-2588`;
  `大有巴士興中站:02-2653-4153`.

### 仁愛幹線 / Renai Metro Bus

`五福新村 - 南港花園社區`, weekday service 0455–2200, holiday service
0500–2200, two-section fare, 臺北客運五福站. Publishes a two-way transfer
discount and records that holiday/weekend service does not serve 市政府站.

- **Source:** "Renai Metro Bus route schedule" / `titleOriginal`:
  `仁愛幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000200 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 五福新村 - 南港花園社區`;
  `頭末班車 : [平日] 0455 - 2200 / [假日] 0500 - 2200`; `收費方式 : 兩段票`;
  `公車雙向轉乘優惠`; `[假日] 不停靠市政府站`;
  `業者服務電話 : 臺北客運五福站:02-2251-8420`.

### 中山幹線 / Zhongshan Metro Bus

`天母 - 青年公園`, weekday and holiday service 0530–2300, two-section fare,
光華巴士天東站.

- **Source:** "Zhongshan Metro Bus route schedule" / `titleOriginal`:
  `中山幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000600 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 天母 - 青年公園`;
  `頭末班車 : [平日] 0530 - 2300 / [假日] 0530 - 2300`; `收費方式 : 兩段票`;
  `業者服務電話 : 光華巴士天東站:02-2872-1527`.

### 南環幹線 / Nanhuan Metro Bus

`新店 - 臺北市政府`, weekday and holiday service 0525–2230, two-section
fare, 臺北客運新店站.

- **Source:** "Nanhuan Metro Bus route schedule" / `titleOriginal`:
  `南環幹線班表` — New Taipei City Public Transportation Office /
  `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113000100 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 新店 - 臺北市政府`;
  `頭末班車 : [平日] 0525 - 2230 / [假日] 0525 - 2230`; `收費方式 : 兩段票`;
  `業者服務電話 : 臺北客運新店站:02-2200-3203`.

### 羅斯福路幹線 / Roosevelt Rd. Metro Bus

`捷運動物園站 - 臺北車站`, weekday and holiday service 0530–0030,
two-section fare, 欣欣客運木柵二站.

- **Source:** "Roosevelt Rd. Metro Bus route schedule" / `titleOriginal`:
  `羅斯福路幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001600 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 捷運動物園站 - 臺北車站`;
  `頭末班車 : [平日] 0530 - 0030 / [假日] 0530 - 0030`; `收費方式 : 兩段票`;
  `業者服務電話 : 欣欣客運木柵二站:02-2239-7273`.

### 基隆路幹線 / Keelung Rd. Metro Bus

`大崎腳 - 捷運市政府站`, weekday and holiday service 0530–2230,
two-section fare, 新店客運新店站. Publishes a two-way transfer discount.

- **Source:** "Keelung Rd. Metro Bus route schedule" / `titleOriginal`:
  `基隆路幹線班表` — New Taipei City Public Transportation Office /
  `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001500 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 大崎腳 - 捷運市政府站`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0530 - 2230`; `收費方式 : 兩段票`;
  `公車雙向轉乘優惠`; `業者服務電話 : 新店客運新店站:02-2217-1448`.

### 信義幹線 / Xinyi Metro Bus

`捷運昆陽站 - 臺北車站`, weekday service 0530–2230, holiday service
0540–2230, one-section fare, 首都客運安康站.

- **Source:** "Xinyi Metro Bus route schedule" / `titleOriginal`:
  `信義幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001200 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 捷運昆陽站 - 臺北車站`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0540 - 2230`; `收費方式 : 一段票`;
  `業者服務電話 : 首都客運安康站:02-2794-6277`.

### 忠孝幹線 / Zhongxiao Metro Bus

`蘆洲 - 松山車站`, weekday and holiday service 0530–2230, two-section fare,
三重客運蘆洲站.

- **Source:** "Zhongxiao Metro Bus route schedule" / `titleOriginal`:
  `忠孝幹線班表` — New Taipei City Public Transportation Office /
  `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001100 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 蘆洲 - 松山車站`;
  `頭末班車 : [平日] 0530 - 2230 / [假日] 0530 - 2230`; `收費方式 : 兩段票`;
  `業者服務電話 : 三重客運蘆洲站:02-2285-5311`.

### 南京幹線 / Nanjing Metro Bus

`南港高工 - 圓環`, weekday service 0530–2300, holiday service 0550–2300,
one-section fare, 首都客運. Publishes a two-way transfer discount.

- **Source:** "Nanjing Metro Bus route schedule" / `titleOriginal`:
  `南京幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001400 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 南港高工 - 圓環`;
  `頭末班車 : [平日] 0530 - 2300 / [假日] 0550 - 2300`; `收費方式 : 一段票`;
  `公車雙向轉乘優惠`; `業者服務電話 : 首都客運經貿站:02-2654-6782`.

### 內湖幹線 / Neihu Metro Bus

`東湖 - 衡陽路`, weekday service 0445–0000, holiday service 0500–0000,
two-section fare, 大都會客運東湖站.

- **Source:** "Neihu Metro Bus route schedule" / `titleOriginal`:
  `內湖幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000100 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 東湖 - 衡陽路`;
  `頭末班車 : [平日] 0445 - 0000 / [假日] 0500 - 0000`; `收費方式 : 兩段票`;
  `業者服務電話 : 大都會客運東湖站:02-2631-7001`.

### 承德幹線 / Chengde Metro Bus

`新北投 - 捷運市政府站`, weekday and holiday service 0500–2200,
two-section fare, 大南汽車北投站.

- **Source:** "Chengde Metro Bus route schedule" / `titleOriginal`:
  `承德幹線班表` — Taipei City Public Transportation Office /
  `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000900 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 新北投 - 捷運市政府站`;
  `頭末班車 : [平日] 0500 - 2200 / [假日] 0500 - 2200`; `收費方式 : 兩段票`;
  `業者服務電話 : 大南汽車北投站:02-2893-5833`.

## MRT stop-ID joins — not curated in this run

`data/tdx/bus/rail-stop-joins.json` has 20 entries, all `colour-brown`. Every
trunk route's raw `railJoins` is a `normalized-name` match, discarded by
`lib/bus/routes.ts` since Run 48 Part 2. No new stop-ID curation was done for
`trunk`: every page shows zero confirmed MRT stop joins, even at termini
named after stations (`捷運市政府站`, `捷運劍南路站`, `捷運昆陽站`,
`捷運動物園站`). Trunk is not a feeder class by architecture — no "Feeder
line" fact is shown on any trunk page regardless of join status.

## What remains TBC

- **All 19 routes:** opening date, original corridor rationale and dated
  operator transfers are TBC. Taipei's 幹線公車 programme is publicly known
  to have launched in stages from 2013; no dated primary record for any
  individual route's introduction was promoted from a current schedule page.
- **和平幹線 / 仁愛幹線 / 南京幹線 / 基隆路幹線:** current two-way transfer
  discounts (`公車雙向轉乘優惠`) are established; their creation dates and
  fare mechanics are TBC.
- **仁愛幹線:** the current holiday non-stop at 市政府站 is established; its
  creation date and rationale are TBC.
- **Confirmed MRT stop-ID joins:** none exist for any trunk route in
  `rail-stop-joins.json`.

## Checked and failed

- **Dated opening, corridor-rationale and operator-change records for all 19 routes** —
  full current schedule pages were checked, but no dated primary
  history record was promoted from those pages. A general claim that the
  幹線公車 programme began in 2013 is a widely repeated secondary claim not
  verified here against a primary DORTS/PTO record, and is not published on
  any route page. Checked 19 August 2026.

## Stated gaps

- The TDX snapshot has no route-length, service-span or headway fields for
  these content pages; route-specific timetable values are left in prose with
  their official eBus source, while structural specs remain TBC.
- The 幹線公車 programme's own history — why these 19 corridors were chosen,
  when each opened, and how the class relates to the colour-prefixed MRT
  feeders — is not researched here beyond the current-service snapshot.
- Confirmed stop-ID MRT joins for `trunk` would need the same individual
  verification the brown pilot used for its 20 curated entries; none was
  attempted here.
