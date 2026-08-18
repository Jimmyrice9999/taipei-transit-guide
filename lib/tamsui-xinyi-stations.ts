import type { Source } from './sources.ts'
import type { StationOverlay, StationProseSentence, Structure } from './station-overlay.ts'
import type { StationResearch } from './station-research.ts'

const accessed = '2026-08-14'
const trtcPublisher = 'Taipei Rapid Transit Corporation (臺北大眾捷運股份有限公司)'
const dortsPublisher = 'Taipei City Department of Rapid Transit Systems (臺北市政府捷運工程局)'

function source(
  id: string,
  title: string,
  titleOriginal: string,
  publisher: string,
  url: string,
  note: string,
  sourceAccessed = accessed,
): Source {
  return {
    id,
    title,
    titleOriginal,
    publisher,
    url,
    accessed: sourceAccessed,
    snapshot: '',
    snapshotAlt: '',
    kind: 'primary',
    lang: 'zh-Hant',
    note,
  }
}

const dortsRoute = source(
  'dorts-tamsui-xinyi-route',
  'Tamsui–Xinyi Line route and stations',
  '淡水信義線',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=0AC527D5FC9E596A&s=A60BB323F07BC768',
  'The builder’s full route page publishes the line’s mixed guideway, station sequence, station table, interchanges and opening chronology.',
)

const dortsXinyi = source(
  'dorts-xinyi-extension',
  'Xinyi Line extension project',
  '信義線東延段',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=0ac527d5fc9e596a&s=CB7BC86DBDA1E44D',
  'The project page says the CKS Memorial Hall–Xiangshan section has seven underground stations and opened on 24 November 2013.',
)

const dortsStationArchitecture = source(
  'dorts-tamsui-xinyi-station-architecture',
  'Tamsui–Xinyi Line station architectural design',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page41.html',
  'The full engineering-book page distinguishes the underground, elevated and ground-level station groups on the line.',
)

const dortsYuanshanToBeitou = source(
  'dorts-tamsui-xinyi-stations-architecture',
  'Tamsui–Xinyi Line elevated station architecture',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page43.html',
  'The full engineering-book pages document the elevated layouts, exit additions and special structural designs at the northern Taipei stations.',
)

const dortsElevatedConstructionPackages = source(
  'dorts-tamsui-xinyi-elevated-construction-packages',
  'Tamsui Line elevated construction packages',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page42.html',
  'The full engineering-book page lists the seven elevated civil packages, their station and viaduct scopes, named contractors, and the CT206 termination and CT206A re-tender. The original-language passages beginning 高架段土建工程計七標如下 and 淡水線明德站、石牌站、唭哩岸站 were checked on the linked page.',
  '2026-08-18',
)

const dortsElevatedDesignConcept = source(
  'dorts-tamsui-xinyi-elevated-design-concept',
  'Tamsui Line elevated-station design concept',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page47.html',
  'The full engineering-book page explains how modern materials reinterpret the base, colonnade and roof of traditional architecture along the elevated section. The original-language passages beginning 高架車站之造型以現代建築材料及手法 and 擷取基座、柱廊及屋頂 were checked on the linked page.',
  '2026-08-18',
)

const dortsElevatedBase = source(
  'dorts-tamsui-xinyi-elevated-base-design',
  'Tamsui Line elevated-station base and flood-elevation design',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page48.html',
  'The full engineering-book page connects elevated station bases to flood-elevation requirements and specifically illustrates Yuanshan’s raised base and sloped flowerbed. The original-language passages beginning 配合防洪高程需求 and 圓山站大斜面花臺及防洪高程抬高之基座 were checked on the linked page.',
  '2026-08-18',
)

const dortsElevatedRoof = source(
  'dorts-tamsui-xinyi-elevated-roof-design',
  'Tamsui Line elevated-station roof design',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page49.html',
  'The full engineering-book page assigns Xuan-shan roofs to Yuanshan, Shilin and Zhishan and Juan-peng roofs to Jiantan, Mingde and Shipai, while describing the roof skylight and layered eaves. The original-language passages beginning 懸山式 and 卷棚式 were checked on the linked page.',
  '2026-08-18',
)

const dortsElevatedExteriorMaterials = source(
  'dorts-tamsui-xinyi-elevated-exterior-materials',
  'Tamsui Line elevated-station exterior materials',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page51.html',
  'The full engineering-book page gives the durability, maintenance and weathering reasons for granite bases and façades, stainless openwork screens and painted structural surfaces. The original-language passages beginning 車站本身為仿傳統建築 and 綜合上述考量 were checked on the linked page.',
  '2026-08-18',
)

const dortsElevatedInteriorMaterials = source(
  'dorts-tamsui-xinyi-elevated-interior-materials',
  'Tamsui Line elevated-station interior materials',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page52.html',
  'The full engineering-book page describes granite concourse walls, openwork screens, enamel-painted steel columns, and the maintenance and safety requirements behind those choices. The original-language passages beginning 川堂層內部牆面 and 琺瑯烤漆鋼板為最佳之選擇 were checked on the linked page.',
  '2026-08-18',
)

const dortsJiantanEngineering = source(
  'dorts-jiantan-roof-wind-engineering',
  'Jiantan station roof wind engineering',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page177.html',
  'The full engineering-book page records Jiantan’s cable-suspended dragon-boat roof, wind-induced movement near Yuanshan, wind-tunnel testing, added tie rods and night lighting. The original-language passages beginning 劍潭站－係採龍舟意象之造形設計 and 經風動試驗後 were checked on the linked page.',
  '2026-08-18',
)

const dortsPublicArtOverview = source(
  'dorts-metro-public-art-overview',
  'Metro public art and station architecture overview',
  '捷運不只是運輸工具',
  dortsPublisher,
  'https://www.dorts.gov.taipei/cp.aspx?n=DA11BCC514603804',
  'The full DORTS page describes the early-network public-art programme and says Jiantan’s open space, Shilin’s performance plaza, Shipai’s cross motif and Mingde’s former Tianmu name are part of the station-specific urban and design context. The original-language passages beginning 劍潭站旁的開放空間 and 石牌站以十字圖形 were checked on the linked page.',
  '2026-08-18',
)

const trtcYuanshanStory = source(
  'trtc-yuanshan-station-story',
  'Yuanshan station story',
  '車站特色－圓山站',
  trtcPublisher,
  'https://web.metro.taipei/c/stationstory/056/056.html',
  'The full TRTC station-story page describes Yuanshan’s traditional palace-style architecture, its former TRA Tamsui Line setting and elevated-to-underground transition, and the mosaic public-art work 圓山五彩物語─記憶中的圓山景色. The original-language passages beginning 圓山站採中國傳統宮廷建築風格 and 作品名稱 were checked in the fetched page.',
  '2026-08-18',
)

const dortsElevatedNetworkContext = source(
  'dorts-tamsui-xinyi-elevated-network-context',
  'Tamsui Line elevated network and demand context',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page37.html',
  'The full engineering-book page lists the 11 elevated stations, the former TRA corridor, the rivers and roads crossed, the 8.95-km main elevated section and the original projected peak-hour demand that helped prioritise the line. The original-language passages beginning 淡水線高架型式的車站 and 士林－淡水走廊的運輸需求量最大 were checked on the linked page.',
  '2026-08-18',
)

const dortsRailwayCorridorPlanning = source(
  'dorts-tamsui-xinyi-railway-corridor-planning',
  'Tamsui Line railway-corridor planning and land use',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page38.html',
  'The full engineering-book page explains the paid transfer of the former TRA Tamsui branch right-of-way, the urban-plan changes for stations and facilities, the New Beitou branch planning and the gradual construction start between ROC years 78 and 80. The original-language passages beginning 淡水線係利用臺鐵淡水支線之原有路權 and 變更北淡鐵路新北投支線 were checked on the linked page.',
  '2026-08-18',
)

const dortsGroundStationTypes = source(
  'dorts-tamsui-xinyi-ground-station-types',
  'Tamsui Line ground-station type and trade-offs',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page33.html',
  'The full engineering-book page defines the ground-station type and identifies the Fuxinggang-to-Hongshulin section as ground-level, describing its economic advantage and the resulting impacts on surface movement and views. The original-language passages beginning 地面車站是指 and 淡水信義線復興崗站至紅樹林站 were checked on the linked page.',
  '2026-08-18',
)

const dortsStationDesignGoals = source(
  'dorts-tamsui-xinyi-station-design-goals',
  'Tamsui Line station design goals and environmental integration',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page40.html',
  'The full engineering-book page says each station should have a clear shared image and its own character, integrate with surrounding buildings, express regional identity and use modern technology to convey traditional architectural meaning. The original-language passages beginning 每一車站均應各具特色 and 車站應重視其與四周環境之整合 were checked on the linked page.',
  '2026-08-18',
)

const dortsNorthernPublicRealm = source(
  'dorts-tamsui-xinyi-northern-public-realm',
  'Tamsui Line northern public-realm and recreation design',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page41.html',
  'The full engineering-book page describes the old corridor’s recreational and cultural resources, the linear park, walking and cycle paths, planting, small plazas and the different reasons for elevated versus ground-level forms along the northern route. The original-language passages beginning 台鐵北淡線之路廊提供早期通勤方便性 and 主要以人行步道及自行車道為主 were checked on the linked page.',
  '2026-08-18',
)

const dortsShilinToXinbeitou = source(
  'dorts-tamsui-xinyi-northern-stations',
  'Tamsui–Xinyi Line northern station architecture',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page45.html',
  'The full engineering-book page documents Qilian, Qiyan, Beitou and Xinbeitou platform and exit arrangements.',
)

const dortsTamsui = source(
  'dorts-tamsui-station-architecture',
  'Tamsui station architectural design',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page46.html',
  'The full engineering-book page documents Tamsui terminal’s elevated island platform and later-added exits.',
)

const dortsTamsuiArchitectureDetails = source(
  'dorts-tamsui-station-architecture-details',
  'Tamsui station architectural character and materials',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page71.html',
  'The full engineering-book page explains Tamsui’s Taiwanese-dwelling and colonial architectural references, Red Castle colour palette, arcade facade, and related design elements. The original-language passages beginning 淡水站是全線終點站 and 長向立面設計連栱式的長廊 were checked on the linked page.',
  '2026-08-18',
)

const dortsTamsuiCorridorSummary = source(
  'dorts-tamsui-station-corridor-summary',
  'Tamsui station corridor and waterfront setting',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page73.html',
  'The full engineering-book summary explains how the former TRA right-of-way enabled the elevated station form, the northern linear park, and the Tamsui waterfront recreation park. The original-language passages beginning 由於利用台鐵北淡支線之原有路權 and 高架段下方擁有近10km長之線形多功能公園 were checked on the linked page.',
  '2026-08-18',
)

const dortsSpecialArchitecture = source(
  'dorts-tamsui-xinyi-special-architecture',
  'Special architectural structures on the Tamsui–Xinyi Line',
  '捷運工程叢書 精進版－34 捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page50.html',
  'The full engineering-book page documents Jiantan’s suspended roof, Beitou’s space truss and Tamsui’s reuse of the old TRA setting.',
)

const dortsInitialStationTypes = source(
  'dorts-initial-network-station-types',
  'Initial-network station types and shallow-cut stations',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page31.html',
  'The full engineering-book page defines underground station types and identifies Minquan W. Rd. as a shallow-cut station, explaining the relationship between platform depth, geology, alignment and construction cost. The original-language passage beginning 淺挖式車站係 was checked on the linked page.',
  '2026-08-18',
)

const dortsInterchangePlanning = source(
  'dorts-interchange-station-planning',
  'Interchange-station planning in the Taipei Metro',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page36.html',
  'The full engineering-book page explains why interchange stations require special platform and concourse planning and lists Taipei Main, Zhongshan, Chiang Kai-Shek Memorial Hall and Minquan W. Rd. among the central interchanges. The original-language passages beginning 交會站是指 and 交會站的布設相當複雜 were checked on the linked page.',
  '2026-08-18',
)

const dortsNonParallelInterchanges = source(
  'dorts-nonparallel-interchange-planning',
  'Non-parallel interchange planning',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page37.html',
  'The full engineering-book page classifies Taipei Main, Zhongshan and Minquan W. Rd. as non-parallel interchanges and says their passenger transfers use vertical circulation between different platform elevations. The original-language passages beginning 若二條路線軌道平面方向不同 and 此類車站其站內轉乘旅客的動線 were checked on the linked page.',
  '2026-08-18',
)

const dortsInitialArchitecture = source(
  'dorts-initial-network-architecture',
  'Initial-network station architecture and individual variation',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page136.html',
  'The full engineering-book page describes the standardised functional base of early underground stations alongside the discretion left to design teams in themes, materials and colour, and names Chiang Kai-Shek Memorial Hall and Minquan W. Rd. as notable examples. The original-language passages beginning 初期路網各路線車站 and 中正紀念堂站、民權西路站 were checked on the linked page.',
  '2026-08-18',
)

const dortsCksArchitecture = source(
  'dorts-cks-station-architecture',
  'Chiang Kai-Shek Memorial Hall station architectural theme',
  '捷運高架車站建築造型設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no34/files/basic-html/page26.html',
  'The full engineering-book page identifies Chiang Kai-Shek Memorial Hall station’s blue-roof and white-wall treatment as a notable example of a station design derived from local context. The original-language passage beginning 中正紀念堂站之藍頂白牆 was checked on the linked page.',
  '2026-08-18',
)

const dortsPublicArtSelection = source(
  'dorts-initial-network-public-art-selection',
  'Initial-network public-art station selection',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page216.html',
  'The full engineering-book page records the selection logic for early-network public art, including the geographic importance of NTU Hospital, the interchange status of Chiang Kai-Shek Memorial Hall and Taipei Main, and the visual-focus logic for placing works. The original-language passages beginning 基於時間、金錢及人力 and 新店線辦理之車站中 were checked on the linked page.',
  '2026-08-18',
)

const dortsPublicArtMethods = source(
  'dorts-initial-network-public-art-methods',
  'Initial-network public-art funding and selection methods',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page218.html',
  'The full engineering-book page distinguishes open selection from invited comparison, records the Taipei Main public-art budget problem in the Nangang-line programme, and identifies Shuanglian and NTU Hospital as examples of the two selection methods. The original-language passages beginning 公共藝術設置之初 and 徵選方式 were checked on the linked page.',
  '2026-08-18',
)

const dortsNariFlood = source(
  'dorts-nari-typhoon-flood-path',
  'Nari typhoon flood path through Taipei Metro',
  '捷運土木工程實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no4/files/basic-html/page181.html',
  'The full engineering-book page documents the September 2001 Nari typhoon flood path: water entered through the Taipei railway-station area, descended through connected stairs and escalators into the Tamsui Line levels, reached Chiang Kai-Shek Memorial Hall southward and stopped at Shuanglian northward. The original-language passages beginning 納莉颱風淹水檢討 and 洪水由臺鐵松山車站附近 were checked on the linked page.',
  '2026-08-18',
)

