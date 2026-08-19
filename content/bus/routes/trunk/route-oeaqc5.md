---
title: Zhongxiao Metro Bus / 忠孝幹線
summary: Trunk route 忠孝幹線 (Zhongxiao Metro Bus).
updated: 2026-08-19
facts:
  - label: Service class
    value: Trunk route (幹線)
    source: ebus-trunk
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: TBC
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: TBC
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-trunk
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 忠孝幹線 under 幹線專車.
  - id: ebus-zhongxiao
    title: Zhongxiao Metro Bus route schedule
    titleOriginal: 忠孝幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161001100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–松山車站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 忠孝幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 蘆洲 - 松山車站, weekday and holiday service 0530–2230, a two-section fare and 三重客運蘆洲站 as the service contact.[^ebus-zhongxiao]

The confirmed stop sequence crosses from New Taipei into Taipei: it starts
at 蘆洲總站, runs through 三重's 徐匯中學/三和國中/菜寮 area, crosses into
central Taipei at 臺北車站, then runs the length of 忠孝東路 through Da'an
and Xinyi to end at 松山車站.[^tdx-bus] It carries the largest confirmed
interchange count of any route in this project's trunk-route coverage: 12
station points named directly in the stop sequence, including 捷運菜寮站
(Cailiao, O14), 臺北車站 (Taipei Main Station, on the Airport MRT as A1
alongside the Bannan Line and Tamsui–Xinyi Line), 捷運善導寺站 (Shandao
Temple, BL13), 捷運忠孝復興站 (served by both the Bannan Line as BL15 and
the Wenhu Line as BR10), 捷運忠孝敦化站 (Zhongxiao Dunhua, BL16), 捷運國父
紀念館站 (Sun Yat-Sen Memorial Hall, BL17), 捷運市政府站 (Taipei City Hall,
BL18) and 捷運永春站 (Yongchun, BL19).[^tdx-bus] The route effectively
threads the entire Bannan Line's central-Taipei stretch by road, station by
station, alongside its own street-level corridor.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
