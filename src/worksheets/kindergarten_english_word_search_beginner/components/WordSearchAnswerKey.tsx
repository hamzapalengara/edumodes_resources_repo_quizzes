import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Simple 3-letter words suitable for kindergarten
const WORD_LIST = [
  { word: 'CAT', emoji: '🐱' },
  { word: 'DOG', emoji: '🐶' },
  { word: 'SUN', emoji: '☀️' },
  { word: 'HAT', emoji: '🎩' },
  { word: 'BAG', emoji: '👜' },
  { word: 'BED', emoji: '🛏️' },
  { word: 'BUS', emoji: '🚌' },
  { word: 'PEN', emoji: '✏️' },
  { word: 'CUP', emoji: '☕' },
  { word: 'BOX', emoji: '📦' },
];

const WordSearchAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Instructions */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-2xl font-bold text-white mb-4">Word Search Answer Key</h2>
          <p className="text-white mb-4">
            Here are all the words you need to find in the word search puzzle. Words can be found horizontally (left to right) or vertically (top to bottom).
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {WORD_LIST.map(({ word, emoji }) => (
              <div
                key={word}
                className="bg-white/30 rounded-lg p-2 flex items-center justify-center"
              >
                <span className="text-2xl mr-2">{emoji}</span>
                <span className="font-bold text-white">{word}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Parents/Teachers */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h3 className="text-xl font-bold text-white mb-2">For Parents & Teachers</h3>
          <ul className="text-white space-y-2">
            <li>• Help children identify the first letter of each word</li>
            <li>• Use the emojis to make word recognition more fun</li>
            <li>• Encourage systematic searching (row by row or column by column)</li>
            <li>• Celebrate each word found to maintain motivation</li>
          </ul>
        </div>

        {/* Learning Benefits */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">Learning Benefits</h3>
          <ul className="text-white space-y-2">
            <li>• Letter and word recognition</li>
            <li>• Visual discrimination skills</li>
            <li>• Hand-eye coordination</li>
            <li>• Vocabulary development</li>
            <li>• Attention and focus</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 