const dortsZhongshanDesign = source(
  'dorts-zhongshan-station-design',
  'Zhongshan station design and the “Happy Transfer” theme',
  '松山線各車站建築設計簡介',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no52/files/basic-html/page66.html',
  'The full technical-journal page describes Zhongshan’s railway-corridor urban context, the “Happy Transfer” design theme, bright everyday-street imagery and its integration with a joint-development building. The original-language passages beginning 中山站(G16/R14) and 本站之設計主題為「快樂轉運」 were checked on the linked page.',
  '2026-08-18',
)

const dortsZhongshanJointDevelopment = source(
  'dorts-zhongshan-joint-development',
  'Zhongshan station joint-development public realm',
  '臺北捷運土地開發案例解析（一）',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no20/files/basic-html/page104.html',
  'The full land-development case records the Zhongshan joint-development site at the junction of four central districts, its transit-plaza and public-art greenbelt programme, and its light, greenery and wind design concept. The original-language passages beginning 中山站（捷二）用地範圍 and 於基地一樓設置捷運廣場 were checked on the linked page.',
  '2026-08-18',
)

const dortsZhongshanArtDesign = source(
  'dorts-zhongshan-art-integrated-design',
  'Zhongshan station art-integrated design example',
  '捷運技術 第50期',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no50/files/basic-html/page147.html',
  'The full technical-journal page names “Crystal Clear” (晶透) as a Zhongshan station example in a discussion of bringing public art and local humanities into station design. The original-language passage beginning 如中山站的晶透 was checked on the linked page.',
  '2026-08-18',
)

const dortsZhongshanLinearPark = source(
  'dorts-zhongshan-shuanglian-linear-park',
  'Zhongshan–Shuanglian linear-park improvement',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page199.html',
  'The full engineering-book page records the Heart Zhongshan linear-park improvement carried out from 2017 between Zhongshan and Shuanglian under Taipei’s City Museum programme. The original-language passage beginning 於106年起在淡水線捷運中山站及雙連站之間 was checked on the linked page.',
  '2026-08-18',
)

const dortsMinquanDesign = source(
  'dorts-minquan-west-road-station-design',
  'Minquan W. Rd. station architectural design',
  '捷運車站規劃與設計實務',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no2/files/basic-html/page147.html',
  'The full engineering-book page describes Minquan W. Rd.’s old-Taipei rear-station commercial context, its “Postmodern” theme, light steel-and-glass entrances, arch-shaped ventilation treatment, glass mosaics and enamel platform-wall graphics. The original-language passages beginning 民權西路站區域環境 and 車站的建築設計以該區域性特色 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiDesignOverview = source(
  'dorts-xinyi-dr148-design-overview',
  'Xinyi Line DR148 station design overview',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page65.html',
  'The full technical-journal page gives the Xinyi Line’s six-station corridor context, construction-era R05–R10 labels, underground island-platform forms, station sites and the “Metro Suite” design concept. The original-language passages beginning 臺北捷運信義線自羅斯福路 and 信義線整體建築設計構想 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiAnheDesign = source(
  'dorts-xinyi-anhe-design',
  'Xinyi Anhe station design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page67.html',
  'The full technical-journal page describes Xinyi Anhe’s “Life Melody” theme, boutique and furniture-street context, natural materials, dual-arch entrances, transparent glazing, entrance arrangement and the station’s construction-era R07 label. The original-language passages beginning 整體車站設計主題與構思 and 在出入口設計部分 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiAnheInterior = source(
  'dorts-xinyi-anhe-interior',
  'Xinyi Anhe station interior and ventilation design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page68.html',
  'The full technical-journal page describes Xinyi Anhe’s reduced ventilation-shaft form, warm colour palette, continuous wall-and-ceiling materials, lighting and beige granite floor. The original-language passages beginning 而車站營運所需之通風井 and 站體室內空間設計理念 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiTaipei101Design = source(
  'dorts-xinyi-taipei101-design',
  'Taipei 101/World Trade Center station design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page70.html',
  'The full technical-journal page describes the station’s trade, finance, commercial and leisure context, nearby Taipei World Trade Center and Taipei 101, surrounding offices and housing, the “Modern Movement” theme, entrance-to-plaza connection, transparent curved walls and day/night lighting. The original-language passages beginning 本站所處區位 and 本站設計主題與構思 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanDesign = source(
  'dorts-xinyi-xiangshan-design',
  'Xiangshan station site and design concept',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page73.html',
  'The full technical-journal page describes the Xiangshan site beside Zhongqiang Park, the park’s mature trees and facilities, Taipei tree-frog ecology, and the “Song of the Tree Frog” design concept. The original-language passages beginning 象山站(R05)位於信義路五段 and 因位處四獸山系象山山腳 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanLandscape = source(
  'dorts-xinyi-xiangshan-landscape',
  'Xiangshan station landscape protection and entrances',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page74.html',
  'The full technical-journal page records the retreat of above-ground facilities into a planted north landscape strip to protect tree-frog habitat, and describes the transparent entrance forms. The original-language passages beginning 台北樹蛙是中強公園地區的特色 and 出入口在設計手法上 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanEntrances = source(
  'dorts-xinyi-xiangshan-entrances',
  'Xiangshan station entrance and public-space design',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page75.html',
  'The full technical-journal page describes the reduced visual mass at entrances A and D, the open-space plaza at entrance B in Zhongqiang Park, the underground passage below the Xinyi branch, and the elevator placement. The original-language entries beginning 出入口A、D面臨 and 出入口B位於中強公園內 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiXiangshanInterior = source(
  'dorts-xinyi-xiangshan-interior',
  'Xiangshan station interior and tree-frog interpretation',
  '都會組曲－信義線DR148標建築設計理念',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page77.html',
  'The full technical-journal page describes the rainbow colour plan, tree-frog ceramic wall treatment, environmental-education display, urban and natural entrance imagery, and hand-crafted ceramic panels. The original-language passages beginning 象山站(R05)地下站體室內空間 and 出入口A朝臺北市區方向 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiCR580B = source(
  'dorts-xinyi-cr580b-contract',
  'CR580B Xinyi Line section contract and station works',
  '捷運信義線土建施工－CR580B區段標之特殊施工及障礙處理',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page100.html',
  'The full technical-journal page records CR580B’s 16 subcontracts, the joint-venture award, value, dates, R07/R06/R05 station construction scales, and the distinction between Taipei 101 structural work and later fit-out. The original-language passages beginning 捷運信義線CR580B區段標 and 二、車站工程規模 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiDaanDevelopment = source(
  'dorts-xinyi-daan-development',
  'Daan and Daan Park joint-development sites',
  '臺北捷運聯合開發案例解析',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page17.html',
  'The full technical-journal page records the Daan Park and Daan joint-development sites, their surroundings, private land, building sizes, transit-facility integration and completion/occupancy records. The original-language entries beginning 大安森林公園站（捷）二基地 and 大安站（捷）三基地 were checked on the linked page.',
  '2026-08-18',
)

const dortsXinyiLandDevelopmentContext = source(
  'dorts-xinyi-land-development-context',
  'Xinyi Line joint-development delivery model',
  '臺北捷運聯合開發案例解析',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page19.html',
  'The full technical-journal page explains the land-acquisition constraint in the commercially intense corridor and the investor-built transit-facility model used at Daan Park and Daan to reduce completion uncertainty before the line opening. The original-language passages beginning 信義線沿線因商業規模 and 信義線大安森林公園站 were checked on the linked page.',
  '2026-08-18',
)

const dortsDaanParkLandscape = source(
  'dorts-xinyi-daan-park-landscape',
  'Daan Park station landscape design',
  '大安森林公園站地景設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page203.html',
  'The full technical-journal paper describes the “forest transfer” concept, the integration of sunlight, greenery and water, native planting, habitat support, curved forms and water features linking the underground station to Daan Park. The original-language paragraphs beginning 捷運車站與都會公園結合 and 就景觀植栽而言 were checked on the linked page.',
  '2026-08-18',
)

const dortsDaanParkStationDesign = source(
  'dorts-xinyi-daan-park-station-design',
  'Daan Park station architecture and landscape interface',
  '大安森林公園站地景設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page205.html',
  'The full technical-journal paper records Daan Park station’s site under Xinyi Road, its 25.8-hectare park edge, sunlight hall, sunken garden, light towers, multifunction plaza, opened concourse wall and the green-water-garden design axis. The original-language paragraphs beginning 捷運信義線大安森林公園站 and 大安森林公園站係將車站穿堂層側牆打開 were checked on the linked page.',
  '2026-08-18',
)

const dortsDaanParkArtProject = source(
  'dorts-xinyi-daan-park-art-project',
  'Daan Park, Daan and Xinyi Anhe public-art project',
  '大安森林的公共藝術饗宴－兼論信義線沿線美質環境與藝術場域',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page222.html',
  'The full technical-journal paper records the coordinated three-station public-art plan, its NT$22.5 million budget, October 2011 open selection, completion by the end of 2013 and the ecological design brief. The original-language paragraphs beginning 捷運局期待信義線的大安森林公園站 and 全案所有作品 were checked on the linked page.',
  '2026-08-18',
)

const dortsCK570H = source(
  'dorts-xinyi-ck570h-contract',
  'CK570H Dongmen station and tunnel section',
  '臺北捷運信義線CK570H區段標施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page82.html',
  'The full technical-journal page records CK570H’s cut-and-cover Dongmen station, shield-tunnel lengths, common tunnel, site dimensions, excavation depth and construction method. The original-language passages beginning CK570H區段標包含 and 車站位於金山南路 were checked on the linked page.',
  '2026-08-18',
)

const dortsCK570HConstruction = source(
  'dorts-xinyi-ck570h-construction',
  'CK570H Dongmen station structural and architectural works',
  '臺北捷運信義線CK570H區段標施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page83.html',
  'The full technical-journal page records Dongmen’s deep diaphragm wall, building-protection measures, double-wall SRC structure, ventilation constraints, finish materials, wayfinding floor and integrated system information counter. The original-language passages beginning 車站建物保護施工 and 車站及出入口建築裝修 were checked on the linked page.',
  '2026-08-18',
)

const dortsCK570HTunnel = source(
  'dorts-xinyi-ck570h-tunnel-intersection',
  'CK570H four-tunnel intersection and settlement control',
  '臺北捷運信義線CK570H區段標施工',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/JRTST/ebook/no51/files/basic-html/page84.html',
  'The full technical-journal page records the 113-metre four-tunnel intersection, cover depths, tunnel clearances, construction order, ground improvement, supports for the earlier tunnel and measured settlement. The original-language passages beginning 交會區呈一狹長之形狀 and 四條隧道交會區各隧道環片 were checked on the linked page.',
  '2026-08-18',
)

const dortsDepot = source(
  'dorts-tamsui-xinyi-depot',
  'Tamsui–Xinyi Line depot planning',
  '捷運工程叢書 精進版－27 捷運機廠規劃與設計',
  dortsPublisher,
  'https://ebook.dorts.gov.taipei/ebook/no27/files/basic-html/page27.html',
  'The full engineering-book page identifies Beitou Depot as the line’s main depot and gives its location in northern Beitou.',
)

const art = {
  shuanglian: source(
    'dorts-art-shuanglian',
    'Shuanglian station public art',
    '雙連‧行遠',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=DE643CF3F6E0171F',
    'The official public-art page identifies 雙連‧行遠, its artists, enamel-panel medium and 16 September 1996 completion date; its full description records the open selection and the work’s historical account of Shuanglian.',
    '2026-08-17',
  ),
  ntuHospital: source(
    'dorts-art-ntu-hospital',
    'NTU Hospital station public art',
    '手之組曲',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C32B3BEE19B6BC1F',
    'The official public-art page identifies 手之組曲, 李光裕, its copper and granite materials, platform location and November 1998 completion; its full description connects the work to the station’s local history and humanities.',
    '2026-08-17',
  ),
  daanPark: source(
    'dorts-art-daan-park',
    'Daan Park station public art',
    '大安之花、秋葉旅人、春光乍現、四季',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=36B82FCFF7957990',
    'The official public-art page identifies four Daan Park station works, their artists, materials and locations; it does not publish completion years for these entries.',
  ),
  daan: source(
    'dorts-art-daan',
    'Daan station public art',
    '飛天傳奇',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=C09624CB5C9D59D4',
    'The official public-art page identifies 飛天傳奇 by 賴純純, its ceramic-panel, stainless-steel and acrylic-glass materials and station location; it does not publish a completion year.',
  ),
  xinyiAnhe: source(
    'dorts-art-xinyi-anhe',
    'Xinyi Anhe station public art',
    '水城臺北',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=D058D336AA77862B',
    'The current official public-art page identifies 水城臺北 by 吳耿禎, its laminated tempered-glass medium and concourse location; it does not publish a completion year. The earlier URL without the final B returned 404 when checked on 17 August 2026.',
    '2026-08-17',
  ),
  taipei101: source(
    'dorts-art-taipei-101',
    'Taipei 101 station public art',
    '相遇時刻',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=BB2C701F4B7EA04A',
    'The official public-art page identifies 相遇時刻 by 黃心健, its interactive materials, location and 28 June 2013 completion date; it also records the invited-competition selection and NT$12,000,000 cost.',
  ),
  xiangshan: source(
    'dorts-art-xiangshan',
    'Xiangshan station public art',
    '心蛙朵朵開',
    dortsPublisher,
    'https://www.dorts.gov.taipei/cp.aspx?n=2E32DBDC65CAA983&s=E09DC8AE77E47420',
    'The official public-art page identifies 心蛙朵朵開 by 江洋輝 and 麻粒國際文化試驗股份有限公司, its stainless-steel and epoxy-resin medium, location and 28 June 2013 completion date.',
  ),
} as const

const trtcUrls: Record<string, string> = {
  R02: 'https://web.metro.taipei/pages2026/WebStation/099/1',
  R03: 'https://web.metro.taipei/pages2026/WebStation/100/1',
  R04: 'https://web.metro.taipei/pages2026/WebStation/101/1',
  R05: 'https://web.metro.taipei/pages2026/WebStation/011/1',
  R06: 'https://web.metro.taipei/pages2026/WebStation/103/1',
  R07: 'https://web.metro.taipei/pages2026/WebStation/134/1',
  R08: 'https://web.metro.taipei/pages2026/WebStation/042/1',
  R09: 'https://web.metro.taipei/pages2026/WebStation/050/1',
  R10: 'https://web.metro.taipei/pages2026/WebStation/051/1',
  R11: 'https://web.metro.taipei/pages2026/WebStation/053/1',
  R12: 'https://web.metro.taipei/pages2026/WebStation/054/1',
  R13: 'https://web.metro.taipei/pages2026/WebStation/055/1',
  R14: 'https://web.metro.taipei/pages2026/WebStation/056/1',
  R15: 'https://web.metro.taipei/pages2026/WebStation/057/1',
  R16: 'https://web.metro.taipei/pages2026/WebStation/058/1',
  R17: 'https://web.metro.taipei/pages2026/WebStation/059/1',
  R18: 'https://web.metro.taipei/pages2026/WebStation/060/1',
  R19: 'https://web.metro.taipei/pages2026/WebStation/061/1',
  R20: 'https://web.metro.taipei/pages2026/WebStation/062/1',
  R21: 'https://web.metro.taipei/pages2026/WebStation/063/1',
  R22: 'https://web.metro.taipei/pages2026/WebStation/064/1',
  R22A: 'https://web.metro.taipei/pages2026/WebStation/065/1',
  R23: 'https://web.metro.taipei/pages2026/WebStation/066/1',
  R24: 'https://web.metro.taipei/pages2026/WebStation/067/1',
  R25: 'https://web.metro.taipei/pages2026/WebStation/068/1',
  R26: 'https://web.metro.taipei/pages2026/WebStation/069/1',
  R27: 'https://web.metro.taipei/pages2026/WebStation/070/1',
  R28: 'https://web.metro.taipei/pages2026/WebStation/071/1',
}

