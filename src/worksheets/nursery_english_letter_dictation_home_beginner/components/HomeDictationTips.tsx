import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  { word: 'BED', hint: 'Where we sleep' },
  { word: 'FAN', hint: 'Keeps us cool' },
  { word: 'CUP', hint: 'We drink from it' },
  { word: 'MAT', hint: 'We wipe our feet on it' },
  { word: 'PAN', hint: 'We cook in it' },
  { word: 'POT', hint: 'Plants grow in it' },
  { word: 'BOX', hint: 'Stores things' },
  { word: 'BIN', hint: 'Put trash in it' }
];

const HomeDictationTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1F2937]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#374151] rounded-2xl overflow-hidden border border-[#4B5563]">
              <div className="bg-[#4B5563] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-200 text-center">
                  Tips for Letter Dictation Game
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-[#2D3748] rounded-xl p-4 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-2">
                    <span>🎧</span> Listening Tips
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">1.</span>
                      <span className="text-gray-300">Listen carefully to each word before starting to spell</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">2.</span>
                      <span className="text-gray-300">Click the speaker button multiple times if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">3.</span>
                      <span className="text-gray-300">Try to say the word slowly to hear each sound</span>
                    </li>
                  </ul>
                </section>

                {/* Word List Section */}
                <section className="bg-[#2D3748] rounded-xl p-4 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-2">
                    <span>📝</span> Home Words to Practice
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WORD_LIST.map(({ word, hint }, index) => (
                      <div 
                        key={index}
                        className="bg-[#374151] p-3 rounded-lg border border-[#4B5563] flex items-center justify-between"
                      >
                        <div>
                          <span className="font-bold text-gray-200">{word}</span>
                          <span className="text-gray-400 text-sm ml-2">- {hint}</span>
                        </div>
                        <div className="text-2xl">
                          {word === 'BED' ? '🛏️' :
                           word === 'FAN' ? '🌀' :
                           word === 'CUP' ? '☕' :
                           word === 'MAT' ? '🏡' :
                           word === 'PAN' ? '🍳' :
                           word === 'POT' ? '🪴' :
                           word === 'BOX' ? '📦' :
                           '🗑️' // BIN
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Spelling Strategy Section */}
                <section className="bg-[#2D3748] rounded-xl p-4 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-2">
                    <span>🎯</span> Spelling Strategy
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">1.</span>
                      <span className="text-gray-300">Break the word into sounds (e.g., B-E-D)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">2.</span>
                      <span className="text-gray-300">Look for the first letter you hear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">3.</span>
                      <span className="text-gray-300">Use the backspace button if you make a mistake</span>
                    </li>
                  </ul>
                </section>

                {/* Fun Learning Activities */}
                <section className="bg-[#2D3748] rounded-xl p-4 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-2">
                    <span>🌟</span> Fun Learning Activities
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Walk around your home and name items you see</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Practice writing these words with magnetic letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Make labels for items around your home</span>
                    </li>
                  </ul>
                </section>

                {/* Tips for Parents and Teachers */}
                <section className="bg-[#2D3748] rounded-xl p-4 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-2">
                    <span>👥</span> Tips for Parents and Teachers
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Help children identify the sounds in each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Encourage them to say the word slowly while spelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Celebrate progress and maintain a positive learning environment</span>
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