import React from 'react';

const PREVIEW_COLORS = [
  'bg-violet-100',
  'bg-indigo-100',
  'bg-blue-100',
  'bg-green-100'
];

const AntonymThumbnail: React.FC = () => {
  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center p-4">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6">
        <div className="h-full flex flex-col">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-violet-600 mb-4">
            Intermediate Antonyms
          </h1>

          {/* Preview Content */}
          <div className="flex-1 flex gap-4">
            {/* Mini Grid */}
            <div className="flex-1 bg-violet-50 p-3 rounded-lg">
              <div className="grid grid-cols-4 gap-1">
                {[
                  'C', 'R', 'E', 'A',
                  'B', 'R', 'A', 'V',
                  'W', 'E', 'A', 'K',
                  'L', 'E', 'A', 'D'
                ].map((letter, index) => {
                  const isHighlighted = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11].includes(index);
                  const color = isHighlighted ? PREVIEW_COLORS[Math.floor(index / 4)] : 'bg-white';
                  return (
                    <div
                      key={index}
                      className={`
                        w-8 h-8 flex items-center justify-center
                        text-sm font-bold rounded border border-violet-200
                        ${color} ${isHighlighted ? 'scale-105 shadow-sm' : ''}
                        transition-transform duration-200
                      `}
                    >
                      {letter}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Word List Preview */}
            <div className="w-32">
              <div className="space-y-2">
                {[
                  { emoji: '🎨', word: 'CREATE' },
                  { emoji: '🦁', word: 'BRAVE' },
                  { emoji: '💪', word: 'STRONG' }
                ].map(({ emoji, word }, index) => (
                  <div
                    key={word}
                    className={`
                      flex items-center gap-1 p-1.5 rounded-lg
                      ${PREVIEW_COLORS[index]} transform hover:scale-105
                      transition-transform duration-200
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

          {/* Footer */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-full">
              <span className="text-sm font-medium text-violet-600">
                Find the opposites!
              </span>
              <span className="text-lg">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntonymThumbnail; 