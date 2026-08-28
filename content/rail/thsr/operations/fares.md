---
title: THSR fares
summary: The base fare table has not changed since THSR opened in 2007, per the operator's own 2024 statement — while a government-approved ceiling for a possible future rise is already under public discussion, and one Nangang–Zuoying figure stays genuinely unresolved between conflicting sources.
order: 2
operator: THSR
updated: 2026-08-28
facts:
  - label: Standard-class full fare, Taipei–Taichung
    value: NT$700
    source: thsr-earlybird
  - label: Standard-class full fare, Taipei–Zuoying
    value: NT$1,490
    source: thsr-earlybird
  - label: Standard-class full fare, Taipei–Tainan
    value: NT$1,350
    source: thsr-earlybird
  - label: Standard-class full fare, Nangang–Zuoying
    value: TBC (conflicting figures — see below)
  - label: Business-class upgrade surcharge
    value: NT$450 per ticket, flat regardless of distance
    source: thsr-upgrade-rules
  - label: THSR in TPASS
    value: not included, as of the sources read
    source: udn-tpass-thsr
  - label: Base fare table changed since 2007 opening
    value: "no, per THSRC's own 2024 statement"
    source: cna-thsr-fare-review
specs:
  - label: Early-bird discount tiers
    value: 65% then 80% then 90% of full fare, sold in sequence
    source: thsr-earlybird
  - label: Senior / disability / child concession fare
    value: "50%"
    unit: of full fare
    source: thsr-ticket-types
  - label: Season pass (定期票) price
    value: 49%
    unit: of unreserved full fare, two trips/day basis, 30 days
    source: thsr-season-pass
  - label: Season pass card fee
    value: "100"
    unit: NT$, one-time, non-refundable
    source: thsr-season-pass
sources:
  - id: thsr-earlybird
    title: Early-Bird Discount
    titleOriginal: 早鳥優惠
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/7039d17d-1463-4c14-ad93-4d491dedcad5
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the three sold-in-sequence discount tiers and full station-pair pricing tables; standard-class full fares for Taipei–Taichung/Zuoying/Tainan back-calculated from these tables to within NT$5 rounding across all three tiers.
  - id: thsr-upgrade-rules
    title: Business-Class Upgrade — Bank Card Rules
    titleOriginal: 商務車廂升等銀行規則
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/d39dbfbc-8240-4705-ab90-92b7a05c2dec
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the flat NT$450 paid-upgrade surcharge.
  - id: thsr-fare-reversion-2019
    title: "From April 1: business-class full fares revert to the government-registered price"
    titleOriginal: 4月1日起商務車廂全票售價調整回政府備查票價原價
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/d5a6d273-ed57-4b5b-a41c-e7f10e7c10f2
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly twice. Page's own publication date 2019/02/21 and effective date 1 April 2019 — the one confirmed base-rate change on record, a promotional-discount reversion, not a change to the underlying regulated fare table.
  - id: thsr-ticket-types
    title: Standard / Concession / Group Ticket Types
    titleOriginal: 普通/優待/團體票種說明
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/743c51ac-124d-4b1a-a57b-1fd820848032
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the 50% concession fares and group-ticket eligibility (11+ people). A first fetch of this page's long-distance standard-class figures showed signs of column misalignment and is not used for those figures — see docs/research.
  - id: thsr-group-promo
    title: Designated-Train Group Promotion
    titleOriginal: 指定車次團體優惠
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/06856109-7afe-4ba1-abe7-a7cc23793191
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States 60%/70%/77%/85% tiers for full-fare group passengers and a flat 50% for concession-status group passengers, running through 31 December 2026.
  - id: thsr-student-discount
    title: University Student Discount
    titleOriginal: 大學生優惠
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/530e869c-479d-441a-a4b4-61a8166827e9
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the 50%/75%/88% sold-in-sequence tiers for enrolled ROC tertiary students on designated trains.
  - id: thsr-season-pass
    title: Season Pass
    titleOriginal: 定期票優惠
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/fe34c4a1-d274-48ae-bcbe-f8eff4c2faf3
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the 30-day validity, 49%-of-unreserved-fare pricing basis and NT$100 card fee.
  - id: udn-tpass-thsr
    title: "KMT proposes 'adding THSR to TPASS'; academics warn of fiscal burden and fairness concerns"
    titleOriginal: 藍營拋「高鐵納入TPASS」 學界示警財政負擔與公平性
    publisher: United Daily News (聯合新聞網)
    url: https://udn.com/news/story/7266/9478091
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Full article, fetched directly. States plainly that THSR is not currently part of TPASS, and covers a live political proposal to change that, opposed by named academics on subsidy and peak-capacity grounds.
  - id: cna-thsr-fare-review
    title: THSR fares may also rise; funding gap forecast to peak in 2026
    titleOriginal: 台灣高鐵票價恐也調漲 估2026年達資金缺口高峰
    publisher: Central News Agency (中央社)
    url: https://www.cna.com.tw/news/ahel/202409100398.aspx
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Full article, fetched directly, dated September 2024. Carries a direct THSRC statement that the fare table has been unchanged since 2007 and that cumulative CPI has risen 25.7% over the same period.
---

