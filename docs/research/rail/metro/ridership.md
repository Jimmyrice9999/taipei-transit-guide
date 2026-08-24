# Taipei-region metro ridership — research findings, 24 August 2026

**Corpus warning: `docs/research/` is leads only. It has been wrong repeatedly.
Nothing here is citable until it has been checked against a primary source —
see `.claude/skills/transit-research/SKILL.md`.**

This report records the publication boundary before the site derives any
station, line or network figures. The retrieval date is 2026-08-24. The
figures below are not interchangeable: the operators use different units,
coverage rules and publication formats.

## What is established

### Taipei Rapid Transit Corporation (TRTC)

- **TRTC publishes monthly per-station ridership files.** Its current English
  index labels the section `Ridership statistics per station`; the visible
  years are 2015–2017, 2020–2026, with 2018 and 2019 not listed on the checked
  page. Each month is a link to an ODS file under
  `web.metro.taipei/RidershipPerStation/`. Source: TRTC, *Ridership Counts*,
  English page, primary, High confidence: the full index and its month links
  were fetched. Original wording: “Ridership statistics per station”.
- **The per-station index says the series begins in 2015.** Source: TRTC,
  *Ridership Counts*, primary, High confidence. Original wording: “Station
  ridership statistics have been collected since 2015.”
- **TRTC distinguishes station statistics from cross-network statistics.** The
  operator says tickets not passed through gates, including single-journey
  cyclist tickets, are excluded from station statistics and included only in
  cross-network counts. Source: TRTC, *Ridership Counts*, primary, High
  confidence. Original wording: “Tickets not passed through the gates, such as
  single-journey tickets for cyclist, are not included in the station
  statistics, but only in the cross-network passenger counts.”
- **TRTC publishes a longer cross-system monthly series.** The same index lists
  monthly links from 1996 (March–December) and 2001 onward, with the years and
  months shown on the fetched page. Source: TRTC, *Ridership Counts*, primary,
  High confidence. Original wording: “Cross-system ridership statistics”.
- **The TRTC API catalogue describes a daily station dataset and an hourly
  extension.** Its entry says `臺北捷運各站進出量統計` is daily station entry/exit
  volume, and that hourly station entry/exit volume is provided from ROC 104
  November (November 2015). It also says the daily station dataset was changed
  to an OD-flow dataset from ROC 106 January (January 2017), with the original
  item provided only through ROC 105 December. Source: TRTC, *API服務*,
  primary, High confidence: the full catalogue row was fetched. Original
  wording: `捷運車站每日各站進出量統計(自104年11月起提供每小時各站進出站量統計)` and
  `自106年1月起提供「臺北捷運每日分時各站OD流量統計資料」`.
- **The monthly ODS is station-by-day data, not a precomputed line total.** A
  local full-file fetch of the official January 2025 ODS was required because
  the text browser rejected its `application/vnd.ms-excel` content type. The
  file contains a header row of station names followed by date rows and
  station values; the site’s data layer sums those dated station rows and keeps
  the official ODS URL and retrieval date. This is a method statement about the
  fetched file, not an operator claim.

### New Taipei Metro Corporation (NTMC)

- **NTMC publishes current whole-system monthly files, not a per-station table
  on the checked statistics page.** The operator page lists ROC 115 January–June
  2026 ODS files and ROC 114 January–July 2025 PDF files. Source: NTMC,
  *統計資料*, primary, High confidence. Original wording: the filenames
  `115年6月全系統運量統計.ods` through `115年1月全系統運量統計.ods` and
  `114年7月全系統運量統計.pdf` through `114年1月全系統運量統計.pdf`.
- **The checked NTMC monthly file is daily and line-split.** Its January 2025
  PDF has daily columns for `總運量`, `淡海輕軌`, `安坑輕軌` and `環狀線`, a
  monthly total and a daily average. It explicitly warns that the data include
  system values and manual statistics. Source: NTMC, *新北大眾捷運股份有限
  公司月運量統計表 114年1月*, primary, High confidence. Original wording:
  `總運量 淡海輕軌 安坑輕軌 環狀線` and `註：此數據包含系統值及人工統計資料。`
- **The operator directs other ridership information to the New Taipei
  statistics portal.** Source: NTMC, *統計資料*, primary, High confidence.
  Original wording: `其他運量資訊詳新北市統計資料網>統計資料發布>新北市政府交通局`.
  The linked statistics-release index was fetched; its Transportation Bureau
  link timed out when followed in this run, so no unvisited data table is
  promoted from that link.

### Taoyuan Metro Corporation (TYMC)

- **TYMC publishes a current per-station monthly PDF.** The full statistics
  page lists `115年7月各站旅運量統計(pdf)`, dated 2026-08-19, and the linked
  one-page PDF contains station-level `入站` and `出站` counts for A1–A22,
  plus group-ticket and other categories. Source: TYMC, *統計資料*, primary,
  High confidence. Original wording: `115年7月各站旅運量統計` and `入站 出站`.
- **TYMC also publishes a daily whole-system monthly PDF.** The linked
  `115年7月全系統旅運量統計` PDF contains daily totals, a monthly total of
  3,976,430 and a daily average of 128,272. Source: TYMC, *115年7月全系統
  旅運量統計*, primary, High confidence. Original wording: `當月總計` and
  `日平均`.
