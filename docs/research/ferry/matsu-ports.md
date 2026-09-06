> **This file is a LEAD FILE, not a source.** Nothing here may be published on
> its own authority. Publish the underlying source it names, having read that
> source. Verify against primary sources.

# Matsu ferry-port access nodes

**Checked 6 September 2026.** This pass fetched full Maritime and Port Bureau
pages for the Small Three Links schedule, vessel records for Ji Shun No. 10
and Hong Shun No. 6, the Bureau's Matsu operating summary, and its Matsu-office
access page. The result is a node/access layer, not a complete terminal
facility survey.

## What is established

- **Claim.** The official vessel pages identify the Nangan Fuao Passenger
  Transport Building and the Beigan Baisha Port Affairs Building as station and
  shore-connection locations.
- **Sources.** `Ji Shun No. 10 passenger-ship information` and `Hong Shun No. 6 passenger-ship information`.
- **Publisher.** Maritime and Port Bureau, Ministry of Transportation and Communications / 交通部航港局.
- **URLs.**
  - https://www.motcmpb.gov.tw/PassengerShip/Detail?NodeId=610&PassengerShipSno=016428&ShipLaneNo=X457&SiteId=1
  - https://www.motcmpb.gov.tw/PassengerShip/Detail?NodeId=610&PassengerShipSno=015545&ShipLaneNo=C014&SiteId=1
- **Kind.** PRIMARY. **Confidence.** High — full vessel pages fetched and read.
- **Original-language evidence.** `北竿白沙港務大樓、南竿福澳港旅運大樓` appears in both station-information contexts.

- **Claim.** The official schedule names Fuao–Fuzhou Langqi and Baisha–Fuzhou Huangqi and gives approximate durations of 90 and 30 minutes.
- **Source.** `Mini-three-links sailing table` / `小三通 — 航班表`.
- **URL.** https://www.motcmpb.gov.tw/BoatSchedule?nodeId=380&siteId=1
- **Kind.** PRIMARY. **Confidence.** High — full page fetched and read.
- **Original-language evidence.** `馬祖(南竿福澳)-福州(琅岐)航線航程時間約為 90 分鐘` and `馬祖(北竿白沙)-福州(黃岐)航線航程時間約為 30 分鐘`.

- **Claim.** The Bureau's checked operating summary treats the two Matsu Small Three Links route families as separate current operating families and lists their vessel contexts.
- **Source.** `Cross-strait shipping business — operating points` / `兩岸航運業務 — 工作重點`.
- **URL.** https://www.motcmpb.gov.tw/Information/Detail/68173c5b-6b25-401f-ab32-62a7d902bd95?NodeId=334&SiteId=1
- **Kind.** PRIMARY. **Confidence.** High — page last checked 4 August 2026 and full route/vessel table read.
- **Original-language evidence.** `馬祖地區小三通客運航線，計有南竿福澳-琅岐、北竿白沙－黃岐2條航線`.

- **Claim.** The official Matsu-office access page describes access from Nangan Airport by bus to Fuao Village stop, then approximately five minutes on foot to the new administrative passenger building; it separately gives approximately three minutes from the Fuao passenger pier.
- **Source.** `Northern Maritime Affairs Center — Matsu office` / `北部航務中心-馬祖辦公室`.
- **URL.** https://www.motcmpb.gov.tw/Information/Detail/67c2de99-d8fc-4a9e-a6f3-59888b7cb18c?NodeId=105&SiteId=1
- **Kind.** PRIMARY. **Confidence.** High — full page read; last checked 6 May 2026.
- **Original-language evidence.** `於南竿航空站門口搭乘客運前往福澳村站，步行前往新行政旅運大樓約5分鐘`; `船舶於福澳港客運碼頭下船，步行前往新行政旅運大樓約3分鐘`.

- **Claim.** Ji Shun No. 10 is recorded on Baisha–Huangqi with capacity 149 and vessel accessibility fields; Hong Shun No. 6 is recorded on Nangan–Beigan with the two port buildings.
- **Sources.** The two full vessel records above.
- **Kind.** PRIMARY. **Confidence.** High — official vessel fields read directly.

## Conflicts and measurement boundaries

- The schedule page gives route-family approximate crossing times, while vessel
  pages give vessel identity and terminal/shore-connection fields. They are not
  interchangeable with a dated sailing timetable or terminal-wide transfer
  time.
- Vessel accessibility fields describe the named vessel/shore facility record;
  they do not establish a universal accessibility inventory for every sailing
  or every port building.

## Checked and failed

- **Complete Fuao/Baisha building inventory** — checked 6 September 2026: the
  fetched pages identify names and access relationships but do not provide a
  complete current facility, platform, lift, luggage or step-free-path survey.
- **Exact bus-stop ID and timed ferry connection** — checked 6 September 2026:
  the access page supplies a named stop and approximate walk, not a TDX stop ID,
  full bus timetable or timed sailing connection.
- **Current monthly sailing, fare and check-in detail** — checked 6 September
  2026: the dynamic schedule requires a travel-date query; this page does not
  promote an undated route-family duration into a current timetable or fare.

## Stated gaps

The next useful pull is a current official terminal-facility or county access
page for each Fuao/Baisha building, followed by explicit TDX bus-stop evidence
if the guide is to promote a stop-level interchange rather than the published
access chain.
