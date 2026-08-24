---
title: Metro systems and operations
summary: Signalling, traction power, depots, service spacing, first and last trains, and platform doors across Taipei-region metro lines.
order: 1
updated: 2026-08-24
facts:
  - label: Traction standard
    value: 750 V DC third rail on Taipei high- and medium-capacity metro systems
    source: dorts-power-general
  - label: High-capacity signalling
    value: Alstom/GRS conventional fixed block with audio-frequency track circuits
    source: dorts-high-signal
  - label: Wenhu signalling
    value: Bombardier CITYFLO 650 moving-block CBTC
    source: dorts-cbtc-wenhu
  - label: Circular signalling
    value: Hitachi CBTC, unattended operation
    source: dorts-circular-signal
  - label: Current door register
    value: TBC at station level
  - label: Comparable design versus actual capacity
    value: TBC
specs:
  - label: Taipei Metro service day
    value: 06:00–24:00
    source: trtc-headways
  - label: Wenhu peak headway
    value: 2–4
    unit: min
    source: trtc-headways
  - label: Tamsui-Xinyi peak headway
    value: 6
    unit: min, with 3 min overlap
    source: trtc-headways
  - label: Songshan-Xindian peak headway
    value: 4–6
    unit: min, with 3 min overlap
    source: trtc-headways
  - label: Zhonghe-Xinlu peak headway
    value: 6
    unit: min, with 3 min overlap
    source: trtc-headways
  - label: Bannan peak headway
    value: 6
    unit: min, with 3 min overlap
    source: trtc-headways
sources:
  - id: dorts-high-signal
    title: Practical signalling systems for Taipei Metro
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page73.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Identifies the R, G, O and BL high-capacity signalling family as Alstom (formerly GRS), using conventional fixed blocks and audio-frequency track circuits."
  - id: dorts-cbtc-wenhu
    title: Practical signalling systems for Taipei Metro — Wenhu Line
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page225.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Describes the Wenhu Line CITYFLO 650 moving-block coordinate system, roughly half-second position updates and ATP/ATO/ATS."
  - id: dorts-circular-signal
    title: Practical signalling systems for Taipei Metro — Circular Line
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page292.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Identifies Hitachi Rail Transportation Signalling and a driverless CBTC system for the Circular Line, and says the same signalling approach is used on the Sanying Line."
  - id: dorts-circular-detail
    title: Practical signalling systems for Taipei Metro — Circular Line equipment
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page303.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The detailed Circular Line signalling page identifies interlocking, track circuits and the Faiveley platform-door equipment.
  - id: ntmc-trains
    title: Train introduction
    titleOriginal: 列車介紹
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?node=10012
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Publishes the Circular, Sanying, Danhai and Ankeng train families, including CBTC, third-rail and overhead/energy-storage power, train formation and operating mode."
  - id: motc-airport-cbtc
    title: Planning and design of the Airport MRT train-control system and related interfaces
    titleOriginal: 捷運列車控制系統及相關界面之規劃設計
    publisher: Ministry of Transportation and Communications (交通部)
    url: https://report.ndc.gov.tw/ReportFront/PageSystem/reportFileDownload/C09603079/001
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The government report specifies CBTC with ATP, ATS and ATO for the Airport MRT project.
  - id: trsc-airport
    title: Airport MRT electric multiple unit
    titleOriginal: 桃園機場捷運電聯車
    publisher: Taiwan Rolling Stock Co., Ltd. (台灣車輛股份有限公司)
    url: https://www.trsc.com.tw/train/tran-58acf47251060
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The manufacturer page gives the Airport MRT train's 750 V DC third-rail supply and CBTC/ATP safety system.
  - id: dorts-power-general
    title: Practical power-supply systems for Taipei Metro
    titleOriginal: 捷運供電系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no24/files/basic-html/page364.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Establishes the 750 V DC third-rail standard and the 22 kV transformer/rectifier arrangement, including the distinction between 24-pulse and 12-pulse systems."
  - id: dorts-power-substations
    title: Practical power-supply systems for Taipei Metro — substations
    titleOriginal: 捷運供電系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no24/files/basic-html/page81.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Gives design spacing for high- and medium-capacity traction substations and the open-ring 22 kV distribution arrangement.
  - id: dorts-wenhu-power
    title: Electromechanical planning and design — Wenhu power supply
    titleOriginal: 臺北捷運機電系統精進軌跡尋蹤—機電規劃設計之蛻變、創新與成長
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/JRTST/ebook/no48/files/basic-html/page139.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Details the Wenhu Line's 161 kV dual-circuit incoming supply, 22 kV distribution and conversion to 750 V DC conductor-rail power.
  - id: dorts-depots
    title: Practical metro depot equipment
    titleOriginal: 捷運機廠設備實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no27/files/basic-html/page27.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Identifies the Beitou, Xindian, Tucheng, Nangang, Luzhou, Xinzhuang and Zhonghe main, secondary and storage functions.
  - id: dorts-depot-capacity
    title: Metro network planning practice — depot planning
    titleOriginal: 捷運路網規劃實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no1/files/basic-html/page202.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: The depot table records planning capacities and Wenhu/Circular depot roles; it is not a current unit-to-depot register.
  - id: tymc-route
    title: Route description
    titleOriginal: 路線說明
    publisher: Taoyuan Metro Corporation (桃園大眾捷運股份有限公司)
    url: https://www.tymetro.com.tw/tymetro-new/tw/_pages/travel-guide/road03.php
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Identifies Qingpu and Luzhu as the Airport MRT maintenance depots.
  - id: trtc-headways
    title: Route and headway information
    titleOriginal: 路線及班距
    publisher: Taipei Rapid Transit Corporation (臺北大眾捷運股份有限公司)
    url: https://www.metro.taipei/cp.aspx?n=ead981369a065968&s=C58C8C2C6419810F
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The route pages publish 06:00–24:00 operation and time-of-day headways for all five TRTC route families; the page URL is the Wenhu entry, with the companion line URLs recorded in the research file."
  - id: ntmc-headways
    title: Frequently asked questions — service interval and hours
    titleOriginal: 常見問題
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?node=10005
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Publishes Danhai/Ankeng light-rail hours, peak and off-peak intervals, branch service patterns and the open-platform operating model.
  - id: ntmc-ankeng-headway
    title: Ankeng LRT commuter ridership grows steadily
    titleOriginal: 安坑輕軌通勤運量穩定增長
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=712
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Gives Ankeng peak and off-peak service intervals and 06:00–24:00 service hours.
  - id: tdx-first-last
    title: TDX API service documentation
    titleOriginal: TDX API 服務
    publisher: Ministry of Transportation and Communications (交通部)
    url: https://tdx.transportdata.tw/api-service/swagger/basic/268fc230-2e04-471b-a728-a726167c1cfc
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The repository's FirstLastTimetable snapshots are fetched from TDX; data/tdx/meta.json records each operator's source update and retrieval date."
  - id: dorts-psd-retrofit
    title: Practical station planning and design — platform doors
    titleOriginal: 捷運車站規劃與設計實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page127.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Describes the original doorless high-capacity stations, full-height doors on new Xinzhuang/Luzhou stations and the 2006–2018 retrofit programme.
  - id: dorts-psd-history
    title: Electromechanical innovations on the Xinyi Line — platform doors
    titleOriginal: 臺北捷運信義線的機電系統創新
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page159.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Records the full-height platform-door sequence beginning with Xinzhuang/Luzhou and continuing with Xinyi/Songshan, integrated with signalling.
  - id: trtc-psd-retrofit
    title: 2014 corporate social responsibility report
    titleOriginal: 2014臺北捷運企業社會責任報告書
    publisher: Taipei Rapid Transit Corporation (臺北大眾捷運股份有限公司)
    url: https://web.metro.taipei/ebook/2014ebook/files/basic-html/page47.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Gives the retrofit baseline of 58 stations, 13 completed by 2014 and the planned end-2018 completion.
  - id: dorts-circular-doors
    title: Practical signalling systems for Taipei Metro — platform-door modules
    titleOriginal: 捷運號誌系統實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no22/files/basic-html/page180.html
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: Describes the Circular Line's automatic sliding doors, emergency escape doors, fixed panels and platform-end doors.
---

