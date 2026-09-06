---
title: Bus
description: City and regional bus networks across Taiwan — Taipei's joint-operation system, and the operators, vehicles and fares of Taichung, Kaohsiung, Tainan, Hsinchu and intercity coaches.
order: 2
hero:
  image: bus/hero
  alt: The front of an orange and white Capital Bus vehicle working route 2, its destination display reading NTU Hospital to TUMT in Chinese and English.
  caption: A Capital Bus vehicle on joint-operation route 2, Taipei.
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the operator-record count and route associations described in the operator index.
  - id: hsinchu-bus-snapshot
    title: Hsinchu City Government iBus public-transport portal
    titleOriginal: 新竹市幸福巴士公共運輸資訊
    publisher: Hsinchu City Government (新竹市政府)
    url: https://hisatisfy.hccg.gov.tw/ibusWeb/PublicTransport/
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Supports the shared Hsinchu City and County route snapshot and its published category scope.
  - id: taichung-bus-snapshot
    title: Taichung city-bus route and stop information dataset
    titleOriginal: 臺中市市區公車路線站點資訊
    publisher: Taichung City Government Transportation Bureau (臺中市政府交通局)
    url: https://data.gov.tw/dataset/83748
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Supports the dated Taichung route-and-stop snapshot surfaced in the national bus atlas.
  - id: tainan-bus-snapshot
    title: Tainan city-bus route data
    titleOriginal: 大台南公車路線資料
    publisher: Tainan City Government Transportation Bureau (臺南市政府交通局)
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Tainan?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Supports the dated Tainan route snapshot surfaced in the national bus atlas.
  - id: kaohsiung-bus-snapshot
    title: Kaohsiung city-bus route response
    titleOriginal: 高雄市公車路線資料
    publisher: Kaohsiung City Government Transportation Bureau (高雄市政府交通局) / MOTC TDX
    url: https://tdx.transportdata.tw/api/basic/v2/Bus/Route/City/Kaohsiung?$format=JSON
    accessed: 2026-08-25
    kind: primary
    lang: zh-Hant
    note: Supports the dated Kaohsiung route snapshot surfaced in the national bus atlas.
  - id: motc-taiwan-tourist-shuttle
    title: Taiwan Tourist Shuttle brand identity 3.0 wins 2026 German Red Dot Brand & Communication Design Award
    titleOriginal: 台灣好行品牌識別3.0榮獲2026德國紅點品牌與傳達設計獎
    publisher: Tourism Administration, Ministry of Transportation and Communications (交通部觀光署)
    url: https://www.motc.gov.tw/ch/app/news_list/view?id=14&module=news&serno=26b361d1-da19-480d-bacd-612c7b58fcfa
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: Supports the national public-transport tourism role and the boundary described for Taiwan Tourist Shuttle.
  - id: taiwantrip-route-selector
    title: Taiwan Tourist Shuttle route selector
    titleOriginal: 台灣好行旅遊服務網—好行路線—內容
    publisher: Tourism Administration, Ministry of Transportation and Communications (交通部觀光署)
    url: https://www.taiwantrip.com.tw/Frontend/Route/Select_p
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: Supports the dated official route-selector categories and entries described by the Tourist Shuttle page.
---

The national bus atlas lists all 22 first-order jurisdictions and labels each entry by evidence state.[^tdx-bus-operator-pull] It currently joins the Taipei/New Taipei TDX snapshot with dated Hsinchu, Taichung, Tainan and Kaohsiung municipal layers; the counts remain source-record or normalized-identity counts, not a claimed national total.[^tdx-bus-operator-pull][^hsinchu-bus-snapshot][^taichung-bus-snapshot][^tainan-bus-snapshot][^kaohsiung-bus-snapshot]

Taipei's city buses run as 聯營公車 — a joint operation: private companies
operating under one fare structure, one numbering scheme and one brand, so
that to a passenger it looks like a single network when it is not. That
structural fact — how many companies, how many routes, and the four city
regulations that actually set out how the money moves — is explained in full
on [the joint-operation network](/bus/network/joint-operation/).

Beyond Taipei and New Taipei, this section also covers the city bus networks
of [Taichung](/bus/regional/taichung/), [Kaohsiung](/bus/regional/kaohsiung/),
[Tainan](/bus/regional/tainan/) and [Hsinchu](/bus/regional/hsinchu/), plus
national [intercity coach](/bus/intercity/) services — each with its own
operators, fare structure and, where one exists, a rating or evaluation
scheme distinct from Taipei's.

The government-backed [Taiwan Tourist Shuttle](/bus/tourist/) is kept as a
separate public-transport tourism layer. Its dated route selector covers tourist
shuttles, airport links and reservation or guided services without pretending
that every entry is an ordinary city-bus route.[^motc-taiwan-tourist-shuttle][^taiwantrip-route-selector]

## What this section covers

**Network.** This site's [Network](/bus/network/) pages hold the
joint-operation history, the route-numbering conventions, payment and
ticketing infrastructure, the operator service-rating schemes (Taipei's
since 1992, New Taipei's separate scheme, and others where a city runs one),
and the 2030 electrification programme.

**Operators.** The [TDX operator index](/bus/operators/) lists the operator
records in the committed pull, with route associations generated from the
same data pull [^tdx-bus-operator-pull], deepened with ownership and
corporate history where sources exist. The relationships between them —
including who owns whom — are poorly documented in English, which makes this
the part most likely to be worth reading rather than merely present.

**Routes.** Route pages are generated from the same TDX pull
[^tdx-bus-operator-pull]; this site explains the route-*numbering system*
separately so a bare number means something before any individual route
page does.

**Vehicles and garages.** [Models](/bus/models/) covers electric, diesel and
imported chassis with VSCC/MOTC type-approval records where they exist, and
[Depots](/bus/depots/) covers garages and charging infrastructure — both
report a field as TBC rather than filling it from an unverified fleet-list
transcription.

**Fares and payment.** Section-based fares, the EasyCard transfer discount
between bus and metro, and where the section boundaries actually fall — which is
the thing visitors get wrong most often.

See [about](/about/) for how this site sources material.
