---
title: MOOVO public-bike system
summary: A dated primary-source snapshot of MOOVO's visible station groups in Changhua and Yunlin, with the operator-map and local-government record kept distinct.
updated: 2026-09-06
facts:
  - label: Operator
    value: 運點科技股份有限公司 (Ride Point Technology Co., Ltd.)
    source: moovo-home
  - label: Changhua visible station rows
    value: 202
    source: moovo-changhua-map
  - label: Yunlin visible station rows
    value: 263
    source: moovo-yunlin-map
  - label: Changhua government snapshot
    value: 202 stations across 17 townships/cities, published 28 August 2026
    source: changhua-2026-08-28
specs:
  - label: Operator-map snapshot date
    value: 2026-09-06
    source: moovo-changhua-map
  - label: Current live availability
    value: TBC
  - label: Published dock/capacity field
    value: TBC
  - label: Stable public station API committed here
    value: TBC
sources:
  - id: moovo-home
    title: MOOVO official operator homepage
    titleOriginal: MOOVO 智慧租借服務
    publisher: Ride Point Technology Co., Ltd. (運點科技股份有限公司)
    url: https://www.ridemoovo.com/
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The operator homepage identifies MOOVO smart bicycles and electric-assist bicycles, the official app/site and payment channels.
  - id: moovo-changhua-map
    title: MOOVO Changhua city map
    titleOriginal: 彰化縣站點地圖
    publisher: Ride Point Technology Co., Ltd. (運點科技股份有限公司)
    url: https://www.ridemoovo.com/city_map_Changhua
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full operator map exposes visible station groups whose rows sum to 202 in the accessed snapshot.
  - id: moovo-yunlin-map
    title: MOOVO Yunlin city map
    titleOriginal: 雲林縣站點地圖
    publisher: Ride Point Technology Co., Ltd. (運點科技股份有限公司)
    url: https://www.ridemoovo.com/city_map_Yunlin
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full operator map exposes visible station groups whose rows sum to 263 in the accessed snapshot.
  - id: changhua-2026-08-28
    title: MOOVO expands to 17 Changhua townships and cities
    titleOriginal: 彰化公共自行車新增13站啟用，MOOVO服務拓展至17鄉鎮市
    publisher: Changhua County Government Transportation Office (彰化縣政府交通處)
    url: https://www.chcg.gov.tw/DTO/traffic/03bulletin/bulletin02_con.aspx?bull_id=437062
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The county notice, published 28 August 2026, states 13 added stations, coverage in 17 townships/cities and 202 stations; it also describes the September 2026 MOOVO 3.0 rollout.
  - id: moovo-operations-2026
    title: MOOVO official operations and news feed
    titleOriginal: MOOVO 營運消息
    publisher: Ride Point Technology Co., Ltd. (運點科技股份有限公司)
    url: https://www.ridemoovo.com/op
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full operator feed records Changhua and Yunlin station additions in July and August 2026, supporting the snapshot's currency context.
  - id: yunlin-douliu-2026-08-06
    title: MOOVO public-bike expansion in Yunlin
    titleOriginal: 雲林縣公共自行車持續擴大服務範圍
    publisher: Yunlin County Government Planning Office (雲林縣政府計畫處)
    url: https://planning.yunlin.gov.tw/News_Content.aspx?n=1113&s=602026
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The 6 August 2026 local-government page records an earlier 94-station Douliu snapshot; it is retained as a dated conflict rather than silently replaced by the later operator-map count.
---

MOOVO is a separate public-bike system operated by 運點科技股份有限公司 (Ride Point Technology Co., Ltd.). The operator's homepage describes both standard smart bicycles and electric-assist bicycles and directs riders to its official service channels.[^moovo-home] This page treats MOOVO as a transport system, not as an extension of the YouBike operator taxonomy.

The current static atlas records the official operator maps accessed on 6 September 2026.[^moovo-changhua-map][^moovo-yunlin-map] The Changhua map shows 202 visible station rows when its town and city groups are summed, while the Yunlin map shows 263 visible station rows.[^moovo-changhua-map][^moovo-yunlin-map] These are intentionally called visible station rows: the fetched maps are a presentation layer, not a committed live station-availability or return-capacity feed. Live bicycles, empty docks, station coordinates and a stable public machine-readable endpoint therefore remain TBC in this repository.

The Changhua County Transportation Office independently published on 28 August 2026 that 13 stations had been added, that MOOVO covered 17 townships and cities, and that the county total was 202 stations.[^changhua-2026-08-28] The operator's own operations feed also records new Changhua and Yunlin stations during July and August 2026, which is why the atlas uses a dated map snapshot rather than a timeless national total.[^moovo-operations-2026]

There is a useful source conflict in Yunlin. A Yunlin County Planning Office page published on 6 August 2026 says that Douliu had 94 MOOVO stations at that time, while the operator's map accessed on 6 September 2026 shows 97 visible rows in the Douliu group and 263 across the eight visible Yunlin groups.[^yunlin-douliu-2026-08-06][^moovo-yunlin-map] These figures are not averaged: the first is an earlier county-government snapshot for one area, and the second is a later operator-map observation whose wider county total includes several other areas.

The national atlas links Changhua and Yunlin to this system page, while the jurisdiction rows remain separate from the YouBike TDX snapshot. A station is still a table/index row rather than an article; this keeps the site from generating hundreds of thin pages when the useful editorial unit is the system, jurisdiction and dated source boundary.

MOOVO's published fare treatment is also time-sensitive. The Changhua county notice describes the then-current first-30-minute subsidy for standard and electric-assist bikes, while the operator pages expose payment channels and service instructions.[^changhua-2026-08-28][^moovo-home] This page does not generalise that Changhua notice into a nationwide fare claim; current Yunlin and cross-jurisdiction fare rules remain TBC until a matching primary fare table is captured.

## Scope and limitations

- The counts above are visible station rows in two official operator maps accessed on 6 September 2026, not a live API count.
- The county and operator sources disagree in scope and date for Yunlin's Douliu count; both values remain visible in the source record.
- Other jurisdictions are not inferred to have no non-YouBike system merely because this page does not list them.
