---
title: Chengde Metro Bus / 承德幹線
summary: Trunk route 承德幹線 (Chengde Metro Bus).
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
    note: Lists 承德幹線 under 幹線專車.
  - id: ebus-chengde
    title: Chengde Metro Bus route schedule
    titleOriginal: 承德幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000900
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新北投–捷運市政府站 corridor, service span, fare and operator contact.
---

## Classification and corridor

The official catalogue lists 承德幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 新北投 - 捷運市政府站, weekday and holiday service 0500–2200, a two-section fare and 大南汽車北投站 as the service contact.[^ebus-chengde]

At roughly 70 stops each way, the confirmed stop sequence is among the
longest in this project's trunk-route coverage, spanning the length of the
city from Beitou to Xinyi.[^tdx-bus] It runs from 新北投, down 大業路 and 承德路
through 石牌 and 芝山, into 士林 and 劍潭, then along 中山北路 into central
Taipei, joins 南京東路 for the same Songshan stretch 南京幹線 and 忠孝幹線
also run, continues past 國父紀念館 and into Xinyi along 松仁路, ending at
捷運市政府站.[^tdx-bus] Confirmed interchanges named directly in the stop
sequence include 新北投 (Xinbeitou, R22A), 捷運芝山站 (Zhishan, R17),
捷運劍潭站 (Jiantan, R15), 捷運中山站 (a Songshan–Xindian–Tamsui/Xinyi
interchange, G14/R11), 捷運松江南京站 (a Songshan–Xindian–Zhonghe/Xinlu
interchange, G15/O08), 捷運南京復興站 (a Wenhu–Songshan/Xindian
interchange, BR11/G16), 捷運國父紀念館站 (Sun Yat-Sen Memorial Hall, BL17)
and 捷運市政府站 (Taipei City Hall, BL18).[^tdx-bus] Several further curated
codes do not repeat a station name in the stop text at all: Yuanshan (R14)
resolves to 庫倫街口, Minquan W. Rd. (O11/R13) resolves to 成淵高中 and
防癆協會, and Xiangshan (R02) resolves to a single stop at 信義松仁路口 far
from that station's own name.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for Chengde Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Chengde Metro Bus (67 stops):** Guizikeng Soil and Water Conservation Park -> Xiushan Li -> Cihang Temple -> Guotai New Village -> Zhonghe Village -> Fuxing High School -> Zhonghe St -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Beitou Elementary School -> Daye & Zhongyang N Rd Intersection -> Youhua High School (Daye) -> Daye Rd (MRT Beitou Sta) -> Daye Rd (Daxing St Entrance) -> Fengjia Arts Museum -> Daye Rd (Nungchan monastery) -> Chengde and Gongguan Intresection -> Linong Elementary School -> Shijian St Entrance -> Chengde Rd Sec 7 -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Xiaobei St -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Yuanshan Royal Building -> Jiantan Elementary School -> Minglun High School -> Kulun St Entrance -> Minzu and Chengde Intersection -> Datong Elementary School -> Chengyuan High School -> Minsheng W Rd Entrance -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jianguo Intersection -> Nanjing & Longjiang Intersection -> MRT Nanjing Fuxing Station -> Nanjing & Dunhua Intersection (Taipei Arena) -> Nanjing & Ningan Intersection -> Po Jen Hospital -> Taipei City Motor Vehicles Office (Guangfu) -> MRT Sun Yat-sen Memorial Hall Sta (Guangfu) -> Dr Sun Yat-sen Memorial Hall -> Citizens Housing -> Sanzhangli -> World Trade Center (Zhuangjing) -> Jingxin Village -> Taipei Medical U -> Xinyi Junior High School (Zhuangjing) -> Wuxing Elementary School (Songren) -> Songren Rd -> Songren Rd -> Wuxing Elementary School (Songren) -> Xinyi Junior High School  (Songren) -> Songping Rd Entrance -> Xinyi and Songren Intersection (Songren) -> Songshou Rd Entrance -> Taipei City Hall (SongShou) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**Chengde Metro Bus (70 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Songping Rd Entrance -> Xinyi Junior High School  (Songren) -> Wuxing Elementary School (Songren) -> Songren Rd -> Songren Rd -> Wuxing Elementary School (Songren) -> Xinyi Junior High School (Zhuangjing) -> Taipei Medical U -> Jingxin Village -> World Trade Center (Zhuangjing) -> Xinyi & Guangfu Intersection -> Sanzhangli -> Citizens Housing -> Dr Sun Yat-sen Memorial Hall -> MRT Sun Yat-sen Memorial Hall Sta (Guangfu) -> Taipei City Motor Vehicles Office (Guangfu) -> Veterans Service Center -> Nanjing & Ningan Intersection -> Nanjing & Dunhua Intersection (Taipei Arena) -> MRT Nanjing Fuxing Station -> Nanjing & Longjiang Intersection -> Nanjing & Jianguo Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Jiancheng Park -> Minsheng W Rd Entrance -> Chengyuan High School -> National Tuberculosis Association -> Datong Elementary School -> Chengde Rd Entrance -> Kulun St Entrance -> Minglun High School -> Jiantan Elementary School -> Yuanshan Royal Building -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Chengde Rd Sec 7 -> Shijian St Entrance -> Lixian Chengde Rd -> Linong Elementary School -> Chengde and Gongguan Intresection -> Daye Rd (Nungchan monastery) -> Fengjia Arts Museum -> Daye Rd (Daxing St Entrance) -> Daye Rd (MRT Beitou Sta) -> Youhua High School (Daye) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Zhonghe St -> Fuxing High School -> Zhonghe Village -> Guotai New Village -> Cihang Temple -> Xiushan Li -> Guizikeng Soil and Water Conservation Park -> Beitou Stop[^tdx-bus]

