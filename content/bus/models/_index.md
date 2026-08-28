---
title: Bus models
description: Sourced bus vehicle records, propulsion evidence and the fields that remain unpublished.
order: 2
sources:
  - id: tdx-bus-operator-pull
    title: TDX bus operator and route pull
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX (交通部運輸資料流通服務平臺)
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-15
    kind: primary
    lang: zh-Hant
    note: Supports the committed operator and route snapshot; it contains no vehicle-model roster.
  - id: ntpc-electric-857
    title: Model T electric bus enters service on route 857
    titleOriginal: Model T電動公車亮相新北！857幹線公車明上線營運
    publisher: New Taipei City Government Department of Transportation (新北市政府交通局)
    url: https://www.traffic.ntpc.gov.tw/home.jsp?act=be4f48068b2b0031&dataserno=98e8ce2ac9e4c0abbe229a8ffffe1f3f&id=148
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports the 13 San Chung Bus Model T electric buses on route 857 and the per-bus subsidy.
  - id: ttsb-citiair
    title: Factual report on the Citiair bus collision at Zhenjiang Street
    titleOriginal: 臺北市大有公車忠孝東路往東鎮江街口追撞大都會公車事故事實資料報告
    publisher: Taiwan Transportation Safety Board (國家運輸安全調查委員會)
    url: https://www.ttsb.gov.tw/media/8525/1131117%E8%87%BA%E5%8C%97%E5%B8%82%E5%A4%A7%E6%9C%89%E5%85%AC%E8%BB%8A%E5%BF%A0%E5%AD%9D%E6%9D%B1%E8%B7%AF%E5%BE%80%E6%9D%B1%E9%8E%AE%E6%B1%9F%E8%A1%97%E5%8F%A3%E8%BF%BD%E6%92%9E%E5%A4%A7%E9%83%BD%E6%9C%83%E5%85%AC%E8%BB%8A%E4%BA%8B%E6%95%85%E4%BA%8B%E5%AF%A6%E8%B3%87%E6%96%99%E5%A0%B1%E5%91%8A.pdf
    accessed: 2026-08-21
    kind: primary
    lang: zh-Hant
    note: Supports the recorded Taiwan Yutong 6128HG vehicle identification and capacity.
  - id: dayou-fleet
    title: Dàyou Bus fleet introduction
    titleOriginal: 車隊介紹
    publisher: Dàyou Bus Co., Ltd. / CitiAir Bus (大有巴士股份有限公司)
    url: https://www.airbus.com.tw/?section=41
    accessed: 2026-08-22
    kind: primary
    lang: zh-Hant
    note: Supports Dàyou’s King Long year groups and route classes.
  - id: vscc-list-0715
    title: MOTC Electric Bus Promotion Programme qualified vehicle operators and models, updated 15 Jul 2026 (current)
    titleOriginal: 交通部電動大客車推動計畫合格車輛業者及其車輛車型（115.07.15）
    publisher: Vehicle Safety Certification Center, for MOTC (財團法人車輛安全審驗中心)
    url: https://www.vscc.org.tw/File/Download/472d89ee-1953-4aec-b572-e67571b87af2
    accessed: 2026-08-28
    kind: primary
    lang: zh-Hant
    note: Supports the electric-bus qualified-model registry and its manufacturer roster.
---

The committed TDX bus pull has no vehicle-model field, so a model page is published only where a fetched operator, regulator or government source names the vehicle [^tdx-bus-operator-pull].

**Electric buses** now have a government type-approval register — the
[VSCC qualified-model registry](/bus/models/vscc-qualified-registry/) —
naming every manufacturer and model code MOTC has certified, alongside
the manufacturer-level pages below [^vscc-list-0715]:

- [VSCC qualified-model registry](/bus/models/vscc-qualified-registry/) — every manufacturer and type code MOTC/VSCC has certified, read directly from three dated disclosure PDFs [^vscc-list-0715].
- [Model T electric bus](/bus/models/model-t-electric/) — made by Foxtron (鴻華先進科技), not Tron Energy; 13 San Chung Bus vehicles on route 857, with a dated municipal subsidy record [^ntpc-electric-857].
- [RAC-700 (Tron Energy)](/bus/models/rac-700/) — RAC Electric Vehicles Inc.'s current model, with a VSCC type-code history spanning four generations and conflicting older-generation specs [^vscc-list-0715].
- [Master electric bus family](/bus/models/master-bus-electric/) — Master Transportation's four electric bus body types, full specs from the manufacturer's own model page, with an unreconciled delivery record [^vscc-list-0715].
- [Alighter (Tang Eng)](/bus/models/tang-eng-alighter/) — exported to Guatemala, but absent from every VSCC qualified-model list checked, contradicting a 2021-era qualification claim [^vscc-list-0715].
- [Taiwan Yutong 6128HG](/bus/models/yutong-6128hg/) — one Dàyou vehicle identified in a safety report, with seat and standing figures [^ttsb-citiair].
- [King Long / 大金龍](/bus/models/king-long/) — Dàyou’s official fleet page names year groups and route classes, but not a complete technical roster [^dayou-fleet].

Manufacturer, chassis/body, passenger capacity and propulsion are not silently inferred from a trade name or a photograph. Where the source does not publish them, the entity page says TBC [^tdx-bus-operator-pull].
