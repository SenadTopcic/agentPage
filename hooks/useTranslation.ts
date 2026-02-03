'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/locales'

export function useTranslation() {
  const { language } = useLanguage()
  const t = translations[language]
  
  return { t, language }
}
