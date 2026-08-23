---
title: Renai Metro Bus / 仁愛幹線
summary: Trunk route 仁愛幹線 (Renai Metro Bus).
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
    note: Lists 仁愛幹線 under 幹線專車.
  - id: ebus-renai
    title: Renai Metro Bus route schedule
    titleOriginal: 仁愛幹線班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0161000200
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 五福新村–南港花園社區 corridor, service span, fare, the holiday non-stop note and operator contact.
---

## Classification and corridor

The official catalogue lists 仁愛幹線 under 幹線專車.[^ebus-trunk] Its full schedule page gives 五福新村 - 南港花園社區, weekday service 0455–2200, holiday service 0500–2200, a two-section fare and 臺北客運五福站 as the service contact. It publishes a two-way transfer discount and records that holiday/weekend service does not stop at 市政府站.[^ebus-renai]

Unlike most other trunk routes in this project's coverage, 仁愛幹線 begins
outside Taipei entirely: its confirmed stop sequence starts at 五福新村 in
Banqiao, New Taipei, crosses 華江橋 into Wanhua, then runs the length of
仁愛路 through central Taipei and Xinyi into Nangang, ending at 南港花園社區.[^tdx-bus] Six confirmed interchanges are named directly in the stop
sequence: 捷運龍山寺站 (Longshan Temple, BL10), 捷運西門站 (served by both the
Bannan Line as BL11 and the Songshan–Xindian Line as G12), 捷運台大醫院站
(NTU Hospital, R09), 捷運市政府站 (Taipei City Hall, BL18) — the stop the
schedule page's own holiday non-stop rule skips — and 捷運永春站 (Yongchun,
BL19).[^tdx-bus] TDX records a holiday-specific subroute matching the
schedule page's own 市政府站 exclusion.[^tdx-bus] It also records the route
under two named originating-terminus subroutes, 板橋發車 (departing Banqiao)
and 南港發車 (departing Nangang), each with its own weekday, holiday and
half-working records — seven subroutes in total, more than any other route
in this project's trunk-route coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 11 directional or variant stop sequences for Renai Metro Bus; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**Renai Metro Bus (46 stops):** Wufu New Village -> Fugui New Village -> Refrigeration Plant(Huaide) -> MRT Qilian Sta(Huaide) -> Jiangzicui -> Jiangcui Elementary School -> Huajiang Bridge -> China Times -> MRT Longshan Temple Sta -> Longshan Junior High School -> Xiaonanmen -> MRT Ximen Sta -> Baoqing Rd -> Hengyang Rd Entrance -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Renai & Zhongshan Intersection -> Renai and Linsen Intersection -> Renai & Shaoxing Intersection -> Renai & Linyi Intersection -> Renai and Xinsheng Intersection -> Xingan Elementary School -> Renai & Jianguo Intersection (1) -> Renai & Jianguo Intersection (2) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Daan Intersection (Renai Hospital) -> Renai and Dunhua Intersection (Circle) -> Renai & Anhe Intersection -> Cathay General Hospital -> Renai & Yanji Intersection -> Renai & Guangfu Intersection -> Dr Sun Yat-sen Memorial Hall -> Taipei City Hall -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Apartment -> Land Bank of Taiwan -> Xinyi & Songde Intersection -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance -> Nangang Garden Community 2[^tdx-bus]

**Renai Metro Bus (45 stops):** Chengfu Changchun Assembly -> Chengfu Rd Entrance -> Fude Elementary School -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> Guoye Village -> Dormitory of National Tax Administration of Taipei -> Xingya Junior High School -> Land Bank of Taiwan -> Yongchun Apartment -> MRT Yongchun Sta (Zhongxiao) -> Songshan High School of Agriculture and Industry -> City Fire Department (Zhongxiao) -> MRT Taipei City Hall Sta -> United Daily News -> Dr Sun Yat-sen Memorial Hall -> Renai & Guangfu Intersection -> Renai & Yanji Intersection -> Renai Cathay General Hospital -> Renai & Anhe Intersection -> Renai and Dunhua Intersection (Circle) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Jianguo Intersection (1) -> Xingan Elementary School -> Renai and Xinsheng Intersection -> Renai & Linyi Intersection -> Renai & Hangzhou Intersection -> Renai and Linsen Intersection -> Renai & Zhongshan Intersection -> MRT NTU Hospital Station -> Taiwan Museum (Xiangyang) -> Hengyang Rd Entrance -> Hengyang Rd -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> MRT Longshan Temple Sta -> China Times -> Huajiang Bridge -> Jiangcui Elementary School -> Huaide St (Wensheng) -> Refrigeration Plant(Wensheng) -> Music Park -> Wufu New Village[^tdx-bus]

