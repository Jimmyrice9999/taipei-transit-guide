---
title: Yunlin
summary: Yunlin (雲林) — TDX station YUL, Huwei Township, with city buses named by the operator.
order: 58
operator: THSR
updated: 2026-08-24
facts:
  - label: "Station ID"
    value: "1047"
    source: tdx-thsr
  - label: "TDX station code"
    value: "YUL"
    source: tdx-thsr
  - label: "Traditional Chinese"
    value: "雲林"
    source: tdx-thsr
  - label: "Location"
    value: "Huwei Township, Yunlin County"
    source: tdx-thsr
  - label: "Address"
    value: "雲林縣虎尾鎮站前東路301號"
    source: tdx-thsr
  - label: "Opening date"
    value: "1 December 2015"
    source: rb-thsr
  - label: "Named transfers"
    value: "city buses"
    source: thsrc-station
  - label: "Station ridership"
    value: "TBC — source table identified, row not yet transcribed"
    source: motc-ridership
specs:
  - label: "Latitude"
    value: "23.73623"
    unit: "degrees"
    source: tdx-thsr
  - label: "Longitude"
    value: "120.41651"
    unit: "degrees"
    source: tdx-thsr
  - label: "TDX update time"
    value: "2023-10-17T00:00:00+08:00"
    unit: "timestamp"
    source: tdx-thsr
  - label: "Operator floor list"
    value: "1F and 3F"
    unit: "levels"
    source: thsrc-station
sources:
  - id: tdx-thsr
    title: "TDX THSR station records"
    titleOriginal: "臺灣高鐵車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station?%24format=JSON&%24top=1000"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The committed 24 August 2026 Station pull contains 12 records with station IDs, codes, names, addresses and coordinates. The checked Route and StationOfRoute paths returned 404 and are not used to infer a sequence."
  - id: thsrc-station
    title: "Yunlin station information"
    titleOriginal: "高鐵雲林站資訊"
    publisher: "Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)"
    url: "https://www.thsrc.com.tw/ArticleContent/5f4c7bb0-c676-4e39-8d3c-f12fc188ee5f"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator’s full station page supports the station address, opening hours, transfer panel, floor navigation and passenger services described on this page."
  - id: rb-thsr
    title: "Taiwan High-Speed Rail project"
    titleOriginal: "台灣高鐵"
    publisher: "Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)"
    url: "https://www.rb.gov.tw/zh-TW/main/main_28/20250505_152320/20251104_134001/20250505_180533/"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The builder and regulator’s project history gives the BOT contract, financial restructuring, route, opening chronology, structures, power, signalling, vehicles and maintenance facilities."
  - id: motc-ridership
    title: "Passenger Traffic of High-Speed Rail Stations"
    titleOriginal: "高速鐵路各站旅客人數"
    publisher: "Ministry of Transportation and Communications, Taiwan (交通部)"
    url: "https://www.motc.gov.tw/ch/app/data/doc?detailNo=1&id=580&module=mebook&serno=202501090000&type=s"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Table 2-9 publishes station-level entry and exit traffic in units of 10,000 passengers and notes each station’s opening date; the current PDF is retained as the source for the station-level TBC boundary."
---

## Position in the TDX station order

Yunlin (雲林) is station ID 1047 and TDX station code YUL in the committed High-Speed Rail snapshot.[^tdx-thsr] It is the ninth station in the TDX-ordered list and the southernmost of the three 2015 additions.[^tdx-thsr] The record places it in Huwei Township, Yunlin County, at 雲林縣虎尾鎮站前東路301號, with a position of 23.73623, 120.41651.[^tdx-thsr] Those coordinates and the postal address are separate fields in the data pull, so the page does not turn a point into a claim about the station’s whole catchment.[^tdx-thsr]

## Opening stage and system role

The Railway Bureau dates Yunlin’s opening to 1 December 2015 and places it in the three-station expansion that also added Miaoli and Changhua.[^rb-thsr] The same source records the route’s 350 km length and twelve-station system, which is why this page distinguishes Yunlin’s local opening date from the railway’s initial service date.[^rb-thsr] The TDX record gives the current identity and location; it does not supply an architectural history or a reason for the name, so those questions remain outside the page’s asserted facts.[^tdx-thsr]

The station’s position also matters for reading later additions. The Railway Bureau lists the 2015 additions as Miaoli, Changhua and Yunlin, followed by Nangang in 2016.[^rb-thsr] Yunlin is therefore described here as part of the three-station expansion that also added Miaoli and Changhua, rather than being silently grouped with the stations that began in January 2007.[^rb-thsr]

## Connections and passenger movement

The operator’s full station page gives the address as 雲林縣虎尾鎮站前東路301號 and identifies the passenger connection set as city buses.[^thsrc-station] The practical transfer description is deliberately narrower than a regional transport claim: it records the modes named by THSRC and does not infer an interchange from geographic proximity.[^thsrc-station] For Yunlin, the useful station-to-station question is therefore whether a traveller can follow the operator’s named connection, not whether every nearby bus stop or railway platform belongs to the HSR station.[^thsrc-station]

The page also publishes passenger services and a live-service navigation structure. Those service listings are operator information, while the TDX record is the source for the identifier, coordinates and address used in the guide.[^thsrc-station][^tdx-thsr] Keeping the two sources distinct prevents a station webpage’s floor map from being mistaken for a government geospatial record.[^thsrc-station][^tdx-thsr]

## Architecture and accessible layout

THSRC’s floor navigation for Yunlin lists 1F and 3F.[^thsrc-station] The operator’s current floor navigation names 1F and 3F; because the published list skips 2F, this page preserves the source’s floor labels instead of silently “correcting” the gap..[^thsrc-station] This is a modest but checkable architectural description: it tells a reader how the operator exposes the passenger levels and what transport connections the station page names, without attributing an architect or an unverified design concept.[^thsrc-station] The national Railway Bureau describes the route as approximately 73% bridges and viaducts, 18% tunnels and 9% embankment or cut sections, but that system-wide ratio does not establish Yunlin’s structure on its own.[^rb-thsr]

The operator page is also the source to consult for current facilities, opening hours and transfer directions, while the site’s station data layer is static and retrieved on 24 August 2026.[^thsrc-station][^tdx-thsr] A future accessibility pass should transcribe the operator’s lift, tactile, toilet and nursing-room fields into structured station data; this page leaves any field not explicitly extracted as TBC rather than borrowing a generic HSR-station assumption.[^thsrc-station]

## Ridership and what remains TBC

The MOTC statistical yearbook publishes a station-level High-Speed Rail table with separate entry and exit dimensions and a unit of 10,000 passengers.[^motc-ridership] It also records the opening dates used above, including the 2015 three-station addition and the 2016 Nangang opening.[^motc-ridership] A current Yunlin passenger figure, trend and rank within the High-Speed Rail station set are TBC on this page because the wide PDF table has not yet been transcribed into the committed station schema without risking a column-shift error.[^motc-ridership] The gap is therefore a data-layer boundary; it says nothing about the availability of station ridership in THSRC or MOTC publications.[^motc-ridership]

The line page carries the separate monthly network snapshot from the Railway Bureau open-data dataset, with exact values and retrieval date visible in its table.[^motc-ridership] It should not be read as a substitute for this station’s missing entry/exit row: a network total and a station movement count answer different questions.[^motc-ridership]
