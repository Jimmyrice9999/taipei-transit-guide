---
title: Liu Xin / 琉興
summary: An officially recorded passenger vessel on the Donggang–Xiaoliuqiu Dafu Fishing Port service, with the Maritime and Port Bureau's identity, capacity, tonnage and published survey-validity fields.
updated: 2026-09-06
aliases:
  - LIU XIN
  - 琉興
  - 016441
facts:
  - label: Official vessel number
    value: 016441
    source: mpb-liu-xin
  - label: Vessel type
    value: Passenger ship
    source: mpb-liu-xin
  - label: Certified passengers
    value: 149
    source: mpb-liu-xin
  - label: Published route
    value: Donggang–Xiaoliuqiu (Dafu Fishing Port)
    source: mpb-liu-xin
specs:
  - label: Gross tonnage
    value: 178
    unit: GT
    source: mpb-liu-xin
  - label: Build date as published
    value: ROC 110 / October 2021
    source: mpb-liu-xin
  - label: Published survey validity
    value: Through 25 October 2026
    source: mpb-liu-xin
  - label: Current timetable
    value: TBC
sources:
  - id: mpb-passenger-routes
    title: Ticket information — Taiwan main island and offshore-island routes
    titleOriginal: 購票資訊 — 臺灣本島與離島間各航線購票資訊
    publisher: Maritime and Port Bureau, Ministry of Transportation and Communications (交通部航港局)
    url: https://www.motcmpb.gov.tw/Article?nodeId=376&siteId=1
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full passenger-route page was fetched on 2026-09-06. Its page metadata says it was last checked 2026-08-07 and modified 2026-07-17; it identifies the Donggang–Xiaoliuqiu route and lists 琉興有限公司 among the operators.
  - id: mpb-liu-xin
    title: Donggang–Xiaoliuqiu (Dafu Fishing Port) — passenger-ship information
    titleOriginal: 東港-小琉球(大福漁港) — 船舶資訊
    publisher: Maritime and Port Bureau, Ministry of Transportation and Communications (交通部航港局)
    url: https://www.motcmpb.gov.tw/PassengerShip/Detail?NodeId=610&PassengerShipSno=016441&ShipLaneNo=X277&SiteId=1
    accessed: 2026-09-06
    kind: primary
    lang: zh-Hant
    note: The full official vessel record identifies LIU XIN / 琉興, official number 016441, passenger-ship type, 149 certified passengers, 178 gross tonnage, build month October 2021 and survey validity through 25 October 2026.
---

This is a vessel record, not a second route page. The Maritime and Port Bureau's
passenger-route page places the vessel in the Donggang–Xiaoliuqiu service family
and lists 琉興有限公司 among the route's operators.[^mpb-passenger-routes] The
route page also lists other Donggang–Xiaoliuqiu operators, which is why this
page does not turn one ship record into a claim that 琉興 is the sole operator
or that every departure uses this vessel.[^mpb-passenger-routes]

## Identity and route join

The Bureau's vessel page is headed `東港-小琉球(大福漁港) — 船舶資訊` and names
the ship `琉興`; its English name field is `LIU XIN` and its official number is
016441.[^mpb-liu-xin] The route join is explicit in the same official record:
the page links the Dafu Fishing Port endpoint and the Donggang–Xiaoliuqiu
route, so this is a verified route association rather than a place-name match
made from a vessel database.[^mpb-liu-xin]

The published basic data identifies the ship as a passenger vessel with a
certified capacity of 149 people and gross tonnage of 178.[^mpb-liu-xin] The
record gives the build month as ROC 110 October, which corresponds to October
2021; the site preserves both the original calendar expression and the
Gregorian rendering here.[^mpb-liu-xin]

## What the fields do and do not say

The record publishes a survey-validity date through 25 October 2026.[^mpb-liu-xin]
That is the Bureau's displayed validity field, not a guarantee that the vessel
will sail every day, that a particular departure will not be substituted, or
that the page will remain unchanged after that date. The public route page is
the better place to check which operators publish tickets and contact details;
this page intentionally does not invent a vessel-specific timetable or fare
from the ship registry.[^mpb-passenger-routes]

The route page's full listing shows that scheduled passenger shipping is an
operator-and-route system, not a fleet census: it names multiple operators on
the Donggang–Xiaoliuqiu crossing and also lists separate salt-pan departures
from Yancheng.[^mpb-passenger-routes] The site therefore treats this page as
one stable official vessel identity that can be linked from the route layer,
while keeping the full active-fleet total TBC until the Bureau's vessel records
can be fetched and joined consistently across the national passenger routes.
