import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/colors.jpg';

const COLOR_GROUPS = [
  {
    title: 'Three-Letter Colors',
    words: [
      { word: 'RED', hint: 'Color of a stop sign', color: '#EF4444' },
      { word: 'TAN', hint: 'Light brown sand color', color: '#D4B89C' }
    ]
  },
  {
    title: 'Four-Letter Colors',
    words: [
      { word: 'BLUE', hint: 'Color of the sky', color: '#3B82F6' },
      { word: 'PINK', hint: 'Light red color', color: '#EC4899' },
      { word: 'GRAY', hint: 'Between black and white', color: '#6B7280' },
      { word: 'GOLD', hint: 'Precious yellow metal', color: '#F59E0B' }
    ]
  },
  {
    title: 'Five-Letter Colors',
    words: [
      { word: 'BLACK', hint: 'Darkest color', color: '#111827' },
      { word: 'WHITE', hint: 'Color of snow', color: '#FFFFFF' },
      { word: 'GREEN', hint: 'Color of grass', color: '#22C55E' },
      { word: 'BROWN', hint: 'Color of chocolate', color: '#92400E' }
    ]
  }
];

const ColorAnswerKey: React.FC = () => {
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
                  Color Words - Answer Key
                </h1>

                <div className="space-y-8">
                  {COLOR_GROUPS.map((group, index) => (
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
                            <div 
                              className="w-12 h-12 rounded-lg shadow-inner"
                              style={{ backgroundColor: word.color }}
                            />
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
                      <span>Colors are grouped by word length for easier learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Each color has a visual example and a helpful hint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Practice writing each color word while looking at its color</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Look for these colors in your environment</span>
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

export default ColorAnswerKey; 