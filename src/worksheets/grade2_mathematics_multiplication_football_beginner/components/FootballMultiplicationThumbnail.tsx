import React from 'react';

const FootballMultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-green-400 font-sans relative">
      {/* Field Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white/30" />
          {/* Center Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white/30" />
        </div>
      </div>

      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {/* Header - Goal Post Design */}
          <div className="relative bg-green-800/90 text-white p-4">
            {/* Left Goal Post */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-12 border-2 border-white flex items-center justify-center">
              <div className="text-xl font-bold">2</div>
            </div>
            
            {/* Title */}
            <h1 className="text-xl font-bold text-center px-16">
              Match & Score! ⚽
            </h1>
            
            {/* Right Goal Post */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-12 border-2 border-white flex items-center justify-center">
              <div className="text-xl font-bold">×</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gradient-to-b from-green-700/90 to-green-800/90 p-6">
            <div className="grid grid-cols-3 gap-3">
              {/* Example Cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 transform rotate-[-3deg] hover:rotate-0 transition-transform">
                <div className="text-white text-center">
                  <span className="text-2xl font-bold">2 × 5</span>
                  <div className="mt-1 text-sm opacity-75">Question</div>
                </div>
              </div>
              <div className="bg-yellow-400 rounded-lg p-3 transform rotate-[3deg] hover:rotate-0 transition-transform">
                <div className="text-green-900 text-center">
                  <span className="text-2xl font-bold">10</span>
                  <div className="mt-1 text-sm opacity-75">Answer</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center">
                <div className="relative">
                  <span className="text-3xl">⚽</span>
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
                2×1
              </div>
              <div className="text-yellow-400 font-bold">TO</div>
              <div className="bg-green-900/80 px-3 py-1 rounded text-sm">
                2×10
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">⚽</div>
      <div className="absolute bottom-4 right-4 text-4xl animate-bounce delay-300">⚽</div>
      <div className="absolute top-1/4 right-8 text-2xl animate-bounce delay-150">⚽</div>
      <div className="absolute bottom-1/4 left-8 text-2xl animate-bounce delay-500">⚽</div>
    </div>
  );
};

export default FootballMultiplicationThumbnail; 