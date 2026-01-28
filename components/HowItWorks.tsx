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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white text-bronze rounded-full text-sm font-medium mb-4 shadow-sm">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built Around Your Business,<br />Not the Other Way Around
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            We don't give you a generic bot. We build a custom AI agent designed specifically for how YOUR business operates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
