---
title: Regional bus networks
description: City and county bus networks beyond the Taipei core, with dated Hsinchu, Taichung, Tainan, Kaohsiung and Taoyuan layers.
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
  - id: tainan-route-dataset
    title: Tainan city-bus route data
    titleOriginal: 大台南公車路線資料
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.gov.tw/dataset/85855
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official route-data catalogue and its TDX-backed field definitions.
  - id: tainan-route-tdx
    title: Tainan city-bus route response
    titleOriginal: 大台南公車路線資料（TDX Route）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Tainan?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full route snapshot used by the Tainan page.
  - id: tainan-stop-tdx
    title: Tainan TDX ordered bus stops by route
    titleOriginal: 大台南公車路線站序資料（TDX StopOfRoute）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/StopOfRoute/City/Tainan?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full ordered-stop snapshot used by the Tainan page.
  - id: tainan-ridership-dataset
    title: Tainan city-bus ridership information
    titleOriginal: 大台南公車運量資訊
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://data.gov.tw/dataset/53402
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The annual route-ridership catalogue and its listed Minguo 108–114 resources.
  - id: tainan-yellow
    title: Tainan 小黃公車 information and Q&A
    titleOriginal: 小黃公車資訊
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://2384.tainan.gov.tw/newtnbusweb/othersInfoDrtsQA.html
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official 小黃公車 route, service-mode and reservation page.
  - id: kaohsiung-route-index
    title: Kaohsiung bus route overview by route
    titleOriginal: 公車路線總覽(依路線別)
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/NewBusRoute
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official municipal route index and its displayed route count.
  - id: kaohsiung-route-tdx
    title: Kaohsiung city-bus route response
    titleOriginal: 高雄市公車路線資料（TDX Route）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Kaohsiung?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live route snapshot used by the Kaohsiung page.
  - id: kaohsiung-stop-tdx
    title: Kaohsiung TDX ordered bus stops by route
    titleOriginal: 高雄市公車路線站序資料（TDX StopOfRoute）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/StopOfRoute/City/Kaohsiung?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full live ordered-stop snapshot used by the Kaohsiung page.
  - id: kaohsiung-yellow
    title: Kaohsiung 公車式小黃 service plan
    titleOriginal: 公車式小黃服務計畫簡介
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局)
    url: https://www.tbkc.gov.tw/Service/PublicTransport/Taxis?id=db7194a9-88c3-4277-9343-6e080d7493e8
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official taxi-bus service description and route boundary.
  - id: taoyuan-route-tdx
    title: Taoyuan city-bus route snapshot
    titleOriginal: 桃園市公車路線資料（TDX Route/City/Taoyuan）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Taoyuan?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The dated national pull records Taoyuan RouteUID-oriented records, supplied SubRoutes variants and operator labels.
  - id: taoyuan-106-5014
    title: Route 106 joins route 5014 with added service from 9 March
    titleOriginal: 106路線自3月9日起併入5014路線增班服務
    publisher: Taoyuan City Government Department of Transportation (桃園市政府交通局)
    url: https://www.tycg.gov.tw/NewsPage_Content.aspx?n=7&s=1609279&sms=7882
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full announcement records the 2026 corridor restructuring, service counts, fare and TPASS/citizen-card treatment.
  - id: taoyuan-dual-bus-plan
    title: Taoyuan dual-bus transfer improvement plan
    titleOriginal: 桃市公車雙巴轉運提升計畫
    publisher: Taoyuan City Government Information Office (桃園市政府新聞處)
    url: https://news.tycg.gov.tw/News_Content.aspx?n=5016&s=1598080&sms=7885
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full December 2025 policy report describes the 桃小巴/trunk-bus boundary and staged payment integration.
  - id: pingtung-route-tdx
    title: Pingtung County city-bus route snapshot
    titleOriginal: 屏東縣公車路線資料（TDX Route/City/PingtungCounty）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/PingtungCounty?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The dated national pull records Pingtung RouteUID-oriented records, supplied SubRoutes variants and operator labels.
  - id: pingtung-operator-overview
    title: Pingtung Bus current overview and history
    titleOriginal: 屏客故事
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/intro/197/1
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator overview states its route-scope and dated electric-bus deployment.
  - id: pingtung-schedule-513
    title: Pingtung railway-station circular route timetable and fare zones
    titleOriginal: 屏東火車站環繞線
    publisher: Pingtung Bus Co., Ltd. (屏東汽車客運股份有限公司)
    url: https://www.ptbus.com.tw/product_info/0/1/513
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator timetable and fare-zone page.
  - id: chiayi-city-route-tdx
    title: Chiayi City city-bus route snapshot
    titleOriginal: 嘉義市公車路線資料（TDX Route/City/Chiayi）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Chiayi?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The dated TDX source records Chiayi City RouteUID-oriented records and supplied SubRoutes variants.
  - id: chiayi-county-route-tdx
    title: Chiayi County city-bus route snapshot
    titleOriginal: 嘉義縣公車路線資料（TDX Route/City/ChiayiCounty）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/ChiayiCounty?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The dated TDX source records Chiayi County RouteUID-oriented records and supplied SubRoutes variants.
  - id: chiayi-county-ibus
    title: Chiayi County iBus
    titleOriginal: 嘉義縣iBus
    publisher: Chiayi County Government (嘉義縣政府)
    url: https://chiayiibus.cyhg.gov.tw/Links
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full official iBus page identifies the county-developed smart-bus site and exposes dynamic bus, stop, transfer and Happiness Bus reservation surfaces.
  - id: chiayi-county-reservation
    title: Chiayi County iBus reservation interface
    titleOriginal: 嘉義縣iBus預約幸福巴士
    publisher: Chiayi County Government (嘉義縣政府)
    url: https://chiayiibus.cyhg.gov.tw/DynamicBusQuery
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full reservation page publishes its reservation fields, maintenance notice and the local 15-kilometre NT$100 example for Puzi, Dongshi and Budai.
  - id: chiayi-bus-brt
    title: BRT bus rapid transit
    titleOriginal: BRT公車捷運
    publisher: Chiayi Bus Co., Ltd. (嘉義汽車客運股份有限公司)
    url: https://www.cibus.com.tw/brt3
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page links 7211/7212 and publishes the two-direction stop tables, including the Chiayi rear-station transfer centre and HSR Chiayi Station.
  - id: keelung-route-tdx
    title: Keelung city-bus route snapshot
    titleOriginal: 基隆市公車路線資料（TDX Route/City/Keelung）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Keelung?$format=JSON
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The dated route pull records Keelung RouteUID-oriented records and supplied SubRoutes variants.
  - id: keelung-terminal-current
    title: Keelung Transfer Station information
    titleOriginal: 基隆轉運站資訊
    publisher: Keelung City Government Transportation Department (基隆市政府交通處)
    url: https://www.klcg.gov.tw/tw/tourism/2624-287263.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full municipal notice defines the two terminal zones, route/operator groups and South Station boundary.
  - id: keelung-tpass
    title: Keelung public-transport monthly pass sales points
    titleOriginal: 「基隆市公共運輸定期票」(TPASS 288)，販售點更新
    publisher: Keelung City Government Transportation Department (基隆市政府交通處)
    url: https://www.klcg.gov.tw/tw/tourism/2624-301531.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full notice lists TPASS 288 sales locations and payment media.
  - id: keelung-tdx-award
    title: 2024 TDX participating-unit performance award
    titleOriginal: 交通部113年度「運輸資料流通服務平臺TDX」加盟協作單位績效評獎
    publisher: Keelung City Government (基隆市政府)
    url: https://www.klcg.gov.tw/tw/klcg1/3242-299556.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full notice records the city data-participation award in the bus category.
  - id: keelung-506-current
    title: Route 506 trial detour notice
    titleOriginal: 506公車路線自114年10月1日起試辦平日上午10時班次繞駛成功一路
    publisher: Keelung City Government Transportation Department (基隆市政府交通處)
    url: https://www.klcg.gov.tw/tw/tourism/2624-307208.html
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full notice records the dated route-506 trial detour.
  - id: highway-city-bus-directory
    title: Urban bus information
    titleOriginal: 市區公車資訊
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.taiwanbus.tw/eBUSPage/link3.aspx
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full official directory identifies the separate City and County urban-bus authorities and inquiry contacts.
  - id: hualien-tpass
    title: Hualien public-transport TPASS usage guide
    titleOriginal: TPASS使用指南
    publisher: Hualien County Government (花蓮縣政府)
    url: https://www.hly.tw/tpass/usage
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full current guide defines Hualien city/highway-bus operator and route scope, pass plans and the separate 25-station use / 22-station sales lists.
  - id: hualien-maas
    title: About Hualien Yo真行 MaaS
    titleOriginal: 關於MaaS
    publisher: Hualien County Government (花蓮縣政府)
    url: https://www.hly.tw/about
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full county MaaS page identifies Hualien Transfer Station as the information-integration core.
  - id: hualien-evaluation-notice
    title: Announcement of the 114年度 Hualien city-bus operations and service-evaluation results report
    titleOriginal: 「114年度花蓮縣市區公車營運及服務評鑑計畫委託服務案」成果報告書公告
    publisher: Hualien County Government Construction Department (花蓮縣政府建設處)
    url: https://pw.hl.gov.tw/Detail_sp/309bee78fdcb45d5af2ca51f02c1062e
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full 15 July 2026 notice confirms the evaluation-results report attachment; scores remain TBC after the inner PDF fetch failed.
---

