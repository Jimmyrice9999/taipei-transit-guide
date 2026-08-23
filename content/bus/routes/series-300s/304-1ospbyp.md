---
title: 304重慶 / 304Chongqing N.
summary: General-bus route 304重慶, a Chongqing-corridor branch of 304 (故宮博物院 - 永和).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: Origin
    value: Zhongxing Bus's first route, opened 1963 as 中興1路; joined the joint-operation system and renumbered 304 on 12 June 1977
    source: zhwikiversity-304
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday and holiday 0530–2230"
    source: ebus-304-chongqing
  - label: Headway by day type
    value: "Weekday peak 15–20 min; holiday 20 fixed daily departures"
    source: ebus-304-chongqing
  - label: Fare / transfer
    value: Three-section fare (三段票)
    source: ebus-304-chongqing
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field. Records 304重慶 (routeId 15554) and 304承德 (routeId 15553) as two separate route records, not sub-routes of one another.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 304重慶 under 一般公車, filed as its own routeid entry distinct from 304承德 — both are street-name branches of 304, not 區/預 shuttle markers.
  - id: ebus-304-chongqing
    title: 304重慶 route schedule
    titleOriginal: 304重慶班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030490
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 故宮博物院–永和 corridor, service span, fare, buffer zones and operator contact (中興巴士故宮站 02-2882-2126).
  - id: zhwikiversity-304
    title: Taipei joint-operation bus route 304
    titleOriginal: 台北聯營公車304路線
    publisher: Wikiversity contributors, 維基學院
    url: https://zh.wikiversity.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A304%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: "Community-compiled operational history covering both the 重慶 and 承德 branches jointly, not independently verified against a primary PTO/operator announcement in this search. Quoted verbatim: 1963年6月：大業客運(今日的中興巴士)成立，成為該公司首條公車路線，當時路線編號為「中興1路」 ... 1977年6月12日：加入台北聯營公車，並賦予新路線編號304。 Also states the 重慶/承德 branches diverge after Shilin Station along Chongqing Road and Chengde Road respectively, though this street-corridor claim was not independently checked against a route map."
---

## Classification and corridor

The official catalogue lists 304重慶 under 一般公車, as its own routeid entry
separate from 304承德 — confirming both street-name branches are filed as
independent routes in the catalogue, not as 區/預 shuttle sub-listings of a
single "304".[^ebus-general] Its full schedule page gives 故宮博物院 - 永和,
weekday and holiday service 0530–2230, a three-section fare (三段票), and
中興巴士故宮站 as the service contact.[^ebus-304-chongqing] Weekday peak
frequency is 15–20 minutes; holiday service runs a fixed 20 daily
departures.[^ebus-304-chongqing] Buffer zones apply between 福林國小 and
士林簡易庭, and between 捷運北門站 and 小南門.[^ebus-304-chongqing]

The confirmed stop sequence runs from 故宮博物院 through Shilin, then follows
重慶北路 through Datong past 捷運大橋頭站, through central Taipei past 捷運
北門站 and 捷運西門站, and crosses the Xindian River on 中正橋 into Yonghe,
New Taipei, ending near 樂華夜市.[^tdx-bus] Four separate MRT stations are
named along the way, and the curated stop-ID join set confirms none of
them.[^tdx-bus]

## History

A community wiki states the operator (大業客運, now 中興巴士) was founded in
June 1963 with this as its first route, then numbered 中興1路, and that it
joined the Taipei joint-operation system and was renumbered 304 on 12 June
1977: 「1963年6月：大業客運(今日的中興巴士)成立，成為該公司首條公車路線，當時路線編號為
「中興1路」」and「1977年6月12日：加入台北聯營公車，並賦予新路線編號304。」[^zhwikiversity-304]
The same source states the 重慶 and 承德 branches diverge after Shilin
Station, following Chongqing Road and Chengde Road respectively, but this
was not independently checked against a route map in this search.[^zhwikiversity-304]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for 304Chongqing N.; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**304(Chongqing N) (46 stops):** National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow U (Chien Mu House) -> Meilin New Village -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Hudong & Chongqing Intersection -> Shilin Small Claims Court -> Taipei School for the Hearing Impaired -> Jiuquan and Chongqing Intersection -> Minzu and Chongqing Intersection -> Changji & Chongqing Intersection -> MRT Daqiaotou Sta -> Liangzhou and Chongqing Intersection -> Minsheng and Chongqing Intersection -> Zhaoyang Park (Button St) -> Taipei Circle (Chongqing) -> Old Taipei Railway Sta -> MRT Beimen Station -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen (TCUH Heping Branch) -> MRT Xiaonanmen Sta -> Zhongzheng 2nd Police Dist -> Ningpo and Chongqing Intersection -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> MRT Dingxi Sta -> Zhongxing St Entrance -> Lehua Business Center -> Yonghe Rd Entrance -> Yongan Market(Yongzhen Rd) -> 823 Memorial Park -> Dehe Rd 1 -> Zhongxing New Village -> Zhongxing Village 2 -> Chih-Kuang Senior Commercial & Industrial Vocational High School -> Yianjili -> Anping Rd -> Tanqian[^tdx-bus]

