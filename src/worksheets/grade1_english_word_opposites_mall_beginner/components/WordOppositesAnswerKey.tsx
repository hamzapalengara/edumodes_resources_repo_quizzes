import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word pairs data
const WORD_PAIRS = [
  { word1: 'buy', word2: 'sell', emoji1: '🛍️', emoji2: '💰' },
  { word1: 'expensive', word2: 'cheap', emoji1: '💎', emoji2: '🏷️' },
  { word1: 'full', word2: 'empty', emoji1: '🛒', emoji2: '🛄' },
  { word1: 'busy', word2: 'quiet', emoji1: '👥', emoji2: '🤫' },
  { word1: 'modern', word2: 'old', emoji1: '🏢', emoji2: '🏚️' },
  { word1: 'open', word2: 'closed', emoji1: '🔓', emoji2: '🔒' },
  { word1: 'heavy', word2: 'light', emoji1: '📦', emoji2: '🪶' },
  { word1: 'many', word2: 'few', emoji1: '💫', emoji2: '⭐' },
  { word1: 'high', word2: 'low', emoji1: '⬆️', emoji2: '⬇️' },
  { word1: 'inside', word2: 'outside', emoji1: '🏬', emoji2: '🌳' },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
            Shopping Mall Opposites Guide
          </h1>

          {/* Word Pairs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {WORD_PAIRS.map((pair, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{pair.emoji1}</span>
                  <span className="font-bold text-pink-600">{pair.word1}</span>
                </div>
                <div className="text-gray-400">⟷</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-pink-600">{pair.word2}</span>
                  <span className="text-2xl">{pair.emoji2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🛍️</span> Understanding Shopping Opposites
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  Opposites are words that have completely different meanings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  Each pair shows two words that mean the opposite of each other
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">•</span>
                  Think about how each word relates to shopping experiences
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏬</span> Word Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Shopping Actions</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>buy - sell</li>
                    <li>open - closed</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Price & Value</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>expensive - cheap</li>
                    <li>high - low</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Mall Environment</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>busy - quiet</li>
                    <li>inside - outside</li>
                    <li>modern - old</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-blue-600 mb-2">Shopping Items</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>full - empty</li>
                    <li>heavy - light</li>
                    <li>many - few</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Example Sentences
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>• The <span className="text-pink-600 font-bold">expensive</span> designer bag was too pricey, so I found a <span className="text-pink-600 font-bold">cheap</span> alternative.</p>
                <p>• The mall was <span className="text-pink-600 font-bold">busy</span> during the sale, but <span className="text-pink-600 font-bold">quiet</span> after closing time.</p>
                <p>• My shopping cart was <span className="text-pink-600 font-bold">full</span> at the start but <span className="text-pink-600 font-bold">empty</span> after checkout.</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Shopping Tips
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Compare Prices</h3>
                  <p className="text-gray-600">
                    Look for both expensive and cheap options to find the best deal
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Check Store Hours</h3>
                  <p className="text-gray-600">
                    Know when stores are open or closed to plan your shopping trip
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Shopping Times</h3>
                  <p className="text-gray-600">
                    Visit when it's quiet to avoid busy shopping hours
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Bag Weight</h3>
                  <p className="text-gray-600">
                    Balance heavy and light items in your shopping bags
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

export default WordOppositesAnswerKey; 