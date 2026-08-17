/**
 * Wrap long Markdown bodies' major sections in native disclosures.
 *
 * The Markdown has already been converted to trusted HTML by the content
 * loader. This keeps that HTML in the static output while moving each h2's
 * text into a keyboard-operable summary. Short two-section pages are left
 * alone; they do not benefit from another control.
 */

const H2 = /<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi

export function collapseMajorSections(html: string) {
  const sections = [...html.matchAll(H2)]
  if (sections.length < 3) return html

  const firstStart = sections[0].index ?? 0
  let output = html.slice(0, firstStart)

  sections.forEach((section, index) => {
    const start = section.index ?? 0
    const contentStart = start + section[0].length
    const contentEnd = sections[index + 1]?.index ?? html.length
    const id = section[1].match(/\sid=["']([^"']+)["']/i)
    const idAttribute = id ? ` id="${id[1]}"` : ''
    const open = index === 0 ? ' open' : ''

    output += `<details class="content-disclosure"${open}>`
    output += `<summary><h2 class="content-disclosure-title"${idAttribute}>${section[2]}</h2><span class="disclosure-caret" aria-hidden="true"></span></summary>`
    output += `<div class="content-disclosure-body">${html.slice(contentStart, contentEnd)}</div>`
    output += '</details>'
  })

  return output
}