This section records regional bus networks as dated source-backed data layers. It begins with Hsinchu because the city government's iBus portal publishes a route selector, route-detail responses, direction departure lists and ordered stop data in one public interface.[^hsinchu-portal][^hsinchu-detail][^hsinchu-roadline] The second layer is Taichung's official route-map CSV, which supplies route and stop records but no route-level departure-time field.[^taichung-dataset][^taichung-csv] The scope is deliberately regional: the national Highway Bureau timetable remains the separate [national intercity-coach layer](/bus/intercity/), while each city page names the boundary of its own publication.[^hsinchu-portal][^thb-intercity-timetable][^taichung-dataset]

The first regional entry is [Hsinchu regional buses](/bus/regional/hsinchu/).[^hsinchu-portal] It keeps the route identities and operator labels as the portal publishes them, with terminals derived from each direction's ordered stop response and fare links retained without inventing a current price.[^hsinchu-detail][^hsinchu-roadline]

The second entry is [Taichung regional buses](/bus/regional/taichung/).[^taichung-dataset] It preserves 392 city-bus route records and the separate 26-route 小黃公車 reservation catalogue, while leaving city-bus frequency and route-level fares TBC where the fetched primary data has no such field.[^taichung-csv][^taichung-yellow][^taichung-citybus]

