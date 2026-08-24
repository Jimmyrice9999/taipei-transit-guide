# Taipei-region metro systems and operations — research findings, 24 August 2026

**Corpus warning: `docs/research/` is leads only. It has been wrong repeatedly.
Nothing here is citable until it has been checked against a primary source —
see `.claude/skills/transit-research/SKILL.md`.**

This report sets the evidence boundary for the first systems-and-operations
page. It covers signalling, traction power, depots, published service spacing,
first and last trains, and platform screen doors. Retrieval date: 2026-08-24.
The current station pages already read the committed TDX
`FirstLastTimetable` data; this report records what that data does and does not
settle.

## What is established

### Signalling

- **TRTC high-capacity lines — R, G, O and BL.** DORTS's signalling manual
  identifies the Tamsui-Xinyi, Songshan-Xindian, Zhonghe, Bannan/Nangang,
  Tucheng, Xinzhuang-Luzhou and Nangang East systems as one Alstom (formerly
  GRS) signalling family using conventional fixed block and audio-frequency
  track-circuit transmission. Source: DORTS, *捷運號誌系統實務*, p. 73;
  PRIMARY, High confidence — the complete page was fetched. Original sentence:
  `淡水信義線、松山新店線、中和線、南港板橋線、土城延伸線、新莊蘆洲線及南港東延段號誌系統均由美商亞士通公司（Alstom 原名 GRS）承包，系統設計採傳統式固定閉塞區間及音頻軌道電路傳輸技術`.
- **Wenhu — BR.** DORTS identifies Bombardier CITYFLO 650 as the line's
  moving-block system. It uses a moving-block coordinate system, with position
  information sent about every 0.5 seconds; the architecture contains ATP,
  ATO and ATS. Source: DORTS, *捷運號誌系統實務*, p. 225;
  PRIMARY, High confidence. Original sentences include:
  `CITYFLO 650 系統...約 0.5 秒傳送一次` and `文湖線...採用移動式閉塞區間座標系統 MBCS`.
- **Circular — Y.** DORTS identifies Hitachi Rail Transportation Signalling as
  the contractor for the first phase and describes a driverless CBTC system
  using high-resolution position detection and continuous two-way data
  communication. The same manual identifies CBTC, ATP, ATO, ATS and the
  interlocking layer. Source: DORTS, *捷運號誌系統實務*, pp. 292 and 294;
  PRIMARY, High confidence. Original sentences include:
  `由日立軌道交通號誌公司施作` and `為通訊式行車控制（Communication Based Train Control, CBTC）無人駕駛系統`.
- **Sanying — LB.** The same DORTS Circular-Line chapter explicitly says the
  system is also used on the Sanying Line. NTMC's current train page states
  that the Sanying train is a driverless two-car design, but the fetched
  operator page does not publish a signalling supplier or generation. Source:
  DORTS, *捷運號誌系統實務*, p. 292, and NTMC, *列車介紹*;
  PRIMARY, High confidence for driverless/CBTC family, TBC for supplier and
  generation. Original sentences: `及三鶯線等亦有採用` and `採「2 節車廂」無人駕駛設計`.
- **Danhai and Ankeng — V and K.** NTMC's current train page identifies both
  light-rail fleets as five-car, staffed, low-floor trains with a light-rail
  and level-crossing signalling system. It does not name a generation or
  supplier for that signalling. Source: NTMC, *列車介紹*; PRIMARY, High
  confidence for the published system type, TBC for supplier/generation.
  Original sentence: `號誌系統｜輕軌與平面交叉號誌系統`.
- **Airport MRT — A.** The MOTC report on the project describes CBTC with ATP,
  ATS and ATO as the planned train-control architecture. Taiwan Rolling Stock's
  current product page identifies the 1000-series safety system as CBTC/ATP.
  Source: MOTC, *捷運列車控制系統及相關界面之規劃設計*; Taiwan Rolling Stock,
  *桃園機場捷運電聯車*; PRIMARY, High confidence. The current fetched pages do
  not establish one unambiguous generation for every section or fleet; that
  field remains TBC.

### Traction power and substations

- DORTS's power manual gives Taipei Metro's traction standard as 750 V DC
  third rail. It describes 22 kV AC converted through transformer/rectifier
  equipment and notes 24-pulse rectifiers for high-capacity systems and
  generally 12-pulse equipment for medium-capacity systems. Source: DORTS,
  *捷運供電系統實務*, pp. 364 and 81; PRIMARY, High confidence. Original
  wording: `臺北捷運採用的是 750VDC 第三軌供電系統` and `高運量系統...24 脈波...中運量系統...以 12 脈波供電為主`.
