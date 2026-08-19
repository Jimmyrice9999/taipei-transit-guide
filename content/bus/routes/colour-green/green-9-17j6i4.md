---
title: G9Gengxin / 綠9耕莘
summary: Green-line feeder route G9Gengxin (綠9耕莘).
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
    note: Lists 綠9耕莘 under 捷運綠線接駁公車.
  - id: ebus-g9gengxin
    title: G9Gengxin route schedule
    titleOriginal: 綠9耕莘班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000990
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 大香山–耕莘醫院 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 綠9耕莘 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 大香山 - 耕莘醫院, weekday service 0740–1650, holiday service 1530–2100, one-section fare and 大南汽車土城站 as the service contact.[^ebus-g9gengxin] It shares its 大香山 origin and operator contact with plain 綠9 (`green-9-1furgka`) and 綠9北新國小 (`green-9-eilq32`), but TDX carries all three as separate records rather than variants of one route.

The confirmed stop sequence shares the same 大香山-to-江坡華城 gated-community
loop as its 綠9 and 綠9北新國小 siblings — including the same out-and-back
detour to 大千豪景 — but turns off after 七張(北新路) to end at 耕莘醫院 via
新店郵局 and 大豐國小, a different final leg from either sibling.[^tdx-bus] The
one confirmed interchange, 捷運七張站 (Qizhang, G03), is shared with both
siblings.[^tdx-bus] Its weekday and holiday spans barely overlap — 0740–1650
on weekdays against 1530–2100 on holidays, sharing only the 1530–1650
window — unlike the flat all-week hours most other routes in this project's
colour-green coverage publish.[^ebus-g9gengxin] A weekday evening rider
after 1650, or a holiday-morning rider before 1530, has no service on this
specific route at all — the two spans cover different parts of the day
depending on the day type, rather than one span shrinking on
holidays.[^ebus-g9gengxin]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and any dated relationship to the other 綠9 records remain TBC.[^tdx-bus]
