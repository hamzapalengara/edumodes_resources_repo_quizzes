import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const SpeakingDoctorTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      <WorksheetHeader />
      
      <div className="px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mb-6 border-2 border-cyan-200">
          <h1 className="text-2xl font-bold text-cyan-700 mb-6">
            🏥 Tips for Speaking with the Doctor
          </h1>

          {/* Speaking Tips */}
          <div className="space-y-6">
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                <span className="text-2xl mr-2">🗣️</span>
                Speaking Clearly
              </h2>
              <ul className="space-y-2 text-cyan-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Speak slowly and clearly
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Take deep breaths before speaking
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Use complete sentences
                </li>
              </ul>
            </div>

            {/* Describing Symptoms */}
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                <span className="text-2xl mr-2">🤒</span>
                Describing How You Feel
              </h2>
              <ul className="space-y-2 text-cyan-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Tell exactly where it hurts
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Say when the pain started
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Describe if it's sharp or dull pain
                </li>
              </ul>
            </div>

            {/* Following Instructions */}
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                <span className="text-2xl mr-2">👂</span>
                Listening to the Doctor
              </h2>
              <ul className="space-y-2 text-cyan-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Listen carefully to instructions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Ask questions if you don't understand
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Repeat instructions to make sure you understand
                </li>
              </ul>
            </div>

            {/* Practice Tips */}
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                <span className="text-2xl mr-2">✨</span>
                Practice Tips
              </h2>
              <ul className="space-y-2 text-cyan-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Practice each response multiple times
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Listen to the doctor's voice and try to match their pace
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Use the edit button to fix any mistakes in your response
                </li>
              </ul>
            </div>

            {/* Voice Commands */}
            <div className="bg-cyan-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-cyan-700 mb-2 flex items-center">
                <span className="text-2xl mr-2">🎤</span>
                Using the Voice Feature
              </h2>
              <ul className="space-y-2 text-cyan-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Click the microphone button to start speaking
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Wait for the red recording indicator
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Speak clearly into your device's microphone
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingDoctorTips; 