'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'

type ConsentChoice = 'accepted' | 'rejected' | null

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent') as ConsentChoice
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  const handleCustomize = () => {
    localStorage.setItem('cookie-consent', 'customized')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-xl mx-auto">
        <div className="mb-4">
          <p className="text-sm leading-relaxed">
            {t.cookies.message}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-amber-400 text-gray-900 px-4 py-2 rounded font-medium hover:bg-amber-300 transition-colors text-sm sm:text-base"
          >
            {t.cookies.acceptAll}
          </button>
          <button
            onClick={handleRejectAll}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            {t.cookies.rejectAll}
          </button>
          <button
            onClick={handleCustomize}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded font-medium hover:bg-gray-600 transition-colors text-sm sm:text-base"
          >
            {t.cookies.customize}
          </button>
        </div>
        <div className="mt-3 text-center">
          <Link 
            href="/privacy-policy" 
            className="text-amber-400 hover:text-amber-300 text-sm underline transition-colors"
          >
            {t.cookies.learnMore}
          </Link>
        </div>
      </div>
    </div>
  )
}
