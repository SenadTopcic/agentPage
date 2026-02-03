'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navigation() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#industries', label: t.nav.industries },
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#faq', label: t.nav.faq },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image 
              src="/images/logo.png" 
              alt="Ethan Logo" 
              width={40} 
              height={40} 
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold font-cinzel text-gold leading-tight drop-shadow-md">
                ETHAN
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide -mt-1">
                by Vanadium
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection('#demo')}
              className="bg-gradient-to-r from-gold to-accent-600 text-white px-6 py-2.5 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-medium shadow-md"
            >
              {t.nav.requestDemo}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-gold rounded-lg transition-colors font-medium ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => scrollToSection('#demo')}
              className="block w-full bg-gradient-to-r from-gold to-accent-600 text-white px-4 py-3 rounded-lg hover:shadow-xl transition-all font-medium shadow-md"
            >
              {t.nav.requestDemo}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}