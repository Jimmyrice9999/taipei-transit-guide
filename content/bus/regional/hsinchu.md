---
title: Hsinchu regional buses
description: A dated snapshot of Hsinchu city and county buses, route terminals, published departures and fare links.
summary: The Hsinchu iBus portal's city, county express, Zhubei, tourist and medical-bus categories, preserved as a dated route and stop data layer.
updated: 2026-08-28
facts:
  - label: Route entries
    value: "68"
    source: hsinchu-portal
  - label: Operator labels
    value: "7"
    source: hsinchu-detail
  - label: Direction runs
    value: "96"
    source: hsinchu-detail
  - label: Published departure values
    value: "970"
    source: hsinchu-detail
  - label: Fare values
    value: TBC
  - label: Ridership
    value: TBC
specs:
  - label: Snapshot retrieved
    value: 2026-08-25
    source: hsinchu-portal
  - label: City bus entries
    value: "36"
    source: hsinchu-portal
  - label: County express entries
    value: "10"
    source: hsinchu-portal
  - label: Zhubei citizen-bus entries
    value: "14"
    source: hsinchu-portal
  - label: Tourist-bus entries
    value: "5"
    source: hsinchu-portal
  - label: Medical-shuttle entries
    value: "3"
    source: hsinchu-portal
  - label: Fares in committed layer
    value: TBC
sources:
  - id: hsinchu-portal
    title: Hsinchu City Government iBus public-transport portal
    titleOriginal: 新竹市幸福巴士公共運輸資訊
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/PublicTransport/
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The full route selector and category labels used to define the 68-entry Hsinchu snapshot; it also links city bus, national highway bus, regional highway bus, HSP shuttle and rail/bike information.
  - id: hsinchu-detail
    title: Hsinchu iBus public-transport route-detail response
    titleOriginal: 公共運輸路線詳細資料
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/Partial_PublicTransportDetail/
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official POST response for each selected route value; it supplied the operator, direction labels, run identifiers, published departure strings and fare-link URLs.
  - id: hsinchu-roadline
    title: Hsinchu iBus route stop and geometry response
    titleOriginal: 路線圖站序資料
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/IFrame_Map/GetRoadLine
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The official POST response for each direction run; it supplied ordered stop names, stop identifiers and coordinates used to derive first and last stops and stop counts.
  - id: hsinchu-notices
    title: Hsinchu iBus portal notices
    titleOriginal: 最新消息
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/Home/
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: The portal's current notice stream, including a 2026 summer timetable notice for the Green Line and temporary stop adjustments.
  - id: thb-intercity-timetable
    title: "Highway Bureau open-data catalogue: bus timetable"
    titleOriginal: 客運時刻
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=599
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Defines the separate national intercity timetable layer and its static-export scope; it is not used to count the Hsinchu portal categories.
  - id: thb-intercity-stats
    title: "Highway Bureau open-data catalogue: national highway-bus overview"
    titleOriginal: 國道汽車客運概況
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News_Content_thbOpenData.aspx?n=13&s=492
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Identifies the separate monthly aggregate fields that would be needed for a Hsinchu ridership comparison; no Hsinchu values are asserted here.
  - id: zh-hsinchubus
    title: Hsinchu Bus Co.
    titleOriginal: 新竹客運
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/wiki/新竹客運
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Founded 29 September 1919 as 台灣軌道株式會社, reorganised into 新竹汽車客運股份有限公司 in 1946 — the region's first bus operator. States the company currently runs only Hsinchu city buses and two intercity routes, which sits in tension with the fully-exited framing of a separately fetched 2024 news article — see the conflict noted below."
  - id: ltn-hsinchubus-exit
    title: Hsinchu Bus exits Hsinchu–Miaoli routes — a century of history carrying the city's memories
    titleOriginal: 新竹客運退出竹竹苗路線 百年風華承載大新竹城市記憶與故事
    publisher: 自由時報 (Liberty Times)
    url: https://news.ltn.com.tw/news/life/breakingnews/4849155
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Reports 新竹客運's full exit from 竹竹苗 (Hsinchu-Miaoli) regional highway-bus routes effective 1 November 2024, citing falling ridership from demographic and pandemic pressures and rising private-vehicle ownership. Whether this exit included Hsinchu city routes specifically, as opposed to only intercity/highway routes, is not resolved against the zh.wikipedia claim above — published as a conflict."
  - id: zh-hsinchu-green-line
    title: Hsinchu City Bus Green Line
    titleOriginal: 新竹市公車綠線
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/新竹市公車綠線
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: The Green Line, formed 25 December 2015 from former Miaoli Bus (苗栗客運) highway route 5809, is operated by 苗栗客運 — not by 新竹客運, the operator of the city's Blue Line (formed the same date from former routes 1 and 15).
  - id: hakkanews-pilot-bus
    title: Hsinchu's electric pilot bus in trial operation by month's end, formal launch by year's end
    titleOriginal: 竹市電動公車本月底前試營運 年底前正式上路
    publisher: 客新聞 HakkaNews
    url: https://hakkanews.tw/2024/09/24/144810/
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Dated 2024-09-24. The 新竹市先導公車 (pilot bus) route, 10 electric buses funded by a NT$52 million MOTC Highway Bureau subsidy, is operated by 國光客運, not by 新竹客運 — merging the former 紅線/橘線 circular shuttles and linking the station, two universities, the Science Park and HSR Hsinchu.
---

