---
title: Regional bus networks
description: City and county bus networks beyond the Taipei core, with dated Hsinchu and Taichung layers.
order: 4
sources:
  - id: hsinchu-portal
    title: Hsinchu City Government iBus public-transport portal
    titleOriginal: 新竹市幸福巴士公共運輸資訊
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/PublicTransport/
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The route selector and regional category labels.
  - id: hsinchu-detail
    title: Hsinchu iBus public-transport route-detail response
    titleOriginal: 公共運輸路線詳細資料
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/Partial_PublicTransportDetail/
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The selected-route detail response with operator, direction, departure and fare-link fields.
  - id: hsinchu-roadline
    title: Hsinchu iBus route stop and geometry response
    titleOriginal: 路線圖站序資料
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/IFrame_Map/GetRoadLine
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The ordered stop response for a direction run.
  - id: thb-intercity-timetable
    title: "Highway Bureau open-data catalogue: bus timetable"
    titleOriginal: 客運時刻
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The separate national intercity timetable catalogue.
  - id: taichung-dataset
    title: Taichung city-bus route and stop information dataset
    titleOriginal: 臺中市市區公車路線站點資訊
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://data.gov.tw/dataset/83748
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official route-map dataset page, field list, update cadence and freshness warning.
  - id: taichung-csv
    title: Taichung city-bus route-map CSV
    titleOriginal: taichung_bus_maps_2026.CSV
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download?rid=20c2e4cc-49bf-45d5-a880-714c7c66eed6
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The 392-record route and stop snapshot used by the Taichung page.
  - id: taichung-citybus
    title: Taichung bus real-time information
    titleOriginal: 台中公車即時動態資訊
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://citybus.taichung.gov.tw/ebus
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Network fare rules, live departure warning and operator links.
  - id: taichung-yellow
    title: Taichung 小黃公車
    titleOriginal: 臺中市小黃公車
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://www.traffic.taichung.gov.tw/content/index.asp?Parser=1,7,505,52
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The 26-route fixed-departure reservation network and linked schedule images.
  - id: thb-intercity-stats
    title: "Highway Bureau open-data catalogue: national highway-bus overview"
    titleOriginal: 國道汽車客運概況
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=492
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The separate monthly aggregate statistics catalogue.
---

This section records regional bus networks as dated source-backed data layers. It begins with Hsinchu because the city government's iBus portal publishes a route selector, route-detail responses, direction departure lists and ordered stop data in one public interface.[^hsinchu-portal][^hsinchu-detail][^hsinchu-roadline] The second layer is Taichung's official route-map CSV, which supplies route and stop records but no route-level departure-time field.[^taichung-dataset][^taichung-csv] The scope is deliberately regional: the national Highway Bureau timetable remains the separate [national intercity-coach layer](/bus/intercity/), while each city page names the boundary of its own publication.[^hsinchu-portal][^thb-intercity-timetable][^taichung-dataset]

The first regional entry is [Hsinchu regional buses](/bus/regional/hsinchu/).[^hsinchu-portal] It keeps the route identities and operator labels as the portal publishes them, with terminals derived from each direction's ordered stop response and fare links retained without inventing a current price.[^hsinchu-detail][^hsinchu-roadline]

The second entry is [Taichung regional buses](/bus/regional/taichung/).[^taichung-dataset] It preserves 392 city-bus route records and the separate 26-route 小黃公車 reservation catalogue, while leaving city-bus frequency and route-level fares TBC where the fetched primary data has no such field.[^taichung-csv][^taichung-yellow][^taichung-citybus]

## Coverage

Regional pages will be added one city at a time. Each page should say exactly which municipal, county, tourist, medical, feeder or reservation categories it includes, and where the national timetable or a neighbouring city's data starts.[^hsinchu-portal][^taichung-dataset][^taichung-yellow] A route number alone is not a sufficient identity: branch labels, category, direction and the source's own route value remain part of the record.[^hsinchu-portal][^taichung-csv]

## Data standard

The committed JSON is a dated snapshot, not a live bus tracker. It preserves the source retrieval date, operator label, route value, direction run, published departure strings, ordered stop names, coordinates where the source supplies them, and the fare URL where one exists.[^hsinchu-detail][^hsinchu-roadline][^taichung-csv] The prose explains what is directly published and what is derived, so a later refresh can show route churn instead of silently rewriting history.[^taichung-dataset][^taichung-csv]

## Open gaps

Current fare values, concession rules, vehicle allocation, ridership, reliability, contract history and a comparable historical route series require additional operator, city-government or Highway Bureau records.[^hsinchu-detail][^thb-intercity-stats][^taichung-csv] Taichung route-level frequencies also remain TBC because its fetched route-map CSV has no timetable field, while the separate 小黃公車 page exposes schedules as linked images.[^taichung-csv][^taichung-yellow] A regional page should leave those fields TBC until the underlying primary source has been fetched and read.