const trtcNames: Record<string, { en: string; zh: string }> = {
  R02: { en: 'Xiangshan', zh: '象山' },
  R03: { en: 'Taipei 101/World Trade Center', zh: '台北101/世貿' },
  R04: { en: 'Xinyi Anhe', zh: '信義安和' },
  R05: { en: 'Daan', zh: '大安' },
  R06: { en: 'Daan Park', zh: '大安森林公園' },
  R07: { en: 'Dongmen', zh: '東門' },
  R08: { en: 'Chiang Kai-Shek Memorial Hall', zh: '中正紀念堂' },
  R09: { en: 'NTU Hospital', zh: '台大醫院' },
  R10: { en: 'Taipei Main Station', zh: '台北車站' },
  R11: { en: 'Zhongshan', zh: '中山' },
  R12: { en: 'Shuanglian', zh: '雙連' },
  R13: { en: 'Minquan W. Rd.', zh: '民權西路' },
  R14: { en: 'Yuanshan', zh: '圓山' },
  R15: { en: 'Jiantan', zh: '劍潭' },
  R16: { en: 'Shilin', zh: '士林' },
  R17: { en: 'Zhishan', zh: '芝山' },
  R18: { en: 'Mingde', zh: '明德' },
  R19: { en: 'Shipai', zh: '石牌' },
  R20: { en: 'Qilian', zh: '唭哩岸' },
  R21: { en: 'Qiyan', zh: '奇岩' },
  R22: { en: 'Beitou', zh: '北投' },
  R22A: { en: 'Xinbeitou', zh: '新北投' },
  R23: { en: 'Fuxinggang', zh: '復興崗' },
  R24: { en: 'Zhongyi', zh: '忠義' },
  R25: { en: 'Guandu', zh: '關渡' },
  R26: { en: 'Zhuwei', zh: '竹圍' },
  R27: { en: 'Hongshulin', zh: '紅樹林' },
  R28: { en: 'Tamsui', zh: '淡水' },
}

function trtcStation(code: string): Source {
  const station = trtcNames[code]
  return source(
    `trtc-${code.toLowerCase()}-station`,
    `${code} ${station.en} station information`,
    `車站資訊查詢：${code} ${station.zh}`,
    trtcPublisher,
    trtcUrls[code],
    'The operator’s full station page publishes the current station address, accessibility facilities, toilets, bicycle access, exit count and numbered exit locations.',
  )
}

type RData = {
  structure: Structure
  exits: number
  openingDate?: string
  openingSource?: Source
  structureSource?: Source
  platformDetails: string
  platformSource?: Source
  exitDetails: string
  facilities: string
  landmarks: string
  publicArt: string
  publicArtSource?: Source
  engineeringHistory: string
  engineeringHistorySource?: Source
  interchange?: { label: string; lineCode?: string }
  branch?: { label: string; source: Source }
  proseSources?: Source[]
  prose?: StationProseSentence[]
}

const underground = (platformDetails = 'Underground station; platform form and track count: TBC.') => platformDetails
const elevated = 'Elevated station with one island platform; track count: TBC.'
const atGrade = 'At-grade station; platform form and track count: TBC.'
const tbc = 'TBC'

