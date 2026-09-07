---
title: Changhua regional buses
description: Changhua County's dated structured bus discovery layer, municipal route-list boundary, electric corridor evidence, evaluation rules and central-region pass context.
summary: A 7 September 2026 Changhua TDX snapshot joined to the county's current city-bus list, selected route pages, operator mix, service-evaluation rules and dated TPASS scope.
updated: 2026-09-07
facts:
  - label: TDX route records
    value: "17"
    source: changhua-route-tdx
  - label: TDX supplied variants
    value: "46"
    source: changhua-route-tdx
  - label: Distinct operator labels in snapshot
    value: "4"
    source: changhua-route-tdx
  - label: County city-bus list update
    value: 11409 update; page current as of 2026-09-01
    source: changhua-citybus-list
specs:
  - label: Structured snapshot retrieved
    value: 2026-09-07
    source: changhua-route-tdx
  - label: Electric route evidence
    value: Route 7 page identifies the line as fully electric
    source: changhua-route-7
  - label: Evaluation cycle
    value: At least annual under the county's published rules
    source: changhua-evaluation-rules
  - label: Complete current timetable and fare matrix
    value: TBC
  - label: Current evaluation scores
    value: TBC
sources:
  - id: changhua-route-tdx
    title: Changhua County city-bus route snapshot
    titleOriginal: 彰化縣公車路線資料（TDX Route/City/ChanghuaCounty）
    publisher: Taiwan Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平台)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/ChanghuaCounty?$format=JSON
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The dated national route pull contains 17 Route records and 46 supplied SubRoutes variants; the four operator-label count is computed from the snapshot's operator arrays.
  - id: changhua-citybus-list
    title: Changhua County city-bus route list
    titleOriginal: 彰化縣市區客運路線列表(11409更新)
    publisher: Changhua County Government Transportation Department (彰化縣政府交通處)
    url: https://www.chcg.gov.tw/DTO/traffic/07other/other01_con.aspx?cate_id=7265&data_id=26082&topsn=6537
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full municipal list identifies the county as authority and publishes route names, operators and service areas for the current 11409 list; it is kept as an editorial overlay rather than forced into the TDX record count.
  - id: changhua-transport-contact
    title: Changhua Transportation Department contact and remit listing
    titleOriginal: 聯絡通訊
    publisher: Changhua County Government Transportation Department (彰化縣政府交通處)
    url: https://www.chcg.gov.tw/DTO/traffic/01intro/intro05.aspx
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full department contact page names public-transport service, city-bus management, Changhua/Lugang/Xihu/Yuanlin/Erlin transfer-station planning and city-bus evaluation responsibilities.
  - id: changhua-route-6
    title: Route 6 Lukang–Yuanlin via Yuanlin Transfer Station
    titleOriginal: 6路 鹿港-員林(經員林轉運站)
    publisher: Changhua County Government Transportation Department (彰化縣政府交通處)
    url: https://www.chcg.gov.tw/DTO/traffic/07other/other01_con.aspx?cate_id=6561&data_id=24541&topsn=6537
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full route page publishes the route identity, Yuanlin Transfer Station corridor wording, a linked timetable image and page update date.
  - id: changhua-route-7
    title: Route 7 Yuanlin–THSR Changhua–Tianzhong Railway Station
    titleOriginal: 7路 員林-高鐵彰化站-田中火車站
    publisher: Changhua County Government Transportation Department (彰化縣政府交通處)
    url: https://www.chcg.gov.tw/DTO/traffic/07other/other01_con.aspx?cate_id=6562&data_id=24542&topsn=6537
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full route page identifies the Yuanlin–THSR Changhua–Tianzhong corridor and labels the line as fully electric/high-speed-rail express; it does not establish a timed rail guarantee.
  - id: changhua-route-8
    title: Route 8 Tianzhong Railway Station–Xizhou Park
    titleOriginal: 8路 台鐵田中站-溪州公園(延駛三條村、張厝村)
    publisher: Changhua County Government Transportation Department (彰化縣政府交通處)
    url: https://www.chcg.gov.tw/DTO/traffic/07other/other01_con.aspx?cate_id=6564&data_id=24544&topsn=6537
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full route page publishes the route identity and extension wording; it is used as route-endpoint evidence, not a complete current schedule.
  - id: changhua-evaluation-rules
    title: Changhua city-bus operating and service-evaluation rules
    titleOriginal: 彰化縣政府市區汽車客運營運及服務評鑑執行要點
    publisher: Changhua County Government (彰化縣政府)
    url: https://lawsearch.chcg.gov.tw/GLRSNEWSOUT/LawContent.aspx?id=GL000246&media=print
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full official rules define the evaluation committee, at-least-annual cycle, score categories, company/route results and consequences. They do not supply the current score table.
  - id: changhua-tpass
    title: Central Changhua–Taichung–Nantou–Miaoli public-transport pass
    titleOriginal: 中彰投苗公共運輸定期票
    publisher: Changhua County Government Transportation Department (彰化縣政府交通處)
    url: https://traffic.chcg.gov.tw/dlfile.aspx?file=2&file_id=437496&sid=126
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full current PDF states a 30-day unlimited-use period and describes the region-scoped bus/rail eligibility boundaries; the page is used for pass scope, not for a universal acceptance claim by every route.
---

