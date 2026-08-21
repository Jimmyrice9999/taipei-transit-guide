---
title: "Tamshui Bus — New Taipei operator profile"
summary: "A sourced profile of Tamshui Bus’s legal record, operating sites, route history and New Taipei network."
updated: 2026-08-21
facts:
  - label: English name
    value: "TBC"
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "淡水客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-tamshuibus-nasxvv"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "TamshuiBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "1104"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "NewTaipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "69"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-002-279"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.csgroup-bus.com.tw"
    source: tdx-bus-operator-pull
  - label: MOEA registration date
    value: "1978-12-11"
    source: moea-tamshui
  - label: Registered address
    value: "新北市淡水區中正東路2段27之8號3樓"
    source: moea-tamshui
  - label: Paid-in capital
    value: "300000000"
    unit: "NTD"
    source: moea-tamshui
specs:
  - label: Published operating-site entries
    value: "4"
    unit: "stations on the operator-group directory"
    source: tamshui-sites
  - label: Fleet model roster
    value: TBC
  - label: Site opening dates and capacities
    value: TBC
  - label: Contract history
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
  - id: moea-tamshui
    title: Tamshui Bus company record
    titleOriginal: 淡水汽車客運股份有限公司 - 經濟部商工登記公示資料查詢
    publisher: Ministry of Economic Affairs, Administration of Commerce (經濟部商業發展署)
    url: https://findbiz.nat.gov.tw/fts/company/33785185
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the statutory company number, capital, representative, registered address, registration date, represented corporate directors and approved business categories.
  - id: tamshui-history
    title: Zhongxing Group company history
    titleOriginal: 公司沿革
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?section=41
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Tamshui Bus’s predecessor, 1974 cooperative reorganization and 1977 company reorganization milestones.
  - id: tamshui-sites
    title: Tamshui Bus station directory
    titleOriginal: 淡水客運場站訊息
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?section=55
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the four named operating-site entries, addresses and contact numbers; it does not publish opening dates or capacities.
  - id: tamshui-route-launch-2026
    title: Tamshui Bus 2026 route launch notice
    titleOriginal: 115、988、989、990及115平日線正式實施
    publisher: Zhongxing Group (中興大業巴士集團)
    url: https://www.csgroup-bus.com.tw/?func=_detail&id=2490&module=news
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the operator’s 11 June 2026 launch announcement for routes 115, 988, 989, 990 and weekday 115 service.
  - id: ntpc-tamshui-eval
    title: 111 New Taipei bus service-quality evaluation
    titleOriginal: 111年度新北市公車營運服務品質評鑑第二期評鑑成果報告
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/uploaddowndoc?dis=download&file=download%2F202306271121000.pdf&filedisplay=111%E5%B9%B4%E5%BA%A6%E6%96%B0%E5%8C%97%E5%B8%82%E5%85%AC%E8%BB%8A%E7%87%9F%E9%81%8B%E6%9C%8D%E5%8B%99%E5%93%81%E8%A9%95%E9%91%91%E7%AC%AC2%E6%9C%9F%E8%A9%95%E9%91%91%E6%88%90%E6%9E%9C%E5%A0%B1%E5%91%8A.pdf&flag=doc
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Tamshui Bus’s 111(2) score, grade, ranking and indicator tables.
---

## Company history and legal identity

The MOEA record identifies 淡水汽車客運股份有限公司 as unified business number 33785185, with representative 呂奇峯, registered address 新北市淡水區中正東路2段27之8號3樓, total and paid-in capital of NT$300 million and statutory registration date 11 December 1978 [^moea-tamshui]. It lists city bus operation and vehicle repair among the approved business categories [^moea-tamshui].

The Zhongxing Group history gives an earlier operating chronology: the predecessor was Sanxia Automobile Transport Cooperative, it reorganized as 淡水汽車運輸合作社 on 1 August 1974, and it reorganized as 淡水汽車客運股份有限公司 on 1 March 1977 [^tamshui-history]. Those operator-history milestones are retained alongside, rather than substituted for, the later MOEA statutory registration date [^tamshui-history][^moea-tamshui]. The current MOEA director table records corporate representation by 敦峰汽車工業, 台北航運, 紅樹林廣告 and 金龍汽車製造 [^moea-tamshui].

## Network and operating sites

The committed New Taipei TDX snapshot associates 69 routes with TamshuiBus [^tdx-bus-operator-pull]. The route list below is therefore a record of the committed association data, not a hand-maintained claim about every route the company has ever operated [^tdx-bus-operator-pull]. Its route names show a network centred on Tamsui and extending through Sanzhi, Shimen, Bali, the North Coast and Taipei-region destinations [^tdx-bus-operator-pull].

The operator-group station directory publishes four Tamshui Bus site entries: Tamsui at 新興街126號, Sanzhi at 淡金路二段38號, Bali opposite 八里大道18號 and New City at the 後洲路／崁頂三路口 [^tamshui-sites]. The directory gives contact numbers for each site, but does not state opening dates, vehicle capacities or route allocations by site [^tamshui-sites].

## Route history and public evaluation

An operator bulletin dated 11 June 2026 announces new services `115`, `988`, `989` and `990`, plus weekday service on `115` [^tamshui-route-launch-2026]. The committed TDX snapshot contains `115`, `115weekdays`, `988` and `990` but does not contain `989`, so the two sources are published as a dated data conflict rather than silently reconciled [^tdx-bus-operator-pull][^tamshui-route-launch-2026].

New Taipei’s 111(2) service-quality report records Tamshui Bus at 90.41 points, grade 優等 and sixth place [^ntpc-tamshui-eval]. The same report includes a Tamshui-specific section for indicator movement and publishes sampled station and vehicle-safety checks, which makes the result a dated oversight record rather than a general claim about all vehicles or routes [^ntpc-tamshui-eval].

