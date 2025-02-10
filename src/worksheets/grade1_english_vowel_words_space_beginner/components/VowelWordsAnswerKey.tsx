import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

// Word categories
const VOWEL_WORDS = [
  { word: 'air', emoji: '💨', vowel: 'a' },
  { word: 'earth', emoji: '🌍', vowel: 'e' },
  { word: 'ice', emoji: '❄️', vowel: 'i' },
  { word: 'orbit', emoji: '🛸', vowel: 'o' },
  { word: 'up', emoji: '⬆️', vowel: 'u' },
  { word: 'echo', emoji: '🔊', vowel: 'e' },
  { word: 'atom', emoji: '⚛️', vowel: 'a' },
  { word: 'orb', emoji: '🔮', vowel: 'o' },
];

const NON_VOWEL_WORDS = [
  { word: 'star', emoji: '⭐' },
  { word: 'moon', emoji: '🌙' },
  { word: 'light', emoji: '💡' },
  { word: 'dark', emoji: '🌑' },
  { word: 'nova', emoji: '💫' },
  { word: 'beam', emoji: '🌟' },
  { word: 'dust', emoji: '✨' },
  { word: 'ring', emoji: '💍' },
];

const VowelWordsAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-lg p-2 md:p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-300 mb-6">
            Star Chart: Vowel Words
          </h1>

          {/* Vowel Words Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌟</span> Vowel Constellations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['a', 'e', 'i', 'o', 'u'].map(vowel => {
                const vowelWords = VOWEL_WORDS.filter(w => w.vowel === vowel);
                if (vowelWords.length === 0) return null;

                return (
                  <div key={vowel} className="bg-indigo-900/30 rounded-lg p-4">
                    <h3 className="font-bold text-purple-300 mb-2 flex items-center gap-2">
                      <span className="text-xl uppercase">{vowel}</span>
                      <span className="text-sm">constellation</span>
                    </h3>
                    <div className="space-y-2">
                      {vowelWords.map(word => (
                        <div key={word.word} className="flex items-center gap-2 bg-black/20 p-2 rounded-md">
                          <span className="text-2xl filter drop-shadow-lg">{word.emoji}</span>
                          <span className="font-medium text-indigo-200">{word.word}</span>
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
            <h2 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span> Other Star Words
            </h2>
            <div className="bg-indigo-900/30 rounded-lg p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {NON_VOWEL_WORDS.map(word => (
                  <div key={word.word} className="flex items-center gap-2 bg-black/20 p-2 rounded-md">
                    <span className="text-2xl filter drop-shadow-lg">{word.emoji}</span>
                    <span className="font-medium text-indigo-200">{word.word}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-purple-900/30 rounded-lg p-4">
            <h2 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
              <span className="text-2xl">💫</span> Navigation Guide
            </h2>
            <ul className="space-y-2 text-purple-200">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                Look for words that start with a, e, i, o, u
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                Check only the first letter of each word
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                Collect all vowel stars to complete your mission
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VowelWordsAnswerKey; 