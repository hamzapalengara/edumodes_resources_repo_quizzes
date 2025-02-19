import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/cozy_home.png';

const HomeTips: React.FC = () => {
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
                  Tips for Learning Home Words
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
                      <span>Listen carefully to the ending sounds of each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Notice how words in each group sound similar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Practice saying the words slowly to hear each sound</span>
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
                      <span>Remember the patterns: -ook, -ood, and -est</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Think about what the word means in your home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Use the hint button if you need help</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">4.</span>
                      <span>If you make a mistake, use the backspace button to try again</span>
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
                      <span>Walk around your home and find things that match these words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create a story using these home-related words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Draw pictures of the words and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Make a word wall in your room with these words</span>
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
                      <span>Point out these words during daily activities at home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create a cozy reading corner to practice reading</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Use meal times to practice food-related words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Make learning fun by turning it into a home scavenger hunt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
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

export default HomeTips; 