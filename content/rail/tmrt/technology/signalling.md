---
title: Taichung Metro signalling and automation
summary: The operator calls it fully automatic driverless operation and names no GoA grade; a three-firm consortium built the system under six unbranded subsystem names, and Alstom's own later marketing names the Green Line's platform as Urbalis CBTC.
order: 1
operator: TMRT
updated: 2026-08-29
facts:
  - label: Automation, per the operator
    value: "全自動無人駕駛 (full automatic driverless operation)"
    source: tmrt-faq
  - label: Formal GoA (Grade of Automation) classification
    value: TBC
  - label: System-equipment contract
    value: CJ900/CJ907, Beitun depot to G17
    source: cj900-bureau-record
  - label: Winning consortium
    value: Kawasaki Heavy Industries (Japan), Alstom Transport (France), China Engineering Corporation (中鼎工程, domestic)
    source: cj900-bureau-record
  - label: Contract start
    value: 21 April 2011
    source: cj900-bureau-record
  - label: Branded signalling/train-control product name
    value: Alstom Urbalis CBTC (family name; specific generation not stated)
    source: alstom-blue-line-release
specs:
  - label: Contract value
    value: approximately 10.908
    unit: NT$ billion
    source: cj900-bureau-record
  - label: Average operating speed
    value: "28.4"
    unit: km/h
    source: tmrt-faq
  - label: Maximum cruising speed
    value: "75"
    unit: km/h
    source: tmrt-faq
sources:
  - id: tmrt-faq
    title: Frequently Asked Questions
    titleOriginal: 常見問答
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/our-services/faq
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML rather than a search snippet. States full automatic driverless operation, average and maximum speeds; does not state a GoA classification or any signalling product name.
  - id: cj900-bureau-record
    title: "CJ900/CJ907 system-equipment and automatic-fare-collection contract"
    titleOriginal: CJ900標/CJ907標-機電系統工程、自動收費系統工程
    publisher: Taichung City Government Rapid Transit Systems Bureau (臺中市政府捷運工程局)
    url: https://tcrt.taichung.gov.tw/form/Details?Parser=2%2C6%2C45%2C%2C%2C%2C31
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML. Names the winning three-firm consortium, contract value, start date and the six named subsystems; does not split which firm supplied which subsystem, and does not name a branded signalling product.
  - id: alstom-blue-line-release
    title: "Alstom wins contract to deliver high-capacity driverless signalling system for Taichung Blue Line metro in Taiwan"
    titleOriginal: "Alstom wins contract to deliver high-capacity driverless signalling system for Taichung Blue Line metro in Taiwan"
    publisher: Alstom
    url: https://www.alstom.com/press-releases-news/2025/4/alstom-wins-contract-deliver-high-capacity-driverless-signalling-system-taichung-blue-line-metro-taiwan
    accessed: 2026-08-29
    kind: primary
    lang: en
    note: "Alstom's own 2025 press release about a separate Blue Line contract describes the Blue Line as using the same platform already in revenue service on the Green Line since 2021, naming that platform Urbalis CBTC - the first source found naming a specific signalling product for the Green Line. Direct fetch of alstom.com returned HTTP 403; retrieved via a read-proxy of the identical URL."
  - id: eettaiwan-alstom-blue-line
    title: "Taichung Metro Blue Line adopts CBTC driverless system, Alstom responsible for signalling"
    titleOriginal: 台中捷運藍線採用CBTC無人駕駛系統　阿爾斯通負責號誌建置
    publisher: EE Times Taiwan (電子工程專輯)
    url: https://www.eettaiwan.com/express/alstom_cbtc/
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: Trade-press coverage of the same Alstom announcement, directly attributed to Alstom's press release and a named Alstom executive; corroborates that the Urbalis system is currently applied to the Green Line. States no GoA number for either line.
  - id: cna-tmrt-attendant
    title: "Passengers question why the train still started after the crane arm fell; Taichung Metro: notification and impact timing were too close"
    titleOriginal: 乘客質疑吊臂掉落列車仍啟動 台中捷運：獲通報與撞擊時間太接近
    publisher: Central News Agency (中央社)
    url: https://www.cna.com.tw/news/asoc/202305100384.aspx?topic=4206
    accessed: 2026-08-29
    kind: secondary
    lang: zh-Hant
    note: Quotes a named TMRT spokesperson directly stating every driverless train carries an on-board attendant and that the train's front carries a track-obstacle-detection system, in response to a May 2023 incident where a collapsed crane arm struck a Green Line train.
