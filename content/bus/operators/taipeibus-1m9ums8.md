---
title: "Taipei Bus Co., Ltd. — operator profile"
summary: "The operator history, facilities, electric-bus programme and safety record behind the Taipei Bus TDX records."
updated: 2026-08-20
facts:
  - label: English name
    value: "Taipei Bus Co., Ltd."
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "臺北客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-taipeibus-1m9ums8"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TaipeiBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1407"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "126"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-003-307"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.tpebus.com.tw"
    source: tdx-bus-operator-pull
  - label: Founded
    value: "1954"
    source: tpebus-home
  - label: Registered legal name
    value: "臺北汽車客運股份有限公司"
    source: company-registry
  - label: Registered representative
    value: "李博文"
    source: company-registry
  - label: Paid-in capital
    value: "NT$390,000,000"
    source: company-registry
  - label: Published vehicle snapshot
    value: "877 vehicles"
    source: tpebus-about
  - label: Route 656 electric-bus replacement
    value: "26 buses; NT$182 million subsidy (February 2023)"
    source: ntpc-electric-656
  - label: Published stations
    value: "18 station sites"
    source: tpebus-about
  - label: Published repair facilities
    value: "13 repair locations"
    source: tpebus-about
specs:
  - label: Fleet models
    value: TBC
  - label: Public group label
    value: "首都客運集團 (four companies named; legal parent TBC)"
    source: ntpc-police-group
  - label: Depots or garages
    value: "Published sites; capacity and opening dates TBC"
    source: tpebus-about
  - label: Contract history
    value: TBC
  - label: 2023 route-667 incident
    value: "Fatal pedestrian collision; NT$90,000 fine and plate suspension"
    source: ntpc-667-incident
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator records, contact fields, source municipalities, operator IDs, route associations and route names; the pull contains no ownership, fleet-model, depot or contract-history fields.
  - id: tpebus-home
    title: Taipei Bus home page
    titleOriginal: 臺北客運
    publisher: 臺北汽車客運股份有限公司
    url: https://www.tpebus.com.tw/
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the operator's own founding and name-change history, plus its published ISO certification statements.
  - id: tpebus-about
    title: Taipei Bus company profile
    titleOriginal: 公司簡介
    publisher: 臺北汽車客運股份有限公司
    url: https://www.tpebus.com.tw/co_about.php
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the operator's stated business scope, service area, dated-unknown operating snapshot, station list, repair-facility list and service certifications.
  - id: tpebus-stations
    title: Taipei Bus station and facility information
    titleOriginal: 站場簡介
    publisher: 臺北汽車客運股份有限公司
    url: https://www.tpebus.com.tw/co_office.html
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports published station addresses, phone numbers and route allocations; it does not publish capacity or opening dates.
  - id: company-registry
    title: Taipei Bus company record
    titleOriginal: 臺北汽車客運股份有限公司 - 經濟部商工登記公示資料查詢
    publisher: 經濟部商業發展署
    url: https://findbiz.nat.gov.tw/fts/company/35505603
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports legal identity, unified business number, registered address, representative, capital, shares, board and registered business categories.
  - id: ntpc-police-group
    title: New Taipei police and Capital Bus Group public-safety cooperation
    titleOriginal: 新北警與首都客運集團產官合作 公益推動交安宣導及道安講習
    publisher: 新北市政府警察局交通警察大隊
    url: https://www.traffic.police.ntpc.gov.tw/cp-909-120378-27.html
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the public group's stated four-company membership and the 2024 traffic-safety cooperation; it does not establish a statutory parent relationship.
  - id: ntpc-electric-656
    title: Route 656 fully electrified
    titleOriginal: 656線公車全面電動化 新北市規模最大電動公車路線
    publisher: 新北市政府交通局
    url: https://www.traffic.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=b0cdda14cefa207e59d0e0a39c8a4d48&id=148
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports 26 electric buses on Taipei Bus route 656, the NT$182 million replacement subsidy and the 2023 project context; it does not identify vehicle models.
  - id: ntpc-quality
    title: New Taipei bus service-quality evaluation
    titleOriginal: 新北市公車服務品質評鑑出爐 臺北、首都客運16連霸
    publisher: 新北市政府交通局
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=202508200020&id=28
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the 2025 announcement that Taipei Bus and Capital Bus were rated 優等 and described as having 16 consecutive years at that level; citywide electric-bus totals are not attributed to Taipei Bus alone.
  - id: ntpc-667-incident
    title: Taipei Bus major-accident review
    titleOriginal: 臺北客運重大事故檢討會 新北交通局現場督導改善
    publisher: 新北市政府交通局
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=24d56fe3a17a95d68572b2031a6b58ae&id=e8ca970cde5c00e1
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the 19 August 2023 route-667 fatal pedestrian collision, NT$90,000 fine, plate suspension, evaluation deduction and driver-licence action.
  - id: audit-bus-labour
    title: Traffic Bureau audit report
    titleOriginal: 拾柒、交通局主管
    publisher: 臺北市審計處
    url: https://auditreport.audit.gov.tw/ServerFile/Get/63888887754419499129939d6eb2c74c5faf2727fa3e90cd8e
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the audit table recording three New Taipei labour-law penalties against Taipei Bus totalling NT$270,000 in ROC years 111–113.
---

