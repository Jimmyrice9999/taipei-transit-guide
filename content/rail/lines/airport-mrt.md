---
title: Taoyuan Airport MRT
summary: The purple express-and-commuter line from Taipei Main Station to the airport and on into Taoyuan — a different operator, a different fare system, and the network's only express/local pattern.
order: 10
line: A
aliases:
  - 機場捷運
  - Airport MRT
  - 桃園機場捷運
updated: 2026-08-13
hero:
  image: airport-mrt/hero
  alt: A blue-liveried Airport MRT train crossing an elevated viaduct at Guishan, Taoyuan, apartment towers and a road interchange below.
  caption: An Airport MRT train on the elevated guideway at Guishan, on the Taoyuan side of the line.
facts:
  - label: Line code
    value: A
    source: tdx
  - label: Operator
    value: Taoyuan Metro Corporation (TYMC)
    source: tymc-about
  - label: Termini
    value: A1 — A22
    source: tdx
  - label: Stations
    value: "22"
    source: tdx
  - label: Opened
    value: 2 March 2017
    source: tymc-about
  - label: A22 extension opened
    value: 31 July 2023
    source: motc-a22
  - label: Route length
    value: 51.76 km (TDX) / 51.03 km (DORTS)
    source: tdx
  - label: Depots
    value: Luzhu (蘆竹機廠), Qingpu (青埔機廠)
    source: zh-airport-mrt
  - label: Capital
    value: NT$3 billion, Taoyuan 64.01% / New Taipei 29.32% / Taipei 6.67%
    source: zh-tymc-corp
specs:
  - label: Route length, TDX
    value: "51.76"
    unit: km
    source: tdx
  - label: Route length, DORTS
    value: "51.03"
    unit: km
    source: dorts-airport
  - label: Stations
    value: "22"
    source: tdx
  - label: Express fleet
    value: Kawasaki 2000-type, 11 sets of 5 cars
    source: zh-2000-type
  - label: Commuter fleet
    value: Kawasaki + Taiwan Rolling Stock 1000-type, 20 sets of 4 cars
    source: zh-1000-type
  - label: Power supply
    value: DC 750 V third rail
    source: zh-2000-type
  - label: Gauge
    value: "1435"
    unit: mm
    source: zh-2000-type
  - label: Operating speed
    value: "100"
    unit: km/h
    source: zh-2000-type
  - label: Maximum single fare
    value: "160"
    unit: NT$
    source: tymc-ticket
  - label: 2025 surplus
    value: "679"
    unit: NT$ million
    source: ltn-2026
  - label: 2025 ridership
    value: "46"
    unit: million, +12% YoY
    source: ltn-2026
