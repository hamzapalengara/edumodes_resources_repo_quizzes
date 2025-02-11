import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const WordSearchAnswerKey: React.FC = () => {
  const wordList = [
    { word: 'FIG', emoji: '🫐', hint: 'A sweet purple fruit with many seeds inside' },
    { word: 'DATES', emoji: '🌴', hint: 'Sweet brown fruits that grow on palm trees' },
    { word: 'GUAVA', emoji: '🫐', hint: 'A tropical fruit with pink flesh and many seeds' },
    { word: 'PAPAYA', emoji: '🥭', hint: 'An orange tropical fruit with black seeds' },
    { word: 'BANANA', emoji: '🍌', hint: 'A long yellow fruit that monkeys love' },
    { word: 'ORANGE', emoji: '🍊', hint: 'A round citrus fruit with segments inside' },
    { word: 'CHERRY', emoji: '🍒', hint: 'Small red fruits that grow in pairs' },
    { word: 'BERRY', emoji: '🫐', hint: 'Small round fruits that can be blue or red' },
    { word: 'DRAGON', emoji: '🐉', hint: 'A pink fruit with scales on the outside' },
    { word: 'STAR', emoji: '⭐', hint: 'A yellow fruit shaped like a star when cut' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-yellow-500">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        {/* Word List with Meanings */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Exotic Fruits Word List
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wordList.map(({ word, emoji, hint }) => (
              <div
                key={word}
                className="bg-white rounded-lg p-3 flex items-start space-x-3"
              >
                <span className="text-2xl">{emoji}</span>
                <div>
                  <h3 className="font-bold text-gray-800">{word}</h3>
                  <p className="text-sm text-gray-600">{hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Finding Words */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Tips for Finding Words
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li>• Look for words going across (→) and down (↓)</li>
              <li>• Start with shorter words like "FIG" and "STAR"</li>
              <li>• Use your finger to follow each row and column</li>
              <li>• When you find a word, it will show a fruit emoji!</li>
            </ul>
          </div>
        </div>

        {/* Teaching Tips */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Teaching Tips
          </h2>
          
          <div className="bg-white rounded-lg p-4">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Vocabulary Building:</strong>
                <p className="text-sm mt-1">
                  Discuss each fruit's characteristics, color, taste, and where it grows.
                </p>
              </li>
              <li>
                <strong>Letter Recognition:</strong>
                <p className="text-sm mt-1">
                  Practice sounding out the letters in each word before searching.
                </p>
              </li>
              <li>
                <strong>Visual Skills:</strong>
                <p className="text-sm mt-1">
                  Encourage systematic searching patterns and visual tracking.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordSearchAnswerKey; 