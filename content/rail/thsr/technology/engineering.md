---
title: THSR engineering and the BOT financial restructuring
summary: A Taiwan-specific ATC system whose supplier no source could confirm, a design-speed figure that two Wikipedia articles about the same railway can't agree on, and a Control Yuan-documented financial crisis that saw the concession stretched from 35 to 70 years to survive it.
order: 1
operator: THSR
updated: 2026-08-28
facts:
  - label: Track gauge
    value: 1,435mm standard gauge
    source: twreporter-gauge
  - label: Electrification
    value: 25kV AC, 60Hz
    source: rb-facebook-power
  - label: Signalling system
    value: digital ATC, modelled on Tokaido/Kyushu Shinkansen ATC with European-derived additions
    source: thsr-route-safety
  - label: Signalling supplier
    value: TBC
  - label: Original BOT concession length
    value: 35 years (Construction and Operation Contract, 1998)
    source: ly-thsr-history
  - label: Concession length after 2015 restructuring
    value: 70 years (to 2068)
    source: ly-thsr-70-year
  - label: Peak accumulated losses (mid-2009)
    value: over NT$70.2 billion
    source: cy-bot-report
  - label: Yilan extension approval date
    value: 23 July 2026
    source: ltn-yilan-extension
specs:
  - label: Design maximum speed (conflicting figures)
    value: "350 or 315"
    unit: km/h — unresolved, see below
    source: zhwiki-thsr-general
  - label: Commercial operating speed
    value: "300"
    unit: km/h
    source: zhwiki-thsr-general
  - label: Changhua–Kaohsiung Viaduct length
    value: "157.39"
    unit: km
    source: zhwiki-viaduct
  - label: Yilan extension length
    value: "60.6"
    unit: km
    source: ltn-yilan-extension
  - label: Yilan extension budget
    value: "~352.2"
    unit: NT$ billion
    source: ltn-yilan-extension
