---
title: "Chengzhui Line"
summary: "Chengzhui Line (成追線) in the branch or connecting route record returned by TDX, with 2 ordered station members in the 2026-08-24 snapshot."
order: 1
operator: TRA
updated: 2026-08-24
facts:
  - label: "TDX line ID"
    value: "CZ"
    source: tdx-tra-line
  - label: "TDX English name"
    value: "Chengzhui Line"
    source: tdx-tra-shape
  - label: "TDX Traditional Chinese name"
    value: "成追線"
    source: tdx-tra-shape
  - label: "Ordered station members"
    value: "2"
    source: tdx-tra-line
  - label: "Snapshot retrieval"
    value: 2026-08-24
    source: tdx-tra-line
specs:
  - label: "First TDX member"
    value: "Chenggong (3350)"
    source: tdx-tra-line
  - label: "Last TDX member"
    value: "Zhuifen (2260)"
    source: tdx-tra-line
  - label: "Last supplied travelled distance"
    value: "2.2"
    unit: km
    source: tdx-tra-line
  - label: "Current gauge"
    value: 1067
    unit: mm
    source: tra-history
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
  - id: tdx-tra-shape
    title: "TDX Taiwan Railways line shapes"
    titleOriginal: "臺灣鐵道路線幾何資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Shape?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The full pull contains one current shape record for each of the 12 TDX line IDs."
  - id: tra-history
    title: "Railway construction history"
    titleOriginal: "鐵路建設沿革"
    publisher: "Taiwan Railways Administration (臺灣鐵路公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/adr/about-1-5"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator history page gives the official route-history framework and gauge terminology used to separate current data from historical alignments."
  - id: tra-timetable
    title: "Taiwan Railways timetable and route index"
    titleOriginal: "臺鐵時刻表及路線資料"
    publisher: "Taiwan Railways Administration (臺灣鐵路公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b41017572e9077f1790&subCode=8ae4cac3756b7b41017573e352ae18f8"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator index names the Western, Eastern and South Link trunk families and the Pingxi, Shenao, Neiwan, Liujia, Jiji and Shalun branches."
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

## What this TDX line identity means

TDX returns Chengzhui Line as line ID CZ and supplies the Traditional Chinese name 成追線 in its Shape record.[^tdx-tra-shape] The StationOfLine record is a separate dataset: it contains 2 ordered members for this line and is the source for the sequence displayed on this page.[^tdx-tra-line] That separation matters because a shape is geometry, while an ordered member list is a station relationship; this page does not infer one from the other.[^tdx-tra-shape][^tdx-tra-line]

The first member in the committed sequence is Chenggong (3350) and the last is Zhuifen (2260).[^tdx-tra-line]

## Ordered stations and distance fields

The station table is generated from the complete response retrieved on 2026-08-24, not from a route-map redraw.[^tdx-tra-line] Each row keeps the TDX station ID, the sequence supplied by the data platform and the travelled-distance field when that field exists.[^tdx-tra-line] The final supplied distance is 2.2 km in this snapshot; the guide does not relabel it as a surveyed route length or combine it with another line’s measure.[^tdx-tra-line]

The member list can overlap another TDX line record at a shared station. That is a data relationship, not evidence that every train or every timetable service traverses both records.[^tdx-tra-line] Service patterns, passing loops, stopping patterns, headways and first or last trains are TBC here because this snapshot contains station membership rather than a timetable transcription.[^tdx-tra-line]

## Trunk, branch and historical boundaries

The operator timetable index names the Western, Eastern and South Link trunk families and identifies the Pingxi, Shenao, Neiwan, Liujia, Jiji and Shalun branches.[^tra-timetable] This page preserves the TDX line ID CZ and the operator name instead of rewriting it into an English grouping that the source does not use.[^tra-timetable][^tdx-tra-shape] The route-history page is the source for historical construction and gauge terminology; it does not turn this current snapshot into a complete closed-line inventory.[^tra-history]

The end-2023 operator report gives system-level aggregates of 1,065 km, 90.5 km of branches and 241 stations, while the current TDX station pull contains 245 records.[^tra-report][^tdx-tra-station] Those values are published together here as a dated conflict between a report aggregate and a later live-data snapshot; neither is silently substituted for the other.[^tra-report][^tdx-tra-station]

## What remains TBC

The TDX endpoint checked for Route returned 404, so this page does not claim that its line record is the operator’s complete historical route definition.[^tdx-tra-line] A checked StationOfRoute endpoint also returned 404, so the page uses StationOfLine for the ordered sequence and records that boundary in the research file.[^tdx-tra-line] Historical names, closed sections, gauge changes through time, depot allocation, signalling, power, accessibility facilities, service frequency and ridership are TBC until the relevant primary records are transcribed and cited.[^tra-history][^tra-report]
