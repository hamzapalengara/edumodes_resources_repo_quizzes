import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import { NUMBER_SEVEN } from './NumberSevenWorksheet';

const NumberSevenTips: React.FC = () => {
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
          Tips for Writing Number 7
        </h2>
      </div>

      {/* Main Content */}
      <main className="px-0">
        <div className="bg-zinc-800/20 backdrop-blur-md p-2 md:p-4 mb-2 md:mb-4 shadow-lg border border-zinc-700/50">
          <div className="max-w-4xl mx-auto">
            {/* Example Section */}
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Number 7 Example</h3>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <div className="text-6xl font-bold text-orange-500">{NUMBER_SEVEN.value}</div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {[...Array(NUMBER_SEVEN.vehicleCount)].map((_, index) => (
                    <span key={index} className="text-4xl">{NUMBER_SEVEN.vehicleEmoji}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Writing Tips */}
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Writing Tips</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✏️</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Start at the Top</h4>
                    <p className="text-orange-300">Begin with a straight horizontal line at the top.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">↘️</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Diagonal Line</h4>
                    <p className="text-orange-300">Draw a straight diagonal line from the right end of the top line.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📏</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Keep it Straight</h4>
                    <p className="text-orange-300">Make sure both lines are straight and meet at a clear angle.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Common Mistakes */}
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Watch Out For</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Curved Lines</h4>
                    <p className="text-orange-300">Avoid making curved lines - keep them straight!</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Wrong Angle</h4>
                    <p className="text-orange-300">Make sure the diagonal line isn't too steep or too flat.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Practice Tips */}
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg mb-6">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Practice Tips</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Follow the Dots</h4>
                    <p className="text-orange-300">Use the glowing dots as your guide for where to start each stroke.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Practice Order</h4>
                    <p className="text-orange-300">Always practice the strokes in order: horizontal line first, then diagonal line.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏍️</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Count the Motorcycles</h4>
                    <p className="text-orange-300">Remember that 7 represents seven motorcycles - count them to reinforce the number!</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fun Facts */}
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-zinc-700/50 shadow-lg">
              <h3 className="text-xl font-bold text-orange-500 mb-4">Fun Facts About 7</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌈</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Lucky Number</h4>
                    <p className="text-orange-300">Seven is considered a lucky number in many cultures!</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Days of the Week</h4>
                    <p className="text-orange-300">There are seven days in a week.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏍️</span>
                  <div>
                    <h4 className="font-semibold text-orange-400">Motorcycle Fun</h4>
                    <p className="text-orange-300">Count seven motorcycles zooming by - vroom vroom!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NumberSevenTips; 