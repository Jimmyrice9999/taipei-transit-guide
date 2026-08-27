---
title: Taipei-region metro fire and evacuation systems
summary: The published boundaries between fire detection, smoke control, life-safety systems, vehicle egress, fixed escape paths and the 2025 Circular Line emergency response.
order: 10
updated: 2026-08-27
facts:
  - label: Published tunnel fire-safety equipment
    value: Hydrants, evacuation signs, tunnel ventilation, smoke-exhaust fans and dedicated evacuation connections
    source: dorts-tunnel-safety
  - label: Tunnel emergency smoke-control velocity
    value: More than 2.5 m/s and below 11 m/s in the published Taipei Metro practice
    source: dorts-tunnel-smoke
  - label: Published station smoke-control sequence
    value: Smoke detector opens smoke dampers and starts exhaust fans; manual switches are also provided; air conditioning stops in the flow
    source: dorts-station-smoke
  - label: Circular Line elevated emergency path
    value: Centre of the track on ordinary viaducts and track-side on stacked viaducts, level with the train floor
    source: dorts-circular-viaduct-egress
  - label: Circular Line 2021 design simulation boundary
    value: A 578 m Y28-Y27 path took 1,873 seconds in the model, while a 542 m alternative took 1,783 seconds
    source: dorts-circular-simulation
  - label: 2025 Circular Line warning response
    value: A station manager used the maintenance walkway to reach the stalled train; about 150 passengers then alighted at Xinpu Minsheng after manual movement to the station
    source: cna-circular-alert
  - label: Current line-by-line fire and evacuation asset register
    value: TBC
specs:
  - label: Minimum published tunnel emergency airflow
    value: 2.5
    unit: m/s
    source: dorts-tunnel-smoke
  - label: Maximum published tunnel emergency airflow
    value: 11
    unit: m/s
    source: dorts-tunnel-smoke
  - label: Simulated train fire-resistance time in the Circular design study
    value: 1800
    unit: seconds
    source: dorts-circular-simulation
  - label: Circular Line vehicle intercar gangway width
    value: 1.1–1.4
    unit: m
    source: dorts-vehicle-egress
