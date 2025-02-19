import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/playtime.jpg';

const RHYME_GROUPS = [
  {
    pattern: '-all',
    words: ['BALL', 'CALL', 'FALL'],
    example: 'These words rhyme because they all end with the "all" sound.',
    hints: [
      'Used for playing',
      'Calling friends to play',
      'Can happen while playing'
    ]
  },
  {
    pattern: '-ame',
    words: ['GAME', 'NAME', 'SAME'],
    example: 'These words rhyme because they all end with the "ame" sound.',
    hints: [
      'Fun activities',
      'Calling a friend\'s name',
      'Matching toys or games'
    ]
  },
  {
    pattern: '-ike',
    words: ['BIKE', 'HIKE', 'LIKE'],
    example: 'These words rhyme because they all end with the "ike" sound.',
    hints: [
      'Riding outside',
      'Walking outdoors',
      'Enjoying playtime'
    ]
  }
];

const PlaytimeAnswerKey: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F9FF] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="relative z-10">
        <WorksheetHeader />
        
        <TouchContainer>
          <div className="px-0 md:px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-8">
                  Playtime Words - Answer Key
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {RHYME_GROUPS.map((group, index) => (
                    <div 
                      key={index}
                      className="bg-blue-50/80 rounded-xl p-6 border border-blue-200"
                    >
                      <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📝</span>
                        {group.pattern} Pattern
                      </h2>
                      
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                          {group.words.map((word, idx) => (
                            <div 
                              key={idx}
                              className="bg-white/80 px-4 py-2 rounded-lg border border-blue-200"
                            >
                              <span className="text-xl font-bold text-blue-700">{word}</span>
                              <span className="text-blue-600 text-sm ml-2">- {group.hints[idx]}</span>
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-blue-600">
                          {group.example}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-blue-50/80 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">💡</span>
                    Learning Tips
                  </h2>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>All words in this set have four letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Words that share the same ending pattern rhyme together</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Practice saying the words out loud to hear the rhyming sounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Look for these word patterns in other words you know</span>
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

export default PlaytimeAnswerKey; 