sources:
  - id: tdx
    title: Taiwan MOTC TDX — Station, Route, StationOfRoute, operator TYMC
    publisher: Ministry of Transportation and Communications, Taiwan
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-12
    kind: primary
    note: "Government open data, committed to this repository at data/tdx/TYMC/. RouteLength for route A-1 (Taipei Main–Laojie River) is 51.76, matching the CumulativeDistance sum in station-of-route.json. 22 stations, including the non-numeric code A14a for Airport Hotel — A14 itself is reserved for the not-yet-open Terminal 3 station. TDX's route objects have no way to express the skip-stop express pattern: every route it defines calls at every intervening station, so A-2 and A-3 are shorter all-stops services, not the express."
  - id: tymc-about
    title: About TYMC
    titleOriginal: 關於桃捷
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/index.html
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own statement of its founding and opening date: 機場捷運線於106年3月2日正式營運通車 — service began 2 March 2017. Confirms the company was formed by the three city governments, with Taoyuan City Government designated by MOTC to run it."
  - id: tymc-history
    title: TYMC company history
    titleOriginal: 桃捷大事紀
    publisher: Taoyuan Metro Corporation
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/about/history.html
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own milestone list: MOTC designated the High Speed Rail Bureau as builder 28 October 2003 (92年10月28日), central government approved the construction plan 9 March 2004, a groundbreaking ceremony was held 26 June 2006, and the company itself was established 6 July 2010 (99年07月06日)."
  - id: dorts-airport
    title: Airport Line
    titleOriginal: 機場線
    publisher: New Taipei City Government, Department of Rapid Transit Systems (新北市政府捷運工程局)
    url: https://www.dorts.ntpc.gov.tw/about/route/npW0dxy4Z3Ex
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The builder's own project record for the New Taipei-managed portion: 路線全長51.03公里, 22 stations (15 elevated, 7 underground), construction of the Sanchong–Airport–Zhongli section and E&M systems started 2006年2月27日, planning report approved 93年3月9日 (9 March 2004), full-line operation began 106年3月2日 (2 March 2017)."
  - id: motc-a22
    title: "Press release: the Airport MRT extension's A22 Laojiexi Station formally opens"
    titleOriginal: 交通新聞稿－機場捷運延伸線A22老街溪站正式通車
    publisher: 中華民國交通部 (Ministry of Transportation and Communications, Taiwan)
    url: https://www.motc.gov.tw/ch/app/data/view?module=news&id=14&serno=03fcdf67-3c92-46b9-b79b-cc98b983dc04
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The Ministry's own account of the extension: construction started December 2012, stability testing completed March 2023, MOTC inspection 18 June 2023, operating permit and service start both 31 July 2023. Gives three delay causes together — COVID-era disruption to foreign E&M suppliers (109–111年/2020–2022), high difficulty integrating the extension's dual-generation signalling with the existing line, and design changes to coordinate with the separate Taoyuan rail-undergrounding project. Total project cost NT$17.302 billion."
  - id: tymc-timetable
    title: Travel guide — timetable
    titleOriginal: 乘車指南
    publisher: Taoyuan Metro Corporation
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable.php
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own stopping patterns: express (直達車) calls at A1, A3, A8, A12, A13; a peak-only enhanced express (尖峰增停直達車) additionally calls at A18 and A21; commuter (普通車) trains call at every station."
  - id: tymc-checkin
    title: In-town check-in guide
    titleOriginal: 預辦登機須知
    publisher: Taoyuan Metro Corporation
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/checkin/process.php
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own hours: A1 Taipei Main Station, B1 level, 06:00–21:30; A3 New Taipei Industrial Park Station, 1F level, 09:00–16:00; check-in closes 3 hours before flight departure at both. Does not itself list participating airlines — links onward to the airport operator's own page, which returned HTTP 403 to this site's fetch tooling."
  - id: tymc-ticket
    title: Travel guide — tickets
    titleOriginal: 乘車指南（票種）
    publisher: Taoyuan Metro Corporation
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/ticket.html
    accessed: 2026-08-12
    kind: primary
    lang: zh-Hant
    note: "The operator's own fare and ticketing page: combination tickets pairing an airport-line return with a Taipei Metro 48-hour pass (NT$520) or 72-hour pass (NT$600); accepted stored-value cards (EasyCard, iPass, icash 2.0); day passes and the cross-city 基北北桃1200都會通 monthly pass."
  - id: zh-airport-mrt
    title: Taoyuan Airport MRT
    titleOriginal: 桃園機場捷運
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/桃園機場捷運
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Read in full. Source for the BOT era (1996年10月 BOT decision, 1998 Long Life International wins the bid, terminated 2002年12月31日), the two depot names (蘆竹機廠, 青埔機廠), and the express/commuter service pattern detail (34.03 km / ~39 min base express; ~64 min Huanbei peak express). Contains no Marubeni monetary figures at all, despite being the article a widely-circulated dispute figure is often attributed to."
  - id: cna-2016-delays
    title: "Airport MRT opening date has changed six times: how we got here"
    titleOriginal: 機場捷運通車時程變更6次 始末報你知
    publisher: 中央社 CNA
    url: https://www.cna.com.tw/news/firstnews/201603040457.aspx
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "The earliest announced opening date was January 2009; by this article's date (4 March 2016) it had changed six times: 最早決定的通車日是2009年1月，至今已變更6次. The fetch used for this page returned only the article's opening paragraph, not an itemised list of each change, which is why this page states the headline fact but not a full delay table."
  - id: cna-2017-marubeni
    title: "Airport MRT settles accounts: High Speed Rail Bureau to fine Marubeni NT$2.5 billion and pursue further damages"
    titleOriginal: 機捷算總帳 高鐵局將罰丸紅25億並求償
    publisher: 中央社 CNA (記者汪淑芬)
    url: https://www.cna.com.tw/news/ahel/201701090048.aspx
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Contemporaneous wire report, 9 January 2017. Two figures, quoted directly: a NT$2.5 billion delay penalty, the contractual maximum (罰金最高上限約25億元, calculated at 0.05% of contract value per day); and roughly NT$1.9 billion in performance bonds withheld (扣住部分履約保證金約19億多元) over Marubeni's unauthorised subcontracting of the signalling system to a British firm. Also reports Marubeni's own NT$12.9 billion counter-claim against MOTC over design changes. No combined total is stated in this article."
  - id: cna-2021-marubeni
    title: "Airport MRT travel times miss target: Railway Bureau withholds over NT$700 million from Marubeni"
    titleOriginal: 機捷行車時間未達標 鐵道局扣丸紅7億多元工程款
    publisher: 中央社 CNA
    url: https://www.cna.com.tw/news/firstnews/202108290054.aspx
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "A separate, later, smaller dispute: NT$726,926,496 withheld (以扣工程款方式辦理驗收，並建議減價金額7億2692萬6496元) for missed express-train travel time, average speed and headway targets, decided late 2020, reaching the Railway Bureau March 2021. Not the same matter as the 2016–17 penalty and bond figures above, and not a source for any 'NT$7.2 billion' total — no such total appears in this article either."
  - id: zh-2000-type
    title: Taoyuan Metro 2000-type electric multiple unit
    titleOriginal: 桃園捷運2000型電聯車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/桃園捷運2000型電聯車
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Read in full. Manufacturer: 該型列車由川崎重工業製造 (Kawasaki Heavy Industries), built 2011–2013. 11 five-car sets (201–211), 55 cars, 4 passenger cars plus 1 dedicated luggage car per set. DC 750V third rail, 1,435mm gauge. ≈855 passengers per set, 206 seats, 8 wheelchair spaces. 100 km/h operating, 110 km/h design maximum. Transverse seating, overhead luggage racks, WiFi, USB charging; a photo caption notes wireless charging pads as currently suspended (暫停使用)."
  - id: zh-1000-type
    title: Taoyuan Metro 1000-type electric multiple unit
    titleOriginal: 桃園捷運1000型電聯車
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/桃園捷運1000型電聯車
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Read in full. Split manufacture under an industrial-cooperation programme: 川崎重工（101、118~120編組）／台灣車輛（102~117編組） — Kawasaki built the prototype and sets 118–120, Taiwan Rolling Stock Co. built the rest domestically. Built 2011–2012 and again 2015. 4-car sets (4M), 20 sets currently (80 cars). Longitudinal seating. Same power supply and gauge as the express fleet. The article's summary prose reads as 188 seats per car, but its own per-car table (44+47+50+44=185) shows 188 is the per-set total, not per car — checked here rather than repeated as written."
  - id: ltn-2026
    title: "Taoyuan Metro's surplus reached a record NT$679 million last year, with nearly NT$1.1 billion in debt fully repaid"
    titleOriginal: 桃園捷運去年盈餘6.79億元創新高 近11億債務全清償
    publisher: 自由時報
    url: https://news.ltn.com.tw/news/Taoyuan/breakingnews/5332661
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Published 4 February 2026. 2025 surplus NT$679 million (盈餘6.79億元創新高), a record; nearly NT$1.1 billion in bank debt fully repaid (近11億債務全清償); 2025 ridership over 46 million, up 12% on 2024 (去年全年運量來到4600多萬人次，相較2024年增加12%)."
  - id: storm-2026
    title: "How did a money-loser become a golden goose? Taoyuan Metro is profitable — Mayor Chang Shan-cheng on three keys, and NT$1 billion in debt fully repaid"
    titleOriginal: 賠錢貨如何變身小金雞？桃園捷運賺錢了！張善政曝3關鍵：10億債務全還清
    publisher: 風傳媒 Storm Media (李伊晴)
    url: https://www.storm.mg/lifestyle/11101286
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Published 6 February 2026. Corroborates the 2025 NT$679 million surplus figure exactly. Adds: 2022 negative net worth of NT$706 million (淨值-7.06億元) forced a NT$1.067 billion bank loan; 2023 was the first profitable year (no NT$ figure given for 2023 itself); 2024 profit 'over NT$400 million'; the loan was fully repaid 去年4月 — 'April of last year' relative to this February 2026 article, i.e. April 2025, not April 2026. Includes a direct quote from Mayor 張善政 describing pre-2022 operations as 悽慘 (pitiful) and the company as now 零負債 (zero debt)."
  - id: gvm-2024
    title: "Taoyuan Airport MRT's 2024 surplus hit a record NT$500 million — why cancel the system-wide NT$10 fare discount?"
    titleOriginal: 桃園機場捷運2024盈餘5億創新高！為何全線取消車票10元優惠？
    publisher: 城市學 (GVM)
    url: https://city.gvm.com.tw/article/117975
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Published 22 December 2024 — nine days before year-end, so its 2024 figures likely a projection rather than a final result, which may explain why they do not match Storm Media's later 'over NT$400 million' figure for the same year. States the NT$10 discount ends 2 January 2025, per Chairman 陳志長, citing rising electricity costs. States 2024 daily ridership 114,289."
  - id: zh-tymc-corp
    title: Taoyuan Metro Corporation
    titleOriginal: 桃園捷運公司
    publisher: 維基百科 (Chinese Wikipedia)
    url: https://zh.wikipedia.org/zh-tw/桃園捷運公司
    accessed: 2026-08-12
    kind: secondary
    lang: zh-Hant
    note: "Read in full. Founded 6 July 2010, capital NT$3 billion, ownership split Taoyuan 64.01% / New Taipei 29.32% / Taipei 6.67% by original construction-cost share. Renamed 25 December 2014 when Taoyuan County became a municipality. Headquarters at the Qingpu Depot site, 251 Linghang North Road Section 4, Dayuan District — beside A17 Linghang, not A18 Taoyuan HSR."
