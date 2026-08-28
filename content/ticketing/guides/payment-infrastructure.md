---
title: Payment and ticketing infrastructure
summary: Card technology, validator hardware and the 2020–2023 merger of Taiwan's electronic-ticket and electronic-payment regulatory regimes into one.
updated: 2026-08-28
facts:
  - label: EasyCard technology, per secondary sources
    value: MIFARE Classic, ISO 14443 Type A, 13.56 MHz
    source: ptt-ic-card
  - label: Merged regulation
    value: 電子支付機構管理條例
    source: fsc-merger
  - label: Merger promulgated
    value: 27 January 2021
    source: moj-electronic-payment
  - label: Merger effective
    value: 1 July 2021
    source: moj-electronic-payment
  - label: Original electronic-ticket act repealed
    value: 4 January 2023
    source: moj-repeal
  - label: Tap-on/tap-off Phase 1
    value: 1 July 2019
    source: pto-tap
  - label: Tap-on/tap-off Phase 2
    value: 1 February 2020
    source: pto-tap
specs:
  - label: iPASS technology, per secondary sources
    value: MIFARE Classic, ISO 14443-3
    source: ptt-ic-card
  - label: icash technology, per secondary sources
    value: MIFARE DESFire, ISO 14443-4
    source: ptt-ic-card
  - label: Current Taipei bus validator vendor
    value: TBC
  - label: SAM architecture
    value: TBC
sources:
  - id: ptt-ic-card
    title: Discussion — Taiwan's electronic-ticket technical specifications
    titleOriginal: 台灣電子票證的技術規格
    publisher: PTT bulletin board system, board IC-Card
    url: https://www.ptt.cc/bbs/IC-Card/M.1518425714.A.BA6.html
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports the reported chip technology and standard for EasyCard, iPASS and icash; enthusiast forum, not corroborated by any card company's own technical documentation.
  - id: pansci-easycard
    title: One card in hand, endless convenience — how EasyCard's design works
    titleOriginal: 一卡在手便利無窮，悠遊卡的設計原理
    publisher: PanSci (泛科學)
    url: https://pansci.asia/archives/359263
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports the RFID/induction mechanism and roughly 14cm reader operating distance.
  - id: hackmd-security
    title: EasyCard's information-security problem
    titleOriginal: 悠遊卡的資安問題
    publisher: HackMD (personal technical writeup)
    url: https://hackmd.io/@yuto0226/r1gCIsK36
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports the July 2010 NTU MIFARE Classic balance-alteration demonstration.
  - id: wiki-taipei-bus-tickets
    title: Taipei City buses — the changing of ticketing
    titleOriginal: 臺北市市區公車－票證的變遷
    publisher: Wikipedia (維基百科)
    url: https://zh.wikipedia.org/wiki/臺北市市區公車
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports the 1995 magnetic stored-value ticket, its vendors, and its 2003 discontinuation.
  - id: bnext-baoruh
    title: Systex takes a 30% stake in bus-reader leader Baoruh, entering the smart-transport market
    titleOriginal: 精誠拿下公車讀卡機龍頭30％股權，入股寶錄電子，揮軍智慧交通新戰場
    publisher: BusinessNext (數位時代)
    url: https://www.bnext.com.tw/article/59312/systex-involve-5g-connected-vehicle-e-payment
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports Baoruh's reported market share and its TRA/Taipei Metro deployments; does not name the Taipei city-bus system.
  - id: ptt-baoruh-taipei
    title: On the new Baoruh reader's tap speed
    titleOriginal: 關於新版寶錄機的感應速度
    publisher: PTT bulletin board system, board Bus
    url: https://www.ptt.cc/bbs/Bus/M.1554122653.A.C75.html
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Supports an observation that most Baoruh readers on Taipei buses are a newer model; a single forum post, not an operator record.
  - id: mitac-validator
    title: Bus e-ticketing Bus Validator Solution
    titleOriginal: Bus e-ticketing Bus Validator Solution
    publisher: MiTAC Information Technology Corp.
    url: https://www.mitac.com.tw/en/portfolio-item/bus-e-ticketing-bus-validator-solution/
    accessed: 2026-08-28
    kind: primary
    lang: en
    note: Supports MiTAC's own validator product description; names no client cities or operators.
  - id: fsc-original-act
    title: Electronic Ticket Issuance Management Act
    titleOriginal: 電子票證發行管理條例
    publisher: Financial Supervisory Commission (金融監督管理委員會)
    url: https://law.fsc.gov.tw/LawContent.aspx?id=FL047751
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Supports the original act's 23 January 2009 promulgation date and its later repeal date.
  - id: fsc-merger
    title: The Legislative Yuan passes third reading of amendments to the Electronic Payment Institution Management Act
    titleOriginal: 立法院三讀通過「電子支付機構管理條例」修正案
    publisher: Financial Supervisory Commission (金融監督管理委員會)
    url: https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202012250002&dtable=News
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Supports the 25 December 2020 merger of the electronic-payment and electronic-ticket regulatory regimes into one act.
  - id: moj-electronic-payment
    title: Electronic Payment Institution Management Act
    titleOriginal: 電子支付機構管理條例
    publisher: Laws & Regulations Database of the Republic of China (全國法規資料庫)
    url: https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0380237
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Supports the amended act's 27 January 2021 promulgation, 1 July 2021 effective date, and Article 58's transitional licensing rule.
  - id: moj-repeal
    title: Electronic Ticket Issuance Management Act (repealed)
    titleOriginal: 電子票證發行管理條例（已廢止）
    publisher: Laws & Regulations Database of the Republic of China (全國法規資料庫)
    url: https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0380207
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Supports the 4 January 2023 repeal date and the 中央法規標準法第21條第4款 legal basis.
  - id: pto-tap
    title: FAQ — When did tap-on/tap-off for buses begin?
    titleOriginal: 公車上下車刷卡什麼時候開始實施？
    publisher: Taipei Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=6B4D38874E971F4B&sms=87415A8B9CE81B16&s=954214BF3AA2EA89
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Supports the two-phase tap-on/tap-off rollout dates and mechanics.
  - id: dot-tap
    title: Twin-city buses implement tap-on/tap-off from 1 July 2019
    titleOriginal: 雙北市公車自108年7月1日起實施上下車刷卡
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://dot.gov.taipei/News_Content.aspx?n=D739A9F6B5C0AB95&s=1F833CC57FF26F2D
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Independently corroborates the tap-on/tap-off rollout dates and mechanics from the city's transport bureau rather than the PTO.
---

