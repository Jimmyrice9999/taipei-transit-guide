> **This file is a LEAD FILE, not a source.** Nothing here may be published on
> its own authority. Publish the underlying source it names, having read that
> source. This corpus has been wrong before — a miscounted exit total, a wrong
> URL, a misread tunnel description, an inverted arithmetic hypothesis, a
> feeder-colour table missing a row. Verify against primary sources.

# Payment and ticketing infrastructure — card technology, validators, regulation

Research pass, 28 August 2026. `docs/research/ticketing/ticketing.md`
already covers card companies and passes; this file covers the underlying
technology, validator hardware and the 2020–2023 regulatory merger, which
that file does not.

## What is established

**Card technology is reported consistently, but only by secondary
sources.** No EasyCard Corporation technical page stating its own chip
technology was found. A PTT enthusiast thread gives EasyCard as MIFARE
Classic (ISO 14443 Type A, 13.56 MHz), with a newer "chip 悠遊卡" line on
DESFire EV1 (ISO 14443-4) reported as running in a Classic-compatible mode;
iPASS as MIFARE Classic/ISO 14443-3; icash as MIFARE DESFire/ISO 14443-4.
Source: PTT 看板 IC-Card, https://www.ptt.cc/bbs/IC-Card/M.1518425714.A.BA6.html,
SECONDARY, Medium (specific and internally consistent, but unofficial;
the DESFire-vs-Classic-compatible-mode claim specifically is Low
confidence, not corroborated elsewhere). Corroborated at lower specificity
by zh.wikipedia's 悠遊卡 article ("悠遊卡公司所採用的技術為RFID技術（NXP的MIFARE
技術）") and by PanSci (泛科學), https://pansci.asia/archives/359263, which
gives an operating distance of ~14 cm for Taipei/Taichung/Kaohsiung readers.

**No SAM (Secure Access Module) architecture documentation was found for
any of the three current cards.** Genuinely not found, not merely absent
from what was searched.

**A documented MIFARE Classic security compromise on a live EasyCard**:
July 2010, a National Taiwan University electrical-engineering team led by
鄭振牟 used a sniffer-based attack to alter a genuine card's balance from
roughly +NT$100 to roughly -NT$500. Source: HackMD, "悠遊卡的資安問題",
https://hackmd.io/@yuto0226/r1gCIsK36, SECONDARY, Medium (specific, dated,
named researcher; not independently verified against an NTU or EasyCard
Corporation primary).

## History: the pre-EasyCard magnetic ticket, and 寶錄電子's origin in Taipei

**Before EasyCard, Taipei buses used a magnetic stored-value ticket (自強
公車儲值票), launched 25 October 1995, with card readers made by 寶錄電子
(Baoruh Electronics) and cards made by 卡通公司 (Cardtop).** The system was
phased out after EasyCard's 2002 launch and stopped completely on 8 October
2003. Source: zh.wikipedia, "臺北市市區公車", section 票證的變遷,
https://zh.wikipedia.org/wiki/臺北市市區公車, SECONDARY, Medium (specific,
dated, names both companies by role). This establishes 寶錄電子 as a Taipei
bus fare-collection hardware vendor going back to the pre-EasyCard era, not
merely a vendor found via a general product catalogue.

## Validator hardware — vendor identification, mixed confidence

**寶錄電子 (Baoruh)** is reported by a business-press source to hold over
50% market share in Taiwan's smart-transport payment-equipment sector, and
to supply TRA's multi-card ticket gates and Taipei Metro's automatic
top-up machines — but the article's bus-related language is general
("全台客運公車整合式智慧車機") and does not name the Taipei joint-operation
city-bus system specifically. Source: 數位時代 BusinessNext,
https://www.bnext.com.tw/article/59312/systex-involve-5g-connected-vehicle-e-payment,
SECONDARY, Medium for the market-share/TRA/Metro claims; Low for any
inference that this covers Taipei city buses, which it does not say on
its own text. A PTT post specifically observes that most of Taipei's
Baoruh readers are a newer "yellow" model, distinct from older models
seen elsewhere (Tainan, 興南客運, 新營客運), and names 宏碁 (Acer) as a
competing brand present in the same market. Source: PTT 看板 Bus,
https://www.ptt.cc/bbs/Bus/M.1554122653.A.C75.html, SECONDARY, Low-Medium
(a single forum post, not corroborated by an operator or city document).

