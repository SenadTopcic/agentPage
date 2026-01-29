import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Capabilities from '@/components/Capabilities'
import Industries from '@/components/Industries'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import DemoForm from '@/components/DemoForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Industries />
      <Capabilities />
      <HowItWorks />
      <FAQ />
      <DemoForm />
      <Footer />
    </main>
  )
}
