import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-blue-100">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-6">
            Tips for Learning Opposites
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Learning Strategy */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚽</span> Training Strategies
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">1.</span>
                  Think about football situations where opposites occur
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">2.</span>
                  Use game actions to remember word pairs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">3.</span>
                  Practice using opposites in match commentary
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">4.</span>
                  Create your own football-themed opposite pairs
                </li>
              </ul>
            </div>

            {/* Fun Learning Games */}
            <div className="bg-green-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🥅</span> Practice Drills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">⚽</span> Word Match Game
                  </h3>
                  <p className="text-gray-600">
                    Score goals by matching opposite word pairs correctly
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎯</span> Commentary Practice
                  </h3>
                  <p className="text-gray-600">
                    Describe game actions using opposite words
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🏃</span> Action Words
                  </h3>
                  <p className="text-gray-600">
                    Act out opposite words like fast/slow or attack/defend
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">📢</span> Team Chants
                  </h3>
                  <p className="text-gray-600">
                    Create team chants using opposite word pairs
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🚫</span> Referee's Warnings
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">🟨</span>
                  <div>
                    <p className="font-bold text-red-600">Wrong Word Pairs</p>
                    <p className="text-gray-600">Make sure words are true opposites, not just different</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">🟨</span>
                  <div>
                    <p className="font-bold text-red-600">Rushing Plays</p>
                    <p className="text-gray-600">Take time to think about each word's meaning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">🟨</span>
                  <div>
                    <p className="font-bold text-red-600">Missing Context</p>
                    <p className="text-gray-600">Remember how words are used in game situations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Tips */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Training Tips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Match Analysis</h3>
                  <p className="text-gray-600">
                    Look for opposite words in football commentary
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Team Dictionary</h3>
                  <p className="text-gray-600">
                    Create a football-themed book of opposites
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Match Reports</h3>
                  <p className="text-gray-600">
                    Write game stories using opposite word pairs
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Team Challenge</h3>
                  <p className="text-gray-600">
                    Take turns saying football-related opposites
                  </p>
                </div>
              </div>
            </div>

            {/* Parent/Teacher Section */}
            <div className="bg-green-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📝</span> Coach's Corner
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Training Plan</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Start with common football terms</li>
                    <li>Use game situations as examples</li>
                    <li>Make learning fun with team games</li>
                    <li>Celebrate successful matches</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Extra Practice</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Create football-themed word cards</li>
                    <li>Watch match highlights together</li>
                    <li>Practice match commentary</li>
                    <li>Play word association games</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesTips; 