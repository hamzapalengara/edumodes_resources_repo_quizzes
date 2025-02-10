import React from 'react';

const WordUnscrambleThumbnail: React.FC = () => {
  return (
    // Outer container: 500x375px (4:3 ratio)
    <div className="w-[500px] h-[375px] bg-gradient-to-r from-pink-300 to-rose-300 flex items-center justify-center">
      {/* Inner container: 420x240px */}
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-pink-600 mb-2 text-center font-system">
          Flower Word Garden
        </h1>
        
        {/* Preview of content */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-4xl">🌹</span>
          <span className="text-base text-gray-500 font-system">→</span>
          <span className="text-base text-gray-500 font-system">ROSE</span>
        </div>
        
        {/* Preview of game elements */}
        <div className="flex items-center gap-3">
          {/* Jumbled letters */}
          <div className="flex gap-1 relative">
            {['O', 'S', 'E', 'R'].map((letter) => (
              <div
                key={letter}
                className="w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center border-2 border-pink-200"
              >
                <span className="text-sm font-bold text-pink-600">{letter}</span>
              </div>
            ))}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-gray-500">
              unscramble
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4 text-center font-system">
          Learn flower words through fun unscrambling!
        </p>
      </div>
    </div>
  );
};

export default WordUnscrambleThumbnail; 