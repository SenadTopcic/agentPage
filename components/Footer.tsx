'use client'

import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Image 
              src="/images/logo.png" 
              alt="Ethan Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold font-cinzel text-gold leading-tight drop-shadow-md">
                ETHAN
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide -mt-1">
                {t.footer.byVanadium}
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">
              <span className="font-semibold text-white">{t.footer.company}</span>
            </p>
            <p className="text-gray-400">
              {t.footer.copyright}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-1">{t.footer.contactUs}</p>
            <a
              href="mailto:sales@vanadium.solutions"
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              {t.footer.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
