/** The default share image, used by any page that does not generate its own. */

import { ImageResponse } from 'next/og'
import { OG_CONTENT_TYPE, OG_SIZE, OgContentCard, ogFonts } from '@/lib/og'
import { SITE_DESCRIPTION } from '@/lib/site'

// A static export has to be told these routes are build-time only; without it
// the export step refuses to emit them at all.
export const dynamic = "force-static"

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Taipei Transit Guide'

export default function Image() {
  return new ImageResponse(
    (
      <OgContentCard
        title="Taipei Transit Guide"
        subtitle={SITE_DESCRIPTION}
        accent="#3D454E"
        footer="Reference"
      />
    ),
    { ...size, fonts: ogFonts() },
  )
}
