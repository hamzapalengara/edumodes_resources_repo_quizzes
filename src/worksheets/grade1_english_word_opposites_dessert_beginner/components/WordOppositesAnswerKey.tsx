import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word pairs data
const WORD_PAIRS = [
  { word1: 'hot', word2: 'cold', emoji1: '🔥', emoji2: '❄️' },
  { word1: 'big', word2: 'small', emoji1: '🍰', emoji2: '🧁' },
  { word1: 'sweet', word2: 'sour', emoji1: '🍯', emoji2: '🍋' },
  { word1: 'soft', word2: 'hard', emoji1: '🍦', emoji2: '🍪' },
  { word1: 'light', word2: 'dark', emoji1: '🥛', emoji2: '🍫' },
  { word1: 'fresh', word2: 'stale', emoji1: '🥐', emoji2: '🍞' },
  { word1: 'smooth', word2: 'rough', emoji1: '🍮', emoji2: '🥜' },
  { word1: 'wet', word2: 'dry', emoji1: '💧', emoji2: '🍘' },
  { word1: 'full', word2: 'empty', emoji1: '🥤', emoji2: '🥛' },
  { word1: 'open', word2: 'closed', emoji1: '📦', emoji2: '🎁' },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-orange-100">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
            Answer Key: Opposite Word Pairs
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
            <div className="bg-yellow-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🍪</span> Understanding Opposites
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  Opposites are words that have completely different meanings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  Each pair shows two words that are opposite in meaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">•</span>
                  Think about what makes each word different from its pair
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🧁</span> Word Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2">Size & Amount</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>big - small</li>
                    <li>full - empty</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2">Temperature & Taste</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>hot - cold</li>
                    <li>sweet - sour</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2">Texture & State</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>soft - hard</li>
                    <li>smooth - rough</li>
                    <li>wet - dry</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-orange-600 mb-2">Quality & Condition</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>fresh - stale</li>
                    <li>light - dark</li>
                    <li>open - closed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🍰</span> Example Sentences
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>• The <span className="text-pink-600 font-bold">hot</span> cookie just came out of the oven, but the <span className="text-pink-600 font-bold">cold</span> milk will cool it down.</p>
                <p>• The <span className="text-pink-600 font-bold">big</span> cake is for the party, while the <span className="text-pink-600 font-bold">small</span> cupcake is just for you.</p>
                <p>• This <span className="text-pink-600 font-bold">fresh</span> bread smells better than the <span className="text-pink-600 font-bold">stale</span> one from yesterday.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesAnswerKey; 