---
title: "225 / 225"
summary: "200-series route: 225 (225)."
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
  - id: ebus-route-225-slxl7g
    title: "225 route schedule"
    titleOriginal: "225班表"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100022500
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Full official route schedule page fetched and read. It supports the current published route identity, termini, service span, holiday operation and fare fields where shown; it is not used to invent route history."
---

## Classification and current service

The full official catalogue files 225 under 一般公車 (一般公車).[^ebus-general]
The normalized TDX record retains 4 direction/variant records for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full official schedule gives termini “蘆洲 - 民生社區”, the current head/last-departure field “[平日] 0500 - 2230 [假日] 0500 - 2230”, fare “兩段票”.[^ebus-route-225-slxl7g]

The confirmed stop sequence runs from 蘆洲總站, past 忠義國小/柳堤公園/
中原公園, through 捷運蘆洲站/蘆洲監理站/溪墘, along 捷運徐匯中學站/捷運三和
國中站/三重國小, through 捷運民權西路站/民權吉林路口/民權敦化路口, ending
at 松山機場's own 新益里 in Minsheng Community.[^tdx-bus] Eight confirmed
interchanges are recorded in the curated stop-ID join set, matching
the same list confirmed for its own shuttle sibling 225區: Zhongshan
Junior High School, Songshan Airport, Zhongshan Elementary School,
Minquan W. Rd., Sanchong Elementary School, Sanhe Junior High School,
St. Ignatius High School and Luzhou.[^tdx-bus] TDX records four named
direction/variant records, including a pet-friendly working (狗狗公車)
alongside the plain corridor and its two directional short-turns.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 6 directional or variant stop sequences for 225; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**225 (49 stops):** Luzhou Bus Terminal -> Zhongyi Elementary School -> Liuti Park -> Zhongyuan Park -> Changrong & Zhongyuan Rd -> Changrong & Guangming Rd -> Yongping Market -> Changrong Rd -> MRT Luzhou Sta -> Luzhou Bus Terminal -> Wangye Temple Entrance -> National Open Univ(Zhongzheng Rd) -> Zhongyuan Apartment -> Luzhou Elementary School -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Sanhe Junior High School -> Ger-Jyh Senior High School(Sanhe Rd) -> Houde Police Station -> Delin Temple(Sanhe Rd) -> Longmen Rd Entrance(Sanhe Rd) -> MRT Sanchong Elementary School -> Sanchong Elementary School -> Sanhe & Changrong  Intersection -> Changsheng St Entrance -> Sanchong Police Station(Fude N Rd) -> MRT Minquan W Rd Station -> Minquan and Zhongshan Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Jilin Intersection -> Minquan and Songjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Longjiang Intersection -> MRT Zhongshan Junior High School Sta -> Minsheng & Fuxing Intersection -> Minsheng & Dunhua Intersection -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Activity Center -> Guanghe New Village -> Sanmin Elementary School -> Xinyi Village[^tdx-bus]

**225 (49 stops):** Minsheng Junior High School -> Xindong St Entrance -> Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Fujin St Entrance -> Songshan Airport -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Songjiang Intersection -> Minquan and Jilin Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Zhongshan Intersection -> MRT Minquan W Rd Station -> Minquan & Dalong Intersection -> Sanchong Police Station(Fude N Rd) -> Changsheng St Entrance -> Sanhe & Changrong  Intersection -> Sanchong Elementary School -> MRT Sanchong Elementary School -> Delin Temple(Sanhe Rd) -> Houde Police Station -> Ger-Jyh Senior High School(Sanhe Rd) -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Office(Zhongzheng Rd) -> Luzhou Elementary School -> Zhongyuan Apartment -> National Open Univ(Zhongzheng Rd) -> Wangye Temple Entrance -> Luzhou Bus Terminal -> MRT Luzhou Sta -> Changrong Rd -> Yongping Market -> Changrong & Guangming Rd -> Changrong & Zhongyuan Rd -> Zhongyuan Park -> Liuti Park -> Zhongyi Elementary School -> Luzhou Bus Terminal[^tdx-bus]

**225 (49 stops):** Luzhou Bus Terminal -> Zhongyi Elementary School -> Liuti Park -> Zhongyuan Park -> Changrong & Zhongyuan Rd -> Changrong & Guangming Rd -> Yongping Market -> Changrong Rd -> MRT Luzhou Sta -> Luzhou Bus Terminal -> Wangye Temple Entrance -> National Open Univ(Zhongzheng Rd) -> Zhongyuan Apartment -> Luzhou Elementary School -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Sanhe Junior High School -> Ger-Jyh Senior High School(Sanhe Rd) -> Houde Police Station -> Delin Temple(Sanhe Rd) -> Longmen Rd Entrance(Sanhe Rd) -> MRT Sanchong Elementary School -> Sanchong Elementary School -> Sanhe & Changrong  Intersection -> Changsheng St Entrance -> Sanchong Police Station(Fude N Rd) -> MRT Minquan W Rd Station -> Minquan and Zhongshan Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Jilin Intersection -> Minquan and Songjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Longjiang Intersection -> MRT Zhongshan Junior High School Sta -> Minsheng & Fuxing Intersection -> Minsheng & Dunhua Intersection -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Activity Center -> Guanghe New Village -> Sanmin Elementary School -> Xinyi Village[^tdx-bus]

