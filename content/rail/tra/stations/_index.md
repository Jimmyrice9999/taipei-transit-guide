---
title: Stations
description: Taiwan Railways station pages generated from the current TDX station and station-of-line records, with the retrieval boundary shown on every page.
order: 2
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
---

The current TDX snapshot contains 245 station records retrieved on 2026-08-24.[^tdx-tra-station] Pages are added in documented batches. The index therefore makes the live data boundary visible while the research work expands from the Western and Eastern trunk families to the branch and historical sections.[^tdx-tra-line][^tra-history]
