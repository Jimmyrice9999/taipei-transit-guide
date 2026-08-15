import { preload } from 'react-dom'
import { hanFontFace } from '@/app/layout'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * A station page loads the two-weight subset for its own line.
 *
 * The family name is distinct from the shared layout family, so the cascade
 * cannot accidentally select the shared file as well. React's preload is
 * called during the server render and hoists the two font links into <head>.
 * The @font-face rules keep `font-display: block`, as defined in layout.tsx.
 */
export default function HanLineSubset({ line }: { line: string }) {
  const key = line.toLowerCase()
  const family = `TTG Han ${line}`
  const file = (weight: 400 | 700) => `noto-sans-tc-line-${key}-${weight}.woff2`

  preload(`${BASE_PATH}/fonts/${file(400)}`, {
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  })
  preload(`${BASE_PATH}/fonts/${file(700)}`, {
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  })

  const css = `${hanFontFace(family, file)}
:root:root { --font-han: '${family}'; }
`

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
