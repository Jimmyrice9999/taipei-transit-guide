---
title: Operations
description: Taiwan Railways passenger-service statistics and the published timetable-family boundary.
order: 3
sources:
  - id: tra-monthly-2026-06
    title: "Monthly Statistical Report of Taiwan Railway — June 2026"
    titleOriginal: "臺灣鐵路統計月報"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: https://www.railway.gov.tw/tra-tip-web/tip/file/7bf499cd-6c63-4277-ac88-7dc3807f8d87
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full June 2026 monthly report gives the dated network passenger-performance measures used to define this section's data boundary."
  - id: tra-timetable-2026-07
    title: "Regular Taiwan Railway timetable downloads"
    titleOriginal: "定期行駛列車時刻表"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b41017572e9077f1790&subCode=8ae4cac3756b7b41017573e352ae18f8"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full current index lists timetable-family downloads effective from 1 July 2026."
  - id: tra-timetable-western-2026-07
    title: "Western Main Line reserved-express timetable — Keelung to Chaozhou"
    titleOriginal: "臺灣鐵路西部幹線對號快車時刻表（基隆→潮州）"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/R/KeelungToChaozhou20260701.pdf?version=115.04.09"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full two-page PDF shows train numbers, service types, origins, destinations, station times and timetable symbols for the published 1 July 2026 Western Main Line direction."
  - id: tra-timetable-pingxi-2026-07
    title: "Pingxi–Shen'ao Line timetable"
    titleOriginal: "平溪／深澳線時刻表"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/PingxiToShenao20260701.pdf?version=115.04.09"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full one-page PDF shows the branch's station columns, train numbers, directions, times and service symbols."
  - id: tra-timetable-neiwan-2026-07
    title: "Neiwan–Liujia Line timetable"
    titleOriginal: "內灣／六家線時刻表"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip-tr4cdn.cdn.hinet.net/tra-tip-web/static/file/timetable1150701/S/Neiwan20260701.pdf?version=115.04.09"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full two-page PDF shows separate Neiwan and Liujia workings, station columns, train numbers and times."
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
    note: "The full current archive page lists dated daily XML files; the linked octet-stream file itself was not parsed because the full fetcher rejects that content type."
  - id: tra-timetable-query
    title: "Taiwan Railway train-time and train-number query"
    titleOriginal: "列車時刻／車次查詢"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://tip.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime?lang=zh_TW"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full current query page exposes time, station and train-number modes and warns that the operator adjusts train services periodically."
---

The operations section separates dated network performance measures from the
operator's current timetable downloads and from station-level service data,
covered separately in the [station-level ridership data
record](/rail/tra/operations/station-ridership/).[^tra-monthly-2026-06][^tra-timetable-2026-07]

The [timetable and service-pattern record](/rail/tra/operations/timetable-and-service-patterns/) reads the linked timetable files without turning their examples into a network-wide headway or first/last-train register.[^tra-timetable-2026-07][^tra-timetable-western-2026-07][^tra-timetable-pingxi-2026-07][^tra-timetable-neiwan-2026-07][^tra-timetable-shalun-2026-07]

The operator also exposes a date/station/train query and a dated XML archive, which are recorded as separate data layers because this pass did not turn them into a verified joined dataset.[^tra-timetable-query][^tra-timetable-xml-archive]

The [freight and transportation record](/rail/tra/operations/freight-and-transportation/) keeps the monthly report's freight measures separate from passenger performance and timetable-family data.[^tra-monthly-2026-06]

The [fare and ticket-type record](/rail/tra/operations/fares/) covers a published charter-train rate table and a dated free-seating rollout, while the ordinary single-ticket base fare stays behind an unfetched calculator tool — the same gap this project separately found at each metro operator it has checked.