sources:
  - id: dorts-tunnel-safety
    title: Taipei Metro tunnel engineering practice - tunnel safety and disaster prevention
    titleOriginal: 捷運工程叢書 精進版－8 捷運隧道工程實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page225.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official tunnel-engineering page lists hydrants, evacuation signs, tunnel ventilation, smoke-exhaust fans and dedicated evacuation connections as tunnel fire equipment, and explains their rescue and passenger-escape purposes."
  - id: dorts-tunnel-smoke
    title: Taipei Metro tunnel engineering practice - emergency smoke-control operation
    titleOriginal: 捷運工程叢書 精進版－8 捷運隧道工程實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no8/files/basic-html/page227.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official page describes emergency lighting and position indicators, paired-station smoke control, control-centre selection of airflow direction, and the published 2.5 m/s minimum and 11 m/s maximum tunnel airflow values."
  - id: dorts-tunnel-criteria
    title: Taipei Metro MEP, environmental-control and fire-protection engineering practice - critical velocity
    titleOriginal: 捷運工程叢書 精進版－29 捷運系統水電、環控與消防工程實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no29/files/basic-html/page322.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official page defines the tunnel emergency state, the critical-velocity objective, the 11.2 m/s NFPA 130 upper recommendation, the 60°C temperature criterion and push-pull airflow logic; it is kept separate from the page-227 11 m/s practice value."
  - id: dorts-station-smoke
    title: Taipei Metro MEP, environmental-control and fire-protection engineering practice - station smoke exhaust
    titleOriginal: 捷運工程叢書 精進版－29 捷運系統水電、環控與消防工程實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no29/files/basic-html/page314.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official page gives the station smoke-control sequence: smoke detectors open smoke dampers and start exhaust fans, manual switches provide local control, and the flow diagram includes air-conditioning shutdown and central monitoring."
  - id: dorts-fire-power
    title: Taipei Metro MEP, environmental-control and fire-protection engineering practice - fire resistance and compartments
    titleOriginal: 捷運工程叢書 精進版－29 捷運系統水電、環控與消防工程實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no29/files/basic-html/page246.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official page specifies life-safety power for fire pumps, life-safety ventilation and emergency lighting, and gives fire-resistance requirements for smoke fans, ducts, dampers and tunnel dampers."
  - id: dorts-fire-inspection
    title: Taipei Metro fire-engineering inspection practice - safety-equipment work split
    titleOriginal: 捷運工程叢書 精進版－29 捷運系統水電、環控與消防工程實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no29/files/basic-html/page431.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official inspection-practice page assigns vehicle fire alarms and extinguishers, station/tunnel alarms and suppression, ventilation and smoke control, emergency power, communications and broadcasts, and evacuation signs and smoke/fire compartments to distinct engineering scopes."
  - id: dorts-vehicle-egress
    title: Taipei Metro electric multiple-unit engineering practice - intercar gangways
    titleOriginal: 捷運工程叢書 精進版－21 捷運電聯車實務
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://ebook.dorts.gov.taipei/ebook/no21/files/basic-html/page112.html
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official vehicle-engineering page gives the 1.1–1.4 m open gangway range for high-capacity and Circular Line trains, says the gangway protection separates outside flame, heat and smoke, and distinguishes VAL256 cars as having no intercar connection and requiring side-door evacuation."
  - id: dorts-circular-viaduct-egress
    title: Remember the escape route - the New Taipei Circular Line's secret walkway
    titleOriginal: 逃生路線請謹記！捷運新北環狀線的祕密步道！
    publisher: New Taipei City Government Department of Rapid Transit Systems (新北市政府捷運工程局)
    url: https://www.dorts.ntpc.gov.tw/documentary/articleInfo/eoPZB3rvmgVl?page=433
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official engineering article places the Circular Line emergency walkway between the tracks on ordinary viaducts and beside the track on stacked viaducts, level with the vehicle floor and also used for maintenance patrols."
  - id: dorts-circular-simulation
    title: Taipei Metro engineering technology optimisation and knowledge-asset innovation seminar - tunnel evacuation performance design
    titleOriginal: 捷運工程技術優化與知識資產創新價值
    publisher: Taipei City Government Department of Rapid Transit Systems (臺北市政府捷運工程局)
    url: https://wwwap3.dorts.gov.taipei/seminar/data/PDF/2-4.pdf
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full official 2021 seminar PDF models a Circular Line North Ring Y28-Y27 tunnel fire and evacuation case, including a 1,800-second train fire-resistance assumption, human-harm criteria and distance-sensitive evacuation times."
  - id: ntmc-circular-train
    title: Circular Line electric multiple unit
    titleOriginal: 環狀線電聯車
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=611
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The current official train page lists an emergency intercom and emergency door-opening device as Circular Line onboard emergency equipment."
  - id: ntmc-emergency-procedure
    title: New Taipei Metro and New Taipei Police immediately strengthen patrols to raise passenger safety
    titleOriginal: 提高旅客搭乘捷運安全等級 新北捷運與新北警察即刻全面加強巡邏
    publisher: New Taipei Metro Corporation (新北大眾捷運股份有限公司)
    url: https://www.ntmetro.com.tw/basic/?mode=detail&node=726
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full operator release says the control centre monitors train interiors by CCTV and, for a security emergency, directs the train to the next station, clears that station and calls police, security and medical units."
  - id: cna-circular-alert
    title: Circular Line train warning leads to manual driving; 150 passengers asked to leave
    titleOriginal: 環狀線列車有警訊改手動行駛　150人被請下車
    publisher: Central News Agency (中央通訊社)
    url: https://www.cna.com.tw/news/ahel/202512300091.aspx
    accessed: 2026-08-27
    kind: secondary
    lang: zh-Hant
    note: "The full CNA report attributes the 30 December 2025 account to a New Taipei Metro message: a warning stopped the train, a station manager used the maintenance walkway to reach it and change to manual driving, and about 150 passengers alighted at Xinpu Minsheng after the train reached the station."
---

The checked records describe fire safety as a layered system rather than one
single metro-wide asset list.[^dorts-fire-inspection][^dorts-tunnel-safety] The
layers include fire detection and suppression, smoke control, emergency power
and signs, vehicle egress, fixed escape paths and operating response.[^dorts-fire-inspection][^dorts-tunnel-smoke][^dorts-vehicle-egress][^dorts-circular-viaduct-egress]

## Fixed fire and life-safety systems

DORTS's tunnel-engineering practice lists hydrants, evacuation signs, tunnel
ventilation, smoke-exhaust fans and dedicated evacuation connections as tunnel
fire equipment.[^dorts-tunnel-safety] Its fire-engineering inspection table
separates vehicle fire alarms and extinguishers from station/tunnel alarms and
suppression, ventilation and smoke control, emergency power, emergency
communications and broadcasts, and fire/smoke compartments.[^dorts-fire-inspection]

