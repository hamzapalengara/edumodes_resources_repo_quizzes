import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LEVELS = [
  {
    level: 1,
    words: [
      { word: 'PEAR', image: '🍐', scrambled: 'REAP', hint: 'Green and shaped like a teardrop' },
      { word: 'PLUM', image: '🫐', scrambled: 'MULP', hint: 'Small and purple' },
      { word: 'KIWI', image: '🥝', scrambled: 'IWIK', hint: 'Green and fuzzy inside' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'APPLE', image: '🍎', scrambled: 'PEPLA', hint: 'Red and keeps the doctor away' },
      { word: 'MANGO', image: '🥭', scrambled: 'GOMAN', hint: 'Sweet and tropical' },
      { word: 'PEACH', image: '🍑', scrambled: 'CHAPE', hint: 'Soft and fuzzy outside' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'ORANGE', image: '🍊', scrambled: 'GERANO', hint: 'Named after its color' },
      { word: 'BANANA', image: '🍌', scrambled: 'NABANA', hint: 'Yellow and curved' },
      { word: 'GRAPES', image: '🍇', scrambled: 'PAGERS', hint: 'Grows in bunches' },
      { word: 'LEMON', image: '🍋', scrambled: 'MONEL', hint: 'Yellow and sour' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-pink-100">
          <h1 className="text-2xl font-bold text-pink-600 py-4 text-center border-b border-pink-100">
            Answer Key: Fruity Word Scramble
          </h1>
          
          <section className="py-6">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">Level Solutions</h2>
            <div className="space-y-4">
              {LEVELS.map((level, levelIndex) => (
                <div key={levelIndex} className="bg-pink-50 py-4 border-y border-pink-100">
                  <h3 className="font-semibold text-pink-600 mb-3 px-4">
                    Level {level.level} ({level.words.length * 10} points)
                  </h3>
                  <div className="space-y-4">
                    {level.words.map((word, wordIndex) => (
                      <div key={wordIndex} className="py-3 border-b border-pink-100 last:border-b-0">
                        <div className="flex items-center gap-2 px-4 overflow-x-auto">
                          <div className="text-4xl flex-shrink-0">{word.image}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 overflow-x-auto pb-2">
                              <div className="flex gap-1 flex-shrink-0">
                                {word.scrambled.split('').map((letter, i) => (
                                  <div
                                    key={i}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-pink-200"
                                  >
                                    <span className="text-sm font-bold text-pink-600">{letter}</span>
                                  </div>
                                ))}
                              </div>
                              <span className="text-xl flex-shrink-0">➡️</span>
                              <div className="flex gap-1 flex-shrink-0">
                                {word.word.split('').map((letter, i) => (
                                  <div
                                    key={i}
                                    className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-lg shadow-sm border-2 border-pink-300"
                                  >
                                    <span className="text-sm font-bold text-pink-600">{letter}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="text-sm text-gray-600 px-2">
                              Hint: {word.hint}
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

          <section className="py-6 border-t border-pink-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">Learning Points</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🍎</span>
                <span>Each fruit has a picture and a helpful hint</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🎯</span>
                <span>Each correct word earns 10 points (100 points total possible)</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">📈</span>
                <span>Words get longer and more challenging in later levels</span>
              </li>
            </ul>
          </section>

          <section className="py-6 border-t border-pink-100">
            <h2 className="text-xl font-semibold text-pink-600 mb-4 px-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🥗</span>
                <span>Use this as an opportunity to discuss healthy eating habits</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🎓</span>
                <span>Practice sounding out letters to build phonemic awareness</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">🌟</span>
                <span>Encourage trying new fruits and learning about their benefits</span>
              </li>
            </ul>
          </section>

          <div className="py-6 bg-pink-50 border-t border-pink-100">
            <h3 className="text-lg font-semibold text-pink-600 mb-2 px-4">
              Scoring Summary 📝
            </h3>
            <div className="text-gray-700 px-4">
              Total possible score: 100 points
              <br />• Level 1: 3 words × 10 points = 30 points
              <br />• Level 2: 3 words × 10 points = 30 points
              <br />• Level 3: 4 words × 10 points = 40 points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 