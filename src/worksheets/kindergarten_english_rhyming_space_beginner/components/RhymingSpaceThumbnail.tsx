import React from 'react';

const PREVIEW_COLORS = [
  'bg-indigo-100',
  'bg-purple-100',
  'bg-violet-100',
  'bg-fuchsia-100'
];

const RhymingSpaceThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 relative overflow-hidden">
        {/* Decorative space elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full -ml-12 -mb-12 opacity-20"></div>
        
        <div className="h-full flex flex-col relative">
          {/* Title with decorative underline */}
          <h1 className="text-xl font-bold text-center text-indigo-600 mb-4 relative">
            Space Rhyming Words
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
          </h1>

          {/* Preview Content */}
          <div className="flex-1 flex gap-4">
            {/* Mini Word Grid */}
            <div className="flex-1 bg-indigo-50 p-3 rounded-lg border-2 border-indigo-100">
              <div className="grid grid-cols-4 gap-1">
                {[
                  'S', 'T', 'A', 'R',
                  'M', 'O', 'O', 'N',
                  'F', 'A', 'R', '⭐',
                  'S', 'O', 'O', 'N'
                ].map((letter, index) => {
                  const isHighlighted = [0, 1, 2, 3, 8, 9, 10].includes(index);
                  const color = isHighlighted ? PREVIEW_COLORS[Math.floor(index / 4)] : 'bg-white';
                  return (
                    <div
                      key={index}
                      className={`
                        w-7 h-7 rounded flex items-center justify-center
                        text-sm font-bold border border-indigo-200 transition-transform
                        ${color} ${isHighlighted ? 'scale-105 shadow-sm' : ''}
                      `}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rhyming Pairs Preview */}
            <div className="w-32">
              <div className="space-y-2">
                {[
                  { emoji: '⭐', words: ['STAR', 'FAR'] },
                  { emoji: '🌙', words: ['MOON', 'SOON'] },
                  { emoji: '🚀', words: ['SPACE', 'RACE'] }
                ].map(({ emoji, words }, index) => (
                  <div
                    key={words.join('-')}
                    className={`
                      flex items-center gap-1 p-1.5 rounded-lg
                      ${PREVIEW_COLORS[index]} transform hover:scale-105 transition-transform
                      ${index === 0 ? 'animate-pulse' : ''}
                    `}
                  >
                    <span className="text-lg">{emoji}</span>
                    <div className="text-xs">
                      <div className="font-bold">{words[0]}</div>
                      <div className="font-bold">{words[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with icon */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
              <span className="text-sm font-medium text-indigo-600">
                Find rhyming pairs!
              </span>
              <span className="text-lg">🎵</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RhymingSpaceThumbnail; 