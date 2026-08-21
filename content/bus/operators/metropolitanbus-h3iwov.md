---
title: "Metropolitan Bus Co., Ltd. — Taipei operator profile"
summary: "The privatized Taipei bus operator, its municipal facilities, electric fleet evidence and Taipei TDX route record."
updated: 2026-08-21
facts:
  - label: English name
    value: "Metropolitan Bus Co., Ltd."
    source: tdx-bus-operator-pull
  - label: Chinese name
    value: "大都會客運"
    source: tdx-bus-operator-pull
  - label: TDX operator record ID
    value: "bus-operator-metropolitanbus-h3iwov"
    source: tdx-bus-operator-pull
  - label: TDX operator code
    value: "MetropolitanBus"
    source: tdx-bus-operator-pull
  - label: TDX operator number
    value: "0303"
    source: tdx-bus-operator-pull
  - label: Source municipality
    value: "Taipei"
    source: tdx-bus-operator-pull
  - label: Routes in committed pull
    value: "70"
    source: tdx-bus-operator-pull
  - label: TDX phone
    value: "0800-053-434"
    source: tdx-bus-operator-pull
  - label: TDX-published URL
    value: "http://www.mtcbus.com.tw"
    source: tdx-bus-operator-pull
  - label: MOEA registration date
    value: "16 December 2003"
    source: moea-metropolitan
  - label: Registered legal name
    value: "大都會汽車客運股份有限公司"
    source: moea-metropolitan
  - label: Registered representative
    value: "李博文"
    source: moea-metropolitan
  - label: Published route-262 model
    value: "RAC-700-ELCB-2800; 25 seated and 30 standing"
    source: ttsb-metropolitan-vehicle
