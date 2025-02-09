import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingThumbnail: React.FC = () => {
  // Select specific letters to display (u, w, z)
  const displayLetters = LETTERS.filter(l => ['u', 'w', 'z'].includes(l.char));

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-400 via-purple-300 to-pink-300 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        {/* Title */}
        <h1 className="text-2xl font-bold text-pink-900 mb-2 font-sans">
          Sweet Letter Adventure: u to z
        </h1>

        {/* Level Indicator */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-pink-700">Advanced</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
          </div>
        </div>

        {/* Preview Letters */}
        <div className="flex items-center justify-between mt-auto">
          {displayLetters.map((letter) => (
            <div key={letter.char} className="flex items-center gap-2">
              <span className="text-4xl font-bold text-pink-900">{letter.char}</span>
              <span className="text-2xl">{letter.objectEmoji}</span>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 text-2xl">🍬</div>
        <div className="absolute bottom-4 left-4 text-2xl">🍭</div>
      </div>
    </div>
  );
};

export default LetterTracingThumbnail; 