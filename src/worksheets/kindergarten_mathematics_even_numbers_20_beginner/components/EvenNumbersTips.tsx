import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const EvenNumbersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6">
            Tips for Finding Even Numbers
          </h1>

          <div className="space-y-6">
            {/* Strategy 1 */}
            <div className="bg-purple-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>🔢</span> Count by Twos
              </h2>
              <p className="text-purple-700 mb-4">
                Start at 2 and count by 2s to find even numbers:
              </p>
              <div className="flex flex-wrap gap-2">
                {[2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((num) => (
                  <div
                    key={num}
                    className="w-12 h-12 rounded-xl bg-indigo-500 
                             flex items-center justify-center text-2xl font-bold text-white"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="bg-indigo-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>🎵</span> The Even Number Song
              </h2>
              <p className="text-purple-700 mb-2">
                Learn this fun song to remember even numbers:
              </p>
              <div className="bg-white rounded-xl p-4 text-purple-700">
                <p className="italic">
                  "Two, four, six, and eight,<br />
                  Ten and twelve, they're really great!<br />
                  Fourteen, sixteen, eighteen too,<br />
                  Twenty makes our counting through!<br />
                  When we count by twos we see,<br />
                  All the even numbers, yippee!"
                </p>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="bg-purple-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>🎮</span> Fun Ways to Remember
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h3 className="font-bold text-purple-800 mb-2">The Pairing Game</h3>
                  <p className="text-purple-700">
                    Try to make pairs with objects. If they all pair up perfectly, it's an even number!
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="flex gap-1">
                        <span className="text-2xl">🌟</span>
                        <span className="text-2xl">🌟</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-purple-600 mt-2">
                    12 stars make 6 perfect pairs - 12 is even!
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="bg-indigo-50 rounded-xl p-4">
              <h2 className="text-xl font-bold text-purple-800 mb-2 flex items-center gap-2">
                <span>💡</span> Quick Tips
              </h2>
              <ul className="list-disc list-inside space-y-2 text-purple-700">
                <li>Even numbers end in 0, 2, 4, 6, or 8</li>
                <li>Even numbers can be split into equal pairs</li>
                <li>Between any two even numbers, there's always an odd number</li>
                <li>When you count by 2s, you'll find all the even numbers</li>
                <li>The pattern continues: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20...</li>
              </ul>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 text-center">
              <h2 className="text-xl font-bold text-purple-800 mb-2">
                You're Doing Great! 🌟
              </h2>
              <p className="text-purple-700">
                Keep practicing and soon you'll be an even number expert!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvenNumbersTips; 