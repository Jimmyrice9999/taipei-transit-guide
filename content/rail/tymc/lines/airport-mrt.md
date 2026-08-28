---
title: "Airport MRT"
summary: "Taoyuan's operating line (A1–A22), the joint-venture corporation that runs it, its BOT collapse and 2017 opening after six announced delays, and the 2023 extension to Laojie River."
line: A
operator: TYMC
order: 1
updated: 2026-08-28
facts:
  - label: "Line code"
    value: "A"
    source: tdx-tymc-line
  - label: "Stations"
    value: "22 (A1–A22)"
    source: tdx-tymc-sor
  - label: "Opening (A1–A21)"
    value: "2 March 2017"
    source: tymc-history
  - label: "Extension opening (A22)"
    value: "31 July 2023"
    source: rb-a22-opening
  - label: "Underground / elevated stations"
    value: "7 underground, 15 elevated"
    source: ntpc-dorts-route
  - label: "Operator"
    value: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司), a joint venture of Taoyuan, New Taipei and Taipei city governments"
    source: tymc-about
  - label: "Ownership split"
    value: "Taoyuan 64.01%, New Taipei 29.32%, Taipei 6.67%"
    source: zhwiki-tymc-corp
specs:
  - label: "Route length (TDX, sum of surveyed inter-station chainage)"
    value: "51.76"
    unit: km
    source: tdx-tymc-route
  - label: "Route length (Taoyuan/New Taipei DORTS, Executive Yuan)"
    value: "51.03"
    unit: km
    source: ntpc-dorts-route
  - label: "Route length (zh.wikipedia infobox)"
    value: "51.95"
    unit: km
    source: zhwiki-airport-mrt
  - label: "Construction cost (initial line)"
    value: "113.85"
    unit: "NT$ billion"
    source: ntpc-dorts-route
  - label: "A22 extension cost (final, revised)"
    value: "17.302"
    unit: "NT$ billion"
    source: rb-a22-opening
