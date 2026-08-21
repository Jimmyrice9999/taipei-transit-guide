---
title: "Keelung Bus — New Taipei operator profile"
summary: "A sourced profile of Keelung Bus’s history, operating sites, route snapshot and service-quality record."
updated: 2026-08-21
facts:
  - label: English name
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "基隆客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-keelungbus-napsdw"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "KeelungBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1102"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "36"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-002-279"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.kl-bus.com.tw"
    source: tdx-bus-operator-pull
  - label: Published operating-site entries
    value: "5"
    unit: stations
    source: keelung-sites
  - label: Factory-record status
    value: "公告廢止"
    source: keelung-factory
  - label: Latest New Taipei evaluation grade
    value: "甲等"
    source: ntpc-keelung-eval-114
specs:
  - label: Fleet models
    value: TBC
  - label: Depots or garages
    value: TBC
  - label: Contract history
    value: TBC
  - label: Depot opening dates and capacities
    value: TBC
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
  - id: keelung-history
    title: Zhongxing Group company history
    titleOriginal: 中興集團簡介
    publisher: Zhongxing Group / 中興大業巴士暨關係企業
    url: https://www.csgroup-bus.com.tw/?section=41
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the group’s published Keelung Bus chronology and stated service area; it does not establish a shareholding percentage.
  - id: keelung-sites
    title: Keelung Bus station directory
    titleOriginal: 基隆客運場站訊息
    publisher: Zhongxing Group / 中興大業巴士暨關係企業
    url: https://www.csgroup-bus.com.tw/?section=56
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports five published station entries, their addresses and contact numbers; it does not publish opening dates, capacities or route allocations.
  - id: keelung-factory
    title: Keelung Bus factory registration record
    titleOriginal: 基隆汽車客運股份有限公司 - 工廠基本資料
    publisher: Ministry of Economic Affairs, Administration of Commerce / 經濟部商業發展署
    url: https://findbiz.nat.gov.tw/fts/factory/31/07210000165928
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the public factory-record address, approval dates and 公告廢止 status; it is a factory record, not a current depot register.
  - id: ntpc-keelung-eval-114
    title: 2026 New Taipei first-period city-bus evaluation result
    titleOriginal: 附件 新北市114年第1期市區公車評鑑結果
    publisher: New Taipei City Department of Transportation / 新北市政府交通局
    url: https://www.traffic.ntpc.gov.tw/uploaddowndoc?dis=news&file=news%2F202604141155532.pdf&filedisplay=%E9%99%84%E4%BB%B6++%E6%96%B0%E5%8C%97%E5%B8%82114%E5%B9%B4%E7%AC%AC1%E6%9C%9F%E5%B8%82%E5%8D%80%E5%85%AC%E8%BB%8A%E8%A9%95%E9%91%91%E7%B5%90%E6%9E%9C.pdf&flag=doc
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 114 first-period grade 甲等 for 基隆客運.
  - id: ntpc-keelung-eval-109
    title: New Taipei bus service-quality evaluation announcement
    titleOriginal: 新北公車服務品質評鑑 5家業者獲優等殊榮
    publisher: New Taipei City Government Department of Transportation / 新北市政府交通局
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=859901aae5081991ab734af4fd9f3020&id=e8ca970cde5c00e1
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 109 first-period grade 乙等 and the evaluation categories described by New Taipei.
  - id: keelung-cny-2024
    title: 2024 Lunar New Year New Taipei bus timetable adjustments
    titleOriginal: 113年春節連續假期—新北市公車班次調整表
    publisher: New Taipei City Department of Transportation / 新北市政府交通局
    url: https://www.traffic.ntpc.gov.tw/uploaddowndoc?file=news%2F202402011702292.pdf&filedisplay=113%E5%B9%B4%E6%98%A5%E7%AF%80%E9%80%A3%E7%BA%8C%E5%81%87%E6%9C%9F%E2%80%94%E6%96%B0%E5%8C%97%E5%B8%82%E5%85%AC%E8%BB%8A%E7%8F%AD%E6%AC%A1%E8%AA%BF%E6%95%B4%E8%A1%A8V5.pdf&flag=doc
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports a dated official service timetable for the Keelung Bus section and its route rows; it is not a current fleet or route-total register.
  - id: keelung-group-electric-manual
    title: All-electric low-floor bus emergency manual
    titleOriginal: 全電動低地板公車緊急救援手冊
    publisher: Zhongxing Group / 中興大業巴士暨關係企業
    url: https://www.csgroup-bus.com.tw/?func=_detail&id=2421&module=news
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the group’s publication of an electric-bus emergency manual, not assignment of a model or propulsion count to Keelung Bus.
---

