import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LEVELS = [
  {
    level: 1,
    words: [
      { word: 'CAT', image: '🐱', scrambled: 'TCA' },
      { word: 'DOG', image: '🐶', scrambled: 'GDO' },
      { word: 'SUN', image: '☀️', scrambled: 'NSU' },
      { word: 'HAT', image: '🎩', scrambled: 'THA' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'BED', image: '🛏️', scrambled: 'DBE' },
      { word: 'BAG', image: '👜', scrambled: 'BGA' },
      { word: 'FISH', image: '🐠', scrambled: 'HSIF' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'STAR', image: '⭐', scrambled: 'RATS' },
      { word: 'CAKE', image: '🎂', scrambled: 'EKAC' },
      { word: 'TREE', image: '🌳', scrambled: 'ERET' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-blue-100">
          <h1 className="text-2xl font-bold text-purple-600 py-4 text-center border-b border-blue-100">
            Answer Key: Word Unscramble Fun
          </h1>
          
          <section className="py-6">
            <h2 className="text-xl font-semibold text-purple-600 mb-4 px-4">Level Solutions</h2>
            <div className="space-y-4">
              {LEVELS.map((level, levelIndex) => (
                <div key={levelIndex} className="bg-blue-50 py-4 border-y border-blue-100">
                  <h3 className="font-semibold text-purple-600 mb-3 px-4">
                    Level {level.level} ({level.words.length * 10} points)
                  </h3>
                  <div className="space-y-4">
                    {level.words.map((word, wordIndex) => (
                      <div key={wordIndex} className="py-3 border-b border-blue-100 last:border-b-0">
                        <div className="flex items-center gap-2 px-4 overflow-x-auto">
                          <div className="text-4xl flex-shrink-0">{word.image}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 overflow-x-auto pb-2">
                              <div className="flex gap-1 flex-shrink-0">
                                {word.scrambled.split('').map((letter, i) => (
                                  <div
                                    key={i}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-blue-200"
                                  >
                                    <span className="text-sm font-bold text-blue-600">{letter}</span>
                                  </div>
                                ))}
                              </div>
                              <span className="text-xl flex-shrink-0">➡️</span>
                              <div className="flex gap-1 flex-shrink-0">
                                {word.word.split('').map((letter, i) => (
                                  <div
                                    key={i}
                                    className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg shadow-sm border-2 border-purple-300"
                                  >
                                    <span className="text-sm font-bold text-purple-600">{letter}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-6 border-t border-blue-100">
            <h2 className="text-xl font-semibold text-purple-600 mb-4 px-4">Learning Points</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎯</span>
                <span>Each word has a picture to help you remember it</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">⭐</span>
                <span>Each correct word earns 10 points (100 points total possible)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📈</span>
                <span>Words get longer and more challenging in later levels</span>
              </li>
            </ul>
          </section>

          <section className="py-6 border-t border-blue-100">
            <h2 className="text-xl font-semibold text-purple-600 mb-4 px-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📚</span>
                <span>Help children connect words with their meanings through pictures</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎓</span>
                <span>Practice sounding out letters to build phonemic awareness</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <span>Encourage using the pictures as memory aids</span>
              </li>
            </ul>
          </section>

          <div className="py-6 bg-blue-50 border-t border-blue-100">
            <h3 className="text-lg font-semibold text-purple-600 mb-2 px-4">
              Scoring Summary 📝
            </h3>
            <div className="text-gray-700 px-4">
              Total possible score: 100 points
              <br />• Level 1: 4 words × 10 points = 40 points
              <br />• Level 2: 3 words × 10 points = 30 points
              <br />• Level 3: 3 words × 10 points = 30 points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 