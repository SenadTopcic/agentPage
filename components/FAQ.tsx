'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-bronze rounded-full text-sm font-medium mb-4">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
