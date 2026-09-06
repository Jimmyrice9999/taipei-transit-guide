---
title: Bike
description: YouBike — the shared bicycle system that is genuinely part of the transit network, with a generational story nobody has told properly in English.
order: 3
status: complete
hero:
  image: youbike/hero
  alt: Orange YouBike bicycles parked in docks on a Taipei street, baskets and rental card readers visible, taxis passing behind.
  caption: YouBikes parked on a Taipei street.
sources:
  - id: youbike-service-areas
    title: YouBike official service-area homepage
    titleOriginal: YouBike 微笑單車
    publisher: YouBike Co., Ltd. (微笑單車股份有限公司)
    url: https://www.youbike.com.tw/region/main/
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The operator's current service-area page names the YouBike municipalities and the separate Hsinchu Science Park area.
  - id: tdx-bike-stations
    title: TDX Bike Station/City data service
    titleOriginal: 公共運輸-自行車
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The Ministry's TDX portal is the source platform for the committed Station/City snapshot; the repository records the exact endpoint, retrieval time and separate availability-feed boundary in data/tdx/bike/meta.json.
  - id: moovo-operator
    title: MOOVO official operator homepage
    titleOriginal: MOOVO 智慧租借服務
    publisher: Ride Point Technology Co., Ltd. (運點科技股份有限公司)
    url: https://www.ridemoovo.com/
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The operator's current homepage identifies MOOVO smart bicycles and electric-assist bicycles and the official service channels.
---

The national bike atlas now keeps the operator's service-area list separate from this checkout's five-jurisdiction static TDX station snapshot.[^youbike-service-areas][^tdx-bike-stations] The Changhua and Yunlin rows also expose a dated MOOVO operator-map snapshot; its visible station groups are documented on the [MOOVO system page](/bike/systems/moovo/), rather than being presented as a live capacity feed.[^moovo-operator] A dock remains a row in a jurisdiction or district browse index, not a standalone page; the atlas marks operator-listed areas, current-data TBC and not-yet-researched jurisdictions instead of converting scope into invented station totals.[^youbike-service-areas][^tdx-bike-stations]

YouBike belongs on a transit site: it shares the stored-value cards, the
transfer economics and — in its dock placement — the metro's own station
footprints. English coverage treats it as a tourist amenity; the actual story
is an infrastructure transition, because the system's two generations are
mutually incompatible and the changeover had to happen city-wide, in place,
while millions of rides a month continued.

Read [History](/bike/history/) for the pilot-to-present timeline;
[Generations](/bike/generations/) for the 1.0/2.0/2.0E hardware story — where
the intelligence lives, why the newer docks need no mains power, and what
that freed the network to do; then browse the live [Stations](/bike/stations/)
indexes by municipality and district.

This section is early on the build list because it is self-contained: it
depends on nothing in the rail work, the data exists in the same government
platform the site already uses, and the story is bounded rather than churning.