**304(Chongqing N) (38 stops):** 823 Memorial Park -> Yongan Market -> Ziqiang St Entrance -> Lehua Shopping Circle -> MRT Dingxi Sta -> Zhongzheng Bridge Stop -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> Ningpo and Chongqing Intersection -> Zhongzheng 2nd Police Dist -> Taipei District Court -> Xiaonan Gate (Heping Hospital) -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Station -> Nanjing W Rd Entrance (Tacheng) -> Yanping Stop 1 (Nanjing) -> Taipei Circle -> Minsheng and Chongqing Intersection -> Liangzhou and Chongqing Intersection -> MRT Daqiaotou Sta -> Changji & Chongqing Intersection -> Minzu and Chongqing Intersection -> Jiuquan and Chongqing Intersection -> Taipei School for the Hearing Impaired -> Shilin Small Claims Court -> Hudong & Chongqing Intersection -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow U (Chien Mu House) -> Waishuangxi -> National Palace Museum[^tdx-bus]

**304(Chongqing N) (46 stops):** National Palace Museum -> Gugong Rd Entrance -> CMPC Movie City -> Soochow U (Chien Mu House) -> Meilin New Village -> Shuangxi Park -> Taibei High School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Fulin Elementary School -> MRT Shilin Sta (Zhongzheng) -> Shilin Jr High School -> Shilin Admin Center -> Yangming High School -> Hudong & Chongqing Intersection -> Shilin Small Claims Court -> Taipei School for the Hearing Impaired -> Jiuquan and Chongqing Intersection -> Minzu and Chongqing Intersection -> Changji & Chongqing Intersection -> MRT Daqiaotou Sta -> Liangzhou and Chongqing Intersection -> Minsheng and Chongqing Intersection -> Zhaoyang Park (Button St) -> Taipei Circle (Chongqing) -> Old Taipei Railway Sta -> MRT Beimen Station -> Zhonghua Rd N Stop -> MRT Ximen Sta -> Xiaonanmen (TCUH Heping Branch) -> MRT Xiaonanmen Sta -> Zhongzheng 2nd Police Dist -> Ningpo and Chongqing Intersection -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> MRT Dingxi Sta -> Zhongxing St Entrance -> Lehua Business Center -> Yonghe Rd Entrance -> Yongan Market(Yongzhen Rd) -> 823 Memorial Park -> Dehe Rd 1 -> Zhongxing New Village -> Zhongxing Village 2 -> Chih-Kuang Senior Commercial & Industrial Vocational High School -> Yianjili -> Anping Rd -> Tanqian[^tdx-bus]

**304(Chongqing N) (38 stops):** 823 Memorial Park -> Yongan Market -> Ziqiang St Entrance -> Lehua Shopping Circle -> MRT Dingxi Sta -> Zhongzheng Bridge Stop -> Chongqing S Road Sec 3 (Zhongzheng Bridge) -> Ningpo and Chongqing Intersection -> Zhongzheng 2nd Police Dist -> Taipei District Court -> Xiaonan Gate (Heping Hospital) -> MRT Ximen Sta -> Zhonghua Rd N Stop -> MRT Beimen Station -> Nanjing W Rd Entrance (Tacheng) -> Yanping Stop 1 (Nanjing) -> Taipei Circle -> Minsheng and Chongqing Intersection -> Liangzhou and Chongqing Intersection -> MRT Daqiaotou Sta -> Changji & Chongqing Intersection -> Minzu and Chongqing Intersection -> Jiuquan and Chongqing Intersection -> Taipei School for the Hearing Impaired -> Shilin Small Claims Court -> Hudong & Chongqing Intersection -> Yangming High School -> Shilin Admin Center -> Shilin Jr High School -> MRT Shilin Sta (Zhongzheng) -> Fulin Elementary School -> Chiang Kai-Shek Shilin Residence (Zhongzheng) -> Taibei High School -> Shuangxi Park -> Meilin New Village -> Soochow U (Chien Mu House) -> Waishuangxi -> National Palace Museum[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 3 direction/variant records, 1 operator record, and 2 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records and treats
304重慶 and 304承德 as two separate route records.[^tdx-bus] Route length and
detailed headway beyond the peak/holiday figures above remain TBC. The
wikiversity history is secondary and was not corroborated against a primary
PTO or 中興巴士 announcement in this search.
