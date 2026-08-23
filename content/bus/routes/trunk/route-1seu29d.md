---
title: Beihuan Metro Bus / 北環幹線
summary: Trunk route 北環幹線 (Beihuan Metro Bus).
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
    note: Lists 北環幹線 under 幹線專車.
  - id: ebus-beihuan
    title: Beihuan Metro Bus route schedule
    titleOriginal: 北環幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100062000
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 北士科–中華科技大學 corridor, service span, fare and two operator contacts.
  - id: zh-trunk-bus
    title: Taipei trunk buses
    titleOriginal: 臺北市幹線公車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/臺北市幹線公車
    accessed: 2026-08-10
    kind: secondary
    lang: zh-Hant
    note: "Source for the list of numbered and colour-prefixed routes converted into named trunk routes, including 北環幹線's own predecessor. Corroborated by the Public Transport Office's own 2017 trunk-identity release for the general renaming programme, though that release does not itself name individual predecessor routes."
---

## Classification and corridor

The official catalogue lists 北環幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 北士科 - 中華科技大學, weekday service 0530–2230, holiday service 0600–2230, a two-section fare and two service contacts, 光華巴士北士科站 and 大有巴士興中站.[^ebus-beihuan]

A community wiki lists 北環幹線 as the renamed form of a former numbered
route, 620, one of eight conversions this project's joint-operation network
page records.[^zh-trunk-bus] The route's own eBus routeid, 0100062000,
carries the digits "620" inside it — a coincidence consistent with the
predecessor claim, though the routeid field's own construction rules are
not established here and the match is not treated as independent
confirmation.[^ebus-beihuan]

The confirmed stop sequence is the most Wenhu-Line-connected route in this
project's trunk-route coverage: it runs from 士林's 北士科 area, past 中研院
in Nangang, then the length of the Wenhu Line's own corridor through
Neihu — 捷運東湖站 (Donghu, BR22), 捷運葫洲站 (Huzhou, BR21), 捷運大湖公園站
(Dahu Park, BR20), 捷運內湖站 (Neihu, BR19), 捷運文德站 (Wende, BR18), 捷運港墘站
(Gangqian, BR17) and 捷運西湖站 (Xihu, BR16), all named directly in the stop
sequence — before returning to 士林 past 故宮 (the National Palace
Museum).[^tdx-bus] Three further curated codes resolve to Nangang (BL23),
Jiannan Rd. (BR15) and Taipei Nangang Exhibition Center (BR24), not
directly named in the stop sequence's own text.[^tdx-bus] TDX records four
subroute variants distinguishing whether a working detours via 士科路 and
whether it carries a dog-friendly (狗狗公車) designation.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 5 directional or variant stop sequences for Beihuan Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Beihuan(Airbus) (63 stops):** China U of Science & Technology (Main Entrance) -> China U of Science & Technology -> Soldiers Public Cemetry -> Lingyun Stop -> Jiuru Village 2 -> Lingyun Village 5 -> Jiuru Village 1 -> Hushih Park -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang Software Park S -> Nangang Software Park N -> MRT Donghu Sta (Nanhu High School) -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> Kangning Hospital -> Huangshigong Temple -> Dahu Park -> MRT Dahu Park Sta -> Dahu -> Jinlong Village -> MRT Neihu Sta -> Huguang Market -> Chenggong Rd Sec 3 -> Neihu High School -> MRT Wende Sta (Bihu Park) -> Huguang Public Housing -> Xihu Library (Huguang Church) -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Waishuangxi -> Gugong Rd Entrance -> CMPC Movie City -> Soochow U (Chien Mu House) -> Meilin New Village -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shilin Motor Vehicles Office -> Jianming Village -> Prosperity Center -> Shike Rd -> Fuguo ChengXin Intersection -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop[^tdx-bus]

**Beihuan (61 stops):** Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> Shike Rd -> WenCheng ChengXin Intersection -> Jianming Village -> Taipei Children's Amusement Park -> Shilin High School of Commerce -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow U (Chien Mu House) -> CMPC Movie City -> Waishuangxi -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Xihu Library (Huguang Church) -> Huguang Public Housing -> MRT Wende Sta (Bihu Park) -> Neihu High School -> Chenggong Rd Sec 3 -> Huguang Market -> MRT Neihu Sta -> Xiuhu -> Dahu -> MRT Dahu Park Sta -> Dahu Park -> Huangshigong Temple -> Kangning Hospital -> Kangning Community -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Minghu Junior High School -> MRT Donghu Sta (Nanhu High School) -> Nangang Software Park N -> Nangang Software Park S -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Hushih Park -> Jiuru Village 1 -> Lingyun Village 5 -> Jiuru Village 2 -> Lingyun Stop -> China U of Science & Technology (Main Entrance)[^tdx-bus]

