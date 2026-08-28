---
title: Taiwan High Speed Rail
kind: system
description: Taiwan’s 350 km high-speed railway, with 12 stations from Nangang to Zuoying and a BOT history that changed during financial restructuring.
order: 3
operator: THSR
hero:
  image: thsr/hero
  alt: A white-and-orange 700T high-speed train on an elevated viaduct approaching a platform, overhead catenary structures above.
  caption: A 700T train approaching Taichung Station.
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

Taiwan High Speed Rail is the west-coast intercity railway operated by Taiwan High Speed Rail Corporation under a national BOT project.[^rb-thsr] The operator’s current business page lists twelve stations, from Nangang and Taipei through the western corridor to Zuoying.[^thsrc-business] This system folder keeps the station sequence in a committed TDX snapshot while the historical narrative stays tied to Railway Bureau and Control Yuan documents.[^tdx-thsr][^rb-thsr]

The railway opened in stages rather than on one date: seven stations began service on 5 January 2007, Taipei followed on 2 March 2007, Miaoli, Changhua and Yunlin were added on 1 December 2015, and Nangang on 1 July 2016.[^rb-thsr] These dates are repeated on station pages because “the high-speed railway opened” and “this station opened” are different claims.[^rb-thsr]

The financing record is part of the system’s identity. The Railway Bureau describes the project as Taiwan’s first major national infrastructure project promoted through private participation, with the 1998 contracts originally setting a 35-year construction-and-operation concession and a 50-year station-area development concession.[^rb-thsr] The 2015 amendment extended the concession to 70 years, cancelled the station-area development contract, reduced capital and brought NT$30 billion of government investment into the company.[^rb-thsr] The Control Yuan records a separate dispute over whether public and state-enterprise investment—reported there as 37.42%—departed from the promised zero-government-funding model.[^cy-funding][^cy-bot]

The system is physically distinctive. The Railway Bureau reports approximately 73% bridges and viaducts, 18% tunnels and 9% embankment or cut sections.[^rb-thsr] It records 25,000-volt, 60-Hz AC overhead power and ATC/CTC train-control systems, and describes the 700T as a twelve-car EMU based on the Japanese 700 series.[^rb-thsr] The same page names vehicle bases at Wuri and Zuoying, a main workshop at Yanchao and five engineering-and-electrical bases.[^rb-thsr] That is the source-backed system description; it is not a reason to assign every depot or every maintenance activity to an individual station.

## The European reference and Japanese system conflict

The tender history has two official readings that this site keeps side by side. One Control Yuan report says the winning bid used German ICE and French TGV as the European reference system, then records a 12 December 1999 change of signalling, power and rolling stock to the Japanese Shinkansen system and compensation of US$65 million plus 5% interest to the German and French suppliers.[^cy-switch] A separate Control Yuan report records the Ministry’s account that Siemens turnout and control equipment remained European while the other subsystems followed Japanese Shinkansen technology, and says that using different specialist suppliers can be normal if the interfaces work.[^cy-mixed] The disagreement is therefore not reduced to the slogan “European” or “Japanese”: one source frames the change as a mixed-system problem, while the other describes a Japanese system with a specifically retained European turnout subsystem.[^cy-switch][^cy-mixed]

## Ridership data

The Railway Bureau’s open-data record describes a High-Speed Rail traffic dataset, and the MOTC statistical yearbook publishes station-level entry and exit traffic in units of 10,000 passengers.[^motc-ridership] The line panel below uses a committed monthly network snapshot with its source and retrieval date visible; it does not sum station movements or treat entry and exit as two separate trips.[^motc-ridership] Current station-level values, trends and within-line ranks remain TBC until the wide PDF table is transcribed into the same station schema without losing its entry/exit dimensions.[^motc-ridership]

The TDX checks were deliberately narrower than the metro pull. Station and Shape returned records on 24 August 2026, while the checked THSR Route and StationOfRoute paths returned 404; the station order shown here is consequently the operator’s twelve-station order, not a fabricated route response.[^tdx-thsr][^tdx-thsr-shape]

The [ridership record](/rail/thsr/operations/ridership/) and [fare record](/rail/thsr/operations/fares/) cover recent operating performance and the standard fare table, both largely from the operator's own annual report and site — plus a caught-and-corrected wikipedia error and one fare figure that stays unresolved between conflicting sources. The [fleet roster](/rail/thsr/rolling-stock/fleet-roster/) covers the 700T fleet, the manufacturer split a common shorthand collapses, the incoming N700ST order, and an earthquake derailment. The [accessibility record](/rail/thsr/facilities/accessibility/) covers the wheelchair spaces on the current trainsets, an increase planned for the next generation, and a disability-rights campaign that pushed for exactly that. The [engineering and BOT-restructuring record](/rail/thsr/technology/engineering/) goes deeper than this page on the financial crisis that stretched THSR's original concession, an unresolved design-speed conflict, and a newly approved extension. The [station-area development record](/rail/thsr/projects/joint-development/) covers the named mechanism behind several of the twelve stations and the sharp contrast between Taoyuan/Hsinchu's growth and Changhua's stalled land sales.
