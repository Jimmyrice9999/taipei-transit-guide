/** A share image per station: the code badge is the subject. */

import { ImageResponse } from 'next/og'
import { OG_CONTENT_TYPE, OG_SIZE, OgStationCard, ogFonts } from '@/lib/og'
import { getAccent } from '@/lib/lines'
import { formatDistrict } from '@/lib/districts'
import { getLineStations, getStation, LINES_WITH_STATION_PAGES } from '@/lib/stations'
import { LOCALES } from '@/lib/locale'

// A static export has to be told these routes are build-time only; without it
// the export step refuses to emit them at all.
export const dynamic = "force-static"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Taiwan Transit Guide'

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    [...LINES_WITH_STATION_PAGES].flatMap((line) =>
      getLineStations(line)
        .filter((station) => station.operator !== 'TMRT')
        .map((station) => ({ locale, code: station.code.toLowerCase() })),
    ),
  )
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; code: string }>
}) {
  const { code } = await params
  const station = getStation(code)
  if (!station) return new ImageResponse(<div />, size)

  const line = getAccent(station.line, station.operator)
  const stations = getLineStations(station.line, station.operator)
  const position = stations.findIndex((s) => s.code === station.code) + 1

  const detail = [
    `Stop ${position} of ${stations.length} on the ${line.name} Line`,
    station.district ? formatDistrict(station.district) : '',
    station.interchange.length ? `Interchange: ${station.interchange.join(', ')}` : '',
  ]
    .filter(Boolean)
    .join('  ·  ')

  return new ImageResponse(
    (
      <OgStationCard
        code={station.code}
        name={station.name}
        nameZh={station.nameZh}
        detail={detail}
        badgeBg={line.badgeBg}
        badgeFg={line.badgeFg}
        accent={line.map}
        footer="Station"
      />
    ),
    { ...size, fonts: ogFonts() },
  )
}