The same engineering record gives a power and durability boundary: fire pumps,
life-safety ventilation and emergency lighting use life-safety power, while
smoke fans are specified for 250°C for one hour.[^dorts-fire-power] The source
also gives distinct requirements for smoke ducts, fire dampers, smoke dampers
and tunnel dampers, so “fire protection” is not interchangeable with “smoke
exhaust”.[^dorts-fire-power]

## Smoke control in tunnels and stations

The tunnel system has normal, congestion and emergency operating states; a
train fire or a disabled train in a tunnel is the emergency case.[^dorts-tunnel-smoke][^dorts-tunnel-criteria]
When a tunnel fire occurs between underground stations, the two neighbouring
stations operate their ventilation and environmental-control equipment together
to create a smoke-free evacuation path.[^dorts-tunnel-smoke]

The published practice says the control centre selects the exhaust direction
for the fire location, with fresh air pushed from the evacuation side and smoke
exhausted toward the other station.[^dorts-tunnel-smoke][^dorts-tunnel-criteria] It
prints a minimum average tunnel airflow of 2.5 m/s to prevent smoke back-layering
and give evacuees a perceptible upwind direction, while the same page keeps the
maximum below 11 m/s so the airflow does not impede escape.[^dorts-tunnel-smoke]

At stations, smoke detectors open the relevant smoke dampers and start exhaust
fans; each compartment also has a manual switch, and the control flow includes
air-conditioning shutdown and central monitoring.[^dorts-station-smoke]

## Vehicle and fixed-path egress

DORTS's vehicle practice gives high-capacity and Circular Line trains open
intercar gangways with a published clear-width range of 1.1–1.4 m, with metal
protection intended to separate passengers from outside flame, heat and smoke.[^dorts-vehicle-egress] The
same record says VAL256 cars are separated without an intercar passage, so their
between-station evacuation uses side doors.[^dorts-vehicle-egress]

For the Circular Line's elevated structures, the New Taipei engineering article
places the emergency walkway between tracks on ordinary viaducts and at the side
of the track on stacked viaducts.[^dorts-circular-viaduct-egress] It says the
walkway is level with the train floor and doubles as a maintenance patrol path.[^dorts-circular-viaduct-egress]

## A route-specific design simulation

A 2021 DORTS seminar modelled a Circular Line North Ring `Y28`–`Y27` tunnel case in
which a train lost power and required between-station evacuation.[^dorts-circular-simulation] The
modelled 578 m route took 1,873 seconds for all passengers to evacuate, longer
than the assumed 1,800-second train fire-resistance time.[^dorts-circular-simulation]
Shortening the modelled distance to 542 m reduced total evacuation time to
1,783 seconds, within that assumed 1,800-second boundary.[^dorts-circular-simulation]
This is a design-study result for a named planned section, not a current
line-wide operating-time guarantee.[^dorts-circular-simulation]

## The 2025 Circular Line warning response

A full CNA report says a Circular Line train stopped between Banqiao and Xinpu
Minsheng at 08:57 on 30 December 2025 after a warning, and that New Taipei Metro
activated its standard operating response.[^cna-circular-alert] The account says
a station manager used the maintenance walkway to reach the train and switch it
to manual driving; the train then reached Xinpu Minsheng, where about 150
passengers alighted and transferred to another train.[^cna-circular-alert]

That report therefore does not describe 150 passengers walking the walkway from
the stalled train.[^cna-circular-alert] It describes the walkway as an access
route for the responder, with the passenger evacuation completed at the station
after train movement.[^cna-circular-alert] NTMC's current train page lists an
emergency intercom and emergency door-opening device onboard.[^ntmc-circular-train]
Its published emergency procedure for a security incident similarly directs a
train to the next station and prepares that station for evacuation.[^ntmc-emergency-procedure]

## What remains open

The checked sources do not provide a current line-by-line register of detectors,
fire compartments, smoke modes, emergency-power feeds, escape-path lengths or
vehicle-specific evacuation procedures for every Taipei-region metro line.[^dorts-fire-inspection][^dorts-tunnel-safety][^dorts-vehicle-egress][^ntmc-circular-train]
They also do not establish that the 2021 `Y28`–`Y27` design simulation is the
as-built or current operating criterion for the first-stage Circular Line.[^dorts-circular-simulation]
Those registers and current signed operating criteria remain TBC.
