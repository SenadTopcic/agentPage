'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import GB from 'country-flag-icons/react/3x2/GB'
import DE from 'country-flag-icons/react/3x2/DE'
import SK from 'country-flag-icons/react/3x2/SK'
import BH from 'country-flag-icons/react/3x2/BH'

const languages = [
  { code: 'en', name: 'English', Flag: GB },
  { code: 'de', name: 'Deutsch', Flag: DE },
  { code: 'sk', name: 'Slovenčina', Flag: SK },
  { code: 'ar', name: 'العربية', Flag: BH },
] as const

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const CurrentFlag = currentLanguage.Flag

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Select language"
      >
        <CurrentFlag className="w-8 h-6 border-0 outline-0 overflow-hidden" style={{ display: 'block' }} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((lang) => {
            const FlagComponent = lang.Flag
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-amber-50 transition-colors ${
                  language === lang.code ? 'bg-amber-50 text-gold' : 'text-gray-700'
                }`}
              >
                <FlagComponent className="w-7 h-5 border-0 outline-0 overflow-hidden" style={{ display: 'block' }} />
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <span className="ml-auto text-gold">✓</span>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