**Chengde(beitou-Taipei City Hall) (67 stops):** Guizikeng Soil and Water Conservation Park -> Xiushan Li -> Cihang Temple -> Guotai New Village -> Zhonghe Village -> Fuxing High School -> Zhonghe St -> Xinbeitou -> Beitou Park -> First Commercial Bank -> Beitou Elementary School -> Daye & Zhongyang N Rd Intersection -> Youhua High School (Daye) -> Daye Rd (MRT Beitou Sta) -> Daye Rd (Daxing St Entrance) -> Fengjia Arts Museum -> Daye Rd (Nungchan monastery) -> Chengde and Gongguan Intresection -> Linong Elementary School -> Shijian St Entrance -> Chengde Rd Sec 7 -> Shipai Fuhsing Temple -> Wenlin Elementary School -> Zhongzheng High School -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> MRT Zhishan Sta 1 -> Shilin -> Xiaobei St -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Yuanshan Royal Building -> Jiantan Elementary School -> Minglun High School -> Kulun St Entrance -> Minzu and Chengde Intersection -> Datong Elementary School -> Chengyuan High School -> Minsheng W Rd Entrance -> MRT Zhongshan Sta (Zhiren High School) -> Nanjing & Linsen Intersection -> Nanjing & Jilin Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jianguo Intersection -> Nanjing & Longjiang Intersection -> MRT Nanjing Fuxing Station -> Nanjing & Dunhua Intersection (Taipei Arena) -> Nanjing & Ningan Intersection -> Po Jen Hospital -> Taipei City Motor Vehicles Office (Guangfu) -> MRT Sun Yat-sen Memorial Hall Sta (Guangfu) -> Dr Sun Yat-sen Memorial Hall -> Citizens Housing -> Sanzhangli -> World Trade Center (Zhuangjing) -> Jingxin Village -> Taipei Medical U -> Xinyi Junior High School (Zhuangjing) -> Wuxing Elementary School (Songren) -> Songren Rd -> Songren Rd -> Wuxing Elementary School (Songren) -> Xinyi Junior High School  (Songren) -> Songping Rd Entrance -> Xinyi and Songren Intersection (Songren) -> Songshou Rd Entrance -> Taipei City Hall (SongShou) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**Chengde(Taipei City Hall-beitou) (70 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Songping Rd Entrance -> Xinyi Junior High School  (Songren) -> Wuxing Elementary School (Songren) -> Songren Rd -> Songren Rd -> Wuxing Elementary School (Songren) -> Xinyi Junior High School (Zhuangjing) -> Taipei Medical U -> Jingxin Village -> World Trade Center (Zhuangjing) -> Xinyi & Guangfu Intersection -> Sanzhangli -> Citizens Housing -> Dr Sun Yat-sen Memorial Hall -> MRT Sun Yat-sen Memorial Hall Sta (Guangfu) -> Taipei City Motor Vehicles Office (Guangfu) -> Veterans Service Center -> Nanjing & Ningan Intersection -> Nanjing & Dunhua Intersection (Taipei Arena) -> MRT Nanjing Fuxing Station -> Nanjing & Longjiang Intersection -> Nanjing & Jianguo Intersection -> MRT Songjiang Nanjing Sta -> Nanjing & Jilin Intersection -> Nanjing & Linsen Intersection -> MRT Zhongshan Sta (Zhiren High School) -> Jiancheng Park -> Minsheng W Rd Entrance -> Chengyuan High School -> National Tuberculosis Association -> Datong Elementary School -> Chengde Rd Entrance -> Kulun St Entrance -> Minglun High School -> Jiantan Elementary School -> Yuanshan Royal Building -> MRT Jiantan Sta (Taipei Performing Arts Center) -> Xiaobei St -> Shilin -> MRT Zhishan Sta 1 -> MRT Zhishan Sta (Taiwan Traditional Theatre Center) -> Zhongzheng High School -> Wenlin Elementary School -> Shipai Fuhsing Temple -> Chengde Rd Sec 7 -> Shijian St Entrance -> Lixian Chengde Rd -> Linong Elementary School -> Chengde and Gongguan Intresection -> Daye Rd (Nungchan monastery) -> Fengjia Arts Museum -> Daye Rd (Daxing St Entrance) -> Daye Rd (MRT Beitou Sta) -> Youhua High School (Daye) -> Daye & Zhongyang N Rd Intersection -> Beitou Elementary School -> First Commercial Bank -> Beitou Park -> Xinbeitou -> Zhonghe St -> Fuxing High School -> Zhonghe Village -> Guotai New Village -> Cihang Temple -> Xiushan Li -> Guizikeng Soil and Water Conservation Park -> Beitou Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