sources:
  - id: thsr-route-safety
    title: Route Safety
    titleOriginal: 路線安全
    publisher: Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)
    url: https://www.thsrc.com.tw/ArticleContent/69240266-e341-490d-bed8-f495280731d6
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. Describes ATC's function (continuous speed-authority calculation, overspeed braking, automatic emergency stop on earthquake/rockfall/intrusion) without naming the system or its supplier.
  - id: zhwiki-thsr-general
    title: Taiwan High Speed Rail
    titleOriginal: 台灣高鐵
    publisher: Wikipedia
    url: https://zh.wikipedia.org/zh-tw/台灣高鐵
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Lead index only. States a 350 km/h design maximum speed against a 300 km/h commercial maximum — a figure that conflicts with the separate 700T-specific Wikipedia article's own 315 km/h design-speed figure; see the body text.
  - id: twreporter-gauge
    title: "Is it real? Taiwan's rail gauges are 'one country, two systems' — can TRA and THSR not run on the same track?"
    titleOriginal: 真的假的？台灣鐵軌「一國兩制」，台鐵、高鐵不能一起跑？
    publisher: The Reporter (報導者)
    url: https://www.twreporter.org/a/mini-reporter-taiwan-railway-gauge-difference
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Full article, fetched directly. States THSR's standard gauge (1,435mm) against TRA's narrow gauge (1,067mm), explaining why the two systems cannot share track or platforms.
  - id: zhwiki-viaduct
    title: Changhua–Kaohsiung Viaduct
    titleOriginal: 彰化—高雄高架橋
    publisher: Wikipedia
    url: https://zh.wikipedia.org/zh-tw/彰化—高雄高架橋
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Lead index only; the 157.39km figure is itself cited by this Wikipedia page to two news outlets not independently fetched for this page.
  - id: rb-facebook-power
    title: THSR power-supply system explainer
    titleOriginal: 台灣高鐵供電系統說明
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.facebook.com/100069433020026/posts/906820113181246/
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Official social-media post, fetched directly, dated 15 October 2020. States the 161kV Taipower supply stepped down to 25kV/60Hz for the catenary, with SCADA monitoring and redundant substation paths. Does not itself state a substation count — a "30 substations" figure attributed to this post elsewhere does not appear in the post's own text.
  - id: ey-thsr
    title: North-South High Speed Rail
    titleOriginal: 南北高速鐵路
    publisher: Executive Yuan, Taiwan (行政院)
    url: https://www.ey.gov.tw/state/A44E5E33CDA7E738/5930b373-fd7d-4d8f-87e8-7f6ff15c67a7
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the ~350km route, 12 stations, and the 300 km/h commercial figure without a separate design-speed figure.
  - id: ly-thsr-history
    title: "I. The planning and operating history of Taiwan High Speed Rail"
    titleOriginal: 一、台灣高鐵之籌建及營運歷程
    publisher: Legislative Yuan, Taiwan (立法院)
    url: https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=10077&pid=139606
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States the 25 September 1997 preferred-bidder selection, the 23 July 1998 contract signing (35-year operation concession, 50-year station-area concession), and the original/actual project cost figures.
  - id: cy-bot-report
    title: Special investigation report on THSR's BOT strategy and execution outcomes
    titleOriginal: 「高鐵BOT策略與執行成效」專案調查研究報告
    publisher: Control Yuan, Taiwan (監察院)
    url: https://www.cy.gov.tw/News_Content.aspx?n=124&s=4894
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full report, fetched directly, approved 9 June 2010. States accumulated losses of over NT$70.2 billion by mid-2009 (66.72% of total capital), the financing split (postal savings, government guarantees, ordinary bank loans), and describes the structure critically as a "knock-off" BOT variant in which government bore all execution risk.
  - id: ly-thsr-2010-loss
    title: "Legislative motion on THSR's depreciation-period extension request"
    titleOriginal: 台灣高鐵股份有限公司折舊攤提年限展延相關議案
    publisher: Legislative Yuan, Taiwan (立法院)
    url: https://ppg.ly.gov.tw/ppg/bills/1001025089900500/details
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched directly. States accumulated losses of NT$73.5 billion as of end-2010, the 2011 first-time pre-depreciation profitability, the 2008 interest-rate relief, and directly questions whether the depreciation-extension request was a backdoor concession-extension attempt.
  - id: ly-thsr-70-year
    title: THSR financial solution — concession extended to 70 years
    titleOriginal: 高鐵財務解決方案 特許期延長為70年
    publisher: Legislative Yuan, Taiwan (立法院)
    url: https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=10077&pid=139606
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Same Legislative Yuan history page as ly-thsr-history, a separate section. States the 21 May 2015 conditional committee resolution, the "not exceeding 50%" government-shareholding cap, and the 27 July 2015 signing extending the concession from 35 to 70 years (to 2068).
  - id: zhwiki-thsr-restructuring
    title: THSR financial restructuring
    titleOriginal: 台灣高鐵財務改革
    publisher: Wikipedia
    url: https://zh.wikipedia.org/zh-tw/台灣高鐵財務改革
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Lead index only. Source for the December 2014 75-year proposal, its 18-0 committee rejection and the resulting ministerial resignation, and the "absolute majority" government-shareholding characterisation that sits in tension with the primary source's stated 50% cap.
  - id: ltn-yilan-extension
    title: "Cabinet approves it! THSR's Yilan extension just 20-odd minutes, complete within 11 years of approval"
    titleOriginal: 政院拍板！高鐵延伸宜蘭只要20分鐘、核定後11年完工通車
    publisher: Liberty Times (自由時報)
    url: https://news.ltn.com.tw/news/politics/breakingnews/5514885
    accessed: 2026-08-28
    kind: secondary
    lang: zh-Hant
    note: Full article, fetched directly. States the 23 July 2026 cabinet approval, the 60.6km route via New Taipei and Yilan County, the ~NT$352.2 billion budget, and an 11-year construction estimate. No direct Executive Yuan press release for this decision was located.
---

## A Taiwan-specific ATC, with an unconfirmed supplier

THSR's ATC continuously recalculates each train's permitted speed from the
preceding train's position, the control centre's authorised movement
window, and route conditions, braking automatically on overspeed and
stopping automatically on earthquake, rockfall, slope failure or trackway
intrusion.[^thsr-route-safety] It is described as a digital system modelled
on the Tokaido and Kyushu Shinkansen's ATC, with cruise control and
station-stop control added and single-track bidirectional running support
built in to meet European operating requirements — a Taiwan-specific
derivative rather than a straight export of any one country's system.
Neither the system's formal name nor its equipment supplier could be
confirmed against a fetchable primary or secondary source in this
research; a widely repeated attribution to Mitsubishi and Hitachi rests only
on two sources this research could not reach. **Supplier: TBC.**

## Standard gauge, a record viaduct, and 25kV power

