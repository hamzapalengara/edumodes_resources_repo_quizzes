import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/rhyme.jpg';

const RHYME_GROUPS = [
  {
    pattern: '-at',
    words: ['CAT', 'BAT', 'RAT'],
    example: 'These words rhyme because they all end with the "at" sound.'
  },
  {
    pattern: '-an',
    words: ['MAN', 'CAN', 'FAN'],
    example: 'These words rhyme because they all end with the "an" sound.'
  },
  {
    pattern: '-ig',
    words: ['PIG', 'BIG', 'DIG'],
    example: 'These words rhyme because they all end with the "ig" sound.'
  },
  {
    pattern: '-og',
    words: ['DOG', 'LOG', 'FOG'],
    example: 'These words rhyme because they all end with the "og" sound.'
  }
];

const RhymingAnswerKey: React.FC = () => {
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
                  Rhyming Words - Answer Key
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <div className="flex flex-wrap gap-4">
                          {group.words.map((word, idx) => (
                            <div 
                              key={idx}
                              className="bg-[#4B5563]/50 px-4 py-2 rounded-lg border border-[#6B7280]"
                            >
                              <span className="text-xl font-bold text-gray-200">{word}</span>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-gray-300">
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
                      <span>Words that rhyme have the same ending sound</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Practice saying the words out loud to hear the rhyming patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Look for patterns in the spelling of rhyming words</span>
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

export default RhymingAnswerKey; 