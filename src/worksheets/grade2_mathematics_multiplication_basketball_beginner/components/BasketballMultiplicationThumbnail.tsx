import React from 'react';

const BasketballMultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-br from-orange-800 to-orange-900 font-sans relative">
      {/* Basketball Court Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/20" />
          {/* Center Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white/20" />
          {/* Three Point Lines */}
          <div className="absolute top-1/4 left-8 right-8 h-1 bg-white/20" />
          <div className="absolute bottom-1/4 left-8 right-8 h-1 bg-white/20" />
        </div>
      </div>

      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {/* Header - Basketball Hoop Design */}
          <div className="relative bg-indigo-600/90 text-white p-4">
            {/* Basketball Net Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-3 h-full">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border-t border-l border-white" />
                ))}
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-xl font-bold text-center relative z-10">
              Score Points with 7s! 🏀
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gradient-to-b from-orange-700/90 to-orange-800/90 p-6">
            <div className="grid grid-cols-3 gap-3">
              {/* Example Cards */}
              <div className="bg-indigo-600 text-white rounded-lg p-3 transform rotate-[-3deg] hover:rotate-0 transition-transform">
                <div className="text-center">
                  <span className="text-2xl font-bold">7 × 4</span>
                  <div className="mt-1 text-sm opacity-75">Question</div>
                </div>
              </div>
              <div className="bg-orange-400 text-indigo-900 rounded-lg p-3 transform rotate-[3deg] hover:rotate-0 transition-transform">
                <div className="text-center">
                  <span className="text-2xl font-bold">28</span>
                  <div className="mt-1 text-sm opacity-75">Answer</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center">
                <div className="relative">
                  <span className="text-3xl">🏀</span>
                  <span className="absolute -top-1 -right-1 text-sm bg-orange-400 text-indigo-900 rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    !
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Scoreboard Style */}
          <div className="bg-black/80 text-white p-2">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-indigo-900/80 px-3 py-1 rounded text-sm">
                7×1
              </div>
              <div className="text-orange-400 font-bold">TO</div>
              <div className="bg-indigo-900/80 px-3 py-1 rounded text-sm">
                7×10
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">🏀</div>
      <div className="absolute bottom-4 right-4 text-4xl animate-bounce delay-300">🏀</div>
      <div className="absolute top-1/4 right-8 text-2xl animate-bounce delay-150">⬆️</div>
      <div className="absolute bottom-1/4 left-8 text-2xl animate-bounce delay-500">⬆️</div>
    </div>
  );
};

export default BasketballMultiplicationThumbnail; 