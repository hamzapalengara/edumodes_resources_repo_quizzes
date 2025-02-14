import React from 'react';
import WorksheetHeader from '../../../components/shared/layout/Header/WorksheetHeader';

const FirstLetterTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-100">
      <WorksheetHeader />
      
      <div className="w-full px-0 md:px-4 max-w-4xl mx-auto py-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Tips for Learning Vehicle First Letters
          </h2>

          {/* Learning Strategies */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                1. Listen Carefully
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Close your eyes and focus on the sound of the word</li>
                <li>Try to isolate the first sound you hear</li>
                <li>Repeat the word slowly, emphasizing the first sound</li>
                <li>Practice making the sound by itself</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                2. Visual Connection
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Look for the letter shape in the road signs</li>
                <li>Notice how the letter looks different in uppercase and lowercase</li>
                <li>Try to spot these letters in other words you see</li>
                <li>Draw the letter in the air while saying its sound</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">
                3. Memory Tricks
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Connect the letter to the vehicle: "B is big like a Bus"</li>
                <li>Make the letter sound while pretending to drive the vehicle</li>
                <li>Create a story about the vehicle that emphasizes its first letter</li>
                <li>Look for the vehicles in your daily life and practice their first letters</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                4. Practice Activities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Play "I Spy" with vehicles and their first letters</li>
                <li>Sort toy vehicles by their first letter</li>
                <li>Make vehicle sounds that start with the same letter</li>
                <li>Draw vehicles and label them with their first letter</li>
              </ul>
            </div>
          </div>

          {/* Additional Tips */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-blue-800 mb-2">Remember:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Take breaks if needed - learning should be fun!</li>
              <li>Celebrate small victories and progress</li>
              <li>Practice regularly but keep sessions short</li>
              <li>Use real-world examples whenever possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLetterTips; 