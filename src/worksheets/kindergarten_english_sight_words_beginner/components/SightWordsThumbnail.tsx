import React from 'react';

const PREVIEW_COLORS = [
  'bg-pink-200',
  'bg-purple-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200'
];

const SightWordsThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-6 flex items-center justify-center">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12 opacity-20"></div>
        
        <div className="h-full flex flex-col relative">
          {/* Title with decorative underline */}
          <h1 className="text-xl font-bold text-center text-blue-600 mb-4 relative">
            Sight Words Word Search
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </h1>

          {/* Preview Content */}
          <div className="flex-1 flex gap-4">
            {/* Mini Word Grid with colorful cells */}
            <div className="flex-1 bg-blue-50 p-3 rounded-lg border-2 border-blue-100">
              <div className="grid grid-cols-5 gap-1">
                {Array(20).fill(null).map((_, index) => {
                  const isHighlighted = index % 7 === 0;
                  const color = isHighlighted ? PREVIEW_COLORS[Math.floor(index / 7) % PREVIEW_COLORS.length] : 'bg-white';
                  return (
                    <div
                      key={index}
                      className={`
                        w-6 h-6 rounded flex items-center justify-center
                        text-xs font-bold border border-blue-200 transition-transform
                        ${color} ${isHighlighted ? 'scale-105 shadow-sm' : ''}
                      `}
                    >
                      {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Word List Preview with animations */}
            <div className="w-32">
              <div className="space-y-2">
                {[
                  { emoji: '👥', word: 'THEY', color: 'bg-pink-100' },
                  { emoji: '👆', word: 'THIS', color: 'bg-purple-100' },
                  { emoji: '🙏', word: 'WANT', color: 'bg-blue-100' },
                  { emoji: '🚶', word: 'COME', color: 'bg-green-100' },
                  { emoji: '✨', word: 'PLAY', color: 'bg-yellow-100' }
                ].map(({ emoji, word, color }, index) => (
                  <div
                    key={word}
                    className={`
                      flex items-center gap-1 p-1.5 rounded-lg
                      ${color} transform hover:scale-105 transition-transform
                      ${index === 0 ? 'animate-pulse' : ''}
                    `}
                  >
                    <span className="text-lg">{emoji}</span>
                    <span className="text-xs font-bold">{word}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with icon */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <span className="text-sm font-medium text-blue-600">
                Find and highlight words!
              </span>
              <span className="text-lg">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightWordsThumbnail; 