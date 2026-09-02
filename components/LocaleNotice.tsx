'use client'

import { useLocale } from './LocaleContext'

export default function LocaleNotice() {
  const locale = useLocale()
  if (locale !== 'zh-Hant') return null

  return (
    <aside className="locale-notice" aria-label="Traditional Chinese display note">
      <span lang="zh-Hant">中文來源名稱與原文句子以繁體中文顯示；沒有已提交中文對應的內容保留英文。</span>{' '}
      <span>Chinese source names and original sentences are shown where committed; English remains where no Chinese equivalent exists.</span>
    </aside>
  )
}