The 7 September 2026 TDX city-scoped snapshot contains 17 Changhua County
Route records and 46 supplied `SubRoutes` variants.[^changhua-route-tdx] These
are structured discovery measurements, not a timeless count of every county,
highway or tourist-bus publication. The snapshot contains four operator labels:
Chang Hua Bus, Yuan Lin Bus, Chung-Lu Bus and HeMei Township Office.[^changhua-route-tdx]

## Municipal route-list boundary

Changhua County's own city-bus list is a separate editorial source. The page
identifies Changhua County as the city-bus authority and publishes route name,
operator and service-area fields for the 11409 update.[^changhua-citybus-list]
It lists corridors such as Changhua city routes, Lukang–Yuanlin, Yuanlin–THSR
Changhua–Tianzhong, Tianzhong–Xizhou and the multiple 9/10/17/19/20 variants
that serve different towns or run via different expressway corridors.[^changhua-citybus-list]
Those municipal variants are not added to the 17-record TDX count, because the
two sources answer different inventory questions.[^changhua-route-tdx][^changhua-citybus-list]

The Transportation Department's contact page identifies public-transport
service, city-bus management, transfer-station planning for Lugang, Xihu,
Yuanlin and Erlin, and city-bus evaluation as active work areas.[^changhua-transport-contact]
This gives the county's institutional boundary without implying that every
listed planning responsibility has a current terminal page or published
facility inventory.

## Strategic corridors and terminals

The full Route 6 page names the Lukang–Yuanlin corridor via Yuanlin Transfer
Station and links a timetable image.[^changhua-route-6] The full Route 7 page
names Yuanlin, THSR Changhua and Tianzhong Railway Station, and labels the line
as fully electric and a high-speed-rail express service.[^changhua-route-7]
The full Route 8 page names Tianzhong Railway Station–Xizhou Park and records
the extensions to San Tiao and Zhangcuo villages.[^changhua-route-8]

These route pages prove published route relationships, not a timed or
guaranteed train/bus connection. Platform assignments, walking paths, service
frequency and current fare by route remain **TBC** until the relevant operator
or terminal source is fetched in a form that supports them.[^changhua-route-6][^changhua-route-7][^changhua-route-8]

## Evaluation and payment boundary

Changhua's published evaluation rules establish a county committee, an
at-least-annual cycle, company- and route-level results, five weighted areas
including accessibility, and consequences that can affect route continuation
or new-route applications.[^changhua-evaluation-rules] The current score table
and operator rankings remain **TBC**; the route-list page links 112年度 and
113年度 evaluation entries, but those result attachments were not promoted
without a successful full fetch.[^changhua-citybus-list]

The Central Changhua–Taichung–Nantou–Miaoli pass document states that the
electronic-ticket pass is valid for 30 days with unlimited rides within the
published scope, including region-defined rail and bus boundaries.[^changhua-tpass]
That is pass-scope evidence, not proof that every Changhua route accepts every
payment medium or that a route-level concession table is current.

The county's live bus portal, complete timetable/fare matrix, current operator
legal-entity crosswalk, accessibility-by-route table, vehicle allocation and
evaluation scores remain **TBC**. The structured layer is therefore useful for
discovery while the editorial overlay records only the route and policy facts
that the fetched county sources actually support.[^changhua-route-tdx][^changhua-citybus-list]