**神通資訊科技 (MiTAC)** publicly advertises a "Bus e-ticketing Bus
Validator Solution" but the product page names no client cities or
operators at all. Source: mitac.com.tw/en/portfolio-item/bus-e-ticketing-bus-validator-solution/,
PRIMARY (manufacturer's own page) for what the product does; supports no
claim about deployment location.

**遠易通科技 (FEP)'s own product page returned HTTP 403** on fetch — every
FEP claim rests on secondary sources only, none independently verified
this pass.

**A social-media brand-guide post** names four vendors — 寶錄, 宏碁, 神通,
遠易通 — each tied to operators, but every named operator is an
intercity/highway coach company (國光客運, 中興大業, 中鹿客運, 葛瑪蘭客運,
首都客運集團, 亞通客運), not a Taipei joint-operation city-bus operator.
Source: Threads, @starlin980326, SECONDARY, Low (unverified social post;
does not establish which vendor equips Taipei's urban fleet).

**No source found in this pass establishes which vendor(s) currently
equip the Taipei/New Taipei joint-operation city-bus fleet's on-board
validators specifically.** This is a genuine gap, not an oversight —
searched directly and not found.

## Regulatory framework: two acts merged into one

**電子票證發行管理條例 (Electronic Ticket Issuance Management Act) was
originally promulgated 23 January 2009.** Source: 金融監督管理委員會 (FSC),
https://law.fsc.gov.tw/LawContent.aspx?id=FL047751, PRIMARY, High
(制定日期「民國98年01月23日」).

**On 25 December 2020, the Legislative Yuan passed amendments merging the
previously separate "electronic payment" and "electronic ticket" regimes
into 電子支付機構管理條例 (Electronic Payment Institution Management Act).**
Source: FSC press release, https://www.fsc.gov.tw/ch/home.jsp?id=96&parentpath=0,2&mcustomize=news_view.jsp&dataserno=202012250002&dtable=News,
PRIMARY, High. Quote: 「將原本『電子支付』、『電子票證』二元化管理的法制統合為一」.

**The amended Act was promulgated 27 January 2021, effective 1 July 2021.**
Article 58 gives the transitional rule: an electronic-ticket issuer already
licensed by the FSC before this amendment is deemed to already hold the
licence required under the new Act's Article 11 Paragraph 1, and had six
months from the effective date to submit an adjusted business plan and
apply for a reissued licence. Source: 全國法規資料庫,
https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0380237, PRIMARY, High.

**The original 電子票證發行管理條例 was formally repealed, promulgated
4 January 2023**, on the basis that its subject matter was now covered by
the newer Act (中央法規標準法第21條第4款). Sources: 全國法規資料庫,
https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=G0380207; FSC law
database, https://law.fsc.gov.tw/LawContent.aspx?id=FL047751; Executive
Yuan press release, https://www.ey.gov.tw/Page/9277F759E41CCD91/75ddda5b-9173-4820-b582-3bf357994701.
All PRIMARY, High for the repeal date, cross-confirmed by two independent
primary law databases.

## Tap-on/tap-off rollout, Taipei and New Taipei

**Two phases: 1 July 2019, then 1 February 2020.** Phase 1 (from 1 July
2019/108年7月1日): failing to tap on exit did not lock the card or forfeit
transfer discounts, with a lottery incentive for completing both taps.
Phase 2 (from 1 February 2020/109年2月1日): failing to tap on exit still
did not lock the card, but forfeited the next MRT/bus/YouBike transfer
discount. Sources: Taipei PTO FAQ,
https://pto.gov.taipei/News_Content.aspx?n=6B4D38874E971F4B&sms=87415A8B9CE81B16&s=954214BF3AA2EA89,
and Taipei DOT press release,
https://dot.gov.taipei/News_Content.aspx?n=D739A9F6B5C0AB95&s=1F833CC57FF26F2D.
Both PRIMARY, High — two independent city primary sources agree exactly on
both dates and phase mechanics.

**No source found links the 2019–2020 rollout to a specific hardware or
vendor change** — whether it required new validator units or only a
software update to existing ones is not addressed by any source found.

## Checked and failed

- **law.kcg.gov.tw/enactment/en8.pdf** (an article on 電子票證 security) —
  DNS resolution failed (`getaddrinfo ENOTFOUND`). Could not be used for
  any claim about SAM architecture or MIFARE security. Checked 2026-08-28.
- **遠易通科技 (FEP) product page**, fep.com.tw/product.html — HTTP 403.
  Every FEP claim rests on secondary sources only. Checked 2026-08-28.
- **iThome article on 雙北 bus tap-on/tap-off big-data analytics**,
  ithome.com.tw/news/139452 — HTTP 403. Could not check whether it names
  any validator vendor in connection with the 2019 rollout. Checked
  2026-08-28.
- **今周刊/BusinessToday article on icash's 2014 FSC licence transfer** —
  reached only via a search-engine summary, never fetched as a full page;
  the April 2014 date it would support is not published here as a fact.
  Checked 2026-08-28.

## Stated gaps

Which vendor(s) currently equip the Taipei/New Taipei joint-operation
city-bus fleet's on-board validators is unresolved — the strongest
available evidence is a Low-Medium-confidence PTT observational post. A
Taipei PTO or 臺北市公車聯營管理委員會 procurement record, or an operator
press release naming a current vendor, would settle it. SAM architecture
for any of the three cards, and an EasyCard Corporation primary source for
its own chip technology, were not found by any search run this pass.