Hsinchu's public bus information is split across city and county responsibilities, but the city government's iBus portal presents the regional catalogue in one route selector.[^hsinchu-portal] The committed snapshot covers five categories shown by that selector: 新竹市市區公車 (Hsinchu City buses), 新竹縣快捷巴士 (Hsinchu County express buses), 竹北市民公車 (Zhubei citizen buses), 新竹縣觀光巴士 (Hsinchu County tourist buses), and 新竹縣醫療專車 (Hsinchu County medical shuttles).[^hsinchu-portal] The same portal also exposes national and regional highway-bus queries, but those are a different publication layer from the city-and-county route records below.[^hsinchu-portal][^thb-intercity-timetable]

## The current route catalogue

The 25 August 2026 fetch found 36 city-bus entries, 10 county express entries, 14 Zhubei citizen-bus entries, five tourist-bus entries and three medical-shuttle entries.[^hsinchu-portal] The route values preserve branch distinctions such as 20支A, 23支A, 快捷5號A, 61支線A and 68路B; these are not collapsed into their unsuffixed numbers because the portal gives each a separate selector value and detail response.[^hsinchu-portal][^hsinchu-detail] The data layer is [available as the committed Hsinchu route JSON](/data/hsinchu-bus-routes.json), with the same public copy under `/public/data/` for the static export.[^hsinchu-detail][^hsinchu-roadline]

The portal's detail response names the operating company for a selected route. The snapshot contains seven operator labels, including 新竹客運, 科技之星交通, 金牌客運, 國光客運, 苗栗客運, 捷乘客運 and 尖石鄉公所.[^hsinchu-detail] This is an operator-label count in this portal snapshot, not a claim about the legal number of bus companies in Hsinchu or the number of companies registered by the Highway Bureau.[^hsinchu-detail][^thb-intercity-timetable]

| Portal category | Route entries |
| --- | ---: |
| 新竹市市區公車 | 36 [^hsinchu-portal] |
| 新竹縣快捷巴士 | 10 [^hsinchu-portal] |
| 竹北市民公車 | 14 [^hsinchu-portal] |
| 新竹縣觀光巴士 | 5 |
| 新竹縣醫療專車 | 3 |

The table is a count of selector entries retrieved on the date above; a later portal revision may add, remove or rename an entry.[^hsinchu-portal]

## Terminals and stop sequences

The route-detail response supplies a direction label, a run identifier and the published departure string. The separate `GetRoadLine` response returns an ordered list whose records include a stop name, stop identifier and latitude/longitude.[^hsinchu-detail][^hsinchu-roadline] The data layer therefore records the first and last stop in that ordered response as the direction's terminal summary, while retaining the whole stop sequence for checking. “Terminal” here means the boundary of the portal's ordered run data; it does not imply that the city has designated every boundary as a bus terminal facility.[^hsinchu-roadline]

