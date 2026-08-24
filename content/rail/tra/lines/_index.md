---
title: Lines
description: Current Taiwan Railways line families and branches in the committed TDX snapshot; historical and closed alignments are documented separately as evidence is verified.
order: 1
sources:
  - id: tdx-tra-shape
    title: "TDX Taiwan Railways line shapes"
    titleOriginal: "臺灣鐵道路線幾何資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Shape?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The full pull contains one current shape record for each of the 12 TDX line IDs."
  - id: tra-timetable
    title: "Taiwan Railways timetable and route index"
    titleOriginal: "臺鐵時刻表及路線資料"
    publisher: "Taiwan Railways Administration (臺灣鐵路公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00C/tipC21/view?proCode=8ae4cac3756b7b41017572e9077f1790&subCode=8ae4cac3756b7b41017573e352ae18f8"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator index names the Western, Eastern and South Link trunk families and the Pingxi, Shenao, Neiwan, Liujia, Jiji and Shalun branches."
  - id: tra-history
    title: "Railway construction history"
    titleOriginal: "鐵路建設沿革"
    publisher: "Taiwan Railways Administration (臺灣鐵路公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/adr/about-1-5"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator history page gives the official route-history framework and gauge terminology used to separate current data from historical alignments."
---

The current line index follows the twelve line identities returned by TDX on 2026-08-24.[^tdx-tra-shape] The source calls some records trunk lines and others branches; the guide preserves those identities instead of flattening the railway into one invented route.[^tra-timetable] Historical route names, closed alignments and gauge changes remain separate research work until each chronology is verified against a primary record.[^tra-history]