The checked sources do not publish a current manufacturer/model roster, propulsion split, depot opening dates or capacities, or a complete route-contract history. Those fields remain TBC.

## TDX record

The committed TDX pull identifies this page as the operator record for TamshuiBus (淡水客運), with source municipality NewTaipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-tamshuibus-nasxvv, operator code TamshuiBus, operator number 1104, phone 0800-002-279 and URL http://www.csgroup-bus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `Tamsui-State Road No. 1-Nangang Main Sta.` / 淡水-國道1號-南港車站 [^tdx-bus-operator-pull]
- `115weekdays` / 115平日 [^tdx-bus-operator-pull]
- `115` [^tdx-bus-operator-pull]
- `593` [^tdx-bus-operator-pull]
- `594` [^tdx-bus-operator-pull]
- `595` [^tdx-bus-operator-pull]
- `631` [^tdx-bus-operator-pull]
- `716` / 716(台灣好行-皇冠北海岸線) [^tdx-bus-operator-pull]
- `790Fishing port` / 790漁港 [^tdx-bus-operator-pull]
- `790` [^tdx-bus-operator-pull]
- `837` [^tdx-bus-operator-pull]
- `837Sub` / 837副 [^tdx-bus-operator-pull]
- `837Shuttle` / 837區 [^tdx-bus-operator-pull]
- `853Frogbus` / 853跳蛙 [^tdx-bus-operator-pull]
- `860` [^tdx-bus-operator-pull]
- `861` [^tdx-bus-operator-pull]
- `862` [^tdx-bus-operator-pull]
- `863` [^tdx-bus-operator-pull]
- `864` [^tdx-bus-operator-pull]
- `865` [^tdx-bus-operator-pull]
- `866` [^tdx-bus-operator-pull]
- `867` [^tdx-bus-operator-pull]
- `867Shuttle` / 867區 [^tdx-bus-operator-pull]
- `868` [^tdx-bus-operator-pull]
- `869` [^tdx-bus-operator-pull]
- `870` [^tdx-bus-operator-pull]
- `871` [^tdx-bus-operator-pull]
- `871 Zhongshan North Road` / 871經中山北路 [^tdx-bus-operator-pull]
- `872Zhengde Junior high school` / 872經正德國中、直行中山北路 [^tdx-bus-operator-pull]
- `872` [^tdx-bus-operator-pull]
- `873Zhengde Junior high school` / 873經正德國中 [^tdx-bus-operator-pull]
- `873` [^tdx-bus-operator-pull]
- `874` [^tdx-bus-operator-pull]
- `875` [^tdx-bus-operator-pull]
- `876` [^tdx-bus-operator-pull]
- `877` [^tdx-bus-operator-pull]
- `878` [^tdx-bus-operator-pull]
- `878Shuttle` / 878區 [^tdx-bus-operator-pull]
- `879` [^tdx-bus-operator-pull]
- `882` [^tdx-bus-operator-pull]
- `894` [^tdx-bus-operator-pull]
- `927taipei` / 927經台北港 [^tdx-bus-operator-pull]
- `927` [^tdx-bus-operator-pull]
- `928` [^tdx-bus-operator-pull]
- `947` [^tdx-bus-operator-pull]
- `953` [^tdx-bus-operator-pull]
- `953Shuttle` / 953區 [^tdx-bus-operator-pull]
- `963` [^tdx-bus-operator-pull]
- `983` [^tdx-bus-operator-pull]
- `988` [^tdx-bus-operator-pull]
- `990` [^tdx-bus-operator-pull]
- `Lan Hai2` / 藍海2線先導公車 [^tdx-bus-operator-pull]
- `R13` / 紅13 [^tdx-bus-operator-pull]
- `R22` / 紅22 [^tdx-bus-operator-pull]
- `R28` / 紅28 [^tdx-bus-operator-pull]
- `R28Sub` / 紅28直 [^tdx-bus-operator-pull]
- `R36` / 紅36 [^tdx-bus-operator-pull]
- `R37 Via The Ocean Communty` / 紅37行經海洋都心社區 [^tdx-bus-operator-pull]
- `R37` / 紅37 [^tdx-bus-operator-pull]
- `R38` / 紅38 [^tdx-bus-operator-pull]
- `R39` / 紅39 [^tdx-bus-operator-pull]
- `R51` / 紅51 [^tdx-bus-operator-pull]
- `R53` / 紅53 [^tdx-bus-operator-pull]
- `Tamsui Fisherman's Wharf Fireworks Shuttle Bus` / 漁人碼頭煙火專車 [^tdx-bus-operator-pull]
- `Tamsui New Town-Banqio` / 淡水新市鎮-板橋 [^tdx-bus-operator-pull]
- `Tamsui-Neihu Technology Park` / 淡水-內湖科技園區 [^tdx-bus-operator-pull]
- `Sanzhi-Mackay Medical University` / 三芝-馬偕醫學大學 [^tdx-bus-operator-pull]
- `Shimen-MRT Hongshulin Sta.` / 石門-捷運紅樹林站 [^tdx-bus-operator-pull]
- `Wugu-Banqiao Leapfrog bus` / 五股-板橋 [^tdx-bus-operator-pull]

## Research gaps

The committed TDX operator record contains no founding history, ownership structure, fleet-model roster, depot or garage field, or contract-history field; each remains TBC here [^tdx-bus-operator-pull].

The record’s URL is reproduced as TDX metadata, but a company-history, ownership, fleet, depot or dated contract claim requires a full page from the operator or responsible government authority [^tdx-bus-operator-pull].
