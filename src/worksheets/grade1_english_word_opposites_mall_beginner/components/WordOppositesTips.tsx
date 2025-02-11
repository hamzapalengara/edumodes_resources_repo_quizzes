import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordOppositesTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
            Shopping Mall Word Game Tips
          </h1>

          {/* Main Tips */}
          <div className="space-y-6">
            {/* Game Strategy */}
            <div className="bg-pink-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Game Strategy
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">1.</span>
                  Look at both the word and emoji for each card
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">2.</span>
                  Think about shopping experiences to understand opposites
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">3.</span>
                  Group similar words in your mind (prices, actions, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">4.</span>
                  Use the emojis as visual hints for word meanings
                </li>
              </ul>
            </div>

            {/* Fun Shopping Games */}
            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🛍️</span> Fun Shopping Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🏪</span>
                  <div>
                    <p className="font-bold text-purple-700">Store Explorer</p>
                    <p className="text-sm">Find opposites in real store names and signs</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-bold text-purple-700">Price Detective</p>
                    <p className="text-sm">Spot expensive and cheap items while shopping</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <p className="font-bold text-purple-700">Weight Guesser</p>
                    <p className="text-sm">Compare heavy and light shopping bags</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🕒</span>
                  <div>
                    <p className="font-bold text-purple-700">Time Tracker</p>
                    <p className="text-sm">Notice when stores open and close</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Shopping Tips
              </h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">→</span>
                  <p>Pay attention to store signs showing open/closed status</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">→</span>
                  <p>Notice price differences between expensive and cheap items</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">→</span>
                  <p>Observe when the mall is busy or quiet</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">→</span>
                  <p>Look for modern and old buildings in shopping areas</p>
                </div>
              </div>
            </div>

            {/* Extra Practice */}
            <div className="bg-pink-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Extra Practice
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Mall Scavenger Hunt</h3>
                  <p className="text-gray-600">
                    Find examples of opposites while walking through a mall
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Shopping List Game</h3>
                  <p className="text-gray-600">
                    Create lists using opposite words for items to find
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Store Categories</h3>
                  <p className="text-gray-600">
                    Group stores by opposite types (luxury vs budget)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Shopping Stories</h3>
                  <p className="text-gray-600">
                    Make up stories using opposite words about shopping trips
                  </p>
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