---
title: "Ruifang District Office — New Bus authority record"
summary: "The New Taipei district-office record associated with Ruifang's New Bus routes and 2025 holiday pilot."
updated: 2026-08-22
facts:
  - label: English name
    value: "Ruifang District Office"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "瑞芳區公所"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-ruifangdistrictoffice-z0z4jc"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "RuifangDistrictOffice"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1312"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed TDX pull
    value: "8"
    source: tdx-bus-operator-pull
  - label: Office telephone
    value: "(02)2497-2250"
    source: ruifang-contact
  - label: Office address
    value: "224202 New Taipei City, Ruifang District, Fengjia Road 82"
    source: ruifang-contact
specs:
  - label: Organizational status
    value: "New Taipei municipal district office, not a separately identified bus corporation"
    source: ruifang-contact
  - label: Official HTML route labels shown (page updated 2025-11-06; includes F813)
    value: "9"
    source: ruifang-newbus
  - label: Holiday pilot
    value: "F802, F802 auxiliary, F803, F805, F807 and F808; 2025-05-30 to 2025-12-31"
    source: ruifang-holiday-pilot
  - label: Fare
    value: TBC
  - label: Fleet models, chassis and propulsion
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Current contractor and contract terms
    value: TBC
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator record, contact fields, source municipality, operator IDs, route associations and route names; it does not provide ownership, fleet, depot or contract fields.
  - id: ruifang-contact
    title: Ruifang traffic index and office contact
    titleOriginal: 交通
    publisher: Ruifang District Office, New Taipei City (新北市瑞芳區公所)
    url: https://www.ruifang.ntpc.gov.tw/home.jsp?id=8b767bd17dc29316
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Publishes the district office address and telephone and links the official railway, road-bus and New Bus pages under the district office's traffic section.
  - id: ruifang-newbus
    title: New Bus
    titleOriginal: 新巴士
    publisher: Ruifang District Office, New Taipei City (新北市瑞芳區公所)
    url: https://www.ruifang.ntpc.gov.tw/home.jsp?id=4941bfa3d64b3bfd
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: The full official HTML page lists the displayed F801, F802, F802 auxiliary, F803, F805, F806, F807, F808 and F813 route labels with departure information and says it was updated 2025-11-06.
  - id: ruifang-holiday-pilot
    title: Ruifang District Office starts a holiday New Bus pilot from the Dragon Boat holiday
    titleOriginal: 端午連假起瑞芳公所開辦假日新巴士試營運 縮短城鄉差距嘉惠里民
    publisher: Ruifang District Office, New Taipei City (新北市瑞芳區公所)
    url: https://www.ruifang.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=f5ab372d798f8572b9cf363679cc36fb&id=0f6d355c91ac254b&mserno=85a59ab66d9130b668c6a389373056ea
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Dated 2025-05-29, this official notice says the pilot began 2025-05-30 and ran through 2025-12-31 on six routes; it also says the F802 auxiliary route used small vehicles.
  - id: ruifang-rail-transfer
    title: Railway transport
    titleOriginal: 鐵路運輸
    publisher: Ruifang District Office, New Taipei City (新北市瑞芳區公所)
    url: https://www.ruifang.ntpc.gov.tw/home.jsp?id=6fed0da13b535525
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: The district office's transfer page connects F802, F808, F813, F805, F806, F801, F803 and F807 with Ruifang-area railway stations; the page itself was updated 2021-02-08.
  - id: ruifang-public-bus
    title: Intercity and urban buses
    titleOriginal: 公路客運與市區公車
    publisher: Ruifang District Office, New Taipei City (新北市瑞芳區公所)
    url: https://www.ruifang.ntpc.gov.tw/home.jsp?id=e15df33d3d93728f
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Distinguishes regular route 808, operated by Keelung Bus, from the municipal New Bus F808 listing and publishes the page update date 2025-10-29.
---

## Government-unit record

The committed TDX pull identifies Ruifang District Office (瑞芳區公所) as a NewTaipei operator record with code `RuifangDistrictOffice`, number 1312 and eight associated route records [^tdx-bus-operator-pull]. The record describes an administrative service authority, not a separately identified private bus corporation with a sourced founding date, shareholder structure or parent group [^ruifang-contact].

