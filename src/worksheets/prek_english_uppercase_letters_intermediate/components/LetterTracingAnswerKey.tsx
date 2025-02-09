import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-cyan-100 to-blue-200 bg-[url('/ocean-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-800/90 to-blue-700/90 shadow-lg backdrop-blur-sm">
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
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 text-center py-3">
          Ocean Letter Tracing Guide
        </h1>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LETTERS.map((letter) => (
            <div
              key={letter.char}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 border-2 border-blue-100/50 hover:border-blue-300/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-bold text-blue-800">{letter.char}</span>
                <span className="text-3xl filter drop-shadow-md">{letter.objectEmoji}</span>
              </div>
              
              <div className="relative aspect-square w-full mb-4">
                <svg
                  viewBox={letter.viewBox}
                  className="w-full h-full"
                >
                  {/* Background decoration */}
                  <circle cx="100" cy="100" r="80" fill="rgba(186, 230, 253, 0.2)" />
                  
                  {letter.paths.map((path, index) => (
                    <g key={path.id}>
                      {/* Path order indicator */}
                      <circle
                        cx={path.id === 'vertical' ? '40' : path.id === 'horizontal' ? '160' : '100'}
                        cy={path.id === 'vertical' ? '40' : path.id === 'horizontal' ? '40' : '40'}
                        r="12"
                        fill="#0284c7"
                        opacity="0.2"
                      />
                      <text
                        x={path.id === 'vertical' ? '40' : path.id === 'horizontal' ? '160' : '100'}
                        y={path.id === 'vertical' ? '40' : path.id === 'horizontal' ? '40' : '40'}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#0284c7"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        {index + 1}
                      </text>
                      
                      {/* Stroke path */}
                      <path
                        d={path.d}
                        fill="none"
                        stroke="#0284c7"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />
                    </g>
                  ))}
                </svg>
              </div>

              <div className="text-center text-blue-800">
                <p className="font-medium">{letter.char} is for {letter.object}</p>
                <p className="text-sm mt-1 text-blue-600">
                  {letter.paths.length} stroke{letter.paths.length > 1 ? 's' : ''} • Follow the numbers
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