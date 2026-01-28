import { Phone, Users, Shield, Globe, BarChart3, CheckCircle2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Phone,
      title: 'Never Miss a Call Again',
      description: 'Ethan answers immediately, even during peak hours and outside business hours—reducing lost bookings, missed leads, and abandoned callers.',
      color: 'from-gold to-accent-600',
    },
    {
      icon: Users,
      title: 'Reduce Staffing Pressure',
      description: 'Handle routine questions, bookings, updates, and simple requests automatically—freeing human staff for high-value work.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Consistent Experience',
      description: 'Ethan speaks in a controlled style aligned to your company tone and policies—delivering the same quality response every time.',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Serve international customers without hiring multilingual staff. Same quality in multiple languages.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitoring, call analytics, transcripts, and robust error handling are first-class features.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: CheckCircle2,
      title: 'Predictable Quality',
      description: 'No "bad day" variance. No training gaps. No forgotten policy updates. Consistent excellence.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-bronze rounded-full text-sm font-medium mb-4">
            WHY ETHAN
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Companies Choose Ethan
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