- The Wenhu power record separately identifies the Muzha/Neihu medium-capacity
  system, a 161 kV dual-circuit incoming supply, 22 kV distribution and 750 V
  DC delivered to the conductor rail. Source: DORTS, *捷運技術* no. 48,
  p. 139; PRIMARY, High confidence. Original wording:
  `臺電以 161kV 雙迴路供電` and `動力變電站則將 AC 22kV 降壓整流成 750V DC 電壓，再送至軌道上之導電軌`.
- DORTS gives high-capacity traction substations at roughly 1.7–2 km spacing
  and medium-capacity substations at roughly 1–3.5 km, with open-ring 22 kV
  feeds and dual-path supply. Source: DORTS, *捷運供電系統實務*, p. 81;
  PRIMARY, High confidence. These are planning/design rules, not a current
  station-by-station substation inventory.
- NTMC publishes Y and LB as 750 V DC third-rail systems and V/K as 750 V DC
  overhead/energy-storage systems. Source: NTMC, *列車介紹*; PRIMARY, High
  confidence. Original wording: `第三軌750VDC` and `750VDC架空線/儲能系統(鋰電池)`.
- Taiwan Rolling Stock publishes A as 750 V DC third rail. Source: Taiwan
  Rolling Stock, *桃園機場捷運電聯車*; PRIMARY, High confidence. Original
  wording: `道旁第三軌，DC750V`.

### Depots and workshops

- DORTS's depot manual identifies Beitou as the Tamsui-Xinyi main depot,
  Xindian as the Songshan-Xindian main depot, Tucheng as the Bannan main depot
  with Nangang as its secondary depot, and Luzhou as the Zhonghe-Xinlu main
  depot with Xinzhuang secondary and Zhonghe storage-only functions. Source:
  DORTS, *捷運機廠設備實務*, p. 27; PRIMARY, High confidence. Original wording
  includes `北投機廠為淡水信義線主機廠`, `新店機廠為松山新店線之主機廠`,
  `土城機廠...為板南線主機廠` and `中和機廠...僅提供儲車功能`.
- DORTS's inventory records the same high-capacity functions and capacities,
  plus Neihu as Wenhu's main depot, Muzha as its secondary depot, and South
  Depot as the Circular Line first-phase main depot. These are planning
  capacities, not a current train-by-train allocation. Source: DORTS,
  *捷運路網規劃實務*, p. 202; PRIMARY, High confidence. Original table rows
  include `文湖線 內湖機廠...主機廠`, `木柵機廠...次機廠` and
  `環狀線第一階段 南機廠...主機廠`.
- TYMC's current organization page confirms that vehicle/workshop, signalling,
  power, track and platform-door maintenance are separated into named units,
  while its route page identifies Qingpu and Luzhu as the two Airport MRT
  maintenance depots. Source: TYMC, *組織架構* and *路線說明*; PRIMARY, High
  confidence. The fetched pages do not map individual trainsets to either
  depot; that field remains TBC.
- NTMC's current pages and employment documents establish the named Danhai,
  Ankeng and South depots, and its 2025 release records three Ankeng trains at
  Danhai Depot for compatibility validation. This is evidence that a temporary
  workshop location is not necessarily a permanent fleet allocation. Source:
  NTMC, current fleet page and 2025 ridership release; PRIMARY, High
  confidence. A complete current unit-to-depot register remains TBC.

### Headways, first/last trains and capacity

- TRTC's current route pages publish service patterns and average headways for
  BR, R, G, O and BL. The pages give operating hours of 06:00–24:00 and
  separate weekday peak, off-peak, late-evening, and holiday values. They also
  publish route-pattern travel times and overlap sections. Sources: TRTC,
  *路線及班距* pages for each line; PRIMARY, High confidence, full pages
  fetched on 2026-08-24. The published peak values are BR 2–4 minutes, R 6
  minutes with a 3-minute overlap, G 4–6 minutes with a 3-minute overlap, O 6
  minutes with a 3-minute overlap, and BL 6 minutes with a 3-minute overlap.
- NTMC's FAQ publishes V operating hours and headways, while its 2024 Ankeng
  service release gives 6–8 minutes in the morning peak, 8–10 minutes in the
  afternoon peak and roughly 15 minutes outside those periods. Source: NTMC,
  *常見問題* and *安坑輕軌通勤運量穩定增長*; PRIMARY, High confidence.
- TYMC publishes station-level first/last records and service patterns through
  TDX; the committed snapshot retrieved 2026-08-22 records 160 Airport MRT
  first/last rows, with source data updated 2026-08-05. TDX is a government
  data service, and the repository keeps the retrieval metadata in
  `data/tdx/meta.json`. This supports the station tables, not a claim that the
  rows are timeless. Source: MOTC TDX, `FirstLastTimetable`; PRIMARY, High
  confidence for the committed snapshot.