sources:
  - id: tdx-tymc-line
    title: "TDX Taoyuan Airport MRT line records"
    titleOriginal: "桃園機場捷運路線資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Line/TYMC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "The current TYMC TDX pull returns one line record, A, for the operating Airport MRT — no record for the separate under-construction Green Line."
  - id: tdx-tymc-sor
    title: "TDX Taoyuan Airport MRT station-of-route records"
    titleOriginal: "桃園機場捷運路線車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/TYMC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Route A-1 (Taipei Main Station to Laojie River) lists all 22 current stations in sequence with cumulative distance."
  - id: tdx-tymc-route
    title: "TDX Taoyuan Airport MRT route records"
    titleOriginal: "桃園機場捷運路線長度資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/Route/TYMC?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Route A-1's published RouteLength (51.76 km) independently matches the sum of station-of-route cumulative distances to A22."
  - id: ntpc-dorts-route
    title: "Airport MRT project record"
    titleOriginal: "機場線"
    publisher: "Department of Rapid Transit Systems, New Taipei City Government (新北市政府捷運工程局)"
    url: "https://www.dorts.ntpc.gov.tw/about/route/npW0dxy4Z3Ex"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Builder's own project record: 路線全長51.03公里 (route length 51.03 km), 10.92 km underground / 40.11 km elevated, 7 underground / 15 elevated stations, two depots, and 工程建設總經費約1,138.5億元 — 1,138.5億元 converts to NT$113.85 billion, not NT$1,138.5 billion."
  - id: ey-airport-mrt
    title: "Airport MRT background"
    titleOriginal: "機場捷運系統簡介"
    publisher: "Executive Yuan (行政院)"
    url: "https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/93c734c7-435f-47cd-b7d0-0d3b4f8ff11d"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Independently states the same 51.03 km / 10.92 km / 40.11 km / 22-station / 7-underground / 15-elevated / two-depot figures as the New Taipei DORTS page."
  - id: zhwiki-airport-mrt
    title: "Taoyuan Airport MRT"
    titleOriginal: "桃園機場捷運"
    publisher: "維基百科 (zh.wikipedia)"
    url: "https://zh.wikipedia.org/zh-tw/桃園機場捷運"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Infobox gives 營運長度51.95公里 (operating length 51.95 km), a third route-length figure not traced to a cited primary within the article; also the source for the BOT/planning chronology below."
  - id: tymc-history
    title: "Company milestones"
    titleOriginal: "桃捷大事紀"
    publisher: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)"
    url: "https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/history.html"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "States 機場捷運線於106年3月2日正式營運通車 (opened 2 March 2017), plus test-operation, certification and trial-ride dates leading up to it, and the 26 June 2006 ceremonial groundbreaking presided over by the Premier."
  - id: tymc-about
    title: "About TYMC"
    titleOriginal: "關於桃捷"
    publisher: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)"
    url: "https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/index.html"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "States the company was jointly founded by the Taoyuan, New Taipei and Taipei city governments along the line's route, with MOTC designating Taoyuan City to operate it."
  - id: zhwiki-tymc-corp
    title: "Taoyuan Metro Corporation"
    titleOriginal: "桃園捷運公司"
    publisher: "維基百科 (zh.wikipedia)"
    url: "https://zh.wikipedia.org/zh-tw/桃園捷運公司"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Gives the founding date (6 July 2010), initial capital (NT$3 billion) and the three cities' ownership shares, apportioned by each city's length of route."
  - id: zhwiki-bot-history
    title: "Taoyuan Airport MRT (BOT and planning history)"
    titleOriginal: "桃園機場捷運"
    publisher: "維基百科 (zh.wikipedia)"
    url: "https://zh.wikipedia.org/zh-tw/桃園機場捷運"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "States the October 1996 BOT decision, Long Life International Development Co.'s 1998 winning bid, and the 31 December 2002 termination of the BOT contract."
  - id: cna-marubeni-2017
    title: "Airport MRT settles accounts: Railway Bureau to fine Marubeni NT$2.5 billion and seek damages"
    titleOriginal: "機捷算總帳 高鐵局將罰丸紅25億並求償"
    publisher: "Central News Agency (中央社)"
    url: "https://www.cna.com.tw/news/ahel/201701090048.aspx"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Contemporaneous wire report (9 January 2017): NT$2.5 billion delay-penalty cap, NT$1.9 billion performance bond withheld for unauthorised signalling subcontracting, and Marubeni's own NT$12.9 billion counter-claim over Bureau-directed design changes. States no combined total; 2.5 + 1.9 = 4.4, not 7.2."
  - id: cna-marubeni-2021
    title: "Airport MRT running times missed target: Railway Bureau withholds over NT$700 million from Marubeni"
    titleOriginal: "機捷行車時間未達標 鐵道局扣丸紅7億多元工程款"
    publisher: "Central News Agency (中央社)"
    url: "https://www.cna.com.tw/news/firstnews/202108290054.aspx"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "29 August 2021: NT$726,926,496 withheld for missing three contractual performance standards — express journey time, average speed and headway — a separate, later dispute from the 2017 one."
  - id: zhwiki-2000-series
    title: "Taoyuan Metro 2000-series EMU"
    titleOriginal: "桃園捷運2000型電聯車"
    publisher: "維基百科 (zh.wikipedia)"
    url: "https://zh.wikipedia.org/zh-tw/桃園捷運2000型電聯車"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Express fleet: built by Kawasaki Heavy Industries, 11 five-car sets (201–211), 55 cars, third-rail DC 750V, 1,435 mm gauge, 100 km/h operating speed."
  - id: zhwiki-1000-series
    title: "Taoyuan Metro 1000-series EMU"
    titleOriginal: "桃園捷運1000型電聯車"
    publisher: "維基百科 (zh.wikipedia)"
    url: "https://zh.wikipedia.org/zh-tw/桃園捷運1000型電聯車"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "Commuter fleet: split manufacture, Kawasaki (sets 101, 118–120) and Taiwan Rolling Stock Co. (sets 102–117), 20 four-car sets, 80 cars, 188 seats per set."
  - id: rb-airport-depot-page
    title: "Airport MRT maintenance depots record"
    titleOriginal: "機場捷運維修機廠"
    publisher: "Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)"
    url: "https://www.rb.gov.tw/public/files/artsinfo/1500644721-0.pdf"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Names Qingpu (青埔機廠) and Luzhu (蘆竹機廠) as the line's two maintenance depots."
  - id: tymc-express-timetable
    title: "Taoyuan Airport MRT route and stopping pattern"
    titleOriginal: "桃園捷運機場線路線圖及停靠站"
    publisher: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)"
    url: "https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/road.html"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "States the fixed express (直達車) stop list — A1, A3, A8, A12, A13 — the peak-hour \"Huanbei Express\" addition of A18 and A21, and that the commuter (普通車) service calls at every station."
  - id: tycg-tourism-airport-mrt
    title: "Airport MRT travel guide"
    titleOriginal: "機場捷運交通資訊"
    publisher: "Taoyuan Tourism (桃園觀光導覽網, Taoyuan City Government)"
    url: "https://travel.tycg.gov.tw/zh-tw/traffic/airportmrt"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "States express journey times of 35 minutes (A1 to Terminal 1) and 39 minutes (A1 to Terminal 2), and commuter times of 82 minutes (A1 to A21) and 19 minutes (A18 to Terminal 1)."
  - id: tymc-ticket-guide
    title: "Ticketing guide"
    titleOriginal: "票務資訊"
    publisher: "Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)"
    url: "https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticket.html"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "States combination-ticket prices (an airport-line return plus a Taipei Metro 48-hour pass, NT$520; plus a 72-hour pass, NT$600) and the accepted payment-card list; does not itself restate the base single fare."
  - id: gvm-tymc-fare-discount
    title: "Airport MRT's 2024 record NT$500 million surplus — why the whole line cancelled its NT$10 discount"
    titleOriginal: "桃園機場捷運2024盈餘5億創新高！為何全線取消車票10元優惠？"
    publisher: "GVM (城市學)"
    url: "https://city.gvm.com.tw/article/117975"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "States the NT$10 single-fare discount was withdrawn from 2 January 2025, attributed to Chairman 陳志長 citing rising electricity costs; also gives a 2024 surplus estimate of NT$500 million, published nine days before year-end."
  - id: ltn-tymc-2025-results
    title: "Airport MRT's record NT$679 million surplus last year — nearly NT$1.1 billion debt fully repaid"
    titleOriginal: "桃園捷運去年盈餘6.79億元創新高 近11億債務全清償"
    publisher: "Liberty Times (自由時報)"
    url: "https://news.ltn.com.tw/news/Taoyuan/breakingnews/5332661"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "4 February 2026: 2025 surplus NT$679 million, a record; nearly NT$1.1 billion of debt fully repaid; 2025 ridership over 46 million, up 12% on 2024."
  - id: storm-tymc-turnaround
    title: "How a money-loser became a golden goose: Taoyuan Metro turns a profit"
    titleOriginal: "賠錢貨如何變身小金雞？桃園捷運賺錢了！張善政曝3關鍵：10億債務全還清"
    publisher: "Storm Media (風傳媒)"
    url: "https://www.storm.mg/lifestyle/11101286"
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: "6 February 2026: 2022 negative net worth of NT$706 million forcing a NT$1.067 billion bank loan; 2023 the first profitable year (no NT$ figure given); 2024 profit \"over NT$400 million\"; 2025 profit NT$679 million; the bank loan fully repaid in April 2025."
  - id: rb-a22-opening
    title: "Airport MRT A22 Laojie River Station opens"
    titleOriginal: "機場捷運延伸線A22老街溪站正式通車"
    publisher: "Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)"
    url: "https://www.rb.gov.tw/zh-TW/main/main_188/news/main_347/artsinfo_3905/"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "States March 2023 stability testing, 1 March 2023 operator handover, the 31 July 2023 operating permit and opening, three delay causes, and total project cost NT$17.302 billion."
  - id: rb-a22-extension-scope
    title: "Airport MRT A21–A23 extension project record"
    titleOriginal: "機場捷運A21至A23延伸案"
    publisher: "Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)"
    url: "https://www.rb.gov.tw/zh-TW/%5Bsite%5D/main_28/20250505_152320/20251104_133945/20250505_152539/"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Gives the extension's approximately 2.06 km underground length and method, and the cost revision sequence: NT$13.801 billion original approved plan, NT$13.8 billion first revision, NT$17.302 billion second revision."
  - id: dorts-airport-a-table
    title: "Airport MRT station table"
    titleOriginal: "機場線車站一覽表"
    publisher: "Taoyuan City Department of Rapid Transit Systems (桃園市政府捷運工程局)"
    url: "https://dorts.tycg.gov.tw/cp.aspx?Create=1&n=23131"
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: "Current station table; its A23 section gives two different opening-year figures — 117年 (2028) in one place and 118年 (2029) in another — an internal inconsistency on the same page."
---

