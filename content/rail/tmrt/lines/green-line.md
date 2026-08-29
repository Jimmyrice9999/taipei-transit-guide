---
title: Green Line
summary: Taichung's 18-station driverless railway from Beitun Main Station to HSR Taichung Station.
order: 1
line: G
operator: TMRT
aliases:
  - 綠線
  - 臺中捷運綠線
  - Taichung Metro Green Line
updated: 2026-08-23
lead:
  value: "16.71"
  unit: km
  label: operator-published route length
  source: tmrt-annual
  note: TDX publishes RouteLength 16.70 km, plus 16.93 km in direction 0 and 16.97 km in direction 1 as cumulative station chainage; these values are retained as a conflict rather than silently substituted for the operator's 16.71 km figure.
facts:
  - label: Operator
    value: Taichung Metro Corporation
    source: tmrt-events
  - label: Stations
    value: "18"
    source: tmrt-annual
  - label: Termini
    value: G0 Beitun Main Station — G17 HSR Taichung Station
    source: tmrt-map
  - label: Public opening
    value: 25 April 2021
    source: tmrt-reopen
  - label: Guideway
    value: 16 elevated stations; G0 and G17 at ground level
    source: tmrt-faq
  - label: Automation
    value: Fully driverless
    source: tmrt-faq
specs:
  - label: Operator route length
    value: "16.71"
    unit: km
    source: tmrt-annual
  - label: TDX direction 0 chainage
    value: "16.93"
    unit: km
    source: tdx-tmrt
  - label: TDX route length field
    value: "16.70"
    unit: km
    source: tdx-tmrt
  - label: TDX direction 1 chainage
    value: "16.97"
    unit: km
    source: tdx-tmrt
  - label: Stations
    value: "18"
    source: tmrt-annual
  - label: Train formation
    value: 2
    unit: cars
    source: tmrt-faq