**Renai Metro Bus (46 stops):** Wufu New Village -> Fugui New Village -> Refrigeration Plant(Huaide) -> MRT Qilian Sta(Huaide) -> Jiangzicui -> Jiangcui Elementary School -> Huajiang Bridge -> China Times -> MRT Longshan Temple Sta -> Longshan Junior High School -> Xiaonanmen -> MRT Ximen Sta -> Baoqing Rd -> Hengyang Rd Entrance -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Renai & Zhongshan Intersection -> Renai and Linsen Intersection -> Renai & Shaoxing Intersection -> Renai & Linyi Intersection -> Renai and Xinsheng Intersection -> Xingan Elementary School -> Renai & Jianguo Intersection (1) -> Renai & Jianguo Intersection (2) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Daan Intersection (Renai Hospital) -> Renai and Dunhua Intersection (Circle) -> Renai & Anhe Intersection -> Cathay General Hospital -> Renai & Yanji Intersection -> Renai & Guangfu Intersection -> Dr Sun Yat-sen Memorial Hall -> Taipei City Hall -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Apartment -> Land Bank of Taiwan -> Xinyi & Songde Intersection -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance -> Nangang Garden Community 2[^tdx-bus]

**Renai Metro Bus (45 stops):** Chengfu Changchun Assembly -> Chengfu Rd Entrance -> Fude Elementary School -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> Guoye Village -> Dormitory of National Tax Administration of Taipei -> Xingya Junior High School -> Land Bank of Taiwan -> Yongchun Apartment -> MRT Yongchun Sta (Zhongxiao) -> Songshan High School of Agriculture and Industry -> City Fire Department (Zhongxiao) -> MRT Taipei City Hall Sta -> United Daily News -> Dr Sun Yat-sen Memorial Hall -> Renai & Guangfu Intersection -> Renai & Yanji Intersection -> Renai Cathay General Hospital -> Renai & Anhe Intersection -> Renai and Dunhua Intersection (Circle) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Jianguo Intersection (1) -> Xingan Elementary School -> Renai and Xinsheng Intersection -> Renai & Linyi Intersection -> Renai & Hangzhou Intersection -> Renai and Linsen Intersection -> Renai & Zhongshan Intersection -> MRT NTU Hospital Station -> Taiwan Museum (Xiangyang) -> Hengyang Rd Entrance -> Hengyang Rd -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> MRT Longshan Temple Sta -> China Times -> Huajiang Bridge -> Jiangcui Elementary School -> Huaide St (Wensheng) -> Refrigeration Plant(Wensheng) -> Music Park -> Wufu New Village[^tdx-bus]

**Renai Metro Bus (46 stops):** Wufu New Village -> Fugui New Village -> Refrigeration Plant(Huaide) -> MRT Qilian Sta(Huaide) -> Jiangzicui -> Jiangcui Elementary School -> Huajiang Bridge -> China Times -> MRT Longshan Temple Sta -> Longshan Junior High School -> Xiaonanmen -> MRT Ximen Sta -> Baoqing Rd -> Hengyang Rd Entrance -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Renai & Zhongshan Intersection -> Renai and Linsen Intersection -> Renai & Shaoxing Intersection -> Renai & Linyi Intersection -> Renai and Xinsheng Intersection -> Xingan Elementary School -> Renai & Jianguo Intersection (1) -> Renai & Jianguo Intersection (2) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Daan Intersection (Renai Hospital) -> Renai and Dunhua Intersection (Circle) -> Renai & Anhe Intersection -> Cathay General Hospital -> Renai & Yanji Intersection -> Renai & Guangfu Intersection -> Dr Sun Yat-sen Memorial Hall -> United Daily News -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Apartment -> Land Bank of Taiwan -> Xinyi & Songde Intersection -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance -> Nangang Garden Community 2[^tdx-bus]