---

The airport line is the network's odd one out three times over: it belongs to
[Taoyuan Metro](/rail/operators/tymc/) rather than either Taipei
operator[^tymc-about], its fares sit outside the Taipei distance
bands[^tymc-ticket], and it runs an express/local service pattern found
nowhere else on the system[^tymc-timetable] — two fleets, one line,
distinguished on the platform by the purple and blue liveries of the
[2000-type](#rolling-stock) and [1000-type](#rolling-stock) trains that run
it[^zh-2000-type][^zh-1000-type].

The station list beside this page is generated from Taiwan's TDX open-data
platform and is current: all 22 stations, A1 through A22, including the
non-standard code `A14a` for Airport Hotel Station — plain `A14` is reserved
for the still-unbuilt Terminal 3 station[^tdx].

## From feasibility study to opening: nearly three decades, depending how you count

Sources genuinely disagree about when this line's history starts, because
different bodies mean different things by "planning." A 1989–90 feasibility
study by the Ministry of Transportation's Institute of Transportation
Research is the earliest date found for the idea of a Taoyuan-area
metro[^cna-2016-delays], though the source for that specific study is a
search synthesis rather than a page read in full here, and it is marked
accordingly. What is better sourced is the sequence that actually built the
railway: central government decided in October 1996 to build it as a BOT
(build–operate–transfer) concession, and Long Life International Development
Co. won that concession in 1998[^zh-airport-mrt]. The BOT model collapsed on
31 December 2002, when Long Life and the High Speed Rail Bureau agreed to
terminate the contract[^zh-airport-mrt]. Government took over: MOTC
designated the High Speed Rail Bureau as the project's builder on 28 October
2003, and the central government approved the construction plan on 9 March
2004[^tymc-history][^dorts-airport]. Construction of the Sanchong–Airport–
Zhongli section and its E&M systems formally started 27 February
2006[^dorts-airport]; TYMC's own history page instead marks 26 June 2006, the
date of a ceremonial groundbreaking presided over by the
Premier[^tymc-history] — two different milestones in the same year, not a
contradiction.

The opening date itself moved repeatedly. The earliest announced target was
January 2009; by March 2016 it had changed six times[^cna-2016-delays]. An
itemised date-by-date account of each of the six changes was not recovered
from the sources read for this page — the one contemporaneous account found
was only partially readable — so this page states the six-changes headline
fact rather than a table it cannot support. The line finally opened **2
March 2017**[^tymc-about][^dorts-airport].

## The Marubeni dispute — two figures confirmed, a widely repeated total not found anywhere

The main electromechanical contract (ME01) went to a consortium led by the
Japanese trading house **Marubeni** (丸紅), with Kawasaki Heavy Industries and
Hitachi as named subcontractors. In January 2017, weeks before opening, the
High Speed Rail Bureau announced it would impose a **NT$2.5 billion delay
penalty** — the contract's maximum, calculated at 0.05% of contract value per
day of delay — and had already **withheld roughly NT$1.9 billion in
performance bonds**, over Marubeni's unauthorised subcontracting of the
signalling system, which its contract required it to design itself, to a
British firm[^cna-2017-marubeni]. Marubeni's own counter-claim against the
Ministry, seeking NT$12.9 billion over repeated design changes, was reported
in the same account[^cna-2017-marubeni]. Both of the Bureau's figures were
independently corroborated by two further contemporaneous reports naming the
same amounts and the same reasons.

**A combined "NT$7.2 billion" total for this dispute circulates widely, and
this page does not repeat it.** NT$2.5 billion plus NT$1.9 billion is NT$4.4
billion, not NT$7.2 billion, and no primary or secondary source read for this
page — not the three contemporaneous 2017 news accounts, not
zh.wikipedia's own article on the line, which contains no Marubeni monetary
figures at all — states a combined total of any kind. The NT$7.2 billion
figure appeared repeatedly in this research run's own search-engine result
summaries, never inside a quoted source sentence, and in one case alongside
an unrelated, later, and much smaller 2021 dispute — the Railway Bureau
withheld NT$726.93 million from Marubeni that year for missing express-train
travel-time, speed and headway targets[^cna-2021-marubeni] — that shares a
leading digit and may be the source of the confusion. The two confirmed
figures, and Marubeni's name, are published here on the strength of three
independent contemporaneous accounts; the total is not, because it could not
be found stated anywhere.

## Service patterns

Two services share the same track. The **express (直達車)**, in purple,
calls at A1, A3, A8, A12 and A13; a peak-only enhanced express additionally
serves A18 and A21[^tymc-timetable] — zh.wikipedia names this pattern the
Huanbei Express, giving it a run time of about 64 minutes against roughly 39
minutes for the base A1–A13 express[^zh-airport-mrt]. The **commuter (普通
車)**, in blue, calls at every station from A1 to A22; the A21–A22 section
between Huanbei and Laojiexi carries commuter trains only[^tymc-timetable].

This site's TDX pull cannot show the skip-stop pattern directly: every route
TDX defines for this line lists consecutive stops through every intervening
station, so the shorter "A-2" and "A-3" routes in the underlying data are
all-stops services over part of the line, not the express — the express
pattern above rests on TYMC's own timetable page rather than the generated
station data[^tdx][^tymc-timetable].

![The underground platform at A1 Taipei Main Station, trains standing on both sides](/images/airport-mrt/station-800.webp "A1 Taipei Main Station, the line's Taipei terminus. — Littlebtc, CC BY-SA 4.0, Wikimedia Commons")

## Rolling stock

Two fleets, two manufacturers, sharing the same 1,435mm gauge and DC 750V
third-rail supply[^zh-2000-type][^zh-1000-type].

The **express fleet (2000-type, purple)** is built entirely by **Kawasaki
Heavy Industries**, delivered 2011–2013 for the 2017 opening: 11 five-car
sets, 55 cars, each set four passenger cars plus a dedicated luggage
car[^zh-2000-type]. Transverse seating, overhead luggage racks, WiFi and USB
charging are fitted; wireless charging pads are noted in one source as
currently suspended, rather than the always-on feature sometimes
described[^zh-2000-type]. Capacity is around 855 per set, with 206 seats and
eight wheelchair spaces[^zh-2000-type].

![Passengers seated in the purple transverse seating of an Airport MRT express train, luggage racks and a route display overhead](/images/airport-mrt/interior-800.webp "Inside an express (2000-type) train. — Cheng-en Cheng from Taichung City, Taiwan, CC BY-SA 2.0, Wikimedia Commons")

The **commuter fleet (1000-type, blue)** was built under an industrial-
cooperation arrangement: Kawasaki built the prototype set and three later
sets (101, 118–120); the rest, sets 102–117, were assembled domestically by
**Taiwan Rolling Stock Co.** (台灣車輛股份有限公司)[^zh-1000-type]. There are
currently 20 four-car sets, 80 cars, with longitudinal seating for higher
standing capacity[^zh-1000-type]. Per-set seating is 188 — one source's own
summary prose describes this as "per car," which its own per-car table
contradicts (44+47+50+44 seats across the four cars, summing close to 188),
so this page publishes the per-set reading[^zh-1000-type].

Both fleets run at 100 km/h in service, with a 110 km/h design
maximum[^zh-2000-type][^zh-1000-type].

## In-town check-in

Free advance check-in and baggage drop operate at two stations: **A1 Taipei
Main Station**, on B1, 06:00–21:30, and **A3 New Taipei Industrial Park
Station**, on 1F, 09:00–16:00, both closing 3 hours before flight
departure[^tymc-checkin]. TYMC's own page does not itself list participating
airlines and links onward to the airport operator's page for the current
list; that page returned an access error to this site's tooling, so the
airline list below rests on secondary aggregation rather than a primary
fetch, checked 12 August 2026: **A1 — China Airlines, Mandarin Airlines, EVA
Air, UNI Air, Cathay Pacific and Starlux; A3 — China Airlines, Mandarin
Airlines, EVA Air, UNI Air, Tigerair Taiwan, and the AirAsia group.** Treat
this list as liable to change without notice, and reconfirm with the airline
or station before relying on it.

## The A22 extension

**A22 Laojiexi** opened **31 July 2023**, the same day its operating permit
was issued[^motc-a22]. MOTC's own account gives three causes for the delay
together, not one: COVID-era disruption to foreign electromechanical
suppliers through 2020–2022, high technical difficulty integrating the
extension's newer signalling generation with the existing line (requiring
extended testing), and design changes needed to coordinate with the separate
Taoyuan rail-undergrounding project[^motc-a22]. Total project cost was
NT$17.302 billion[^motc-a22].

