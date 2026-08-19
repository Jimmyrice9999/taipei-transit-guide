> **Corpus warning: `docs/research/` is leads only.** Nothing here may be
> published on its own authority. Every statement below was checked against the
> primary source named beside it; the file remains a research record, not a
> source.

# Blue-line feeder routes — research

**Run date: 19 August 2026.** This report covers the 38 records now
classified `colour-blue` in the committed TDX snapshot. No images were
fetched.

## Audit — official catalogue, false-prefix matches and a data correction

The full Taipei/New Taipei government bus catalogue has the heading
`捷運藍線接駁公車` and lists 38 labels: 藍1, 藍2, 藍5, 藍7, 藍7副, 藍10,
藍15, 藍17, 藍18, 藍20, 藍21, 藍21副, 藍22, 藍23, 藍25, 藍26, 藍27, 藍28,
藍29, 藍31, 藍32, 藍33, 藍35, 藍36, 藍37, 藍38, 藍39, 藍40, 藍41, 藍41延和,
藍43, 藍43延南天母, 藍44, 藍44延, 藍45, 藍46, 藍50 and 藍51.

- **Source:** "Taipei/New Taipei bus route catalogue" / `titleOriginal`:
  `大臺北公車`
- **Publisher:** Taipei City Government and New Taipei City Government /
  `臺北市政府與新北市政府`
- **URL:** https://ebus.gov.taipei/ebus?ct=all
- **Kind/confidence:** PRIMARY; High — the full government catalogue was
  fetched, including the blue-feeder section and each route's routeid.
- **Original-language text read:** `捷運藍線接駁公車` followed by the 38
  labels listed above, each linked to a `routeid` value used below.

**The committed TDX snapshot originally carried 39 `colour-blue` records —
one more than the catalogue.** The false-prefix audit searched every
normalized route name containing `藍`: 39 matches, all classified
`colour-blue` by the mechanical prefix rule (`identity.match(/^\s*(紅|藍|
綠|棕|橘|黃)/)` in `scripts/fetch-bus-tdx.mjs`). Checking each of the 39
against the fetched catalogue found 38 agree exactly. The 39th,
`藍海2線先導公車` (route 17958 / `NWT17958`, English name `Lan Hai2`), is
**not** in the catalogue's `捷運藍線接駁公車` list at all — it appears under
a separate heading, `捷運先導公車` ("MRT Pioneer Bus"), with routeid
`0410000200`.

Three independent signals corroborate the exclusion:

1. **Catalogue category.** ebus.gov.taipei files it under `捷運先導公車`,
   not `捷運藍線接駁公車` — fetched and read directly, not inferred from the
   name.
2. **English code pattern.** Every genuine blue route's TDX `subRoutes[].
   names.en` follows a `BL<number>` pattern (e.g. `BL26`, `BL41`). This
   route's is `BS2` — a different two-letter prefix, consistent with a
   distinct "Blue Sea" (藍海) brand rather than "Blue Line" (藍線).
3. **Its own (unconfirmed) rail candidate.** The route's raw `railJoins` in
   `data/tdx/bus/routes.json` — a `normalized-name` match, not a curated
   stop-ID confirmation — points at `R28` (Tamsui), a Red Line station, not
   anywhere on the Bannan (Blue) Line. A genuine Bannan feeder would not be
   expected to name-match a Tamsui-Xinyi Line stop at all.

- **Source:** "TDX bus route snapshot" / `titleOriginal`: `臺北市公車資料`
- **Publisher:** Ministry of Transportation and Communications TDX /
  `交通部運輸資料流通服務平台`
- **URL:** https://tdx.transportdata.tw/api-service/swagger
- **Kind/confidence:** PRIMARY; High — the committed TDX route record (id
  `bus-17958-zsgxuw`) was read directly, including `subRoutes[0].names.en:
  "BS2"` and the raw `railJoins` entry for stop `NWT198394`/`NWT198395`
  against station `R28`.
- **Original-language text read:** `"zh_tw": "藍海2線先導公車"`,
  `"en": "Lan Hai2"`, `"names": {"en": "BS2", "zh_tw": "藍海2"}` on the
  route's `subRoutes[0]` record.

**Correction made in this run.** `data/tdx/bus/routes.json` and
`data/tdx/bus/meta.json` were hand-patched: route `bus-17958-zsgxuw`'s
`group` field changed from `colour-blue` to `unclassified` (39 → 38 for
`colour-blue`, 13 → 14 for `unclassified`), and `scripts/fetch-bus-tdx.mjs`
gained a `COLOUR_PREFIX_OVERRIDES` table so a future `npm run tdx:bus`
re-fetch reproduces the same classification rather than silently reverting
it. `canonicalSlug` (`blue-2-1xzokkx`) was left unchanged — the route is not
in any built group's content folder, so its slug is not part of any URL
this site serves. This route is excluded from the `colour-blue` group and is
not linked to the Bannan Line anywhere on this site.

This is the first false-prefix exclusion in this project's bus work that the
mechanical classifier itself got wrong (red, green and orange's exclusions
were all names that never matched the leading-colour-character regex to
begin with). It confirms the brief's warning that a colour word in a route
name does not make it a colour-prefix service, even when the word sits at
the very start of the string.

## Batch 1 — 藍1, 藍2, 藍5, 藍7, 藍7副, 藍10, 藍15, 藍17, 藍18, 藍20, checked 19 August 2026

The full official schedule pages were fetched for all ten. They establish
current route identity, termini, service windows, fare class and operator
contacts. They do not establish route opening history, the original corridor
decision or dated operator changes; those fields remain TBC.

### 藍1 / BL1

`蘆洲 - 臺北車站`, weekday and holiday service 0600–2300, one-section fare,
三重客運蘆二站.

- **Source:** "BL1 route schedule" / `titleOriginal`: `藍1班表` — Taipei City
  Public Transportation Office / `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412000100 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 蘆洲 - 臺北車站`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 2300`; `收費方式 : 一段票`;
  `業者服務電話 : 三重客運蘆二站:02-2285-5311`.