## History and legal record

The operator-group history dates Keelung Bus’s origin to March 1952, when it used the name Taipei Automobile Bus Co.; it records a June 1954 reorganisation as Ruifang Automobile Bus Co. and a September 1957 reorganisation under the Keelung Automobile Bus name [^keelung-history]. Those are the group’s published historical milestones, not a claim that each milestone is the statutory incorporation date [^keelung-history].

The same official history describes the company’s service area as centred on Keelung and extending into parts of Taipei and New Taipei, including the north-coast, Ruifang, Jiufen, Jinguashi, Pingxi and Fulong areas [^keelung-history]. This broad geography explains why the current data record spans city, intercity and tourist-oriented route names, but the route roster itself remains the TDX snapshot below [^keelung-history].

The company is presented on the Zhongxing Group’s own related-enterprise site, but the fetched group page does not publish a shareholding percentage or a merger/control chronology for Keelung Bus [^keelung-history]. Ownership beyond that documented group relationship is therefore TBC [^keelung-history].

MOEA’s public factory record identifies a Keelung Bus factory record at the Ruifang address associated with the record, gives a factory approval date of 18 March 1985 and a permit approval date of 25 August 1983, and marks the factory registration as 公告廢止 with a last approved change on 16 September 2004 [^keelung-factory]. This is an administrative record about a factory registration; it is not evidence that the address is a current depot or that the company ceased operating [^keelung-factory].

## Network, sites and fleet evidence

The operator-group directory publishes five Keelung Bus sites: 基二站 in Keelung’s Anle District, 瑞芳站 in Ruifang, 基隆站 in Anle District’s 國家新城, 金山站 in Jinshan, and 土城站 in Tucheng, with addresses and telephone numbers for each. The directory does not publish opening dates, capacities or route allocations, so those fields remain TBC rather than being inferred from route endpoints. [^keelung-sites]

New Taipei’s 2024 Lunar New Year timetable contains a dedicated Keelung Bus section with dated service rows and departure times for routes including `787`, `788`, `789`, `790`, `791`, `808`, `825`, `827` and `856`, as well as other route variants [^keelung-cny-2024]. It is useful evidence that the company operated a mixed north-coast, Ruifang and Keelung network at that date, but it is a temporary holiday timetable and not a current route count [^keelung-cny-2024].

The group published an all-electric low-floor bus emergency manual in 2026, but the page does not identify which member company, route or vehicle model it covers [^keelung-group-electric-manual]. No model-level chassis, body, capacity or propulsion assignment is published here for Keelung Bus; the fleet roster remains TBC [^keelung-group-electric-manual].

## Evaluation and documented oversight

New Taipei’s 114 first-period city-bus evaluation lists 基隆客運 as 甲等 [^ntpc-keelung-eval-114]. An earlier New Taipei Government announcement for the 109 first period lists the same operator as 乙等 and describes five evaluation categories: station facilities and service, vehicle equipment and safety, passenger service and driver management, accessibility, and company management [^ntpc-keelung-eval-109]. These are dated evaluation results, so they are reported as a record across periods rather than as a single timeless rating [^ntpc-keelung-eval-114] [^ntpc-keelung-eval-109].

