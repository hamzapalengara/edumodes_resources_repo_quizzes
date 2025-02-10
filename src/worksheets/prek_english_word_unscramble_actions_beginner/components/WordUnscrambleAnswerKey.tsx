import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const LEVELS = [
  {
    level: 1,
    words: [
      { word: 'RUN', image: '🏃', scrambled: 'NUR', hint: 'Move fast with your legs' },
      { word: 'JUMP', image: '⬆️', scrambled: 'PMUJ', hint: 'Go up in the air' },
      { word: 'WALK', image: '🚶', scrambled: 'LAKW', hint: 'Move slowly on your feet' }
    ]
  },
  {
    level: 2,
    words: [
      { word: 'DANCE', image: '💃', scrambled: 'CNADE', hint: 'Move to music' },
      { word: 'SLEEP', image: '😴', scrambled: 'ELPSE', hint: 'Rest with eyes closed' },
      { word: 'SMILE', image: '😊', scrambled: 'LIMES', hint: 'Show happiness on your face' }
    ]
  },
  {
    level: 3,
    words: [
      { word: 'LAUGH', image: '😂', scrambled: 'GLAUH', hint: 'Make happy sounds' },
      { word: 'WRITE', image: '✍️', scrambled: 'TIRWE', hint: 'Make letters with a pen' },
      { word: 'CLAP', image: '👏', scrambled: 'PLAC', hint: 'Hit hands together' },
      { word: 'SING', image: '🎤', scrambled: 'GNSI', hint: 'Make music with your voice' }
    ]
  }
];

const WordUnscrambleAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <WorksheetHeader />
      
      <div className="py-4">
        <div className="bg-white shadow-md border-y-2 border-blue-100">
          <h1 className="text-2xl font-bold text-blue-600 py-4 text-center border-b border-blue-100">
            Answer Key: Action Words Fun
          </h1>
          
          <section className="py-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4 px-4">Level Solutions</h2>
            <div className="space-y-4">
              {LEVELS.map((level, levelIndex) => (
                <div key={levelIndex} className="bg-blue-50 py-4 border-y border-blue-100">
                  <h3 className="font-semibold text-blue-600 mb-3 px-4">
                    Level {level.level} ({level.words.length * 10} points)
                  </h3>
                  <div className="space-y-4">
                    {level.words.map((word, wordIndex) => (
                      <div key={wordIndex} className="py-3 border-b border-blue-100 last:border-b-0">
                        <div className="flex items-center gap-2 px-4 overflow-x-auto">
                          <div className="text-4xl flex-shrink-0">{word.image}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 pb-2">
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
                                    className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg shadow-sm border-2 border-blue-300"
                                  >
                                    <span className="text-sm font-bold text-blue-600">{letter}</span>
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

          <section className="py-6 border-t border-blue-100">
            <h2 className="text-xl font-semibold text-blue-600 mb-4 px-4">Learning Points</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎯</span>
                <span>Each action has a picture and a helpful hint</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎮</span>
                <span>Each correct word earns 10 points (100 points total possible)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📈</span>
                <span>Words get longer and more challenging in later levels</span>
              </li>
            </ul>
          </section>

          <section className="py-6 border-t border-blue-100">
            <h2 className="text-xl font-semibold text-blue-600 mb-4 px-4">Notes for Parents and Teachers</h2>
            <ul className="space-y-3 px-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎭</span>
                <span>Encourage acting out the actions while learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎓</span>
                <span>Practice sounding out letters to build phonemic awareness</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🌟</span>
                <span>Use these actions in simple sentences for extra practice</span>
              </li>
            </ul>
          </section>

          <div className="py-6 bg-blue-50 border-t border-blue-100">
            <h3 className="text-lg font-semibold text-blue-600 mb-2 px-4">
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