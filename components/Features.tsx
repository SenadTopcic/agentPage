'use client'

import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

export default function FeaturesBento() {
  const { t } = useTranslation()
  const features = [
    {
      title: t.features.feature1Title,
      description: t.features.feature1Desc,
      image: '/images/always-available.jpeg',
      imageAlt: 'AI answering calls 24/7',
    },
    {
      title: t.features.feature2Title,
      description: t.features.feature2Desc,
      image: '/images/reduce-staffing.png',
      imageAlt: 'Team focusing on high-value work',
    },
    {
      title: t.features.feature3Title,
      description: t.features.feature3Desc,
      image: '/images/consistent-quality.jpeg',
      imageAlt: 'Consistent customer experience',
    },
    {
      title: t.features.feature4Title,
      description: t.features.feature4Desc,
      image: '/images/analytics.png',
      imageAlt: 'Call analytics dashboard',
    },
  ]

  return (
    <section id="features" className="py-24 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            {t.features.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((feature, index) => {
            // Prva i poslednja kartica zauzimaju 7 kolona, srednje dve 5 kolona
            const isWide = index === 0 || index === 3;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col ${
                  isWide ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div className="p-8">
                  <span className="text-amber-500 font-mono text-sm font-bold tracking-widest uppercase">
                    {t.features.featureLabel} 0{index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>
                
                <div className="relative mt-auto h-64 w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}