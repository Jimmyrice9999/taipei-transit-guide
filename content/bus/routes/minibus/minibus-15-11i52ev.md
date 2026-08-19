---
title: "S15Shuttle B / 小15區預"
summary: "Minibus and community route: S15Shuttle B (小15區預)."
updated: 2026-08-19
facts:
  - label: Service class
    value: "Minibus / community service (小／市民小巴)"
    source: ebus-minibus
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: TBC
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: TBC
sources:
  - id: tdx-bus
    title: "TDX bus data"
    titleOriginal: "交通部運輸資料流通服務平臺"
    publisher: "Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺"
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "Supports the normalized route identity, municipality, operators, direction and variant records, stop sequences, shapes, source-update fields and the separately curated geometry-only MRT stop joins. The committed route layer does not carry route length, timetable or fare fields."
  - id: ebus-minibus
    title: "Taipei bus route catalogue — 小 and 市民小巴"
    titleOriginal: "大臺北公車"
    publisher: "Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府"
    url: https://ebus.gov.taipei/ebus?ct=tpc
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: "The full official catalogue was fetched and read; it lists this route under 小、市民小巴 and its route-id link where a separate entry exists."
---

## Classification and current service

The full official catalogue files 小15區預 under 小 (小、市民小巴).[^ebus-minibus]
The normalized TDX record retains 1 direction/variant record for this service; route history, corridor rationale and dated operator changes are not inferred from stop names or the current map.[^tdx-bus]

The full catalogue has no separately listed schedule entry for this normalized variant. Its current service span, headway and fare remain TBC rather than being copied from a related route.[^ebus-minibus][^tdx-bus]

Two confirmed interchanges are recorded in the curated stop-ID join set:
Jiantan (R15) and Shilin (R16), the same pair confirmed for the
corridor's other named variants, 小15區 and 小15, which run the same
士林-陽明山-菁山 corridor under separately published schedules.[^tdx-bus]
TDX records this specific variant as a reservation-based (預約) working
within that same corridor family; because no separately listed schedule
entry exists for it, its termini, service span and fare cannot be
sourced from the general 小、市民小巴 catalogue listing beyond the
route's own filed name.[^ebus-minibus][^tdx-bus]

## Research status

The TDX snapshot supplies the changing stop and geometry records; route length remains TBC, and no dated route history or operator-change record was promoted from the current catalogue pages.[^tdx-bus] No stated reason for this specific variant lacking its own published schedule, while its siblings 小15區 and 小15 both carry one, was found in this search, nor a stated reason for the reservation basis itself.