## One network, several systems

The Taipei-region metro is a family of systems rather than one repeated
engineering design. The high-capacity R, G, O and BL lines share an Alstom
(formerly GRS) conventional fixed-block signalling family with audio-frequency
track circuits.[^dorts-high-signal] BR uses Bombardier CITYFLO 650 moving-block
CBTC, with a moving-block coordinate system and position updates at roughly
half-second intervals.[^dorts-cbtc-wenhu] Y uses Hitachi CBTC for unattended
operation, and DORTS says the same signalling approach is used on LB.[^dorts-circular-signal]

That distinction matters. Fixed block describes how train separation is
protected; it does not by itself say that a line is or is not automated. The
published sources therefore keep signalling block, train-control functions and
operating mode as separate fields. For V and K, NTMC publishes a staffed,
low-floor light-rail system with light-rail and level-crossing signalling, but
does not name a signalling generation or supplier.[^ntmc-trains] For A, the
government project report specifies CBTC with ATP, ATS and ATO, while the train
manufacturer publishes CBTC/ATP for the delivered fleet.[^motc-airport-cbtc][^trsc-airport]

| Line | Signalling evidence | Power evidence |
|---|---|---|
| BR | CITYFLO 650 moving-block CBTC, Bombardier.[^dorts-cbtc-wenhu] | 750 V DC conductor rail; Wenhu's supply includes 161 kV dual circuits and 22 kV distribution.[^dorts-wenhu-power] |
| R, G, O, BL | Alstom/GRS conventional fixed block and audio-frequency track circuits.[^dorts-high-signal] | Taipei Metro 750 V DC third rail.[^dorts-power-general] |
| Y | Hitachi CBTC, driverless operation.[^dorts-circular-signal] | 750 V DC third rail.[^ntmc-trains] |
| LB | CBTC family and driverless train design are established; supplier and generation are TBC.[^dorts-circular-signal][^ntmc-trains] | 750 V DC third rail.[^ntmc-trains] |
| V, K | Staffed light rail with level-crossing signalling; supplier and generation are TBC.[^ntmc-trains] | 750 V DC overhead/energy-storage system.[^ntmc-trains] |
| A | CBTC with ATP/ATS/ATO is documented; a single current generation label is TBC.[^motc-airport-cbtc][^trsc-airport] | 750 V DC third rail.[^trsc-airport] |

