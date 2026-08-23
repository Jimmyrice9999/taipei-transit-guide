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

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for Zhongxiao Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Zhongxiao Metro Bus (54 stops):** Luzhou Bus Terminal -> Wangye Temple Entrance -> National Open Univ(Zhongzheng Rd) -> Zhongyuan Apartment -> Luzhou Elementary School -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Sanhe Junior High School -> Ger-Jyh Senior High School(Sanhe Rd) -> Houde Police Station -> Delin Temple(Sanhe Rd) -> Longmen Rd Entrance -> Sanan Village -> Changshou W St Entrance -> Changyuan WSt Entrance -> Zhengyi and Chongxin Intersection -> Tiantai Square -> Datong Rd Entrance -> Zhongshan Art park -> MRT Cailiao Sta -> Guozun St -> Sanchong City Office -> Tax Administration -> Cailiao(Chongyang Rd) -> Jimei Elementary School -> Sanchong Civil Sports Center -> Sanchong High School -> Chongan St Entrance(Jimei St) -> Taipei Main Sta (Zhongxiao) -> MRT Shandao Temple Sta -> Huashan Cultural and Creative Industries Park -> Zhongxiao Elementary School -> Nat'l Taipei U of Technology (Zhongxiao) -> Zhengyi Post Office -> Huaisheng Junior High School -> Dinghao Market -> MRT Zhongxiao Dunhua Sta -> Apollo Building -> Tourism Administration, MOTC -> MRT Sun Yat-sen Memorial Hall Sta (Zhongxiao) -> United Daily News -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Li (Songshan) -> Shuangyong Elementary School -> Yongji and Songshan Intersection -> Songshan Rail Sta (Songshan)[^tdx-bus]

**Zhongxiao Metro Bus (47 stops):** Hulin St Entrance -> Yongji Junior High School -> Songlong Rd Entrance -> Songshan High School (Songlong) -> United Daily News -> MRT Sun Yat-sen Memorial Hall Sta (Zhongxiao) -> Tourism Administration, MOTC -> Apollo Building -> MRT Zhongxiao Dunhua Sta -> Dinghao Market -> MRT Zhongxiao Fuxing Sta -> Zhengyi Post Office -> Nat'l Taipei U of Technology (Zhongxiao) -> Zhongxiao Elementary School -> Huashan Cultural and Creative Industries Park -> MRT Shandao Temple Sta -> Taipei Main Sta (Zhongxiao) -> Chongan St Entrance(Jimei St) -> Sanchong High School -> Sanchong Civil Sports Center -> Jimei Elementary School -> Cailiao(Chongxin Rd) -> MRT Cailiao Sta -> Zhongshan Art park -> Datong Rd Entrance -> Zhengyi&Chongxin Intersection -> Changyuan WSt Entrance -> Changshou W St Entrance -> Sanan Village -> Longmen Rd Entrance -> Delin Temple(Sanhe Rd) -> Houde Police Station -> Ger-Jyh Senior High School(Sanhe Rd) -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Office(Zhongzheng Rd) -> Luzhou Elementary School -> Zhongyuan Apartment -> National Open Univ(Zhongzheng Rd) -> Wangye Temple Entrance -> Luzhou Bus Terminal[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 1 direction/variant record, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