The third entry is [Tainan regional buses](/bus/regional/tainan/).[^tainan-route-dataset][^tainan-route-tdx] Its route and ordered-stop snapshot is joined to the city's annual route-ridership resources and its separate 小黃公車 route table, while timetable history remains outside the static layer.[^tainan-stop-tdx][^tainan-ridership-dataset][^tainan-yellow]

The fourth entry is [Kaohsiung regional buses](/bus/regional/kaohsiung/).[^kaohsiung-route-index][^kaohsiung-route-tdx] Its live TDX snapshot preserves 316 route records, 617 direction runs and 19,191 ordered stops, while the municipal index's separate 197-route count remains published as a scope conflict.[^kaohsiung-route-tdx][^kaohsiung-stop-tdx][^kaohsiung-route-index] The city's 公車式小黃 service is kept as a documented service category rather than merged into a conventional fixed-route timetable.[^kaohsiung-yellow]

The fifth entry is [Taoyuan regional buses](/bus/regional/taoyuan/).[^taoyuan-route-tdx] Its 7 September 2026 TDX snapshot contains 412 route records and 714 supplied variants; the page uses the city’s current 106-to-5014 restructuring to explain how a corridor change, operator/service policy and dated fare evidence sit above the structured discovery layer.[^taoyuan-route-tdx][^taoyuan-106-5014] 桃小巴 is kept as a local policy/service category rather than flattened into a generic route taxonomy.[^taoyuan-dual-bus-plan]

