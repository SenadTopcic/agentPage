'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    country: '',
    callVolume: '',
    goals: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
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
            GET STARTED
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Request a Demo
          </h2>
          <p className="text-xl text-amber-100">
            Tell us about your business and call volume, we'll show you how Ethan fits your workflow.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                >
                  <option value="">Select industry</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="ecommerce">E-commerce & Retail</option>
                  <option value="professional">Professional Services</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="callVolume" className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Call Volume <span className="text-red-500">*</span>
                </label>
                <select
                  id="callVolume"
                  name="callVolume"
                  required
                  value={formData.callVolume}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                >
                  <option value="">Select volume</option>
                  <option value="0-500">0-500</option>
                  <option value="500-2000">500-2,000</option>
                  <option value="2000-10000">2,000-10,000</option>
                  <option value="10000+">10,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country / Languages
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g., Slovakia / SK, EN"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Goals
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={4}
                value={formData.goals}
                onChange={handleChange}
                placeholder="e.g., Reduce costs, 24/7 coverage..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-white to-amber-50 text-bronze px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 font-bold flex items-center justify-center group border-2 border-white/50"
            >
              Submit Request
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
