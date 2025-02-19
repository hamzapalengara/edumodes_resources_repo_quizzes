import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/cozy-reading.jpg';

const RHYME_GROUPS = [
  {
    pattern: '-ap',
    words: [
      { word: 'CAP', hint: 'A bottle cap', emoji: '🍶' },
      { word: 'TAP', hint: 'Water tap', emoji: '🚰' },
      { word: 'LAP', hint: 'Where we keep a plate while eating', emoji: '🍽️' }
    ],
    example: 'These words rhyme because they all end with the "ap" sound.'
  },
  {
    pattern: '-ot',
    words: [
      { word: 'POT', hint: 'Cooking pot', emoji: '🥘' },
      { word: 'HOT', hint: 'Hot food', emoji: '🔥' },
      { word: 'DOT', hint: 'Chocolate chip or candy dot', emoji: '🍫' }
    ],
    example: 'These words rhyme because they all end with the "ot" sound.'
  },
  {
    pattern: '-un',
    words: [
      { word: 'BUN', hint: 'Bread bun', emoji: '🥖' },
      { word: 'FUN', hint: 'Having fun eating', emoji: '😊' },
      { word: 'SUN', hint: 'Helps fruits grow', emoji: '☀️' }
    ],
    example: 'These words rhyme because they all end with the "un" sound.'
  }
];

const CozyRhymingAnswerKey: React.FC = () => {
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
                  Cozy Rhyming Words - Answer Key
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
                      <span>Think about the meaning of each word while spelling it</span>
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

export default CozyRhymingAnswerKey; 