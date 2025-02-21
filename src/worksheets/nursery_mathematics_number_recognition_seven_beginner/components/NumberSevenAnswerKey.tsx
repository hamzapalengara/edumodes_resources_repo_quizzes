import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import { NUMBER_SEVEN, NUMBER_GRID } from './NumberSevenWorksheet';

const NumberSevenAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500/30 to-amber-400/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-zinc-700/30 to-zinc-600/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-orange-400/30 to-amber-300/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <WorksheetHeader />

      {/* Title Section */}
      <div className="bg-zinc-800/80 backdrop-blur-md shadow-lg border border-zinc-700">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center py-3">
          Number Seven with Motorcycles
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-zinc-800/20 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-zinc-700/50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">Number 7 Tracing Guide</h3>
            
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg">
              {/* Number Display */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-bold text-orange-500">{NUMBER_SEVEN.value}</span>
                <div className="flex gap-2">
                  {[...Array(NUMBER_SEVEN.vehicleCount)].map((_, index) => (
                    <span key={index} className="text-3xl md:text-4xl filter drop-shadow-md">
                      {NUMBER_SEVEN.vehicleEmoji}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stroke Order */}
              <div className="mb-6">
                <h4 className="text-base md:text-lg font-semibold text-orange-500 mb-3">Correct Stroke Order</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  {NUMBER_SEVEN.paths.map((path, index) => (
                    <div key={path.id} className="bg-zinc-800/50 p-2 md:p-4 rounded-lg">
                      <div className="aspect-square relative">
                        <svg viewBox={NUMBER_SEVEN.viewBox} className="w-full h-full">
                          {NUMBER_SEVEN.paths.map((guidePath) => (
                            <path
                              key={`guide-${guidePath.id}`}
                              d={guidePath.d}
                              fill="none"
                              stroke="rgba(234, 88, 12, 0.2)"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                          {NUMBER_SEVEN.paths.slice(0, index + 1).map((activePath) => (
                            <path
                              key={`active-${activePath.id}`}
                              d={activePath.d}
                              fill="none"
                              stroke="#f97316"
                              strokeWidth="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          ))}
                        </svg>
                      </div>
                      <p className="text-center mt-2 font-medium text-orange-400">
                        {index === 0 && "Step 1: Draw the horizontal line"}
                        {index === 1 && "Step 2: Draw the diagonal line down"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-6 bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg">
              <h4 className="text-base md:text-lg font-semibold text-orange-500 mb-3">Important Notes:</h4>
              <ul className="space-y-2 text-sm md:text-base text-orange-300">
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
                  <span>Complete the horizontal line before drawing the diagonal.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🏍️</span>
                  <span>Remember: The number 7 represents seven motorcycles!</span>
                </li>
              </ul>
            </div>

            {/* Number Grid Answers */}
            <div className="mt-8 bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg">
              <h5 className="text-xl font-semibold text-orange-500 mb-3">Number Finding Game Answers</h5>
              <p className="mb-4 text-orange-300">There are 7 number sevens in the grid:</p>
              <div className="grid grid-cols-4 gap-0.5 md:gap-2 w-full max-w-sm mx-auto bg-zinc-800/50 p-2 rounded-lg">
                {NUMBER_GRID.map((item: string, index: number) => (
                  <div
                    key={index}
                    className={`w-full aspect-square flex items-center justify-center text-xl font-bold rounded-lg
                      ${item === '7 🏍️' ? 'bg-orange-500 text-white' : 'bg-zinc-900 text-orange-400'}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="mt-8 bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg">
              <h5 className="text-xl font-semibold text-orange-500 mb-3">Tips for Writing Number 7</h5>
              <ul className="list-disc pl-6 space-y-2 text-orange-300">
                <li>Start with a straight horizontal line at the top</li>
                <li>Draw the diagonal line from right to left</li>
                <li>Keep the diagonal line straight and steady</li>
                <li>Make sure the horizontal line is level</li>
                <li>Practice the angle of the diagonal line</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSevenAnswerKey; 