import React from 'react';

const WordOppositesThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
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
              {['🛍️', '🏬', '💰', '🎁', '🛒', '🏪', '💎', '🏷️'][i % 8]}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center">
            Mall Opposites Match
          </h1>

          {/* Preview grid */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { word: 'buy', isSelected: true },
              { word: 'sell', isSelected: true },
              { word: 'expensive', isSelected: false },
              { word: 'cheap', isSelected: false },
            ].map((item, index) => (
              <div
                key={index}
                className={`
                  w-full aspect-square rounded-lg flex items-center justify-center text-sm font-bold
                  ${item.isSelected 
                    ? 'bg-gradient-to-br from-pink-400 to-pink-500 text-white ring-2 ring-pink-400 ring-opacity-50' 
                    : 'bg-gradient-to-br from-gray-50 to-white hover:from-pink-50 hover:to-purple-50 ring-1 ring-pink-200 text-gray-600'}
                `}
              >
                {item.word}
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛍️</span>
              <span className="text-sm text-gray-600">Match opposites</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏬</span>
              <span className="text-sm text-gray-600">Shopping theme</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span className="text-sm text-gray-600">Fun animations</span>
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

export default WordOppositesThumbnail; 