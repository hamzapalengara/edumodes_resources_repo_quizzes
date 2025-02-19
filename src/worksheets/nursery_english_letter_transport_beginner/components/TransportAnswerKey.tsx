import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/transport.jpg';

const WORD_GROUPS = [
  {
    title: 'Four-Letter Words',
    words: [
      { word: 'BIKE', hint: 'Two wheels, pedal power' },
      { word: 'SHIP', hint: 'Large boat on the ocean' },
      { word: 'TAXI', hint: 'Yellow car for hire' },
      { word: 'BOAT', hint: 'Floats on water' },
      { word: 'JEEP', hint: 'Off-road vehicle' },
      { word: 'TRAM', hint: 'City rail transport' },
      { word: 'ROAD', hint: 'Cars drive here' },
      { word: 'RAIL', hint: 'Train tracks' }
    ]
  },
  {
    title: 'Five-Letter Words',
    words: [
      { word: 'WHEEL', hint: 'Helps vehicles move' },
      { word: 'PATH', hint: 'Walking route' }
    ]
  }
];

const TransportAnswerKey: React.FC = () => {
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
                  Transport Words - Answer Key
                </h1>

                <div className="space-y-8">
                  {WORD_GROUPS.map((group, index) => (
                    <div 
                      key={index}
                      className="bg-blue-50/80 rounded-xl p-6 border border-blue-200"
                    >
                      <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                        <span className="text-2xl">📝</span>
                        {group.title}
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {group.words.map((word, idx) => (
                          <div 
                            key={idx}
                            className="bg-white/80 p-4 rounded-lg border border-blue-200 flex items-center gap-4"
                          >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                              {word.word.length === 4 ? '4️⃣' : '5️⃣'}
                            </div>
                            <div>
                              <span className="text-xl font-bold text-blue-700">{word.word}</span>
                              <p className="text-blue-600 text-sm">{word.hint}</p>
                            </div>
                          </div>
                        ))}
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
                      <span>Words are grouped by length for easier learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Each word has a helpful hint about its meaning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Practice writing each word while thinking about what it means</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Look for these words when you're traveling or moving around</span>
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

export default TransportAnswerKey; 