---
title: Taiwan High Speed Rail
summary: The 350 km, 12-station west-coast high-speed railway, built through a BOT concession and operated with a Japanese-reference 700T system whose procurement history remains contested in official reports.
order: 1
operator: THSR
updated: 2026-08-24
lead:
  value: "350"
  unit: km
  label: Railway Bureau route length
  source: rb-thsr
facts:
  - label: "Operator"
    value: "Taiwan High Speed Rail Corporation"
    source: thsrc-business
  - label: "Stations"
    value: "12"
    source: rb-thsr
  - label: "Original operating concession"
    value: "35 years"
    source: rb-thsr
  - label: "Amended concession"
    value: "70 years"
    source: rb-thsr
  - label: "Opening stages"
    value: "2007, 2015 and 2016"
    source: rb-thsr
  - label: "Power"
    value: "25 kV, 60 Hz AC overhead"
    source: rb-thsr
  - label: "Train"
    value: "700T, 12 cars, 300 km/h maximum operating speed"
    source: rb-thsr
specs:
  - label: "Route length"
    value: "350"
    unit: "km"
    source: rb-thsr
  - label: "Viaduct and bridge share"
    value: "73"
    unit: "%"
    source: rb-thsr
  - label: "Tunnel share"
    value: "18"
    unit: "%"
    source: rb-thsr
  - label: "Embankment and cut share"
    value: "9"
    unit: "%"
    source: rb-thsr
  - label: "Overhead supply"
    value: "25,000 / 60"
    unit: "V / Hz AC"
    source: rb-thsr
  - label: "Formation (powered + unpowered)"
    value: "9+3"
    unit: "cars"
    source: rb-thsr
  - label: "Maximum operating speed"
    value: "300"
    unit: "km/h"
    source: rb-thsr
sources:
  - id: tdx-thsr
    title: "TDX THSR station records"
    titleOriginal: "臺灣高鐵車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station?%24format=JSON&%24top=1000"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The committed 24 August 2026 Station pull contains 12 records with station IDs, codes, names, addresses and coordinates. The checked Route and StationOfRoute paths returned 404 and are not used to infer a sequence."
  - id: tdx-thsr-shape
    title: "TDX THSR line shape"
    titleOriginal: "臺灣高鐵路線幾何資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平臺)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Shape?%24format=JSON&%24top=1000"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The committed 24 August 2026 Shape pull contains one current High-Speed Rail Line geometry record."
  - id: thsrc-business
    title: "Main business"
    titleOriginal: "主要業務"
    publisher: "Taiwan High Speed Rail Corporation (台灣高速鐵路股份有限公司)"
    url: "https://www.thsrc.com.tw/corp/410c493f-6d1b-49ae-8480-8b36dab7c5ef"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator lists the 12 stations and its current operating and station-business scope."
  - id: rb-thsr
    title: "Taiwan High-Speed Rail project"
    titleOriginal: "台灣高鐵"
    publisher: "Railway Bureau, Ministry of Transportation and Communications (交通部鐵道局)"
    url: "https://www.rb.gov.tw/zh-TW/main/main_28/20250505_152320/20251104_134001/20250505_180533/"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The builder and regulator’s project history gives the BOT contract, financial restructuring, route, opening chronology, structures, power, signalling, vehicles and maintenance facilities."
  - id: cy-bot
    title: "Investigation into whether government investment in the High-Speed Rail company violated BOT principles"
    titleOriginal: "政府直接、間接投資高鐵公司有無違反BOT精神案"
    publisher: "Control Yuan, Taiwan (監察院)"
    url: "https://www.cy.gov.tw/CyBsBoxContent2.aspx?n=718&s=356"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The official investigation record identifies the case number, adoption date and report files for the government-investment/BOT dispute."
  - id: cy-funding
    title: "High-Speed Rail did not fulfil the government-zero-investment commitment"
    titleOriginal: "高鐵未能履行「政府零出資」承諾"
    publisher: "Control Yuan, Taiwan (監察院)"
    url: "https://www.cy.gov.tw/News_Content.aspx?n=795&s=5321"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The official statement records the Control Yuan’s criticism that public entities supplied 37.42% and describes the supervision and BOT-principle dispute."
  - id: cy-switch
    title: "Investigation into High-Speed Rail turnout-signal failures"
    titleOriginal: "台灣高鐵轉轍器訊號異常案調查報告"
    publisher: "Control Yuan, Taiwan (監察院)"
    url: "https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/54560"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The report records the European ICE/TGV reference bid, the 1999 change of signalling, power and rolling stock to the Japanese Shinkansen system, and the reported US$65 million compensation plus 5% interest."
  - id: cy-mixed
    title: "Investigation into High-Speed Rail turnout failures"
    titleOriginal: "調查報告"
    publisher: "Control Yuan, Taiwan (監察院)"
    url: "https://cybsbox.cy.gov.tw/CYBSBoxSSL/edoc/download/45303"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "A separate official report records the Ministry’s account that Siemens turnout and control equipment remained European while the other systems followed Japanese Shinkansen technology; this is published as a conflict, not collapsed into one description."
  - id: motc-ridership
    title: "Passenger Traffic of High-Speed Rail Stations"
    titleOriginal: "高速鐵路各站旅客人數"
    publisher: "Ministry of Transportation and Communications, Taiwan (交通部)"
    url: "https://www.motc.gov.tw/ch/app/data/doc?detailNo=1&id=580&module=mebook&serno=202501090000&type=s"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "Table 2-9 publishes station-level entry and exit traffic in units of 10,000 passengers and notes each station’s opening date; the current PDF is retained as the source for the station-level TBC boundary."