## The base fares, and one that stays unresolved

Standard-class reserved-seat full fares, cross-checked against THSR's own
early-bird discount table (each pair's three discount tiers divide back to
the same full fare, which is strong internal corroboration): Taipei–Taichung
NT$700, Taipei–Tainan NT$1,350, and Taipei–Zuoying NT$1,490 — the last also
independently corroborated by 2026 fare-ceiling news coverage describing it
as the current fare.[^thsr-earlybird] A business-class seat can be added to
any standard-class booking for a flat NT$450 surcharge, regardless of
distance.[^thsr-upgrade-rules]

The Nangang–Zuoying standard fare does not resolve cleanly: different
research passes over THSR's own pages returned NT$1,530 and NT$1,630 for the
same pair, and this page's own back-calculation from the early-bird table
converges near NT$1,525–1,530 without matching either figure exactly. Both
numbers are published here, neither is picked, and the figure stays
TBC pending a cleaner read of the fare-query tool for this specific pair.

## Discounts and concessions

THSR's early-bird scheme sells standard-class seats at 65% of full fare,
then 80%, then 90%, each tier selling out before the next opens, up to five
days before travel; tickets are name-registered to the traveller's
ID or passport number.[^thsr-earlybird] Seniors aged 65 and over,
disability-certificate holders, and children under 12 all qualify for a
concession fare at 50% of full fare, with under-115cm children who don't
need a seat travelling free.[^thsr-ticket-types] University students at ROC
tertiary institutions get their own sold-in-sequence discount — 50%, then
75%, then 88% of full fare — on designated trains only.[^thsr-student-discount]

Groups of 11 or more travelling together on the same date, train and class
qualify for group-ticket status, though group status alone carries no
automatic discount; a separate, time-limited designated-train promotion
(running through 31 December 2026) gives full-fare group passengers 60%,
70%, 77% or 85% off depending on the date and train, and concession-status
group passengers a flat 50% — the two discounts cannot be
combined.[^thsr-ticket-types][^thsr-group-promo] Group discounts are not
available on the three short intra-metro sections between Nangang, Taipei
and Banqiao.[^thsr-ticket-types]

## A season pass, priced off the unreserved fare

THSR sells a 30-day season pass (定期票), valid for unlimited travel on
unreserved seating only, priced at 49% of the unreserved full fare
calculated on a two-trips-per-day basis, plus a one-time, non-refundable
NT$100 card fee.[^thsr-season-pass] Like the group discount, it is not sold
on the three short intra-metro sections.[^thsr-season-pass]

## Unchanged since 2007, and not part of TPASS

THSR's base fare table has not changed since the railway opened in
2007, according to the operator's own statement to reporters — even as
cumulative consumer prices in Taiwan rose 25.7% over the same
period.[^cna-thsr-fare-review] The one confirmed change on the fare side in
this research is narrower: a temporary business-class promotional discount,
introduced to build ridership, ended on 1 April 2019, reverting business-class
full fares to the government-registered rate — not a change to the
underlying regulated table itself.[^thsr-fare-reversion-2019] As of the most
recent reporting read for this page, a base-fare increase is under active
government and company review, with an approved ceiling that would allow the
Taipei–Zuoying fare to rise, but no increase had been implemented.

Separately, THSR sits outside TPASS, the multi-operator monthly pass scheme
that covers TRA, the metro systems and many bus networks: "高鐵目前未納入
TPASS," per one 2026 news report on a political proposal to change
that.[^udn-tpass-thsr] Named academics quoted in the same report argue THSR's
positioning as scarce, high-price intercity capacity would be undermined by
folding it into a flat-rate commuter pass; a primary TPASS scheme page
enumerating covered operators was not located to independently confirm the
exclusion.

## Remaining gaps

The Nangang–Zuoying standard fare is unresolved (see above). Business-class
full fares for pairs beyond Taipei–Taichung and Taipei–Zuoying are not
independently verified — an early full-table extraction of THSR's ticket-types
page showed signs of column misalignment on its long-distance figures and is
not used. Whether a separate multi-ride ticket product (回數票) still exists
alongside the season pass is unconfirmed. The regulatory mechanism setting
THSR's annual fare ceiling rests on two cross-checked news articles rather
than a fetched regulator primary source.
