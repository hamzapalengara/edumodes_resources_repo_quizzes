import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingThumbnail: React.FC = () => {
  // Select a few letters to display in the thumbnail
  const displayLetters = [LETTERS[0], LETTERS[4], LETTERS[8]]; // k, o, s

  return (
    <div className="w-[500px] h-[375px] bg-gradient-to-br from-pink-500 to-yellow-500 flex items-center justify-center p-10">
      <div className="w-[420px] h-[240px] bg-white rounded-xl shadow-xl p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-2xl font-bold text-emerald-900">Jungle Letters: k to t</h1>
        </div>

        <div className="flex-1 flex items-center justify-center gap-8">
          {displayLetters.map((letter) => (
            <div key={letter.char} className="flex flex-col items-center">
              <div className="relative w-20 h-20">
                <svg viewBox={letter.viewBox} className="w-full h-full">
                  {letter.paths.map((path) => (
                    <g key={path.id}>
                      <path
                        d={path.d}
                        fill="none"
                        stroke="rgba(16, 185, 129, 0.2)"
                        strokeWidth="24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={path.d}
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  ))}
                </svg>
              </div>
              <span className="text-3xl mt-2">{letter.objectEmoji}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-emerald-900">Level:</span>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-900 rounded text-sm">Intermediate</span>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i < 5 ? 'bg-emerald-500' : 'bg-emerald-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterTracingThumbnail; 