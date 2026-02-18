'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function LegalNoticePage() {
  const { t } = useTranslation()
  const l = t.legalNotice

  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <Link href="/" className="text-amber-600 hover:text-amber-500 text-sm font-medium mb-8 inline-block transition-colors">
          ← {t.footer.backToHome}
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{l.title}</h1>
        <p className="text-sm text-gray-400 mb-10">{l.lastUpdated}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{l.companyInfoTitle}</h2>
          <div className="space-y-1 text-gray-600">
            <p>{l.companyName}</p>
            <p>{l.address}</p>
            <p>{l.ico}</p>
            <p>{l.dic}</p>
            <p>{l.vat}</p>
            <p>{l.representative}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{l.contactTitle}</h2>
          <div className="space-y-1 text-gray-600">
            <p>{l.email}</p>
            <p>{l.phone}</p>
            <p>{l.website}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{l.regulatoryTitle}</h2>
          <p className="text-gray-600">{l.regulatoryText}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{l.odrTitle}</h2>
          <p className="text-gray-600 mb-2">{l.odrText}</p>
          <a
            href={l.odrLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:text-amber-500 underline transition-colors"
          >
            {l.odrLink}
          </a>
          <p className="text-gray-600 mt-2">{l.odrEmail}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{l.contentTitle}</h2>
          <p className="text-gray-600">{l.contentText}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{l.linksTitle}</h2>
          <p className="text-gray-600">{l.linksText}</p>
        </section>

      </div>
    </main>
  )
}