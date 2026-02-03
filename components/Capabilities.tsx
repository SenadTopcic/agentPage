'use client'

import { Phone, MessageSquare, Calendar, Users, Shield, Zap } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Capabilities() {
  const { t } = useTranslation()
  const capabilities = [
  {
    icon: Phone,
    title: t.capabilities.cap1Title,
    description: t.capabilities.cap1Desc,
    color: 'from-gold to-accent-600',
  },
  {
    icon: MessageSquare,
    title: t.capabilities.cap2Title,
    description: t.capabilities.cap2Desc,
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Calendar,
    title: t.capabilities.cap3Title,
    description: t.capabilities.cap3Desc,
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: Users,
    title: t.capabilities.cap4Title,
    description: t.capabilities.cap4Desc,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: t.capabilities.cap5Title,
    description: t.capabilities.cap5Desc,
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Zap,
    title: t.capabilities.cap6Title,
    description: t.capabilities.cap6Desc,
    color: 'from-indigo-500 to-blue-600',
  },
]

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white text-bronze rounded-full text-sm font-medium mb-4 shadow-sm">
            {t.capabilities.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.capabilities.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            {t.capabilities.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
