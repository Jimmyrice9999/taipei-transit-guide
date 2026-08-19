---
title: 39夜 / 39Night
summary: General-bus route 39夜 (三重 - 臺北車站).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday and holiday both 2330–0005, two departures (2330, 0005)"
    source: ebus-39night
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: "One-section fare multiplied by 1.5 (一段票乘以一點五倍): full/student cash NT$22, e-payment NT$18, elderly/disabled/child NT$12"
    source: ebus-39night
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records a single subroute, TPE155808, named 39(Night) / 39夜.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 39夜 under 一般公車, as a routeid entry separate from its 39 daytime parent route.
  - id: ebus-39night
    title: 39夜 route schedule
    titleOriginal: 39夜班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100003940
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official schedule page listing the current 三重–臺北車站 corridor, two nightly departures (2330, 0005) on both weekday and holiday, the fare rule 收費方式：一段票乘以一點五倍 with amounts 全票收費22元、軍警學生優待票投現22元、電子票證收費18元、老年身障孩童優待票12元, the same 蘆洲區復興路323巷(三重站-家樂福)路段隨招隨停 flag-stop segment as route 39, and operator contact (首都客運三重二站 02-2281-9186)."
  - id: zhwikiversity-39
    title: Taipei joint-operation bus route 39
    titleOriginal: 台北聯營公車39路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A39%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: Community-compiled entry for the parent route 39 that mentions a 夜間公車 (night bus) service running 23:30–00:05, but gives no separate opening date for it. Not used for any dated claim on this page.
---

## Classification and corridor

The official catalogue lists 39夜 under 一般公車, as a routeid entry separate
from its 39 daytime parent route.[^ebus-general] Its full schedule page gives
三重 - 臺北車站, with two nightly departures at 2330 and 0005 on both weekday
and holiday, a one-section fare multiplied by 1.5 (一段票乘以一點五倍) — stated
as 全票收費22元、軍警學生優待票投現22元、電子票證收費18元、老年身障孩童優待票12元 — the same
flag-stop segment on 蘆洲區復興路323巷 between 三重站 and 家樂福 as the daytime
route 39, and 首都客運三重二站 as the service contact.[^ebus-39night] The TDX
snapshot records a single subroute for this route, TPE155808, named
39(Night) / 39夜.[^tdx-bus]

The confirmed stop sequence runs the same 三重–臺北車站 corridor as its
daytime parent, past 徐匯中學/幸福市場/建和新村 and a stop literally named
捷運三和國中站, then through 三重's 忠孝路/龍門路 area before crossing into
Taipei to end at 臺北車站(忠孝).[^tdx-bus] The curated stop-ID join set
records zero confirmed interchanges for this route, matching its daytime
parent.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length and a headway figure remain TBC given the route's two-departure
nightly schedule.[^tdx-bus] The parent route 39's Wikiversity entry mentions
a night-bus service running 23:30–00:05 but gives it no separate opening
date, and no dedicated dated history for 39夜 itself was found in this
search.[^zhwikiversity-39] A same-numbered night route 39夜, or plain route
39, in other Taiwanese cities (Taichung, Kaohsiung, Taoyuan) was not found in
this search.