sources:
  - id: tdx-tmrt
    title: Taiwan MOTC TDX rail records for TMRT
    titleOriginal: 交通部運輸資料流通服務標準資料
    publisher: Ministry of Transportation and Communications, Taiwan (交通部)
    url: https://tdx.transportdata.tw/api/basic/v2/Rail/Metro/StationOfRoute/TMRT?$format=JSON
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Committed TDX StationOfRoute and Route records provide the 18-stop sequence and directional cumulative chainage; Shape provides the geometry.
  - id: tmrt-map
    title: Metro map
    titleOriginal: 路線圖
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/metro-life/map
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current operator map and station order from G0 to G17.
  - id: tmrt-annual
    title: Taichung Metro Corporation 2021 operational route report
    titleOriginal: 臺中捷運股份有限公司營運路線資料
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/Content/Uploads/PublicClassArticle/9ad3a311-c8e4-4bb8-883a-d36d756eeeae.pdf
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The operator's report gives the 16.71 km route, 18 stations, start/end and system description.
  - id: tmrt-faq
    title: Frequently asked questions
    titleOriginal: 常見問題
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/our-services/faq
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The operator's FAQ gives steel-wheel medium-capacity operation, two-car trains, 536 passengers per train, driverless operation, speeds and the two ground-level stations.
  - id: cj910
    title: CJ910 project record
    titleOriginal: CJ910 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C30
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Northern civil package: G0, Beitun depot and the track system."
  - id: cj920
    title: CJ920 project record
    titleOriginal: CJ920 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C29
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Civil package for the G3–G9 elevated section."
  - id: cj930
    title: CJ930 project record
    titleOriginal: CJ930 工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C28
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: "Civil package for G10–G17, including the ground-level HSR end."
  - id: cj900
    title: CJ900/CJ907 system-equipment project record
    titleOriginal: CJ900、CJ907 機電系統工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C31
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: System-equipment package from the depot to G17, jointly delivered by Kawasaki Heavy Industries, Alstom and CTCI.
  - id: tmrt-art
    title: Public works
    titleOriginal: 公共藝術
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/art/public-works
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Current operator roster of Green Line public works and artists.
  - id: tmrt-events
    title: Major events
    titleOriginal: 大事紀
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/about/major-events
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Company, construction-accident, joint-shaft and opening milestones.
  - id: cy-control
    title: Investigation into the Taichung Metro joint-shaft fracture
    titleOriginal: 臺中捷運鋼箱梁斷裂案調查報告
    publisher: Control Yuan, Taiwan (監察院)
    url: https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/71448
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: Investigation of the design-check, quality-control and oversight failures in the 2020 test-operation fracture, and the subsequent remedial sequence.
  - id: tmrt-reopen
    title: Taichung Metro resumes test operation
    titleOriginal: 臺中捷運恢復試營運
    publisher: Taichung City Government (臺中市政府)
    url: https://www.taichung.gov.tw/8868/8872/9962/1742706
    accessed: 2026-08-23
    kind: primary
    lang: zh-Hant
    note: The city announcement records test-operation restart on 25 March 2021 and formal service on 25 April 2021.
  - id: taichung-extensions
    title: "Good news for Taichung again! Green Line extensions approved by the Executive Yuan"
    titleOriginal: 台中再傳「捷」報！捷運綠線延伸 獲行政院核定
    publisher: 臺中市政府 (Taichung City Government)
    url: https://www.taichung.gov.tw/2560878/post
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "Fetched in full. Names a 2.49 km, 2-station northern extension (Jueshe Station to the Dakeng area via Songzhu Road) and a 6.59 km, 5-station southern extension (from HSR Taichung Station, crossing the Wu River into Changhua County, co-located with the elevated Changhua Railway's Jinma Station). States Executive Yuan approval 2024-01-31 and combined funding of NT$35.591 billion (Taichung City NT$10.598bn, Changhua County NT$6.715bn, central government NT$18.278bn)."
  - id: dorts-tmrt
    title: Taichung Metro Green Line (Wuri-Wenxin-Beitun Line)
    titleOriginal: 臺中都會區大眾捷運系統烏日文心北屯線
    publisher: 臺北市政府捷運工程局 (Department of Rapid Transit Systems, Taipei City Government)
    url: https://www.dorts.gov.taipei/cp.aspx?n=1C3E25BBF5A49242
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: "DORTS's own page describing its own work. States MOTC commissioned Taipei City Government to handle the Green Line's subsequent design and construction (「交通部委託臺北市政府辦理後續設計施工事項」), and that MOTC, Taipei City Government and Taichung City Government signed a three-party construction-and-operation agreement on 2008-11-15 (「97年11月15日完成簽署...建設與營運三方協議書」)."
  - id: storm-dorts
    title: "From Japan via Kawasaki Heavy Industries! Taichung Metro Green Line's first EMU arrives at Taichung Port"
    titleOriginal: 來自日本川崎重工！台中捷運綠線第一列電聯車運抵台中港
    publisher: 風傳媒 (Storm Media)
    url: https://www.storm.mg/article/220061
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "News report, fetched in full, corroborating DORTS's own account: 「負責代為工程施作的北市捷運局表示，台中捷運綠線目前工程進度近7成」(the Taipei DORTS office, responsible for executing the engineering work on Taichung's behalf, states progress is nearly 70%). Also describes a January 2017 factory inspection of the prototype train at Kawasaki Heavy Industries in Japan, led by DORTS deputy director 余念梓."
  - id: nownews-selfbuild
    title: "No longer relying on Taipei City Government to build for us: Mayor Lu Shiow-yen says Taichung enters a peak metro-construction period for the next 30 years"
    titleOriginal: 不再靠北市府代工！盧秀燕：未來30年台中進入捷運興建高峰期
    publisher: NOWnews
    url: https://www.nownews.com/news/6547020
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "News report, fetched in full, on Taichung establishing its own independent metro-engineering bureau in 2025. Quotes Mayor 盧秀燕 on why the Green Line was built by Taipei City Government rather than a Taichung agency: 「台中只有一條捷運綠線，委託最有經驗的台北市政府施作」(Taichung had only the one line, so it commissioned the most experienced body available)."
  - id: udn-ridership
    title: "Green Line marks 5 years of service, cumulative ridership passes 60 million"
    titleOriginal: 台中捷運綠線通車5年 累積運量破6000萬人次
    publisher: 聯合報 (United Daily News)
    url: https://udn.com/news/story/7325/9258074
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: "News report, fetched in full, attributing figures directly to the operator: 「中捷公司指出，台中綠線2025年總運量達1722萬人次，較2024年1580萬人次成長達9%」(TMRT states 2025 annual ridership reached 17.22 million, up 9% from 15.80 million in 2024). States cumulative ridership passed 50 million on 2025-06-09 and 60 million in early January 2026, and that December 2025 set unspecified new records for monthly and daily ridership."
---

The Green Line is a single line, but it is not a single measurement. The operator's 2021 route report gives **16.71 km** and 18 stations.[^tmrt-annual] The committed TDX route record gives **16.70 km** in its `RouteLength` field, while its station chainages reach **16.93 km** in direction 0 and **16.97 km** in direction 1.[^tdx-tmrt] Those four figures are published together here because the sources do not state that they measure exactly the same object; the page does not average them.

