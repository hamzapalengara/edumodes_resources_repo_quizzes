import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const NumberFillTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-6">
            Tips for Learning Numbers 1-20
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Learning Strategy */}
            <div className="bg-yellow-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Learning Strategy
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">1.</span>
                  Count objects you see in the park - trees, swings, benches
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">2.</span>
                  Practice counting forward and backward like a seesaw
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">3.</span>
                  Group numbers into pairs like friends on a swing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">4.</span>
                  Use your fingers to count like climbing steps
                </li>
              </ul>
            </div>

            {/* Park-Themed Number Games */}
            <div className="bg-green-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎪</span> Fun Park Number Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🎠</span>
                  <div>
                    <p className="font-bold text-green-700">Merry-Go-Round Counting</p>
                    <p className="text-sm">Count as you go around on the carousel</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🎈</span>
                  <div>
                    <p className="font-bold text-green-700">Balloon Numbers</p>
                    <p className="text-sm">Count balloons by color groups</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🛝</span>
                  <div>
                    <p className="font-bold text-green-700">Slide Countdown</p>
                    <p className="text-sm">Count down before sliding</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-green-700">Star Jump Counting</p>
                    <p className="text-sm">Do star jumps while counting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent/Teacher Tips */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📝</span> Tips for Parents & Teachers
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <p>Make counting a fun part of outdoor play</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <p>Use physical movement to reinforce number learning</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <p>Create number stories using playground equipment</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">•</span>
                  <p>Practice counting in different voices to keep it fun</p>
                </div>
              </div>
            </div>

            {/* Common Mistakes to Watch For */}
            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Common Mistakes to Watch For
              </h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">→</span>
                  <p>Skipping numbers when counting quickly</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">→</span>
                  <p>Mixing up teen numbers (13-19)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">→</span>
                  <p>Reversing numbers like 12 and 21</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberFillTips; 