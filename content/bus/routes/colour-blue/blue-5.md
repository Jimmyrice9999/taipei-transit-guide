---
title: BL5 / 藍5
summary: Blue-line feeder route BL5 (藍5).
updated: 2026-08-19
line: BL
facts:
  - label: Service class
    value: MRT blue-line feeder
    source: ebus-blue
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
  - id: ebus-blue
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 藍5 under 捷運藍線接駁公車.
  - id: ebus-bl5
    title: BL5 route schedule
    titleOriginal: 藍5班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0112000500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 吳興街–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 藍5 under 捷運藍線接駁公車.[^ebus-blue] Its full schedule page gives 吳興街 - 捷運市政府站, weekday service 0535–0030, holiday service 0545–0030, one-section fare and 大都會客運松德站 as the service contact.[^ebus-bl5]

The confirmed stop sequence climbs from 吳興街站 up 拇指山登山口/景雲街/公園/
網球場, past 挹翠山莊/糶米公園/泰和公園, before descending back to 吳興街站 and
running east along 松仁路/信義國中/世貿中心, ending at 捷運市政府站.[^tdx-bus] One
confirmed interchange is recorded in the curated stop-ID join set: Taipei
City Hall (BL18), matching the route's own terminus.[^tdx-bus] TDX records
four named subroutes — 藍5, 藍5去程半, 藍5返程半 and 藍5去程不上山往MRT市府 — the
last skipping the 拇指山 hillside loop entirely to run direct to the
terminus.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for BL5; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**B5 (23 stops):** Wuxing St Bus Terminal -> Military Technical Training Ctr -> Mt Muzhishan Hiking Trail -> Jingyun St -> Gongyuan -> Tennis Court -> Ruiyun St Entrance -> Ziyun St Entrance -> Water Tower -> Yicui Shanzhuang -> Tiaomi Park -> Taihe Park -> Taihe Village -> Wuxing St Bus Terminal -> Songren Rd -> Wuxing Elementary School (Songren) -> Xinyi Junior High School (Zhuangjing) -> Taipei Medical U -> Jingxin Village -> World Trade Center (Zhuangjing) -> Taipei 101 -> Taipei City Hall (Songzhi) -> MRT Taipei City Hall Sta[^tdx-bus]

**B5 (22 stops):** City Fire Department (Songren) -> Taipei City Hall (Songzhi) -> Taipei 101 -> World Trade Center (Zhuangjing) -> Jingxin Village -> Taipei Medical U -> Xinyi Junior High School (Zhuangjing) -> Wuxing Elementary School (Zhuangjing) -> Songren Rd -> Military Technical Training Ctr -> Mt Muzhishan Hiking Trail -> Jingyun St -> Gongyuan -> Tennis Court -> Ruiyun St Entrance -> Ziyun St Entrance -> Water Tower -> Yicui Shanzhuang -> Tiaomi Park -> Taihe Park -> Taihe Village -> Wuxing St Bus Terminal[^tdx-bus]

**B5(Taipei City Hall) (23 stops):** Wuxing St Bus Terminal -> Military Technical Training Ctr -> Mt Muzhishan Hiking Trail -> Jingyun St -> Gongyuan -> Tennis Court -> Ruiyun St Entrance -> Ziyun St Entrance -> Water Tower -> Yicui Shanzhuang -> Tiaomi Park -> Taihe Park -> Taihe Village -> Wuxing St Bus Terminal -> Songren Rd -> Wuxing Elementary School (Songren) -> Xinyi Junior High School (Zhuangjing) -> Taipei Medical U -> Jingxin Village -> World Trade Center (Zhuangjing) -> Taipei 101 -> Taipei City Hall (Songzhi) -> MRT Taipei City Hall Sta[^tdx-bus]

**B5(Taipei City Hall) (1 stops):** MRT Taipei City Hall Sta[^tdx-bus]

**B5(Taipei City Hall) (22 stops):** City Fire Department (Songren) -> Taipei City Hall (Songzhi) -> Taipei 101 -> World Trade Center (Zhuangjing) -> Jingxin Village -> Taipei Medical U -> Xinyi Junior High School (Zhuangjing) -> Wuxing Elementary School (Zhuangjing) -> Songren Rd -> Military Technical Training Ctr -> Mt Muzhishan Hiking Trail -> Jingyun St -> Gongyuan -> Tennis Court -> Ruiyun St Entrance -> Ziyun St Entrance -> Water Tower -> Yicui Shanzhuang -> Tiaomi Park -> Taihe Park -> Taihe Village -> Wuxing St Bus Terminal[^tdx-bus]

**B5(Taipei City Hall) (9 stops):** Wuxing St Bus Terminal -> Songren Rd -> Wuxing Elementary School (Songren) -> Xinyi Junior High School (Zhuangjing) -> Taipei Medical U -> Jingxin Village -> World Trade Center (Zhuangjing) -> Taipei 101 -> Taipei City Hall (Songzhi)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The route length also remains TBC, and no dated history for 藍5 or its own
near-19-hour, 0535–0030 span was found in this search. Nor was any stated
reason found for why the hillside loop past 拇指山登山口 exists as a separate
subroute choice rather than always being run, and no predecessor-route or
renumbering history for 藍5 was located either. A headway-by-day-type
figure is likewise absent from the primary schedule page beyond its own
weekday and holiday span statements.