### 藍2 / BL2

`新莊 - 捷運台大醫院站`, weekday and holiday service 0530–2300, one-section
fare, 首都客運新莊二站.

- **Source:** "BL2 route schedule" / `titleOriginal`: `藍2班表` — Taipei City
  Public Transportation Office / `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412000200 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 新莊 - 捷運台大醫院站`;
  `頭末班車 : [平日] 0530 - 2300 / [假日] 0530 - 2300`; `收費方式 : 一段票`;
  `業者服務電話 : 首都客運新莊二站:02-2205-7077`.

### 藍5 / BL5

`吳興街 - 捷運市政府站`, weekday service 0535–0030, holiday service
0545–0030, one-section fare, 大都會客運松德站.

- **Source:** "BL5 route schedule" / `titleOriginal`: `藍5班表` — Taipei City
  Public Transportation Office / `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000500 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 吳興街 - 捷運市政府站`;
  `頭末班車 : [平日] 0535 - 0030 / [假日] 0545 - 0030`; `收費方式 : 一段票`;
  `業者服務電話 : 大都會客運松德站:02-2759-0319`.

### 藍7 / BL7

`故宮 - 捷運市政府站`, weekday service 0630–2200, holiday service
0800–1930, one-section fare, 光華巴士故宮站.

- **Source:** "BL7 route schedule" / `titleOriginal`: `藍7班表` — Taipei City
  Public Transportation Office / `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000700 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 故宮 - 捷運市政府站`;
  `頭末班車 : [平日] 0630 - 2200 / [假日] 0800 - 1930`; `收費方式 : 一段票`;
  `業者服務電話 : 光華巴士故宮站:02-2882-2126`.

### 藍7副 / BL7Sub

`故宮 - 捷運市政府站`, weekday service 0600–1900, holiday service
0630–2130, one-section fare, 光華巴士故宮站 — same termini and operator as
藍7 on a separate TDX record.

- **Source:** "BL7Sub route schedule" / `titleOriginal`: `藍7副班表` —
  Taipei City Public Transportation Office / `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000710 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 故宮 - 捷運市政府站`;
  `頭末班車 : [平日] 0600 - 1900 / [假日] 0630 - 2130`; `收費方式 : 一段票`;
  `業者服務電話 : 光華巴士故宮站:02-2882-2126`.

### 藍10 / BL10

`民生社區 - 南港花園社區`, weekday and holiday service 0540–2330,
one-section fare, 首都客運內湖站.

- **Source:** "BL10 route schedule" / `titleOriginal`: `藍10班表` — Taipei
  City Public Transportation Office / `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112001000 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 民生社區 - 南港花園社區`;
  `頭末班車 : [平日] 0540 - 2330 / [假日] 0540 - 2330`; `收費方式 : 一段票`;
  `業者服務電話 : 首都客運內湖站:02-8792-5056`.