## TDX record

The committed TDX pull identifies this page as the operator record for Taipei Bus Co., Ltd. (臺北客運), with source municipality NewTaipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-taipeibus-1m9ums8, operator code TaipeiBus, operator number 1407, phone 0800-003-307 and URL http://www.tpebus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Company history and legal identity

臺北客運's own website traces the business to 1954, when it was called 文山輕便客運社; it says the business was reorganised as 文山汽車客運股份有限公司 in 1956 and took the name 臺北汽車客運股份有限公司 in June 1962 [^tpebus-home].

The current legal record is more precise than the public trading name: the Ministry of Economic Affairs registry identifies 臺北汽車客運股份有限公司 under unified business number 35505603, with registered offices at 新北市三重區重新路2段78號8樓 and 李博文 as representative [^company-registry]. The same record gives paid-in capital of NT$390 million and 39 million issued shares, and lists urban and highway passenger transport, vehicle repair and related transport-equipment activities among its registered businesses [^company-registry]. The registry lists the board's corporate representatives and share blocks, but it does not label a parent company [^company-registry].

The public label 首都客運集團 is narrower than a legal ownership chart. A 2024 New Taipei police release describes that group as 首都客運、臺北客運、大都會客運 and 三重客運, in the context of a traffic-safety publicity partnership [^ntpc-police-group]. That establishes the four-company membership stated by the government release; it does not, by itself, establish that Capital Bus is Taipei Bus's statutory parent [^ntpc-police-group].

## Operating character and facilities

The operator describes its business as urban public-bus, highway-bus and national-route passenger transport serving Greater Taipei and parts of Keelung and Taoyuan [^tpebus-about]. Its company profile publishes an operating snapshot of 20 Taipei joint-operation routes, 63 New Taipei routes, four highway or road passenger routes, 877 vehicles and 1,381 employees [^tpebus-about]. The numbers are retained as the operator's own snapshot because the committed TDX record measures route associations differently: this page's 126 NewTaipei records are generated from the structured pull rather than substituted with the website's three-category count [^tdx-bus-operator-pull].

The profile names station sites including 板橋後站、四海站、三峽一站、三峽二站、南雅站、歡仔園站、樹林站、中和站、新店站、木柵站、中華站、五福站 and 三重二站, and names 冷水坑保養總廠 plus repair units at several operating sites [^tpebus-about]. The separate station page publishes addresses, phone numbers and route allocations for the facilities it details; examples include 四海站、南雅站、中和站、新店站、木柵站 and 三峽一站 [^tpebus-stations]. Neither page gives a depot capacity or opening date, so those remain TBC rather than being inferred from route assignments [^tpebus-about][^tpebus-stations].

