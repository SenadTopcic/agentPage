import { Check } from 'lucide-react'

export default function Capabilities() {
  const capabilities = [
    'Answer inbound calls instantly — no menus, no "press 1"',
    'Handle common questions (hours, policies, services, pricing, availability)',
    'Create and update reservations / appointments',
    'Collect customer details naturally (name, phone, dates, preferences)',
    'Route to humans when needed based on request complexity',
    'Take messages after hours and deliver summaries',
    'Support web-based conversations in addition to phone',
    'Prevent "made up" answers — stays within your business scope',
  ]

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white text-bronze rounded-full text-sm font-medium mb-4 shadow-sm">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Ethan Can Do
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group hover:bg-amber-50 p-4 rounded-xl transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-gold to-accent-600 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                  <Check className="text-white" size={16} strokeWidth={3} />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
