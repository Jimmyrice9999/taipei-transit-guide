---
title: 907通勤 / 907CB
summary: General-bus route 907通勤 (萬華 - 崇義高中).
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
    value: "Weekday 0610–2100; no holiday service (例假日停駛)"
    source: ebus-907cb
  - label: Headway by day type
    value: "Five named timed commuter workings: 907通勤0610, 907通勤0650, 907通勤0710, 907通勤0805, 907通勤2100"
    source: ebus-907cb
  - label: Fare / transfer
    value: Two-section fare (兩段票) throughout, because the route runs on the freeway; buffer zone 國道三甲交流道
    source: ebus-907cb
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records five subroutes, each named for a distinct scheduled departure time — 907通勤0610, 907通勤0650, 907通勤0710, 907通勤0805 and 907通勤2100.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 907通勤 under 一般公車, as a routeid entry separate from plain 907.
  - id: ebus-907cb
    title: 907通勤 route schedule
    titleOriginal: 907通勤班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100090790
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official schedule page listing the current 萬華–崇義高中 corridor, service span, fare, buffer zone and operator contact (欣欣客運華江站 02-2308-9487). Lists five separate named timetables (907通勤0610班表, 907通勤0650班表, 907通勤0710班表, 907通勤0805班表, 907通勤2100班表) and states verbatim: 0710班次發車起點為臺大綜合體育館."
---

## Classification and corridor

The official catalogue lists 907通勤 under 一般公車, as a routeid entry
separate from plain 907.[^ebus-general] Its full schedule page gives the same
萬華 - 崇義高中 corridor as plain 907, weekday-only service 0610–2100 with no
holiday service, the same two-section freeway fare and 國道三甲交流道 buffer
zone, and 欣欣客運華江站 as the service contact.[^ebus-907cb] The page states
that the 0710 working starts from 臺大綜合體育館 (NTU Sports Complex) rather
than the 萬華 terminus: 「0710班次發車起點為臺大綜合體育館」.[^ebus-907cb]

The confirmed stop sequences run the same 萬華–Gongguan–freeway–Xizhi
corridor as plain 907, with the five named timed workings covering
different partial spans of it — the 0805 and 2100 departures, for example,
start only from the freeway section at 自來水處(辛亥) rather than from
萬華.[^tdx-bus] As on plain 907, MRT-named stops on the Wanhua/Gongguan end
carry no confirmed join in the curated set.[^tdx-bus]

## Timed commuter workings

TDX records five subroutes for this route, each named for a specific
departure time: 907通勤0610, 907通勤0650, 907通勤0710, 907通勤0805 and
907通勤2100.[^tdx-bus] The schedule page's own labelling matches this pattern
exactly, presenting 907通勤0610班表, 907通勤0650班表, 907通勤0710班表,
907通勤0805班表 and 907通勤2100班表 as five separate named timetables rather
than one continuous headway.[^ebus-907cb] This confirms the subroutes are
scheduled peak/off-peak commuter departures, each run as its own named
working, rather than route-alignment variants.

## Committed stop sequence

The committed TDX snapshot carries 10 directional or variant stop sequences for 907CB; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**907CB (54 stops):** Huajiang Stop -> Renshou Village 1 -> Dali High School -> Huajiang Police Station -> China Times -> MRT Longshan Temple Sta -> Kunming St Entrance -> Heping & Zhonghua Intersection -> Taipei Botanical Garden -> Longkou Market -> Quanzhou St -> Heping W Rd Sec 1 -> Nanfu Banxi (Nanchang Park) -> MRT Guting Sta (Heping) -> National Taiwan Normal U -> NTNU Union Building 1 -> Wenzhou St Entrance -> Longan Elementary School (Civil Service Development Institute) -> NTU Sports Center -> National Taiwan U -> MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Taipei Water Department (Xinhai) -> Far East World Center -> Oriental Science Park -> Lianxing St Entrance -> XiZhi Farmers Association -> Xizhi City Hall -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi Senior High School(Zhongxiao E Rd) -> Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> NTU Sports Center -> National Taiwan U[^tdx-bus]

**907CB (51 stops):** MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Taipei Water Department (Xinhai) -> Far East World Center -> Oriental Science Park -> Lianxing St Entrance -> XiZhi Farmers Association -> Xizhi City Hall -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi Senior High School(Zhongxiao E Rd) -> Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> National Taiwan U -> NTU Sports Center -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Quanzhou St -> Longkou Market -> Taipei Botanical Garden -> Heping & Zhonghua Intersection -> Kunming St Entrance -> MRT Longshan Temple Sta -> China Times -> Huajiang Police Station -> Dali High School -> Renshou Village 1 -> Huajiang Stop[^tdx-bus]

