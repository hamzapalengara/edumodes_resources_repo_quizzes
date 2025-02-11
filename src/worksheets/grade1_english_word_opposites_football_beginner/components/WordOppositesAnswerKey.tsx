import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word pairs data
const WORD_PAIRS = [
  { word1: 'fast', word2: 'slow', emoji1: '⚡', emoji2: '🐢' },
  { word1: 'win', word2: 'lose', emoji1: '🏆', emoji2: '😢' },
  { word1: 'up', word2: 'down', emoji1: '⬆️', emoji2: '⬇️' },
  { word1: 'left', word2: 'right', emoji1: '👈', emoji2: '👉' },
  { word1: 'start', word2: 'finish', emoji1: '🏁', emoji2: '🔚' },
  { word1: 'strong', word2: 'weak', emoji1: '💪', emoji2: '🌱' },
  { word1: 'attack', word2: 'defend', emoji1: '⚔️', emoji2: '🛡️' },
  { word1: 'first', word2: 'last', emoji1: '1️⃣', emoji2: '🔚' },
  { word1: 'loud', word2: 'quiet', emoji1: '📢', emoji2: '🤫' },
  { word1: 'happy', word2: 'sad', emoji1: '😄', emoji2: '😢' },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-blue-100">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-6">
            Answer Key: Opposite Word Pairs
          </h1>

          {/* Word Pairs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {WORD_PAIRS.map((pair, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{pair.emoji1}</span>
                  <span className="font-bold text-green-600">{pair.word1}</span>
                </div>
                <div className="text-gray-400">⟷</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-green-600">{pair.word2}</span>
                  <span className="text-2xl">{pair.emoji2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚽</span> Understanding Opposites
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Opposites are words that have completely different meanings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Each pair shows two words that are opposite in meaning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Think about what makes each word different from its pair
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🥅</span> Word Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Speed & Performance</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>fast - slow</li>
                    <li>strong - weak</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Game Results</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>win - lose</li>
                    <li>first - last</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Game Strategy</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>attack - defend</li>
                    <li>start - finish</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-600 mb-2">Game Experience</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>happy - sad</li>
                    <li>loud - quiet</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚽</span> Example Sentences
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>• The <span className="text-green-600 font-bold">fast</span> striker runs past the <span className="text-green-600 font-bold">slow</span> defender.</p>
                <p>• Our team was <span className="text-green-600 font-bold">happy</span> when we won, but <span className="text-green-600 font-bold">sad</span> when we lost.</p>
                <p>• The coach told us to <span className="text-green-600 font-bold">attack</span> when we have the ball and <span className="text-green-600 font-bold">defend</span> when we don't.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesAnswerKey; 