This page covers card technology, on-bus validator hardware and the
regulatory framework — for the card companies themselves, fares and the
TPASS regional pass, see
[cards, the commuter pass, and how fares work](/ticketing/guides/cards-passes-and-fares/).

## Card technology — reported consistently, but only by secondary sources

No EasyCard Corporation technical page stating its own chip technology was
found in this research pass. Secondary sources report EasyCard as MIFARE
Classic (ISO 14443 Type A, 13.56 MHz)[^ptt-ic-card], with an operating
distance of roughly 14 cm on Taipei/Taichung/Kaohsiung readers[^pansci-easycard].
iPASS is reported as MIFARE Classic/ISO 14443-3, and icash as MIFARE
DESFire/ISO 14443-4[^ptt-ic-card]. No SAM (Secure Access Module)
architecture documentation was found for any of the three cards — a
genuine gap, not merely an unsearched one.

**A documented security compromise.** In July 2010, a National Taiwan
University electrical-engineering team led by 鄭振牟 used a sniffer-based
attack to alter a genuine, in-use EasyCard's balance from roughly +NT$100
to roughly -NT$500[^hackmd-security].

## Before EasyCard: a magnetic stored-value ticket

Taipei buses used a magnetic stored-value ticket, 自強公車儲值票, launched
25 October 1995, with readers made by 寶錄電子 (Baoruh Electronics) and
cards made by 卡通公司 (Cardtop)[^wiki-taipei-bus-tickets]. It was phased
out after EasyCard's 2002 launch and stopped completely on 8 October
2003[^wiki-taipei-bus-tickets]. This places Baoruh as a Taipei bus
fare-collection hardware vendor from before EasyCard existed, not merely a
vendor found via a general product catalogue.

## Validator hardware — who equips the buses, at low confidence

A business-press report describes 寶錄電子 (Baoruh) as holding over 50%
market share in Taiwan's smart-transport payment-equipment sector, and as
supplying TRA's ticket gates and Taipei Metro's top-up machines — but its
language about buses is general ("全台客運公車整合式智慧車機") and does not
name the Taipei joint-operation city-bus system specifically[^bnext-baoruh].
A PTT post separately observes that most Baoruh readers currently on
Taipei buses are a newer "yellow" model, distinct from older models seen
elsewhere, and names 宏碁 (Acer) as a competing brand present in the same
market — a single forum post, Low-Medium confidence, not an operator or
city record[^ptt-baoruh-taipei]. 神通資訊科技 (MiTAC) advertises its own
bus-validator product but names no client cities[^mitac-validator]. **No
source found in this pass establishes which vendor equips the Taipei/New
Taipei joint-operation fleet's on-board validators specifically** — this
remains TBC.

## Regulatory framework: two acts merged into one

Taiwan's 電子票證發行管理條例 (Electronic Ticket Issuance Management Act) was
originally promulgated 23 January 2009[^fsc-original-act]. On 25 December
2020, the Legislative Yuan passed amendments merging the previously
separate electronic-payment and electronic-ticket regulatory regimes into
one act, 電子支付機構管理條例 — "將原本『電子支付』、『電子票證』二元化管理的法制統合為一"[^fsc-merger].
The amended act was promulgated 27 January 2021 and took effect 1 July
2021; its Article 58 deems any electronic-ticket issuer already licensed
before the amendment to already hold the licence the new act requires,
with six months to submit an adjusted business plan and apply for a
reissued licence[^moj-electronic-payment]. The original act was formally
repealed, promulgated 4 January 2023, on the basis that its subject matter
was now covered by the newer act[^moj-repeal].

## Tap-on/tap-off: two phases

Taipei and New Taipei buses moved to mandatory tap-on/tap-off in two
phases. Phase 1, from 1 July 2019: failing to tap on exit did not lock the
card or forfeit transfer discounts, and riders who completed both taps
could enter a lottery[^pto-tap] [^dot-tap]. Phase 2, from 1 February 2020:
failing to tap on exit still did not lock the card, but forfeited the next
MRT/bus/YouBike transfer discount[^pto-tap]. Two independent city primary
sources — the Public Transportation Office and the Department of
Transportation — agree exactly on both dates[^pto-tap] [^dot-tap]. No
source found in this pass links the rollout to a specific hardware or
vendor change, as opposed to a software update to existing readers.