### 藍15 / BL15

`汐止 - 捷運昆陽站`, weekday and holiday service 0540–0010, one-section
fare, weekday peak/off-peak headways 5–8/8–12 minutes, holiday peak/off-peak
10/15 minutes, 中興巴士汐止站.

- **Source:** "BL15 route schedule" / `titleOriginal`: `藍15班表` — New
  Taipei City Public Transportation Office / `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412001500 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 汐止 - 捷運昆陽站`;
  `頭末班車 : [平日] 0540 - 0010 / [假日] 0540 - 0010`; `尖峰:5分至8分`;
  `離峰:8分至12分`; `收費方式 : 一段票`;
  `業者服務電話 : 中興巴士汐止站:02-2642-2625`.

### 藍17 / BL17

`五福新村 - 捷運永寧站`, weekday service 0530–2200, holiday service
0600–2200, one-section fare, 臺北客運五福站.

- **Source:** "BL17 route schedule" / `titleOriginal`: `藍17班表` — New
  Taipei City Public Transportation Office / `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412001700 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 五福新村 - 捷運永寧站`;
  `頭末班車 : [平日] 0530 - 2200 / [假日] 0600 - 2200`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運五福站:02-2251-8420`.

### 藍18 / BL18

`中和 - 新莊田徑場(中和里)`, weekday and holiday service 0600–2300,
one-section fare, two contacts: 首都客運新莊一站 and 臺北客運中和站.

- **Source:** "BL18 route schedule" / `titleOriginal`: `藍18班表` — New
  Taipei City Public Transportation Office / `新北市政府交通局` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412001800 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 中和 - 新莊田徑場(中和里)`;
  `頭末班車 : [平日] 0600 - 2300 / [假日] 0600 - 2300`; `收費方式 : 一段票`;
  `業者服務電話 : 首都客運新莊一站:02-2202-0450`;
  `臺北客運中和站:02-2247-7620`.

### 藍20 / BL20 Shuttle

`南港車站 - 捷運劍南路站`, weekday service 0600–2200, holiday service
0630–2200, one-section fare, 光華巴士東湖站. Records that some departures
bypass 三軍總醫院內湖.

- **Source:** "BL20 Shuttle route schedule" / `titleOriginal`: `藍20班表` —
  Taipei City Public Transportation Office / `臺北市政府公共運輸處` —
  https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002020 — PRIMARY;
  High.
- **Original-language text read:** `起迄站名 : 南港車站 - 捷運劍南路站`;
  `頭末班車 : [平日] 0600 - 2200 / [假日] 0630 - 2200`; `收費方式 : 一段票`;
  `業者服務電話 : 光華巴士東湖站:02-2794-2659`; and a note on departures
  bypassing 三軍總醫院內湖.

## Batch 2 — 藍21, 藍21副, 藍22, 藍23, 藍25, 藍26, 藍27, 藍28, 藍29, checked 19 August 2026

### 藍21 / BL21

`汐止社后 - 南港車站`, weekday and holiday service 0600–2130, one-section
fare, 光華巴士北峰站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002100 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 汐止社后 - 南港車站`;
  `頭末班車 : [平日] 0600 - 2130 / [假日] 0600 - 2130`; `收費方式 : 一段票`;
  `業者服務電話 : 光華巴士北峰站:02-8693-2251`.

### 藍21副 / BL21Sub

`汐止社后 - 南港車站`, weekday service 0615–1900, no holiday service
(`停駛`), one-section fare, 光華巴士北峰站 — same termini and operator as
藍21.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002110 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 汐止社后 - 南港車站`;
  `頭末班車 : [平日] 0615 - 1900 / [假日] 停駛`; `收費方式 : 一段票`;
  `業者服務電話 : 光華巴士北峰站:02-8693-2251`.

### 藍22 / BL22

`汐止 - 南港花園社區`, weekday and holiday service 0530–2340, two-section
fare, 大有巴士汐止站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002200 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 汐止 - 南港花園社區`;
  `頭末班車 : [平日] 0530 - 2340 / [假日] 0530 - 2340`; `收費方式 : 二段票`;
  `業者服務電話 : 大有巴士汐止站:02-2451-2089`.

### 藍23 / BL23

`汐止社后 - 捷運昆陽站`, weekday service 0550–2330, holiday service
0600–2330, one-section fare, 光華巴士北峰站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412002300 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 汐止社后 - 捷運昆陽站`;
  `頭末班車 : [平日] 0550 - 2330 / [假日] 0600 - 2330`; `收費方式 : 一段票`;
  `業者服務電話 : 光華巴士北峰站:02-8693-2251`.