**Renai Metro Bus (45 stops):** Chengfu Changchun Assembly -> Chengfu Rd Entrance -> Fude Elementary School -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> Guoye Village -> Dormitory of National Tax Administration of Taipei -> Xingya Junior High School -> Land Bank of Taiwan -> Yongchun Apartment -> MRT Yongchun Sta (Zhongxiao) -> Songshan High School of Agriculture and Industry -> City Fire Department (Zhongxiao) -> MRT Taipei City Hall Sta -> United Daily News -> Dr Sun Yat-sen Memorial Hall -> Renai & Guangfu Intersection -> Renai & Yanji Intersection -> Renai Cathay General Hospital -> Renai & Anhe Intersection -> Renai and Dunhua Intersection (Circle) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Jianguo Intersection (1) -> Xingan Elementary School -> Renai and Xinsheng Intersection -> Renai & Linyi Intersection -> Renai & Hangzhou Intersection -> Renai and Linsen Intersection -> Renai & Zhongshan Intersection -> MRT NTU Hospital Station -> Taiwan Museum (Xiangyang) -> Hengyang Rd Entrance -> Hengyang Rd -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> MRT Longshan Temple Sta -> China Times -> Huajiang Bridge -> Jiangcui Elementary School -> Huaide St (Wensheng) -> Refrigeration Plant(Wensheng) -> Music Park -> Wufu New Village[^tdx-bus]

**Renai Metro Bus (46 stops):** Wufu New Village -> Fugui New Village -> Refrigeration Plant(Huaide) -> MRT Qilian Sta(Huaide) -> Jiangzicui -> Jiangcui Elementary School -> Huajiang Bridge -> China Times -> MRT Longshan Temple Sta -> Longshan Junior High School -> Xiaonanmen -> MRT Ximen Sta -> Baoqing Rd -> Hengyang Rd Entrance -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Renai & Zhongshan Intersection -> Renai and Linsen Intersection -> Renai & Shaoxing Intersection -> Renai & Linyi Intersection -> Renai and Xinsheng Intersection -> Xingan Elementary School -> Renai & Jianguo Intersection (1) -> Renai & Jianguo Intersection (2) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Daan Intersection (Renai Hospital) -> Renai and Dunhua Intersection (Circle) -> Renai & Anhe Intersection -> Cathay General Hospital -> Renai & Yanji Intersection -> Renai & Guangfu Intersection -> Dr Sun Yat-sen Memorial Hall -> United Daily News -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Apartment -> Land Bank of Taiwan -> Xinyi & Songde Intersection -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance -> Nangang Garden Community 2[^tdx-bus]

**Renai Metro Bus (45 stops):** Chengfu Changchun Assembly -> Chengfu Rd Entrance -> Fude Elementary School -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> Guoye Village -> Dormitory of National Tax Administration of Taipei -> Xingya Junior High School -> Land Bank of Taiwan -> Yongchun Apartment -> MRT Yongchun Sta (Zhongxiao) -> Songshan High School of Agriculture and Industry -> City Fire Department (Zhongxiao) -> MRT Taipei City Hall Sta -> United Daily News -> Dr Sun Yat-sen Memorial Hall -> Renai & Guangfu Intersection -> Renai & Yanji Intersection -> Renai Cathay General Hospital -> Renai & Anhe Intersection -> Renai and Dunhua Intersection (Circle) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Jianguo Intersection (1) -> Xingan Elementary School -> Renai and Xinsheng Intersection -> Renai & Linyi Intersection -> Renai & Hangzhou Intersection -> Renai and Linsen Intersection -> Renai & Zhongshan Intersection -> MRT NTU Hospital Station -> Taiwan Museum (Xiangyang) -> Hengyang Rd Entrance -> Hengyang Rd -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> MRT Longshan Temple Sta -> China Times -> Huajiang Bridge -> Jiangcui Elementary School -> Huaide St (Wensheng) -> Refrigeration Plant(Wensheng) -> Music Park -> Wufu New Village[^tdx-bus]

