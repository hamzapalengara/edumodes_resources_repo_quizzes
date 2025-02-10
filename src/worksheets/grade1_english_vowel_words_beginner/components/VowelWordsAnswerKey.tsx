import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word categories
const VOWEL_WORDS = [
  { word: 'ant', emoji: '🐜', vowel: 'a' },
  { word: 'egg', emoji: '🥚', vowel: 'e' },
  { word: 'ink', emoji: '🖋️', vowel: 'i' },
  { word: 'owl', emoji: '🦉', vowel: 'o' },
  { word: 'ice', emoji: '🧊', vowel: 'i' },
  { word: 'end', emoji: '🔚', vowel: 'e' },
  { word: 'up', emoji: '⬆️', vowel: 'u' },
  { word: 'ear', emoji: '👂', vowel: 'e' },
];

const NON_VOWEL_WORDS = [
  { word: 'dog', emoji: '🐕' },
  { word: 'cat', emoji: '🐱' },
  { word: 'sun', emoji: '☀️' },
  { word: 'pig', emoji: '🐷' },
  { word: 'hat', emoji: '🎩' },
  { word: 'box', emoji: '📦' },
  { word: 'red', emoji: '🔴' },
  { word: 'toy', emoji: '🧸' },
];

const VowelWordsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-pink-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-600 mb-6">
            Answer Key: Vowel Words
          </h1>

          {/* Vowel Words Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌸</span> Words Starting with Vowels
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['a', 'e', 'i', 'o', 'u'].map(vowel => {
                const vowelWords = VOWEL_WORDS.filter(w => w.vowel === vowel);
                if (vowelWords.length === 0) return null;

                return (
                  <div key={vowel} className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                      <span className="text-xl uppercase">{vowel}</span>
                      <span className="text-sm">words</span>
                    </h3>
                    <div className="space-y-2">
                      {vowelWords.map(word => (
                        <div key={word.word} className="flex items-center gap-2 bg-white p-2 rounded-md">
                          <span className="text-2xl">{word.emoji}</span>
                          <span className="font-medium text-gray-700">{word.word}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Non-Vowel Words Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌿</span> Words Starting with Consonants
            </h2>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {NON_VOWEL_WORDS.map(word => (
                  <div key={word.word} className="flex items-center gap-2 bg-white p-2 rounded-md">
                    <span className="text-2xl">{word.emoji}</span>
                    <span className="font-medium text-gray-700">{word.word}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span> Remember
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                Vowels are: a, e, i, o, u
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                Look at the first letter of each word
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">•</span>
                If it starts with a vowel, pick it!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VowelWordsAnswerKey; 