---

## Driverless, in the operator's own words — not in an industry grade

Taichung Metro's own FAQ describes the Green Line's electric multiple units
as running under "全自動無人駕駛" (full automatic driverless operation), with
an average operating speed of 28.4 km/h and a maximum cruising speed of 75
km/h.[^tmrt-faq] This is the operator's own plain-language claim. It is not
accompanied anywhere on that page by a formal Grade of Automation (GoA)
number — no GoA4, no GoA2 — and this page does not supply one on the
operator's behalf. The automation grade is published here as TBC rather
than as an inferred industry classification.

## One contract, six subsystems, no named signalling product

The Green Line's entire system-equipment package — from the Beitun depot to
G17 — was built under a single contract, CJ900/CJ907, covering the depot,
the operations control centre and six named subsystems: the Operation
Control System (行車監控系統, OCS), the Automatic Fare Collection System
(自動收費系統, AFC), the Communication System (通訊系統, COM), Depot
Equipment (機廠維修設備, DEQ), the Electric Multiple Unit System (電聯車系統,
EMU) and the Power Supply System (供電系統, PWR).[^cj900-bureau-record] The
Operation Control System is the closest named equivalent, in the bureau's
own vocabulary, to what this project's other operator pages call
"signalling" — but no subsystem here carries a specific branded product
name, unlike TRA's, KRTC's or TYMC's technology pages, each of which named
at least one.

The contract was won by a three-firm joint venture — Kawasaki Heavy
Industries of Japan, Alstom Transport of France, and the domestic China
Engineering Corporation (中鼎工程) — for approximately NT$10.908 billion,
starting 21 April 2011.[^cj900-bureau-record] The bureau's own project page
names the consortium against the whole six-subsystem contract scope. It
does not state which firm supplied the Operation Control System
specifically.[^cj900-bureau-record]

## The product name, from the vendor's own later announcement

Alstom itself named a product for the Green Line, though not in the
bureau's original contract record: a 2025 press release about a separate
Blue Line contract describes the Blue Line as running "the same successful
platform" already in revenue service on the Green Line since 2021, naming
that shared platform Urbalis CBTC.[^alstom-blue-line-release] Trade-press
coverage of the same announcement, checked against its own claimed
attribution, corroborates that the Urbalis system is applied to the Green
Line.[^eettaiwan-alstom-blue-line] Neither source commits to a specific
product generation — Alstom's release separately names the newer
"Urbalis Forward" only for a different set of Taipei lines, not for
Taichung's Green Line — so this page reports "Urbalis CBTC" as the family
name and leaves the specific generation TBC rather than guessing which one
applies.[^alstom-blue-line-release]

A 2026 news article quoting the bureau's own director states a formal
GoA4 classification for the *Blue Line* specifically, but does not extend
that number to the Green Line in the same article, and no source read for
this page states a GoA number for the Green Line
itself.[^eettaiwan-alstom-blue-line] A separate news report quotes a named
TMRT spokesperson confirming every driverless Green Line train carries an
on-board attendant, in the context of a May 2023 incident where a
collapsed construction-crane arm struck a train.[^cna-tmrt-attendant] An
on-board attendant is circumstantial evidence against classifying the
line as unattended (GoA4/UTO), since that grade generally implies no
staff on board at all — but no source states that conclusion explicitly,
so this page reports the attendant fact and leaves the GoA question
TBC rather than inferring a grade from it.[^cna-tmrt-attendant]

## Remaining gaps

The specific Alstom product generation used on the Green Line (as opposed
to the "Urbalis CBTC" family name, now sourced) remains TBC. Which
CJ900/CJ907 consortium member supplied the Operation Control System is
confirmed as Alstom only via a 2025 marketing statement about a later,
separate contract, not the bureau's own original contract-award
record.[^alstom-blue-line-release] A
formal GoA classification for the Green Line itself is TBC — the operator
states driverless operation in plain language, a 2026 article gives GoA4
for the separate Blue Line only, and an on-board attendant is documented
without either source drawing the GoA3-versus-GoA4 conclusion that
implies.
