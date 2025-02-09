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
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-purple-800 mb-6">Answer Key: Word Unscramble</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Level Solutions</h2>
            <div className="space-y-6">
              {LEVELS.map((level, levelIndex) => (
                <div key={levelIndex} className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-600 mb-3">
                    Level {level.level} ({level.words.length * 10} points)
                  </h3>
                  <div className="grid gap-4">
                    {level.words.map((word, wordIndex) => (
                      <div key={wordIndex} className="flex items-center gap-4 bg-white p-3 rounded-lg">
                        <div className="text-4xl">{word.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                              {word.scrambled.split('').map((letter, i) => (
                                <div
                                  key={i}
                                  className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-purple-200"
                                >
                                  <span className="text-lg font-bold text-purple-600">{letter}</span>
                                </div>
                              ))}
                            </div>
                            <span className="text-xl">➡️</span>
                            <div className="flex gap-2">
                              {word.word.split('').map((letter, i) => (
                                <div
                                  key={i}
                                  className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg shadow-sm border-2 border-green-300"
                                >
                                  <span className="text-lg font-bold text-purple-600">{letter}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            10 points
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">📚</span>
                <span>Each word has a picture hint to help identify it</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎯</span>
                <span>Each correct word earns 10 points (100 points total possible)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🔤</span>
                <span>Words get longer and more challenging in later levels</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">👥</span>
                <span>Help children recognize the connection between pictures and words</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🎓</span>
                <span>Practice sounding out letters to build phonemic awareness</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">🌟</span>
                <span>Use these words as a starting point for vocabulary building</span>
              </li>
            </ul>
          </section>

          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Scoring Summary 📝
            </h3>
            <p className="text-gray-700">
              Total possible score: 100 points
              <br />• Level 1: 4 words × 10 points = 40 points
              <br />• Level 2: 3 words × 10 points = 30 points
              <br />• Level 3: 3 words × 10 points = 30 points
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 