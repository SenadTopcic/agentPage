import { Hotel, Stethoscope, UtensilsCrossed, ShoppingBag, Briefcase, Headphones, Building2 } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Hotels, resorts and spas. Booking inquiries, policy questions, room availability, and 24/7 reception.',
      color: 'from-gold to-accent-600',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Clinics. Appointment scheduling, reminders, directions, and patient routing.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurants',
      description: 'Reservations, opening hours, menu questions, and special requests.',
      color: 'from-orange-600 to-amber-700',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce & Retail',
      description: 'Online stores and retail chains. Order status, returns, product questions, and customer support.',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Law firms, agencies and consultancies. Client intake, scheduling, document requests, and billing support.',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'FAQ handling, status checks, message taking, and intelligent triage.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Building2,
      title: 'Any Customer-Facing Business',
      description: 'If you take calls, Ethan can handle them. Fully customized to your workflows and systems.',
      color: 'from-gray-600 to-gray-700',
    },
  ]

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-bronze rounded-full text-sm font-medium mb-4">
            INDUSTRIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ideal For
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
