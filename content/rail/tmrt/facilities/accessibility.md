---
title: Taichung Metro station accessibility
summary: Ten named facilities from a dedicated operator page, from tactile warning tiles to a wheelchair waiting zone aligned on the platform — itself confirmed to run to a second page this session's tooling could not reach.
order: 1
operator: TMRT
updated: 2026-08-28
facts:
  - label: Accessible ramps
    value: at every entrance/exit with a level difference
    source: tmrt-accessibility-page
  - label: Accessible elevators
    value: braille panel, voice system, side handrails, intercom, extended door-closing time
    source: tmrt-accessibility-page
  - label: Accessible platform waiting area
    value: aligned with the first door of the train's head/tail car
    source: tmrt-accessibility-page
  - label: Accessible ticket machines and gates
    value: at every station
    source: tmrt-accessibility-page
  - label: Page 2 of the operator's facility listing
    value: TBC
  - label: Named regulatory basis
    value: TBC
specs: []
sources:
  - id: tmrt-accessibility-page
    title: Station Service Facilities
    titleOriginal: 車站服務設施
    publisher: Taichung Metro Corporation (臺中捷運股份有限公司)
    url: https://www.tmrt.com.tw/our-services/accessibility-service
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Full page, fetched and parsed directly from raw HTML rather than a search snippet. Lists ten accessibility facilities with descriptions; the page carries a "1 2" page-number control, and page 2's content could not be retrieved this session because its pagination is client-side.
  - id: moi-accessibility-code
    title: Station elevator facilities
    titleOriginal: 站內無障礙設施
    publisher: Taipei Rapid Transit Corporation (臺北大眾捷運股份有限公司)
    url: https://www.metro.taipei/News_Content.aspx?n=C0EB9D07B84907D9&s=4FDC24D931DE6050
    accessed: 2026-08-29
    kind: primary
    lang: zh-Hant
    note: A different Taipei-region operator's own page, fetched twice with identical results. States directly that its MRT elevators comply with the Ministry of the Interior's Building Accessibility Facility Design Code (建築物無障礙設施設計規範). Establishes what governs MRT station buildings generally in Taiwan; does not itself confirm TMRT's own stations were built or audited against this code, since TMRT names no regulation on its own page.
---

## Ten facilities, from the operator's own page

Taichung Metro Corporation publishes a dedicated station-service-facilities
page naming ten accessibility features, each with its own
description.[^tmrt-accessibility-page] Accessible ramps are installed at
every entrance or exit where the inside and outside ground levels differ,
serving passengers with large luggage, strollers or wheelchairs. Where
accessible parking exists, it sits near the station entrance for the
shortest possible distance to the station itself.[^tmrt-accessibility-page]

Wayfinding is treated as its own facility category: accessible guide
signage directs mobility-limited passengers along a planned accessible
route to ramps, stairs, entrances and elevators, while tactile warning
tiles mark stair transitions and other hazard points for visually impaired
passengers.[^tmrt-accessibility-page] Ticketing is covered separately —
accessible add-value machines are built lower than standard machines
specifically for wheelchair users, and accessible automatic gates, usually
positioned beside the information desk, carry a call button linking
directly to station staff.[^tmrt-accessibility-page]

Every station elevator is described as accessible by design: an extended
door-closing time, a braille control panel, a voice announcement system,
side handrails and an intercom for emergencies.[^tmrt-accessibility-page]
On the platform itself, a dedicated wheelchair waiting zone is aligned with
the first door of the train's head or tail car, marked with its own
signage — so a wheelchair user can board directly into a reserved
space.[^tmrt-accessibility-page] Emergency call buttons are installed in
men's, women's, family and accessible restrooms and in nursing rooms, and
station intercoms are placed at entrances/exits, outside accessible and
family restrooms, on platforms, at nursing rooms, beside every train door,
and at the platform's accessible boarding point.[^tmrt-accessibility-page]

## A confirmed second page, not reached

The operator's page itself carries a "1 2" page-number control at the
bottom of the facility list, meaning at least one further page of content
exists beyond the ten facilities described above. This session's fetch
tooling could not retrieve it — the page's pagination is handled
client-side, and a direct `?page=2` request returned byte-identical content
to page 1. This is recorded as an explicit, confirmed gap: there is more on
this page than this record currently shows, not an assumption that ten is
the complete list.

## What governs MRT station accessibility generally

TMRT's own page names no regulation, but a different Taipei-region
operator's page does. TRTC's station-facilities page states directly that
its MRT elevators comply with the Ministry of the Interior's Building
Accessibility Facility Design Code (建築物無障礙設施設計規範).[^moi-accessibility-code]
This establishes what governs MRT station buildings generally in Taiwan; it
does not itself confirm that TMRT's own stations were built or audited
against this specific code, since TMRT's own page does not name it.

## Remaining gaps

Whatever facilities the operator's page 2 describes remain genuinely
unread. No numeric accessibility-completion figure was found on the page
read, and whether TMRT's own stations were designed or audited against the
Building Accessibility Facility Design Code specifically is TBC. Whether every one of the ten described facilities
is present at every station without exception, versus varying by station in
some cases (as accessible parking's own wording suggests, naming only
"stations that have" the facility for that one item), is not established by
any source found — not summarised in one system-wide statement anywhere on
the page read.