**Renai Metro Bus (46 stops):** Wufu New Village -> Fugui New Village -> Refrigeration Plant(Huaide) -> MRT Qilian Sta(Huaide) -> Jiangzicui -> Jiangcui Elementary School -> Huajiang Bridge -> China Times -> MRT Longshan Temple Sta -> Longshan Junior High School -> Xiaonanmen -> MRT Ximen Sta -> Baoqing Rd -> Hengyang Rd Entrance -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Renai & Zhongshan Intersection -> Renai and Linsen Intersection -> Renai & Shaoxing Intersection -> Renai & Linyi Intersection -> Renai and Xinsheng Intersection -> Xingan Elementary School -> Renai & Jianguo Intersection (1) -> Renai & Jianguo Intersection (2) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Daan Intersection (Renai Hospital) -> Renai and Dunhua Intersection (Circle) -> Renai & Anhe Intersection -> Cathay General Hospital -> Renai & Yanji Intersection -> Renai & Guangfu Intersection -> Dr Sun Yat-sen Memorial Hall -> Taipei City Hall -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Apartment -> Land Bank of Taiwan -> Xinyi & Songde Intersection -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance -> Nangang Garden Community 2[^tdx-bus]

**Renai Metro Bus (46 stops):** Wufu New Village -> Fugui New Village -> Refrigeration Plant(Huaide) -> MRT Qilian Sta(Huaide) -> Jiangzicui -> Jiangcui Elementary School -> Huajiang Bridge -> China Times -> MRT Longshan Temple Sta -> Longshan Junior High School -> Xiaonanmen -> MRT Ximen Sta -> Baoqing Rd -> Hengyang Rd Entrance -> Taiwan Museum (Xiangyang) -> MRT NTU Hospital Station -> Renai & Zhongshan Intersection -> Renai and Linsen Intersection -> Renai & Shaoxing Intersection -> Renai & Linyi Intersection -> Renai and Xinsheng Intersection -> Xingan Elementary School -> Renai & Jianguo Intersection (1) -> Renai & Jianguo Intersection (2) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Daan Intersection (Renai Hospital) -> Renai and Dunhua Intersection (Circle) -> Renai & Anhe Intersection -> Cathay General Hospital -> Renai & Yanji Intersection -> Renai & Guangfu Intersection -> Dr Sun Yat-sen Memorial Hall -> United Daily News -> MRT Taipei City Hall Sta -> Songshan High School of Agriculture and Industry -> MRT Yongchun Sta (Zhongxiao) -> Yongchun Apartment -> Land Bank of Taiwan -> Xinyi & Songde Intersection -> Dormitory of National Tax Administration of Taipei -> Songshan High School of Commerce and Home Economics (Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> MRT Guangci/Fengtian Temple Sta(Fude) -> Fude Elementary School -> Chengfu Rd Entrance -> Nangang Garden Community 2[^tdx-bus]

**Renai Metro Bus (45 stops):** Chengfu Changchun Assembly -> Chengfu Rd Entrance -> Fude Elementary School -> MRT Guangci/Fengtian Temple Sta(Fude) -> Xinyi Dist AdminCenter (Songyou New Village) -> Songshan High School of Commerce and Home Economics (Fude) -> Guoye Village -> Dormitory of National Tax Administration of Taipei -> Xingya Junior High School -> Land Bank of Taiwan -> Yongchun Apartment -> MRT Yongchun Sta (Zhongxiao) -> Songshan High School of Agriculture and Industry -> City Fire Department (Zhongxiao) -> MRT Taipei City Hall Sta -> United Daily News -> Dr Sun Yat-sen Memorial Hall -> Renai & Guangfu Intersection -> Renai & Yanji Intersection -> Renai Cathay General Hospital -> Renai & Anhe Intersection -> Renai and Dunhua Intersection (Circle) -> Renai & Fuxing Intersection (Howard Hotel) -> Renai & Jianguo Intersection (1) -> Xingan Elementary School -> Renai and Xinsheng Intersection -> Renai & Linyi Intersection -> Renai & Hangzhou Intersection -> Renai and Linsen Intersection -> Renai & Zhongshan Intersection -> MRT NTU Hospital Station -> Taiwan Museum (Xiangyang) -> Hengyang Rd Entrance -> Hengyang Rd -> MRT Ximen Sta -> Xiaonanmen -> Longshan Junior High School -> MRT Longshan Temple Sta -> China Times -> Huajiang Bridge -> Jiangcui Elementary School -> Huaide St (Wensheng) -> Refrigeration Plant(Wensheng) -> Music Park -> Wufu New Village[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 7 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the holiday non-stop's creation date and rationale remain TBC.[^tdx-bus]
