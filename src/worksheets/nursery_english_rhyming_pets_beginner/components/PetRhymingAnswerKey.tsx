import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/gentle-pet.jpg';

const RHYME_GROUPS = [
  {
    pattern: '-et',
    words: [
      { word: 'PET', hint: 'Animals in nature', emoji: '🐾' },
      { word: 'NET', hint: 'Used to catch fish', emoji: '🎣' },
      { word: 'JET', hint: 'Flies in the sky', emoji: '✈️' }
    ],
    example: 'These words rhyme because they all end with the "et" sound.'
  },
  {
    pattern: '-in',
    words: [
      { word: 'BIN', hint: 'Used to keep nature clean', emoji: '🗑️' },
      { word: 'PIN', hint: 'Small sharp object', emoji: '📌' },
      { word: 'TIN', hint: 'Used for storing food', emoji: '🥫' }
    ],
    example: 'These words rhyme because they all end with the "in" sound.'
  },
  {
    pattern: '-ug',
    words: [
      { word: 'BUG', hint: 'Insects in nature', emoji: '🐛' },
      { word: 'MUG', hint: 'Used for drinking water', emoji: '☕' },
      { word: 'JUG', hint: 'Used to store water', emoji: '🏺' }
    ],
    example: 'These words rhyme because they all end with the "ug" sound.'
  }
];

const PetRhymingAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1F2937] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="relative z-10">
        <WorksheetHeader />
        
        <TouchContainer>
          <div className="px-0 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#374151]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4B5563]">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-200 text-center mb-8">
                  Gentle Pet Friends - Answer Key
                </h1>

                <div className="grid grid-cols-1 gap-6">
                  {RHYME_GROUPS.map((group, index) => (
                    <div 
                      key={index}
                      className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563]"
                    >
                      <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📝</span>
                        {group.pattern} Pattern
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {group.words.map((word, idx) => (
                            <div 
                              key={idx}
                              className="bg-[#4B5563]/50 p-4 rounded-lg border border-[#6B7280]"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xl font-bold text-gray-200">{word.word}</span>
                                <span className="text-2xl">{word.emoji}</span>
                              </div>
                              <p className="text-gray-400 text-sm">
                                {word.hint}
                              </p>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-gray-300 italic">
                          {group.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    Learning Tips
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Listen carefully to the ending sound of each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Notice how words that rhyme share the same ending letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Practice saying the words out loud to hear the rhyming patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Think about how each word relates to nature and pets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TouchContainer>
      </div>
    </div>
  );
};

export default PetRhymingAnswerKey; 