**Beihuan (58 stops):** Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> Taipei Children's Amusement Park -> Shilin High School of Commerce -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow U (Chien Mu House) -> CMPC Movie City -> Waishuangxi -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Xihu Library (Huguang Church) -> Huguang Public Housing -> MRT Wende Sta (Bihu Park) -> Neihu High School -> Chenggong Rd Sec 3 -> Huguang Market -> MRT Neihu Sta -> Xiuhu -> Dahu -> MRT Dahu Park Sta -> Dahu Park -> Huangshigong Temple -> Kangning Hospital -> Kangning Community -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Minghu Junior High School -> MRT Donghu Sta (Nanhu High School) -> Nangang Software Park N -> Nangang Software Park S -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Hushih Park -> Jiuru Village 1 -> Lingyun Village 5 -> Jiuru Village 2 -> Lingyun Stop -> China U of Science & Technology (Main Entrance)[^tdx-bus]

**Beihuan (58 stops):** Fu Mei Stop -> Sanwang Temple -> FuMei ChengPing Intersection -> Farglory Ark Building -> Taipei Children's Amusement Park -> Shilin High School of Commerce -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow U (Chien Mu House) -> CMPC Movie City -> Waishuangxi -> Zihqiang Tunnel -> MRT Jiannan Rd Station -> Miramar -> Wenhu Elementary School -> Zhipan New Village -> MRT Xihu Station -> Shude High School of Commerce and Home Economics -> Lishan St -> MRT Gangqian Station (Neihu Vocational High School) -> Xihu Library (Huguang Church) -> Huguang Public Housing -> MRT Wende Sta (Bihu Park) -> Neihu High School -> Chenggong Rd Sec 3 -> Huguang Market -> MRT Neihu Sta -> Xiuhu -> Dahu -> MRT Dahu Park Sta -> Dahu Park -> Huangshigong Temple -> Kangning Hospital -> Kangning Community -> MRT Huzhou Sta (University of Kang Ning) -> Minghu Elementary School (PTS) -> Minghu Junior High School -> MRT Donghu Sta (Nanhu High School) -> Nangang Software Park N -> Nangang Software Park S -> TWTC Nangang Exhibition Hall -> Chengzheng Junior High School -> Nangang Water Plant -> Yuangong Bridge -> Zhongyan New Village -> Academia Sinica -> Hushih Park -> Jiuru Village 1 -> Lingyun Village 5 -> Jiuru Village 2 -> Lingyun Stop -> China U of Science & Technology (Main Entrance)[^tdx-bus]

**Beihuan (59 stops):** China U of Science & Technology (Main Entrance) -> China U of Science & Technology -> Soldiers Public Cemetry -> Lingyun Stop -> Jiuru Village 2 -> Lingyun Village 5 -> Jiuru Village 1 -> Hushih Park -> Academia Sinica -> Zhongyan New Village -> Yuangong Bridge -> Nangang Water Plant -> Chengzheng Junior High School -> TWTC Nangang Exhibition Hall -> Nangang Software Park S -> Nangang Software Park N -> MRT Donghu Sta (Nanhu High School) -> Minghu Junior High School -> Minghu Elementary School (PTS) -> MRT Huzhou Sta (University of Kang Ning) -> Kangning Hospital -> Huangshigong Temple -> Dahu Park -> MRT Dahu Park Sta -> Dahu -> Jinlong Village -> MRT Neihu Sta -> Huguang Market -> Chenggong Rd Sec 3 -> Neihu High School -> MRT Wende Sta (Bihu Park) -> Huguang Public Housing -> Xihu Library (Huguang Church) -> MRT Gangqian Station (Neihu Vocational High School) -> Lishan Jr High School -> Lishan St -> Shude High School of Commerce and Home Economics -> MRT Xihu Station -> Zhipan New Village -> Wenhu Elementary School -> Miramar -> MRT Jiannan Rd Station -> Waishuangxi -> Gugong Rd Entrance -> CMPC Movie City -> Soochow U (Chien Mu House) -> Meilin New Village -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Shilin Motor Vehicles Office -> FuMei ChengPing Intersection -> Sanwang Temple -> Fu Mei Stop[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 5 direction/variant records, 2 operator records, and 5 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus] The 620 predecessor claim rests on a secondary source and was not independently corroborated against a primary PTO or operator announcement in this search.