The fleet evidence is specific but incomplete. New Taipei's February 2023 release records 26 electric buses entering service on Taipei Bus route 656 and says the operator received NT$182 million to replace those 26 vehicles; the same release describes the route as the city's first fully electrified route at that point [^ntpc-electric-656]. It does not identify the buses' manufacturer, chassis, body or passenger capacity, and TDX has no model field for this operator record [^ntpc-electric-656][^tdx-bus-operator-pull]. The page therefore describes the electric transition without inventing a model roster.

## Service record and incidents

New Taipei's 2025 service-quality announcement lists 臺北客運 among four 優等 operators for the 113 second-period evaluation and says Taipei Bus and Capital Bus had each reached 16 consecutive years at that level [^ntpc-quality]. This is an evaluation result, not a claim that every route or facility performed identically [^ntpc-quality].

The record also includes a serious documented incident. New Taipei's transport bureau says a Taipei Bus 667 bus failed to yield to a pedestrian at the 壽德街 and 民德路 intersection in Zhonghe on 19 August 2023, causing a fatality; the bureau says it imposed a NT$90,000 fine, suspended the vehicle plate and deducted service-evaluation points [^ntpc-667-incident]. The release says the driver lost the licence and quotes the general manager acknowledging that the driver had not followed the company's stop-before-moving rule [^ntpc-667-incident]. Separately, a Taipei audit report records three labour-law penalties against Taipei Bus in ROC years 111–113, totalling NT$270,000, with the source data compiled from the Ministry of Labor employer-penalty query system [^audit-bus-labour].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `K1` / 安坑1線 [^tdx-bus-operator-pull]
- `177Ruifang Sightseeing Bus` / 177瑞芳觀光公車 [^tdx-bus-operator-pull]
- `179Resident Square-Jinguashi(Gold Museum)` / 179 [^tdx-bus-operator-pull]
- `Sanying 2` / 三鶯2線(原812) [^tdx-bus-operator-pull]
- `K2` / 安坑2線 [^tdx-bus-operator-pull]
- `201` [^tdx-bus-operator-pull]
- `231` [^tdx-bus-operator-pull]
- `241` [^tdx-bus-operator-pull]
- `242` [^tdx-bus-operator-pull]
- `243` [^tdx-bus-operator-pull]
- `245` [^tdx-bus-operator-pull]
- `264` [^tdx-bus-operator-pull]
- `275` [^tdx-bus-operator-pull]
- `K3` / 安坑3線 [^tdx-bus-operator-pull]
- `K5` / 安坑5線 [^tdx-bus-operator-pull]
- `51` [^tdx-bus-operator-pull]
- `57` [^tdx-bus-operator-pull]
- `570` [^tdx-bus-operator-pull]
- `571` [^tdx-bus-operator-pull]
- `572` [^tdx-bus-operator-pull]
- `573` [^tdx-bus-operator-pull]
- `574` [^tdx-bus-operator-pull]
- `575` [^tdx-bus-operator-pull]
- `577` [^tdx-bus-operator-pull]
- `585` [^tdx-bus-operator-pull]
- `596` [^tdx-bus-operator-pull]
- `624` [^tdx-bus-operator-pull]
- `624G` / 624綠野香坡 [^tdx-bus-operator-pull]
- `656` [^tdx-bus-operator-pull]
- `657` [^tdx-bus-operator-pull]
- `657Ext` / 657延 [^tdx-bus-operator-pull]
- `658` [^tdx-bus-operator-pull]
- `667` [^tdx-bus-operator-pull]
- `701` [^tdx-bus-operator-pull]
- `702` [^tdx-bus-operator-pull]
- `705` [^tdx-bus-operator-pull]
- `706` [^tdx-bus-operator-pull]
- `707` [^tdx-bus-operator-pull]
- `778` [^tdx-bus-operator-pull]
- `779` [^tdx-bus-operator-pull]
- `793` [^tdx-bus-operator-pull]
- `795Muzha` / 795往木柵(台灣好行-木柵平溪線) [^tdx-bus-operator-pull]
- `795Shifenliao` / 795往十分寮(台灣好行-木柵平溪線) [^tdx-bus-operator-pull]
- `795Pingsi` / 795往平溪(台灣好行-木柵平溪線) [^tdx-bus-operator-pull]
- `796` [^tdx-bus-operator-pull]
- `8` [^tdx-bus-operator-pull]
- `805` [^tdx-bus-operator-pull]
- `806` [^tdx-bus-operator-pull]
- `807` [^tdx-bus-operator-pull]
- `823` [^tdx-bus-operator-pull]
- `824` [^tdx-bus-operator-pull]
- `843` [^tdx-bus-operator-pull]
- `845` [^tdx-bus-operator-pull]
- `848` [^tdx-bus-operator-pull]
- `851` [^tdx-bus-operator-pull]
- `852` [^tdx-bus-operator-pull]
- `889` [^tdx-bus-operator-pull]
- `908Ext` / 908延 [^tdx-bus-operator-pull]
- `908` [^tdx-bus-operator-pull]
- `910` [^tdx-bus-operator-pull]
- `916` [^tdx-bus-operator-pull]
- `917` [^tdx-bus-operator-pull]
- `920` [^tdx-bus-operator-pull]
- `920Sub` / 920副 [^tdx-bus-operator-pull]
- `920A` [^tdx-bus-operator-pull]
- `921` [^tdx-bus-operator-pull]
- `922` [^tdx-bus-operator-pull]
- `925` [^tdx-bus-operator-pull]
- `932` [^tdx-bus-operator-pull]
- `932 Sub National Academy for Educational Research` / 932繞國家教育研究院 [^tdx-bus-operator-pull]
- `939` [^tdx-bus-operator-pull]
- `939Sub` / 939副 [^tdx-bus-operator-pull]
- `939Frog Bus` / 939跳蛙 [^tdx-bus-operator-pull]
- `940` [^tdx-bus-operator-pull]
- `941` [^tdx-bus-operator-pull]
- `943` [^tdx-bus-operator-pull]
- `948` [^tdx-bus-operator-pull]
- `965` / 965(台灣好行-九份金瓜石線) [^tdx-bus-operator-pull]
- `981` [^tdx-bus-operator-pull]
- `99` [^tdx-bus-operator-pull]
- `BL17` / 藍17 [^tdx-bus-operator-pull]
- `BL18` / 藍18 [^tdx-bus-operator-pull]
- `BL31` / 藍31 [^tdx-bus-operator-pull]
- `BL32` / 藍32 [^tdx-bus-operator-pull]
- `BL33` / 藍33 [^tdx-bus-operator-pull]
- `BL35` / 藍35 [^tdx-bus-operator-pull]
- `BL40` / 藍40 [^tdx-bus-operator-pull]
- `BL43 Ext Nantianmu` / 藍43延南天母 [^tdx-bus-operator-pull]
- `BL43` / 藍43 [^tdx-bus-operator-pull]
- `BL44` / 藍44 [^tdx-bus-operator-pull]
- `BL44Ext` / 藍44延 [^tdx-bus-operator-pull]
- `BL45` / 藍45 [^tdx-bus-operator-pull]
- `BL46` / 藍46 [^tdx-bus-operator-pull]
- [`BR7Jianye Rd.` / 棕7建業路](/bus/routes/colour-brown/brown-7-1kouq4z/) [^tdx-bus-operator-pull]
- [`BR7` / 棕7](/bus/routes/colour-brown/brown-7-1npwhqs/) [^tdx-bus-operator-pull]
- [`BR7G` / 棕7綠野香坡](/bus/routes/colour-brown/brown-7-ssatjm/) [^tdx-bus-operator-pull]
- `O2` / 橘2 [^tdx-bus-operator-pull]
- `O3` / 橘3 [^tdx-bus-operator-pull]
- `O5` / 橘5 [^tdx-bus-operator-pull]
- `Green Villa-MRT Xindian stn` / 新店(綠中海)-捷運新店站 [^tdx-bus-operator-pull]
- `Tucheng-Nantianmu Square` / 土城-南天母廣場 [^tdx-bus-operator-pull]
- `Ruifang-Nèikē` / 瑞芳-內科(北客) [^tdx-bus-operator-pull]
- `Yingge Rail Sta.- Songshan Airport` / 鶯歌火車站-松山機場 [^tdx-bus-operator-pull]
- `Sanxia-MRT Fuzhong Sta.` / 三峽-捷運府中站 [^tdx-bus-operator-pull]
- `Zhonghe-NTPC Banqiao Bus Stop` / 中和-新北板橋公車站 [^tdx-bus-operator-pull]
- `MRT Xindian Station-Pinglin` / 捷運新店站-坪林 [^tdx-bus-operator-pull]
- `Sanxia-Xinyi Dist. Taipei City` / 三峽-臺北市信義區 [^tdx-bus-operator-pull]
- `MRT Jingan Sta.-National Taipei University(Sanxia Campus)` / 捷運景安站-三峽臺北大學 [^tdx-bus-operator-pull]
- `Sanxia-Yongning MRT station` / 三峽-捷運永寧站 [^tdx-bus-operator-pull]
- `L-B Frog` / 林口-板橋 [^tdx-bus-operator-pull]
- `Sanxia-Neihu` / 三峽-內科 [^tdx-bus-operator-pull]
- `Hsin Tien Senior High School-Sanxia` / 新店高中-三峽 [^tdx-bus-operator-pull]
- `Linkou-MRT Fuzhong Station` / 林口-捷運府中站 [^tdx-bus-operator-pull]
- `Beta Community - MRT Dingpu Sta.` / 北大社區-捷運頂埔站 [^tdx-bus-operator-pull]
- `MRT DingXi Station-MRT Dingpu Station` / 捷運頂溪站-捷運頂埔站 [^tdx-bus-operator-pull]
- `Sanxia-Zhonghe High School` / 三峽-中和高中 [^tdx-bus-operator-pull]
- `Sanxia-National Taiw` / 三峽-捷運台大醫院站 [^tdx-bus-operator-pull]
- `MRT Yingtao Fude Sta.-Ming Chuan University (Taoyuan Campus)` / 捷運鶯桃福德站-銘傳大學(桃園校區) [^tdx-bus-operator-pull]
- `Yingge Rail Sta.-C.K.S. Memorial Hall` / 鶯歌火車站-中正紀念堂 [^tdx-bus-operator-pull]
- `Zhonghe ZuoAn Commumity-MRT Dingxi Station` / 中和左岸社區-捷運頂溪站 [^tdx-bus-operator-pull]
- `MRT Qizhang station-Global Industrial Area` / 捷運七張站-全球工業區 [^tdx-bus-operator-pull]
- `Zhongxiao Fuxing Sta.-Sanxia` / 捷運忠孝復興站-三峽 [^tdx-bus-operator-pull]
- `Shiding High School-MRT Zhongxiao Fuxing Sta.` / 石碇高中-捷運忠孝復興站 [^tdx-bus-operator-pull]
- `Ruifang-Songshan Station` / 瑞芳-松山車站(北客) [^tdx-bus-operator-pull]
- `Heyi Housing-MRT Far Eastern Hospital Station` / 合宜住宅-捷運亞東醫院站 [^tdx-bus-operator-pull]
- `Zhonghe Huanhe W. Rd-yonghe Ren'ai Rd` / 中和環河西路-永和仁愛路 [^tdx-bus-operator-pull]

## Research gaps

The current sources establish a public four-company group label, but not a statutory parent-company relationship; the parent field remains TBC [^company-registry][^ntpc-police-group].

The operator and government pages establish a vehicle count snapshot and a 26-bus electric replacement, but no manufacturer/chassis/body/capacity roster for this operator; the model field remains TBC [^tpebus-about][^ntpc-electric-656].

The station sources establish published sites and some addresses, but not capacity or opening dates, and the sources read here do not publish a dated route-contract chronology [^tpebus-stations][^tdx-bus-operator-pull].
