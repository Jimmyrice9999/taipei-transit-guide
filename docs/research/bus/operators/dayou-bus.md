> **This file is a LEAD FILE, not a source.** Nothing here may be published on
> its own authority. Publish the underlying source it names, having read that
> source. The existing research corpus has been wrong before; verify every
> inherited lead against the fetched primary.

# 大有巴士 / Dàyou Bus — operator research

**Researched 22 August 2026.** This report covers TDX operator record
`bus-operator-16474-f0ksz1`. Its route section remains generated from the
committed TDX association pull. The record has no associated New Taipei route.

## What is established

### TDX identity and mode/municipality mismatch

- **Claim.** The committed TDX pull identifies `bus-operator-16474-f0ksz1` as 大有巴士, source municipality NewTaipei, with phone 0800-088-626 and zero associated route records. A separate Taipei operator record uses the same Chinese name and is not merged with this one.
- **Source.** *TDX bus operator and route pull* / `titleOriginal`: 交通部運輸資料流通服務平臺
- **Publisher.** Ministry of Transportation and Communications TDX / 交通部運輸資料流通服務平臺
- **URL.** https://tdx.transportdata.tw/
- **Kind.** PRIMARY — committed structured transport pull.
- **Confidence.** High — the normalized operator and route JSON were inspected on 22 August 2026; the route association count is generated from `operatorIds`.
- **Original-language evidence.** The normalized row is `bus-operator-16474-f0ksz1`, `names.zh_tw: 大有巴士`, `sourceCities: [NewTaipei]`, `phone: 0800-088-626`; no normalized route row has this operator record ID. A second row is `bus-operator-citiairbus-1pjf6b8`, also `names.zh_tw: 大有巴士`, with source city Taipei.

### Founding, operating history and sites

- **Claim.** The operator's official company page says Dàyou was founded on 24 March 1969, initially served Nangang and Songshan and the part of Xinyi that developed from Songshan, and now has its operating headquarters in Wenshan plus management stations in Xinzhuang and Nangang.
- **Source.** *About Dàyou — company introduction* / `titleOriginal`: 關於大有 — 公司簡介
- **Publisher.** Dàyou Bus Co., Ltd. / CitiAir Bus / 大有巴士股份有限公司
- **URL.** https://www.airbus.com.tw/?section=40
- **Kind.** PRIMARY — company-authored history and current contact page.
- **Confidence.** High for the stated company account; the page does not give site opening dates or capacities.
- **Original-language evidence.** 「大有巴士為一家歷史悠久的客運公司，成立於58年03月24日」; 「在臺北市公車尚未聯營前，市區公車服務區域以南港區、松山區以及自松山分出的信義區為主」; 「目前公司營運總部設在台北市文山區，並於新北市新莊區、台北市南港區皆設置管理總站」.

- **Claim.** The same page uses “CitiAir Bus Co.” in English, publishes the Wenshan address and lists 02-8663-9000 and 0800-088-626 as service numbers.
- **Source.** Same company-introduction page.
- **Kind.** PRIMARY.
- **Confidence.** High — the footer and contact block were read in the full fetch.
- **Original-language evidence.** 「大有巴士股份有限公司」; 「CitiAir Bus Co.」; 「台北市文山區景興路23巷3號1樓」; 「02-8663-9000」; 「0800-088-626」.

### Ownership, merger and contracts

- **Claim.** No fetched primary source establishes a parent group, shareholder-control structure, legal merger chronology, current route-award chronology or contract terms for this record.
- **Sources checked.** The full company-introduction page, the TDX pull, the full fleet page, the Taipei PTO low-floor notice, the Highway Bureau directory and the Highway Bureau regulatory record were checked on 22 August 2026.
- **Confidence.** High for the stated gap, not evidence that no such records exist.
- **Reason.** Those sources publish the company narrative, service sites, fleet groupings, a dated accessibility deployment and regulator data, but no parent, merger or tender fields. The MOEA company URL `https://findbiz.nat.gov.tw/fts/company/20502327` returned a Cloudflare block in the full fetch, so registry figures and director data were not substituted from an aggregator.

### Fleet and procurement context

- **Claim.** The official fleet page lists King Long highway vehicles from 2019, Volvo highway vehicles from 2023, Taiwan Yutong city vehicles from 2016 and 2017, AEBUS city vehicles from 2020, and King Long city vehicles from 2020 and 2024.
- **Source.** *Dàyou Bus fleet introduction* / `titleOriginal`: 車隊介紹
- **Publisher.** Dàyou Bus Co., Ltd. / CitiAir Bus / 大有巴士股份有限公司
- **URL.** https://www.airbus.com.tw/?section=41
- **Kind.** PRIMARY — operator fleet page.
- **Confidence.** High for the displayed brands and years; low for any inference beyond the page because it gives no counts or technical specifications.
- **Original-language evidence.** 「國道客運車輛」; 「廠牌：大金龍 / 年份：2019 / 配置路線：桃園機場巴士」; 「廠牌：富豪Volvo / 年份：2023」; 「市區客運車輛(3種車型)」; 「廠牌：台灣宇通 / 年份：2016、2017」; 「廠牌：成運 / 年份：2020」; 「廠牌：大金龍 / 年份：2020、2024」.

