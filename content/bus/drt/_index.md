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
    value: "507 services (February 2026 snapshot)"
    source: motc-happiness-2026
  - label: Jurisdictions / townships in the February 2026 programme snapshot
    value: "193"
    source: motc-happiness-2026
  - label: Rural public-transport coverage in that snapshot
    value: "95.10%"
    source: motc-happiness-2026
  - label: Kaohsiung Rehabilitation Bus contracted operator (page dated 2026-06-30)
    value: Kaohsiung Bus
    source: kaohsiung-rehab-source
  - label: Taichung universal accessible taxis (page last changed 2025-05-21)
    value: "54 vehicles"
    source: taichung-accessible-taxi-source
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
  - id: thb-happiness-inventory
    title: Happiness Bus and Happiness Taxi operating information
    titleOriginal: 幸福巴士及幸福小黃營運資訊
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News.aspx?_CSN=4106&n=10738&sms=13903
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full official inventory exposes all 22 jurisdiction filters and the service type, area, route name, stop pattern and route-modification date fields. The fetched page was updated 115-08-19; its default response is not treated as a national total.
  - id: motc-happiness-2026
    title: MOTC 115 annual unit settlement — public-transport implementation report
    titleOriginal: 交通部115年度單位決算
    publisher: Ministry of Transportation and Communications (交通部)
    url: https://www.motc.gov.tw/ch/app/data/doc?aplistdn=&detailNo=1488795645681602560&id=811&module=policy&preview=&serno=ac2163a7-13ef-4a20-92a9-2de9f4129bcd&type=s
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: Page 77 reports a February 2026 snapshot of 507 Happiness Bus/Happiness Taxi routes across 193 townships/districts, including 247 routes in 64 rural areas, and 95.10% rural public-transport coverage. It is a dated programme measurement, not a September live total.
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
  - id: kaohsiung-rehab-source
    title: Rehabilitation Bus passenger service
    titleOriginal: 復康巴士交通接送服務
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/Accessibility?id=bd4fffc4-21ce-4ec5-8b1d-58f390dfe25e
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full page is dated 115-06-30 and names Kaohsiung Bus as contracted operator, lists the disability/medical eligibility classes, the city-plus-neighbouring-area service boundary, reservation windows and the distance-based fare formula.
  - id: taichung-accessible-taxi-source
    title: Taichung universal accessible taxis
    titleOriginal: 臺中市通用(無障礙)計程車
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://www.traffic.taichung.gov.tw/content/index.asp?Parser=1,7,498,495
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full official page, last changed 2025-05-21, lists 54 vehicles, five fleets, metered fares, electronic-ticket equipment, and states that universal taxis have no eligibility restriction while prioritising passengers with reduced mobility.
---

Community transport is not one national mode. This page keeps ordinary fixed-route buses, taxi-bus services, reservation networks, medical shuttles and eligibility-limited accessible transport in separate evidence lanes.[^hsinchu-community-source][^taichung-yellow-source][^kaohsiung-community-source][^kaohsiung-accessible-source]

The existing primary-source layer establishes three Hsinchu medical-shuttle entries, 26 Taichung 小黃公車 routes and a Kaohsiung 公車式小黃 plan that uses taxi vehicles where conventional bus operation is less practical.[^hsinchu-community-source][^taichung-yellow-source][^kaohsiung-community-source] These are service categories, not a claim that every row is demand-responsive or open to every passenger.

Tainan remains an explicit conflict. Its full Q&A table names 52 routes across 32 districts, while the 5 August 2026 expansion notice reports 49 routes across 31 districts after named additions.[^tainan-yellow-source][^tainan-yellow-notice-source] The guide preserves both values. The Highway Bureau inventory is now fetched, but its default response is a filtered row rather than a complete national export, so the dated MOTC measurement is kept separate from any future live total.[^thb-happiness-inventory][^motc-happiness-2026]

For access-limited transport, eligibility, booking channel, service area and fare must be read from the commissioning authority's programme page. A rehabilitation bus or accessible taxi programme is therefore not folded into the open-to-all bus count; the nationwide crosswalk remains TBC.[^kaohsiung-accessible-source]

The Highway Bureau's inventory page is the national discovery surface: it names all 22 jurisdiction filters and exposes service type, area, route name, stop pattern and route-modification date.[^thb-happiness-inventory] The February 2026 MOTC report is the dated national measurement currently safe to quote: 507 services across 193 townships/districts, including 247 routes in 64 rural areas, and 95.10% rural public-transport coverage.[^motc-happiness-2026]

## Regional evidence

- [Hsinchu regional buses](/bus/regional/hsinchu/) — city, county, tourist, medical and other portal categories.[^hsinchu-community-source]
- [Taichung regional buses](/bus/regional/taichung/) — city buses and 26-route 小黃公車 layer.[^taichung-yellow-source]
- [Tainan regional buses](/bus/regional/tainan/) — TDX city buses and the 52/49 route-count conflict.[^tainan-yellow-source][^tainan-yellow-notice-source]
- [Kaohsiung regional buses](/bus/regional/kaohsiung/) — 公車式小黃 and accessibility links.[^kaohsiung-community-source][^kaohsiung-accessible-source]

The Highway Bureau inventory provides the national jurisdiction filter, but a complete row export and a national eligibility/operator crosswalk for 復康巴士 and accessible taxi programmes remain TBC. The fixed February 2026 programme count must not be silently presented as a September 2026 live count.[^thb-happiness-inventory][^motc-happiness-2026]

Two municipal pages show why that crosswalk must remain explicit. Kaohsiung’s page, dated 30 June 2026, names Kaohsiung Bus as the contracted Rehabilitation Bus operator, limits eligibility to stated disability or wheelchair-medical-document categories, permits different advance-booking windows by category and publishes a distance-based fare formula.[^kaohsiung-rehab-source] Taichung’s page separately lists 54 universal accessible taxis across five fleets; it says the service has no eligibility restriction, prioritises passengers with reduced mobility, and uses the city’s metered fare.[^taichung-accessible-taxi-source] Neither example is silently promoted to a national rule.