### 藍25 / BL25

`中華科技大學 - 捷運昆陽站`, weekday and holiday service 0540–0020,
one-section fare, 大有巴士興中站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002500 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 中華科技大學 - 捷運昆陽站`;
  `頭末班車 : [平日] 0540 - 0020 / [假日] 0540 - 0020`; `收費方式 : 一段票`;
  `業者服務電話 : 大有巴士興中站:02-2653-4153`.

### 藍26 / BL26

`舊宗路 - 捷運市政府站`, weekday and holiday service 0600–2320, one-section
fare, 三重客運南港站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002600 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 舊宗路 - 捷運市政府站`;
  `頭末班車 : [平日] 0600 - 2320 / [假日] 0600 - 2320`; `收費方式 : 一段票`;
  `業者服務電話 : 三重客運南港站:02-2651-8473`.

### 藍27 / BL27

`內湖行政中心 - 捷運市政府站`, weekday and holiday service 0530–2300,
one-section fare, 大南汽車內湖站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002700 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 內湖行政中心 - 捷運市政府站`;
  `頭末班車 : [平日] 0530 - 2300 / [假日] 0530 - 2300`; `收費方式 : 一段票`;
  `業者服務電話 : 大南汽車內湖站:02-2792-9840`.

### 藍28 / BL28

`景明街口 - 東園`, weekday and holiday service 0550–0000, one-section fare,
欣欣客運景德站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002800 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 景明街口 - 東園`;
  `頭末班車 : [平日] 0550 - 0000 / [假日] 0550 - 0000`; `收費方式 : 一段票`;
  `業者服務電話 : 欣欣客運景德站:02-2933-0411`.

### 藍29 / BL29

`東園 - 聯合醫院中興院區`, weekday and holiday service 0600–0000,
one-section fare, 欣欣客運華江站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112002900 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 東園 - 聯合醫院中興院區`;
  `頭末班車 : [平日] 0600 - 0000 / [假日] 0600 - 0000`; `收費方式 : 一段票`;
  `業者服務電話 : 欣欣客運華江站:02-2308-9487`.

## Batch 3 — 藍31, 藍32, 藍33, 藍35, 藍36, 藍37, 藍38, 藍39, 藍40, checked 19 August 2026

### 藍31 / BL31

`五福新村 - 板橋後站`, weekday service 0530–2130, holiday service
0600–2100, one-section fare, 臺北客運五福站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003100 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 五福新村 - 板橋後站`;
  `頭末班車 : [平日] 0530 - 2130 / [假日] 0600 - 2100`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運五福站:02-2251-8420`.

### 藍32 / BL32

`南雅站 - 聯合醫院(板橋院區)`, weekday service 0600–2100, holiday service
0700–2000, one-section fare, 臺北客運南雅站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003200 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 南雅站 - 聯合醫院(板橋院區)`;
  `頭末班車 : [平日] 0600 - 2100 / [假日] 0700 - 2000`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運南雅站:02-8966-1274`.

### 藍33 / BL33

`五福新村 - 新北板橋公車站`, weekday-only service 0700–0815, no holiday
service (`停駛`), one-section fare, 臺北客運五福站. Records that the 07:00
departure detours via 光復國小/國中 except during school breaks.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003300 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 五福新村 - 新北板橋公車站`;
  `頭末班車 : [平日] 0700 - 0815 / [假日] 停駛`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運五福站:02-2251-8420`; and the 光復國小/國中 detour
  note.

### 藍35 / BL35

`歡仔園 - 捷運新埔站`, weekday-only service 0650–2000 with 11 departures,
no holiday service (`停駛`), one-section fare, 臺北客運歡仔園站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003500 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 歡仔園 - 捷運新埔站`;
  `頭末班車 : [平日] 0650 - 2000 / [假日] 停駛`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運歡仔園站:02-2969-7468`.

### 藍36 / BL36

`汐止社后 - 捷運昆陽站`, weekday service 0520–2330, holiday service
0530–2330, one-section fare, 首都客運汐止一站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112003600 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 汐止社后 - 捷運昆陽站`;
  `頭末班車 : [平日] 0520 - 2330 / [假日] 0530 - 2330`; `收費方式 : 一段票`;
  `業者服務電話 : 首都客運汐止一站:02-8693-3783`.