That distinction matters on circular and short-working services. For example, the portal's route 10 detail labels the outward direction 總站→成德高中, while its return stop sequence ends at 火車站 in the retrieved run data.[^hsinchu-detail][^hsinchu-roadline] The data layer preserves both the published direction label and the returned stop boundary instead of forcing them into one English terminal pair.[^hsinchu-detail][^hsinchu-roadline] Route 2 similarly exposes 火車站→陽明交大 in the detail response; its direction lists seven outward departures and six return departures in the snapshot.[^hsinchu-detail]

## Published departures and fares

The portal publishes departure strings such as 0805,0845,1225,1310,1425,1640,1805 for route 2's outward run, and it exposes separate return runs where they exist.[^hsinchu-detail] Across the retrieved direction records, the committed layer preserves 970 departure values. That is a count of published timetable values, not a headway calculation and not a promise that every trip operates on every day.[^hsinchu-detail] The portal's current-notice stream shows why the retrieval date belongs beside the data: it carried a dated Green Line summer-timetable notice and temporary stop-adjustment notices during the same period.[^hsinchu-notices]

The detail response provides a linked 票價 page for routes, but it does not include a fare amount in the response used here.[^hsinchu-detail] Fare values therefore remain TBC. A later fare layer needs to fetch the linked route-level fare records, identify the effective date and concession rules, and preserve any conflict with a city or operator notice; the presence of a link is not evidence of a current numeric fare.[^hsinchu-detail]

## Boundary, history and gaps

The national Highway Bureau timetable is kept separate because its catalogue describes a static nationwide export with its own operator, route, stop, date and departure fields.[^thb-intercity-timetable] A Hsinchu route appearing in both systems would be a cross-layer relationship to verify, not a reason to merge the two route identities. This page does not use the Highway Bureau's national route count or monthly aggregate statistics as Hsinchu figures.[^thb-intercity-timetable][^thb-intercity-stats]

No ridership series, vehicle roster, depot allocation, contract history, accessibility inventory or stable historical route-change series is asserted here. Those fields need primary records from Hsinchu City, Hsinchu County, operators or the Highway Bureau, fetched at full length. A 2024 Hsinchu transport-department PDF route-summary lead was checked on 25 August 2026 but returned HTTP 403, so it is recorded as a failed lead in the research file and is not used to fill the current snapshot.[^hsinchu-portal]

## Operators, and one unsettled question about scope

新竹客運 (Hsinchu Bus), the region's oldest operator, traces to 台灣軌道
株式會社, founded 29 September 1919[^zh-hsinchubus]. **Whether it still
runs Hsinchu city buses is not settled.** zh.wikipedia's own article
states the company currently operates only Hsinchu city buses and two
intercity routes[^zh-hsinchubus]. A separately fetched news account
reports that 新竹客運 exited **regional highway-bus routes** across
Hsinchu-Miaoli (竹竹苗) entirely on 1 November 2024, citing falling
ridership from demographic decline, pandemic effects and rising
private-vehicle ownership[^ltn-hsinchubus-exit] — but that article's own
framing is about intercity/highway routes, not explicitly about the city
network the route catalogue above draws from, which still lists 新竹客運
as an operator label. This site does not resolve the two readings against
each other; the catalogue above, dated 25 August 2026, is the more recent
primary evidence and leans toward "still operating city routes."

The city's own two trunk lines have different operators: the **Blue
Line** (formed 25 December 2015 from former routes 1 and 15) is run by
新竹客運, while the separately-formed **Green Line**, from the same date,
is run by **苗栗客運** (Miaoli Bus) — originally a highway route,
5809[^zh-hsinchu-green-line]. A newer, fully electric **先導公車** (pilot
bus) route is run by **國光客運**: ten electric buses, funded by a
NT$52 million Highway Bureau subsidy, merging the former 紅線/橘線 circular
shuttles and linking the railway station, two universities, the Science
Park and HSR Hsinchu Station[^hakkanews-pilot-bus]. Hsinchu's route
catalogue is therefore run by at least four distinct companies across its
different lines, not one dominant city operator.
