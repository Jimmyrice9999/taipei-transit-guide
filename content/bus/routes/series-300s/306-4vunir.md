---
title: 306 / 306
summary: General-bus route 306 (蘆洲 - 凌雲五村), jointly run by two operators.
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
    value: "Weekday and holiday 0500–2200"
    source: ebus-306
  - label: Headway by day type
    value: "Peak 12–20 min"
    source: ebus-306
  - label: Fare / transfer
    value: Two-section fare (兩段票)
    source: ebus-306
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records two operators for this route, matching the two-operator contact split found on its schedule page.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 306 under 一般公車, as a routeid entry separate from its 306區 shuttle variant.
  - id: ebus-306
    title: 306 route schedule
    titleOriginal: 306班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030600
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 蘆洲–凌雲五村 corridor, service span, fare, buffer zone and two operator contacts (三重客運蘆洲站 02-2282-1429; 大都會客運舊莊站 02-2651-2945).
---

## Classification and corridor

The official catalogue lists 306 under 一般公車, as a separate routeid entry
from its 306區 shuttle variant.[^ebus-general] Its full schedule page gives
蘆洲 - 凌雲五村, weekday and holiday service 0500–2200 with peak frequency of
12–20 minutes, a two-section fare (兩段票), and two operator contacts:
三重客運蘆洲站 and 大都會客運舊莊站.[^ebus-306] A buffer zone applies between
涼州重慶路口 and MRT中山國小站(志仁高中) outbound, and the same MRT stop and
民權大龍街口 on the return working.[^ebus-306]

The confirmed stop sequence runs from 蘆洲 in New Taipei through 三重 — past
捷運徐匯中學站 and 捷運三和國中站 — into Taipei along the same Nanjing corridor
several other routes on this site follow, past 捷運中山站, 捷運松江南京站 and
捷運南京復興站, through Songshan and Nangang past 中研院 (Academia
Sinica).[^tdx-bus] The two operating companies' workings diverge only at the
very end: the 三重客運 working continues to 凌雲站 in the hills above Nangang,
while the 大都會客運 working instead turns off toward 舊莊 — a genuine
corridor difference between the two operators' services, not just a shared
number under two contracts.[^tdx-bus] Five separate MRT stations are named
along the shared portion, and none carries a confirmed join in the curated
set.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for 306; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**306 (69 stops):** Luzhou Bus Terminal -> Wangye Temple Entrance -> National Open Univ(Zhongzheng Rd) -> Zhongyuan Apartment -> Luzhou Elementary School -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Sanhe Junior High School -> Ger-Jyh Senior High School(Sanhe Rd) -> Houde Police Station -> Delin Temple(Sanhe Rd) -> Longmen Rd Entrance -> Sanan Village -> Changshou W St Entrance -> Changyuan WSt Entrance -> Zhengyi&Chongxin Intersection -> Sanchong Post Office -> Guangxing Elementary School -> sanchong airforce military kindred village no,1 -> Tianhou Temple -> Fude S Rd -> Liangzhou and Chongqing Intersection -> Minsheng and Chongqing Intersection -> Zhaoyang Park (Button St) -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jianguo Intersection -> Nanjing & Longjiang Intersection -> MRT Nanjing Fuxing Station -> Nanjing & Dunhua Intersection (Taipei Arena) -> Nanjing & Ningan Intersection -> NanJing-SanMin Intersection -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Nansongshan (Nanjing) -> Raohe St Night Market (Tayou) -> Songshan Farmers Association -> Songshan Rail Sta (Bade) -> Yucheng Village -> Songshan Brick Factory -> Nangang Rd Sec 3 -> Xixin Village (Xinxin Park) -> Yucheng Elementary School -> Tudigong Temple -> Dongming Village / Taipei Music Center -> Nangang Rd Sec2 Lane 178 Entrance -> Taifei New Village -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Hushih Park -> Jiuru Village 1 -> Lingyun Village 5 -> Jiuru Village 2 -> Lingyun Stop[^tdx-bus]

**306 (72 stops):** Lingyun Stop -> Jiuru Village 2 -> Lingyun Village 5 -> Jiuru Village 1 -> Hushih Park -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Taifei New Village -> Nangang Rd Sec2 Lane 178 Entrance -> Dongming Village / Taipei Music Center -> Tudigong Temple -> Yucheng Elementary School -> Xixin Village (Xinxin Park) -> Nangang Rd Sec 3 -> Songshan Brick Factory -> Yucheng Village -> Songshan Rail Sta (Bade) -> Songshan Farmers Association -> Raohe St Night Market (Tayou) -> Nansongshan (Nanjing) -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> NanJing-SanMin Intersection -> Nanjing & Ningan Intersection -> Nanjing & Dunhua Intersection (Taipei Arena) -> MRT Nanjing Fuxing Station -> Nanjing & Longjiang Intersection -> Nanjing & Jianguo Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Taipei Circle (Nanjing) -> Minsheng and Chongqing Intersection -> Liangzhou and Chongqing Intersection -> MRT Daqiaotou Sta -> Changji & Chongqing Intersection -> Minzu and Chongqing Intersection -> Lanzhou Junior High School -> Minzu and Chengde Intersection -> Datong Elementary School -> Minquan & Dalong Intersection -> Sanchong Police Station (Chongxin Rd) -> MRT Taipei Bridge Sta -> Zhengyi&Chongxin Intersection -> Changyuan WSt Entrance -> Changshou W St Entrance -> Sanan Village -> Longmen Rd Entrance -> Delin Temple(Sanhe Rd) -> Houde Police Station -> Ger-Jyh Senior High School(Sanhe Rd) -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Office(Zhongzheng Rd) -> Luzhou Elementary School -> Zhongyuan Apartment -> National Open Univ(Zhongzheng Rd) -> Wangye Temple Entrance -> Luzhou Bus Terminal[^tdx-bus]

