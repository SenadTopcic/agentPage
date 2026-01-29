import Image from 'next/image'

export default function Features() {
  const features = [
    {
      title: 'Never Miss a Call Again',
      description: 'Ethan answers immediately, even during peak hours and outside business hours—reducing lost bookings, missed leads, and abandoned callers.',
      image: '/images/always-available.png',
      imageAlt: 'AI answering calls 24/7',
    },
    {
      title: 'Reduce Staffing Pressure',
      description: 'Handle routine questions, bookings, updates, and simple requests automatically—freeing human staff for high-value work.',
      image: '/images/reduce-staffing.png',
      imageAlt: 'Team focusing on high-value work',
    },
    {
      title: 'Consistent Experience',
      description: 'Ethan speaks in a controlled style aligned to your company tone and policies—delivering the same quality response every time.',
      image: '/images/consistent-quality.png',
      imageAlt: 'Consistent customer experience',
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitoring, call analytics, transcripts, and insights that help you understand your customers better and optimize operations.',
      image: '/images/analytics.png',
      imageAlt: 'Real-time analytics dashboard',
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

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-accent-600/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-gold to-accent-600 text-white rounded-full text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
