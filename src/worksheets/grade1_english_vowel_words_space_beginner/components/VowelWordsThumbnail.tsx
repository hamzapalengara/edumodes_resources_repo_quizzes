import React from 'react';

const VowelWordsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-6 relative overflow-hidden">
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
              {['🌟', '✨', '💫', '⭐', '🌠', '🚀', '🛸', '🌌'][i % 8]}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-purple-300 mb-4 text-center">
            Cosmic Vowel Quest
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { word: 'air', isVowel: true },
              { word: 'star', isVowel: false },
              { word: 'ice', isVowel: true },
              { word: 'moon', isVowel: false },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  w-full aspect-square rounded-lg flex items-center justify-center text-sm font-bold
                  ${item.isVowel 
                    ? 'bg-purple-900/50 ring-2 ring-purple-400 text-purple-200' 
                    : 'bg-black/20 ring-1 ring-indigo-300/30 text-indigo-300/50'}
                `}
              >
                {item.word}
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🚀</span>
              <span className="text-sm text-purple-200">Find vowel stars</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌌</span>
              <span className="text-sm text-purple-200">Space adventure</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span className="text-sm text-purple-200">Cosmic animations</span>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-10px) rotate(5deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default VowelWordsThumbnail; 