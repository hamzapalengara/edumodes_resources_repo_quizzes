import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-orange-100">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
            Tips for Learning Opposites
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Learning Strategy */}
            <div className="bg-yellow-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🧁</span> Sweet Learning Strategies
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">1.</span>
                  Think about everyday objects and their opposites
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">2.</span>
                  Use pictures to help remember word pairs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">3.</span>
                  Practice using opposites in sentences
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">4.</span>
                  Create your own opposite word pairs
                </li>
              </ul>
            </div>

            {/* Fun Learning Games */}
            <div className="bg-orange-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🍪</span> Fun Learning Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎲</span> Opposite Match
                  </h3>
                  <p className="text-gray-600">
                    Make cards with opposite pairs and play matching games
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎨</span> Draw & Learn
                  </h3>
                  <p className="text-gray-600">
                    Draw pictures showing opposite word pairs
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎭</span> Act It Out
                  </h3>
                  <p className="text-gray-600">
                    Act out opposite words like big/small or fast/slow
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
                    <span className="text-xl">🎵</span> Opposite Song
                  </h3>
                  <p className="text-gray-600">
                    Make up songs using opposite word pairs
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Watch Out For
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-bold text-red-600">Mixing Similar Words</p>
                    <p className="text-gray-600">Make sure words are truly opposites, not just different</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-bold text-red-600">Rushing to Match</p>
                    <p className="text-gray-600">Take time to think about each word's meaning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg">
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="font-bold text-red-600">Forgetting Context</p>
                    <p className="text-gray-600">Remember how words are used in sentences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Tips */}
            <div className="bg-pink-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Sweet Practice Ideas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Word Hunt</h3>
                  <p className="text-gray-600">
                    Look for opposite pairs in your favorite books
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Picture Dictionary</h3>
                  <p className="text-gray-600">
                    Create your own book of opposite word pairs
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Story Time</h3>
                  <p className="text-gray-600">
                    Write stories using opposite word pairs
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Word Chain</h3>
                  <p className="text-gray-600">
                    Take turns saying a word and its opposite
                  </p>
                </div>
              </div>
            </div>

            {/* Parent/Teacher Section */}
            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📝</span> For Parents & Teachers
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Daily Practice</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Start with common, everyday words</li>
                    <li>Use visual aids and real objects</li>
                    <li>Make learning fun with games</li>
                    <li>Celebrate progress and effort</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Extension Activities</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Create word sorting games</li>
                    <li>Make opposite word flashcards</li>
                    <li>Write simple sentences</li>
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