- TDX's committed snapshot likewise contains 243 TRTC rows (source update
  2024-09-13) and 26 NTMC rows (source update 2023-05-23). The station pages
  show each published direction with its first and last train. Light-rail
  operators NTDLRT and NTALRT returned no TDX `FirstLastTimetable` records in
  the committed probe, so their station pages do not claim a TDX first/last
  record. This is a data-coverage statement, not a claim that the operators do
  not publish timetables elsewhere.
- Design capacity versus actual peak capacity is not published in one
  comparable, line-by-line primary table in the fetched sources. Published
  train capacity, ridership and scheduled headway are different measures; the
  operations page leaves a comparable design-versus-actual capacity field TBC.

### Platform screen doors

- The initial TRTC high-capacity network opened without platform doors, while
  the original Muzha medium-capacity stations had full-height open-type doors.
  DORTS says new Xinzhuang/Luzhou construction introduced full-height doors and
  that the older high-capacity stations were retrofitted over fourteen years,
  completing in ROC year 107 (2018). Sources: DORTS, *捷運車站規劃與設計實務*,
  p. 127, and *捷運技術* no. 51, p. 159; PRIMARY, High confidence.
- TRTC's 2014 CSR gives the retrofit baseline: 58 stations lacked doors when
  the programme began in 2006, 13 had been completed by 2014, and completion
  was planned by the end of 2018. Source: TRTC, *2014 CSR* p. 47; PRIMARY,
  High confidence. The current operator safety page distinguishes high-capacity
  half-height and full-height door procedures and separately documents Wenhu;
  it does not provide a current station-by-station door-type register.
- DORTS's signalling manual describes the Circular Line's platform-door module:
  automatic sliding doors, emergency escape doors, fixed panels and platform-end
  doors, integrated into the CBTC interlocking. Source: DORTS, *捷運號誌系統實務*,
  pp. 180 and 303; PRIMARY, High confidence. A current per-station door-type
  inventory beyond those published line-level distinctions remains TBC.

## Conflicts

- **Fixed-block label versus all-automatic operation.** DORTS describes the
  high-capacity lines as fixed-block with drivers present, while its general
  power/operations material and current service pages describe automated train
  control functions. These are different layers: the page preserves signalling
  block type and operating mode as separate fields rather than calling the
  high-capacity lines “driverless.”
- **Depot capacity versus current allocation.** DORTS's capacity table gives
  storage spaces and main/secondary roles; current operator material gives fleet
  totals and occasional validation movements. Neither is a current unit roster,
  so the values are not collapsed.
- **Platform-door type.** The sources establish a retrofit programme and
  line-level design families, but the fetched material does not expose one
  complete current station-by-station type list. The page publishes the
  established line-level distinctions and leaves the finer register TBC.

## Checked and failed

- **Current TRTC station-by-station platform-door register** — searched and
  fetched 2026-08-24 from TRTC safety pages, DORTS station-design pages, the
  2014 CSR and DORTS signalling material. The sources describe door families and
  the retrofit programme but no current complete station/type table was found.
- **Comparable design-capacity versus actual-capacity table by line** — searched
  2026-08-24 in DORTS systems/power/signalling books, TRTC route/headway pages,
  NTMC train/FAQ pages, TYMC route and train pages, and the MOTC statistics
  material. The sources publish different measures, not one comparable table;
  the field remains TBC.
- **Current unit-to-depot register for TRTC, NTMC or TYMC** — searched
  2026-08-24 in operator organization, depot, train and procurement pages and
  DORTS depot tables. Named depots and functions were found, but no complete
  current mapping of trainset numbers to depots was found.
- **Signalling supplier and generation for Sanying, Danhai and Ankeng** — checked
  2026-08-24. The fetched primary pages establish CBTC for Y/LB's family and light-rail
  crossing signalling for V/K, but not a supplier or generation for every line.
  Those fields remain TBC rather than being inferred from a neighboring line.
- **TDX first/last data for Danhai and Ankeng** — checked 2026-08-24. The committed TDX metadata
  records 404/no records for NTDLRT and NTALRT. The operator's timetable links
  were not converted into a stable station-row data layer in this unit; no
  first/last values are asserted for those lines from TDX.

## Stated gaps

- A current operator asset register would settle individual depot allocation,
  active/withdrawn status and maintenance assignment.
- A station equipment register would settle the exact current platform-door
  type at every TRTC station.
- Line-level fleet-capacity and observed-peak counts, measured on the same date
  and unit basis, would settle design-versus-actual capacity. Until those are
  published together, TBC is the honest value.