### 藍37 / BL37

`龍壽里 - 捷運板橋站`, weekday service 0535–2345, holiday service
0600–2345, one-section fare, 三重客運迴龍站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003700 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 龍壽里 - 捷運板橋站`;
  `頭末班車 : [平日] 0535 - 2345 / [假日] 0600 - 2345`; `收費方式 : 一段票`;
  `業者服務電話 : 三重客運迴龍站:02-8200-0511`.

### 藍38 / BL38

`樹林 - 板橋公車站`, weekday and holiday service 0520–0000, one-section
fare, peak headways 10 minutes, off-peak 15–20 minutes, 30 minutes after
22:30, 三重客運樹林站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003800 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 樹林 - 板橋公車站`;
  `頭末班車 : [平日] 0520 - 0000 / [假日] 0520 - 0000`; `尖峰:10分`;
  `離峰:15分至20分`; `22:30後30分`; `收費方式 : 一段票`;
  `業者服務電話 : 三重客運樹林站:02-2681-5303`.

### 藍39 / BL39

`汐止社后 - 南港車站`, weekday service 0600–2330 with 45 departures,
holiday service 0600–2330 with 36 departures, one-section fare, 光華巴士北
峰站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412003900 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 汐止社后 - 南港車站`;
  `頭末班車 : [平日] 0600 - 2330 / [假日] 0600 - 2330`; `收費方式 : 一段票`;
  `業者服務電話 : 光華巴士北峰站:02-8693-2251`; and the 45/36 departure
  counts.

### 藍40 / BL40

`華克山莊 - 土城`, weekday service 0630–2000, holiday service 0700–1900,
one-section fare, 臺北客運四海站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004000 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 華克山莊 - 土城`;
  `頭末班車 : [平日] 0630 - 2000 / [假日] 0700 - 1900`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運四海站:02-2262-2268`.

## Batch 4 — 藍41, 藍41延和, 藍43, 藍43延南天母, 藍44, 藍44延, 藍45, 藍46, 藍50, 藍51, checked 19 August 2026

### 藍41 / BL41

`員福里 - 捷運永安市場站`, weekday service 0545–2300, holiday service
0600–2300, one-section fare, 基隆客運土城站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004100 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 員福里 - 捷運永安市場站`;
  `頭末班車 : [平日] 0545 - 2300 / [假日] 0600 - 2300`; `收費方式 : 一段票`;
  `業者服務電話 : 基隆客運土城站:02-2260-2333`.

### 藍41延和 / BL41 Yanhe

`員福里 - 捷運永安市場站`, weekday service 0600–2230, holiday service
0635–2220, one-section fare, 基隆客運土城站 — same termini and operator as
藍41.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004170 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 員福里 - 捷運永安市場站`;
  `頭末班車 : [平日] 0600 - 2230 / [假日] 0635 - 2220`; `收費方式 : 一段票`;
  `業者服務電話 : 基隆客運土城站:02-2260-2333`.

### 藍43 / BL43

`三峽 - 捷運永寧站`, weekday service 0600–2000, holiday service
1730–1930, one-section fare, 臺北客運三峽二站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004300 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 三峽 - 捷運永寧站`;
  `頭末班車 : [平日] 0600 - 2000 / [假日] 1730 - 1930`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運三峽二站:02-8671-3796`.

### 藍43延南天母 / BL43 Ext Nantianmu

`三峽 - 捷運永寧站`, weekday service 0830–1720, holiday service
0630–1530, one-section fare, 臺北客運三峽二站 — same termini and operator
as 藍43, published name adds `延南天母`.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004370 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 三峽 - 捷運永寧站`;
  `頭末班車 : [平日] 0830 - 1720 / [假日] 0630 - 1530`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運三峽二站:02-8671-3796`.

### 藍44 / BL44

`樹林 - 捷運永寧站`, weekday and holiday service 0600–2000, one-section
fare, 28 weekday and 22 holiday departures at 20–50 minute intervals,
臺北客運樹林站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004400 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 樹林 - 捷運永寧站`;
  `頭末班車 : [平日] 0600 - 2000 / [假日] 0600 - 2000`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運樹林站:02-2681-1321`; and the 28/22 departure
  counts.

### 藍44延 / BL44Ext

`樹林 - 南天母廣場`, weekday-only service 0810–2040, no holiday service
(`停駛`), one-section fare, 臺北客運樹林站 — same origin and operator as
藍44 with a different destination.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004470 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 樹林 - 南天母廣場`;
  `頭末班車 : [平日] 0810 - 2040 / [假日] 停駛`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運樹林站:02-2681-1321`.

### 藍45 / BL45

`成福 - 捷運永寧站`, weekday service 0600–2200, holiday service
0700–2040, one-section fare, 臺北客運三峽二站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004500 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 成福 - 捷運永寧站`;
  `頭末班車 : [平日] 0600 - 2200 / [假日] 0700 - 2040`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運三峽二站:02-8671-3796`.

### 藍46 / BL46

`二鬮 - 捷運頂埔站`, weekday service 0600–2100, holiday service
0630–2030, one-section fare, 臺北客運三峽二站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0412004600 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 二鬮 - 捷運頂埔站`;
  `頭末班車 : [平日] 0600 - 2100 / [假日] 0630 - 2030`; `收費方式 : 一段票`;
  `業者服務電話 : 臺北客運三峽二站:02-8671-3796`.