- **TYMC defines its station measure explicitly.** Its per-station PDF says
  that entry is a passenger entering the system at that station, exit is a
  passenger leaving it, the reference period is the first through last day of
  the month, and classification is by station and by entry/exit. Source: TYMC,
  *115年7月各站旅運量統計*, primary, High confidence. Original wording:
  `入站：由該站進入捷運系統之人次。`, `出站：由該站離開捷運系統之人次。` and
  `統計標準時間：以每月1日至該月底之事實為準。`
- **TYMC’s statistics page records the opening boundary.** It states that the
  Airport MRT began formal operation on 2 March 2017. Source: TYMC,
  *統計資料*, primary, High confidence. Original wording: `106年3月2日正式營運`.

### Ministry of Transportation and Communications (MOTC)

- **MOTC publishes an operator-level monthly statistical table, not a station
  table.** The full monthly-statistics PDF contains Table 2-10, *Passenger
  Traffic of Mass Rapid Transit in Taiwan Area*, with passenger counts,
  passenger-kilometres, average kilometres per passenger and passenger-traffic
  revenue by operator. Its unit is thousand passengers and related thousand
  units. Source: MOTC, *中華民國交通統計月報*, Table 2-10, primary, High
  confidence: the full 257-page PDF was fetched and the table was located.
  Original wording: `表2-10 臺灣地區捷運客運量` and `單位：千人次、千人公里、公里、
  新臺幣千元`.
- **MOTC’s notes make operator boundaries time-dependent.** The checked table
  notes that Taoyuan Metro began on ROC 106-03-02, New Taipei Metro on ROC
  108-02-01, Taichung MRT on ROC 110-04-25, that New Taipei figures include
  Ankeng Light Rail from March 2023, and that responsibility for the Circular
  Line moved from Taipei City to New Taipei on 23 May 2023. Source: MOTC,
  *中華民國交通統計月報*, Table 2-10, primary, High confidence. Original
  wording: `新北捷運自112年3月起含安坑輕軌收費運量` and
  `環狀線自112年5月23日起，主管機關由臺北市政府移交新北市政府`.

### TDX

- **TDX supplies the structural network data needed to join ridership to
  station and line pages.** Its full API documentation describes a nationwide
  transport-data API and exposes Metro basic and operational services. The
  checked TRTC API catalogue identifies TDX for station timetables, station
  records, line records and operating-line station records, but not a public
  historical ridership series. Source: MOTC TDX, *線上API說明*, primary, High
  confidence. Original wording: `本平臺提供涵蓋全國尺度之交通旅運資料服務API`.
- **TDX is therefore a join source, not a replacement for operator ridership
  files.** The site keeps TDX station identity, code, sequence and operator
  separate from the dated ridership records.

## Conflicts and non-equivalences

1. **Station versus cross-system scope.** TRTC explicitly excludes some
   non-gate tickets from station statistics but includes them in cross-network
   counts. Both values are retained; neither is used as a silent substitute for
   the other.
2. **TYMC entry/exit versus whole-system total.** TYMC’s station PDF publishes
   separate entries and exits, while its system PDF publishes one daily total.
   The data layer keeps `entry`, `exit` and system `total` as separate fields;
   it does not average or choose between them.
3. **Operator handover.** MOTC’s table changes the owner and accounting scope of
   the Circular Line in 2023, while TRTC’s historical cross-system series still
   presents its own historical system categories. Historical values are kept
   under their publishing operator and date rather than reassigned backward.
4. **NTMC system/manual values.** NTMC states that its monthly data contain both
   system values and manual statistics. They are not presented as identical to
   gate-only station counts.

## Checked and failed

- **TRTC ODS through the text browser** — the official file returned `400
  Unsupported content-type: application/vnd.ms-excel`. Checked 24 August 2026.
  The same official URL was fetched as a binary ODS locally and parsed; no
  claim relies on the failed text rendering.
- **New Taipei statistics-release Transportation Bureau link** — following the
  operator’s supplied link timed out. Checked 24 August 2026. The timeout is recorded as
  a retrieval failure, not as evidence that a per-station dataset does not
  exist. The NTMC operator page and its own monthly files remain the sources
  used for the current data layer.
- **MOTC statistics listing page** — one browser open returned an internal error.
  Checked 24 August 2026. The underlying full MOTC monthly-statistics PDF was found
  and fetched directly through the official document record, so the table is
  established from the PDF rather than the failed listing render.

## Stated gaps

- TRTC’s checked index does not list station ODS files for 2018 or 2019. A
  complete station trend across those years needs an archived operator file or
  a directly published replacement.
- NTMC’s checked operator files provide daily and monthly line totals, not
  station-level values. The New Taipei Transportation Bureau statistics system
  is the next primary source to resolve this, after the timed-out link can be
  fetched.
- MOTC and TDX provide operator/line or structural data, not a substitute for
  each operator’s station-level historical series.
- The source pages publish different measures (station counts, entry/exit,
  system totals and operator totals). A single “network ridership” number is
  only valid when its component definitions and dates are shown beside it.
