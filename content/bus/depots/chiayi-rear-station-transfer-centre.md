---
title: Chiayi rear-station transfer centre
description: The operator-published BRT stop relationship at Taiwan Railways Chiayi rear station, kept separate from a confirmed timed HSR interchange.
summary: Chiayi Bus's BRT pages name the rear-station transfer centre as a stop on the 7211/7212 corridor and place it within a 29.3-km accessible corridor linking Chiayi Park, HSR Chiayi Station and Puzi; platform and timed-transfer details remain TBC.
updated: 2026-09-07
facts:
  - label: Published BRT route family
    value: 7211; 7212; 7212A
    source: chiayi-bus-brt-query
  - label: Published stop name
    value: Taiwan Railways Chiayi Station rear-station transfer centre
    source: chiayi-bus-brt-query
  - label: Confirmed timed rail/HSR transfer
    value: TBC
specs:
  - label: Operator-published corridor length
    value: 29.3
    unit: km
    source: chiayi-bus-brt-current
  - label: Displayed stop count on BRT current-state page
    value: 18
    unit: stops
    source: chiayi-bus-brt-current
  - label: Bay/platform allocation
    value: TBC
  - label: Step-free path between modes
    value: TBC
sources:
  - id: chiayi-bus-brt-query
    title: Chiayi BRT real-time information and stop list
    titleOriginal: BRT公車動態系統
    publisher: Chiayi Bus Co., Ltd. (嘉義汽車客運股份有限公司)
    url: https://www.cibus.com.tw/brt3
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page's two-direction stop tables name the Taiwan Railways rear-station transfer centre and HSR Chiayi Station among the BRT stops.
  - id: chiayi-bus-brt-current
    title: Chiayi BRT current state
    titleOriginal: 嘉義BRT現況
    publisher: Chiayi Bus Co., Ltd. (嘉義汽車客運股份有限公司)
    url: https://www.cibus.com.tw/brt2
    accessed: 2026-09-07
    kind: primary
    lang: zh-Hant
    note: The full operator page publishes the corridor length, route segmentation, displayed stop count and low-floor accessibility statement.
---

Chiayi Bus's current BRT pages name the Taiwan Railways Chiayi rear-station
transfer centre as a stop on the 7211/7212 corridor.[^chiayi-bus-brt-query] The
same operator material names HSR Chiayi Station and Puzi Transfer Station in
the corridor's stop sequence.[^chiayi-bus-brt-query] This is a useful published
node relationship, but it is not by itself proof of a coordinated train/bus
transfer, a shared building, or a step-free path.

The operator's BRT current-state page describes a 29.3-km corridor, divided
into the HSR-to-rear-station main section and Chiayi-city and Chiayi-county
connecting sections.[^chiayi-bus-brt-current] It lists 18 displayed stops and states that 7211 and 7212
operate with accessible low-floor buses.[^chiayi-bus-brt-current] The route
page's stop list and the current-state page use different presentation
boundaries, so this node page preserves both descriptions rather than treating
the stop count as a universal route total.

The BRT query page's direction tables give the practical published sequence:
Chiayi Park appears at one end, Puzi Transfer Station at the other, and the
HSR Chiayi Station and rear-station transfer centre appear within the listed
corridor.[^chiayi-bus-brt-query] The operator's current-state page separately
describes the corridor in three distance segments and reports 18 displayed
stops.[^chiayi-bus-brt-current] Those are complementary operator presentations,
not evidence for a platform-level or timed connection.

## Join boundary

The site can safely say that the operator publishes this bus stop in the BRT
route sequence.[^chiayi-bus-brt-query] It cannot currently say that the stop
is inside the Taiwan Railways station building, that HSR and TRA platforms are
connected by a particular path, or that any bus departure is timed to a train.
Those claims require station-owner or municipal access documentation and remain
TBC. The shared names and the route's presence at both rail-related places are
not being promoted to a stronger multimodal join.
