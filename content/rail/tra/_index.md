---
title: Taiwan Railways
kind: system
description: Taiwan Railways current station and line data, with historical route architecture kept distinct from the live TDX snapshot.
order: 4
operator: TRA
sources:
  - id: tdx-tra-station
    title: "TDX Taiwan Railways station records"
    titleOriginal: "臺灣鐵路車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/Station?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The full 24 August 2026 pull contains 245 TRA station records with station IDs, names, addresses, administrative areas, classes, coordinates and update times."
  - id: tdx-tra-line
    title: "TDX Taiwan Railways station-of-line records"
    titleOriginal: "臺灣鐵路路線車站資料"
    publisher: "Ministry of Transportation and Communications, TDX (交通部運輸資料流通服務平台)"
    url: "https://tdx.transportdata.tw/api/basic/v2/Rail/TRA/StationOfLine?%24format=JSON&%24top=1000&%24skip=0"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The full pull contains 12 line records with ordered station members and, where supplied, travelled distances."
  - id: tra-history
    title: "Railway construction history"
    titleOriginal: "鐵路建設沿革"
    publisher: "Taiwan Railways Administration (臺灣鐵路公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/adr/about-1-5"
    accessed: 2026-08-24
    kind: primary
    lang: zh-Hant
    note: "The operator history page gives the official route-history framework and gauge terminology used to separate current data from historical alignments."
  - id: tra-construction-history
    title: "Chronological history of railroad construction"
    titleOriginal: "路線修築沿革"
    publisher: "National Taiwan Railways Corporation / former Taiwan Railways Administration (國營臺灣鐵路股份有限公司／臺灣鐵路管理局)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/file/6a439dbd-9cee-4d4b-9c4b-215439bffbf5"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full operator PDF supplies the historical route entries used by the Linkou, Shen'ao–Liandong and Hualien–Tianpu history pages."
  - id: tra-bike-route
    title: "Taiwan Railways bicycle-train station map"
    titleOriginal: "臺鐵自行車列車路線資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip113/gobybiketrainno"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator page lists Houtong and Sandiaoling in the New Taipei and Pingxi/Shen'ao station groupings."
  - id: tra-station-zhuzhong
    title: "Zhuzhong Station information"
    titleOriginal: "竹中車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1193"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 1193 as Zhuzhong (竹中)."
  - id: tra-station-liujia
    title: "Liujia Station information"
    titleOriginal: "六家車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1194"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 1194 as Liujia (六家)."
  - id: tra-station-taoyuan
    title: "Taoyuan Station information"
    titleOriginal: "桃園車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/1080"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 1080 as Taoyuan (桃園)."
  - id: tra-station-longtian
    title: "Longtian Station information"
    titleOriginal: "隆田車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4150"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 4150 as Longtian (隆田)."
  - id: tra-station-shanhua
    title: "Shanhua Station information"
    titleOriginal: "善化車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4170"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 4170 as Shanhua (善化)."
  - id: tra-station-xinshi
    title: "Xinshi Station information"
    titleOriginal: "新市車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4190"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 4190 as Xinshi (新市)."
  - id: tra-station-yongkang
    title: "Yongkang Station information"
    titleOriginal: "永康車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/4200"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 4200 as Yongkang (永康)."
  - id: tra-station-sanmin
    title: "Sanmin Station information"
    titleOriginal: "三民車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6120"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 6120 as Sanmin (三民)."
  - id: tra-station-yuli
    title: "Yuli Station information"
    titleOriginal: "玉里車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6110"
    accessed: 2026-08-26
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 6110 as Yuli (玉里)."
  - id: tra-station-dongli
    title: "Dongli Station information"
    titleOriginal: "東里車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6100"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 6100 as Dongli (東里)."
  - id: tra-station-dongzhu
    title: "Dongzhu Station information"
    titleOriginal: "東竹車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6090"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 6090 as Dongzhu (東竹)."
  - id: tra-station-fuli
    title: "Fuli Station information"
    titleOriginal: "富里車站資訊"
    publisher: "National Taiwan Railways Corporation (國營臺灣鐵路股份有限公司)"
    url: "https://www.railway.gov.tw/tra-tip-web/tip/tip00H/tipH41/viewStaInfo/6080"
    accessed: 2026-08-27
    kind: primary
    lang: zh-Hant
    note: "The full current operator station page identifies station 6080 as Fuli (富里)."
