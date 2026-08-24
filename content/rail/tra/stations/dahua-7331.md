---
title: "Dahua — Taiwan Railways"
summary: "Dahua (大華), TDX station 7331, in 新北市; current line membership and coordinates from the 2026-08-24 snapshot."
order: 2
operator: TRA
updated: 2026-08-24
facts:
  - label: "Station ID"
    value: "7331"
    source: tdx-tra-station
  - label: "Traditional Chinese name"
    value: "大華"
    source: tdx-tra-station
  - label: "Administrative city"
    value: "新北市"
    source: tdx-tra-station
  - label: "Administrative district"
    value: "平溪區"
    source: tdx-tra-station
  - label: "Station class code"
    value: "5"
    source: tdx-tra-station
  - label: "Line memberships"
    value: "Pingxi Line (PX)"
    source: tdx-tra-line
specs:
  - label: "Latitude"
    value: "25.04998"
    unit: degrees
    source: tdx-tra-station
  - label: "Longitude"
    value: "121.79732"
    unit: degrees
    source: tdx-tra-station
  - label: "Pingxi Line sequence"
    value: 2
    unit: position
    source: tdx-tra-line
  - label: "Pingxi Line travelled distance"
    value: "3.6"
    unit: km
    source: tdx-tra-line
sources:
  - id: tdx-tra-station
    title: "TDX Taiwan Railways station records"
    titleOriginal: "臺灣鐵路車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The full 24 August 2026 pull contains 245 TRA station records with station IDs, names, addresses, administrative areas, classes, coordinates and update times."
  - id: tdx-tra-line
    title: "TDX Taiwan Railways station-of-line records"
    titleOriginal: "臺灣鐵路路線車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The full pull contains 12 line records with ordered station members and, where supplied, travelled distances."
  - id: tra-history
    title: "Railway construction history"
    titleOriginal: "鐵路建設沿革"
    publisher: "Taiwan Railways Administration (臺灣鐵路公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/adr/about-1-5"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator history page gives the official route-history framework and gauge terminology used to separate current data from historical alignments."
  - id: tra-report
    title: "Taiwan Railways statistical report"
    titleOriginal: "臺灣鐵路統計資料"
    publisher: "Taiwan Railways Administration (臺灣鐵路公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/file/486e23bd-740a-46a1-bb75-f68442125a2a"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator report gives the end-2023 route-length, electrification and station-count aggregates; those historical aggregates are kept separate from this current TDX snapshot."
---

## Identity in the current station data

Dahua (大華) is station ID 7331 in the TDX Station response retrieved on 2026-08-24.[^tdx-tra-station] That record supplies the English and Traditional Chinese names, the address, administrative city and district, station-class field, coordinates and source update time.[^tdx-tra-station] The page reports those fields as fields: it does not turn the class code 5 into a passenger-service ranking because the checked station response does not define that code in the record itself.[^tdx-tra-station]

The address field is 226003新北市平溪區南山里六分 12 之 1 號.[^tdx-tra-station] This is the source station address, not a claim about the size of the station site, the walking catchment or every entrance.[^tdx-tra-station] A street address and a coordinate answer different questions, so both are retained when present.[^tdx-tra-station]

## Position on Pingxi Line

On the Pingxi Line StationOfLine record, this station has sequence 2 and a supplied travelled distance of 3.6 km.[^tdx-tra-line] The preceding member is Sandiaoling (7330) and the following member is Shifen (7332).[^tdx-tra-line] These are adjacency statements about the ordered dataset; they are not a claim about the stopping pattern of a particular train.[^tdx-tra-line]

The current line membership list for this station is Pingxi Line (PX).[^tdx-tra-line] A shared station can therefore appear in more than one TDX line family without the data proving that all services, rolling stock or timetables use every listed relationship.[^tdx-tra-line] Route service patterns and first or last trains are TBC on this page because the committed endpoint supplies station membership rather than a complete timetable.[^tdx-tra-line]

## Location and architecture boundary

TDX places the station at latitude 25.04998 and longitude 121.79732.[^tdx-tra-station] The guide keeps those values at the precision returned by the source and does not infer platform orientation, elevation, track count or station depth from a point coordinate.[^tdx-tra-station] Platform arrangement, lifts, tactile paths, accessible toilets, nursing rooms, platform gap, exits, staffing and station opening hours are TBC until the operator station-level material is transcribed.[^tra-history]

The operator route-history page is used for historical construction and gauge terminology, not as a substitute for this station live identity record.[^tra-history] If a future primary source gives a former name, opening date, relocation, closure interval or rebuilt platform, it belongs in the station temporal architecture record rather than overwriting the current TDX name.[^tra-history]

## Ridership and next research boundary

Current station ridership, a line rank and a dated trend are TBC for this page.[^tra-report] The report checked for this batch provides system aggregates and an end-2023 station count, but it does not supply a transcribed current row for this station in the committed data layer.[^tra-report] That is an explicit data boundary, not a claim that no ridership publication exists.[^tra-report]

The next station-data pass should connect this station record to monthly passenger counts, accessibility facilities and named interchange services from their respective primary datasets.[^tdx-tra-station][^tra-report] Until those joins are verified, the page keeps the current identity, sequence, address and coordinates visible and leaves the operational additions TBC.[^tdx-tra-station][^tra-report]