---

Taiwan High Speed Rail is a 350 km railway with twelve stations, according to the Railway Bureau’s current project record.[^rb-thsr] The operator’s own business page names the same twelve-station chain from Nangang to Zuoying and describes station-area commerce and transport operation as part of its business scope.[^thsrc-business] TDX independently returned twelve current Station records and one Shape record on 24 August 2026; the checked Route and StationOfRoute endpoints returned 404, so this page does not claim that TDX supplied a route sequence.[^tdx-thsr][^tdx-thsr-shape]

## Construction and opening stages

The opening chronology is four-stage in practical terms. Banqiao, Taoyuan, Hsinchu, Taichung, Chiayi, Tainan and Zuoying entered service on 5 January 2007.[^rb-thsr] Taipei followed on 2 March 2007.[^rb-thsr] The later stations Miaoli, Changhua and Yunlin opened on 1 December 2015, and Nangang opened on 1 July 2016.[^rb-thsr] The dates matter because a station page about a later addition is not evidence that the original railway had twelve operating stations on its first day.[^rb-thsr]

The route’s physical form reflects the west-coast corridor rather than a single tunnelled urban railway. The Railway Bureau reports approximately 73% bridges and viaducts, 18% tunnels and 9% embankment or cut sections.[^rb-thsr] It identifies vehicle bases at Wuri and Zuoying, a northern Hsizhi base not yet established in the page’s account, a main workshop at Yanchao and five engineering-and-electrical bases.[^rb-thsr] These are system-level facilities; the guide does not convert them into a guessed “depot for every station” field.

## BOT contract and financial disputes

The Railway Bureau describes the project as Taiwan’s first major national infrastructure project promoted through private investment participation.[^rb-thsr] It records the 23 July 1998 signing of a 35-year construction-and-operation concession and a separate 50-year station-area development concession.[^rb-thsr] The stated project cost was approximately NT$513.3 billion, with the government responsible for land, the Taipei underground co-construction section, supervision and management, while the concession company funded civil works, stations, core electromechanical systems, operation and maintenance.[^rb-thsr]

The original financial model did not remain unchanged. The Railway Bureau says a 27 July 2015 amendment extended the concession to 70 years, cancelled the station-area development contract, returned development land, reduced capital to clear accumulated losses and added NT$30 billion of government investment.[^rb-thsr] The Control Yuan’s official record names an investigation into whether direct and indirect public investment violated BOT principles.[^cy-bot] In a related statement, the Control Yuan says public and state-enterprise entities supplied 37.42% and describes that as a serious departure from the government-zero-investment commitment.[^cy-funding] Those are the source’s figures and characterization; this page does not average them into a new ownership percentage.

## Eurotrain, Shinkansen and the system boundary

The procurement history also has an official conflict. One Control Yuan report says the winning application proposed German ICE and French TGV as its European electromechanical reference system, then records a 12 December 1999 change of the core electromechanical system—signalling, power and vehicles—to the Japanese Shinkansen system.[^cy-switch] That report says the change led to commercial arbitration and compensation to the German and French suppliers of US$65 million plus 5% interest.[^cy-switch]

A separate Control Yuan report records the Ministry’s account that railway systems are assembled from specialist subsystems, that Siemens turnout and control equipment remained European for local requirements, and that the other equipment followed Japanese Shinkansen technology.[^cy-mixed] The two reports should be read together, not harmonised into a neat origin label: one foregrounds a European-to-Japanese change and its compensation, while the other explains the retained European turnout subsystem and rejects “mixed blood” as a useful description of the whole railway.[^cy-switch][^cy-mixed]

## Power, signalling and vehicles

The Railway Bureau identifies the Japanese Taiwan Shinkansen consortium as the 2000 core-electromechanical contractor and names the Tokaido–Sanyo Shinkansen as the reference system.[^rb-thsr] Its published technical description gives 25,000-volt, 60-Hz AC overhead power, automatic train control and centralised traffic control.[^rb-thsr] It describes the 700T as based on the Japanese 700 series but adjusted for Taiwan’s route and environment, with nine powered and three unpowered cars, one business car, eleven standard cars, 300 km/h maximum operating speed and a 304 m train length.[^rb-thsr]

## Ridership and source boundary

The MOTC yearbook’s Table 2-9 is titled “Passenger Traffic of High-Speed Rail Stations” and publishes entry and exit values in units of 10,000 passengers.[^motc-ridership] The line panel uses the committed Railway Bureau open-data monthly network snapshot and keeps the exact values, source URL and retrieval date beside the chart.[^motc-ridership] Station-level current values, trends and rank remain TBC while the wide table is not yet safely transcribed into the station data layer with its entry/exit dimensions preserved.[^motc-ridership]
