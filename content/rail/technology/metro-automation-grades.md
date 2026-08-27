---
title: Taipei-region metro automation grades
summary: What GoA0 through GoA4 mean on Taipei-region railways, and which current lines have a published automation grade.
order: 4
updated: 2026-08-27
facts:
  - label: GoA scale
    value: Five levels, GoA0 through GoA4, from manual operation to unattended operation
    source: dorts-goa-table
  - label: Published GoA4 lines
    value: Wenhu, Circular and Sanying
    source: dorts-goa-summary
  - label: Published GoA2 examples
    value: Tamsui-Xinyi and Bannan
    source: ntpc-goa-guide
  - label: Published GoA1 examples
    value: Danhai and Ankeng light rail
    source: ntpc-goa-guide
  - label: Airport MRT formal grade
    value: TBC
specs:
  - label: GoA2 operating arrangement
    value: ATP and ATO with a driver supervising and controlling train operation
    source: dorts-goa-table
  - label: GoA4 operating arrangement
    value: Unattended or unmanned train operation
    source: dorts-goa-table
  - label: GoA4 control family in the Circular and Sanying records
    value: CBTC
    source: ntpc-goa-guide
sources:
  - id: dorts-goa-table
    title: Practical CBTC train-control technology — IEC 62290-1 automation-level comparison
    titleOriginal: 捷運行車監控系統通訊式列車控制技術
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no23/files/basic-html/page29.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full DORTS page reproduces the IEC 62290-1 automation comparison and defines GoA0 through GoA4, including SCO, STO, DTO and UTO operating arrangements."
  - id: dorts-goa-summary
    title: Practical signalling systems for Taipei Metro — summary
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page341.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full summary page describes the transition from early high-capacity GoA2 operation with ATO/ATP and a driver to CBTC GoA4 unattended operation."
  - id: dorts-wenhu-goa
    title: Practical metro train-car systems — unattended train-control and management
    titleOriginal: 捷運電聯車實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no21/files/basic-html/page202.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full DORTS page says Wenhu was planned from the beginning as a fully automatic unattended system and describes the transition from GoA2 to GoA4."
  - id: dorts-circular-goa
    title: Fully automatic CBTC — the Taipei Circular Line example
    titleOriginal: 全自動通訊式列車控制（Communication-Based Train Control）如何實現—以臺北捷運環狀線為例
    publisher: Taipei City Government Department of Rapid Transit Systems, Electromechanical Systems Engineering Office (臺北市政府捷運工程局機電系統工程處)
    url: https://ebook.dorts.gov.taipei/JRTST/ebook/no56/files/basic-html/page47.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full 2021 technical-journal abstract identifies the Circular Line first phase as CBTC GoA4 and as Taiwan's second CBTC GoA4 system after Wenhu."
  - id: ntpc-goa-guide
    title: How smart is the metro? Understanding GOA automation levels
    titleOriginal: 捷運有多聰明？認識GOA自動駕駛等級
    publisher: New Taipei City Government Department of Rapid Transit Systems (新北市政府捷運工程局)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/0g4d6N1Dd5Db?page=1
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full 15 July 2026 government explainer assigns GoA1 to Danhai and Ankeng, GoA2 examples to Tamsui-Xinyi and Bannan, and GoA4 to Circular and Sanying; it also describes the GoA4 CBTC/no-driver arrangement."
  - id: tymc-automation-fallback
    title: A14 signalling-side equipment temporary fault notice
    titleOriginal: 5月6日機場捷運A14站號誌道旁設備短暫異常情形
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/news/show-2322-1.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full 6 May 2026 operating notice records that drivers used manual driving through a signalling fault and that automatic driving resumed after repair; it does not assign a formal GoA grade."
---

GoA, or Grade of Automation, describes which functions are performed by the
system and which remain with operating staff.[^dorts-goa-table] It is therefore
not a synonym for CBTC, moving block or driverless as a loose adjective.[^dorts-goa-table]
A line can have an automated train-control function without the source having
published a formal GoA label for its complete current operation.[^dorts-goa-summary]

## The five grades

The DORTS CBTC manual reproduces an IEC 62290-1 comparison from GoA0 through
GoA4.[^dorts-goa-table]

| Grade | Operating arrangement | What the source assigns to the system |
|---|---|---|
| GoA0 | Visual operation | The operator performs train operation under system supervision.[^dorts-goa-table] |
| GoA1 | Non-automatic train operation | The driver operates the train while the system provides safety functions.[^dorts-goa-table] |
| GoA2 | Semi-automatic train operation | ATP and ATO operate with a driver supervising and controlling the train.[^dorts-goa-table] |
| GoA3 | Driverless train operation | The train operates without a traditional driver, while an attendant may remain aboard.[^dorts-goa-table] |
| GoA4 | Unattended or unmanned train operation | The system performs the listed train-operation functions without an onboard driver or attendant being required for normal operation.[^dorts-goa-table] |

This distinction matters for Taipei because a signalling supplier, a block
method and a staffing arrangement describe different layers of the railway.[^dorts-goa-table]
DORTS's summary describes the earlier high-capacity pattern as GoA2 with
ATO/ATP and a driver, and the later fully automatic pattern as CBTC GoA4.[^dorts-goa-summary]

## Published current-line assignments

Wenhu is documented as a GoA4 case. DORTS says the line was planned from its
1996 opening as a fully automatic unattended system and later describes its
vehicle and train-management systems in that context.[^dorts-wenhu-goa]
The source does not make the original Muzha VAL equipment a separate current
GoA grade; the page therefore records Wenhu's operating architecture rather
than inventing a grade for a superseded historical system.[^dorts-wenhu-goa]

The Circular Line first phase is also explicitly GoA4.[^dorts-circular-goa] A DORTS technical-journal
article says it entered revenue service on 31 January 2020 with CBTC at the
highest GoA4 level and identifies it as Taiwan's second CBTC GoA4 system after
Wenhu.[^dorts-circular-goa] New Taipei's current explainer assigns the Circular
Line and Sanying Line to GoA4 and describes their normal operation as CBTC-based
unattended train running without a driver.[^ntpc-goa-guide]

The same New Taipei government explainer gives the Danhai and Ankeng light-rail
lines as GoA1 examples, meaning that a driver operates the train while the
system assists safety.[^ntpc-goa-guide] It gives Tamsui-Xinyi and Bannan as GoA2
examples, where automatic acceleration, braking and platform stopping coexist
with a driver who supervises, controls doors and handles abnormalities.[^ntpc-goa-guide]
That assignment is consistent with DORTS's broader description of early
high-capacity systems as GoA2, but this page does not extend the New Taipei
article's two named examples to every high-capacity line.[^dorts-goa-summary][^ntpc-goa-guide]

## What remains unlabelled

The opened primary sources do not publish a formal current GoA grade for the
Airport MRT.[^tymc-automation-fallback] Taoyuan Metro's 6 May 2026 operating
notice records a signalling-side fault, a temporary switch to manual driving,
and restoration of automatic driving after repair.[^tymc-automation-fallback]
That is evidence about a fallback operating mode, not enough to classify the
nominal system as GoA2, GoA3 or GoA4.[^tymc-automation-fallback]

The public record also does not provide a complete current grade register that
names every route, branch, fleet and operating mode together.[^dorts-goa-summary][^ntpc-goa-guide]
The grades above are consequently reported only where an official source names
the line or system; the remaining line-level labels stay TBC.
