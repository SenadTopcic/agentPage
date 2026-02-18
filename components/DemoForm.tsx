'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DemoForm() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactEmail: '',
    contactPhone: '',
    industry: '',
    country: '',
    callVolume: '',
    goals: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      })

      if (response.ok) {
        alert(t.demo.successMessage)
        setFormData({
          companyName: '',
          contactEmail: '',
          contactPhone: '',
          industry: '',
          country: '',
          callVolume: '',
          goals: '',
        })
      } else {
        const error = await response.json()
        console.error('Error:', error)
        alert('Failed to send request. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold to-bronze">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            {t.demo.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.demo.title}
          </h2>
          <p className="text-xl text-amber-100">
            {t.demo.description}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                {t.demo.companyName} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder={t.demo.companyPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.demo.contactEmail} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  required
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder={t.demo.emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.demo.contactPhone} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  required
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder={t.demo.phonePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.demo.industry} <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                >
                  <option value="">{t.demo.selectIndustry}</option>
                  <option value="hospitality">{t.demo.industryHospitality}</option>
                  <option value="healthcare">{t.demo.industryHealthcare}</option>
                  <option value="restaurant">{t.demo.industryRestaurant}</option>
                  <option value="ecommerce">{t.demo.industryEcommerce}</option>
                  <option value="professional">{t.demo.industryProfessional}</option>
                  <option value="support">{t.demo.industrySupport}</option>
                  <option value="other">{t.demo.industryOther}</option>
                </select>
              </div>

              <div>
                <label htmlFor="callVolume" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.demo.callVolume} <span className="text-red-500">*</span>
                </label>
                <select
                  id="callVolume"
                  name="callVolume"
                  required
                  value={formData.callVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                >
                  <option value="">{t.demo.selectVolume}</option>
                  <option value="0-500">0-500</option>
                  <option value="500-2000">500-2,000</option>
                  <option value="2000-10000">2,000-10,000</option>
                  <option value="10000+">10,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                {t.demo.country}
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={t.demo.countryPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                {t.demo.goals}
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={4}
                value={formData.goals}
                onChange={handleChange}
                placeholder={t.demo.goalsPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-white to-amber-50 text-bronze px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 font-bold flex items-center justify-center group border-2 border-white/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : t.demo.submit}
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <p className="text-center text-xs text-gray-400">
              {t.demo.submitConsent}{' '}
              <Link href="/privacy-policy" className="text-amber-600 hover:text-amber-500 underline transition-colors">
                {t.demo.submitConsentLink}
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}