`G0` Beitun Main Station and `G17` HSR Taichung Station are the line's two ground-level stations; the other 16 are elevated.[^tmrt-faq] The operator describes the railway as steel-wheel and medium-capacity, with two-car, fully driverless trains and a maximum operating speed of 75 km/h.[^tmrt-faq] The TDX sequence runs through Beitun, North District, Xitun, Nantun, South District and Wuri, ending beside the HSR and TRA interchange at `G17`.[^tdx-tmrt][^tmrt-map]

The civil work is readable as three geographic packages: CJ910 at `G0` and the Beitun depot, CJ920 across `G3`–`G9`, and CJ930 from `G10` through `G17`.[^cj910][^cj920][^cj930] CJ900/CJ907 is the system-equipment package, covering power, communications, automatic fare collection, depot equipment, trains and related systems rather than a further passenger-facing segment.[^cj900]

The line's opening history contains a material safety event. A joint shaft fractured during test operation on 21 November 2020; the Control Yuan records failures to verify design parameters and deficiencies in quality supervision.[^tmrt-events][^cy-control] Taichung restarted test operation on 25 March 2021 and began formal service on 25 April 2021 after the remedial programme.[^tmrt-reopen] The sources read for this page do not support the often-repeated “2022 reopening” date, so it is recorded as a checked conflict rather than repeated as fact.

Public art is not treated as a colour swatch for the line. The operator's current roster names works at `G0`, `G3`, `G7`, `G9`, `G10a`, `G13`, `G16` and `G17`, with the station-specific pages below preserving those names and artists.[^tmrt-art]

## Who actually built it

Taichung had no metro-engineering agency of its own when the Green Line was designed and built. DORTS — Taipei City Government's own Department of Rapid Transit Systems — states directly that MOTC commissioned Taipei City Government to handle the line's subsequent design and construction, formalised in a three-party agreement MOTC, Taipei City Government and Taichung City Government signed on 15 November 2008.[^dorts-tmrt] A 2017 news report corroborates DORTS actually doing the work: 「負責代為工程施作的北市捷運局表示，台中捷運綠線目前工程進度近7成」(the Taipei DORTS office, executing the work on Taichung's behalf, states progress is nearly 70%), and describes a DORTS deputy director personally leading a January 2017 factory inspection of the prototype train at Kawasaki Heavy Industries in Japan.[^storm-dorts] Taichung's mayor confirmed the same arrangement in 2025, framing it as a temporary necessity now ending: 「台中只有一條捷運綠線，委託最有經驗的台北市政府施作」(with only the one line, Taichung commissioned the most experienced body available) — announced alongside Taichung establishing its own independent metro-engineering bureau for future lines.[^nownews-selfbuild] The line's own current civil-package records (CJ910/CJ920/CJ930/CJ900) are attributed to Taichung's own bureau, which reflects that bureau's current role hosting the records rather than a contradiction of DORTS's construction history.[^cj910][^cj920][^cj930][^cj900][^dorts-tmrt]

## Extensions

Two extensions have Executive Yuan approval, both from a Taichung City Government announcement fetched in full: a 2.49 km, 2-station northern extension from Jueshe Station toward the Dakeng area along Songzhu Road, and a 6.59 km, 5-station southern extension from HSR Taichung Station across the Wu River into Changhua County, co-located with the elevated Changhua Railway's Jinma Station.[^taichung-extensions] The Executive Yuan approved both on 31 January 2024, with combined funding of NT$35.591 billion split between Taichung City (NT$10.598bn), Changhua County (NT$6.715bn) and the central government (NT$18.278bn).[^taichung-extensions] Those two segments sum to 9.08 km of new route; separate secondary reporting instead describes a "10.041 km, 8-station" comprehensive plan submitted for central-government review in February 2026, a figure that does not arithmetically match the two named segments and may be measuring a different scope. Both figures are published rather than reconciled, since no source states what the difference covers.

## Ridership

TMRT's own figures, reported by 聯合報 and attributed directly to the company, give 2025 annual ridership at 17.22 million, up 9% from 15.80 million in 2024.[^udn-ridership] Cumulative ridership passed 50 million on 9 June 2025 and 60 million in early January 2026, with December 2025 reported to have set new records for monthly and daily ridership, though the article does not give the record figures themselves.[^udn-ridership] TMRT's own press-release listings, checked directly, do not currently carry a release stating these milestones in the operator's own words; the figures rest on this news report's attribution to the company, not on a primary release read directly.[^udn-ridership]
