import React from 'react';
import { motion } from 'framer-motion';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1C48] via-[#1B3B8C] to-[#0B1C48] bg-[url('/space-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-black/80 to-gray-900/80 shadow-lg backdrop-blur-sm border-b border-gray-700">
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
              <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-400 hover:text-white leading-tight truncate">www.edumodes.com</a>
            </div>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-black/50 backdrop-blur-sm shadow-lg border-b border-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center py-3 flex items-center justify-center gap-3">
          <span>🛸</span>
          <span>Space Letters: Answer Key</span>
          <span>👨‍🚀</span>
        </h1>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LETTERS.map((letter) => (
            <div key={letter.char} className="bg-black/40 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl font-bold text-white">{letter.char}</span>
                <span className="text-2xl filter drop-shadow-md">{letter.objectEmoji}</span>
              </div>
              
              <div className="relative aspect-square mb-3">
                <svg
                  viewBox={letter.viewBox}
                  className="w-full h-full"
                >
                  {letter.paths.map((path, pathIndex) => (
                    <g key={path.id}>
                      <path
                        d={path.d}
                        className="stroke-blue-400"
                        fill="none"
                        strokeWidth="28"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <motion.path
                        d={path.d}
                        fill="none"
                        strokeWidth="28"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-blue-500"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          delay: pathIndex * 0.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: (letter.paths.length - 1) * 0.5 + 1
                        }}
                      />
                    </g>
                  ))}
                </svg>
                
                {letter.paths.map((path, pathIndex) => (
                  <div
                    key={path.id}
                    className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-bold"
                    style={{
                      transform: `translate(${pathIndex * 2.5}rem, -1rem)`
                    }}
                  >
                    {pathIndex + 1}
                  </div>
                ))}
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-200">
                  <span className="font-semibold">Example Word:</span> {letter.object}
                </p>
                <p className="text-sm text-gray-300">
                  Follow the numbered steps to trace the letter correctly.
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