Two further extensions are in progress: **A23 Zhongli**, which would connect
directly with the Taoyuan Metro Green Line, and **A14**, a new underground
station serving the airport's Terminal 3. **Both extensions' opening dates
and budgets are TBC.** News reporting circulates a July 2028-to-around-2029
slip for A23, attributed to a platform redesign for the Green Line
connection, and a late-2027 target for A14, each with its own NT$ budget
figure — none of it established from a source read in full here, still TBC.
This page's own research file records a Railway Bureau project page for A14
that returned no readable content, and a fresh re-fetch attempt made for
this correction could not locate and read in full the specific news
articles behind the widely-repeated numbers either — only further
search-engine summaries repeating the same figures, TBC by the same
standard. Settling either date needs a Railway Bureau project page or a
dated news article read directly, not a summary of one.

## The financial turnaround

TYMC's finances went from a NT$706 million negative net worth and a NT$1.067
billion bank loan in 2022 to record profitability within three years. 2023
was the company's first profitable year, though no source found here gives a
precise NT$ figure for that year specifically. 2025's surplus reached
**NT$679 million**, a record, with **ridership over 46 million, up 12% on
2024**, and the bank loan **fully repaid in April 2025**[^ltn-2026][^storm-2026].
Taoyuan Mayor 張善政 described pre-2022 operations as "pitiful" (悽慘) and
the company as now debt-free (零負債)[^storm-2026].