specs:
  - label: Fleet models
    value: "One documented electric model; complete roster and hybrid coverage TBC"
    source: ttsb-metropolitan-vehicle
  - label: Depots or garages
    value: "Named municipal sites; capacity and opening dates TBC"
    source: taipei-depot-budget
  - label: Contract history
    value: TBC
  - label: Parent or merger history
    value: TBC
  - label: 2025 route-262 incident
    value: "RAC-700-ELCB-2800 destroyed; no injuries; investigation opened"
    source: ttsb-metropolitan-incident
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
  - id: moea-metropolitan
    title: Metropolitan Transport Corporation company record
    titleOriginal: 大都會汽車客運股份有限公司 - 經濟部商工登記公示資料查詢
    publisher: Ministry of Economic Affairs, Department of Commerce (經濟部商業發展署)
    url: https://findbiz.nat.gov.tw/fts/company/80653426?fhl=en
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the registered legal name, business number, representative, registered address, capital and 16 December 2003 registration date.
  - id: taipei-pto-history
    title: Taipei city-bus history
    titleOriginal: 公車簡介
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=AAEEE8A01971ECFB&s=FBAD7AB84D95E137&sms=D0111F238E458DC8
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the former Taipei Municipal Bus Administration’s 1 January 2004 privatization and renaming as Metropolitan Bus.
  - id: dot-metropolitan-privatization
    title: Taipei DOT clarification on Metropolitan Bus governance
    titleOriginal: 臺北市政府交通局針對部分媒體報導大都會客運公司車輛採購及董事有無善盡職責等相關問題，特別提出澄清
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://english.udd.gov.taipei/News_Content.aspx?n=DD9CEC17A97FBC64&s=A7B3D2A0C690E5F6&sms=72544237BBE4C5F6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 38% city contribution, 62% employee ownership at privatization and the governance response; it does not establish a current parent.
  - id: dot-metropolitan-procurement
    title: Explanation of Metropolitan Bus vehicle procurement
    titleOriginal: 大都會新車採購過程說明
    publisher: Taipei City Department of Transportation (臺北市政府交通局)
    url: https://english.udd.gov.taipei/News_Content.aspx?n=DD9CEC17A97FBC64&s=CEB655C5D7092259&sms=72544237BBE4C5F6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the early post-privatization vehicle procurement and city-share oversight context, not a current fleet roster.
  - id: thb-metropolitan-directory
    title: Intercity bus company directory
    titleOriginal: 查詢公路客運公司
    publisher: Highway Bureau, MOTC (交通部公路局)
    url: https://www.thb.gov.tw/cp.aspx?Create=1&n=292
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the active operator directory address and telephone for Metropolitan Bus.
  - id: taipei-depot-budget
    title: Taipei Public Transportation Office 2026 budget and municipal-property record
    titleOriginal: 臺北市公共運輸處歲入項目說明提要與預算明細表
    publisher: Taipei City Department of Finance (臺北市政府財政局)
    url: https://www-ws.gov.taipei/Download.ashx?icon=.pdf&n=5YWs6YGL6JmVMTE15bm05bqm5rOV5a6a6aCQ566X5pu4KFBERikucGRm&u=LzAwMS9VcGxvYWQvNDU4L3JlbGZpbGUvMTAxMjMvOTU0Mjk1Ny84ZGIxYjAzNS1jMzAzLTRlMDctYTM2Ni1mMTRhYzI0YjRmY2MucGRm
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports named Metropolitan Bus sites and published municipal land areas or lease calculations; it does not provide depot opening dates or vehicle capacity.
  - id: ttsb-metropolitan-incident
    title: Metropolitan electric-bus fire incident record
    titleOriginal: 1140616大都會客運電動公車於臺北市松山區敦化北路往北起火事故
    publisher: Taiwan Transportation Safety Board (國家運輸安全調查委員會)
    url: https://www.ttsb.gov.tw/1243/22385/46186/post
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 16 June 2025 Route 262 fire, location, vehicle destruction, evacuation and no-injury record.
  - id: ttsb-metropolitan-vehicle
    title: Preliminary report and vehicle facts for the Metropolitan electric-bus occurrence
    titleOriginal: 重大公路事故調查初步報告；1140616大都會客運電動公車於臺北市松山區敦化北路往北起火事故事實資料報告
    publisher: Taiwan Transportation Safety Board (國家運輸安全調查委員會)
    url: https://www.ttsb.gov.tw/media/8715/highway-occurrence-preliminary-report-metropolitan-electric-bus.pdf
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports manufacturer/model RAC-700-ELBC-2800, electric propulsion, 25 seated and 30 standing passengers, and the operator record for the vehicle.
  - id: pto-metropolitan-battery
    title: Taipei electric-bus battery-system inspections
    titleOriginal: 臺北市電動公車已完成電池系統檢測
    publisher: Taipei City Public Transportation Office (臺北市公共運輸處)
    url: https://pto.gov.taipei/News_Content.aspx?n=D065CCB1467288C8&s=24DBB67D31F7DFD6
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the 20-bus same-batch inspection and the investigation-status statement after the Route 262 fire.
  - id: ntpc-metropolitan-eval-2025
    title: New Taipei bus evaluation — five operators rated excellent
    titleOriginal: 新北市公車評鑑出爐 5家業者榮獲優等
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.ntpc.gov.tw/ch/home.jsp?dataserno=202502110020&id=28
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Metropolitan Bus’s 優等 result in the 113 first-period New Taipei evaluation.
  - id: ntpc-metropolitan-eval-2026
    title: New Taipei Department of Transportation evaluation notice
    titleOriginal: 新聞稿-新北市政府交通局
    publisher: New Taipei City Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/home.jsp?act=be4f48068f3e583e627082e56b46875&id=54fa46e9e522dde4&mserno=39e5192ff77897e0ae099c1886ca9b09
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports Metropolitan Bus’s 優等 result in the 114 second-period evaluation and the five evaluation categories and 26 indicators.
---

## TDX record

The committed TDX pull identifies this page as the operator record for Metropolitan Bus Co., Ltd. (大都會客運), with source municipality Taipei [^tdx-bus-operator-pull].

TDX publishes the record ID bus-operator-metropolitanbus-h3iwov, operator code MetropolitanBus, operator number 0303, phone 0800-053-434 and URL http://www.mtcbus.com.tw for this record [^tdx-bus-operator-pull].

This is a data record, not a claim that every TDX record with the same company name is a separate legal entity [^tdx-bus-operator-pull].

## Company history and legal identity

