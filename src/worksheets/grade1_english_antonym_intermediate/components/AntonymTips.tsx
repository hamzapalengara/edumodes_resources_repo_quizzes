import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const AntonymTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-indigo-100">
      <WorksheetHeader />
      
      <div className="px-0 md:p-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
          <h1 className="text-2xl font-bold text-center mb-4 md:mb-6 text-violet-600">
            Tips for Finding Opposite Words
          </h1>

          {/* Advanced Word Search Strategies */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-violet-700 flex items-center gap-2">
              <span>🔍</span> Advanced Search Strategies
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-violet-50 p-4 rounded-lg">
                <h3 className="font-bold text-violet-700 mb-2">
                  1. Multi-Directional Search
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Look horizontally (left to right)</li>
                  <li>• Search vertically (top to bottom)</li>
                  <li>• Check diagonally (corner to corner)</li>
                  <li>• Words might share letters</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-2">
                  2. Pattern Recognition
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Notice letter patterns</li>
                  <li>• Look for word endings (-ing, -ed)</li>
                  <li>• Find common letter combinations</li>
                  <li>• Use word length as a clue</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Understanding Antonyms */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-violet-700 flex items-center gap-2">
              <span>💡</span> Understanding Antonyms
            </h2>
            <div className="bg-violet-50 p-6 rounded-lg">
              <div className="grid gap-6">
                <div>
                  <h3 className="font-bold text-violet-700 mb-2">Actions and States</h3>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🎨</span>
                      <div>
                        <p className="font-semibold">CREATE vs DESTROY</p>
                        <p className="text-sm text-gray-600">One builds up, the other breaks down</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-violet-700 mb-2">Character Traits</h3>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🦁</span>
                      <div>
                        <p className="font-semibold">BRAVE vs COWARD</p>
                        <p className="text-sm text-gray-600">One faces fears, the other avoids them</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-violet-700 mb-2">Qualities</h3>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">💪</span>
                      <div>
                        <p className="font-semibold">STRONG vs WEAK</p>
                        <p className="text-sm text-gray-600">One has power, the other lacks it</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Time Bonus Strategy */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-violet-700 flex items-center gap-2">
              <span>⏱️</span> Time Bonus Strategy
            </h2>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="space-y-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Quick Thinking:</span> You have 10 seconds to find each word for bonus points!
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-600 mb-2">Before You Start</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Read the given word carefully</li>
                      <li>Think about its opposite</li>
                      <li>Plan your search direction</li>
                      <li>Get ready to move quickly</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-600 mb-2">During Search</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Focus on likely areas</li>
                      <li>Move systematically</li>
                      <li>Don't rush too much</li>
                      <li>Stay accurate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practice Tips */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-violet-700 flex items-center gap-2">
              <span>✨</span> Practice Makes Perfect
            </h2>
            <div className="bg-violet-50 p-4 rounded-lg">
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">Build Your Vocabulary:</span> The more antonyms you know, the easier it becomes to find them.
                </p>
                <p>
                  <span className="font-semibold">Use Context:</span> Think about how these words are used in real situations.
                </p>
                <p>
                  <span className="font-semibold">Make Connections:</span> Group related antonyms together to help remember them.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <h3 className="font-semibold text-violet-600 mb-2">Remember:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Take your time to understand each word</li>
                    <li>Use the hints when you're stuck</li>
                    <li>Practice with different word types</li>
                    <li>Challenge yourself to beat your previous scores</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AntonymTips; 