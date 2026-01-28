import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethan - Enterprise AI Voice Agent | 24/7 Call Handling',
  description: 'Ethan answers every call with enterprise-grade AI — 24/7, multilingual, and built for real business operations.',
  keywords: 'AI voice agent, call handling, business automation, customer service, multilingual support',
  openGraph: {
    title: 'Ethan - Enterprise AI Voice Agent',
    description: 'The AI Voice Agent That Handles Calls, Bookings, and Workflows — 24/7',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
