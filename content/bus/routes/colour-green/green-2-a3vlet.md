---
title: G2Right / 綠2右
summary: Green-line feeder route G2Right (綠2右).
updated: 2026-08-18
facts:
  - label: Service class
    value: MRT green-line feeder
    source: ebus-green
specs:
  - label: Route length
    value: TBC
    unit: km
  - label: Service span
    value: TBC
  - label: Headway by day type
    value: TBC
  - label: Fare / transfer
    value: TBC
sources:
  - id: tdx-bus
    title: TDX bus data
    titleOriginal: 交通部運輸資料流通服務平臺
    publisher: Ministry of Transportation and Communications TDX, 交通部運輸資料流通服務平臺
    url: https://tdx.transportdata.tw/
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Supports the normalized route, operator, stop, sequence, shape and source-update fields; the committed bus layer does not publish a route-length or timetable field.
  - id: ebus-green
    title: Taipei/New Taipei bus route catalogue
    titleOriginal: 大臺北公車
    publisher: Taipei City Government and New Taipei City Government, 臺北市政府與新北市政府
    url: https://ebus.gov.taipei/ebus?ct=all
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Lists 綠2右 under 捷運綠線接駁公車.
  - id: ebus-g2right
    title: G2Right route schedule
    titleOriginal: 綠2右班表
    publisher: Taipei City Public Transportation Office, 臺北市政府公共運輸處
    url: https://ebus.gov.taipei/Route/RouteSchedule?routeid=0413000200
    accessed: 2026-08-18
    kind: primary
    lang: zh-Hant
    note: Full official schedule page listing the current 景美女中–中永和 corridor, service span, fare, headway and operator contact.
---

## Classification and corridor

The official catalogue lists 綠2右 under 捷運綠線接駁公車.[^ebus-green] Its full schedule page gives 景美女中 - 中永和, weekday and holiday service 0530–2345, one-section fare, weekday peak headways of 12–15 minutes with enhanced afternoon service on school days, and 欣欣客運中興站 as the service contact.[^ebus-g2right] 綠2右 and 綠2左 (canonical slug `green-2-1e49mjx`) share the same published termini and are separately timetabled TDX records; TDX does not label them as directional variants of a single 綠2, and no such single route was found in the official catalogue.

