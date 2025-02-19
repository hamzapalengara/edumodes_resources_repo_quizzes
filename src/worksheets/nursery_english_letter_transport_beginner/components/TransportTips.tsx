import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';
import TouchContainer from '../../../components/shared/layout/Container/TouchContainer';
import backgroundImage from '../assets/transport.jpg';

const TransportTips: React.FC = () => {
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
                  Tips for Learning Transport Words
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
                      <span>Listen carefully to each word's pronunciation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Notice how many syllables each word has</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Say the word out loud while thinking about the vehicle or path</span>
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
                      <span>Most words have four letters (BIKE, SHIP, TAXI, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">2.</span>
                      <span>Count the letters in each word before spelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">3.</span>
                      <span>Look for common patterns in similar words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">4.</span>
                      <span>Use the hint button if you need help remembering a word</span>
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
                      <span>Go on a transportation word hunt in your neighborhood</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Draw pictures of different vehicles and label them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create a map with transport words and symbols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Play "I Spy" with different types of transportation</span>
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
                      <span>Point out different types of transportation during daily activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Use toy vehicles to make learning more engaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Create a transportation-themed reading corner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Make a collage of different vehicles and paths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <span>Celebrate progress with transportation-themed rewards</span>
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

export default TransportTips; 