import { Phone, MessageSquare, Calendar, Users, Shield, Zap } from 'lucide-react'

export default function Capabilities() {
  const capabilities = [
    {
      icon: Phone,
      title: 'Instant Call Answering',
      description: 'Answer inbound calls instantly — no menus, no "press 1", no wait times.',
      color: 'from-gold to-accent-600',
    },
    {
      icon: MessageSquare,
      title: 'Smart Conversations',
      description: 'Handle common questions about hours, policies, services, pricing, and availability naturally.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Calendar,
      title: 'Booking Management',
      description: 'Create and update reservations or appointments, collecting customer details seamlessly.',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: Users,
      title: 'Intelligent Routing',
      description: 'Route to humans when needed based on request complexity, ensuring the right help every time.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Accurate & Reliable',
      description: 'Prevent "made up" answers — stays within your business scope and never guesses.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Multi-Channel Support',
      description: 'Support web-based conversations in addition to phone, meeting customers where they are.',
      color: 'from-indigo-500 to-blue-600',
    },
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Powerful features designed to handle your customer interactions with precision and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
