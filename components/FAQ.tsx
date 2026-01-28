'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Will it replace my staff?',
      answer: 'Ethan handles the majority of routine calls so your team can focus on complex, sensitive, or VIP interactions. Most companies use Ethan to reduce staffing pressure while maintaining service quality.',
    },
    {
      question: 'Can we control what Ethan says?',
      answer: 'Yes. You can set tone, policies, boundaries, and role behavior—so the AI stays aligned with your business guidelines and brand voice.',
    },
    {
      question: 'What happens if Ethan can\'t help?',
      answer: 'Ethan can route calls to a human, take a message, or offer next steps based on your escalation rules. Sensitive, unusual, or complex requests are safely transferred to your team.',
    },
    {
      question: 'Does it work in multiple languages?',
      answer: 'Yes. Ethan supports multilingual conversations, enabling consistent service for international customers without hiring multilingual staff.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-bronze rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Common Questions
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
