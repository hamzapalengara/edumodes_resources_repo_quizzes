import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';

const WORD_LIST = [
  'Toy',
  'Ball',
  'Doll',
  'Car',
  'Train',
  'Blocks',
  'Teddy',
  'Puzzle',
  'Robot',
  'Kite'
];

const ToysWordSoundTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F7]">
      <WorksheetHeader />
      
      <TouchContainer>
        <div className="px-0 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-[#F687B3] overflow-hidden">
              <div className="bg-gradient-to-r from-[#F687B3] to-[#D53F8C] p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
                  Tips for Learning Toy Words
                </h1>
              </div>

              <div className="p-4 md:p-6 space-y-6">
                {/* Listening Tips Section */}
                <section className="bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]">
                  <h2 className="text-xl font-bold text-[#D53F8C] mb-3">
                    Listening Tips 👂
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">1.</span>
                      <span>Listen carefully to how each toy word sounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">2.</span>
                      <span>Try to say the word yourself after hearing it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">3.</span>
                      <span>Notice if the word is short (Car) or long (Puzzle)</span>
                    </li>
                  </ul>
                </section>

                {/* Word Recognition Section */}
                <section className="bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]">
                  <h2 className="text-xl font-bold text-[#D53F8C] mb-3">
                    Word Recognition 📖
                  </h2>
                  <div className="space-y-3">
                    <p className="text-[#D53F8C]">Practice these toy words:</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {WORD_LIST.map((word, index) => (
                        <div 
                          key={index}
                          className="bg-white p-3 rounded border border-[#F687B3] flex items-center justify-center"
                        >
                          <span className="text-[#D53F8C] font-medium">{word}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Game Strategy Section */}
                <section className="bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]">
                  <h2 className="text-xl font-bold text-[#D53F8C] mb-3">
                    Game Strategy 🎯
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">1.</span>
                      <span>Start with words you know well, like "Ball" or "Car"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">2.</span>
                      <span>Look at the first letter of each word to help remember it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">3.</span>
                      <span>Think about toys you have at home as you play</span>
                    </li>
                  </ul>
                </section>

                {/* Fun Learning Activities */}
                <section className="bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]">
                  <h2 className="text-xl font-bold text-[#D53F8C] mb-3">
                    Fun Learning Activities ✨
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Point to and name your toys at home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Draw pictures of your favorite toys and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Play "I Spy" with toy words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Make up silly sentences using toy words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Sort your toys by their first letter sound</span>
                    </li>
                  </ul>
                </section>

                {/* Parent/Teacher Tips */}
                <section className="bg-[#FFF5F7] rounded-lg p-4 border border-[#F687B3]">
                  <h2 className="text-xl font-bold text-[#D53F8C] mb-3">
                    Tips for Parents and Teachers 👥
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Encourage children to say the words clearly and slowly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Use real toys to demonstrate the words when possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Practice the words during playtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F687B3] font-bold">•</span>
                      <span>Create simple sentences using the toy words</span>
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

export default ToysWordSoundTips; 