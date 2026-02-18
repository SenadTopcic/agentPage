'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function PrivacyPolicyPage() {
  const { t } = useTranslation()
  const p = t.privacyPolicy

  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <Link href="/" className="text-amber-600 hover:text-amber-500 text-sm font-medium mb-8 inline-block transition-colors">
          ← {t.footer.backToHome}
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{p.title}</h1>
        <p className="text-sm text-gray-400 mb-10">{p.lastUpdated}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s1Title}</h2>
          <p className="text-gray-600 whitespace-pre-line">{p.s1Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s2Title}</h2>
          <p className="text-gray-600 mb-3">{p.s2Intro}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
            {p.s2Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600">{p.s2Note}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s3Title}</h2>
          <p className="text-gray-600">{p.s3Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s4Title}</h2>
          <p className="text-gray-600 mb-3">{p.s4Intro}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
            {p.s4Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600">{p.s4Note}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s5Title}</h2>
          <p className="text-gray-600">{p.s5Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s6Title}</h2>
          <p className="text-gray-600 mb-3">{p.s6Intro}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
            {p.s6Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600">{p.s6Note}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s7Title}</h2>
          <p className="text-gray-600">{p.s7Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s8Title}</h2>
          <p className="text-gray-600 mb-3">{p.s8Intro}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 mb-3">
            {p.s8Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600 mb-2">{p.s8Contact}</p>
          <p className="text-gray-600">{p.s8Authority}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s9Title}</h2>
          <p className="text-gray-600">{p.s9Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{p.s10Title}</h2>
          <p className="text-gray-600">{p.s10Text}</p>
        </section>

      </div>
    </main>
  )
}