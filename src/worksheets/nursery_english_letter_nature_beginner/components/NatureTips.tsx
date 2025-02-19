import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/nature_tree.jpg';

const NatureTips: React.FC = () => {
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
                  Tips for Learning Nature Words
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
                      <span>Listen for the rhyming sounds at the end of each word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Pay attention to how words in each group sound similar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Try saying the words while exploring outdoors</span>
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
                      <span>Remember the patterns: -ree, -ain, and -ind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Think about what each word means in nature</span>
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
                      <span>Go on a nature walk and spot things that match these words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create a story about a day in nature using these words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Draw pictures of nature scenes and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Make a nature word wall with pictures and labels</span>
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
                      <span>Take learning outdoors when possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Use nature walks as opportunities to practice words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create nature-themed word games and activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Encourage observation and connection with nature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Celebrate learning achievements in a natural setting</span>
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

export default NatureTips; 