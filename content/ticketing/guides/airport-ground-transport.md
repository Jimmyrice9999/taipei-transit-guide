---
title: Taiwan airport ground transport
summary: A source-backed guide to reaching Taiwan's main airports by metro, railway connection, bus, taxi and local transfer, with the national gaps left visible.
order: 4
updated: 2026-08-26
aliases:
  - 機場交通
  - airport access
facts:
  - label: Airports in the CAA service-desk table
    value: "17"
    source: caa-airports
  - label: Taoyuan Airport MRT terminals
    value: A12 / A13
    source: tymc-timetable
  - label: Songshan MRT station
    value: BR13
    source: tsa-songshan-map
  - label: Kaohsiung MRT station
    value: R4
    source: kia-transport
  - label: Taitung airport service hours
    value: 07:00 to last departure
    source: tta-service
specs:
  - label: Taoyuan Airport MRT maximum single fare
    value: "160"
    unit: NT$
    source: tymc-price
  - label: Taoyuan express stops
    value: A1, A3, A8, A12, A13
    unit: stations
    source: tymc-timetable
  - label: Kaohsiung MRT airport service window
    value: 06:00–24:00
    unit: local time
    source: kia-home
  - label: CAA service-desk rows
    value: "17"
    unit: airports
    source: caa-airports
sources:
  - id: caa-airports
    title: Airport service-desk telephone list
    titleOriginal: 各機場服務臺電話
    publisher: Civil Aeronautics Administration, Ministry of Transportation and Communications (交通部民用航空局)
    url: "https://www.caa.gov.tw/Article.aspx?a=983&lang=1"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The CAA's full table of airport service desks, addresses and telephone numbers, updated 2024-08-08; it lists 17 airports and airport stations.
  - id: tymc-timetable
    title: Taoyuan Metro timetable and stopping patterns
    titleOriginal: 時刻表
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/timetable.php
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The operator's full timetable page names A12 and A13, identifies express stops A1/A3/A8/A12/A13, the peak enhanced express's extra A18/A21 calls, and the all-stops ordinary service.
  - id: tymc-price
    title: Taoyuan Metro single-ticket fare table
    titleOriginal: 票價表
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_images/document/travel-guide/price.pdf
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The operator's full fare PDF; the published matrix reaches NT$160 for the longest airport-line single journey.
  - id: tsa-transport
    title: Songshan Airport transport
    titleOriginal: 機場交通
    publisher: Taipei Songshan Airport (臺北國際航空站)
    url: https://www.tsa.gov.tw/layout2?id=4a638fb9-805b-4b40-8ac5-2ec522280088
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The full current transport page exposes National Highway Coach, MRT, city bus, taxi, car rental, driving, parking, gas station and bicycle categories, and gives airport hours of 05:00–23:00.
  - id: tsa-songshan-map
    title: Songshan Airport Station information map
    titleOriginal: 松山機場站資訊圖
    publisher: Taipei Songshan Airport (臺北國際航空站)
    url: https://www.tsa.gov.tw/tsa/global/img/airloc/0070817.pdf
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The full station-map PDF identifies BR13, the airport-facing exits, the MRT connection, accessible elevator, wheelchair waiting zone and large-baggage gates.
  - id: kia-transport
    title: Kaohsiung Airport transport information
    titleOriginal: 交通資訊
    publisher: Kaohsiung International Airport (高雄國際航空站)
    url: https://www.kia.gov.tw/TRANS.html
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The full airport transport page gives R4 exits and peak/off-peak headways, 9117/9117A/9117B, route 111, stored-value acceptance, ticket counter location, taxi surcharge and terminal pickup locations.
  - id: kia-home
    title: Kaohsiung International Airport home page
    titleOriginal: 高雄國際航空站首頁
    publisher: Kaohsiung International Airport (高雄國際航空站)
    url: https://www.kia.gov.tw/
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The current airport home page gives the R4 service window of 06:00–24:00 and the international-terminal taxi surcharge.
  - id: tca-home
    title: Taichung International Airport
    titleOriginal: 臺中國際機場
    publisher: Taichung International Airport (臺中國際機場)
    url: https://www.tca.gov.tw/
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The full current homepage links the airport's bus-route, transfer-information, taxi and transport sections; the detailed bus and transfer child pages timed out during this retrieval.
  - id: tta-transport
    title: Taitung Airport traffic information
    titleOriginal: 交通資訊
    publisher: Taitung Airport (臺東航空站)
    url: https://www.tta.gov.tw/English/StaticPage/Transport
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: The full current access page describes the city-bus and taxi access, and says railway passengers should continue by city bus to the downtown bus terminal or by taxi.
  - id: tta-service
    title: Taitung Airport service counter
    titleOriginal: Service Counter
    publisher: Taitung Airport (臺東航空站)
    url: https://www.tta.gov.tw/English/StaticPage/ServiceCounter
    accessed: 2026-08-26
    kind: primary
    lang: en
    note: The full current page says the counter is open from 07:00 to the last departure and that an airport access map shows bus schedules/routes while the counter computer shows train timetables.
  - id: taoyuan-accessible-bus
    title: Information on accessible buses
    titleOriginal: Information on Accessible Buses
    publisher: Taoyuan International Airport Corporation (桃園國際機場股份有限公司)
    url: https://web.taoyuan-airport.com/api/imagecrop/fileid/D7F89F97-0AC1-EF11-BC04-0050569094FE
    accessed: 2026-08-26
    kind: primary
    lang: en
    note: "The full one-page airport PDF is a dated accessible-bus information sheet: it lists advance-call instructions or example times for 1627, 1623, 1661, 706, 1962 and 1968 and identifies operator contacts. It is not treated as a current complete timetable."