**907CB (18 stops):** Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> NTU Sports Center -> National Taiwan U[^tdx-bus]

**907CB (51 stops):** MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Taipei Water Department (Xinhai) -> Far East World Center -> Oriental Science Park -> Lianxing St Entrance -> XiZhi Farmers Association -> Xizhi City Hall -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi Senior High School(Zhongxiao E Rd) -> Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> National Taiwan U -> NTU Sports Center -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Quanzhou St -> Longkou Market -> Taipei Botanical Garden -> Heping & Zhonghua Intersection -> Kunming St Entrance -> MRT Longshan Temple Sta -> China Times -> Huajiang Police Station -> Dali High School -> Renshou Village 1 -> Huajiang Stop[^tdx-bus]

**907CB (36 stops):** NTU Sports Center -> National Taiwan U -> MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Taipei Water Department (Xinhai) -> Far East World Center -> Oriental Science Park -> Lianxing St Entrance -> XiZhi Farmers Association -> Xizhi City Hall -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi Senior High School(Zhongxiao E Rd) -> Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> NTU Sports Center -> National Taiwan U[^tdx-bus]

**907CB (51 stops):** MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Taipei Water Department (Xinhai) -> Far East World Center -> Oriental Science Park -> Lianxing St Entrance -> XiZhi Farmers Association -> Xizhi City Hall -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi Senior High School(Zhongxiao E Rd) -> Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> National Taiwan U -> NTU Sports Center -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Quanzhou St -> Longkou Market -> Taipei Botanical Garden -> Heping & Zhonghua Intersection -> Kunming St Entrance -> MRT Longshan Temple Sta -> China Times -> Huajiang Police Station -> Dali High School -> Renshou Village 1 -> Huajiang Stop[^tdx-bus]

**907CB (11 stops):** Taipei Water Department (Xinhai) -> Far East World Center -> Oriental Science Park -> Lianxing St Entrance -> XiZhi Farmers Association -> Xizhi City Hall -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi Senior High School(Zhongxiao E Rd)[^tdx-bus]

**907CB (35 stops):** Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> National Taiwan U -> NTU Sports Center -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Quanzhou St -> Longkou Market -> Taipei Botanical Garden -> Heping & Zhonghua Intersection -> Kunming St Entrance -> MRT Longshan Temple Sta -> China Times -> Huajiang Police Station -> Dali High School -> Renshou Village 1 -> Huajiang Stop[^tdx-bus]

**907CB (18 stops):** NTU Sports Center -> National Taiwan U -> MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> Keelung and Changxing Intersection -> Taipei Water Department (Xinhai) -> Far East World Center -> Oriental Science Park -> Lianxing St Entrance -> XiZhi Farmers Association -> Xizhi City Hall -> Xioufong High School(Zhongxiao E Rd) -> Xizhi Rail Sta -> Modern Family Community -> Qiaodong -> Chongyi Senior High School(Zhongxiao E Rd)[^tdx-bus]

**907CB (35 stops):** Chongyi Senior High School(Zhongxiao E Rd) -> Qiaodong -> Modern Family Community -> Xizhi Rail Sta -> Xioufong High School(Zhongxiao E Rd) -> Xizhi City Hall -> XiZhi Farmers Association -> Lianxing St Entrance -> Oriental Science Park -> Far East World Center -> Taipei Water Department (Xinhai) -> Keelung and Changxing Intersection -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta -> National Taiwan U -> NTU Sports Center -> Wenzhou St Entrance -> NTNU Union Building 1 -> National Taiwan Normal U -> MRT Guting Sta (Heping) -> Nanfu Banxi (Nanchang Park) -> Heping W Rd Sec 1 -> Quanzhou St -> Longkou Market -> Taipei Botanical Garden -> Heping & Zhonghua Intersection -> Kunming St Entrance -> MRT Longshan Temple Sta -> China Times -> Huajiang Police Station -> Dali High School -> Renshou Village 1 -> Huajiang Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 5 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

Searching 台北市 公車907路 歷史 沿革 欣欣客運 in Chinese found fleet and
schedule history for plain 907 but nothing specific to a 907通勤 opening date
or predecessor route, so that detail is left TBC.[^tdx-bus] Route length also
remains TBC.[^tdx-bus]
