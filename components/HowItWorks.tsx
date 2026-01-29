import { Search, Pencil, Wrench, TestTube, Rocket, TrendingUp } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'DISCOVERY',
      description: 'We learn your business inside out—your workflows, customer types, common requests, edge cases, and the problems you need solved.',
      color: 'from-gold to-accent-600',
    },
    {
      number: '02',
      icon: Pencil,
      title: 'DESIGN',
      description: 'We map out exactly how Ethan will handle each scenario, what systems it connects to, and how it fits your team\'s process.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'BUILD',
      description: 'Your custom AI agent is developed with your tone, your rules, your integrations—configured to work like a trained employee.',
      color: 'from-orange-500 to-amber-600',
    },
    {
      number: '04',
      icon: TestTube,
      title: 'TEST & REFINE',
      description: 'We run real-world scenarios, fine-tune responses, and make sure Ethan handles your customers exactly right.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '05',
      icon: Rocket,
      title: 'GO LIVE',
      description: 'Ethan starts handling calls. We monitor closely and optimize based on actual performance data.',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '06',
      icon: TrendingUp,
      title: 'EVOLVE',
      description: 'Your business changes, Ethan adapts. Continuous updates, new capabilities, ongoing support—we grow with you.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-amber-100 text-bronze rounded-full text-sm font-medium mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built Around Your Business,<br />Not the Other Way Around
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            We don't give you a generic bot. We build a custom AI agent designed specifically for how YOUR business operates.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold via-accent-600 to-gold hidden lg:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  <div className={`flex-1 ${isEven ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}>
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white" size={28} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-400 mb-1">{step.number}</div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-gold rounded-full shadow-lg z-10" />

                  <div className="flex-1 hidden lg:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
