---
title: National scheduled passenger-shipping inventory
summary: A dated primary-source inventory of Taiwan's current domestic fixed passenger-shipping corridors, with the changing timetable boundary kept explicit.
updated: 2026-09-07
aliases:
  - Domestic ferry routes
  - 國內固定客輪航班
facts:
  - label: Official ticketing-directory corridor rows
    value: "12"
    source: mpb-ferry-ticketing
  - label: Operator listing rows in the ticketing directory
    value: "27"
    source: mpb-ferry-ticketing
  - label: Maritime and Port Bureau fixed-route notice entries
    value: "5"
    source: mpb-domestic-fixed-routes
  - label: Official ticketing directory last checked
    value: 2026-08-07
    source: mpb-ferry-ticketing
  - label: Timeless national sailing total
    value: TBC
specs:
  - label: Dated inventory boundary
    value: Corridor and operator listings, not a unique-vessel or daily-departure total
    source: mpb-ferry-ticketing
  - label: Timetable status
    value: Seasonal, weather-sensitive and operator-controlled
    source: penghu-ship-access
sources:
  - id: mpb-ferry-ticketing
    title: Ticketing information — sea transport and flight services
    titleOriginal: 購票資訊 — 海運與航班專區
    publisher: Maritime and Port Bureau, Ministry of Transportation and Communications (交通部航港局)
    url: https://www.motcmpb.gov.tw/Article?nodeId=376&siteId=1
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full official ticketing directory was fetched on 7 September 2026; its publisher metadata says it was last checked 7 August 2026. It contains 12 named corridor rows and 27 operator-listing rows across Matsu, Penghu, Pingtung, Taitung and Tainan.
  - id: mpb-domestic-fixed-routes
    title: Passenger-ship information — domestic fixed-route query
    titleOriginal: 客船資訊 — 國內固定船班資訊查詢
    publisher: Maritime and Port Bureau, Ministry of Transportation and Communications (交通部航港局)
    url: https://www.motcmpb.gov.tw/Information?nodeId=276&siteId=1
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full official Southern Navigation Centre page lists five domestic fixed-route information entries, including Donggang–Xiaoliuqiu, Budai–Magong, Kaohsiung–Magong and Jiangjun–Dongji.
  - id: penghu-ship-access
    title: Ferry information for reaching Penghu
    titleOriginal: 輪船資訊
    publisher: Penghu National Scenic Area Administration, Tourism Administration (交通部觀光署澎湖國家風景區管理處)
    url: https://www.penghu-nsa.gov.tw/ChiHoOneLer/transport/Traffic/Traffic/ship01.htm
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full official access page describes seasonal Taiwan–Penghu sea access, lists Budai–Magong, Budai–Longmen, Kaohsiung–Magong, Kaohsiung–Qimei/Wangan/Magong and Tainan–Dongji, and names the operator families shown on the page.
---

The Maritime and Port Bureau's national ticketing directory is the most useful current spine for a ferry inventory because it identifies the booking channel and operator contact rather than implying that a route name is a permanent timetable.[^mpb-ferry-ticketing] The 7 September retrieval contains 12 named corridor groups and 27 operator-listing rows: Keelung–Matsu and Taipei–Matsu, Kaohsiung–Magong, Magong–Wangan–Qimei–Kaohsiung, the Budai–Magong group with four operator rows, Budai–Dongji–Qimei–Magong–Budai, Jiangjun–Dongji, Donggang–Xiaoliuqiu, Saltpan–Xiaoliuqiu, Taitung–Green Island, Taitung–Orchid Island and Houbihu–Orchid Island.[^mpb-ferry-ticketing]

That source also distinguishes different operator groups on the same corridor. For example, its Budai–Magong section names Mantianxing Shipping, Kaixuan Shipping, Hai An Shipping and Pescadores Ferry, while the Taitung and Pingtung rows list different booking links and operators.[^mpb-ferry-ticketing] This is why the guide records corridor and operator relationships without collapsing each operator's seasonal or weather-sensitive sailings into one route count.[^mpb-ferry-ticketing] The directory's publisher metadata says it was last checked on 7 August 2026; the guide retrieval date is 7 September 2026.[^mpb-ferry-ticketing]

The Maritime and Port Bureau's Southern Navigation Centre separately lists five domestic fixed-route information entries: Donggang–Xiaoliuqiu, Budai–Magong, Kaohsiung–Magong, and Jiangjun–Dongji alongside its domestic fixed-route query entry.[^mpb-domestic-fixed-routes] The five-entry figure is a count of notices on that official page, not a claim that Taiwan has only five scheduled passenger corridors.[^mpb-domestic-fixed-routes]

The Penghu National Scenic Area Administration expands the corridor picture around Penghu. Its full access page says light passenger ferries operate seasonally between Budai and Magong, and its destination table lists Budai–Magong, Budai–Longmen, Kaohsiung–Magong, Kaohsiung–Qimei/Wangan/Magong and Tainan–Dongji.[^penghu-ship-access] The same page says sailing patterns change with season and weather and directs passengers to the Maritime and Port Bureau's fixed-passenger-ship query before travel.[^penghu-ship-access]

The canonical route pages remain the detailed homes for Penghu, Matsu, Green Island, Orchid Island and Donggang–Xiaoliuqiu. The structured directory snapshot is a national discovery layer and evidence ledger, not a duplicate timetable page. Its 12-row corridor count is therefore labelled `official-current-ticketing-directory`, while each timetable remains a separate date-sensitive field.[^mpb-ferry-ticketing] The current live total of unique scheduled passenger route variants, vessels or daily sailings remains TBC because the official pages use different units: ticketing/operator rows, notice entries, corridor tables and date-specific schedules.[^mpb-ferry-ticketing][^mpb-domestic-fixed-routes][^penghu-ship-access]

Sightseeing cruises, charter-only services and general international shipping are not added merely because they appear on a maritime website.[^mpb-ferry-ticketing][^penghu-ship-access] A service enters this core inventory only when the official material identifies it as domestic passenger transport or a public island-connection corridor; the detailed route pages retain the separate tourism, charter and weather qualifications where the source makes them explicit.[^mpb-ferry-ticketing][^penghu-ship-access]
