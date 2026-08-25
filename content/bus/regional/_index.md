---
title: Regional bus networks
description: City and county bus networks beyond the Taipei core, beginning with a current Hsinchu snapshot.
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

This section records regional bus networks as dated source-backed data layers. It begins with Hsinchu because the city government's iBus portal publishes a route selector, route-detail responses, direction departure lists and ordered stop data in one public interface.[^hsinchu-portal][^hsinchu-detail][^hsinchu-roadline] The scope is deliberately regional: the national Highway Bureau timetable remains the separate [national intercity-coach layer](/bus/intercity/), while this page covers the Hsinchu city and county categories exposed by the Hsinchu portal.[^hsinchu-portal][^thb-intercity-timetable]

The first regional entry is [Hsinchu regional buses](/bus/regional/hsinchu/).[^hsinchu-portal] It keeps the route identities and operator labels as the portal publishes them, with terminals derived from each direction's ordered stop response and fare links retained without inventing a current price.[^hsinchu-detail][^hsinchu-roadline]

## Coverage

Regional pages will be added one city at a time. Each page should say exactly which municipal, county, tourist, medical or feeder categories it includes, and where the national timetable or a neighbouring city's data starts. A route number alone is not a sufficient identity: branch labels, category, direction and the portal's own route value remain part of the record.[^hsinchu-portal]

## Data standard

The committed JSON is a dated snapshot, not a live bus tracker. It should preserve the source retrieval date, operator label, route value, direction run, published departure strings, ordered stop names, coordinates where the source supplies them, and the fare URL where one exists.[^hsinchu-detail][^hsinchu-roadline] The prose explains what is directly published and what is derived, so a later refresh can show route churn instead of silently rewriting history.

## Open gaps

Current fare values, concession rules, vehicle allocation, ridership, reliability, contract history and a comparable historical route series require additional operator, city-government or Highway Bureau records. A regional page should leave those as TBC until the underlying primary source has been fetched and read.[^hsinchu-detail][^thb-intercity-stats]