The Ministry of Economic Affairs record identifies this legal company as 大都會汽車客運股份有限公司, with English charter name Metropolitan Transport Corporation, representative 李博文, registered address at 港墘路3號1樓 and registration date 16 December 2003 [^moea-metropolitan]. Taipei’s transport-history page dates the operational transition differently: the former Taipei Municipal Bus Administration became a private-company organization and was renamed Metropolitan Bus on 1 January 2004 [^taipei-pto-history]. The two dates are retained because company registration and the service handover are different events [^moea-metropolitan][^taipei-pto-history].

Taipei DOT’s contemporary explanation describes the ownership arrangement at that transition: the city contributed former bus-division vehicles for 38% of the shares, while former employees collectively supplied the remaining 62% [^dot-metropolitan-privatization]. The same source describes the city’s five public representatives and its oversight of public-share interests; it does not establish a current statutory parent or a later merger chain [^dot-metropolitan-privatization]. A complete legal parent and merger history is therefore TBC rather than inferred from the public group label used by later safety releases.

## Fleet, facilities and oversight

The route-level fleet evidence is specific but incomplete. The Safety Board identifies the Metropolitan electric bus destroyed on Route 262 as a Taiwan-made RAC-700-ELBC-2800 from RAC Electric Vehicles Inc.; the vehicle record gives 25 seated and 30 standing passengers and electric propulsion [^ttsb-metropolitan-vehicle]. This documents one model and its capacity, not a complete company roster, and the checked material does not establish hybrid vehicles [^ttsb-metropolitan-vehicle]. Taipei DOT’s earlier procurement explanation records a 318-bus procurement in three body types during the first post-privatization vehicle cycle, but that dated purchase cannot be used as a current fleet count [^dot-metropolitan-procurement].

The municipal property record shows the operating geography more clearly than the TDX operator record: it names Metropolitan sites at Rongzong, Jiuzhuang, Lingyun, Wanfang, Zhonghe, New Shilin, the Neihu repair shop, Jianbei and Songde, with land areas or lease calculations for several [^taipei-depot-budget]. Those records do not give opening dates or vehicle capacities, so the page reports the sites while leaving both measures TBC [^taipei-depot-budget]. The Highway Bureau independently lists the company as an active intercity-bus operator at 港墘路3號1樓 and gives its public telephone [^thb-metropolitan-directory].

New Taipei’s 2025 and 2026 notices list Metropolitan Bus among operators receiving 優等 evaluation results; the later notice says the evaluation covered facilities and service, vehicle equipment and safety, passenger service and driver management, accessibility, and company management [^ntpc-metropolitan-eval-2025][^ntpc-metropolitan-eval-2026]. This is a dated regulatory-quality record, not evidence that every route or depot performed identically [^ntpc-metropolitan-eval-2026].

The principal documented incident is the 16 June 2025 Route 262 electric-bus fire at the Chang Gung Memorial Hospital stop on northbound Dunhua North Road [^ttsb-metropolitan-incident]. The Safety Board records complete vehicle destruction and timely evacuation of the driver and about seven passengers without injuries [^ttsb-metropolitan-incident]. Taipei PTO says the same-batch 20 Route 262 buses were stopped for inspection and that the investigation was opened; no final causal finding is asserted here [^pto-metropolitan-battery].

The list below is generated from the Taipei TDX record’s operator association, so it is a current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

## Routes associated with this record

The list below is generated from the committed route pull’s operatorIds associations, so it records the current data snapshot rather than a hand-maintained route roster [^tdx-bus-operator-pull].

