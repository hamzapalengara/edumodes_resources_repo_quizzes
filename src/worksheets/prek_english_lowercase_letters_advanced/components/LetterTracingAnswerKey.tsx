import React from 'react';
import { LETTERS } from './LetterTracingWorksheet';

const LetterTracingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-purple-100 to-pink-100 bg-[url('/candy-bg.png')] bg-cover bg-center bg-blend-soft-light">
      {/* Header */}
      <header className="bg-gradient-to-b from-pink-300/90 to-purple-200/90 shadow-lg backdrop-blur-sm">
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
            <h1 className="text-xl font-bold text-white">Answer Key</h1>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-pink-400/30 backdrop-blur-sm shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-900 text-center py-3">
          Sweet Letter Adventure: u to z
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-pink-400/40 backdrop-blur-sm p-4 mb-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-pink-900 mb-4">Letter Tracing Guide</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LETTERS.map((letter) => (
                <div key={letter.char} className="bg-pink-100/80 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-pink-900">{letter.char}</span>
                    <span className="text-3xl">{letter.objectEmoji}</span>
                    <span className="text-lg text-pink-900 font-medium">{letter.object}</span>
                  </div>
                  
                  <div className="aspect-square w-full max-w-[200px] mx-auto mb-4">
                    <svg viewBox={letter.viewBox} className="w-full h-full">
                      {/* Background decoration */}
                      <circle cx="100" cy="100" r="80" fill="rgba(236, 72, 153, 0.1)" />
                      
                      {letter.paths.map((path, index) => (
                        <g key={path.id}>
                          {/* Path */}
                          <path
                            d={path.d}
                            fill="none"
                            stroke="#EC4899"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Start point */}
                          {index === 0 && (
                            <circle
                              ref={el => {
                                if (el) {
                                  const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                  pathElement.setAttribute("d", path.d);
                                  const point = pathElement.getPointAtLength(0);
                                  el.setAttribute('cx', point.x.toString());
                                  el.setAttribute('cy', point.y.toString());
                                }
                              }}
                              r="10"
                              fill="#EC4899"
                            />
                          )}
                          
                          {/* Arrow indicating direction */}
                          <path
                            ref={el => {
                              if (el) {
                                const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                pathElement.setAttribute("d", path.d);
                                const length = pathElement.getTotalLength();
                                const point = pathElement.getPointAtLength(length * 0.3);
                                const nextPoint = pathElement.getPointAtLength(length * 0.3 + 1);
                                const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
                                const arrowSize = 15;
                                
                                el.setAttribute('d', `M${point.x},${point.y} l${arrowSize * Math.cos(angle - Math.PI / 6)},${arrowSize * Math.sin(angle - Math.PI / 6)} M${point.x},${point.y} l${arrowSize * Math.cos(angle + Math.PI / 6)},${arrowSize * Math.sin(angle + Math.PI / 6)}`);
                              }
                            }}
                            stroke="#FFFFFF"
                            strokeWidth="4"
                            fill="none"
                          />
                        </g>
                      ))}
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-pink-900 font-semibold">Tracing Steps:</h4>
                    <ol className="list-decimal list-inside text-pink-700 space-y-1">
                      {letter.paths.map((path, index) => (
                        <li key={path.id}>
                          {path.id === 'stem1' && 'Draw the main vertical line'}
                          {path.id === 'diagonal' && 'Draw the diagonal line'}
                          {path.id === 'diagonal1' && 'Draw the first diagonal line'}
                          {path.id === 'diagonal2' && 'Draw the second diagonal line'}
                          {path.id === 'horizontal1' && 'Draw the top horizontal line'}
                          {path.id === 'horizontal2' && 'Draw the bottom horizontal line'}
                          {index === letter.paths.length - 1 ? ' to complete the letter' : ' and continue'}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LetterTracingAnswerKey; 