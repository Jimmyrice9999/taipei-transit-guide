---
title: Taipei Bus stations and facilities
summary: Taipei Bus’s published station, depot and repair-facility directory.
updated: 2026-08-23
facts:
  - label: Operator
    value: Taipei Bus
    source: tpebus-stations
  - label: Operating stations named in the company profile
    value: "18"
    source: tpebus-about
  - label: Published repair facility
    value: Lengshuikeng maintenance headquarters, overseeing 12 named repair/inspection teams at other stations
    source: tpebus-about
  - label: Station directory entry outside the Taipei/New Taipei region
    value: Hualien station (花蓮站)
    source: tpebus-stations
specs:
  - label: Site capacity
    value: TBC
  - label: Opening dates
    value: TBC
  - label: Complete route allocation snapshot
    value: TBC
sources:
  - id: tpebus-about
    title: Taipei Bus company profile
    titleOriginal: 公司簡介
    publisher: Taipei Bus Co., Ltd. (臺北汽車客運股份有限公司)
    url: https://www.tpebus.com.tw/co_about.php
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports Taipei Bus’s published station and maintenance-facility names and operating snapshot; it does not publish capacities or opening dates.
  - id: tpebus-stations
    title: Taipei Bus station and facility information
    titleOriginal: 站場簡介
    publisher: Taipei Bus Co., Ltd. (臺北汽車客運股份有限公司)
    url: https://www.tpebus.com.tw/co_office.html
    accessed: 2026-08-20
    kind: primary
    lang: zh-Hant
    note: Supports published station addresses, phone numbers and route allocations for the facilities it details; it does not publish capacity or opening dates.
---

## Overview and published station network

Taipei Bus’s company profile names 18 operating stations directly: 「板橋後站、四海站、三峽一站、三峽二站、南雅站、歡仔園站、樹林站、中和站、新店站、木柵站、中華站、五福站、林口站、江子翠站、蘆洲站、民生站、瑞芳站、三重二站」.[^tpebus-about] The same page separately describes the maintenance structure as one headquarters plus subordinate teams rather than one flat depot list: 「冷水坑保養總廠」(Lengshuikeng, the main/headquarters maintenance depot) oversees twelve named 檢修班 (repair/inspection teams) at other stations — 板後、四海、三峽一、三峽二、南雅、歡仔園、樹林、中和、新店、木柵、民生、林口.[^tpebus-about]

The separate station directory publishes addresses, telephone numbers and route allocations for individual facilities, and covers a wider set than the company profile's headline list — 18 sites in total, including all six examples previously used on this page plus Banqiao Rear, Zhonghua, Wufu, Linkou, Luzhou, Jiangzicui, Ruifang, Sanxia 2, and, notably, a station in Hualien (花蓮站, at 花蓮縣花蓮市國聯五路221號) — outside the Taipei/New Taipei region entirely.[^tpebus-stations] Two example entries, with address and phone: Sihai station at 「新北市土城區清水村石門路15號之1」, phone 2262-2268; Luzhou station at 「新北市蘆洲區光明路136號左側」, phone 8281-6376.[^tpebus-stations] This page treats those as operator-published facility records rather than as a TDX-derived depot list [^tpebus-stations].

The two official pages serve different evidentiary purposes. The company profile
is a corporate description of the operator's station and maintenance network,
whereas the station directory is an operational contact record with an address,
telephone number and, for some entries, route allocation [^tpebus-about][^tpebus-stations].
An entry in the directory therefore confirms that Taipei Bus publishes a
facility record; it does not by itself establish that the site is a heavy
maintenance depot, a long-term parking yard or a current allocation point for
every route named in the record [^tpebus-stations].

The directory's examples also show why a single "depot count" would be
misleading: station, office and maintenance functions are named in the same
operator material, while the fetched pages do not provide a common capacity
measure or opening-date field for them [^tpebus-about][^tpebus-stations].

The route allocations printed beside a facility should consequently be read as
the directory's dated contact information, not as proof that every bus on those
routes is stored there [^tpebus-stations]. A current allocation file and an
engineering or property record would be needed to separate dispatch, parking
and repair functions for each address.

## Unpublished fields

Neither fetched page publishes a capacity or opening date for the sites [^tpebus-about][^tpebus-stations]. The full route-allocation table is also not reproduced here as a static route roster; a current station directory is the authoritative place to check it, while the TDX route pull remains the source for route records [^tpebus-stations].
