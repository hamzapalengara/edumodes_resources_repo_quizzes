import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/cozy-reading.jpg';

const CozyRhymingTips: React.FC = () => {
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
                  Tips for Learning Rhyming Words
                </h1>

                {/* Listening Tips */}
                <div className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563] mb-6">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎧</span>
                    Listening Tips
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">1.</span>
                      <span>Click the speaker icon and listen carefully to each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">2.</span>
                      <span>Pay attention to the ending sound pattern</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">3.</span>
                      <span>Try saying the word slowly to hear each sound clearly</span>
                    </li>
                  </ul>
                </div>

                {/* Rhyming Patterns */}
                <div className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563] mb-6">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎵</span>
                    Rhyming Patterns
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#4B5563]/50 p-4 rounded-lg border border-[#6B7280]">
                      <h3 className="text-lg font-bold text-gray-200 mb-2">-ap words</h3>
                      <p className="text-gray-400">CAP, TAP, LAP</p>
                    </div>
                    <div className="bg-[#4B5563]/50 p-4 rounded-lg border border-[#6B7280]">
                      <h3 className="text-lg font-bold text-gray-200 mb-2">-ot words</h3>
                      <p className="text-gray-400">POT, HOT, DOT</p>
                    </div>
                    <div className="bg-[#4B5563]/50 p-4 rounded-lg border border-[#6B7280]">
                      <h3 className="text-lg font-bold text-gray-200 mb-2">-un words</h3>
                      <p className="text-gray-400">BUN, FUN, SUN</p>
                    </div>
                  </div>
                </div>

                {/* Spelling Strategies */}
                <div className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563] mb-6">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✍️</span>
                    Spelling Strategies
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">1.</span>
                      <span>Look for the rhyming pattern at the end of each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">2.</span>
                      <span>Remember that rhyming words end with the same letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">3.</span>
                      <span>Use the hint button if you need help remembering the word</span>
                    </li>
                  </ul>
                </div>

                {/* Fun Practice Ideas */}
                <div className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563] mb-6">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Fun Practice Ideas
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Make up silly rhyming sentences with the words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Draw pictures to go with each rhyming word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Create a rhyming word scavenger hunt at home</span>
                    </li>
                  </ul>
                </div>

                {/* Tips for Parents and Teachers */}
                <div className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563]">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    Tips for Parents and Teachers
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Create a cozy reading corner for practice time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Use everyday objects to teach rhyming words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Make learning fun with rhyming games and stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Celebrate each success with positive encouragement</span>
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

export default CozyRhymingTips; 