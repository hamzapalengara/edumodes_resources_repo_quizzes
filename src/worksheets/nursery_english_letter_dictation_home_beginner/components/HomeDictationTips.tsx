import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  { word: 'BED', hint: 'Where we sleep' },
  { word: 'FAN', hint: 'Keeps us cool' },
  { word: 'CUP', hint: 'We drink from it' },
  { word: 'MAT', hint: 'We wipe our feet on it' },
  { word: 'RUG', hint: 'Covers the floor' },
  { word: 'PAN', hint: 'We cook in it' },
  { word: 'POT', hint: 'Plants grow in it' },
  { word: 'BOX', hint: 'Stores things' },
  { word: 'BIN', hint: 'Put trash in it' },
  { word: 'TAP', hint: 'Water comes from it' }
];

const HomeDictationTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Letter Dictation Game
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span>🎧</span> Listening Tips
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">1.</span>
                      <span>Listen carefully to each word before starting to spell</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">2.</span>
                      <span>Click the speaker button multiple times if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">3.</span>
                      <span>Try to say the word slowly to hear each sound</span>
                    </li>
                  </ul>
                </section>

                {/* Word List Section */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span>📝</span> Home Words to Practice
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WORD_LIST.map(({ word, hint }, index) => (
                      <div 
                        key={index}
                        className="bg-white p-3 rounded border border-amber-200 flex items-center justify-between"
                      >
                        <div>
                          <span className="font-bold text-amber-700">{word}</span>
                          <span className="text-amber-600 text-sm ml-2">- {hint}</span>
                        </div>
                        <div className="text-2xl">
                          {word === 'BED' ? '🛏️' :
                           word === 'FAN' ? '🌀' :
                           word === 'CUP' ? '☕' :
                           word === 'MAT' ? '🏠' :
                           word === 'RUG' ? '🏠' :
                           word === 'PAN' ? '🍳' :
                           word === 'POT' ? '🪴' :
                           word === 'BOX' ? '📦' :
                           word === 'BIN' ? '🗑️' :
                           '🚰' // TAP
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Spelling Strategy Section */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span>🎯</span> Spelling Strategy
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">1.</span>
                      <span>Break the word into sounds (e.g., B-E-D)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">2.</span>
                      <span>Look for the first letter you hear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">3.</span>
                      <span>Use the backspace button if you make a mistake</span>
                    </li>
                  </ul>
                </section>

                {/* Fun Learning Activities */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span>🌟</span> Fun Learning Activities
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Walk around your home and name items you see</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Practice writing these words with magnetic letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Make labels for items around your home</span>
                    </li>
                  </ul>
                </section>

                {/* Tips for Parents and Teachers */}
                <section className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <span>👥</span> Tips for Parents and Teachers
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Help children identify the sounds in each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Encourage them to say the word slowly while spelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Celebrate progress and maintain a positive learning environment</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default HomeDictationTips; 