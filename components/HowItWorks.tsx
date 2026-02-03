'use client'

import { Search, Pencil, Wrench, TestTube, Rocket, TrendingUp } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HowItWorksTimelineRolling() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const lineHeight = useTransform(smoothProgress, [0, 0.8], ["0%", "100%"])

  const steps = [
    { number: '01', icon: Search, title: t.howItWorks.step1Title, description: t.howItWorks.step1Desc, color: 'bg-amber-500', gradient: 'from-amber-500 to-orange-500' },
    { number: '02', icon: Pencil, title: t.howItWorks.step2Title, description: t.howItWorks.step2Desc, color: 'bg-orange-500', gradient: 'from-orange-500 to-red-500' },
    { number: '03', icon: Wrench, title: t.howItWorks.step3Title, description: t.howItWorks.step3Desc, color: 'bg-amber-600', gradient: 'from-amber-600 to-orange-600' },
    { number: '04', icon: TestTube, title: t.howItWorks.step4Title, description: t.howItWorks.step4Desc, color: 'bg-purple-500', gradient: 'from-purple-500 to-indigo-500' },
    { number: '05', icon: Rocket, title: t.howItWorks.step5Title, description: t.howItWorks.step5Desc, color: 'bg-green-500', gradient: 'from-green-500 to-emerald-500' },
    { number: '06', icon: TrendingUp, title: t.howItWorks.step6Title, description: t.howItWorks.step6Desc, color: 'bg-blue-500', gradient: 'from-blue-500 to-indigo-500' },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            {t.howItWorks.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.howItWorks.title}<br />{t.howItWorks.titleLine2}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            {t.howItWorks.description}
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Background line */}
          <div className={`absolute ${isRTL ? 'end-6' : 'start-6'} md:start-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full`} />
          
          {/* Animated rolling line */}
          <motion.div 
            className={`absolute ${isRTL ? 'end-6' : 'start-6'} md:start-1/2 md:-translate-x-1/2 top-0 w-1 rounded-full origin-top`}
            style={{ 
              height: lineHeight,
              background: 'linear-gradient(to bottom, #f59e0b, #8b5cf6, #3b82f6)'
            }}
          />

          {/* Glow effect on line tip */}
          <motion.div 
            className={`absolute ${isRTL ? 'end-6' : 'start-6'} md:start-1/2 md:-translate-x-1/2 w-3 h-3 ${isRTL ? '-me-1' : '-ms-1'} md:-ms-1 rounded-full bg-white shadow-lg z-20`}
            style={{ 
              top: lineHeight,
              boxShadow: '0 0 20px 5px rgba(245, 158, 11, 0.5)'
            }}
          />

          <div className="relative space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              const stepStart = index / steps.length
              
              const opacity = useTransform(smoothProgress, [stepStart - 0.1, stepStart], [0, 1])
              const y = useTransform(smoothProgress, [stepStart - 0.1, stepStart], [40, 0])
              const scale = useTransform(smoothProgress, [stepStart - 0.05, stepStart + 0.05], [0, 1])

              return (
                <div key={index} className="relative">
                  {/* DESKTOP */}
                  <div className="hidden md:flex items-center justify-center" dir="ltr">
                    <div className="w-1/2 flex justify-end">
                      {isEven && (
                        <motion.div 
                          className="max-w-[400px] pe-12" 
                          style={{ opacity, y, x: -20 }}
                        >
                          <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                             <span className="text-4xl font-bold text-gray-100 block mb-2">{step.number}</span>
                             <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                             <p className="text-gray-600 mt-2 leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <motion.div className="relative z-20 w-16 h-16 shrink-0" style={{ scale }}>
                       <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-xl ring-4 ring-white`}>
                         <Icon className="w-7 h-7 text-white" />
                       </div>
                    </motion.div>

                    <div className="w-1/2 flex justify-start">
                      {!isEven && (
                        <motion.div 
                          className="max-w-[400px] ps-12" 
                          style={{ opacity, y, x: 20 }}
                        >
                          <div className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                             <span className="text-4xl font-bold text-gray-100 block mb-2">{step.number}</span>
                             <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                             <p className="text-gray-600 mt-2 leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* MOBILE */}
                  <motion.div 
                    className={`md:hidden flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                    style={{ opacity, y }}
                  >
                    <div className="w-12 h-12 shrink-0 relative z-20">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-xl ring-4 ring-white`}
                        style={{ scale }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    <div className={`bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex-1 ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
                      <span className="text-3xl font-bold text-gray-100 block mb-1">{step.number}</span>
                      <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}