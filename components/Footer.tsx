'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

          {/* Logo */}
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

          {/* Company */}
          <div>
            <p className="font-semibold text-white mb-2">{t.footer.company}</p>
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-white mb-2">{t.footer.legal}</p>
            <ul className="space-y-1">
              <li>
                <Link href="/legal-notice" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  {t.footer.legalNotice}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  {t.footer.termsOfService}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left md:text-right">
            <p className="text-gray-400 mb-1">{t.footer.contactUs}</p>
            <a
              href="mailto:sales@vanadium.solutions"
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium text-sm"
            >
              {t.footer.email}
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}