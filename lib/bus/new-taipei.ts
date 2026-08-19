import type { BusRoute } from './routes'

export type NewTaipeiRouteSubgroup = 'event' | 'lrt' | 'pioneer' | 'jumpfrog' | 'rapid' | 'newbus' | 'general' | 'unclassified'

export const NEW_TAIPEI_SUBGROUPS: Array<{ key: NewTaipeiRouteSubgroup; title: string; description: string }> = [
  { key: 'event', title: 'Event shuttles', description: 'New Taipei Department of Transportation activity-service records.' },
  { key: 'lrt', title: 'Light-rail feeder routes', description: 'Routes filed in the official light-rail feeder dataset.' },
  { key: 'pioneer', title: 'MRT pioneer buses', description: 'Routes filed in the official MRT pioneer-bus dataset.' },
  { key: 'jumpfrog', title: 'Jump-frog commuter buses', description: 'Limited-stop, scheduled commuter services filed as 跳蛙公車.' },
  { key: 'rapid', title: 'Rapid buses', description: 'Routes filed in the official rapid-bus dataset.' },
  { key: 'newbus', title: 'New Bus community services', description: 'New Bus records serving areas and corridors in the official dataset.' },
  { key: 'general', title: 'General buses', description: 'Routes filed in the official general-bus dataset.' },
  { key: 'unclassified', title: 'Classification TBC', description: 'TDX identity records without a current New Taipei category match.' },
]

export function getNewTaipeiRouteSubgroup(route: BusRoute): NewTaipeiRouteSubgroup {
  if (route.group !== 'new-taipei') return 'unclassified'
  const key = route.service?.categoryKey as NewTaipeiRouteSubgroup | undefined
  return key && NEW_TAIPEI_SUBGROUPS.some((group) => group.key === key) ? key : 'unclassified'
}
