import React from 'react';

const OddNumbersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-2 md:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
            Odd Numbers Adventure Guide 🏢
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🎯</span>
              For Parents and Teachers
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <p className="text-gray-700">
                  <strong>Understanding Odd Numbers:</strong> Before starting, review that odd numbers are numbers that cannot be divided evenly by 2 (1, 3, 5, 7, 9).
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <p className="text-gray-700">
                  <strong>Game Environment:</strong> Ensure your child is in a comfortable position to tap/click the falling numbers on the screen.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <p className="text-gray-700">
                  <strong>Positive Reinforcement:</strong> Celebrate each correct catch and use mistakes as learning opportunities.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🎮</span>
              How to Play
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">1.</span>
                <p className="text-gray-700">
                  Watch for numbers falling from the building.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">2.</span>
                <p className="text-gray-700">
                  Tap/click ONLY the odd numbers (1, 3, 5, 7, 9).
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">3.</span>
                <p className="text-gray-700">
                  Let even numbers (2, 4, 6, 8, 10) fall past - don't catch them!
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">4.</span>
                <p className="text-gray-700">
                  Try to catch all odd numbers before they reach the bottom.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">✨</span>
              Learning Tips
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">📝</span>
                <p className="text-gray-700">
                  Count by 2s starting from 1 to find odd numbers: 1, 3, 5, 7, 9.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">🎲</span>
                <p className="text-gray-700">
                  Practice identifying odd and even numbers in everyday objects.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">🎨</span>
                <p className="text-gray-700">
                  Draw or write odd numbers you find during the game for extra practice.
                </p>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              Quick Tips
            </h3>
            <ul className="space-y-2 text-purple-800">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Take breaks if needed
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Remember: odd numbers cannot be split evenly in half
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Practice makes perfect - keep trying!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OddNumbersTips; 