import React from 'react';

const NumberTracingTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100 bg-[url('/vehicles-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-sky-200/40 to-cyan-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <div className="py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Edumodes Logo */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline leading-none">
                <span className="text-lg sm:text-xl font-black text-[#EC4899]">E</span>
                <span className="text-base sm:text-lg font-black text-sky-500 -ml-0.5">d</span>
                <span className="text-base sm:text-lg font-black text-indigo-500">u</span>
                <span className="text-lg sm:text-xl font-black text-[#EAB308] ml-0.5">M</span>
                <span className="text-base sm:text-lg font-black text-emerald-500 -ml-0.5">o</span>
                <span className="text-base sm:text-lg font-black text-teal-500">d</span>
                <span className="text-base sm:text-lg font-black text-green-500">e</span>
                <span className="text-base sm:text-lg font-black text-teal-500">s</span>
              </div>
              <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-500 hover:text-gray-700 leading-tight truncate">www.edumodes.com</a>
            </div>
            <h1 className="text-xl font-bold text-cyan-900">Tips</h1>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 text-center py-3">
          Number Tracing: 11-20
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-white/40 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/50">
          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-cyan-900">Tips for Number Tracing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
                <h4 className="text-base md:text-lg font-semibold text-cyan-900 mb-2">Getting Started</h4>
                <ul className="list-disc list-inside text-sm md:text-base text-cyan-800 space-y-1">
                  <li>Start at the glowing dot for each stroke</li>
                  <li>Follow the light gray guide path</li>
                  <li>Complete each stroke before moving to the next</li>
                  <li>Take your time and practice steady movements</li>
                </ul>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
                <h4 className="text-base md:text-lg font-semibold text-cyan-900 mb-2">Practice Tips</h4>
                <ul className="list-disc list-inside text-sm md:text-base text-cyan-800 space-y-1">
                  <li>Use the vehicle dots to count and verify numbers</li>
                  <li>Say each number aloud as you trace</li>
                  <li>Notice how each vehicle represents a quantity</li>
                  <li>Practice counting vehicles in real life</li>
                </ul>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
                <h4 className="text-base md:text-lg font-semibold text-cyan-900 mb-2">Common Mistakes</h4>
                <ul className="list-disc list-inside text-sm md:text-base text-cyan-800 space-y-1">
                  <li>Starting from the wrong point</li>
                  <li>Tracing too quickly</li>
                  <li>Skipping parts of the number</li>
                  <li>Not following the guide path</li>
                </ul>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
                <h4 className="text-base md:text-lg font-semibold text-cyan-900 mb-2">Success Strategies</h4>
                <ul className="list-disc list-inside text-sm md:text-base text-cyan-800 space-y-1">
                  <li>Use the retry button if needed</li>
                  <li>Celebrate each completed number</li>
                  <li>Connect numbers to vehicle quantities</li>
                  <li>Practice regularly for better results</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberTracingTips; 