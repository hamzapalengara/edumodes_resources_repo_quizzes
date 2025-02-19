import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/colors.jpg';

const ColorTips: React.FC = () => {
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
                  Tips for Learning Color Words
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
                      <span>Listen carefully to each color word's pronunciation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Notice how many syllables each color word has</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Say the word out loud while looking at its color</span>
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
                      <span>Start with shorter words (three letters) before moving to longer ones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Count the letters in each color word before spelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Look for patterns in similar color words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">4.</span>
                      <span>Use the visual color box to help remember the spelling</span>
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
                      <span>Go on a color hunt around your home or classroom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Draw pictures using each color and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create a color word wall with examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Play "I Spy" using color words</span>
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
                      <span>Group words by length to make learning more structured</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Use real objects to demonstrate each color</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Practice color words during daily activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create color-themed art projects with labels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Celebrate progress and maintain a colorful learning environment</span>
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

export default ColorTips; 