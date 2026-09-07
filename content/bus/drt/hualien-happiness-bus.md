---
title: Hualien Happiness Bus
summary: Hualien County’s current Happiness Bus directory, with the county page’s fixed/flexible operating model, township coverage, named service groups and national-count boundary kept explicit.
updated: 2026-09-07
facts:
  - label: County page displayed areas
    value: "80 townships/areas"
    source: hualien-happiness-directory
  - label: County page displayed routes
    value: "281"
    source: hualien-happiness-directory
  - label: Rural areas / routes in county page display
    value: "47 / 209"
    source: hualien-happiness-directory
  - label: Named township groups displayed
    value: "11"
    source: hualien-happiness-directory
specs:
  - label: Operating model
    value: Fixed-route/fixed-schedule service combined with flexible reservation service
    source: hualien-happiness-directory
  - label: County-only current total reconciled to national total
    value: TBC
  - label: Route-level current fares and booking contacts
    value: TBC
sources:
  - id: hualien-happiness-directory
    title: Hualien Happiness Bus service introduction
    titleOriginal: 幸福巴士服務介紹
    publisher: Hualien County Government (花蓮縣政府)
    url: https://www.hly.tw/HappinessBus/info
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full current county page describes the commissioning model, fixed/flexible operation, displayed 80-area/281-route count, 47 rural areas/209 routes and 11 township groups with 30 named route links.
  - id: motc-happiness-2026
    title: MOTC 115 annual unit settlement — public-transport implementation report
    titleOriginal: 交通部115年度單位決算
    publisher: Ministry of Transportation and Communications (交通部)
    url: https://www.motc.gov.tw/ch/app/data/doc?aplistdn=&detailNo=1488795645681602560&id=811&module=policy&preview=&serno=ac2163a7-13ef-4a20-92a9-2de9f4129bcd&type=s
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: "The national dated report’s February 2026 measurement is retained only as a scope conflict: 507 services across 193 townships/districts, including 247 routes in 64 rural areas and 95.10% rural coverage."
  - id: thb-happiness-inventory
    title: Happiness Bus and Happiness Taxi operating information
    titleOriginal: 幸福巴士及幸福小黃營運資訊
    publisher: Highway Bureau, Ministry of Transportation and Communications (交通部公路局)
    url: https://www.thb.gov.tw/News.aspx?_CSN=4106&n=10738&sms=13903
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The national directory boundary exposes jurisdiction, service type, area, route name, stop-pattern and route-modification fields; it is not used as a complete Hualien route export here.
---

Hualien’s Happiness Bus layer is a county directory, not one uniform bus company.
The county’s current Happiness Bus page says county or township government is the
usual operating authority, with some services commissioned to bus companies, taxi
companies, local social groups or individuals.[^hualien-happiness-directory]
It describes fixed-route/fixed-schedule service operating alongside flexible
reservation service, which is why a flexible line should not be presented as an
ordinary all-day city-bus route.[^hualien-happiness-directory]

## Current county directory

The page displays 80 townships/areas and 281 routes, including 47 rural areas and
209 routes.[^hualien-happiness-directory] Those are the county page’s displayed
programme measurements, retrieved on 7 September 2026; they are not silently
substituted for the Highway Bureau’s separate national total.

The directory exposes named groups for Guangfu, Ji’an, Xiulin, Zhuoxi, Fuli,
Xincheng, Ruisui, Wanrong, Shoufeng, Fenglin and Fengbin.[^hualien-happiness-directory]
Within those groups it lists a whole-town flexible reservation line in Guangfu,
medical lines in Xincheng and Fengbin, village lines in Ruisui, and student,
Jingpu, Fengfu, Baliwan and Kavalan lines in Fengbin.[^hualien-happiness-directory]
The page displays 30 named route links across those 11 groups; that is a link count
on this directory view, not a claim that no other Hualien service exists.[^hualien-happiness-directory]

## National measurement boundary

The county display cannot be added to the national February 2026 measurement.[^hualien-happiness-directory][^motc-happiness-2026] The
MOTC report gives 507 Happiness Bus/Happiness Taxi services across 193
townships/districts, including 247 routes in 64 rural areas and 95.10% rural
public-transport coverage.[^motc-happiness-2026] The county page’s 80-area/281-
route display is a different publication layer and has no denominator or export
definition that makes the two values combinable.[^hualien-happiness-directory][^motc-happiness-2026]

The national Highway Bureau directory exposes jurisdiction, service type, area,
route name, stop pattern and route-modification fields.[^thb-happiness-inventory]
The Hualien page links to route-level Highway Bureau entries, but several of the
linked URLs redirected to the Bureau default page when fetched during this pass.[^hualien-happiness-directory][^thb-happiness-inventory]
Current stop sequences, operating days, route-level fares, booking contacts and
contractors therefore remain **TBC** rather than being reconstructed from link
labels.[^hualien-happiness-directory][^thb-happiness-inventory]

This page keeps the programme open to public riders where the county page describes
it as public transport, while preserving flexible reservation as an operating
property. It does not fold the service into eligibility-limited rehabilitation
transport, ordinary taxi service or the city-bus route-record count.[^hualien-happiness-directory]