const rData: Record<string, RData> = {
  R02: {
    structure: 'underground', exits: 3, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路5段與松勇路口; 2: 信義路5段150巷口、近象山公園、信義快速道路; 3: 信義路5段、近91巷、信義快速道路. Accessible exits: 1 and 2.',
    facilities: 'Accessible lifts: exits 1 and 2, plus a paid-concourse platform lift; paid-concourse toilets by the platform lift; parent/accessible toilet and baby changing at the same location; bicycle access open; enquiry point near exits 1 and 2.',
    landmarks: '象山公園; 信義快速道路', publicArt: '心蛙朵朵開 — 江洋輝、麻粒國際文化試驗股份有限公司; stainless steel and epoxy resin; 2013.', publicArtSource: art.xiangshan,
    engineeringHistory: tbc, interchange: undefined,
    proseSources: [
      dortsXinyiDesignOverview,
      dortsXinyiCR580B,
      dortsXinyiXiangshanDesign,
      dortsXinyiXiangshanLandscape,
      dortsXinyiXiangshanEntrances,
      dortsXinyiXiangshanInterior,
    ],
    prose: [
      { text: 'The current DORTS station table identifies Xiangshan as R02 with engineering code R5, while the DR148 design article uses the construction-era label R05 for the same station.', source: dortsXinyi.id },
      { text: 'That article places the station east of Songren Road and west of the Xinyi branch exit of the National Freeway, at the foot of Xiangshan beside Zhongqiang Park.', source: dortsXinyiXiangshanDesign.id },
      { text: 'It records an underground two-level island-platform station with three entrances, and describes Zhongqiang Park as a mature recreational landscape with trees, sports facilities and morning runners.', source: dortsXinyiDesignOverview.id },
      { text: 'The park setting also brought a specific ecological constraint: the Taipei tree frog breeds in the area, so the design treated existing trees and the park’s dense woodland as a protective screen.', source: dortsXinyiXiangshanDesign.id },
      { text: 'CR580B’s station record gives the R05 construction label a body about 220 metres long and 21.8 metres wide, with a 22.4-metre excavation, three entrances and two ventilation shafts.', source: dortsXinyiCR580B.id },
      { text: 'The contract article records CR580B as a 16-subcontract section awarded on 23 May 2005 to the Taiwan Obayashi–Mutual Construction joint venture for NT$8.272 billion, opened on 1 July 2005 and completed with the line on 23 November 2013.', source: dortsXinyiCR580B.id },
      { text: 'To reduce the impact on the frog habitat, the ventilation shafts, cooling tower and small underground-substation lifting opening were concentrated in a planted landscape strip on the north side of Xinyi Road instead of being scattered through the park.', source: dortsXinyiXiangshanLandscape.id },
      { text: 'Entrances A and D were designed with reduced visual mass and continuous planting, while entrance B sits inside Zhongqiang Park with a shaded waiting plaza, seats and an underground passage beneath the Xinyi branch.', source: dortsXinyiXiangshanEntrances.id },
      { text: 'The entrance language uses curved, lightweight transparent glass so daylight reaches the passage by day and the entrance becomes an urban light form at night.', source: dortsXinyiXiangshanLandscape.id },
      { text: 'Inside, the station’s main colour plan is a rainbow, with tree-frog ceramic wall panels and an environmental-education display linking the underground space to the protected habitat outside.', source: dortsXinyiXiangshanInterior.id },
      { text: 'The interior programme separates the urban imagery toward the city from frog, butterfly and child imagery toward the park, and carries the same distinction to the platform-level art walls.', source: dortsXinyiXiangshanInterior.id },
      { text: 'DORTS describes Xiangshan’s work as a tree-frog and childhood-memory composition that represents the richness of the local natural environment and invites visitors to experience its distinctive ecology.', source: art.xiangshan.id },
    ],
  },
  R03: {
    structure: 'underground', exits: 5, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路5段與莊敬路口、世貿一館旁; 2: 信義路5段與莊敬路口對側; 3: 信義路5段20號; 4: 信義路5段7號B1、台北101 B1廣場; 5: 信義路5段與市府路口、世貿一館旁. Accessible exits: 3 and 5.',
    facilities: 'Accessible lifts: exits 3 and 5, plus a paid-concourse platform lift; paid-concourse toilets by the platform lift and unpaid toilets near exit 4/Taipei 101 passage; nursing room near exits 4 and 5; baby changing; bicycle access open; enquiry point near exits 3–5.',
    landmarks: '台北101; 世貿一館', publicArt: '相遇時刻 — 黃心健; interactive mechanical, computer, sensor, network, glass and stainless-steel work; 2013.', publicArtSource: art.taipei101,
    engineeringHistory: tbc,
    proseSources: [dortsXinyiDesignOverview, dortsXinyiTaipei101Design, dortsXinyiCR580B],
    prose: [
      { text: 'The current DORTS station table identifies Taipei 101/World Trade Center as R03 with engineering code R6, while the DR148 article labels the station R06.', source: dortsXinyi.id },
      { text: 'The design article places it below Xinyi Road between City Hall Road and Zhuangjing Road, in a district where trade, finance, commerce, leisure and entertainment operate together.', source: dortsXinyiTaipei101Design.id },
      { text: 'Taipei World Trade Center and Taipei 101 stand immediately to the north, while department-store, cinema, office, headquarters and large-residential developments fill the surrounding five-minute walking catchment described by DORTS.', source: dortsXinyiTaipei101Design.id },
      { text: 'DORTS says that concentration of activity gave the station an important role in the Xinyi planning district and was expected to produce high use of the metro facilities.', source: dortsXinyiTaipei101Design.id },
      { text: 'The design theme is Modern Movement, framed as a space for dialogue with the world through the presence of the trade centre and Taipei 101.', source: dortsXinyiTaipei101Design.id },
      { text: 'Four entrances are placed on both sides of Xinyi Road, with a separate E passage connecting toward the Taipei 101 plaza.', source: dortsXinyiTaipei101Design.id },
      { text: 'Their curved transparent walls continue the station family’s light, abstract sculptural language and use the movement of escalator passengers to create visual interaction with the trade centre and financial centre.', source: dortsXinyiTaipei101Design.id },
      { text: 'DORTS describes the daytime effect as sunlight passing through glass and the lightweight internal structure, and the night effect as four urban light forms joining the surrounding commercial district.', source: dortsXinyiTaipei101Design.id },
      { text: 'The CR580B record says the R06 station’s structural work had already been awarded in ROC 91, so that section contract carried only the building fit-out, water and electrical, environmental-control and mechanical-system work for Taipei 101 station.', source: dortsXinyiCR580B.id },
      { text: 'The same contract record identifies the R06 construction-era station as an underground two-level island-platform station with five entrances, keeping the structural package distinction separate from the current R03 code.', source: dortsXinyiCR580B.id },
      { text: 'The Taipei 101 station record describes a 100-metre entrance passage where twelve book-like, kinetic flip-card installations use interaction to connect two imagined futures.', source: art.taipei101.id },
      { text: 'DORTS records the work as the result of an invited competition with a cost of NT$12 million.', source: art.taipei101.id },
    ],
  },
  R04: {
    structure: 'underground', exits: 6, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路4段與安和路1段路口; 2: 信義路4段與安和路2段路口、安和路派出所前; 2A: 同路口; 3: 信義路4段236號與通安街口; 4: 248號與通安街口; 5: 239巷口. Accessible exits: 2A and 5.',
    facilities: 'Accessible lifts: exits 2A and 5, plus a paid-concourse platform lift; paid-concourse toilets by the platform lift; parent/accessible toilet and baby changing at that location; bicycle access open; enquiry point near exits 3–5.',
    landmarks: '安和路派出所', publicArt: '水城臺北 — 吳耿禎; laminated tempered glass; year TBC.', publicArtSource: art.xinyiAnhe,
    engineeringHistory: tbc,
    proseSources: [dortsXinyiDesignOverview, dortsXinyiAnheDesign, dortsXinyiAnheInterior, dortsXinyiCR580B],
    prose: [
      { text: 'The current DORTS station table identifies Xinyi Anhe as R04 with engineering code R7, while the DR148 design article labels the station R07.', source: dortsXinyi.id },
      { text: 'The full station record places it beneath the Xinyi Road–Anhe Road intersection as an underground two-level island-platform station with five entrances.', source: dortsXinyiDesignOverview.id },
      { text: 'CR580B gives the construction-era R07 station a body about 209.8 metres long and 29.5 metres wide, a 21.5-metre excavation and two ventilation shafts.', source: dortsXinyiCR580B.id },
      { text: 'Its design theme is Life Melody, drawn from Xinyi Anhe Road’s refined street windows and the evening meeting and resting culture of the surrounding neighbourhood.', source: dortsXinyiAnheDesign.id },
      { text: 'DORTS connects that theme to the nearby boutique shops and furniture street, using natural materials, light and hand-crafted art to make the underground station echo the street’s more leisurely character.', source: dortsXinyiAnheDesign.id },
      { text: 'The four main entrances on Xinyi and Anhe Roads, plus the northern development entrance D, use paired curved arches intended to suggest a streamlined form rising from underground.', source: dortsXinyiAnheDesign.id },
      { text: 'Transparent full-height curved glass allows daylight into the underground passage and changes the station into a colourful, polished urban way-station after dark.', source: dortsXinyiAnheDesign.id },
      { text: 'The ventilation shafts were reduced and integrated with the road form, using an up-blast arrangement and a 1.8-metre parapet to keep the equipment out of ordinary pedestrian sightlines.', source: dortsXinyiAnheInterior.id },
      { text: 'A warm colour palette and planting were selected to blend the above-ground objects into the street, while the interior uses continuous wall-and-ceiling materials, lighting changes and beige granite flooring to carry the same atmosphere below grade.', source: dortsXinyiAnheInterior.id },
      { text: 'CR580B contained 16 subcontracts and was awarded to the Taiwan Obayashi–Mutual Construction joint venture for NT$8.272 billion after the 23 May 2005 bid opening, with work beginning on 1 July 2005 and the line completed on 23 November 2013.', source: dortsXinyiCR580B.id },
      { text: 'For Xinyi Anhe, the artwork treats the paid/unpaid concourse barrier as a meeting point between old Taipei waterways and a future city of plants, streets and imagined planets.', source: art.xinyiAnhe.id },
    ],
  },
  R05: {
    structure: 'underground', exits: 6, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路3段147-1號、近147巷口、近台北農會信義大樓; 2: 信義路3段145號、師大附中旁; 3: 信義路3段180號、近166巷口; 4: 信義路4段2號與復興南路2段交叉口; 5: 信義路4段與復興南路2段交叉、近信義路4段30巷8弄口; 6: 復興南路1段317號. Accessible R exit: 3.',
    facilities: 'R accessible lift: exit 3 and a paid-concourse platform lift; toilets in the paid zone by exit 3 and transfer connection; parent/accessible toilet at the same location; nursing room in the paid B1 area; baby changing; bicycle access not open; enquiry point near R exits 1–3.',
    landmarks: '台北農會信義大樓; 師大附中', publicArt: '飛天傳奇 — 賴純純; ceramic panels, stainless steel and acrylic glass; year TBC.', publicArtSource: art.daan,
    engineeringHistory: tbc, interchange: { label: 'Bannan Line; transfer mode: TBC', lineCode: 'BR' },
    proseSources: [dortsXinyiDesignOverview, dortsXinyiDaanDevelopment, dortsXinyiLandDevelopmentContext, dortsDaanParkArtProject],
    prose: [
      { text: 'The current DORTS station table identifies Daan as R05/BR09 with engineering code R8, while the Xinyi design article uses the construction-era label R08/BR5.', source: dortsXinyi.id },
      { text: 'The same design overview places Daan inside the six-station Xinyi corridor that moves between financial and commercial centres, mixed residential frontage and urban green space before reaching Xiangshan.', source: dortsXinyiDesignOverview.id },
      { text: 'The Daan joint-development site occupies the block between Xinyi Road Section 3, Jianguo South Road and Fuxing South Road, with Shida Affiliated High School on the west and the Wenhu Line Daan interchange at the site.', source: dortsXinyiDaanDevelopment.id },
      { text: 'DORTS records the parcel as privately owned and only 890 square metres, with a 15-storey, four-basement commercial building that received its occupancy permit in 2012.', source: dortsXinyiDaanDevelopment.id },
      { text: 'The R-line entrance was built into the west side of that building, while the building also had to accommodate the station facilities and a roof cooling tower within a very small development footprint.', source: dortsXinyiDaanDevelopment.id },
      { text: 'The technical account presents the site as an example of the difficulty of acquiring land and making large developments in a commercially intense corridor.', source: dortsXinyiLandDevelopmentContext.id },
      { text: 'Daan and Daan Park used an investor-built transit-facility model in which entrances, ventilation shafts and related structures were handed to the development investor to build before the Xinyi Line opened.', source: dortsXinyiLandDevelopmentContext.id },
      { text: 'DORTS says that arrangement reduced uncertainty between the completion of the metro facilities and the joint-development buildings, a practical constraint that sits behind the station’s compact urban footprint.', source: dortsXinyiLandDevelopmentContext.id },
      { text: 'A separate DORTS public-art paper treats Daan, Daan Park and Xinyi Anhe as one coordinated project, budgeted at NT$22.5 million, selected through an open call in October 2011 and installed by the end of 2013.', source: dortsDaanParkArtProject.id },
      { text: 'That project’s stated brief was to make the three stations speak with nature and local human experience rather than treating their artworks as unrelated interior decoration.', source: dortsDaanParkArtProject.id },
      { text: 'The Daan station artwork is presented as a poetic journey through mountains, water and the city, moving from morning to night through light, sound, love and imagined space.', source: art.daan.id },
    ],
  },
  R06: {
    structure: 'underground', exits: 6, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路3段、31巷口; 2: 近新生南路2段; 3: 西側光塔; 4: 東側光塔; 5: 近建國南路2段; 6: 仁愛路3段24巷口、近產業發展署. Accessible exits: 4, 5 and 6.',
    facilities: 'Accessible lifts: exits 4–6 and a paid-concourse platform lift; unpaid toilets near exits 3 and 5; parent/accessible toilet at the same locations; nursing room near exit 3; baby changing; bicycle access open; enquiry point near exits 4–6.',
    landmarks: '大安森林公園; 產業發展署', publicArt: '大安之花 — Pete Beeman; stainless steel, powder-coated iron and aluminium; year TBC. 秋葉旅人 — Yvan Mauger; stainless steel, forged copper and aluminium; year TBC. 春光乍現 — 林舜龍; cast aluminium, copper, stainless steel, glass mosaic and stone mosaic; year TBC. 四季 — 柴清文; cypress and stone paint; year TBC.', publicArtSource: art.daanPark,
    engineeringHistory: tbc,
    proseSources: [dortsXinyiDesignOverview, dortsXinyiDaanDevelopment, dortsDaanParkLandscape, dortsDaanParkStationDesign, dortsDaanParkArtProject],
    prose: [
      { text: 'The current DORTS station table identifies Daan Park as R06 with engineering code R9, while the DR147/148 design overview uses the construction-era label R09.', source: dortsXinyi.id },
      { text: 'The station lies below Xinyi Road Section 3 between Xinsheng South Road and Jianguo South Road, immediately beside the 25.8-hectare Daan Forest Park.', source: dortsDaanParkStationDesign.id },
      { text: 'The original surface plan would have placed entrances and ventilation objects along the park’s northern pavement, but the detailed design changed direction because the site contained a rare large urban forest landscape.', source: dortsDaanParkStationDesign.id },
      { text: 'The resulting concept brings sunlight and greenery into the underground station through a sunlight hall, sunken garden, light corridor and light towers, with different levels used to create a gradual transition between park and platform.', source: dortsDaanParkStationDesign.id },
      { text: 'Opening the side wall of the concourse connects the sunlight hall and multifunction plaza to the sunken garden above it, reducing the physical distance between the station and the park.', source: dortsDaanParkStationDesign.id },
      { text: 'The landscape paper calls this “Forest Transfer—Dialogue between City and Park” and treats sunlight, air and water as the three life-supporting elements that connect the station to the park.', source: dortsDaanParkLandscape.id },
      { text: 'Its planting plan respects the park’s existing forest and Taiwanese native trees, adds seasonal native plants, and uses nectar and bird-attracting species to increase habitat layers.', source: dortsDaanParkLandscape.id },
      { text: 'The hardscape follows the same ecological language through curved forms, waterfalls, water curtains, jumping fountains, mist and a gently planted slope leading back into the park.', source: dortsDaanParkLandscape.id },
      { text: 'The joint-development record gives Daan Park a private 2,994-square-metre site with a 29-storey, five-basement building, and places the station’s Exit 6 on the west side of the development.', source: dortsXinyiDaanDevelopment.id },
      { text: 'That development set the building back 12 metres from Xinyi Road and used matching tones and materials for the transit facilities so that the entrance and building read as one urban edge.', source: dortsXinyiDaanDevelopment.id },
      { text: 'The coordinated Daan Park, Daan and Xinyi Anhe public-art project was selected through an open call in October 2011 with a NT$22.5 million budget and was completed by the end of 2013.', source: dortsDaanParkArtProject.id },
      { text: 'DORTS frames the project as a way to make the park’s ecology and public memory legible through a station that is also a civic landscape, not simply a buried transport box.', source: dortsDaanParkArtProject.id },
      { text: 'At Daan Park, the interactive Daan Flower uses Taipei’s azalea as its subject and asks the observer to awaken the flower, making the station’s park setting part of the work’s conversation between people and nature.', source: art.daanPark.id },
    ],
  },
  R07: {
    structure: 'underground', exits: 8, openingDate: '24 November 2013', openingSource: dortsXinyi, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 信義路2段、近臨沂街口; 2: 信義路2段與金山南路1段路口; 3: 信義路2段114巷口; 4: 信義路2段148巷口、近麗水街口; 5: 信義路2段166號、近永康街口; 6: 信義路2段、近連雲街口; 7: 近信義路2段191號; 8: 信義路2段163號、東門郵局旁. Accessible exit: 8.',
    facilities: 'Accessible lift: exit 8 and a paid-concourse platform lift; unpaid toilets near exit 6 and paid toilets by the platform lift; parent/accessible toilet by the platform lift; nursing room near exits 6–8; baby changing; bicycle access open; enquiry point near exits 4–8.',
    landmarks: '東門郵局', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' },
    proseSources: [dortsXinyiDesignOverview, dortsCK570H, dortsCK570HConstruction, dortsCK570HTunnel],
    prose: [
      { text: 'The current DORTS station table identifies Dongmen as R07/O06 with engineering code R10, while the Xinyi design overview labels the station R10/014.', source: dortsXinyi.id },
      { text: 'The technical overview places Dongmen at the western end of the six-station Xinyi section, where the route continues from the Zhongzheng Memorial Hall area along Xinyi Road toward Xiangshan.', source: dortsXinyiDesignOverview.id },
      { text: 'CK570H included the cut-and-cover Dongmen station, four shield-driven metro tunnels and one common utility tunnel, combining the station with the difficult interface between the Xinyi and Zhonghe–Xinlu systems.', source: dortsCK570H.id },
      { text: 'The station lies below Xinyi Road Section 2 between Jinshan South Road and Yongkang Street, measures about 216 metres by 25 metres, reaches roughly 32 metres deep and uses a cut-and-cover box structure.', source: dortsCK570H.id },
      { text: 'The Xinyi tunnels from Zhongzheng Memorial Hall to Dongmen total about 2,445.1 metres across the two directions, while the shared tunnel through the memorial-park area totals 810.82 metres.', source: dortsCK570H.id },
      { text: 'Because the excavation reached the water-bearing Songshan gravel formation, the project used a 72-metre-deep diaphragm wall through 28 metres of gravel to an impermeable layer rather than relying only on pumping and a shallow cutoff.', source: dortsCK570H.id },
      { text: 'The construction paper says that wall system was intended to control uplift from groundwater and avoid overloading the normal drainage system during the flood season.', source: dortsCK570H.id },
      { text: 'Building protection was designed around predicted settlement: the station used an internal 100-centimetre-thick buttress diaphragm wall to reduce lateral movement while excavation proceeded, even though the measure added work and time.', source: dortsCK570HConstruction.id },
      { text: 'The main station structure is described as a double-wall SRC system built top-down, with the constrained site forcing ventilation facilities into Lianyun Street and Lane 114 rather than leaving a broad surface footprint.', source: dortsCK570HConstruction.id },
      { text: 'Its interior uses directional granite floor patterns, enamel panels, perforated aluminium ceilings and special translucent panels, while the platform wall carries cut-metal art panels with flowers, grasses and birds that DORTS links to the existing Dongmen commercial area.', source: dortsCK570HConstruction.id },
      { text: 'The station’s information counters also had to be resized because the Zhonghe–Xinlu and Xinyi system suppliers were different companies and the combined waterproof-gate and water-level-monitoring equipment would not fit the original counter enclosure.', source: dortsCK570HConstruction.id },
      { text: 'The most complex section was a 113-metre four-tunnel intersection, where the tunnel clearances ranged from 2.93 to 5.42 metres and the two Xinyi tunnels had to pass before the overlying Zhonghe–Xinlu tunnels.', source: dortsCK570HTunnel.id },
      { text: 'Ground improvement, steel supports for the completed lower tunnels and continuous monitoring were used to control settlement; the reported completed settlement was about 1.8–2.1 centimetres against a pre-construction maximum prediction of 1.6 centimetres.', source: dortsCK570HTunnel.id },
      { text: 'The full CK570H pages establish the station package, method, dimensions and tunnel-interface risks but do not identify an individual contractor, award date or final station-package value; those fields remain TBC.', source: dortsCK570H.id },
    ],
  },
  R08: {
    structure: 'underground', exits: 7, openingDate: '24 December 1998', openingSource: dortsRoute, structureSource: dortsXinyi,
    platformDetails: underground(),
    exitDetails: '1: 羅斯福路1段、近勞保局; 2: 羅斯福路1段8之1號; 3: 近金華街口; 4: 羅斯福路1段7號; 5: 愛國東路、中山南路口、近中正紀念堂; 6: 愛國西路、中山南路口、市立大學附設小學、國家圖書館; 7: 愛國西路2號、近中央銀行. Accessible exits: 1 and 5.',
    facilities: 'Accessible lifts: exits 1 and 5, plus south and north paid-concourse platform lifts; unpaid toilets near exits 2–4 and 5–7; parent/accessible toilets at the same locations; nursing room by the paid B2 north platform; baby changing; bicycle access open; enquiry points near exits 2–4 and 5–7.',
    landmarks: '中正紀念堂; 國家圖書館; 中央銀行; 市立大學附設小學', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Songshan–Xindian Line; transfer mode: TBC', lineCode: 'G' },
    proseSources: [dortsCksArchitecture, dortsInitialArchitecture, dortsInterchangePlanning, dortsPublicArtSelection, dortsNariFlood],
    prose: [
      { text: 'DORTS identifies Chiang Kai-Shek Memorial Hall station’s blue roof and white walls as a notable example of deriving a station design from its local setting.', source: dortsCksArchitecture.id },
      { text: 'That description belongs to the early network’s broader architectural method: underground stations used a standard functional base, but design teams could vary themes, materials and colour to express individual places.', source: dortsInitialArchitecture.id },
      { text: 'The same review says the early underground network concentrated on the relationship between entrances, ventilation structures and their surrounding streets rather than treating the buried station as an isolated object.', source: dortsInitialArchitecture.id },
      { text: 'Chiang Kai-Shek Memorial Hall was also one of the central interchanges used by DORTS to explain why station planning must account for passengers moving between two routes.', source: dortsInterchangePlanning.id },
      { text: 'DORTS describes interchange stations as places where platform and concourse arrangements must respond to route direction, platform form and the need to shorten transfer movements.', source: dortsInterchangePlanning.id },
      { text: 'In its public-art planning history, the department lists Chiang Kai-Shek Memorial Hall as an interchange selected for its importance among the early-network stations considered for art.', source: dortsPublicArtSelection.id },
      { text: 'The selection record says early works were normally placed at visual focal points that would not obstruct passenger movement or construction progress, including the vertical openings between concourse and platform levels.', source: dortsPublicArtSelection.id },
      { text: 'That source establishes a planning decision for the station, but it does not supply an executed artwork title, artist, completion date or cost for the current station page; those fields remain TBC here.', source: dortsPublicArtSelection.id },
      { text: 'The station’s engineering history is also tied to the network’s most serious flood event: DORTS records that Nari typhoon water entered through the Taipei railway-station area and descended into the Tamsui Line after the railway platform level was overtopped.', source: dortsNariFlood.id },
      { text: 'The water moved down through stairs and escalators connected to the metro and then travelled southward to Chiang Kai-Shek Memorial Hall.', source: dortsNariFlood.id },
      { text: 'The flood account therefore describes this station as the southern end of a documented inundation path from the Taipei rail complex, not merely as a station listed in a generic incident summary.', source: dortsNariFlood.id },
      { text: 'The checked engineering pages do not identify a station-level civil contract, final account or construction incident beyond that network flood path, so those details remain TBC.', source: dortsInitialArchitecture.id },
    ],
  },
  R09: {
    structure: 'underground', exits: 4, openingDate: '24 December 1998', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: '1: 公園路52號、近總統府; 2: 常德街1號、臺大醫院舊館大門旁; 3: 公園路、臺大醫院復健部旁; 4: 公園路、近國立台灣博物館. Accessible exits: 1, 2 and 3.',
    facilities: 'Accessible lifts: exits 1–3 and a north paid-concourse platform lift; unpaid toilets near exit 1; parent/accessible toilets at the same location; baby changing; bicycle access open; enquiry point near exits 3 and 4.',
    landmarks: '總統府; 臺大醫院舊館; 臺大醫院復健部; 國立台灣博物館', publicArt: '手之組曲 — 李光裕; copper and granite; November 1998.', publicArtSource: art.ntuHospital,
    engineeringHistory: tbc,
    proseSources: [art.ntuHospital, dortsPublicArtSelection, dortsPublicArtMethods, dortsInitialArchitecture],
    prose: [
      { text: 'DORTS treated NTU Hospital as a geographically important early-network station when it selected locations for public art, placing it in a different category from a station chosen only because it was a terminal or interchange.', source: dortsPublicArtSelection.id },
      { text: 'The station’s work is “Hand Suite”, by Li Kuang-Yu, completed in November 1998 and installed at platform level through an invited comparison process.', source: art.ntuHospital.id },
      { text: 'The department records a budget of NT$4,999,000 and describes the work as a meditation on the metro journey as a human life journey whose destination should be warm, calm and connected rather than lonely or anxious.', source: art.ntuHospital.id },
      { text: 'Its central image is the hand as a carrier of human feeling, used to write the hospital station’s local history and humanities into the station landscape.', source: art.ntuHospital.id },
      { text: 'The work is organised as three related pieces rather than one undifferentiated object: “A Hand Holding a Lotus”, “Hands Holding a Lotus” and “Little Park”.', source: art.ntuHospital.id },
      { text: 'The first piece uses copper and granite and measures 150 by 194 by 396 centimetres; DORTS reads the hand holding a flower as a symbol of positive thought and the pursuit of light.', source: art.ntuHospital.id },
      { text: 'The second uses copper and granite at 160 by 160 by 335 centimetres, with interlocking hands compared with the inseparable links between metro cars and with human beings living in mutual relation to the universe.', source: art.ntuHospital.id },
      { text: 'The third is a copper seating work measuring 260 by 125 by 108 centimetres, turning the resting hand gesture into a small park in which passengers can sit and form their own interpretations.', source: art.ntuHospital.id },
      { text: 'DORTS’s public-art manual identifies “Hand Suite” as an example of invited comparison, a method in which selected artists are asked to compete and the department chooses the strongest proposal.', source: dortsPublicArtMethods.id },
      { text: 'The same manual says invited comparison can keep the field of candidates manageable and quality more predictable, but makes the nomination of suitable invitees difficult and can still produce an unsatisfactory field.', source: dortsPublicArtMethods.id },
      { text: 'That procurement history matters because it distinguishes the hospital station’s artwork from Shuanglian’s open selection and from later projects where design and construction were bundled together.', source: dortsPublicArtMethods.id },
      { text: 'The architecture review places this work within the early-network pattern of a standard functional underground framework that still allowed individual teams latitude in materials, colour and thematic expression.', source: dortsInitialArchitecture.id },
      { text: 'The checked primary pages do not identify an individual station civil contractor, a final station account or a station-specific incident, so those parts of the record remain TBC.', source: dortsInitialArchitecture.id },
    ],
  },
  R10: {
    structure: 'underground', exits: 8, openingDate: '25 December 1997', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: 'M1: 台鐵台北車站北一門旁; M2: 市民大道1段209號對面、近國父史蹟紀念館; M3: 忠孝西路1段45號; M4: 忠孝西路1段38號對面; M5: 忠孝西路1段66號對面; M6: 忠孝西路1段38號; M7: 忠孝西路1段33號; M8: 公園路13號. Accessible lifts: R lifts 1–3; exit naming follows the operator’s M1–M8 designation.',
    facilities: 'R accessible lifts: B2 BL hall to B4 R platform south, B3 R hall to B4 R platform central, and ground M1/M2 to B3 R hall north; non-paid toilets by M1/M2 and paid BL/R toilets; parent/accessible toilets at those locations; nursing room published for BL; baby changing; bicycle access not open; enquiry points near M3, M7 and M8.',
    landmarks: '台鐵台北車站; 國父史蹟紀念館', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Bannan Line; transfer mode: TBC', lineCode: 'BL' },
    proseSources: [dortsInterchangePlanning, dortsNonParallelInterchanges, dortsPublicArtSelection, dortsPublicArtMethods, dortsNariFlood],
    prose: [
      { text: 'DORTS classifies Taipei Main as a central interchange and describes the transfer stations in this group as places where platform and concourse planning must absorb heavy passenger movement.', source: dortsInterchangePlanning.id },
      { text: 'The station is also used in the department’s non-parallel-interchange explanation: the two route directions meet at different alignments, so passenger circulation must move vertically between different platform elevations.', source: dortsNonParallelInterchanges.id },
      { text: 'This is a design problem of circulation and level changes, not evidence that the two services share a single platform or a single paid-area arrangement; the checked pages do not settle the latter.', source: dortsNonParallelInterchanges.id },
      { text: 'In the public-art history, DORTS identifies Taipei Main as an interchange selected for the separate Nangang-line programme because it was a major transfer point.', source: dortsPublicArtSelection.id },
      { text: 'The same account describes a rare four-level void above the Nangang-line platform tracks, where a work could become a visual focus for passengers transferring from the Tamsui Line.', source: dortsPublicArtSelection.id },
      { text: 'The funding record sets a NT$5 million ceiling for Taipei Main in that programme, but says the first prize was not awarded and that the source of funds and responsibility were unusually complicated.', source: dortsPublicArtMethods.id },
      { text: 'Those figures and the unawarded-prize statement belong to the Nangang-line public-art programme; they do not prove that the current Tamsui-line station has no artwork, so the station-level art field remains TBC.', source: dortsPublicArtMethods.id },
      { text: 'Taipei Main is also the entry point of the clearest documented flood path affecting the Red-line city-centre stations.', source: dortsNariFlood.id },
      { text: 'During Typhoon Nari in September 2001, water entered through the railway-station area, rose above the railway platform and then descended through connected stairs and escalators into the Tamsui Line’s underground levels.', source: dortsNariFlood.id },
      { text: 'DORTS records the water path moving south to Chiang Kai-Shek Memorial Hall and north through the control centre and Zhongshan before stopping at Shuanglian.', source: dortsNariFlood.id },
      { text: 'The flood record therefore describes Taipei Main as both a rail–metro interface and the upstream hydraulic origin of a system incident, while the checked pages do not provide a station-level civil-contract history.', source: dortsNariFlood.id },
      { text: 'No station-specific award value, final account, rename gazette or paid-area walking distance was found in the fetched primary pages, so those details remain TBC.', source: dortsInterchangePlanning.id },
    ],
  },
  R11: {
    structure: 'underground', exits: 6, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: '1: 南京西路16號; 2: 南京西路12號旁、近中山北路1段; 3: 南京西路11號旁、近中山北路2段; 4: 南京西路27號旁; 5: 南京西路55號、近南京西路與赤峰街路口東北隅; 6: 南京西路與赤峰街路口東南隅、南京西路64巷旁. Accessible exits: 4, 5 and 6.',
    facilities: 'Accessible lifts: exits 4–6 and a paid-concourse platform lift; unpaid toilets near exit 6 and the Zhongshan Arts Corridor; parent/accessible toilets at the same locations; nursing room published for the G platform; baby changing; bicycle access open; enquiry points near exits 1 and 4–6.',
    landmarks: '中山藝術廊道', publicArt: tbc,
    engineeringHistory: tbc, interchange: { label: 'Songshan–Xindian Line; transfer mode: TBC', lineCode: 'G' },
    proseSources: [dortsZhongshanDesign, dortsZhongshanJointDevelopment, dortsZhongshanArtDesign, dortsZhongshanLinearPark, dortsNonParallelInterchanges, dortsNariFlood],
    prose: [
      { text: 'A DORTS technical article describes Zhongshan as a station shaped by the old Tamsui railway corridor: removing the railway and rebuilding it as metro encouraged older neighbourhoods to renew while retaining layers of earlier urban culture.', source: dortsZhongshanDesign.id },
      { text: 'The article places former government and consular buildings, the Zhongshan North Road and Linsen North Road commercial area, and the nearby department store within a district where commerce and culture developed together.', source: dortsZhongshanDesign.id },
      { text: 'Its design theme is “Happy Transfer”, intended to give passengers a moment of breathing space while moving through an interchange and to frame public transport as a respectful relationship with the environment.', source: dortsZhongshanDesign.id },
      { text: 'The design language uses bright colour and concise compositions based on everyday street scenes on escalator and stair walls, making the transfer experience part of the station’s local narrative.', source: dortsZhongshanDesign.id },
      { text: 'The same source uses the historical notation G16/R14, while the current Red-line registry calls this station R11; the older notation is retained as a source-specific code rather than silently rewritten.', source: dortsZhongshanDesign.id },
      { text: 'A joint-development case places one station development at the junction of four central districts, in a commercial area where Nanjing West Road connects the north–south roads and distributes movement across the city.', source: dortsZhongshanJointDevelopment.id },
      { text: 'The case records a 1,681-square-metre site whose first-floor plan includes a metro plaza, exhibition corridor, MRT light-and-shadow passage and a public-art pedestrian greenbelt for community gatherings and recreation.', source: dortsZhongshanJointDevelopment.id },
      { text: 'Its design brief uses sunlight, greenery and wind to connect the building frontage to the street, with planted setbacks, roof terraces and visual permeability intended to make the joint-development parcel feel like an urban garden.', source: dortsZhongshanJointDevelopment.id },
      { text: 'A later DORTS technical article names “Crystal Clear” (晶透) as a Zhongshan station example of bringing public art and local humanities into station design, although the checked current station-level art register does not provide a complete record for it.', source: dortsZhongshanArtDesign.id },
      { text: 'The station is therefore published here with the art-register gap and the technical-article mention kept as separate evidence, not merged into an unsupported artist, date or medium.', source: dortsZhongshanArtDesign.id },
      { text: 'DORTS also records a Heart Zhongshan linear-park improvement beginning in 2017 between Zhongshan and Shuanglian under Taipei’s City Museum programme, extending the station-area design conversation into the street landscape.', source: dortsZhongshanLinearPark.id },
      { text: 'As a non-parallel interchange, Zhongshan belongs to the class whose transfer movement crosses different platform elevations through vertical circulation.', source: dortsNonParallelInterchanges.id },
      { text: 'During Typhoon Nari, the flood entering from the Taipei railway-station area travelled through the Red-line tunnel path to Zhongshan and stopped at Shuanglian, according to DORTS’s civil-engineering review.', source: dortsNariFlood.id },
      { text: 'No station-level civil contractor, final account, rename gazette or paid-area walking distance was established in the fetched primary pages, so those details remain TBC.', source: dortsZhongshanJointDevelopment.id },
    ],
  },
  R12: {
    structure: 'underground', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsRoute,
    platformDetails: underground(),
    exitDetails: '1: 民生西路72號旁; 2: 民生西路47號. Accessible exit: 2.',
    facilities: 'Accessible lift: exit 2 and a paid-concourse platform lift; unpaid toilet near exit 1 toward the Zhongshan underground mall; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exits 1 and 2.',
    landmarks: '中山地下街', publicArt: '雙連‧行遠 — 井婉婷、楊弼方; enamel panels; 1996.', publicArtSource: art.shuanglian,
    engineeringHistory: tbc,
    proseSources: [art.shuanglian, dortsPublicArtSelection, dortsPublicArtMethods, dortsZhongshanLinearPark, dortsNariFlood],
    prose: [
      { text: 'DORTS describes Shuanglian as the first pilot station for the early-network public-art programme because the work formed part of the interior finishing package and because the station had a strong historical and geographic identity.', source: art.shuanglian.id },
      { text: '“Shuanglian · Travelling Far” was designed by Ching Wan-Ting and Yang Pi-Fang, uses enamel panels, measures 2.4 by 42.24 metres and was completed on 16 September 1996 in the concourse.', source: art.shuanglian.id },
      { text: 'The department records an approximate cost of NT$10 million, including a NT$500,000 first-prize award, and identifies open selection as the procurement method.', source: art.shuanglian.id },
      { text: 'The work’s historical structure follows the movement of time and records Shuanglian’s changing relationship with the Tamsui river port, where once-prosperous trade gradually receded into history.', source: art.shuanglian.id },
      { text: 'DORTS says the chronology lets passengers look back at the district’s past, see its transformation and imagine its future, while using the metro as a sign of new urban life.', source: art.shuanglian.id },
      { text: 'The selection process was deliberately constrained because the artwork was part of the wall finish: the department required enamel panels matching the original wall material so that the competition focused on a planar design rather than a contest of materials.', source: art.shuanglian.id },
      { text: 'The winning proposal emerged from 53 entries and was selected by the metro public-art review committee in October of the ROC82 year.', source: art.shuanglian.id },
      { text: 'The broader public-art manual explains that early works were placed at visual focal points that would not obstruct passenger circulation or construction progress, with vertical openings between concourse and platform levels often providing the strongest public view.', source: dortsPublicArtSelection.id },
      { text: 'It classifies Shuanglian’s work under open selection, a process in which design and construction could be separated rather than automatically bundled into one creator contract.', source: dortsPublicArtMethods.id },
      { text: 'That distinction matters because DORTS records “Hand Suite” at NTU Hospital as an invited-comparison example, so the two neighbouring Red-line stations preserve different procurement histories.', source: dortsPublicArtMethods.id },
      { text: 'The city later extended the station-area public realm through the Heart Zhongshan linear-park improvement between Zhongshan and Shuanglian, begun in 2017 under the City Museum programme.', source: dortsZhongshanLinearPark.id },
      { text: 'The Nari flood review uses an older station notation and records the flood path stopping at Shuanglian after travelling north from Taipei Main through the control-centre and Zhongshan area.', source: dortsNariFlood.id },
      { text: 'That historical code is kept as the source’s incident notation; it is not silently substituted for the current R12 registry code.', source: dortsNariFlood.id },
      { text: 'No station-level civil contractor, final account, rename gazette or paid-area walking distance was established in the fetched primary pages, so those details remain TBC.', source: dortsPublicArtSelection.id },
    ],
  },
  R13: {
    structure: 'underground', exits: 10, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: underground('Shallow-cut underground station; two platform lifts, one for each line’s paid concourse; track count: TBC.'),
    exitDetails: '1: 民權西路72號; 2: 成淵高中後方; 3: 天祥路16巷口; 4: 天祥路48巷35號對面; 5: 承德路3段、撫順街口; 6: 承德路2段、民權西路口，近台灣銀行; 7: 民權西路58、60號前; 8: 民權西路、天祥路口，近民權西路48號; 9: 同路口近53號; 10: 民權西路67、69號前. Accessible exit: 10 for the O line.',
    facilities: 'R and O accessible lifts at their paid concourses; toilets at unpaid exit 5, paid exit 1 and paid exits 7–8; parent/accessible toilets at unpaid exit 5 and paid exit 1; nursing room published for O; baby changing; bicycle access open; enquiry points near exits 7–10 and exit 1.',
    landmarks: '成淵高中; 台灣銀行', publicArt: tbc,
    engineeringHistory: 'The builder describes Minquan W. Rd. as a shallow-cut underground example; station-specific construction history beyond that classification: TBC.', engineeringHistorySource: dortsStationArchitecture,
    interchange: { label: 'Zhonghe–Xinlu Line; transfer mode: TBC', lineCode: 'O' },
    proseSources: [dortsInitialStationTypes, dortsNonParallelInterchanges, dortsInitialArchitecture, dortsMinquanDesign],
    prose: [
      { text: 'DORTS defines a shallow-cut station as one whose tracks and platforms remain underground while the concourse sits at ground level or beside the platform level, a form used when alignment height, geology or construction cost makes deep excavation unattractive.', source: dortsInitialStationTypes.id },
      { text: 'The department explicitly lists Minquan W. Rd. among Taipei’s shallow-cut stations, but the checked page does not publish a station-specific geological profile or a contract-level explanation of which factor controlled the choice here.', source: dortsInitialStationTypes.id },
      { text: 'As an interchange with the Zhonghe–Xinlu Line, Minquan W. Rd. also belongs to DORTS’s non-parallel class, where passenger transfers between differently aligned routes use vertical circulation between platform elevations.', source: dortsNonParallelInterchanges.id },
      { text: 'The architectural account places the station in the commercial atmosphere of Taipei’s old rear-station district and in the historical layers of Dalongdong, Shuanglian and Yuanshan.', source: dortsMinquanDesign.id },
      { text: 'It describes the area as a story of remembering the past while developing the future, and makes “Postmodern” art the station’s design theme.', source: dortsMinquanDesign.id },
      { text: 'The entrances continue the section’s shared architectural vocabulary through steel frames and inset glass, keeping the structures visually light and reducing the pressure of a large object on the street.', source: dortsMinquanDesign.id },
      { text: 'Ventilation shaft X is joined to the entrance forms by an arched false wall, while ventilation shaft Y uses a vocabulary and modular divisions that echo neighbouring buildings.', source: dortsMinquanDesign.id },
      { text: 'Inside, glass-mosaic walls deliberately interweave old and new buildings, while painted enamel panels along the platform-side walls use varied graphics and restrained colours associated with traditional architecture.', source: dortsMinquanDesign.id },
      { text: 'This makes the station’s surface structures, passage walls and platform edges a single sequence rather than separate technical objects.', source: dortsMinquanDesign.id },
      { text: 'The early-network architecture review explains why that individual expression could coexist with standard construction: the base configuration and module dimensions were standardised, but teams retained flexibility in themes, materials and colour plans.', source: dortsInitialArchitecture.id },
      { text: 'The same review names Minquan W. Rd. as one of the early underground stations where this individual variation was especially visible.', source: dortsInitialArchitecture.id },
      { text: 'The checked primary pages do not establish an individual civil contractor, award date, final station account, rename gazette or documented incident for this station.', source: dortsInitialArchitecture.id },
      { text: 'Those gaps remain TBC rather than being filled with the generic route opening date or with the station’s current interchange facts.', source: dortsInitialStationTypes.id },
    ],
  },
  R14: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 酒泉街與玉門街; 2: 庫倫街. Platform lift: central. Accessible exit: TBC.',
    facilities: 'Paid toilets by exit 1; parent/accessible toilet at that location; baby changing; bicycle access open; enquiry point near exit 1; platform lift at the station centre.',
    landmarks: tbc, publicArt: tbc,
    engineeringHistory: 'The station’s second exit was added later; the original and addition dates are TBC.', engineeringHistorySource: dortsYuanshanToBeitou,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedDesignConcept, dortsElevatedBase, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials, trtcYuanshanStory, dortsPublicArtOverview],
    prose: [
      { text: 'The elevated section was divided into seven civil packages, and CT204 covered Yuanshan together with the elevated work from the tunnel exit toward Jiantan.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS names China Engineering Construction as the CT204 contractor, but the checked package page does not give an award date or package value.', source: dortsElevatedConstructionPackages.id },
      { text: 'The line’s design brief sought stations that would show local culture while giving traditional Chinese architecture a new life through contemporary technology.', source: dortsElevatedDesignConcept.id },
      { text: 'Its standard elevated vocabulary reinterprets three traditional elements—base, colonnade and roof—with modern construction materials rather than reproducing a historical building literally.', source: dortsElevatedDesignConcept.id },
      { text: 'DORTS groups Yuanshan with the stations using a Xuan-shan roof form, while the roof ridge becomes a skylight that brightens the platform level and creates changing shadows.', source: dortsElevatedRoof.id },
      { text: 'The base has a more specific engineering story: elevated station plinths were raised for flood-elevation requirements, and the Yuanshan example is illustrated with a large sloped flowerbed.', source: dortsElevatedBase.id },
      { text: 'That source identifies the flowerbed as rose-red granite and treats the raised base as both a flood response and a visual expression of the station’s foundation.', source: dortsElevatedBase.id },
      { text: 'The wider exterior specification selected granite for the base and walls because it was durable, weather-resistant and maintainable, while stainless openwork screens supplied a lighter middle layer.', source: dortsElevatedExteriorMaterials.id },
      { text: 'At concourse level, the same material logic used granite walls and openwork screens; at platform level, enamel-painted steel columns were chosen for smooth cleaning, impact resistance and rounded safety edges.', source: dortsElevatedInteriorMaterials.id },
      { text: 'TRTC’s station story describes Yuanshan as a Chinese traditional palace-style station at the boundary of Zhongshan and Datong districts.', source: trtcYuanshanStory.id },
      { text: 'The operator also records that a former TRA Tamsui Line station occupied the site and that the present alignment changes from elevated to underground toward Minquan W. Rd.', source: trtcYuanshanStory.id },
      { text: 'Its public-art section names 圓山五彩物語─記憶中的圓山景色, a mosaic collage about earlier Yuanshan scenery and everyday memories.', source: trtcYuanshanStory.id },
      { text: 'The checked DORTS public-art overview places that work within a wider approach in which station architecture, open space and local identity were treated together rather than as separate transport and decoration problems.', source: dortsPublicArtOverview.id },
      { text: 'The fetched primary pages do not establish a station-level civil award, final account, renaming gazette or separate artwork cost for Yuanshan; those details remain TBC.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R15: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 中山北路5段65號; 2: 基河路22號對面; 3: 劍潭路. Platform lifts: north hall near exit 3 and south hall near exit 2. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; nursing room in the paid hall near exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; north and south platform lifts.',
    landmarks: tbc, publicArt: tbc,
    engineeringHistory: 'The station has a suspended, column-free roof structure whose form was developed around a dragon-boat image.', engineeringHistorySource: dortsSpecialArchitecture,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedDesignConcept, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsJiantanEngineering, dortsSpecialArchitecture, dortsPublicArtOverview, dortsYuanshanToBeitou],
    prose: [
      { text: 'CT204A covered Jiantan and the elevated section between Jiantan and Shilin, and DORTS attributes the work to a joint venture of Hu Chu Construction and Obayashi Corporation.', source: dortsElevatedConstructionPackages.id },
      { text: 'The package page gives the scope and contractors but no award date or package value, so those contract fields remain TBC.', source: dortsElevatedConstructionPackages.id },
      { text: 'The site description places the station over the former TRA Beitou Line at Jiantan Road and records two independent concourse levels below the platform structure.', source: dortsYuanshanToBeitou.id },
      { text: 'Jiantan is the elevated section’s deliberate exception to the standard visual family: its design uses a dragon-boat image to answer the character of the Yuanshan area.', source: dortsSpecialArchitecture.id },
      { text: 'The roof is suspended from a bridge-like cable system, leaving it column-free and allowing a single formed metal plate to reduce the unsupported roof’s weight.', source: dortsJiantanEngineering.id },
      { text: 'That structural choice created an engineering problem because terrain-driven wind flow on the west side of Yuanshan could make the roof move unstably.', source: dortsJiantanEngineering.id },
      { text: 'DORTS records wind-tunnel testing and the addition of tie rods at platform light poles to resist uplift and keep the roof from being peeled upward.', source: dortsJiantanEngineering.id },
      { text: 'The same account says night lighting was used to emphasise the station’s special form, making it one of the early network’s important landmarks.', source: dortsJiantanEngineering.id },
      { text: 'DORTS’s roof catalogue classifies Jiantan’s roof as Juan-peng rather than the Xuan-shan form used at Yuanshan, Shilin and Zhishan.', source: dortsElevatedRoof.id },
      { text: 'The broader elevated design still shares the line’s base, colonnade and roof grammar, with modern materials translating traditional architectural ideas into a long two-level station building.', source: dortsElevatedDesignConcept.id },
      { text: 'Granite, stainless openwork screens and enamel-painted steel were selected for durability, cleanability, weathering and safe rounded surfaces in heavily used passenger areas.', source: dortsElevatedExteriorMaterials.id },
      { text: 'DORTS’s public-realm overview identifies open space beside Jiantan as one of the ways a station could relieve Taipei’s crowded urban fabric.', source: dortsPublicArtOverview.id },
      { text: 'The same official overview says the station became a Taipei landmark through a public vote and received the 1997 Architects magazine award.', source: dortsPublicArtOverview.id },
      { text: 'No complete station-specific public-art record, station-level final account or dated renaming gazette was established in the fetched primary pages, so those details remain TBC.', source: dortsPublicArtOverview.id },
    ],
  },
  R16: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 中正路247巷旁; 2: 福德路1號. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; nursing room in the paid hall near exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: tbc,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedDesignConcept, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials, dortsPublicArtOverview, dortsYuanshanToBeitou],
    prose: [
      { text: 'CT205 covered Shilin, the former Fukoku station and the elevated section between Shilin and Mingde, with Hu Chu Construction and Obayashi Corporation named as the joint contractors.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS publishes that package scope and contractor pairing but not an award date or package value, leaving both figures TBC.', source: dortsElevatedConstructionPackages.id },
      { text: 'The station description places Shilin on the former TRA Beitou Line near the old rail crossing at Zhongzheng Road, so the elevated alignment reused a railway corridor rather than creating an entirely new urban reservation.', source: dortsYuanshanToBeitou.id },
      { text: 'The elevated design brief treated that corridor as a place where traditional architectural ideas could be expressed through modern materials and construction methods.', source: dortsElevatedDesignConcept.id },
      { text: 'Shilin belongs to the Xuan-shan roof group, whose ridge skylight was intended to increase platform brightness and create a more layered interior view.', source: dortsElevatedRoof.id },
      { text: 'The standard design separated the station into base, middle colonnade and roof, then adjusted their proportions around operational needs instead of making every station identical.', source: dortsElevatedDesignConcept.id },
      { text: 'Granite was selected for the exterior base and walls because it offered weight, weather resistance and flexible cutting, while stainless screens supplied a permeable façade element.', source: dortsElevatedExteriorMaterials.id },
      { text: 'DORTS links those open screens to visual penetration, natural ventilation and daylight at the ground-level public zone.', source: dortsElevatedDesignConcept.id },
      { text: 'Inside the concourse, granite walls continued the exterior material language, while enamel-painted steel columns were chosen to withstand impact, cleaning and chemical exposure.', source: dortsElevatedInteriorMaterials.id },
      { text: 'The platform-level structure kept side walls to a minimum so the roof could remain visually light, with short-end gables providing enclosure where the function required it.', source: dortsElevatedInteriorMaterials.id },
      { text: 'A red-painted beam running parallel to the tracks served as the line’s visual identification element within this otherwise restrained material system.', source: dortsElevatedBase.id },
      { text: 'DORTS’s public-realm account specifically names Shilin’s performance plaza as an example of the open space that stations could return to the city.', source: dortsPublicArtOverview.id },
      { text: 'That same account presents the station’s plaza as urban amenity rather than a transport-only leftover, alongside linear parks and cycle routes below elevated sections.', source: dortsPublicArtOverview.id },
      { text: 'The checked primary pages do not identify an independent Shilin artwork title, artist, station-level contractor, final account or renaming gazette; those items remain TBC.', source: dortsPublicArtOverview.id },
    ],
  },
  R17: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 福國路70號; 2: 福華路162巷口對面. Central and north platform lifts. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; central and north platform lifts.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: tbc,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedDesignConcept, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials, dortsPublicArtOverview, dortsYuanshanToBeitou],
    prose: [
      { text: 'CT205 included the Shilin–Mingde elevated section that carried the line through Zhishan, and DORTS names Hu Chu Construction and Obayashi Corporation as its joint contractors.', source: dortsElevatedConstructionPackages.id },
      { text: 'The source lists the package scope and contractor but does not give a contract award date or value, so those figures remain TBC.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS places Zhishan on the former TRA Beitou Line north of Fukoku Road, between the Shilin and Mingde stations of the old corridor.', source: dortsYuanshanToBeitou.id },
      { text: 'The line-wide design objective was to use new materials and methods to reinterpret the base, colonnade and roof of traditional Chinese architecture.', source: dortsElevatedDesignConcept.id },
      { text: 'Zhishan is explicitly grouped with Yuanshan and Shilin under the Xuan-shan roof type, while Jiantan, Mingde and Shipai use the different Juan-peng profile.', source: dortsElevatedRoof.id },
      { text: 'The roof ridge was opened as a skylight to improve platform brightness and use the structure itself to create changing light and shadow.', source: dortsElevatedRoof.id },
      { text: 'At ground level, openwork stainless screens stand between functional walls and columns, giving the long elevated volume visual permeability and natural ventilation.', source: dortsElevatedDesignConcept.id },
      { text: 'The material specification chose natural granite for the base and exterior wall because it could tolerate weather, impact and frequent maintenance.', source: dortsElevatedExteriorMaterials.id },
      { text: 'Concourse walls continued that granite treatment, while enamel-painted steel columns were selected for smooth surfaces, cleanability, abrasion resistance and rounded edges.', source: dortsElevatedInteriorMaterials.id },
      { text: 'The platform level limited side walls to the short ends so the roof structure and the track-facing openings would remain visually open.', source: dortsElevatedInteriorMaterials.id },
      { text: 'This places Zhishan in the standard family rather than the separately engineered Jiantan exception, whose suspended roof required wind-tunnel testing and added tie rods.', source: dortsElevatedRoof.id },
      { text: 'DORTS’s public-art overview explains that station architecture and public art were intended to express local character, but its checked station-specific material does not name a completed Zhishan work.', source: dortsPublicArtOverview.id },
      { text: 'The same primary material does not identify an individual architect, station-level civil award, final account or renaming gazette for Zhishan.', source: dortsPublicArtOverview.id },
      { text: 'Those unresolved contract, naming and artwork details remain TBC rather than being inferred from the neighbouring stations.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R18: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 明德路95號、明德國中斜對面; 2: 東華街一段378號對面; 3: 西安街一段175號對面. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central platform lift.',
    landmarks: '明德國中', publicArt: tbc, engineeringHistory: tbc,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedDesignConcept, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials, dortsPublicArtOverview],
    prose: [
      { text: 'CT206 covered Mingde, Shipai, Qilian and the elevated section from Mingde to Qiyan, but its original contractor stopped work and fell behind schedule.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS records that the department terminated the CT206 contract on 2 June in ROC year 80 and re-tendered the same scope as CT206A.', source: dortsElevatedConstructionPackages.id },
      { text: 'The replacement package is attributed on the page to 工信工程股份有限公司; the fetched source gives no package award value or completion-value account.', source: dortsElevatedConstructionPackages.id },
      { text: 'Mingde belongs to the Juan-peng roof group, distinct from the Xuan-shan profiles listed for Yuanshan, Shilin and Zhishan.', source: dortsElevatedRoof.id },
      { text: 'Even with that roof variation, the elevated stations share a design grammar of base, middle colonnade and roof translated through modern materials.', source: dortsElevatedDesignConcept.id },
      { text: 'Granite supplied the durable base and external wall finish, while stainless openwork screens helped keep the ground-level station visually permeable and naturally ventilated.', source: dortsElevatedExteriorMaterials.id },
      { text: 'The concourse specification continued with granite walls and used enamel-painted steel for columns because passenger-facing surfaces had to resist impact, dirt and chemical cleaning.', source: dortsElevatedInteriorMaterials.id },
      { text: 'The DORTS public-art overview calls the station “originally Tianmu” and says its colourful treatment expressed an international flavour, preserving a naming and design layer that is not present in the current short station label.', source: dortsPublicArtOverview.id },
      { text: 'That wording is an official design-history statement, not a gazette citation; no renaming gazette was found in the fetched pages, so the legal rename date remains TBC.', source: dortsPublicArtOverview.id },
      { text: 'The same overview describes elevated-station spaces such as linear parks and cycle routes as urban relief, placing Mingde’s viaduct corridor within a broader public-realm strategy.', source: dortsPublicArtOverview.id },
      { text: 'The package failure is the station’s clearest documented construction incident, but the checked source does not break out a Mingde-only contractor account or station-level final cost.', source: dortsElevatedConstructionPackages.id },
      { text: 'No complete current artwork record naming an artist, title, medium, date or cost for Mingde was established in the fetched primary pages.', source: dortsPublicArtOverview.id },
      { text: 'Those art, award, final-account and gazette details remain TBC rather than being borrowed from the general elevated-station description.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R19: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsYuanshanToBeitou,
    exitDetails: '1: 石牌路1段、2段與東華街、西安街交叉口、近市立石牌國中; 2: 西安街1段329號對面. Central and south platform lifts. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilet by exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; central and south platform lifts.',
    landmarks: '市立石牌國中', publicArt: tbc, engineeringHistory: tbc,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedDesignConcept, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials, dortsPublicArtOverview, dortsYuanshanToBeitou],
    prose: [
      { text: 'CT206 included Shipai within the Mingde–Shipai–Qilian package and the Mingde–Qiyan viaduct scope; after the original failure, DORTS re-tendered it as CT206A.', source: dortsElevatedConstructionPackages.id },
      { text: 'The page identifies the original stoppage and 2 June ROC80 termination, then names 工信工程股份有限公司 for CT206A, but gives no package value or dated final account.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS places Shipai on the former TRA Beitou Line south of the old Shipai Road crossing, preserving the railway corridor as the alignment’s historical engineering context.', source: dortsYuanshanToBeitou.id },
      { text: 'Shipai uses the Juan-peng roof form, whose central skylight and layered eaves were part of the elevated line’s reinterpretation of traditional construction.', source: dortsElevatedRoof.id },
      { text: 'The general design system separated base, colonnade and roof, then used modern materials to achieve an architectural family with station-by-station variation.', source: dortsElevatedDesignConcept.id },
      { text: 'Granite was preferred for the base and exterior walls for its durability, low water absorption and maintainability, while stainless screens provided the open middle layer.', source: dortsElevatedExteriorMaterials.id },
      { text: 'Inside, granite concourse walls and enamel-painted steel columns continued the same palette, with the column finish chosen for smooth cleaning and resistance to collisions and chemical attack.', source: dortsElevatedInteriorMaterials.id },
      { text: 'DORTS’s public-art overview gives Shipai a specific floor-design symbol: a cross used to represent a “medical world.”', source: dortsPublicArtOverview.id },
      { text: 'That statement establishes a station design theme but does not identify a standalone work, artist, completion date, selection process or cost for the current station page.', source: dortsPublicArtOverview.id },
      { text: 'The overview also frames elevated station areas below the viaduct as places for linear parks and cycle routes, linking transport infrastructure to public space.', source: dortsPublicArtOverview.id },
      { text: 'Shipai therefore has a documented package history, roof type, material logic and design-symbol record even though the checked pages do not supply a station-level construction narrative.', source: dortsElevatedConstructionPackages.id },
      { text: 'No individual civil award, final account, renaming gazette or complete public-art register entry for Shipai was found in the fetched primary material.', source: dortsPublicArtOverview.id },
      { text: 'Those unresolved values and records remain TBC rather than being inferred from the adjacent Mingde or Qilian stations.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R20: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 西安街2段279號; 2: 西安街2段347號. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central platform lift.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: 'The second exit was added later; the original and addition dates are TBC.', engineeringHistorySource: dortsShilinToXinbeitou,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedNetworkContext, dortsRailwayCorridorPlanning, dortsElevatedDesignConcept, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials, dortsStationDesignGoals, dortsNorthernPublicRealm],
    prose: [
      { text: 'Qilian was included in CT206, the package for Mingde, Shipai, Qilian and the elevated section from Mingde to Qiyan.', source: dortsElevatedConstructionPackages.id },
      { text: 'The original contractor stopped work and the department terminated CT206 on 2 June in ROC year 80 before re-tendering the same scope as CT206A.', source: dortsElevatedConstructionPackages.id },
      { text: 'The package page names 工信工程股份有限公司 for CT206A but does not publish an award value or a Qilian-only final account.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS places Qilian within the 11-station elevated group built along the former TRA Beitou corridor, a route that crossed rivers and major roads before reaching the northern depot.', source: dortsElevatedNetworkContext.id },
      { text: 'That corridor mattered at the planning stage because the old railway right-of-way was acquired for metro use, reducing the difficulty of urban-plan change and land acquisition.', source: dortsRailwayCorridorPlanning.id },
      { text: 'The elevated design was deliberately shared but not identical: each station was expected to have a clear common image while retaining its own character and relationship to its surroundings.', source: dortsStationDesignGoals.id },
      { text: 'Qilian is in the Juan-peng roof family, whose ridge skylight brought daylight into the platform volume and used the roof structure to produce changing shadows.', source: dortsElevatedRoof.id },
      { text: 'The line’s material specification used granite for exposed bases and walls because it could withstand weather and repeated maintenance, while stainless openwork screens kept the long station edge visually permeable.', source: dortsElevatedExteriorMaterials.id },
      { text: 'Concourse walls continued in granite, and enamel-painted steel columns were selected for smooth, durable surfaces that could tolerate passenger contact and cleaning.', source: dortsElevatedInteriorMaterials.id },
      { text: 'DORTS describes the northern corridor as a place where high-railway land created room for linear parks, walking paths, cycle paths, planting and small rest plazas beneath or beside the guideway.', source: dortsNorthernPublicRealm.id },
      { text: 'The same planning account connects that public realm to nearby cultural and recreational destinations rather than treating the station reservation as transport land alone.', source: dortsNorthernPublicRealm.id },
      { text: 'Qilian therefore has a documented construction-package failure, railway-corridor origin, roof type, material system and public-realm rationale beyond the facts/specs panel.', source: dortsElevatedConstructionPackages.id },
      { text: 'The fetched primary pages do not identify an individual Qilian architect, completed artwork title, artist, selection process, rename gazette or station-level final cost.', source: dortsStationDesignGoals.id },
      { text: 'Those missing records remain TBC rather than being inferred from neighbouring Beitou or Qiyan.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R21: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: elevated, platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 北投路1段與三合街2段交叉口; 2: 北投路1段53號對面; 3: 清江路266號對面. Central platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central platform lift.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: tbc,
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedNetworkContext, dortsRailwayCorridorPlanning, dortsElevatedDesignConcept, dortsElevatedRoof, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials, dortsStationDesignGoals, dortsNorthernPublicRealm, dortsShilinToXinbeitou],
    prose: [
      { text: 'Qiyan was included in CT207 with Beitou and the elevated section between the two stations; DORTS names Hu Chu Construction and Obayashi Corporation as the joint contractors.', source: dortsElevatedConstructionPackages.id },
      { text: 'The full package page gives the construction scope and contractor pairing but no award date, package value or station-level final account.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS places Qiyan on the former TRA Beitou Line in the last group of Taipei elevated stations before the northern corridor continues into the ground-level section.', source: dortsElevatedNetworkContext.id },
      { text: 'That alignment used the former railway right-of-way, whose existing width and transport use helped make the land and planning interface more workable than a new corridor through built-up streets.', source: dortsRailwayCorridorPlanning.id },
      { text: 'The station belongs to the Xuan-shan roof family, alongside Yuanshan, Shilin and Zhishan, rather than the Juan-peng group used at Qilian and Beitou’s branch-related neighbours.', source: dortsElevatedRoof.id },
      { text: 'The roof ridge was opened as a skylight, so the architectural treatment was also a daylight and interior-atmosphere decision.', source: dortsElevatedRoof.id },
      { text: 'The common elevated vocabulary divided the building into a base, a middle colonnade and a roof, then used modern materials to avoid a merely decorative historical imitation.', source: dortsElevatedDesignConcept.id },
      { text: 'Granite bases and walls were selected for weathering, impact and maintenance performance, while stainless screens supplied ventilation and visual transparency along the public level.', source: dortsElevatedExteriorMaterials.id },
      { text: 'The interior material account continues with granite concourse walls and enamel-painted steel columns whose smooth finish reduced dirt retention and made cleaning easier.', source: dortsElevatedInteriorMaterials.id },
      { text: 'DORTS’s design goals required every station to develop its own character and to work as a focal point within the surrounding buildings and regional landscape.', source: dortsStationDesignGoals.id },
      { text: 'The northern public-realm plan used the former railway reservation for walking, cycling, planting and occasional widened rest areas, softening the visual effect of the elevated structure.', source: dortsNorthernPublicRealm.id },
      { text: 'The broader corridor was also chosen because the Shilin–Tamsui transport demand was projected to be the highest among the early network’s eight major corridors.', source: dortsElevatedNetworkContext.id },
      { text: 'No complete Qiyan artwork record, individual architect attribution, rename gazette, package value or station-level final account was established in the fetched primary pages.', source: dortsStationDesignGoals.id },
      { text: 'Those unresolved details remain TBC rather than being supplied by the nearby Qilian or Beitou records.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R22: {
    structure: 'elevated', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: 'Elevated station with one island platform and two side platforms; four tracks.', platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 育仁路與光明路交叉口; 2: 近大興街. Platform lifts serve platforms 1–4. Accessible exit: TBC.',
    facilities: 'Paid toilets by exits 1 and 2; parent/accessible toilets at the same locations; nursing room in the paid hall near exit 1; baby changing; bicycle access open; enquiry points near exits 1 and 2; platform lifts serve platforms 1–4.',
    landmarks: tbc, publicArt: tbc, engineeringHistory: 'The station uses a space-truss and glass-curtain structural treatment.', engineeringHistorySource: dortsSpecialArchitecture,
    branch: { label: 'New Beitou Branch', source: trtcStation('R22') },
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedNetworkContext, dortsRailwayCorridorPlanning, dortsSpecialArchitecture, dortsElevatedDesignConcept, dortsStationDesignGoals, dortsNorthernPublicRealm, dortsElevatedExteriorMaterials, dortsElevatedInteriorMaterials],
    prose: [
      { text: 'CT207 covered Beitou, Qiyan and the elevated connection between them, with Hu Chu Construction and Obayashi Corporation listed as the joint contractors.', source: dortsElevatedConstructionPackages.id },
      { text: 'The package page names the scope and contractors but does not publish an award date, value or separate Beitou final account.', source: dortsElevatedConstructionPackages.id },
      { text: 'Beitou is the line’s major structural exception because the New Beitou Branch required a larger station volume and a different way to span the platform and track arrangement.', source: dortsSpecialArchitecture.id },
      { text: 'DORTS specifies a space truss and glass curtain wall for that volume, presenting a modern technology expression rather than the traditional roof family used by the ordinary elevated stations.', source: dortsSpecialArchitecture.id },
      { text: 'The branch relationship also shaped land planning: the New Beitou branch followed the former railway right-of-way and had a dedicated transport-land change for its station and surrounding roads and plazas.', source: dortsRailwayCorridorPlanning.id },
      { text: 'The main elevated section was planned as part of an old railway corridor that crossed rivers and major roads before reaching the depot, so Beitou’s exceptional form belongs to a broader corridor engineering decision.', source: dortsElevatedNetworkContext.id },
      { text: 'DORTS’s design goals required a shared metro image, individual station character and deliberate integration with surrounding buildings and regional identity.', source: dortsStationDesignGoals.id },
      { text: 'Beitou demonstrates the “individual character” part of that rule most visibly: its transparent truss-and-glass envelope was developed for the branch-transfer scale rather than copied from the standard station.', source: dortsSpecialArchitecture.id },
      { text: 'The older corridor also gave the northern stations room for linear parks, walking routes, cycle paths and planting, which DORTS describes as a way to reduce the guideway’s visual impact.', source: dortsNorthernPublicRealm.id },
      { text: 'The material chapter explains that ordinary elevated stations used granite, stainless openwork and enamel-painted steel for durability and maintenance; Beitou’s glass-and-truss treatment is therefore a deliberate contrast.', source: dortsElevatedExteriorMaterials.id },
      { text: 'The distinction is architectural rather than a claim that Beitou abandons the line’s functional requirements: the design still had to accommodate public, operational and equipment spaces.', source: dortsElevatedInteriorMaterials.id },
      { text: 'DORTS’s public-realm history describes Beitou’s adjacent landscape pool as another example of station land contributing to urban amenity.', source: dortsPublicArtOverview.id },
      { text: 'The fetched primary pages do not identify a complete Beitou artwork title, artist, selection process, station-level civil award, final account or rename gazette.', source: dortsStationDesignGoals.id },
      { text: 'Those details remain TBC rather than being inferred from the branch relationship or from the station’s structural exception.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R22A: {
    structure: 'elevated', exits: 2, openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: 'Elevated terminal with one island platform; track count: TBC.', platformSource: dortsShilinToXinbeitou,
    exitDetails: '1: 大業路與光明路交叉口、近北投公園; 2: 近七星街. Central hall platform lift. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing; bicycle access open; enquiry point near exit 1; central hall platform lift.',
    landmarks: '北投公園', publicArt: tbc, engineeringHistory: tbc,
    branch: { label: 'New Beitou Branch terminal', source: trtcStation('R22A') },
    proseSources: [dortsElevatedConstructionPackages, dortsElevatedNetworkContext, dortsRailwayCorridorPlanning, dortsSpecialArchitecture, dortsStationDesignGoals, dortsNorthernPublicRealm],
    prose: [
      { text: 'CT207A was the separate civil package for the New Beitou Branch and is attributed by DORTS to New Asia Construction Development and Aoki Construction in a joint venture.', source: dortsElevatedConstructionPackages.id },
      { text: 'The package listing provides the branch scope and contractors but no award value or station-level final account.', source: dortsElevatedConstructionPackages.id },
      { text: 'DORTS describes the branch as a short elevated route from Beitou along the former railway right-of-way to Xinbeitou, with its own planning and land-use treatment.', source: dortsElevatedNetworkContext.id },
      { text: 'The New Beitou branch land-plan record says its railway-side land had already been changed to enable an electric multiple-unit test route before the metro preparation office was established.', source: dortsRailwayCorridorPlanning.id },
      { text: 'A second plan adjusted the area around the former New Beitou station by reallocating some parking, road and green land to roads, pedestrian paths and a station-front plaza.', source: dortsRailwayCorridorPlanning.id },
      { text: 'That planning history makes the branch terminal a corridor-reuse project with a street-and-plaza interface, not simply the final ordinary station in the main line sequence.', source: dortsRailwayCorridorPlanning.id },
      { text: 'The line-wide design brief required each station to combine a clear metro image with an individual response to its surroundings and regional identity.', source: dortsStationDesignGoals.id },
      { text: 'The branch’s station environment was planned alongside the wider northern public realm of paths, planting, cycle routes and rest spaces made possible by the former railway reservation.', source: dortsNorthernPublicRealm.id },
      { text: 'DORTS distinguishes the branch terminal from Beitou’s special space-truss station: Beitou is the separately described structural exception, while the Xinbeitou page is used here for branch planning rather than a borrowed architectural claim.', source: dortsSpecialArchitecture.id },
      { text: 'The same distinction is why no opening date has been copied from the main Tamsui–Zhongshan chronology onto R22A; the checked primary material does not publish a station-specific date.', source: dortsRoute.id },
      { text: 'The official records therefore establish the branch’s right-of-way, testing history, land-plan changes and public-space interface without settling every operating chronology detail.', source: dortsRailwayCorridorPlanning.id },
      { text: 'No complete Xinbeitou artwork record, individual architect, station-level civil award, final account or rename gazette was established in the fetched primary pages.', source: dortsStationDesignGoals.id },
      { text: 'Those details remain TBC rather than being inherited from Beitou or from the main-line opening record.', source: dortsElevatedConstructionPackages.id },
    ],
  },
  R23: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 中央北路3段53巷內; 2: 捷運北投機廠. Platform lift serves platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '北投機廠', publicArt: tbc, engineeringHistory: tbc,
    proseSources: [dortsGroundStationTypes, dortsElevatedNetworkContext, dortsRailwayCorridorPlanning, dortsStationDesignGoals, dortsNorthernPublicRealm, dortsDepot],
    prose: [
      { text: 'Fuxinggang begins the DORTS-described ground-level section that runs northward toward Hongshulin, so its station form belongs to a different guideway decision from the elevated Taipei section.', source: dortsGroundStationTypes.id },
      { text: 'DORTS defines a ground station as one with tracks and platforms at grade, normally used outside dense urban areas where the railway crosses relatively few surface roads.', source: dortsGroundStationTypes.id },
      { text: 'The department describes that form as the most economical of the three construction types, while warning that it can block surface movement and create a visual barrier.', source: dortsGroundStationTypes.id },
      { text: 'The route context explains why the change occurs here: the main elevated section follows the former TRA corridor through Taipei, while the more suburban northern stretch parallels major roads and the landscape belt.', source: dortsElevatedNetworkContext.id },
      { text: 'The former railway right-of-way was acquired for metro use and gave the project a continuous strip in which stations, facilities and public-realm improvements could be planned together.', source: dortsRailwayCorridorPlanning.id },
      { text: 'DORTS’s design goals still applied to the ground stations: a shared metro image, an individual station character and integration with surrounding buildings and local identity.', source: dortsStationDesignGoals.id },
      { text: 'The ground-level choice therefore traded construction economy and a simpler surface relationship against the need to manage crossings, views and the physical barrier created by the tracks.', source: dortsGroundStationTypes.id },
      { text: 'The northern public-realm plan responded with walking paths, cycle paths, planting and small widened plazas along the former corridor.', source: dortsNorthernPublicRealm.id },
      { text: 'DORTS describes those paths as part of a recreational network serving residents near hot springs, museums, night-market areas and other northern destinations.', source: dortsNorthernPublicRealm.id },
      { text: 'The same source says the main depot was a functional anchor for the high-capacity network, requiring land and a rail connection for supplies, track work and major train maintenance.', source: dortsDepot.id },
      { text: 'Fuxinggang’s place at the head of the ground section thus connects a depot-oriented engineering system with the less-dense corridor conditions for which at-grade stations were selected.', source: dortsGroundStationTypes.id },
      { text: 'The fetched primary pages do not identify an individual Fuxinggang artwork, architect, station-level civil contract value, final account or rename gazette.', source: dortsStationDesignGoals.id },
      { text: 'Those records remain TBC rather than being inferred from the station’s at-grade classification or from the neighbouring branch.', source: dortsGroundStationTypes.id },
    ],
  },
  R24: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 中央北路4段301號; 2: 近和信醫院. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '和信醫院', publicArt: tbc, engineeringHistory: tbc,
    proseSources: [dortsGroundStationTypes, dortsElevatedNetworkContext, dortsRailwayCorridorPlanning, dortsStationDesignGoals, dortsNorthernPublicRealm],
    prose: [
      { text: 'Zhongyi lies within the Fuxinggang-to-Hongshulin ground-level section identified by DORTS, where the route leaves the elevated construction family used farther south.', source: dortsGroundStationTypes.id },
      { text: 'The department defines ground stations as track-and-platform facilities at grade, normally suited to less-dense areas with fewer road crossings.', source: dortsGroundStationTypes.id },
      { text: 'Its stated advantage is economy, but DORTS also records the corresponding costs in surface access and landscape: an at-grade railway can obstruct movement and interrupt views.', source: dortsGroundStationTypes.id },
      { text: 'Zhongyi’s corridor context is therefore the old TRA right-of-way and the suburban edge of the Taipei–Tamsui transport route, not a newly excavated station box in the central city.', source: dortsRailwayCorridorPlanning.id },
      { text: 'The former railway land was transferred for metro use and planned as a continuous reservation for the route, stations, entrances, ventilation, transfer facilities and linear public spaces.', source: dortsRailwayCorridorPlanning.id },
      { text: 'DORTS’s station-design brief required those individual sites to remain recognisable while sharing a coherent metro image and responding to their surrounding buildings and regional character.', source: dortsStationDesignGoals.id },
      { text: 'The ground-section decision also reflects the broader corridor strategy: elevated construction was used around the city edge where it avoided difficult underground work, while the more open northern landscape allowed the economical ground form.', source: dortsElevatedNetworkContext.id },
      { text: 'Public-realm planning sought to offset the physical barrier with planted edges, walking routes, cycle paths and occasional small plazas or rest areas.', source: dortsNorthernPublicRealm.id },
      { text: 'DORTS connects those amenities to the corridor’s recreational resources and to a wider system of paths that eventually links with riverside cycling routes.', source: dortsNorthernPublicRealm.id },
      { text: 'The same account says the route’s early demand and existing commuter function helped justify converting the former railway corridor into a metro service rather than abandoning the alignment.', source: dortsElevatedNetworkContext.id },
      { text: 'This gives Zhongyi a documented section-level engineering rationale even though the fetched material does not describe a station-specific excavation, viaduct or architectural incident.', source: dortsGroundStationTypes.id },
      { text: 'No complete Zhongyi artwork record, individual architect, station-level contract value, final account or rename gazette was established in the fetched primary pages.', source: dortsStationDesignGoals.id },
      { text: 'Those details remain TBC rather than being filled from the generic ground-station description or from neighbouring Fuxinggang.', source: dortsGroundStationTypes.id },
    ],
  },
  R25: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 大度路3段296巷51號; 2: 中央北路4段583巷11弄內、近關渡國小. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '關渡國小', publicArt: tbc, engineeringHistory: tbc,
  },
  R26: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 民權路與民族路交叉口、近馬偕醫院; 2: 民權一街16號. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '馬偕醫院', publicArt: tbc, engineeringHistory: tbc,
  },
  R27: {
    structure: 'at-grade', exits: 2, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsStationArchitecture,
    platformDetails: atGrade,
    exitDetails: '1: 中正東路2段68號、近淡海輕軌紅樹林站; 2: 自行車步道紅樹林段、近紅樹林教育館. Platform lifts serve platforms 1 and 2. Accessible exit: TBC.',
    facilities: 'Paid toilet by exit 1; parent/accessible toilet at the same location; baby changing in the paid men’s and women’s toilets; bicycle access open; enquiry point near exit 1; platform lifts behind the platform stairs.',
    landmarks: '淡海輕軌紅樹林站; 紅樹林教育館', publicArt: tbc, engineeringHistory: tbc,
  },
  R28: {
    structure: 'elevated', exits: 3, openingDate: '28 March 1997', openingSource: dortsRoute, structureSource: dortsTamsui,
    platformDetails: 'Elevated terminal with one island platform; track count: TBC.', platformSource: dortsTamsui,
    exitDetails: '1: 中正東路、近英專路; 2: 中正東路、近學府路; 3: 近金色水岸. Platform lift behind the escalator. Accessible exit: TBC.',
    facilities: 'Unpaid toilets by the rear park, bus station and exit 1; parent/accessible toilets at the same locations; nursing room in the paid hall near exit 1; baby changing; bicycle access not open; enquiry point near exit 1; platform lift behind the escalator.',
    landmarks: '金色水岸', publicArt: tbc, engineeringHistory: 'The terminal was built on the old TRA site; the engineering-book account notes the Red Castle brick arch, colonial architecture and local style in its design context.', engineeringHistorySource: dortsSpecialArchitecture,
    proseSources: [dortsTamsui, dortsSpecialArchitecture, dortsTamsuiArchitectureDetails, dortsTamsuiCorridorSummary],
    prose: [
      { text: 'DORTS treats Tamsui as a special elevated station rather than another repetition of the standard northern building: it is the line terminus and occupies the former TRA Tamsui station site.', source: dortsSpecialArchitecture.id },
      { text: 'The terminal was planned as a transport hub for the Tamsui–Sanzhi area, so the station precinct includes 581 car spaces, 338 motorcycle spaces, 12 long-distance coach bays, bus stopping and tour-bus parking, taxi and private-car drop-off areas, and 170 bicycle spaces.', source: dortsTamsui.id },
      { text: 'The current TRTC station page instead lists 553 car spaces, 1,005 motorcycle spaces and 47 bicycle spaces in its transfer-parking table, so the DORTS programme figures and the operator’s current table are retained as different records.', source: trtcStation('R28').id },
      { text: 'DORTS places the parking below the station and the long-distance, bus, taxi and bicycle facilities in the station-front area, making the forecourt part of the terminal’s transport program.', source: dortsTamsui.id },
      { text: 'The architecture account links the terminal’s appearance to Tamsui’s history of Spanish colonial influence and to the imagery of Taiwanese domestic buildings.', source: dortsTamsuiArchitectureDetails.id },
      { text: 'Its long facade uses a continuous arcade, a form the account describes as common in Tamsui’s colonial architecture and as a cultural transfer produced when Taiwanese dwellings absorbed Western influence.', source: dortsTamsuiArchitectureDetails.id },
      { text: 'The design also selected related elements such as corner towers, eaves and a plaque, while adjusting tile colours and their proportions to echo Red Castle and other historic brick buildings.', source: dortsTamsuiArchitectureDetails.id },
      { text: 'That historic reference distinguishes Tamsui from the standard elevated-station vocabulary: DORTS identifies it, together with Jiantan and Beitou, as a special station developed in response to its setting or other particular constraints.', source: dortsSpecialArchitecture.id },
      { text: 'The line’s summary explains that the former TRA right-of-way allowed an elevated station to stand as an independent two-level building, with the concourse at ground level and the island platform above.', source: dortsTamsuiCorridorSummary.id },
      { text: 'The same summary records nearly 10 km of linear multi-purpose park beneath the elevated corridor and a separate waterfront recreation park beside Tamsui station.', source: dortsTamsuiCorridorSummary.id },
      { text: 'DORTS’s illustration caption connects that waterfront park with the New Taipei government’s Golden Waterfront project and identifies the east-side exit area as a bus-transfer zone.', source: dortsTamsuiArchitectureDetails.id },
      { text: 'The resulting station context is therefore both a regional interchange and a public waterfront edge, with the building’s colonial references directed toward Tamsui’s local setting rather than a generic terminal image.', source: dortsTamsui.id },
      { text: 'The fetched primary pages do not identify an individual architect, construction package value, final account, completed artwork register or rename gazette for Tamsui; those details remain TBC.', source: dortsTamsuiArchitectureDetails.id },
    ],
  },
}

function makeResearch(code: string, data: RData): StationResearch {
  const stationSource = trtcStation(code)
  const sources = [
    stationSource,
    dortsRoute,
    data.structureSource ?? dortsRoute,
    data.openingSource ?? dortsRoute,
    dortsDepot,
    ...(data.platformSource ? [data.platformSource] : []),
    ...(data.publicArtSource ? [data.publicArtSource] : []),
    ...(data.engineeringHistorySource ? [data.engineeringHistorySource] : []),
    ...(data.proseSources ?? []),
    ...(data.interchange ? [] : []),
  ].filter((entry, index, all) => all.findIndex((other) => other.id === entry.id) === index)

  return {
    sources,
    identitySource: stationSource.id,
    mapSource: stationSource.id,
    structureSource: (data.structureSource ?? dortsRoute).id,
    openingSource: (data.openingSource ?? dortsRoute).id,
    scheduleSources: [],
    openingDate: data.openingDate,
    interchange: data.interchange ? { ...data.interchange, source: stationSource.id } : undefined,
    branch: data.branch ? { label: data.branch.label, source: data.branch.source.id } : undefined,
    platformDetails: data.platformDetails,
    platformSource: data.platformSource?.id,
    exitDetails: data.exitDetails,
    exitSource: stationSource.id,
    facilities: data.facilities,
    facilitiesSource: stationSource.id,
    depot: 'Beitou Depot is the Tamsui–Xinyi Line’s main depot; station-specific roster assignment: TBC.',
    depotSource: dortsDepot.id,
    publicArt: data.publicArt,
    publicArtSource: data.publicArtSource?.id,
    naming: 'TBC',
    engineeringHistory: data.engineeringHistory,
    engineeringHistorySource: data.engineeringHistorySource?.id,
    landmarks: data.landmarks,
    landmarksSource: stationSource.id,
  }
}

export const TAMSUI_XINYI_OVERLAY: Record<string, StationOverlay> = Object.fromEntries(
  Object.entries(rData).map(([code, data]) => {
    const research = makeResearch(code, data)
    return [code, { structure: data.structure, exits: data.exits, research, sources: research.sources, prose: data.prose ?? [] }]
  }),
) as Record<string, StationOverlay>
