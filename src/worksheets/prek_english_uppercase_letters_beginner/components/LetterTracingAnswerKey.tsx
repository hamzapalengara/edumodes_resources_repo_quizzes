import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-emerald-200 bg-[url('/forest-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-emerald-800/90 to-emerald-700/90 shadow-lg backdrop-blur-sm">
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
      <div className="bg-white/80 backdrop-blur-sm shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center py-3">
          Letter Tracing Answer Key
        </h1>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LETTERS.map((letter) => (
            <div
              key={letter.char}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-emerald-100/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-emerald-800">{letter.char}</span>
                <span className="text-3xl">{letter.objectEmoji}</span>
              </div>
              
              <div className="relative aspect-square w-full mb-4">
                <svg
                  viewBox={letter.viewBox}
                  className="w-full h-full"
                >
                  {/* Background decoration */}
                  <circle cx="100" cy="100" r="80" fill="rgba(167, 243, 208, 0.2)" />
                  
                  {letter.paths.map((path) => (
                    <path
                      key={path.id}
                      d={path.d}
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>

              <div className="text-center text-emerald-800">
                <p className="font-medium">{letter.char} is for {letter.object}</p>
                <p className="text-sm mt-1 text-emerald-600">
                  {letter.paths.length} stroke{letter.paths.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LetterTracingAnswerKey; 