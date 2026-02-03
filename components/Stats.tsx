'use client'

import { Clock, Zap, Globe, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Stats() {
  const { t } = useTranslation()
  const stats = [
    {
      icon: Clock,
      value: '24/7',
      label: t.stats.alwaysAvailable,
      color: 'from-gold to-accent-600',
    },
    {
      icon: Zap,
      value: '<1s',
      label: t.stats.responseTime,
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Globe,
      value: '15+',
      label: t.stats.languagesSupported,
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: CheckCircle,
      value: '99.9%',
      label: t.stats.callsAnswered,
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
