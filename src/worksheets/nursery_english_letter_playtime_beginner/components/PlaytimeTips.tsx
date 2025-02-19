import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/playtime.jpg';

const PlaytimeTips: React.FC = () => {
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
                  Tips for Learning Playtime Words
                </h1>

                {/* Listening Tips */}
                <div className="bg-blue-50/80 rounded-xl p-6 border border-blue-200 mb-6">
                  <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎧</span>
                    Listening Tips
                  </h2>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">1.</span>
                      <span>Click the speaker icon to hear each word clearly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Pay attention to how each word ends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Try saying the word slowly to hear each sound</span>
                    </li>
                  </ul>
                </div>

                {/* Spelling Strategies */}
                <div className="bg-blue-50/80 rounded-xl p-6 border border-blue-200 mb-6">
                  <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">✍️</span>
                    Spelling Strategies
                  </h2>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">1.</span>
                      <span>Look for the rhyming pattern (e.g., -all, -ame, -ike)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Remember that rhyming words end with the same letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Count the letters - all words have four letters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">4.</span>
                      <span>Use the backspace button if you make a mistake</span>
                    </li>
                  </ul>
                </div>

                {/* Fun Activities */}
                <div className="bg-blue-50/80 rounded-xl p-6 border border-blue-200 mb-6">
                  <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Fun Learning Activities
                  </h2>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Play "I Spy" with objects that match the word patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Make up silly rhyming sentences with the words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Draw pictures of the words and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create a rhyming word wall with sticky notes</span>
                    </li>
                  </ul>
                </div>

                {/* Tips for Parents and Teachers */}
                <div className="bg-blue-50/80 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    Tips for Parents and Teachers
                  </h2>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Help children identify rhyming patterns during playtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create rhyming games with toys and everyday objects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Encourage children to make up their own rhyming words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Use movement and actions to reinforce word meanings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Celebrate progress and maintain a fun learning environment</span>
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

export default PlaytimeTips; 