The district office publishes its address as 224202 New Taipei City, Ruifang District, Fengjia Road 82, and its telephone as (02)2497-2250 [^ruifang-contact]. Its traffic section links railway transport, intercity and urban buses, and New Bus as separate parts of the district's public-transport information [^ruifang-contact]. No fetched source gives the office a company founding event, merger history or private ownership claim, so those fields remain outside the record [^ruifang-contact][^tdx-bus-operator-pull].

## Service and route evidence

The official New Bus page, updated 6 November 2025, lists F801 between Ruifang and Sijiaoting, F802 toward the Jingu area, an F802 auxiliary local circulation, F803 via Bafenliao, F805 toward Hemei Elementary School, F806 toward Dafu Coal Mine, the F807 district circulation, F808 toward Sandiaoling, and F813 between Shuangxi and Ruifang [^ruifang-newbus]. The page supplies separate weekday and holiday departures for several routes, including F805 and F808, but its dated HTML listing should not be silently treated as a 2026 timetable [^ruifang-newbus].

The TDX representation is different in both count and granularity: its eight associations include separate morning and afternoon F807 records, while the official HTML combines F807 into one district-circulation entry and also displays F813 [^tdx-bus-operator-pull][^ruifang-newbus]. The official railway-transfer page gives the service a clear interchange role: it points passengers from Ruifang Station toward the Jingu area on F802, toward Houtong on F808 and F813, toward the coastal area on F805 and F806, toward Sijiaoting on F801 and F803, and toward Ruifang's urban area on F807 [^ruifang-rail-transfer].

This is a local-government New Bus network alongside regular bus services. The district office's road-bus page lists route 808, operated by Keelung Bus, separately from the F808 New Bus service [^ruifang-public-bus]. That distinction prevents the route number alone from being used as evidence that the regular 808 and municipal F808 have the same operator or contract [^ruifang-public-bus].

## Holiday pilot and fleet boundary

In a notice dated 29 May 2025, the district office said New Taipei City and the district office would run a holiday New Bus pilot from the Dragon Boat holiday through 31 December 2025 on F802, F802 auxiliary, F803, F805, F807 and F808 [^ruifang-holiday-pilot]. The notice describes the pilot as a response to holiday access, rural connectivity, commuting and tourism needs, with service emphasis around Ruifang Station, Shuinandong, Jiufen, Jinguashi, Houtong, Sandiaoling and Sijiaoting [^ruifang-holiday-pilot].

The same notice says the F802 auxiliary route used small vehicles because some local sections needed a more flexible vehicle fit [^ruifang-holiday-pilot]. That is a documented service-level vehicle characterization, not a fleet register: the fetched sources do not name a manufacturer, chassis, body, passenger capacity, propulsion system, operator contractor or vehicle count [^ruifang-holiday-pilot][^tdx-bus-operator-pull]. No depot or garage location, opening date, procurement award or contract term was found in the fetched primary pages, so those details are TBC rather than inferred from the route pattern [^ruifang-newbus][^ruifang-holiday-pilot].

## TDX route-record snapshot

The list below is generated from the committed route pull's `operatorIds` associations. It records a data snapshot, not a fleet count or a claim that the district office owns the vehicles [^tdx-bus-operator-pull].

- `F801` [^tdx-bus-operator-pull]
- `F802` [^tdx-bus-operator-pull]
- `F803` [^tdx-bus-operator-pull]
- `F805` [^tdx-bus-operator-pull]
- `F806` [^tdx-bus-operator-pull]
- `F807Zushi Temple` [^tdx-bus-operator-pull]
- `F807Shanzijiao` [^tdx-bus-operator-pull]
- `F808` [^tdx-bus-operator-pull]

## Research gaps

The fetched primary sources establish the district-office role, route representations, transfer geography and the dated holiday pilot, but they do not publish a vehicle-model roster, manufacturer, chassis, body, capacity, propulsion, depot, opening date, current contractor, contract value or contract term [^tdx-bus-operator-pull][^ruifang-newbus][^ruifang-holiday-pilot]. The current fare and any EasyCard or other payment acceptance are also TBC; neither the fetched New Bus HTML page nor the pilot notice was used to infer a fare rule [^ruifang-newbus][^ruifang-holiday-pilot].
