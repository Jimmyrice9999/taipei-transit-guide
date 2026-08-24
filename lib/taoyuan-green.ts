/**
 * Taoyuan Metro Green Line records absent from TDX's current TYMC operating
 * datasets. The engineering bureau publishes the station table and route as
 * a project record, so this namespace is deliberately separate from the TDX
 * Airport MRT records.
 */

export type TaoyuanGreenStation = {
  code: string
  name: string
  nameZh: string
  location: string
  structure: 'elevated' | 'underground'
  transfer: string
}

export const TAOYUAN_GREEN_STATIONS: readonly TaoyuanGreenStation[] = [
  { code: 'G01', name: 'Jiande Xingfeng', nameZh: '建德興豐站（八德國小）', location: 'Bade District expanded urban-planning area, near Jiande Road and Xingfeng Road', structure: 'elevated', transfer: 'Future Green Line extensions to Zhongli and Daxi' },
  { code: 'G02', name: 'Rende Park', nameZh: '仁德公園站', location: 'Bade District, near the Feng田 Road and new-road junction', structure: 'elevated', transfer: 'Station name is provisional until the new road is named' },
  { code: 'G03', name: 'Chocolate', nameZh: '巧克力站', location: 'Bade District, near Jieshou Road Section 2 and Chocolate Street', structure: 'underground', transfer: '' },
  { code: 'G04', name: 'Danan', nameZh: '大湳站', location: 'Bade District, near Jieshou Road Section 2 and Yinhua Street', structure: 'underground', transfer: 'Future transfer to the Sanying Line extension to Bade' },
  { code: 'G05', name: 'Xiaodanan', nameZh: '小大湳站', location: 'Bade District, near Jieshou Road Section 1 and Zhongyong West Street', structure: 'underground', transfer: '' },
  { code: 'G06', name: 'Yangming Sports Park', nameZh: '陽明運動公園站（陽明高中）', location: 'Taoyuan District, near Jieshou Road and Jiexin Street', structure: 'underground', transfer: '' },
  { code: 'G07', name: 'Taoyuan', nameZh: '桃園車站', location: 'Taoyuan District, at the TRA Taoyuan station area on Yanping Road', structure: 'underground', transfer: 'Future transfer to the underground TRA Taoyuan station' },
  { code: 'G08', name: 'Jingfu Temple', nameZh: '景福宮站', location: 'Taoyuan District, on Zhongzheng Road in front of Yonghe Market', structure: 'underground', transfer: '' },
  { code: 'G09', name: 'Zhongzheng Lixing', nameZh: '中正力行站（桃園夜市）', location: 'Taoyuan District, near the Zhongzheng Road and Minguang Road junction', structure: 'underground', transfer: '' },
  { code: 'G10', name: 'Zhongzheng Daxing', nameZh: '中正大興站', location: 'Taoyuan District, near the Zhongzheng Road and Daxing West Road junction', structure: 'underground', transfer: '' },
  { code: 'G11', name: 'Arts District', nameZh: '藝文特區站（展演中心）', location: 'Taoyuan District, in front of the Zhongzheng Arts and Culture Business District performance centre', structure: 'underground', transfer: '' },
  { code: 'G12', name: 'Luxingpi', nameZh: '蘆興埤站', location: 'Taoyuan District, near Zhongzheng Road and Tong’an Street', structure: 'underground', transfer: 'Future connection to the Nankan transfer hub' },
  { code: 'G13', name: 'Nanzhu Zhongzheng North', nameZh: '南竹中正北站（河底）', location: 'Luzhu District, near Zhongzheng North Road and Nanzhu Road', structure: 'elevated', transfer: '' },
  { code: 'G14', name: 'Luzhu Zhongzheng North', nameZh: '蘆竹中正北站', location: 'Luzhu District, near Zhongzheng North Road and Luzhu Street', structure: 'elevated', transfer: '' },
  { code: 'G15', name: 'Shuiwei', nameZh: '水尾站', location: 'Luzhu District, near Nankan Road Section 2 and Changxing Road', structure: 'elevated', transfer: 'The route divides after this area toward the A11 and A16 branches' },
  { code: 'G15a', name: 'Guolin', nameZh: '菓林站', location: 'Dayuan District, near Sanmin Road Section 2 and Kengguo Road', structure: 'elevated', transfer: '' },
  { code: 'G15b', name: 'Kengkou', nameZh: '坑口站', location: 'Luzhu District, Kengkou village, near Airport MRT A11', structure: 'elevated', transfer: 'Planned transfer to Airport MRT A11 Kengkou station' },
  { code: 'G16', name: 'G16', nameZh: '', location: 'Dayuan District, a new road in the Aviation Industry Zone', structure: 'elevated', transfer: '' },
  { code: 'G17', name: 'G17', nameZh: '', location: 'Dayuan District, the east side of a new road in the Aviation Industry Zone', structure: 'elevated', transfer: '' },
  { code: 'G18', name: 'G18', nameZh: '', location: 'Dayuan District, the west side of a new road in the Aviation Industry Zone', structure: 'elevated', transfer: '' },
  { code: 'G19', name: 'G19', nameZh: '', location: 'Dayuan District, near Airport MRT A16 Hengshan station', structure: 'elevated', transfer: 'Planned transfer to Airport MRT A16 Hengshan station' },
]

export const TAOYUAN_GREEN_STATION_COUNT = TAOYUAN_GREEN_STATIONS.length

export function getTaoyuanGreenStation(code: string): TaoyuanGreenStation | undefined {
  return TAOYUAN_GREEN_STATIONS.find((station) => station.code.toUpperCase() === code.trim().toUpperCase())
}
