import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word pairs data
const WORD_PAIRS = [
  { word1: 'early', word2: 'late', emoji1: '⏰', emoji2: '😴' },
  { word1: 'pass', word2: 'fail', emoji1: '✅', emoji2: '❌' },
  { word1: 'easy', word2: 'hard', emoji1: '😊', emoji2: '🤔' },
  { word1: 'right', word2: 'wrong', emoji1: '👍', emoji2: '👎' },
  { word1: 'quiet', word2: 'loud', emoji1: '🤫', emoji2: '📢' },
  { word1: 'clean', word2: 'messy', emoji1: '✨', emoji2: '🌪️' },
  { word1: 'first', word2: 'last', emoji1: '1️⃣', emoji2: '🔚' },
  { word1: 'new', word2: 'old', emoji1: '📚', emoji2: '📖' },
  { word1: 'open', word2: 'closed', emoji1: '📖', emoji2: '📕' },
  { word1: 'start', word2: 'finish', emoji1: '🏁', emoji2: '🎯' },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
            Answer Key: Opposite Word Pairs
          </h1>

          {/* Word Pairs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {WORD_PAIRS.map((pair, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{pair.emoji1}</span>
                  <span className="font-bold text-blue-600">{pair.word1}</span>
                </div>
                <div className="text-gray-400">⟷</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-600">{pair.word2}</span>
                  <span className="text-2xl">{pair.emoji2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📚</span> Understanding Opposites
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Opposites are words that have completely different meanings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Each pair shows two words that mean the opposite of each other
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  Think about how each word is different from its pair
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📝</span> Word Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Time Words</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>early - late</li>
                    <li>start - finish</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">School Results</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>pass - fail</li>
                    <li>right - wrong</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Classroom Words</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>quiet - loud</li>
                    <li>clean - messy</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-purple-600 mb-2">Book Words</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>new - old</li>
                    <li>open - closed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">✏️</span> Example Sentences
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>• I was <span className="text-blue-600 font-bold">early</span> to class today, but my friend was <span className="text-blue-600 font-bold">late</span>.</p>
                <p>• The <span className="text-blue-600 font-bold">new</span> textbook looks different from the <span className="text-blue-600 font-bold">old</span> one.</p>
                <p>• The teacher asked us to be <span className="text-blue-600 font-bold">quiet</span> during the test, but recess time was <span className="text-blue-600 font-bold">loud</span>.</p>
                <p>• Some math problems are <span className="text-blue-600 font-bold">easy</span>, while others are <span className="text-blue-600 font-bold">hard</span>.</p>
              </div>
            </div>

            <div className="bg-pink-50 rounded-xl p-4 md:p-6">
              <h2 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Practice Ideas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Classroom Hunt</h3>
                  <p className="text-gray-600">
                    Look around your classroom and find objects that show opposites
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Story Time</h3>
                  <p className="text-gray-600">
                    Write a short story using opposite pairs from the lesson
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Draw Pictures</h3>
                  <p className="text-gray-600">
                    Draw pictures to show the meaning of each opposite pair
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-pink-600 mb-2">Word Chain</h3>
                  <p className="text-gray-600">
                    Say a word and have a friend say its opposite
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