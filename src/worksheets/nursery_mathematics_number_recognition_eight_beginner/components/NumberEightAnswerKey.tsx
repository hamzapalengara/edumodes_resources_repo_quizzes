import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import { NUMBER_EIGHT } from './NumberEightWorksheet';

const NumberEightAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400/30 to-teal-300/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-700/30 to-blue-600/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-cyan-400/30 to-teal-300/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <WorksheetHeader />

      <main className="relative z-10 px-0">
        <div className="bg-blue-800/80 backdrop-blur-md shadow-lg border border-blue-700 mb-4">
          <div className="max-w-4xl mx-auto px-2 py-3 md:px-4 md:py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Answer Key: Number 8 with Sea Vehicles
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-2 md:px-4 space-y-4">
          {/* Stroke Order Section */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">✏️</span> Stroke Order
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cyan-100">
                <span className="text-lg font-bold">1.</span>
                <span>Start at the top middle and draw a smooth wave-like curve for the top circle</span>
              </div>
              <div className="flex items-center gap-3 text-cyan-100">
                <span className="text-lg font-bold">2.</span>
                <span>Continue to draw the bottom wave, making it flow like the ocean</span>
              </div>
            </div>
          </div>

          {/* Number Recognition */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔍</span> Number Recognition
            </h2>
            <div className="space-y-3">
              <p className="text-cyan-100">The number 8 appears {NUMBER_EIGHT.vehicleCount} times in the grid with sailing boats:</p>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 20 }).map((_, index) => {
                  const isEight = NUMBER_EIGHT.value + ' ' + NUMBER_EIGHT.vehicleEmoji === '8 ⛵';
                  return (
                    <div
                      key={index}
                      className={`aspect-square flex items-center justify-center rounded-lg text-lg font-bold ${
                        isEight ? 'bg-cyan-500 text-white' : 'bg-blue-700/50 text-cyan-300'
                      }`}
                    >
                      {isEight ? '8 ⛵' : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">💡</span> Key Points
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-cyan-100">
                <span>•</span>
                <span>Both waves should flow smoothly like the ocean</span>
              </li>
              <li className="flex items-start gap-2 text-cyan-100">
                <span>•</span>
                <span>The waves should connect gracefully in the middle</span>
              </li>
              <li className="flex items-start gap-2 text-cyan-100">
                <span>•</span>
                <span>Keep the curves gentle and flowing</span>
              </li>
            </ul>
          </div>

          {/* Success Criteria */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">✅</span> Success Criteria
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-cyan-100">•</span>
                <div className="text-cyan-100">
                  <strong>Tracing Practice:</strong> Complete 5 successful waves of number 8
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-100">•</span>
                <div className="text-cyan-100">
                  <strong>Number Recognition:</strong> Find all {NUMBER_EIGHT.vehicleCount} sailing boats with number 8
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-100">•</span>
                <div className="text-cyan-100">
                  <strong>Total Score:</strong> Maximum score is {(5 + NUMBER_EIGHT.vehicleCount) * 10} points
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-xl p-4 border border-blue-700/50 shadow-lg mb-4">
            <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">📝</span> Additional Notes
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-cyan-100">
                <span>•</span>
                <span>Count the sailing boats to reinforce the quantity of eight</span>
              </li>
              <li className="flex items-start gap-2 text-cyan-100">
                <span>•</span>
                <span>Practice drawing wave patterns in the air before tracing</span>
              </li>
              <li className="flex items-start gap-2 text-cyan-100">
                <span>•</span>
                <span>Look for groups of 8 sea creatures in ocean pictures</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberEightAnswerKey; 