2024's figures do not fully agree between sources: one report, published
nine days before the end of 2024, gives a NT$500 million surplus for that
year[^gvm-2024]; a later, retrospective account instead gives "over NT$400
million"[^storm-2026] — plausibly because the earlier figure was a projection
rather than a final result. Neither source gives an exact 2023 figure; one
implies roughly NT$124 million for 2023 through a "fourfold increase to
NT$500 million" framing of its 2024 number, but that implied figure cannot
be checked against any other source[^gvm-2024].

## Fares and ticketing

A single journey from Taipei Main Station to either airport terminal costs
NT$160, the line's maximum single fare; a NT$10 system-wide discount that
applied until January 2025 was withdrawn from 2 January 2025, cited to rising
electricity costs[^gvm-2024]. Express and commuter trains are priced
identically. Combination tickets pair an airport-line return with a Taipei
Metro pass: NT$520 with a 48-hour pass, NT$600 with a 72-hour
pass[^tymc-ticket]. EasyCard, iPass and icash 2.0 are all accepted, and the
line is covered by the cross-city 基北北桃1200都會通 monthly pass at
unchanged pricing[^tymc-ticket].

## Sources

Station codes, sequence, coordinates and route length come from **Taiwan
MOTC's TDX platform**, operator TYMC — government open data, retrieved 12
August 2026[^tdx]. TDX has no way to represent this line's skip-stop express
pattern, so service-pattern detail throughout this page comes from TYMC's own
timetable instead. Everything else is cited inline and listed above; where a
figure rests on a search-engine synthesis rather than a page fetched and read
in full, the source note says so.