- `0East` / 0東 [^tdx-bus-operator-pull]
- `0South` / 0南 [^tdx-bus-operator-pull]
- `NH Express 1` / 內科快線1 [^tdx-bus-operator-pull]
- `108` [^tdx-bus-operator-pull]
- `108Shuttle` / 108區 [^tdx-bus-operator-pull]
- `109` [^tdx-bus-operator-pull]
- `CB11` / 通勤11 [^tdx-bus-operator-pull]
- `CB12` / 通勤12 [^tdx-bus-operator-pull]
- `12` [^tdx-bus-operator-pull]
- `124` / 花季專車124 [^tdx-bus-operator-pull]
- `NH13` / 內科通勤專車13 [^tdx-bus-operator-pull]
- `14` [^tdx-bus-operator-pull]
- `20` [^tdx-bus-operator-pull]
- `22` [^tdx-bus-operator-pull]
- `222` [^tdx-bus-operator-pull]
- `260` [^tdx-bus-operator-pull]
- `260Shuttle` / 260區 [^tdx-bus-operator-pull]
- `260Shuttle B` / 260區預 [^tdx-bus-operator-pull]
- `262Shuttle` / 262區 [^tdx-bus-operator-pull]
- `262` [^tdx-bus-operator-pull]
- `270` [^tdx-bus-operator-pull]
- `270Shuttle` / 270區 [^tdx-bus-operator-pull]
- `274` [^tdx-bus-operator-pull]
- `276` [^tdx-bus-operator-pull]
- `277` [^tdx-bus-operator-pull]
- `281` [^tdx-bus-operator-pull]
- `286Sub` / 286副 [^tdx-bus-operator-pull]
- `286` [^tdx-bus-operator-pull]
- `287Shuttle` / 287區 [^tdx-bus-operator-pull]
- `297B` / 297預 [^tdx-bus-operator-pull]
- `297` [^tdx-bus-operator-pull]
- `299` [^tdx-bus-operator-pull]
- `NH3` / 內科通勤專車3 [^tdx-bus-operator-pull]
- `306` [^tdx-bus-operator-pull]
- `306Shuttle` / 306區 [^tdx-bus-operator-pull]
- `32` [^tdx-bus-operator-pull]
- `33` [^tdx-bus-operator-pull]
- `37` [^tdx-bus-operator-pull]
- `38Shuttle` / 38區 [^tdx-bus-operator-pull]
- `38` [^tdx-bus-operator-pull]
- `41` [^tdx-bus-operator-pull]
- `46` [^tdx-bus-operator-pull]
- `49` [^tdx-bus-operator-pull]
- `5` [^tdx-bus-operator-pull]
- `505` [^tdx-bus-operator-pull]
- `508Shuttle` / 508區 [^tdx-bus-operator-pull]
- `559` [^tdx-bus-operator-pull]
- `606` [^tdx-bus-operator-pull]
- `612` [^tdx-bus-operator-pull]
- `63` [^tdx-bus-operator-pull]
- `630` [^tdx-bus-operator-pull]
- `652` [^tdx-bus-operator-pull]
- `685` [^tdx-bus-operator-pull]
- `688` [^tdx-bus-operator-pull]
- `9` [^tdx-bus-operator-pull]
- `BL5` / 藍5 [^tdx-bus-operator-pull]
- `M17` / 市民小巴17 [^tdx-bus-operator-pull]
- `M18` / 市民小巴18 [^tdx-bus-operator-pull]
- `M6` / 市民小巴6 [^tdx-bus-operator-pull]
- `M7` / 市民小巴7 [^tdx-bus-operator-pull]
- `R5` / 紅5 [^tdx-bus-operator-pull]
- `Fuxing Metro Bus` / 復興幹線 [^tdx-bus-operator-pull]
- `Heping Metro Bus` / 和平幹線 [^tdx-bus-operator-pull]
- `Donghuan Metro Bus` / 東環幹線 [^tdx-bus-operator-pull]
- `NEIHU GREEN BUS` / 雙園巴士 [^tdx-bus-operator-pull]
- `Dunhua Metro Bus` / 敦化幹線 [^tdx-bus-operator-pull]
- `Chongqing Metro Bus` / 重慶幹線 [^tdx-bus-operator-pull]
- `NS-Shuanghe` / 南軟通勤專車雙和線 [^tdx-bus-operator-pull]
- `Xinzhuang-Taipei Main Sta.` / 新莊-臺北車站 [^tdx-bus-operator-pull]
- `Neihu Metro Bus` / 內湖幹線 [^tdx-bus-operator-pull]

## Research gaps

The committed TDX operator record contains no founding history, ownership structure, fleet-model roster, depot or garage field, or contract-history field; each remains TBC here [^tdx-bus-operator-pull].

The record’s URL is reproduced as TDX metadata, but a company-history, ownership, fleet, depot or dated contract claim requires a full page from the operator or responsible government authority [^tdx-bus-operator-pull].
