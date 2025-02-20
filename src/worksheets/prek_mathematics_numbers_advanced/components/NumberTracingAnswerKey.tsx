import React from 'react';
import { NUMBERS } from './NumberTracingWorksheet';

const NumberTracingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="px-0 md:px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Number Tracing Guide: 11-20
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
            {NUMBERS.map((number) => (
              <div
                key={number.value}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-white">{number.value}</span>
                  <span className="text-xl">({number.space})</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <span key={i} className="text-white">•</span>
                    ))}
                  </div>
                </div>

                <div className="aspect-square w-full max-w-[200px] mx-auto mb-4">
                  <svg viewBox={number.viewBox} className="w-full h-full">
                    {/* Guide Paths */}
                    {number.paths.map((path) => (
                      <path
                        key={`guide-${path.id}`}
                        d={path.d}
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="28"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4 4"
                      />
                    ))}
                    
                    {/* Completed Paths */}
                    {number.paths.map((path) => (
                      <path
                        key={`completed-${path.id}`}
                        d={path.d}
                        fill="none"
                        stroke="white"
                        strokeWidth="28"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ))}

                    {/* Start Points */}
                    {number.paths.map((path) => (
                      <circle
                        key={`start-${path.id}`}
                        ref={el => {
                          if (el) {
                            const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            pathElement.setAttribute("d", path.d);
                            const point = pathElement.getPointAtLength(0);
                            el.setAttribute('cx', point.x.toString());
                            el.setAttribute('cy', point.y.toString());
                          }
                        }}
                        r="12"
                        fill="white"
                        className="animate-pulse"
                      />
                    ))}
                  </svg>
                </div>

                <div className="text-white">
                  <h3 className="font-semibold mb-2">Tracing Steps:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm opacity-90">
                    {number.paths.map((path) => (
                      <li key={path.id}>
                        Start at the glowing dot and trace the {
                          path.id === 'zero_top' ? 'top curve of zero' :
                          path.id === 'zero_bottom' ? 'bottom curve of zero' :
                          path.id.replace(/_/g, ' ')
                        }
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberTracingAnswerKey; 