import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LEVELS = [
  {
    level: 1,
    words: [
      { word: 'LION', image: '🦁', scrambled: 'NOLI', hint: 'King of the jungle' },
      { word: 'BEAR', image: '🐻', scrambled: 'ABRE', hint: 'Loves honey' },
      { word: 'WOLF', image: '🐺', scrambled: 'FOWL', hint: 'Howls at the moon' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'TIGER', image: '🐯', scrambled: 'GRITE', hint: 'Has stripes' },
      { word: 'SNAKE', image: '🐍', scrambled: 'KEANS', hint: 'Slithers around' },
      { word: 'EAGLE', image: '🦅', scrambled: 'GEALE', hint: 'King of the sky' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'ZEBRA', image: '🦓', scrambled: 'BRAZE', hint: 'Has black and white stripes' },
      { word: 'HIPPO', image: '🦛', scrambled: 'POHIP', hint: 'Lives in the water' },
      { word: 'RHINO', image: '🦏', scrambled: 'NIRHO', hint: 'Has a horn' },
      { word: 'PANDA', image: '🐼', scrambled: 'NADAP', hint: 'Eats bamboo' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <WorksheetHeader />
      
      <div className="p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-green-800 mb-6">Answer Key: Jungle Word Safari</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Level Solutions</h2>
            <div className="space-y-6">
              {LEVELS.map((level, levelIndex) => (
                <div key={levelIndex} className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-600 mb-3">
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
                                  className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border-2 border-green-200"
                                >
                                  <span className="text-lg font-bold text-green-600">{letter}</span>
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
                                  <span className="text-lg font-bold text-green-600">{letter}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            Hint: {word.hint}
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
            <h2 className="text-xl font-semibold text-green-700 mb-4">Learning Points</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🌿</span>
                <span>Each animal has a picture and a helpful hint</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🎯</span>
                <span>Each correct word earns 10 points (100 points total possible)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">📈</span>
                <span>Words get longer and more challenging in later levels</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-green-700 mb-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🦁</span>
                <span>Help children connect animals to their habitats and characteristics</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🎓</span>
                <span>Practice sounding out letters to build phonemic awareness</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">🌟</span>
                <span>Use these animals as starting points for nature discussions</span>
              </li>
            </ul>
          </section>

          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Scoring Summary 📝
            </h3>
            <p className="text-gray-700">
              Total possible score: 100 points
              <br />• Level 1: 3 words × 10 points = 30 points
              <br />• Level 2: 3 words × 10 points = 30 points
              <br />• Level 3: 4 words × 10 points = 40 points
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordUnscrambleAnswerKey; 