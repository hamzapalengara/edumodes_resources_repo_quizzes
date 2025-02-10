import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LowercaseFillTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-teal-800 mb-6">
            Tips for Learning Lowercase Letters
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Learning Strategy */}
            <div className="bg-teal-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Learning Strategy
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">1.</span>
                  Start with the letters in your name - they're special to you!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">2.</span>
                  Practice writing letters in sand or with finger paint
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">3.</span>
                  Look for letters in your favorite books
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold">4.</span>
                  Say the letter sound as you write it
                </li>
              </ul>
            </div>

            {/* Ocean-Themed Memory Tricks */}
            <div className="bg-emerald-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌊</span> Ocean Memory Tricks
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🐠</span>
                  <div>
                    <p className="font-bold text-emerald-700">a like angelfish</p>
                    <p className="text-sm">Curves like a swimming fish</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🐋</span>
                  <div>
                    <p className="font-bold text-emerald-700">b like blue whale</p>
                    <p className="text-sm">Tall and round like a whale's head</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🦀</span>
                  <div>
                    <p className="font-bold text-emerald-700">c like crab</p>
                    <p className="text-sm">Curves like a crab's claw</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🐬</span>
                  <div>
                    <p className="font-bold text-emerald-700">d like dolphin</p>
                    <p className="text-sm">Round like a dolphin's jump</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parent/Teacher Tips */}
            <div className="bg-teal-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📝</span> Tips for Parents & Teachers
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-teal-500 text-xl">•</span>
                  <p>Make learning interactive with games and activities</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-500 text-xl">•</span>
                  <p>Use positive reinforcement and celebrate progress</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-500 text-xl">•</span>
                  <p>Connect letters to familiar objects and animals</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-500 text-xl">•</span>
                  <p>Practice regularly but keep sessions short and fun</p>
                </div>
              </div>
            </div>

            {/* Common Mistakes to Watch For */}
            <div className="bg-emerald-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Common Mistakes to Watch For
              </h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">→</span>
                  <p>Mixing up b and d - remember "b" comes before "d"</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">→</span>
                  <p>Reversing letters - practice writing left to right</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">→</span>
                  <p>Skipping letters - use a finger to point while reciting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowercaseFillTips; 