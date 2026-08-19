---
title: G9 / 綠9
summary: Green-line feeder route G9 (綠9).
updated: 2026-08-18
line: G
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠9 under 捷運綠線接駁公車.
  - id: ebus-g9
    title: G9 route schedule
    titleOriginal: 綠9班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000900
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大香山–慈濟醫院 corridor, service span, fare, the accessible reserved-departure scheme and operator contact.
---

## Classification and corridor

The official catalogue lists 綠9 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 大香山 - 慈濟醫院, weekday service 0900–2300 with no holiday service, one-section fare and 大南汽車土城站 as the service contact. It also publishes an accessible reserved-departure scheme at 10:00, 12:00, 14:00 and 16:00 on weekdays, requiring booking two days in advance.[^ebus-g9] TDX carries two further records sharing the 綠9 number under different termini — 綠9耕莘 (`green-9-17j6i4`) and 綠9北新國小 (`green-9-eilq32`); their relationship to this route, if any, is TBC.

The confirmed stop sequence starts at 大香山, a remote hillside hamlet, and
loops through a run of gated communities — 名人鄉村, 大千豪景, 江坡華城 — with
an out-and-back detour to 大千豪景 itself in the middle of the loop, before
descending through 七張/大坪林 to end at 慈濟醫院.[^tdx-bus] This route shares
its entire 大香山-to-江坡華城 loop with its 綠9耕莘 and 綠9北新國小 siblings, and
is the only one of the three to continue as far as 捷運大坪林站 (Dapinglin,
G04, also Circular Line Y07) — the other two turn off earlier, at 耕莘醫院
and 北新國小 respectively.[^tdx-bus] 捷運七張站 (Qizhang, G03) is confirmed on
all three.[^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
