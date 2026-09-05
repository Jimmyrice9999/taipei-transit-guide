---
title: Community and demand-responsive transport
description: A dated evidence layer for Taiwan's fixed-route community buses, taxi-bus services, reservation networks and eligibility-limited accessible mobility programmes.
summary: Fixed-route community buses, taxi-bus services, reservation networks and accessible mobility programmes kept distinct from ordinary city-bus route records.
updated: 2026-09-06
facts:
  - label: Hsinchu medical-shuttle entries in the committed route snapshot
    value: "3"
    source: hsinchu-community-source
  - label: Taichung 小黃公車 routes
    value: "26"
    source: taichung-yellow-source
  - label: Tainan 小黃公車 route names in the Q&A table
    value: "52"
    source: tainan-yellow-source
  - label: Tainan expansion-notice count
    value: "49"
    source: tainan-yellow-notice-source
  - label: National Happiness Bus / DRT total
    value: TBC
specs:
  - label: Tainan route-count conflict
    value: "52 in the Q&A table; 49 in the 5 August 2026 expansion notice"
    source: tainan-yellow-source
  - label: Current nationwide eligibility and operator crosswalk
    value: TBC
sources:
  - id: hsinchu-community-source
    title: Hsinchu City Government iBus public-transport portal
    titleOriginal: 新竹市幸福巴士公共運輸資訊
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/PublicTransport/
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full portal category list used by the existing Hsinchu snapshot, including three medical-shuttle entries among the route categories.
  - id: taichung-yellow-source
    title: Taichung 小黃公車
    titleOriginal: 臺中市小黃公車
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://www.traffic.taichung.gov.tw/content/index.asp?Parser=1,7,505,52
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full official page lists 26 routes, fixed departures, reservations, stop behaviour and linked schedule images.
  - id: tainan-yellow-source
    title: Tainan 小黃公車 information and Q&A
    titleOriginal: 小黃公車資訊
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://2384.tainan.gov.tw/newtnbusweb/othersInfoDrtsQA.html
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full official Q&A and route table, including 52 named routes across 32 administrative districts and reservation rules.
  - id: tainan-yellow-notice-source
    title: Tainan 小黃公車 service expansion notice
    titleOriginal: 臺南市小黃公車新增路線及服務方式
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://traffic.tainan.gov.tw/Announcement/news?PageType=1&id=5606215d-e4c4-4b81-9bb2-3bb2d230b29d
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full 5 August 2026 notice describes 黃3, 黃16 and 黃23 changes and reports 49 routes across 31 districts; it conflicts with the Q&A table and is not silently merged.
  - id: kaohsiung-community-source
    title: Kaohsiung 公車式小黃 service plan
    titleOriginal: 公車式小黃服務計畫簡介
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/Taxis?id=db7194a9-88c3-4277-9343-6e080d7493e8
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full plan explains why taxi vehicles substitute for conventional buses in low-demand or geographically difficult areas and identifies fixed-route contractor lists.
  - id: kaohsiung-accessible-source
    title: Kaohsiung public-transport accessibility service index
    titleOriginal: 無障礙服務
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/Accessibility
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full index separates low-floor bus material, rehabilitation-bus information and facility entries; the linked low-floor PDF was not expanded here.
---

Community transport is not one national mode. This page keeps ordinary fixed-route buses, taxi-bus services, reservation networks, medical shuttles and eligibility-limited accessible transport in separate evidence lanes.[^hsinchu-community-source][^taichung-yellow-source][^kaohsiung-community-source][^kaohsiung-accessible-source]

The existing primary-source layer establishes three Hsinchu medical-shuttle entries, 26 Taichung 小黃公車 routes and a Kaohsiung 公車式小黃 plan that uses taxi vehicles where conventional bus operation is less practical.[^hsinchu-community-source][^taichung-yellow-source][^kaohsiung-community-source] These are service categories, not a claim that every row is demand-responsive or open to every passenger.

Tainan remains an explicit conflict. Its full Q&A table names 52 routes across 32 districts, while the 5 August 2026 expansion notice reports 49 routes across 31 districts after named additions.[^tainan-yellow-source][^tainan-yellow-notice-source] The guide preserves both values and does not publish a national total until a comparable Highway Bureau or local-government inventory has been fetched.

For access-limited transport, eligibility, booking channel, service area and fare must be read from the commissioning authority's programme page. A rehabilitation bus or accessible taxi programme is therefore not folded into the open-to-all bus count; the nationwide crosswalk remains TBC.[^kaohsiung-accessible-source]

## Regional evidence

- [Hsinchu regional buses](/bus/regional/hsinchu/) — city, county, tourist, medical and other portal categories.[^hsinchu-community-source]
- [Taichung regional buses](/bus/regional/taichung/) — city buses and 26-route 小黃公車 layer.[^taichung-yellow-source]
- [Tainan regional buses](/bus/regional/tainan/) — TDX city buses and the 52/49 route-count conflict.[^tainan-yellow-source][^tainan-yellow-notice-source]
- [Kaohsiung regional buses](/bus/regional/kaohsiung/) — 公車式小黃 and accessibility links.[^kaohsiung-community-source][^kaohsiung-accessible-source]

The remaining jurisdictions need directly fetched Highway Bureau and local-government inventories before their service presence, eligibility rules or operator counts can be stated.