- **Claim.** Taipei PTO recorded that Dàyou and San Chung Bus introduced 37 low-floor buses on 23 December 2016, with wheelchair spaces, restraints, emergency communication and passenger-information equipment.
- **Source.** *37 low-floor buses enter service* / `titleOriginal`: 大有巴士及三重客運共計37輛低地板公車於105年12月23日上路營運
- **Publisher.** Taipei City Public Transportation Office / 臺北市公共運輸處
- **URL.** https://pto.gov.taipei/News_Content.aspx?n=D065CCB1467288C8&s=79F3D24F99224435&sms=72544237BBE4C5F6
- **Kind.** PRIMARY — responsible city transport authority notice.
- **Confidence.** High for the dated deployment and equipment described; it is not a current fleet register.
- **Original-language evidence.** 「大有巴士及三重客運為服務乘客，聯營212路(直達)、221、225、617及紅9路，共計37輛低地板公車將於105年12月23日上路營運」; 「每車配置1-2個輪椅座位」; 「車輛並裝設有公車動態資訊系統」.

### Routes and contract boundary

- **Claim.** The content route list must remain empty for record 16474 because the committed TDX operator association pull contains no route referencing it. The operator's own airport-service page separately publishes 1961 service information, but that page does not overwrite the TDX record or supply a route-contract history.
- **Sources.** TDX pull; Dàyou Route 1961 page / `titleOriginal`: 1961路線
- **URLs.** https://tdx.transportdata.tw/ ; https://www.airbus.com.tw/?section=60
- **Kind.** PRIMARY.
- **Confidence.** High for the distinct scopes.
- **Original-language evidence.** The operator page lists 「1961路線」 and an endpoint table including 「和平院區」, 「西門町」, 「台北車站」 and 「桃園機場,大園」; the TDX normalized route pull has no `operatorIds` reference to `bus-operator-16474-f0ksz1`.

### Regulator record and incidents

- **Claim.** The Highway Bureau record places Dàyou under 臺北區監理所 for highway passenger transport, displays 乙（112） and lists dated incidents including a 2025-05-27 rear-end collision with one injury, a 2024-01-10 vehicle fire with no casualties, a 2023-05-02 rear-end collision with one injury, a 2013 Taipei collision with eight injuries and earlier highway fires.
- **Source.** *Insurance, accidents, evaluation and violations — Dàyou Bus* / `titleOriginal`: 投保、事故、評鑑及違規資料 — 大有巴士股份有限公司
- **Publisher.** Highway Bureau, Ministry of Transportation and Communications / 交通部公路局
- **URL.** https://www.thb.gov.tw/BusinessCoach_Content.aspx?n=308&s=574&type=1
- **Kind.** PRIMARY — regulator record.
- **Confidence.** High for the full displayed table and its highway scope; it is not treated as a complete city-bus incident history.
- **Original-language evidence.** 「管轄單位 | 臺北區監理所」; 「營業種類 | 公路汽車客運業」; 「評鑑成績 | 乙（112）」; the rows show 「114-05-27 ... 追撞 ... 0 ... 1」, 「113-01-10 ... 火燒車 ... 0 ... 0」, 「112-05-02 ... 追撞 ... 0 ... 1」 and 「102-05-26 ... 臺北市信義光復路口公車專用道 ... 0 ... 8」.

- **Claim.** The Highway Bureau directory lists 大有巴士 at the Banqiao registered address with telephone 02-86639000.
- **Source.** *Highway passenger operators directory* / `titleOriginal`: 查詢公路客運公司
- **Publisher.** Highway Bureau, Ministry of Transportation and Communications / 交通部公路局
- **URL.** https://www.thb.gov.tw/cp.aspx?n=292
- **Kind.** PRIMARY.
- **Confidence.** High for the displayed directory row; it is not treated as a depot record.
- **Original-language evidence.** 「大有巴士 | 新北市板橋區四川路２段２３９號５樓之５ | 02-86639000」.

## Conflicts

1. **TDX record scope versus company scope.** The New Taipei record has zero routes, while the separate Taipei TDX record with the same Chinese name and the company pages document bus service. This is a data-record mismatch, not evidence for inventing a New Taipei route.
2. **Published operating locations.** The company page calls Wenshan its operating headquarters and Xinzhuang/Nangang “management stations”; the Highway Bureau directory publishes the Banqiao address. No source states that any one of these is a depot or gives capacity, so they are not collapsed into one depot claim.
3. **Phone numbers.** The company page publishes 02-8663-9000 and 0800-088-626, while the Highway Bureau directory lists 02-86639000. These are formatting/role differences, not silently treated as separate operators.

## Checked and failed

- **MOEA company-registration extract** — Checked 22 August 2026. `https://findbiz.nat.gov.tw/fts/company/20502327` returned a Cloudflare block in the full fetch; no registration, capital, director or parent-group claim was published from search results or aggregators.
- **Current fleet totals, chassis/body/capacity and electric/hybrid split** — Checked 22 August 2026. The full operator fleet page and the two official transport records list brands, years and a dated low-floor deployment but no complete technical roster or propulsion split.
- **Depot opening dates, capacities and route allocation** — Checked 22 August 2026. The full company page and Highway Bureau directory publish offices/management locations and a registered contact address, but no depot register or allocation table.
- **Merger, parent-group and current route-contract chronology** — Checked 22 August 2026. The fetched company, regulator and transport-authority pages do not publish the requested legal/control or tender history.

## Stated gaps

The page still cannot state a parent group, legal merger history, complete fleet specifications, propulsion mix, depot capacities/opening dates, route-level allocations or contract terms. A successful MOEA registry extract, current company fleet/depot register and Taipei/New Taipei route-award records would settle those gaps.