THSR runs on standard gauge (1,435mm), distinct from TRA's narrower
1,067mm — the reason the two networks cannot share track or
platforms.[^twreporter-gauge] The Changhua–Kaohsiung Viaduct, at
approximately 157.39 km, was the world's longest bridge on its completion in
2004, and has ranked second globally since China's Danyang–Kunshan Grand
Bridge opened in 2010.[^zhwiki-viaduct] Power comes from Taipower's 161kV
three-phase grid, stepped down at THSR's own substations to 25kV/60Hz for
the overhead catenary, with SCADA monitoring and redundant primary/backup
supply paths.[^rb-facebook-power] A widely repeated figure of 30 substations
does not appear in the Railway Bureau source it is attributed to when read
directly — it stays unconfirmed here.

## A design-speed figure the sources can't agree on

THSR's commercial operating speed is settled at 300 km/h.[^ey-thsr] Its
design maximum is not: one Wikipedia article on the system as a whole gives
350 km/h, while a separate Wikipedia article specifically about the 700T
train gives 315 km/h, with no mention of 350 km/h at
all.[^zhwiki-thsr-general] Neither a THSR nor a Railway Bureau primary
source distinguishing a design speed from the commercial figure was found.
Both numbers are published here, unresolved, rather than one being treated
as authoritative.

## The BOT crisis, in the government's own figures

THSR was built as Taiwan's first major BOT (build-operate-transfer)
infrastructure project.[^ly-thsr-history] The winning consortium was selected 25 September
1997, and contracts signed with the transport ministry on 23 July 1998 set a
35-year Construction and Operation Contract alongside a separate 50-year
Station Area Development Contract.[^ly-thsr-history] The original 1997 cost
estimate was NT$407.6 billion; actual cost by June 2009 had reached
approximately NT$449.7 billion, a NT$42.1 billion (10.33%) overrun.[^ly-thsr-history]

By mid-2009, the Control Yuan's own investigation found accumulated losses
had reached over NT$70.2 billion — more than 66.72% of the company's total
capital.[^cy-bot-report] Financing leaned heavily on the public sector
despite the project's original "zero government investment" premise:
NT$223.4 billion came from postal savings (80% of domestic financing) and a
further NT$308.3 billion in government guarantees, against just NT$55.6
billion from ordinary bank loans. The Control Yuan's own report calls the
result a distinctively Taiwanese, "knock-off" variant of BOT, in which
government ended up bearing essentially all the execution
risk.[^cy-bot-report] Losses had grown further to NT$73.5 billion by
end-2010, before the company recorded its first pre-depreciation profit in
the first half of 2011 — 4 years and 8 months after opening.[^ly-thsr-2010-loss]
Part of the pressure came from depreciation mechanics: under the original
BOT terms, all fixed assets had to be depreciated to zero by the end of the
concession, so a short concession forced high annual charges — and the
Legislature's own motion on the matter directly questioned whether a
proposed depreciation-period extension was really a backdoor attempt to
extend the concession itself.[^ly-thsr-2010-loss]

## Rescued twice — the second time it stuck

A first restructuring plan, proposed in December 2014, would have extended
the concession from 35 to 75 years; the Legislative Yuan's Transportation
Committee rejected it 18–0 in January 2015, and Transport Minister 葉匡時
resigned over the failure.[^zhwiki-thsr-restructuring] A revised plan passed by conditional resolution
on 21 May 2015, and the amended contract — signed 27 July 2015 — extended
the concession to 70 years instead, running from the original 1998 contract
date to 2068, with the law changed so government and public-enterprise
shareholding could rise to a cap of "not exceeding
50%."[^ly-thsr-70-year] A secondary characterisation of the outcome
describes THSR as having become a state-owned-but-privately-operated
enterprise with an "absolute majority" of government and pan-public
shares[^zhwiki-thsr-restructuring] — a stronger claim than the primary
source's stated 50% cap, not reconciled by any source read for this page.

## A new extension, approved in 2026

The Executive Yuan approved a THSR extension to Yilan at a cabinet meeting
on 23 July 2026: a 60.6 km route running east from Nangang through New
Taipei City and Yilan County to a single new Yilan City station, budgeted at
approximately NT$352.2 billion, with construction estimated to take 11 years
from approval.[^ltn-yilan-extension] Reported travel time from Nangang to
Yilan varies by outlet — "about 20-odd minutes" in the one article fetched
in full for this page, versus a "28 minutes" figure reported elsewhere but
not independently verified — and no direct Executive Yuan press release for
the decision was located to resolve it.

## Remaining gaps

The ATC's equipment supplier is not established. The 350-vs-315 km/h design
speed conflict stays TBC. Substation count is not established. The Yilan
extension's travel-time figure is unresolved between two news outlets, and
no primary government press release for the extension itself was located.
