import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import { NUMBER_SIX, NUMBER_GRID } from './NumberSixWorksheet';

const NumberSixAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8BC34A] via-[#4CAF50] to-[#2E7D32] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FFA000]/40 to-[#FFD54F]/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[#81C784]/40 to-[#A5D6A7]/40 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#4FC3F7]/40 to-[#81D4FA]/40 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-[#795548]/30 backdrop-blur-md shadow-lg border border-[#8D6E63]/50">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center py-3">
          Number Six with Mangoes
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-[#4CAF50]/20 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-[#81C784]/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">Number 6 Tracing Guide</h3>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#A5D6A7]/50 shadow-lg">
              {/* Number Display */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-bold text-[#2E7D32]">{NUMBER_SIX.value}</span>
                <div className="flex gap-2">
                  {[...Array(NUMBER_SIX.fruitCount)].map((_, index) => (
                    <span key={index} className="text-3xl md:text-4xl filter drop-shadow-md">
                      {NUMBER_SIX.fruitEmoji}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stroke Order */}
              <div className="mb-6">
                <h4 className="text-base md:text-lg font-semibold text-[#2E7D32] mb-3">Correct Stroke Order</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  {NUMBER_SIX.paths.map((path, index) => (
                    <div key={path.id} className="bg-[#E8F5E9] p-2 md:p-4 rounded-lg">
                      <div className="aspect-square relative">
                        <svg viewBox={NUMBER_SIX.viewBox} className="w-full h-full">
                          {NUMBER_SIX.paths.map((guidePath) => (
                            <path
                              key={`guide-${guidePath.id}`}
                              d={guidePath.d}
                              fill="none"
                              stroke="#C8E6C9"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                          {NUMBER_SIX.paths.slice(0, index + 1).map((activePath) => (
                            <path
                              key={`active-${activePath.id}`}
                              d={activePath.d}
                              fill="none"
                              stroke="#4CAF50"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                        </svg>
                      </div>
                      <p className="text-center mt-2 font-medium text-[#2E7D32]">
                        {index === 0 && "Step 1: Draw the curved line down"}
                        {index === 1 && "Step 2: Draw the circle at the bottom"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#A5D6A7]/50 shadow-lg">
              <h4 className="text-base md:text-lg font-semibold text-[#2E7D32] mb-3">Important Notes:</h4>
              <ul className="space-y-2 text-sm md:text-base text-[#1B5E20]">
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🎯</span>
                  <span>Always start from the glowing dot for each stroke.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">📏</span>
                  <span>Keep your lines smooth and steady.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🔄</span>
                  <span>Practice each stroke until you're comfortable before moving to the next.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🥭</span>
                  <span>Remember: The number 6 represents six mangoes!</span>
                </li>
              </ul>
            </div>

            {/* Number Grid Answers */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#A5D6A7]/50 shadow-lg">
              <h5 className="text-xl font-semibold text-[#2E7D32] mb-3">Number Finding Game Answers</h5>
              <p className="mb-4 text-[#1B5E20]">There are 6 number sixes in the grid:</p>
              <div className="grid grid-cols-4 gap-0.5 md:gap-2 w-full max-w-sm mx-auto bg-[#E8F5E9] p-2 rounded-lg">
                {NUMBER_GRID.map((item: string, index: number) => (
                  <div
                    key={index}
                    className={`w-full aspect-square flex items-center justify-center text-xl font-bold rounded-lg
                      ${item === '6 🥭' ? 'bg-[#4CAF50] text-white' : 'bg-white text-[#2E7D32]'}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-[#A5D6A7]/50 shadow-lg">
              <h5 className="text-xl font-semibold text-[#2E7D32] mb-3">Tips for Writing Number 6</h5>
              <ul className="list-disc pl-6 space-y-2 text-[#1B5E20]">
                <li>Start from the top with a smooth curved line going down</li>
                <li>Complete with a circle at the bottom that connects smoothly</li>
                <li>Make sure the circle is proportional to the curved line</li>
                <li>Keep the connection point between the curve and circle smooth</li>
                <li>Practice the fluid motion of both strokes</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSixAnswerKey; 