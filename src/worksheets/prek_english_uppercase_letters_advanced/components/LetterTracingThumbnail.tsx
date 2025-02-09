import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingThumbnail: React.FC = () => {
  // Select representative letters for the thumbnail (U, V, Z)
  const previewLetters = [LETTERS[0], LETTERS[1], LETTERS[5]];

  return (
    <div className="w-[500px] h-[375px] p-4 bg-gradient-to-b from-[#0B1C48] via-[#1B3B8C] to-[#0B1C48] bg-[url('/space-bg.png')] bg-cover bg-center bg-blend-soft-light">
      <div className="w-[420px] h-[240px] mx-auto bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-4 border-2 border-gray-700">
        {/* Title */}
        <h1 className="text-xl font-bold text-white mb-3 text-center">
          Space Letter Adventure
        </h1>
        
        {/* Preview Grid */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          {previewLetters.map((letter) => (
            <div key={letter.char} className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-gray-700 flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-2xl font-bold text-white">{letter.char}</span>
                <span className="text-xl filter drop-shadow-md">{letter.objectEmoji}</span>
              </div>
              
              <svg
                viewBox={letter.viewBox}
                className="w-full aspect-square"
              >
                {letter.paths.map((path) => (
                  <path
                    key={path.id}
                    d={path.d}
                    className="stroke-blue-400"
                    fill="none"
                    strokeWidth="28"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
              </svg>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
          <span className="flex items-center gap-1">
            <span>🔊</span> Audio
          </span>
          <span className="flex items-center gap-1">
            <span>✍️</span> Interactive
          </span>
          <span className="flex items-center gap-1">
            <span>🚀</span> Space Theme
          </span>
        </div>
      </div>
    </div>
  );
};

export default LetterTracingThumbnail; 