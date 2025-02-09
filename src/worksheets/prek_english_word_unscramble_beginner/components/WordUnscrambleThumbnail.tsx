import React from 'react';

const WordUnscrambleThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-blue-300 to-purple-300 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-purple-600 mb-2 text-center font-system">
          Unscramble Words
        </h1>
        
        {/* Preview of content */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-4xl">🐱</span>
          <span className="text-base text-gray-500 font-system">→</span>
          <span className="text-base text-gray-500 font-system">CAT</span>
        </div>
        
        {/* Preview of game elements */}
        <div className="flex items-center gap-3">
          {/* Jumbled letters */}
          <div className="flex gap-1 relative">
            {['T', 'C', 'A'].map((letter) => (
              <div
                key={letter}
                className="w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-purple-200"
              >
                <span className="text-sm font-bold text-purple-600">{letter}</span>
              </div>
            ))}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-gray-500">
              drag
            </div>
          </div>

          <span className="text-base">➡️</span>

          {/* Target boxes */}
          <div className="flex gap-1">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="w-8 h-8 rounded-lg bg-green-100 shadow-md flex items-center justify-center border-2 border-green-400"
              />
            ))}
          </div>
        </div>

        <p className="mt-2 text-xs text-gray-600 font-system">
          Drag letters to spell the word
        </p>
      </div>
    </div>
  );
};

export default WordUnscrambleThumbnail; 