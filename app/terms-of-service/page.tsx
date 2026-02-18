'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function TermsOfServicePage() {
  const { t } = useTranslation()
  const s = t.termsOfService

  return (
    <main className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <Link href="/" className="text-amber-600 hover:text-amber-500 text-sm font-medium mb-8 inline-block transition-colors">
          ← {t.footer.backToHome}
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{s.title}</h1>
        <p className="text-sm text-gray-400 mb-10">{s.lastUpdated}</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s1Title}</h2>
          <p className="text-gray-600">{s.s1Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s2Title}</h2>
          <p className="text-gray-600">{s.s2Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s3Title}</h2>
          <p className="text-gray-600 mb-3">{s.s3Intro}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {s.s3Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s4Title}</h2>
          <p className="text-gray-600 mb-3">{s.s4Intro}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {s.s4Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s5Title}</h2>
          <p className="text-gray-600 mb-3">{s.s5Intro}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {s.s5Items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s6Title}</h2>
          <p className="text-gray-600">{s.s6Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s7Title}</h2>
          <p className="text-gray-600">{s.s7Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s8Title}</h2>
          <p className="text-gray-600">{s.s8Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s9Title}</h2>
          <p className="text-gray-600">{s.s9Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s10Title}</h2>
          <p className="text-gray-600">{s.s10Text}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{s.s11Title}</h2>
          <p className="text-gray-600">{s.s11Text}</p>
        </section>

      </div>
    </main>
  )
}