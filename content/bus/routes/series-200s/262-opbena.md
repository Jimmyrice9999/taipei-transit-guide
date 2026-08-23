---
title: "262 / 262"
summary: "200-series route: 262 (262)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "200-series numbered service (一般公車)"
    source: ebus-general
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
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-general
    title: "Taipei/New Taipei bus route catalogue"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 一般公車 and its route-id link where a separate entry exists."
  - id: ebus-route-262-opbena
    title: "262 route schedule"
    titleOriginal: "262班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100026200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 262 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “宏國德霖科技大學 - 民生社區”, the current head/last-departure field “[平日] 0530 - 2130 [假日] 0600 - 2310”, fare “兩段票”.[^ebus-route-262-opbena]

At up to 77 stops, the confirmed stop sequence is among the longest
in this batch, running from 宏國德霖科技大學 in Tucheng, past 清水/土城
看守所/中正國中, through 中和高中/中和保養廠/捷運中和站, along 中興新村/
捷運頂溪站/重慶南路三段(中正橋), through 臺北車站(忠孝)/捷運忠孝敦化站/
臺北小巨蛋, ending at 民生社區.[^tdx-bus] Eleven confirmed interchanges
are recorded in the curated stop-ID join set, one more than its own
shuttle sibling 262區: Ximen, Taipei Main Station, Shandao Temple,
Zhongxiao Xinsheng, Zhongxiao Fuxing, Songshan Airport, Xiaonanmen,
Jingan, Dingxi, Zhonghe and Qiaohe.[^tdx-bus] TDX records only two
named direction/variant records, both half-trip workings (去程半/
返程半), with a longer published holiday span than its own weekday
one.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 2 directional or variant stop sequences for 262; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**262 (72 stops):** Hungkuo Delin University of Technology -> Qinghe Village -> Binlangke -> Qingshui Police Substation -> Qingshui -> New Taipei District Court(Qingyun) -> Tucheng Detention Center -> Chongqing & Zhongxiao Rd Entrance -> Guangfu Elementary School -> Yumin Rd Entrance(Xuefu Rd) -> New Taipei Senior High School -> Xueshi Rd Entrance -> Yumin Rd Entrance -> Zhongzheng Junior High School -> Taiwan New Taipei District Court(Jincheng) -> Qingshui Elementary School -> Yongfeng Rd Entrance -> Pinghe Village -> Transformer Station -> Drivers Training Center -> Zhonghe High School -> Liancheng Rd -> Zhongzheng Rd -> Pinghe Village -> Zhongyuan Village -> Zhongshan & Jinhe Intersection -> MRT Qiaohe Sta -> Zhonghe Maintenance Plant -> Jiamei industrial Area -> MRT Zhonghe Sta (Zhongshan Rd) -> Liancheng Rd Entrance -> Zhonghe Dist Office (Jingping Rd) -> Yuantong&Jingping Rd Entrance -> MRT Jingan Sta(Jingping Rd) -> Zhonghe Church -> Chih-Kuang Senior Commercial & Industrial Vocational High School -> Zhongxing Village 2 -> Zhongxing New Village -> Dehe Rd Entrance -> Yonghe Elementary School -> Fuhe Village -> Daxin St -> Zhengxing Village -> MRT Dingxi Sta -> Zhongzheng Bridge Stop -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> Ningpo and Chongqing Intersection -> Zhongzheng 2nd Police Dist -> Taipei First Girls High School (Chongqing) -> Boai Rd -> Taipei Post Office -> Taipei Main Sta (Zhongxiao) -> MRT Shandao Temple Sta -> Huashan Cultural and Creative Industries Park -> Zhongxiao Elementary School -> Nat'l Taipei U of Technology (Zhongxiao) -> Zhengyi Post Office -> Huaisheng Junior High School -> Dinghao Market -> MRT Zhongxiao Dunhua Sta -> Civic Boulevard Entrance -> Municipal　gymnasiumn -> Taipei Arena -> Chang-Gung Memorial Hospital -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Minsheng Activity Center -> Xindong St Entrance -> Tayou Rd -> Fuyuan Pumping Sta -> Tayou Door[^tdx-bus]

**262 (77 stops):** Zhuangjing Village -> Xinyi Village -> Minsheng Junior High School -> Xindong St Entrance -> Minsheng Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Fujin St Entrance -> Songshan Airport -> Minsheng & Dunhua Intersection -> Changchun & Dunhua Roads -> Taipei Arena -> Bade & Dunhua Intersection -> Civic Blvd and Dunhua Intersection -> Dinghao Market -> MRT Zhongxiao Fuxing Sta -> Zhengyi Post Office -> Nat'l Taipei U of Technology (Zhongxiao) -> Zhongxiao Elementary School -> Huashan Cultural and Creative Industries Park -> MRT Shandao Temple Sta -> Taipei Main Sta (Zhongxiao) -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen (TCUH Heping Branch) -> MRT Xiaonanmen Sta -> Zhongzheng 2nd Police Dist -> Ningpo and Chongqing Intersection -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> MRT Dingxi Sta -> Zhongxing St Entrance -> Yuxi St Entrance(Zhongzheng Rd) -> Daxin St -> Fuhe Village -> Yonghe Elementary School -> Dehe Rd Entrance -> Zhongxing New Village -> Zhongxing Village 2 -> Chih-Kuang Senior Commercial & Industrial Vocational High School -> Nanshijiao(Jingping Rd) -> Zhonghe Church -> MRT Jingan Sta(Jingping Rd) -> Yuantong&Jingping Rd Entrance -> Zhonghe Dist Office (Jingping Rd) -> Liancheng Rd Entrance -> MRT Zhonghe Sta(Zhongshan Rd) -> Jiamei Industrial Park -> Zhonghe Maintenance Plant -> MRT Qiaohe Sta -> Zhongshan and Jinhe Intersection -> Zhongyuan Village -> Pinghe Village -> Zhongzheng Rd -> Xinzhong Shi Community -> Liancheng Rd -> Zhonghe High School -> Drivers Training Center -> Transformer Station -> Pinghe Village -> Yongfeng Rd Entrance -> Qingshui Elementary School -> New Taipei District Court(Jincheng) -> Zhongzheng Junior High School -> Yumin Rd Entrance(Jincheng Rd) -> Xueshi Rd Entrance -> New Taipei Senior High School -> Yumin Rd Entrance(Xuefu Rd) -> Guangfu Elementary School -> Guangfu Li -> Tucheng Detention Center -> Taiwan New Taipei District Court(Qingyun) -> Qingshui -> Qingshui Police Substation -> Binlangke -> Qinghe Village -> Hungkuo Delin University of Technology[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for the route's own longer holiday span against a shorter weekday one, the reverse of the usual pattern in this batch, was found in this search.