The confirmed stop sequence shares its 景美/木柵 start with 綠2左, through
捷運萬芳醫院站 (Wanfang Hospital, BR04) to 莊敬中學/人權博物館, but the two
routes then take genuinely different paths through the Yonghe/Zhonghe area:
綠2左 continues via 捷運秀朗橋站 and 捷運景平站/捷運景安站 (Jing'an, O02/Y11)
through 南勢角, while 綠2右 instead runs through central 永和 — past 永和
區公所 and 網溪國小 — before both routes reconverge near 捷運永安市場站
(Yong'an Market, O03).[^tdx-bus] They are two different loop routings sharing
the same published termini, not a simple left/right direction pair. The TDX
record also carries a third, shorter 綠2右 subroute, 綠2右景美女中, that starts
partway along at 景美女中 rather than at the full loop's own start.[^tdx-bus]

## Committed stop sequence

The committed TDX snapshot carries 4 directional or variant stop sequences for G2Right; each sequence below is ordered from its first boarding stop to its last; this is the current data record, not an inferred route history[^tdx-bus].

**G2Right (62 stops):** Far Eastern Century -> Global Industrial Headquarters -> Muxin Rd Entrance -> Shijian Junior High School -> Zhonggang Pumping Station -> Gouzikou (Xingfu huaxing) -> Xinhai Rd Sec6 Lane21 Entrance -> Huaien Tunnel -> China University of Technology (Xinhai) -> MRT Wanfang Hospital Sta -> Taiwan Police College -> Wenshan Sports Center (Xinglong) -> Coast Guard Administration -> Coast Guard Administration 1 -> Xinglong Shanzhuang -> Mamingtan (Zaixing High School) -> Muzha Park -> Zhongshun St Entrance -> Guotai New Village (Xinglong) -> GuoTai New Village (Muxin) -> Lixing Elementary School -> Muxin Market -> Jingmei Girls High School -> Baogao Science and Intellectual Park -> Gas Station -> Baoqiao and Zhongxing Intersection -> Beixin Apartment -> Qizhang(Baoqiao Rd) -> Qizhang(Beixin Rd) -> Zhongzheng Rd Entrance -> Chongguang High School -> Zhongzheng Public Housing -> Cardinal Tien Hospital(Zhongzheng Rd) -> Ershizhang Rd -> Ershizhang Rd Entrance -> Huakaifugui -> Far East Industrial City -> Zhuangjing High School/National Human Rights Museum -> Xiujing Village -> Fancuo -> Xiulang Rd Sec 3 Lane 70 -> Liucuo -> Liuhe Community -> Dehe Rd(Minsheng Rd) -> Yongyuan Rd -> Fuhe Junior High School -> Fuhe Junior High School(Yongjhen Rd) -> Yonghe City Office -> Wangxi Elementary School 1 -> Wangxi Elementary School -> Zhulin Rd Entrance -> Wenhua Rd -> Dingxi Elementary School -> Wenhua Village -> Baoan Rd -> Yongping Rd -> Zhongshan Rd Intersection -> Baoping Rd Entrance -> MRT Yongan Market Sta -> Huatai Xincheng -> Anhe Rd Entrance -> Jingxin St Intersection[^tdx-bus]

**G2Right (42 stops):** MRT Jingan Sta -> Zhonghe Church -> Nanshijiao(Jingping Rd) -> MRT Jingping Sta -> Jingping Jingde Intersection -> MRT Xiulang Bridge Sta -> Zhuangjing High School/National Human Rights Museum -> Far East Industrial City -> Huakaifugui -> Ershizhang Rd -> Ershizhang Rd -> Cardinal Tien Hospital -> Zhongzheng Public Housing -> Chongguang High School -> Zhongzheng Rd Entrance -> Qizhang(Beixin Rd) -> Qizhang(Baoqiao Rd) -> Baoqiao and Zhongxing Intersection -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Guotai New Village (Xinglong) -> Zhongshun St Entrance -> Muzha Park -> Mamingtan (Zaixing High School) -> Xinglong Shanzhuang -> Coast Guard Administration 1 -> Coast Guard Administration -> Wenshan Sports Center (Xinglong) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> China University of Technology (Xinhai) -> Huaien Tunnel -> Gouzikou (Xingfu huaxing) -> Zhonggang Pumping Station -> Shijian Junior High School -> Muxin Rd Intersection[^tdx-bus]

**G2 Jingmei Girls High School (40 stops):** Jingmei Girls High School -> Baogao Science and Intellectual Park -> Gas Station -> Baoqiao and Zhongxing Intersection -> Beixin Apartment -> Qizhang(Baoqiao Rd) -> Qizhang(Beixin Rd) -> Zhongzheng Rd Entrance -> Chongguang High School -> Zhongzheng Public Housing -> Cardinal Tien Hospital(Zhongzheng Rd) -> Ershizhang Rd -> Ershizhang Rd Entrance -> Huakaifugui -> Far East Industrial City -> Zhuangjing High School/National Human Rights Museum -> Xiujing Village -> Fancuo -> Xiulang Rd Sec 3 Lane 70 -> Liucuo -> Liuhe Community -> Dehe Rd(Minsheng Rd) -> Yongyuan Rd -> Fuhe Junior High School -> Fuhe Junior High School(Yongjhen Rd) -> Yonghe City Office -> Wangxi Elementary School 1 -> Wangxi Elementary School -> Zhulin Rd Entrance -> Wenhua Rd -> Dingxi Elementary School -> Wenhua Village -> Baoan Rd -> Yongping Rd -> Zhongshan Rd Intersection -> Baoping Rd Entrance -> MRT Yongan Market Sta -> Huatai Xincheng -> Anhe Rd Entrance -> Jingxin St Intersection[^tdx-bus]

**G2 Jingmei Girls High School (42 stops):** MRT Jingan Sta -> Zhonghe Church -> Nanshijiao(Jingping Rd) -> MRT Jingping Sta -> Jingping Jingde Intersection -> MRT Xiulang Bridge Sta -> Zhuangjing High School/National Human Rights Museum -> Far East Industrial City -> Huakaifugui -> Ershizhang Rd -> Ershizhang Rd -> Cardinal Tien Hospital -> Zhongzheng Public Housing -> Chongguang High School -> Zhongzheng Rd Entrance -> Qizhang(Beixin Rd) -> Qizhang(Baoqiao Rd) -> Baoqiao and Zhongxing Intersection -> Baoqiao and Zhongxing Intersection 1 -> Gas Sta -> Baogao Science and Intellectual Park -> Jingmei Girls High School -> Muxin Market -> Lixing Elementary School -> GuoTai New Village (Muxin) -> Guotai New Village (Xinglong) -> Zhongshun St Entrance -> Muzha Park -> Mamingtan (Zaixing High School) -> Xinglong Shanzhuang -> Coast Guard Administration 1 -> Coast Guard Administration -> Wenshan Sports Center (Xinglong) -> Taiwan Police College -> MRT Wanfang Hospital Sta -> China University of Technology (Xinglong) -> China University of Technology (Xinhai) -> Huaien Tunnel -> Gouzikou (Xingfu huaxing) -> Zhonggang Pumping Station -> Shijian Junior High School -> Muxin Rd Intersection[^tdx-bus]

The sequence is kept separate from the route shape: a stop is a boarding record, while the shape is the published alignment used for mapping. A missing stop name or a changed sequence is therefore a TDX-data issue, not evidence that the service was historically rerouted[^tdx-bus].

## Service record and evidence boundary

This normalized identity retains 2 direction/variant records, 1 operator record, and 4 published shape records in the snapshot[^tdx-bus]. The official catalogue and schedule citations attached to this route remain the authority for its service class, termini, operating span, headway and fare where those fields are printed.

The TDX route layer does not carry a sourced route-length history, opening date, corridor-selection rationale or dated operator-change record for this identity. Those fields remain TBC rather than being reconstructed from stop names or from a related route[^tdx-bus].

## Research status

The TDX snapshot supplies the changing stop and geometry records; route history, the corridor-selection decision, unusual short workings and operator changes remain TBC.[^tdx-bus]
