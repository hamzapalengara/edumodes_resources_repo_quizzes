import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import { NUMBER_FOUR } from './NumberFourWorksheet';

const NumberFourAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 bg-[url('/fruits-bg.png')] bg-cover bg-center bg-blend-soft-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-pink-200/40 to-purple-200/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/50">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center py-3">
          Number Four with Strawberries
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-white/40 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-white/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-indigo-900 mb-2 md:mb-4">Number 4 Tracing Guide</h3>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/50 shadow-lg">
              {/* Number Display */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-bold text-indigo-900">{NUMBER_FOUR.value}</span>
                <div className="flex gap-2">
                  {[...Array(NUMBER_FOUR.fruitCount)].map((_, index) => (
                    <span key={index} className="text-3xl md:text-4xl filter drop-shadow-md">
                      {NUMBER_FOUR.fruitEmoji}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tracing Steps */}
              <div className="space-y-6">
                {NUMBER_FOUR.paths.map((path, index) => (
                  <div key={path.id} className="flex items-start gap-4">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center text-indigo-900 font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base md:text-lg font-semibold text-indigo-900 mb-2">
                        {index === 0 && "Draw the Diagonal Line"}
                        {index === 1 && "Add the Horizontal Line"}
                        {index === 2 && "Complete with the Vertical Line"}
                      </h4>
                      <div className="relative aspect-square max-w-[350px]">
                        <svg viewBox={NUMBER_FOUR.viewBox} className="w-full h-full">
                          {/* Background decoration */}
                          <circle cx="100" cy="100" r="80" fill="rgba(99, 102, 241, 0.1)" />
                          
                          {/* Previous paths (completed) */}
                          {NUMBER_FOUR.paths.slice(0, index).map(prevPath => (
                            <path
                              key={prevPath.id}
                              d={prevPath.d}
                              fill="none"
                              stroke="#4F46E5"
                              strokeWidth="24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                          
                          {/* Current path (highlighted) */}
                          <path
                            d={path.d}
                            fill="none"
                            stroke="#EC4899"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Future paths (faded) */}
                          {NUMBER_FOUR.paths.slice(index + 1).map(nextPath => (
                            <path
                              key={nextPath.id}
                              d={nextPath.d}
                              fill="none"
                              stroke="rgba(99, 102, 241, 0.2)"
                              strokeWidth="24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                          
                          {/* Start point */}
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
                          
                          {/* Direction arrow */}
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
                        </svg>
                      </div>
                      <p className="text-sm md:text-base text-indigo-800 mt-2">
                        {index === 0 && "Start at the top and draw diagonally down to the middle."}
                        {index === 1 && "Draw a straight line from left to right through the middle."}
                        {index === 2 && "Draw a straight line down from the top to complete the number."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/50 shadow-lg">
              <h4 className="text-base md:text-lg font-semibold text-indigo-900 mb-3">Important Notes:</h4>
              <ul className="space-y-2 text-sm md:text-base text-indigo-800">
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🎯</span>
                  <span>Always start from the glowing dot for each stroke.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">📏</span>
                  <span>Keep your lines straight and steady.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🔄</span>
                  <span>Practice each stroke until you're comfortable before moving to the next.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🍓</span>
                  <span>Remember: The number 4 represents four strawberries!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberFourAnswerKey; 