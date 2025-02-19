import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  { word: 'BED', hint: 'Where we sleep', icon: '🛏️' },
  { word: 'FAN', hint: 'Keeps us cool', icon: '🌀' },
  { word: 'CUP', hint: 'We drink from it', icon: '☕' },
  { word: 'MAT', hint: 'We wipe our feet on it', icon: '🏡' },
  { word: 'PAN', hint: 'We cook in it', icon: '🍳' },
  { word: 'POT', hint: 'Plants grow in it', icon: '🪴' },
  { word: 'BOX', hint: 'Stores things', icon: '📦' },
  { word: 'BIN', hint: 'Put trash in it', icon: '🗑️' }
];

const HomeDictationAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1F2937]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#374151] rounded-2xl overflow-hidden border border-[#4B5563]">
              <div className="bg-[#4B5563] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-200 text-center">
                  Home Words - Answer Key
                </h1>
              </div>

              <div className="p-4 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {WORD_LIST.map(({ word, hint, icon }, index) => (
                    <div 
                      key={index}
                      className="bg-[#2D3748] rounded-xl p-4 border border-[#4B5563]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-3xl">{icon}</div>
                        <div className="text-2xl font-bold text-gray-200">{word}</div>
                      </div>
                      
                      <div className="mt-2">
                        <h3 className="font-semibold text-gray-300">Hint:</h3>
                        <p className="text-gray-400">{hint}</p>
                      </div>
                      
                      <div className="mt-3">
                        <h3 className="font-semibold text-gray-300">Letter Breakdown:</h3>
                        <div className="flex gap-2 mt-1">
                          {word.split('').map((letter, i) => (
                            <div 
                              key={i}
                              className="w-8 h-8 flex items-center justify-center bg-[#374151] rounded-lg border border-[#4B5563] font-bold text-gray-200"
                            >
                              {letter}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#2D3748] rounded-xl p-4 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-3 flex items-center gap-2">
                    <span>💡</span> Learning Points
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">All words are three letters long</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Each word represents a common item found in homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span className="text-gray-300">Practice saying each word slowly to hear all the sounds</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TouchContainer>
    </div>
  );
};

export default HomeDictationAnswerKey; 