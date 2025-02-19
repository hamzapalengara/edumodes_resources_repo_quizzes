import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Orange',
  'Pink',
  'Purple',
  'Black',
  'White',
  'Brown'
];

const ColorWordSoundTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Learning Colors
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span>🎧</span> Listening Tips
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">1.</span>
                      <span>Listen carefully to each color word before choosing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">2.</span>
                      <span>Click the speaker button multiple times if needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">3.</span>
                      <span>Try to say the color name yourself after hearing it</span>
                    </li>
                  </ul>
                </section>

                {/* Color Recognition Section */}
                <section className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span>🎨</span> Colors to Practice
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {WORD_LIST.map((color, index) => (
                      <div 
                        key={index}
                        className={`p-3 rounded flex items-center justify-center font-medium
                          ${color === 'Red' ? 'bg-red-500 text-white' :
                            color === 'Blue' ? 'bg-blue-500 text-white' :
                            color === 'Green' ? 'bg-green-500 text-white' :
                            color === 'Yellow' ? 'bg-yellow-400 text-gray-800' :
                            color === 'Orange' ? 'bg-orange-500 text-white' :
                            color === 'Pink' ? 'bg-pink-500 text-white' :
                            color === 'Purple' ? 'bg-purple-500 text-white' :
                            color === 'Black' ? 'bg-gray-900 text-white' :
                            color === 'White' ? 'bg-gray-100 text-gray-800 border border-gray-300' :
                            'bg-amber-800 text-white' // Brown
                          }`}
                      >
                        {color}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Game Strategy Section */}
                <section className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span>🎯</span> Game Strategy
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">1.</span>
                      <span>Start with basic colors like Red, Blue, and Green</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">2.</span>
                      <span>Look at all options before making your choice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">3.</span>
                      <span>Remember that each color has its own unique look</span>
                    </li>
                  </ul>
                </section>

                {/* Fun Learning Activities */}
                <section className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span>🌟</span> Fun Learning Activities
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Find objects of different colors in your home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Draw and color pictures using different colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Play "I Spy" with colors in your environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Sort toys or objects by their colors</span>
                    </li>
                  </ul>
                </section>

                {/* Tips for Parents and Teachers */}
                <section className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    <span>👥</span> Tips for Parents and Teachers
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Point out colors in everyday situations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Use art activities to reinforce color recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Make connections between colors and familiar objects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
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

export default ColorWordSoundTips; 