The Airport MRT is Taoyuan Metro Corporation's one currently operating line, connecting Taipei Main Station to Taoyuan International Airport and on to Zhongli via 22 stations.[^tdx-tymc-line][^tdx-tymc-sor] TYMC itself is not Taoyuan City's own corporation: it was jointly founded on 6 July 2010 by the Taoyuan, New Taipei and Taipei city governments in proportion to each city's share of the route, with capital of NT$3 billion, and the Ministry of Transportation and Communications designated Taoyuan City to operate it.[^tymc-about][^zhwiki-tymc-corp] The ownership split is Taoyuan 64.01%, New Taipei 29.32% and Taipei 6.67%.[^zhwiki-tymc-corp]

## Route length: three figures, none silently picked

This site's own committed TDX data gives route A-1's length as 51.76 km, the sum of surveyed inter-station chainage to the current terminus at A22.[^tdx-tymc-route][^tdx-tymc-sor] New Taipei City's own project record and an Executive Yuan background page instead independently agree on 51.03 km, split as roughly 10.92 km underground and 40.11 km elevated across 7 underground and 15 elevated stations, with two maintenance depots.[^ntpc-dorts-route][^ey-airport-mrt] zh.wikipedia's infobox gives a third figure, 51.95 km, not traced to any source cited within the article itself.[^zhwiki-airport-mrt] Nothing read for this page explains what the three figures each measure differently; all three are published rather than averaged or one chosen as authoritative.

