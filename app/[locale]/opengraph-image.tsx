/** The default share image for pages in one locale. */

import { ImageResponse } from 'next/og'
import { OG_CONTENT_TYPE, OG_SIZE, OgContentCard, ogFonts } from '@/lib/og'
import { SITE_DESCRIPTION } from '@/lib/site'
import { LOCALES } from '@/lib/locale'

export const dynamic = 'force-static'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Taiwan Transit Guide'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default function Image() {
  return new ImageResponse(
    (
      <OgContentCard
        title="Taiwan Transit Guide"
        subtitle={SITE_DESCRIPTION}
        accent="#3D454E"
        footer="Reference"
      />
    ),
    { ...size, fonts: ogFonts() },
  )
}
