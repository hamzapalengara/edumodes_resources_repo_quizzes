import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const DataAntonymTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100">
      <WorksheetHeader />
      
      <div className="px-0 md:p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
          <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-blue-600">
            Tips for Finding Opposite Words
          </h1>

          {/* Main Tips */}
          <section className="mb-8">
            <div className="space-y-4">
              {/* Tip 1: Start with the Given Word */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🔍</span>
                  <div>
                    <h3 className="font-bold text-lg text-blue-700 mb-2">
                      Start with the Given Word
                    </h3>
                    <p className="text-gray-700">
                      Look for the word shown in the list first. This will help you understand what kind of opposite word to find.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 2: Think About Opposites */}
              <div className="bg-cyan-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🤔</span>
                  <div>
                    <h3 className="font-bold text-lg text-blue-700 mb-2">
                      Think About Opposites
                    </h3>
                    <p className="text-gray-700">
                      Before searching, think about what would be the opposite. For example, if something is FULL, its opposite would be EMPTY.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 3: Use the Emoji Hints */}
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">💡</span>
                  <div>
                    <h3 className="font-bold text-lg text-blue-700 mb-2">
                      Use the Emoji Hints
                    </h3>
                    <p className="text-gray-700">
                      Each word pair has an emoji hint. These pictures can help you understand the relationship between opposite words.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 4: Search Carefully */}
              <div className="bg-teal-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">👀</span>
                  <div>
                    <h3 className="font-bold text-lg text-blue-700 mb-2">
                      Search Carefully
                    </h3>
                    <p className="text-gray-700">
                      Look for words going across (left to right) or down (top to bottom). Take your time to find each letter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tip 5: Check Your Answer */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✅</span>
                  <div>
                    <h3 className="font-bold text-lg text-blue-700 mb-2">
                      Check Your Answer
                    </h3>
                    <p className="text-gray-700">
                      When you find a word, make sure it's really the opposite of the given word. The word will be highlighted if it's correct!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Think About Opposites */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              How to Think About Opposites
            </h2>
            <div className="grid gap-4">
              {/* Example 1 */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📦</span>
                  <div>
                    <h3 className="font-bold mb-2">FULL vs EMPTY</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Think about a box or container</li>
                      <li>FULL means it's completely filled</li>
                      <li>EMPTY means there's nothing inside</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-cyan-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🏁</span>
                  <div>
                    <h3 className="font-bold mb-2">FIRST vs LAST</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Think about a race or line</li>
                      <li>FIRST means at the beginning</li>
                      <li>LAST means at the end</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Steps to Play */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">
              Steps to Play
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Look at the word list on the right side</li>
                <li>Find the given word in the grid</li>
                <li>Think about its opposite meaning</li>
                <li>Search for the opposite word</li>
                <li>Click and drag to select letters</li>
                <li>If correct, the word will be highlighted!</li>
              </ol>
              <div className="mt-4 text-sm text-blue-600 font-medium">
                Remember: Take your time and think carefully about what each word means!
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataAntonymTips; 