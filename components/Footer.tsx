export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-bronze rounded-full flex items-center justify-center shadow-md border-2 border-gold/30">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent leading-tight">
                ETHAN
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide -mt-1">
                by Vanadium
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">
              <span className="font-semibold text-white">Vanadium s.r.o.</span>
            </p>
            <p className="text-gray-400">
              © 2025 Vanadium s.r.o. All rights reserved.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-1">Contact us:</p>
            <a
              href="mailto:sales@vanadium.solutions"
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              sales@vanadium.solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
