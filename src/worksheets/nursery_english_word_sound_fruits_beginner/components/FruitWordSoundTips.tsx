import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  'Apple',
  'Banana',
  'Mango',
  'Orange',
  'Grapes',
  'Pineapple',
  'Watermelon',
  'Strawberry',
  'Papaya',
  'Cherry'
];

const FruitWordSoundTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Fruit Word Sound Game
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h2 className="text-xl font-bold text-orange-700 mb-3 flex items-center gap-2">
                    <span>🎧</span> Listening Tips
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">1.</span>
                      <span>Listen carefully to each fruit name before choosing an answer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">2.</span>
                      <span>Click the speaker button multiple times if you need to hear it again</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">3.</span>
                      <span>Try to say the fruit name yourself after hearing it</span>
                    </li>
                  </ul>
                </section>

                {/* Word Recognition Section */}
                <section className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h2 className="text-xl font-bold text-orange-700 mb-3 flex items-center gap-2">
                    <span>📝</span> Fruit Words to Practice
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {WORD_LIST.map((word, index) => (
                      <div 
                        key={index}
                        className="bg-white p-3 rounded border border-orange-200 flex items-center justify-center"
                      >
                        <span className="text-orange-600 font-medium">{word}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Game Strategy Section */}
                <section className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h2 className="text-xl font-bold text-orange-700 mb-3 flex items-center gap-2">
                    <span>🎯</span> Game Strategy
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">1.</span>
                      <span>Start with common fruits like "Apple" and "Banana"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">2.</span>
                      <span>Look at all three options before making your choice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">3.</span>
                      <span>Take your time - there's no rush to answer!</span>
                    </li>
                  </ul>
                </section>

                {/* Fun Learning Activities */}
                <section className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h2 className="text-xl font-bold text-orange-700 mb-3 flex items-center gap-2">
                    <span>🌟</span> Fun Learning Activities
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Visit a fruit market and identify different fruits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Draw and color pictures of your favorite fruits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Create a fruit salad and name each fruit as you add it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Play "I Spy" with fruits in your kitchen</span>
                    </li>
                  </ul>
                </section>

                {/* Tips for Parents and Teachers */}
                <section className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h2 className="text-xl font-bold text-orange-700 mb-3 flex items-center gap-2">
                    <span>👥</span> Tips for Parents and Teachers
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Use real fruits when possible to make learning more engaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Encourage children to describe the colors and shapes of fruits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Make connections between fruits and healthy eating habits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>Practice the words during snack time or meals</span>
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

export default FruitWordSoundTips; 