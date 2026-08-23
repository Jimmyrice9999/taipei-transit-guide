---
title: "M7 / 市民小巴7"
summary: "Minibus and community route: M7 (市民小巴7)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
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
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
  - id: ebus-route-minibus-7-opbhno
    title: "M7 route schedule"
    titleOriginal: "市民小巴7班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0153000700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 市民小巴7 under 市民小巴 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 2 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “麟光新村 - 捷運市政府站”, the current head/last-departure field “[平日] 0600 - 2300 [假日] 0600 - 2300”, fare “一段票”.[^ebus-route-minibus-7-opbhno]

The confirmed stop sequence runs from 麟光站, past 黎忠市場/富陽街口/信安
街/黎順里/景勤2號公園/克勤新村/黎雙公園/玄覺寺/綠光101/廣安宮/松山寺/吳興街
派出所/災害應變中心/世貿新城/101國際購物中心/市政府(松智), ending at 捷運市
政府站, with one working starting further out at 清水祖師廟/黎安里/大我新
舍.[^tdx-bus] Two confirmed interchanges are recorded in the curated
stop-ID join set, on two different rail lines: Linguang (BR06) and
Taipei City Hall (BL18), matching the route's own two ends.[^tdx-bus]
TDX records two named subroutes distinguishing whether a working
starts from 清水祖師廟.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for M7; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**M7 (18 stops):** Linguang -> Lizhong Market -> Fuyang St Entrance -> Xinan St -> Lishun Village -> Jingqin No2 Park -> Keqin New Village -> Lishuang Park -> Xuanjue Temple -> Luguang 101 -> Guangan Shrine -> Songshan Temple -> Wuxing St Police Substation -> Emergency Operations Center -> World Trade New Village -> Taipei 101 -> Taipei City Hall (Songzhi) -> MRT Taipei City Hall Sta[^tdx-bus]

**M7 (19 stops):** City Fire Department (Songren) -> Taipei City Hall (Songzhi) -> Taipei 101 -> World Trade New Village -> Emergency Operations Center -> Taipei Medical U Hospital -> Songshan Temple -> Guangan Shrine -> Xuanjei Temple -> Lishuang Park -> Keqin New Village -> Jingqin No2 Park -> Jiaxing Village -> Lishun Village -> Xinan St -> Fuyang St Entrance -> Lizhong Market -> MRT Linguang Sta -> Linguang[^tdx-bus]

**M7(Zushi Temple) (21 stops):** Qingshui Zushi Temple -> Lian Village -> Dawoxinshe -> Linguang -> Lizhong Market -> Fuyang St Entrance -> Xinan St -> Lishun Village -> Jingqin No2 Park -> Keqin New Village -> Lishuang Park -> Xuanjue Temple -> Luguang 101 -> Guangan Shrine -> Songshan Temple -> Wuxing St Police Substation -> Emergency Operations Center -> World Trade New Village -> Taipei 101 -> Taipei City Hall (Songzhi) -> MRT Taipei City Hall Sta[^tdx-bus]

**M7(Zushi Temple) (22 stops):** City Fire Department (Songren) -> Taipei City Hall (Songzhi) -> Taipei 101 -> World Trade New Village -> Emergency Operations Center -> Taipei Medical U Hospital -> Songshan Temple -> Guangan Shrine -> Xuanjei Temple -> Lishuang Park -> Keqin New Village -> Jingqin No2 Park -> Jiaxing Village -> Lishun Village -> Xinan St -> Fuyang St Entrance -> Lizhong Market -> MRT Linguang Sta -> Linguang -> Dawoxinshe -> Lian Village -> Qingshui Zushi Temple[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] A headway-by-day-type figure also stays TBC, and no stated reason for pairing 麟光新村 with 捷運市政府站 specifically as the route's own termini was found in this search, nor a stated reason for the specific 清水祖師廟 extension existing as a separately named subroute.