### 藍50 / BL50

`新湖二路 - 捷運昆陽站`, weekday service 0630–2000, holiday service
0700–2000, one-section fare, 東南客運內湖站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112005000 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 新湖二路 - 捷運昆陽站`;
  `頭末班車 : [平日] 0630 - 2000 / [假日] 0700 - 2000`; `收費方式 : 一段票`;
  `業者服務電話 : 東南客運內湖站:02-8791-7712`.

### 藍51 / BL51

`捷運昆陽站 - 東湖安泰里`, weekday service 0600–1850, holiday service
0640–1850, one-section fare, 東南客運內湖站.

- **URL:** https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112005100 —
  PRIMARY; High.
- **Original-language text read:** `起迄站名 : 捷運昆陽站 - 東湖安泰里`;
  `頭末班車 : [平日] 0600 - 1850 / [假日] 0640 - 1850`; `收費方式 : 一段票`;
  `業者服務電話 : 東南客運內湖站:02-8791-7712`.

## MRT stop-ID joins — not curated in this run

`data/tdx/bus/rail-stop-joins.json` has 20 entries, all `colour-brown`. Every
blue route's raw `railJoins` is a `normalized-name` match, discarded by
`lib/bus/routes.ts` since Run 48 Part 2. No new stop-ID curation was done for
`colour-blue`: every page shows zero confirmed MRT stop joins, even at
termini named after stations (`捷運市政府站`, `捷運永寧站`, `捷運頂埔站`,
`捷運昆陽站`, `捷運永安市場站`, `捷運劍南路站`, `捷運台大醫院站`, `捷運新埔
站`, `捷運板橋站`).

## What remains TBC

- **All 38 routes:** opening date, earlier alignment, original corridor
  rationale and dated operator transfers are TBC.
- **藍7 / 藍7副, 藍18, 藍21 / 藍21副, 藍41 / 藍41延和, 藍43 / 藍43延南天母,
  藍44 / 藍44延:** each pair or group shares termini/origin and operator on
  separate TDX records; their relationships (variant vs. historically
  distinct route) and the meaning of each suffix beyond its literal reading
  are TBC.
- **藍20:** the current 三軍總醫院內湖 bypass is established; its creation
  date and rationale are TBC.
- **藍33:** the current 光復國小/國中 school-day detour is established; its
  creation date and rationale are TBC.
- **Confirmed MRT stop-ID joins:** none exist for any blue route in
  `rail-stop-joins.json`.

## Checked and failed

- **Dated opening, corridor-rationale and operator-change records for all 38 routes** —
  full current schedule pages were checked, but no dated primary
  history record was promoted from those pages. Checked 19 August 2026.

## Stated gaps

- The TDX snapshot has no route-length, service-span or headway fields for
  these content pages; route-specific timetable values are left in prose with
  their official eBus source, while structural specs remain TBC.
- The `藍海2線先導公車` / `捷運先導公車` pilot-bus category itself is not
  otherwise researched here — its exclusion from `colour-blue` is
  established, but its own history, purpose and relationship (if any) to a
  future MRT line are not.
- Confirmed stop-ID MRT joins for `colour-blue` would need the same
  individual verification the brown pilot used for its 20 curated entries;
  none was attempted here.
