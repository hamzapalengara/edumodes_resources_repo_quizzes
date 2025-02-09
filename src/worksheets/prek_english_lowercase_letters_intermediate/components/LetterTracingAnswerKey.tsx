import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-200 via-yellow-100 to-emerald-100 bg-[url('/jungle-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-emerald-300/90 to-yellow-200/90 shadow-lg backdrop-blur-sm">
        <div className="py-4 px-4">
          <div className="flex items-center justify-between">
            {/* Edumodes Logo */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline leading-none">
                <span className="text-lg sm:text-xl font-black text-[#EC4899]">E</span>
                <span className="text-base sm:text-lg font-black text-sky-500 -ml-0.5">d</span>
                <span className="text-base sm:text-lg font-black text-indigo-500">u</span>
                <span className="text-lg sm:text-xl font-black text-[#EAB308] ml-0.5">M</span>
                <span className="text-base sm:text-lg font-black text-emerald-500 -ml-0.5">o</span>
                <span className="text-base sm:text-lg font-black text-teal-500">d</span>
                <span className="text-base sm:text-lg font-black text-green-500">e</span>
                <span className="text-base sm:text-lg font-black text-teal-500">s</span>
              </div>
              <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-300 hover:text-white leading-tight truncate">www.edumodes.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-emerald-400/30 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-900 text-center py-3">
          Jungle Letter Adventure: k to t - Answer Key
        </h1>
      </div>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl p-4">
        <div className="bg-emerald-400/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Letter Tracing Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LETTERS.map((letter) => (
              <div key={letter.char} className="bg-emerald-400/30 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl font-bold text-emerald-900">{letter.char}</span>
                  <span className="text-3xl">{letter.objectEmoji}</span>
                  <span className="text-lg text-emerald-900">{letter.object}</span>
                </div>

                <div className="relative aspect-square w-full max-w-[200px] mx-auto mb-3">
                  <svg viewBox={letter.viewBox} className="w-full h-full">
                    {letter.paths.map((path) => (
                      <g key={path.id}>
                        <path
                          d={path.d}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.5)"
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

                <div className="space-y-2">
                  <h3 className="font-semibold text-emerald-900">Tracing Steps:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-emerald-900">
                    {letter.paths.map((path) => (
                      <li key={path.id} className="text-sm">
                        {path.id === 'stem' && 'Draw the main vertical line'}
                        {path.id === 'stem1' && 'Draw the first vertical line'}
                        {path.id === 'stem2' && 'Draw the second vertical line'}
                        {path.id === 'cross' && 'Draw the horizontal line'}
                        {path.id === 'curve' && 'Draw the curved line'}
                        {path.id === 'circle' && 'Draw the circle'}
                        {path.id === 'diagonal1' && 'Draw the first diagonal line'}
                        {path.id === 'diagonal2' && 'Draw the second diagonal line'}
                        {path.id === 'arch' && 'Draw the arch'}
                        {path.id === 'arch1' && 'Draw the first arch'}
                        {path.id === 'arch2' && 'Draw the second arch'}
                        {path.id === 'tail' && 'Draw the tail'}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-emerald-400/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">General Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-emerald-900">
            <li>Start each letter at the indicated starting point (green dot)</li>
            <li>Follow the paths in the order shown</li>
            <li>Take your time and practice each stroke carefully</li>
            <li>Make sure to complete each stroke before moving to the next</li>
            <li>Practice makes perfect - don't worry if it takes multiple attempts!</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default LetterTracingAnswerKey; 