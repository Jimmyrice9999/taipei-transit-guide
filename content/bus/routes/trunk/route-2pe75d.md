---
title: Nanhuan Metro Bus / 南環幹線
summary: Trunk route 南環幹線 (Nanhuan Metro Bus).
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
    note: Lists 南環幹線 under 幹線專車.
  - id: ebus-nanhuan
    title: Nanhuan Metro Bus route schedule
    titleOriginal: 南環幹線班表
    publisher: New Taipei City Public Transportation Office, 新北市政府交通局
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113000100
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 新店–臺北市政府 corridor, service span, fare and operator contact.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 南環幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 南環幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 新店 - 臺北市政府, weekday and holiday service 0525–2230, a two-section fare and 臺北客運新店站 as the service contact.[^ebus-nanhuan]

A community wiki lists 南環幹線 as the renamed form of a former MRT feeder,
綠1 — a Songshan–Xindian Line feeder losing its colour prefix and gaining a
compass-direction name, the same conversion pattern as 東環幹線's own 綠16
predecessor.[^zh-trunk-bus]

The confirmed stop sequence runs from 新店, through 安坑/景美/木柵 past
政治大學 (National Chengchi University) and the gondola's own 貓纜動物園站,
then along 信義路 into Xinyi, ending at 臺北市政府.[^tdx-bus] Five confirmed
interchanges are named directly in the stop sequence: 捷運新店站 (Xindian,
G01), 捷運新店區公所站 (Xindian District Office, G02), 捷運七張站 (Qizhang,
G03), 捷運動物園站 (Taipei Zoo, BR01) and 捷運台北101/世貿站 (Taipei
101/World Trade Center, R03), plus 捷運市政府站 (Taipei City Hall,
BL18).[^tdx-bus] A further curated code resolves to Ankang (K06), not
directly named in the stop sequence's own text.[^tdx-bus] TDX records two
named variants distinguishing whether the working starts from the 調度站
(dispatch depot) or from 捷運新店站 itself.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 8 directional or variant stop sequences for Nanhuan Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Nanhuan (53 stops):** Xindian Station -> Anxiang Rd Entrance -> Damaopu -> Kangle New Village -> Jen-Kang Hospital -> Yirenkeng -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> Langmanguizu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> Guanghua New Village(Ankang Rd) -> Anwar Rd Entrance -> Xiacheng Community -> The HU-LIAN House Memorial Hall -> Dingcheng -> Dapingding -> Xitou -> MRT Xindian Sta(Xindian Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Baoqiang Rd -> Baoqiao Rd Entrance -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Zhinan Rd Entrance -> National Chengchi University -> National Chengchi U 1 -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**Nanhuan (51 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U 1 -> Xinguang Rd Entrance -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park(Baozhong Rd) -> Baozhong Rd -> Bank of Taiwan -> BaoQiang Rd Entrance -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Hsintien City Hall Station -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Xindian Rd) -> Xitou -> Dapingding -> Dingcheng -> The HU-LIAN House Memorial Hall -> Xiacheng Community -> Anwar Rd Entrance -> Guanghua New Village(Ankang Rd) -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Langmanguizu -> Taipei Tobacco Factory -> Ankang Chezi Rd Intersection -> Yirenkeng -> Jen-Kang Hospital -> Kangle New Village -> Damaopu -> Anxiang Rd Entrance -> Green Villa Stage 1 -> Xindian Station[^tdx-bus]

**Nanhuan (35 stops):** MRT Xindian Sta(Xindian Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Baoqiang Rd -> Baoqiao Rd Entrance -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Zhinan Rd Entrance -> National Chengchi University -> National Chengchi U 1 -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**Nanhuan (32 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U 1 -> Xinguang Rd Entrance -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park(Baozhong Rd) -> Baozhong Rd -> Bank of Taiwan -> BaoQiang Rd Entrance -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Hsintien City Hall Station -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Xindian Rd)[^tdx-bus]

**Nanhuan (35 stops):** MRT Xindian Sta(Xindian Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Baoqiang Rd -> Baoqiao Rd Entrance -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Zhinan Rd Entrance -> National Chengchi University -> National Chengchi U 1 -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**Nanhuan (51 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U 1 -> Xinguang Rd Entrance -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park(Baozhong Rd) -> Baozhong Rd -> Bank of Taiwan -> BaoQiang Rd Entrance -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Hsintien City Hall Station -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Xindian Rd) -> Xitou -> Dapingding -> Dingcheng -> The HU-LIAN House Memorial Hall -> Xiacheng Community -> Anwar Rd Entrance -> Guanghua New Village(Ankang Rd) -> Ankang Police Station -> Gonglun New Village(Feng Rong Hospital) -> Langmanguizu -> Taipei Tobacco Factory -> Ankang Chezi Rd Intersection -> Yirenkeng -> Jen-Kang Hospital -> Kangle New Village -> Damaopu -> Anxiang Rd Entrance -> Green Villa Stage 1 -> Xindian Station[^tdx-bus]

**Nanhuan (53 stops):** Xindian Station -> Anxiang Rd Entrance -> Damaopu -> Kangle New Village -> Jen-Kang Hospital -> Yirenkeng -> Ankang Chezi Rd Intersection -> Taipei Tobacco Factory -> Langmanguizu -> Gonglun New Village(Feng Rong Hospital) -> Ankang Police Station -> Guanghua New Village(Ankang Rd) -> Anwar Rd Entrance -> Xiacheng Community -> The HU-LIAN House Memorial Hall -> Dingcheng -> Dapingding -> Xitou -> MRT Xindian Sta(Xindian Rd) -> Bitan Bridge -> Binlang Rd -> MRT Xindian City Hall Sta(Beixin) -> Qizhang(Beixin Rd) -> MRT Qizhang Sta -> Xindian Post Office -> Baoqiang Rd -> Baoqiao Rd Entrance -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Zhongshun Temple -> Sifa New Village -> Jingwen High School -> Munan Park -> Zhinan Rd Entrance -> National Chengchi University -> National Chengchi U 1 -> Wanxing Library -> Tacheng High School -> Wanshou Bridge (Xiuming) -> Wanshou Bridge (Xinguang) -> Maokong Gondola Taipei Zoo Station -> MRT Taipei Zoo Sta -> Shibikeng -> Fengdongshi -> Xinyi and Songren Intersection (Xinyi) -> MRT Taipei 101 / World Trade Center Sta (City Hall Rd) -> Taipei City Hall -> MRT Taipei City Hall Sta[^tdx-bus]

**Nanhuan (32 stops):** City Fire Department (Songren) -> Xingya Junior High School -> Xinyi and Songren Intersection (Songren) -> Fengdongshi -> Shibikeng -> MRT Taipei Zoo Sta -> Maokong Gondola Taipei Zoo Station -> Wanshou Bridge (Xinguang) -> Wanshou Bridge (Xiuming) -> Wanxing Elementary School -> National Chengchi U 1 -> Xinguang Rd Entrance -> Zhinan Rd Entrance -> Munan Park -> Jingwen High School -> Sifa New Village -> Zhongshun Temple -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park(Baozhong Rd) -> Baozhong Rd -> Bank of Taiwan -> BaoQiang Rd Entrance -> Xindian Post Office -> MRT Qizhang Sta -> Qizhang(Beixin Rd) -> MRT Hsintien City Hall Station -> Binlang Rd -> Bitan Bridge -> MRT Xindian Sta(Xindian Rd)[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 綠1 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or 臺北客運 announcement in this search.
