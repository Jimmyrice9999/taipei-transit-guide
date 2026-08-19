---
title: 307 / 307
summary: General-bus route 307 (板橋 - 撫遠街).
updated: 2026-08-19
facts:
  - label: Service class
    value: General bus service (一般公車)
    source: ebus-general
  - label: Origin
    value: Opened 1969 by 大有巴士 as 大有12路 (松山-忠孝西路); renumbered 307 on 15 May 1977 when 臺北客運 joined
    source: zhwikipedia-307-plain
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: "Weekday and holiday 0500–2210"
    source: ebus-307
  - label: Headway by day type
    value: "Weekday peak 4–6 min, off-peak 5–10 min (5–10 min after 2100); holiday 7–10 min (10–15 min after 2100)"
    source: ebus-307
  - label: Fare / transfer
    value: Two-section fare (兩段票), buffer zone 萬大國小–中和國稅局
    source: ebus-307
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Lists 307 under 一般公車, as a routeid entry separate from its 307西藏三民 branch.
  - id: ebus-307
    title: 307 route schedule
    titleOriginal: 307班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0100030700
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 板橋–撫遠街 corridor, service span, fare, buffer zone and two operator contacts (臺北客運; 首都客運).
  - id: zhwikipedia-307-plain
    title: Taipei joint-operation bus route 307
    titleOriginal: 台北聯營公車307路線
    publisher: Wikipedia contributors, 維基百科
    url: https://zh.wikipedia.org/zh-tw/%E5%8F%B0%E5%8C%97%E8%81%AF%E7%87%9F%E5%85%AC%E8%BB%8A307%E8%B7%AF%E7%B7%9A
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: "Community-compiled route article, not independently verified against a primary PTO/operator announcement in this search except where it names its own source (see revenue-claim note below). Quoted verbatim: 1969年，大有巴士正式成立，本路線隨即開辦，當時由大有巴士單獨營運，來往松山至忠孝西路，路線編號為大有12路。 ... 同年5月15日，大有12右線亦加入聯營公車，更改路線稱為307，臺北客運亦於當天加入本線營運。 2012年3月16日，大有巴士經營權收回，改由臺北客運獨自經營。2013年2月21日，首都客運加入營運。 The article attributes its 全台灣最賺錢的公車路線 (Taiwan's highest-earning bus route) claim, covering 2003-2012, to footnote 13, a 31 July 2014 broadcast segment by 非凡電視台 (Non-Stop News) titled 全台最賺公車'307' 年收4億稱霸11年 — that broadcast itself was not fetched or verified in this search."
---

## Classification and corridor

The official catalogue lists 307 under 一般公車, as a separate routeid entry
from its 307西藏三民 branch.[^ebus-general] Its full schedule page gives
板橋 - 撫遠街, weekday and holiday service 0500–2210, a two-section fare
(兩段票) with a buffer zone between 萬大國小 and 中和國稅局, and both 臺北客運 and
首都客運 as operator contacts.[^ebus-307] Weekday frequency is peak 4–6
minutes and off-peak 5–10 minutes (holding at 5–10 minutes after 2100);
holiday frequency runs 7–10 minutes throughout, widening to 10–15 minutes
after 2100.[^ebus-307]

The confirmed stop sequence crosses two municipalities: it starts at 板橋
(Banqiao, New Taipei), runs through 中和 past 捷運中和站 and 積穗, crosses the
Xindian River on 華中橋 into Wanhua, continues through central Taipei past
捷運西門站 and 臺北車站, then follows the Nanjing corridor east past 捷運松江
南京站 and 捷運南京復興站 into 民生社區, ending at 撫遠街.[^tdx-bus] The return
working additionally serves 捷運府中站 in Banqiao.[^tdx-bus] Five separate MRT
stations are named across the route, and the curated stop-ID join set
confirms none of them.[^tdx-bus]

## History

A community wiki states the route was opened in 1969 by 大有巴士 as 大有12路
between 松山 and 忠孝西路, and was renumbered 307 on 15 May 1977 when 臺北客運
joined the joint-operation system on the same day: 「1969年，大有巴士正式成立，
本路線隨即開辦...路線編號為大有12路」and「同年5月15日，大有12右線亦加入聯營公車，更改路線稱為
307，臺北客運亦於當天加入本線營運」.[^zhwikipedia-307-plain] The same source states
大有巴士's operating rights were withdrawn on 16 March 2012, leaving 臺北客運 as
sole operator until 首都客運 joined on 21 February 2013.[^zhwikipedia-307-plain]
The article also states 307 held the highest annual revenue of any Taipei
bus route from 2003 to 2012, at roughly NT$400 million a year, attributing
this to a 2014 broadcast report rather than a primary operator or PTO
figure — that underlying report was not independently fetched in this
search, so the revenue-record claim is reported here as the wiki's claim,
not as independently confirmed.[^zhwikipedia-307-plain]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route
length remains TBC.[^tdx-bus] Neither the wiki's operator-history dates nor its
revenue claim were corroborated against a primary PTO or operator
announcement in this search — see the source note above for exactly what
was and was not checked.
