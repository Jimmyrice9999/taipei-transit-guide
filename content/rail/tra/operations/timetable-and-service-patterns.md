---
title: Taiwan Railways timetable and service patterns
summary: What the operator's dated timetable index and linked service tables establish, and where a current stop-by-stop service register is still missing.
order: 2
operator: TRA
updated: 2026-08-27
facts: []
specs: []
sources:
  - id: tra-timetable-2026-07
    title: "Regular Taiwan Railway timetable downloads"
    titleOriginal: "定期行駛列車時刻表"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b41017572e9077f1790&subCode=8ae4cac3756b7b41017573e352ae18f8"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full current index was last updated 13 June 2026 and lists timetable files effective from 1 July 2026."
  - id: tra-timetable-western-2026-07
    title: "Western Main Line reserved-express timetable — Keelung to Chaozhou"
    titleOriginal: "臺灣鐵路西部幹線對號快車時刻表（基隆→潮州）"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/R/KeelungToChaozhou20260701.pdf?version=115.04.09"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full two-page PDF shows a directional reserved-express timetable with train numbers, service types, origins, destinations, station times and symbols."
  - id: tra-timetable-pingxi-2026-07
    title: "Pingxi–Shen'ao Line timetable"
    titleOriginal: "平溪／深澳線時刻表"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/PingxiToShenao20260701.pdf?version=115.04.09"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full one-page PDF shows the Pingxi–Shen'ao station sequence, train numbers, directions, times and service symbols."
  - id: tra-timetable-neiwan-2026-07
    title: "Neiwan–Liujia Line timetable"
    titleOriginal: "內灣／六家線時刻表"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/Neiwan20260701.pdf?version=115.04.09"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full two-page PDF shows separate Neiwan and Liujia workings, including station columns, train numbers and times."
  - id: tra-timetable-shalun-2026-07
    title: "Shalun Line timetable"
    titleOriginal: "沙崙線時刻表"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/Shalun2026070.pdf?version=115.04.09"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full one-page PDF shows Shalun services with multiple origins and destinations, train numbers and station times."
  - id: tra-timetable-xml-archive
    title: "Taiwan Railway timetable XML archive"
    titleOriginal: "鐵路時刻表-XML"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://ods.railway.gov.tw/tra-ods-web/ods/download/dataResource/railway_schedule/XML/list"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full archive page lists dated daily XML files; the linked file was not parsed because the full fetcher rejects its application/octet-stream response."
  - id: tra-timetable-query
    title: "Taiwan Railway train-time and train-number query"
    titleOriginal: "列車時刻／車次查詢"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime?lang=zh_TW"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full current query page exposes time, station and train-number modes and warns that the operator adjusts services periodically."
---

The operator publishes two different timetable layers: a dated index of regular timetable families and a query service for a chosen date, station or train.[^tra-timetable-2026-07][^tra-timetable-query] The index is the stable source for the service-family boundary; the query page is the operator's live lookup surface and warns that train services are adjusted periodically.[^tra-timetable-2026-07][^tra-timetable-query]

## What the dated index publishes

The current index was last updated on 13 June 2026 and says its listed regular timetables take effect from 1 July 2026.[^tra-timetable-2026-07] Its reserved-express section has both directions of the Western Main Line, Eastern Main Line and South Link Line.[^tra-timetable-2026-07] Its Western local section is divided into ten directional groups, and its Eastern local section lists the Yilan, North Link and Taitung groups.[^tra-timetable-2026-07] A separate branch section lists Pingxi/Shen'ao, Neiwan/Liujia, Jiji and Shalun.[^tra-timetable-2026-07]

The index links a PDF and an ODS file for each listed family.[^tra-timetable-2026-07] That gives a reproducible publication boundary and a choice of human-readable and tabular formats, but the family name alone does not say which trains stop at which stations.[^tra-timetable-2026-07]

## What the linked tables show

The Western Main Line PDF is a directional table with train numbers, train types, origins, destinations and station times.[^tra-timetable-western-2026-07] Its notes distinguish mountain and coastal routings and explain that the first and intermediate stations show departure times while the terminal shows the arrival time.[^tra-timetable-western-2026-07] The table also marks service-specific features such as accessible seating, bicycle carriage, family-carriage arrangements and free-seating cars.[^tra-timetable-western-2026-07]

The branch PDFs show why a branch should not be represented as one generic shuttle pattern.[^tra-timetable-pingxi-2026-07][^tra-timetable-neiwan-2026-07][^tra-timetable-shalun-2026-07] The Pingxi–Shen'ao table contains two-way services between the branch's stations and services whose endpoints include 八斗子, 菁桐, 瑞芳 and 八堵.[^tra-timetable-pingxi-2026-07] The Neiwan–Liujia table alternates between services to 內灣 and 六家, with some trips beginning at 竹中 rather than 新竹.[^tra-timetable-neiwan-2026-07] The Shalun table includes trips beginning at 臺南, 嘉義, 善化 or 永康 and shows several destinations rather than only 沙崙.[^tra-timetable-shalun-2026-07]

These examples establish stop patterns for the dated files that were opened, not a current all-station service matrix.[^tra-timetable-western-2026-07][^tra-timetable-pingxi-2026-07][^tra-timetable-neiwan-2026-07][^tra-timetable-shalun-2026-07] A train row is a dated operating plan and can include symbols, exceptions and a mix of stopping patterns; it should not be collapsed into a headway without first defining the date, direction, service type and station pair.[^tra-timetable-western-2026-07][^tra-timetable-query]

## Current-data boundary

The operator also exposes a daily XML archive whose current listing contains dated files for individual operating days.[^tra-timetable-xml-archive] The archive page was read, but its linked XML response was not parsed in this pass because the full fetch returned an unsupported binary content type.[^tra-timetable-xml-archive] The archive therefore identifies a promising machine-readable source without being treated here as a verified timetable dataset.

Current first and last trains by station, headways by route and time band, day-type calendars, a complete train-to-station stop matrix, and version-to-version timetable changes remain outside this record.[^tra-timetable-2026-07][^tra-timetable-query][^tra-timetable-xml-archive] The linked PDF/ODS family files and a successfully parsed XML schema would settle those gaps.[^tra-timetable-2026-07][^tra-timetable-xml-archive]
