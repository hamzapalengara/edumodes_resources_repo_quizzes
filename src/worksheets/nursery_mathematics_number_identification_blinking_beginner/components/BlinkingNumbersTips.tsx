import React from 'react';

const BlinkingNumbersTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-2 md:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
            Number Train Adventure Guide 🚂
          </h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🎯</span>
              For Train Conductors (Parents & Teachers)
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">🌟</span>
                <p className="text-gray-700">
                  <strong>Station Preparation:</strong> Before boarding the number train, review numbers 1-10 with your little conductor using physical objects or number cards.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">🌟</span>
                <p className="text-gray-700">
                  <strong>Train Environment:</strong> Ensure your young passenger is in a quiet, well-lit space to focus on catching the right number from the passing train.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">🌟</span>
                <p className="text-gray-700">
                  <strong>Positive Signals:</strong> Celebrate each successful number catch with enthusiasm, and encourage trying again when mistakes happen.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🚂</span>
              Train Journey Instructions
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">1.</span>
                <p className="text-gray-700">
                  Start at Station 1 (Numbers 1-5) - Perfect for beginning train spotters!
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">2.</span>
                <p className="text-gray-700">
                  Progress to Station 2 (Numbers 6-10) after mastering the first station.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">3.</span>
                <p className="text-gray-700">
                  Watch carefully as the number train passes by - each car carries a special number!
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">4.</span>
                <p className="text-gray-700">
                  Take your time spotting numbers - this train runs on your schedule.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🎮</span>
              Extra Train Activities
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎨</span>
                <p className="text-gray-700">
                  Draw your own number train and practice writing the numbers you've learned.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎲</span>
                <p className="text-gray-700">
                  Count objects around you like a train counting cargo cars.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📚</span>
                <p className="text-gray-700">
                  Create stories about trains carrying different numbers of passengers or cargo.
                </p>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              Train Safety Tips
            </h3>
            <ul className="space-y-2 text-yellow-800">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Take breaks between stations if needed
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Use the "Hear Again" button to replay number announcements
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Celebrate each successful number catch!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlinkingNumbersTips; 