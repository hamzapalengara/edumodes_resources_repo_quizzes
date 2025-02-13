import React from 'react';

const MultiplicationSpaceAdvancedThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 flex flex-wrap items-center justify-center p-4 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="text-2xl mx-2">
            {i % 2 === 0 ? '🚀' : '⭐'}
          </span>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="w-[420px] h-[240px] bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border-2 border-purple-500/30 p-6 relative">
        {/* Title */}
        <h1 className="text-2xl font-bold text-purple-300 text-center mb-2">
          Space Groups Multiplication
        </h1>
        <p className="text-lg text-purple-400 text-center mb-4">
          Numbers 5-10
        </p>

        {/* Example Problems */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-2">
            <div className="bg-black/30 rounded-lg p-2">
              <div className="text-purple-300 text-sm mb-1">Station Alpha</div>
              <div className="flex justify-center space-x-1">
                {'🚀 🚀 🚀 🚀 🚀 🚀'.split(' ').map((emoji, i) => (
                  <span key={i} className="text-lg">{emoji}</span>
                ))}
              </div>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-2 text-center text-purple-300">
              6 × 8 = 48
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <div className="bg-black/30 rounded-lg p-2">
              <div className="text-purple-300 text-sm mb-1">Station Beta</div>
              <div className="flex justify-center space-x-1">
                {'🌠 🌠 🌠 🌠 🌠 🌠 🌠'.split(' ').map((emoji, i) => (
                  <span key={i} className="text-lg">{emoji}</span>
                ))}
              </div>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-2 text-center text-purple-300">
              7 × 9 = 63
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2">
          <span className="text-2xl">🌍</span>
          <span className="text-purple-400">→</span>
          <span className="text-2xl">🌌</span>
        </div>
      </div>
    </div>
  );
};

export default MultiplicationSpaceAdvancedThumbnail; 