---
title: Taipei-region metro electrification
summary: Voltage, collection method and traction-substation boundaries across Taipei Metro, New Taipei Metro and the Airport MRT.
order: 6
updated: 2026-08-27
facts:
  - label: Taipei Metro traction standard
    value: 750 V DC third rail
    source: dorts-power-general
  - label: Taipei Metro rectifier basis
    value: 24-pulse on high-capacity systems and 12-pulse on medium-capacity systems
    source: dorts-power-substations
  - label: New Taipei Metro steel-wheel systems
    value: Circular and Sanying use 750 V DC third rail
    source: ntmc-train-specs
  - label: New Taipei light rail
    value: 750 V DC overhead line with lithium-battery energy storage
    source: ntmc-train-specs
  - label: Airport MRT collection and voltage
    value: TBC — official Railway Bureau pages publish both 750 V DC lower-contact third rail and 1,500 V DC overhead descriptions
    source: rb-airport-power
  - label: Current line-by-line traction asset register
    value: TBC
specs:
  - label: High-capacity traction-substation spacing
    value: 1.7–2
    unit: km, approximate design spacing
    source: dorts-power-substations
  - label: Medium-capacity traction-substation spacing
    value: 1–3.5
    unit: km, approximate design spacing
    source: dorts-power-substations
  - label: Wenhu incoming supply
    value: Dual-circuit incoming supply stepped through distribution to conductor rail
    unit: 161 kV → 22 kV → 750 V DC
    source: dorts-wenhu-power
  - label: Airport technical-page equipment count
    value: Airport example substation count
    unit: 3 BSS / 27 TSS / 22 SSS
    source: rb-airport-power
sources:
  - id: dorts-power-general
    title: Practical metro power-supply systems — DC traction supply
    titleOriginal: 捷運供電系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no24/files/basic-html/page364.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full DORTS page describes 750 V DC third-rail traction, 22 kV transformer/rectifier conversion, rail return current and the 24/12/6-pulse distinction."
  - id: dorts-power-substations
    title: Practical metro power-supply systems — traction substations
    titleOriginal: 捷運供電系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no24/files/basic-html/page81.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full DORTS page gives approximate high- and medium-capacity traction-substation spacing, the open-ring 22 kV feed and the high-capacity 24-pulse 750 V DC third-rail arrangement."
  - id: dorts-wenhu-power
    title: Electromechanical planning and design — Wenhu power supply
    titleOriginal: 臺北捷運機電系統精進軌跡尋蹤—機電規劃設計之蛻變、創新與成長
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/JRTST/ebook/no48/files/basic-html/page139.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full DORTS technical-journal page describes the 161 kV dual-circuit intake, 22 kV distribution and conversion to 750 V DC conductor-rail supply, including centralised diesel emergency supply for high-capacity systems."
  - id: ntmc-train-specs
    title: Train introduction
    titleOriginal: 列車介紹
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?node=10012
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The current full operator page specifies 750 V DC third rail for Circular and Sanying trains and 750 V DC overhead line/lithium-battery storage for the Danhai and Ankeng light-rail trains."
  - id: rb-airport-power
    title: Power system
    titleOriginal: 電力系統
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/zh-TW/main/main_71/main_80/main_87/main_92/
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full Railway Bureau technical page describes domestic metro 750 V DC third rail as the mainstream and says the operating Airport MRT uses a 750 V DC lower-contact third rail, with 3 BSS, 27 TSS and 22 SSS."
  - id: rb-airport-project
    title: Taiwan Taoyuan International Airport Access MRT system construction project
    titleOriginal: 臺灣桃園國際機場聯外捷運系統建設計畫
    publisher: Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)
    url: https://www.rb.gov.tw/zh-TW/main/main_28/20250505_152320/20251104_134001/20250505_155203/
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full Railway Bureau project overview lists the Airport MRT core electrical system as 1,500 V DC overhead catenary; it conflicts with the Bureau’s separate technical power page and is retained as a published project-description value."
---

Electrification is another place where “Taipei Metro” is too broad a label.
The Taipei high-capacity and medium-capacity metro systems are described around
750 V DC traction, but New Taipei’s light rail uses a different collection
arrangement and the Airport MRT has conflicting official descriptions.[^dorts-power-general][^ntmc-train-specs][^rb-airport-power][^rb-airport-project]

