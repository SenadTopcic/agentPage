'use client'

import { useState, useEffect, useCallback } from 'react'
import { Hotel, Stethoscope, UtensilsCrossed, ShoppingBag, Briefcase, Headphones, Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

export default function Industries() {
  const { t } = useTranslation()
  const industries = [
    {
      icon: Hotel,
      title: t.industries.hospitality.title,
      description: t.industries.hospitality.desc,
      details: t.industries.hospitality.details,
      color: 'from-gold to-accent-600',
      image: '/images/hospitality.avif',
    },
    {
      icon: Stethoscope,
      title: t.industries.healthcare.title,
      description: t.industries.healthcare.desc,
      details: t.industries.healthcare.details,
      color: 'from-amber-500 to-orange-500',
      image: '/images/healthcare.avif',
    },
    {
      icon: UtensilsCrossed,
      title: t.industries.restaurants.title,
      description: t.industries.restaurants.desc,
      details: t.industries.restaurants.details,
      color: 'from-orange-600 to-amber-700',
      image: '/images/restaurant.avif',
    },
    {
      icon: ShoppingBag,
      title: t.industries.retail.title,
      description: t.industries.retail.desc,
      details: t.industries.retail.details,
      color: 'from-purple-500 to-violet-600',
      image: '/images/retail.avif',
    },
    {
      icon: Briefcase,
      title: t.industries.professional.title,
      description: t.industries.professional.desc,
      details: t.industries.professional.details,
      color: 'from-indigo-500 to-blue-600',
      image: '/images/professional.avif',
    },
    {
      icon: Headphones,
      title: t.industries.support.title,
      description: t.industries.support.desc,
      details: t.industries.support.details,
      color: 'from-green-500 to-emerald-600',
      image: '/images/support.avif',
    },
    {
      icon: Building2,
      title: t.industries.business.title,
      description: t.industries.business.desc,
      details: t.industries.business.details,
      color: 'from-gray-600 to-gray-700',
      image: '/images/business.avif',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return
    
    setIsAnimating(true)
    setCurrentSlide(index)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }, [currentSlide, isAnimating])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % industries.length)
  }, [currentSlide, industries.length, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + industries.length) % industries.length)
  }, [currentSlide, industries.length, goToSlide])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section id="industries" className="h-[100svh] lg:h-auto py-3 lg:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-amber-50 flex flex-col">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col lg:block">
        
        {/* Header - 20% on mobile */}
        <div className="h-[18%] lg:h-auto flex flex-col justify-center text-center lg:mb-12 shrink-0">
          <div className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-white text-bronze rounded-full text-xs lg:text-sm font-medium mb-1 lg:mb-4 shadow-sm mx-auto">
            {t.industries.badge}
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-1 lg:mb-4">
            {t.industries.title}
          </h2>
          <p className="text-xs sm:text-sm lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 line-clamp-2 lg:line-clamp-none lg:mt-6">
            {t.industries.description}
          </p>
        </div>

        {/* Slider Card - 82% on mobile */}
        <div className="h-[82%] lg:h-auto flex flex-col shrink-0">
          
          {/* MOBILE LAYOUT */}
          <div className="lg:hidden bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
            
            {/* Image - 40% of card */}
            <div className="h-[40%] relative shrink-0">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20 z-10`} />
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>
              ))}
              
              {/* Navigation arrows */}
              <button
                onClick={() => { prevSlide(); setIsAutoPlaying(false) }}
                disabled={isAnimating}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg flex items-center justify-center z-20 disabled:opacity-50 transition-all duration-300 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-gray-800" size={18} />
              </button>
              <button
                onClick={() => { nextSlide(); setIsAutoPlaying(false) }}
                disabled={isAnimating}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg flex items-center justify-center z-20 disabled:opacity-50 transition-all duration-300 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="text-gray-800" size={18} />
              </button>
            </div>
            
            {/* Content - 40% of card */}
            <div className="h-[40%] relative overflow-hidden shrink-0">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 p-4 flex flex-col transition-all duration-500 ease-out ${
                      index === currentSlide 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className={`inline-flex items-center gap-2 mb-2 w-fit px-3 py-1.5 rounded-full bg-gradient-to-r ${industry.color}`}>
                      <Icon className="text-white" size={14} />
                      <span className="text-white font-bold text-xs">{industry.title}</span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {industry.description}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4 flex-1">
                      {industry.details}
                    </p>
                  </div>
                )
              })}
            </div>
            
            {/* Dots - 15% of card */}
            <div className="h-[15%] flex justify-center items-center gap-1.5 px-2 shrink-0">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <button
                    key={index}
                    onClick={() => { goToSlide(index); setIsAutoPlaying(false) }}
                    disabled={isAnimating}
                    className={`relative transition-all duration-500 ease-out ${
                      currentSlide === index ? 'w-9 h-9 scale-110' : 'w-7 h-7'
                    } rounded-full shadow-md flex items-center justify-center overflow-hidden`}
                    aria-label={`Go to ${industry.title}`}
                  >
                    <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-gold to-accent-600`} />
                    <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-0' : 'opacity-100'} bg-white`} />
                    
                    {/* Progress ring for mobile */}
                    {currentSlide === index && isAutoPlaying && (
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                        <circle
                          cx="50%" cy="50%" r="45%" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
                          style={{ strokeDasharray: '283', strokeDashoffset: '283', animation: 'progress-ring 5s linear forwards' }}
                        />
                      </svg>
                    )}
                    
                    <Icon className={`relative z-10 transition-colors duration-500 ${currentSlide === index ? 'text-white' : 'text-gray-600'}`} size={currentSlide === index ? 14 : 12} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* DESKTOP LAYOUT - Original */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image section */}
                  <div className="relative h-[500px] overflow-hidden">
                    {industries.map((industry, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20 z-10`} />
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover"
                          sizes="50vw"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Content section */}
                  <div className="p-8 sm:p-12 flex flex-col justify-center min-h-[500px] relative overflow-hidden">
                    {industries.map((industry, index) => {
                      const Icon = industry.icon
                      return (
                        <div
                          key={index}
                          className={`transition-all duration-500 ease-out ${
                            index === currentSlide 
                              ? 'opacity-100 translate-y-0 relative' 
                              : 'opacity-0 translate-y-4 absolute inset-0 p-8 sm:p-12 pointer-events-none flex flex-col justify-center'
                          }`}
                        >
                          <div className={`inline-flex items-center gap-3 mb-6 w-fit px-4 py-2 rounded-full bg-gradient-to-r ${industry.color}`}>
                            <Icon className="text-white" size={24} />
                            <span className="text-white font-bold">{industry.title}</span>
                          </div>
                          
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {industry.description}
                          </h3>
                          
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {industry.details}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={() => { prevSlide(); setIsAutoPlaying(false) }}
                  disabled={isAnimating}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group disabled:opacity-50"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-gray-800 group-hover:text-gold transition-colors" size={24} />
                </button>

                <button
                  onClick={() => { nextSlide(); setIsAutoPlaying(false) }}
                  disabled={isAnimating}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group disabled:opacity-50"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-gray-800 group-hover:text-gold transition-colors" size={24} />
                </button>
              </div>
            </div>

            {/* Desktop dot indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <button
                    key={index}
                    onClick={() => { goToSlide(index); setIsAutoPlaying(false) }}
                    disabled={isAnimating}
                    className={`relative transition-all duration-500 ease-out ${
                      currentSlide === index ? 'w-12 h-12 scale-110' : 'w-10 h-10 hover:scale-105'
                    } rounded-full shadow-md hover:shadow-lg flex items-center justify-center disabled:cursor-not-allowed overflow-hidden`}
                    aria-label={`Go to ${industry.title}`}
                  >
                    <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'} bg-gradient-to-r from-gold to-accent-600`} />
                    <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-0' : 'opacity-100'} bg-white`} />
                    
                    {currentSlide === index && isAutoPlaying && (
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                        <circle
                          cx="50%" cy="50%" r="45%" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
                          style={{ strokeDasharray: '283', strokeDashoffset: '283', animation: 'progress-ring 5s linear forwards' }}
                        />
                      </svg>
                    )}
                    
                    <Icon className={`relative z-10 transition-colors duration-500 ${currentSlide === index ? 'text-white' : 'text-gray-600'}`} size={currentSlide === index ? 20 : 18} />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-ring {
          from { stroke-dashoffset: 283; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}