---

Taiwan Railways is represented here as a system with its own station identities, route memberships and historical intervals. The current data layer is a full TDX snapshot retrieved on 2026-08-24.[^tdx-tra-station] The operator historical pages and reports are used to mark what is established, what conflicts with the current snapshot, and what remains TBC.[^tra-history]

The current pages cover the Western Main Line, Eastern Main Line and the branch records returned by TDX.[^tdx-tra-line] The closed-alignment records include the [Linkou Line](/rail/history/linkou-line/), the [Shen'ao–Liandong Line](/rail/history/shenao-line/), the [Hualien–Tianpu Line](/rail/history/hualien-tianpu-line/), the [Taipei–Danshui Line](/rail/history/taipei-danshui-line/), the [Xindian Line](/rail/history/xindian-line/), the [Zhonghe Line](/rail/history/zhonghe-line/), the [Fengyuan–Dongshi Line](/rail/history/fengyuan-dongshi-line/), the [Tanzi–Shengang Line](/rail/history/tanzi-shengang-line/) and the [Ruifang–Shen'ao Line](/rail/history/ruifang-shenao-line/), while the [Houtong–Sandiaoling double-track segment](/rail/history/houtong-sandiaoling-double-track/), [Changhua–Minxiong double-track segment](/rail/history/changhua-minxiong-double-track/), [Chiayi–Xinshi double-track segment](/rail/history/chiayi-xinshi-double-track/), [Jianan–Taichung Port construction record](/rail/history/jianan-taichung-port-double-track/), [Xinpu–Tongxiao double-track segment](/rail/history/xinpu-tongxiao-double-track/) and [Yuanli–Rinan double-track segment](/rail/history/yuanli-rinan-double-track/) are kept alongside them as construction-history subjects rather than separate current line identities.[^tra-history][^tra-construction-history][^tra-bike-route] Further historical alignments and construction subjects follow in separate batches so route sequence, gauge and historical status are not silently merged.[^tra-history] The page count is a work boundary, not a claim that an unwritten station or alignment does not exist.[^tra-history]
The [Jianan–Qingshui double-track segment](/rail/history/jianan-qingshui-double-track/) is kept as a construction-history subject rather than a separate current line identity.[^tra-history][^tra-construction-history]
The [Dajia–Jianan double-track segment](/rail/history/dajia-jianan-double-track/) is kept as a construction-history subject rather than a separate current line identity.[^tra-history][^tra-construction-history]
The [Dongshan–Su'aoxin double-track segment](/rail/history/dongshan-su-aoxin-double-track/) is kept as a construction-history subject rather than a separate current line identity.[^tra-history][^tra-construction-history]
The [Sijiaoting–Ruifang double-track segment](/rail/history/sijiaoting-ruifang-double-track/) is kept as a construction-history subject rather than a separate current line identity.[^tra-history][^tra-construction-history]
The [Mudan–Shuangxi double-track segment](/rail/history/mudan-shuangxi-double-track/) is kept as a construction-history subject rather than a separate current line identity.[^tra-history][^tra-construction-history]
The [Hualien–Hualien Port records](/rail/history/hualien-hualien-port/) retain the operator's earlier 4.0 km pre-Retrocession entry and later 5.8 km TRA entry as separate historical records, alongside the dated operating-section table.[^tra-history][^tra-construction-history]
The [Hualien–Heping construction record](/rail/history/hualien-heping/) retains the operator tables' shared 39.4 km and 1978/1979 chronology while publishing their conflicting constructor fields.[^tra-history][^tra-construction-history]
The [Heping–Su'aoxin construction record](/rail/history/heping-su-aoxin/) retains the operator tables' shared 39.8 km and 1973/1980 chronology while publishing their conflicting constructor fields.[^tra-history][^tra-construction-history]
The [Hualien–Taitung widening record](/rail/history/hualien-taitung-widening/) retains the operator tables' 162.2 km Eastern Line widening record and 1978/1982 chronology beside the current TDX EL interval.[^tra-history][^tra-construction-history]
The [Hanben–Hualien double-track record](/rail/history/hanben-hualien-double-track/) retains the operator's 42.5 km 1992–2003 reconstruction record and its listed double-tracking/electrification works beside the current TDX EL interval.[^tra-construction-history][^tdx-tra-line]
The [Hualien–Ruisui reconstruction record](/rail/history/hualien-ruisui-double-track/) retains the operator's 70.5 km 1992–2003 reconstruction record and its listed heavy-rail and PC-sleeper works beside the current TDX EL interval.[^tra-construction-history][^tdx-tra-line]
The [Su'aoxin–Hanben double-track record](/rail/history/suaoxin-hanben-double-track/) retains the operator's 36.7 km 1993–2004 reconstruction record and its listed double-track work beside the current TDX EL interval.[^tra-construction-history][^tdx-tra-line]
The [Hualien Port Line reconstruction record](/rail/history/hualien-port-line-reconstruction/) retains the operator's 10.5 km 1992–2004 reconstruction record and its listed heavy-rail and PC-sleeper works without assigning a current passenger endpoint.[^tra-construction-history][^tra-history][^tdx-tra-station]
The [Songshan–Nangang underground record](/rail/history/songshan-nangang-underground/) retains the operator's 7.7 km 1998–2008 underground record beside the current TDX WL station interval, whose endpoint fields differ by 2.8 km.[^tra-construction-history][^tdx-tra-line]
The [Keelung Station track-removal records](/rail/history/keelung-station-track-removal/) retain the operator's separate 2.9 km and 2.0 km Keelung Station rows, each with a distinct 27 April 2010 removal scope, beside the current Keelung 0900 TDX record.[^tra-construction-history][^tra-history][^tdx-tra-station][^tdx-tra-line]

The [Zhuzhong–Liujia double-track record](/rail/history/zhuzhong-liujia-double-track/) retains the operator's 3.1 km row 99 and its 2005/2011 year fields beside the current two-member LJ TDX record.[^tra-construction-history][^tra-station-zhuzhong][^tra-station-liujia][^tdx-tra-line]
The [Tao-yuan Station track-removal record](/rail/history/taoyuan-station-track-removal/) retains row 100's 3.1 km and 1969/1969 fields beside its May 2012 removal explanation and the current Taoyuan 1080 TDX record.[^tra-construction-history][^tra-station-taoyuan][^tdx-tra-line]
The [Longtian–Shanhua double-track record](/rail/history/longtian-shanhua-double-track/) retains row 102's 3.8 km and 2001/2013 fields beside its Zeng-Wun River Bridge explanation and the current Longtian 4150, Baling and Shanhua 4170 WL record.[^tra-construction-history][^tra-station-longtian][^tra-station-shanhua][^tdx-tra-line]
The [Xinshi–Yongkang double-track record](/rail/history/xinshi-yongkang-double-track/) retains row 103's 2.9 km and 2009/2013 fields beside its Yan-shui River Bridge explanation and the current Xinshi 4190 and Yongkang 4200 WL record.[^tra-construction-history][^tra-station-xinshi][^tra-station-yongkang][^tdx-tra-line]
The [Wuhe–Sanmin single-track record](/rail/history/wuhe-sanmin-single-track/) retains row 104's 1.6 km and 2013/2013 fields beside its Hualien–Taitung electrification explanation and the current Sanmin 6120 EL record, without inventing a Wuhe endpoint.[^tra-construction-history][^tra-station-sanmin][^tdx-tra-line]
The [Sanmin–Yuli single-track record](/rail/history/sanmin-yuli-single-track/) retains row 105's 4.1 km and 2013/2013 fields beside its Hualien–Taitung electrification explanation and the current Sanmin 6120–Yuli 6110 EL record.[^tra-construction-history][^tra-station-sanmin][^tra-station-yuli][^tdx-tra-line]
The [Dongli–Dongzhu single-track record](/rail/history/dongli-dongzhu-single-track/) retains row 106's 2.1 km and 2012/2013 fields beside its Hualien–Taitung electrification explanation and the current Dongli 6100–Dongzhu 6090 EL record.[^tra-construction-history][^tra-station-dongli][^tra-station-dongzhu][^tdx-tra-line]
The [Dongzhu–Fuli single-track record](/rail/history/dongzhu-fuli-single-track/) retains row 107's 2.9 km and 2012/2013 fields beside its Hualien–Taitung electrification explanation and the current Dongzhu 6090–Fuli 6080 EL record.[^tra-construction-history][^tra-station-dongzhu][^tra-station-fuli][^tdx-tra-line]