## Taipei Metro’s 750 V third rail

DORTS describes Taipei Metro traction as 750 V DC third-rail supply.[^dorts-power-general] The
traction current is produced from a 22 kV feed by transformer and rectifier
equipment, delivered to the positive conductor rail and collected by the train’s
brushes; return current flows through the running rails to the rectifier’s
negative side.[^dorts-power-general] “Third rail” here means a live conductor
beside the running rails, not a separate vehicle power standard.[^rb-airport-power]

The power-supply design distinguishes capacity classes in the rectifier stage.
DORTS specifies 24-pulse rectifiers for high-capacity systems, 12-pulse
rectifiers for completed and subsequent medium-capacity systems, and generally
6-pulse rectifiers in depot maintenance workshops.[^dorts-power-general] The
same manual explains the engineering reason: higher pulse counts reduce the
harmonic content produced on the AC side.[^dorts-power-general]

Traction substations are not simply placed at every station.[^dorts-power-substations] DORTS gives an
approximate 1.7–2 km spacing for high-capacity lines and roughly 1–3.5 km for
medium-capacity lines, with the interval assessed against train spacing and
traction demand.[^dorts-power-substations] Its 22 kV distribution uses an
open-ring arrangement with two cable paths, allowing a failed feed to be
isolated and supply to be transferred from the other path.[^dorts-power-substations]
These are published design rules, not a current station-by-station inventory.

## Wenhu’s intake and conversion chain

The Wenhu power account shows the upstream chain for one Taipei medium-capacity
line. Taipower supplies two 161 kV circuits to the metro main substation; that
substation steps the voltage down to 22 kV for station and traction substations,
and the traction substations rectify it to 750 V DC for the conductor rail.[^dorts-wenhu-power]
The same account describes diesel generators providing emergency power, with
high-capacity emergency supply handled centrally by power-supply sections.[^dorts-wenhu-power]

The 161 kV, 22 kV and 750 V values describe stages of the supply chain, not
three alternative traction voltages.[^dorts-wenhu-power] A current line-level
register of incoming circuits, substations, section boundaries, isolation
switches and equipment replacements is not published in the sources used here.

## New Taipei Metro and light rail

New Taipei Metro’s current train-specification page gives the Circular and
Sanying steel-wheel systems 750 V DC third-rail supply.[^ntmc-train-specs] This
matches the third-rail family described in the DORTS metro-power manual, while
the operator’s page supplies the line-specific vehicle boundary.[^dorts-power-general][^ntmc-train-specs]

The Danhai and Ankeng light-rail trains use 750 V DC overhead line together with
lithium-battery energy storage.[^ntmc-train-specs] The same operator page
describes them as five-car, 100%-low-floor, staffed light-rail trains and gives
different operating speeds for sections with and without overhead line; that is
why the light-rail collection method should not be collapsed into the metro
third-rail label.[^ntmc-train-specs]

## Airport MRT: an official conflict

The Railway Bureau’s technical power page says domestic high- and
medium-capacity metro systems use third rail as the mainstream arrangement.[^rb-airport-power] It
states that the operating Airport MRT uses a 750 V DC lower-contact third rail.
It also describes three main substations, 27 traction substations and 22 station
substations for the example system.[^rb-airport-power]

The Bureau’s separate Airport MRT project overview gives a different value in
its core-electromechanical summary: 1,500 V DC supplied through overhead
catenary.[^rb-airport-project] Both are official Bureau pages, and the project
overview is itself maintained as a project description. The current page
therefore reports the Airport MRT collection method and voltage as TBC rather
than silently choosing one record. A signed as-built electrical specification,
operator asset register or dated acceptance record would settle the conflict.

## What remains open

The published evidence supports a 750 V DC third-rail standard for Taipei Metro,
750 V DC third rail for the Circular and Sanying trains, and 750 V DC overhead
plus storage for Danhai and Ankeng light rail.[^dorts-power-general][^ntmc-train-specs]
It does not support a single reconciled Airport MRT value because the Railway
Bureau’s two pages disagree.[^rb-airport-power][^rb-airport-project] It also does
not provide a current line-by-line register of traction substations, conductor
rail sections, overhead gaps, rectifier replacements, stray-current monitoring
or emergency-power allocation. Those remain TBC rather than being inferred from
the general 750 V standard.