---

Taiwan's airport ground transport is a national network only in the broad sense: the Civil Aeronautics Administration lists seventeen airport stations, but the ground connection at each one is published by a different airport, city, operator or local government.[^caa-airports] This guide therefore separates verified transport interfaces from the many fares and departure boards that still need a direct, current fetch.

## Northern gateways

Taoyuan is the clearest rail-connected airport. Taoyuan Metro's A12 Airport Terminal 1 and A13 Airport Terminal 2 stations sit on the Airport MRT, while A18 is the interchange with Taiwan High Speed Rail.[^tymc-timetable] The operator's stopping pattern is not a single “airport train”: the express calls at A1 Taipei Main, A3 New Taipei Industrial Park, A8 Chang Gung Memorial Hospital, A12 and A13; the peak enhanced express adds A18 and A21; ordinary trains call at every station.[^tymc-timetable] The operator's current fare matrix reaches NT$160 for the longest single journey, accepts stored-value products including EasyCard, iPASS and icash 2.0, and publishes a separate fare table rather than the Taipei Metro distance bands.[^tymc-price] The timetable itself warns that actual arrival times can change and tells airport-bound passengers to leave a buffer before the flight.[^tymc-timetable]

Songshan is an urban airport rather than a distant intercity terminal. Its airport transport page lists MRT, city bus, National Highway Coach, taxi, car rental, driving, parking, bicycle and related categories, and gives airport operating hours of 05:00–23:00.[^tsa-transport] The airport's BR13 Songshan Airport Station map shows the underground MRT connection, airport-facing exits 1 and 2, Exit 3 toward the MRT, accessible elevators, a wheelchair waiting zone and gates for passengers with large baggage.[^tsa-songshan-map] The fetched airport transport page did not expose the individual bus route or fare carousel, so those details remain TBC rather than being reconstructed from a search result.[^tsa-transport]

## Central and southern gateways

Taichung International Airport's current homepage exposes separate public-transport surfaces for bus routes, transfer information, taxis and general transport.[^tca-home] The route and high-speed-transfer detail pages timed out during this retrieval, so this guide does not turn the airport's navigational headings into a claim about current route numbers, operators, fares or frequencies.[^tca-home]

Kaohsiung International Airport has a direct metro interface: R4 Kaohsiung International Airport Station is on the Red Line, Exit 2 leads to the domestic terminal and Exit 6 to the international terminal.[^kia-transport] The airport publishes peak headways of four to six minutes and off-peak headways of no more than eight minutes, with a transfer to the Orange Line at Formosa Boulevard O5/R10.[^kia-transport] The airport also lists 9117, 9117A and 9117B southbound services toward Kenting and Fangliao, and route 111 northbound toward Tainan; its page says EasyCard, iPASS and TPASS are accepted on the southern services and places the Pingtung Bus counter near international-arrivals Gate 5.[^kia-transport] The current airport home page gives the MRT service window as 06:00–24:00.[^kia-home]

Kaohsiung's taxi interface is equally explicit. Metered taxis wait at the first-floor arrival curbs of both terminals; international-terminal pickups add a NT$50 stop-service charge, while domestic-terminal pickups do not.[^kia-transport] The airport identifies separate queued-taxi, patrol-taxi and rental-car pickup points, and its June 2026 notice adds a designated pickup point for pre-booked taxis between the terminals near MRT Exit 2.[^kia-transport]

## Smaller and island airports

Taitung's airport page describes access from the city by bus or taxi and gives a railway interchange that is not a direct rail-to-terminal platform: from the new Taitung Railway Station, passengers continue by city bus to the downtown bus terminal or take a taxi to the airport.[^tta-transport] The airport's service counter is open from 07:00 until the last departing flight; its own page says the arrival-exit access map carries bus schedules and routes and that a counter computer displays train timetables.[^tta-service] These are useful operational facts, but they are not a substitute for a dated bus timetable or a fare table, both of which remain TBC here.

Taoyuan Airport's dated accessible-bus sheet is a reminder that accessibility information is a separate publication layer. It names example accessible services or advance-call arrangements for 1627, 1623, 1661, 706, 1962 and 1968, with operator telephone numbers, but it is not a complete current schedule and is labelled as an older update.[^taoyuan-accessible-bus] The remaining CAA-listed airport stations—including Hualien, Penghu, Tainan, Kinmen, Chiayi, Nangan, Beigan, Lanyu, Ludao, Qimei, Wangan and Hengchun—need their own full operator pages before this site can safely state ground routes, fares or frequency.[^caa-airports]

## What is date-sensitive

The fetched sources show why airport access is date-sensitive: Taoyuan tells passengers to allow a buffer, Kaohsiung records a June 2026 pickup-point change, and Taitung says its access map carries schedules.[^tymc-timetable][^kia-transport][^tta-service] Use the airport and operator pages linked in the references for the day of travel. This page records what the full sources currently establish, and leaves missing national coverage as TBC rather than silently filling it with a generic “take the airport bus” instruction.