## Traction power and substations

DORTS describes 750 V DC third rail as the Taipei Metro traction standard.[^dorts-power-general] The
normal conversion chain is 22 kV AC through transformer and rectifier equipment;
the manual distinguishes 24-pulse equipment on high-capacity systems from the
12-pulse equipment used generally on medium-capacity systems.[^dorts-power-general]
These are system design rules, not a current station-by-station equipment
inventory. DORTS gives approximate traction-substation spacing of 1.7–2 km for
high-capacity lines and 1–3.5 km for medium-capacity lines, with open-ring 22 kV
feeds and dual-path supply.[^dorts-power-substations]

The Wenhu record shows how that standard is applied to one medium-capacity
line: a 161 kV dual-circuit incoming supply, 22 kV distribution and conversion
to 750 V DC at the traction substation before delivery to the conductor rail.[^dorts-wenhu-power]
The exception in this group is the Danhai and Ankeng light rail. NTMC publishes
750 V DC overhead power combined with onboard energy storage, rather than the
third rail used by Y and LB.[^ntmc-trains]

## Depots, workshops and service spacing

DORTS identifies Beitou as R's main depot and Xindian as G's. Tucheng is the BL
main depot with Nangang as a secondary depot; Luzhou is O's main depot, with
Xinzhuang secondary and Zhonghe used for storage.[^dorts-depots] The planning
table separately identifies Neihu as BR's main depot, Muzha as its secondary
depot and South Depot as the first-phase Y main depot.[^dorts-depot-capacity]
Those roles describe depot functions and planned capacity, not a current
train-by-train stabling register. TYMC names Qingpu and Luzhu as A maintenance
depots, but its public pages do not map individual Airport MRT sets to either
site.[^tymc-route]

TRTC publishes a 06:00–24:00 service day for the five high-capacity route
families, with separate weekday peak, off-peak, late-evening and holiday
headways.[^trtc-headways] The published weekday peak values are 2–4 minutes on
BR, 6 minutes on R with a 3-minute overlap, 4–6 minutes on G with a 3-minute
overlap, and 6 minutes on both O and BL with 3-minute overlaps.[^trtc-headways]
NTMC publishes 06:00–24:00 light-rail operation; the Ankeng release gives
6–8-minute morning peaks, 8–10-minute afternoon peaks and roughly 15 minutes
at other times.[^ntmc-headways][^ntmc-ankeng-headway]

The station pages already expose first and last trains from the committed TDX
`FirstLastTimetable` snapshots.[^tdx-first-last] The repository records the source update and
retrieval date in `data/tdx/meta.json`, so these are dated data extracts rather
than timeless prose.[^tdx-first-last] The current TDX snapshot contains rows
for TRTC, NTMC and TYMC; no TDX rows were returned for the two light-rail
operators in the checked extract, so the absence is recorded as data coverage,
not as a claim that those operators have no timetable.[^tdx-first-last]

## Platform screen doors

The first high-capacity TRTC stations opened without platform doors.[^dorts-psd-retrofit] DORTS says
new Xinzhuang and Luzhou stations introduced full-height doors and that the
older high-capacity stations were retrofitted over a fourteen-year programme,
completed in ROC year 107 (2018).[^dorts-psd-retrofit] TRTC's 2014 report gives
the programme's intermediate state: 58 stations were in the retrofit scope and
13 had been completed by that report, with completion planned by the end of
2018.[^trtc-psd-retrofit] DORTS describes Xinyi and Songshan as the next
full-height-door stage and says the doors were integrated with signalling.[^dorts-psd-history]

The Circular Line has a different equipment module: automatic sliding doors,
emergency escape doors, fixed panels and platform-end doors are treated as part
of the signalling and interlocking design.[^dorts-circular-doors][^dorts-circular-detail]
The public material fetched for this page does not provide one current,
station-by-station TRTC door-type register, and it does not provide a comparable
design-capacity-versus-observed-capacity table for every line. Those two fields
remain TBC rather than being inferred from neighbouring systems.

## What the sources still do not settle

The evidence supports line-level engineering families, published scheduled
headways, depot roles and the existing first/last-train data layer.[^dorts-high-signal][^dorts-depots][^tdx-first-last] It does not
support a current unit-to-depot asset register, a complete station door-type
register, or one comparable capacity measure using the same date and unit basis
for every line.[^dorts-depots][^dorts-psd-retrofit][^dorts-power-general] Those are open data gaps, not missing arithmetic.