**306 (67 stops):** Luzhou Bus Terminal -> Wangye Temple Entrance -> National Open Univ(Zhongzheng Rd) -> Zhongyuan Apartment -> Luzhou Elementary School -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Sanhe Junior High School -> Ger-Jyh Senior High School(Sanhe Rd) -> Houde Police Station -> Delin Temple(Sanhe Rd) -> Longmen Rd Entrance -> Sanan Village -> Changshou W St Entrance -> Changyuan WSt Entrance -> Zhengyi&Chongxin Intersection -> Sanchong Post Office -> Guangxing Elementary School -> sanchong airforce military kindred village no,1 -> Tianhou Temple -> Fude S Rd -> Liangzhou and Chongqing Intersection -> Minsheng and Chongqing Intersection -> Zhaoyang Park (Button St) -> Taipei Circle (Nanjing) -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jianguo Intersection -> Nanjing & Longjiang Intersection -> MRT Nanjing Fuxing Station -> Nanjing & Dunhua Intersection (Taipei Arena) -> Nanjing & Ningan Intersection -> NanJing-SanMin Intersection -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> Nansongshan (Nanjing) -> Raohe St Night Market (Tayou) -> Songshan Farmers Association -> Songshan Rail Sta (Bade) -> Yucheng Village -> Songshan Brick Factory -> Nangang Rd Sec 3 -> Xixin Village (Xinxin Park) -> Yucheng Elementary School -> Tudigong Temple -> Dongming Village / Taipei Music Center -> Nangang Rd Sec2 Lane 178 Entrance -> Taifei New Village -> Nangang Dist Admin Center(Nangang Rail Sta) -> Nangang Vocational High School (Nangang Rd) -> Nangang -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Jiuzhuang 1st Stop -> Jiuzhuang Elementary School -> Jiuzhuang[^tdx-bus]

**306 (70 stops):** Jiuzhuang -> Jiuzhuang Elementary School -> Jiuzhuang 1st Stop -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang -> Nangang Vocational High School (Nangang Rd) -> Nangang Dist Admin Center(Nangang Rail Sta) -> Taifei New Village -> Nangang Rd Sec2 Lane 178 Entrance -> Dongming Village / Taipei Music Center -> Tudigong Temple -> Yucheng Elementary School -> Xixin Village (Xinxin Park) -> Nangang Rd Sec 3 -> Songshan Brick Factory -> Yucheng Village -> Songshan Rail Sta (Bade) -> Songshan Farmers Association -> Raohe St Night Market (Tayou) -> Nansongshan (Nanjing) -> Nanjing Apartment (MRT Nanjing Sanmin Sta) -> NanJing-SanMin Intersection -> Nanjing & Ningan Intersection -> Nanjing & Dunhua Intersection (Taipei Arena) -> MRT Nanjing Fuxing Station -> Nanjing & Longjiang Intersection -> Nanjing & Jianguo Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Taipei Circle (Nanjing) -> Minsheng and Chongqing Intersection -> Liangzhou and Chongqing Intersection -> MRT Daqiaotou Sta -> Changji & Chongqing Intersection -> Minzu and Chongqing Intersection -> Lanzhou Junior High School -> Minzu and Chengde Intersection -> Datong Elementary School -> Minquan & Dalong Intersection -> Sanchong Police Station (Chongxin Rd) -> MRT Taipei Bridge Sta -> Zhengyi&Chongxin Intersection -> Changyuan WSt Entrance -> Changshou W St Entrance -> Sanan Village -> Longmen Rd Entrance -> Delin Temple(Sanhe Rd) -> Houde Police Station -> Ger-Jyh Senior High School(Sanhe Rd) -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Office(Zhongzheng Rd) -> Luzhou Elementary School -> Zhongyuan Apartment -> National Open Univ(Zhongzheng Rd) -> Wangye Temple Entrance -> Luzhou Bus Terminal[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 2 operator records, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records and
confirms this route's two operators.[^tdx-bus] Route length and full
headway detail beyond the peak figure above remain TBC, as does the
history of the two-operator split and any corridor realignment.