The same New Taipei project record gives the initial line's construction cost as 「工程建設總經費約1,138.5億元」— 1,138.5億元, which converts to NT$113.85 billion, not the ten-times-larger NT$1,138.5 billion a literal digit-for-digit misreading of the Chinese unit could produce.[^ntpc-dorts-route]

## From a failed BOT to a government-built line

Planning has at least three defensible starting points, and different sources plainly mean different things by it: an October 1989 feasibility study is the earliest date found, though only at secondary strength; in October 1996 the central government decided to build the line under a Build-Operate-Transfer (BOT) model; and Long Life International Development Co. (長生國際開發) won the BOT bid in 1998.[^zhwiki-bot-history] The BOT arrangement collapsed on 31 December 2002, when Long Life and the then High Speed Rail Bureau agreed to terminate the contract.[^zhwiki-bot-history] The government took direct responsibility afterward: MOTC designated the High Speed Rail Bureau as the project's construction body on 28 October 2003, and the central government approved the construction plan on 9 March 2004.[^tymc-history][^ntpc-dorts-route]

Construction start likewise has more than one dated event rather than one clean answer: New Taipei's project record gives 27 February 2006 for the formal start of the Sanchong–Airport–Zhongli section and its E&M systems, while TYMC's own company history instead records a ceremonial groundbreaking on 26 June 2006, presided over by the Premier.[^ntpc-dorts-route][^tymc-history] The line opened on 2 March 2017 for stations A1 through A21, after the originally announced January 2009 target had been publicly revised six times — the specific dates and reasons for each of the six changes are not established by any source read for this page and stay TBC.[^tymc-history]

## The Marubeni dispute: two confirmed figures, one unconfirmed total

Around the 2017 opening, contemporaneous wire reporting recorded the then High Speed Rail Bureau imposing a NT$2.5 billion delay-penalty cap on contractor Marubeni Corporation (丸紅), the contractual maximum, plus a separate NT$1.9 billion performance bond withheld over Marubeni's unauthorised subcontracting of the signalling system to a British firm — its contract required Marubeni to design that system itself.[^cna-marubeni-2017] Marubeni separately counter-claimed NT$12.9 billion against the Ministry, on the grounds of repeated Bureau-directed design changes.[^cna-marubeni-2017] No source read for this page states a combined total for the dispute of any kind: NT$2.5 billion plus NT$1.9 billion is NT$4.4 billion, not any commonly-circulated larger figure, and the individual component figures are published here on that basis rather than an unconfirmed total.