**225 (49 stops):** Minsheng Junior High School -> Xindong St Entrance -> Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Fujin St Entrance -> Songshan Airport -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Songjiang Intersection -> Minquan and Jilin Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Zhongshan Intersection -> MRT Minquan W Rd Station -> Minquan & Dalong Intersection -> Sanchong Police Station(Fude N Rd) -> Changsheng St Entrance -> Sanhe & Changrong  Intersection -> Sanchong Elementary School -> MRT Sanchong Elementary School -> Delin Temple(Sanhe Rd) -> Houde Police Station -> Ger-Jyh Senior High School(Sanhe Rd) -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Office(Zhongzheng Rd) -> Luzhou Elementary School -> Zhongyuan Apartment -> National Open Univ(Zhongzheng Rd) -> Wangye Temple Entrance -> Luzhou Bus Terminal -> MRT Luzhou Sta -> Changrong Rd -> Yongping Market -> Changrong & Guangming Rd -> Changrong & Zhongyuan Rd -> Zhongyuan Park -> Liuti Park -> Zhongyi Elementary School -> Luzhou Bus Terminal[^tdx-bus]

**225 (49 stops):** Luzhou Bus Terminal -> Zhongyi Elementary School -> Liuti Park -> Zhongyuan Park -> Changrong & Zhongyuan Rd -> Changrong & Guangming Rd -> Yongping Market -> Changrong Rd -> MRT Luzhou Sta -> Luzhou Bus Terminal -> Wangye Temple Entrance -> National Open Univ(Zhongzheng Rd) -> Zhongyuan Apartment -> Luzhou Elementary School -> Luzhou Motor Vehicles Office -> Luzhou Police Station -> XiQian -> MRT St Ignatius High School -> St Ignatius High School -> Xingfu Market -> Jianhe New Village -> MRT Sanhe Juior High School Sta -> Sanhe Junior High School -> Ger-Jyh Senior High School(Sanhe Rd) -> Houde Police Station -> Delin Temple(Sanhe Rd) -> Longmen Rd Entrance(Sanhe Rd) -> MRT Sanchong Elementary School -> Sanchong Elementary School -> Sanhe & Changrong  Intersection -> Changsheng St Entrance -> Sanchong Police Station(Fude N Rd) -> MRT Minquan W Rd Station -> Minquan and Zhongshan Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Jilin Intersection -> Minquan and Songjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Longjiang Intersection -> MRT Zhongshan Junior High School Sta -> Minsheng & Fuxing Intersection -> Minsheng & Dunhua Intersection -> Civil Service Housing -> Jieshou Junior High School -> Lianhe Village 2 -> Activity Center -> Guanghe New Village -> Sanmin Elementary School -> Xinyi Village[^tdx-bus]

**225 (49 stops):** Minsheng Junior High School -> Xindong St Entrance -> Activity Center -> Lianhe Village 2 -> Jieshou Junior High School -> Civil Service Housing -> Fujin St Entrance -> Songshan Airport -> Minquan and Dunhua Intersection -> Minquan and Fuxing Intersection -> Minquan and Longjiang Intersection -> Minquan & Jianguo Intersection -> Minquan and Songjiang Intersection -> Minquan and Jilin Intersection -> MRT Zhongshan Elementary School Sta -> Minquan and Zhongshan Intersection -> MRT Minquan W Rd Station -> Minquan & Dalong Intersection -> Sanchong Police Station(Fude N Rd) -> Changsheng St Entrance -> Sanhe & Changrong  Intersection -> Sanchong Elementary School -> MRT Sanchong Elementary School -> Delin Temple(Sanhe Rd) -> Houde Police Station -> Ger-Jyh Senior High School(Sanhe Rd) -> Sanhe Junior High School -> MRT Sanhe Juior High School Sta -> Jianhe New Village -> Xingfu Market -> MRT St Ignatius High School -> Minhe Apartment -> XiQian -> Luzhou Police Station -> Luzhou Motor Vehicles Office(Zhongzheng Rd) -> Luzhou Elementary School -> Zhongyuan Apartment -> National Open Univ(Zhongzheng Rd) -> Wangye Temple Entrance -> Luzhou Bus Terminal -> MRT Luzhou Sta -> Changrong Rd -> Yongping Market -> Changrong & Guangming Rd -> Changrong & Zhongyuan Rd -> Zhongyuan Park -> Liuti Park -> Zhongyi Elementary School -> Luzhou Bus Terminal[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 4 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for pairing 蘆洲 with 民生社區 specifically as the route's own termini was found in this search.
