'use client'

import { usePathname } from 'next/navigation'
import { useLocale } from './LocaleContext'
import { localizedPath, withoutLocale } from '@/lib/locale'

export default function LanguageToggle({ placement }: { placement: 'header' | 'rail' }) {
  const locale = useLocale()
  const pathname = usePathname() || '/'
  const target = locale === 'en' ? 'zh-Hant' : 'en'
  const targetPath = localizedPath(target, withoutLocale(pathname))
  const targetLabel = target === 'en' ? 'English' : '繁體中文'
  const accessibleName = target === 'en' ? 'Switch to English' : '切換至繁體中文'
  const landmarkName = placement === 'rail' ? 'Language switcher, side rail' : 'Language switcher'

  return (
    <nav className={`language-toggle language-toggle-${placement}`} aria-label={landmarkName}>
      <a href={targetPath} lang={target === 'en' ? 'en' : 'zh-Hant'} aria-label={accessibleName}>
        {targetLabel}
      </a>
    </nav>
  )
}
