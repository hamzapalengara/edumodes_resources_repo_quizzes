import React from 'react';
import { NUMBERS } from './NumberTracingWorksheet';

const NumberTracingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100 bg-[url('/vehicles-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-200/40 to-teal-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-sky-200/40 to-cyan-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <header className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
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
              <a href="https://www.edumodes.com" target="_blank" className="text-[9px] sm:text-[10px] text-gray-500 hover:text-gray-700 leading-tight truncate">www.edumodes.com</a>
            </div>
            <h1 className="text-xl font-bold text-cyan-900">Answer Key</h1>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-900 text-center py-3">
          Number Tracing: 11-20
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-white/40 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-cyan-900 mb-2 md:mb-4">Number Tracing Guide</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {NUMBERS.map((number) => (
                <div key={number.value} className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 md:p-4 border border-white/50 shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 mb-2 md:mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-cyan-900">{number.value}</span>
                    <span className="text-2xl md:text-3xl filter drop-shadow-md">{number.vehicleEmoji}</span>
                    <span className="text-lg md:text-xl text-cyan-800 font-medium capitalize">{number.vehicle}</span>
                  </div>
                  
                  <div className="aspect-square w-full max-w-[200px] mx-auto mb-2 md:mb-4">
                    <svg viewBox={number.viewBox} className="w-full h-full">
                      {/* Background decoration */}
                      <circle cx="150" cy="100" r="80" fill="rgba(8, 145, 178, 0.1)" />
                      
                      {number.paths.map((path, index) => (
                        <g key={path.id}>
                          {/* Path */}
                          <path
                            d={path.d}
                            fill="none"
                            stroke="#0891b2"
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
                              fill="#0891b2"
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
                                const arrowSize = window.innerWidth < 768 ? 12 : 15;
                                
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
                  
                  <div className="space-y-1 md:space-y-2">
                    <h4 className="text-sm md:text-base text-cyan-900 font-semibold">Tracing Steps:</h4>
                    <ol className="list-decimal list-inside text-sm md:text-base text-cyan-800 space-y-0.5 md:space-y-1">
                      {number.paths.map((path, index) => (
                        <li key={path.id}>
                          Trace the {path.id.replace(/_/g, ' ')} {index === number.paths.length - 1 ? 'to complete the number' : 'and continue'}
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

export default NumberTracingAnswerKey; 