The sixth entry is [Pingtung regional buses](/bus/regional/pingtung/).[^pingtung-route-tdx] Its 7 September 2026 TDX snapshot contains 123 route records and 333 supplied variants, while Pingtung Bus’s current pages add route-specific timetable, fare-zone and accessibility evidence without pretending to reconcile every county, highway, township and tourist publication layer into one total.[^pingtung-route-tdx][^pingtung-operator-overview][^pingtung-schedule-513]

The seventh entry is [Chiayi City and County regional buses](/bus/regional/chiayi/).[^chiayi-city-route-tdx][^chiayi-county-route-tdx] It keeps the two TDX jurisdictions separate, identifies the separate city/county public-bus authorities and county-developed iBus discovery surface,[^highway-city-bus-directory][^chiayi-county-ibus] adds Chiayi Bus's published BRT corridor and links the County iBus reservation boundary without treating a transfer-centre stop name as a timed interchange.[^chiayi-bus-brt][^chiayi-county-reservation]

The eighth entry is [Keelung regional buses](/bus/regional/keelung/).[^keelung-route-tdx] Its 6 September 2026 snapshot contains 116 route records and 168 supplied variants, while the city’s transfer-station notice adds the two-zone terminal boundary, the South Station exception and the named city/intercity route groups.[^keelung-terminal-current] The TPASS 288 notice is kept as a dated payment-sales source rather than a universal fare claim.[^keelung-tpass] The city’s TDX award is recorded as a data-cooperation result rather than a passenger-service grade, and the dated route-506 detour notice illustrates why service-change notices remain separate from the static route layer.[^keelung-tdx-award][^keelung-506-current]

The ninth entry is [Hualien regional buses](/bus/regional/hualien/). It adds the county’s current TPASS operator and route boundary, public-transport pass scope, Hualien Transfer Station MaaS role and the 2026 evaluation-report announcement to the structured Hualien discovery layer.[^hualien-tpass][^hualien-maas][^hualien-evaluation-notice] The evaluation scores remain TBC because the linked report PDF could not be fetched in full during this verification.[^hualien-evaluation-notice]

## Coverage

Regional pages will be added one city at a time. Each page should say exactly which municipal, county, tourist, medical, feeder or reservation categories it includes, and where the national timetable or a neighbouring city's data starts.[^hsinchu-portal][^taichung-dataset][^taichung-yellow] A route number alone is not a sufficient identity: branch labels, category, direction and the source's own route value remain part of the record.[^hsinchu-portal][^taichung-csv]

## Data standard

The committed JSON is a dated snapshot, not a live bus tracker. It preserves the source retrieval date, operator label, route value, direction run, published departure strings, ordered stop names, coordinates where the source supplies them, and the fare URL where one exists.[^hsinchu-detail][^hsinchu-roadline][^taichung-csv] The prose explains what is directly published and what is derived, so a later refresh can show route churn instead of silently rewriting history.[^taichung-dataset][^taichung-csv]

## Open gaps

Current fare values, concession rules, vehicle allocation, ridership, reliability, contract history and a comparable historical route series require additional operator, city-government or Highway Bureau records.[^hsinchu-detail][^thb-intercity-stats][^taichung-csv] Taichung route-level frequencies also remain TBC because its fetched route-map CSV has no timetable field, while the separate 小黃公車 page exposes schedules as linked images.[^taichung-csv][^taichung-yellow] A regional page should leave those fields TBC until the underlying primary source has been fetched and read.
