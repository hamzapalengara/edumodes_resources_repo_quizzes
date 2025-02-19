import React from 'react';

const AthleticsMultiplicationThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900 font-sans relative">
      {/* Track Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Track Lanes */}
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-white/20" />
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20" />
          <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-white/20" />
          
          {/* Lane Numbers */}
          <div className="absolute top-1/4 left-4 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white text-sm">1</div>
          <div className="absolute top-1/2 left-4 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white text-sm">2</div>
          <div className="absolute bottom-1/4 left-4 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white text-sm">3</div>
        </div>
      </div>

      <div className="w-[420px] h-[240px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header - Track Design */}
        <div className="relative bg-blue-800/90 text-white p-4">
          {/* Track Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-12 grid-rows-3 h-full">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-t border-l border-white" />
              ))}
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-xl font-bold text-center relative z-10">
            Sprint with 9s! 🏃
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-b from-blue-700/90 to-blue-800/90 p-6">
          <div className="flex justify-around items-center">
            {/* Example Cards */}
            <div className="bg-blue-800 text-white rounded-lg p-3 transform rotate-[-3deg] hover:rotate-0 transition-transform">
              <div className="text-center">
                <span className="text-2xl font-bold">9 × 4</span>
                <div className="mt-1 text-sm opacity-75">Question</div>
              </div>
            </div>
            <div className="bg-orange-500 text-white rounded-lg p-3 transform rotate-[3deg] hover:rotate-0 transition-transform">
              <div className="text-center">
                <span className="text-2xl font-bold">36</span>
                <div className="mt-1 text-sm opacity-75">Answer</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center">
              <div className="relative">
                <span className="text-3xl">🏃</span>
                <span className="absolute -top-1 -right-1 text-sm bg-yellow-400 text-blue-900 rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  !
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Scoreboard Style */}
        <div className="bg-black/80 text-white p-2">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-blue-900/80 px-3 py-1 rounded text-sm">
              9×1
            </div>
            <div className="text-yellow-400 font-bold">TO</div>
            <div className="bg-blue-900/80 px-3 py-1 rounded text-sm">
              9×10
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce">🏃</div>
      <div className="absolute bottom-4 right-4 text-4xl animate-bounce delay-300">🏃</div>
      <div className="absolute top-1/4 right-8 text-2xl animate-bounce delay-150">⬆️</div>
      <div className="absolute bottom-1/4 left-8 text-2xl animate-bounce delay-500">⬆️</div>
    </div>
  );
};

export default AthleticsMultiplicationThumbnail; 