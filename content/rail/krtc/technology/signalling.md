---
title: Kaohsiung Metro signalling and automation grade
summary: Driver-operated track-circuit interlockings on the Red and Orange Lines since 2008, and a fully driverless Siemens CBTC system now under construction for the Yellow Line — two different technology generations, confirmed by the manufacturer itself for the newer one.
order: 1
operator: KRTC
updated: 2026-08-28
facts:
  - label: Red/Orange Line operation
    value: driver-operated; automatic between stations, manual doors/departure
    source: krtc-safety-measures
  - label: Gangshan-Luzhu extension signalling supplier
    value: Siemens (Germany)
    source: mtbu-gangshan-luzhu-signalling
  - label: Yellow Line signalling system
    value: Siemens Trainguard MT CBTC, GoA4
    source: siemens-yellow-line-press-release
  - label: Yellow Line scope
    value: 22.8 km, 23 stations, 25 trains
    source: siemens-yellow-line-press-release
specs:
  - label: YM01 (Yellow Line E&M) budget, per a named Bureau official
    value: approximately NT$43.499 billion
    source: yahoo-ym01-award
sources:
  - id: krtc-safety-measures
    title: Kaohsiung Metro Operational Safety Measures Explanation
    titleOriginal: 高雄捷運營運安全措施說明
    publisher: Kaohsiung Rapid Transit Corporation (高雄捷運股份有限公司)
    url: https://www.krtc.com.tw/Information/news_more?id=a1e62008f2ba41828481b5fa9d7797e5
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full operator page, published 2023-05-12, read directly. Describes automatic between-station running with manual driver control of doors and departure, and no trackside foreign-object detection because a driver is present.
  - id: mtbu-gangshan-luzhu-signalling
    title: Introduction to the Gangshan-Luzhu Extension Signalling System Architecture
    titleOriginal: 岡山路竹延伸線號誌系統架構簡介
    publisher: Kaohsiung City Government Mass Rapid Transit Bureau, Systems Engineering Section (高雄市政府捷運工程局系統工程科)
    url: https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=fb12bab3-733e-4218-9c6d-0375d3101dc9&id=34535d04-df4c-4b1f-a609-da31e86d91d0&PageType=1
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full page, published 2023-04-26, read directly. States Siemens supplies the extension's signalling and that it is track-circuit based because it extends the existing Red Line, expanding the R22 interlocking to cover new station RK1.
  - id: siemens-yellow-line-press-release
    title: "Siemens Mobility to provide CBTC signaling for the first driverless metro system in Kaohsiung, Taiwan"
    titleOriginal: "Siemens Mobility to provide CBTC signaling for the first driverless metro system in Kaohsiung, Taiwan"
    publisher: Siemens Mobility
    url: https://press.siemens.com/global/en/pressrelease/siemens-mobility-provide-cbtc-signaling-first-driverless-metro-system-kaohsiung-taiwan
    accessed: 2026-08-27
    kind: primary
    lang: en
    note: Full press release, published 2022-10-07, read directly. The equipment supplier's own statement about its Trainguard MT CBTC/GoA4 contract for the Yellow Line.
  - id: mtbu-yellow-line-vehicle-systems
    title: Introduction to the Kaohsiung Yellow Line EMU System's Electromechanical Equipment
    titleOriginal: 高雄黃線電聯車系統之機電設備簡介
    publisher: Kaohsiung City Government Mass Rapid Transit Bureau (高雄市政府捷運工程局)
    url: https://mtbu.kcg.gov.tw/Activities/C002100?CategoryID=fb12bab3-733e-4218-9c6d-0375d3101dc9&id=e7693a8c-cf09-4548-97bb-b2c4418e1be9&PageType=1
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: Full page, read directly. Confirms driverless operation for the Yellow Line in the Bureau's own words, though without using the "GoA4" numeral specifically.
  - id: yahoo-ym01-award
    title: "Kaohsiung Yellow Line electromechanical works: German Siemens-led team wins bid"
    titleOriginal: 高捷黃線機電工程 德西門子等團隊得標
    publisher: Commercial Times (工商時報), via Yahoo
    url: https://tw.stock.yahoo.com/news/高捷黃線機電工程-德西門子等團隊得標-201000863.html
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: News report carrying a direct on-the-record quote from the MRT Engineering Bureau's director; source for the evaluation-completion date and budget figure.
---

## Two generations, not one system upgraded

Kaohsiung Metro's original Red and Orange Lines, open since 2008, run with
drivers: trains run automatically between stations, but the driver
manually controls door closing and departure and can intervene or brake in
an emergency, and there is no trackside foreign-object-detection system
because a driver is expected to react instead.[^krtc-safety-measures] No
primary source read for this page applies a formal GoA number to this
operation — the description matches the standard industry definition of
GoA2, but that mapping is this page's own characterisation, not a quoted
classification.

The clearest evidence for what the Red/Orange system actually is comes from
the Gangshan–Luzhu extension's own engineering documentation: its signalling
is supplied by Siemens and is explicitly track-circuit based *because* it
extends the existing Red Line, not a newer overlay technology. The extension
adds interlocking equipment rooms in three stages, and the new section
beyond the old terminus is added by expanding the existing R22 interlocking
room to also cover the new station — extending the line's existing
architecture, not replacing it.[^mtbu-gangshan-luzhu-signalling]

## The Yellow Line is a different system entirely

The Yellow Line, under construction, will be Kaohsiung's first driverless
metro.[^siemens-yellow-line-press-release] Siemens Mobility's own press release states its Trainguard MT CBTC
signalling will run at GoA4 — full automated driverless operation — across
the line's full 22.8 km, 23 stations and 25 trains, delivered by a joint
venture of Siemens Mobility, ST Engineering Electronics and
Stadler.[^siemens-yellow-line-press-release] The Kaohsiung MRT Engineering
Bureau's own page separately confirms driverless operation for the Yellow
Line in its own words, though it does not itself use the "GoA4"
numeral.[^mtbu-yellow-line-vehicle-systems] News coverage citing the
Bureau's E&M-contract director puts the YM01 evaluation's completion at 17
August 2022 and its budget at approximately NT$43.499
billion.[^yahoo-ym01-award]

## Remaining gaps

The Red/Orange Line's signalling has no confirmed product/model name beyond
"Siemens." Whether it formally meets a GoA1 or GoA2 classification is not
stated by any primary source; this page does not assign it one. No
resignalling or upgrade history for the original 2008 system was found —
recorded as not found, not confirmed absent. The original 2001 Siemens
contract's exact scope rests only on an unverified secondary citation this
page could not confirm.
