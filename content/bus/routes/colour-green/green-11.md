---
title: G11 / 綠11
summary: Green-line feeder route G11 (綠11).
updated: 2026-08-18
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
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
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠11 under 捷運綠線接駁公車.
  - id: ebus-g11
    title: G11 route schedule
    titleOriginal: 綠11班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0113001100
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 萬芳社區–台電大樓 corridor, service span, fare, the 公訓正門 peak-hour detour and operator contact.
---

## Classification and corridor

The official catalogue lists 綠11 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 萬芳社區 - 台電大樓, weekday and holiday service 0600–2300, one-section fare and 東南客運萬芳站 as the service contact. It records a weekday peak-hour detour serving 公訓正門 (06:55–08:00 and 16:00–17:20), bypassed at other times and on holidays.[^ebus-g11]

The confirmed stop sequence runs from 萬芳社區 (Wanfang Community) in Wenshan, past the Civil Service Development Institute (公務人員訓練處 — the detour above adds a stop at its front gate, 公訓正門), through 辛亥路 past 自來水事業處 (the Taipei Water Department) and 臺大癌醫 (NTU Cancer Center), ending at 台電大樓 (Taipower Building) near NTU.[^tdx-bus] The one confirmed interchange is 捷運公館站 (Gongguan, G07), reached partway along the route rather than at either terminus.[^tdx-bus] The 公訓正門 detour's timing —
weekday mornings and afternoons only, dropped entirely on holidays — reads as
built around the Institute's own staff shift times rather than general
ridership demand, though the schedule page does not state that
reasoning.[^ebus-g11] Both named termini — 萬芳社區 and 台電大樓 — sit well
inside built-up Wenshan and Da'an respectively, unlike the several hillside
and Ankeng-estate origins recorded on other routes in this project's
colour-green coverage.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for G11; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G11 (17 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Police Substation -> Dept of Civil Servant Development -> Wanmei Community -> World Shanzhuang -> Lingliang Shanzhuang -> Xinhai Elementary School -> Qingfeng Activity Center -> Taipei Water Department (Xinhai) -> Taipei Water Department -> Fanglan Rd -> NTU Cancer Center -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta[^tdx-bus]

**G11 (22 stops):** Taipower Building -> Wenzhou St Entrance -> NTU Sports Center -> National Taiwan U -> MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> NTU Cancer Center -> Fanglan Rd -> Taipei Water Department -> National Center for Research on Earthquake Engineering -> Qingfeng Activity Center -> Taipei Huai Ai Funeral Parlor -> Xinhai Elementary School -> Lingliang Shanzhuang -> World Shanzhuang -> Wanmei Community -> Dept of Civil Servant Development -> Wanfang Police Substation -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

**G11 (18 stops):** Wanfang Community -> Wanfang Activity Center -> Wanfang Police Substation -> Dept of Civil Servant Development -> Dept of Civil Servant Development (Main Gate) -> Wanmei Community -> World Shanzhuang -> Lingliang Shanzhuang -> Xinhai Elementary School -> Qingfeng Activity Center -> Taipei Water Department (Xinhai) -> Taipei Water Department -> Fanglan Rd -> NTU Cancer Center -> NTU Cancer Center(Keelung Rd) -> NTUST -> Gongguan -> MRT Gongguan Sta[^tdx-bus]

**G11 (23 stops):** Taipower Building -> Wenzhou St Entrance -> NTU Sports Center -> National Taiwan U -> MRT Gongguan Sta -> Gongguan -> NTUST -> NTU Hospital Gongguan Branch -> NTU Cancer Center -> Fanglan Rd -> Taipei Water Department -> National Center for Research on Earthquake Engineering -> Qingfeng Activity Center -> Taipei Huai Ai Funeral Parlor -> Xinhai Elementary School -> Lingliang Shanzhuang -> World Shanzhuang -> Wanmei Community -> Dept of Civil Servant Development (Main Gate) -> Dept of Civil Servant Development -> Wanfang Police Substation -> Wanfang Activity Center -> Wanfang Community[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 6 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision and the detour's creation date and rationale remain TBC.[^tdx-bus]
