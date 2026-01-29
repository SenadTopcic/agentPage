'use client'

import { useState, useEffect } from 'react'
import { Hotel, Stethoscope, UtensilsCrossed, ShoppingBag, Briefcase, Headphones, Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Industries() {
  const industries = [
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Hotels, resorts and spas. Booking inquiries, policy questions, room availability, and 24/7 reception.',
      details: 'Ethan handles reservation requests, answers questions about amenities, room types, and policies. Provides instant responses about availability, pricing, and special offers. Can take bookings, process cancellations, and handle after-hours inquiries without missing a beat.',
      color: 'from-gold to-accent-600',
      image: '/images/hospitality.png',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Clinics. Appointment scheduling, reminders, directions, and patient routing.',
      details: 'Streamline patient communication with automated appointment scheduling, prescription refill requests, and general inquiries. Ethan can verify insurance information, provide directions, and route urgent matters to the appropriate medical staff.',
      color: 'from-amber-500 to-orange-500',
      image: '/images/healthcare.png',
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurants',
      description: 'Reservations, opening hours, menu questions, and special requests.',
      details: 'Take reservations, answer menu questions, handle dietary restrictions, and manage waitlist inquiries. Ethan can inform customers about daily specials, operating hours, and handle large party bookings with ease.',
      color: 'from-orange-600 to-amber-700',
      image: '/images/restaurant.png',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce & Retail',
      description: 'Online stores and retail chains. Order status, returns, product questions, and customer support.',
      details: 'Provide instant order tracking, handle return and exchange requests, answer product questions, and manage customer inquiries. Ethan can process simple requests and escalate complex issues to your team.',
      color: 'from-purple-500 to-violet-600',
      image: '/images/retail.png',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Law firms, agencies and consultancies. Client intake, scheduling, document requests, and billing support.',
      details: 'Manage client intake, schedule consultations, collect preliminary information, and answer common questions about your services. Ethan can handle billing inquiries and route specialized requests to the right team member.',
      color: 'from-indigo-500 to-blue-600',
      image: '/images/professional.png',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'FAQ handling, status checks, message taking, and intelligent triage.',
      details: 'Answer frequently asked questions, check order or ticket status, take detailed messages, and intelligently route calls based on complexity. Ethan ensures no customer inquiry goes unanswered, even during peak hours.',
      color: 'from-green-500 to-emerald-600',
      image: '/images/support.png',
    },
    {
      icon: Building2,
      title: 'Any Customer-Facing Business',
      description: 'If you take calls, Ethan can handle them. Fully customized to your workflows and systems.',
      details: 'Whatever your industry, if you interact with customers by phone, Ethan can be customized to handle your specific workflows, terminology, and business processes. We build the solution around your needs.',
      color: 'from-gray-600 to-gray-700',
      image: '/images/business.png',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white text-bronze rounded-full text-sm font-medium mb-4 shadow-sm">
            INDUSTRIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ideal For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Discover how Ethan transforms customer communication across industries
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industries[currentSlide].color} opacity-20 z-10 transition-opacity duration-500`} />
                  <Image
                    key={currentSlide}
                    src={industries[currentSlide].image}
                    alt={industries[currentSlide].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                <div className="p-8 sm:p-12 flex flex-col justify-center min-h-[400px]">
                  <div className={`inline-flex items-center gap-3 mb-6 w-fit px-4 py-2 rounded-full bg-gradient-to-r ${industries[currentSlide].color} transition-all duration-500`}>
                    {(() => {
                      const Icon = industries[currentSlide].icon
                      return <Icon className="text-white" size={24} />
                    })()}
                    <span className="text-white font-bold">{industries[currentSlide].title}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 transition-opacity duration-500">
                    {industries[currentSlide].description}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed transition-opacity duration-500">
                    {industries[currentSlide].details}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  prevSlide()
                  setIsAutoPlaying(false)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-gray-800 group-hover:text-gold transition-colors" size={24} />
              </button>

              <button
                onClick={() => {
                  nextSlide()
                  setIsAutoPlaying(false)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-20 group"
                aria-label="Next slide"
              >
                <ChevronRight className="text-gray-800 group-hover:text-gold transition-colors" size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    currentSlide === index
                      ? 'w-12 h-12 bg-gradient-to-r from-gold to-accent-600 scale-110'
                      : 'w-10 h-10 bg-white hover:bg-gray-100'
                  } rounded-full shadow-md hover:shadow-lg flex items-center justify-center`}
                  aria-label={`Go to ${industry.title}`}
                >
                  <Icon 
                    className={currentSlide === index ? 'text-white' : 'text-gray-600'} 
                    size={currentSlide === index ? 20 : 18} 
                  />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
