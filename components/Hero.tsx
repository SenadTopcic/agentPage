'use client'

import { Phone, MessageSquare, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToDemo = () => {
    const element = document.querySelector('#demo')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-bronze rounded-full text-sm font-medium mb-6">
              Enterprise AI Voice Agent
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The AI Voice Agent That Handles Calls, Bookings, and Workflows —{' '}
              <span className="bg-gradient-to-r from-gold to-accent-600 bg-clip-text text-transparent">
                24/7
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Stop losing customers to missed calls, long wait times, and after-hours silence. 
              Ethan handles inbound calls and web requests with fast, natural conversation and 
              completes actions like bookings, routing, and follow-ups.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToDemo}
                className="group bg-gradient-to-r from-gold to-accent-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 font-medium flex items-center justify-center shadow-lg"
              >
                Request a Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={scrollToDemo}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gold hover:text-gold hover:bg-amber-50 transition-all duration-200 font-medium"
              >
                Talk to Sales
              </button>
            </div>
          </div>

          <div className="relative lg:h-[500px] animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-float">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                      <p className="text-gray-800 font-medium">
                        Hi! I'd like to book a table for 4 people tonight at 7 PM.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 flex-row-reverse animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gold to-accent-600 rounded-2xl rounded-tr-none p-4 shadow-md">
                      <p className="text-white">
                        Perfect! I have availability at 7 PM for 4 guests. May I have your name and phone number?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-accent-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                      <p className="text-gray-800 font-medium">
                        Sure, it's John Smith, +421 123 456 789
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 flex-row-reverse animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gold to-accent-600 rounded-2xl rounded-tr-none p-4 shadow-md">
                      <p className="text-white">
                        Excellent! Your reservation is confirmed for tonight at 7 PM. See you then!
                      </p>
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
