---
title: 300-series routes
description: The 16 normalized TDX services classified as series-300s, matching the official catalogue's 一般公車 (general bus) list — not a colour-feeder or trunk service class.
order: 8
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Supplies the normalized route group, identities, stop sequences, shapes, operators and curated rail-stop joins.
  - id: ebus-general
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-19
    kind: primary
    lang: zh-Hant
    note: Full official catalogue lists 300, 302, 302區, 303, 303區, 304重慶, 304承德, 306, 306區, 307, 307西藏三民, 308, 310, 310區, 311 and 311區 under 一般公車, each under its own routeid parameter; none carries a colour character (紅/藍/綠/棕/橘/黃) or a 幹線 designation.
  - id: zhwiki-taichung300
    title: Taichung City Bus Route 300
    titleOriginal: 台中市公車300路
    publisher: Wikipedia contributors, 維基百科
    url: https://zh.wikipedia.org/zh-tw/%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%85%AC%E8%BB%8A300%E8%B7%AF
    accessed: 2026-08-19
    kind: secondary
    lang: zh-Hant
    note: "Confirms a same-numbered but unrelated Taichung city route (臺中車站–靜宜大學) exists independently of the Taipei/New Taipei catalogue covered here; opening sentence read verbatim: 台中市公車300路為行駛臺中車站到靜宜大學之間的公車路線."
---

These pages cover the 16 normalized TDX records classified series-300s.[^tdx-bus]
The full official catalogue places all 16 — the plain-numbered routes 300, 302,
303, 304 (in its 重慶 and 承德 street-name variants), 306, 307 (including its
307西藏三民 variant), 308, 310 and 311, plus the 區 shuttle variants of 302, 303,
306, 310 and 311 — under 一般公車 (general bus service), each as its own
routeid entry in the catalogue rather than a sub-listing of its parent
number.[^ebus-general] None carries a colour character (紅/藍/綠/棕/橘/黃) or a
幹線 designation, so none was a candidate for the colour-feeder or trunk
groups.

Route numbers are not nationally unique: Taichung's separately-run city bus
system also operates a route numbered 300, running 臺中車站–靜宜大學, with no
connection to the Taipei/New Taipei 300 covered here.[^zhwiki-taichung300]
Search results additionally surfaced Wikipedia entries for Taichung routes
302, 303 and 306 by the same numbers; those were not individually fetched and
verified in this pass, so they are noted only as an unverified lead rather
than a confirmed collision.