The official factory record’s 公告廢止 status is the clearest administrative action found in the checked primary sources, but it concerns the factory registration and not a bus-service sanction. No separate named incident or route-contract enforcement case is asserted here without a full primary record. [^keelung-factory]

## TDX record

The committed TDX pull identifies this page as the operator record for KeelungBus (基隆客運), with source municipality NewTaipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-keelungbus-napsdw, operator code KeelungBus, operator number 1102, phone 0800-002-279 and URL http://www.kl-bus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `787Rueifang Industry Park` / 787經瑞芳工業區 [^tdx-bus-operator-pull]
- `787` [^tdx-bus-operator-pull]
- `788Shuttle` / 788區 [^tdx-bus-operator-pull]
- `788 Marine Science Museum` / 788海科館 [^tdx-bus-operator-pull]
- `788` [^tdx-bus-operator-pull]
- `789Shuttle` / 789區 [^tdx-bus-operator-pull]
- `789` [^tdx-bus-operator-pull]
- `790Fishing port` / 790漁港 [^tdx-bus-operator-pull]
- `790` [^tdx-bus-operator-pull]
- `791Health` / 791經貢寮區衛生 [^tdx-bus-operator-pull]
- `791Gongliao` / 791繞貢寮 [^tdx-bus-operator-pull]
- `791Shuttle` / 791區 [^tdx-bus-operator-pull]
- `791` [^tdx-bus-operator-pull]
- `808` [^tdx-bus-operator-pull]
- `825` [^tdx-bus-operator-pull]
- `826` [^tdx-bus-operator-pull]
- `827` [^tdx-bus-operator-pull]
- `846` [^tdx-bus-operator-pull]
- `856` / 856(台灣好行-黃金福隆線) [^tdx-bus-operator-pull]
- `862` [^tdx-bus-operator-pull]
- `886Shuttle` / 886區 [^tdx-bus-operator-pull]
- `886` [^tdx-bus-operator-pull]
- `891` [^tdx-bus-operator-pull]
- `953` [^tdx-bus-operator-pull]
- `953Shuttle` / 953區 [^tdx-bus-operator-pull]
- `BL41` / 藍41 [^tdx-bus-operator-pull]
- `BL41 Yanhe` / 藍41延和 [^tdx-bus-operator-pull]
- `Ruifang-Songshan Station` / 瑞芳-松山車站(基客) [^tdx-bus-operator-pull]
- `Tamsui Fisherman's Wharf Fireworks Shuttle Bus` / 漁人碼頭煙火專車 [^tdx-bus-operator-pull]
- `NeｗNinth parkinglot-Gold Ecological Park` / 新九號停車場-黃金博物館 [^tdx-bus-operator-pull]
- `Ruifang(Via Dongding Rd.)-Songshan Station` / 瑞芳(經東碇路)-松山車站 [^tdx-bus-operator-pull]
- `Ruifang-Nèikē` / 瑞芳-內科(基客) [^tdx-bus-operator-pull]
- `Ruifang-Nangang` / 瑞芳-南港 [^tdx-bus-operator-pull]
- `NeｗNinth parkinglot-Shuinandong Parking Lot` / 新九號停車場-水湳洞停車場 [^tdx-bus-operator-pull]
- `NeｗNinth parkinglot-Jioufen Old St.` / 新九號停車場-九份老街 [^tdx-bus-operator-pull]
- `Wanli-Neihu` / 萬里-內湖科技園區 [^tdx-bus-operator-pull]

## Research gaps

The committed TDX operator record contains no founding history, ownership structure, fleet-model roster, depot or garage field, or contract-history field; each remains TBC here [^tdx-bus-operator-pull].

The record’s URL is reproduced as TDX metadata, but a company-history, ownership, fleet, depot or dated contract claim requires a full page from the operator or responsible government authority [^tdx-bus-operator-pull].