A separate, later dispute in 2021 concerned in-service performance rather than construction delay: the Public Construction Commission recommended withholding NT$726,926,496 from Marubeni for missing three contractual operating standards — express journey time, average speed and train headway.[^cna-marubeni-2021]

## Rolling stock: two fleets, two manufacturing arrangements

The express (直達車) fleet is the purple 2000-series, built entirely by Kawasaki Heavy Industries: 11 five-car sets (201–211), 55 cars, running on third-rail DC 750V power at 1,435 mm standard gauge, with a 100 km/h operating speed.[^zhwiki-2000-series] The commuter (普通車) fleet is the blue 1000-series, built under a split arrangement: Kawasaki built the prototype and sets 101 and 118–120, while the remaining sets 102–117 were assembled domestically by Taiwan Rolling Stock Co. (台灣車輛) under an industrial-cooperation programme.[^zhwiki-1000-series] Twenty four-car 1000-series sets, 80 cars, are in current service, each carrying 188 seats.[^zhwiki-1000-series] Both fleets are maintained across two depots, Qingpu and Luzhu, though no source read for this page allocates specific trains to one depot over the other.[^rb-airport-depot-page]

## Express, commuter and journey times

TYMC's own current route page fixes the express (直達車) stop pattern at five stations — A1, A3, A8, A12 and A13 — with a peak-hour "Huanbei Express" (環北直達車) pattern adding A18 and A21; the commuter (普通車) service calls at every station, A1 through A22.[^tymc-express-timetable] A Taoyuan City tourism page gives express journey times of 35 minutes from Taipei Main Station to Airport Terminal 1 and 39 minutes to Terminal 2, and commuter times of 82 minutes from Taipei Main Station to Huanbei and 19 minutes from Taoyuan HSR Station to Terminal 1.[^tycg-tourism-airport-mrt]

## Fares and the financial turnaround

TYMC's own ticketing page states combination-ticket prices — an airport-line return plus a Taipei Metro 48-hour pass for NT$520, or a 72-hour pass for NT$600 — without itself restating the base single fare in the section read for this page.[^tymc-ticket-guide] A NT$10 single-fare discount was withdrawn from 2 January 2025, attributed by the company's chairman to rising electricity costs.[^gvm-tymc-fare-discount] Whether express and commuter fares differ for the same journey is not established by any primary source read for this page and stays TBC rather than repeated from secondary aggregation.

The line's finances turned around after years of loss: a 2022 negative net worth of NT$706 million forced a NT$1.067 billion bank loan; 2023 was the first profitable year, though no source read for this page gives a specific NT$ figure for that year; 2024 profit is reported at "over NT$400 million" by one February 2026 retrospective and at NT$500 million by an earlier estimate published nine days before that year's end — both published rather than reconciled, since the second may be a projection rather than a final result.[^storm-tymc-turnaround][^gvm-tymc-fare-discount] The 2025 surplus reached a record NT$679 million, with nearly NT$1.1 billion of debt fully repaid by April 2025 and annual ridership over 46 million, up 12% on 2024.[^ltn-tymc-2025-results][^storm-tymc-turnaround]

## The 2023 extension, and what comes next

A22 Laojie River Station opened 31 July 2023, extending the line about 2.06 km underground beyond the former terminus at Huanbei.[^rb-a22-extension-scope][^rb-a22-opening] The Railway Bureau's own opening announcement gives three delay causes together, not one: COVID-19-era disruption to foreign electrical-and-mechanical suppliers between 2020 and 2022, the technical difficulty of integrating the extension's newer signalling generation with the existing line, and design changes needed to coordinate with a separately-planned Taoyuan railway-undergrounding project.[^rb-a22-opening] The extension's total cost rose from an original approved NT$13.801 billion, through a first revision of NT$13.8 billion, to a final NT$17.302 billion.[^rb-a22-extension-scope]

A further extension to Zhongli (`A23`) was under construction as of the sources read for this page, planned to connect with the future Taoyuan Metro Green Line.[^dorts-airport-a-table] Taoyuan City's own current station table gives two different target years for `A23` within different sections of the same page — 117年 (2028) and 118年 (2029) — an internal inconsistency this page reports rather than resolves.[^dorts-airport-a-table]
