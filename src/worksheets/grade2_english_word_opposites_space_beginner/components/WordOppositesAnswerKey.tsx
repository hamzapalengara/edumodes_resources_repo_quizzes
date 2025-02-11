import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WORD_PAIRS = [
  { word1: 'bright', word2: 'dark', emoji1: '✨', emoji2: '🌑', explanation: 'Bright stars shine in the night sky, while dark areas show the vast emptiness of space.' },
  { word1: 'near', word2: 'far', emoji1: '🛸', emoji2: '🌌', explanation: 'Some planets are near Earth, while others are far away in distant galaxies.' },
  { word1: 'heavy', word2: 'light', emoji1: '🪨', emoji2: '☁️', explanation: 'Asteroids are heavy, while cosmic dust is light and floats through space.' },
  { word1: 'big', word2: 'small', emoji1: '🌟', emoji2: '⭐', explanation: 'Some stars are big like our Sun, while others are small like distant stars.' },
  { word1: 'fast', word2: 'slow', emoji1: '⚡', emoji2: '🐌', explanation: 'Light travels fast through space, while some space objects move slowly.' },
  { word1: 'cold', word2: 'hot', emoji1: '❄️', emoji2: '🔥', explanation: 'Space can be extremely cold in the shadows and very hot in direct sunlight.' },
  { word1: 'empty', word2: 'full', emoji1: '🕳️', emoji2: '💫', explanation: 'Some parts of space are empty voids, while others are full of stars and planets.' },
  { word1: 'high', word2: 'low', emoji1: '🚀', emoji2: '⬇️', explanation: 'Rockets fly high into space, while they must return low to Earth.' },
  { word1: 'deep', word2: 'shallow', emoji1: '🌊', emoji2: '🏖️', explanation: 'Space is deep and vast, while Earth\'s atmosphere is relatively shallow.' },
  { word1: 'new', word2: 'old', emoji1: '🌠', emoji2: '🌘', explanation: 'New stars are born while old ones fade away in the cosmic cycle.' },
];

const WordOppositesAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-6">
            Space Opposites - Answer Key
          </h1>

          <div className="space-y-4">
            {WORD_PAIRS.map((pair, index) => (
              <div
                key={index}
                className="bg-black/20 rounded-lg p-4 border border-blue-500/30"
              >
                <div className="flex flex-wrap gap-4 items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{pair.emoji1}</span>
                    <span className="text-lg font-bold text-blue-200">
                      {pair.word1}
                    </span>
                  </div>
                  <div className="text-blue-400">⟷</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{pair.emoji2}</span>
                    <span className="text-lg font-bold text-blue-200">
                      {pair.word2}
                    </span>
                  </div>
                </div>
                <p className="text-blue-100 text-sm">
                  {pair.explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-900/30 rounded-lg p-4">
            <h2 className="text-xl font-bold text-blue-300 mb-4">
              Learning Tips
            </h2>
            <ul className="list-disc list-inside space-y-2 text-blue-100">
              <li>Look for context clues in the space-themed examples</li>
              <li>Think about how these opposites relate to space exploration</li>
              <li>Use the emojis as visual aids to remember the pairs</li>
              <li>Practice using these words in sentences about space</li>
              <li>Connect the words to real space phenomena and objects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOppositesAnswerKey; 