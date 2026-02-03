'use client'

import { Phone, ArrowRight, Clock, User, Mic, MicOff, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

// RJEŠENJE 2: Notifikacija UNUTAR telefona (kao push notification)
// - Prikazuje se kao iOS/Android style notification na vrhu ekrana telefona
// - Radi na svim veličinama ekrana
// - Izgleda kao pravi telefon UX

export default function Hero() {
  const { t } = useTranslation()
  const [callDuration, setCallDuration] = useState(127)
  const [isMuted, setIsMuted] = useState(false)
  
  const scrollToDemo = () => {
    const element = document.querySelector('#demo')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-bronze rounded-full text-sm font-medium mb-6">
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title}{' '}
              <span className="bg-gradient-to-r from-gold to-accent-600 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToDemo}
                className="group bg-gradient-to-r from-gold to-accent-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 font-medium flex items-center justify-center shadow-lg"
              >
                {t.nav.requestDemo}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={scrollToDemo}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gold hover:text-gold hover:bg-primary-50 transition-all duration-200 font-medium"
              >
                {t.nav.talkToSales}
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative lg:h-[500px] animate-slide-up flex items-center justify-center px-8 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl transform rotate-3 opacity-50"></div>
            
            <div className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Phone outer frame */}
              <div className="w-64 sm:w-72 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-20"></div>
                
                {/* Phone screen */}
                <div className="bg-gradient-to-b from-primary-50 to-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="h-12 bg-gradient-to-r from-gold to-accent-600 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Active Call</span>
                    </div>
                  </div>

                  {/* RJEŠENJE 2: In-screen notification banner */}
                  <div className="mx-2 mt-2 bg-white/95 backdrop-blur rounded-xl shadow-lg p-2 animate-slide-down border border-green-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-green-600" size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-gray-800 truncate">{t.hero.bookingConfirmed}</div>
                        <div className="text-[10px] text-gray-500 truncate">{t.hero.bookingTime}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call screen content */}
                  <div className="px-6 py-4 sm:py-6 flex flex-col items-center">
                    {/* Caller avatar */}
                    <div className="relative">
                      <div className="w-20 sm:w-24 h-20 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                        <Image src="/images/logo.png" alt="Ethan AI" width={70} height={70} className="object-contain" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gold to-accent-600 rounded-full animate-ping opacity-30"></div>
                    </div>
                    
                    {/* Caller info */}
                    <div className="mt-2 sm:mt-3 text-center">
                      <span className="text-lg sm:text-xl font-semibold font-cinzel text-gold leading-tight drop-shadow-md">
                        ETHAN
                      </span>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium tracking-wide mt-0.5">
                        by Vanadium
                      </p>
                    </div>
                    
                    {/* Call duration */}
                    <div className="mt-2 sm:mt-3 flex items-center gap-2 text-gray-700">
                      <Clock size={14} />
                      <span className="font-mono text-sm sm:text-base">{formatTime(callDuration)}</span>
                    </div>
                    
                    {/* Sound wave indicator */}
                    <div className="flex items-center justify-center gap-1 h-5 sm:h-6 mt-3 sm:mt-4">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-gradient-to-t from-gold to-accent-600 rounded-full animate-sound-wave"
                          style={{
                            animationDelay: `${i * 0.08}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Live caption */}
                    <div className="mt-3 sm:mt-4 w-full bg-gray-100 rounded-xl p-2 sm:p-2.5">
                      <p className="text-[9px] sm:text-[10px] text-gray-400 mb-0.5">{t.hero.ethanSays}</p>
                      <p className="text-gray-700 text-[10px] sm:text-xs">
                        {t.hero.callMessage}
                      </p>
                    </div>
                    
                    {/* Call controls */}
                    <div className="mt-3 sm:mt-4 flex items-center justify-center gap-5">
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isMuted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                      </button>
                      <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition-colors">
                        <Phone size={20} className="transform rotate-[135deg]" />
                      </button>
                      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                        <User size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}