import React from 'react';

const TennisMultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-br from-green-500 to-green-700 font-sans relative">
      {/* Tennis Court Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Center Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white/30" />
          {/* Service Lines */}
          <div className="absolute top-1/4 left-1/4 right-1/4 h-1 bg-white/30" />
          <div className="absolute bottom-1/4 left-1/4 right-1/4 h-1 bg-white/30" />
        </div>
      </div>

      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {/* Header - Tennis Net Design */}
          <div className="relative bg-green-800/90 text-white p-4">
            {/* Tennis Net Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-l border-white last:border-r h-full" />
                ))}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-xl font-bold text-center relative z-10">
              Match & Score! 🎾
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gradient-to-b from-green-700/90 to-green-800/90 p-6">
            <div className="grid grid-cols-3 gap-3">
              {/* Example Cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 transform rotate-[-3deg] hover:rotate-0 transition-transform">
                <div className="text-white text-center">
                  <span className="text-2xl font-bold">4 × 5</span>
                  <div className="mt-1 text-sm opacity-75">Question</div>
                </div>
              </div>
              <div className="bg-yellow-400 rounded-lg p-3 transform rotate-[3deg] hover:rotate-0 transition-transform">
                <div className="text-green-900 text-center">
                  <span className="text-2xl font-bold">20</span>
                  <div className="mt-1 text-sm opacity-75">Answer</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center">
                <div className="relative">
                  <span className="text-3xl">🎾</span>
                  <span className="absolute -top-1 -right-1 text-sm bg-yellow-400 text-green-900 rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    !
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Scoreboard Style */}
          <div className="bg-black/80 text-white p-2">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-green-900/80 px-3 py-1 rounded text-sm">
                4×1
              </div>
              <div className="text-yellow-400 font-bold">TO</div>
              <div className="bg-green-900/80 px-3 py-1 rounded text-sm">
                4×10
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">🎾</div>
      <div className="absolute bottom-4 right-4 text-4xl animate-bounce delay-300">🎾</div>
      <div className="absolute top-1/4 right-8 text-2xl animate-bounce delay-150">🎾</div>
      <div className="absolute bottom-1/4 left-8 text-2xl animate-bounce delay-500">🎾</div>
    </div>
  );
};

export default TennisMultiplicationThumbnail; 