import React from 'react';

const WordOppositesThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 relative overflow-hidden border border-blue-500/30">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: Math.random() * 20 + 20 + 'px',
              }}
            >
              {['💻', '🚀', '🌐', '👓', '🔗', '🔒', '⚡', '🤖'][i % 8]}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-blue-300 mb-4 text-center">
            Future Tech Opposites
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { word: 'digital', isSelected: true },
              { word: 'analog', isSelected: true },
              { word: 'virtual', isSelected: false },
              { word: 'physical', isSelected: false },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  w-full aspect-square rounded-lg flex items-center justify-center text-sm font-bold
                  ${item.isSelected 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-blue-100 ring-2 ring-blue-400 ring-opacity-50' 
                    : 'bg-black/30 text-blue-300 ring-1 ring-blue-500/30'}
                `}
              >
                {item.word}
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎮</span>
              <span className="text-sm text-blue-200">Tech opposites game</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌌</span>
              <span className="text-sm text-blue-200">Futuristic theme</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span className="text-sm text-blue-200">Cyber animations</span>
            </div>
          </div>
        </div>

        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-glow"></div>

        <style>
          {`
            @keyframes glow {
              0%, 100% { transform: translateX(-100%); }
              50% { transform: translateX(100%); }
            }
            .animate-glow {
              animation: glow 3s infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default WordOppositesThumbnail; 