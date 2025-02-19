import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/rhyme.jpg';

const RhymingTips: React.FC = () => {
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
                      <span>Click the speaker icon to hear each word clearly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">2.</span>
                      <span>Pay attention to the ending sound of each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">3.</span>
                      <span>Try saying the word slowly to identify each sound</span>
                    </li>
                  </ul>
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
                      <span>Look for the rhyming pattern (e.g., -at, -an, -ig, -og)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">2.</span>
                      <span>Remember that rhyming words end with the same letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">3.</span>
                      <span>Use the backspace button if you make a mistake</span>
                    </li>
                  </ul>
                </div>

                {/* Practice Activities */}
                <div className="bg-[#2D3748]/80 rounded-xl p-6 border border-[#4B5563] mb-6">
                  <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Practice Activities
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Say rhyming words out loud to hear the patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Make up your own rhyming words with the same patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Practice writing rhyming words in a notebook</span>
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
                      <span>Help children identify rhyming patterns in everyday words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Play rhyming word games during daily activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Encourage children to create their own rhyming pairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>Celebrate progress and maintain a positive learning environment</span>
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

export default RhymingTips; 