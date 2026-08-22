---
title: Stations
description: Browse the committed static YouBike station snapshot by municipality and district.
order: 3
status: complete
sources:
  - id: tdx-bike-stations
    title: TDX Bike Station City pull
    titleOriginal: 交通部運輸資料流通服務平臺 — Bike Station/City
    publisher: Ministry of Transportation and Communications TDX / 交通部運輸資料流通服務平臺
    url: 'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/{City}'
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Supports the static station rows and the separate live-availability scope decision.
---

The station index is generated from TDX's static Bike Station/City feed. It
uses city and district browse pages rather than individual station articles;
each row carries bilingual names, capacity, coordinates, a map link and a
confirmed coordinate-only rail join when one exists [^tdx-bike-stations].

- [Taipei station index](/bike/stations/taipei/)
- [New Taipei station index](/bike/stations/new-taipei/)
- [Taoyuan station index](/bike/stations/taoyuan/)

Live bike and return-dock availability is intentionally excluded from the
static layer because TDX publishes it as a separate changing feed [^tdx-bike-stations].

## Source

The page-level indexes carry the full TDX source record and retrieval date.
