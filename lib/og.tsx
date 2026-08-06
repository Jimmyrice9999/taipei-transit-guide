/**
 * Share images, drawn at build time.
 *
 * Every one of these is generated during `next build` and written into `out/`
 * as a PNG. No runtime service, no third-party image host, nothing to keep
 * alive — which is the same constraint the rest of the site works under.
 *
 * `ImageResponse` renders a small JSX subset through satori and resvg, both of
 * which ship inside Next. It is not a browser: no CSS grid, no `gap` on some
 * versions, no cascading. Every element needs an explicit `display: flex` when
 * it has more than one child, and layout is written out longhand rather than
 * inherited. That is why this file looks more verbose than the site's own CSS.
 *
 * The design deliberately reuses the site's two signature devices — the line
 * colour and the station code badge — rather than inventing a share-card
 * treatment. A shared link should look like the page it came from.
 */

import fs from 'node:fs'
import path from 'node:path'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

const PAPER = '#FBFAF8'
const INK = '#14171A'
const MUTED = '#5C5852'
const RULE = '#DAD5CC'

/**
 * Font files, read off disk at build time.
 *
 * From the @fontsource packages already installed for the site itself, so the
 * share image is set in the same faces as the page. `.woff` rather than
 * `.woff2` — satori reads the former and not, reliably, the latter.
 */
function font(pkg: string, file: string): ArrayBuffer | null {
  try {
    const full = path.join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files', file)
    const buffer = fs.readFileSync(full)
    return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer
  } catch {
    // Missing fonts must not fail the build. satori falls back to its own face,
    // which is less on-brand but perfectly legible — a share image is not worth
    // a failed deploy.
    return null
  }
}

export function ogFonts() {
  const faces = [
    { name: 'Zilla Slab', file: font('zilla-slab', 'zilla-slab-latin-700-normal.woff'), weight: 700 as const },
    { name: 'Inter', file: font('inter', 'inter-latin-400-normal.woff'), weight: 400 as const },
    { name: 'Plex Mono', file: font('ibm-plex-mono', 'ibm-plex-mono-latin-600-normal.woff'), weight: 600 as const },
  ]

  return faces
    .filter((f): f is typeof f & { file: ArrayBuffer } => f.file !== null)
    .map((f) => ({ name: f.name, data: f.file, weight: f.weight, style: 'normal' as const }))
}

/** The badge, at share-image scale. */
function Badge({
  code,
  background,
  foreground,
  size = 96,
}: {
  code: string
  background: string
  foreground: string
  size?: number
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background,
        color: foreground,
        fontFamily: 'Plex Mono',
        fontSize: size,
        fontWeight: 600,
        padding: `${size * 0.16}px ${size * 0.3}px`,
        borderRadius: size * 0.12,
        letterSpacing: '0.02em',
      }}
    >
      {code}
    </div>
  )
}

/**
 * The shared frame: a thick line-colour bar at the top, the content, and the
 * site name along the bottom.
 *
 * The bar is what carries line identity at thumbnail size, when the text has
 * become too small to read — and it is paired with the code badge below it, so
 * the identification never rests on colour alone.
 */
export function OgFrame({
  accent,
  children,
  footer,
}: {
  accent: string
  children: React.ReactNode
  footer: string
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: PAPER,
      }}
    >
      <div style={{ display: 'flex', height: 24, background: accent, width: '100%' }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 1,
          padding: '0 72px',
        }}
      >
        {children}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: `1px solid ${RULE}`,
          padding: '26px 72px',
          fontFamily: 'Inter',
          fontSize: 24,
          color: MUTED,
        }}
      >
        <div style={{ display: 'flex' }}>{footer}</div>
        <div style={{ display: 'flex', fontFamily: 'Plex Mono', letterSpacing: '0.08em' }}>
          TAIPEI TRANSIT GUIDE
        </div>
      </div>
    </div>
  )
}

/** A content page: line badge, title, one line of description. */
export function OgContentCard({
  title,
  subtitle,
  lineCode,
  badgeBg,
  badgeFg,
  accent,
  footer,
}: {
  title: string
  subtitle?: string
  lineCode?: string
  badgeBg?: string
  badgeFg?: string
  accent: string
  footer: string
}) {
  return (
    <OgFrame accent={accent} footer={footer}>
      {lineCode && badgeBg && badgeFg && (
        <div style={{ display: 'flex', marginBottom: 34 }}>
          <Badge code={lineCode} background={badgeBg} foreground={badgeFg} size={44} />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          fontFamily: 'Zilla Slab',
          fontWeight: 700,
          fontSize: title.length > 34 ? 68 : 88,
          color: INK,
          lineHeight: 1.08,
        }}
      >
        {title}
      </div>

      {subtitle && (
        <div
          style={{
            display: 'flex',
            fontFamily: 'Inter',
            fontSize: 30,
            color: MUTED,
            marginTop: 26,
            lineHeight: 1.35,
          }}
        >
          {subtitle}
        </div>
      )}
    </OgFrame>
  )
}

/** A station page: the code badge is the subject, not a label on it. */
export function OgStationCard({
  code,
  name,
  nameZh,
  detail,
  badgeBg,
  badgeFg,
  accent,
  footer,
}: {
  code: string
  name: string
  nameZh?: string
  detail: string
  badgeBg: string
  badgeFg: string
  accent: string
  footer: string
}) {
  return (
    <OgFrame accent={accent} footer={footer}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Badge code={code} background={badgeBg} foreground={badgeFg} size={88} />

        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 44 }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Zilla Slab',
              fontWeight: 700,
              fontSize: name.length > 22 ? 62 : 82,
              color: INK,
              lineHeight: 1.05,
            }}
          >
            {name}
          </div>
          {nameZh && (
            <div
              style={{
                display: 'flex',
                fontFamily: 'Inter',
                fontSize: 42,
                color: MUTED,
                marginTop: 12,
              }}
            >
              {nameZh}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          fontFamily: 'Inter',
          fontSize: 28,
          color: MUTED,
          marginTop: 40,
        }}
      >
        {detail}
      </div>
    </OgFrame>
  )
}
