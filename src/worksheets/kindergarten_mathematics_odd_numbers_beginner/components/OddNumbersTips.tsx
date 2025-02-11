import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const OddNumbersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-emerald-200">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-teal-800 mb-6">
            Tips for Finding Odd Numbers
          </h1>

          <div className="space-y-6">
            {/* Strategy 1 */}
            <div className="bg-teal-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-teal-800 mb-2 flex items-center gap-2">
                <span>🔢</span> Count by Twos
              </h2>
              <p className="text-teal-700 mb-4">
                Start at 1 and count by 2s to find odd numbers:
              </p>
              <div className="flex flex-wrap gap-2">
                {[1, 3, 5, 7, 9].map((num) => (
                  <div
                    key={num}
                    className="w-12 h-12 rounded-xl bg-emerald-500 
                             flex items-center justify-center text-2xl font-bold text-white"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="bg-emerald-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-teal-800 mb-2 flex items-center gap-2">
                <span>🎵</span> The Odd Number Song
              </h2>
              <p className="text-teal-700 mb-2">
                Learn this fun song to remember odd numbers:
              </p>
              <div className="bg-white rounded-xl p-4 text-teal-700">
                <p className="italic">
                  "One and three and five and seven,<br />
                  Nine makes odd numbers oh so fun!<br />
                  They can't be split up into pairs,<br />
                  That's how you know they're odd ones!"
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="bg-teal-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-teal-800 mb-2 flex items-center gap-2">
                <span>🎮</span> Fun Ways to Remember
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-bold text-teal-800 mb-2">The Pairing Game</h3>
                  <p className="text-teal-700">
                    Try to make pairs with objects. If one is left alone, it's an odd number!
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex gap-1">
                        <span className="text-2xl">⭐</span>
                        {i < 4 && <span className="text-2xl">⭐</span>}
                      </div>
                    ))}
                  </div>
                  <p className="text-teal-600 mt-2">
                    5 stars can't make perfect pairs - 5 is odd!
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="bg-emerald-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-teal-800 mb-2 flex items-center gap-2">
                <span>💡</span> Quick Tips
              </h2>
              <ul className="list-disc list-inside space-y-2 text-teal-700">
                <li>Odd numbers end in 1, 3, 5, 7, or 9</li>
                <li>Odd numbers have one left over when split into pairs</li>
                <li>Between any two odd numbers, there's always an even number</li>
                <li>The first odd number is 1</li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl p-4 text-center">
              <h2 className="text-xl font-bold text-teal-800 mb-2">
                You're Doing Great! 🌟
              </h2>
              <p className="text-teal-700">
                Keep practicing and soon you'll be an odd number expert!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddNumbersTips; 